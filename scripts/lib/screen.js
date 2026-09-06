'use strict';
// 2팀 스크리닝 — RS 3기간 중 하나라도 상위 2% + ADR≥4 + 150일선 위. ETF·ETN 은 제외.
// 그리고 테마 클러스터링(섹터/업종 쏠림).

const { num, yes, round, say, isEtf } = require('./util');
const { rankPercentiles, bestPct } = require('./percentile');

const DEFAULTS = {
  topPct: 2,        // 상위 2%  → 백분위 98 이상
  adrMin: 4,        // ADR_20D ≥ 4%
  requireMa150: true,
  excludeEtf: true,   // ETF·ETN 은 실적·커버리지가 없어 2팀 질문이 성립하지 않는다
};

// 사이트 Above_150_SMA 는 "O"/"X" 문자열 (utils.py:397 = latest_price > ma150)
function aboveMa150(row) {
  const v = row.Above_150_SMA;
  if (v === undefined || v === null || v === '') return null;   // 컬럼 부재 → 판정불가
  return String(v).trim().toUpperCase() === 'O';
}

function aboveMa50(row) {
  const v = row.Above_50_SMA;
  if (v === undefined || v === null || v === '') return null;
  return String(v).trim().toUpperCase() === 'O';
}

function pickRow(row) {
  const p = row.__p || {};
  const qualifiedBy = [];
  return {
    ticker: row.Ticker || row.ticker,
    price: num(row.Price),
    marketCap: row['Market Cap'] || null,
    sector: row.Sector || '',
    industry: row.Industry || '',
    rs: {
      m1: { v: num(row.RS_1mo), pct: p.RS_1mo ?? null },
      m3: { v: num(row.RS_3mo), pct: p.RS_3mo ?? null },
      m6: { v: num(row.RS_6mo), pct: p.RS_6mo ?? null },
    },
    qualifiedBy,
    bestPct: bestPct(row),
    // 요청 컬럼
    adr: num(row.ADR_20D),
    cyTrend: num(row.CY_Trend),
    nyTrend: num(row.NY_Trend),
    upCount: num(row.Up_Count),
    downCount: num(row.Down_Count),
    upDownRatio: normalizeUdr(num(row.Up_Down_Ratio)),
    bbwthd: num(row.BBWTHD),
    bbwthdLow: num(row.BBWTHD_LOW),
    high52: num(row.High_52W_Pct),
    volx: num(row.VOL_X),
    volSurgeWk: num(row.Vol_Surge_Wk),
    // 이동평균 (사이트 제공)
    aboveMa150: aboveMa150(row),
    aboveMa50: aboveMa50(row),
    order: yes(row.Order),                       // 주가>50>150>200 (미너비니)
    jeongbae: yes(row['Jungjanggi Jeongbaeyeol']), // 20>60>120
    div10: num(row['10DIV']),
    div50: num(row['50DIV']),
    div200: num(row['200DIV']),
    // 절대 상승률 (참고 컬럼 — RS 와 다른 지표)
    ret1m: num(row.Ret_1M_Pct), ret3m: num(row.Ret_3M_Pct), ret6m: num(row.Ret_6M_Pct),
    maxRise1m: num(row.Max_Rise_1M_Pct), maxRise3m: num(row.Max_Rise_3M_Pct), maxRise6m: num(row.Max_Rise_6M_Pct),
    brk60d: yes(row.BRK_60D),
    clsPos: num(row.CLS_POS),
    // ── 사이트 컬럼 중 2026-09-07 까지 안 쓰던 것 (감사 후 추가) ──
    targetStatus: yes(row.Target_Status),            // CY·NY 전망 상향 ≥5% 둘 다 (utils.py)
    est: {                                           // 컨센서스 EPS 원값: 현재 vs 30일 전
      cyCur: num(row.CY_Current), cy30: num(row.CY_30Ago),
      nyCur: num(row.NY_Current), ny30: num(row.NY_30Ago),
    },
    saleCy: num(row.SALE_CY), saleNy: num(row.SALE_NY),   // 컨센서스 매출성장 % (당해/차기)
    epsCy: num(row.EPS_CY), epsNy: num(row.EPS_NY),       // 컨센서스 EPS 성장 % (당해/차기)
    bbCenterBrk5d: yes(row.BB_Center_Breakout_5D),   // 볼린저 중심선 5일 내 돌파
    newHigh52: yes(row.New_High_52W),                // 52주 신고가 (Y/N)
    apiCalled: row.api_called === true,              // 사이트가 오늘 yfinance 를 새로 조회했는지 (캐시 아님)
    siteRankPct6: num(row.RS_Rank_Pct),              // 사이트 6개월 순위 백분위 (낮을수록 상위)
    fs: null,                                        // fs_data.json (최근 3분기) — run-breakout 이 채운다
    top2Since: null, top2Streak: null,               // rs-entry.js 가 채운다
    // 야후로 나중에 채우는 칸 (기울기·연속이탈 등). 없으면 null 로 남겨 '판정불가' 표기
    ma150Slope: null,
    ta: null,
  };
}

// Up_Down_Ratio 단위 정규화: 라이브는 0~100 퍼센트, 일부 소스는 0~1 비율
function normalizeUdr(v) {
  if (v === null) return null;
  return v <= 1 ? v * 100 : v;
}

function selectBreakoutCandidates(rows, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const threshold = 100 - o.topPct;   // 상위 2% → 98
  rankPercentiles(rows);

  const stats = {
    universe: rows.length,
    byPeriod: { m1: 0, m3: 0, m6: 0 },
    unionTop: 0,
    afterEtf: 0,
    afterAdr: 0,
    afterMa150: 0,
    ma150Unknown: 0,
    dropped: { etf: 0, adr: 0, ma150: 0 },
    etfExcluded: [],
    threshold,
  };

  const qualified = [];
  for (const row of rows) {
    const ticker = row.Ticker || row.ticker;
    if (!ticker) continue;
    const p = row.__p || {};
    const by = [];
    if (p.RS_1mo !== null && p.RS_1mo >= threshold) { by.push('1mo'); stats.byPeriod.m1++; }
    if (p.RS_3mo !== null && p.RS_3mo >= threshold) { by.push('3mo'); stats.byPeriod.m3++; }
    if (p.RS_6mo !== null && p.RS_6mo >= threshold) { by.push('6mo'); stats.byPeriod.m6++; }
    if (by.length === 0) continue;
    stats.unionTop++;

    // ⚠️ ETF·ETN 제외. 2팀은 "이 종목이 왜 올랐나 + 증권사 실적 전망 조정"을 조사하는데
    //    ETF·ETN 은 실적 발표도 애널리스트 커버리지도 없어 그 질문이 성립하지 않는다.
    //    레버리지 상품은 ADR·이격도 같은 변동성 지표도 왜곡된다.
    //    (4팀은 2026-08-11 부터 같은 이유로 제외 중. 2026-08-13 에 GDXU(3배 레버리지
    //     금광 ETN)가 리서치 슬롯을 하나 먹은 것을 보고 2팀에도 적용했다)
    if (o.excludeEtf && isEtf(row)) {
      stats.dropped.etf++;
      if (stats.etfExcluded.length < 20) stats.etfExcluded.push(ticker);
      continue;
    }
    stats.afterEtf++;

    const adr = num(row.ADR_20D);
    if (!(adr !== null && adr >= o.adrMin)) { stats.dropped.adr++; continue; }
    stats.afterAdr++;

    const ma150 = aboveMa150(row);
    if (o.requireMa150) {
      if (ma150 === null) { stats.ma150Unknown++; stats.dropped.ma150++; continue; }
      if (ma150 !== true) { stats.dropped.ma150++; continue; }
    }
    stats.afterMa150++;

    const item = pickRow(row);
    item.qualifiedBy = by;
    qualified.push(item);
  }

  qualified.sort((a, b) => (b.bestPct || 0) - (a.bestPct || 0));
  return { qualified, stats };
}

// ── 테마 클러스터링 ──
// 숫자는 Node 가 확정한다. LLM 은 이름 붙이기와 해석만 하며 클러스터를 발명할 수 없다.
const UNCLASSIFIED = new Set(['', 'N/A', 'NA', 'NULL', 'NONE', '—']);

function bucketKey(v) {
  const s = String(v == null ? '' : v).trim();
  return UNCLASSIFIED.has(s.toUpperCase()) ? '미분류' : s;
}

function group(items, field) {
  const map = new Map();
  for (const it of items) {
    const key = bucketKey(it[field]);
    if (!map.has(key)) map.set(key, { name: key, count: 0, tickers: [] });
    const b = map.get(key);
    b.count++;
    b.tickers.push(it.ticker);
  }
  const total = items.length || 1;
  return [...map.values()]
    .map((b) => ({ ...b, sharePct: round((b.count / total) * 100, 1) }))
    .sort((a, b) => b.count - a.count);
}

// 클러스터링 본체 — 유니온(detectThemes)과 기간별(detectThemesByPeriod)이 공유한다
function clusterOf(items, minCount = 2) {
  const bySector = group(items, 'sector');
  const byIndustry = group(items, 'industry');

  const clusters = [];
  for (const [level, list] of [['Sector', bySector], ['Industry', byIndustry]]) {
    for (const b of list) {
      if (b.name === '미분류') continue;          // 미분류는 테마가 아니다
      if (b.count < minCount) continue;
      clusters.push({
        key: `${level}:${b.name}`,
        level, name: b.name, count: b.count, sharePct: b.sharePct,
        tickers: b.tickers,
        concentration: b.sharePct >= 20 ? 'high' : b.sharePct >= 10 ? 'mid' : 'low',
      });
    }
  }
  clusters.sort((a, b) => b.count - a.count);

  // 공통 테마가 없으면 없다고 그대로 보고한다. 억지로 묶지 않는다.
  const meaningful = clusters.filter((c) => c.count >= Math.max(minCount, 3));
  let headline;
  if (items.length === 0) {
    headline = '자격 종목 없음';
  } else if (meaningful.length === 0) {
    headline = `공통 테마 없음 — ${items.length}종목이 ${bySector.length}개 섹터에 분산 (최대 쏠림 ${bySector[0] ? bySector[0].name + ' ' + bySector[0].count + '종목' : '—'})`;
  } else {
    headline = meaningful.slice(0, 3).map((c) => `${c.name} ${c.count}종목(${c.sharePct}%)`).join(' · ');
  }
  return { bySector, byIndustry, clusters, headline, total: items.length };
}

const PERIODS = [['m1', '1mo'], ['m3', '3mo'], ['m6', '6mo']];

function detectThemes(qualified, { minCount = 2 } = {}) {
  const r = clusterOf(qualified, minCount);
  // 유니온 클러스터마다 "멤버가 어느 기간으로 통과했나" 를 센다 — 같은 클러스터라도 1M 쏠림인지 6M 쏠림인지 구분
  const byT = new Map(qualified.map((q) => [q.ticker, q.qualifiedBy || []]));
  for (const c of r.clusters) {
    c.periods = { m1: 0, m3: 0, m6: 0 };
    for (const t of c.tickers) for (const [k, tag] of PERIODS) if ((byT.get(t) || []).includes(tag)) c.periods[k]++;
  }
  return { ...r, minCount };
}

// 기간별(1M·3M·6M 상위 2%) 테마 3세트 + 교차 집합.
//
// 배경 (2026-09-07 사용자 요청): 유니온에서만 테마를 뽑으면 "1개월 기준 새로 몰리는 곳"과
//   "6개월 기준 오래 강한 곳"이 한 덩어리로 섞인다. 기간별로 나누고, 세 기간에 다 있는 지속 주도 /
//   1M 에만 있는 신규 진입 / 6M 에만 있는 퇴조를 Node 가 확정한다. LLM 은 이 목록 안에서만 이름을 붙인다.
// ⚠️ 한 종목이 여러 기간에 들어가므로 기간별 count 의 합 > 유니온. sharePct 분모는 "그 기간의 count" 다.
//    cross.counts 의 합은 항상 qualified.length 와 같다 — 정합성 검사용.
function detectThemesByPeriod(qualified, { minCount = 2, topN = 10 } = {}) {
  const byPeriod = {};
  for (const [k, tag] of PERIODS) {
    const members = qualified.filter((q) => (q.qualifiedBy || []).includes(tag));
    const r = clusterOf(members, minCount);
    byPeriod[k] = {
      count: members.length,
      tickers: members.map((q) => q.ticker),
      headline: r.headline,
      clusters: r.clusters.slice(0, topN),
      clustersTotal: r.clusters.length,
      topSectors: r.bySector.filter((b) => b.name !== '미분류').slice(0, 3).map((b) => ({ name: b.name, count: b.count, sharePct: b.sharePct })),
      topIndustries: r.byIndustry.filter((b) => b.name !== '미분류').slice(0, 3).map((b) => ({ name: b.name, count: b.count, sharePct: b.sharePct })),
    };
  }
  const cross = { persistent: [], newEntrants: [], midTerm: [], fading: [], other: {}, counts: {} };
  for (const q of qualified) {
    const by = new Set(q.qualifiedBy || []);
    const has1 = by.has('1mo'), has3 = by.has('3mo'), has6 = by.has('6mo');
    if (has1 && has3 && has6) cross.persistent.push(q.ticker);
    else if (has1 && !has3 && !has6) cross.newEntrants.push(q.ticker);
    else if (has3 && !has1) cross.midTerm.push(q.ticker);          // 3mo(+6mo) — 1mo 는 아님
    else if (has6 && !has1 && !has3) cross.fading.push(q.ticker);
    else {                                                          // 1mo+3mo · 1mo+6mo
      const key = [has1 && '1mo', has3 && '3mo', has6 && '6mo'].filter(Boolean).join('+');
      (cross.other[key] = cross.other[key] || []).push(q.ticker);
    }
  }
  const otherCount = Object.values(cross.other).reduce((a, b) => a + b.length, 0);
  cross.counts = {
    persistent: cross.persistent.length, newEntrants: cross.newEntrants.length, midTerm: cross.midTerm.length,
    fading: cross.fading.length, other: otherCount, total: qualified.length,
  };
  cross.labels = { persistent: '지속 주도 (1M·3M·6M 모두 상위 2%)', newEntrants: '신규 진입 (1M 만)', midTerm: '중기 (3M 기준, 1M 은 아님)', fading: '퇴조 (6M 만)' };
  return { byPeriod, cross };
}

module.exports = { selectBreakoutCandidates, detectThemes, detectThemesByPeriod, clusterOf, aboveMa150, aboveMa50, pickRow, DEFAULTS, PERIODS };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchRsData } = require('../fetch-rs-data');
  fetchRsData().then(({ rows, meta }) => {
    const { qualified, stats } = selectBreakoutCandidates(rows);
    const themes = detectThemes(qualified);

    console.log('\n════════ 2팀 스크리닝 퍼널 ════════');
    console.log(`유니버스           ${stats.universe}`);
    console.log(`기간별 상위 2%     1mo ${stats.byPeriod.m1} · 3mo ${stats.byPeriod.m3} · 6mo ${stats.byPeriod.m6}`);
    console.log(`  → 합집합         ${stats.unionTop}`);
    console.log(`  → ETF·ETN 제외   ${stats.afterEtf}   (제외 ${stats.dropped.etf}${stats.etfExcluded.length ? ': ' + stats.etfExcluded.join(', ') : ''})`);
    console.log(`  → ADR ≥ 4        ${stats.afterAdr}   (탈락 ${stats.dropped.adr})`);
    console.log(`  → 150일선 위     ${stats.afterMa150}   (탈락 ${stats.dropped.ma150}, 판정불가 ${stats.ma150Unknown})`);
    console.log(`\n시장국면(사이트)   ${meta.market_condition}`);

    console.log('\n════════ 테마 ════════');
    console.log(themes.headline);
    console.log('\n섹터 분포:');
    for (const s of themes.bySector.slice(0, 6)) console.log(`  ${String(s.name).padEnd(24)} ${String(s.count).padStart(3)}종목 (${s.sharePct}%)`);
    console.log('\n업종 분포 (상위 8):');
    for (const s of themes.byIndustry.slice(0, 8)) console.log(`  ${String(s.name).padEnd(38)} ${String(s.count).padStart(3)}종목 (${s.sharePct}%)`);

    const P = detectThemesByPeriod(qualified);
    console.log('\n════════ 기간별 상위 2% ════════');
    for (const [k, label] of [['m1', '1M'], ['m3', '3M'], ['m6', '6M']]) {
      const b = P.byPeriod[k];
      console.log(`${label}  ${b.count}종목 — ${b.headline}`);
      console.log(`     섹터 ${b.topSectors.map((s) => `${s.name} ${s.count}(${s.sharePct}%)`).join(' · ') || '—'}`);
      console.log(`     업종 ${b.topIndustries.map((s) => `${s.name} ${s.count}(${s.sharePct}%)`).join(' · ') || '—'}`);
    }
    const C = P.cross;
    console.log(`교차  지속 ${C.counts.persistent}: ${C.persistent.join(',') || '—'}`);
    console.log(`      신규(1M만) ${C.counts.newEntrants}: ${C.newEntrants.join(',') || '—'}`);
    console.log(`      중기(3M) ${C.counts.midTerm}: ${C.midTerm.join(',') || '—'}`);
    console.log(`      퇴조(6M만) ${C.counts.fading}: ${C.fading.join(',') || '—'}`);

    console.log('\n════════ 선정 종목 (상위 15) ════════');
    console.log('티커      best   1mo   3mo   6mo  ADR  52주  VOL_X 주간  200DIV 통과기간');
    for (const c of qualified.slice(0, 15)) {
      const f = (x) => (x === null || x === undefined ? '  — ' : String(x.toFixed(1)).padStart(5));
      console.log(
        `${String(c.ticker).padEnd(8)}${f(c.bestPct)}${f(c.rs.m1.pct)}${f(c.rs.m3.pct)}${f(c.rs.m6.pct)}` +
        `${f(c.adr)}${f(c.high52)}${f(c.volx)}${f(c.volSurgeWk)}${f(c.div200)}  ${c.qualifiedBy.join(',')}`
      );
    }
    console.log(`\n총 ${qualified.length}종목`);
  }).catch((e) => { console.error(e); process.exit(1); });
}
