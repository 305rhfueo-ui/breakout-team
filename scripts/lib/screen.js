'use strict';
// 2팀 스크리닝 — RS 3기간 중 하나라도 상위 2% + ADR≥4 + 150일선 위.
// 그리고 테마 클러스터링(섹터/업종 쏠림).

const { num, yes, round, say } = require('./util');
const { rankPercentiles, bestPct } = require('./percentile');

const DEFAULTS = {
  topPct: 2,        // 상위 2%  → 백분위 98 이상
  adrMin: 4,        // ADR_20D ≥ 4%
  requireMa150: true,
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
    afterAdr: 0,
    afterMa150: 0,
    ma150Unknown: 0,
    dropped: { adr: 0, ma150: 0 },
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

function detectThemes(qualified, { minCount = 2 } = {}) {
  const bySector = group(qualified, 'sector');
  const byIndustry = group(qualified, 'industry');

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
  if (qualified.length === 0) {
    headline = '자격 종목 없음';
  } else if (meaningful.length === 0) {
    headline = `공통 테마 없음 — ${qualified.length}종목이 ${bySector.length}개 섹터에 분산 (최대 쏠림 ${bySector[0] ? bySector[0].name + ' ' + bySector[0].count + '종목' : '—'})`;
  } else {
    const top = meaningful.slice(0, 3).map((c) => `${c.name} ${c.count}종목(${c.sharePct}%)`).join(' · ');
    headline = `${top}`;
  }

  return { bySector, byIndustry, clusters, headline, minCount, total: qualified.length };
}

module.exports = { selectBreakoutCandidates, detectThemes, aboveMa150, aboveMa50, pickRow, DEFAULTS };

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
    console.log(`  → ADR ≥ 4        ${stats.afterAdr}   (탈락 ${stats.dropped.adr})`);
    console.log(`  → 150일선 위     ${stats.afterMa150}   (탈락 ${stats.dropped.ma150}, 판정불가 ${stats.ma150Unknown})`);
    console.log(`\n시장국면(사이트)   ${meta.market_condition}`);

    console.log('\n════════ 테마 ════════');
    console.log(themes.headline);
    console.log('\n섹터 분포:');
    for (const s of themes.bySector.slice(0, 6)) console.log(`  ${String(s.name).padEnd(24)} ${String(s.count).padStart(3)}종목 (${s.sharePct}%)`);
    console.log('\n업종 분포 (상위 8):');
    for (const s of themes.byIndustry.slice(0, 8)) console.log(`  ${String(s.name).padEnd(38)} ${String(s.count).padStart(3)}종목 (${s.sharePct}%)`);

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
