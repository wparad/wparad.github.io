<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    <div v-for="talk in featuredTalks" :key="talk.slug" class="flex flex-col w-full">
      <div class="relative aspect-video w-full rounded-xl overflow-hidden bg-surface">
        <!-- Spinner overlay -->
        <div
          v-if="loadingState[talk.slug]"
          class="absolute inset-0 flex items-center justify-center bg-surface z-10">
          <i class="fa-solid fa-circle-notch fa-spin fa-xl text-accent" />
        </div>
        <iframe
          width="100%"
          height="100%"
          :src="talk.embedUrl"
          :title="talk.videoTitle"
          frameborder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          @load="onLoad(talk.slug)" />
      </div>
      <p class="mt-2 text-xs text-muted font-mono">
        <template v-if="talk.conference">
          {{ talk.conference }}{{ talk.location ? ` · ${talk.location}` : '' }}
        </template>
        <template v-else>
          {{ talk.videoTitle }}
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { featuredTalks } from '../data/talks.js';

const loadingState = reactive(Object.fromEntries(featuredTalks.map(t => [t.slug, true])));

const onLoad = slug => { loadingState[slug] = false; };
</script>
