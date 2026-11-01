'use strict';
// 11팀 시윤 — 커버드콜 상품 × 와인스타인 단계 (2026-11-01 사용자: "TSLA 면 그 옆에 TSLY·TSLW, 배당수익률, TSLA 가 와인스타인 1단계 횡보인지,
//   티커 클릭하면 어떤 요건에 의해 횡보요건에 해당되는지")
//
//   node scripts/covered-call-watch.js       아침 morning.sh 가 일요일에만 부른다(주봉 판정 · 분배금 주 1회 — 야후 예절)
//   옵션 --only=TSLA,NVDA(그 기초 종목만) · --no-git(파일만 쓰고 push 안 함)
//
// 기초 종목 일봉 = 한국투자증권 2년(수정주가) → lib/weinstein.js 가 숫자로 판정한다(AI 없음).
//   저장소 원칙 "팀은 차트 모양을 판정하지 않는다"의 사용자 결정 예외 — 코드 숫자 판정만, 실장·다른 팀 입력으로 들어가지 않는다.
// 분배금 = 야후 chart(3~5초 간격 · 429/403 이면 12시간 중단) — 상품 59개라 4~5분. 못 받은 상품은 지난주 값을 날짜와 함께 둔다.
// 판단 보조: 2026-10-30 백테스트에서 1단계 구간 커버드콜이 주식보다 나았던 건 33%뿐이다. 화면에 그대로 적는다.
const path = require('path');
const { loadEnv, paths, say, today, writeWindowData } = require('./lib/util');

// 2026-10-30 운용사 홈페이지 기준. 숏(CRSH·DIPS 등)·지수·묶음형은 뺐다 — 새 상품은 여기에 더한다.
const YM = 'AIYY:AI APLY:AAPL AMDY:AMD AMZY:AMZN BABO:BABA BRKC:BRK.B CONY:COIN CRCO:CRCL CVNY:CVNA DRAY:DKNG FBY:META GMEY:GME GOOY:GOOGL HIYY:HIMS HOOY:HOOD INYY:INTC JPO:JPM MARO:MARA MRNY:MRNA MSFO:MSFT MSTY:MSTR MUY:MU NFLY:NFLX NVDY:NVDA PLTY:PLTR PYPY:PYPL RBLY:RBLX RDYY:RDDT SMCY:SMCI SNOY:SNOW TSLY:TSLA TSMY:TSM XOMO:XOM XYZY:XYZ YSKH:SKHY YSPC:SPCX';
const LITE = 'TEST:TSLA NVIT:NVDA MSST:MSTR';                     // YieldMax 분배 목표 연 25%
const WP = 'AAPW:AAPL AMDW:AMD AMZW:AMZN ARMW:ARM AVGW:AVGO BABW:BABA BRKW:BRK.B COIW:COIN COSW:COST GOOW:GOOGL HOOW:HOOD METW:META MSFW:MSFT MSTW:MSTR NFLW:NFLX NVDW:NVDA PLTW:PLTR TSLW:TSLA UBEW:UBER UNHW:UNH';
const PRODUCTS = [[YM, 'cc'], [LITE, 'lite'], [WP, 'wp']].flatMap(([s, kind]) => s.split(' ').map((x) => { const [ticker, under] = x.split(':'); return { ticker, under, kind }; }));
const ORDER = ['1단계 막바지', '1단계', '경계', '2단계 진입', '2단계', '3단계', '4단계', '판정 불가'];
const FILE = path.join(paths.dashboardData, 'coveredcall.js');
const r1 = (v) => Math.round(v * 10) / 10;

// 상품 수익률과 같은 기간의 기초 주가 변화 (상품이 1년이 안 됐으면 상장일부터)
function underPct(bars, since, dateOf) {
  const b = since && bars.find((x) => dateOf(x.t) >= since), last = bars[bars.length - 1];
  return b && last ? r1((last.c / b.c - 1) * 100) : null;
}

async function run({ only = null, publish = true } = {}) {
  const kis = require('./lib/kis'), W = require('./lib/weinstein'), Y = require('./data/yahoo-estimates'), { barDateET } = require('./lib/bars');
  if (!kis.configured()) { say('WARN', '시윤: 한국투자증권 키가 없어 판정하지 못함'); return { ok: false }; }
  const t0 = Date.now(), list = only ? PRODUCTS.filter((p) => only.includes(p.under)) : PRODUCTS;
  const qqq = await kis.dailyBars('QQQ', { pages: 5 });
  const bars = {}, items = [];
  for (const u of [...new Set(list.map((p) => p.under))]) {
    const d = await kis.dailyBars(u, { pages: 5 });
    bars[u] = d.bars || [];
    items.push({ ticker: u, ...(d.ok ? W.analyze(d.bars, qqq.bars, { dateOf: barDateET }) : { verdict: '판정 불가', reason: `한국투자증권 일봉 없음 (${d.error})` }) });
  }
  const prev = {};
  try { const m = require('fs').readFileSync(FILE, 'utf8').match(/=\s*([\s\S]*);\s*$/); for (const it of JSON.parse(m[1]).items) for (const p of it.products || []) prev[p.ticker] = p; } catch (e) { /* 첫 실행 */ }
  let got = 0;
  for (const it of items) {
    it.products = [];
    for (const p of list.filter((x) => x.under === it.ticker)) {
      const dist = await Y.getDistributions(p.ticker);
      if (dist) got++;
      const old = !dist && prev[p.ticker] && prev[p.ticker].date ? prev[p.ticker] : null;
      it.products.push(old ? { ...old, stale: true } : { ticker: p.ticker, kind: p.kind, ...(dist || {}), underPct: dist ? underPct(bars[it.ticker], dist.since, barDateET) : null });
    }
  }
  items.sort((a, b) => ORDER.indexOf(a.verdict) - ORDER.indexOf(b.verdict) || a.ticker.localeCompare(b.ticker));
  const asOf = items.map((x) => x.asOf).filter(Boolean).sort().pop() || null;
  writeWindowData(FILE, 'COVEREDCALL_DATA', { updated: new Date().toISOString(), asOf, items, yahoo: { got, total: list.length, cooldown: !!Y.coolingDown() } }, { compact: true });
  const cnt = (v) => items.filter((x) => x.verdict === v).length;
  say('SYSTEM', `시윤: 기초 ${items.length}종목(1단계 ${cnt('1단계') + cnt('1단계 막바지')} · 경계 ${cnt('경계')} · 판정 불가 ${cnt('판정 불가')}) · 분배금 ${got}/${list.length}${Y.coolingDown() ? ' · ⚠️ 야후 쉬는 중' : ''} · ${Math.round((Date.now() - t0) / 60000)}분`);
  if (publish) { const pub = require('./finish-ondemand').gitPublish([FILE], `coveredcall: ${today()} 커버드콜·와인스타인 단계 ${items.length}종목`); if (!pub.ok) say('WARN', `GitHub: ${pub.error}`); }
  return { ok: true, items };
}

if (require.main === module) {
  loadEnv();
  const a = process.argv.slice(2), o = (a.find((x) => x.startsWith('--only=')) || '').slice(7);
  run({ only: o ? o.toUpperCase().split(',').filter(Boolean) : null, publish: !a.includes('--no-git') })
    .then((r) => process.exit(r.ok ? 0 : 1)).catch((e) => { console.error(e); process.exit(1); });
}
module.exports = { PRODUCTS, underPct, run };
