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
function ingestPicks(state, picks, dateStr) {
  let added = 0, restored = 0, refreshed = 0;
  for (const p of picks) {
    let it = findItem(state, p.ticker);
    if (!it) {
      it = {
        ticker: p.ticker, sector: p.sector, industry: p.industry,
        added: dateStr, lastPicked: dateStr, pickCount: 1,
        status: STATUS.ACTIVE, peak: p.price ?? null, peakDate: dateStr,
        addedReason: `RS 상위 ${round(100 - (p.bestPct || 0), 2)}% · ADR ${p.adr}% · 150일선 위`,
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
          it.status = STATUS.ACTIVE;
          it.peak = p.price ?? null;          // ⚠️ peak 리셋 — 없으면 복귀 즉시 재배제된다
          it.peakDate = dateStr;
          it.excludedReason = null; it.excludedAt = null;
          pushHistory(it, dateStr, STATUS.ACTIVE, '재편입 (2팀 기준 재충족, peak 리셋)');
          restored++;
        }
      } else if (it.status === STATUS.DORMANT) {
        it.status = STATUS.ACTIVE;
        pushHistory(it, dateStr, STATUS.ACTIVE, '휴면 해제 (2팀 재선정)');
        refreshed++;
      }
    }
  }
  return { added, restored, refreshed };
}

// 배제 판정 — ta 는 { belowMa50Days, price, ... }, row 는 RS 사이트 행
function evaluate(state, dateStr, ctx, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const dropped = [];
  for (const it of state.items) {
    if (it.status === STATUS.EXCLUDED) continue;
    const c = ctx[it.ticker];
    if (!c) continue;   // 데이터 없음 → 상태 변경하지 않는다(조용한 오판 방지)

    // peak 갱신
    if (c.price != null && (it.peak == null || c.price > it.peak)) { it.peak = c.price; it.peakDate = dateStr; }

    const reasons = [];
    // ① 50일선 아래 3일 이상 연속
    if (c.belowMa50 && c.belowMa50.ok && c.belowMa50.days >= o.ma50BelowDays) {
      reasons.push(`50일선 아래 ${c.belowMa50.days}일 연속(${c.belowMa50.firstBelowDate} ~ ${c.belowMa50.lastBarDate})`);
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

    if (reasons.length) {
      it.status = STATUS.EXCLUDED;
      it.excludedAt = dateStr;
      it.excludedReason = reasons.join(' · ');
      pushHistory(it, dateStr, STATUS.EXCLUDED, it.excludedReason);
      dropped.push({ ticker: it.ticker, reason: it.excludedReason });
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
  load, save, ingestPicks, evaluate, enforceCap,
  manualExclude, manualRestore, summary, findItem, STATUS, DEFAULTS,
};
