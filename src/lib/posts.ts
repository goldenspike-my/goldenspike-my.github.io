import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

/** Published posts, newest first */
export async function getPosts(lang?: Lang) {
  const all = await getCollection('posts', ({ data }) => !data.draft && (!lang || data.lang === lang));
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Posts for a language; English falls back to Chinese posts when there are none yet */
export async function getPostsForLang(lang: Lang) {
  const own = await getPosts(lang);
  if (own.length || lang === 'zh') return { posts: own, fallback: false };
  return { posts: await getPosts('zh'), fallback: true };
}
