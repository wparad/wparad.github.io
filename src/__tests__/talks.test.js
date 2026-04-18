import { describe, it, expect } from 'vitest';
import { talks, featuredTalks, youtubeEmbedUrl } from '../data/talks.js';

describe('talks data integrity', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(talks)).toBe(true);
    expect(talks.length).toBeGreaterThan(0);
  });

  it('all talks have required string fields', () => {
    for (const talk of talks) {
      expect(typeof talk.slug, `slug missing on "${talk.title}"`).toBe('string');
      expect(talk.slug.length, `slug empty on "${talk.title}"`).toBeGreaterThan(0);
      expect(typeof talk.title, `title missing on slug "${talk.slug}"`).toBe('string');
      expect(talk.title.length, `title empty on slug "${talk.slug}"`).toBeGreaterThan(0);
      expect(typeof talk.description, `description missing on "${talk.slug}"`).toBe('string');
      expect(talk.description.length, `description empty on "${talk.slug}"`).toBeGreaterThan(0);
    }
  });

  it('all talks have the expected shape (no missing keys)', () => {
    const requiredKeys = ['slug', 'type', 'title', 'conference', 'location', 'date', 'eventUrl', 'articleUrl', 'canonicalUrl', 'videoUrl', 'videoTitle', 'description'];
    for (const talk of talks) {
      for (const key of requiredKeys) {
        expect(Object.hasOwn(talk, key), `key "${key}" missing on "${talk.slug}"`).toBe(true);
      }
    }
  });

  it('type is either "talk" or "podcast"', () => {
    for (const talk of talks) {
      expect(['talk', 'podcast'], `invalid type on "${talk.slug}"`).toContain(talk.type);
    }
  });

  it('slugs are unique', () => {
    const slugs = talks.map(t => t.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it('slugs are URL-safe (no spaces or special characters)', () => {
    for (const talk of talks) {
      expect(talk.slug, `slug "${talk.slug}" contains invalid characters`).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('date is an ISO 8601 string or null', () => {
    const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
    for (const talk of talks) {
      if (talk.date !== null) {
        expect(typeof talk.date, `date on "${talk.slug}" should be string or null`).toBe('string');
        expect(talk.date, `date on "${talk.slug}" must be YYYY-MM-DD`).toMatch(ISO_DATE);
        const year = Number(talk.date.slice(0, 4));
        expect(year).toBeGreaterThan(2000);
        expect(year).toBeLessThan(2100);
      }
    }
  });

  it('nullable fields are string or null, never undefined', () => {
    const nullableFields = ['eventUrl', 'articleUrl', 'canonicalUrl', 'videoUrl', 'videoTitle'];
    for (const talk of talks) {
      for (const field of nullableFields) {
        const val = talk[field];
        expect(val === null || typeof val === 'string', `"${field}" on "${talk.slug}" must be string or null, got ${typeof val}`).toBe(true);
      }
    }
  });
});

describe('talks ordering', () => {
  it('talks are sorted newest-first by date', () => {
    for (let i = 1; i < talks.length; i++) {
      const prev = talks[i - 1].date ?? '';
      const curr = talks[i].date ?? '';
      expect(prev >= curr, `"${talks[i - 1].slug}" (${prev}) should come before "${talks[i].slug}" (${curr})`).toBe(true);
    }
  });
});

describe('featuredTalks', () => {
  it('only includes talks (not podcasts) with a videoUrl', () => {
    for (const talk of featuredTalks) {
      expect(talk.videoUrl, `"${talk.slug}" in featuredTalks has no videoUrl`).toBeTruthy();
      expect(talk.type, `"${talk.slug}" is a podcast but appears in featuredTalks`).toBe('talk');
    }
  });

  it('all talks of type "talk" with videoUrl appear in featuredTalks', () => {
    const featuredSlugs = new Set(featuredTalks.map(t => t.slug));
    for (const talk of talks) {
      if (talk.type === 'talk' && talk.videoUrl) {
        expect(featuredSlugs.has(talk.slug), `"${talk.slug}" has videoUrl but is not in featuredTalks`).toBe(true);
      }
    }
  });

  it('includes embedUrl derived from videoUrl', () => {
    for (const talk of featuredTalks) {
      expect(talk.embedUrl, `"${talk.slug}" is missing embedUrl`).toBeTruthy();
      expect(talk.embedUrl).toContain('youtube.com/embed/');
    }
  });
});

describe('youtubeEmbedUrl', () => {
  it('returns null for null input', () => {
    expect(youtubeEmbedUrl(null)).toBeNull();
  });

  it('returns null for non-YouTube URLs', () => {
    expect(youtubeEmbedUrl('https://vimeo.com/123456')).toBeNull();
  });

  it('parses standard watch URLs', () => {
    expect(youtubeEmbedUrl('https://www.youtube.com/watch?v=xLjxbX0hbPo'))
      .toBe('https://www.youtube.com/embed/xLjxbX0hbPo');
  });

  it('parses short youtu.be URLs', () => {
    expect(youtubeEmbedUrl('https://youtu.be/exSYwiVKK88'))
      .toBe('https://www.youtube.com/embed/exSYwiVKK88');
  });

  it('parses youtu.be URLs with timestamps', () => {
    // Timestamp (?t=3627) should be ignored — embed URL never includes it
    expect(youtubeEmbedUrl('https://youtu.be/8_-QiLzNM7w?t=3627'))
      .toBe('https://www.youtube.com/embed/8_-QiLzNM7w');
  });

  it('handles video IDs with hyphens and underscores', () => {
    expect(youtubeEmbedUrl('https://youtu.be/8_-QiLzNM7w'))
      .toBe('https://www.youtube.com/embed/8_-QiLzNM7w');
  });
});
