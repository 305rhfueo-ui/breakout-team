'use strict';
// 종목 상세(실적 · 뉴스 · 8-K · 국내 리포트) 수집과 에이전트용 축약.
// run-breakout(12-0 팝업 상세) 과 prepare-llm-args / prepare-deepdive-args 가 같이 쓴다.
//   fetchDetail(ticker, dateStr) → { detail, gotAny }   캐시 도장은 호출처가 찍는다
//   slimDetail(detail)           → 에이전트가 안 쓰는 키를 뺀 사본 (파일 20~30% 절감)

async function fetchDetail(ticker, dateStr) {
  const { getQuarterlyFinancials, getFilings } = require('../data/sec-edgar');
  const { getTickerNews } = require('../data/news-rss');
  const kr = require('../data/kr-reports');
  const detail = { fetchedAt: dateStr };
  try {
    const info = await kr.lookupTicker(ticker);
    detail.nameKo = info && info.ok ? info.nameKo : null;
    detail.nameEn = info && info.ok ? info.nameEn : null;
    detail.infomaxCode = info && info.ok ? info.code : null;
  } catch (e) { /* 매핑 실패해도 진행 */ }
  try {
    const f = await getQuarterlyFinancials(ticker);
    if (f.ok) detail.financials = f;
    else detail.financialsError = f.error;
  } catch (e) { detail.financialsError = e.message; }
  try {
    const nw = await getTickerNews(ticker, { nameHint: detail.nameEn || null, limit: 8 });
    if (nw.ok) detail.news = nw;
  } catch (e) { /* noop */ }
  try {
    const fl = await getFilings(ticker, { forms: ['8-K'], limit: 6 });
    if (fl.ok) detail.filings = fl.filings;
  } catch (e) { /* noop */ }
  try {
    const rp = await kr.getReports(ticker, { months: 12 });
    if (rp.ok) detail.krReports = { total: rp.total, reports: rp.reports.slice(0, 10), note: rp.note };
  } catch (e) { /* noop */ }
  // ⚠️ 하위 수집이 전부 실패한 종목은 캐시 도장을 찍지 않는다 — 찍으면 10거래일 동안 근거 0 인 채 LLM 대상이 된다.
  const gotAny = !!(detail.financials || detail.news || detail.filings || detail.krReports);
  return { detail, gotAny };
}

function slimDetail(d) {
  if (!d) return null;
  const out = { fetchedAt: d.fetchedAt, nameKo: d.nameKo || null, nameEn: d.nameEn || null };
  if (d.financials && d.financials.ok) {
    const f = d.financials;
    out.financials = { profitLabel: f.profitLabel, marginLabel: f.marginLabel, unit: f.unit, source_url: f.source_url,
      quarters: (f.quarters || []).slice(0, 4).map((q) => ({ periodEnd: q.periodEnd, derived: q.derived, revenue: q.revenue, profit: q.profit, netIncome: q.netIncome, margin: q.margin, yoy: q.yoy })) };
  } else if (d.financialsError) out.financialsError = d.financialsError;
  if (d.news && Array.isArray(d.news.items)) {
    out.news = { items: d.news.items.filter((x) => x.direct !== false).slice(0, 8).map((x) => ({ title: x.title, url: x.url, date: x.date, publisher: x.publisher })) };
  }
  if (Array.isArray(d.filings)) out.filings = d.filings.slice(0, 6).map((f) => ({ form: f.form, filingDate: f.filingDate, itemsKo: f.itemsKo, isEarnings: f.isEarnings, url: f.url }));
  if (d.krReports && Array.isArray(d.krReports.reports)) {
    out.krReports = { total: d.krReports.total, reports: d.krReports.reports.slice(0, 8).map((r) => ({ date: r.date, broker: r.broker, analyst: r.analyst, title: r.title, summary: r.summary, pdfUrl: r.pdfUrl })) };
  }
  return out;
}

module.exports = { fetchDetail, slimDetail };
