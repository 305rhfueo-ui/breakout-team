'use strict';
// Congestion(횡보 수렴 → 돌파 → 리테스트 → 반등) 국면 판정.
// 근거: aiinvestmentworkbook.tistory.com/10, /11 (쿨라매기 break-out & EP)
//
// 목표 셋업: ~6개월 횡보 베이스 → 거래량 2배+ 저항 돌파 → 저항선까지 되돌림(거래량 고갈)
//           → 반등 시 매수. 돌파 시점 일봉은 150일선 위여야 한다.
//
// ⚠️ 애매하면 지어내지 않는다. 조건 미달이면 phase='none' 으로 두고
//    사용자에게는 '판정불가'로 표기한다.

const { round } = require('./util');
const { smaSeries, sma, contractionRatio } = require('./ta');

const DEFAULTS = {
  baseLookback: 126,   // ≈6개월 거래일
  minBaseBars: 60,
  maxRangePct: 35,     // 베이스 고저 폭 상한
  scanRecent: 60,      // 최근 60봉 안에서 돌파 탐색
  volMult: 2.0,        // 돌파 거래량 배수
  dryVolMult: 0.8,     // 리테스트 거래량 고갈 기준
  retestTolPct: 3,     // 저항선 ±3% 를 리테스트 존으로 본다
  failBars: 3,         // 돌파 후 저항 아래 연속 N봉이면 실패
};

const PHASE_KO = {
  base: '6개월 횡보 베이스 형성 중',
  breakout: '거래량 동반 저항 돌파',
  retest: '돌파 후 저항선 리테스트',
  bounce_trigger: '🎯 리테스트 반등 — 매수 트리거',
  extended: '과확장 (추격 금지)',
  failed: '돌파 실패 (저항 아래 재이탈)',
  none: '해당 패턴 없음',
};

function pctRange(hi, lo) { return lo > 0 ? ((hi - lo) / lo) * 100 : null; }

function windowStats(bars, from, to) {
  const w = bars.slice(from, to);
  if (!w.length) return null;
  let hi = -Infinity, lo = Infinity;
  for (const b of w) { if (b.h > hi) hi = b.h; if (b.l < lo) lo = b.l; }
  return { hi, lo, bars: w.length, rangePct: pctRange(hi, lo), lastClose: w[w.length - 1].c };
}

function detectCongestion(bars, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const n = bars ? bars.length : 0;
  if (n < o.minBaseBars + 10) {
    return { ok: false, phase: 'none', phaseKo: '봉 부족 — 판정불가', bars: n };
  }

  const avgVol = smaSeries(bars, 20, 'v');
  const ma150 = smaSeries(bars, 150);

  // ── 1) 돌파 탐색: 최근 scanRecent 봉을 훑으며 "베이스를 거래량 동반해 뚫은" 가장 최근 봉 ──
  let brk = null;
  const scanFrom = Math.max(o.minBaseBars, n - o.scanRecent);
  for (let i = n - 1; i >= scanFrom; i--) {
    const baseFrom = Math.max(0, i - o.baseLookback);
    const base = windowStats(bars, baseFrom, i);
    if (!base || base.bars < o.minBaseBars) continue;
    if (base.rangePct === null || base.rangePct > o.maxRangePct) continue;
    // 베이스 마지막 종가가 바닥권이면 '횡보'가 아니라 '하락 후 반등'이다 → 배제
    if (base.lastClose < base.lo + 0.15 * (base.hi - base.lo)) continue;
    const bar = bars[i];
    const av = avgVol[i];
    if (!(bar.c > base.hi)) continue;
    if (!(av && bar.v >= o.volMult * av)) continue;
    brk = { idx: i, base, volX: round(bar.v / av), date: iso(bar.t) };
    break;   // 가장 최근 돌파
  }

  // ── 2) 돌파가 없으면: 지금 베이스를 만드는 중인가? ──
  if (!brk) {
    const base = windowStats(bars, Math.max(0, n - o.baseLookback), n);
    const con = contractionRatio(bars, 10);
    const last = bars[n - 1];
    if (base && base.bars >= o.minBaseBars && base.rangePct !== null && base.rangePct <= o.maxRangePct && con !== null && con < 1) {
      return {
        ok: true, phase: 'base', phaseKo: PHASE_KO.base,
        baseHigh: round(base.hi), baseLow: round(base.lo), baseBars: base.bars,
        baseMonths: round(base.bars / 21, 1),
        rangePct: round(base.rangePct), contraction: round(con),
        pivot: round(base.hi),
        distToPivotPct: round(((last.c - base.hi) / base.hi) * 100),
        aboveMa150AtNow: ma150[n - 1] != null ? last.c > ma150[n - 1] : null,
        buyTrigger: { price: round(base.hi), note: `$${round(base.hi)}(저항선) 거래량 동반 돌파 시 진입 검토` },
        score: scoreOf({ rangePct: base.rangePct, baseBars: base.bars }),
      };
    }
    return { ok: true, phase: 'none', phaseKo: PHASE_KO.none, bars: n, rangePct: base ? round(base.rangePct) : null };
  }

  // ── 3) 돌파 이후 전개 ──
  const pivot = brk.base.hi;
  const post = bars.slice(brk.idx + 1);
  const last = bars[n - 1];
  const adr = opts.adr || null;

  // 돌파 시점 150일선 위였는지 (전략 요구조건)
  const ma150AtBreak = ma150[brk.idx];
  const aboveMa150AtBreak = ma150AtBreak != null ? bars[brk.idx].c > ma150AtBreak : null;

  const out = {
    ok: true,
    baseHigh: round(pivot), baseLow: round(brk.base.lo), baseBars: brk.base.bars,
    baseMonths: round(brk.base.bars / 21, 1),
    rangePct: round(brk.base.rangePct),
    breakoutDate: brk.date, breakoutVolX: brk.volX,
    barsSinceBreakout: post.length,
    aboveMa150AtBreak,
    ma150AtBreak: round(ma150AtBreak),
    pivot: round(pivot),
    distToPivotPct: round(((last.c - pivot) / pivot) * 100),
  };

  // 실패: 돌파 후 저항 아래로 연속 failBars 봉
  let belowRun = 0;
  for (let i = post.length - 1; i >= 0; i--) { if (post[i].c < pivot) belowRun++; else break; }
  if (belowRun >= o.failBars) {
    return { ...out, phase: 'failed', phaseKo: PHASE_KO.failed, belowRun, score: 0 };
  }

  // 리테스트: 저항선 ±tol 안으로 되돌아온 첫 봉
  let retestIdx = null;
  for (let i = 0; i < post.length; i++) {
    if (Math.abs(post[i].l - pivot) / pivot * 100 <= o.retestTolPct) { retestIdx = i; break; }
  }
  let retest = null;
  if (retestIdx !== null) {
    const gi = brk.idx + 1 + retestIdx;
    const from = Math.max(0, gi - 2);
    const win = bars.slice(from, gi + 1);
    const avgAt = avgVol[gi];
    const vAvg = win.reduce((a, b) => a + b.v, 0) / win.length;
    retest = {
      date: iso(post[retestIdx].t),
      volRatio: avgAt ? round(vAvg / avgAt) : null,
      dryUp: avgAt ? (vAvg / avgAt) <= o.dryVolMult : null,
    };
    out.retestDate = retest.date;
    out.retestVolRatio = retest.volRatio;
    out.dryUp = retest.dryUp;
  }

  const score = scoreOf({
    rangePct: brk.base.rangePct, baseBars: brk.base.bars,
    volX: brk.volX, dryUp: retest && retest.dryUp,
  });

  // 과확장: 돌파 후 3×ADR 초과 → 추격 금지
  if (adr && out.distToPivotPct !== null && out.distToPivotPct > 3 * adr) {
    return { ...out, phase: 'extended', phaseKo: PHASE_KO.extended, score,
      buyTrigger: { price: round(pivot), note: `과확장(피봇 +${out.distToPivotPct}% > 3×ADR ${round(3 * adr)}%) — 되돌림 대기` } };
  }

  // 반등 트리거: 리테스트 후 마지막 봉이 리테스트 봉 고가를 넘고 거래량이 평균 이상
  if (retestIdx !== null && post.length > retestIdx + 1) {
    const rBar = post[retestIdx];
    const avgAtLast = avgVol[n - 1];
    if (last.c > rBar.h && avgAtLast && last.v > avgAtLast) {
      return { ...out, phase: 'bounce_trigger', phaseKo: PHASE_KO.bounce_trigger, score,
        buyTrigger: { price: round(last.c), note: `리테스트 저점 $${round(rBar.l)} 반등 + 거래량 회복 — 매수 트리거` } };
    }
  }

  if (retestIdx !== null && Math.abs(last.c - pivot) / pivot * 100 <= o.retestTolPct) {
    return { ...out, phase: 'retest', phaseKo: PHASE_KO.retest + (retest && retest.dryUp ? ' (거래량 고갈 ✓)' : ''), score,
      buyTrigger: { price: round(pivot), note: `저항선 $${round(pivot)} 지지 확인 후 반등 시 진입` } };
  }

  return { ...out, phase: 'breakout', phaseKo: PHASE_KO.breakout, score,
    buyTrigger: { price: round(pivot), note: `되돌림 시 $${round(pivot)} 지지 확인 후 진입` } };
}

function scoreOf({ rangePct, baseBars, volX, dryUp }) {
  let s = 0;
  if (rangePct != null && rangePct <= 25) s += 30;
  if (volX != null && volX >= 2.5) s += 25;
  if (dryUp) s += 25;
  if (baseBars != null && baseBars >= 90) s += 20;
  return s;
}

function iso(ms) { return new Date(ms).toISOString().slice(0, 10); }

module.exports = { detectCongestion, PHASE_KO, DEFAULTS };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchRsData } = require('../fetch-rs-data');
  const { fetchMany } = require('./bars');
  const { num } = require('./util');

  (async () => {
    const args = process.argv.slice(2);
    const scan = args.includes('--scan');
    const { rows } = await fetchRsData();

    let tickers, adrMap = {};
    if (scan) {
      // VOL_X ≥ 2.0 또는 Vol_Surge_Wk ≥ 2.0 인 4팀 대상으로 국면 히스토그램
      const hit = rows.filter((r) => (num(r.VOL_X) >= 2.0) || (num(r.Vol_Surge_Wk) >= 2.0));
      tickers = hit.map((r) => r.Ticker).slice(0, 80);
      for (const r of hit) adrMap[r.Ticker] = num(r.ADR_20D);
      console.log(`\nVOL_X≥2.0 또는 주간거래량≥2.0배: ${hit.length}종목 → 상위 ${tickers.length}개 스캔`);
    } else {
      tickers = args.filter((a) => !a.startsWith('--'));
      if (!tickers.length) tickers = ['NVDA', 'MU', 'ZBRA', 'AEHR'];
      for (const r of rows) if (tickers.includes(r.Ticker)) adrMap[r.Ticker] = num(r.ADR_20D);
    }

    const { results } = await fetchMany(tickers, { range: '2y', concurrency: 5, label: 'congestion 스캔' });
    const hist = {};
    const detail = [];
    for (const t of tickers) {
      const r = results.get(t);
      if (!r || !r.ok) { hist['fetch_fail'] = (hist['fetch_fail'] || 0) + 1; continue; }
      const c = detectCongestion(r.bars, { adr: adrMap[t] });
      hist[c.phase] = (hist[c.phase] || 0) + 1;
      detail.push({ t, c });
    }

    console.log('\n════════ 국면 히스토그램 ════════');
    const total = Object.values(hist).reduce((a, b) => a + b, 0);
    for (const [k, v] of Object.entries(hist).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${String(k).padEnd(16)} ${String(v).padStart(3)}  ${'█'.repeat(Math.round(v / total * 40))} ${(v / total * 100).toFixed(0)}%`);
    }
    console.log('  ※ 한 버킷이 100% 면 파라미터 버그 신호');

    const interesting = detail.filter((d) => ['bounce_trigger', 'retest', 'breakout', 'base'].includes(d.c.phase))
      .sort((a, b) => (b.c.score || 0) - (a.c.score || 0)).slice(0, 12);
    if (interesting.length) {
      console.log('\n════════ 주목 종목 (score 순) ════════');
      for (const { t, c } of interesting) {
        console.log(`  ${t.padEnd(7)} [${String(c.phase).padEnd(15)}] score ${String(c.score).padStart(3)} · 횡보 ${c.baseMonths ?? '—'}개월 · 폭 ${c.rangePct ?? '—'}%` +
          (c.breakoutVolX ? ` · 돌파거래량 ${c.breakoutVolX}배(${c.breakoutDate})` : '') +
          (c.aboveMa150AtBreak === false ? ' · ⚠️돌파시 150일선 아래' : '') +
          (c.dryUp ? ' · 리테스트 거래량고갈✓' : ''));
        if (c.buyTrigger) console.log(`          → ${c.buyTrigger.note}`);
      }
    }
  })();
}
