import { ViteSSG } from 'vite-ssg';
import { createPinia } from 'pinia';

import App from './App.vue';
import routes from './router.js';
import { talks } from './data/talks.js';
import { posts } from './data/posts.js';
import './styles/main.css';

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) { return savedPosition; }
      if (to.hash) {
        // When navigating cross-page, the target element may not exist yet.
        // Wait for the page to render before scrolling.
        const sameRoute = from && to.path === from.path;
        const delay = sameRoute ? 0 : 100;
        return new Promise(resolve =>
          setTimeout(() => resolve({ el: to.hash, behavior: 'smooth', top: 64 }), delay)
        );
      }
      return { top: 0 };
    },
  },
  ({ app }) => {
    app.use(createPinia());
  }
);

export function includedRoutes(paths) {
  return paths.flatMap(path => {
    if (path === '/talks/:slug') return talks.map(t => `/talks/${t.slug}`);
    if (path === '/blog/:slug') return posts.map(p => `/blog/${p.slug}`);
    return [path];
  });
}
