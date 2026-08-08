'use strict';
// SEC EDGAR XBRL — 최근 4분기 매출/영업이익/순이익 + 전년동기 대비, 그리고 8-K 공시.
// 무료·무인증. ⚠️ User-Agent 헤더 필수 (없거나 'curl' 이면 403).
//
// 실측으로 확인한 함정 5가지를 전부 처리한다:
//  1. 매출 태그가 회사마다 다르다 (AAPL 은 Revenues 가 2018년에 죽었고 NVDA 는 정반대,
//     JPM 은 RevenuesNetOfInterestExpense, KO 는 Revenues)
//     → 태그 목록 중 "가장 최신 분기를 가진 것"을 채택
//  2. ★ companyconcept 엔드포인트를 신뢰하면 안 된다 (2026-08-05 실측)
//     V·KO 의 RevenueFromContractWithCustomer.../OperatingIncomeLoss 는 companyconcept 에서
//     {} 또는 404 로 오는데 companyfacts 에는 2026년 분기 데이터가 멀쩡히 있다.
//     → companyfacts 단일 호출로 통일. 요청 수도 티커당 12회 → 1회로 줄어든다.
//     (이 때문에 "영업이익이 대형주 36%에 없다"는 사전 조사 수치는 companyconcept 의 아티팩트였다.
//      companyfacts 기준으로는 V·KO 모두 영업이익이 존재한다.)
//  3. units.USD 가 배열이 아니라 빈 객체 {} 로 오는 경우가 있다 → Array.isArray 가드 필수
//  4. 그래도 영업이익이 없는 업종이 있다 (은행: JPM 등) → 세전이익으로 폴백하되
//     라벨을 '세전이익'·'세전이익률' 로 바꾼다. 영업이익이라 속이지 않는다
//  5. 회계연도 4분기는 별도 사실로 존재하지 않는다 (10-K 는 연간 총액만 보고)
//     → Q4 = FY − 9M누계 로 유도. fp/fy 로 필터하면 안 된다(재작성분이 딸려옴)
//        → 기간 길이 80~100일로 분기를 판별하고 start|end 로 중복 제거
//  ※ UA 도 함정이다: 없거나 'curl/*' 이거나 URL 이 섞이면 403.

const { say, round } = require('../lib/util');
const cache = require('../lib/cache');

// ⚠️ SEC 는 UA 를 까다롭게 본다. 실측:
//    없음 / 'curl/*' → 403,  URL 이 섞인 문자열('...via github.com/...') → 403
//    SEC 권장 형식 '앱명/버전 (연락이메일)' → 200
//    .env 의 SEC_USER_AGENT 로 본인 이메일을 넣는 것을 권장한다.
const UA = process.env.SEC_USER_AGENT || 'breakout-team/0.1 (contact@example.com)';
const throttle = cache.throttler(8);   // SEC 정책 10req/s → 8 로 자체 제한

const REVENUE_TAGS = [
  'RevenueFromContractWithCustomerExcludingAssessedTax',
  'Revenues',
  'RevenueFromContractWithCustomerIncludingAssessedTax',
  'RevenuesNetOfInterestExpense',        // 은행
  'SalesRevenueNet',
  'InterestAndDividendIncomeOperating',  // 은행 보조
];
const OPINC_TAGS = ['OperatingIncomeLoss'];
const PRETAX_TAGS = [
  'IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest',
  'IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments',
];
const NETINC_TAGS = ['NetIncomeLoss', 'ProfitLoss'];

// 403(Request Rate Threshold Exceeded)은 백오프 후 재시도한다.
// Accept-Encoding 은 직접 설정하지 않는다 — 수동 지정 시 undici 가 자동 해제를 건너뛴다.
async function secFetch(url, { json = true, retries = 2 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    await throttle();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const res = await fetch(url, { signal: controller.signal, headers: { 'User-Agent': UA } });
      if (res.status === 403 || res.status === 429) {
        if (attempt < retries) { await new Promise((r) => setTimeout(r, 1500 * (attempt + 1))); continue; }
        say('WARN', `SEC ${res.status} (레이트리밋 또는 UA 거부) — .env 의 SEC_USER_AGENT 를 '앱명/버전 (이메일)' 형식으로 설정하세요`);
        return { ok: false, status: res.status, data: null };
      }
      if (!res.ok) return { ok: false, status: res.status, data: null };
      return { ok: true, status: 200, data: json ? await res.json() : await res.text() };
    } catch (e) {
      if (attempt >= retries) return { ok: false, status: 0, data: null, error: e.message };
    } finally { clearTimeout(timer); }
  }
  return { ok: false, status: 0, data: null };
}

// ── 티커 → CIK (10자리 zero-pad) ──
async function getCikMap() {
  return cache.through('cikMap', 'company_tickers', async () => {
    const r = await secFetch('https://www.sec.gov/files/company_tickers.json');
    if (!r.ok) return null;
    const map = {};
    for (const v of Object.values(r.data)) {
      if (v && v.ticker) map[String(v.ticker).toUpperCase()] = String(v.cik_str).padStart(10, '0');
    }
    return map;
  });
}

// 티커 → 회사 영문명. company_tickers.json 의 title 을 쓴다 (미국 상장 전 종목 커버).
// ⚠️ cikMap 과 캐시 키를 나눈다 — 같은 키를 쓰면 cikOf 가 기대하는 모양이 깨진다.
async function getNameMap() {
  return cache.through('cikMap', 'company_names', async () => {
    const r = await secFetch('https://www.sec.gov/files/company_tickers.json');
    if (!r.ok) return null;
    const map = {};
    for (const v of Object.values(r.data)) {
      if (v && v.ticker && v.title) map[String(v.ticker).toUpperCase()] = String(v.title);
    }
    return map;
  });
}

async function nameOf(ticker) {
  const map = await getNameMap();
  if (!map) return null;
  const t = String(ticker).toUpperCase();
  return map[t] || map[t.replace(/-/g, '.')] || map[t.replace(/\./g, '-')] || null;
}

async function cikOf(ticker) {
  const map = await getCikMap();
  if (!map) return null;
  const t = String(ticker).toUpperCase();
  return map[t] || map[t.replace(/-/g, '.')] || map[t.replace(/\./g, '-')] || null;
}

// ── companyconcept 에서 분기 사실 추출 ──
function daysBetween(a, b) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86400000);
}

function unitsOf(payload) {
  const u = payload && payload.units && payload.units.USD;
  return Array.isArray(u) ? u : [];   // ⚠️ 함정 2: {} 로 오는 경우
}

// start|end 중복 제거 — 같은 기간이 여러 accn 으로 반복 보고된다 (AAPL 117행 → 30분기)
function dedupe(list) {
  const m = new Map();
  for (const e of list) {
    if (!e.start || !e.end || e.val == null) continue;
    const k = `${e.start}|${e.end}`;
    const prev = m.get(k);
    if (!prev || String(e.filed) > String(prev.filed)) m.set(k, e);
  }
  return [...m.values()];
}

// ⚠️ 함정 4: 회계 Q4 는 별도 사실이 없다 → FY − 9M누계 로 유도
function deriveQ4(all) {
  const quarters = all.filter((e) => { const d = daysBetween(e.start, e.end); return d >= 80 && d <= 100; });
  const annuals = all.filter((e) => { const d = daysBetween(e.start, e.end); return d >= 350 && d <= 380; });
  const ytd9m = all.filter((e) => { const d = daysBetween(e.start, e.end); return d >= 260 && d <= 285; });

  const derived = [];
  for (const fy of annuals) {
    // 같은 시작일의 9개월 누계를 찾는다
    const nine = ytd9m.find((y) => y.start === fy.start);
    if (!nine) continue;
    // 이미 그 구간의 분기 사실이 있으면 유도하지 않는다
    const exists = quarters.some((q) => q.start === nine.end || (Math.abs(daysBetween(q.end, fy.end)) <= 3 && daysBetween(q.start, nine.end) >= -3 && daysBetween(q.start, nine.end) <= 5));
    if (exists) continue;
    derived.push({ start: nine.end, end: fy.end, val: fy.val - nine.val, filed: fy.filed, derived: true, fy: fy.fy });
  }
  return { quarters, derived };
}

function quarterlySeries(payload) {
  const all = dedupe(unitsOf(payload));
  if (!all.length) return [];
  const { quarters, derived } = deriveQ4(all);
  const merged = dedupe([...quarters, ...derived]);
  merged.sort((a, b) => (a.end < b.end ? 1 : -1));
  return merged;
}

// ⚠️ 함정 1: 태그를 순차 탐침해 "가장 최신 분기를 가진" 것을 채택
// ⚠️ companyconcept 대신 companyfacts 를 쓴다 (실측 근거):
//    companyconcept/CIK.../OperatingIncomeLoss.json 는 V·KO 에 대해 {} 또는 404 를 주는데
//    companyfacts 에는 같은 태그의 2026년 분기 데이터가 멀쩡히 들어있다. SEC API 불일치다.
//    부수 효과로 요청 수가 티커당 최대 12회 → 1회로 줄어 레이트리밋 부담도 사라진다.
//    (gzip ~290KB / 원본 ~4MB, 30일 캐시)
async function getCompanyFacts(cik) {
  const ckey = `facts_${cik}`;
  let v = cache.get('secFinancials', ckey);
  if (v !== null) return v && v.__missing ? null : v;
  const rr = await secFetch(`https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`);
  if (rr.ok) { cache.set('secFinancials', ckey, rr.data); return rr.data; }
  // 404 만 '없음'으로 캐시. 403/429/네트워크 오류는 캐시하지 않는다
  // (일시적 실패를 30일 캐싱하면 그 종목이 계속 '데이터 없음'으로 남는다)
  if (rr.status === 404) cache.set('secFinancials', ckey, { __missing: true, status: 404 });
  return null;
}

// 태그 후보 중 "가장 최신 분기를 가진" 것을 채택
function pickTag(facts, tags) {
  const gaap = facts && facts.facts && facts.facts['us-gaap'];
  if (!gaap) return null;
  let best = null;
  for (const tag of tags) {
    const def = gaap[tag];
    if (!def) continue;
    const series = quarterlySeries(def);
    if (!series.length) continue;
    if (!best || series[0].end > best.series[0].end) best = { tag, series };
  }
  return best;
}

function pickAt(series, endDate, tolDays = 12) {
  if (!series) return null;
  let best = null, bestGap = Infinity;
  for (const e of series) {
    const gap = Math.abs(daysBetween(e.end, endDate));
    if (gap <= tolDays && gap < bestGap) { best = e; bestGap = gap; }
  }
  return best;
}

// 전년 동기 (약 365일 전, ±20일 허용)
function yoyOf(series, endDate) {
  if (!series) return null;
  const target = new Date(Date.parse(endDate) - 365 * 86400000).toISOString().slice(0, 10);
  return pickAt(series, target, 20);
}

async function getQuarterlyFinancials(ticker, opts = {}) {
  const cik = await cikOf(ticker);
  if (!cik) return { ok: false, ticker, error: 'CIK 없음', quarters: [] };

  const facts = await getCompanyFacts(cik);
  if (!facts) return { ok: false, ticker, cik, error: 'companyfacts 수신 실패', quarters: [] };

  const rev = pickTag(facts, REVENUE_TAGS);
  const opinc = pickTag(facts, OPINC_TAGS);
  const pretax = pickTag(facts, PRETAX_TAGS);
  const net = pickTag(facts, NETINC_TAGS);

  if (!rev || !rev.series.length) return { ok: false, ticker, cik, error: '매출 태그 없음', quarters: [] };

  // ⚠️ 함정 3: 영업이익이 없으면 세전이익으로 폴백하되 라벨을 바꾼다
  const useOpinc = opinc && opinc.series.length;
  const profitSrc = useOpinc ? opinc : (pretax && pretax.series.length ? pretax : null);
  const profitLabel = useOpinc ? '영업이익' : (profitSrc ? '세전이익' : null);
  const marginLabel = useOpinc ? '영업이익률' : (profitSrc ? '세전이익률' : null);

  const quarters = [];
  for (const q of rev.series.slice(0, opts.count || 4)) {
    const p = profitSrc ? pickAt(profitSrc.series, q.end) : null;
    const n = net ? pickAt(net.series, q.end) : null;
    const revYoy = yoyOf(rev.series, q.end);
    const pYoy = profitSrc ? yoyOf(profitSrc.series, q.end) : null;
    const nYoy = net ? yoyOf(net.series, q.end) : null;
    const growth = (cur, prev) => (cur != null && prev != null && prev !== 0) ? round(((cur - prev) / Math.abs(prev)) * 100, 1) : null;

    quarters.push({
      periodStart: q.start, periodEnd: q.end, derived: !!q.derived,
      revenue: q.val,
      profit: p ? p.val : null,
      netIncome: n ? n.val : null,
      margin: (p && q.val) ? round((p.val / q.val) * 100, 1) : null,
      yoy: {
        revenue: growth(q.val, revYoy ? revYoy.val : null),
        profit: growth(p ? p.val : null, pYoy ? pYoy.val : null),
        netIncome: growth(n ? n.val : null, nYoy ? nYoy.val : null),
        priorEnd: revYoy ? revYoy.end : null,
      },
    });
  }

  return {
    ok: true, ticker, cik,
    profitLabel, marginLabel,
    profitIsOperating: !!useOpinc,
    tags: { revenue: rev.tag, profit: profitSrc ? profitSrc.tag : null, netIncome: net ? net.tag : null },
    quarters,
    unit: 'USD',
    source_url: `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=10-Q`,
  };
}

// ── 8-K 등 공시 목록 (촉매 확인용) ──
const ITEM_KO = {
  '1.01': '중요 계약 체결', '2.02': '실적 발표', '5.02': '임원 변동',
  '7.01': 'Reg FD 공시', '8.01': '기타 중요사건', '9.01': '재무제표·첨부',
  '5.07': '주주총회 표결', '1.03': '파산', '3.01': '상장규정 위반',
};

async function getFilings(ticker, { forms = ['8-K', '10-Q', '10-K'], limit = 20 } = {}) {
  const cik = await cikOf(ticker);
  if (!cik) return { ok: false, ticker, error: 'CIK 없음', filings: [] };
  const data = await cache.through('secSubmissions', cik, async () => {
    const r = await secFetch(`https://data.sec.gov/submissions/CIK${cik}.json`);
    return r.ok ? r.data : null;
  });
  if (!data || !data.filings || !data.filings.recent) return { ok: false, ticker, cik, error: '제출 목록 없음', filings: [] };

  const R = data.filings.recent;
  const cikNoPad = String(Number(cik));
  const out = [];
  for (let i = 0; i < (R.form || []).length && out.length < limit; i++) {
    if (forms.length && !forms.includes(R.form[i])) continue;
    const accn = String(R.accessionNumber[i]).replace(/-/g, '');
    const items = String(R.items[i] || '').split(',').map((s) => s.trim()).filter(Boolean);
    out.push({
      form: R.form[i],
      filingDate: R.filingDate[i],
      reportDate: R.reportDate[i] || null,
      items,
      itemsKo: items.map((it) => ITEM_KO[it] || it),
      isEarnings: items.includes('2.02'),
      url: `https://www.sec.gov/Archives/edgar/data/${cikNoPad}/${accn}/${R.primaryDocument[i]}`,
      description: R.primaryDocDescription[i] || null,
    });
  }
  return { ok: true, ticker, cik, companyName: data.name || null, filings: out };
}

module.exports = { getCompanyFacts, pickTag, getQuarterlyFinancials, getFilings, cikOf, getCikMap, getNameMap, nameOf, quarterlySeries, REVENUE_TAGS };

if (require.main === module) {
  require('../lib/util').loadEnv();
  const tks = process.argv.slice(2).length ? process.argv.slice(2) : ['AAPL', 'JPM', 'V', 'NVDA'];
  (async () => {
    for (const t of tks) {
      const f = await getQuarterlyFinancials(t);
      console.log(`\n════════ ${t} ════════`);
      if (!f.ok) { console.log('  실패:', f.error); continue; }
      console.log(`  CIK ${f.cik} · 매출태그 ${f.tags.revenue}`);
      console.log(`  이익항목: ${f.profitLabel} (${f.tags.profit || '없음'})${f.profitIsOperating ? '' : '  ⚠️ 영업이익 없음 → 세전이익으로 대체'}`);
      const M = (v) => v == null ? '        —' : (v / 1e6).toLocaleString('en-US', { maximumFractionDigits: 0 }).padStart(9);
      const P = (v) => v == null ? '     —' : ((v >= 0 ? '+' : '') + v.toFixed(1) + '%').padStart(7);
      console.log(`  분기        매출(M)   ${(f.profitLabel || '이익').padEnd(6)}(M)  순이익(M)  ${f.marginLabel || '이익률'}   매출YoY  이익YoY`);
      for (const q of f.quarters) {
        console.log(`  ${q.periodEnd}${q.derived ? '*' : ' '} ${M(q.revenue)} ${M(q.profit)} ${M(q.netIncome)}  ${q.margin == null ? '   —' : (q.margin.toFixed(1) + '%').padStart(6)}  ${P(q.yoy.revenue)} ${P(q.yoy.profit)}`);
      }
      console.log('  (* = 10-K 연간 − 9개월누계 로 유도한 회계 4분기)');
    }
    const fil = await getFilings(tks[0], { forms: ['8-K'], limit: 5 });
    if (fil.ok) {
      console.log(`\n════════ ${tks[0]} 최근 8-K ════════`);
      for (const x of fil.filings) console.log(`  ${x.filingDate}  [${x.itemsKo.join(', ')}]${x.isEarnings ? ' ★실적' : ''}\n    ${x.url}`);
    }
    cache.report('SEC 캐시');
  })();
}
