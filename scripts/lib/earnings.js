'use strict';
// 실적 발표 예정일 — 나스닥 실적 캘린더(날짜별). 6팀은 실적 직전 종목을 새로 사지 않는다(갭 리스크).
//
// ⚠️ 야후 quoteSummary 는 crumb 인증이 걸려 401 이다 (2026-09-28 실측) → 나스닥을 쓴다.
// ⚠️ 조회가 실패하면 막지 않는다. '모름'으로 표기하고 넘어간다 — 달력 하나 때문에 매수 계획 전체가 비면 안 된다.

const path = require('path');
const { paths, readJson, writeJson, ensureDir } = require('./util');
const cal = require('./market-calendar');

const UA = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36', accept: 'application/json' };
const norm = (t) => String(t).trim().toUpperCase().replace(/[.\-\/]/g, '');

async function fetchDay(iso, timeoutMs = 10000) {
  const c = new AbortController();
  const timer = setTimeout(() => c.abort(), timeoutMs);
  try {
    const res = await fetch(`https://api.nasdaq.com/api/calendar/earnings?date=${iso}`, { headers: UA, signal: c.signal });
    if (!res.ok) return { ok: false, error: 'HTTP ' + res.status };
    const j = await res.json();
    const rows = (j && j.data && j.data.rows) || [];
    return { ok: true, tickers: rows.map((r) => norm(r.symbol)).filter(Boolean) };
  } catch (e) {
    return { ok: false, error: e.name === 'AbortError' ? 'timeout' : e.message };
  } finally { clearTimeout(timer); }
}

// fromIso 다음 거래일부터 days 거래일 동안 실적을 내는 종목 → Map(티커 → 발표일).
// 하루 1회만 받는다 (캐시 키 = fromIso).
async function upcomingEarnings(fromIso, days = 5) {
  const file = path.join(paths.cacheDir, 'earnings', `${fromIso}_${days}.json`);
  const hit = readJson(file, null);
  if (hit && hit.ok) return { ok: true, map: new Map(Object.entries(hit.map)), dates: hit.dates, cached: true };

  const dates = [];
  let cur = fromIso;
  for (let i = 0; i < 30 && dates.length < days; i++) { cur = cal.addDays(cur, 1); if (cal.isTradingDay(cur)) dates.push(cur); }
  const map = new Map();
  let failed = 0;
  for (const d of dates) {
    const r = await fetchDay(d);
    if (!r.ok) { failed++; continue; }
    for (const t of r.tickers) if (!map.has(t)) map.set(t, d);
  }
  const ok = failed === 0;
  if (ok) { try { ensureDir(path.dirname(file)); writeJson(file, { ok, dates, map: Object.fromEntries(map) }); } catch (e) { /* 캐시 실패는 무시 */ } }
  return { ok, map, dates, failed, cached: false };
}

// → 발표일(YYYY-MM-DD) | null(기간 안에 없음) | 'unknown'(달력을 못 받음)
function earningsOf(res, ticker) {
  if (!res || !res.map) return 'unknown';
  const d = res.map.get(norm(ticker));
  if (d) return d;
  return res.ok ? null : 'unknown';
}

module.exports = { upcomingEarnings, earningsOf };

if (require.main === module) {
  const from = process.argv[2] || require('./util').today();
  upcomingEarnings(from, 5).then((r) => {
    console.log(`${from} 이후 5거래일 (${r.dates.join(', ')}) · ${r.map.size}종목${r.ok ? '' : ` · ⚠️ ${r.failed}일 조회 실패`}${r.cached ? ' (캐시)' : ''}`);
    for (const t of process.argv.slice(3)) console.log(`  ${t}: ${earningsOf(r, t) || '기간 안에 없음'}`);
  });
}
