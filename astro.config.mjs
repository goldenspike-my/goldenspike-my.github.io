// @ts-check
import { defineConfig } from 'astro/config';
import rehypeFigures from './src/lib/rehype-figures.mjs';

// 网址设定：GitHub 自动发布时会自动填入，平常不用改。
// SITE_URL 例如 https://你的账号.github.io
// BASE_PATH 例如 /goldenspike-site（如果仓库名是 你的账号.github.io 就是 /）
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  // 文章图片：说明文字 + 大小/位置关键词（见 src/lib/rehype-figures.mjs）
  markdown: { rehypePlugins: [rehypeFigures] },
});
