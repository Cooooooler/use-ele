import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const externals = ['vue'];

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [...externals],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      'use-ele': resolve(__dirname, 'src/index.ts'),
    },
    dedupe: ['vue'],
  },
  optimizeDeps: {
    include: [...externals],
  },
});
