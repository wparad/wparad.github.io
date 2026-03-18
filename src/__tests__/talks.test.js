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
    const requiredKeys = ['slug', 'title', 'conference', 'location', 'year', 'eventUrl', 'articleUrl', 'canonicalUrl', 'videoUrl', 'videoTitle', 'description'];
    for (const talk of talks) {
      for (const key of requiredKeys) {
        expect(key in talk, `key "${key}" missing on "${talk.slug}"`).toBe(true);
      }
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

  it('year is a number or null', () => {
    for (const talk of talks) {
      if (talk.year !== null) {
        expect(typeof talk.year, `year on "${talk.slug}" should be number or null`).toBe('number');
        expect(talk.year).toBeGreaterThan(2000);
        expect(talk.year).toBeLessThan(2100);
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

describe('featuredTalks', () => {
  it('only includes talks with a videoUrl', () => {
    for (const talk of featuredTalks) {
      expect(talk.videoUrl, `"${talk.slug}" in featuredTalks has no videoUrl`).toBeTruthy();
    }
  });

  it('all talks with videoUrl appear in featuredTalks', () => {
    const featuredSlugs = new Set(featuredTalks.map(t => t.slug));
    for (const talk of talks) {
      if (talk.videoUrl) {
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
