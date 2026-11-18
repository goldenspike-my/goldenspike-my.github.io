import { getCollection } from 'astro:content';
import { url, type Lang } from './i18n';
import { withUntranslated, slugOf } from './twins';
import { isReleased } from './release';

/** Published posts, newest first */
export async function getPosts(lang?: Lang) {
  const all = await getCollection('posts', ({ data }) => !data.draft && isReleased(data) && (!lang || data.lang === lang));
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Posts for a language, plus posts in the other language that have no translation yet */
export async function getPostsForLang(lang: Lang) {
  const { items, fallback } = withUntranslated(await getPosts(), lang);
  return { posts: items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()), fallback };
}

/** 视频 → 它的博客文章网址（youtubeId 对上的那篇；先找这个语言的，没有才用另一种语言的） */
export async function postLinksByVideo(lang: Lang): Promise<Map<string, string>> {
  const { posts } = await getPostsForLang(lang);
  const map = new Map<string, string>();
  for (const p of posts) {
    const id = p.data.youtubeId;
    if (!id) continue;
    if (!map.has(id) || p.data.lang === lang) map.set(id, url(p.data.lang, `/blog/${slugOf(p)}`));
  }
  return map;
}
