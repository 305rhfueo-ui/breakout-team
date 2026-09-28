'use strict';
// 한국투자증권 KIS Developers — 해외주식 시세 조회 전용.
//
// ⚠️ 이 모듈에는 주문 함수가 없다. 6팀의 매매는 자체 원장에만 기록한다 (2026-09-23 사용자 결정).
//    실전 키를 쓰지만 하는 일은 현재가·분봉·일봉 읽기뿐이다.
//
// 실측 (2026-09-28):
//  · 호출 간격 120ms 는 "초당 거래건수를 초과" 로 거절, 700ms 는 통과 → 직렬 큐로 간격을 지킨다.
//  · 틀린 거래소로 물으면 rt_cd 는 0 인데 last 가 빈 문자열이다 → 거래소 판별에 쓴다.
//  · 점 티커는 슬래시다: BRK.B ✗ / BRK/B ✓
//  · 분봉은 04:00~20:00 ET 확장시간을 포함하고 라벨은 봉 시작 시각이다 (마지막 봉 19:55, etim 20:00).
//  · 절대 throw 하지 않는다. 실패는 { ok:false, error } (bars.js 와 같은 원칙).

const fs = require('fs');
const path = require('path');
const { paths, ensureDir, readJson, writeJson, say } = require('./util');

const BASE = () => process.env.KIS_BASE || 'https://openapi.koreainvestment.com:9443';
const GAP_MS = () => Number(process.env.KIS_GAP_MS ?? 700);
const tokenFile = () => process.env.KIS_TOKEN_FILE || path.join(paths.cacheDir, 'kis-token.json');
const excdFile = () => process.env.KIS_EXCD_FILE || path.join(paths.cacheDir, 'kis-excd.json');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const n = (v) => { const x = parseFloat(v); return Number.isFinite(x) ? x : null; };

function configured() { return !!(process.env.KIS_APP_KEY && process.env.KIS_APP_SECRET); }
function kisSymbol(t) { return String(t).trim().toUpperCase().replace(/[.\-]/g, '/'); }

// ── 직렬 큐 (호출 간격) ──
let chain = Promise.resolve();
let lastAt = 0;
function enqueue(fn) {
  const run = async () => {
    const wait = lastAt + GAP_MS() - Date.now();
    if (wait > 0) await sleep(wait);
    try { return await fn(); } finally { lastAt = Date.now(); }
  };
  const p = chain.then(run, run);
  chain = p.catch(() => {});
  return p;
}

async function httpJson(url, init, timeoutMs = 10000) {
  const c = new AbortController();
  const timer = setTimeout(() => c.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: c.signal });
    const j = await res.json().catch(() => ({}));
    return { status: res.status, j };
  } finally { clearTimeout(timer); }
}

// ── 토큰: 24시간 유효, 발급은 1분에 1회만 → 파일 캐시 ──
async function token({ force = false } = {}) {
  if (!configured()) return { ok: false, error: 'no_key' };
  if (!force) {
    const hit = readJson(tokenFile(), null);
    if (hit && hit.token && hit.expiresAt > Date.now() + 60e3) return { ok: true, token: hit.token, cached: true };
  }
  try {
    const { status, j } = await httpJson(BASE() + '/oauth2/tokenP', {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ grant_type: 'client_credentials', appkey: process.env.KIS_APP_KEY, appsecret: process.env.KIS_APP_SECRET }),
    });
    if (!j.access_token) return { ok: false, error: `토큰 발급 실패 (HTTP ${status}): ${j.error_description || j.msg1 || '응답 없음'}` };
    ensureDir(path.dirname(tokenFile()));
    writeJson(tokenFile(), { token: j.access_token, expiresAt: Date.now() + (Number(j.expires_in || 86400) - 300) * 1000 });
    return { ok: true, token: j.access_token, cached: false };
  } catch (e) {
    return { ok: false, error: '토큰 발급 실패: ' + e.message };
  }
}

async function call(url, trId, params, { retry = 1 } = {}) {
  let tk = await token();
  if (!tk.ok) return tk;
  return enqueue(async () => {
    for (let a = 0; a <= retry; a++) {
      try {
        const { status, j } = await httpJson(`${BASE()}${url}?${new URLSearchParams(params)}`, {
          headers: { 'content-type': 'application/json; charset=utf-8', authorization: `Bearer ${tk.token}`,
            appkey: process.env.KIS_APP_KEY, appsecret: process.env.KIS_APP_SECRET, tr_id: trId, custtype: 'P' },
        });
        if (j.rt_cd === '0') return { ok: true, j };
        const msg = String(j.msg1 || '').trim();
        if (a < retry && /초당 거래건수/.test(msg)) { await sleep(1500); continue; }
        if (a < retry && (j.msg_cd === 'EGW00123' || /만료된 token/i.test(msg))) {
          tk = await token({ force: true });
          if (!tk.ok) return tk;
          continue;
        }
        return { ok: false, error: msg || `HTTP ${status}` };
      } catch (e) {
        if (a < retry) { await sleep(1000); continue; }
        return { ok: false, error: e.name === 'AbortError' ? 'timeout' : e.message };
      }
    }
    return { ok: false, error: 'retry exhausted' };
  });
}

// ── 거래소 판별 ──
const EXCDS = ['NAS', 'NYS', 'AMS'];
let excdMemo = null;
function excdCache() { return excdMemo || (excdMemo = readJson(excdFile(), {})); }
function rememberExcd(t, ex) {
  const m = excdCache();
  if (m[t] === ex) return;
  m[t] = ex;
  try { ensureDir(path.dirname(excdFile())); writeJson(excdFile(), m); } catch (e) { /* 캐시 실패는 무시 */ }
}

async function priceAt(sym, excd) {
  const r = await call('/uapi/overseas-price/v1/quotations/price', 'HHDFS00000300', { AUTH: '', EXCD: excd, SYMB: sym });
  if (!r.ok) return r;
  const o = r.j.output || {};
  const last = n(o.last);
  if (last == null || last <= 0) return { ok: false, error: 'empty', excd };
  return { ok: true, excd, last, prevClose: n(o.base), volume: n(o.tvol), amount: n(o.tamt) };
}

async function resolveExcd(ticker) {
  const t = String(ticker).toUpperCase();
  const known = excdCache()[t];
  if (known) return { ok: true, excd: known };
  const sym = kisSymbol(t);
  let lastErr = 'not found';
  for (const ex of EXCDS) {
    const r = await priceAt(sym, ex);
    if (r.ok) { rememberExcd(t, ex); return { ok: true, excd: ex, price: r }; }
    if (r.error !== 'empty') lastErr = r.error;
  }
  return { ok: false, error: `거래소 판별 실패 (${lastErr})` };
}

async function price(ticker) {
  const t = String(ticker).toUpperCase();
  const ex = await resolveExcd(t);
  if (!ex.ok) return { ticker: t, ...ex };
  if (ex.price) return { ticker: t, ...ex.price };
  const r = await priceAt(kisSymbol(t), ex.excd);
  return { ticker: t, ...r };
}

// ── 뉴욕 벽시계 → epoch(ms) ──
// 임의 시각의 ET 오프셋을 Intl 로 구한다 (서머타임 자동).
function etOffsetMs(utcMs) {
  const p = {};
  for (const x of new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).formatToParts(new Date(utcMs))) p[x.type] = x.value;
  const wall = Date.UTC(+p.year, +p.month - 1, +p.day, p.hour === '24' ? 0 : +p.hour, +p.minute, +p.second);
  return wall - utcMs;
}
function etToEpoch(ymd, hms = '000000') {
  const guess = Date.UTC(+ymd.slice(0, 4), +ymd.slice(4, 6) - 1, +ymd.slice(6, 8), +hms.slice(0, 2), +hms.slice(2, 4), +hms.slice(4, 6) || 0);
  return guess - etOffsetMs(guess);
}
const isoDate = (ymd) => `${ymd.slice(0, 4)}-${ymd.slice(4, 6)}-${ymd.slice(6, 8)}`;

// ── 분봉 ──
// pages: 120봉 × pages. 5분봉·확장시간 포함이면 하루 192봉이라 하루에 2페이지가 든다.
// regularOnly: 09:30 ≤ 시작 시각 < 16:00 ET 만 남긴다.
async function minuteBars(ticker, { nmin = 5, pages = 2, regularOnly = true } = {}) {
  const t = String(ticker).toUpperCase();
  const ex = await resolveExcd(t);
  if (!ex.ok) return { ticker: t, ok: false, bars: [], error: ex.error };
  const sym = kisSymbol(t);
  const seen = new Set();
  const out = [];
  let next = '', keyb = '', got = 0;
  for (let i = 0; i < pages; i++) {
    const r = await call('/uapi/overseas-price/v1/quotations/inquire-time-itemchartprice', 'HHDFS76950200',
      { AUTH: '', EXCD: ex.excd, SYMB: sym, NMIN: String(nmin), PINC: '1', NEXT: next, NREC: '120', FILL: '', KEYB: keyb });
    if (!r.ok) { if (!out.length) return { ticker: t, ok: false, bars: [], error: r.error }; break; }
    const rows = r.j.output2 || [];
    if (!rows.length) break;
    got += rows.length;
    for (const b of rows) {
      const key = b.xymd + b.xhms;
      if (seen.has(key)) continue;
      seen.add(key);
      const hm = b.xhms.slice(0, 4);
      if (regularOnly && (hm < '0930' || hm >= '1600')) continue;
      const c = n(b.last);
      if (c == null) continue;
      out.push({ t: etToEpoch(b.xymd, b.xhms), date: isoDate(b.xymd), hm, o: n(b.open), h: n(b.high), l: n(b.low), c, v: n(b.evol) || 0, amt: n(b.eamt) || 0 });
    }
    const last = rows[rows.length - 1];
    if (!(r.j.output1 && r.j.output1.next === '1')) break;
    next = '1'; keyb = last.xymd + last.xhms;
  }
  out.sort((a, b) => a.t - b.t);
  return { ticker: t, ok: out.length > 0, bars: out, excd: ex.excd, fetched: got, error: out.length ? null : 'no bars' };
}

// ── 일봉 (수정주가) — bars.js 와 같은 모양 { t, o, h, l, c, v } 로 돌려준다 ──
async function dailyBars(ticker, { pages = 1 } = {}) {
  const t = String(ticker).toUpperCase();
  const ex = await resolveExcd(t);
  if (!ex.ok) return { ticker: t, ok: false, bars: [], error: ex.error };
  const sym = kisSymbol(t);
  const out = new Map();
  let bymd = '';
  for (let i = 0; i < pages; i++) {
    const r = await call('/uapi/overseas-price/v1/quotations/dailyprice', 'HHDFS76240000',
      { AUTH: '', EXCD: ex.excd, SYMB: sym, GUBN: '0', BYMD: bymd, MODP: '1' });
    if (!r.ok) { if (!out.size) return { ticker: t, ok: false, bars: [], error: r.error }; break; }
    const rows = r.j.output2 || [];
    if (!rows.length) break;
    for (const b of rows) {
      const c = n(b.clos);
      if (c == null || !b.xymd) continue;
      out.set(b.xymd, { t: etToEpoch(b.xymd, '093000'), o: n(b.open), h: n(b.high), l: n(b.low), c, v: n(b.tvol) || 0, amt: n(b.tamt) || 0 });
    }
    const oldest = rows[rows.length - 1].xymd;
    const d = new Date(Date.UTC(+oldest.slice(0, 4), +oldest.slice(4, 6) - 1, +oldest.slice(6, 8)) - 86400000);
    const prev = d.toISOString().slice(0, 10).replace(/-/g, '');
    if (prev === bymd || rows.length < 100) break;
    bymd = prev;
  }
  const bars = [...out.values()].sort((a, b) => a.t - b.t);
  return { ticker: t, ok: bars.length > 0, bars, excd: ex.excd, error: bars.length ? null : 'no bars' };
}

// 연결 상태 — 대시보드 health 와 CLI 점검용
async function ping() {
  if (!configured()) return { ok: false, error: '.env 에 KIS_APP_KEY / KIS_APP_SECRET 가 없습니다' };
  const tk = await token();
  if (!tk.ok) return tk;
  const p = await price('QQQ');
  return p.ok ? { ok: true, tokenCached: tk.cached, qqq: p.last } : { ok: false, error: p.error };
}

module.exports = { configured, kisSymbol, token, price, minuteBars, dailyBars, resolveExcd, ping, etToEpoch, etOffsetMs };

if (require.main === module) {
  require('./util').loadEnv();
  if ((process.env.KIS_MODE || 'paper') !== 'paper') say('WARN', `KIS_MODE=${process.env.KIS_MODE} — 이 모듈은 시세만 읽습니다. 주문 기능은 없습니다`);
  const tks = process.argv.slice(2).length ? process.argv.slice(2) : ['QQQ', 'BRK.B', 'CVX'];
  (async () => {
    const h = await ping();
    console.log(h.ok ? `연결 OK (토큰 ${h.tokenCached ? '캐시' : '신규'}) · QQQ ${h.qqq}` : `연결 실패: ${h.error}`);
    if (!h.ok) process.exit(1);
    for (const t of tks) {
      const p = await price(t);
      const m = await minuteBars(t, { pages: 2 });
      const d = await dailyBars(t);
      const lastM = m.bars[m.bars.length - 1], firstM = m.bars[0];
      console.log(`${t.padEnd(6)} ${p.ok ? `${p.excd} $${p.last}` : 'FAIL ' + p.error}`
        + ` · 5분봉 ${m.bars.length}개${firstM ? ` (${firstM.date} ${firstM.hm} ~ ${lastM.date} ${lastM.hm})` : ''}`
        + ` · 일봉 ${d.bars.length}개${d.bars.length ? ` (~${new Date(d.bars[d.bars.length - 1].t).toISOString().slice(0, 10)})` : ''}`);
    }
  })();
}
