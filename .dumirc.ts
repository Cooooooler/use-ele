import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

export default defineConfig({
  apiParser: {},
  resolve: {
    // 将入口文件改为库入口，避免指向不存在的 src/BaseForm.vue
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
  presets: [require.resolve('@dumijs/preset-vue')],
});
