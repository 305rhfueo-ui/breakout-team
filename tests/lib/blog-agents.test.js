'use strict';
// 12팀 매매 복기 · 13팀 체크리스트 부합 종목 (2026-11-07) — 체크리스트 판정 · 손절 규칙 계산 · 글 숫자 대조 · HTML
//   node tests/lib/blog-agents.test.js
const assert = require('assert');
const { tradeFacts } = require('../../scripts/trade-review');
const UC = require('../../scripts/lib/user-checklist');
const { cleanPost } = require('../../scripts/lib/blog-writer');
const { toHtml } = require('../../scripts/lib/tistory');
const { loadRules } = require('../../scripts/lib/rules');
const { barDateET } = require('../../scripts/lib/bars');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

// setup-grade.test.js 와 같은 합성 봉: 횡보 140 → 상승 40(50→80) → 베이스 20 → 200번 봉 돌파(거래량 ~2.9배) → 201 다음 날 시가 매수
// → 203 시가가 손절선 아래로 갭 하락 → 205 매도
const DAY = 86400000, T0 = Date.UTC(2025, 0, 2, 14, 30);
const lin = (a, b, n) => Array.from({ length: n }, (_, i) => a + (b - a) * (i + 1) / n);
const closes = [...Array(140).fill(50), ...lin(50, 80, 40), 76, 75, 74, 73.5, 73, 74, 75, 76, 76.5, 77, 77, 76.5, 76, 75, 75.5, 76.5, 77, 77.5, 78, 78.5];
const bars = closes.map((c, i) => { const h = i < 180 ? 0.02 : 0.012; return { t: T0 + i * DAY, o: c, h: c * (1 + h), l: c * (1 - h), c, v: i >= 195 ? 20e6 : 40e6 }; });
const add = (o, h, l, c, v) => bars.push({ t: T0 + bars.length * DAY, o, h, l, c, v });
add(79, 84.5, 78.8, 84, 100e6);          // 200 돌파
add(85, 86, 84.5, 85.5, 50e6);           // 201 매수(시가 85)
add(85.5, 86, 84, 84.5, 40e6);           // 202
add(82, 82.5, 81, 81.5, 60e6);           // 203 갭 하락 — 손절선 관통
add(81.5, 82, 80, 80.5, 40e6);           // 204
add(80.5, 81, 79.5, 80, 40e6);           // 205 매도
for (let i = 0; i < 5; i++) add(80, 81, 79, 80, 30e6);
const qqq = bars.map((b, i) => ({ t: b.t, o: 100 + i, h: 101 + i, l: 99 + i, c: 100.5 + i, v: 1e6 }));
const iso = (i) => barDateET(bars[i].t);
const trade = { id: 1, ticker: 'tst', side: 'long', qty: 10, fees: 3, entryDate: iso(201), entryPrice: 85, exitDate: iso(205), exitPrice: 80, tag: 'breakout', memo: '' };

ok('복기 숫자 — 돌파일·거래량 배수·거래량 마름·상한 초과를 매수 전날 밤 기준으로 잰다', () => {
  const r = tradeFacts({ trade, bars, qqq, snap: null, rules: loadRules() });
  assert.ok(r.ok, r.error);
  const f = r.facts, row = (no) => f.checklist.find((x) => x.no === no);
  assert.strictEqual(f.ticker, 'TST'); assert.strictEqual(f.result, '패'); assert.strictEqual(f.returnPct, -5.9);
  assert.strictEqual(f.setup.breakDate, iso(200)); assert.strictEqual(f.setup.boughtOnBreakoutDay, false);
  assert.ok(f.setup.breakVol > 2.8 && f.setup.breakVol < 3, `거래량 ${f.setup.breakVol}`); assert.strictEqual(row('4-2').판정, '✅');
  assert.strictEqual(row('3-4').판정, '✅', row('3-4').detail);   // 돌파 전날까지 5일 ÷ 20일 = 0.57
  assert.strictEqual(row('2-1').판정, '확인 불가');                   // RS 스냅샷 없음 — 통과로 치지 않는다
  assert.strictEqual(row('1').판정, '✅');                            // QQQ 우상향
  assert.strictEqual(f.setup.entryWithinCap, false, `상한 ${f.setup.cap}`);
});
ok('손절 규칙 — 매수가 −1 ADR 이 갭으로 뚫린 날·스톱이었으면 체결가·실제 매도가 몇 세션 늦었나', () => {
  const s = tradeFacts({ trade, bars, qqq, snap: null, rules: loadRules() }).facts.stopRule;
  assert.strictEqual(s.hitDate, iso(203)); assert.strictEqual(s.gapThrough, true);
  assert.strictEqual(s.fillIfOrdered, 82); assert.strictEqual(s.sessionsLate, 2);
});
ok('수량·수수료는 글 재료(facts)에 들어가지 않는다', () => {
  const j = JSON.stringify(tradeFacts({ trade, bars, qqq, snap: null, rules: loadRules() }).facts);
  assert.ok(!/"qty"|"fees"/.test(j));
});
ok('13팀 기준 — 시장 칸만 ❌ 면 통과 · 확인 불가는 통과 아님 · 참고 줄은 판정 안 함', () => {
  const rows = [{ no: '1', status: 'no' }, { no: '2-1', status: 'ok' }, { no: '2-4', status: 'info' }, { no: '4-2', status: 'ok' }];
  assert.strictEqual(UC.passesExceptMarket(rows), true);
  assert.strictEqual(UC.passesExceptMarket([...rows, { no: '3-4', status: 'na' }]), false);
});
ok('13팀 목록 — 전부 ✅ 는 글, 한 칸만 빠짐은 목록(돌파 거래량 2배 4-2 가 빠진 건 제외), 두 칸 이상은 제외', () => {
  const { pick } = require('../../scripts/checklist-watch');
  const it = (t, miss) => ({ ticker: t, miss });
  const r = pick([it('FULL', []), it('ONE', ['3-4']), it('VOL', ['4-2']), it('TWO', ['2-1', '3-4'])]);
  assert.deepStrictEqual(r.full.map((x) => x.ticker), ['FULL']);
  assert.deepStrictEqual(r.near.map((x) => x.ticker), ['ONE']);
});

ok('RS 순위 — 상위 몇 % · 같은 업종 상위 2% 종목', () => {
  const data = Array.from({ length: 100 }, (_, i) => ({ T: `T${i}`, I: i < 3 ? 'Semis' : 'Other', r1: 100 - i, r3: i, r6: null }));
  const m = UC.rsRanks({ data });
  assert.strictEqual(m.get('T0').m1, 0); assert.strictEqual(m.get('T1').m1, 1); assert.strictEqual(m.get('T0').m6, null);
  assert.deepStrictEqual(m.get('T2').peers, ['T0', 'T1']);   // T2 는 상위 2%, T0·T1 도 상위 2%
});
ok('글 숫자 대조 — 근거에 없는 숫자가 든 줄은 지우고 URL 은 빼고 그림 자리는 맞춘다', () => {
  const r = cleanPost({ title: '복기 https://x.y', lines: ['## 1. 시장', '거래량 1.32배였다', '수익률 47.7%였다', '{{IMG3}}', '자세히 https://evil.example 참고'], telegram: '1.32배 돌파' },
    { breakVol: 1.32 }, 2);
  assert.strictEqual(r.title, '복기');
  assert.ok(r.lines.includes('거래량 1.32배였다'));
  assert.ok(!r.lines.some((l) => l.includes('47.7')), '근거 없는 숫자');
  assert.ok(!r.lines.some((l) => /https?:/.test(l)));
  assert.deepStrictEqual(r.lines.filter((l) => /^\{\{IMG/.test(l)), ['{{IMG1}}', '{{IMG2}}']);
  assert.strictEqual(r.lines[1], '{{IMG1}}');   // 빠진 그림은 첫 소제목 뒤
  assert.strictEqual(r.cut.length, 1);
});
ok('HTML — 이스케이프 · 소제목 · 인용 · 그림 자리 · 들여쓰기', () => {
  const h = toHtml(['## 1. <시장>', '> "인용"', '{{IMG1}}', '     -> a & b', '']);
  assert.ok(h.includes('<b>1. &lt;시장&gt;</b>'));
  assert.ok(h.includes('<blockquote data-ke-style="style2">"인용"</blockquote>'));
  assert.ok(h.includes('{{IMG1}}') && h.includes('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt; a &amp; b'));
  assert.ok(!h.includes('<script'));
});

// 로그인 대기열 (2026-11-07) — 로그인이 풀리면 글을 버리지 않고 대기 · 로그인 부탁은 3시간에 한 번 · 텔레그램 "로그인 했어" 때 그대로 다시
(async () => {
  const os = require('os'), fs = require('fs'), path = require('path');
  const TS = require('../../scripts/lib/tistory'), { parseCommand } = require('../../scripts/tg-listener');
  const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'tsq-')), 'q.json'), said = [], items = () => JSON.parse(fs.readFileSync(file)).items;
  const tell = async (m) => said.push(m), login = () => ({ ok: false, login: true, error: '로그인 풀림' });
  const item = (T) => ({ team: 't13', title: `${T} 점검`, lines: ['a'], images: [], category: '1', text: `${T} {{URL}}`, entry: { ticker: T } });
  const a = await TS.post(item('AAA'), { tell, pub: login, file }), b = await TS.post(item('BBB'), { tell, pub: login, file });
  ok('로그인이 풀리면 대기열에 넣고 로그인 부탁은 한 번만', () => {
    assert.ok(a.queued && b.queued && !a.ok);
    assert.deepStrictEqual(items().map((x) => x.title), ['AAA 점검', 'BBB 점검']);
    assert.strictEqual(said.filter((m) => m.includes('"어사이드로 로그인했어"')).length, 1);
  });
  const c = await TS.post(item('CCC'), { tell, pub: () => ({ ok: false, error: '버튼: 비공개' }), file });
  ok('로그인 말고 다른 실패는 대기열에 넣지 않는다', () => { assert.ok(!c.ok && !c.queued); assert.strictEqual(items().length, 2); });
  said.length = 0; await TS.retryPending({ tell, pub: login, file });
  ok('"로그인 했어" 뒤에도 로그인 화면이면 글을 그대로 두고 다시 부탁', () => { assert.strictEqual(items().length, 2); assert.ok(said.some((m) => m.includes('아직 티스토리 로그인 화면'))); });
  for (let i = 0; i < 3; i++) await TS.retryPending({ tell, pub: () => ({ ok: false, error: '그림 블록 0/2' }), file });
  ok('다른 실패는 3번까지만 다시', () => assert.strictEqual(items().length, 0));
  ok('텔레그램 "로그인 했어" 해석', () => {
    for (const t of ['로그인 했어', '로그인했어', '티스토리 로그인 완료', '로그인 했어요.', '어사이드로 로그인했어', '어사이드 로그인 했어', 'Aside로 로그인했어']) assert.strictEqual(parseCommand(t).kind, 'login', t);
    assert.strictEqual(parseCommand('로그인 해줘').kind, 'usage');
  });
  console.log(`\n${pass} 통과 · ${fail} 실패`);
  process.exit(fail ? 1 : 0);
})();
