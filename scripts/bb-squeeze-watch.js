'use strict';
// 14팀 하율 — 볼린저 수축 → 거래량 폭발 (2026-11-19 사용자: "크게 상승한 종목 중 상승 후 횡보하며 거래량이 마르다가 폭발하는 종목")
//
//   node scripts/bb-squeeze-watch.js          아침 morning.sh 가 run-breakout 뒤에 부른다 (RS 사이트 갱신 뒤 · 봉 캐시 재사용)
//   옵션 --no-git(파일만) · --no-tg(텔레그램 없음) · --cap=N(봉 받을 상한)
//
// 조건(사용자 규칙 그대로 · 코드 숫자 판정 · AI 없음) — 직전 장 D, 그 전날 D-1:
//   ① D-1 볼린저 폭 ≤ 0.25            (폭 = (상단−하단)/중간, 20일·2σ — RS 사이트 BBWTHD 와 같은 식)
//   ② D 거래량 > 50일 평균             (같은 날 사용자 정정: "2배는 말한 적 없다 — 50일 이동평균선 위")
//   ③ D 종가 > D-1 종가                (= OBV 상승)
//   참고 표시(필수 아님): D 폭 · 상단 밴드 상승 · 하단 밴드 하락 · 종가가 상단 밴드 위
// 1차 거름은 RS 사이트 자료(전날 히스토리 BBWTHD · Ret_1D)로 — 50일 거래량은 사이트에 없어 봉으로만 판정, 야후 봉은 남은 종목만(상한 CAP) — 야후 예절.
// 같이 보여 주는 것: 섹터·업종 · 1·3·6개월 등락률(30% 이상 표시) · RS 1·3·6개월 상위 % — 2~8주 횡보·선행 30% 상승은 사용자가 차트로 확인.
const fs = require('fs');
const path = require('path');
const { loadEnv, paths, say, today, writeWindowData, readJson, writeJson, num, round } = require('./lib/util');

const TH = 0.25, VOLK = 1, CAP = 200, KEEP = 25;   // 폭 기준 · 거래량 배수(50일) · 봉 상한 · 화면에 남길 세션 수
const FILE = path.join(paths.dashboardData, 'bbsqueeze.js');
const STATE = path.join(paths.root, 'state', 'bbsqueeze', 'last.json');
const HIST = 'https://305rhfueo-ui.github.io/RS_Investment/static/history/result_';

const sma = (a, n) => a.map((_, i) => (i + 1 < n ? null : a.slice(i + 1 - n, i + 1).reduce((s, x) => s + x, 0) / n));
// 볼린저(20·2σ · 표본표준편차 — RS 사이트 pandas std 와 같음) → { bbw, up, lo }
function bollinger(c) {
  const m = sma(c, 20);
  return c.map((_, i) => {
    if (m[i] == null) return null;
    const w = c.slice(i - 19, i + 1), mu = m[i], sd = Math.sqrt(w.reduce((s, x) => s + (x - mu) ** 2, 0) / 19);
    return { bbw: mu ? (4 * sd) / mu : null, up: mu + 2 * sd, lo: mu - 2 * sd };
  });
}

// 봉 하나(마지막 봉 = D)로 조건 판정 — 순수 함수(테스트)
function judge(bars) {
  const n = bars.length;
  if (n < 52) return null;
  const c = bars.map((b) => b.c), v = bars.map((b) => b.v || 0), bb = bollinger(c), v50 = sma(v, 50);
  const D = n - 1, P = n - 2, b = bb[D], p = bb[P];
  if (!b || !p || !v50[D]) return null;
  const volX = v50[D] ? v[D] / v50[D] : null;
  const rows = [
    { no: '1', item: '전날 볼린저 폭 0.25 이하 (수축)', status: p.bbw <= TH ? 'ok' : 'no', detail: `전날 ${round(p.bbw, 3)} · 당일 ${round(b.bbw, 3)}` },
    { no: '2', item: "당일 거래량 50일 평균 위", status: volX > VOLK ? 'ok' : 'no', detail: `${round(volX, 2)}배 (${Math.round(v[D] / 1e3)}K ÷ ${Math.round(v50[D] / 1e3)}K)` },
    { no: '3', item: 'OBV 상승 (종가 > 전일 종가)', status: c[D] > c[P] ? 'ok' : 'no', detail: `${round(c[P], 2)} → ${round(c[D], 2)} (${round((c[D] / c[P] - 1) * 100, 1)}%)` },
    { no: '4', item: '상단 밴드 상승 · 하단 밴드 하락 (참고)', status: b.up > p.up && b.lo < p.lo ? 'ok' : b.up > p.up || b.lo < p.lo ? 'half' : 'no', detail: `상단 ${round(p.up, 2)}→${round(b.up, 2)} · 하단 ${round(p.lo, 2)}→${round(b.lo, 2)}` },
    { no: '5', item: '종가가 상단 밴드 위 (참고)', status: c[D] > b.up ? 'ok' : 'no', detail: `종가 ${round(c[D], 2)} · 상단 ${round(b.up, 2)}` },
  ];
  return { pass: rows.slice(0, 3).every((r) => r.status === 'ok'), rows, volX: round(volX, 2), bbwPrev: round(p.bbw, 3), bbw: round(b.bbw, 3), aboveUp: c[D] > b.up, expand: b.up > p.up && b.lo < p.lo, close: round(c[D], 2) };
}

// 사이트 히스토리(전날 라벨)의 BBWTHD — 라벨은 UTC 완료일이라 하루씩 거슬러 찾는다
async function prevBbw(label) {
  const { fetchText, parseLooseJson } = require('./fetch-rs-data');
  const cache = require('./lib/cache');
  for (let k = 1; k <= 6; k++) {
    const d = new Date(`${label}T00:00:00Z`); d.setUTCDate(d.getUTCDate() - k);
    const key = d.toISOString().slice(0, 10);
    const map = await cache.through('rsHistoryBbw', key, async () => {
      try { const j = parseLooseJson(await fetchText(`${HIST}${key}.json`, 40000)); const m = {}; for (const r of (Array.isArray(j) ? j : j.data || [])) if (r.Ticker && r.BBWTHD != null) m[r.Ticker] = r.BBWTHD; return m; }
      catch (e) { return null; }
    }, cache.DAY * 30);
    if (map && Object.keys(map).length) return { date: key, map };
  }
  const last = readJson(STATE, null);   // 히스토리를 못 받으면 지난 실행이 남긴 당일 폭
  return last && last.label && last.label < label ? { date: last.label, map: last.bbw } : null;
}

const pctTop = (p) => (p == null ? null : round(100 - p, 1));   // 백분위 → 상위 %
function entry(r, j, session) {
  const p = r.__p || {};
  return { ticker: r.Ticker, session, sector: r.Sector || '', industry: r.Industry || '', price: num(r.Price), adr: num(r.ADR_20D),
    ret: { m1: num(r.Ret_1M_Pct), m3: num(r.Ret_3M_Pct), m6: num(r.Ret_6M_Pct) }, rsTop: { m1: pctTop(p.RS_1mo), m3: pctTop(p.RS_3mo), m6: pctTop(p.RS_6mo) },
    volX: j.volX, bbwPrev: j.bbwPrev, bbw: j.bbw, aboveUp: j.aboveUp, expand: j.expand, close: j.close, rows: j.rows };
}

function message(items, session, scan) {
  const f = (v) => (v == null ? '—' : `${v > 0 ? '+' : ''}${Math.round(v)}%`), big = (v) => (v != null && v >= 30 ? '★' : '');
  const L = [`📦 14팀 하율 — 볼린저 수축 → 거래량 폭발 (${session} 장)`, `전날 폭 ≤ ${TH} · 거래량 50일 평균 위 · OBV 상승 — ${items.length}종목`];
  for (const x of items.slice(0, 15)) L.push(`${x.ticker} ${x.sector}/${x.industry} · 거래량 ${x.volX}배 · 폭 ${x.bbwPrev}→${x.bbw}${x.aboveUp ? ' · 상단 돌파' : ''}${x.expand ? ' · 밴드 확장' : ''}\n  1M ${f(x.ret.m1)}${big(x.ret.m1)} 3M ${f(x.ret.m3)}${big(x.ret.m3)} 6M ${f(x.ret.m6)}${big(x.ret.m6)} · RS 상위 ${x.rsTop.m1 ?? '—'}/${x.rsTop.m3 ?? '—'}/${x.rsTop.m6 ?? '—'}%`);
  if (items.length > 15) L.push(`… 외 ${items.length - 15}종목은 대시보드에`);
  if (scan.capDropped) L.push(`⚠️ 봉 상한(${CAP})으로 ${scan.capDropped}종목은 못 봤습니다`);
  L.push('★ = 30% 이상. 2~8주 횡보·선행 상승은 차트로 직접 확인하세요. 판단 보조이며 매수 권유가 아닙니다.\nhttps://305rhfueo-ui.github.io/breakout-team/');
  return L.join('\n');
}

async function main() {
  loadEnv();
  const a = process.argv.slice(2), git = !a.includes('--no-git'), tg = !a.includes('--no-tg'), cap = Number((a.find((x) => x.startsWith('--cap=')) || '').slice(6)) || CAP;
  const { fetchRsData } = require('./fetch-rs-data');
  const { rankPercentiles } = require('./lib/percentile');
  const { fetchMany, barDateET } = require('./lib/bars');
  const { isEtf } = require('./lib/util');
  const { rows, meta } = await fetchRsData();
  const label = String(meta.last_updated || today()).slice(0, 10);
  rankPercentiles(rows);
  const prev = await prevBbw(label);
  if (!prev) { say('WARN', '하율: 전날 볼린저 폭을 못 구해 건너뜀'); return { ok: false }; }
  const bbwToday = {}; for (const r of rows) if (r.Ticker && r.BBWTHD != null) bbwToday[r.Ticker] = r.BBWTHD;
  writeJson(STATE, { label, bbw: bbwToday });
  const pre = rows.filter((r) => r.Ticker && !isEtf(r) && prev.map[r.Ticker] != null && prev.map[r.Ticker] <= TH && num(r.Ret_1D_Pct) > 0)   // 거래량은 사이트에 50일 기준이 없어(VOL_X 는 20일 거래대금) 봉으로만 판정
    .sort((x, y) => num(y.VOL_X) - num(x.VOL_X));
  const take = pre.slice(0, cap), scan = { universe: rows.length, prefilter: pre.length, fetched: take.length, capDropped: Math.max(0, pre.length - cap), prevDate: prev.date };
  say('SYSTEM', `하율: ${label} · 전날 폭(${prev.date}) ≤ ${TH} & 상승 → ${pre.length}종목 (봉 ${take.length})`);
  const { results } = await fetchMany(take.map((r) => r.Ticker), { range: '2y', label: '하율 봉', budgetMs: 240000 });
  // 사이트 자료(라벨 = UTC 완료일)의 장 = 라벨 전날까지의 마지막 봉. 사이트가 아직 안 바뀐 아침에 야후 봉이 하루 앞서 있어도 같은 장으로 맞춘다(2026-11-19 실측)
  const barsOf = (t) => { const r = results.get(String(t).toUpperCase()); return r && r.ok ? r.bars.filter((b) => barDateET(b.t) < label) : null; };
  const session = take.map((r) => barsOf(r.Ticker)).filter((b) => b && b.length).map((b) => barDateET(b[b.length - 1].t)).sort().pop() || label;
  const items = [];
  for (const r of take) { const b = barsOf(r.Ticker); const j = b && judge(b); if (j && j.pass && barDateET(b[b.length - 1].t) === session) items.push(entry(r, j, session)); }
  const rose = (x) => [x.ret.m1, x.ret.m3, x.ret.m6].some((v) => v != null && v >= 30);   // 크게 오른 종목 먼저 (같은 날 사용자: "크게 상승한 종목 중 횡보하다 거래량 폭발") — 거르지는 않는다
  items.sort((x, y) => rose(y) - rose(x) || y.volX - x.volX);
  say('SYSTEM', `하율: 조건 충족 ${items.length}종목${items.length ? ' — ' + items.map((x) => x.ticker).join(', ') : ''}`);

  const old = readJson(FILE.replace(/\.js$/, '.json'), null) || (() => { try { return JSON.parse(fs.readFileSync(FILE, 'utf8').match(/=\s*([\s\S]*);\s*$/)[1]); } catch (e) { return null; } })();
  const keepOld = ((old && old.items) || []).filter((x) => x.session !== session);
  const all = [...items, ...keepOld], sessions = [...new Set(all.map((x) => x.session))].sort().reverse().slice(0, KEEP);
  const data = { updated: new Date().toISOString(), session, rule: { th: TH, volk: VOLK }, scan, items: all.filter((x) => sessions.includes(x.session)) };
  writeWindowData(FILE, 'BBSQUEEZE_DATA', data, { compact: true });
  // 팝업 차트 봉(200일선까지 그리려면 길게) — 다른 팀 파일은 지우지 않는다
  const dir = path.join(paths.dashboardData, 'ohlc');
  const keep = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)) : [];
  require('./lib/lists').writeOhlcFiles(items.map((x) => x.ticker), barsOf, dir, { bars: 330, dateOf: barDateET, keepTickers: keep });
  if (git) { const pub = require('./finish-ondemand').gitPublish([FILE, dir], `bbsqueeze: ${session} 볼린저 수축→거래량 폭발 ${items.length}종목`); if (!pub.ok) say('WARN', `GitHub: ${pub.error}`); }
  if (tg && items.length) { const r = await require('./lib/notify').notify(message(items, session, scan)); if (!r.ok) say('WARN', `텔레그램: ${r.error}`); }
  return { ok: true, items };
}

module.exports = { judge, bollinger, entry, message, TH, VOLK };
if (require.main === module) main().then((r) => process.exit(r.ok ? 0 : 1)).catch((e) => { console.error(e); process.exit(1); });
