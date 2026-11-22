// 排程发布：网站每次重新生成时，只放出「发布时间已经到了」的视频、短片、博客和测验。
// 发布时间：publishAt（例如 "2026-11-01 20:00"，马来西亚时间）；
// 没写 publishAt 就用对应视频的发布时间；再没有就用 date 那天的晚上 8 点（马来西亚时间）。
import manual from '../data/videos.json';

const TZ = '+08:00';               // 马来西亚时间
const DEFAULT_TIME = '20:00';      // 频道固定的发布时间
export const NOW = new Date();     // 网站生成的时间

/** "2026-11-01" / "2026-11-01 20:00" / ISO 字串 → Date（没写时区就当马来西亚时间） */
export function parseRelease(value?: string | Date | null): Date | undefined {
  if (!value) return undefined;
  if (value instanceof Date) {
    // 只有日期（Astro 把 "2026-11-01" 变成 UTC 午夜）→ 改成那天的晚上 8 点（马来西亚时间）
    const iso = value.toISOString();
    return iso.endsWith('T00:00:00.000Z') ? new Date(`${iso.slice(0, 10)}T${DEFAULT_TIME}:00${TZ}`) : value;
  }
  const s = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return new Date(`${s}T${DEFAULT_TIME}:00${TZ}`);
  const m = s.match(/^(\d{4}-\d{2}-\d{2})[ T](\d{1,2}):(\d{2})$/);
  if (m) return new Date(`${m[1]}T${m[2].padStart(2, '0')}:${m[3]}:00${TZ}`);
  const d = new Date(s);
  return isNaN(d.getTime()) ? undefined : d;
}

type ManualVideo = { youtubeId?: string; date?: string; publishAt?: string };
const videoRelease = new Map(
  ((manual.videos as ManualVideo[]) ?? [])
    .filter((v) => v.youtubeId)
    .map((v) => [v.youtubeId!, parseRelease(v.publishAt) ?? parseRelease(v.date)] as const),
);

/** 某支 YouTube 视频预定公开的时间（videos.json 里写的） */
export function videoReleaseTime(youtubeId?: string): Date | undefined {
  return youtubeId ? videoRelease.get(youtubeId) : undefined;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const TZ_MS = 8 * 60 * 60 * 1000;  // 马来西亚时间 = UTC+8

/** 那一天的 0 点（马来西亚时间） */
export function startOfReleaseDay(t: Date): Date {
  const local = t.getTime() + TZ_MS;
  return new Date(local - (local % DAY_MS) - TZ_MS);
}

/**
 * 博客 / 测验：publishAt → 对应视频的时间 → date。
 * 提早到发布当天 0 点（马来西亚时间）就放出来（导演 2026-11-22）：GitHub 的每小时排程常常好几个小时才跑一次，
 * 晚上 8 点视频公开时，简介里的博客连结不能还是 404。视频卡片（videos.ts）还是照准确的时间。
 */
export function isReleased(data: { publishAt?: string; youtubeId?: string; date?: Date }): boolean {
  const t = parseRelease(data.publishAt) ?? videoReleaseTime(data.youtubeId) ?? parseRelease(data.date);
  return !t || startOfReleaseDay(t).getTime() <= NOW.getTime();
}
