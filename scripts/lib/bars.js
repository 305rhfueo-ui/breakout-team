'use strict';
// 야후 봉 수집 오케스트레이션 — 동시성 풀 · 재시도 · 일별 캐시 · 장중 미완성봉 제거.
//
// 설계 원칙:
//  1. 절대 throw 하지 않는다. 실패는 { ok:false, error } 로 돌려주고 상위가 '판정불가'로 표기한다.
//  2. 일별 캐시로 2·3·4팀이 같은 티커를 요청해도 네트워크 호출은 1회.
//  3. 캐시는 OneDrive 밖(CACHE_DIR)에 둔다 — repo 안에 두면 매일 대용량 동기화가 일어난다.
//  4. 전체 예산(budgetMs)을 넘기면 남은 티커는 { ok:false, error:'budget' } 로 표시하고
//     partial:true 를 반환한다. 조용히 누락시키지 않는다.

const fs = require('fs');
const path = require('path');
const { paths, ensureDir, readJson, writeJson, say } = require('./util');
const { fetchBars, yahooSymbol } = require('./ta');

// ── 뉴욕 현재 시각 (의존성 없이 Intl 로) ──
function nowET() {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false,
  });
  const p = {};
  for (const part of fmt.formatToParts(new Date())) p[part.type] = part.value;
  const hour = p.hour === '24' ? 0 : Number(p.hour);
  return { date: `${p.year}-${p.month}-${p.day}`, hour, minute: Number(p.minute) };
}

function barDateET(ms) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
  });
  const p = {};
  for (const part of fmt.formatToParts(new Date(ms))) p[part.type] = part.value;
  return `${p.year}-${p.month}-${p.day}`;
}

// 장중이면 마지막 봉이 미완성이다. 돌파·거래량 판정이 장중 노이즈로 오작동하는 걸 막는다.
function trimPartialBar(bars) {
  if (!bars || !bars.length) return { bars: bars || [], trimmed: false };
  const et = nowET();
  const last = bars[bars.length - 1];
  const lastDate = barDateET(last.t);
  // 마지막 봉이 뉴욕 기준 오늘이고 아직 16:00 ET 전이면 미완성 → 제거
  if (lastDate === et.date && et.hour < 16) {
    return { bars: bars.slice(0, -1), trimmed: true, trimmedDate: lastDate };
  }
  return { bars, trimmed: false };
}

// ── 일별 캐시 ──
function cachePath(sym, range, interval, dateStr) {
  return path.join(paths.barsCache, dateStr, `${sym}_${range}_${interval}.json`);
}

function readCache(file, maxAgeMs = 24 * 3600 * 1000) {
  try {
    const st = fs.statSync(file);
    if (Date.now() - st.mtimeMs > maxAgeMs) return null;
    return readJson(file, null);
  } catch (e) {
    return null;
  }
}

async function fetchBarsCached(ticker, opts = {}) {
  const range = opts.range || '1y';
  const interval = opts.interval || '1d';
  const dateStr = opts.date || require('./util').today();
  const sym = yahooSymbol(ticker);
  const file = cachePath(sym, range, interval, dateStr);

  if (!opts.noCache) {
    const hit = readCache(file);
    if (hit && Array.isArray(hit.bars)) {
      return { ticker, sym, bars: hit.bars, meta: hit.meta || null, ok: hit.bars.length > 0, error: null, cached: true };
    }
  }

  let res = await fetchBars(sym, { range, interval, timeoutMs: opts.timeoutMs || 12000 });
  // 닷 티커 변환이 실패하면 원본으로 1회 재시도 (BRK.A → BRK-A 가 정답이지만 방어적으로)
  if (!res.ok && sym !== String(ticker).toUpperCase()) {
    res = await fetchBars(String(ticker).toUpperCase(), { range, interval, timeoutMs: opts.timeoutMs || 12000 });
  }
  if (!res.ok) return { ticker, sym, bars: [], meta: null, ok: false, error: res.error, cached: false };

  const t = trimPartialBar(res.bars);
  const out = { ticker, sym, bars: t.bars, meta: res.meta, ok: t.bars.length > 0, error: null, cached: false, trimmed: t.trimmed };
  try {
    ensureDir(path.dirname(file));
    writeJson(file, { bars: t.bars, meta: res.meta, fetched_at: new Date().toISOString() });
  } catch (e) { /* 캐시 실패는 무시 — 실행을 막지 않는다 */ }
  return out;
}

// ── 동시성 풀 ──
async function fetchMany(tickers, opts = {}) {
  const {
    range = '1y', interval = '1d', concurrency = 5, retries = 2,
    budgetMs = 180000, date, onProgress, label = '봉수집',
  } = opts;

  const uniq = [...new Set(tickers.map((t) => String(t).trim().toUpperCase()).filter(Boolean))];
  const results = new Map();
  const started = Date.now();
  let idx = 0, done = 0, netHits = 0, cacheHits = 0, failed = 0, budgetSkipped = 0;

  async function worker() {
    while (idx < uniq.length) {
      const i = idx++;
      const t = uniq[i];
      if (Date.now() - started > budgetMs) {
        results.set(t, { ticker: t, bars: [], ok: false, error: 'budget' });
        budgetSkipped++; done++;
        continue;
      }
      let r = null;
      for (let attempt = 0; attempt <= retries; attempt++) {
        r = await fetchBarsCached(t, { range, interval, date });
        if (r.ok) break;
        if (attempt < retries) await sleep(800 * Math.pow(3, attempt)); // 800ms → 2400ms
      }
      if (r.ok) { if (r.cached) cacheHits++; else netHits++; } else { failed++; }
      results.set(t, r);
      done++;
      if (onProgress && done % 20 === 0) onProgress(done, uniq.length);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, uniq.length) }, () => worker());
  await Promise.all(workers);

  const stats = {
    requested: tickers.length, unique: uniq.length,
    netHits, cacheHits, failed, budgetSkipped,
    elapsedMs: Date.now() - started,
    partial: budgetSkipped > 0,
  };
  say('SYSTEM', `${label}: ${uniq.length}종목 · 네트워크 ${netHits} · 캐시 ${cacheHits} · 실패 ${failed}${budgetSkipped ? ` · 예산초과 스킵 ${budgetSkipped}` : ''} · ${(stats.elapsedMs / 1000).toFixed(1)}s`);
  return { results, stats };
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

module.exports = { fetchBarsCached, fetchMany, trimPartialBar, nowET, barDateET, cachePath };

if (require.main === module) {
  require('./util').loadEnv();
  const tks = process.argv.slice(2).length ? process.argv.slice(2) : ['NVDA', 'AAPL', 'BRK.A', 'MU', 'ZBRA', 'AEHR'];
  const et = nowET();
  console.log(`뉴욕 현재: ${et.date} ${String(et.hour).padStart(2, '0')}:${String(et.minute).padStart(2, '0')} (장중 미완성봉 ${et.hour < 16 ? '제거함' : '없음'})`);
  fetchMany(tks, { range: '1y' }).then(({ results, stats }) => {
    for (const [t, r] of results) {
      console.log(`  ${t.padEnd(7)} ${r.ok ? `${String(r.bars.length).padStart(3)}봉  마지막 ${barDateET(r.bars[r.bars.length - 1].t)}${r.cached ? '  (캐시)' : ''}${r.trimmed ? '  [미완성봉 제거]' : ''}` : 'FAIL ' + r.error}`);
    }
    console.log('\n2회차 실행 시 전부 캐시 히트여야 합니다:', JSON.stringify(stats));
  });
}
