<template>
  <main>
    <div class="article-container mx-auto px-4 py-12">
      <template v-if="post">
        <!-- Article column -->
        <article>
          <!-- Back nav -->
          <RouterLink :to="{ name: 'articles' }" class="inline-flex items-center gap-2 text-muted hover:text-accent text-sm mb-8 transition-colors no-underline">
            <i class="fa-solid fa-arrow-left" /> Back to articles
          </RouterLink>

          <!-- Header image -->
          <div v-if="resolvedImage" class="mb-8">
            <img :src="resolvedImage" :alt="post.imageAlt" class="w-full object-cover max-h-80 rounded-lg" />
          </div>

          <!-- Post header -->
          <div class="mb-8">
            <div class="flex flex-wrap items-center gap-3 text-xs text-muted mb-3">
              <span class="font-mono">{{ localizedDate }}</span>
              <span v-if="post.readingTime">· {{ post.readingTime }} min read</span>
            </div>
            <h1 class="font-bold text-text mb-3 leading-tight" style="font-size: 2.75rem">{{ post.title }}</h1>
            <div v-if="post.tags.length" class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted">{{ tag }}</span>
            </div>
          </div>

          <hr class="border-border mb-8">

          <!-- Markdown content -->
          <div ref="proseEl" class="prose" @click="handleProseClick">
            <component :is="post.component" />
          </div>
        </article>

        <!-- ToC sidebar — fixed to far right of viewport -->
        <aside v-if="toc.length" class="blog-toc">
          <div>
            <nav>
              <ul class="space-y-1">
                <li
                  v-for="item in toc"
                  :key="item.id"
                  :class="item.depth === 3 ? 'pl-3' : ''">
                  <a
                    :href="`#${item.id}`"
                    :class="[
                      'block py-0.5 transition-colors no-underline leading-snug',
                      activeId === item.id ? 'text-accent' : 'text-muted hover:text-text'
                    ]"
                    @click.prevent="handleTocClick(item.id)">
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </template>

      <!-- 404 state -->
      <template v-else>
        <div>
          <h1 class="text-2xl font-bold text-text mb-4">Post not found</h1>
          <p class="text-muted">This post doesn't exist or may have been removed.</p>
          <RouterLink :to="{ name: 'articles' }" class="inline-flex items-center gap-2 text-accent hover:underline mt-4 no-underline">
            <i class="fa-solid fa-arrow-left" /> Back to articles
          </RouterLink>
        </div>
      </template>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';
import { posts } from '../../data/posts.js';

const route = useRoute();
const post = computed(() => posts.find(p => p.slug === route.params.slug));

const localizedDate = computed(() => {
  if (!post.value) { return ''; }
  return new Date(post.value.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
});

// Image: the frontmatter `image` is a relative path like `./post.png`.
// At runtime the markdown component has already resolved assets, but we need
// the URL for the <img> tag in the parent template. We derive it from the
// post slug — Vite processes assets in the post directory during build.
const imageModules = import.meta.glob('../../posts/*/*.{png,jpg,jpeg,gif,webp}', { eager: true });
const resolvedImage = computed(() => {
  if (!post.value?.image) { return null; }
  // post.image is like "./index.png" — derive filename and match against glob
  const filename = post.value.image.replace(/^\.\//, '');
  const key = Object.keys(imageModules).find(k => k.includes(route.params.slug) && k.endsWith(`/${filename}`));
  return key ? imageModules[key].default : null;
});

// ToC — pre-computed at build time in posts.js
const proseEl = ref(null);
const toc = computed(() => post.value?.toc ?? []);
const activeId = ref(null);
let observer = null;

function startObserver() {
  if (!proseEl.value || !toc.value.length) { return; }
  const headingEls = toc.value.map(({ id }) => document.getElementById(id)).filter(Boolean);

  observer = new IntersectionObserver(
    entries => {
      // Find the topmost visible heading
      const visible = entries.filter(e => e.isIntersecting).map(e => e.target);
      if (visible.length) {
        activeId.value = visible[0].id;
      }
    },
    { rootMargin: '0px 0px -60% 0px', threshold: 0 }
  );

  headingEls.forEach(el => observer.observe(el));
}

async function handleTocClick(id) {
  const el = document.getElementById(id);
  if (!el) { return; }
  history.pushState(null, '', `#${id}`);
  activeId.value = id;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch { /* clipboard permission denied */ }
}

async function handleProseClick(e) {
  const heading = e.target.closest('h2, h3, h4');
  if (!heading?.id) { return; }
  e.preventDefault();
  await handleTocClick(heading.id);
}

onMounted(async () => {
  await nextTick();
  startObserver();
});

onUnmounted(() => {
  observer?.disconnect();
});

const BASE_URL = 'https://warrenparad.net';

useHead(computed(() => {
  const p = post.value;
  if (!p) { return { title: 'Articles — Warren Parad' }; }

  // resolvedImage is the Vite-hashed asset path (e.g. /assets/index-abc123.png)
  // Prepend the base URL to make it absolute for og:image
  const ogImage = resolvedImage.value
    ? `${BASE_URL}${resolvedImage.value}`
    : null;

  return {
    title: `${p.title} — Warren Parad`,
    link: [{ rel: 'canonical', href: `${BASE_URL}/articles/${p.slug}` }],
    meta: [
      { name: 'description', content: p.description },
      { property: 'og:title', content: `${p.title} — Warren Parad` },
      { property: 'og:description', content: p.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `${BASE_URL}/articles/${p.slug}` },
      ...(ogImage ? [
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: p.imageAlt },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: ogImage },
      ] : []),
      { name: 'article:published_time', content: p.date },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': p.title,
          'description': p.description,
          'datePublished': p.date,
          'author': { '@type': 'Person', 'name': 'Warren Parad', 'url': BASE_URL },
          'url': `${BASE_URL}/articles/${p.slug}`,
          ...(ogImage ? { 'image': ogImage } : {}),
        }),
      },
    ],
  };
}));
</script>

<style scoped>
@reference "../../styles/main.css";

.no-underline {
  text-decoration: none;
}

/* ── Article container width ─────────────────── */

.article-container {
  max-width: 64rem; /* max-w-5xl below xl */
}

@media (min-width: theme(--breakpoint-xl)) and (max-width: theme(--breakpoint-toc-max)) {
  .article-container {
    max-width: 48rem; /* max-w-3xl when ToC is visible and space is tight */
  }
}

/* ── ToC — fixed far right ────────────────────── */

.blog-toc {
  display: none;
}

.blog-toc a {
  font-size: 0.875rem;
}

@media (min-width: theme(--breakpoint-xl)) {
  .blog-toc {
    display: block;
    position: fixed;
    top: 3.5rem; /* matches navbar h-14 */
    right: 3rem;
    width: 220px;
    max-height: calc(100vh - 3.5rem);
    overflow-y: auto;
    padding-top: 1.5rem;
  }
}

/* ── Prose styles ─────────────────────────────── */

.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4) {
  color: var(--color-text);
  font-weight: 700;
  line-height: 1.3;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.prose :deep(h2) { font-size: 2rem; }
.prose :deep(h3) { font-size: 1.6rem; }

.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4) {
  cursor: pointer;
}

/* permalink anchor rendered by markdown-it-anchor */
.prose :deep(h2 > a[aria-label="permalink"]),
.prose :deep(h3 > a[aria-label="permalink"]),
.prose :deep(h4 > a[aria-label="permalink"]) {
  color: transparent;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.15s;
  margin-left: 0.25rem;
}

.prose :deep(h2:hover > a[aria-label="permalink"]),
.prose :deep(h3:hover > a[aria-label="permalink"]),
.prose :deep(h4:hover > a[aria-label="permalink"]),
.prose :deep(h2 > a[aria-label="permalink"]:focus),
.prose :deep(h3 > a[aria-label="permalink"]:focus),
.prose :deep(h4 > a[aria-label="permalink"]:focus) {
  color: var(--color-accent);
}

.prose :deep(p) {
  color: var(--color-muted);
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.prose :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose :deep(code) {
  background: var(--color-surface-2);
  color: var(--color-text);
  border-radius: 4px;
  padding: 0.1em 0.35em;
  font-size: 0.875em;
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;
}

.prose :deep(pre) {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.25rem;
  overflow-x: auto;
  margin-bottom: 1.25rem;
}

.prose :deep(pre code) {
  background: none;
  padding: 0;
  font-size: 0.875rem;
}

.prose :deep(ul),
.prose :deep(ol) {
  color: var(--color-muted);
  line-height: 1.75;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.prose :deep(ul) {
  list-style-type: disc;
}

.prose :deep(ul ul) {
  list-style-type: circle;
}

.prose :deep(ol) {
  list-style-type: decimal;
}

.prose :deep(li) {
  margin-bottom: 0.375rem;
  display: list-item;
}

.prose :deep(strong) {
  color: var(--color-text);
  font-weight: 600;
}

.prose :deep(blockquote) {
  border-left: 3px solid var(--color-accent);
  padding-left: 1rem;
  color: var(--color-muted);
  font-style: italic;
  margin: 1.5rem 0;
}

.prose :deep(hr) {
  border-color: var(--color-border);
  margin: 2rem 0;
}

.prose :deep(img) {
  display: block;
  margin: 1.5rem auto;
  border-radius: 8px;
  max-width: 100%;
}

/* ── Admonitions ──────────────────────────────── */

.prose :deep(.admonition) {
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  border-left: 4px solid;
}

.prose :deep(.admonition p) {
  margin-bottom: 0;
}

.prose :deep(.admonition-info) {
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
  border-color: var(--color-accent);
  color: var(--color-text);
}

.prose :deep(.admonition-warn) {
  background: color-mix(in srgb, #f59e0b 10%, transparent);
  border-color: #f59e0b;
  color: var(--color-text);
}

/* ── Code block titles ───────────────────────── */

.prose :deep(.code-block-with-title) {
  margin-bottom: 1.25rem;
}

.prose :deep(.code-block-with-title pre) {
  margin-bottom: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.prose :deep(.code-block-title) {
  background: var(--color-border);
  color: var(--color-muted);
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;
  font-size: 0.75rem;
  padding: 0.4rem 1.25rem;
  border: 1px solid var(--color-border);
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* ── Shiki overrides ─────────────────────────── */

.prose :deep(.shiki) {
  background: var(--color-surface-2) !important;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.25rem;
  overflow-x: auto;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;
}

.prose :deep(.shiki code) {
  background: none;
  padding: 0;
  font-size: inherit;
}
</style>
