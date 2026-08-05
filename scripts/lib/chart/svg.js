'use strict';
// 모델 → 인라인 SVG 문자열 (대시보드용). 한국어 라벨 사용 가능.

const { HEX } = require('./model');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderSvg(m, opts = {}) {
  if (!m) return '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40"><text x="4" y="24" fill="#888" font-size="12">차트 데이터 없음</text></svg>';
  const C = m.colors;
  const p = [];
  const F = 'ui-monospace,SFMono-Regular,Menlo,monospace';

  p.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${m.w} ${m.h}" width="100%" style="max-width:${m.w}px;height:auto;font-family:${F}">`);
  p.push(`<rect width="${m.w}" height="${m.h}" fill="${HEX(C.bg)}" rx="8"/>`);

  // 제목
  p.push(`<text x="16" y="26" fill="${HEX(C.text)}" font-size="15" font-weight="700">${esc(m.title)}</text>`);
  if (m.subtitle) p.push(`<text x="16" y="44" fill="${HEX(C.textDim)}" font-size="11">${esc(m.subtitle)}</text>`);

  // 범례
  let lx = m.w - 18;
  const legend = [...m.maLines].reverse();
  for (const ma of legend) {
    const label = `MA${ma.period}${ma.lastVal != null ? ' ' + ma.lastVal.toFixed(2) : ''}`;
    const wpx = label.length * 6.2 + 18;
    lx -= wpx;
    p.push(`<line x1="${lx}" y1="22" x2="${lx + 12}" y2="22" stroke="${HEX(ma.color)}" stroke-width="2.5"/>`);
    p.push(`<text x="${lx + 16}" y="26" fill="${HEX(ma.color)}" font-size="11">${esc(label)}</text>`);
  }

  // 그리드 + Y축 라벨
  for (const t of m.yTicks) {
    p.push(`<line x1="${m.plot.x}" y1="${t.y.toFixed(1)}" x2="${m.plot.x + m.plot.w}" y2="${t.y.toFixed(1)}" stroke="${HEX(C.grid)}" stroke-width="1" stroke-dasharray="3 4"/>`);
    p.push(`<text x="${m.plot.x - 8}" y="${(t.y + 4).toFixed(1)}" fill="${HEX(C.textDim)}" font-size="10" text-anchor="end">${t.label}</text>`);
  }
  // X축 라벨
  for (const t of m.xTicks) {
    p.push(`<line x1="${t.x.toFixed(1)}" y1="${m.plot.y}" x2="${t.x.toFixed(1)}" y2="${m.plot.y + m.plot.h}" stroke="${HEX(C.grid)}" stroke-width="1" opacity="0.5"/>`);
    p.push(`<text x="${t.x.toFixed(1)}" y="${m.plot.y + m.plot.h + 16}" fill="${HEX(C.textDim)}" font-size="10" text-anchor="middle">${t.label}</text>`);
  }

  // 캔들
  for (const c of m.candles) {
    const col = HEX(c.up ? C.up : C.down);
    p.push(`<line x1="${c.cx.toFixed(1)}" y1="${c.wickTop.toFixed(1)}" x2="${c.cx.toFixed(1)}" y2="${c.wickBot.toFixed(1)}" stroke="${col}" stroke-width="1"/>`);
    const bh = Math.max(1, c.bodyBot - c.bodyTop);
    p.push(`<rect x="${c.x.toFixed(1)}" y="${c.bodyTop.toFixed(1)}" width="${c.w.toFixed(1)}" height="${bh.toFixed(1)}" fill="${col}"/>`);
  }

  // 이동평균선
  for (const ma of m.maLines) {
    const d = ma.pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
    p.push(`<path d="${d}" fill="none" stroke="${HEX(ma.color)}" stroke-width="1.8" stroke-linejoin="round"/>`);
  }

  // 거래량
  if (m.volPane) {
    p.push(`<text x="${m.plot.x}" y="${m.volPane.y - 6}" fill="${HEX(C.textDim)}" font-size="10">VOLUME</text>`);
    for (const v of m.volBars) {
      p.push(`<rect x="${v.x.toFixed(1)}" y="${v.y.toFixed(1)}" width="${v.w.toFixed(1)}" height="${Math.max(1, v.h).toFixed(1)}" fill="${HEX(v.up ? C.up : C.down)}" opacity="0.55"/>`);
    }
  }

  // 마지막 가격 표식
  const lastY = m.yTicks.length ? null : null;
  p.push(`<text x="${m.w - 18}" y="${m.h - 10}" fill="${HEX(C.textDim)}" font-size="10" text-anchor="end">${esc(m.lastDate)} · $${m.lastPrice.toFixed(2)}</text>`);

  p.push('</svg>');
  return p.join('');
}

module.exports = { renderSvg };
