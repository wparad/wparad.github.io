import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'unplugin-vue-markdown/vite';
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    Markdown({}),
    vue({ include: [/\.vue$/, /\.md$/] }),
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
