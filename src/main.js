import { nextTick } from 'vue';
import { ViteSSG } from 'vite-ssg';
import { createPinia } from 'pinia';
import posthog from 'posthog-js';

import App from './App.vue';
import routes from './router.js';
import { talks } from './data/talks.js';
import { posts } from './data/posts.js';
import './styles/main.css';

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _from, savedPosition) {
      if (to.hash) {
        // Vue Router's { el } uses getBoundingClientRect math that ignores
        // scroll-margin-top. Calling scrollIntoView() directly respects it.
        // Resolve with false so Vue Router doesn't override our scroll.
        return new Promise(resolve => {
          nextTick(() => {
            document.querySelector(to.hash)?.scrollIntoView();
            resolve(false);
          });
        });
      }
      // The page scroll container is a div, not window — { top: 0 } would target
      // window which has no scroll (outer shell is overflow:hidden). Drive the
      // container directly so both fresh navigations and back/forward work.
      return new Promise(resolve => {
        nextTick(() => {
          document.getElementById('scroll-container')?.scrollTo({ top: savedPosition?.top ?? 0 });
          resolve(false);
        });
      });
    },
  },
  ({ app, isClient, router }) => {
    app.use(createPinia());

    if (isClient) {
      posthog.init('phc_zSUdkkUcXMToQdah2tmTfZifTMaAAdg2nzcJpq4FhbRx', {
        api_host: 'https://live.rhosys.ch',
        ui_host: 'https://eu.posthog.com',
        defaults: '2026-01-30',
        capture_pageview: false,
      });

      router.afterEach((to) => {
        posthog.capture('$pageview', { $current_url: to.fullPath });
      });
    }
  },
);

export function includedRoutes(paths) {
  return paths.flatMap(path => {
    if (path === '/talks/:slug') {return talks.map(t => `/talks/${t.slug}`);}
    if (path === '/articles/:slug') {return posts.map(p => `/articles/${p.slug}`);}
    return [path];
  });
}
