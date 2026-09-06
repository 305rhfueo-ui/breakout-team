'use strict';
// 3팀 Keep Tracking — 누적 표 + 배제/재편입 상태머신.
//
// 배제 3조건
//  ① 종가가 50일선 아래 3일 이상 연속        (야후 봉, 봉 날짜 기준)
//  ② 직전 고점 대비 -40% 이상 하락           ("직전 고점" = 추적 편입 이후 최고 종가)
//  ③ 종가가 150일선 아래                     (사이트 Above_150_SMA === 'X')
//
// 재편입: 2팀이 다시 뽑으면 자동 복귀. 단 peak 를 리셋한다
//        (과거 고점을 물고 오면 복귀 즉시 재배제되는 버그 방지)
// 수동 배제: manual_hold=true 면 2팀이 다시 뽑아도 자동 복귀하지 않는다

const { paths, readJson, writeJson, today, round, say } = require('./util');

const STATUS = { ACTIVE: 'active', DORMANT: 'dormant', EXCLUDED: 'excluded' };
const DEFAULTS = {
  ma50BelowDays: 3,
  drawdownPct: 40,
  drawdownBasis: 'peak',   // 'peak' | 'high52'  — state/config.json 으로 전환
  activeCap: 150,
};

function load() {
  const s = readJson(paths.tracking, null);
  if (s && Array.isArray(s.items)) return s;
  return { updated: null, items: [] };
}

function save(state) {
  state.updated = today();
  writeJson(paths.tracking, state);
  return state;
}

function findItem(state, ticker) {
  return state.items.find((x) => x.ticker === ticker);
}

function pushHistory(item, dateStr, status, note) {
  item.history = item.history || [];
  const last = item.history[item.history.length - 1];
  if (last && last.status === status && last.note === note) return;
  item.history.push({ date: dateStr, status, note });
  if (item.history.length > 60) item.history = item.history.slice(-60);
}

// 2팀 선정 결과를 누적 반영
//
// ⚠️ peak 는 여기서 정하지 않는다(null). RS 사이트 Price 는 분할 미조정 원본가라 야후 조정가와 섞이면
//    액면분할 때 "고점 대비 -75%"로 오배제된다. evaluate 가 첫 평가 때 야후 종가로 초기화한다.
function ingestPicks(state, picks, dateStr) {
  let added = 0, restored = 0, refreshed = 0;
  const restoredTickers = [];
  for (const p of picks) {
    let it = findItem(state, p.ticker);
    if (!it) {
      it = {
        ticker: p.ticker, sector: p.sector, industry: p.industry,
        added: dateStr, lastPicked: dateStr, pickCount: 1,
        status: STATUS.ACTIVE, peak: null, peakDate: null,
        addedReason: `RS 상위 ${p.bestPct == null ? '?' : round(100 - p.bestPct, 2)}% · ADR ${p.adr}% · 150일선 위`,
        manualHold: false, history: [],
      };
      pushHistory(it, dateStr, STATUS.ACTIVE, '신규 편입 (2팀 선정)');
      state.items.push(it);
      added++;
    } else {
      it.lastPicked = dateStr;
      it.pickCount = (it.pickCount || 0) + 1;
      it.sector = p.sector; it.industry = p.industry;
      if (it.status === STATUS.EXCLUDED) {
        if (it.manualHold) {
          pushHistory(it, dateStr, it.status, '2팀 재선정됐으나 수동 배제 유지(manualHold)');
        } else {
          // 재편입 후보. 배제 사유가 아직 살아 있으면 revertReentries 가 되돌린다 —
          // 그래서 예전 배제 정보를 임시로 보관한다.
          it._prevExcluded = { reason: it.excludedReason, at: it.excludedAt, asOf: it.excludedAsOf || null, firstAt: it.firstExcludedAt || it.excludedAt };
          it.status = STATUS.ACTIVE;
          it.peak = null; it.peakDate = null;
          it.excludedReason = null; it.excludedAt = null; it.excludedAsOf = null;
          pushHistory(it, dateStr, STATUS.ACTIVE, '재편입 (2팀 기준 재충족, peak 리셋)');
          restored++;
          restoredTickers.push(it.ticker);
        }
      } else if (it.status === STATUS.DORMANT) {
        it.status = STATUS.ACTIVE;
        pushHistory(it, dateStr, STATUS.ACTIVE, '휴면 해제 (2팀 재선정)');
        refreshed++;
      }
    }
  }
  return { added, restored, refreshed, restoredTickers };
}

// 배제 사유를 ctx 로 판정한다 (evaluate 와 revertReentries 가 공유)
function exclusionReasons(it, c, o) {
  const reasons = [];
  // ① 50일선 아래 3일 이상 연속
  if (c.belowMa50 && c.belowMa50.ok && c.belowMa50.days >= o.ma50BelowDays) {
    reasons.push(`50일선 아래 ${c.belowMa50.days}일 연속(${c.belowMa50.firstBelowDate} ~ ${c.belowMa50.lastBarDate})`
      + (c.barGap ? ' ⚠️봉 누락 — 연속일수 불확실' : ''));
  }
  // ② 고점 대비 -40%
  const basis = o.drawdownBasis === 'high52' ? c.high52Price : it.peak;
  if (basis && c.price != null) {
    const dd = ((c.price - basis) / basis) * 100;
    it.drawdownPct = round(dd);
    if (dd <= -o.drawdownPct) reasons.push(`${o.drawdownBasis === 'high52' ? '52주 고점' : '편입 후 고점'}($${round(basis)}) 대비 ${round(dd)}%`);
  }
  // ③ 150일선 아래
  if (c.aboveMa150 === false) reasons.push('종가가 150일선 아래');
  return reasons;
}

// 재편입 → 즉시 재배제 churn 방지.
//
// 배경 (2026-09-03 실측): 2팀 기준엔 50일선이 없어서 50일선 아래인 RS 상위주가 매일 복귀 → 같은 날 재배제.
//   MXL·BAND·PENG 복귀 29회/배제 29회. "오늘 배제 10건" 대부분이 이 churn 이었고, 차트확인 목록까지 오염됐다.
//   복귀마다 peak 가 리셋돼 -40% 조건도 무력화됐다.
// 여기서: 오늘 복귀한 종목 중 배제 사유가 여전히 성립하는 것은 **히스토리 없이** excluded 로 되돌리고
//   reentryBlocked 만 남긴다. 되돌리지 않은 종목은 정상 재편입이다.
function revertReentries(state, dateStr, ctx, tickers, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const blocked = [];
  for (const t of tickers || []) {
    const it = findItem(state, t);
    if (!it || it.status !== STATUS.ACTIVE || !it._prevExcluded) continue;
    const c = ctx[t];
    const prev = it._prevExcluded;
    delete it._prevExcluded;
    if (!c) continue;                       // 봉 없음 → 판정 보류, 재편입 유지 (조용한 오판 방지)
    // 50일선 하향 이탈이나 150일선 이탈이 여전하면 복귀 무효. (-40% 은 peak 가 없으니 판정 불가)
    const reasons = exclusionReasons(it, c, o).filter((r) => !r.startsWith('편입 후 고점'));
    if (!reasons.length) continue;
    it.status = STATUS.EXCLUDED;
    it.excludedReason = prev.reason || reasons.join(' · ');
    it.excludedAt = prev.at || dateStr;
    it.excludedAsOf = prev.asOf || c.lastBarDate || null;
    it.firstExcludedAt = prev.firstAt || prev.at || dateStr;
    it.pickCount = Math.max(0, (it.pickCount || 1) - 1);
    // 방금 push 한 "재편입" 히스토리를 걷어낸다 — 사실상 일어나지 않은 일이다
    const h = it.history || [];
    if (h.length && h[h.length - 1].date === dateStr && h[h.length - 1].status === STATUS.ACTIVE) h.pop();
    it.reentryBlocked = { date: dateStr, reason: reasons.join(' · '), count: ((it.reentryBlocked || {}).count || 0) + 1 };
    blocked.push({ ticker: t, reason: reasons.join(' · ') });
  }
  // 정상 재편입된 종목은 임시 필드를 정리한다
  for (const it of state.items) if (it._prevExcluded) delete it._prevExcluded;
  return blocked;
}

// 배제 판정 — ta 는 { belowMa50Days, price, ... }, row 는 RS 사이트 행
function evaluate(state, dateStr, ctx, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const dropped = [];
  for (const it of state.items) {
    if (it.status === STATUS.EXCLUDED) continue;
    const c = ctx[it.ticker];
    if (!c) continue;   // 데이터 없음 → 상태 변경하지 않는다(조용한 오판 방지)

    // peak 갱신 (야후 조정 종가 기준. 첫 평가면 여기서 초기화된다)
    if (c.price != null && (it.peak == null || c.price > it.peak)) { it.peak = c.price; it.peakDate = c.lastBarDate || dateStr; }

    const reasons = exclusionReasons(it, c, o);

    if (reasons.length) {
      it.status = STATUS.EXCLUDED;
      it.excludedAt = dateStr;
      // asOf = 판정 근거가 된 마지막 봉 날짜(ET). 실행일(KST)과 하루 어긋나므로 돌파일과 비교할 땐 이걸 쓴다.
      it.excludedAsOf = c.lastBarDate || null;
      if (!it.firstExcludedAt) it.firstExcludedAt = dateStr;
      it.excludedReason = reasons.join(' · ');
      pushHistory(it, dateStr, STATUS.EXCLUDED, it.excludedReason);
      dropped.push({ ticker: it.ticker, reason: it.excludedReason, asOf: it.excludedAsOf, firstExcludedAt: it.firstExcludedAt });
    }
  }
  return dropped;
}

// 활성 상한 관리 — 돌파 임박 종목은 정원을 넘겨도 지킨다
function enforceCap(state, dateStr, ctx, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const active = state.items.filter((x) => x.status === STATUS.ACTIVE);
  if (active.length <= o.activeCap) return { dormant: 0, protectedCount: 0 };

  const isProtected = (t) => {
    const c = ctx[t];
    if (!c) return false;
    const ph = c.congestion && c.congestion.phase;
    if (ph === 'retest' || ph === 'bounce_trigger') return true;
    if (c.eye && c.eye.eyeCheck) return true;
    return false;
  };

  // 최근 재선정일이 오래된 순으로 휴면 (RS 순위로 자르지 않는다 —
  // RS 가 낮아진 종목이야말로 횡보 수렴 중일 수 있고 그게 우리가 찾는 셋업이다)
  const sorted = active.slice().sort((a, b) => String(a.lastPicked || '').localeCompare(String(b.lastPicked || '')));
  let over = active.length - o.activeCap;
  let dormant = 0, protectedCount = 0;
  for (const it of sorted) {
    if (over <= 0) break;
    if (isProtected(it.ticker)) { protectedCount++; continue; }
    it.status = STATUS.DORMANT;
    pushHistory(it, dateStr, STATUS.DORMANT, `활성 상한 ${o.activeCap} 초과 — 휴면(주 1회 재검사)`);
    dormant++; over--;
  }
  return { dormant, protectedCount };
}

// 수동 배제/복구
function manualExclude(ticker, reason, dateStr = today()) {
  const state = load();
  const it = findItem(state, ticker);
  if (!it) return { ok: false, error: `${ticker} 는 추적 목록에 없습니다` };
  it.status = STATUS.EXCLUDED;
  it.manualHold = true;
  it.excludedAt = dateStr;
  it.excludedReason = `[수동] ${reason || '사용자 지시'}`;
  pushHistory(it, dateStr, STATUS.EXCLUDED, it.excludedReason);
  save(state);
  return { ok: true, ticker, reason: it.excludedReason };
}

function manualRestore(ticker, dateStr = today()) {
  const state = load();
  const it = findItem(state, ticker);
  if (!it) return { ok: false, error: `${ticker} 는 추적 목록에 없습니다` };
  it.status = STATUS.ACTIVE;
  it.manualHold = false;
  it.excludedReason = null; it.excludedAt = null;
  it.peak = null; it.peakDate = dateStr;   // peak 리셋
  pushHistory(it, dateStr, STATUS.ACTIVE, '[수동] 복구');
  save(state);
  return { ok: true, ticker };
}

function summary(state) {
  const c = { active: 0, dormant: 0, excluded: 0 };
  for (const it of state.items) c[it.status] = (c[it.status] || 0) + 1;
  return { ...c, total: state.items.length };
}

module.exports = {
  load, save, ingestPicks, evaluate, enforceCap, revertReentries, exclusionReasons,
  manualExclude, manualRestore, summary, findItem, STATUS, DEFAULTS,
};
