import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'node:path';


export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    // Map package name to local source during tests
    alias: {
      'use-ele': resolve(__dirname, 'src/index.ts'),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['./**/*.test.{ts,js,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['html', 'text', 'json'],
    },
  },
});
