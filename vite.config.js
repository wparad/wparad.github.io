import { resolve } from 'path';
import { writeFileSync, readFileSync, readdirSync, existsSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'unplugin-vue-markdown/vite';
import anchor from 'markdown-it-anchor';
import container from 'markdown-it-container';

// Wraps the fence renderer to prepend a title bar when `title="..."` is present in the info string
function codeTitlePlugin(md) {
  const defaultFence = md.renderer.rules.fence || ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const titleMatch = token.info.match(/title="([^"]+)"/);
    const rendered = defaultFence(tokens, idx, options, env, self);
    if (!titleMatch) { return rendered; }
    return `<div class="code-block-with-title"><div class="code-block-title">${titleMatch[1]}</div>${rendered}</div>`;
  };
}

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
    Markdown({
      async markdownItSetup(md) {
        const { createHighlighter } = await import('shiki');
        const { fromHighlighter } = await import('@shikijs/markdown-it');
        const { transformerNotationHighlight, transformerNotationDiff } = await import('@shikijs/transformers');
        const highlighter = await createHighlighter({
          themes: ['github-dark'],
          langs: ['javascript', 'typescript', 'json', 'jsonc', 'bash', 'shell', 'yaml', 'html', 'css', 'markdown', 'python'],
        });
        md.use(fromHighlighter(highlighter, { theme: 'github-dark', transformers: [transformerNotationHighlight(), transformerNotationDiff()] }));
        md.use(anchor, {
          slugify: s => s.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-'),
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-label': 'permalink', 'tabindex': '-1' }),
          }),
        });
        md.use(codeTitlePlugin);
        md.use(container, 'info', {
          render(tokens, idx) {
            return tokens[idx].nesting === 1
              ? '<div class="admonition admonition-info">\n'
              : '</div>\n';
          },
        });
        md.use(container, 'warn', {
          render(tokens, idx) {
            return tokens[idx].nesting === 1
              ? '<div class="admonition admonition-warn">\n'
              : '</div>\n';
          },
        });
      },
    }),
    vue({ include: [/\.vue$/, /\.md$/] }),
    sitemapPlugin(),
  ],
  base: '/',
  ssr: {
    noExternal: ['shiki', '@shikijs/markdown-it'],
  },
  build: {
    outDir: 'dist',
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
