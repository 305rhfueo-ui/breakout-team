'use strict';
// "이 종목이 언제 상위 2% 에 들어왔나" — 기간별 진입일 · 연속 포함일수.
//
// 슬림 스냅샷(%LOCALAPPDATA%\breakout-team\rs-snapshots, 평일만)의 r1/r3/r6 를 날짜별로 다시 백분위
// 매겨 "그날 상위 2% 집합" 을 만들고 state/history/top2-daily.json 에 누적한다(증분: 없는 날짜만).
// ⚠️ 사이트가 빠뜨린 평일(6/02·6/15 등)이 있어 "연속 N일" 은 **캐시에 존재하는 평일 기준**이고
//    빠진 날 수를 gaps 로 같이 돌려준다. 과거 스냅샷 유니버스는 라이브와 조금 달라
//    경계(98 백분위)가 소폭 움직일 수 있다 — "그날 유니버스 기준" 이다.

const fs = require('fs');
const path = require('path');
const { readJson, writeJson, ensureDir, say } = require('./util');
const { rankPercentiles } = require('./percentile');
const cal = require('./market-calendar');

const CACHE_FILE = path.join(__dirname, '..', '..', 'state', 'history', 'top2-daily.json');
const KEYS = { m1: 'RS_1mo', m3: 'RS_3mo', m6: 'RS_6mo' };
const CACHE_VERSION = 1;

function emptyCache() { return { v: CACHE_VERSION, threshold: 98, days: {} }; }
function loadCache(file = CACHE_FILE) {
  const c = readJson(file, null);
  return c && c.v === CACHE_VERSION && c.days ? c : emptyCache();
}
function saveCache(c, file = CACHE_FILE) { ensureDir(path.dirname(file)); writeJson(file, c); return c; }

// 슬림 스냅샷 {data:[{T,r1,r3,r6}]} → {m1:[tickers], m3, m6}
function computeTop2Sets(slim, threshold = 98) {
  const rows = ((slim && slim.data) || []).filter((d) => d && d.T)
    .map((d) => ({ Ticker: d.T, RS_1mo: d.r1, RS_3mo: d.r3, RS_6mo: d.r6 }));
  return computeTop2SetsFromRows(rows, threshold);
}

// 라이브 rows (run-breakout 이 이미 rankPercentiles 를 돌렸으면 __p 재사용)
function computeTop2SetsFromRows(rows, threshold = 98) {
  if (!rows.length) return { m1: [], m3: [], m6: [] };
  if (!rows[0].__p) rankPercentiles(rows);
  const out = { m1: [], m3: [], m6: [] };
  for (const r of rows) {
    const p = r.__p || {};
    for (const [k, col] of Object.entries(KEYS)) {
      if (p[col] != null && p[col] >= threshold) out[k].push(r.Ticker || r.ticker);
    }
  }
  for (const k of Object.keys(out)) out[k].sort();
  return out;
}

// 캐시 갱신 — 최근 lookback 평일 중 없는 날짜만 스냅샷을 받아 계산한다.
async function updateCache({ lookback = 60, offline = false, liveRows = null, liveDate = null, cache = null } = {}) {
  const H = require('./history-series');
  const c = cache || loadCache();
  let fetched = 0, computed = 0, failed = 0;
  if (!offline) {
    let dates = [];
    try { dates = H.weekdaysOnly((await H.fetchIndex()).dates).slice(-lookback); }
    catch (e) { say('WARN', `상위2% 이력: history_index 수신 실패 — 캐시만 사용 (${e.message})`); }
    for (const d of dates) {
      if (c.days[d]) continue;
      try {
        const r = await H.ensureSnapshot(d);
        if (!r.cached) fetched++;
        const slim = H.loadSnapshot(d);
        if (!slim) { failed++; continue; }
        c.days[d] = computeTop2Sets(slim, c.threshold);
        computed++;
      } catch (e) { failed++; }
    }
  }
  if (liveRows && liveDate) { c.days[liveDate] = computeTop2SetsFromRows(liveRows, c.threshold); computed++; }
  // 오래된 날짜 정리 (lookback 의 2배)
  const keep = Object.keys(c.days).sort().slice(-lookback * 2);
  const pruned = {};
  for (const d of keep) pruned[d] = c.days[d];
  c.days = pruned;
  saveCache(c);
  return { cache: c, fetched, computed, failed, days: keep.length };
}

// 티커별 진입일·연속일. asOf 이하 날짜만 본다.
function entryStats(cache, tickers, asOf) {
  const dates = Object.keys(cache.days).filter((d) => !asOf || d <= asOf).sort();
  const out = {};
  if (!dates.length) { for (const t of tickers) out[t] = null; return out; }
  const sets = {};
  for (const d of dates) sets[d] = { m1: new Set(cache.days[d].m1), m3: new Set(cache.days[d].m3), m6: new Set(cache.days[d].m6) };
  const earliest = dates[0];
  for (const t of tickers) {
    const since = {}, streak = {}, capped = {}, gaps = {};
    for (const k of ['m1', 'm3', 'm6']) {
      let n = 0, s = null, g = 0, i = dates.length - 1;
      for (; i >= 0; i--) {
        const d = dates[i];
        if (!sets[d][k].has(t)) break;
        n++; s = d;
        if (i > 0) g += Math.max(0, cal.tradingDaysBetween(dates[i - 1], d).length - 2);   // 두 캐시 날짜 사이 빠진 거래일
      }
      capped[k] = n > 0 && i < 0;            // 캐시 첫날까지 전부 포함 → 진짜 진입일은 더 이전
      since[k] = n ? (capped[k] ? `≤${earliest}` : s) : null;
      streak[k] = n;
      gaps[k] = n ? g : 0;
    }
    out[t] = { top2Since: since, top2Streak: streak, streakCapped: capped, gaps, asOf: dates[dates.length - 1] };
  }
  return out;
}

module.exports = { computeTop2Sets, computeTop2SetsFromRows, updateCache, entryStats, loadCache, saveCache, CACHE_FILE, KEYS };
