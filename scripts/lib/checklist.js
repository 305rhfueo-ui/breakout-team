'use strict';
// 종목 체크표 — 쿨라매기 돌파 셋업 11항목 · CAN SLIM 7항목 (2026-10-08 사용자 요청).
//
// ⚠️ AI 를 쓰지 않는다. 숫자만으로 판정해 지어낼 여지가 없다. 서준 심층 분석(AI)과 같은 모양
//    [{ item, status:'충족'|'미충족'|'확인 불가', evidence }] 이라 화면이 같은 표로 그린다.
// ⚠️ 기준 수치는 docs/기준-쿨라매기-차트.md · docs/기준-CANSLIM-재무.md 와 같다. 문서를 고치면 여기도 고친다.
//    셋업 수치(선행 상승·베이스·피벗·손절)는 서준이 쓰는 scripts/lib/setup-grade.js gradeSetup 결과를 그대로 쓴다.
//
//   qullamaggie({ item, setup, bars, market }) → 11개
//   canslim({ item, fs, detail, kis, cnbc, market, dry }) → 7개   (dry = 최근 5일 ÷ 20일 거래량, dryUp(bars))

const OK = '충족', NO = '미충족', NA = '확인 불가';
const r1 = (v, d = 1) => (v == null || !Number.isFinite(Number(v)) ? null : Math.round(Number(v) * 10 ** d) / 10 ** d);
const row = (item, status, evidence) => ({ item, status, evidence });

function smaV(bars, n, field) {
  if (!bars || bars.length < n) return null;
  return bars.slice(-n).reduce((a, b) => a + (b[field] || 0), 0) / n;
}

function qullamaggie({ item = {}, setup = null, bars = null, market = null } = {}) {
  const S = setup && setup.ok !== false ? setup : null;
  const m = (S && S.metrics) || null;
  const noBase = !S || S.state === 'none' || !m;
  const why = !S ? '봉 부족 — 셋업 계산 불가' : '쉬는 구간(베이스)이 없다';
  const out = [];

  // 1 선행 상승 — 베이스가 없으면 사이트 3개월 최대상승으로 대신 본다
  const pm = m ? m.priorMovePct : item.maxRise3m;
  out.push(pm == null ? row('선행 상승', NA, '자료 없음')
    : row('선행 상승', pm >= 30 ? OK : NO, `${m ? '선행 상승' : '3개월 최대상승'} ${r1(pm, 0)}%${pm < 30 && pm >= 20 ? ' (약함)' : ''} · 기준 30%↑`));
  // 2 횡보 길이
  out.push(noBase ? row('횡보 길이', NA, why)
    : row('횡보 길이', m.baseWeeks >= 2 && m.baseWeeks <= 8 ? OK : NO, `베이스 ${m.baseWeeks}주${m.baseWeeks < 2 ? ' — 너무 짧음' : m.baseWeeks > 8 ? ' — 길다' : ''} · 기준 2~8주`));
  // 3 저점 높아짐 + 폭 좁아짐
  out.push(noBase ? row('저점 높아짐', NA, why)
    : row('저점 높아짐', m.higherLows >= 1 && m.contraction != null && m.contraction < 1 ? OK : NO,
      `저점 상승 ${m.higherLows}회 · 진폭 ${m.contraction == null ? '—' : r1(m.contraction, 2)}배(1 미만이면 좁아짐)`));
  // 4 깊이 — 선행 상승의 절반 이하
  out.push(noBase ? row('깊이', NA, why)
    : row('깊이', m.priorMovePct > 0 && m.depthPct <= m.priorMovePct / 2 ? OK : NO,
      `베이스 깊이 ${m.depthPct}% · ADR ${S.adrPct}%의 ${S.adrPct ? r1(m.depthPct / S.adrPct, 1) : '—'}배 · 선행 상승의 절반 ${r1(m.priorMovePct / 2, 0)}%`));
  // 5 이평선 위 — 20일선·50일선 (50일선 아래는 원문 금지 조건)
  const last = bars && bars.length ? bars[bars.length - 1].c : null;
  const ma20 = smaV(bars, 20, 'c'), ma50 = smaV(bars, 50, 'c');
  out.push(last == null || ma20 == null || ma50 == null ? row('이평선 위', NA, '봉 부족')
    : row('이평선 위', last > ma20 && last > ma50 ? OK : NO,
      `종가 ${r1(last, 2)} · 20일선 ${r1(ma20, 2)} · 50일선 ${r1(ma50, 2)}${last <= ma50 ? ' — 50일선 아래(원문: 사지 않음)' : ''}`));
  // 6 거래량 마름 — 최근 5일 ÷ 20일 평균
  const v5 = smaV(bars, 5, 'v'), v20 = smaV(bars, 20, 'v');
  const dry = v5 != null && v20 ? v5 / v20 : null;
  out.push(dry == null ? row('거래량 마름', NA, '봉 부족')
    : row('거래량 마름', dry <= 0.7 ? OK : NO, `최근 5일 거래량 = 20일 평균의 ${r1(dry, 2)}배${dry > 0.7 && dry <= 1 ? ' (보통)' : ''} · 기준 0.7 이하`));
  // 7 돌파 거래량 — 돌파한 종목만 판정
  if (S && S.state === 'post' && S.breakDate && bars) {
    const i = bars.findIndex((b) => new Date(b.t).toISOString().slice(0, 10) === S.breakDate);
    const avg = i >= 20 ? bars.slice(i - 20, i).reduce((a, b) => a + (b.v || 0), 0) / 20 : null;
    const ratio = avg ? bars[i].v / avg : null;
    out.push(ratio == null ? row('돌파 거래량', NA, `${S.breakDate} 돌파 — 거래량 비교 불가`)
      : row('돌파 거래량', ratio >= 2 ? OK : NO, `${S.breakDate} 돌파봉 거래량 = 20일 평균의 ${r1(ratio, 2)}배 · 기준 2배`));
  } else out.push(row('돌파 거래량', NA, noBase ? why : '아직 돌파 전 — 돌파일에 20일 평균 2배가 실리는지 본다'));
  // 8 피벗 거리 — 피벗 아래 1 ADR 이내
  out.push(noBase ? row('피벗 거리', NA, why)
    : S.state === 'post' ? row('피벗 거리', NO, `이미 ${S.breakDate} 피벗 ${S.pivot} 돌파 — 추격 구간`)
    : row('피벗 거리', S.distToPivotAdr >= -1 ? OK : NO, `피벗 ${S.pivot}까지 ${S.distToPivotPct}% (${S.distToPivotAdr} ADR) · 기준 1 ADR 이내`));
  // 9 손절 폭 ≤ ADR
  out.push(noBase || S.riskPerSharePct == null ? row('손절 폭', NA, why)
    : row('손절 폭', S.riskPerSharePct <= S.adrPct ? OK : NO, `예비 손절 폭 ${S.riskPerSharePct}% · ADR ${S.adrPct}%`));
  // 10 10일선 이격 ≤ 2 ADR
  const ext = S && S.extensionAdr != null ? S.extensionAdr : item.ext10Adr;
  out.push(ext == null ? row('10일선 이격', NA, '자료 없음')
    : row('10일선 이격', ext <= 2 ? OK : NO, `10일선 위 ${r1(ext, 1)} ADR${ext > 3 ? ' — 이미 떠 있다' : ''} · 기준 2 ADR 이하`));
  // 11 시장
  const v = market && market.verdict;
  out.push(!v ? row('시장', NA, '시장 판정 없음')
    : row('시장', v === 'green' ? OK : NO, `한별 판정 ${({ green: '초록', yellow: '노랑(보통)', red: '빨강' })[v] || v}`));
  return out;
}

// 순이익 문자열(흑자전환 등)과 숫자(%)를 함께 다룬다
const niNum = (x) => (typeof x === 'number' && Number.isFinite(x) ? x : null);

function canslim({ item = {}, fs = null, detail = null, kis = null, cnbc = null, market = null, dry = null } = {}) {
  const out = [];
  const q = (detail && detail.financials && detail.financials.quarters) || [];
  const ni = (fs && Array.isArray(fs.ni)) ? fs.ni : null;
  // C — 최근 분기 이익 +25%↑ 또는 흑자전환 (사이트 fs 우선, 없으면 SEC)
  {
    const v0 = ni ? ni[0] : undefined;
    if (v0 === '흑자전환') out.push(row('C 최근 분기 이익', OK, '최근 분기 흑자전환 (순이익 기준, 주식 수 변동 미반영)'));
    else if (niNum(v0) != null) out.push(row('C 최근 분기 이익', v0 >= 25 ? OK : NO, `최근 분기 순이익 전년비 ${r1(v0, 1)}% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)`));
    else if (typeof v0 === 'string' && v0) out.push(row('C 최근 분기 이익', NO, `최근 분기 ${v0} (순이익 기준)`));
    else if (q[0] && q[0].yoy && q[0].yoy.profit != null) out.push(row('C 최근 분기 이익', q[0].yoy.profit >= 25 ? OK : NO, `${q[0].periodEnd} 분기 ${detail.financials.profitLabel || '이익'} 전년비 ${r1(q[0].yoy.profit, 1)}% · 기준 +25% (SEC, 주식 수 변동 미반영)`));
    else out.push(row('C 최근 분기 이익', NA, '분기 이익 자료 없음'));
  }
  // A — 최근 3분기 이익이 모두 늘었으면 부분 충족(최근 1년 성장). 3년 추세·ROE 는 확인 불가.
  //   사이트 순이익은 % 또는 문자열(흑자전환·적자확대·적자축소·적자전환). 흑자전환 = 증가, 적자확대·적자전환·적자축소(여전히 적자) = 증가 아님.
  {
    const sig = (x) => (niNum(x) != null ? niNum(x) > 0 : x === '흑자전환' ? true : (typeof x === 'string' && /적자/.test(x)) ? false : null);
    const fromFs = ni ? ni.map(sig).filter((x) => x != null) : [];
    const fromSec = q.slice(0, 4).map((x) => (x.yoy && x.yoy.profit != null ? x.yoy.profit > 0 : null)).filter((x) => x != null);
    const use = fromFs.length >= 3 ? { v: fromFs, src: `사이트 최근 3분기 순이익 ${ni.map((x) => (niNum(x) != null ? r1(x, 0) + '%' : x)).join('/')}` }
      : fromSec.length >= 3 ? { v: fromSec, src: `SEC 최근 ${fromSec.length}분기 이익 전년비 ${q.slice(0, fromSec.length).map((x) => r1(x.yoy.profit, 0) + '%').join('/')}` } : null;
    if (!use) out.push(row('A 연간 이익 성장', NA, '최근 분기 이익 자료가 3개 미만 — 3년 추세·ROE 자료 없음'));
    else out.push(row('A 연간 이익 성장', use.v.every(Boolean) ? OK : NO, `${use.src} — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가`));
  }
  // N — 52주 고점 근처 + 최근 60일 안의 기사(출처 링크 있는 것)
  {
    const h = item.high52;
    const today = Date.now();
    const recent = (arr) => (arr || []).filter((x) => x && x.url && x.date && (today - new Date(String(x.date).slice(0, 10))) / 864e5 <= 60);
    const n = recent(cnbc).length + recent(((detail && detail.news && detail.news.items) || [])).length;
    if (h == null) out.push(row('N 새로운 것', NA, '52주 고점 대비 자료 없음'));
    else out.push(row('N 새로운 것', h >= 90 && n > 0 ? OK : NO, `52주 고점의 ${r1(h, 0)}% · 최근 60일 기사 ${n}건(CNBC·나스닥)${h >= 90 && !n ? ' — 새 재료 기사 없음' : ''}`));
  }
  // S — 수급: 쉬는 동안 거래량이 마르거나(5일/20일 ≤0.7) 오른 날 거래가 크게 늘면(거래대금 2배↑) 충족 + 상장주식수(KIS)
  {
    const sh = kis && kis.shares ? `상장주식 ${(kis.shares / 1e6).toFixed(0)}M주(한국투자증권)` : '상장주식 수 자료 없음';
    const vx = item.volx, up = item.ret1d != null && item.ret1d > 0;
    if (dry == null && vx == null) out.push(row('S 수급', NA, sh));
    else {
      const ok = (dry != null && dry <= 0.7) || (up && vx != null && vx >= 2);
      out.push(row('S 수급', ok ? OK : NO, `최근 5일 거래량 ${dry == null ? '—' : r1(dry, 2) + '배'}(20일 평균 대비) · 오늘 거래대금 ${vx == null ? '—' : r1(vx, 2) + '배'}${up ? '(상승일)' : ''} · ${sh} · 유통주식은 확인 불가`));
    }
  }
  // L — 1·3·6개월 중 가장 높은 순위가 상위 20% 이내
  {
    const ranks = [item.rnk1, item.rnk3, item.rnk6].filter((x) => x != null);
    if (!ranks.length) out.push(row('L 주도주', NA, '상대강도 순위 없음'));
    else { const best = Math.min(...ranks);
      out.push(row('L 주도주', best <= 20 ? OK : NO, `상대강도 상위 1M ${item.rnk1 ?? '—'}% · 3M ${item.rnk3 ?? '—'}% · 6M ${item.rnk6 ?? '—'}% · 기준 상위 20%`)); }
  }
  out.push(row('I 기관 보유', NA, '기관 보유 자료를 받지 않는다'));
  {
    const v = market && market.verdict;
    out.push(!v ? row('M 시장 방향', NA, '시장 판정 없음')
      : row('M 시장 방향', v === 'green' ? OK : NO, `한별 판정 ${({ green: '초록', yellow: '노랑', red: '빨강' })[v] || v}${market.finra === 'danger' ? ' · 마진부채 경고(+40% 초과)' : market.finra === 'warn' ? ' · 마진부채 주의(+30% 초과)' : ''}`));
  }
  return out;
}

function dryUp(bars) { const v5 = smaV(bars, 5, 'v'), v20 = smaV(bars, 20, 'v'); return v5 != null && v20 ? v5 / v20 : null; }

module.exports = { qullamaggie, canslim, dryUp, OK, NO, NA };
