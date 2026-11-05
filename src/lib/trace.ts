// 首页地层带上的示意地震波：P 波小、S 波大、后面慢慢变小。
// 振幅跟着规模（mag）变；形状是示意，不是真的波形记录。
// viewBox 是 1200 × 120，中线 y = 58（金色那一层的位置）。

export const TRACE_W = 1200;
export const TRACE_MID = 58;

// 固定的「杂讯」，每次画出来都一样（不用 Math.random，伺服器和浏览器画的才会一致）
function noise(x: number): number {
  return Math.sin(x * 0.9) * 0.5 + Math.sin(x * 2.3 + 1.7) * 0.3 + Math.sin(x * 5.1 + 0.4) * 0.2;
}

export function tracePath(mag: number): string {
  // M4 → 小，M7 以上 → 撑满整层
  const k = Math.min(1, Math.max(0.2, (mag - 3.5) / 3.5));
  const maxA = 52 * k;
  const pAt = 330, sAt = 560;
  const pts: string[] = [];
  for (let x = 0; x <= TRACE_W; x += 3) {
    let a = 1.2;                                                       // 背景杂讯
    if (x >= pAt) a += maxA * 0.22 * Math.exp(-(x - pAt) / 90);        // P 波
    if (x >= sAt) a += maxA * Math.exp(-(x - sAt) / 170);              // S 波
    const y = TRACE_MID + a * noise(x * 0.35);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return 'M' + pts.join(' L');
}
