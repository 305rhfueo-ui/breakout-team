'use strict';
// RS 히스토리 스냅샷 → 종목별 RS 시계열 / 업종별 WRS 시계열.
//
// ⚠️ 주말 스냅샷은 금요일 값을 그대로 복제한다(실측 확인). 반드시 걸러야 한다.
//    미적용 시 RS 그래프가 계단형으로 왜곡된다.
// ⚠️ 과거 스냅샷은 스키마가 진화했다. 200DIV/ADR/VOL_X 등은 2026-06~07 이후에만 존재한다.
//    그러나 Ticker/Price/RS_1mo/RS_3mo/RS_6mo/Market Cap/Sector/Industry 는 전 구간에 존재하므로
//    RS·WRS 시계열은 안전하다.
// ⚠️ 과거 wrs_data 는 불완전하므로 쓰지 않고 매 스냅샷의 data[] 에서 WRS 를 재계산한다.

const fs = require('fs');
const path = require('path');
const { paths, ensureDir, readJson, writeJson, isWeekday, num, round, say } = require('./util');
const { parseLooseJson, fetchText } = require('../fetch-rs-data');
const { computeWrsFor } = require('./wrs');

const BASE = 'https://305rhfueo-ui.github.io/RS_Investment/static';
const INDEX_URL = `${BASE}/history_index.json`;

function snapPath(date) { return path.join(paths.snapshotCache, `result_${date}.json`); }

async function fetchIndex() {
  const txt = await fetchText(INDEX_URL, 20000);
  const j = parseLooseJson(txt);
  const dates = (j.dates || []).map((d) => d.date).filter(Boolean).sort();
  return { dates, total: j.total_history || dates.length, last_updated: j.last_updated };
}

// 평일만 남긴다 (주말 스냅샷은 금요일 복제)
function weekdaysOnly(dates) { return dates.filter(isWeekday); }

// 슬림 스냅샷 스키마 버전. 필드를 늘리면 올려야 한다 —
// 올리지 않으면 예전에 캐시된 파일이 새 필드 없이 그대로 쓰여 조용히 null 이 된다.
//   v2: d50/d200 추가 (5팀 업종 국면 판정에 필요)
const SLIM_VERSION = 2;

async function ensureSnapshot(date, { force = false } = {}) {
  const file = snapPath(date);
  if (!force && fs.existsSync(file)) {
    const old = readJson(file, null);
    if (old && (old.v || 1) >= SLIM_VERSION) return { date, file, cached: true };
    // 구버전 캐시 → 다시 받아 새 필드를 채운다
  }
  const txt = await fetchText(`${BASE}/history/result_${date}.json`, 30000);
  const j = parseLooseJson(txt);
  ensureDir(path.dirname(file));
  // 원본 전체를 두면 무겁다 → 시계열에 필요한 필드만 남겨 저장 (약 1.7MB → 약 150KB)
  // ⚠️ 200DIV/50DIV 는 2026-06~07 이후 스냅샷에만 있다. 없으면 null 로 남기고
  //    쓰는 쪽에서 '판정불가'로 처리한다 (0 으로 채우면 안 된다).
  const slim = {
    date,
    v: SLIM_VERSION,
    last_updated: j.last_updated || null,
    data: (j.data || []).filter((r) => r && r.Ticker).map((r) => ({
      T: r.Ticker, P: num(r.Price), MC: r['Market Cap'],
      S: r.Sector, I: r.Industry,
      r1: num(r.RS_1mo), r3: num(r.RS_3mo), r6: num(r.RS_6mo),
      d50: num(r['50DIV']), d200: num(r['200DIV']),
    })),
  };
  fs.writeFileSync(file, JSON.stringify(slim), 'utf8');
  return { date, file, cached: false, rows: slim.data.length };
}

function loadSnapshot(date) {
  const j = readJson(snapPath(date), null);
  return j && Array.isArray(j.data) ? j : null;
}

// 슬림 스냅샷 → wrs.computeWrsFor 가 기대하는 형태로 변환
function toWrsRows(slim, key) {
  const map = { r1: 'RS_1mo', r3: 'RS_3mo', r6: 'RS_6mo' };
  return slim.data.map((d) => ({
    Ticker: d.T, Sector: d.S, Industry: d.I, 'Market Cap': d.MC,
    [map[key]]: d[key],
  }));
}

// 종목별 + 업종별 시계열을 한 번에 뽑는다.
// (WRS 재계산은 각 스냅샷의 data[] 전체가 필요하므로 나중에 다시 하려면 원본을 또 받아야 한다)
function buildSeries(dates, { tickers = null } = {}) {
  const want = tickers ? new Set(tickers.map((t) => t.toUpperCase())) : null;
  const byTicker = new Map();
  const byIndustry = new Map();
  const used = [];

  for (const date of dates) {
    const slim = loadSnapshot(date);
    if (!slim) continue;
    used.push(date);

    for (const d of slim.data) {
      if (want && !want.has(d.T)) continue;
      if (!byTicker.has(d.T)) byTicker.set(d.T, { ticker: d.T, sector: d.S, industry: d.I, d: [], p: [], r1: [], r3: [], r6: [] });
      const s = byTicker.get(d.T);
      s.d.push(date); s.p.push(d.P); s.r1.push(d.r1); s.r3.push(d.r3); s.r6.push(d.r6);
    }

    // 업종별 WRS 3기간 재계산
    for (const [key, tag] of [['r1', 'm1'], ['r3', 'm3'], ['r6', 'm6']]) {
      const groups = computeWrsFor(toWrsRows(slim, key), { r1: 'RS_1mo', r3: 'RS_3mo', r6: 'RS_6mo' }[key]);
      for (const g of groups) {
        if (!byIndustry.has(g.key)) byIndustry.set(g.key, { key: g.key, sector: g.Sector, industry: g.Industry, d: [], m1: [], m3: [], m6: [] });
        const s = byIndustry.get(g.key);
        if (tag === 'm1') s.d.push(date);   // 날짜는 한 번만
        s[tag].push(g.WRS);
      }
    }
  }
  return { byTicker, byIndustry, dates: used };
}

// 대시보드용 .js 내보내기 (file:// 에서 fetch 가 막히므로 JSON 이 아니라 window 전역)
function writeSeriesFiles(byTicker, byIndustry, { tickers = null } = {}) {
  const dir = path.join(paths.dashboardSeries);
  const indDir = path.join(dir, 'industry');
  ensureDir(dir); ensureDir(indDir);
  let nT = 0, nI = 0;

  for (const [t, s] of byTicker) {
    if (tickers && !tickers.includes(t)) continue;
    const safe = t.replace(/[^A-Za-z0-9._-]/g, '_');
    fs.writeFileSync(path.join(dir, `${safe}.js`),
      `window.SERIES=window.SERIES||{};window.SERIES[${JSON.stringify(t)}]=${JSON.stringify(s)};\n`, 'utf8');
    nT++;
  }
  for (const [k, s] of byIndustry) {
    const slug = k.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
    fs.writeFileSync(path.join(indDir, `${slug}.js`),
      `window.ISERIES=window.ISERIES||{};window.ISERIES[${JSON.stringify(k)}]=${JSON.stringify({ ...s, slug })};\n`, 'utf8');
    nI++;
  }
  // 슬러그 색인 (팝업이 업종명 → 파일명을 찾을 때 사용)
  const index = {};
  for (const [k] of byIndustry) index[k] = k.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
  fs.writeFileSync(path.join(dir, '_index.js'),
    `window.SERIES_INDEX=${JSON.stringify({ tickers: [...byTicker.keys()], industries: index })};\n`, 'utf8');
  return { tickers: nT, industries: nI };
}

// ⚠️ 종가는 반드시 야후 봉(분할 조정 완료)으로 덮어쓴다.
//    RS 사이트의 Price 는 원본 종가라 액면분할 시점에 수직 낙하가 생긴다.
//    실측: CRWD 2026-07-02 스냅샷 $772.74 → $193.98 (÷3.98, 4:1 분할).
//         같은 구간 야후는 30% 이상 급변 0건 = 조정 완료.
//    그래프에 그대로 그리면 사용자가 폭락으로 오독한다.
function updatePricesFromBars(tickers, barsOf, { barDateET } = {}) {
  const dir = paths.dashboardSeries;
  const toDate = barDateET || ((ms) => new Date(ms).toISOString().slice(0, 10));
  let updated = 0, splits = 0;
  for (const t of tickers) {
    const safe = String(t).replace(/[^A-Za-z0-9._-]/g, '_');
    const file = path.join(dir, `${safe}.js`);
    if (!fs.existsSync(file)) continue;
    let s;
    try { s = JSON.parse(fs.readFileSync(file, 'utf8').match(/=(\{[\s\S]*\});\s*$/)[1]); } catch (e) { continue; }
    const bars = barsOf(t);
    if (!bars || !bars.length) continue;

    const byDate = new Map();
    for (const b of bars) byDate.set(toDate(b.t), b.c);

    const before = s.p ? s.p.slice() : [];
    s.p = s.d.map((d) => { const v = byDate.get(d); return v == null ? null : Math.round(v * 1e4) / 1e4; });
    s.pSource = 'yahoo-adjusted';

    // 분할 감지 — 스냅샷 원본과 조정가가 크게 어긋나면 기록해 UI 가 밝힐 수 있게 한다
    for (let i = 0; i < s.d.length; i++) {
      const a = before[i], b = s.p[i];
      if (a != null && b != null && a > 0 && Math.abs(b / a - 1) > 0.3) {
        s.splitAdjusted = true;
        s.splitNote = `액면분할 조정됨 (원본 종가 대비 ${s.d[i]} 기준 ${(b / a).toFixed(2)}배)`;
        splits++;
        break;
      }
    }
    fs.writeFileSync(file, `window.SERIES=window.SERIES||{};window.SERIES[${JSON.stringify(s.ticker)}]=${JSON.stringify(s)};\n`, 'utf8');
    updated++;
  }
  return { updated, splits };
}

// ⚠️ 히스토리 스냅샷은 그 시점의 사본이고, 라이브 result.json 은 같은 거래일이라도
//    이후에 다시 렌더링돼 값이 달라질 수 있다 (실측: Semiconductors WRS6M 스냅샷 0.2316 vs 라이브 0.4182).
//    그대로 두면 팝업의 "현황 카드(라이브)"와 "추이 차트(스냅샷)"가 서로 다른 값을 보여 버그처럼 보인다.
//    → 마지막 지점을 라이브 값으로 맞춘다. 같은 날짜면 교체, 더 최신이면 추가.
function syncLastPointFromLive(dateKey, rows, wrsAll, tickers) {
  const dir = paths.dashboardSeries;
  if (!fs.existsSync(dir)) return { tickers: 0, industries: 0 };
  let nT = 0, nI = 0;

  const byTicker = new Map(rows.map((r) => [r.Ticker, r]));
  for (const t of (tickers || [])) {
    const file = path.join(dir, `${String(t).replace(/[^A-Za-z0-9._-]/g, '_')}.js`);
    if (!fs.existsSync(file)) continue;
    const row = byTicker.get(t);
    if (!row) continue;
    let s;
    try { s = JSON.parse(fs.readFileSync(file, 'utf8').match(/=(\{[\s\S]*\});\s*$/)[1]); } catch (e) { continue; }
    const vals = { r1: num(row.RS_1mo), r3: num(row.RS_3mo), r6: num(row.RS_6mo) };
    const last = s.d[s.d.length - 1];
    if (last === dateKey) {
      const i = s.d.length - 1;
      s.r1[i] = vals.r1; s.r3[i] = vals.r3; s.r6[i] = vals.r6;
    } else if (!last || last < dateKey) {
      s.d.push(dateKey); s.p.push(null); s.r1.push(vals.r1); s.r3.push(vals.r3); s.r6.push(vals.r6);
    } else continue;
    s.liveSynced = dateKey;
    fs.writeFileSync(file, `window.SERIES=window.SERIES||{};window.SERIES[${JSON.stringify(s.ticker)}]=${JSON.stringify(s)};\n`, 'utf8');
    nT++;
  }

  const indDir = path.join(dir, 'industry');
  if (wrsAll && fs.existsSync(indDir)) {
    for (const [key, e] of wrsAll.byKey) {
      const slug = key.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
      const file = path.join(indDir, `${slug}.js`);
      if (!fs.existsSync(file)) continue;
      let s;
      try { s = JSON.parse(fs.readFileSync(file, 'utf8').match(/=(\{[\s\S]*\});\s*$/)[1]); } catch (er) { continue; }
      const v = { m1: e.m1 ? e.m1.wrs : null, m3: e.m3 ? e.m3.wrs : null, m6: e.m6 ? e.m6.wrs : null };
      const last = s.d[s.d.length - 1];
      if (last === dateKey) {
        const i = s.d.length - 1;
        s.m1[i] = v.m1; s.m3[i] = v.m3; s.m6[i] = v.m6;
      } else if (!last || last < dateKey) {
        s.d.push(dateKey); s.m1.push(v.m1); s.m3.push(v.m3); s.m6.push(v.m6);
      } else continue;
      s.liveSynced = dateKey;
      fs.writeFileSync(file, `window.ISERIES=window.ISERIES||{};window.ISERIES[${JSON.stringify(key)}]=${JSON.stringify(s)};\n`, 'utf8');
      nI++;
    }
  }
  return { tickers: nT, industries: nI };
}

// 활성/휴면 종목분만 유지하고 나머지는 삭제 (방치하면 매일 150개 파일이 커밋된다)
function pruneSeries(keepTickers) {
  const dir = paths.dashboardSeries;
  if (!fs.existsSync(dir)) return 0;
  const keep = new Set(keepTickers.map((t) => t.replace(/[^A-Za-z0-9._-]/g, '_') + '.js'));
  keep.add('_index.js');
  let removed = 0;
  for (const f of fs.readdirSync(dir)) {
    if (f === 'industry' || keep.has(f)) continue;
    try { fs.unlinkSync(path.join(dir, f)); removed++; } catch (e) { /* noop */ }
  }
  return removed;
}

module.exports = { fetchIndex, weekdaysOnly, ensureSnapshot, loadSnapshot, buildSeries, writeSeriesFiles, updatePricesFromBars, syncLastPointFromLive, pruneSeries, snapPath, BASE };
