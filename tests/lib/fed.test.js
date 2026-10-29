'use strict';
// 10팀 연준팀 (2026-10-29) — 올리다가 처음 내림 감지 · 월말 10개월선 · 경보 단계 · 알림 · SEP 표 읽기 · 숫자 대조
//   node tests/lib/fed.test.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const F = require('../../scripts/fed-watch');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const fx = (f) => fs.readFileSync(path.join(__dirname, '..', 'fixtures', f), 'utf8');

const TARGET = [['2022-01-03', 0.25], ['2022-03-17', 0.5], ['2022-05-05', 1.0], ['2023-07-27', 5.5], ['2024-09-19', 5.0], ['2024-11-08', 4.75], ['2025-12-11', 3.75], ['2026-09-17', 4.0], ['2026-10-28', 4.0]];
// 월말 종가 n개월(매달 1.0씩 오름) + 마지막 달(덜 끝남)
const spOf = (closes) => closes.map((c, i) => [`2025-${String(i + 1).padStart(2, '0')}-28`, c]).concat([['2026-01-05', 1]]);

ok('올리다가 처음 내림 — 그 앞 인상 누적폭, 다시 올린 뒤 내리면 새로 잡는다', () => {
  const r = F.rateTurns(TARGET);
  assert.deepStrictEqual(r.firstCut, { date: '2024-09-19', from: 5.5, to: 5, hikeSum: 5.25 });
  assert.strictEqual(r.phase, 'hike');
  assert.deepStrictEqual(r.last, { date: '2026-09-17', from: 3.75, to: 4 });
  const r2 = F.rateTurns([...TARGET, ['2026-12-10', 3.75]]);
  assert.deepStrictEqual(r2.firstCut, { date: '2026-12-10', from: 4, to: 3.75, hikeSum: 0.25 });
  assert.strictEqual(F.rateTurns([['2020-01-01', 2], ['2020-03-03', 1.5], ['2020-03-16', 0.25]]).firstCut, null, '내리기만 했으면 없음');
});

ok('월말 종가 — 덜 끝난 마지막 달은 빼고, 10개월선 위·아래', () => {
  assert.deepStrictEqual(F.monthEnds([['2026-08-03', 1], ['2026-08-31', 2], ['2026-09-30', 3], ['2026-10-01', 4]]), [['2026-08', 2], ['2026-09', 3]]);
  const up = F.trendOf(F.monthEnds(spOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])));
  assert.deepStrictEqual(up, { month: '2025-12', close: 12, sma10: 7.5, above: true });
  assert.strictEqual(F.trendOf(F.monthEnds(spOf([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5]))).above, false);
  assert.strictEqual(F.trendOf([['2026-01', 1]]), null, '10개월이 안 되면 판정 안 함');
});

ok('경보 단계 — 감시 기간(첫 인하 뒤 36개월) 안에서만 10개월선을 본다', () => {
  const rise = spOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), drop = spOf([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5]);
  assert.strictEqual(F.evaluate({ target: TARGET, sp: rise, now: '2026-10-29' }).level, 'watch');
  assert.strictEqual(F.evaluate({ target: TARGET, sp: drop, now: '2026-10-29' }).level, 'red');
  const late = F.evaluate({ target: TARGET, sp: drop, now: '2027-09-20' });
  assert.strictEqual(late.level, 'calm', '2024-09-19 + 36개월이 지나면 감시 끝');
  assert.strictEqual(late.window.until, '2027-09-19');
  assert.strictEqual(F.evaluate({ target: TARGET, sp: null, now: '2026-10-29' }).level, 'watch', '주가 자료가 없으면 🔴 로 단정하지 않는다');
});

ok('알림 — 처음엔 상태 한 번, 그 뒤엔 바뀐 것만(금리 변경·새 첫 인하·🔴·🟢)', () => {
  const rise = spOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), drop = spOf([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5]);
  const st = (target, sp) => { const s = F.evaluate({ target, sp, now: '2026-10-29' }); s.ko = F.koLine(s); return s; };
  const a = st(TARGET, rise);
  assert.strictEqual(F.alerts(null, a).length, 1);
  assert.match(F.alerts(null, a)[0], /윤슬\(연준\) 시작[\s\S]*🟠 감시 중/);
  assert.deepStrictEqual(F.alerts(a, st(TARGET, rise)), [], '같으면 조용히');
  const red = st(TARGET, drop);
  assert.match(F.alerts(a, red).join('\n'), /🔴 연준 감시/);
  assert.match(F.alerts(red, a).join('\n'), /🟢 연준 감시/);
  const cut = st([...TARGET, ['2026-12-10', 3.75]], rise);
  const m = F.alerts(a, cut).join('\n');
  assert.match(m, /기준금리 인하 4\.00→3\.75%/);
  assert.match(m, /🟠 연준이 올리다가 처음 내렸습니다/);
  assert.ok(!/매수하세요|매도하세요/.test(m), '지시하지 않는다');
});

ok('SEP 표 1 — 연도·중간값·지난번 중간값, 각주 번호·빈 칸', () => {
  const s = F.parseSep(fx('fed-sep-20260916.html'));
  assert.deepStrictEqual(s.years, ['2026', '2027', '2028', '2029', 'Longer run']);
  assert.deepStrictEqual(s.rows.ffr.now, [4.1, 4.1, 3.9, 3.6, 3.2]);
  assert.deepStrictEqual(s.rows.ffr.prev, [3.8, 3.6, 3.4, null, 3.1]);
  assert.strictEqual(s.rows.ffr.prevLabel, 'June');
  assert.deepStrictEqual(s.rows.core.now.slice(0, 4), [3.4, 2.5, 2.2, 2.0]);
  assert.deepStrictEqual(s.rows.pce.now[0], 3.7);
  assert.deepStrictEqual(s.rows.unemp.prev[0], 4.3);
  assert.match(F.sepLines(s)[0], /기준금리 2026 3\.8→4\.1% · 2027 3\.6→4\.1%/);
  assert.strictEqual(F.parseSep('<html>바뀐 페이지</html>'), null);
  assert.match(F.parseStatement(fx('fed-stmt-20260916.html')), /raise the target range[\s\S]*Inflation remains elevated/);
});

ok('SEP 해석 숫자 대조 — 표·성명서에 없는 숫자가 든 문장은 지운다', () => {
  const s = F.parseSep(fx('fed-sep-20260916.html'));
  const a = F.cleanSep({ headline: '금리 경로를 높였다.', growth: '성장률을 2026년 2.2→2.3%로 올렸다. 2.9%까지 본다.', labor: '실업률 4.3→4.1%.', inflation: '물가 3.7%.', rates: '4.1%.', tilt: 'hawkish', meaning: '높은 금리가 오래 간다.' },
    [F.sepText(s), F.parseStatement(fx('fed-stmt-20260916.html'))].join('\n'));
  assert.strictEqual(a.growth, '성장률을 2026년 2.2→2.3%로 올렸다.');
  assert.strictEqual(a.labor, '실업률 4.3→4.1%.');
  assert.strictEqual(F.cleanSep({ headline: '', tilt: 'x' }, ''), null);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
