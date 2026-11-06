// 首页「全世界的金钉子」那一条用的小地图：板块边界的细线 + 每一根金钉子一个金点。
// 网站生成时画成一个独立的 SVG 档（/golden-spikes-map.svg），首页用 <img loading="lazy"> 载入，不拖慢首页。
// 投影：经纬度直接当 x/y（equirectangular），一度一格，360 × 180。
import type { APIRoute } from 'astro';
import plates from '../../public/data/plates.json';
import data from '../data/gssps.json';

type Line = { geometry: { coordinates: [number, number][] } };

function platePath(): string {
  let d = '';
  for (const f of (plates as { features: Line[] }).features) {
    let seg = '', prev = '', px = 0, n = 0;
    for (const [lon, lat] of f.geometry.coordinates) {
      const x = Math.round(lon + 180), y = Math.round(90 - lat);
      const k = `${x} ${y}`;
      if (k === prev) continue;
      // 跨过换日线时断开，免得一条线横跨整张图
      if (prev && Math.abs(x - px) > 180) { if (n > 1) d += seg; seg = ''; prev = ''; n = 0; }
      seg += (prev ? 'L' : 'M') + k;
      prev = k; px = x; n++;
    }
    if (n > 1) d += seg;
  }
  return d;
}

export const GET: APIRoute = () => {
  const dots = data.gssps
    .map((g) => `<circle cx="${(g.lon + 180).toFixed(1)}" cy="${(90 - g.lat).toFixed(1)}" r="1.6"/>`)
    .join('');
  // Langkawi：马来西亚最老的岩层（没有金钉子，用青色空心圈标出「我们在这里」）
  const lk = { x: 99.68 + 180, y: 90 - 6.4 };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 8 360 150" preserveAspectRatio="xMidYMid meet">
<path d="${platePath()}" fill="none" stroke="#4A3F22" stroke-width=".5" stroke-linejoin="round"/>
<g fill="#F2B90D" fill-opacity=".14">${dots.replace(/r="1.6"/g, 'r="4"')}</g>
<g fill="#F2B90D">${dots}</g>
<circle cx="${lk.x}" cy="${lk.y}" r="2.6" fill="none" stroke="#00C8D2" stroke-width=".8"/>
</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
