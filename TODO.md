# Site Modernization — warrenparad.net

Full revamp: Vue Router + SSG (pre-rendered static HTML per route), Tailwind v4 (PostCSS), data-driven talk system.

## Technology Stack

| Concern | Choice |
|---|---|
| SSG | `vite-ssg` — outputs one `.html` per route to `dist/` |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss` — replaces Bootstrap |
| Router | `vue-router@4` — real URL paths |
| SEO/Head | `@unhead/vue@^1.9` (bundled by vite-ssg) — per-page `<title>` baked into static HTML |
| Date/time | `luxon` (keep) — `DateTime` + `IANAZone` for timezone-aware currency display |
| Unique IDs | `short-uuid` (keep) — used in `fractional.vue` and `home.vue` |
| State | `pinia` — registered in `main.js`, available if needed |

## ✅ Completed

- [x] `src/data/talks.js` — 14 talks with slugs, `featuredTalks` export (4 with YouTube IDs)
- [x] `src/styles/main.css` — Tailwind v4 `@theme` design tokens, Inter font
- [x] `src/router.js` — `/`, `/fractional`, `/resume`, `/talks/:slug`
- [x] `src/main.js` — `ViteSSG` + `includedRoutes` named export (14 talk pages enumerated)
- [x] `src/App.vue` — `<AppNav> + <RouterView> + <AppFooter>`
- [x] `src/components/AppNav.vue` — Vue `ref` mobile toggle, no Bootstrap JS
- [x] `src/components/AppFooter.vue`
- [x] `src/components/VideoGrid.vue` — data-driven from `featuredTalks`
- [x] `src/components/TestimonialCarousel.vue` — pure CSS animation preserved
- [x] `src/pages/HomePage.vue` — dark minimal theme, links to `/talks/:slug`
- [x] `src/pages/FractionalPage.vue` — restyle, luxon/short-uuid intact
- [x] `src/pages/ResumePage.vue` — experience timeline with accent border-l
- [x] `src/pages/talks/TalkPage.vue` — per-talk SEO title, YouTube embed, article link
- [x] `vite.config.js` — PostCSS Tailwind, removed Bootstrap/rollup polyfills, ESM path alias
- [x] `package.json` — new deps, `"build": "vite-ssg build"`
- [x] `postcss.config.cjs` — `@tailwindcss/postcss`
- [x] `index.html` — Font Awesome 6.5.1, clean body
- [x] `public/404.html` — GitHub Pages catch-all
- [x] `public/payments.html` — moved from repo root (now deployed)
- [x] `.github/workflows/build.yml` — `checkout@v4`, `setup-node@v4`

**Build output: 18 pre-rendered pages** (index, fractional, resume, 14 talk pages + 404)
- Per-page titles baked in: verified ✓
- `dist/CNAME` present: verified ✓

---

## ⏳ Blog posts — Next phase

Goal: SEO-optimized blog posts hosted on the site itself (not external dev.to/Medium).

### Design decisions

**Directory structure:** Each post lives in its own directory with a `YYYY-MM-DD-` date prefix. The prefix is the canonical sort key and the source of the post date. Co-located assets (images, diagrams) live in the same directory.

```
src/posts/
├── 2024-02-04-fosdem-building-security-first-apis/
│   ├── index.md
│   └── security-diagram.png   (optional co-located assets)
├── 2025-03-18-meeting-impossible-slas/
│   └── index.md
```

**Slug derivation:** Strip the `YYYY-MM-DD-` prefix from the directory name → URL slug.
- Directory `2025-03-18-meeting-impossible-slas/` → URL `/blog/meeting-impossible-slas`
- Date is extracted from the prefix, not required in frontmatter

**Frontmatter schema** (minimal — date comes from directory name):
```yaml
---
title: Meeting Impossible SLAs
description: How we got to 99.999% uptime and what it actually took.
tags: [reliability, sla, devops]
---
```

- **Markdown processing**: `vite-plugin-md` (converts `index.md` → Vue SFC at build time)
- **Route**: `/blog/:slug` — pre-rendered HTML per post via `includedRoutes`
- **Blog index**: `/blog` — all posts sorted newest-first by directory date prefix

### Tasks

#### Data layer
- [x] Create `src/data/posts.js`:
  - Use `import.meta.glob('../posts/*/index.md', { eager: true })` to load all posts
  - For each, parse directory name: extract `YYYY-MM-DD` prefix as date, remainder as slug
  - Sort newest-first by date
  - Export: `{ slug, title, description, tags, date, component }` per post
- [x] Add `src/posts/` with at least one example post directory (`YYYY-MM-DD-slug/index.md`)

#### Build config
- [x] Install `unplugin-vue-markdown` (converts `.md` → Vue SFCs; frontmatter via `gray-matter` + `?raw` import)
- [x] Update `vite.config.js`: add `Markdown()` plugin, `vue({ include: [/\.vue$/, /\.md$/] })`
- [x] Update `src/main.js` `includedRoutes`: import `posts` from `src/data/posts.js`, map `/blog/:slug` → all slugs

#### Router
- [x] Add `/blog` → `BlogIndexPage` route
- [x] Add `/blog/:slug` → `BlogPostPage` route to `src/router.js`

#### Pages
- [x] Create `src/pages/BlogIndexPage.vue`:
  - List of posts with title, date, description, tags
  - Sorted newest-first
  - Link to each `/blog/:slug`
- [x] Create `src/pages/blog/BlogPostPage.vue`:
  - `useHead` with post title/description for SEO
  - Open Graph meta tags (`og:title`, `og:description`, `og:type: article`, `og:url`)
  - Dynamic markdown content rendered from the `.md` Vue component
  - Author, date, tags in header
  - `← Back to blog` nav

#### SEO extras (for blog posts specifically)
- [x] `<meta name="description">` per page
- [ ] `<link rel="canonical">` per page
- [x] Structured data (`application/ld+json`) for `Article` schema on blog posts
- [ ] `sitemap.xml` generation (vite-ssg supports this via `onFinished` hook or plugin)

#### Nav update
- [x] Add "Blog" link to `AppNav.vue` → `/blog`

---

## Verification commands

```bash
yarn start                          # dev server — all routes work including /blog/:slug
yarn build                          # dist/ has blog/*.html for each post
grep '<title>' dist/blog/my-first-post.html   # post title pre-rendered
grep 'og:description' dist/blog/my-first-post.html  # SEO meta pre-rendered
ls dist/CNAME
```

## File structure (complete)

```
src/
├── main.js
├── router.js
├── App.vue
├── data/
│   ├── talks.js
│   └── posts.js               ← new
├── styles/
│   └── main.css
├── components/
│   ├── AppNav.vue
│   ├── AppFooter.vue
│   ├── TestimonialCarousel.vue
│   └── VideoGrid.vue
├── pages/
│   ├── HomePage.vue
│   ├── FractionalPage.vue
│   ├── ResumePage.vue
│   ├── BlogIndexPage.vue ← new
│   ├── blog/
│   │   └── BlogPostPage.vue  ← new
│   └── talks/
│       └── TalkPage.vue
└── posts/                ← new (one directory per post)
    ├── 2024-02-04-fosdem-building-security-first-apis/
    │   ├── index.md
    │   └── security-diagram.png   (optional co-located assets)
    └── 2025-03-18-meeting-impossible-slas/
        └── index.md
```
