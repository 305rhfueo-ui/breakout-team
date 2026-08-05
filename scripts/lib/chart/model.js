'use strict';
// 차트 좌표 모델 — SVG 와 PNG 렌더러가 이 모델 하나를 공유한다.
// 덕분에 렌더러가 각 ~120줄로 끝나고, 두 출력이 항상 동일한 그림이 된다.

const { smaSeries } = require('../ta');

const COLORS = {
  bg: [13, 17, 23], panel: [22, 27, 34], grid: [48, 54, 61], axis: [110, 118, 129],
  text: [201, 209, 217], textDim: [125, 133, 144],
  up: [46, 160, 67], down: [248, 81, 73],
  ma10: [245, 165, 36], ma20: [59, 130, 246], ma50: [161, 161, 170], ma150: [192, 132, 252],
};
const HEX = (c) => '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');

const MA_COLOR = { 10: COLORS.ma10, 20: COLORS.ma20, 50: COLORS.ma50, 150: COLORS.ma150 };

// "nice" 눈금: 1 / 2 / 2.5 / 5 × 10^n
function niceTicks(min, max, count = 5) {
  if (!(max > min)) return [min];
  const raw = (max - min) / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10) * mag;
  const start = Math.ceil(min / step) * step;
  const out = [];
  for (let v = start; v <= max + step * 1e-9; v += step) out.push(Number(v.toFixed(10)));
  return out;
}

function fmtPrice(v) {
  if (v >= 1000) return v.toFixed(0);
  if (v >= 100) return v.toFixed(1);
  return v.toFixed(2);
}

const MONTH_ABBR = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function buildChartModel(opts) {
  const {
    bars, maPeriods = [10, 20, 50], width = 960, height = 560,
    title = 'CHART', subtitle = '', displayBars = 63, showVolume = true,
  } = opts;

  if (!bars || bars.length < 2) return null;

  // ⚠️ MA 는 전체 봉으로 계산하고 최근 displayBars 만 표시한다.
  //    표시 구간만으로 계산하면 50MA 가 좌측 끝에서 끊긴다 (흔한 버그).
  const maFull = {};
  for (const p of maPeriods) maFull[p] = smaSeries(bars, p);

  const startIdx = Math.max(0, bars.length - displayBars);
  const view = bars.slice(startIdx);
  const n = view.length;

  const plot = { x: 62, y: 56, w: width - 62 - 18, h: showVolume ? height - 56 - 150 : height - 56 - 40 };
  const volPane = showVolume ? { x: plot.x, y: plot.y + plot.h + 34, w: plot.w, h: 84 } : null;

  // Y 스케일: 표시 구간의 고저 + 표시되는 MA 값 전부 포함, 5% 패딩
  let lo = Infinity, hi = -Infinity;
  for (const b of view) { if (b.l < lo) lo = b.l; if (b.h > hi) hi = b.h; }
  for (const p of maPeriods) {
    for (let i = startIdx; i < bars.length; i++) {
      const v = maFull[p][i];
      if (v == null) continue;
      if (v < lo) lo = v; if (v > hi) hi = v;
    }
  }
  const pad = (hi - lo) * 0.05 || 1;
  lo -= pad; hi += pad;

  const xOf = (i) => plot.x + (n === 1 ? plot.w / 2 : (i * plot.w) / (n - 1));
  const yOf = (v) => plot.y + plot.h - ((v - lo) / (hi - lo)) * plot.h;
  const bw = Math.max(2, Math.floor(plot.w / n * 0.62));

  const candles = view.map((b, i) => {
    const cx = xOf(i);
    const up = b.c >= b.o;
    return {
      i, cx, x: cx - bw / 2, w: bw, up,
      wickTop: yOf(b.h), wickBot: yOf(b.l),
      bodyTop: yOf(Math.max(b.o, b.c)), bodyBot: yOf(Math.min(b.o, b.c)),
      o: b.o, h: b.h, l: b.l, c: b.c, v: b.v, t: b.t,
    };
  });

  let volBars = [];
  if (showVolume) {
    const vmax = Math.max(...view.map((b) => b.v)) || 1;
    volBars = view.map((b, i) => ({
      x: xOf(i) - bw / 2, w: bw,
      y: volPane.y + volPane.h - (b.v / vmax) * volPane.h,
      h: (b.v / vmax) * volPane.h,
      up: b.c >= b.o, v: b.v,
    }));
  }

  const maLines = maPeriods.map((p) => {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const v = maFull[p][startIdx + i];
      if (v == null) continue;
      pts.push([xOf(i), yOf(v)]);
    }
    const lastVal = maFull[p][bars.length - 1];
    return { period: p, color: MA_COLOR[p] || COLORS.ma50, pts, lastVal };
  }).filter((m) => m.pts.length > 1);

  const yTicks = niceTicks(lo, hi, 5).map((v) => ({ v, y: yOf(v), label: fmtPrice(v) }));

  // X 눈금: 월이 바뀌는 봉
  const xTicks = [];
  let prevMonth = null;
  for (let i = 0; i < n; i++) {
    const d = new Date(view[i].t);
    const m = d.getUTCMonth();
    if (prevMonth !== null && m !== prevMonth) xTicks.push({ x: xOf(i), label: MONTH_ABBR[m] });
    prevMonth = m;
  }

  const last = view[n - 1];
  return {
    w: width, h: height, plot, volPane,
    candles, volBars, maLines, yTicks, xTicks,
    title, subtitle,
    lastPrice: last.c,
    lastDate: new Date(last.t).toISOString().slice(0, 10),
    range: { lo, hi },
    displayed: n, totalBars: bars.length,
    colors: COLORS,
  };
}

module.exports = { buildChartModel, niceTicks, fmtPrice, COLORS, HEX, MA_COLOR };
