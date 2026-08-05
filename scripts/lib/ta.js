'use strict';
// 기술적 분석(TA) — 야후 파이낸스 과거 OHLCV 봉으로 이동평균·저항·돌파·수축 계산.
// investment-agent-team/scripts/lib/ta.js 에서 이식 후 확장.
// 무인증·무료. Node 18+ global fetch.
//
// ⚠️ 역할 분담: RS 사이트가 이미 제공하는 것(Above_50_SMA / Above_150_SMA / VOL_X /
//    Vol_Surge_Wk / 10·50·200DIV)은 여기서 다시 계산하지 않는다.
//    야후는 사이트에 "없는 것"만 담당한다 — 기울기, 연속 이탈일수, 저항선, 횡보 구간, 차트.

const { round } = require('./util');

// ── 야후 봉 수집 ──
// 심볼 정규화: 'BRK.A' → 'BRK-A' (야후는 점 표기를 404 처리. 유니버스에 12종목 존재)
function yahooSymbol(t) {
  return String(t).trim().toUpperCase().replace(/\./g, '-');
}

async function fetchBars(ticker, { range = '1y', interval = '1d', timeoutMs = 12000 } = {}) {
  const sym = yahooSymbol(ticker);
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=${interval}&range=${range}`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let res;
    try {
      res = await fetch(url, { signal: controller.signal, headers: { 'User-Agent': 'Mozilla/5.0' } });
    } finally {
      clearTimeout(timer);
    }
    if (!res.ok) return { bars: [], meta: null, ok: false, error: 'HTTP ' + res.status };
    const j = await res.json();
    const r = j && j.chart && j.chart.result && j.chart.result[0];
    if (!r) return { bars: [], meta: null, ok: false, error: 'no result' };
    const ts = r.timestamp || [];
    const q = (r.indicators && r.indicators.quote && r.indicators.quote[0]) || {};
    const bars = [];
    for (let i = 0; i < ts.length; i++) {
      const o = q.open && q.open[i], h = q.high && q.high[i], l = q.low && q.low[i];
      const c = q.close && q.close[i], v = q.volume && q.volume[i];
      if (c == null || !isFinite(c)) continue;
      bars.push({ t: ts[i] * 1000, o, h, l, c, v: v || 0 });
    }
    return { bars, meta: r.meta || null, ok: bars.length > 0, error: null };
  } catch (e) {
    return { bars: [], meta: null, ok: false, error: e.message };
  }
}

// ── 지표 ──
function sma(bars, period, key = 'c') {
  if (!bars || bars.length < period) return null;
  let s = 0;
  for (let i = bars.length - period; i < bars.length; i++) s += bars[i][key];
  return s / period;
}

// 이동평균 시계열 (bars 와 인덱스 정렬, 초기 구간은 null)
function smaSeries(bars, period, key = 'c') {
  const out = new Array(bars.length).fill(null);
  if (bars.length < period) return out;
  let sum = 0;
  for (let i = 0; i < bars.length; i++) {
    sum += bars[i][key];
    if (i >= period) sum -= bars[i - period][key];
    if (i >= period - 1) out[i] = sum / period;
  }
  return out;
}

// 스윙 고점/저점 (window 좌우로 가장 높은/낮은 봉)
function swingHighs(bars, window = 5) {
  const out = [];
  for (let i = window; i < bars.length - window; i++) {
    let isHigh = true;
    for (let j = i - window; j <= i + window; j++) { if (bars[j].h > bars[i].h) { isHigh = false; break; } }
    if (isHigh) out.push({ t: bars[i].t, price: bars[i].h, idx: i });
  }
  return out;
}

function swingLows(bars, window = 5) {
  const out = [];
  for (let i = window; i < bars.length - window; i++) {
    let isLow = true;
    for (let j = i - window; j <= i + window; j++) { if (bars[j].l < bars[i].l) { isLow = false; break; } }
    if (isLow) out.push({ t: bars[i].t, price: bars[i].l, idx: i });
  }
  return out;
}

// 변동성 수축비: 최근 N봉 평균 진폭 / 그 이전 N봉. <1 이면 수축
function contractionRatio(bars, n = 10) {
  if (!bars || bars.length < n * 2) return null;
  const rng = (b) => (b.h - b.l);
  const recent = bars.slice(-n).reduce((a, b) => a + rng(b), 0) / n;
  const prior = bars.slice(-n * 2, -n).reduce((a, b) => a + rng(b), 0) / n;
  return prior > 0 ? recent / prior : null;
}

// 봉 내 종가 위치 0~100 (돌파 품질)
function closePosition(bar) {
  if (!bar || bar.h == null || bar.l == null || bar.h === bar.l) return null;
  return ((bar.c - bar.l) / (bar.h - bar.l)) * 100;
}

// ── 3팀 핵심: 종가가 N일선 아래에 연속 며칠인가 ──
// ⚠️ 실행 횟수가 아니라 실제 봉 날짜로 센다 → 주말·휴장·미실행일에 오염되지 않는다.
function consecutiveDaysBelowMA(bars, period = 50) {
  if (!bars || bars.length < period) {
    return { ok: false, days: null, ma: null, lastClose: null, firstBelowDate: null, reason: `봉 ${bars ? bars.length : 0}개 < ${period}` };
  }
  const s = smaSeries(bars, period);
  let days = 0;
  let i = bars.length - 1;
  let firstBelowIdx = null;
  while (i >= 0 && s[i] != null && bars[i].c < s[i]) {
    days++; firstBelowIdx = i; i--;
  }
  return {
    ok: true,
    days,
    ma: round(s[bars.length - 1]),
    lastClose: round(bars[bars.length - 1].c),
    firstBelowDate: firstBelowIdx == null ? null : new Date(bars[firstBelowIdx].t).toISOString().slice(0, 10),
    lastBarDate: new Date(bars[bars.length - 1].t).toISOString().slice(0, 10),
  };
}

// ── 이동평균 기울기 (우상향 판정) ──
// lookback 봉 전 대비 변화율(%). 사이트는 Above_150_SMA(위/아래)만 주므로 기울기는 여기서만 얻는다.
function maSlope(bars, period, lookback = 20) {
  if (!bars || bars.length < period + lookback) {
    return { ok: false, pct: null, dir: null, reason: `봉 ${bars ? bars.length : 0}개 < ${period + lookback}` };
  }
  const s = smaSeries(bars, period);
  const now = s[bars.length - 1];
  const past = s[bars.length - 1 - lookback];
  if (now == null || past == null || past === 0) return { ok: false, pct: null, dir: null, reason: 'MA 계산 불가' };
  const pct = ((now - past) / Math.abs(past)) * 100;
  return {
    ok: true,
    pct: round(pct),
    now: round(now),
    past: round(past),
    dir: pct > 0.15 ? 'up' : pct < -0.15 ? 'down' : 'flat',
    lookback,
  };
}

// ── 직전 고점 돌파 ──
// priorHigh = 최근 lookback 봉 중 마지막 exclude 봉을 제외한 구간의 최고 고가
function priorHighBreak(bars, { lookback = 40, exclude = 5 } = {}) {
  if (!bars || bars.length < lookback + 1) {
    return { ok: false, reason: `봉 ${bars ? bars.length : 0}개 < ${lookback + 1}` };
  }
  const win = bars.slice(-lookback, -exclude);
  if (!win.length) return { ok: false, reason: '구간 없음' };
  let priorHigh = -Infinity, priorIdx = -1;
  win.forEach((b, i) => { if (b.h > priorHigh) { priorHigh = b.h; priorIdx = i; } });
  const price = bars[bars.length - 1].c;
  const broke = price > priorHigh;
  // 돌파 시점: 최근 exclude 구간에서 종가가 priorHigh 를 처음 넘은 봉
  const tail = bars.slice(-exclude);
  let breakIdx = null;
  for (let i = 0; i < tail.length; i++) { if (tail[i].c > priorHigh) { breakIdx = i; break; } }
  return {
    ok: true,
    priorHigh: round(priorHigh),
    priorHighDate: new Date(win[priorIdx].t).toISOString().slice(0, 10),
    price: round(price),
    broke,
    closeAbovePct: round(((price - priorHigh) / priorHigh) * 100),
    breakDate: breakIdx == null ? null : new Date(tail[breakIdx].t).toISOString().slice(0, 10),
    barsSinceBreak: breakIdx == null ? null : tail.length - 1 - breakIdx,
  };
}

// ── 거래량 확장 ──
// ⚠️ 사이트가 Vol_Surge_Wk(당일/직전5일평균, 당일제외)와 VOL_X(거래대금/20일평균)를 이미 준다.
//    여기 계산값은 교차검증·야후 단독 실행용이다. 사이트 값이 있으면 그걸 우선한다.
function volumeExpansion(bars, { period = 20 } = {}) {
  if (!bars || bars.length < period + 1) return { ok: false, reason: '봉 부족' };
  const last = bars[bars.length - 1];
  const avg20 = sma(bars, period, 'v');
  // 당일 제외 직전 5거래일 평균 (사이트 Vol_Surge_Wk 와 동일 정의)
  const prev5 = bars.slice(-6, -1);
  const avg5Prev = prev5.length === 5 ? prev5.reduce((a, b) => a + b.v, 0) / 5 : null;
  const avg5 = sma(bars, 5, 'v');
  return {
    ok: true,
    lastVol: last.v,
    avgVol20: Math.round(avg20 || 0),
    avgVol5Prev: avg5Prev == null ? null : Math.round(avg5Prev),
    volRatio20: avg20 ? round(last.v / avg20) : null,
    volRatio5: avg5Prev ? round(last.v / avg5Prev) : null,   // ≈ 사이트 Vol_Surge_Wk
    dryUp: (avg5 && avg20) ? round(avg5 / avg20) <= 0.7 : null,
    dryUpRatio: (avg5 && avg20) ? round(avg5 / avg20) : null,
  };
}

// ── 종합 분석 ──
function analyze(bars) {
  if (!bars || !bars.length) return null;
  const last = bars[bars.length - 1];
  const price = last.c;
  const ma20 = sma(bars, 20), ma50 = sma(bars, 50), ma150 = sma(bars, 150), ma200 = sma(bars, 200);
  const periodHigh = Math.max(...bars.map((b) => b.h));
  const periodLow = Math.min(...bars.map((b) => b.l));
  const pullbackFromHigh = periodHigh > 0 ? ((price - periodHigh) / periodHigh) * 100 : null;

  // 저항: 현재가 위의 가장 가까운 스윙 고점 / 지지: 아래 가장 가까운 스윙 저점
  const highs = swingHighs(bars, 5).filter((s) => s.price > price * 1.005);
  const resistance = highs.length ? Math.min(...highs.map((s) => s.price)) : null;
  const lows = swingLows(bars, 5).filter((s) => s.price < price * 0.995);
  const support = lows.length ? Math.max(...lows.map((s) => s.price)) : null;

  // 돌파: 직전 저항(30~5봉 전 고점)을 종가로 넘고 거래량 실렸나
  const lookback = bars.slice(-30, -5);
  const priorRes = lookback.length ? Math.max(...lookback.map((b) => b.h)) : null;
  const avgVol = sma(bars, 20, 'v');
  const brokeResistance = priorRes != null && price > priorRes && last.v > (avgVol || 0) * 1.3;

  const contraction = contractionRatio(bars, 10);
  const distMA50 = ma50 ? ((price - ma50) / ma50) * 100 : null;
  const distMA150 = ma150 ? ((price - ma150) / ma150) * 100 : null;
  const distMA200 = ma200 ? ((price - ma200) / ma200) * 100 : null;

  return {
    price: round(price), ma20: round(ma20), ma50: round(ma50), ma150: round(ma150), ma200: round(ma200),
    distMA50: round(distMA50), distMA150: round(distMA150), distMA200: round(distMA200),
    aboveMA50: ma50 != null ? price > ma50 : null,
    aboveMA150: ma150 != null ? price > ma150 : null,
    aboveMA200: ma200 != null ? price > ma200 : null,
    near50: distMA50 != null ? Math.abs(distMA50) <= 3 : null,
    periodHigh: round(periodHigh), periodLow: round(periodLow), pullbackFromHigh: round(pullbackFromHigh),
    resistance: round(resistance), support: round(support),
    brokeResistance, contraction: round(contraction),
    clsPos: round(closePosition(last)),
    trend: (ma50 != null && ma200 != null)
      ? (ma50 > ma200 && price > ma50 ? 'up' : price < ma50 && price < ma200 ? 'down' : 'mixed')
      : null,
    bars: bars.length,
    lastBarDate: new Date(last.t).toISOString().slice(0, 10),
  };
}

// ── 한 종목 차트 판독 ──
async function chartRead(ticker, opts = {}) {
  const { bars, ok, error } = await fetchBars(ticker, { range: opts.range || '1y', interval: '1d' });
  if (!ok) return { ticker, ok: false, error, summary: `${ticker}: 봉 데이터 없음 (${error})` };
  const a = analyze(bars);
  if (!a) return { ticker, ok: false, error: 'analyze 실패', summary: `${ticker}: 분석 불가` };

  const near = a.near50 ? `50일선 ±3% 근접(${a.distMA50}%)`
    : (a.distMA50 != null ? `50일선 대비 ${a.distMA50 > 0 ? '+' : ''}${a.distMA50}%` : '');
  const brk = a.brokeResistance ? '거래량 동반 저항 돌파 ✓' : (a.resistance ? `저항 $${a.resistance} 미돌파` : '');
  const con = a.contraction != null
    ? (a.contraction < 0.8 ? `수축 진행(${a.contraction})` : a.contraction < 1 ? `약수축(${a.contraction})` : `확장(${a.contraction})`)
    : '';
  const summary = `${ticker} $${a.price} · 고점대비 ${a.pullbackFromHigh}% · ${near} · 150일선 ${a.aboveMA150 ? '위' : '아래'} · ${brk}${con ? ' · ' + con : ''} · 추세 ${a.trend}`;
  return { ticker, ok: true, ...a, summary };
}

module.exports = {
  yahooSymbol, fetchBars,
  sma, smaSeries, swingHighs, swingLows, contractionRatio, closePosition,
  consecutiveDaysBelowMA, maSlope, priorHighBreak, volumeExpansion,
  analyze, chartRead,
};

if (require.main === module) {
  const t = process.argv[2] || 'NVDA';
  fetchBars(t, { range: '1y' }).then(({ bars, ok, error }) => {
    if (!ok) { console.log(`${t}: 봉 없음 (${error})`); return; }
    console.log(`\n=== ${t} · ${bars.length}봉 ===`);
    console.log(JSON.stringify(analyze(bars), null, 2));
    console.log('\n50일선 연속 이탈:', JSON.stringify(consecutiveDaysBelowMA(bars, 50)));
    console.log('150일선 기울기 :', JSON.stringify(maSlope(bars, 150, 20)));
    console.log('50일선 기울기  :', JSON.stringify(maSlope(bars, 50, 20)));
    console.log('직전고점 돌파  :', JSON.stringify(priorHighBreak(bars)));
    console.log('거래량         :', JSON.stringify(volumeExpansion(bars)));
  });
}
