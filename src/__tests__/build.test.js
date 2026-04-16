import { readFile, readdir, access } from 'fs/promises';
import { resolve, join, relative } from 'path';
import { load as cheerioLoad } from 'cheerio';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import yaml from 'js-yaml';
import { describe, it, expect, beforeAll } from 'vitest';
import { talks } from '../data/talks.js';

const DIST = resolve(process.cwd(), 'dist');
const SITE_URL = 'https://warrenparad.net';

// Custom theme colors defined in src/styles/main.css
const THEME_COLORS = {
  accent:    '#4e9af1',
  bg:        '#0f1117',
  surface:   '#1a1f2e',
  'surface-2': '#242938',
  border:    '#2d3348',
  text:      '#e8eaf0',
  muted:     '#8b94b0',
  teal:      '#3E6077',
};

// ─── helpers ────────────────────────────────────────────────────────────────

async function readText(rel) {
  return readFile(join(DIST, rel), 'utf-8');
}

async function fileExists(rel) {
  try { await access(join(DIST, rel)); return true; } catch { return false; }
}

function $(html) {
  return cheerioLoad(html);
}

function jsonLdObjects(html) {
  const doc = $(html);
  return doc('script[type="application/ld+json"]').toArray()
    .map(el => { try { return JSON.parse(doc(el).html()); } catch { return null; } })
    .filter(Boolean);
}

/** Map a root-relative href to a dist/ file path that should exist. */
function hrefToDistFile(href) {
  if (!href || href.startsWith('http') || href.startsWith('mailto')) return null;
  const path = href.split('#')[0]; // strip hash fragment
  if (!path || path === '/') return 'index.html';
  const clean = path.replace(/^\//, '');
  // Routes ending in known extensions are file paths
  if (clean.match(/\.(xml|txt|html|json|ico|jpg|png|svg)$/)) return clean;
  // SPA routes → flat html files or index.html inside directory
  return clean + '.html';
}

/** Extract YouTube video ID from youtu.be or youtube.com URL. */
function youtubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=))([A-Za-z0-9_-]+)/);
  return m?.[1] ?? null;
}

/** Return all vite-ssg rendered .html files in dist/ as root-relative paths. */
async function getAllHtmlFiles() {
  const results = [];
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith(':')) continue; // skip :pathMatch(.*)*.html
      const full = join(dir, e.name);
      if (e.isDirectory()) {
        await walk(full);
      } else if (e.name.endsWith('.html')) {
        const content = await readFile(full, 'utf-8');
        if (content.includes('data-server-rendered="true"')) {
          results.push(relative(DIST, full));
        }
      }
    }
  }
  await walk(DIST);
  return results;
}

/** Get post slugs from built dist/articles/ directory. */
async function getPostSlugs() {
  const files = await readdir(join(DIST, 'articles'));
  return files.filter(f => f.endsWith('.html')).map(f => f.replace(/\.html$/, ''));
}

/** Parse YAML frontmatter from a markdown string. Returns { data, body }. */
function parseFrontmatter(md) {
  const match = md.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error('No YAML frontmatter found');
  return { data: yaml.load(match[1]), body: match[2] };
}

// ─── file structure ──────────────────────────────────────────────────────────

describe('dist/ required files', () => {
  const required = [
    'index.html', 'fractional.html', 'resume.html', 'articles.html',
    'for-llms.html', '404.html', 'sitemap.xml', 'rss.xml', 'llms.txt', 'robots.txt', 'CNAME',
  ];
  for (const f of required) {
    it(`${f} exists`, async () => { expect(await fileExists(f)).toBe(true); });
  }

  it('all talk slugs have a rendered HTML file', async () => {
    for (const talk of talks) {
      expect(await fileExists(`talks/${talk.slug}.html`), `missing talks/${talk.slug}.html`).toBe(true);
    }
  });

  it('compiled JS bundle exists in assets/', async () => {
    const files = await readdir(join(DIST, 'assets'));
    expect(files.some(f => f.endsWith('.js'))).toBe(true);
  });

  it('compiled CSS bundle exists in assets/', async () => {
    const files = await readdir(join(DIST, 'assets'));
    expect(files.some(f => f.endsWith('.css'))).toBe(true);
  });

  it('at least one article HTML file exists', async () => {
    expect((await getPostSlugs()).length).toBeGreaterThan(0);
  });

  it('each article HTML file has a matching raw .md file', async () => {
    for (const slug of await getPostSlugs()) {
      expect(await fileExists(`articles/${slug}.md`), `missing articles/${slug}.md`).toBe(true);
    }
  });

  it('favicon exists', async () => {
    expect(await fileExists('images/icons/favicon.ico')).toBe(true);
  });
});

// ─── CSS semantic validity ───────────────────────────────────────────────────

describe('compiled CSS', () => {
  let css;
  beforeAll(async () => {
    const files = await readdir(join(DIST, 'assets'));
    css = await readFile(join(DIST, 'assets', files.find(f => f.endsWith('.css'))), 'utf-8');
  });

  it('defines all theme color variables', () => {
    for (const [name, hex] of Object.entries(THEME_COLORS)) {
      expect(css, `missing --color-${name} definition`).toContain(`--color-${name}`);
      expect(css, `missing color value ${hex} for --color-${name}`).toContain(hex.toLowerCase());
    }
  });

  it('has custom xs breakpoint at 35.4375rem (carousel collapse)', () => {
    expect(css).toContain('35.4375rem');
  });

  it('has sm: responsive utility classes', () => {
    expect(css).toContain('.sm\\:block');
    expect(css).toContain('.sm\\:hidden');
    expect(css).toContain('.sm\\:inline-flex');
  });

  it('has md: responsive utility classes', () => {
    expect(css).toMatch(/\.md\\:[a-z]/);
  });

  it('has lg: responsive utility classes', () => {
    expect(css).toMatch(/\.lg\\:[a-z]/);
  });

  it('has .nav-link styles with router-link-active state', () => {
    expect(css).toContain('.nav-link');
    expect(css).toContain('router-link-active');
  });

  it('has .prose styles for article content', () => {
    expect(css).toContain('.prose');
  });

  it('has permalink anchor styles for markdown heading permalinks', () => {
    expect(css).toContain('aria-label=permalink');
  });

  it('has .shiki styles for syntax-highlighted code blocks', () => {
    expect(css).toContain('.shiki');
  });

  it('has Vue scoped component styles', () => {
    expect(css).toMatch(/\[data-v-[a-f0-9]+\]/);
  });

  it('defines page transition animations', () => {
    expect(css).toContain('.page-enter-active');
    expect(css).toContain('.page-leave-active');
  });

  it('references Inter font family', () => {
    expect(css).toContain('Inter');
  });

  it('has display:flex utility', () => {
    expect(css).toMatch(/display\s*:\s*flex/);
  });

  it('has display:grid utility', () => {
    expect(css).toMatch(/display\s*:\s*grid/);
  });

  it('uses color variables (not hardcoded hex) for theme-aware classes', () => {
    // bg-bg should use var(--color-bg), not hardcode the hex
    expect(css).toContain('var(--color-bg)');
    expect(css).toContain('var(--color-accent)');
    expect(css).toContain('var(--color-text)');
    expect(css).toContain('var(--color-muted)');
    expect(css).toContain('var(--color-border)');
  });

  it('has admonition styles for :::info and :::warn containers', () => {
    expect(css).toContain('.admonition');
  });
});

// ─── every HTML page: shared structural invariants ───────────────────────────

describe('all HTML pages: shared invariants', () => {
  let htmlFiles;
  beforeAll(async () => { htmlFiles = await getAllHtmlFiles(); });

  it('finds at least 19 rendered HTML files', async () => {
    expect(htmlFiles.length).toBeGreaterThanOrEqual(19);
  });

  // Iterate and test each file
  const checks = [
    ['is server-rendered by vite-ssg', html => expect(html).toContain('data-server-rendered="true"')],
    ['has UTF-8 charset', html => expect(html.toLowerCase()).toContain('charset="utf-8"')],
    ['has viewport meta tag', html => expect(html).toContain('name="viewport"')],
    ['links to compiled CSS bundle', html => expect(html).toMatch(/href="\/assets\/[^"]+\.css"/)],
    ['links to compiled JS bundle', html => expect(html).toMatch(/src="\/assets\/[^"]+\.js"/)],
    ['has footer with copyright', html => expect(html).toContain('© Warren Parad')],
    ['nav has Appearances link to /#appearances', html => expect(html).toContain('href="/#appearances"')],
    ['nav has Articles link', html => expect(html).toContain('href="/articles"')],
    ['nav has Resume link', html => expect(html).toContain('href="/resume"')],
    ['footer has LinkedIn link', html => expect(html).toContain('linkedin.com/in/warren-parad')],
    ['footer has GitHub link', html => expect(html).toContain('github.com/wparad')],
    ['has RSS alternate link', html => expect(html).toContain('type="application/rss+xml"')],
    ['has LLMs.txt alternate link', html => expect(html).toContain('href="/llms.txt"')],
  ];

  for (const [label, assertion] of checks) {
    it(label, async () => {
      for (const file of htmlFiles) {
        let html;
        try { html = await readText(file); } catch { continue; }
        assertion(html);
      }
    });
  }
});

// ─── internal link resolution ────────────────────────────────────────────────

describe('internal links resolve to real files', () => {
  const navLinks = [
    ['/ (home)', 'index.html'],
    ['/articles (articles index)', 'articles.html'],
    ['/resume', 'resume.html'],
    ['/fractional', 'fractional.html'],
    ['/for-llms', 'for-llms.html'],
    ['/rss.xml', 'rss.xml'],
    ['/llms.txt', 'llms.txt'],
    ['/sitemap.xml', 'sitemap.xml'],
    ['/robots.txt', 'robots.txt'],
  ];
  for (const [href, file] of navLinks) {
    it(`${href} → dist/${file}`, async () => {
      expect(await fileExists(file)).toBe(true);
    });
  }

  it('every /talks/<slug> link on the homepage resolves to a dist file', async () => {
    const html = await readText('index.html');
    const doc = $(html);
    const talkLinks = doc('a[href^="/talks/"]').toArray()
      .map(el => doc(el).attr('href'));
    expect(talkLinks.length).toBeGreaterThan(0);
    for (const href of talkLinks) {
      const file = hrefToDistFile(href);
      expect(await fileExists(file), `link ${href} → dist/${file} missing`).toBe(true);
    }
  });

  it('every /articles/<slug> link on the articles index resolves to a dist file', async () => {
    const html = await readText('articles.html');
    const doc = $(html);
    const articleLinks = doc('a[href^="/articles/"]').toArray()
      .map(el => doc(el).attr('href'))
      .filter(h => !h.endsWith('/articles/'));
    expect(articleLinks.length).toBeGreaterThan(0);
    for (const href of articleLinks) {
      const file = hrefToDistFile(href);
      expect(await fileExists(file), `link ${href} → dist/${file} missing`).toBe(true);
    }
  });

  it('each article canonical URL matches its dist/ file path', async () => {
    for (const slug of await getPostSlugs()) {
      const html = await readText(`articles/${slug}.html`);
      const doc = $(html);
      const canonical = doc('link[rel="canonical"]').attr('href');
      expect(canonical).toBe(`${SITE_URL}/articles/${slug}`);
    }
  });
});

// ─── asset / image resolution ────────────────────────────────────────────────

describe('images and assets resolve to real files', () => {
  it('every /assets/... src attribute in index.html points to an existing file', async () => {
    const html = await readText('index.html');
    const doc = $(html);
    const srcs = doc('[src^="/assets/"]').toArray().map(el => doc(el).attr('src'));
    expect(srcs.length).toBeGreaterThan(0);
    for (const src of srcs) {
      expect(await fileExists(src.replace(/^\//, '')), `asset missing: ${src}`).toBe(true);
    }
  });

  it('every /assets/... src attribute in article pages points to an existing file', async () => {
    for (const slug of await getPostSlugs()) {
      const html = await readText(`articles/${slug}.html`);
      const doc = $(html);
      const srcs = doc('[src^="/assets/"]').toArray().map(el => doc(el).attr('src'));
      for (const src of srcs) {
        expect(await fileExists(src.replace(/^\//, '')), `asset missing: ${src}`).toBe(true);
      }
    }
  });

  it('og:image absolute URL in article pages points to an existing asset', async () => {
    for (const slug of await getPostSlugs()) {
      const html = await readText(`articles/${slug}.html`);
      const doc = $(html);
      const ogImage = doc('meta[property="og:image"]').attr('content');
      expect(ogImage, 'og:image missing').toBeTruthy();
      const rel = ogImage.replace(SITE_URL, '').replace(/^\//, '');
      expect(await fileExists(rel), `og:image asset missing: ${ogImage}`).toBe(true);
    }
  });

  it('profile image in homepage has alt text "Warren Parad"', async () => {
    const html = await readText('index.html');
    const doc = $(html);
    const profile = doc('img[src*="profile"]');
    expect(profile.length).toBeGreaterThan(0);
    expect(profile.first().attr('alt')).toBe('Warren Parad');
  });

  it('all images on homepage have non-empty alt attributes', async () => {
    const html = await readText('index.html');
    const doc = $(html);
    doc('img').toArray().forEach(img => {
      const alt = doc(img).attr('alt');
      expect(alt, `img missing alt: ${doc(img).attr('src')}`).toBeTruthy();
    });
  });

  it('all images on article pages have non-empty alt attributes', async () => {
    for (const slug of await getPostSlugs()) {
      const html = await readText(`articles/${slug}.html`);
      const doc = $(html);
      doc('img').toArray().forEach(img => {
        const alt = doc(img).attr('alt');
        expect(alt, `img missing alt in ${slug}: ${doc(img).attr('src')}`).toBeTruthy();
      });
    }
  });
});

// ─── homepage ────────────────────────────────────────────────────────────────

describe('dist/index.html', () => {
  let html, doc;
  beforeAll(async () => { html = await readText('index.html'); doc = $(html); });

  it('title is "Warren Parad — Authress CTO & Public Speaker"', () => {
    expect(doc('title').text()).toBe('Warren Parad — Authress CTO & Public Speaker');
  });

  it('h1 is "Warren Parad"', () => {
    expect(doc('h1').first().text().trim()).toBe('Warren Parad');
  });

  it('schema.org Person has required fields', () => {
    const person = jsonLdObjects(html).find(o => o['@type'] === 'Person');
    expect(person).toBeTruthy();
    expect(person.name).toBe('Warren Parad');
    expect(person.url).toBe(SITE_URL);
    expect(person.jobTitle).toBe('CTO');
    expect(person.worksFor?.name).toBe('Authress');
    expect(Array.isArray(person.sameAs)).toBe(true);
    expect(person.sameAs.some(u => u.includes('github.com/wparad'))).toBe(true);
  });

  it('schema.org WebSite has correct url and potentialAction SearchAction', () => {
    const site = jsonLdObjects(html).find(o => o['@type'] === 'WebSite');
    expect(site).toBeTruthy();
    expect(site.url).toBe(SITE_URL);
    expect(site.potentialAction?.['@type']).toBe('SearchAction');
  });

  it('RSS link has correct href and title', () => {
    const rss = doc('link[rel="alternate"][type="application/rss+xml"]');
    expect(rss.attr('href')).toBe('/rss.xml');
    expect(rss.attr('title')).toBeTruthy();
  });

  it('LLMs.txt link has correct href', () => {
    expect(doc('link[rel="alternate"][href="/llms.txt"]').length).toBeGreaterThan(0);
  });

  it('Mastodon rel=me link is present for IndieWeb verification', () => {
    const me = doc('link[rel="me"]');
    expect(me.length).toBeGreaterThan(0);
    expect(me.attr('href')).toContain('infosec.exchange/@wparad');
  });

  it('renders all talk entries as links', () => {
    for (const talk of talks) {
      const link = doc(`a[href="/talks/${talk.slug}"]`);
      expect(link.length, `missing link for talk ${talk.slug}`).toBeGreaterThan(0);
    }
  });

  it('each talk link shows the talk title text', () => {
    for (const talk of talks) {
      const link = doc(`a[href="/talks/${talk.slug}"]`);
      expect(link.text().trim()).toContain(talk.title);
    }
  });

  it('renders at least one article link', () => {
    expect(doc('a[href^="/articles/"]').length).toBeGreaterThan(0);
  });

  it('footer has Discord community link', () => {
    expect(doc('footer a[href*="rhosys.ch/community"]').length).toBeGreaterThan(0);
  });
});

// ─── fractional page ─────────────────────────────────────────────────────────

describe('dist/fractional.html', () => {
  let doc;
  beforeAll(async () => { doc = $(await readText('fractional.html')); });

  it('title is "Fractional CTO — Warren Parad"', () => {
    expect(doc('title').text()).toBe('Fractional CTO — Warren Parad');
  });

  it('h1 is "Warren Parad"', () => {
    expect(doc('h1').first().text().trim()).toBe('Warren Parad');
  });

  it('shows monthly retainer price €14k', () => {
    expect(doc('*').text()).toContain('€14k');
  });

  it('shows hourly rate €420', () => {
    expect(doc('*').text()).toContain('€420');
  });

  it('has at least one "Schedule a meeting" link to Google Calendar', () => {
    const links = doc('a[href*="calendar.google.com"]');
    expect(links.length).toBeGreaterThan(0);
    expect(links.first().text()).toContain('Schedule');
  });

  it('has testimonials section', () => {
    expect(doc('#testimonials').length).toBeGreaterThan(0);
  });

  it('renders at least 3 testimonial quotes', () => {
    expect(doc('.speech-bubble').length).toBeGreaterThanOrEqual(3);
  });

  it('has skills/preferences section', () => {
    expect(doc('#skills').length).toBeGreaterThan(0);
  });
});

// ─── articles index ───────────────────────────────────────────────────────────

describe('dist/articles.html', () => {
  let doc;
  beforeAll(async () => { doc = $(await readText('articles.html')); });

  it('title contains "Articles"', () => {
    expect(doc('title').text()).toContain('Articles');
  });

  it('renders links to all post slugs', async () => {
    for (const slug of await getPostSlugs()) {
      expect(doc(`a[href="/articles/${slug}"]`).length, `missing article link: ${slug}`).toBeGreaterThan(0);
    }
  });

  it('has at least one article card with a title', () => {
    expect(doc('a[href^="/articles/"]').length).toBeGreaterThan(0);
  });
});

// ─── article pages ────────────────────────────────────────────────────────────

describe('dist/articles/<slug>.html (all articles)', () => {
  it('every article page has correct SEO meta and content', async () => {
    for (const slug of await getPostSlugs()) {
      const html = await readText(`articles/${slug}.html`);
      const doc = $(html);

      // SSR
      expect(doc('#app').attr('data-server-rendered'), `${slug}: not SSR'd`).toBe('true');

      // Title format: "<headline> — Warren Parad"
      const title = doc('title').text();
      expect(title, `${slug}: bad title format`).toMatch(/^.+ — Warren Parad$/);
      expect(title, `${slug}: title too short`).not.toBe('— Warren Parad');

      // Canonical
      expect(doc('link[rel="canonical"]').attr('href'), `${slug}: wrong canonical`)
        .toBe(`${SITE_URL}/articles/${slug}`);

      // SEO meta
      const desc = doc('meta[name="description"]').attr('content');
      expect(desc, `${slug}: description missing`).toBeTruthy();
      expect(desc.length, `${slug}: description too short`).toBeGreaterThan(20);

      // Open Graph
      const ogTitle = doc('meta[property="og:title"]').attr('content');
      expect(ogTitle, `${slug}: og:title missing`).toBeTruthy();
      expect(ogTitle, `${slug}: og:title should match page title`).toBe(title);

      const ogDesc = doc('meta[property="og:description"]').attr('content');
      expect(ogDesc, `${slug}: og:description missing`).toBeTruthy();
      expect(ogDesc, `${slug}: og:desc should match meta description`).toBe(desc);

      expect(doc('meta[property="og:type"]').attr('content'), `${slug}: og:type`)
        .toBe('article');

      const ogUrl = doc('meta[property="og:url"]').attr('content');
      expect(ogUrl, `${slug}: og:url missing`).toBeTruthy();
      expect(ogUrl, `${slug}: og:url should be SITE_URL/articles/slug`)
        .toBe(`${SITE_URL}/articles/${slug}`);

      const ogImage = doc('meta[property="og:image"]').attr('content');
      expect(ogImage, `${slug}: og:image missing`).toBeTruthy();
      expect(ogImage, `${slug}: og:image must be absolute`).toMatch(/^https?:\/\//);

      expect(doc('meta[property="og:image:alt"]').attr('content'), `${slug}: og:image:alt missing`)
        .toBeTruthy();

      // Twitter
      expect(doc('meta[name="twitter:card"]').attr('content'), `${slug}: twitter:card missing`)
        .toBeTruthy();
      expect(doc('meta[name="twitter:image"]').attr('content'), `${slug}: twitter:image missing`)
        .toBeTruthy();

      // Published time
      const pubTime = doc('meta[name="article:published_time"]').attr('content');
      expect(pubTime, `${slug}: article:published_time missing`).toBeTruthy();
      expect(pubTime, `${slug}: published_time not a date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);

      // JSON-LD Article
      const article = jsonLdObjects(html).find(o =>
        o['@type'] === 'Article' || o['@type'] === 'BlogPosting'
      );
      expect(article, `${slug}: JSON-LD Article missing`).toBeTruthy();
      expect(article.headline, `${slug}: JSON-LD headline missing`).toBeTruthy();
      expect(article.description, `${slug}: JSON-LD description missing`).toBeTruthy();
      expect(article.datePublished, `${slug}: JSON-LD datePublished missing`).toBeTruthy();
      expect(article.author?.name, `${slug}: JSON-LD author name missing`).toBe('Warren Parad');

      // Content
      expect(doc('h1').first().text().trim(), `${slug}: h1 missing`).toBeTruthy();
      expect(doc('pre.shiki').length, `${slug}: no shiki code blocks`).toBeGreaterThan(0);
      expect(doc('a.header-anchor').length, `${slug}: no anchor permalinks`).toBeGreaterThan(0);
      expect(doc('.prose').length, `${slug}: no prose container`).toBeGreaterThan(0);

      // Back link
      expect(doc('a[href="/articles"]').length, `${slug}: no back-to-articles link`).toBeGreaterThan(0);

      // Article tag chips
      expect(doc('.prose').text().length, `${slug}: article body too short`).toBeGreaterThan(500);
    }
  });
});

// ─── talk pages (all) ─────────────────────────────────────────────────────────

describe('dist/talks/<slug>.html (all talks)', () => {
  for (const talk of talks) {
    describe(talk.slug, () => {
      let html, doc;
      beforeAll(async () => {
        html = await readText(`talks/${talk.slug}.html`);
        doc = $(html);
      });

      it('is server-rendered', () => {
        expect(doc('#app').attr('data-server-rendered')).toBe('true');
      });

      it(`title contains "${talk.title}"`, () => {
        expect(doc('title').text()).toContain(talk.title);
      });

      it('h1 is the talk title', () => {
        expect(doc('h1').first().text().trim()).toBe(talk.title);
      });

      it('renders conference and location', () => {
        const text = doc('main').text();
        expect(text).toContain(talk.conference);
        expect(text).toContain(talk.location);
      });

      it('renders the talk description', () => {
        // First sentence of description must appear somewhere
        const firstSentence = talk.description.trim().split(/[.\n]/)[0].trim().slice(0, 40);
        expect(doc('main').text()).toContain(firstSentence);
      });

      it('description is not duplicated (event-mode clamp paragraph absent in SSG output)', () => {
        // SSG renders with isEventMode=false, so the sm:hidden clamped <p> must not be present.
        // If .description-clamp were unlayered scoped CSS it would override sm:hidden and show twice.
        const firstSentence = talk.description.trim().split(/[.\n]/)[0].trim().slice(0, 30);
        const occurrences = (doc('main').html().split(firstSentence) || []).length - 1;
        expect(occurrences).toBe(1);
      });

      it('nav has /#appearances link', () => {
        expect(doc('a[href="/#appearances"]').length).toBeGreaterThan(0);
      });

      if (talk.eventUrl) {
        it('event URL button links to the correct event page', () => {
          expect(doc(`a[href="${talk.eventUrl}"]`).length).toBeGreaterThan(0);
        });
      }

      if (talk.videoUrl) {
        it('has a lazy-loaded iframe with the correct YouTube video ID', () => {
          const iframe = doc('iframe[loading="lazy"]');
          expect(iframe.length).toBeGreaterThan(0);
          const src = iframe.attr('src');
          expect(src).toContain('youtube.com/embed/');
          expect(src).toContain(youtubeId(talk.videoUrl));
        });
      } else {
        it('has no video iframe (no videoUrl)', () => {
          expect(doc('iframe').length).toBe(0);
        });
      }

      if (talk.articleUrl) {
        it('links to the companion article', () => {
          expect(doc(`a[href="${talk.articleUrl}"]`).length).toBeGreaterThan(0);
        });
      }

      if (talk.slidesUrl) {
        it('links to the slides', () => {
          expect(doc(`a[href="${talk.slidesUrl}"]`).length).toBeGreaterThan(0);
        });
      }

      if (talk.canonicalUrl) {
        it('links to canonical article URL', () => {
          expect(doc(`a[href="${talk.canonicalUrl}"]`).length).toBeGreaterThan(0);
        });
      }
    });
  }
});

// ─── sitemap.xml ─────────────────────────────────────────────────────────────

describe('dist/sitemap.xml', () => {
  let xml, parsed;
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

  beforeAll(async () => {
    xml = await readText('sitemap.xml');
    parsed = parser.parse(xml);
  });

  it('is syntactically valid XML', () => {
    const result = XMLValidator.validate(xml);
    expect(result, typeof result === 'object' ? result.err?.msg : '').toBe(true);
  });

  it('has urlset root element with sitemap namespace', () => {
    expect(xml).toContain('<urlset');
    expect(xml).toContain('sitemaps.org/schemas/sitemap');
  });

  it('parses to a urlset with url array', () => {
    expect(parsed.urlset).toBeTruthy();
    const urls = parsed.urlset.url;
    expect(Array.isArray(urls)).toBe(true);
    expect(urls.length).toBeGreaterThan(0);
  });

  it('every url entry has a loc', () => {
    const urls = parsed.urlset.url;
    for (const u of urls) {
      expect(u.loc, 'url missing loc').toBeTruthy();
    }
  });

  it('all locs are absolute HTTPS URLs pointing to warrenparad.net', () => {
    for (const u of parsed.urlset.url) {
      expect(u.loc).toMatch(/^https:\/\/warrenparad\.net\//);
    }
  });

  it('has no duplicate locs', () => {
    const locs = parsed.urlset.url.map(u => u.loc);
    expect(new Set(locs).size).toBe(locs.length);
  });

  it('homepage entry has priority 1.0', () => {
    const home = parsed.urlset.url.find(u => u.loc === `${SITE_URL}/`);
    expect(home).toBeTruthy();
    expect(String(home.priority)).toBe('1');
  });

  it('all priority values are between 0.0 and 1.0', () => {
    for (const u of parsed.urlset.url) {
      if (u.priority != null) {
        expect(Number(u.priority)).toBeGreaterThanOrEqual(0);
        expect(Number(u.priority)).toBeLessThanOrEqual(1);
      }
    }
  });

  const validChangefreqs = new Set(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']);
  it('all changefreq values are valid', () => {
    for (const u of parsed.urlset.url) {
      if (u.changefreq) {
        expect(validChangefreqs.has(u.changefreq), `invalid changefreq: ${u.changefreq}`).toBe(true);
      }
    }
  });

  it('all lastmod values are valid YYYY-MM-DD dates', () => {
    for (const u of parsed.urlset.url) {
      if (u.lastmod) {
        expect(String(u.lastmod)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  it('contains all talk slugs', () => {
    const locs = parsed.urlset.url.map(u => u.loc);
    for (const talk of talks) {
      expect(locs.some(l => l.includes(`/talks/${talk.slug}`)),
        `sitemap missing talk: ${talk.slug}`).toBe(true);
    }
  });

  it('contains all article slugs from dist/', async () => {
    const locs = parsed.urlset.url.map(u => u.loc);
    for (const slug of await getPostSlugs()) {
      expect(locs.some(l => l.includes(`/articles/${slug}`)),
        `sitemap missing article: ${slug}`).toBe(true);
    }
  });

  it('count of talk entries matches talks data', () => {
    const talkLocs = parsed.urlset.url.filter(u => u.loc.includes('/talks/')).length;
    expect(talkLocs).toBe(talks.length);
  });
});

// ─── rss.xml ──────────────────────────────────────────────────────────────────

describe('dist/rss.xml', () => {
  let xml, parsed;
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    isArray: name => ['item', 'category'].includes(name),
  });

  beforeAll(async () => {
    xml = await readText('rss.xml');
    parsed = parser.parse(xml);
  });

  it('is syntactically valid XML', () => {
    const result = XMLValidator.validate(xml);
    expect(result, typeof result === 'object' ? result.err?.msg : '').toBe(true);
  });

  it('root element is rss with version 2.0', () => {
    expect(parsed.rss?.['@_version']).toBe('2.0');
  });

  it('channel has required RSS 2.0 elements: title, link, description', () => {
    const ch = parsed.rss.channel;
    expect(ch.title).toBeTruthy();
    expect(ch.link).toBeTruthy();
    expect(ch.description).toBeTruthy();
  });

  it('channel link is the site root', () => {
    expect(parsed.rss.channel.link).toBe(SITE_URL);
  });

  it('channel has language set to en-us', () => {
    expect(parsed.rss.channel.language).toBe('en-us');
  });

  it('channel has atom:link self-reference', () => {
    expect(xml).toContain('rel="self"');
    expect(xml).toContain('/rss.xml');
  });

  it('has at least one item', () => {
    expect(parsed.rss.channel.item.length).toBeGreaterThan(0);
  });

  it('every item has title, link, guid, pubDate, and description', () => {
    for (const item of parsed.rss.channel.item) {
      expect(item.title, 'item missing title').toBeTruthy();
      expect(item.link, 'item missing link').toBeTruthy();
      expect(item.guid, 'item missing guid').toBeTruthy();
      expect(item.pubDate, 'item missing pubDate').toBeTruthy();
      expect(item.description, 'item missing description').toBeTruthy();
    }
  });

  it('every item link is an absolute HTTPS URL', () => {
    for (const item of parsed.rss.channel.item) {
      expect(item.link).toMatch(/^https:\/\//);
    }
  });

  it('every item guid matches its link (canonical identifier)', () => {
    for (const item of parsed.rss.channel.item) {
      expect(item.guid).toBe(item.link);
    }
  });

  it('every item pubDate is a parseable date', () => {
    for (const item of parsed.rss.channel.item) {
      expect(new Date(item.pubDate).toString()).not.toBe('Invalid Date');
    }
  });

  it('items are ordered newest-first by pubDate', () => {
    const dates = parsed.rss.channel.item.map(i => new Date(i.pubDate).getTime());
    for (let i = 1; i < dates.length; i++) {
      expect(dates[i - 1], 'items not newest-first').toBeGreaterThanOrEqual(dates[i]);
    }
  });

  it('every item for a local article has at least one category tag', () => {
    const localItems = parsed.rss.channel.item.filter(i =>
      i.link.startsWith(SITE_URL)
    );
    for (const item of localItems) {
      const categories = item.category;
      expect(Array.isArray(categories) ? categories.length : categories,
        `${item.link} missing categories`).toBeTruthy();
    }
  });
});

// ─── llms.txt ────────────────────────────────────────────────────────────────

describe('dist/llms.txt', () => {
  let txt;
  beforeAll(async () => { txt = await readText('llms.txt'); });

  const requiredFields = ['name', 'website', 'github', 'linkedin', 'aliases', 'tone', 'audience'];
  for (const field of requiredFields) {
    it(`has ${field}: field`, () => {
      expect(txt).toMatch(new RegExp(`^${field}:`, 'm'));
    });
  }

  it('name is Warren Parad', () => {
    expect(txt).toContain('name: Warren Parad');
  });

  it('website is the correct URL', () => {
    expect(txt).toContain(`website: ${SITE_URL}`);
  });

  it('github points to wparad', () => {
    expect(txt).toContain('github.com/wparad');
  });

  it('linkedin points to warren-parad', () => {
    expect(txt).toContain('linkedin.com/in/warren-parad');
  });

  const requiredSections = [
    '## Articles', '## Talks', '## Links',
    'primary_topics:', 'fractional_cto:', 'expertise_areas:', 'known_for:',
  ];
  for (const section of requiredSections) {
    it(`has section: ${section}`, () => {
      expect(txt).toContain(section);
    });
  }

  it('Articles section contains at least one markdown link', () => {
    const after = txt.slice(txt.indexOf('## Articles'));
    expect(after).toMatch(/\[.+\]\(https?:\/\/.+\.md\)/);
  });

  it('all article links in llms.txt are absolute HTTPS .md URLs', () => {
    const articleSection = txt.slice(txt.indexOf('## Articles'), txt.indexOf('## Talks'));
    const links = [...articleSection.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(m => m[1]);
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toMatch(/^https:\/\//);
      expect(link).toMatch(/\.md$/);
    }
  });

  it('contains all post slugs in Articles section', async () => {
    for (const slug of await getPostSlugs()) {
      expect(txt, `llms.txt missing article: ${slug}`).toContain(slug);
    }
  });

  it('contains all talk slugs in Talks section', () => {
    for (const talk of talks) {
      expect(txt, `llms.txt missing talk: ${talk.slug}`).toContain(talk.slug);
    }
  });

  it('all talk links in Talks section point to SITE_URL/talks/', () => {
    const talkSection = txt.slice(txt.indexOf('## Talks'), txt.indexOf('## Links'));
    const links = [...talkSection.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(m => m[1]);
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toContain(`${SITE_URL}/talks/`);
    }
  });

  it('last_updated contains a valid YYYY-MM-DD date', () => {
    const match = txt.match(/last_updated:\s*(\d{4}-\d{2}-\d{2})/);
    expect(match?.[1]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(new Date(match[1]).toString()).not.toBe('Invalid Date');
  });
});

// ─── article markdown files ───────────────────────────────────────────────────

describe('dist/articles/<slug>.md (raw markdown, all articles)', () => {
  it('every .md file has valid YAML frontmatter with required fields matching its HTML page', async () => {
    for (const slug of await getPostSlugs()) {
      const md = await readText(`articles/${slug}.md`);
      const html = await readText(`articles/${slug}.html`);
      const doc = $(html);

      // Parse frontmatter — throws if YAML is invalid
      const { data, body } = parseFrontmatter(md);

      // title: non-empty and matches the h1 on the rendered page
      expect(data.title, `${slug}: fm title missing`).toBeTruthy();
      expect(doc('h1').first().text().trim(), `${slug}: h1 doesn't match fm title`)
        .toBe(data.title);

      // description: non-empty and matches og:description
      expect(data.description, `${slug}: fm description missing`).toBeTruthy();
      expect(data.description.length, `${slug}: fm description too short`).toBeGreaterThan(20);
      expect(doc('meta[property="og:description"]').attr('content'), `${slug}: og:desc != fm desc`)
        .toBe(data.description);


      // authors: non-empty slug
      expect(data.authors, `${slug}: authors missing`).toBeTruthy();

      // tags: array of non-empty strings
      expect(Array.isArray(data.tags), `${slug}: tags must be array`).toBe(true);
      for (const tag of data.tags) {
        expect(typeof tag === 'string' && tag.length > 0, `${slug}: invalid tag: ${tag}`).toBe(true);
      }

      // image: relative path
      expect(data.image, `${slug}: image missing`).toBeTruthy();
      expect(String(data.image)).toMatch(/^\.\//);

      // image_alt: non-empty
      expect(data.image_alt, `${slug}: image_alt missing`).toBeTruthy();

      // body: substantial markdown content
      expect(body.trim().length, `${slug}: article body too short`).toBeGreaterThan(500);
    }
  });
});

// ─── robots.txt ───────────────────────────────────────────────────────────────

describe('dist/robots.txt', () => {
  let txt;
  beforeAll(async () => { txt = await readText('robots.txt'); });

  it('allows all crawlers', () => {
    expect(txt).toContain('User-agent: *');
    expect(txt).toContain('Allow: /');
  });

  it('references the sitemap URL', () => {
    expect(txt).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
  });

  it('references llms.txt', () => {
    expect(txt).toContain('llms.txt');
  });
});

// ─── CNAME ────────────────────────────────────────────────────────────────────

describe('dist/CNAME', () => {
  it('contains the correct custom domain', async () => {
    const cname = (await readText('CNAME')).trim();
    expect(cname).toBe('warrenparad.net');
  });
});
