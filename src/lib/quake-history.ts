// 发布网站时（不是在浏览器里）从 USGS 读马来西亚一带的历史地震，压缩后直接放进网页。
// GitHub 每小时重建一次网站，所以这份资料会自己更新。读不到就给空的，页面照样能开。

/** 马来西亚 + 苏门答腊 + 婆罗洲一带：[南, 西, 北, 东] */
export const HISTORY_BOX = [-8, 92, 12, 122] as const;
export const HISTORY_MIN_MAG = 5;
export const HISTORY_START = '1976-01-01';

/** [经度, 纬度, 深度 km, 规模, 年份] */
export type HistQuake = [number, number, number, number, number];

let cache: Promise<HistQuake[]> | undefined;

export function getQuakeHistory(): Promise<HistQuake[]> {
  cache ??= (async () => {
    const [s, w, n, e] = HISTORY_BOX;
    const q = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=csv&minlatitude=${s}&maxlatitude=${n}&minlongitude=${w}&maxlongitude=${e}&minmagnitude=${HISTORY_MIN_MAG}&starttime=${HISTORY_START}&orderby=time-asc`;
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 20000);
      const res = await fetch(q, { signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const lines = (await res.text()).trim().split('\n').slice(1);
      return lines.map((l) => {
        const c = l.split(',');   // time,latitude,longitude,depth,mag,...
        return [+(+c[2]).toFixed(2), +(+c[1]).toFixed(2), Math.round(+c[3]), +(+c[4]).toFixed(1), +c[0].slice(0, 4)] as HistQuake;
      }).filter((x) => x.every((v) => Number.isFinite(v)));
    } catch (err) {
      console.warn(`[quake-history] Could not read USGS (${(err as Error).message}); history map will be empty.`);
      return [];
    }
  })();
  return cache;
}
