'use strict';
// 와인스타인 4단계 (2026-11-01 사용자: "TSLA 가 와인스타인 관점에서 1단계 횡보 상태인지 … 어떤 요건에 의해 해당되는지") — 숫자로만, AI 없음.
//   주봉 30주선의 4주 기울기가 ±2% 안이면 '평평'. 평평해지기 직전이 하락(4단계)이면 1단계, 상승(2·3단계)이면 3단계.
//   기울기 + 이고 주가가 선 위 → 2단계, 기울기 − 이고 선 아래 → 4단계, 그 밖(선과 주가가 엇갈림)은 앞 단계를 이어 간다.
//   와인스타인은 숫자 기준을 정하지 않았다 — 아래 문턱은 여기서 정한 근사다(바꾸면 화면 설명도 같이).
const FLAT = 0.02, MIN_WEEKS = 8, LOOK = 13, MIN_CROSS = 2, RS_FLOOR = -0.05, NEAR_TOP = 0.95;

const wkey = (d) => Math.floor((Date.parse(d) / 864e5 + 3) / 7);   // 월~금이 한 주 (1970-01-01 은 목요일)
const avg = (a) => a.reduce((s, x) => s + x, 0) / a.length;
const r2 = (v) => (v == null ? null : Math.round(v * 100) / 100);
const pc = (v) => (v == null ? null : Math.round(v * 1000) / 10);
const sg = (v) => `${v > 0 ? '+' : ''}${v}%`;

// 일봉 [{t,h,l,c,v}] → 주봉 [{d(그 주 마지막 날), h, l, c, v}]
function weekly(bars, dateOf) {
  const W = new Map();
  for (const b of bars) {
    if (b.c == null) continue;
    const d = dateOf(b.t), k = wkey(d), w = W.get(k);
    if (!w) W.set(k, { k, d, h: b.h, l: b.l, c: b.c, v: b.v || 0 });
    else Object.assign(w, { d, h: Math.max(w.h, b.h), l: Math.min(w.l, b.l), c: b.c, v: w.v + (b.v || 0) });
  }
  return [...W.values()].sort((a, b) => a.k - b.k);
}

// 주봉마다 단계 — 앞 흐름을 모르는 처음 평평 구간은 null
function stages(W) {
  const ma = W.map((_, i) => (i >= 29 ? avg(W.slice(i - 29, i + 1).map((x) => x.c)) : null));
  const slope = ma.map((m, i) => (i >= 33 ? m / ma[i - 4] - 1 : null));
  const st = [];
  let prev = null;
  for (let i = 0; i < W.length; i++) {
    let s = prev;
    if (slope[i] == null) s = null;
    else if (Math.abs(slope[i]) < FLAT) s = prev === 2 || prev === 3 ? 3 : prev == null ? null : 1;
    else if (slope[i] > 0 && W[i].c > ma[i]) s = 2;
    else if (slope[i] < 0 && W[i].c < ma[i]) s = 4;
    st.push(s); if (s != null) prev = s;
  }
  return { ma, slope, st };
}

// daily: 기초 종목 일봉 · qqq: QQQ 일봉(상대강도용, 없으면 ⑥ 확인 불가)
function analyze(daily, qqq, { dateOf }) {
  const W = weekly(daily || [], dateOf);
  if (W.length < 34) return { verdict: '판정 불가', reason: `주봉 ${W.length}주뿐 — 30주선과 기울기를 보려면 34주 이상 필요(상장이 짧음)`, weeks: W.length };
  const { ma, slope, st } = stages(W), n = W.length, L = n - 1, last = W[L];
  let flat = 0;
  while (flat < n - 33 && Math.abs(slope[L - flat]) < FLAT) flat++;
  const prior = flat ? st[L - flat] : null, ys = flat ? slope[L - flat] : null;
  // 박스 = 평평한 구간(짧으면 최근 13주)의 고가·저가
  const span = Math.max(flat, LOOK), B = W.slice(n - span), top = Math.max(...B.map((x) => x.h)), bot = Math.min(...B.map((x) => x.l));
  // 거래량 비교 대상 = 앞선 고점부터 박스 전까지(하락기). 30주선이 늦게 평평해져서 '박스 직전 13주'는 이미 횡보라 비교가 안 된다
  const pre = W.slice(0, n - span), pk = pre.reduce((b, x, i) => (x.c > pre[b].c ? i : b), 0);
  const before = pre.length - pk >= 4 ? pre.slice(pk) : pre.slice(-LOOK);
  const peak = Math.max(...pre.map((x) => x.c).concat(top));
  let cross = 0;
  for (let i = n - LOOK + 1; i < n; i++) if ((W[i].c - ma[i]) * (W[i - 1].c - ma[i - 1]) < 0) cross++;
  const vBox = avg(B.map((x) => x.v)), vPrev = before.length >= 4 ? avg(before.map((x) => x.v)) : null, v4 = avg(W.slice(-4).map((x) => x.v));
  // 상대강도 = 종가 ÷ QQQ 종가 (같은 주끼리)
  const Q = new Map(weekly(qqq || [], dateOf).map((x) => [x.k, x.c]));
  const rs = W.map((x) => (Q.has(x.k) ? x.c / Q.get(x.k) : null));
  const rs13 = rs[L] != null && rs[L - LOOK] != null ? rs[L] / rs[L - LOOK] - 1 : null;
  const rs52 = rs.slice(-52).filter((x) => x != null), mansfield = rs[L] != null && rs52.length >= 40 ? rs[L] / avg(rs52) - 1 : null;

  const ck = (item, status, evidence) => ({ item, status, evidence });
  const checks = [
    ck('① 직전이 하락', !flat ? '확인 불가' : prior === 4 || prior === 1 ? '충족' : prior == null ? '확인 불가' : '미충족',
      !flat ? '지금 30주선이 평평하지 않아 해당 없음'
        : `평평해지기 직전 30주선 4주 기울기 ${sg(pc(ys))} · ${prior === 4 || prior === 1 ? '하락 뒤 횡보' : prior == null ? '앞 흐름 자료 부족' : '오른 뒤 횡보 → 1단계가 아니라 3단계'} · 앞선 고점 대비 박스 바닥 ${sg(pc(bot / peak - 1))}`),
    ck('② 30주선이 평평', flat ? '충족' : '미충족', `30주선 4주 기울기 ${sg(pc(slope[L]))} (±${FLAT * 100}% 안이면 평평)${flat ? ` · 평평 ${flat}주째` : ''}`),
    ck('③ 30주선을 위아래로 오감', cross >= MIN_CROSS ? '충족' : '미충족', `최근 ${LOOK}주 동안 주가가 30주선을 ${cross}번 교차 (${MIN_CROSS}번 이상이면 충족) · 지금 선 ${last.c >= ma[L] ? '위' : '아래'} ${sg(pc(last.c / ma[L] - 1))}`),
    ck('④ 박스권', flat >= MIN_WEEKS ? '충족' : '미충족', `${flat >= MIN_WEEKS ? `${flat}주째` : `평평해진 지 ${flat}주 — ${MIN_WEEKS}주 미만이라 아직 박스로 보지 않음 ·`} ${r2(bot)}~${r2(top)} (폭 ${pc(top / bot - 1)}%)`),
    ck('⑤ 거래량 감소', vPrev == null ? '확인 불가' : vBox < vPrev ? '충족' : '미충족',
      `${vPrev == null ? '박스 앞 거래량 자료 부족' : `박스 안 주간 평균 거래량이 박스 앞 ${before.length}주(${before[0].d}~, 앞선 고점부터)의 ${r2(vBox / vPrev)}배`}${v4 > vBox * 1.3 ? ` · 최근 4주는 박스 평균의 ${r2(v4 / vBox)}배로 다시 늘어남(막바지 신호일 수 있음)` : ''}`),
    ck('⑥ 상대강도 바닥 다지기', rs13 == null ? '확인 불가' : rs13 >= RS_FLOOR ? '충족' : '미충족',
      rs13 == null ? 'QQQ 자료 없음' : `QQQ 대비 상대강도 최근 ${LOOK}주 ${sg(pc(rs13))} (${RS_FLOOR * 100}%보다 덜 빠지면 충족)${mansfield == null ? '' : ` · 52주 평균 대비 ${sg(pc(mansfield))}${mansfield < 0 ? '(아직 시장보다 약함)' : ''}`}`),
  ];
  const s = st[L], core = checks.slice(0, 4).every((c) => c.status === '충족');
  const changes = [];
  for (let i = 1; i < n; i++) if (st[i] != null && st[i] !== st[i - 1] && st[i - 1] != null) changes.push({ d: W[i].d, from: st[i - 1], to: st[i] });
  const recent1 = changes.some((c) => c.from === 1 && c.to === 2 && Date.parse(last.d) - Date.parse(c.d) <= 8 * 7 * 864e5);
  const verdict = s === 1 ? (core ? (last.c >= top * NEAR_TOP ? '1단계 막바지' : '1단계') : '경계')
    : s === 2 ? (recent1 ? '2단계 진입' : '2단계') : s === 3 ? '3단계' : s === 4 ? '4단계' : '경계';
  const why = verdict === '경계' ? (s == null ? '평평한데 그 앞 흐름을 알 수 없음' : `1단계 핵심 조건 미충족: ${checks.slice(0, 4).filter((c) => c.status !== '충족').map((c) => c.item.slice(2)).join(' · ')}`)
    : verdict === '1단계 막바지' ? `주가가 박스 위쪽(${r2(top)})의 ${NEAR_TOP * 100}% 이상 — 돌파선 근처` : verdict === '2단계 진입' ? '최근 8주 안에 1단계에서 2단계로 넘어감' : '';
  return { verdict, stage: s, why, asOf: last.d, close: r2(last.c), ma30: r2(ma[L]), slopePct: pc(slope[L]), flatWeeks: flat,
    box: { top: r2(top), bottom: r2(bot), widthPct: pc(top / bot - 1), weeks: span }, checks, changes: changes.slice(-4),
    weeks: W.map((x, i) => [x.d, r2(x.c), r2(ma[i])]) };
}

module.exports = { weekly, stages, analyze, FLAT, MIN_WEEKS };
