'use strict';
// RS 사이트 티커 목록 자동 갱신 (2026-10-29 사용자: "구글시트 티커 목록 자동화 … 해보자")
//   사용자 구글 시트 첫 탭 A열 = RS_Investment(깃허브 자동 실행)가 매일 CSV 로 읽는 종목 목록. 지금까진 사용자가 손으로 넣었다.
//   ① 한투 조건검색(현재가 ≥ KEEP_PRICE) — 100개씩만 주므로 가격대를 나눠 빠짐없이 받는다
//   ② 나스닥 공식 상장 목록(nasdaqtraded.txt)에 보통주로 있는 것만 — ETF·ETN·우선주·채권형·워런트·유닛·권리·폐쇄형 펀드 제외
//   ③ $70 이상이면 넣고, 이미 있는 종목은 $50 밑으로 내려가야 뺀다(경계에서 매주 들락날락하지 않게) + 시트 "수기" 탭 A열 → 첫 탭 A열을 통째로 바꾼다
//   기준은 2026-10-29 시트 1,109종목에서 거꾸로 찾았다 — $75 이상 보통주 973개 중 970개가 시트에 있고, $70 아래는 듬성듬성, $50 아래는 0개.
//   시가총액 하한은 없다(2억 달러 소형주도 있음).
//   node scripts/ticker-universe.js            # 비교만 (시트에 안 씀)
//   node scripts/ticker-universe.js --write    # 시트에 씀 — 서비스 계정 키 파일(SA_FILE, 저장소 밖 · 사용자가 직접 둔다) 필요
//   맥미니 아침 작업이 토요일에 --write 로 부른다(금요일 종가 기준).
const fs = require('fs');
const crypto = require('crypto');
const { loadEnv, say } = require('./lib/util');

const ADD_PRICE = 70, KEEP_PRICE = 50;
const SHEET_ID = '17JU4KoC-Out5NqGy3qtN7LSunMUsH5xS2qJSk1fBDGQ';    // RS_Investment(공개 저장소)에 이미 있는 주소
const MANUAL_TAB = '수기';
const SA_FILE = process.env.GOOGLE_SA_FILE || require('path').join(require('os').homedir(), '.config', 'breakout-team', 'google-sa.json');
const MAX_CHANGE = 0.3;                                            // 한 번에 30% 넘게 바뀌면 쓰지 않는다 — 조회 오류로 목록이 반토막 나는 것 방지
const EXCHANGES = ['NAS', 'NYS', 'AMS'];

// 가격대 [lo, hi] 를 100개 안으로 들어올 때까지 반씩(로그 눈금) 나눈다. 경계는 겹치게 두고 티커로 중복을 지운다.
async function priceBand(search, excd, lo, hi, out) {
  const r = await search({ excd, rateMin: null, priceMin: lo, priceMax: hi });
  if (!r.ok) throw new Error(`${excd} ${lo}~${hi}: ${r.error}`);
  if (r.total <= r.rows.length || hi - lo < 0.05) {
    if (r.total > r.rows.length) out.cut += r.total - r.rows.length;
    for (const x of r.rows) out.rows.set(x.ticker.replace('/', '.'), x);
    return;
  }
  const mid = Math.round(Math.sqrt(lo * hi) * 100) / 100;
  await priceBand(search, excd, lo, mid, out);
  await priceBand(search, excd, mid, hi, out);
}
async function kisList(search) {
  const out = { rows: new Map(), cut: 0 };
  for (const ex of EXCHANGES) await priceBand(search, ex, KEEP_PRICE, 10000000, out);
  return out;
}

// 나스닥 공식 상장 목록(뉴욕·아멕스 포함 전 거래소) → 보통주(ADR·클래스 주식 포함) 티커 집합. 우선주는 기호에 $, 이름에 Preferred Stock 등.
//   "Preferred Bank - Common Stock"(PFBC)·"ADS each representing four Preferred Shares"(CIB)는 보통주다 — 그래서 'preferred' 한 단어로 거르지 않는다.
const NOT_COMMON = /preferred stock|non-cumulative|perpetual|\bdebentures?\b|notes? due|subordinated|\bwarrants?\b|-\s*(units?|rights?)\b|\bfund\b/i;
function commonStocks(txt) {
  const L = txt.trim().split('\n'), h = L[0].split('|');
  const ix = (k) => h.indexOf(k);
  const set = new Set();
  for (const l of L.slice(1)) {
    const c = l.split('|');
    if (c.length < h.length || c[ix('ETF')] !== 'N' || c[ix('Test Issue')] !== 'N') continue;     // Nasdaq Traded 는 보지 않는다 — BRK.A 가 N
    if (c[ix('Symbol')].includes('$') || NOT_COMMON.test(c[ix('Security Name')])) continue;
    set.add(c[ix('Symbol')]);
  }
  return set;
}

const csvCol = (txt) => [...new Set(String(txt).split(/\r?\n/).map((s) => s.split(',')[0].replace(/"/g, '').trim().toUpperCase()).filter((s) => /^[A-Z][A-Z0-9.\-]*$/.test(s)))];
async function sheetCsv(tab) {
  const q = tab ? `&sheet=${encodeURIComponent(tab)}` : '';
  const r = await fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/${tab ? 'gviz/tq?tqx=out:csv' : 'export?format=csv'}${q}`, { signal: AbortSignal.timeout(20000) });
  if (!r.ok) return null;
  return csvCol(await r.text());
}

// prices: 티커 → 가격(한투 조건검색 + 시트에만 있는 종목은 개별 조회). 가격을 모르면(조회 실패) 이미 있는 종목은 남긴다.
function build({ prices, common, prev, manual }) {
  const P = new Set(prev);
  const keep = (t) => common.has(t) && (P.has(t) ? !(prices.get(t) < KEEP_PRICE) : prices.get(t) >= ADD_PRICE);
  const auto = [...new Set([...prices.keys(), ...prev])].filter(keep).sort((a, b) => (prices.get(b) ?? 0) - (prices.get(a) ?? 0));   // 시트처럼 비싼 순
  const set = new Set(auto);
  return [...auto, ...manual.filter((t) => !set.has(t))];
}
function diff(prev, next) {
  const p = new Set(prev), n = new Set(next);
  return { added: next.filter((t) => !p.has(t)), removed: prev.filter((t) => !n.has(t)) };
}

// 구글 시트 API — 서비스 계정 키로 JWT 를 서명해 토큰을 받는다(추가 패키지 없음)
async function googleToken(sa) {
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/spreadsheets', aud: sa.token_uri, iat: now, exp: now + 3600 })}`;
  const jwt = `${unsigned}.${crypto.sign('RSA-SHA256', Buffer.from(unsigned), sa.private_key).toString('base64url')}`;
  const r = await fetch(sa.token_uri, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }) });
  const j = await r.json();
  if (!j.access_token) throw new Error(`구글 토큰 실패: ${j.error || r.status}`);
  return j.access_token;
}
async function writeFirstTab(list, saFile) {
  const tok = await googleToken(JSON.parse(fs.readFileSync(saFile, 'utf8')));
  const api = (u, o = {}) => fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}${u}`, { ...o, headers: { authorization: `Bearer ${tok}`, 'content-type': 'application/json' } })
    .then(async (r) => { const j = await r.json(); if (!r.ok) throw new Error(`시트 API ${r.status}: ${(j.error && j.error.message) || ''}`); return j; });
  const meta = await api('?fields=sheets.properties');
  const first = meta.sheets.find((s) => s.properties.sheetId === 0) || meta.sheets[0];
  const tab = `'${first.properties.title.replace(/'/g, "''")}'`;
  await api(`/values/${encodeURIComponent(`${tab}!A:A`)}:clear`, { method: 'POST', body: '{}' });
  await api(`/values/${encodeURIComponent(`${tab}!A1:A${list.length}`)}?valueInputOption=RAW`, { method: 'PUT', body: JSON.stringify({ values: list.map((t) => [t]) }) });
  return first.properties.title;
}

async function run({ write = false } = {}) {
  const kis = await kisList(require('./lib/kis').search);
  const nt = await fetch('https://www.nasdaqtrader.com/dynamic/SymDir/nasdaqtraded.txt', { signal: AbortSignal.timeout(60000) });
  if (!nt.ok) throw new Error(`나스닥 상장 목록 HTTP ${nt.status}`);
  const common = commonStocks(await nt.text());
  const prev = await sheetCsv(null);
  if (!prev) throw new Error('지금 시트를 읽지 못했습니다');
  let manual = (await sheetCsv(MANUAL_TAB)) || [];
  if (manual.length === prev.length && manual.every((t, i) => t === prev[i])) manual = [];   // "수기" 탭이 없으면 구글이 첫 탭을 대신 준다
  const prices = new Map([...kis.rows].map(([t, x]) => [t, x.price]));
  const K = require('./lib/kis');
  for (const t of prev.filter((t) => common.has(t) && !prices.has(t))) { const p = await K.price(t); if (p.ok) prices.set(t, p.last); }   // $50 아래로 내려갔거나 조건검색에서 빠진 것
  const next = build({ prices, common, prev, manual });
  const d = diff(prev, next);
  const ratio = (d.added.length + d.removed.length) / Math.max(prev.length, 1);
  say('SYSTEM', `티커 목록: 한투 $${KEEP_PRICE} 이상 ${kis.rows.size}개(잘림 ${kis.cut}) · 수기 ${manual.length} → ${next.length}종목 · 지금 시트 ${prev.length} · 추가 ${d.added.length} · 삭제 ${d.removed.length}`);
  const res = { next, prev, ...d, ratio, cut: kis.cut, manual: manual.length, written: null };
  if (!write) return res;
  if (kis.cut) throw new Error(`한투 조건검색이 ${kis.cut}개를 잘랐습니다 — 목록이 불완전해 쓰지 않습니다`);
  if (ratio > MAX_CHANGE) throw new Error(`바뀌는 종목이 ${Math.round(ratio * 100)}% — ${MAX_CHANGE * 100}% 를 넘어 쓰지 않습니다(조회 오류 의심, 사람이 확인)`);
  if (!fs.existsSync(SA_FILE)) throw new Error(`구글 서비스 계정 키 파일이 없습니다(${SA_FILE}) — 시트에 쓰지 못합니다`);
  res.written = await writeFirstTab(next, SA_FILE);
  return res;
}

module.exports = { priceBand, commonStocks, build, diff, csvCol, run, ADD_PRICE, KEEP_PRICE };

if (require.main === module) {
  loadEnv();
  const write = process.argv.includes('--write');
  run({ write }).then(async (r) => {
    const cut = (a) => (a.length > 40 ? `${a.slice(0, 40).join(' ')} … 외 ${a.length - 40}` : a.join(' ') || '없음');
    console.log(`\n추가 ${r.added.length}: ${cut(r.added)}\n삭제 ${r.removed.length}: ${cut(r.removed)}`);
    if (r.written) {
      say('SYSTEM', `시트 "${r.written}" 탭에 ${r.next.length}종목을 썼습니다`);
      await require('./lib/notify').notify(`📋 RS 티커 목록 갱신 — ${r.next.length}종목(수기 ${r.manual} 포함) · 추가 ${r.added.length} · 삭제 ${r.removed.length}\n추가: ${cut(r.added)}\n삭제: ${cut(r.removed)}`);
    }
  }).catch(async (e) => {
    say('WARN', `티커 목록 갱신 안 함: ${e.message}`);
    if (write) await require('./lib/notify').notify(`⚠️ RS 티커 목록 갱신 안 함 — ${e.message}`);
    process.exit(1);
  });
}
