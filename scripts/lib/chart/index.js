'use strict';
// 차트 진입점 — 같은 모델로 SVG(대시보드)와 PNG(파일/텔레그램)를 동시에 만든다.

const fs = require('fs');
const path = require('path');
const { ensureDir, say } = require('../util');
const { buildChartModel, COLORS } = require('./model');
const { renderSvg } = require('./svg');
const { Raster } = require('./raster');
const { encodePng } = require('./png');
const { textWidth } = require('./font5x7');

// 모델 → PNG (라벨은 영문/숫자만. 한국어는 SVG·리포트에서 표기)
function renderPng(m) {
  if (!m) return null;
  const C = m.colors;
  const r = new Raster(m.w, m.h, C.bg);

  r.text(16, 14, m.title, C.text, 2);
  if (m.subtitle) r.text(16, 36, m.subtitle, C.textDim, 1);

  // 범례 (우상단)
  let lx = m.w - 18;
  for (const ma of [...m.maLines].reverse()) {
    const label = `MA${ma.period} ${ma.lastVal != null ? ma.lastVal.toFixed(2) : ''}`.trim();
    const wpx = textWidth(label, 1) + 20;
    lx -= wpx;
    r.hline(lx, lx + 12, 18, ma.color);
    r.hline(lx, lx + 12, 19, ma.color);
    r.text(lx + 16, 15, label, ma.color, 1);
  }

  // 그리드 + Y 라벨
  for (const t of m.yTicks) {
    r.dashedH(m.plot.x, m.plot.x + m.plot.w, t.y, C.grid, 3, 5);
    r.textRight(m.plot.x - 6, t.y - 3, t.label, C.textDim, 1);
  }
  // X 라벨
  for (const t of m.xTicks) {
    r.vline(t.x, m.plot.y, m.plot.y + m.plot.h, [38, 43, 50]);
    r.text(t.x - textWidth(t.label, 1) / 2, m.plot.y + m.plot.h + 8, t.label, C.textDim, 1);
  }

  // 캔들
  for (const c of m.candles) {
    const col = c.up ? C.up : C.down;
    r.vline(c.cx, c.wickTop, c.wickBot, col);
    const top = Math.round(c.bodyTop);
    const h = Math.max(1, Math.round(c.bodyBot) - top);
    r.rect(Math.round(c.x), top, Math.max(1, Math.round(c.w)), h, col, { fill: true });
  }

  // 이동평균선
  for (const ma of m.maLines) {
    for (let i = 1; i < ma.pts.length; i++) {
      r.line(ma.pts[i - 1][0], ma.pts[i - 1][1], ma.pts[i][0], ma.pts[i][1], ma.color, 2);
    }
  }

  // 거래량
  if (m.volPane) {
    r.text(m.plot.x, m.volPane.y - 12, 'VOLUME', C.textDim, 1);
    for (const v of m.volBars) {
      const col = v.up ? C.up : C.down;
      const dim = [Math.round(col[0] * 0.6), Math.round(col[1] * 0.6), Math.round(col[2] * 0.6)];
      r.rect(Math.round(v.x), Math.round(v.y), Math.max(1, Math.round(v.w)), Math.max(1, Math.round(v.h)), dim, { fill: true });
    }
  }

  const foot = `${m.lastDate}  $${m.lastPrice.toFixed(2)}`;
  r.textRight(m.w - 16, m.h - 14, foot, C.textDim, 1);

  return encodePng(r);
}

// 한 번에 SVG + PNG 생성. PNG 실패해도 SVG 는 살린다.
function renderChart(bars, opts = {}) {
  const m = buildChartModel({ bars, ...opts });
  if (!m) return { ok: false, error: '봉 데이터 부족', svg: null, png: null, model: null };
  const svg = renderSvg(m);
  let png = null;
  if (opts.png !== false) {
    try { png = renderPng(m); } catch (e) { say('WARN', `PNG 생성 실패: ${e.message} (SVG 는 정상)`); }
  }
  return { ok: true, svg, png, model: m };
}

function saveChart(bars, { file, latestFile, ...opts } = {}) {
  const res = renderChart(bars, opts);
  if (!res.ok) return res;
  if (res.png && file) {
    ensureDir(path.dirname(file));
    fs.writeFileSync(file, res.png);
    if (latestFile) fs.writeFileSync(latestFile, res.png);
  }
  return { ...res, file: res.png ? file : null };
}

module.exports = { renderChart, renderPng, renderSvg, saveChart, buildChartModel, COLORS };

if (require.main === module) {
  require('../util').loadEnv();
  const { fetchBarsCached } = require('../bars');
  const { paths, today } = require('../util');

  const ticker = process.argv[2] || 'QQQ';
  (async () => {
    // ⚠️ MA50 이 좌측 끝까지 그려지려면 표시 63봉 + 50봉 이상의 여유가 필요 → 6mo(약 125봉)
    const r = await fetchBarsCached(ticker, { range: '6mo' });
    if (!r.ok) { console.log(`${ticker}: 봉 없음 (${r.error})`); return; }

    const dateStr = today();
    const pngFile = path.join(paths.dashboardCharts, `${ticker.toLowerCase()}-${dateStr}.png`);
    const latest = path.join(paths.dashboardCharts, `${ticker.toLowerCase()}-latest.png`);
    const out = saveChart(r.bars, {
      maPeriods: [10, 20, 50], displayBars: 63,
      title: `${ticker} DAILY`, subtitle: `10 / 20 / 50 DAY MA   LAST 3 MONTHS`,
      file: pngFile, latestFile: latest,
    });

    const m = out.model;
    console.log(`\n${ticker}: 전체 ${m.totalBars}봉 → 표시 ${m.displayed}봉 (${m.lastDate} 기준 $${m.lastPrice})`);
    console.log('MA 선별 점 개수 (표시구간 전체를 덮어야 정상):');
    for (const ma of m.maLines) console.log(`  MA${String(ma.period).padEnd(3)} ${String(ma.pts.length).padStart(3)}/${m.displayed}점  마지막값 ${ma.lastVal ? ma.lastVal.toFixed(2) : '—'}`);
    console.log(`\nPNG: ${out.file || '실패'} ${out.png ? '(' + out.png.length.toLocaleString() + ' bytes)' : ''}`);
    console.log(`SVG: ${out.svg.length.toLocaleString()} chars`);

    // SVG 미리보기 파일
    const prev = path.join(paths.dashboardCharts, `${ticker.toLowerCase()}-preview.html`);
    fs.writeFileSync(prev, `<body style="background:#0d1117;margin:0;padding:20px">${out.svg}</body>`);
    console.log(`SVG 미리보기: ${prev}`);
  })();
}
