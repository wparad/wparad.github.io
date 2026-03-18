<template>
  <main class="pt-14 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold text-text mb-2">Writing</h1>
      <p class="text-muted mb-10">Thoughts on engineering, security, reliability, and technical leadership.</p>

      <!-- Filter buttons -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="f in filters"
          :key="f.key"
          @click="activeFilter = f.key"
          class="px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer"
          :class="activeFilter === f.key
            ? 'bg-accent text-white'
            : 'bg-surface-2 text-muted hover:text-text'"
        >{{ f.label }}</button>
      </div>

      <div class="flex flex-col gap-6">
        <article
          v-for="post in filteredPosts"
          :key="post.key"
          class="group"
        >
          <!-- External post -->
          <a
            v-if="post.external"
            :href="post.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block no-underline"
          >
            <div class="flex items-start gap-4 p-4 rounded-lg bg-surface hover:bg-surface-2 border border-border hover:border-accent transition-all duration-200 cursor-pointer">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span v-if="post.date" class="text-xs font-mono text-muted">{{ post.date }}</span>
                  <span
                    class="text-xs px-1.5 py-0.5 rounded font-medium"
                    :class="post.source === 'authress'
                      ? 'bg-teal/20 text-teal'
                      : 'bg-surface-2 text-muted'"
                  >{{ post.source === 'authress' ? 'authress.io' : 'dev.to' }}</span>
                </div>
                <p class="text-base font-semibold text-text group-hover:text-accent transition-colors leading-snug">{{ post.title }}</p>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs text-muted mt-1 shrink-0" />
            </div>
          </a>

          <!-- Local post -->
          <RouterLink
            v-else
            :to="`/blog/${post.slug}`"
            class="block no-underline"
          >
            <div class="flex items-start gap-4 p-4 rounded-lg bg-surface hover:bg-surface-2 border border-border hover:border-accent transition-all duration-200">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs font-mono text-muted">{{ post.date }}</span>
                  <span class="text-xs px-1.5 py-0.5 rounded font-medium bg-accent/15 text-accent">warrenparad.net</span>
                </div>
                <p class="text-base font-semibold text-text group-hover:text-accent transition-colors leading-snug">{{ post.title }}</p>
                <p v-if="post.description" class="text-sm text-muted mt-1 leading-relaxed">{{ post.description }}</p>
                <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mt-2">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted"
                  >{{ tag }}</span>
                </div>
              </div>
            </div>
          </RouterLink>
        </article>
      </div>

      <p v-if="!filteredPosts.length" class="text-muted">No posts found.</p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';
import { posts } from '../data/posts.js';
import { externalPosts } from '../data/externalPosts.js';

useHead({ title: 'Writing — Warren Parad' });

const filters = [
  { key: 'all', label: 'All' },
  { key: 'local', label: 'On this site' },
  { key: 'authress', label: 'authress.io' },
  { key: 'devto', label: 'dev.to' },
];
const activeFilter = ref('all');

// Combine local + external into one sortable list
const allPosts = [
  ...posts.map(p => ({ ...p, key: `local-${p.slug}`, external: false })),
  ...externalPosts.map(p => ({ ...p, key: `ext-${p.url}`, external: true })),
].sort((a, b) => {
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return b.date.localeCompare(a.date);
});

const filteredPosts = computed(() => {
  if (activeFilter.value === 'all') return allPosts;
  if (activeFilter.value === 'local') return allPosts.filter(p => !p.external);
  return allPosts.filter(p => p.source === activeFilter.value);
});
</script>

<style scoped>
.no-underline { text-decoration: none; }
</style>
