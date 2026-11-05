// 网站所有地图共用的设定（浏览器里执行）。
// 用 MapLibre GL：WebGL 向量地图，可以缩放得很顺，也可以切换成 3D 地球。
// 底图资料来自 OpenFreeMap（免费、不用 API key），颜色是我们自己的深棕 + 金色。
import 'maplibre-gl/dist/maplibre-gl.css';
import * as maplibregl from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import type { Map as MLMap, StyleSpecification, LngLatBoundsLike } from 'maplibre-gl';

maplibregl.setWorkerUrl(workerUrl);
export { maplibregl };

/** 地图颜色（想换颜色就改这里） */
export const MAP_COLORS = {
  ground: '#1C170C',     // 陆地底色
  sea: '#0C0A06',        // 海
  border: '#6B5A2E',     // 国界
  borderSoft: '#3A311B', // 州界
  label: '#CBBC90',
  labelStrong: '#F5F1E8',
  halo: '#0C0A06',
  plate: '#00C8D2',      // 板块边界（跟地震监测的青色一样）
};

function nameField(lang: string): any {
  return lang === 'zh'
    ? ['coalesce', ['get', 'name:zh-Hans'], ['get', 'name:zh'], ['get', 'name:en'], ['get', 'name']]
    : ['coalesce', ['get', 'name:en'], ['get', 'name']];
}

export function brandStyle(lang: string): StyleSpecification {
  const name = nameField(lang);
  return {
    version: 8,
    glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
    sources: {
      omt: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' },
      // Natural Earth 地形阴影：看得到山脉（马来西亚的主干山脉、喜马拉雅……）
      relief: { type: 'raster', tiles: ['https://tiles.openfreemap.org/natural_earth/ne2sr/{z}/{x}/{y}.png'], tileSize: 256, maxzoom: 6, attribution: 'Natural Earth' },
    },
    layers: [
      { id: 'bg', type: 'background', paint: { 'background-color': MAP_COLORS.ground } },
      { id: 'relief', type: 'raster', source: 'relief', paint: {
        'raster-saturation': -0.6, 'raster-brightness-max': 0.6, 'raster-brightness-min': 0.05, 'raster-contrast': 0.2, 'raster-opacity': 0.5,
      } },
      { id: 'water', type: 'fill', source: 'omt', 'source-layer': 'water', filter: ['!=', ['get', 'brunnel'], 'tunnel'], paint: { 'fill-color': MAP_COLORS.sea } },
      { id: 'admin-state', type: 'line', source: 'omt', 'source-layer': 'boundary', minzoom: 4,
        filter: ['all', ['==', ['get', 'admin_level'], 4], ['!=', ['get', 'maritime'], 1]],
        paint: { 'line-color': MAP_COLORS.borderSoft, 'line-width': 0.7, 'line-dasharray': [3, 2] } },
      { id: 'admin-country', type: 'line', source: 'omt', 'source-layer': 'boundary',
        filter: ['all', ['==', ['get', 'admin_level'], 2], ['!=', ['get', 'maritime'], 1]],
        paint: { 'line-color': MAP_COLORS.border, 'line-width': ['interpolate', ['linear'], ['zoom'], 1, 0.5, 6, 1.3] } },
      { id: 'label-city', type: 'symbol', source: 'omt', 'source-layer': 'place', minzoom: 4.5,
        filter: ['in', ['get', 'class'], ['literal', ['city', 'town']]],
        layout: { 'text-field': name, 'text-font': ['Noto Sans Regular'], 'text-size': ['interpolate', ['linear'], ['zoom'], 5, 11, 9, 14], 'symbol-sort-key': ['get', 'rank'] },
        paint: { 'text-color': MAP_COLORS.label, 'text-halo-color': MAP_COLORS.halo, 'text-halo-width': 1.4 } },
      { id: 'label-country', type: 'symbol', source: 'omt', 'source-layer': 'place', minzoom: 2, maxzoom: 9,
        filter: ['==', ['get', 'class'], 'country'],
        layout: { 'text-field': name, 'text-font': ['Noto Sans Bold'], 'text-size': ['interpolate', ['linear'], ['zoom'], 2, 10, 6, 15], 'text-transform': 'uppercase', 'text-letter-spacing': 0.08 },
        paint: { 'text-color': MAP_COLORS.labelStrong, 'text-opacity': 0.72, 'text-halo-color': MAP_COLORS.halo, 'text-halo-width': 1.4 } },
    ],
  };
}

export interface MapOptions {
  container: HTMLElement | string;
  lang: string;
  center?: [number, number];   // [经度, 纬度]
  zoom?: number;
  bounds?: LngLatBoundsLike;
  globe?: boolean;             // true = 3D 地球
  minZoom?: number;
  maxZoom?: number;
}

/** 建一张品牌地图，载入完成后才 resolve */
export function createMap(o: MapOptions): Promise<MLMap> {
  const map = new maplibregl.Map({
    container: o.container,
    style: brandStyle(o.lang),
    center: o.center ?? [110, 5],
    zoom: o.zoom ?? 1.6,
    bounds: o.bounds,
    minZoom: o.minZoom ?? 0.6,
    maxZoom: o.maxZoom ?? 10,
    attributionControl: { compact: true },
    // 中文地名用电脑自己的字体画，不必下载中文字形
    localIdeographFontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    cooperativeGestures: matchMedia('(pointer: coarse)').matches,   // 手机上要两指才移动地图，免得滑页面时卡住
    // 保留上一张画好的地图：滑动页面时，部分浏览器会把地图下半部丢掉，变成一块黑色长方形
    canvasContextAttributes: { preserveDrawingBuffer: true },
  });
  // 页面滑动停下来时重画一次，万一还是有黑块也会马上补回来
  let repaintQueued = false;
  const repaint = () => {
    if (repaintQueued) return;
    repaintQueued = true;
    setTimeout(() => { repaintQueued = false; map.triggerRepaint(); }, 120);
  };
  addEventListener('scroll', repaint, { passive: true });
  map.on('remove', () => removeEventListener('scroll', repaint));
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
  // 样式一读好就开始画我们的资料（不等底图每一块都下载完，网速慢时也不会空白很久）
  return new Promise((resolve) => {
    map.once('style.load', () => {
      if (o.globe) map.setProjection({ type: 'globe' });
      // 资料来源那一条一开始是展开的，会挡住地图下面；收起来，只留一个 ⓘ 按钮（点了才打开）
      const collapse = () => {
        const attrib = map.getContainer().querySelector('.maplibregl-ctrl-attrib');
        attrib?.classList.remove('maplibregl-compact-show');
        attrib?.removeAttribute('open');
      };
      collapse();
      map.once('load', collapse);
      map.on('resize', collapse);
      resolve(map);
    });
  });
}

let platesCache: Promise<any> | undefined;
/** 板块边界线（Bird 2003，PB2002；资料整理：Hugo Ahlenius / fraxen，ODC-BY） */
export async function addPlates(map: MLMap, base: string, opacity = 0.55) {
  platesCache ??= fetch(`${base}/data/plates.json`).then((r) => r.json());
  const data = await platesCache;
  map.addSource('plates', { type: 'geojson', data, attribution: 'Plate boundaries: Bird (2003)' });
  map.addLayer({ id: 'plates', type: 'line', source: 'plates', paint: {
    'line-color': MAP_COLORS.plate, 'line-opacity': opacity, 'line-width': ['interpolate', ['linear'], ['zoom'], 1, 0.8, 6, 1.8], 'line-dasharray': [4, 2],
  } }, firstSymbolLayer(map));
}

/** 把线和点放在地名下面，地名才不会被盖住 */
export function firstSymbolLayer(map: MLMap): string | undefined {
  return map.getStyle().layers.find((l) => l.type === 'symbol')?.id;
}

export function escapeHtml(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
