<template>
  <nav class="fixed top-0 w-full z-50 bg-surface border-b border-border">
    <div class="max-w-7xl mx-auto px-4 flex items-center h-14 gap-6">
      <!-- Home link -->
      <RouterLink to="/" class="flex items-center gap-1.5 text-text hover:text-accent transition-colors text-sm font-medium no-underline shrink-0">
        <i class="fa-solid fa-house fa-sm" /> Me
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-6">
        <a href="/#engagements" class="text-muted hover:text-text transition-colors text-sm no-underline">Appearances</a>
        <RouterLink to="/blog" class="text-muted hover:text-text transition-colors text-sm no-underline">Blog</RouterLink>
        <RouterLink to="/resume" class="text-muted hover:text-text transition-colors text-sm no-underline">Resume</RouterLink>
      </div>

      <!-- Mobile toggle -->
      <button
        class="ml-auto md:hidden text-muted hover:text-text transition-colors p-1 cursor-pointer"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <i v-if="!menuOpen" class="fa-solid fa-bars fa-lg" />
        <i v-else class="fa-solid fa-xmark fa-lg" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-surface border-t border-border px-4 py-4 flex flex-col gap-4">
      <a href="/#engagements" class="text-muted hover:text-text transition-colors text-sm no-underline" @click="menuOpen = false">Appearances</a>
      <RouterLink to="/blog" class="text-muted hover:text-text transition-colors text-sm no-underline" @click="menuOpen = false">Blog</RouterLink>
      <RouterLink to="/resume" class="text-muted hover:text-text transition-colors text-sm no-underline" @click="menuOpen = false">Resume</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
