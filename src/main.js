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
    scrollBehavior() {
      return { top: 0 };
    },
  },
  ({ app }) => {
    app.use(createPinia());
  },
);

export function includedRoutes(paths) {
  return paths.flatMap(path => {
    if (path === '/talks/:slug') {return talks.map(t => `/talks/${t.slug}`);}
    if (path === '/articles/:slug') {return posts.map(p => `/articles/${p.slug}`);}
    return [path];
  });
}
