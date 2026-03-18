<template>
  <main class="pt-14 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-12">
      <!-- Back nav -->
      <RouterLink to="/blog" class="inline-flex items-center gap-2 text-muted hover:text-accent text-sm mb-8 transition-colors no-underline">
        <i class="fa-solid fa-arrow-left" /> Back to blog
      </RouterLink>

      <template v-if="post">
        <!-- Post header -->
        <div class="mb-8">
          <div class="flex flex-wrap items-center gap-3 text-xs text-muted mb-3">
            <span class="font-mono">{{ post.date }}</span>
            <span v-if="readingTime">· {{ readingTime }} min read</span>
          </div>
          <h1 class="text-3xl font-bold text-text mb-3 leading-tight">{{ post.title }}</h1>
          <p v-if="post.description" class="text-muted text-lg leading-relaxed mb-4">{{ post.description }}</p>
          <div v-if="post.tags.length" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted"
            >{{ tag }}</span>
          </div>
        </div>

        <hr class="border-border mb-8" />

        <!-- Markdown content rendered as Vue component -->
        <div class="prose">
          <component :is="post.component" />
        </div>
      </template>

      <!-- 404 state -->
      <template v-else>
        <h1 class="text-2xl font-bold text-text mb-4">Post not found</h1>
        <p class="text-muted">This post doesn't exist or may have been removed.</p>
        <RouterLink to="/blog" class="inline-flex items-center gap-2 text-accent hover:underline mt-4 no-underline">
          <i class="fa-solid fa-arrow-left" /> Back to blog
        </RouterLink>
      </template>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';
import { posts } from '../../data/posts.js';

const route = useRoute();
const post = computed(() => posts.find(p => p.slug === route.params.slug));

const readingTime = computed(() => {
  if (!post.value) return null;
  // Approximate: 200 wpm, estimate from description length as proxy
  // Actual word count comes from the rendered component; use a conservative estimate
  return null; // populated client-side only — omit from SSG to avoid mismatch
});

useHead(computed(() => {
  const p = post.value;
  if (!p) return { title: 'Blog — Warren Parad' };
  return {
    title: `${p.title} — Warren Parad`,
    meta: [
      { name: 'description', content: p.description },
      { property: 'og:title', content: `${p.title} — Warren Parad` },
      { property: 'og:description', content: p.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `https://warrenparad.net/blog/${p.slug}` },
      { name: 'article:published_time', content: p.date },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          author: { '@type': 'Person', name: 'Warren Parad', url: 'https://warrenparad.net' },
          url: `https://warrenparad.net/blog/${p.slug}`,
        }),
      },
    ],
  };
}));
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}

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

.prose :deep(h1) { font-size: 1.875rem; margin-top: 0; }
.prose :deep(h2) { font-size: 1.5rem; }
.prose :deep(h3) { font-size: 1.25rem; }

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

.prose :deep(li) {
  margin-bottom: 0.375rem;
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
</style>
