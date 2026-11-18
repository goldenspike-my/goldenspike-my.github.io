// 读出 public/ 里图片的宽和高，写进 <img width height>。
// 浏览器先知道图片多大，就会先留好位置，图片载入时页面不会往下跳。
import { readFileSync } from 'node:fs';
import { imageMetadata } from 'astro/assets/utils';

const cache = new Map();

/** src 例如 "/uploads/blog/a.jpg"；读不到（外部网址、文件不在）就回传 {} */
export async function imageSize(src) {
  if (!src || /^https?:\/\//.test(src)) return {};
  const path = `public/${String(src).replace(/^\//, '')}`;
  if (!cache.has(path)) {
    let size = {};
    try {
      const { width, height } = await imageMetadata(readFileSync(path), path);
      size = { width, height };
    } catch { /* 读不到就不写宽高，跟以前一样 */ }
    cache.set(path, size);
  }
  return cache.get(path);
}
