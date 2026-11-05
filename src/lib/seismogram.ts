// 首页地层带上的「真」波形：网站生成时（每小时一次）抓一次最新的 M5+ 地震，
// 再到 EarthScope（原 IRIS）拿一个全球地震台（IU / II 网）的垂直向记录。
// 抓不到就回传 null，首页改用示意波形。
// 资料：USGS 地震目录 + EarthScope FDSN dataselect（miniSEED，Steim1/2 压缩）。

const FDSN = 'https://service.iris.edu/fdsnws';
const USGS = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
const WIDTH = 600;            // 存几栏（每栏一个最大值和最小值，像地震纸上的笔迹）
const BEFORE_P = 60;          // P 波前面留多少秒
const WINDOW = 15 * 60;       // 总共画几秒

export interface RealTrace {
  mag: number; place: string; time: number;           // 地震
  net: string; sta: string; site: string; dist: number; // 地震台 + 距离（度）
  start: number; secs: number;                         // 波形开始时间（ms）和长度（秒）
  p: number;                                           // P 波到达的位置（0–1）
  env: number[];                                       // [max0, min0, max1, min1, ...]，-1..1
}

// ---------- miniSEED v2 + Steim 解压 ----------
function decodeRecord(b: DataView, off: number) {
  const n = b.getUint16(off + 30);
  const fac = b.getInt16(off + 32), mul = b.getInt16(off + 34);
  const rate = fac > 0 ? (mul > 0 ? fac * mul : -fac / mul) : (mul > 0 ? -mul / fac : 1 / (fac * mul));
  const yr = b.getUint16(off + 20), doy = b.getUint16(off + 22);
  const start = Date.UTC(yr, 0, doy, b.getUint8(off + 24), b.getUint8(off + 25), b.getUint8(off + 26)) + b.getUint16(off + 28) / 10;
  const dataOff = b.getUint16(off + 44);
  let bo = b.getUint16(off + 46), enc = 11, len = 512;
  while (bo) {                                   // 找 blockette 1000（编码 + 记录长度）
    if (b.getUint16(off + bo) === 1000) { enc = b.getUint8(off + bo + 4); len = 1 << b.getUint8(off + bo + 6); }
    bo = b.getUint16(off + bo + 2);
  }
  const out: number[] = [];
  if (enc !== 10 && enc !== 11) return { start, rate, len, samples: out };
  const diffs: number[] = [];
  let x0 = 0;
  for (let f = off + dataOff; f < off + len; f += 64) {
    const nib = b.getUint32(f);
    for (let w = 1; w < 16; w++) {
      const c = (nib >>> (30 - 2 * w)) & 3;
      const p = f + 4 * w;
      if (f === off + dataOff && w === 1) { x0 = b.getInt32(p); continue; }
      if (f === off + dataOff && w === 2) continue;      // Xn，不需要
      if (c === 0) continue;
      if (c === 1) { for (let k = 0; k < 4; k++) diffs.push(b.getInt8(p + k)); continue; }
      const v = b.getUint32(p);
      if (enc === 10) {
        if (c === 2) { diffs.push(b.getInt16(p), b.getInt16(p + 2)); } else diffs.push(b.getInt32(p));
        continue;
      }
      const dn = v >>> 30;
      const take = (bits: number, cnt: number) => {
        for (let k = cnt - 1; k >= 0; k--) {
          let d = (v >>> (k * bits)) & ((1 << bits) - 1);
          if (d & (1 << (bits - 1))) d -= 1 << bits;
          diffs.push(d);
        }
      };
      if (c === 2) { if (dn === 1) take(30, 1); else if (dn === 2) take(15, 2); else take(10, 3); }
      else { if (dn === 0) take(6, 5); else if (dn === 1) take(5, 6); else take(4, 7); }
    }
  }
  let x = x0;
  for (let i = 0; i < n && i < diffs.length; i++) { if (i > 0) x += diffs[i]; out.push(x); }
  return { start, rate, len, samples: out };
}

/** miniSEED 档 → 等间隔的样本（中间缺资料就补 NaN） */
export function decodeMiniseed(buf: ArrayBuffer) {
  const b = new DataView(buf);
  const recs: ReturnType<typeof decodeRecord>[] = [];
  for (let off = 0; off + 64 <= buf.byteLength;) {
    const r = decodeRecord(b, off);
    recs.push(r);
    off += r.len;
  }
  recs.sort((a, c) => a.start - c.start);
  if (!recs.length || !recs[0].rate) return null;
  const rate = recs[0].rate, t0 = recs[0].start;
  const data: number[] = [];
  for (const r of recs) {
    const i0 = Math.round((r.start - t0) / 1000 * rate);
    while (data.length < i0) data.push(NaN);
    r.samples.forEach((s, k) => { data[i0 + k] = s; });
  }
  return { start: t0, rate, data };
}

// ---------- 小工具 ----------
const R = Math.PI / 180;
function distDeg(a1: number, o1: number, a2: number, o2: number) {
  const c = Math.sin(a1 * R) * Math.sin(a2 * R) + Math.cos(a1 * R) * Math.cos(a2 * R) * Math.cos((o1 - o2) * R);
  return Math.acos(Math.min(1, Math.max(-1, c))) / R;
}
// P 波走时（秒），地表震源的 iasp91 大约值，每 10 度一格，中间线性内插
const P_TABLE = [0, 142, 276, 370, 455, 533, 604, 667, 722, 772, 818];
function pTime(d: number, depthKm: number) {
  const i = Math.min(9, Math.floor(d / 10));
  return P_TABLE[i] + (P_TABLE[i + 1] - P_TABLE[i]) * (d / 10 - i) - depthKm / 8;   // 震源越深越早到一点
}
async function get(url: string, ms = 12000) {
  const r = await fetch(url, { signal: AbortSignal.timeout(ms) });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r;
}

let cached: Promise<RealTrace | null> | undefined;
/** 同一次网站生成里只抓一次（中文版、英文版首页共用） */
export function getRealTrace() { return (cached ??= fetchRealTrace().catch(() => null)); }

async function fetchRealTrace(): Promise<RealTrace | null> {
  if (process.env.GS_NO_FETCH) return null;
  const now = Date.now();
  const quakes = (await (await get(USGS)).json()).features as any[];
  // 最新一次 M5+，而且至少 40 分钟前（地震台资料要一点时间才传上来）
  const q = quakes.find((f) => f.properties.mag >= 5 && f.properties.time < now - 40 * 60e3);
  if (!q) return null;
  const [lon, lat, depth] = q.geometry.coordinates as number[];
  const stations = (await (await get(`${FDSN}/station/1/query?net=IU,II&cha=BHZ&level=station&format=text&endafter=${new Date(now).toISOString().slice(0, 19)}`)).text())
    .trim().split('\n').filter((l) => !l.startsWith('#')).map((l) => {
      const c = l.split('|');
      return { net: c[0], sta: c[1], lat: +c[2], lon: +c[3], site: c[5], dist: distDeg(lat, lon, +c[2], +c[3]) };
    })
    // 20–80 度：P 波和 S 波分得开，波形最好看；越接近 35 度越优先
    .filter((s) => s.dist >= 20 && s.dist <= 80)
    .sort((a, b) => Math.abs(a.dist - 35) - Math.abs(b.dist - 35));

  // 同时问最近的 6 个台，留下讯噪比最好（地震最清楚）的那一个
  const tries = await Promise.all(stations.slice(0, 6).map(async (s) => {
    const p = q.properties.time + pTime(s.dist, depth) * 1000;
    const t0 = p - BEFORE_P * 1000, t1 = t0 + WINDOW * 1000;
    if (t1 > now - 5 * 60e3) return null;
    const iso = (t: number) => new Date(t).toISOString().slice(0, 19);
    try {
      const r = await get(`${FDSN}/dataselect/1/query?net=${s.net}&sta=${s.sta}&loc=00&cha=BHZ&starttime=${iso(t0)}&endtime=${iso(t1)}`);
      if (r.status === 204) return null;
      const ms = decodeMiniseed(await r.arrayBuffer());
      if (!ms || ms.data.length < ms.rate * WINDOW * 0.9) return null;
      const e = envelope(ms.data, ms.rate);
      if (!e) return null;
      return { snr: e.snr, trace: {
        mag: q.properties.mag, place: q.properties.place, time: q.properties.time,
        net: s.net, sta: s.sta, site: s.site, dist: Math.round(s.dist),
        start: ms.start, secs: WINDOW, p: (p - ms.start) / (WINDOW * 1000), env: e.env,
      } as RealTrace };
    } catch { return null; /* 这个台没资料 */ }
  }));
  const best = tries.filter((x) => x !== null).sort((a, b) => b!.snr - a!.snr)[0];
  return best ? best.trace : null;
}

/** 二阶 Butterworth 高通（滤掉海浪造成的背景晃动「脉动」，让地震本身跳出来） */
function highpass(x: number[], fc: number, rate: number) {
  const w = 2 * Math.PI * fc / rate, c = Math.cos(w), al = Math.sin(w) / Math.SQRT2;
  const b0 = (1 + c) / 2, b1 = -(1 + c), b2 = (1 + c) / 2, a0 = 1 + al, a1 = -2 * c, a2 = 1 - al;
  const y: number[] = [];
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  for (const v of x) {
    const o = (b0 * v + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2) / a0;
    x2 = x1; x1 = v; y2 = y1; y1 = o; y.push(o);
  }
  return y;
}

/** 去平均、高通 0.5 Hz（四阶），再缩成 WIDTH 栏的上下包络；P 波前太吵（信噪比低）就不用 */
function envelope(raw: number[], rate: number) {
  const vals = raw.filter((v) => !isNaN(v));
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
  const hp = highpass(highpass(raw.map((v) => (isNaN(v) ? 0 : v - mean)), 0.5, rate), 0.5, rate);
  const per = hp.length / WIDTH, env: number[] = [];
  let peak = 0;
  for (let i = 0; i < WIDTH; i++) {
    let mx = -Infinity, mn = Infinity;
    for (let k = Math.floor(i * per); k < Math.floor((i + 1) * per); k++) { mx = Math.max(mx, hp[k]); mn = Math.min(mn, hp[k]); }
    env.push(mx, mn); peak = Math.max(peak, Math.abs(mx), Math.abs(mn));
  }
  if (!peak) return null;
  const noiseCols = Math.floor(WIDTH * (BEFORE_P - 10) / WINDOW);
  let noise = 0;
  for (let i = 0; i < noiseCols * 2; i++) noise = Math.max(noise, Math.abs(env[i]));
  if (noise > peak / 6) return null;                    // 看不出地震
  // 放大到最大值的 40% 就顶格：最强的 P 波会「出界」被截平（老式滚筒记录纸也是这样），后面的波才看得见
  const scale = peak * 0.4;
  return { snr: peak / (noise || 1), env: env.map((v) => Math.round(Math.max(-1, Math.min(1, v / scale)) * 1000) / 1000) };
}

/** 包络 → SVG 路径（1200×120 的画布，中线 y=58，上下各 52） */
export function envelopePath(env: number[]) {
  const n = env.length / 2, pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1) * 1200).toFixed(1);
    pts.push(`${x},${(58 - env[2 * i] * 52).toFixed(1)}`, `${x},${(58 - env[2 * i + 1] * 52).toFixed(1)}`);
  }
  return 'M' + pts.join('L');
}
