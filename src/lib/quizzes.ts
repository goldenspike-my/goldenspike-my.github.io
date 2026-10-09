import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

export async function getQuizzes(lang?: Lang) {
  const all = await getCollection('quizzes', ({ data }) => !lang || data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getQuizzesForLang(lang: Lang) {
  const own = await getQuizzes(lang);
  if (own.length || lang === 'zh') return { quizzes: own, fallback: false };
  return { quizzes: await getQuizzes('zh'), fallback: true };
}
