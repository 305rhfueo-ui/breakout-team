'use strict';
// 보유 종목 새 소식 알림 (2026-10-17) — 보유 티커 · 새 것 판정 · 한 줄 요약 검사 · 메시지
//   node tests/lib/holdings.test.js
const assert = require('assert');
const H = require('../../scripts/holdings-watch');
const L = require('../../scripts/tg-listener');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

ok('보유 = 청산 안 된 거래만, 대문자·중복 제거, 공매도 방향, 수량은 버린다', () => {
  const r = H.holdingsFromTrades([
    { ticker: 'pltr', side: 'long', qty: 10, exitDate: null, exitPrice: null },
    { ticker: 'SMTC', side: 'long', qty: 5, exitDate: '2026-10-10', exitPrice: 120 },
    { ticker: 'OKTA', side: 'long', exitDate: '2026-10-10', exitPrice: null },
    { ticker: 'PLTR', side: 'long', exitDate: null }, { ticker: 'TSLA', side: 'short' }, { ticker: '$(id)' }]);
  assert.deepStrictEqual(r, [{ ticker: 'PLTR', side: 'long' }, { ticker: 'OKTA', side: 'long' }, { ticker: 'TSLA', side: 'short' }]);
  assert.ok(!JSON.stringify(r).includes('qty'));
  assert.deepStrictEqual(H.holdingsFromPrices({ last: { PLTR: 1, OKTA: 2 } }).map((x) => x.ticker), ['PLTR', 'OKTA']);
});
ok('새 것만 — 본 것 제외 · 처음 보는 종목은 최근 3일 것만 · 60일 지난 기록 정리', () => {
  const items = [{ key: 'a', date: '2026-10-16' }, { key: 'b', date: '2026-10-01' }, { key: 'c', date: '2026-10-17' }];
  assert.deepStrictEqual(H.pickNew('X', items, {}, '2026-10-17').fresh.map((x) => x.key), ['a', 'c']);
  const seen = { X: { a: '2026-10-16' } };
  assert.deepStrictEqual(H.pickNew('X', items, seen, '2026-10-17').fresh.map((x) => x.key), ['b', 'c']);
  H.remember(seen, 'X', items, '2026-10-17'); assert.deepStrictEqual(Object.keys(seen.X).sort(), ['a', 'b', 'c']);
  assert.deepStrictEqual(H.prune({ X: { old: '2026-08-01', new: '2026-10-17' } }, '2026-10-17'), { X: { new: '2026-10-17' } });
});
ok('한 줄 요약 검사 — 제목에 없는 숫자·URL·@·긴 글·이상한 판단은 버린다', () => {
  const it = { text: 'Okta beats estimates, raises guidance to 12% growth' };
  assert.deepStrictEqual(H.cleanSummary({ ko: '실적이 예상을 넘고 전망을 12% 성장으로 올렸다', tone: 'good' }, it), { ko: '실적이 예상을 넘고 전망을 12% 성장으로 올렸다', tone: 'good' });
  assert.strictEqual(H.cleanSummary({ ko: '매출이 40% 늘었다', tone: 'good' }, it), null);
  assert.strictEqual(H.cleanSummary({ ko: 'x', tone: 'buy' }, it), null);
  assert.strictEqual(H.cleanSummary({ ko: 'x'.repeat(130), tone: 'good' }, it), null);
  assert.strictEqual(H.cleanSummary({ ko: '좋은 소식 https://evil.example 참고 @bot', tone: 'neutral' }, it).ko, '좋은 소식 참고');
  assert.strictEqual(H.cleanSummary(undefined, it), null);
});
ok('메시지 — 종목별 묶음, 요약 없으면 원문 제목, 3,900자 이하로 나눔, 매매 권유 아님 표시', () => {
  const mk = (n) => ({ type: 'news', title: `Title ${n} ${'x'.repeat(300)}`, text: '', url: 'https://www.nasdaq.com/a', date: '2026-10-16', publisher: 'Zacks' });
  const groups = [{ ticker: 'PLTR', side: 'long', items: [{ ...mk(1), summary: { ko: '요약 한 줄', tone: 'good' } }, ...Array.from({ length: 20 }, (_, i) => mk(i + 2))] },
    { ticker: 'OKTA', side: 'long', items: [{ type: '8k', title: '8-K 공시: 실적 발표', fixed: '실적 발표 공시 — 실적 발표', url: 'https://www.sec.gov/x', date: '2026-10-16', publisher: 'SEC' }] }];
  const m = H.buildMessages(groups, { force: false, checked: ['PLTR', 'OKTA'], when: '10. 17.' });
  assert.ok(m.length >= 2); for (const x of m) assert.ok(x.length <= 3900, String(x.length));
  const all = m.join('\n');
  assert.ok(all.includes('■ PLTR — 새 소식 21건') && all.includes('🟢 요약 한 줄') && all.includes('• Title 2') && all.includes('📄 실적 발표 공시'));
  assert.ok(all.includes('매매 권유가 아닙니다'));
});
ok('새 것이 없으면 정기 알림은 안 보내고, "보유" 명령이면 "새 소식 없음" 답', () => {
  assert.deepStrictEqual(H.buildMessages([{ ticker: 'PLTR', items: [] }], { force: false, checked: ['PLTR'], when: 'w' }), []);
  const m = H.buildMessages([{ ticker: 'PLTR', items: [] }], { force: true, checked: ['PLTR', 'OKTA'], when: 'w' });
  assert.ok(m.length === 1 && m[0].includes('새 소식 없음') && m[0].includes('PLTR · OKTA'));
});
ok('텔레그램 "보유" 명령 해석 (분석 명령과 겹치지 않게)', () => {
  for (const t of ['보유', '보유종목', '보유 종목', 'holdings', 'HOLDINGS']) assert.strictEqual(L.parseCommand(t).kind, 'holdings', t);
  assert.strictEqual(L.parseCommand('PLTR 심층분석').kind, 'analyze');
  assert.ok(L.USAGE.includes('보유'));
});
console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
