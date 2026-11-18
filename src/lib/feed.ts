// 博客的 RSS（订阅用）和 sitemap（给搜索引擎的网页清单）共用的小工具
import type { APIContext } from 'astro';
import { getPosts } from './posts';
import { slugOf } from './twins';
import { t, url, type Lang } from './i18n';

export const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** 完整网址，结尾带 /（跟 GitHub Pages 实际给的一样） */
export const full = (site: URL | undefined, path: string) => new URL(path.endsWith('/') ? path : `${path}/`, site).href;

export async function rss(lang: Lang, { site }: APIContext): Promise<Response> {
  const posts = (await getPosts(lang)).slice(0, 30);
  const items = posts.map((p) => {
    const link = full(site, url(lang, `/blog/${slugOf(p)}`));
    return [
      '    <item>',
      `      <title>${esc(p.data.title)}</title>`,
      `      <link>${link}</link>`,
      `      <guid>${link}</guid>`,
      `      <pubDate>${p.data.date.toUTCString()}</pubDate>`,
      `      <description>${esc(p.data.description)}</description>`,
      '    </item>',
    ].join('\n');
  });
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${esc(t(lang, 'siteName'))}</title>`,
    `    <link>${full(site, url(lang, '/'))}</link>`,
    `    <description>${esc(t(lang, 'siteDescription'))}</description>`,
    `    <language>${lang === 'zh' ? 'zh-Hans' : 'en'}</language>`,
    `    <atom:link href="${new URL(url(lang, '/rss.xml'), site).href}" rel="self" type="application/rss+xml" />`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
