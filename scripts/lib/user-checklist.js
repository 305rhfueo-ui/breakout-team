'use strict';
// 사용자 "매수 전 체크리스트 — 직장인 다음 날 진입판" (블로그 21번 글, 2026-11-07) 을 코드로 — AI 없음.
//   12팀(매매 복기)은 매수 전날 밤 기준으로, 13팀(체크리스트 부합 종목)은 오늘 돌파 종목에 같은 함수를 쓴다.
//   evaluate({ bars, setup, ranks, regime }) → { rows, num }
//     bars  = 판단 시점까지의 일봉 (마지막 봉 = 판단 전날 세션)
//     setup = gradeSetup(bars) (서준과 같은 피벗·베이스 숫자)
//     ranks = rsRanks(스냅샷)의 그 종목 값 { m1, m3, m6, industry, peers } (상위 몇 %, 작을수록 강함) — 없으면 null
//     regime = qullamaggieRegime(QQQ 봉) 결과 — verdict green·yellow·red
// 줄마다 status: 'ok' ✅ · 'no' ❌ · 'half' 🟡 · 'na' 확인 불가 · 'info' 참고(판정 안 함)

const { barDateET } = require('./bars');
const { round } = require('./util');

const avg = (a) => (a.length ? a.reduce((s, x) => s + x, 0) / a.length : null);
const smaAt = (bars, i, n, k = 'c') => (i + 1 >= n ? avg(bars.slice(i + 1 - n, i + 1).map((b) => b[k])) : null);
const iso = (b) => barDateET(b.t);
const ICON = { ok: '✅', no: '❌', half: '🟡', na: '확인 불가', info: 'ℹ️' };

// 스냅샷(slim: data[{T,I,r1,r3,r6}]) → Map(T → { m1, m3, m6, industry, peers }) — 상위 몇 %, 같은 업종에서 상위 2% 안에 든 다른 종목
function rsRanks(snap) {
  const rows = (snap && snap.data) || [];
  const top = {};
  for (const k of ['r1', 'r3', 'r6']) {
    const vals = rows.map((r) => r[k]).filter(Number.isFinite).sort((a, b) => b - a);
    top[k] = (v) => (Number.isFinite(v) && vals.length ? round(vals.filter((x) => x > v).length / vals.length * 100, 1) : null);
  }
  const m = new Map();
  for (const r of rows) m.set(String(r.T).toUpperCase(), { m1: top.r1(r.r1), m3: top.r3(r.r3), m6: top.r6(r.r6), industry: r.I || null });
  const byInd = new Map();
  for (const [T, x] of m) if (x.industry && [x.m1, x.m3, x.m6].some((p) => p != null && p <= 2)) byInd.set(x.industry, [...(byInd.get(x.industry) || []), T]);
  for (const [T, x] of m) x.peers = (byInd.get(x.industry) || []).filter((U) => U !== T).slice(0, 8);
  return m;
}

function evaluate({ bars, setup, ranks = null, regime = null }) {
  const n = bars.length, last = bars[n - 1];
  const S = setup && setup.ok !== false && setup.state !== 'none' ? setup : null;
  const M = (S && S.metrics) || null;
  const adr = setup && setup.adrPct != null ? setup.adrPct : null;
  const rows = [];
  const row = (no, item, status, detail) => rows.push({ no, item, status, icon: ICON[status], detail });

  // 1 시장
  const v = regime && regime.verdict;
  row('1', 'QQQ 10일선 > 20일선, 둘 다 우상향', !v || v === 'unknown' ? 'na' : v === 'green' ? 'ok' : v === 'yellow' ? 'half' : 'no',
    regime ? `${regime.ko || v}` : '시장 판정 없음');

  // 2 종목 — 기간 수익률(봉) + 그 기간 RS 순위(사이트 스냅샷)
  const ret = {};
  for (const [k, b] of [['m1', 21], ['m3', 63], ['m6', 126]]) ret[k] = n > b ? round((last.c / bars[n - 1 - b].c - 1) * 100, 1) : null;
  const okPeriods = ['m1', 'm3', 'm6'].filter((k) => ret[k] != null && ret[k] >= 30 && ranks && ranks[k] != null && ranks[k] <= 2);
  const label = { m1: '1개월', m3: '3개월', m6: '6개월' };
  const retTxt = ['m1', 'm3', 'm6'].map((k) => `${label[k]} ${ret[k] == null ? '—' : (ret[k] >= 0 ? '+' : '') + ret[k] + '%'}${ranks && ranks[k] != null ? `(RS 상위 ${ranks[k]}%)` : ''}`).join(' · ');
  row('2-1', '1·3·6개월 중 하나라도 30% 이상 상승 + 그 기간 RS 상위 1~2%', !ranks ? 'na' : okPeriods.length ? 'ok' : 'no', retTxt + (ranks ? '' : ' · RS 순위 자료 없음'));
  row('2-2', 'ADR 4% 이상', adr == null ? 'na' : adr >= 4 ? 'ok' : 'no', `ADR ${adr ?? '—'}%`);
  const ma50 = smaAt(bars, n - 1, 50), ma150 = smaAt(bars, n - 1, 150), ma150p = smaAt(bars, n - 21, 150);
  row('2-3', '150일선 우상향, 주가가 50일선 위', ma50 == null || ma150 == null || ma150p == null ? 'na' : ma150 > ma150p && last.c > ma50 ? 'ok' : 'no',
    ma150 == null ? '봉 부족' : `150일선 ${round(ma150, 2)} (20일 전 ${round(ma150p, 2)}) · 종가 ${round(last.c, 2)} · 50일선 ${round(ma50, 2)}`);
  row('2-4', '같은 섹터·테마에서 강한 종목이 여러 개', 'info',
    ranks ? `업종 ${ranks.industry || '—'} · 같은 업종 RS 상위 2% 종목 ${(ranks.peers || []).length}개${(ranks.peers || []).length ? ` (${ranks.peers.join(', ')})` : ''}` : '자료 없음');

  // 돌파봉 — 이미 돌파(post)면 그 봉, 아니면 없음
  const bi = S && S.state === 'post' && S.breakDate ? bars.findIndex((b) => iso(b) === S.breakDate) : -1;
  const before = bi > 0 ? bars.slice(0, bi) : bars;

  // 3 횡보
  row('3-1', '2~8주 횡보', !M ? 'na' : M.baseWeeks >= 2 && M.baseWeeks <= 8 ? 'ok' : 'no', M ? `베이스 ${M.baseWeeks}주` : '베이스 없음');
  row('3-2', '고점 대비 하락폭 25% 이내', !M ? 'na' : M.depthPct <= 25 ? 'ok' : 'no', M ? `깊이 ${M.depthPct}%` : '베이스 없음');
  row('3-3', '저점이 높아지고 폭이 좁아진다 (둘 다)', !M ? 'na' : M.higherLows >= 1 && M.contraction != null && M.contraction < 1 ? 'ok' : 'no',
    M ? `저점 상승 ${M.higherLows}회 · 진폭 ${M.contraction ?? '—'}배(1 미만이면 좁아짐)` : '베이스 없음');
  const v5 = before.length >= 20 ? avg(before.slice(-5).map((b) => b.v)) : null, v20 = before.length >= 20 ? avg(before.slice(-20).map((b) => b.v)) : null;
  const dry = v5 != null && v20 ? round(v5 / v20, 2) : null;
  row('3-4', '거래량이 마른다 : 최근 5일 평균 ÷ 20일 평균 0.7 이하', dry == null ? 'na' : dry <= 0.7 ? 'ok' : 'no',
    dry == null ? '봉 부족' : `${bi > 0 ? '돌파 전날까지 ' : ''}5일 ÷ 20일 = ${dry}배`);

  // 4 돌파
  let breakVol = null;
  if (bi >= 20) { const a = avg(bars.slice(bi - 20, bi).map((b) => b.v)); breakVol = a ? round(bars[bi].v / a, 2) : null; }
  row('4-1', '종가가 피벗 위에서 끝났다', bi < 0 ? (S ? 'no' : 'na') : bars[bi].c > S.pivot ? 'ok' : 'no',
    bi < 0 ? (S ? `아직 돌파 전 — 피벗 ${S.pivot}` : '피벗 없음') : `${S.breakDate} 종가 ${round(bars[bi].c, 2)} · 피벗 ${S.pivot}`);
  row('4-2', '거래량 배수 2배 이상 (그날 ÷ 직전 20거래일 평균)', breakVol == null ? 'na' : breakVol >= 2 ? 'ok' : 'no',
    breakVol == null ? '돌파봉 없음' : `${S.breakDate} 돌파봉 ${breakVol}배`);

  // 6 주문 숫자 (다음 날 시가 판정은 장이 열려야 안다)
  const cap = S && S.pivot && adr != null ? round(S.pivot * (1 + adr / 100), 2) : null;
  const num = { adr, pivot: S ? S.pivot : null, pivotDate: S ? S.pivotDate : null, breakDate: bi >= 0 ? S.breakDate : null, breakVol, dry, ret, ranks,
    cap, stopPctOfEntry: adr, breakLow: bi >= 0 ? round(bars[bi].l, 2) : null, lastClose: round(last.c, 2), lastDate: iso(last),
    ma50: round(ma50, 2), ma150: round(ma150, 2), closeVsCapAdr: cap && adr ? round(((last.c / S.pivot - 1) * 100) / adr, 2) : null };
  return { rows, num };
}

// 시장 칸을 뺀 나머지(판정 줄)가 전부 ✅ 인가 — 13팀 기준. 확인 불가도 통과가 아니다.
const passesExceptMarket = (rows) => rows.filter((r) => r.no !== '1' && r.status !== 'info').every((r) => r.status === 'ok');

module.exports = { evaluate, rsRanks, passesExceptMarket, smaAt, ICON };
