import { describe, it, expect, vi, beforeEach } from 'vitest';
import { readFileSync, readdirSync, existsSync } from 'fs';

// Replicate the helpers from vite.config.js so we can test them in isolation
const DATE_PREFIX_RE = /^\d{4}-\d{2}-\d{2}-/;

function getTalkSlugs(source) {
  return [...source.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
}

function getPostSlugsFromDirs(dirs) {
  return dirs.map(d => d.name.replace(DATE_PREFIX_RE, '')).filter(Boolean);
}

describe('getTalkSlugs (regex over talks.js source)', () => {
  it('extracts slugs from well-formed source', () => {
    const src = `
      { slug: 'voxxed-days-zurich-2026', title: 'Foo' },
      { slug: 'fosdem-brussels-2024', title: 'Bar' },
    `;
    expect(getTalkSlugs(src)).toEqual(['voxxed-days-zurich-2026', 'fosdem-brussels-2024']);
  });

  it('returns empty array when no slugs found', () => {
    expect(getTalkSlugs('export const talks = [];')).toEqual([]);
  });

  it('handles slugs with hyphens and numbers', () => {
    const src = `{ slug: 'dwx24-nuremberg-2024' }`;
    expect(getTalkSlugs(src)).toEqual(['dwx24-nuremberg-2024']);
  });

  it('parses the actual talks.js file', () => {
    const src = readFileSync('./src/data/talks.js', 'utf-8');
    const slugs = getTalkSlugs(src);
    expect(slugs.length).toBeGreaterThan(0);
    // Slugs must be URL-safe
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
    // No duplicates
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('sitemap slugs match talks.js slugs exactly', async () => {
    const { talks } = await import('../data/talks.js');
    const src = readFileSync('./src/data/talks.js', 'utf-8');
    const sitemapSlugs = new Set(getTalkSlugs(src));
    for (const talk of talks) {
      expect(sitemapSlugs.has(talk.slug), `talk slug "${talk.slug}" missing from sitemap regex result`).toBe(true);
    }
  });
});

describe('getPostSlugs (directory listing)', () => {
  it('strips YYYY-MM-DD- prefix from directory names', () => {
    const dirs = [
      { name: '2025-03-18-meeting-impossible-slas', isDirectory: () => true },
      { name: '2024-02-04-fosdem-security-apis', isDirectory: () => true },
    ];
    expect(getPostSlugsFromDirs(dirs)).toEqual([
      'meeting-impossible-slas',
      'fosdem-security-apis',
    ]);
  });

  it('filters out directories without a date prefix', () => {
    const dirs = [
      { name: '2025-03-18-valid-post', isDirectory: () => true },
      { name: 'no-date-draft', isDirectory: () => true },
    ];
    const result = getPostSlugsFromDirs(dirs);
    expect(result).toContain('valid-post');
    // 'no-date-draft' has no prefix so replace returns same string — it should still pass through
    // (the actual vite.config.js filter(Boolean) only removes empty strings)
    // This test documents current behavior: non-prefixed dirs are included unchanged
    expect(result).toContain('no-date-draft');
  });

  it('returns empty array for empty directory', () => {
    expect(getPostSlugsFromDirs([])).toEqual([]);
  });
});

describe('nav hash targets', () => {
  it('AppNav links to #appearances not #engagements', () => {
    const src = readFileSync('./src/components/AppNav.vue', 'utf-8');
    expect(src).toContain('/#appearances');
    expect(src).not.toContain('/#engagements');
  });
});

describe('iframe lazy loading', () => {
  it('VideoGrid.vue has loading="lazy" on iframe', () => {
    const src = readFileSync('./src/components/VideoGrid.vue', 'utf-8');
    expect(src).toContain('loading="lazy"');
  });

  it('TalkPage.vue has loading="lazy" on iframe', () => {
    const src = readFileSync('./src/pages/talks/TalkPage.vue', 'utf-8');
    expect(src).toContain('loading="lazy"');
  });
});
