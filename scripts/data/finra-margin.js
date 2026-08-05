'use strict';
// FINRA 마진부채 통계 — Debit Balances 전년동기 대비 증가율.
// 출처: https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics
//
// ⚠️ 이 모듈은 절대 예외를 밖으로 던지지 않는다.
//    실패 시 마지막 정상 결과 캐시로 stale:true 를 반환하고, 캐시도 없으면 ok:false.
//    1팀 리포트에 '데이터 없음'으로 표기될 뿐 전체 실행은 계속된다.
//
// 견고성: 열을 문자로 고정하지 않고 헤더 정규식으로 런타임 탐색한다.
//        월 표기 4형태(YYYY-MM / Mon-YYYY / YYYY-MM-DD / Excel serial)를 지원한다.
//        정렬 방향에 무관하다(Map + sort).

const { paths, readJson, writeJson, say, round } = require('../lib/util');
const { readSheetRows } = require('../lib/xlsx/sheet');

const URL = 'https://www.finra.org/sites/default/files/2021-03/margin-statistics.xlsx';

const RE_MONTH = /year.?month|month.?\/?.?year|^\s*date\s*$|기준.?월/i;
const RE_DEBIT = /debit\s+balances/i;
const RE_FREE_CASH = /free\s+credit.*cash/i;
const RE_FREE_MARGIN = /free\s+credit.*(margin|securities)/i;

const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };

// 4가지 표기를 모두 "YYYY-MM" 으로
function normalizeMonth(v) {
  if (v === null || v === undefined || v === '') return null;

  if (typeof v === 'number' && Number.isFinite(v)) {
    // Excel serial (1899-12-30 기준). 20000~60000 범위만 날짜로 인정
    if (v > 20000 && v < 80000) {
      const ms = Date.UTC(1899, 11, 30) + Math.round(v) * 86400000;
      const d = new Date(ms);
      return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
    }
    return null;
  }

  const s = String(v).trim();
  let m = s.match(/^(\d{4})-(\d{2})(?:-\d{2})?/);           // 2026-06 / 2026-06-01
  if (m) return `${m[1]}-${m[2]}`;
  m = s.match(/^([A-Za-z]{3})[a-z]*[-\s]+(\d{2,4})$/);       // Jun-26 / June 2026
  if (m) {
    const mm = MONTHS[m[1].toLowerCase()];
    if (!mm) return null;
    let yy = Number(m[2]);
    if (yy < 100) yy += yy < 70 ? 2000 : 1900;
    return `${yy}-${String(mm).padStart(2, '0')}`;
  }
  m = s.match(/^(\d{1,2})\/(\d{4})$/);                       // 6/2026
  if (m) return `${m[2]}-${String(Number(m[1])).padStart(2, '0')}`;
  return null;
}

function toNum(v) {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  if (v === null || v === undefined) return null;
  const n = Number(String(v).replace(/[,$\s]/g, ''));
  return Number.isFinite(n) ? n : null;
}

// 헤더 행을 찾아 열문자를 런타임에 결정 (구조 변경 1차 방어)
function locateColumns(rows) {
  for (let i = 0; i < Math.min(rows.length, 15); i++) {
    const r = rows[i];
    let month = null, debit = null, freeCash = null, freeMargin = null;
    for (const [col, val] of Object.entries(r)) {
      const s = String(val);
      if (!month && RE_MONTH.test(s)) month = col;
      if (!debit && RE_DEBIT.test(s)) debit = col;
      if (!freeCash && RE_FREE_CASH.test(s)) freeCash = col;
      else if (!freeMargin && RE_FREE_MARGIN.test(s)) freeMargin = col;
    }
    if (debit && month) return { headerRow: i, month, debit, freeCash, freeMargin };
  }
  return null;
}

function buildSeries(rows, cols) {
  const map = new Map();
  for (let i = cols.headerRow + 1; i < rows.length; i++) {
    const r = rows[i];
    const key = normalizeMonth(r[cols.month]);
    const debit = toNum(r[cols.debit]);
    if (!key || debit === null) continue;
    map.set(key, {
      month: key,
      debit,
      freeCreditCash: cols.freeCash ? toNum(r[cols.freeCash]) : null,
      freeCreditMargin: cols.freeMargin ? toNum(r[cols.freeMargin]) : null,
    });
  }
  return map;
}

function levelOf(yoy) {
  if (yoy === null) return 'unknown';
  if (yoy > 40) return 'danger';
  if (yoy > 30) return 'warn';
  return 'normal';
}

function koOf(yoy, level, latest) {
  if (yoy === null) return `마진부채 ${latest ? latest.month : '?'} · 전년 동월 데이터 없음 — 증가율 산출 불가`;
  const s = `${yoy >= 0 ? '+' : ''}${yoy.toFixed(1)}%`;
  if (level === 'danger') return `🔴 마진부채 YoY ${s} — +40% 초과, 레버리지 과열 경고 (역사적으로 시장 과열 국면)`;
  if (level === 'warn') return `⚠️ 마진부채 YoY ${s} — +30% 초과, 레버리지 확대 주의`;
  return `🟢 마진부채 YoY ${s} — 정상 범위`;
}

async function fetchFinraMargin(opts = {}) {
  const url = opts.url || URL;
  const cacheFile = opts.cacheFile || paths.finraCache;

  if (opts.forceFail) {
    return fallback(cacheFile, '강제 실패 테스트');
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), opts.timeoutMs || 20000);
    let res;
    try {
      res = await fetch(url, { signal: controller.signal, headers: { 'User-Agent': 'breakout-team/0.1' } });
    } finally { clearTimeout(timer); }
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const buf = Buffer.from(await res.arrayBuffer());

    const { rows, sheetName, entryCount, sharedCount } = readSheetRows(buf);
    const cols = locateColumns(rows);
    if (!cols) throw new Error('헤더(Debit Balances / Year-Month) 탐색 실패');

    const map = buildSeries(rows, cols);
    if (map.size === 0) throw new Error('데이터 행 0');

    // 정렬 방향 무관: 키로 정렬해 최신월 결정
    const keys = [...map.keys()].sort();
    const latestKey = keys[keys.length - 1];
    const latest = map.get(latestKey);
    const [y, m] = latestKey.split('-');
    const priorKey = `${Number(y) - 1}-${m}`;
    const prior = map.get(priorKey) || null;
    const yoyPct = prior && prior.debit ? round(((latest.debit - prior.debit) / prior.debit) * 100, 1) : null;
    const level = levelOf(yoyPct);

    // 최근 13개월 시계열 (대시보드 막대그래프)
    const series13 = keys.slice(-13).map((k) => map.get(k));

    const out = {
      ok: true, stale: false, source: 'live',
      latest, prior, yoyPct, level,
      ko: koOf(yoyPct, level, latest),
      series13,
      months: map.size, range: { from: keys[0], to: latestKey },
      unit: '백만 달러 (USD millions)',
      source_url: 'https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics',
      file_url: url,
      parsed: { sheetName, entryCount, sharedCount, headerRow: cols.headerRow, cols },
      fetched_at: new Date().toISOString(),
    };
    try { writeJson(cacheFile, out); } catch (e) { /* 캐시 실패 무시 */ }
    return out;
  } catch (e) {
    return fallback(cacheFile, e.message);
  }
}

function fallback(cacheFile, reason) {
  const cached = readJson(cacheFile, null);
  if (cached && cached.latest) {
    say('WARN', `FINRA 수신 실패(${reason}) → 캐시 사용 (${cached.fetched_at})`);
    return { ...cached, stale: true, source: 'cache', stale_reason: reason };
  }
  say('WARN', `FINRA 수신 실패(${reason}) · 캐시 없음 → 데이터 없음`);
  return {
    ok: false, stale: true, source: 'none', error: reason,
    latest: null, prior: null, yoyPct: null, level: 'unknown',
    ko: 'FINRA 마진부채 데이터 없음 (수집 실패)', series13: [],
  };
}

module.exports = { fetchFinraMargin, normalizeMonth, locateColumns, levelOf, URL };

if (require.main === module) {
  require('../lib/util').loadEnv();
  const force = process.argv.includes('--force-fail');
  fetchFinraMargin({ forceFail: force }).then((r) => {
    console.log('\n════════ FINRA 마진부채 ════════');
    console.log(`source=${r.source}  ok=${r.ok}  stale=${r.stale}`);
    if (!r.ok) { console.log(r.ko); return; }
    console.log(`데이터 범위      ${r.range.from} ~ ${r.range.to}  (${r.months}개월)`);
    console.log(`최신             ${r.latest.month}  Debit ${r.latest.debit.toLocaleString()} ${r.unit}`);
    console.log(`전년동월         ${r.prior ? r.prior.month + '  Debit ' + r.prior.debit.toLocaleString() : '없음'}`);
    console.log(`YoY              ${r.yoyPct === null ? '—' : r.yoyPct + '%'}   level=${r.level}`);
    console.log(`\n${r.ko}`);
    console.log(`\n파싱 정보: ${r.parsed.sheetName} · ZIP엔트리 ${r.parsed.entryCount} · sharedStrings ${r.parsed.sharedCount} · 헤더행 ${r.parsed.headerRow} · 열 ${JSON.stringify(r.parsed.cols)}`);
    console.log('\n최근 13개월:');
    for (const s of r.series13) console.log(`  ${s.month}  ${String(s.debit.toLocaleString()).padStart(12)}`);
  });
}
