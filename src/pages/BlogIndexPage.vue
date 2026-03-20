<template>
  <main class="pt-14">
    <div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold text-text mb-2">Articles</h1>
      <p class="text-muted mb-10">Thoughts on engineering, security, reliability, and technical leadership.</p>

      <!-- Tag filters -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          @click="activeTag = null"
          class="px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer"
          :class="activeTag === null ? 'bg-accent text-white' : 'bg-surface-2 text-muted hover:text-text'">All</button>
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="activeTag = tag"
          class="px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer"
          :class="activeTag === tag ? 'bg-accent text-white' : 'bg-surface-2 text-muted hover:text-text'">{{ tag }}</button>
      </div>

      <!-- Posts grouped by year -->
      <template v-for="group in groupedPosts" :key="group.year">
        <!-- Year separator -->
        <div class="flex items-center gap-3 mb-6 mt-10 first:mt-0">
          <span class="text-sm font-mono font-semibold text-accent">{{ group.year }}</span>
          <div class="flex-1 h-px bg-border" />
          <span class="text-xs text-muted">{{ group.posts.length }} post{{ group.posts.length === 1 ? '' : 's' }}</span>
        </div>

        <div class="flex flex-col gap-4 mb-2">
          <article v-for="post in group.posts" :key="post.key" class="group">

            <!-- External post -->
            <a v-if="post.external" :href="post.url" target="_blank" rel="noopener noreferrer" class="block no-underline">
              <div class="flex items-start gap-4 p-4 rounded-lg bg-surface hover:bg-surface-2 border border-border hover:border-accent transition-all duration-200 cursor-pointer">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-mono text-muted">{{ post.date }}</span>
                    <span v-if="post.source === 'authress'" class="text-xs px-1.5 py-0.5 rounded font-medium bg-teal/20 text-teal">Authress Engineering KB</span>
                  </div>
                  <p class="text-base font-semibold text-text group-hover:text-accent transition-colors leading-snug">{{ post.title }}</p>
                  <p v-if="post.description" class="text-sm text-muted mt-1 leading-relaxed">{{ post.description }}</p>
                  <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mt-2">
                    <button
                      v-for="tag in post.tags"
                      :key="tag"
                      @click.prevent="activeTag = tag"
                      class="text-xs px-2 py-0.5 rounded-full transition-colors cursor-pointer"
                      :class="activeTag === tag ? 'bg-accent text-white' : 'bg-surface-2 text-muted hover:text-text'">{{ tag }}</button>
                  </div>
                </div>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs text-muted mt-1 shrink-0" />
              </div>
            </a>

            <!-- Local post -->
            <RouterLink v-else :to="{ name: 'article', params: { slug: post.slug } }" class="block no-underline">
              <div class="flex items-start gap-4 p-4 rounded-lg bg-surface hover:bg-surface-2 border border-border hover:border-accent transition-all duration-200">
                <div class="flex-1 min-w-0">
                  <span class="text-xs font-mono text-muted">{{ post.date }}</span>
                  <p class="text-base font-semibold text-text group-hover:text-accent transition-colors leading-snug mt-1">{{ post.title }}</p>
                  <p v-if="post.description" class="text-sm text-muted mt-1 leading-relaxed">{{ post.description }}</p>
                  <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mt-2">
                    <button
                      v-for="tag in post.tags"
                      :key="tag"
                      @click.prevent="activeTag = tag"
                      class="text-xs px-2 py-0.5 rounded-full transition-colors cursor-pointer"
                      :class="activeTag === tag ? 'bg-accent text-white' : 'bg-surface-2 text-muted hover:text-text'">{{ tag }}</button>
                  </div>
                </div>
              </div>
            </RouterLink>
          </article>
        </div>
      </template>

      <p v-if="!groupedPosts.length" class="text-muted mt-6">No posts found for this category.</p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';
import { posts } from '../data/posts.js';
import { externalPosts } from '../data/externalPosts.js';

useHead({ title: 'Articles — Warren Parad' });

const activeTag = ref(null);

const allPosts = [
  ...posts.map(p => ({ ...p, key: `local-${p.slug}`, external: false })),
  ...externalPosts.map(p => ({ ...p, key: `ext-${p.url}`, external: true })),
].sort((a, b) => b.date.localeCompare(a.date));

// Collect all unique tags across all posts, sorted by frequency
const allTags = computed(() => {
  const counts = {};
  for (const p of allPosts) {
    for (const t of (p.tags ?? [])) {
      counts[t] = (counts[t] ?? 0) + 1;
    }
  }
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
});

const filteredPosts = computed(() =>
  activeTag.value ? allPosts.filter(p => p.tags?.includes(activeTag.value)) : allPosts,
);

// Group filtered posts by year, most recent first
const groupedPosts = computed(() => {
  const groups = {};
  for (const post of filteredPosts.value) {
    const year = post.date?.slice(0, 4) ?? 'Other';
    if (!groups[year]) { groups[year] = []; }
    groups[year].push(post);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, items]) => ({ year, posts: items }));
});
</script>

<style scoped>
.no-underline { text-decoration: none; }
</style>
