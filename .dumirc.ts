import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/BaseForm.vue',
  },
  // 将包名映射到本地源码，供 dumi 站点解析
  alias: {
    'use-ele': resolve(__dirname, 'src/index.ts'),
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'use-ele',
  },
  presets: [require.resolve('@dumijs/preset-vue')],
});
