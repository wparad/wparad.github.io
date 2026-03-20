import { resolve } from 'path';
import { writeFileSync, readFileSync, readdirSync, existsSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'unplugin-vue-markdown/vite';
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';

// Read talk slugs from talks.js source via regex — avoids importing ESM with import.meta.glob
function getTalkSlugs() {
  const src = readFileSync('./src/data/talks.js', 'utf-8');
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
}

// Derive post slugs from directory names: YYYY-MM-DD-slug → slug
function getPostSlugs() {
  const postsDir = './src/posts';
  if (!existsSync(postsDir)) { return []; }
  return readdirSync(postsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name.replace(/^\d{4}-\d{2}-\d{2}-/, ''))
    .filter(Boolean);
}

function sitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const base = 'https://warrenparad.net';
      const routes = [
        '/', '/fractional', '/resume', '/articles',
        ...getTalkSlugs().map(s => `/talks/${s}`),
        ...getPostSlugs().map(s => `/articles/${s}`),
      ];
      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...routes.map(path => `  <url><loc>${base}${path}</loc></url>`),
        '</urlset>',
      ].join('\n');
      writeFileSync('dist/sitemap.xml', xml, 'utf-8');
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    Markdown({}),
    vue({ include: [/\.vue$/, /\.md$/] }),
    sitemapPlugin(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({ buffer: true })
      ]
    }
  },
  define: {
    VERSION_INFO: JSON.stringify({
      releaseDate: new Date().toISOString(),
      buildNumber: process.env.CI_PIPELINE_ID,
      buildRef: process.env.CI_COMMIT_REF_NAME,
      buildCommit: process.env.CI_COMMIT_SHORT_SHA
    }),
    DEPLOYMENT_INFO: JSON.stringify({
      FDQN: process.env.HOSTED_NAME,
      LOG_TARGET: process.env.LOG_TARGET
    })
  }
});
