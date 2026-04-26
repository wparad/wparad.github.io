<template>
  <main>
    <div class="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <!-- Back nav -->
      <button class="hidden sm:inline-flex items-center gap-2 text-muted hover:text-accent text-sm mb-8 transition-colors cursor-pointer bg-transparent border-none p-0" @click="goBack">
        <i class="fa-solid fa-arrow-left" /> All talks
      </button>

      <template v-if="talk">
        <!-- Conference header -->
        <div class="mb-2 text-xs font-mono text-accent tracking-widest uppercase">
          {{ [talk.conference, talk.location].filter(Boolean).join(' · ') }}
          <span v-if="talk.date"> · {{ monthYear(talk.date) }}</span>
        </div>

        <!-- Talk title -->
        <h1 class="text-3xl font-bold text-text mb-3 leading-tight">{{ talk.title }}</h1>

        <!-- Type badge -->
        <div class="mb-6">
          <span :class="['text-xs font-medium px-1.5 py-0.5 rounded', talk.type === 'podcast' ? 'bg-emerald-900/40 text-emerald-400' : 'bg-accent/15 text-accent']">
            {{ talk.type === 'podcast' ? 'Podcast' : 'Talk' }}
          </span>
        </div>

        <!-- Normal mode: links row -->
        <div v-if="!isEventMode && (talk.eventUrl || talk.articleUrl || talk.canonicalUrl || talk.slidesUrl)" class="flex flex-wrap gap-3 mb-8">
          <a
            v-if="talk.eventUrl && talk.type === 'podcast'"
            :href="talk.eventUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg font-medium text-white hover:opacity-80 transition-opacity no-underline"
            style="background-color:#1db954">
            <i class="fa-solid fa-podcast" />
            {{ talk.conference }} · Listen to Episode
          </a>
          <a
            v-if="talk.eventUrl && talk.type !== 'podcast'"
            :href="talk.eventUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors no-underline">
            <i class="fa-solid fa-calendar-days" />
            {{ [talk.conference, talk.location].filter(Boolean).join(' · ') }}
          </a>
          <a
            v-if="talk.articleUrl"
            :href="talk.articleUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors no-underline">
            <i class="fa-solid fa-file-lines" /> Full article &amp; transcript
          </a>
          <a
            v-if="talk.type !== 'podcast' && (talk.slidesUrl || talk.canonicalUrl)"
            :href="talk.slidesUrl ?? talk.canonicalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors no-underline">
            <i class="fa-solid fa-display" /> View slides
          </a>
        </div>

        <!-- Cover image fallback (no video) -->
        <a
          v-if="!embedUrl && talk.imageUrl && talk.eventUrl"
          :href="talk.eventUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="block mb-8 rounded-xl overflow-hidden no-underline">
          <img :src="talk.imageUrl" :alt="talk.title" class="w-full object-cover">
        </a>
        <div v-else-if="!embedUrl && talk.imageUrl" class="mb-8 rounded-xl overflow-hidden">
          <img :src="talk.imageUrl" :alt="talk.title" class="w-full object-cover">
        </div>

        <!-- YouTube embed with loading spinner -->
        <div v-if="embedUrl" class="mb-8">
          <div class="relative aspect-video rounded-xl overflow-hidden bg-surface">
            <div
              v-if="videoLoading"
              class="absolute inset-0 flex items-center justify-center bg-surface z-10">
              <i class="fa-solid fa-circle-notch fa-spin fa-2x text-accent" />
            </div>
            <iframe
              width="100%"
              height="100%"
              :src="embedUrl"
              :title="talk.videoTitle || talk.title"
              frameborder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              @load="onVideoLoad" />
          </div>
        </div>

        <!-- Description -->
        <div v-if="talk.description" :class="['text-muted leading-relaxed', isEventMode && 'mb-8']">
          <!-- Mobile event mode: single clamped paragraph -->
          <p v-if="isEventMode" class="sm:hidden description-clamp">{{ talk.description.replace(/\n\n/g, ' ') }}</p>
          <!-- Desktop (always) / mobile normal mode: full multi-paragraph -->
          <div :class="isEventMode ? 'hidden sm:block space-y-4' : 'space-y-4'">
            <p v-for="(paragraph, i) in talk.description.split('\n\n')" :key="i">{{ paragraph }}</p>
          </div>
        </div>

        <!-- Event mode: connect cards (desktop) / buttons (mobile) -->
        <div v-if="isEventMode" class="mb-8">
          <!-- Mobile: stacked buttons -->
          <div class="flex flex-col gap-3 sm:hidden">
            <a
              href="https://warrenparad.net/links/linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base rounded-lg font-medium text-white transition-colors no-underline"
              style="background-color:#0077B5">
              <i class="fa-brands fa-linkedin" /> Connect on LinkedIn
            </a>
            <a
              href="https://adventuresindevops.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base rounded-lg font-medium text-white transition-colors no-underline"
              style="background-color:#1db954">
              <i class="fa-solid fa-podcast" /> Adventures in DevOps
            </a>
          </div>

          <!-- Desktop: side-by-side cards -->
          <div class="hidden sm:grid grid-cols-2 gap-4">
            <a
              href="https://warrenparad.net/links/linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-accent transition-colors no-underline">
              <img :src="profilePicture" class="rounded-full w-16 h-16 object-cover" alt="Warren Parad">
              <i class="fa-brands fa-linkedin fa-2x" style="color:#0077B5" />
              <div class="text-center">
                <p class="text-text font-medium text-sm">Warren Parad</p>
                <p class="text-muted text-xs mt-0.5">Connect on LinkedIn</p>
              </div>
            </a>
            <a
              href="https://adventuresindevops.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-border hover:border-accent transition-colors no-underline">
              <i class="fa-solid fa-podcast fa-3x" style="color:#1db954" />
              <div class="text-center">
                <p class="text-text font-medium text-sm">Adventures in DevOps</p>
                <p class="text-muted text-xs mt-0.5">Listen to the podcast</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Event mode: slides + share buttons -->
        <div v-if="isEventMode && (talk.articleUrl || talk.canonicalUrl || talk.slidesUrl || canShare)" class="flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            v-if="talk.articleUrl || talk.canonicalUrl"
            :href="talk.articleUrl ?? talk.canonicalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-3 px-6 py-3 text-base rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors no-underline sm:w-auto">
            <i class="fa-solid fa-file-lines" /> Full article &amp; transcript
          </a>
          <a
            v-if="talk.slidesUrl"
            :href="talk.slidesUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-3 px-6 py-3 text-base rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors no-underline sm:w-auto">
            <i class="fa-solid fa-display" /> View slides
          </a>
          <button
            v-if="canShare"
            class="inline-flex items-center justify-center gap-3 px-6 py-3 text-base rounded-lg font-medium text-white transition-colors border-0 cursor-pointer sm:w-auto"
            :class="{ 'sm:hidden': !isDev }"
            style="background-color:#7c3aed"
            @click="shareTalk">
            <i class="fa-solid fa-share-nodes" /> Share talk
          </button>
        </div>
      </template>

      <!-- 404 state -->
      <template v-else>
        <h1 class="text-2xl font-bold text-text mb-4">Talk not found</h1>
        <p class="text-muted">This talk doesn't exist or may have been removed.</p>
        <RouterLink :to="{ name: 'home' }" class="inline-flex items-center gap-2 text-accent hover:underline mt-4 no-underline">
          <i class="fa-solid fa-arrow-left" /> Back to home
        </RouterLink>
      </template>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';
import { talks, youtubeEmbedUrl } from '../../data/talks.js';
import profilePicture from '../../assets/profile.jpg';
import { SITE_URL as BASE_URL } from '../../config.js';

const route = useRoute();
const router = useRouter();
const talk = computed(() => talks.find(t => t.slug === route.params.slug));
const isEventMode = computed(() => route.query.E !== undefined);
const goBack = () => {
  if (window.history.length > 1) { router.back(); } else { router.push({ name: 'home' }); }
};
const embedUrl = computed(() => youtubeEmbedUrl(talk.value?.videoUrl));

const monthYear = date => new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const videoLoading = ref(true);
const onVideoLoad = () => { videoLoading.value = false; };

const isDev = typeof location !== 'undefined' && location.hostname === 'localhost';
const canShare = isDev || (typeof navigator !== 'undefined' && !!navigator.share);
const shareTalk = () => {
  navigator.share({ title: talk.value?.title, url: window.location.href });
};

useHead(computed(() => {
  const t = talk.value;
  if (!t) { return { title: 'Talk — Warren Parad' }; }
  return {
    title: `${t.title} — Warren Parad`,
    link: t.canonicalUrl ? [{ rel: 'canonical', href: t.canonicalUrl }] : [],
    meta: [
      { name: 'description', content: t.description },
      { property: 'og:title', content: `${t.title} — Warren Parad` },
      { property: 'og:description', content: t.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `${BASE_URL}/talks/${t.slug}` },
      ...(t.imageUrl ? [
        { property: 'og:image', content: t.imageUrl },
        { property: 'og:image:alt', content: t.title },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: t.imageUrl },
      ] : []),
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Event',
          'name': t.title,
          'description': t.description,
          'startDate': t.date,
          'url': t.eventUrl || `${BASE_URL}/talks/${t.slug}`,
          'location': { '@type': 'Place', 'name': `${t.conference}${t.location ? `, ${t.location}` : ''}` },
          'organizer': { '@type': 'Organization', 'name': t.conference },
          'performer': { '@type': 'Person', 'name': 'Warren Parad', 'url': BASE_URL },
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL },
            { '@type': 'ListItem', 'position': 2, 'name': t.title, 'item': `${BASE_URL}/talks/${t.slug}` },
          ],
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
</style>
