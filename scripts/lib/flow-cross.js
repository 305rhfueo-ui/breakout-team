'use strict';
// 실장 보고용 — "돈이 몰리는 업종 안에서 실제로 어느 종목이 강한가".
//
// 5팀 업종 판정(sector-flow)과 2팀 선정·3팀 추적을 교차시킨다.
// 새로 받는 데이터는 없고 이미 계산된 것들의 조인이다.
//
// ⚠️ 교차 결과가 비면 "이 업종에서 오늘 기준을 통과한 종목은 없습니다"라고 그대로 남긴다.
//    억지로 채우면 안 된다.

const { tickerStage } = require('./sector-flow');
const { num } = require('./util');

// 업종 하나를 종목 단위로 분해
function breakdown(ind, { picks, rowByTicker, activeSet, breakoutSet }) {
  const inIndustry = (p) => p.sector === ind.sector && p.industry === ind.industry;
  const mine = (picks || []).filter(inIndustry);
  return mine.map((p) => {
    const r = rowByTicker.get(p.ticker) || {};
    const up = num(r.Up_Count) ?? 0, dn = num(r.Down_Count) ?? 0;
    const upRatio = (up + dn) ? (up / (up + dn)) * 100 : null;
    const s = tickerStage({ d50: p.div50, d200: p.div200, cy: num(r.CY_Trend), upRatio, coverage: up + dn });
    const dropped = !activeSet.has(p.ticker);
    // ⚠️ '눌림 후보'인데 3팀이 이미 배제한 종목이 있다 (50일선 3일 연속 이탈).
    //    실적 기대가 살아 있어도 쿨라매기 규칙을 어기고 지금 사라는 뜻이 아니다.
    //    라벨에 그 사실을 붙여 오해를 막는다.
    const ko = (dropped && s.k === 'dip') ? '🎯 눌림 후보 (단, 추적 배제 — 재편입 대기)' : s.ko;
    const why = (dropped && s.k === 'dip')
      ? s.why + '. 다만 50일선을 3일 이상 연속 이탈해 추적에서 뺐습니다 — 규칙대로 재편입을 기다립니다'
      : s.why;
    return {
      ticker: p.ticker, name: p.nameKo || p.nameEn || null,
      d50: p.div50, d200: p.div200,
      cy: num(r.CY_Trend), ny: num(r.NY_Trend), upRatio, coverage: up + dn,
      tracking: dropped ? 'dropped' : 'active',
      breakout: breakoutSet.has(p.ticker),
      stage: s.k, stageKo: ko, why,
    };
  }).sort((a, b) => {
    // 지금 볼 만한 순: 초입 → 눌림 → 선도 → 관성 → 과열 → 이탈
    const order = { early: 0, dip: 1, lead: 2, early_weak: 3, lead_weak: 4, hot: 5, out: 6 };
    return (order[a.stage] ?? 9) - (order[b.stage] ?? 9);
  });
}

/**
 * @param {object[]} flow      team5.flow.industries
 * @param {object}   ctx       { picks, rowByTicker, team3, cap }
 */
function crossFlow(flow, { picks = [], rowByTicker = new Map(), team3 = null, cap = 4 } = {}) {
  if (!flow || !flow.length) return null;

  const activeSet = new Set(((team3 && team3.items) || []).filter((r) => r.status === 'active').map((r) => r.ticker));
  const droppedToday = ((team3 && team3.dropped_today) || []).map((d) => ({ ...d }));
  const breakoutSet = new Set(((team3 && team3.breakouts) || []).filter((b) => b.volumeConfirmed).map((b) => b.ticker));
  const ctx = { picks, rowByTicker, activeSet, breakoutSet };

  // 2팀이 실제로 종목을 뽑은 업종을 먼저 보여준다 — 뽑힌 종목이 없는 업종은
  // "강하다"고 말해봐야 사장님이 할 수 있는 게 없다.
  const hasPicks = (i) => picks.some((p) => p.sector === i.sector && p.industry === i.industry);

  // ① 돈이 들어오는 곳 — ⓐ2팀 종목 보유 ⓑ주도>유입>소수종목 ⓒFRANK 상승 큰 순
  const rankFlow = { leading: 0, inflow: 1, narrow: 2 };
  const inflow = flow.filter((i) => ['leading', 'inflow', 'narrow'].includes(i.flow))
    .sort((a, b) => (hasPicks(b) - hasPicks(a))
      || (rankFlow[a.flow] - rankFlow[b.flow])
      || ((b.frank25 ?? -999) - (a.frank25 ?? -999)))
    .slice(0, cap)
    .map((i) => ({ ...i, picks: breakdown(i, ctx) }));

  // ② 돈이 빠지는 곳 — 이격 수축이 큰 순
  const outflow = flow.filter((i) => i.flow === 'outflow')
    .sort((a, b) => (a.d200Delta ?? 0) - (b.d200Delta ?? 0))
    .slice(0, cap)
    .map((i) => {
      const p = breakdown(i, ctx);
      // 이 업종에서 오늘 3팀이 탈락시킨 종목 (판정이 일치하는지 보여주는 근거)
      const dropped = droppedToday.filter((d) => p.some((x) => x.ticker === d.ticker));
      return { ...i, picks: p, droppedToday: dropped };
    });

  // ③ 아직 안 온 곳 — 가격은 정체인데 기대가 오르는 곳
  const pending = flow.filter((i) => i.flow === 'pending' && i.coverage >= 50)
    .sort((a, b) => (b.cy ?? -999) - (a.cy ?? -999))
    .slice(0, cap)
    .map((i) => ({ ...i, picks: breakdown(i, ctx) }));

  // 오늘 3팀 탈락 종목이 '돈 빠지는 업종'과 얼마나 겹치는지 (팀 간 일치 근거)
  const outKeys = new Set(outflow.map((i) => `${i.sector}|${i.industry}`));
  const agree = droppedToday.filter((d) => {
    const p = picks.find((x) => x.ticker === d.ticker);
    return p && outKeys.has(`${p.sector}|${p.industry}`);
  });

  return {
    inflow, outflow, pending,
    agreement: { droppedTotal: droppedToday.length, inOutflowIndustries: agree.length, tickers: agree.map((d) => d.ticker) },
    breakoutsInInflow: [...breakoutSet].filter((t) => {
      const p = picks.find((x) => x.ticker === t);
      return p && inflow.some((i) => i.sector === p.sector && i.industry === p.industry);
    }),
  };
}

module.exports = { crossFlow, breakdown };
