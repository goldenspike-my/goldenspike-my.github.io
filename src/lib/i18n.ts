// 网站上固定的文字（按钮、标题等）都在这里，中英文各一份。
export type Lang = 'zh' | 'en';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Link to a page in the given language, e.g. url('en', '/blog') -> /en/blog */
export function url(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return `${base}${lang === 'en' ? '/en' : ''}${clean}` || '/';
}

/** Link to a file in /public, e.g. an uploaded image */
export function asset(path?: string): string {
  if (!path) return '';
  if (/^https?:\/\//.test(path)) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}

/** The same page in the other language */
export function switchLangPath(pathname: string, to: Lang): string {
  let p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  p = p.replace(/^\/en(?=\/|$)/, '') || '/';
  return url(to, p);
}

export const categories = {
  geo: { zh: '地质与地震', en: 'Geology & Quakes' },
  life: { zh: '京都生活', en: 'Life in Kyoto' },
  travel: { zh: '旅行', en: 'Travel' },
} as const;

export const series = {
  rocks: { zh: '岩石', en: 'Rocks' },
  seismology: { zh: '地震', en: 'Seismology' },
  landforms: { zh: '地貌', en: 'Landforms' },
  quakes: { zh: '历史大地震', en: 'Famous Quakes' },
  news: { zh: '真实事件', en: 'Real Events' },
  vlog: { zh: 'Vlog', en: 'Vlog' },
  channel: { zh: '频道', en: 'Channel' },
  other: { zh: '其他', en: 'Other' },
} as const;

export const specimenTypes = {
  igneous: { zh: '火成岩', en: 'Igneous' },
  sedimentary: { zh: '沉积岩', en: 'Sedimentary' },
  metamorphic: { zh: '变质岩', en: 'Metamorphic' },
  mineral: { zh: '矿物', en: 'Mineral' },
  fossil: { zh: '化石', en: 'Fossil' },
} as const;

const dict = {
  home: { zh: '首页', en: 'Home' },
  videos: { zh: '视频', en: 'Videos' },
  blog: { zh: '博客', en: 'Blog' },
  monitor: { zh: '地震监测', en: 'Quake Monitor' },
  quiz: { zh: '测验', en: 'Quiz' },
  gallery: { zh: '标本', en: 'Specimens' },
  about: { zh: '关于', en: 'About' },
  menu: { zh: '选单', en: 'Menu' },
  subscribe: { zh: '订阅频道', en: 'Subscribe' },
  readBlog: { zh: '阅读博客', en: 'Read the blog' },
  latestVideos: { zh: '最新视频', en: 'Latest Videos' },
  latestVideosSub: { zh: '每期只讲一个概念，五分钟看懂', en: 'One idea per episode, explained in five minutes' },
  seeAllYoutube: { zh: '到 YouTube 看全部', en: 'See all on YouTube' },
  blogSub: { zh: '视频文字版、京都生活、旅行', en: 'Video write-ups, life in Kyoto, travel' },
  all: { zh: '全部', en: 'All' },
  seeAllPosts: { zh: '看全部文章', en: 'All posts' },
  minRead: { zh: '分钟阅读', en: 'min read' },
  monitorKicker: { zh: '● 实时地震', en: '● LIVE SEISMIC MONITOR' },
  monitorTitle: { zh: '此刻的地球在震动', en: 'The Earth is moving right now' },
  monitorText: { zh: '全球最近发生的地震，数据来自美国地质调查局（USGS），每次打开页面自动更新。', en: 'Recent earthquakes worldwide from the USGS, refreshed every time you open the page.' },
  openMonitor: { zh: '打开地震监测', en: 'Open the monitor' },
  dyk: { zh: '你知道吗？', en: 'Did you know?' },
  dykSub: { zh: '点一下卡片看答案', en: 'Tap a card to reveal the answer' },
  aboutTitle: { zh: '从马大地质，到京大地震', en: 'From Malaysian geology to Kyoto seismology' },
  readMore: { zh: '了解更多', en: 'More about me' },
  thisVideo: { zh: '本期视频', en: 'Watch the episode' },
  watchOnYoutube: { zh: '在 YouTube 观看', en: 'Watch on YouTube' },
  toc: { zh: '本文目录', en: 'Contents' },
  related: { zh: '相关文章', en: 'Related posts' },
  noPosts: { zh: '还没有文章。', en: 'No posts yet.' },
  enFallback: { zh: '', en: 'Some posts are only in Chinese for now.' },
  quizSub: { zh: '看完视频，来考考自己', en: 'Test yourself after watching' },
  questions: { zh: '题', en: 'questions' },
  start: { zh: '开始测验', en: 'Start quiz' },
  next: { zh: '下一题', en: 'Next' },
  result: { zh: '看结果', en: 'See result' },
  retry: { zh: '再来一次', en: 'Try again' },
  correct: { zh: '答对了！', en: 'Correct!' },
  wrong: { zh: '不对哦。', en: 'Not quite.' },
  score: { zh: '你的成绩', en: 'Your score' },
  backToQuizzes: { zh: '回到全部测验', en: 'All quizzes' },
  gallerySub: { zh: '我在野外和实验室拍的岩石与矿物', en: 'Rocks and minerals I have photographed in the field and the lab' },
  galleryEmpty: { zh: '标本照片整理中，很快上线。', en: 'Specimen photos are on the way.' },
  location: { zh: '产地', en: 'Location' },
  close: { zh: '关闭', en: 'Close' },
  videosSub: { zh: '按系列看全部视频', en: 'Every episode, by series' },
  lastUpdated: { zh: '更新时间', en: 'Updated' },
  depth: { zh: '深度', en: 'Depth' },
  loading: { zh: '正在读取最新地震…', en: 'Loading the latest quakes…' },
  loadError: { zh: '暂时读不到 USGS 数据，请稍后再试。', en: 'Could not reach the USGS feed. Please try again later.' },
  noQuakes: { zh: '这个范围内目前没有地震记录。', en: 'No earthquakes in this range right now.' },
  global: { zh: '全球', en: 'Global' },
  japan: { zh: '日本周边', en: 'Around Japan' },
  seasia: { zh: '东南亚', en: 'Southeast Asia' },
  pastDay45: { zh: '24 小时 · M4.5+', en: 'Past day · M4.5+' },
  pastWeek45: { zh: '7 天 · M4.5+', en: 'Past week · M4.5+' },
  pastDay25: { zh: '24 小时 · M2.5+', en: 'Past day · M2.5+' },
  quakesCount: { zh: '次地震', en: 'earthquakes' },
  dataSource: { zh: '数据来源：USGS 地震危害计划', en: 'Data: USGS Earthquake Hazards Program' },
} as const;

export type Key = keyof typeof dict;
export function t(lang: Lang, key: Key): string {
  return dict[key][lang];
}

export function formatDate(d: Date, lang: Lang): string {
  return d.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

/** Rough reading time: ~400 Chinese characters or ~220 English words per minute */
export function readingTime(text: string): number {
  const cjk = (text.match(/[一-鿿]/g) || []).length;
  const words = text.replace(/[一-鿿]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(cjk / 400 + words / 220));
}
