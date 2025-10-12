import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  // 将包名映射到本地源码，供 dumi 站点解析
  alias: {
    'use-ele': resolve(__dirname, 'src/index.ts'),
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'use-ele',
  },
  // 在 dumi(Umi 4) 构建里通过 PostCSS 处理 Tailwind v4
  extraPostCSSPlugins: [require('@tailwindcss/postcss')],
  presets: [require.resolve('@dumijs/preset-vue')],
});
