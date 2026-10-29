'use strict';
// "만들었는데 화면에 안 나오는" 재발 방지.
//
// 2026-08-13 실측 사고: LLM 이 매일 생성하던 것들이 통째로 버려지고 있었다.
//   · team2 `company` — 스키마 필수 필드인데(회사가 뭐 하는 곳인지) 어느 화면에도 없었다
//   · `quote` — 출처 원문 인용문. 수집하고 verify-claims 로 검증까지 하고 미표시
//   · team4 `claims[]` — 4팀 출처가 전부 여기 있는데 화면엔 출처 없는 한 줄만
// 고친 뒤 2팀 상세가 307자 → 64,741자가 됐다. 데이터는 그대로였다.
//
// ⚠️ 템플릿을 grep 하는 방식은 쓰지 않는다 — 주석에도 걸리고, 변수만 참조하고
//    실제로 출력하지 않아도 통과한다. 실제 렌더 함수를 돌려 결과 HTML 을 본다.
//
//   node tests/lib/render-coverage.test.js

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const REPO = path.join(__dirname, '..', '..');

let pass = 0, fail = 0, skip = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const skipIt = (name, why) => { console.log('  ⏭️  ' + name + '  (' + why + ')'); skip++; };

function loadRoom(pre = '') {
  const html = fs.readFileSync(path.join(REPO, 'index.html'), 'utf8');
  const script = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/.exec(html)[1];
  const mkStyle = () => { const o = {}; o.setProperty = (k, v) => { o[k] = v; }; o.getPropertyValue = (k) => o[k] || ''; return o; };
  const mk = () => ({ innerHTML: '', className: '', style: mkStyle(), dataset: {}, clientWidth: 1148, clientHeight: 600,
    classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
    appendChild() {}, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, setAttribute() {}, remove() {} });
  const nodes = new Map();
  const doc = { getElementById: (id) => { if (!nodes.has(id)) nodes.set(id, mk()); return nodes.get(id); },
    querySelectorAll: () => [], querySelector: () => null, createElement: () => mk(), head: mk(), body: mk(), addEventListener() {} };
  const win = { document: doc, location: { href: '', hash: '' }, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval, console,
    matchMedia: () => ({ matches: false, addEventListener() {} }), innerWidth: 1180, innerHeight: 900, addEventListener() {} };
  const ctx = vm.createContext(win);
  ctx.window = win; ctx.document = doc;
  for (const f of ['industry-ko.js', 'chief.js', 'team1.js', 'team2.js', 'team3.js', 'team4.js', 'team5.js', 'team6.js', 'chartcheck.js']) {
    const p = path.join(REPO, 'dashboard', 'data', f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
  }
  if (pre) vm.runInContext(pre, ctx);
  vm.runInContext(script, ctx, { filename: 'index.html' });
  return ctx;
}

const ctx = loadRoom();
const T2 = ctx.window.TEAM2_DATA, T4 = ctx.window.TEAM4_DATA;
// bodyFor 가 상세 본문이다 (briefing 은 그 위의 짧은 서술). 모달은 둘을 합쳐 보여준다.
// 2026-10-06: 2팀 종목 분석은 목록 표의 티커를 누르면 뜨는 팝업(openTicker → #mbox2)으로 옮겼다.
const popup = (t) => { ctx.openTicker(t); return ctx.document.getElementById('mbox2').innerHTML; };
const doneAll = [...((T2 && T2.picks) || []), ...((T2 && T2.listPicks) || [])].filter((p) => p.research && p.research.status === 'done');
const h2 = doneAll.map((p) => popup(p.ticker)).join('\n'), h4 = ctx.bodyFor('t4');
/* ⚠️ 렌더는 esc() 로 & < > " 를 이스케이프한다(주입 방어). 원문 그대로 찾으면 오탐이 난다.
   2026-08-14: VSXY 회사명 "Victoria's Secret & Co." 의 & 때문에 멀쩡한 렌더가 실패로 잡혔다.
   ⚠️ ctx.esc 를 쓰면 안 된다 — index.html 의 esc 는 `const` 라 VM 전역 속성이 되지 않는다
      (bodyFor 는 function 선언이라 되고, 그래서 헷갈리기 쉽다). 여기서 같은 규칙을 복제한다. */
const E = (x) => String(x == null ? '' : x)
  .replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

console.log('\n[5팀] 하린 — FRANK 상위 업종 리포트가 렌더되는가 (2026-10-12)');
{
  const fx = { generated: '2026-10-12', siteUpdated: 'x', degraded: false, d25: '2026-09-15', industries: [
    { key: 'Energy|Oil & Gas Refining & Marketing', sector: 'Energy', industry: 'Oil & Gas Refining & Marketing', frank: 1, frank25dChg: 2, finalWrs: 0.5074, count: 7, winRate: 100,
      members: [{ ticker: 'VLO', name: '발레로', rnk6: 1.2, rnk3: 2, rnk1: 5, high52: 98, ret1d: 1.1, dollarVolM: 900 }, { ticker: 'PBF', rnk6: 4 }],
      report: { status: 'done', researchedOn: '2026-10-12', carried: false, headline: 'H5SENT 정제마진 강세', summary: 'S5SENT 요약',
        whyLeading: [{ id: 'w1', statement: 'W5SENT 이유', evidence_level: 'sourced', sources: [{ title: 't', publisher: 'CNBC', url: 'https://www.cnbc.com/a.html', date: '2026-10-01', quote: 'Q5SENT quote text here' }] }],
        leaders: [{ ticker: 'VLO', role: 'R5SENT 역할', rnk6: 1.2, why: [{ id: 'l1a', statement: 'L5SENT 근거', evidence_level: 'sourced', sources: [{ title: 't', publisher: 'iM증권(연합인포맥스)', url: 'https://rreport.einfomax.co.kr/x.pdf', date: '2026-09-16', quote: '정제마진 강세 속 Gulf Coast' }] }] }],
        risks: [], sourceGap: '', factcheck: { verdict: 'pass', removed: [] }, evidenceCount: 12 } },
    { key: 'Tech|Chips', sector: 'Tech', industry: 'Semiconductors', frank: 2, frank25dChg: -1, finalWrs: 0.3, count: 42, winRate: 80, members: [{ ticker: 'MU', rnk6: 0.5 }], report: null },
  ] };
  const c5 = loadRoom(`window.TEAM5_DATA = ${JSON.stringify(fx)};`);
  const b = c5.bodyFor('t5');
  ok('순위표·결론·이유·인용·주도주·RS 순위·멤버 표가 다 나온다', () => {
    for (const k of ['H5SENT', 'S5SENT', 'W5SENT', 'Q5SENT', 'L5SENT', 'R5SENT', '6개월 RS 상위 1.2%', 'data-tk="VLO"', 'data-tk="PBF"', '정유·석유제품 판매', '▲2'])
      assert.ok(b.includes(k), `없음: ${k}`);
  });
  ok('분석 전 업종은 "분석 전"으로, 지어낸 내용 없이', () => {
    assert.ok(b.includes('아직 분석 전입니다'));
    assert.ok(b.includes('data-tk="MU"'));
  });
  ok('5팀 카드가 있다 (하린 · 1위 업종 표시)', () => { c5.cards(); const t = c5.document.getElementById('team').innerHTML; assert.ok(t.includes('하린') && t.includes('data-id="t5"') && t.includes('정유·석유제품 판매'), 'card 없음'); });
}

console.log('\n[7팀] 지우 — 결론 블록 · N 심층 블록이 렌더되는가 (2026-10-13)');
{
  const src = [{ title: 't', publisher: 'SEC EDGAR', url: 'https://www.sec.gov/x.htm', date: '2026-09-02', quote: 'Q7SENT quote text here' }];
  const cl = (id, st) => ({ id, statement: st, evidence_level: 'sourced', sources: src });
  const od = { items: [{ ticker: 'ZZOD', nameKo: '테스트회사', industry: 'Semiconductors', requestedOn: '2026-10-13', session: '2026-10-12', verdict: '조건부', verdictLine: 'V7SENT 결론',
    basis: [{ point: 'B7SENT 근거', side: 'for', checkRef: 'CANSLIM:L' }], conditions: ['C7SENT 조건'], invalidation: 'I7SENT 무효', dataLimits: 'D7SENT 한계',
    verdictAdjusted: ['A7SENT 조정 사유'], gates: { reasons: [{ key: 'x', ko: 'G7SENT 막는 조건' }], asOf: { market: '2026-10-09' } },
    setup: { pivot: 100, stop: 95 }, checks: { qm: [{ item: '선행 상승', status: '충족', evidence: 'e' }], canslim: [{ item: 'C 최근 분기 이익', status: '미충족', evidence: 'e' }] }, kis: null, cnbc: [],
    deep: { status: 'done', researchedOn: '2026-10-13', company: 'co', lead: 'ld', recentNews: [], financials: {}, risks: [], canslim: [], chartCheck: [], confidence: 'medium',
      nVerdict: '충족', nNarrative: 'NN7SENT 서술', consensus: { saleCy: 34.9, epsCy: 77.8, saleNy: 28.2, epsNy: 35.2, cyTrend: 0.3, nyTrend: null },
      newDrivers: [{ what: 'W7SENT 신제품', kind: 'product', stage: '매출 발생 중', since: '2026-02', basis: [cl('d1', 'DB7SENT 출시')], revenueImpact: [cl('d2', 'RI7SENT 매출')], profitImpact: [], expectedGrowth: [cl('d3', 'EG7SENT 성장')], counter: [] }] } }] };
  const c7 = loadRoom(`window.ONDEMAND_DATA = ${JSON.stringify(od)};`);
  c7.openTicker('ZZOD');
  const h = c7.document.getElementById('mbox2').innerHTML;
  ok('결론·근거·조건·무효화·막는 조건·코드 조정 사유·AI 판정 표시가 다 나온다', () => {
    for (const k of ['🟡 조건부', 'V7SENT', 'B7SENT', 'C7SENT', 'I7SENT', 'D7SENT', 'A7SENT', 'G7SENT', 'AI 판정 · 투자 판단 보조', '테스트회사']) assert.ok(h.includes(k), `없음: ${k}`);
  });
  ok('N 심층 — 동력·매출 영향·기대 성장·인용문·컨센서스(코드가 붙인 값), 근거 없는 칸은 "근거 없음"', () => {
    for (const k of ['N — 새로운 성장 동력', 'NN7SENT', 'W7SENT', 'DB7SENT', 'RI7SENT', 'EG7SENT', 'Q7SENT', '신제품', '매출 발생 중', '올해 매출 +34.9%', '근거 없음 (지어내지 않습니다)']) assert.ok(h.includes(k), `없음: ${k}`);
  });
  ok('목록에 없는 종목도 7팀 자료(체크표)로 팝업이 채워지고 "아직 조사 전" 문구가 같이 뜨지 않는다', () => {
    assert.ok(h.includes('쿨라매기 돌파 셋업 체크')); assert.ok(!h.includes('아직 조사 전입니다'));
  });
  ok('7팀 카드·탭', () => { c7.cards(); assert.ok(c7.document.getElementById('team').innerHTML.includes('지우')); assert.ok(c7.bodyFor('t7').includes('data-tk="ZZOD"')); });
  ok('N 칸이 없던 예전 심층 분석은 N 블록을 그리지 않는다', () => assert.strictEqual(c7.nBlock({ status: 'done', canslim: [] }), ''));
}

console.log('\n[전망치·N 줄] 팝업 맨 아래 전망치 칸 · 체크표 N 줄이 실제 N 분석으로 (2026-10-15)');
{
  const Y = require('../../scripts/data/yahoo-estimates');
  const est = Y.parseQuoteSummary(require('../fixtures/yahoo-SNDK.json'), { ticker: 'ZZES', today: '2026-10-15' });
  const src = [{ title: 't', publisher: 'p', url: 'https://x.com/a', date: '2026-10-01', quote: 'quote quote q' }];
  const base = { ticker: 'ZZES', requestedOn: '2026-10-15', session: '2026-10-14', verdict: '조건부', verdictLine: 'v', basis: [], gates: {},
    checks: { qm: [], canslim: [{ item: 'C 최근 분기 이익', status: '충족', evidence: 'c' }, { item: 'N 신제품·신서비스', status: '확인 불가', evidence: 'N 분석 대기 — 목록 순환' }] } };
  const withN = { ...base, estimates: est, deep: { status: 'done', researchedOn: '2026-10-14', canslim: [], nVerdict: '충족', estimatesNarrative: 'ESN15SENT 해석',
    newDrivers: [{ what: 'NEWPRODSENT 신제품', stage: '매출 발생 중', kind: 'product', basis: [{ id: 'b', statement: 's', evidence_level: 'sourced', sources: src }],
      revenueImpact: [{ id: 'r', statement: 'REVIMPSENT 매출 영향', evidence_level: 'sourced', sources: src }], profitImpact: [], expectedGrowth: [], counter: [] }] } };
  const noN = { ...base, ticker: 'ZZNO', estimates: null, deep: { status: 'done', researchedOn: '2026-10-14', canslim: [] } };
  const c = loadRoom(`window.ONDEMAND_DATA = ${JSON.stringify({ items: [withN, noN] })};`);
  c.openTicker('ZZES'); const h = c.document.getElementById('mbox2').innerHTML;
  ok('전망치 칸이 팝업 맨 아래 — 야후 링크·코드 요약문·표 4개·AI 해석', () => {
    for (const k of ['야후 파이낸스 analysis ↗', 'finance.yahoo.com/quote/ZZES/analysis/', '결산일별 컨센서스', 'EPS 추정치 변화', '최근 실적 서프라이즈', '최근 90일 투자의견·목표가',
      '애널리스트 18명 평균 46.27달러로 30일 전보다 0.1% 올랐다', '4번 추정치를 넘었고', '13.7% 상회했다', 'ESN15SENT', 'n/m']) assert.ok(h.includes(k), `없음: ${k}`);
    assert.ok(h.lastIndexOf('<div class="sec"><h4>전망치') > h.lastIndexOf('CAN SLIM 체크'), '전망치가 맨 아래가 아니다');
  });
  ok('체크표 N 줄 = 가장 최근 N 분석 (판정·신제품·매출 영향·분석일)', () => {
    assert.ok(/✅ N 신제품·신서비스<\/span><span>충족 · NEWPRODSENT/.test(h), 'N 줄이 바뀌지 않았다');
    assert.ok(h.includes('REVIMPSENT')); assert.ok(h.includes('2026-10-14 분석'));
  });
  c.openTicker('ZZNO'); const h2 = c.document.getElementById('mbox2').innerHTML;
  ok('N 분석 전이면 "대기" — "코드로 판정하지 않는다" 문구는 어디에도 없다', () => {
    assert.ok(h2.includes('N 분석 대기')); assert.ok(!h.includes('코드로 판정하지') && !h2.includes('코드로 판정하지'));
  });
  ok('전망치 자료가 없어도 야후 링크는 나간다', () => { assert.ok(h2.includes('finance.yahoo.com/quote/ZZNO/analysis/')); assert.ok(h2.includes('전망치 자료를 받지 못했습니다')); });
}

console.log('\n[8팀] 다온 — 보유 종목 소식 카드·탭 (2026-10-18)');
{
  const H = require('../../scripts/holdings-watch');
  const data = H.dashboardData([{ ticker: 'PLTR', show: [
    { type: 'news', title: 'HDSENT title', url: 'https://www.nasdaq.com/a', date: '2026-10-16', publisher: 'Zacks', summary: { ko: 'HDKO 요약', tone: 'good' }, isNew: true },
    { type: '8k', title: '8-K 공시: 실적 발표', fixed: '실적 발표 공시 — 실적 발표', url: 'https://www.sec.gov/x', date: '2026-10-15', publisher: 'SEC' }] }],
    { holdings: [{ ticker: 'PLTR', side: 'long' }, { ticker: 'OKTA', side: 'long' }], updated: '2026-10-18T01:00:00Z', source: 'trades.json' });
  ok('대시보드 데이터에 수량·금액이 없다', () => assert.ok(!/qty|entryPrice|exitPrice|fees/.test(JSON.stringify(data))));
  const c8 = loadRoom(`window.HOLDINGS_DATA = ${JSON.stringify(data)};`);
  c8.cards(); const card = c8.document.getElementById('team').innerHTML, b = c8.bodyFor('t8');
  ok('카드에 다온·보유 종목, 탭에 종목별 소식·요약·판단·새 소식 표시·링크', () => {
    assert.ok(card.includes('다온') && card.includes('PLTR · OKTA'));
    for (const k of ['data-tk="PLTR"', '🟢 HDKO 요약', '새 소식', '원문: HDSENT title', '📄 실적 발표 공시', 'trading-journal', '최근 2주 새 기사·공시·리포트가 없습니다', '매매 권유가 아닙니다']) assert.ok(b.includes(k), `없음: ${k}`);
  });
}

console.log('\n[9팀] 나래 — 개장 급등 카드·탭 (2026-10-28)');
{
  const M = require('../../scripts/open-movers');
  const data = M.dashboardData([
    { ticker: 'LITE', nameKo: '루멘텀', ratePct: 5.9, price: 866.18, amountUsd: 4.8e9, industry: 'Semiconductors',
      story: { headline: 'MVHEAD 핵심', detail: 'MVDETAIL 자세히', quote: 'MVQUOTE sentence', quoteFrom: 0, others: [], refs: [0] },
      news: [{ title: 'MVTITLE', url: 'https://example.com/a', date: '2026-10-27', publisher: 'StockStory' }] },
    { ticker: 'CRDO', ratePct: 10.8, price: 167.43, amountUsd: 1.3e9, industry: 'Semiconductors', story: null, news: [] }],
    { basis: '10/28 10:30 ET 기준', exact: true, themes: [{ name: 'MVTHEME', why: 'MVWHY', members: [{ ticker: 'LITE', n: 0 }, { ticker: 'CRDO', n: 0 }] }], updated: '2026-10-28T14:30:00Z' });
  const c9 = loadRoom(`window.MOVERS_DATA = ${JSON.stringify(data)};`);
  c9.cards(); const card = c9.document.getElementById('team').innerHTML, b = c9.bodyFor('t9'), br = c9.briefing('t9');
  ok('카드에 나래·공통 테마, 탭에 테마·같은 업종·종목별 핵심·자세히·인용·기사 링크, 브리핑', () => {
    assert.ok(card.includes('나래') && card.includes('MVTHEME') && card.includes('LITE · CRDO'));
    for (const k of ['🧩 공통 테마', 'MVTHEME', 'MVWHY', '같은 업종(RS 사이트 분류): 반도체 LITE·CRDO', 'data-tk="LITE"', '📌 MVHEAD 핵심', 'MVDETAIL 자세히', 'MVQUOTE sentence — StockStory 10-27',
      'href="https://example.com/a"', '대금 $4.8B', '최근 3일 기사 없음', '매수 권유가 아닙니다']) assert.ok(b.includes(k), `없음: ${k}`);
    assert.ok(br.includes('<b>MVTHEME</b>(LITE·CRDO)') && br.includes('반도체 2종목'));
  });
  const e9 = loadRoom(''); e9.cards();
  ok('자료가 없어도 카드·탭이 깨지지 않는다', () => { assert.ok(e9.document.getElementById('team').innerHTML.includes('나래')); assert.ok(e9.bodyFor('t9').includes('아직 확인 전')); });
}

console.log('\n[10팀] 윤슬 — 금리 전환 감시 · 연준 경제전망 (2026-10-29)');
{
  const F = require('../../scripts/fed-watch');
  const target = [['2022-01-03', 0.25], ['2022-03-17', 0.5], ['2023-07-27', 5.5], ['2024-09-19', 5.0], ['2025-12-11', 3.75], ['2026-09-17', 4.0], ['2026-10-28', 4.0]];
  const sp = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5].map((c, i) => [`2025-${String(i + 1).padStart(2, '0')}-28`, c]).concat([['2026-01-05', 1]]);
  const st = F.evaluate({ target, sp, sahm: [['2026-09-01', 0]], curve: [['2026-10-28', 0.87]], now: '2026-10-29' }); st.ko = F.koLine(st);
  const sep = F.parseSep(fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'fed-sep-20260916.html'), 'utf8'));
  st.sep = { date: '2026-09-16', url: 'https://www.federalreserve.gov/x.htm', years: sep.years, rows: sep.rows,
    analysis: { headline: 'FEDHEAD 매파', growth: 'FEDGROW', labor: 'FEDLAB', inflation: 'FEDINF', rates: 'FEDRATE', tilt: 'hawkish', meaning: 'FEDMEAN' } };
  const cf = loadRoom(`window.FED_DATA = ${JSON.stringify(st)};`);
  cf.cards(); cf.board();
  const card = cf.document.getElementById('team').innerHTML, b = cf.bodyFor('t10'), br = cf.briefing('t10'), bd = cf.document.getElementById('board').innerHTML;
  ok('카드·보드에 경보 단계, 탭에 규칙·금리·10개월선·SEP 표·해석, 브리핑', () => {
    for (const k of ['윤슬', '🔴 비중 축소 검토', '기준금리 4.00% · 인상기']) assert.ok(card.includes(k), `카드에 없음: ${k}`);
    for (const k of ['🏦 연준 🔴 비중 축소 검토', '장기 보유분 비중 축소 검토']) assert.ok(bd.includes(k), `보드에 없음: ${k} — ${bd.slice(0, 300)}`);
    for (const k of ['🏦 금리 전환 감시', '2024-09-19 (그 앞 인상 +5.25%p)', '2025-12 5 &lt; 10', '매도 조건 아님', '연준 경제전망(SEP) 2026-09-16', 'FEDHEAD 매파',
      '기준금리 중간값', '2026 3.8→4.1%', 'FEDGROW', 'FEDMEAN', 'href="https://www.federalreserve.gov/x.htm"', '매매 지시가 아니다']) assert.ok(b.includes(k), `없음: ${k}`);
    assert.ok(br.includes('FEDHEAD 매파'));
    assert.ok(!cf.bodyFor('t1').includes('금리 전환 감시'), '1팀 탭에 중복으로 넣지 않는다');
  });
  const e10 = loadRoom(''); e10.cards();
  ok('자료가 없어도 카드·탭이 깨지지 않는다', () => { assert.ok(e10.document.getElementById('team').innerHTML.includes('윤슬')); assert.ok(e10.bodyFor('t10').includes('아직 확인 전')); });
}

console.log('\n[팝업] SNS 반응 — 레딧 정리·글 목록·X 검색 링크 (2026-10-28)');
{
  const cs = loadRoom(`window.SNS_DATA = ${JSON.stringify({ items: { ZZSNS: { fetchedOn: '2026-10-28', mood: 'bear', summary: 'SNSSUM 요약', heat: 'SNSHEAT 과열',
    posts: [{ id: 'a', sub: 'stocks', title: 'SNSPOST title', url: 'https://www.reddit.com/r/stocks/comments/a/', date: '2026-10-27', score: 164, comments: 40, body: 'BODYTEXT' }] } } })};`);
  cs.openTicker('ZZSNS'); const h = cs.document.getElementById('mbox2').innerHTML;
  ok('팝업 맨 밑에 분위기·요약·과열 신호·레딧 글·X $티커 링크', () => {
    for (const k of ['SNS 반응', '🔴 비관 우세', 'SNSSUM 요약', '🔥 <b>과열 신호</b> SNSHEAT 과열', 'href="https://www.reddit.com/r/stocks/comments/a/"', 'r/stocks · ▲164 · 💬40 · 10-27',
      'https://x.com/search?q=%24ZZSNS&f=live', '과열 경고로 보세요']) assert.ok(h.includes(k), `없음: ${k}`);
    assert.ok(h.lastIndexOf('SNS 반응') > h.lastIndexOf('전망치'), 'SNS 칸이 전망치보다 아래');
  });
  cs.openTicker('ZZNONE'); const h0 = cs.document.getElementById('mbox2').innerHTML;
  ok('레딧 자료가 없어도 X 링크는 나간다', () => { assert.ok(h0.includes('레딧 자료가 아직 없습니다') && h0.includes('q=%24ZZNONE')); });
}

console.log('\n[1] 2팀 — 회사 설명·근거·인용문이 실제로 렌더되는가');
const done2 = doneAll;
if (T2 && T2.lists) {
  ok('도윤 5개 목록 — 목록마다 모든 종목이 클릭 가능한 티커(data-tk)로 표에 나온다', () => {
    const body = ctx.bodyFor('t2');
    assert.ok(body.includes('id="listNav"'), '목록 버튼 줄이 없다');
    for (const k of ['dollar', 'm1', 'm3', 'm6', 'all']) {
      ctx.listView(k);
      const h = ctx.document.getElementById('listView').innerHTML;
      const miss = T2.lists[k].items.filter((i) => !h.includes(`data-tk="${E(i.ticker)}"`)).map((i) => i.ticker);
      assert.strictEqual(miss.length, 0, `${k} 목록에서 빠진 티커: ${miss.join(', ')}`);
    }
  });
  ok('목록별 RS 칸 — 1MO=1M · 3MO=3M · 6MO=6M · 1~6MO=셋 다 · 거래대금=세 기간 순위만 (2026-10-08)', () => {
    const head = (k) => { ctx.listView(k); const h = ctx.document.getElementById('listView').innerHTML; const m = h.match(/<thead>[\s\S]*?<\/thead>/); return m ? m[0] : ''; };
    const has = (h, x) => h.includes(`>${x}</th>`);
    const m3 = head('m3'); if (T2.lists.m3.count) { assert.ok(has(m3, 'RS 3M') && has(m3, '3M 순위') && !has(m3, 'RS 1M'), 'm3'); }
    const m6 = head('m6'); if (T2.lists.m6.count) { assert.ok(has(m6, 'RS 6M') && has(m6, '6M 순위') && !has(m6, 'RS 1M'), 'm6'); }
    const al = head('all'); if (T2.lists.all.count) { for (const x of ['RS 1M', '1M 순위', 'RS 3M', '3M 순위', 'RS 6M', '6M 순위']) assert.ok(has(al, x), `all ${x}`); }
    const dl = head('dollar'); if (T2.lists.dollar.count) { assert.ok(has(dl, '1M 순위') && has(dl, '3M 순위') && has(dl, '6M 순위') && !has(dl, 'RS 1M'), 'dollar'); }
  });
  const withChecks = [...(T2.picks || []), ...(T2.listPicks || [])].find((p) => p.checks);
  if (withChecks) ok('티커 팝업에 쿨라매기·CAN SLIM 체크표가 그려진다 (2026-10-08)', () => {
    const h = popup(withChecks.ticker);
    assert.ok(h.includes('쿨라매기 돌파 셋업 체크') && h.includes('CAN SLIM 체크'), '체크표 제목 없음');
    assert.ok(h.includes(E(withChecks.checks.qm[0].evidence)), '체크 근거가 화면에 없다');
  });
  else skipIt('팝업 체크표', 'checks 데이터 없음');
} else skipIt('도윤 5개 목록', 'lists 데이터 없음');
if (!done2.length) skipIt('2팀 리서치 렌더', 'LLM 리서치 데이터 없음');
else {
  ok(`조사한 ${done2.length}종목이 전부 팝업에 나온다`, () => {
    const miss = done2.filter((p) => !popup(p.ticker).includes('도윤 리서치')).map((p) => p.ticker);
    assert.strictEqual(miss.length, 0, `리서치가 팝업에 안 나오는 종목: ${miss.join(', ')}`);
  });
  ok('회사 설명(company)이 글자 그대로 렌더된다', () => {
    // 사용자가 명시적으로 요구한 항목 — "이 회사가 어떤 회사인지"
    const has = done2.filter((p) => p.research.company);
    assert.ok(has.length, 'company 를 가진 종목이 하나도 없다 (스키마 필수인데)');
    const miss = has.filter((p) => !h2.includes(E(p.research.company.slice(0, 40)))).map((p) => p.ticker);
    assert.strictEqual(miss.length, 0, `회사 설명이 안 나오는 종목: ${miss.join(', ')}`);
  });
  ok('출처 원문 인용문(quote)이 렌더된다', () => {
    const quotes = done2.flatMap((p) => (p.research.whyRose || [])
      .flatMap((c) => (c.sources || []).map((s) => s && s.quote))).filter((q) => q && q.length > 12);
    if (!quotes.length) return;                       // 인용문이 하나도 없는 날은 통과
    const shown = quotes.filter((q) => h2.includes(E(q.slice(0, 30)))).length;
    assert.ok(shown > 0, `인용문 ${quotes.length}개 중 화면에 나온 건 0개`);
  });
  ok('출처 링크에 날짜가 붙는다', () => {
    const dated = done2.flatMap((p) => (p.research.whyRose || [])
      .flatMap((c) => (c.sources || []).map((s) => s && s.date))).filter(Boolean);
    if (!dated.length) return;
    assert.ok(dated.some((d) => h2.includes(String(d).slice(0, 10))), '어떤 출처 날짜도 화면에 없다');
  });
}

console.log('\n[2] 4팀 — 촉매 근거의 출처가 보이는가');
const done4 = (T4.items || []).filter((i) => i.catalyst && i.catalyst.status === 'done');
if (!done4.length) skipIt('4팀 촉매 렌더', 'LLM 촉매 데이터 없음');
else {
  ok('claims 의 출처 URL 이 렌더된다', () => {
    // 4팀 출처는 전부 claims[] 안에 있다. 이게 안 나오면 사용자는 검증할 방법이 없다.
    // ⚠️ 'sourced' 인 주장만 센다. 'no_source'(근거 없음) 주장에 딸린 링크는 렌더가 일부러
    //    그리지 않는다 — "근거 없음"이라 해놓고 출처를 보여주면 모순이다.
    //    (2026-08-17: HL-B 의 no_source 주장에 참고 링크 3개가 붙어 이 테스트가 오탐을 냈다)
    const urls = done4.flatMap((i) => (i.catalyst.claims || [])
      .filter((c) => c.evidence_level === 'sourced')
      .flatMap((c) => (c.sources || []).map((s) => s && s.url))).filter(Boolean);
    if (!urls.length) return;
    // href 는 HTML 이스케이프되므로 '&' 가 든 URL(SEC EDGAR 쿼리 등)은 이스케이프 형태로도 찾는다 (2026-09-09 실측 오탐)
    const shown = urls.filter((u) => h4.includes(u) || h4.includes(E(u))).length;
    assert.strictEqual(shown, urls.length, `출처 ${urls.length}개 중 ${shown}개만 렌더됨`);
  });
}

/* 리포트형(2026-08-14)으로 새로 넣은 필드들.
   오늘 데이터에는 아직 없을 수 있으므로 값을 주입해 렌더 경로가 살아있는지 본다.
   실데이터를 기다렸다가 "안 나오네" 하고 발견하는 걸 막는 게 목적이다. */
console.log('\n[4] 리포트형 신규 필드 — lead · counterpoint · 4팀 company');
const SENT = 'ZZSENTINEL리드문검사용문자열';
const mkClaim = (txt) => ({ id: 'zz1', statement: txt, evidence_level: 'sourced',
  sources: [{ title: 't', publisher: 'p', url: 'https://example.org/zz', date: '2026-08-14', quote: 'q' }] });

if (!done2.length) skipIt('2팀 lead·counterpoint 렌더', '2팀 리서치 데이터 없음');
else {
  ok('2팀 lead(리드문)가 렌더된다', () => {
    done2[0].research.lead = SENT + 'A';
    assert.ok(popup(done2[0].ticker).includes(SENT + 'A'), 'lead 가 화면에 없다');
  });
  ok('2팀 counterpoint(반대 근거)가 렌더된다', () => {
    done2[0].research.counterpoint = [mkClaim(SENT + 'B')];
    assert.ok(popup(done2[0].ticker).includes(SENT + 'B'), 'counterpoint 가 화면에 없다');
  });
  ok('counterpoint 가 비어도 빈 제목만 남지 않는다', () => {
    // ⚠️ done2[0] 만 비우면 나머지 종목의 counterpoint 때문에 문자열이 남아 오탐이 난다
    //    (2026-08-14: counterpoint 가 실제로 생성되기 시작하자 이 테스트가 그렇게 깨졌다).
    const saved = done2.map((p) => p.research.counterpoint);
    done2.forEach((p) => { p.research.counterpoint = []; });
    try {
      assert.ok(!popup(done2[0].ticker).includes('반대 근거·한계'), '반대 근거가 없는데 제목만 그려진다');
    } finally {
      done2.forEach((p, i) => { p.research.counterpoint = saved[i]; });
    }
  });
}
if (!done4.length) skipIt('4팀 company 렌더', '4팀 촉매 데이터 없음');
else ok('4팀 company(회사 설명)가 렌더된다', () => {
  done4[0].catalyst.company = SENT + 'C';
  assert.ok(ctx.bodyFor('t4').includes(SENT + 'C'), '4팀 회사 설명이 화면에 없다');
});
/* 1팀 뉴스도 같은 병을 앓고 있었다 (2026-08-14).
   · index.html 이 digest.slice(0,4) 라 7건 중 4건만 그렸다
   · 대시보드는 스키마에 없는 d.oneLine 을 그려서 제목만 나오고 설명이 통째로 비었다 */
console.log('\n[5] 1팀 뉴스 — 만든 만큼 화면에 나오는가');
const T1 = ctx.window.TEAM1_DATA || {};
const dg = ((T1.news || {}).digest) || [];
if (!dg.length) skipIt('1팀 뉴스 렌더', 'LLM 뉴스 데이터 없음');
else {
  const h1 = ctx.bodyFor('t1');
  ok(`뉴스 ${dg.length}건이 전부 렌더된다 (일부만 자르지 않는다)`, () => {
    const miss = dg.filter((x) => !h1.includes(E(String(x.headline).slice(0, 25)))).map((x) => String(x.headline).slice(0, 20));
    assert.strictEqual(miss.length, 0, `빠진 뉴스: ${miss.join(' | ')}`);
  });
  ok('쉬운 설명(easy)이 렌더된다', () => {
    const has = dg.filter((x) => x.easy);
    assert.ok(has.length, 'easy 를 가진 뉴스가 없다 (스키마 필수인데)');
    const shown = has.filter((x) => h1.includes(E(x.easy.slice(0, 30)))).length;
    assert.ok(shown > 0, `설명 ${has.length}건 중 화면에 나온 건 0개`);
  });
  ok('대시보드가 스키마에 없는 필드를 그리지 않는다', () => {
    // d.oneLine 은 team1 스키마에 존재한 적이 없다. 그리면 항상 빈 문자열이 된다.
    const room2 = fs.readFileSync(path.join(REPO, 'dashboard', 'breakout-room.html'), 'utf8');
    assert.ok(!/\bd\.oneLine\b/.test(room2), '대시보드가 존재하지 않는 d.oneLine 을 그리고 있다');
    assert.ok(/d\.easy/.test(room2), '대시보드가 easy(쉬운 설명)를 안 그린다');
  });
}

console.log('\n[6] 대시보드에 죽은 하드코딩이 되살아나지 않았는가');
const room = fs.readFileSync(path.join(REPO, 'dashboard', 'breakout-room.html'), 'utf8');
ok('표 열 렌더러가 행 데이터를 읽지 않고 상수 배지를 뿌리지 않는다', () => {
  // 2026-08-11 4팀 촉매 열, 2026-08-13 2팀 리서치 열에서 같은 버그가 났다.
  //   {h:'리서치',l:1,f:r=>`<span class="b b-yel">⏳대기</span>`,s:r=>0}
  // f 안에서 인자 r 을 한 번도 안 쓰면 무조건 같은 값이 나온다는 뜻이다.
  const bad = [];
  const re = /f:\s*(\w+)\s*=>\s*(`[^`]*`|'[^']*'|"[^"]*")/g;
  let m;
  while ((m = re.exec(room))) {
    const [, arg, body] = m;
    if (!new RegExp('\\b' + arg + '\\b').test(body)) bad.push(body.slice(0, 60));
  }
  assert.strictEqual(bad.length, 0, `행 데이터를 안 읽는 열: ${bad.join(' | ')}`);
});

console.log('\n[재민 팝업] 도윤 목록에 없는 재민 종목도 체크표·KIS·전망치·촉매로 팝업이 채워진다 (2026-10-22)');
{
  const checks = { qm: [{ item: '선행 상승', status: '충족', evidence: 'QMEP' }], canslim: [{ item: 'C 최근 분기 이익', status: '충족', evidence: 'c' }, { item: 'N 신제품·신서비스', status: '확인 불가', evidence: 'N 분석 대기 — 목록 순환' }] };
  const done = { ticker: 'ZZEP', price: 10, nameKo: '재민테스트', checks, kis: { nameKo: '재민테스트', exchange: 'NAS', fetchedAt: '2026-10-22' },
    catalyst: { status: 'done', category: 3, categoryName: '대형 파트너십·공급계약', volumeExplanation: 'EPVOLSENT 계약 발표', claims: [] } };
  const wait = { ticker: 'ZZEW', price: 10, checks, catalyst: { status: 'pending' } };
  const c = loadRoom(`window.TEAM4_DATA = ${JSON.stringify({ items: [done, wait, { ticker: 'ZZOLD', price: 1, catalyst: { status: 'pending' } }] })};`);
  c.openTicker('ZZEP'); const h = c.document.getElementById('mbox2').innerHTML;
  ok('체크표·KIS·촉매 분류가 나온다', () => { for (const k of ['쿨라매기 돌파 셋업 체크', 'QMEP', 'CAN SLIM 체크', '기업 기본 수치', '재민테스트', '재민 촉매 분류 — 대형 파트너십·공급계약']) assert.ok(h.includes(k), `없음: ${k}`); });
  ok('N 줄 = 재민 촉매 분류 (순환 대기라고 거짓말하지 않는다)', () => {
    assert.ok(h.includes('재민 촉매 분류: ③ 대형 파트너십·공급계약 — EPVOLSENT')); assert.ok(!h.includes('목록 순환'));
    c.openTicker('ZZEW'); const h2 = c.document.getElementById('mbox2').innerHTML;
    assert.ok(h2.includes('재민 촉매 분류 대기(화~토 아침 리서치)')); assert.ok(!h2.includes('목록 순환'));
  });
  ok('상세 자료가 없는 예전 재민 종목은 체크표 없이 (깨지지 않음)', () => { c.openTicker('ZZOLD'); assert.ok(!c.document.getElementById('mbox2').innerHTML.includes('CAN SLIM 체크')); });
}

console.log('\n[서준 팝업·야후 기사] 부합도 줄 없음 · 재민 팝업 야후 기사 (2026-10-26)');
{
  const plan = { ticker: 'ZZFT', name: 'n', grade: 'A', state: 'pre', price: 10, pivot: 11, stop: 9.5, distToPivotPct: -9, riskPerSharePct: 5, weightPct: 10, extensionAdr: 0.5, watch: true, reasons: [] };
  const t6 = { generated: '2026-10-26', regime: 'green', plans: [plan, { ...plan, ticker: 'ZZNF', pivot: 12 }], post: [], counts: {}, fitByKey: { 'ZZFT|11': { at: '2026-10-26', nimble: { fit: 3.14, redFlag: 0.7 }, laya: { fit: 2.2, redFlag: 0.1 } } } };
  const ep = { ticker: 'ZZYN', price: 10, checks: { qm: [], canslim: [] }, catalyst: { status: 'pending' }, yahooNews: [{ title: 'YNSENT Phase 3 results', url: 'https://finance.yahoo.com/x', date: '2026-10-24', publisher: 'MarketBeat', via: 'Yahoo' }] };
  const c = loadRoom(`window.TEAM6_DATA = ${JSON.stringify(t6)}; window.TEAM4_DATA = ${JSON.stringify({ items: [ep] })};`);
  c.openTicker('ZZFT'); const h = c.document.getElementById('mbox2').innerHTML;
  ok('서준 팝업·탭에 부합도 없음 — 옛 자료에 fitByKey 가 남아 있어도 (로컬 모델은 2026-10-29 뺌)', () => {
    assert.ok(h.includes('서준 매수 계획') && !/부합도|Nimble|Laya/.test(h));
    assert.ok(!/부합도|Nimble|Laya/.test(c.bodyFor('t6')));
  });
  ok('재민 팝업에 야후 파이낸스 기사(유료일 수 있음)', () => {
    c.openTicker('ZZYN'); const h3 = c.document.getElementById('mbox2').innerHTML;
    assert.ok(h3.includes('야후 파이낸스 기사') && h3.includes('YNSENT') && h3.includes('MarketBeat'));
  });
}

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}${skip ? ` · 건너뜀 ${skip}` : ''}`);
process.exit(fail ? 1 : 0);
