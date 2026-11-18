// 网页清单（sitemap）：告诉搜索引擎网站有哪些页面，中英文两版互相对应。
// 新增一个固定页面时，把它的路径加进下面的 fixed。文章和测验会自动列进来。
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { getQuizzes } from '../lib/quizzes';
import { slugOf, findTwin } from '../lib/twins';
import { full } from '../lib/feed';
import { url, type Lang } from '../lib/i18n';

const fixed = ['/', '/videos', '/blog', '/golden-spikes', '/monitor', '/malaysia-quakes', '/quiz', '/about'];
const hreflang = { zh: 'zh-Hans', en: 'en' } as const;
type Page = { loc: string; alt: Partial<Record<Lang, string>>; lastmod?: Date };

export const GET: APIRoute = async ({ site }) => {
  // 每一页：自己的网址 + 两种语言的对应网址（有的话）
  const pages: Page[] = [];
  for (const p of fixed) {
    const alt = { zh: full(site, url('zh', p)), en: full(site, url('en', p)) };
    pages.push({ loc: alt.zh, alt }, { loc: alt.en, alt });
  }
  const add = <T extends { id: string; data: { lang: Lang; date?: Date } }>(all: T[], dir: string) => {
    for (const e of all) {
      const here = full(site, url(e.data.lang, `/${dir}/${slugOf(e)}`));
      const twin = findTwin(e, all);
      const alt: Partial<Record<Lang, string>> = { [e.data.lang]: here };
      if (twin) alt[twin.data.lang] = full(site, url(twin.data.lang, `/${dir}/${slugOf(twin)}`));
      pages.push({ loc: here, alt, lastmod: e.data.date });
    }
  };
  add(await getPosts(), 'blog');
  add(await getQuizzes(), 'quiz');

  const lines = ['<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
  for (const p of pages) {
    lines.push('  <url>', `    <loc>${p.loc}</loc>`);
    if (p.lastmod) lines.push(`    <lastmod>${p.lastmod.toISOString().slice(0, 10)}</lastmod>`);
    for (const l of Object.keys(p.alt) as Lang[]) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${p.alt[l]}" />`);
    }
    lines.push('  </url>');
  }
  lines.push('</urlset>', '');
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
