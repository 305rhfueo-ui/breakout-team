'use strict';
// 도윤(2팀) 5개 목록 — RS 사이트와 같은 기준으로 나눠 본다. (2026-10-06 사용자 요청)
//
//   dollar  거래대금 상위   전영업일 대비 +5% 이상 오른 종목 중 거래대금($M) 큰 순 20개 (사이트 "거래대금 상승" 버튼과 같음)
//   m1      RS(1MO)         1개월 상대강도 상위 2%
//   m3      RS(3MO)         3개월 상위 2%
//   m6      RS(6MO)         6개월 상위 2%
//   all     RS(1~6MO)       세 기간 모두 상위 2%
//
// ⚠️ ADR·150일선 필터는 걸지 않는다 — "사이트 2% 그대로"(사용자 결정). ETF·ETN 만 뺀다.
// ⚠️ 상위 2% 는 rankPercentiles 가 붙인 자체 백분위(row.__p, 높을수록 강함, 98 이상)로 판정한다.
//    사이트 RS_*_Rank_Pct 열은 NaN 정렬 버그로 못 믿는다(run-breakout 3) 대조 로그 참조) — 그래서 개수가 사이트와 1~2개 다를 수 있다.
//
//   buildLists(rows)              → { dollar, m1, m3, m6, all }  각 { key, label, criteria, count, note, items[], industries, lone[] }
//   listRankOf(lists)             → Map<ticker, 0|1|2>  상세·리서치 순환 우선순위 (낮을수록 먼저)
//   unionTickers(lists)           → string[]
//   writeOhlcFiles(tickers, barsOf, dir) → { written, pruned }   팝업 캔들차트용 봉 (브라우저가 그린다)

const fs = require('fs');
const path = require('path');
const { isEtf, num, round } = require('./util');
const { clusterOf, pickRow } = require('./screen');

const TOP = 98;
const DOLLAR_MIN_RET = 5;
const DOLLAR_N = 20;

const DEFS = [
  { key: 'dollar', label: '거래대금 상위', criteria: `전영업일 대비 +${DOLLAR_MIN_RET}% 이상 · 거래대금 큰 순 ${DOLLAR_N}개` },
  { key: 'm1', label: 'RS(1MO)', criteria: '1개월 상대강도 상위 2% (자체 계산)' },
  { key: 'm3', label: 'RS(3MO)', criteria: '3개월 상대강도 상위 2% (자체 계산)' },
  { key: 'm6', label: 'RS(6MO)', criteria: '6개월 상대강도 상위 2% (자체 계산)' },
  { key: 'all', label: 'RS(1~6MO)', criteria: '1·3·6개월 모두 상위 2% (자체 계산)' },
];

const pctOf = (row, k) => (row.__p && Number.isFinite(row.__p[k]) ? row.__p[k] : null);
const top = (row, k) => { const p = pctOf(row, k); return p != null && p >= TOP; };
const rnk = (p) => (p == null ? null : round(100 - p, 2));   // 상위 몇 % (작을수록 강함)

// 표 한 줄 — pickRow 결과에서 쿨라매기 판단용 값을 파생한다 (사이트 열을 다시 읽지 않는다)
function itemOf(row) {
  const p = pickRow(row);
  return {
    ticker: p.ticker, sector: p.sector, industry: p.industry,
    ret1d: p.ret1d, ret5d: p.ret5d, dollarVolM: p.dollarVolM,
    rs1: p.rs.m1.v, rnk1: rnk(p.rs.m1.pct), rs3: p.rs.m3.v, rnk3: rnk(p.rs.m3.pct), rs6: p.rs.m6.v, rnk6: rnk(p.rs.m6.pct),
    adr: p.adr, high52: p.high52,
    maxRise3m: p.maxRise3m,                                                         // 선행 상승 (쿨라매기: 1~3개월 30~100%+)
    ext10Adr: p.div10 != null && p.adr ? round(p.div10 / p.adr, 1) : null,          // 10일선 이격 ÷ ADR (3배↑ 과열)
    above50: p.aboveMa50 == null ? null : (p.aboveMa50 ? 'O' : 'X'),                // 50일선 위 (아래면 쿨라매기 원문상 매수 안 함)
    squeeze: p.bbwthd != null && p.bbwthdLow ? round(p.bbwthd / p.bbwthdLow, 2) : null,  // 볼밴 폭 ÷ 60일 최저 (1.3↓ 수축)
    volx: p.volx,
    fs: null, streak: null,                                                         // run-breakout 이 채운다
  };
}

function finish(def, rowsIn, note) {
  const items = rowsIn.map(itemOf);
  const ind = clusterOf(items);
  const inCluster = new Set(ind.clusters.flatMap((c) => c.tickers));
  return {
    ...def, count: items.length, note: note || null, items,
    industries: { clusters: ind.clusters, headline: ind.headline },
    lone: items.filter((i) => !inCluster.has(i.ticker)).map((i) => i.ticker),
  };
}

function buildLists(rows) {
  const stocks = (rows || []).filter((r) => r && (r.Ticker || r.ticker) && !isEtf(r));
  const byPct = (k) => (a, b) => (pctOf(b, k) ?? -1) - (pctOf(a, k) ?? -1);
  const out = {};
  // 거래대금 상위 — 사이트 열이 없는 날(과거 스냅샷·수집 실패)은 빈 목록 + 사유
  const hasDollar = stocks.some((r) => num(r.Dollar_Vol_M) != null && num(r.Ret_1D_Pct) != null);
  const dollarRows = hasDollar
    ? stocks.filter((r) => (num(r.Ret_1D_Pct) ?? -Infinity) >= DOLLAR_MIN_RET && num(r.Dollar_Vol_M) != null)
      .sort((a, b) => num(b.Dollar_Vol_M) - num(a.Dollar_Vol_M)).slice(0, DOLLAR_N)
    : [];
  out.dollar = finish(DEFS[0], dollarRows, hasDollar ? null : '사이트에 전일比·거래대금 자료가 없습니다');
  out.m1 = finish(DEFS[1], stocks.filter((r) => top(r, 'RS_1mo')).sort(byPct('RS_1mo')));
  out.m3 = finish(DEFS[2], stocks.filter((r) => top(r, 'RS_3mo')).sort(byPct('RS_3mo')));
  out.m6 = finish(DEFS[3], stocks.filter((r) => top(r, 'RS_6mo')).sort(byPct('RS_6mo')));
  out.all = finish(DEFS[4], stocks.filter((r) => top(r, 'RS_1mo') && top(r, 'RS_3mo') && top(r, 'RS_6mo')).sort(byPct('RS_6mo')));
  return out;
}

const KEYS = DEFS.map((d) => d.key);
const RANK = { dollar: 0, all: 0, m1: 1, m3: 2, m6: 2 };

function listRankOf(lists) {
  const m = new Map();
  for (const k of KEYS) for (const it of ((lists && lists[k] && lists[k].items) || [])) {
    if (!m.has(it.ticker) || RANK[k] < m.get(it.ticker)) m.set(it.ticker, RANK[k]);
  }
  return m;
}

function unionTickers(lists) {
  return [...new Set(KEYS.flatMap((k) => ((lists && lists[k] && lists[k].items) || []).map((i) => i.ticker)))];
}

// 팝업 캔들차트용 봉 — window.OHLC[T] = [[날짜,시,고,저,종,거래량], …] 최근 126봉(6개월).
// PNG 를 매일 커밋하면 공개 저장소가 연 300MB+ 자란다. 봉 숫자는 하루 한 줄만 바뀌어 git 이 거의 안 자란다.
// 오늘 목록에 없는 종목 파일은 지운다(쌓이지 않게).
function writeOhlcFiles(tickers, barsOf, dir, { bars = 126, dateOf } = {}) {
  fs.mkdirSync(dir, { recursive: true });
  const keep = new Set();
  let written = 0;
  for (const t of [...new Set(tickers)]) {
    const b = barsOf(t);
    if (!b || !b.length) continue;
    const safe = String(t).replace(/[^A-Za-z0-9.\-]/g, '_');
    const rowsOut = b.slice(-bars).map((k) => [dateOf ? dateOf(k.t) : new Date(k.t).toISOString().slice(0, 10),
      round(k.o, 2), round(k.h, 2), round(k.l, 2), round(k.c, 2), Math.round(k.v || 0)]);
    fs.writeFileSync(path.join(dir, `${safe}.js`),
      `window.OHLC=window.OHLC||{};window.OHLC[${JSON.stringify(t)}]=${JSON.stringify(rowsOut)};\n`, 'utf8');
    keep.add(`${safe}.js`);
    written++;
  }
  let pruned = 0;
  for (const f of fs.readdirSync(dir)) if (f.endsWith('.js') && !keep.has(f)) { fs.unlinkSync(path.join(dir, f)); pruned++; }
  return { written, pruned };
}

module.exports = { buildLists, listRankOf, unionTickers, writeOhlcFiles, KEYS, DEFS };
