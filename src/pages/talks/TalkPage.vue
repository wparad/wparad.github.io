<template>
  <main class="pt-14 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-12">
      <!-- Back nav -->
      <button class="inline-flex items-center gap-2 text-muted hover:text-accent text-sm mb-8 transition-colors cursor-pointer bg-transparent border-none p-0" @click="goBack">
        <i class="fa-solid fa-arrow-left" /> All talks
      </button>

      <template v-if="talk">
        <!-- Conference header -->
        <div class="mb-2 text-xs font-mono text-accent tracking-widest uppercase">
          {{ [talk.conference, talk.location].filter(Boolean).join(' · ') }}
          <span v-if="talk.year"> · {{ talk.year }}</span>
        </div>

        <!-- Talk title -->
        <h1 class="text-3xl font-bold text-text mb-6 leading-tight">{{ talk.title }}</h1>

        <!-- Links row -->
        <div v-if="talk.eventUrl || talk.articleUrl || talk.slidesUrl" class="flex flex-wrap gap-3 mb-8">
          <!-- Event page — primary CTA -->
          <a
            v-if="talk.eventUrl"
            :href="talk.eventUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors no-underline"
          >
            <i class="fa-solid fa-calendar-days" />
            {{ [talk.conference, talk.location, talk.year].filter(Boolean).join(' · ') }} Event
          </a>

          <!-- Article / transcript — mutually exclusive with slides -->
          <a
            v-if="talk.articleUrl"
            :href="talk.articleUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors no-underline"
          >
            <i class="fa-solid fa-file-lines" /> Full article &amp; transcript
          </a>

          <!-- Slides — shown independently alongside article if both exist -->
          <a
            v-if="talk.slidesUrl"
            :href="talk.slidesUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors no-underline"
          >
            <i class="fa-solid fa-display" /> View slides
          </a>
        </div>

        <!-- YouTube embed with loading spinner -->
        <div v-if="embedUrl" class="mb-8">
          <div class="relative aspect-video rounded-xl overflow-hidden bg-surface">
            <!-- Spinner overlay -->
            <div
              v-if="videoLoading"
              class="absolute inset-0 flex items-center justify-center bg-surface z-10"
            >
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
              @load="onVideoLoad"
            />
          </div>
        </div>

        <!-- Description -->
        <div v-if="talk.description" class="text-muted leading-relaxed">
          <p>{{ talk.description }}</p>
        </div>
      </template>

      <!-- 404 state -->
      <template v-else>
        <h1 class="text-2xl font-bold text-text mb-4">Talk not found</h1>
        <p class="text-muted">This talk doesn't exist or may have been removed.</p>
        <RouterLink to="/" class="inline-flex items-center gap-2 text-accent hover:underline mt-4 no-underline">
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

const route = useRoute();
const router = useRouter();
const talk = computed(() => talks.find(t => t.slug === route.params.slug));
const goBack = () => {
  if (window.history.length > 1) { router.back(); }
  else { router.push('/'); }
};
const embedUrl = computed(() => youtubeEmbedUrl(talk.value?.videoUrl));

const videoLoading = ref(true);
const onVideoLoad = () => { videoLoading.value = false; };

useHead(computed(() => ({
  title: talk.value ? `${talk.value.title} — Warren Parad` : 'Talk — Warren Parad',
  link: talk.value?.articleUrl
    ? [{ rel: 'canonical', href: talk.value.articleUrl }]
    : [],
})));
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
