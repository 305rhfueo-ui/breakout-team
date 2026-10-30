'use strict';
// 10팀 윤슬(연준) (2026-10-29) — 올리다가 처음 내림 감지 · 월말 10개월선 · 경보 단계 · 알림 · SEP 표 읽기 · 숫자 대조
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
  assert.match(F.sepTable(s), /^2026 {5}2027 {5}2028/);
  assert.match(F.sepTable(s), /\n4\.1\(3\.8\) 4\.1\(3\.6\) 3\.9\(3\.4\) 기준금리$/);
  assert.strictEqual(F.parseSep('<html>바뀐 페이지</html>'), null);
  assert.match(F.parseStatement(fx('fed-stmt-20260916.html')), /raise the target range[\s\S]*Inflation remains elevated/);
});

ok('SEP 자료 글 — 표 1·점도표·리스크 판단은 넣고, 확산지수 이력·표 2 는 뺀다', () => {
  const d = F.sepDigest(fx('fed-sep-20260916.html'));
  assert.match(d, /^Federal funds rate \| 4\.1 \| 4\.1 \| 3\.9 \| 3\.6 \| 3\.2 \|/m);
  assert.match(d, /^4\.375 \| 4 \| 8 \| · \| · \| ·$/m, '점도표');
  assert.match(d, /Risks to GDP growth[\s\S]*?^June projections \| 5 \| 10 \| 3$/m, '리스크 판단 지난번');
  assert.ok(!/October 2007|1\.6 to 4\.4|^Note:/m.test(d), '확산지수·표 2·각주 없음');
  assert.strictEqual(F.sepDigest('<html>바뀐 페이지</html>'), null);
});

ok('SEP 해석 숫자 대조 — 자료에 없는 숫자가 든 문장은 지운다', () => {
  const corpus = [F.sepDigest(fx('fed-sep-20260916.html')), F.parseStatement(fx('fed-stmt-20260916.html'))].join('\n');
  const a = F.cleanSep({ conclusion: '금리 경로를 높였습니다.', summary: '"높게 오래"',
    points: [{ title: '금리가 높아졌습니다.', body: '2027년 4.375%를 찍은 위원이 8명입니다. 5.1%까지 본 위원도 있습니다.' }, { title: '9.9%로 내려옵니다.', body: '없는 숫자' }] }, corpus);
  assert.deepStrictEqual(a.points, [{ title: '금리가 높아졌습니다.', body: '2027년 4.375%를 찍은 위원이 8명입니다.' }], '제목이 지워진 포인트는 통째로 뺀다');
  assert.strictEqual(F.cleanSep({ conclusion: '', points: [] }, ''), null);
});

ok('SEP 텔레그램 — 굵은 결론·고정폭 표·핵심 포인트·한 줄 요약, AI 글은 HTML 이스케이프', () => {
  const s = F.parseSep(fx('fed-sep-20260916.html'));
  const m = F.sepMessage('2026-09-16', s, { conclusion: '물가 <끈질김> & 금리', points: [{ title: 'T1', body: 'B1' }], summary: '"S"' });
  assert.match(m, /<b>결론: 물가 &lt;끈질김&gt; &amp; 금리<\/b>/);
  assert.match(m, /괄호는 6월 전망\)\n<pre>2026 [\s\S]*기준금리<\/pre>/);
  assert.match(m, /<b>핵심 포인트<\/b>\n• <b>T1<\/b> B1\n\n한 줄로 요약하면 "S"\n\n판단 보조이며 매매 지시가 아닙니다/);
  assert.match(F.sepMessage('2026-09-16', s, null), /\(해석 없음 — 표만 보냅니다\)[\s\S]*<pre>/);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
