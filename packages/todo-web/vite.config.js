// packages/todo-web/vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // Force Vite to point 'vue' to the full ESM bundle with template compilation
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
});
