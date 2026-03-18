import { describe, it, expect } from 'vitest';

// The date parsing and slug derivation logic from posts.js extracted as pure functions
// so they can be tested without import.meta.glob (a Vite-only runtime feature).
const DATE_PREFIX = /^(\d{4}-\d{2}-\d{2})-/;

function parsePostDir(dirName) {
  const match = dirName.match(DATE_PREFIX);
  if (!match) { return null; }
  return {
    date: match[1],
    slug: dirName.replace(DATE_PREFIX, ''),
  };
}

describe('post directory name parsing', () => {
  it('parses a standard YYYY-MM-DD-slug directory', () => {
    const result = parsePostDir('2025-03-18-meeting-impossible-slas');
    expect(result).toEqual({ date: '2025-03-18', slug: 'meeting-impossible-slas' });
  });

  it('parses directories with numeric slugs', () => {
    const result = parsePostDir('2024-01-01-my-2024-review');
    expect(result).toEqual({ date: '2024-01-01', slug: 'my-2024-review' });
  });

  it('returns null for directories without a date prefix', () => {
    expect(parsePostDir('no-date-here')).toBeNull();
    expect(parsePostDir('meeting-impossible-slas')).toBeNull();
    expect(parsePostDir('')).toBeNull();
  });

  it('returns null for partial date prefixes', () => {
    expect(parsePostDir('2025-03-slug')).toBeNull(); // missing day
    expect(parsePostDir('2025-slug')).toBeNull(); // missing month + day
  });

  it('handles single-word slugs after date', () => {
    const result = parsePostDir('2023-07-11-authentication');
    expect(result).toEqual({ date: '2023-07-11', slug: 'authentication' });
  });

  it('produces slugs with no leading hyphens', () => {
    const result = parsePostDir('2025-01-15-my-post');
    expect(result.slug).not.toMatch(/^-/);
  });
});

describe('post date sorting', () => {
  it('sorts posts newest-first by date string comparison', () => {
    const posts = [
      { slug: 'a', date: '2023-01-01' },
      { slug: 'b', date: '2025-06-01' },
      { slug: 'c', date: '2024-12-31' },
    ];
    const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
    expect(sorted.map(p => p.slug)).toEqual(['b', 'c', 'a']);
  });

  it('localeCompare on ISO dates correctly orders same-year posts', () => {
    const dates = ['2025-01-01', '2025-12-31', '2025-06-15'];
    const sorted = [...dates].sort((a, b) => b.localeCompare(a));
    expect(sorted).toEqual(['2025-12-31', '2025-06-15', '2025-01-01']);
  });
});
