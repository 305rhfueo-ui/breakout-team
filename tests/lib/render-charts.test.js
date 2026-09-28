'use strict';
// 차트 수평선(피벗·손절) — 그림 안에 들어가는지, 터무니없는 값은 축을 망가뜨리지 않는지.
//
//   node tests/lib/render-charts.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const { renderChart, buildChartModel } = require(path.join(REPO, 'scripts/lib/chart'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const DAY = 86400000, T0 = Date.UTC(2026, 0, 2, 14, 30);
const bars = Array.from({ length: 200 }, (_, i) => { const c = 80 + Math.sin(i / 9) * 6 + i * 0.05; return { t: T0 + i * DAY, o: c - 0.5, h: c + 1.5, l: c - 1.5, c, v: 1e6 + i * 1000 }; });
const last = bars[bars.length - 1].c;

console.log('\n[1] 수평선');
ok('피벗·손절이 그림 영역 안에 그려진다', () => {
  const m = buildChartModel({ bars, displayBars: 63, hlines: [{ price: last + 3, label: 'PIVOT', color: [245, 165, 36] }, { price: last - 5, label: 'STOP', color: [248, 81, 73] }] });
  assert.strictEqual(m.hlines.length, 2);
  for (const h of m.hlines) assert.ok(h.y >= m.plot.y && h.y <= m.plot.y + m.plot.h, `${h.label} y=${h.y}`);
  assert.ok(m.hlines[0].y < m.hlines[1].y, '피벗이 손절보다 위');
  assert.ok(/^PIVOT \d/.test(m.hlines[0].label));
});
ok('봉 범위에서 너무 먼 값은 그리지 않는다 (축이 눌린다)', () => {
  const m = buildChartModel({ bars, displayBars: 63, hlines: [{ price: last * 3, label: 'FAR' }, { price: NaN, label: 'BAD' }] });
  assert.strictEqual(m.hlines.length, 0);
  assert.ok(m.range.hi < last * 1.5);
});
ok('수평선이 없어도 예전과 같이 동작한다', () => {
  const m = buildChartModel({ bars, displayBars: 63 });
  assert.deepStrictEqual(m.hlines, []);
});

console.log('\n[2] 출력');
ok('PNG 와 SVG 가 같이 나온다', () => {
  const r = renderChart(bars, { displayBars: 126, maPeriods: [20, 50, 150], hlines: [{ price: last + 2, label: 'PIVOT', color: [245, 165, 36] }] });
  assert.strictEqual(r.ok, true);
  assert.deepStrictEqual([...r.png.subarray(0, 4)], [0x89, 0x50, 0x4e, 0x47]);
  assert.ok(r.svg.includes('PIVOT'));
  assert.ok(r.svg.includes('stroke-dasharray="7 4"'));
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
