<template>
  <main class="pt-14">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-border">
      <!-- Subtle radial glow behind content -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div class="relative max-w-5xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-8 md:gap-12">
        <!-- Photo with accent glow ring -->
        <div class="relative shrink-0 justify-self-center md:justify-self-start">
          <div class="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/40 to-teal/20 blur" />
          <img :src="profilePicture" class="relative rounded-full w-28 h-28 object-cover" alt="Warren Parad">
        </div>

        <div class="min-w-0">
          <!-- Eyebrow label -->
          <p class="text-xs font-mono tracking-widest uppercase text-accent mb-3">CTO · International Speaker · Tech Entertainer · AWS Community Builder</p>

          <h1 class="text-5xl md:text-6xl font-bold text-text leading-tight">Warren Parad</h1>

          <p class="mt-3 text-muted text-base leading-relaxed">
            CTO at <a href="https://authress.io" target="_blank" class="text-accent hover:underline">Authress</a>
            &nbsp;&mdash; building auth infrastructure for developers.
            Host of <em>Adventures in DevOps</em>. Conference speaker on security, architecture complexity, and engineering leadership.
          </p>

          <!-- Social links -->
          <div class="flex gap-4 mt-5 items-center">
            <a href="https://warrenparad.net/links/linkedin" target="_blank" class="opacity-70 hover:opacity-100 transition-opacity cursor-pointer" title="LinkedIn">
              <i class="fa-brands fa-linkedin fa-xl" style="color:#0077B5" />
            </a>
            <a href="https://github.com/wparad" target="_blank" class="text-muted hover:text-text transition-colors cursor-pointer" title="GitHub">
              <i class="fa-brands fa-github fa-xl" />
            </a>
            <a href="https://rhosys.ch/community" target="_blank" class="opacity-70 hover:opacity-100 transition-opacity cursor-pointer" title="IETF OAuth Working Group">
              <img :src="oauthImage" width="26" alt="IETF OAuth Working Group">
            </a>
            <a href="https://rhosys.ch/community" target="_blank" class="opacity-70 hover:opacity-100 transition-opacity cursor-pointer" title="Connect with me on Discord">
              <i class="fa-brands fa-discord fa-xl" style="color:#5865F2" />
            </a>
          </div>

          <!-- CTAs -->
          <div class="mt-6 flex flex-wrap gap-2">
            <button class="px-4 py-2 text-sm rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors cursor-pointer" @click="router.push('/fractional')">Hire me as an Advisor</button>
            <button class="px-4 py-2 text-sm rounded-lg font-medium text-white hover:opacity-80 transition-opacity cursor-pointer" style="background-color:#1db954;" @click="openPodcast"><i class="fa-solid fa-podcast fa-sm mr-1" /> Adventures in DevOps Podcast</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Speaker engagements -->
    <section id="speaker" class="py-14 px-4">
      <span id="appearances" class="sr-only" />
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-8">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Public Appearances</span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <VideoGrid />

        <div class="mt-12">
          <div class="flex items-center gap-3 mb-6">
            <h4 id="engagements" class="text-xs font-mono tracking-widest uppercase text-accent">All engagements</h4>
            <div class="flex-1 h-px bg-border" />
            <button class="text-xs text-muted hover:text-accent transition-colors cursor-pointer shrink-0" @click="openEmail('speaker')">Book a speaking engagement →</button>
          </div>
          <ul class="space-y-4 max-w-2xl">
            <li v-for="talk in talks" :key="talk.slug" class="border-l border-border pl-4 hover:border-accent transition-colors group">
              <RouterLink :to="`/talks/${talk.slug}`" class="block no-underline">
                <span class="text-xs text-muted font-mono">{{ talk.conference }}{{ talk.location ? ` · ${talk.location}` : '' }}{{ talk.year ? ` · ${talk.year}` : '' }}</span>
                <p class="text-text group-hover:text-accent transition-colors mt-0.5 text-sm">{{ talk.title }}</p>
              </RouterLink>
            </li>
          </ul>
        </div>

        <div v-if="posts.length" class="mt-14">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-xs font-mono tracking-widest uppercase text-accent">Writing</span>
            <div class="flex-1 h-px bg-border" />
            <RouterLink to="/blog" class="text-xs text-muted hover:text-accent transition-colors no-underline">All posts →</RouterLink>
          </div>
          <ul class="space-y-4 max-w-2xl">
            <li v-for="post in posts" :key="post.slug" class="border-l border-border pl-4 hover:border-accent transition-colors group">
              <RouterLink :to="`/blog/${post.slug}`" class="block no-underline">
                <span class="text-xs text-muted font-mono">{{ post.date }}</span>
                <p class="text-text group-hover:text-accent transition-colors mt-0.5 text-sm">{{ post.title }}</p>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '@unhead/vue';
import { RouterLink, useRouter } from 'vue-router';
import shortUUID from 'short-uuid';

import profilePicture from '../assets/profile.jpg';
import oauthImage from '../components/oauth.svg';
import VideoGrid from '../components/VideoGrid.vue';
import { talks } from '../data/talks.js';
import { posts } from '../data/posts.js';

useHead({ title: 'Warren Parad — Authress CTO & Public Speaker' });

const router = useRouter();
const key = shortUUID.generate().slice(0, 7);

const openPodcast = () => { window.open('https://adventuresindevops.com/docs/guests', '_blank'); };

const openEmail = type => {
  const props = {
    speaker: {
      email: `${encodeURIComponent(`Warren Parad<speaking+${key}`)}@rhosys.ch`,
      subject: 'Speaking appearance request for Warren Parad'
    }
  }[type];
  window.open(`mailto:${props.email}%3e?subject=${encodeURIComponent(props.subject)}`);
};

</script>
