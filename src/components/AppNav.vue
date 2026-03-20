<template>
  <nav class="fixed top-0 w-full z-50 bg-surface border-b border-border">
    <!-- Hidden checkbox drives mobile menu state — no JS needed -->
    <input type="checkbox" id="nav-toggle" class="nav-toggle sr-only" aria-label="Toggle navigation" />

    <!-- Header row -->
    <div class="nav-bar max-w-7xl mx-auto px-4 flex items-center h-14 gap-6">
      <RouterLink :to="{ name: 'home' }" class="nav-link flex items-center gap-1.5 text-sm font-medium shrink-0">
        <i class="fa-solid fa-house fa-sm" /> Me
      </RouterLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-6">
        <a href="/#appearances" class="nav-link text-sm">Appearances</a>
        <RouterLink :to="{ name: 'articles' }" class="nav-link text-sm">Articles</RouterLink>
        <RouterLink :to="{ name: 'resume' }" class="nav-link text-sm">Resume</RouterLink>
      </div>

      <!-- Hamburger label — clicking toggles the checkbox -->
      <label for="nav-toggle" class="hamburger ml-auto md:hidden text-muted hover:text-text transition-colors p-1 cursor-pointer" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars fa-lg icon-closed" />
        <i class="fa-solid fa-xmark fa-lg icon-open" />
      </label>
    </div>

    <!-- Mobile menu — shown/hidden via CSS when checkbox is checked -->
    <div class="mobile-menu md:hidden bg-surface border-t border-border px-4 py-4 flex flex-col gap-4">
      <a href="/#appearances" class="nav-link text-sm">Appearances</a>
      <RouterLink :to="{ name: 'articles' }" class="nav-link text-sm">Articles</RouterLink>
      <RouterLink :to="{ name: 'resume' }" class="nav-link text-sm">Resume</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Mobile menu: hidden by default */
.mobile-menu {
  display: none;
}

/* Toggle icon states */
.icon-open {
  display: none;
}

/* When checkbox is checked, show menu and flip icon */
.nav-toggle:checked ~ .nav-bar .icon-open  { display: inline; }
.nav-toggle:checked ~ .nav-bar .icon-closed { display: none; }
.nav-toggle:checked ~ .mobile-menu          { display: flex; }

/* Nav links */
.nav-link {
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.15s;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-text);
}
.nav-link.router-link-exact-active {
  color: var(--color-accent);
}
</style>
