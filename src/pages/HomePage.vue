<template>
  <main>
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
          <h1 class="text-5xl md:text-6xl font-bold text-text leading-tight">Warren Parad</h1>

          <!-- Subtitle — "International" hidden on small screens to prevent wrapping -->
          <p class="text-xs font-mono tracking-widest uppercase text-accent mt-2 mb-3">CTO · <span class="hidden sm:inline">International </span>Speaker · Tech Entertainer · AWS Community Builder</p>

          <p class="mt-3 text-muted text-base leading-relaxed">
            CTO at <a href="https://authress.io" target="_blank" class="text-accent hover:underline">Authress</a>
            &nbsp;&mdash; building auth infrastructure for developers.
            Host of <a href="https://adventuresindevops.com" target="_blank" class="text-accent hover:underline"><em>Adventures in DevOps</em></a>. Conference speaker on security, architecture complexity, and engineering leadership.
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
            <a href="https://adventuresindevops.com" target="_blank" rel="noopener noreferrer" class="opacity-70 hover:opacity-100 transition-opacity cursor-pointer" title="Adventures in DevOps Podcast" style="color:#1db954;">
              <i class="fa-solid fa-podcast fa-xl" />
            </a>
          </div>

          <!-- CTAs — plain <a> tags so they work with JS disabled -->
          <div class="mt-6 flex flex-wrap gap-2">
            <a href="/fractional" class="inline-block px-4 py-2 text-sm rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors cursor-pointer">Hire me as Advisor</a>
            <a href="https://adventuresindevops.com" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 text-sm rounded-lg font-medium text-white hover:opacity-80 transition-opacity cursor-pointer" style="background-color:#1db954;"><i class="fa-solid fa-podcast fa-sm mr-1" /> Adventures in DevOps Podcast</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Speaker engagements -->
    <section id="speaker" class="py-14 px-4">
      <div class="max-w-5xl mx-auto">
        <div id="engagements">
          <div class="flex items-center gap-3 mb-6">
            <h4 id="appearances" class="section-anchor text-xs font-mono tracking-widest uppercase text-accent cursor-pointer group/anchor" @click="copyAnchor('appearances')">
              Public appearances
              <i class="fa-solid fa-link fa-xs ml-1 opacity-0 group-hover/anchor:opacity-50 transition-opacity" />
              <span v-if="copied === 'appearances'" class="ml-1 text-accent opacity-75">✓</span>
            </h4>
            <div class="flex-1 h-px bg-border" />
            <button class="text-xs text-muted hover:text-accent transition-colors cursor-pointer shrink-0 js-only" @click="openEmail('speaker')">Book a speaking engagement →</button>
            <noscript><span class="text-xs text-muted shrink-0">Enable JavaScript to book a speaking engagement</span></noscript>
          </div>
          <ul class="space-y-4 max-w-2xl">
            <li v-for="talk in talks" :key="talk.slug" class="border-l border-border pl-4 hover:border-accent transition-colors group">
              <RouterLink :to="{ name: 'talk', params: { slug: talk.slug } }" class="block no-underline">
                <span class="text-xs text-muted font-mono">{{ talk.conference }}{{ talk.location ? ` · ${talk.location}` : '' }}{{ talk.date ? ` · ${talk.date.slice(0, 4)}` : '' }}</span>
                <p class="text-text group-hover:text-accent transition-colors mt-0.5 text-sm">{{ talk.title }}</p>
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <div class="flex items-center gap-3 mb-8">
            <span id="recordings" class="section-anchor text-xs font-mono tracking-widest uppercase text-accent cursor-pointer group/anchor" @click="copyAnchor('recordings')">
              Recorded speaking engagements
              <i class="fa-solid fa-link fa-xs ml-1 opacity-0 group-hover/anchor:opacity-50 transition-opacity" />
              <span v-if="copied === 'recordings'" class="ml-1 text-accent opacity-75">✓</span>
            </span>
            <div class="flex-1 h-px bg-border" />
            <button class="text-xs text-muted hover:text-accent transition-colors cursor-pointer shrink-0 js-only" @click="openEmail('speaker')">Book a speaking engagement →</button>
            <noscript><span class="text-xs text-muted shrink-0">Enable JavaScript to book a speaking engagement</span></noscript>
          </div>
          <VideoGrid />
        </div>

        <div class="mt-14">
          <div class="flex items-center gap-3 mb-6">
            <RouterLink :to="{ name: 'articles' }" class="text-xs font-mono tracking-widest uppercase text-accent hover:text-accent/70 transition-colors no-underline cursor-pointer">Articles</RouterLink>
            <div class="flex-1 h-px bg-border" />
            <RouterLink :to="{ name: 'articles' }" class="text-xs text-muted hover:text-accent transition-colors no-underline">All articles →</RouterLink>
          </div>
          <ul class="space-y-5 max-w-2xl">
            <li v-for="post in recentPosts" :key="post.key" class="group">
              <component
                :is="post.external ? 'a' : RouterLink"
                v-bind="post.external ? { href: post.url, target: '_blank', rel: 'noopener noreferrer' } : { to: { name: 'article', params: { slug: post.slug } } }"
                class="block no-underline"
              >
                <div class="flex items-start gap-2">
                  <span class="text-xs text-muted font-mono mt-0.5 shrink-0">{{ post.date }}</span>
                  <span v-if="post.source === 'authress'" class="text-xs px-1.5 py-0.5 rounded bg-teal/20 text-teal font-medium shrink-0">Authress Engineering KB</span>
                </div>
                <p class="text-text group-hover:text-accent transition-colors text-sm font-medium mt-1">{{ post.title }}</p>
                <p v-if="post.description" class="text-xs text-muted mt-0.5 leading-relaxed line-clamp-2">{{ post.description }}</p>
              </component>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import { RouterLink, useRouter } from 'vue-router';
import shortUUID from 'short-uuid';

import profilePicture from '../assets/profile.jpg';
import oauthImage from '../components/oauth.svg';
import VideoGrid from '../components/VideoGrid.vue';
import { talks } from '../data/talks.js';
import { posts } from '../data/posts.js';
import { externalPosts } from '../data/externalPosts.js';
import { SITE_URL as BASE_URL } from '../config.js';
useHead({
  title: 'Warren Parad — Authress CTO & Public Speaker',
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Warren Parad',
        'url': BASE_URL,
        'jobTitle': 'CTO',
        'worksFor': { '@type': 'Organization', 'name': 'Authress', 'url': 'https://authress.io' },
        'sameAs': [
          'https://github.com/wparad',
          'https://infosec.exchange/@wparad',
          'https://warrenparad.net/links/linkedin',
        ],
        'description': 'Authress CTO, International Speaker, Cloud Security Architect, AWS Community Builder, Host of Adventures in DevOps',
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Warren Parad',
        'url': BASE_URL,
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${BASE_URL}/articles?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],
});

const router = useRouter();
const key = shortUUID.generate().slice(0, 7);
const copied = ref(null);

const copyAnchor = id => {
  const url = `${window.location.origin}${window.location.pathname}#${id}`;
  router.replace({ hash: `#${id}` });
  navigator.clipboard?.writeText(url);
  copied.value = id;
  setTimeout(() => { copied.value = null; }, 2000);
};

const recentPosts = [
  ...posts.map(p => ({ ...p, key: `local-${p.slug}`, external: false })),
  ...externalPosts.map(p => ({ ...p, key: `ext-${p.url}`, external: true })),
].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10);

const openEmail = type => {
  const props = {
    speaker: {
      email: `${encodeURIComponent(`Warren Parad<speaking+${key}`)}@rhosys.ch`,
      subject: 'Speaking appearance request for Warren Parad',
    },
  }[type];
  window.open(`mailto:${props.email}%3e?subject=${encodeURIComponent(props.subject)}`);
};
</script>
