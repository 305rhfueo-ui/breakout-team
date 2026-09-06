'use strict';
// RS 사이트의 Above_150_SMA / Above_50_SMA 컬럼이 믿을 만한지 검사한다.
//
// 왜 필요한가 — 2026-08-13 실제 사고:
//   사이트 원본(utils.py:396)이 `"O" if (ma150 > 0 and price > ma150) else "X"` 라서
//   사이트 쪽에서 이동평균 계산이 실패하면 ma150 이 0 이 되고 **조용히 "X"** 가 된다.
//   그날 O 140 / X 1272 로 뒤집혔고(정상은 O 1000 안팎), 그 결과
//     · 2팀 선정이 61 → 18 종목으로 붕괴
//     · 3팀이 하루에 48종목을 "150일선 이탈"로 배제
//   실제로는 폭락이 아니었다. 같은 스냅샷에서 1,412종목 중 1,047개가 200일선 위였고,
//   200일선보다 +20% 넘게 위인 종목 311개가 "150일선 아래"로 표시돼 있었다 — 산술적으로 불가능하다.
//
// 판정 원리: 200DIV(200일선 이격)는 같은 스냅샷의 독립 컬럼이고 그날 정상이었다.
//   200일선보다 한참 위인 주식이 150일선 아래일 수는 없으므로, 그런 모순이 대량으로 보이면
//   MA 컬럼을 신뢰하지 않는다.
//
// 정책: 깨졌으면 **거르지 말고 '판정불가'로 낮춘 뒤 실행은 계속**한다.
//   조용히 통과시켜 종목을 잘라내는 것이 최악이다 — 배제는 tracking.json 에 영구 기록되기 때문이다.

const CONTRA_DIV200 = 20;      // 200일선 대비 이 % 넘게 위인데 150일선 아래면 모순
const CONTRA_MAX = 30;         // 모순 종목이 전체의 이 % 를 넘으면 컬럼을 못 믿는다
const MIN_ABOVE_PCT = 25;      // 200일선 위 종목이 많은데 150일선 위가 이보다 적으면 이상
const BLANK_MAX = 15;          // 지표가 통째로 비어 있는 행이 전체의 이 % 를 넘으면 스냅샷을 못 믿는다

// ⚠️ Number(null) 은 0 이다. null/빈 문자열을 0 으로 읽으면 "지표가 비어 있다"를 영영 못 잡는다 (2026-09-04 실측).
function num(v) { if (v === null || v === undefined || v === '') return null; const n = Number(v); return Number.isFinite(n) ? n : null; }

// 지표가 통째로 빈 행 — 사이트가 가격 이력을 못 받은 종목. 이런 행의 Above_150_SMA 는 "X" 로 나온다
// (utils.py:397 `ma150 > 0 and …` 가 거짓이면 X). 즉 X 가 "150일선 아래"가 아니라 "계산 못 함"이다.
// 2026-09-04 실제 사고: 1,412행 중 911행이 이렇게 비어 있었고 200DIV 교차검증은 null 이라 건너뛰어
//   가드가 통과했다 → 3팀이 26종목을 "150일선 이탈"로 영구 배제할 뻔했다.
function isBlankRow(r) {
  if (!r) return false;
  // 컬럼 자체가 스키마에 없으면(옛 스냅샷·테스트 픽스처) "빈 행"이 아니라 "검증 불가"다 — 아래 checked 로직이 처리한다
  const has = (k) => Object.prototype.hasOwnProperty.call(r, k);
  if (!has('200DIV') && !has('RS_6mo')) return false;
  return num(r['200DIV']) == null && num(r['50DIV']) == null && num(r.RS_6mo) == null && num(r.RS_3mo) == null;
}

// 행 단위 150일선 판정 — 'O' → true · 'X' 이면서 지표가 있음 → false · 그 외(빈 행·값 없음) → null(판정불가)
function aboveMa150Of(r) {
  const flag = String((r && r.Above_150_SMA) ?? '').trim().toUpperCase();
  if (flag === 'O') return true;
  if (flag === 'X') return isBlankRow(r) ? null : false;
  return null;
}

// @returns { ok, reason, stats }  ok=false 면 150/50일선 컬럼을 쓰지 마라
function checkMaColumns(rows) {
  const total = rows.length;
  const stats = { total, o150: 0, x150: 0, d200Pos: 0, contradiction: 0, checked: 0, blank: 0, blankX: 0 };
  if (!total) return { ok: false, reason: '행이 없다', stats };

  for (const r of rows) {
    const flag = String(r.Above_150_SMA ?? '').trim().toUpperCase();
    if (flag === 'O') stats.o150++;
    else if (flag === 'X') stats.x150++;
    if (isBlankRow(r)) { stats.blank++; if (flag === 'X') stats.blankX++; }
    const d200 = num(r['200DIV']);
    if (d200 == null) continue;
    stats.checked++;
    if (d200 > 0) stats.d200Pos++;
    if (d200 > CONTRA_DIV200 && flag === 'X') stats.contradiction++;
  }
  stats.blankPct = Number(((stats.blank / total) * 100).toFixed(1));
  stats.contraPct = stats.checked ? Number(((stats.contradiction / stats.checked) * 100).toFixed(1)) : 0;

  // 컬럼 자체가 없으면(스키마 변경) 그것도 '못 씀'이다
  if (stats.o150 + stats.x150 === 0) {
    return { ok: false, reason: 'Above_150_SMA 컬럼이 비어 있다 (스키마 변경 가능성)', stats };
  }
  // 지표가 비어 있는 행이 대량이면 스냅샷 자체가 불완전하다 — X 는 "아래"가 아니라 "못 셈"이다
  if (stats.blankPct > BLANK_MAX) {
    return {
      ok: false,
      reason: `200DIV·50DIV·RS 가 전부 비어 있는 행이 ${stats.blank}개(${stats.blankPct}%) — 그중 ${stats.blankX}개가 "150일선 아래(X)"로 표시됨. `
        + `사이트가 가격 이력을 못 받은 것이지 이탈이 아니다`,
      stats,
    };
  }
  if (!stats.checked) return { ok: true, reason: '200DIV 가 없어 교차검증 불가 — 그대로 신뢰', stats };

  const contraPct = (stats.contradiction / stats.checked) * 100;
  const abovePct = (stats.o150 / total) * 100;
  const d200PosPct = (stats.d200Pos / stats.checked) * 100;
  Object.assign(stats, {
    contraPct: Number(contraPct.toFixed(1)),
    abovePct: Number(abovePct.toFixed(1)),
    d200PosPct: Number(d200PosPct.toFixed(1)),
  });

  if (contraPct > CONTRA_MAX) {
    return {
      ok: false,
      reason: `200일선보다 +${CONTRA_DIV200}% 넘게 위인데 "150일선 아래"로 표시된 종목이 `
        + `${stats.contradiction}개(${stats.contraPct}%) — 산술적으로 불가능하다. 사이트 MA 계산 실패로 판단`,
      stats,
    };
  }
  // 200일선 위가 과반인데 150일선 위가 극소수면 같은 고장의 다른 얼굴이다
  if (d200PosPct > 50 && abovePct < MIN_ABOVE_PCT) {
    return {
      ok: false,
      reason: `200일선 위 종목이 ${stats.d200PosPct}% 인데 150일선 위는 ${stats.abovePct}% 뿐 — 앞뒤가 맞지 않는다`,
      stats,
    };
  }
  return { ok: true, reason: '정상', stats };
}

module.exports = { checkMaColumns, isBlankRow, aboveMa150Of, CONTRA_DIV200, CONTRA_MAX, MIN_ABOVE_PCT, BLANK_MAX };
