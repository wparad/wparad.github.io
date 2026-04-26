<template>
  <main class="mx-auto px-4 py-12 text-center" style="max-width: 480px">
    <p class="text-muted text-sm">Redirecting to scheduling page…</p>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useHead } from '@unhead/vue';
import { SITE_URL as BASE_URL } from '../config.js';

const CALENDAR_URL = atob('aHR0cHM6Ly9jYWxlbmRhci5hcHAuZ29vZ2xlLzhkTE5aNTdBUWRnRzZQWXQ2');

useHead({
  title: 'Schedule a Meeting — Warren Parad',
  meta: [
    { name: 'description', content: 'Schedule time with Warren Parad — Authress CTO, Fractional CTO, and international speaker.' },
    { property: 'og:title', content: 'Schedule a Meeting — Warren Parad' },
    { property: 'og:description', content: 'Schedule time with Warren Parad — Authress CTO, Fractional CTO, and international speaker.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}/schedule` },
    { property: 'og:image', content: `${BASE_URL}/images/og-profile.jpg` },
    { property: 'og:image:alt', content: 'Warren Parad' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:image', content: `${BASE_URL}/images/og-profile.jpg` },
  ],
});

onMounted(() => {
  window.location.replace(CALENDAR_URL);
});
</script>
