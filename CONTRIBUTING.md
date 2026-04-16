# Contributing to warrenparad.net

This is a statically-generated personal site built with Vue 3, Vue Router, Tailwind CSS v4, and `vite-ssg`. Every page is pre-rendered to static HTML at build time and deployed to GitHub Pages.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Local Development](#local-development)
4. [Common Tasks](#common-tasks)
   - [Adding a Talk](#adding-a-talk)
   - [Writing a Blog Post](#writing-a-blog-post)
   - [Adding an External Article](#adding-an-external-article)
5. [Data Schemas](#data-schemas)
6. [Styling Guide](#styling-guide)
7. [Non-Obvious Behaviors & Gotchas](#non-obvious-behaviors--gotchas)
8. [Testing](#testing)
9. [Build & Deploy](#build--deploy)

---

## Tech Stack

| Concern | Tool | Notes |
|---|---|---|
| Framework | Vue 3 (Composition API) | `<script setup>` throughout |
| SSG | `vite-ssg` | Pre-renders flat `.html` per route (e.g. `dist/fractional.html`) |
| Router | `vue-router@4` | Real URL paths, no hash routing |
| Styling | Tailwind CSS v4 | `@theme` design tokens; `@tailwindcss/vite` plugin (no PostCSS config needed) |
| SEO/Head | `@unhead/vue` | Per-page `<title>`, `<meta>`, canonical |
| Markdown | `unplugin-vue-markdown` | `.md` → Vue SFC at build time |
| Frontmatter | YAML (regex + `js-yaml`) | Parsed in `vite.config.js` via regex; `js-yaml` used in tests |
| Pricing timezone | `luxon` | Detects NA vs EU timezone |
| Unique IDs | `short-uuid` | Speaker booking email tokens |
| State | `pinia` | Registered; use if shared state needed |

---

## Project Structure

```
src/
├── main.js                  — App factory (ViteSSG), Pinia, scroll behavior
├── router.js                — All route definitions
├── App.vue                  — Root layout: AppNav + RouterView + AppFooter
├── data/
│   ├── talks.js             — All conference talks (the source of truth)
│   ├── posts.js             — Discovers local blog posts via import.meta.glob
│   └── externalPosts.js    — Curated list of external articles (Authress, Dev.to)
├── styles/
│   └── main.css             — Tailwind v4 import + @theme tokens + @layer base
├── components/
│   ├── AppNav.vue           — Fixed top nav, CSS-only mobile menu
│   ├── AppFooter.vue        — Footer with copyright + socials
│   ├── VideoGrid.vue        — Grid of featured talks with YouTube embeds
│   └── TestimonialCarousel.vue — Pure CSS rotating testimonial carousel
├── pages/
│   ├── HomePage.vue         — Hero, talk list, recent writing
│   ├── FractionalPage.vue   — Fractional CTO services + pricing
│   ├── ResumePage.vue       — Experience timeline
│   ├── BlogIndexPage.vue    — Tag-filtered, year-grouped post index
│   ├── blog/
│   │   └── BlogPostPage.vue — Individual post with SEO + JSON-LD
│   └── talks/
│       └── TalkPage.vue     — Talk detail with embed, event/article/slides links
├── posts/                   — Local blog posts (one directory per post)
│   └── YYYY-MM-DD-slug/
│       └── index.md
└── assets/                  — profile.jpg, testimonial avatars, oauth.svg

public/                      — Copied verbatim to dist/
├── CNAME                    — warrenparad.net (GitHub Pages custom domain)
├── 404.html                 — Catch-all fallback for GitHub Pages
└── payments.html            — Static payment info page

index.html                   — HTML entry point (Font Awesome, Google Fonts, meta)
vite.config.js               — Build config: Markdown plugin, sitemap generator
```

---

## Local Development

```bash
# Install dependencies (Node 24+ required)
yarn install

# Start dev server with hot reload
yarn start           # http://localhost:8080

# Preview the production SSG build locally
yarn build && yarn serve
```

---

## Common Tasks

### Adding a Talk

Edit **`src/data/talks.js`** and add an entry to the `talks` array. The build automatically generates a `/talks/{slug}/index.html` page for it.

```js
{
  slug: 'conference-city-year',       // URL-safe, used as route: /talks/{slug}
  title: 'Your Talk Title',
  conference: 'Conference Name',
  location: 'City',
  year: 2026,
  eventUrl: 'https://...',            // Link to the event/schedule page; null if none
  articleUrl: 'https://...',          // Full article or transcript; null if none
  canonicalUrl: 'https://...',        // Slides or original source; null if none
  videoUrl: 'https://youtu.be/...',   // Any YouTube URL format; null if no recording
  videoTitle: 'Display title',         // Shown in embed; null if no video
  description: 'One or two sentences describing the talk.',
},
```

**Rules:**
- `slug` must be unique across all talks — it becomes the URL path
- `description` is required — it appears on the talk detail page
- A talk appears in `featuredTalks` (and `VideoGrid`) automatically if `videoUrl` is non-null
- `youtubeEmbedUrl()` accepts `?v=`, `/watch?v=`, `youtu.be/`, and `/embed/` URL formats

### Writing a Blog Post

Create a new directory under `src/posts/` with the format `YYYY-MM-DD-your-slug/` and add an `index.md` file:

```
src/posts/
└── 2025-06-01-my-new-post/
    └── index.md
```

**`index.md` frontmatter:**
```yaml
---
title: My New Post
authors: warren-parad
description: A concise one-sentence summary for SEO and the post list.
image: ./index.png
image_alt: Alt text for the cover image (also used for og:image:alt)
tags: [security, architecture]
hide_table_of_contents: false    # optional; default false
toc_max_heading_level: 3         # optional; default 3 (h2 + h3 only)
---

Your markdown content here...
```

**Rules:**
- The directory name `YYYY-MM-DD-` prefix is the **canonical date** — do not put a date in frontmatter
- The part after the date prefix becomes the URL slug: `2025-06-01-my-new-post` → `/articles/my-new-post`
- Directories without a valid `YYYY-MM-DD-` prefix are silently ignored by `posts.js`
- `title` and `description` are required for SEO; `tags` is optional but helps filtering
- `authors` should be `warren-parad` (slug format — this is the author identifier, not display name)
- `image` and `image_alt` are required for og:image social sharing; reference with a relative path
- Posts appear in the articles index and recent posts on the home page automatically on next build
- The canonical URL (`https://warrenparad.net/articles/{slug}`) is injected automatically by `BlogPostPage.vue`
- Co-locate images and assets in the same directory; reference them with relative paths in markdown

**Markdown styling:** Block-level elements (headings, paragraphs, lists, code blocks, blockquotes) are styled via `.prose :deep(...)` in `BlogPostPage.vue`. Inline links get accent color + underline.

### Adding an External Article

Edit **`src/data/externalPosts.js`** and add an entry:

```js
{
  title: 'Article Title',
  url: 'https://authress.io/knowledge-base/articles/...',
  date: '2025-06-01',       // ISO format YYYY-MM-DD
  source: 'authress',        // 'authress' renders "Authress Engineering Blog" badge; 'devto' renders nothing
  description: 'One sentence describing the article.',
  tags: ['security', 'api'],
},
```

**Rules:**
- Only add articles authored by Warren Parad — do not add articles by other contributors
- `url` must be unique — duplicates appear twice in the blog index
- `tags` drives the tag filters on the blog index page; use existing tags where possible
- External posts appear in the blog index and home page recent posts mixed with local posts, sorted by date
- Articles that are write-ups of conference talks should be in `talks.js` (as `articleUrl`) rather than here

---

## Data Schemas

### `talks.js` — Full Field Reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `slug` | string | yes | URL path segment; must be unique |
| `title` | string | yes | Shown in lists and as `<h1>` on talk page |
| `conference` | string | yes | Empty string `''` if no conference |
| `location` | string | yes | Empty string `''` if online/no location |
| `year` | number\|null | yes | `null` for undated recordings |
| `eventUrl` | string\|null | yes | Event page CTA (primary blue button) |
| `articleUrl` | string\|null | yes | Full article/transcript link |
| `canonicalUrl` | string\|null | yes | Slides or original source; also sets `<link rel="canonical">` if present |
| `videoUrl` | string\|null | yes | Any YouTube URL; enables embed + VideoGrid |
| `videoTitle` | string\|null | yes | iframe title attribute; `null` falls back to `title` |
| `description` | string | yes | Abstract shown on talk detail page |

### `posts.js` — Frontmatter Schema

```yaml
---
title: Required — post heading and SEO title
authors: warren-parad                        # required — author slug
description: Required — one sentence for post list and meta description
image: ./index.png                           # required — relative path to cover image
image_alt: Alt text for og:image             # required — accessibility + social sharing
tags: [optional, array, of, tags]
hide_table_of_contents: false                # optional, default false
toc_max_heading_level: 3                     # optional, default 3
---
```

The post's `date` and `slug` come from the directory name, never from frontmatter.

### `externalPosts.js` — Full Field Reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | Shown in blog index |
| `url` | string | yes | External URL; opens in new tab |
| `date` | string | yes | ISO `YYYY-MM-DD` format |
| `source` | string | yes | `'authress'` or `'devto'` |
| `description` | string | yes | Shown below title in blog index |
| `tags` | string[] | yes | Used for tag filtering |

---

## Styling Guide

### Design Tokens

All colors and font are defined in `src/styles/main.css` as Tailwind v4 `@theme` variables. Use these rather than hardcoded hex values:

```
bg-bg          — #0f1117  page background
bg-surface     — #1a1f2e  card / nav background
bg-surface-2   — #242938  hover state, tag chips
border-border  — #2d3348  all dividers and borders
text-text      — #e8eaf0  primary text
text-muted     — #8b94b0  secondary / caption text
text-accent    — #4e9af1  links, CTAs, highlights
bg-accent      — #4e9af1  primary button background
text-teal      — #3E6077  secondary accent (Authress badge)
```

### Important Rules

1. **Do not use unlayered CSS** for link or color overrides. All global styles live inside `@layer base {}` in `main.css`. Anything outside `@layer` will silently override Tailwind utility classes due to cascade priority.

2. **Never add `@layer base` styles that target `a { color: ... }`** with a specific color — this was the root cause of buttons and links ignoring Tailwind color utilities. The current rule is `a { color: inherit; }` which correctly defers to context.

3. **Use `:deep()` for markdown-rendered content.** Because markdown output is rendered as a child component, scoped styles can't target it. Use `.prose :deep(h2) { ... }` in `BlogPostPage.vue`.

4. **Mobile-first.** Default styles are for mobile; add `md:`, `lg:` prefixes to override for larger screens.

### Common Patterns

```html
<!-- Primary CTA button -->
<a class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors">

<!-- Outlined secondary button -->
<a class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors">

<!-- Section label -->
<span class="text-xs font-mono tracking-widest uppercase text-accent">

<!-- Page container -->
<div class="max-w-5xl mx-auto px-4">

<!-- Section padding -->
<section class="py-14 px-4">
```

---

## Non-Obvious Behaviors & Gotchas

### Mobile Navigation is Pure CSS

`AppNav.vue` uses a hidden `<input type="checkbox" id="nav-toggle">` and CSS sibling selectors (`:checked ~ ...`) to toggle the mobile menu. No JavaScript is involved. This means:
- The hamburger menu works with JavaScript disabled
- The nav links (`/#appearances`, `/articles`, `/resume`, `/fractional`) must work as plain `<a href>` or `RouterLink` — no click handlers
- **Do not** convert this to a `v-show`/`v-if` toggle — that breaks JS-disabled functionality

### Appearances Nav Link Targets `#appearances`, Not `#engagements`

The "Appearances" link in `AppNav.vue` points to `/#appearances`. The wrapping `<div id="engagements">` is a separate element — linking to `#engagements` would scroll to the wrong place (before the section heading). If you rename either ID, update both AppNav.vue and any `router.replace({ hash: ... })` calls in HomePage.vue.

### YouTube iframe `loading="lazy"` is Required

`VideoGrid.vue` and `TalkPage.vue` both set `loading="lazy"` on their `<iframe>` elements. Without this, browsers load and focus iframes eagerly, causing the page to scroll to the first iframe on load — even with JavaScript disabled. Do not remove this attribute.

### `vite.config.js` Cannot Import from `src/data/`

The data files (`talks.js`, `posts.js`) use `import.meta.glob` which is a Vite-only runtime feature not available in the Vite config file (which runs in Node context at build time). The sitemap/RSS/llms.txt plugins in `vite.config.js` read slugs via:
- `talks.js` — regex over the raw file source (`/slug:\s*'([^']+)'/g`)
- `posts/` — `readdir` on the posts directory

If you change the `slug:` field format in `talks.js`, update the regex in `vite.config.js` accordingly.

### Tailwind CSS is Processed by the Vite Plugin, Not PostCSS

Tailwind v4 styling goes through `@tailwindcss/vite` (registered in `vite.config.js`), not through `postcss.config.cjs`. The `postcss.config.cjs` file exists but is empty — do not add `@tailwindcss/postcss` back to it. The Vite plugin handles both the client and SSR build passes correctly; the PostCSS path breaks on SSR builds.

### Post Dates Come From Directory Names Only

The `YYYY-MM-DD-` prefix on post directories is the sole source of post dates. Adding a `date:` field to frontmatter has no effect — `posts.js` ignores it. Directories without a valid `YYYY-MM-DD-` prefix are silently skipped.

### Testimonial Carousel Timing Is Positional

`TestimonialCarousel.vue` uses CSS keyframe animations with `animation-delay` calculated from DOM position. If you add, remove, or reorder testimonials, the animation delays and keyframe percentages must be recalculated. The current setup is tuned for exactly 3 items with a 30-second cycle.

### Fractional Page Pricing Currency

`FractionalPage.vue` detects the visitor's timezone using `luxon`'s `DateTime.now().zoneName` and compares the UTC offset to decide whether to show `$` or `€`. This runs client-side only — SSG output always shows one currency, and the correct one replaces it after hydration.

### Scroll Behavior

All navigation scrolls to `{ top: 0 }` — there is no saved-position restoration. A custom `scrollBehavior` was attempted but caused the page to jump to the bottom on load (content height changes during Vue hydration made the restored position land at the wrong place). Do not add `savedPosition` logic back without validating on both JS-on and JS-off page loads.

### `@fontsource/inter` Package is Unused

`@fontsource/inter` is listed in `package.json` but its CSS is not imported. Inter is loaded from Google Fonts in `index.html`. The package causes build warnings (`./files/*.woff2 didn't resolve at build time`) when imported in CSS under vite-ssg. Remove the package entirely if you want to clean up dependencies — it has no effect on the rendered font.

---

## Testing

```bash
# Run all tests
yarn test

# Build then validate the output
yarn build && yarn test
```

Tests live in `src/__tests__/`. **`yarn build && yarn test` is the complete validation workflow** — `build.test.js` reads the compiled `dist/` files and verifies semantic correctness, making manual `grep` verification unnecessary.

### What Is Tested

| Test File | What It Covers |
|---|---|
| `talks.test.js` | All required fields present; slugs unique; `youtubeEmbedUrl` parses all YouTube URL formats; `featuredTalks` only includes talks with video |
| `posts.test.js` | Date/slug regex parsing; posts sorted newest-first; invalid directories filtered |
| `externalPosts.test.js` | Required fields present; dates in ISO format; no duplicate URLs |
| `sitemapPlugin.test.js` | `getTalkSlugs` regex extracts slugs from talks.js source; `getPostSlugs` strips date prefix from directory names |
| `build.test.js` | Validates the compiled `dist/` output: SEO meta tags, Open Graph, JSON-LD schema.org, canonical URLs, nav/footer links, internal link resolution, CSS correctness (exact theme colors, responsive breakpoints, component styles), sitemap.xml and rss.xml validity, llms.txt content, per-article frontmatter, per-talk page rendering, all SSG-rendered HTML pages |

`build.test.js` uses `cheerio` for HTML querying, `fast-xml-parser` for XML validation, and `js-yaml` for frontmatter parsing. It only runs against already-built `dist/` — run `yarn build` first if you have changed source files.

### What `build.test.js` Replaces

Before this test file existed, build correctness was checked manually with `grep`. Those checks are now automated:
- SEO title/description/canonical on every page
- og:title, og:description, og:image present and non-empty
- JSON-LD `@type: "Person"` on homepage, `@type: "Article"` on article pages
- All internal `href` values resolve to actual files in `dist/`
- Compiled CSS contains exact theme color hex values (e.g. `#4e9af1`, `#0f1117`)
- CSS contains responsive `@media` breakpoints and component-scoped styles
- `sitemap.xml` and `rss.xml` parse as valid XML with expected entries
- `llms.txt` contains all required sections and article/talk links

### Adding New Tests

Place test files in `src/__tests__/`. The vitest config uses the `node` environment (no DOM). For Vue component tests you would need to add `@vue/test-utils` and switch to the `jsdom` environment.

When adding a new page or data field, add corresponding assertions to `build.test.js` — the test file structure mirrors the site structure.

---

## Build & Deploy

### Build

```bash
yarn build
```

Runs `vite-ssg build`, which:
1. Pre-renders all routes to flat `.html` files in `dist/` (e.g. `dist/fractional.html`, `dist/talks/slug.html`)
2. Runs `closeBundle` hooks → writes `dist/sitemap.xml`, `dist/rss.xml`, `dist/llms.txt`, and `dist/articles/<slug>.md`
3. Copies `public/` contents to `dist/` (CNAME, 404.html, payments.html, etc.)

Total output: ~20 pre-rendered HTML pages + sitemap + RSS feed + llms.txt + assets.

Note: `dist/` contains both SSG-rendered pages (identifiable by `data-server-rendered="true"` on the `<div id="app">`) and legacy static files from `public/` (404.html, payments.html, links/linkedin/index.html). Tests only validate the SSG-rendered pages.

### Verify the Build

```bash
yarn build && yarn test
```

`build.test.js` validates all meaningful output: SEO tags, JSON-LD, canonical URLs, internal links, CSS correctness, XML validity, and more. No manual grepping needed.

### CI/CD

Pushes to `master` or `main` trigger `.github/workflows/build.yml`:
1. Installs Node 24, runs `yarn --frozen-lockfile`
2. Runs `yarn setup && yarn build`
3. Deploys `dist/` to the `production` branch via `JamesIves/github-pages-deploy-action`
4. GitHub Pages serves the `production` branch at `warrenparad.net`

The `production` branch is fully overwritten on each deploy — never commit directly to it.
