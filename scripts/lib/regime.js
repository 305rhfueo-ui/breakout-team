'use strict';
// 1팀 시장환경 — QQQ 10/20일선 쿨라매기 판정.
// 근거: aiinvestmentworkbook.tistory.com/10 Stage 1(시장 필터)
//   · 10일선이 20일선 위 + 둘 다 우상향
//   · 골든크로스 약 1주 뒤가 통계적 최적 진입
//   · 10일선이 20일선 아래로 깨지면 공격적으로 이탈

const { round } = require('./util');
const { smaSeries, maSlope } = require('./ta');

const SLOPE_UP = 0.15;    // 5봉 기울기 %

function crossScan(s10, s20, maxBack = 120) {
  const n = Math.min(s10.length, s20.length);
  let golden = null, death = null;
  for (let i = n - 1; i >= 1 && i >= n - maxBack; i--) {
    if (s10[i] == null || s20[i] == null || s10[i - 1] == null || s20[i - 1] == null) continue;
    const nowAbove = s10[i] > s20[i];
    const prevAbove = s10[i - 1] > s20[i - 1];
    if (golden === null && nowAbove && !prevAbove) golden = i;
    if (death === null && !nowAbove && prevAbove) death = i;
    if (golden !== null && death !== null) break;
  }
  return { golden, death };
}

function qullamaggieRegime(bars, opts = {}) {
  const lookback = opts.slopeLookback || 5;
  if (!bars || bars.length < 60) {
    return { ok: false, verdict: 'unknown', ko: 'QQQ 봉 부족 — 판정불가' };
  }
  const n = bars.length;
  const s10 = smaSeries(bars, 10);
  const s20 = smaSeries(bars, 20);
  const s50 = smaSeries(bars, 50);
  const price = bars[n - 1].c;
  const ma10 = s10[n - 1], ma20 = s20[n - 1], ma50 = s50[n - 1];
  if (ma10 == null || ma20 == null) return { ok: false, verdict: 'unknown', ko: 'MA 계산 불가' };

  const sl10 = maSlope(bars, 10, lookback);
  const sl20 = maSlope(bars, 20, lookback);
  const above = ma10 > ma20;
  const up10 = sl10.ok && sl10.pct > SLOPE_UP;
  const up20 = sl20.ok && sl20.pct > SLOPE_UP;

  const { golden, death } = crossScan(s10, s20);
  const dSinceGolden = golden === null ? null : (n - 1 - golden);
  const dSinceDeath = death === null ? null : (n - 1 - death);
  const dateAt = (i) => i === null ? null : new Date(bars[i].t).toISOString().slice(0, 10);

  const base = {
    ok: true,
    price: round(price), ma10: round(ma10), ma20: round(ma20), ma50: round(ma50),
    ma10AboveMa20: above,
    slope10Pct: sl10.ok ? sl10.pct : null,
    slope20Pct: sl20.ok ? sl20.pct : null,
    slope10Up: up10, slope20Up: up20,
    goldenCrossDate: dateAt(golden), daysSinceGoldenCross: dSinceGolden,
    deathCrossDate: dateAt(death), daysSinceDeathCross: dSinceDeath,
    priceAboveAll: ma50 != null ? (price > ma10 && price > ma20 && price > ma50) : (price > ma10 && price > ma20),
    sweetSpot: dSinceGolden !== null && dSinceGolden >= 3 && dSinceGolden <= 15,
    lastDate: new Date(bars[n - 1].t).toISOString().slice(0, 10),
  };

  // ── 판정 (순서대로 평가) ──
  let verdict, ko, actions;

  if (!above) {
    // 역배열. 다만 주가가 전부 위에 있고 10MA 가 급하게 올라오면 '전환 임박'으로 구분한다.
    const turning = base.priceAboveAll && up10;
    if (turning) {
      verdict = 'yellow';
      ko = `🟡 10MA가 아직 20MA 아래(D+${dSinceDeath ?? '?'})지만 주가가 3개 이동평균선 위로 올라섰고 10MA가 상승 전환(${base.slope10Pct}%) — 골든크로스 임박 관찰 구간`;
      actions = ['신규 진입은 골든크로스 확인 후', '이미 보유분은 유지하되 손절 상향', '크로스 발생 시 D+3~15 구간을 노릴 것'];
    } else {
      verdict = 'red';
      ko = `🔴 10MA가 20MA 아래(데드크로스 ${base.deathCrossDate ?? '?'}, D+${dSinceDeath ?? '?'}) — 신규 진입 중단, 보유분 청산 검토`;
      actions = ['신규 매수 전면 보류', '보유 종목 손절 라인 점검', '현금 비중 확대'];
    }
  } else if (up10 && up20 && base.sweetSpot) {
    verdict = 'green';
    ko = `🟢 골든크로스 D+${dSinceGolden} · 10MA·20MA 동반 상승(${base.slope10Pct}% / ${base.slope20Pct}%) — 쿨라매기 최적 진입 구간`;
    actions = ['적극적으로 셋업 진입', '포지션 사이징 정상', '돌파 종목 우선'];
  } else if (up10 && up20) {
    verdict = 'green';
    ko = `🟢 정배열 · 10MA·20MA 동반 상승(${base.slope10Pct}% / ${base.slope20Pct}%)${dSinceGolden !== null ? ` · 골든크로스 D+${dSinceGolden}(성숙 구간)` : ''} — 진입 가능하나 신규는 선별적으로`;
    actions = ['선별적 진입', '과확장 종목 회피', '리테스트 셋업 선호'];
  } else if (dSinceGolden !== null && dSinceGolden < 3) {
    verdict = 'yellow';
    ko = `🟡 골든크로스 직후(D+${dSinceGolden}) — 통계적으로 약 1주 뒤가 최적. 지금은 관찰`;
    actions = ['관찰 우선', 'D+3~15 진입 준비', '후보군 정리'];
  } else {
    verdict = 'yellow';
    ko = `🟡 정배열이나 기울기 둔화(10MA ${base.slope10Pct}% / 20MA ${base.slope20Pct}%) — 진입 강도 축소`;
    actions = ['포지션 크기 축소', '확실한 셋업만', '손절 타이트하게'];
  }

  return { ...base, verdict, ko, actions };
}

module.exports = { qullamaggieRegime, crossScan };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchBarsCached } = require('./bars');
  const t = process.argv[2] || 'QQQ';
  fetchBarsCached(t, { range: '6mo' }).then((r) => {
    if (!r.ok) { console.log(`${t}: 봉 없음`); return; }
    const g = qullamaggieRegime(r.bars);
    console.log(`\n════════ ${t} 쿨라매기 시장환경 판정 ════════`);
    console.log(`기준일   ${g.lastDate}   종가 $${g.price}`);
    console.log(`MA       10일 ${g.ma10}  ·  20일 ${g.ma20}  ·  50일 ${g.ma50}`);
    console.log(`배열     10MA ${g.ma10AboveMa20 ? '>' : '<'} 20MA   주가가 3선 위: ${g.priceAboveAll ? 'YES' : 'NO'}`);
    console.log(`기울기   10MA ${g.slope10Pct}% (${g.slope10Up ? '상승' : '둔화/하락'})  ·  20MA ${g.slope20Pct}% (${g.slope20Up ? '상승' : '둔화/하락'})`);
    console.log(`크로스   골든 ${g.goldenCrossDate || '—'} (D+${g.daysSinceGoldenCross ?? '—'})  ·  데드 ${g.deathCrossDate || '—'} (D+${g.daysSinceDeathCross ?? '—'})`);
    console.log(`\n${g.ko}`);
    console.log('대응:');
    for (const a of g.actions) console.log(`  · ${a}`);
  });
}
