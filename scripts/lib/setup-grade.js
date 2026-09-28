'use strict';
// 6팀 — 쿨라매기 Breakout 셋업 등급과 매매 계획. 일봉만 쓴다 (LLM 없음).
//
// 쿨라매기의 진입은 차트 "모양 판정"이 아니라 잴 수 있는 숫자다:
//   큰 선행 상승 → 고점 아래에서 2~12주 횡보(저점 상승·진폭 수축·10/20일선 위) → 그 고점(피벗) 돌파.
// 여기서는 그 숫자들을 재고, 몇 개를 충족했는지로 등급을 매긴다. 문턱은 전부 config/rules.json.
//
// ⚠️ 미래 봉을 보지 않는다. 넘겨받은 bars 의 마지막 봉이 "오늘"이다.
//    백테스트는 날짜 t 마다 bars.slice(0, t + 1) 을 넘긴다 — 그래서 여기 있는 모든 계산은
//    뒤쪽 봉이 바뀌어도 결과가 같아야 한다 (tests/lib/setup-grade.test.js 가 검사).
// ⚠️ 피벗은 확정 스윙 고점이 아니라 "구간 최고가"다. swingHighs 는 뒤로 5봉이 지나야 확정돼 늦다.

const { round } = require('./util');
const { sma, swingLows, contractionRatio, maSlope } = require('./ta');

// ADR% = 최근 20봉 (고가/저가 − 1) 평균. 사이트 ADR_20D 와 같은 정의 — 백테스트와 값이 같도록 항상 봉에서 잰다.
function adrPct(bars, n = 20) {
  if (!bars || bars.length < n) return null;
  let s = 0;
  for (const b of bars.slice(-n)) { if (!(b.l > 0)) return null; s += (b.h / b.l - 1) * 100; }
  return s / n;
}

function dollarVol20(bars) {
  if (!bars || bars.length < 20) return null;
  let s = 0;
  for (const b of bars.slice(-20)) s += b.amt > 0 ? b.amt : (b.c || 0) * (b.v || 0);
  return s / 20;
}

function peakIn(bars, from, to) {
  let idx = from;
  for (let i = from + 1; i <= to; i++) if (bars[i].h > bars[idx].h) idx = i;
  return idx;
}

// 베이스 찾기.
//  pre  — 최근 lookback 봉의 최고가가 minBaseBars 봉 이상 전에 찍혔다 = 그 아래에서 쉬는 중
//  post — 최고가가 최근에 찍혔고, 며칠 전까지는 베이스였다 = 이미 피벗을 종가로 넘었다
//  none — 쉬지 않고 오르는 중이거나 봉이 부족
function findBase(bars, S) {
  const n = bars.length;
  if (n < S.minBaseBars + 25) return { state: 'none', why: '봉 부족' };
  const pk = peakIn(bars, Math.max(0, n - S.lookbackBars), n - 1);
  if (n - 1 - pk >= S.minBaseBars) return { state: 'pre', peakIdx: pk, endIdx: n - 1, pivot: bars[pk].h };
  for (let d = 1; d <= S.postMaxBars; d++) {
    const end = n - 1 - d;
    if (end < S.minBaseBars) break;
    const pk2 = peakIn(bars, Math.max(0, end - S.lookbackBars + 1), end);
    if (end - pk2 < S.minBaseBars) continue;
    if (bars[end + 1].c > bars[pk2].h) {
      return { state: 'post', peakIdx: pk2, endIdx: end, pivot: bars[pk2].h, breakIdx: end + 1, barsSinceBreak: n - 1 - (end + 1) };
    }
  }
  return { state: 'none', why: '쉬는 구간 없음' };
}

const isoOf = (b) => new Date(b.t).toISOString().slice(0, 10);
const sign = (x, d = 1) => (x == null ? '—' : `${x > 0 ? '+' : ''}${round(x, d)}`);

// bars: 일봉(오름차순). opts.rules = config/rules.json. opts.riskPct = 계좌 대비 종목당 리스크(%).
// opts.regime = 'green'|'yellow'|'red'. 금액·수량은 다루지 않는다 — 비중(%)까지만.
function gradeSetup(bars, opts = {}) {
  const rules = opts.rules;
  if (!rules) throw new Error('gradeSetup: rules 가 필요합니다');
  const S = rules.setup, R = rules.risk;
  if (!bars || bars.length < 60) return { ok: false, reason: `봉 ${bars ? bars.length : 0}개 < 60` };

  const base = findBase(bars, S);
  const n = bars.length;
  const last = bars[n - 1];
  const adrNow = adrPct(bars);
  if (adrNow == null) return { ok: false, reason: 'ADR 계산 불가' };
  const adrUsdNow = last.c * adrNow / 100;
  const ma10Now = sma(bars, 10);
  const extensionAdr = ma10Now != null && adrUsdNow > 0 ? (last.c - ma10Now) / adrUsdNow : null;
  const dv = dollarVol20(bars);
  const liquid = dv != null && dv >= R.minDollarVol20;

  // EP 재료 — 마지막 봉 기준 (4팀 후보 표시용. 진입 판단에는 아직 쓰지 않는다)
  const prev = bars[n - 2];
  const max60v = Math.max(...bars.slice(-61, -1).map((b) => b.v || 0));
  const ago126 = bars[n - 127];
  const ep = {
    gapPct: prev && prev.c > 0 ? round((last.o / prev.c - 1) * 100) : null,
    volVs60dMax: max60v > 0 ? round((last.v || 0) / max60v) : null,
    ret6mBeforePct: ago126 && prev ? round((prev.c / ago126.c - 1) * 100) : null,
  };

  const common = {
    ok: true, asOf: isoOf(last), price: round(last.c), adrPct: round(adrNow), extensionAdr: round(extensionAdr),
    chase: extensionAdr != null && extensionAdr >= R.maxExtensionAdr,
    dollarVol20: dv == null ? null : Math.round(dv), liquid, ep,
    ma10: round(ma10Now),   // 밤 트리거가 이격을 다시 잴 때 쓴다
  };
  if (base.state === 'none') return { ...common, state: 'none', grade: null, reasons: [base.why], watch: false };

  // 베이스 품질은 베이스가 끝난 시점(pre = 오늘, post = 돌파 전날)의 봉으로 잰다
  const sub = bars.slice(0, base.endIdx + 1);
  const end = sub[sub.length - 1];
  const adrEnd = adrPct(sub);
  const adrUsd = end.c * adrEnd / 100;
  const pivot = base.pivot;
  // 베이스의 시작 — 고점을 찍은 봉이 아니라 "피벗 아래 상자 안에 머문" 첫 봉.
  //   좁은 범위에서 고가를 조금씩 높이면 고점 봉이 계속 뒤로 밀려 베이스가 짧게 세어진다
  //   (2026-09-28 HNGE: 그림에서는 4주를 쉬었는데 마지막 고가 이후 6봉만 세었다).
  //   상자 = 고가가 피벗 이하이고 종가가 피벗 − boxAdr × ADR 이상인 연속 구간.
  let boxStart = base.peakIdx;
  const floor = pivot - (S.boxAdr || 0) * adrUsd;
  if (S.boxAdr) {
    const lim = Math.max(0, base.endIdx - S.maxBaseBars);
    for (let i = base.peakIdx - 1; i >= lim; i--) { if (sub[i].h > pivot * 1.0001 || sub[i].c < floor) break; boxStart = i; }
  }
  const baseBars = base.endIdx - boxStart;
  const inBase = sub.slice(boxStart);
  const baseLow = Math.min(...inBase.map((b) => b.l));
  const depthPct = (pivot - baseLow) / pivot * 100;
  const before = sub.slice(Math.max(0, boxStart - S.priorMoveBars), boxStart + 1);
  const lowBefore = Math.min(...before.map((b) => b.l));
  const priorMovePct = lowBefore > 0 ? (pivot / lowBefore - 1) * 100 : null;

  // 저점 상승 — 베이스 안의 스윙 저점이 끝에서부터 몇 번 연속 높아졌나
  const lows = swingLows(sub, 3).filter((s) => s.idx > boxStart);
  let higherLows = 0;
  for (let i = lows.length - 1; i >= 1; i--) { if (lows[i].price > lows[i - 1].price) higherLows++; else break; }
  if (lows.length < 2 && inBase.length >= 6) {
    const half = Math.floor(inBase.length / 2);
    const lo1 = Math.min(...inBase.slice(0, half).map((b) => b.l));
    const lo2 = Math.min(...inBase.slice(half).map((b) => b.l));
    higherLows = lo2 > lo1 ? 1 : 0;
  }

  const contraction = contractionRatio(sub, 10);
  const c10 = sub.slice(-10).map((b) => b.c);
  const closeRange10Adr = adrUsd > 0 ? (Math.max(...c10) - Math.min(...c10)) / adrUsd : null;
  const ma10 = sma(sub, 10), ma20 = sma(sub, 20);
  const surf10 = ma10 != null && adrUsd > 0 ? (end.c - ma10) / adrUsd : null;
  const surf20 = ma20 != null && adrUsd > 0 ? (end.c - ma20) / adrUsd : null;
  const sl20 = maSlope(sub, 20, 5);
  const slope20 = sl20.ok ? sl20.pct : null;

  const checks = [
    { key: 'priorMove', ok: priorMovePct != null && priorMovePct >= S.priorMoveMinPct, ko: `선행 상승 ${sign(priorMovePct, 0)}%` },
    // 공식 기준은 2주~2개월. 그보다 짧은 쉼(5~9봉)도 후보에는 넣되 이 검사에서 감점한다 — 짧은 베이스의 성적을 따로 세기 위해서다
    { key: 'baseLen', ok: baseBars >= (S.officialMinBaseBars || S.minBaseBars) && baseBars <= S.maxBaseBars, ko: `베이스 ${round(baseBars / 5, 1)}주` },
    { key: 'depth', ok: depthPct <= S.maxDepthPct, ko: `깊이 ${round(depthPct, 1)}%` },
    { key: 'higherLows', ok: higherLows >= S.minHigherLows, ko: `저점 상승 ${higherLows}회` },
    { key: 'tight', ok: (contraction != null && contraction <= S.maxContraction) || (closeRange10Adr != null && closeRange10Adr <= S.maxCloseRange10Adr),
      ko: `진폭 ${contraction == null ? '—' : round(contraction)}배 · 10일 종가폭 ${round(closeRange10Adr, 1)} ADR` },
    { key: 'surf', ok: ma20 != null && end.c > ma20 && ((surf10 != null && Math.abs(surf10) <= S.surfMaxAdr) || (surf20 != null && Math.abs(surf20) <= S.surfMaxAdr)),
      ko: `10일선 ${sign(surf10)} ADR · 20일선 ${sign(surf20)} ADR` },
    { key: 'slope', ok: slope20 != null && slope20 > 0, ko: `20일선 기울기 ${sign(slope20, 2)}%` },
  ];
  const fails = checks.filter((c) => !c.ok);
  const grade = fails.length === 0 ? 'A' : fails.length === 1 ? 'B' : 'C';

  // 매매 계획 — 예비 손절은 피벗 − stopAdr × ADR. 밤에 실제로 살 때는 당일 저가로 바뀐다(minStopAdr~stopAdr 사이로 제한).
  //   ⚠️ 최근 스윙 저점을 손절로 쓰지 않는다. 백테스트(2026-09-28)에서 저점이 잘 올라온 A등급일수록 스윙 저점이
  //      피벗에 붙어 손절이 0.5 ADR 까지 좁아졌고 5건 중 4건이 진입 당일 손절됐다.
  //   ⚠️ 손절이 너무 가까우면 수량도 폭발한다 (0.5% 리스크 ÷ 0.3% 거리 = 계좌의 167%).
  const lastSwingLow = lows.length ? lows[lows.length - 1].price : baseLow;
  const stop = pivot - Math.max(R.stopAdr, R.minStopAdr) * adrUsd;
  const riskPerSharePct = (pivot - stop) / pivot * 100;
  const riskAccountPct = (opts.riskPct ?? R.riskPct) * (opts.regime === 'yellow' ? R.yellowRiskMult : 1);
  const weightPct = Math.min(riskAccountPct / riskPerSharePct * 100, R.maxPositionPct);
  const distToPivotPct = (last.c - pivot) / pivot * 100;

  // 피벗까지의 거리는 ADR 배수로 잰다. ADR 8% 종목에게 5% 는 하루치 움직임도 안 된다 —
  //   2026-09 의 MSTR·TWST·GRAL·P 는 전부 피벗 8~12% 아래에서 하루 만에 넘었다 (고정 5% 기준이면 후보에도 못 든다).
  const nearPct = Math.max(S.preMaxBelowPivotPct || 0, (S.preMaxBelowPivotAdr || 0) * adrNow);
  const near = base.state === 'pre' && distToPivotPct >= -nearPct;
  return {
    ...common,
    state: base.state,
    grade, fails: fails.map((c) => c.key),
    reasons: checks.map((c) => (c.ok ? c.ko : `✗ ${c.ko}`)),
    pivot: round(pivot), pivotDate: isoOf(bars[base.peakIdx]),
    stop: round(stop), riskPerSharePct: round(riskPerSharePct), weightPct: round(weightPct, 1),
    weightCapped: riskAccountPct / riskPerSharePct * 100 > R.maxPositionPct,
    distToPivotPct: round(distToPivotPct), distToPivotAdr: round(distToPivotPct / adrNow), nearPct: round(nearPct, 1),
    breakDate: base.state === 'post' ? isoOf(bars[base.breakIdx]) : null,
    barsSinceBreak: base.state === 'post' ? base.barsSinceBreak : null,
    metrics: {
      baseBars, baseWeeks: round(baseBars / 5, 1), depthPct: round(depthPct, 1), priorMovePct: round(priorMovePct, 1),
      higherLows, contraction: round(contraction), closeRange10Adr: round(closeRange10Adr, 1),
      surf10: round(surf10), surf20: round(surf20), slope20: round(slope20), baseLow: round(baseLow), lastSwingLow: round(lastSwingLow),
    },
    // 밤 트리거 대상: 아직 피벗 아래(가까이)에 있고, A·B 이고, 유동성이 되고, 추격이 아닌 것
    near,
    watch: near && (grade === 'A' || grade === 'B') && liquid && !common.chase,
  };
}

// 수량은 공개 파일에 쓰지 않는다 — 터미널·알림에서만 쓴다.
function sharesFor(plan, accountUsd, entry = plan.pivot) {
  if (!plan || !accountUsd || !(entry > 0) || plan.weightPct == null) return null;
  return Math.floor(accountUsd * plan.weightPct / 100 / entry);
}

module.exports = { gradeSetup, findBase, adrPct, dollarVol20, sharesFor };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchBarsCached } = require('./bars');
  const { loadRules, account } = require('./rules');
  const rules = loadRules();
  const acct = account(rules);
  const tks = process.argv.slice(2).length ? process.argv.slice(2) : ['MRNA', 'ZS', 'KYMR'];
  (async () => {
    for (const t of tks) {
      const r = await fetchBarsCached(t, { range: '2y' });
      if (!r.ok) { console.log(`${t}: 봉 없음 (${r.error})`); continue; }
      const g = gradeSetup(r.bars, { rules, riskPct: acct.riskPct });
      if (!g.ok) { console.log(`${t}: ${g.reason}`); continue; }
      console.log(`\n${t} · ${g.asOf} · $${g.price} · ${g.state}${g.grade ? ' · 등급 ' + g.grade : ''}${g.watch ? ' · 👀 관심' : ''}`);
      if (g.pivot) console.log(`  피벗 $${g.pivot}(${g.pivotDate}) ${g.distToPivotPct > 0 ? '+' : ''}${g.distToPivotPct}% · 손절 $${g.stop} · 리스크 ${g.riskPerSharePct}% · 비중 ${g.weightPct}%${g.weightCapped ? '(상한)' : ''}`
        + `${acct.usd ? ` · ${sharesFor(g, acct.usd)}주` : ''} · 이격 ${g.extensionAdr} ADR${g.breakDate ? ` · 돌파 ${g.breakDate}(${g.barsSinceBreak}봉 전)` : ''}`);
      console.log('  ' + g.reasons.join(' · '));
    }
  })();
}
