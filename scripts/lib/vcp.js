'use strict';
// "오늘 눈으로 봐야 할 종목" 점수 — 변동성 축소 + 거래량 고갈 + 저항 근접.
//
// 목적: 사용자가 매일 수십 종목 차트를 다 볼 수는 없으니, 시스템이 수치로
//       "지금 수렴이 진행 중이라 눈으로 확인할 가치가 있는" 종목만 골라 상기시킨다.
// 최종 판단은 사용자의 육안 확인이다. 여기 점수는 보조 자료다.

const { num, round } = require('./util');
const { contractionRatio, sma, analyze } = require('./ta');

// 가중치 — 전부 opts 로 조정 가능
const W = {
  contract10: 2,   // 최근 10봉 진폭이 직전 10봉 대비 0.8 미만
  contract5: 1,    // 최근 5봉이 더 강하게 수축
  volDry: 2,       // 5일 평균 거래량 / 20일 평균 ≤ 0.7
  bbSqueeze: 2,    // BBWTHD 가 60일 최저(BBWTHD_LOW) 근처
  nearResist: 2,   // 저항선 -5% ~ 0% 근접
  tightCloses: 1,  // 최근 10 종가 변동계수 ≤ 3%
  high52: 1,       // 52주 고점 대비 90% 이상
};

const EYE_THRESHOLD = 5;

function stdev(arr) {
  if (arr.length < 2) return 0;
  const m = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.sqrt(arr.reduce((a, b) => a + (b - m) * (b - m), 0) / (arr.length - 1));
}

// bars: 야후 일봉, row: RS 사이트 행(BBWTHD/BBWTHD_LOW/High_52W_Pct 사용)
function eyeCheckScore(bars, row = {}, opts = {}) {
  const w = { ...W, ...(opts.weights || {}) };
  const flags = [];
  const reasons = [];
  let score = 0;

  if (!bars || bars.length < 30) {
    return { ok: false, score: 0, eyeCheck: false, reasons: ['봉 부족 — 판정불가'], flags: [] };
  }

  const a = analyze(bars);
  const last = bars[bars.length - 1];

  // 1) 변동성 수축
  const c10 = contractionRatio(bars, 10);
  if (c10 !== null && c10 < 0.8) {
    score += w.contract10; flags.push('contract10');
    reasons.push(`10봉 진폭이 직전 대비 ${round(c10)}배로 수축`);
  }
  const c5 = contractionRatio(bars, 5);
  if (c5 !== null && c5 < 0.7) {
    score += w.contract5; flags.push('contract5');
    reasons.push(`최근 5봉 진폭 ${round(c5)}배 — 수축 가속`);
  }

  // 2) 거래량 고갈
  const v5 = sma(bars, 5, 'v');
  const v20 = sma(bars, 20, 'v');
  const dryRatio = (v5 && v20) ? v5 / v20 : null;
  if (dryRatio !== null && dryRatio <= 0.7) {
    score += w.volDry; flags.push('volDry');
    reasons.push(`거래량 5일/20일 ${round(dryRatio)}배 — 매물 고갈`);
  }

  // 3) 볼린저 스퀴즈 (RS 사이트 값 사용)
  const bb = num(row.BBWTHD), bbLow = num(row.BBWTHD_LOW);
  if (bb !== null && bbLow !== null && bbLow > 0 && bb <= bbLow * 1.3) {
    score += w.bbSqueeze; flags.push('bbSqueeze');
    reasons.push(`볼밴 폭 ${bb} (60일 최저 ${bbLow} 근처) — 에너지 응축`);
  }

  // 4) 저항 근접
  if (a.resistance) {
    const distPct = ((last.c - a.resistance) / a.resistance) * 100;
    if (distPct >= -5 && distPct <= 0) {
      score += w.nearResist; flags.push('nearResist');
      reasons.push(`저항 $${a.resistance} 대비 ${round(distPct)}% — 돌파 임박권`);
    }
  }

  // 5) 타이트한 종가
  const closes = bars.slice(-10).map((b) => b.c);
  const mean = closes.reduce((x, y) => x + y, 0) / closes.length;
  const cv = mean > 0 ? (stdev(closes) / mean) * 100 : null;
  if (cv !== null && cv <= 3) {
    score += w.tightCloses; flags.push('tightCloses');
    reasons.push(`최근 10일 종가 변동 ${round(cv)}% — 타이트`);
  }

  // 6) 52주 고점권
  const h52 = num(row.High_52W_Pct);
  if (h52 !== null && h52 >= 90) {
    score += w.high52; flags.push('high52');
    reasons.push(`52주 고점 대비 ${h52}%`);
  }

  return {
    ok: true,
    score,
    eyeCheck: score >= (opts.threshold || EYE_THRESHOLD),
    flags,
    reasons,
    metrics: {
      contraction10: round(c10), contraction5: round(c5),
      volDryRatio: round(dryRatio), bbwthd: bb, bbwthdLow: bbLow,
      resistance: a.resistance, distToResistPct: a.resistance ? round(((last.c - a.resistance) / a.resistance) * 100) : null,
      closeCv: round(cv), high52: h52,
    },
  };
}

module.exports = { eyeCheckScore, EYE_THRESHOLD, W };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchRsData } = require('../fetch-rs-data');
  const { selectBreakoutCandidates } = require('./screen');
  const { fetchMany } = require('./bars');

  (async () => {
    const { rows } = await fetchRsData();
    const { qualified } = selectBreakoutCandidates(rows);
    const byTicker = new Map(rows.map((r) => [r.Ticker, r]));
    const tickers = qualified.map((q) => q.ticker);
    const { results } = await fetchMany(tickers, { range: '1y', concurrency: 5, label: 'eyeCheck 스캔' });

    const scored = [];
    for (const q of qualified) {
      const r = results.get(q.ticker);
      if (!r || !r.ok) continue;
      const s = eyeCheckScore(r.bars, byTicker.get(q.ticker) || {});
      if (s.ok) scored.push({ ticker: q.ticker, sector: q.sector, ...s });
    }
    scored.sort((a, b) => b.score - a.score);

    const hits = scored.filter((s) => s.eyeCheck);
    console.log(`\n════════ 👁️ 오늘 눈으로 봐야 할 종목 (score ≥ ${EYE_THRESHOLD}) ════════`);
    console.log(`후보 ${scored.length}종목 중 ${hits.length}종목 선정\n`);
    for (const s of hits.slice(0, 10)) {
      console.log(`  ${s.ticker.padEnd(7)} score ${String(s.score).padStart(2)}  [${s.flags.join(', ')}]`);
      for (const r of s.reasons) console.log(`            · ${r}`);
    }
    if (!hits.length) {
      console.log('  오늘은 수렴 조건을 만족하는 종목이 없습니다.');
      console.log('\n  참고 — 점수 상위 5:');
      for (const s of scored.slice(0, 5)) console.log(`  ${s.ticker.padEnd(7)} score ${s.score}  [${s.flags.join(', ') || '해당 없음'}]`);
    }
    const dist = {};
    for (const s of scored) dist[s.score] = (dist[s.score] || 0) + 1;
    console.log('\n점수 분포:', JSON.stringify(dist));
  })();
}
