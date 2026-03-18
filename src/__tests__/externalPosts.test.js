import { describe, it, expect } from 'vitest';
import { externalPosts } from '../data/externalPosts.js';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const VALID_SOURCES = new Set(['authress', 'devto']);

describe('externalPosts data integrity', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(externalPosts)).toBe(true);
    expect(externalPosts.length).toBeGreaterThan(0);
  });

  it('all entries have required fields', () => {
    for (const post of externalPosts) {
      expect(typeof post.title, `title missing on ${post.url}`).toBe('string');
      expect(post.title.length, `title empty on ${post.url}`).toBeGreaterThan(0);

      expect(typeof post.url, `url missing on "${post.title}"`).toBe('string');
      expect(post.url.length, `url empty on "${post.title}"`).toBeGreaterThan(0);

      expect(typeof post.date, `date missing on "${post.title}"`).toBe('string');
      expect(typeof post.description, `description missing on "${post.title}"`).toBe('string');
      expect(post.description.length, `description empty on "${post.title}"`).toBeGreaterThan(0);

      expect(Array.isArray(post.tags), `tags missing or not array on "${post.title}"`).toBe(true);
    }
  });

  it('all dates are in ISO YYYY-MM-DD format', () => {
    for (const post of externalPosts) {
      expect(post.date, `"${post.title}" has invalid date "${post.date}"`).toMatch(ISO_DATE);
    }
  });

  it('all sources are valid values', () => {
    for (const post of externalPosts) {
      expect(VALID_SOURCES.has(post.source), `"${post.title}" has unknown source "${post.source}"`).toBe(true);
    }
  });

  it('all URLs are absolute HTTPS URLs', () => {
    for (const post of externalPosts) {
      expect(post.url, `"${post.title}" URL is not absolute HTTPS`).toMatch(/^https:\/\//);
    }
  });

  it('no duplicate URLs', () => {
    const urls = externalPosts.map(p => p.url);
    const duplicates = urls.filter((url, i) => urls.indexOf(url) !== i);
    expect(duplicates, `duplicate URLs found: ${duplicates.join(', ')}`).toHaveLength(0);
  });

  it('posts are sorted newest-first', () => {
    for (let i = 1; i < externalPosts.length; i++) {
      expect(
        externalPosts[i - 1].date >= externalPosts[i].date,
        `"${externalPosts[i - 1].title}" (${externalPosts[i - 1].date}) should come before "${externalPosts[i].title}" (${externalPosts[i].date})`,
      ).toBe(true);
    }
  });
});
