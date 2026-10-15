'use strict';
// 애널리스트 전망치 — 야후 파이낸스 analysis 페이지와 같은 자료 (2026-10-15 사용자 요청: "전망치 조정·실적 서프라이즈")
//   https://finance.yahoo.com/quote/<T>/analysis/
//
// 받는 법(2026-10-15 실측): fc.yahoo.com 쿠키 → /v1/test/getcrumb → /v10/finance/quoteSummary?modules=…&crumb=
//   · User-Agent 는 "Mozilla/5.0" 만 — 브라우저 전체 UA 는 바로 429 가 났다.
//   · crumb 응답이 200 이 아니면 저장하지 않는다("Too Many Requests" 글자를 crumb 으로 쓰면 401 이 이어진다).
//   · 순차·초당 4건. 55종목 연속 호출에서 429 없음. 하루 캐시, 실패는 캐시 안 함, 절대 throw 하지 않는다.
//   · 차트(ta.js·bars.js)와 상태를 공유하지 않는다 — 밤 루프가 그쪽을 쓴다.
//
// 저장하는 것은 **정리값만**이다(투자의견 이력은 종목당 수백 줄 — 공개 저장소에 매일 커밋된다).
//   · 야후의 성장률·서프라이즈는 비율(0.137)이다 → 코드가 % 로 바꿔 소수 1자리로 저장한다(숫자 대조가 "13.7%"를 찾을 수 있게).
//   · 통화는 항목별 — TSM 은 EPS 달러·매출 대만달러. 문장에 통화를 박아 넣지 않는다.
//   · 0q 는 "다음에 발표될 분기"다. 이름 대신 결산일(endDate)로 부른다.
//
//   getEstimates('SNDK') → 정리값 | null
const cache = require('../lib/cache');

const UA = { 'User-Agent': 'Mozilla/5.0' };
const MODULES = 'earningsTrend,earningsHistory,upgradeDowngradeHistory,calendarEvents';
const throttle = cache.throttler(4);
let session = null;                       // { cookie, crumb } — 프로세스당 한 번

const raw = (o) => (o && typeof o === 'object' && Number.isFinite(o.raw) ? o.raw : null);
const r1 = (v) => (v == null ? null : Math.round(v * 10) / 10);
const r2 = (v) => (v == null ? null : Math.round(v * 100) / 100);
const pct = (ratio) => (ratio == null ? null : r1(ratio * 100));
const chg = (now, before) => (now == null || before == null || before === 0 ? null : r1(((now - before) / Math.abs(before)) * 100));
const ymdOf = (epoch) => (epoch == null ? null : new Date(epoch * 1000).toISOString().slice(0, 10));
const NM = 500;                            // ±500% 를 넘는 성장률은 작은 기준에서 폭발한 값 — 의미 없음(n/m)
const growthOf = (ratio) => { const p = pct(ratio); return p == null ? null : Math.abs(p) > NM ? 'n/m' : p; };

// quoteSummary 결과 하나 → 정리값 (순수 함수 — 테스트 대상)
function parseQuoteSummary(q, { ticker, today = new Date().toISOString().slice(0, 10) } = {}) {
  if (!q || typeof q !== 'object') return null;
  const trend = ((q.earningsTrend || {}).trend || []).filter((t) => ['0q', '+1q', '0y', '+1y'].includes(t.period));
  const periods = trend.map((t) => {
    const ee = t.earningsEstimate || {}, re = t.revenueEstimate || {};
    return { period: t.period, endDate: t.endDate || null,
      eps: r2(raw(ee.avg)), epsLow: r2(raw(ee.low)), epsHigh: r2(raw(ee.high)), epsYearAgo: r2(raw(ee.yearAgoEps)), epsAnalysts: raw(ee.numberOfAnalysts), epsGrowth: growthOf(raw(ee.growth)), epsCur: ee.earningsCurrency || null,
      rev: raw(re.avg), revAnalysts: raw(re.numberOfAnalysts), revYearAgo: raw(re.yearAgoRevenue), revGrowth: growthOf(raw(re.growth)), revCur: re.revenueCurrency || null };
  });
  const changes = trend.map((t) => {
    const e = t.epsTrend || {}, v = t.epsRevisions || {}, now = raw(e.current);
    return { period: t.period, endDate: t.endDate || null, cur: e.epsTrendCurrency || null, now: r2(now),
      d7: chg(now, raw(e['7daysAgo'])), d30: chg(now, raw(e['30daysAgo'])), d90: chg(now, raw(e['90daysAgo'])), ago90: r2(raw(e['90daysAgo'])),
      up7: raw(v.upLast7days), up30: raw(v.upLast30days), down7: raw(v.downLast7Days ?? v.downLast7days), down30: raw(v.downLast30days) };
  });
  const surprises = (((q.earningsHistory || {}).history) || [])
    .map((h) => ({ quarter: (h.quarter && h.quarter.fmt) || ymdOf(raw(h.quarter)), actual: r2(raw(h.epsActual)), estimate: r2(raw(h.epsEstimate)), surprisePct: pct(raw(h.surprisePercent)), cur: h.currency || null }))
    .filter((s) => s.actual != null && s.estimate != null)
    .sort((a, b) => String(b.quarter).localeCompare(String(a.quarter)));
  const since = Date.parse(today) / 1000 - 90 * 86400;
  const all = (((q.upgradeDowngradeHistory || {}).history) || []).filter((h) => h.epochGradeDate >= since).sort((a, b) => b.epochGradeDate - a.epochGradeDate);
  const ratings = {
    upgrades: all.filter((h) => h.action === 'up').length, downgrades: all.filter((h) => h.action === 'down').length, initiations: all.filter((h) => h.action === 'init').length,
    ptRaised: all.filter((h) => h.priceTargetAction === 'Raises').length, ptLowered: all.filter((h) => h.priceTargetAction === 'Lowers').length, total: all.length,
    recent: all.slice(0, 10).map((h) => ({ date: ymdOf(h.epochGradeDate), firm: h.firm, action: h.action, from: h.fromGrade || null, to: h.toGrade || null,
      ptAction: h.priceTargetAction || null, pt: h.currentPriceTarget || null, ptPrior: h.priorPriceTarget || null })),
  };
  const ce = ((q.calendarEvents || {}).earnings) || {};
  const ed = ((ce.earningsDate || [])[0] || {}).fmt || null;
  const nextEarnings = ed ? { date: ed, upcoming: ed >= today, estimated: !!ce.isEarningsDateEstimate } : null;
  if (!periods.length && !surprises.length && !all.length) return null;
  return { ticker, url: `https://finance.yahoo.com/quote/${encodeURIComponent(ticker)}/analysis/`, fetchedAt: today, source: 'Yahoo Finance',
    periods, changes, surprises, beats: surprises.filter((s) => s.surprisePct > 0).length, ratings, nextEarnings };
}

// 요약 문장은 화면(index.html estSummary)이 이 정리값으로 쓴다 — 숫자 비교로만 상향/하향을 말한다(AI 없음).

async function newSession() {
  try {
    const r1x = await fetch('https://fc.yahoo.com', { headers: UA, redirect: 'manual', signal: AbortSignal.timeout(15000) });
    const cookie = (r1x.headers.getSetCookie ? r1x.headers.getSetCookie() : []).map((c) => c.split(';')[0]).join('; ');
    if (!cookie) return null;
    const r2x = await fetch('https://query2.finance.yahoo.com/v1/test/getcrumb', { headers: { ...UA, cookie }, signal: AbortSignal.timeout(15000) });
    const crumb = (await r2x.text()).trim();
    if (r2x.status !== 200 || !crumb || /\s/.test(crumb) || crumb.length > 40) return null;
    return { cookie, crumb };
  } catch (e) { return null; }
}

async function fetchSummary(T) {
  for (let attempt = 0; attempt < 2; attempt++) {
    if (!session) session = await newSession();
    if (!session) return null;
    await throttle();
    try {
      const r = await fetch(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${encodeURIComponent(T)}?modules=${MODULES}&crumb=${encodeURIComponent(session.crumb)}`,
        { headers: { ...UA, cookie: session.cookie }, signal: AbortSignal.timeout(20000) });
      if (r.status === 401) { session = null; continue; }          // crumb 만료 — 1회 재발급
      if (!r.ok) return null;
      const j = await r.json();
      return (((j || {}).quoteSummary || {}).result || [])[0] || null;
    } catch (e) { return null; }
  }
  return null;
}

async function getEstimates(ticker, { today } = {}) {
  const T = String(ticker || '').trim().toUpperCase().replace(/\./g, '-');   // 야후 표기: BRK-B
  if (!/^[A-Z][A-Z\-]{0,8}$/.test(T)) return null;
  try {
    return await cache.through('estimates', T, async () => parseQuoteSummary(await fetchSummary(T), { ticker: T, today }));
  } catch (e) { return null; }
}

module.exports = { getEstimates, parseQuoteSummary, newSession };
