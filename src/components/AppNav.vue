<template>
  <nav class="fixed top-0 w-full z-50 bg-surface border-b border-border">
    <!-- Header row -->
    <div class="max-w-7xl mx-auto px-4 flex items-center h-14 gap-6">
      <RouterLink :to="{ name: 'home' }" class="nav-link flex items-center gap-1.5 text-sm font-medium shrink-0">
        <i class="fa-solid fa-house fa-sm" /> Me
      </RouterLink>

      <!-- Links — always visible -->
      <div class="flex items-center">
        <a href="/#appearances" class="nav-link text-xs sm:text-sm px-2 sm:px-4 py-1">Appearances</a>
        <RouterLink :to="{ name: 'articles' }" class="nav-link articles-nav text-xs sm:text-sm px-2 sm:px-4 py-1">Articles</RouterLink>
        <RouterLink :to="{ name: 'resume' }" class="nav-link text-xs sm:text-sm px-2 sm:px-4 py-1">Resume</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.nav-link {
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.15s;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-text);
}
.nav-link.router-link-exact-active,
.articles-nav.router-link-active {
  color: var(--color-accent);
}
</style>
