'use strict';
// 실장 차트 확인 감시 (2026-10-30) — 개장 2시간 안 '선 돌파 + 거래량' 판정 · 장 마감 요약(상승 + 거래량 1.5배)
//   node tests/lib/chartcheck-watch.test.js
const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const W = require(path.join(REPO, 'scripts/chartcheck-watch'));
const { loadRules } = require(path.join(REPO, 'scripts/lib/rules'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const rules = loadRules();

// 5분봉 — 지난 10세션은 평평(U자 거래량), 오늘은 bar(i) 로 만든다
const hmAt = (i) => { const m = 570 + i * 5; return String(Math.floor(m / 60)).padStart(2, '0') + String(m % 60).padStart(2, '0'); };
const T0 = Date.UTC(2026, 9, 30, 13, 30);
const uShape = (i) => (i === 0 ? 5000 : i < 6 ? 2000 : i > 72 ? 2000 : 1000);
const day = (date, n, f) => Array.from({ length: n }, (_, i) => ({ t: T0 + i * 300000, date, hm: hmAt(i), ...f(i) }));
const hist = [];
for (let d = 1; d <= 10; d++) hist.push(...day(`2026-10-${String(d).padStart(2, '0')}`, 78, (i) => ({ o: 100, h: 100.5, l: 99.5, c: 100, v: uShape(i) })));
const item = { ticker: 'SYNA', resistance: 101, price: 100 };
// 오늘: 8번째 봉(10:10 ET)에 101 위로 마감. vol = 그 봉 거래량 배수
const today = (breakAt, volMul) => day('2026-10-30', breakAt + 2, (i) => (i < breakAt ? { o: 100, h: 100.6, l: 99.8, c: 100.3, v: uShape(i) * volMul } : { o: 100.4, h: 101.8, l: 100.3, c: 101.6, v: uShape(i) * volMul }));
const run = (bars) => W.intradayCheck({ bars5: [...hist, ...bars], sessionDate: '2026-10-30', item, rules });

console.log('\n[1] 개장 2시간 안 — 선 돌파 + 거래량');
ok('선(101)과 장중 고가를 5분봉 종가로 넘고 거래량 페이스 2배 → 알림', () => {
  const r = run(today(8, 2));
  assert.strictEqual(r.fired, true);
  assert.strictEqual(r.at, '1010');
  assert.strictEqual(r.level, 101);
  assert.ok(r.pace >= 1.5, `pace ${r.pace}`);
});
ok('넘었지만 거래량이 평소 수준이면 알리지 않는다', () => { assert.strictEqual(run(today(8, 1)).fired, false); });
ok('개장 2시간이 지나서 넘으면 알리지 않는다', () => { assert.strictEqual(run(today(30, 2)).fired, false); });
ok('저항이 없는 종목은 장중 고가만 넘으면 된다', () => {
  const r = W.intradayCheck({ bars5: [...hist, ...today(8, 2)], sessionDate: '2026-10-30', item: { ticker: 'X', resistance: null, price: 100 }, rules });
  assert.strictEqual(r.fired, true); assert.strictEqual(r.levelIs, 'hod');
});
ok('메시지 — 티커·선·거래량 페이스·시장·종목 링크·판단 보조', () => {
  const m = W.intradayMessage(item, run(today(8, 2)), 'red');
  for (const k of ['📈 실장 차트 확인 SYNA', '넘어야 할 선 101', '거래량 페이스', '전일 대비 +1.6%', '🔴 빨강', '#tk=SYNA', '매매 지시가 아닙니다']) assert.ok(m.includes(k), `없음: ${k}\n${m}`);
});

console.log('\n[2] 장 마감 30분 뒤 — 전일 대비 상승 + 거래량 20일 평균의 1.5배');
const daily = (lastC, lastV) => Array.from({ length: 25 }, (_, i) => ({ t: Date.UTC(2026, 9, 6 + i, 13, 30), o: 100, h: 101, l: 99, c: i === 24 ? lastC : 100, v: i === 24 ? lastV : 1000 }));
const D = '2026-10-30';
ok('그 세션 일봉으로 등락·거래량 배수·선 돌파 마감 여부', () => {
  assert.deepStrictEqual(W.closeRow(daily(102, 2400), D, item), { ticker: 'SYNA', close: 102, pct: 2, volX: 2.4, resistance: 101, aboveLine: true });
});
ok('그 세션 일봉이 아직 없으면 null (밤 루프가 다음 틱에 다시)', () => { assert.strictEqual(W.closeRow(daily(102, 2400).slice(0, -1), D, item), null); });
ok('요약 — 상승 + 1.5배만, 거래량 큰 순 · 없으면 없다고', () => {
  const rows = [{ ticker: 'A', close: 10, pct: 1.2, volX: 1.6, resistance: 11, aboveLine: false }, { ticker: 'B', close: 20, pct: 3, volX: 2.5, resistance: 19, aboveLine: true },
    { ticker: 'C', close: 30, pct: -2, volX: 3, resistance: null, aboveLine: null }, { ticker: 'E', close: 40, pct: 2, volX: 1.2, resistance: null, aboveLine: null }];
  const m = W.closeMessage(D, rows, 9, 'green', rules);
  assert.match(m, /실장 차트 확인 9종목/);
  assert.match(m, /· B \+3% · 거래량 2\.5배 · 종가 20 — 선 19 돌파 마감\n· A \+1\.2% · 거래량 1\.6배 · 종가 10 — 선 11 아래/);
  assert.ok(!/· C |· E /.test(m), '내린 종목·거래량 모자란 종목은 뺀다');
  assert.match(W.closeMessage(D, rows.slice(2), 9, 'red', rules), /종목은 없습니다\.\n시장 🔴/);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
