'use strict';
// LLM 워크플로에 넘길 인자를 준비한다.
// Claude 가 `start breakout` 에서 이 스크립트를 실행한 뒤 state/llm-in/_args.json 을 읽어
// 각 워크플로에 args 로 넘긴다.
//
// ⚠️ 재조사 선별 (2026-09-03): 로테이션은 "순서"만 바꾸고 cap 을 항상 채워서, 2팀은 직전 5회 안에
//    조사한 종목을 68% 다시 조사했고 5팀은 같은 업종을 87% 다시 조사했다(하루 약 300만 토큰의 절반).
//    이제 TTL 안이면 건너뛰고(run-breakout 이 지난 결과를 이월), 신규·TTL 경과·변화(돌파·8-K·차트확인) 만 조사한다.
//    cap 은 상한이지 목표가 아니다 — 에이전트 수가 줄어드는 것이 정상이다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, ensureDir, say, readJson } = require('./lib/util');
const rot = require('./lib/research-rotation');
const cal = require('./lib/market-calendar');

function loadWindowData(file, varName) {
  const src = fs.readFileSync(path.join(paths.dashboardData, file), 'utf8');
  const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  if (!m) throw new Error(`${file} 파싱 실패 — run-breakout 을 먼저 실행하세요`);
  return JSON.parse(m[1]);
}

// _t2/{TICKER}.json 에 넣을 detail — 에이전트가 안 쓰는 키를 뺀다 (파일 20~30% 절감)
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

async function main() {
  loadEnv();
  ensureDir(paths.llmInDir);

  const t1 = loadWindowData('team1.js', 'TEAM1_DATA');
  const t2 = loadWindowData('team2.js', 'TEAM2_DATA');
  const t3 = loadWindowData('team3.js', 'TEAM3_DATA');
  const t4 = loadWindowData('team4.js', 'TEAM4_DATA');
  const t5 = loadWindowData('team5.js', 'TEAM5_DATA');
  const cc = loadWindowData('chartcheck.js', 'CHARTCHECK_DATA');
  const date = t1.generated;
  const sessionDate = (t1.data_source && t1.data_source.sessionDate) || cal.prevTradingDay(date);

  const { getMarketNews } = require('./data/news-rss');
  const nw = await getMarketNews();

  const out = { date, sessionDate };

  out.team1args = {
    date,
    candidates: nw.items.slice(0, 22),
    candidatesTotal: nw.items.length,
    context: {
      qqqKo: t1.qqq.ko, qqqPrice: t1.qqq.price,
      ma10: t1.qqq.ma10, ma20: t1.qqq.ma20, ma50: t1.qqq.ma50,
      finraKo: t1.finra.ko,
      sectors: (t1.leaders.sectors || []).slice(0, 5),
      over150: t1.leaders.market_overheat.over150,
      barsNotice: (t1.data_source && t1.data_source.barsNotice) ? t1.data_source.barsNotice.ko : null,
    },
  };

  // ── 조사 순서 — 오래 안 본 종목 → 돈이 들어오는 업종 → 지표 순 ──
  const rc = rot.loadCache();
  const flowRank = rot.flowRankOf(t5.flow ? t5.flow.industries : null);
  if (!flowRank.size) say('WARN', '자금흐름 데이터 없음 — 리서치 우선순위에서 업종 항목이 빠집니다');

  // "변화 있음" 판정 재료 — 오늘 세션 돌파 · 차트확인 진입 · 최근 8-K 실적발표
  const brkToday = new Set((t3.breakouts || []).filter((b) => b.breakDate && b.breakDate >= (cal.prevTradingDay(sessionDate) || sessionDate)).map((b) => b.ticker));
  const ccSet = new Set((cc.items || []).map((c) => c.ticker));
  const recentEarnings = (p) => {
    const fl = (p.detail && p.detail.filings) || [];
    const lim = cal.prevTradingDay(cal.prevTradingDay(sessionDate) || sessionDate) || sessionDate;
    return fl.some((f) => f.isEarnings && f.filingDate && f.filingDate >= lim);
  };
  const changed2 = (p, entry) => {
    if (brkToday.has(p.ticker)) return '돌파';
    if (ccSet.has(p.ticker)) return '차트확인';
    if (recentEarnings(p)) return '8-K 실적';
    if (!p.research || !['done', 'no_source'].includes(p.research.status)) return '이월분 없음';
    return null;
  };

  const TTL = Number(process.env.RESEARCH_TTL || 5);
  const t2Ordered = rot.orderForResearch((t2.picks || []).filter((p) => p.detail), {
    flowRank, cache: rc, bucket: 'team2', today: date, ttl: TTL, metric: (p) => p.bestPct || 0,
  });
  const t2cap = Number(process.env.RESEARCH_CAP || 20);
  const sel2 = rot.selectForResearch(t2Ordered, { cache: rc, bucket: 'team2', today: date, ttl: TTL, cap: t2cap, changed: changed2 });
  const t2dir = path.join(paths.llmInDir, '_t2');
  ensureDir(t2dir);
  for (const f of fs.readdirSync(t2dir)) fs.unlinkSync(path.join(t2dir, f));   // 어제 티커가 남으면 안 된다
  const t2sel = sel2.picked;
  // 사이트 컨센서스·최근 3분기 (2026-09-07) — 에이전트가 "Node 확정 수치" 로 인용한다
  const siteBlock = (p) => ({
    targetStatus: p.targetStatus ?? null, saleCy: p.saleCy ?? null, saleNy: p.saleNy ?? null, epsCy: p.epsCy ?? null, epsNy: p.epsNy ?? null,
    est: p.est || null, newHigh52: p.newHigh52 ?? null, bbCenterBrk5d: p.bbCenterBrk5d ?? null, fs: p.fs || null,
    qualifiedBy: p.qualifiedBy || [], top2Since: p.top2Since || null, top2Streak: p.top2Streak || null,
  });
  for (const p of t2sel) {
    fs.writeFileSync(path.join(t2dir, `${p.ticker}.json`), JSON.stringify({
      ticker: p.ticker, sector: p.sector, industry: p.industry, nameKo: p.nameKo || null,
      site: siteBlock(p),
      detail: slimDetail(p.detail),
    }, null, 1), 'utf8');
  }
  const BP = t2.themes.byPeriod || null, CR = t2.themes.cross || null;
  out.team2args = {
    date, cap: t2cap, argsDir: t2dir,
    clusters: (t2.themes.clusters || []).slice(0, 14),
    // 기간별 3세트 + 교차 — Node 확정. 테마종합 에이전트 1명이 받는다 (사용자 결정 2026-09-07)
    themesByPeriod: BP ? Object.fromEntries(Object.entries(BP).map(([k, b]) => [k, {
      count: b.count, headline: b.headline, topSectors: b.topSectors, topIndustries: b.topIndustries,
      clusters: (b.clusters || []).slice(0, 10), tickers: b.tickers }])) : null,
    cross: CR ? { persistent: CR.persistent, newEntrants: CR.newEntrants, midTerm: CR.midTerm, fading: CR.fading, other: CR.other, counts: CR.counts, labels: CR.labels } : null,
    crossDetail: t2.themes.crossDetail || null,
    picks: t2sel.map((p) => ({
      ticker: p.ticker, sector: p.sector, industry: p.industry, nameKo: p.nameKo || null,
      rs: p.rs, qualifiedBy: p.qualifiedBy || [], adr: p.adr, high52: p.high52, div50: p.div50, div200: p.div200,
      ret1m: p.ret1m, ret3m: p.ret3m, ret6m: p.ret6m, cyTrend: p.cyTrend, nyTrend: p.nyTrend,
      upCount: p.upCount, downCount: p.downCount, marketCap: p.marketCap,
      ...siteBlock(p),
    })),
    skipped: sel2.skipped.map((s) => s.key),
    picksTotal: (t2.picks || []).length,
  };

  // ── 4팀 — 셋업·거래량 적격 종목만, 그 안에서 로테이션. ⑥(촉매 없음) 판정은 TTL 안 재조사 제외 ──
  const t4elig = (t4.items || []).filter(rot.team4Eligible);
  const t4Ordered = rot.orderForResearch(t4elig, { flowRank, cache: rc, bucket: 'team4', today: date, ttl: TTL, metric: (i) => i.volx || 0 });
  const t4cap = Number(process.env.CATALYST_CAP || 12);
  const changed4 = (i) => {
    const ph = i.congestion && i.congestion.phase;
    if (['retest', 'bounce_trigger', 'breakout'].includes(ph)) return `국면 ${ph}`;
    if (!i.catalyst || i.catalyst.status !== 'done') return '이월분 없음';
    return null;
  };
  const skip4 = (i, entry) => !!(entry && entry.cat === 6 && rot.tradingDaysSince(entry.last, date) < TTL);
  const sel4 = rot.selectForResearch(t4Ordered, { cache: rc, bucket: 'team4', today: date, ttl: TTL, cap: t4cap, changed: changed4, skip: skip4 });
  const epPick = sel4.picked;

  // 2팀 detail 재사용 + 없는 티커만 새로 수집. news 는 direct 만.
  const detailByTicker = new Map((t2.picks || []).filter((p) => p.detail).map((p) => [p.ticker, p.detail]));
  const { getTickerNews } = require('./data/news-rss');
  const { getFilings } = require('./data/sec-edgar');
  const t4items = [];
  let reused = 0, fetched = 0;
  for (const i of epPick) {
    const d = detailByTicker.get(i.ticker);
    let news = null, filings = null, financials = null, krReports = null;
    if (d) {
      const sd = slimDetail(d);
      news = (sd.news && sd.news.items) || null; filings = sd.filings || null; financials = sd.financials || null; krReports = sd.krReports || null;
      reused++;
    } else if (!process.env.SKIP_T4_NEWS) {
      try { const nwr = await getTickerNews(i.ticker, { limit: 8 }); if (nwr.ok) news = nwr.items.filter((x) => x.direct !== false).map((x) => ({ title: x.title, url: x.url, date: x.date, publisher: x.publisher })); } catch (e) { /* 없으면 없는 대로 */ }
      try { const fl = await getFilings(i.ticker, { forms: ['8-K'], limit: 6 }); if (fl.ok) filings = fl.filings; } catch (e) { /* noop */ }
      fetched++;
    }
    t4items.push({
      ticker: i.ticker, sector: i.sector, industry: i.industry, marketCap: i.marketCap || null,
      volx: i.volx, volSurgeWk: i.volSurgeWk, aboveMa150: i.aboveMa150,
      brk60d: i.brk60d, clsPos: i.clsPos, high52: i.high52,
      targetStatus: i.targetStatus ?? null, saleCy: i.saleCy ?? null, saleNy: i.saleNy ?? null, epsCy: i.epsCy ?? null, epsNy: i.epsNy ?? null,
      cyTrend: i.cyTrend ?? null, nyTrend: i.nyTrend ?? null, newHigh52: i.newHigh52 ?? null, bbCenterBrk5d: i.bbCenterBrk5d ?? null, fs: i.fs || null,
      congestion: i.congestion, news, filings, financials: financials || (i.fs ? null : null), krReports,
    });
  }
  say('SYSTEM', `4팀 근거: 2팀 재사용 ${reused}종목 · 신규 수집 ${fetched}종목`);
  const t4dir = path.join(paths.llmInDir, '_t4');
  ensureDir(t4dir);
  for (const f of fs.readdirSync(t4dir)) fs.unlinkSync(path.join(t4dir, f));
  for (const it of t4items) {
    fs.writeFileSync(path.join(t4dir, `${it.ticker}.json`),
      JSON.stringify({ ticker: it.ticker, news: it.news, filings: it.filings, financials: it.financials, krReports: it.krReports,
        site: { targetStatus: it.targetStatus, saleCy: it.saleCy, saleNy: it.saleNy, epsCy: it.epsCy, epsNy: it.epsNy, cyTrend: it.cyTrend, nyTrend: it.nyTrend, newHigh52: it.newHigh52, bbCenterBrk5d: it.bbCenterBrk5d, fs: it.fs } }, null, 1), 'utf8');
  }
  out.team4args = {
    date, cap: epPick.length, argsDir: t4dir,
    items: t4items.map(({ news, filings, financials, krReports, ...light }) => light),   // 뉴스·공시는 파일에서 읽는다
    eligibleTotal: t4elig.length, universeTotal: (t4.items || []).length,
    skipped: sel4.skipped.map((s) => s.key), skippedCat6: sel4.ineligible.map((s) => s.key),
  };

  // ── 5팀 — 후보 업종 풀 → TTL 안이면 건너뛴다. 순위가 크게 움직였으면 재조사 ──
  // 어느 기간으로 뽑혔는지 태그 (pickedBy) — 예전엔 dedupe 하면서 기간 정보가 사라졌다
  const pickedBy = new Map();
  for (const [k, list] of [['m6', t5.strictTop2.m6], ['m1', t5.strictTop2.m1], ['m3', t5.strictTop2.m3]]) {
    for (const x of (list || [])) { if (!pickedBy.has(x.key)) pickedBy.set(x.key, []); pickedBy.get(x.key).push(k); }
  }
  for (const x of (t5.top10by6 || [])) { if (!pickedBy.has(x.key)) pickedBy.set(x.key, []); if (!pickedBy.get(x.key).includes('top10')) pickedBy.get(x.key).push('top10'); }
  const pool = [...(t5.strictTop2.m6 || []), ...(t5.strictTop2.m1 || []), ...(t5.strictTop2.m3 || []), ...(t5.top10by6 || [])];
  const seen = new Set();
  const uniqAll = pool.filter((x) => !seen.has(x.key) && seen.add(x.key)).map((x) => ({ ...x, pickedBy: pickedBy.get(x.key) || [] }));
  const uniq = uniqAll.slice(0, 6);
  const flowByKey = new Map(((t5.flow && t5.flow.industries) || []).map((x) => [x.key, x]));
  const carried5 = new Set(((t5.llm && t5.llm.industries) || []).filter((x) => x.carried).map((x) => x.key));
  const changed5 = (x, entry) => {
    if (!carried5.has(x.key)) return '이월분 없음';
    const prev = entry && entry.rankPct6;
    const now = x.rankPct && x.rankPct.m6;
    if (Number.isFinite(prev) && Number.isFinite(now) && Math.abs(now - prev) >= 3) return `순위 ${prev}→${now}`;
    return null;
  };
  const sel5 = rot.selectForResearch(uniq, { cache: rc, bucket: 'team5', today: date, ttl: TTL, cap: 6, keyOf: (x) => x.key, changed: changed5 });
  const t5full = {
    date, cap: 6, poolTotal: uniqAll.length,
    industries: sel5.picked.map((x) => {
      const members = (t2.picks || []).filter((p) => `${p.sector}|${p.industry}` === x.key).map((p) => p.ticker);
      const memberNews = [];
      for (const tk of members) {
        const d = detailByTicker.get(tk);
        for (const it of ((d && d.news && d.news.items) || []).filter((z) => z.direct).slice(0, 3)) {
          memberNews.push({ ticker: tk, date: it.date, publisher: it.publisher, title: it.title, url: it.url });
        }
      }
      const f = flowByKey.get(x.key);
      const flow = f ? { FRANK: f.FRANK, frank25: f.frank25, f10: f.f10, f25: f.f25, d50: f.d50, d200: f.d200, d200Delta: f.d200Delta,
        cy: f.cy, ny: f.ny, upRatio: f.upRatio, coverage: f.coverage, winRate: f.winRate, stage: f.stage, stageKo: f.stageKo, flow: f.flow } : null;
      return { ...x, members, memberNews, flow };
    }),
  };
  const t5file = path.join(paths.llmInDir, '_t5args.json');
  fs.writeFileSync(t5file, JSON.stringify(t5full, null, 1), 'utf8');
  out.team5args = {
    date, cap: 6, argsFile: t5file, poolTotal: uniqAll.length,
    industries: t5full.industries.map(({ memberNews, ...light }) => light),
    candidates: uniq.map((x) => ({ key: x.key, industry: x.industry, rankPct: x.rankPct, pickedBy: x.pickedBy })),
    skipped: sel5.skipped.map((s) => s.key),
  };

  // ── 실장 종합에 넘길 요약 (원본 전체는 너무 크다) ──
  const ds = t1.data_source || {};
  const crossTop = (list, key) => ((t2.themes.crossDetail || {})[list] || (CR ? CR[list].map((t) => ({ ticker: t })) : []))
    .slice(0, 8).map((x) => ({ ticker: x.ticker, streak: x.streak ? x.streak[key] : null, since: x.since ? x.since[key] : null }));
  out.chiefTeams = {
    dataNotice: t2.dataNotice || null,
    barsNotice: ds.barsNotice || null,
    sessionDate: ds.sessionDate || null, sessionMismatch: !!ds.sessionMismatch,
    // 사이트 메타 (2026-09-07): 사용자 시트 시장국면 — QQQ 판정을 덮어쓰지 말고 병기 · 신규 조회 수 · 품질
    siteCondition: ds.siteCondition || null, apiCalled: ds.apiCalled || null, siteDegraded: !!ds.degraded, dataQuality: ds.dataQuality || null,
    team1: { verdict: t1.qqq.verdict, ko: t1.qqq.ko, price: t1.qqq.price, ma10: t1.qqq.ma10, ma20: t1.qqq.ma20, ma50: t1.qqq.ma50,
             slope10Pct: t1.qqq.slope10Pct ?? null, slope20Pct: t1.qqq.slope20Pct ?? null,
             goldenCross: t1.qqq.goldenCrossDate, deathCross: t1.qqq.deathCrossDate,
             indexDip: (t1.qqq.index_dip && t1.qqq.index_dip.ko) || null,
             finra: { ko: t1.finra.ko, yoyPct: t1.finra.yoyPct, level: t1.finra.level,
                      latestMonth: t1.finra.latest ? t1.finra.latest.month : null, latestDebit: t1.finra.latest ? t1.finra.latest.debit : null,
                      priorDebit: t1.finra.prior ? t1.finra.prior.debit : null,
                      freeCreditCash: t1.finra.latest ? t1.finra.latest.freeCreditCash : null, freeCreditMargin: t1.finra.latest ? t1.finra.latest.freeCreditMargin : null, unit: t1.finra.unit || 'M$' },
             leaders: (t1.leaders.stocks || []).slice(0, 10).map((s) => ({ ticker: s.ticker, sector: s.sector, div50: s.div50, div200: s.div200, adr: s.adr, status: s.overheat.label })),
             sectors: (t1.leaders.sectors || []).slice(0, 6), overheat: t1.leaders.market_overheat.ko,
             reentryCount: t1.leaders.market_overheat.reentry ?? null, div200Median: t1.leaders.market_overheat.median ?? null },
    team2: { stats: t2.stats, themeHeadline: t2.themes.headline, picksTotal: (t2.picks || []).length,
             // 기간별 테마 헤드라인·교차 개수·지속/신규/퇴조 상위 8 (streak 일수) — 2026-09-07
             themeHeadlineByPeriod: BP ? { m1: `${BP.m1.count}종목 — ${BP.m1.headline}`, m3: `${BP.m3.count}종목 — ${BP.m3.headline}`, m6: `${BP.m6.count}종목 — ${BP.m6.headline}` } : null,
             crossCounts: CR ? CR.counts : null,
             crossTop: CR ? { persistent: crossTop('persistent', 'm6'), newEntrants: crossTop('newEntrants', 'm1'), fading: crossTop('fading', 'm6'), midTerm: crossTop('midTerm', 'm3') } : null,
             targetStatusCount: (t2.picks || []).filter((p) => p.targetStatus === true).length,
             top: (t2.picks || []).slice(0, 20).map((p) => ({ ticker: p.ticker, sector: p.sector, industry: p.industry, qualifiedBy: p.qualifiedBy || [],
               rsTop: p.bestPct ? Number((100 - p.bestPct).toFixed(1)) : null, adr: p.adr, high52: p.high52, volx: p.volx,
               div50: p.div50, div200: p.div200, cyTrend: p.cyTrend, nyTrend: p.nyTrend, upCount: p.upCount, downCount: p.downCount,
               targetStatus: p.targetStatus ?? null, saleCy: p.saleCy ?? null, epsCy: p.epsCy ?? null, newHigh52: p.newHigh52 ?? null,
               top2Streak: p.top2Streak || null })),
             topShown: Math.min((t2.picks || []).length, 20) },
    team3: {
      summary: t3.summary,
      unevaluated: (t3.summary && t3.summary.unevaluated) || [],
      // asOf = 배제 판정의 기준 봉 날짜(ET). 실행일(KST)과 하루 어긋나므로 돌파일과 비교할 땐 이걸 쓴다.
      dropped: (t3.dropped_today || []).map((d) => ({ ...d, date: d.asOf || d.date || sessionDate })),
      reentryBlocked: (t3.reentryBlocked || []).map((b) => b.ticker),
      breakoutTotal: (t3.breakouts || []).length,
      breakoutShown: Math.min((t3.breakouts || []).length, 15),
      breakoutVolumeConfirmed: (t3.breakouts || []).filter((b) => b.volumeConfirmed).length,
      breakouts: (t3.breakouts || []).slice(0, 15).map((b) => ({ ticker: b.ticker, priorHigh: b.priorHigh, breakDate: b.breakDate, closeAbovePct: b.closeAbovePct,
        breakVolRatio: b.breakVolRatio, volx: b.volx, volumeConfirmed: b.volumeConfirmed, volumeBasis: b.volumeBasis, congestionKo: b.congestionKo })),
    },
    team4: { universeHits: t4.universeHits, byPhase: t4.byPhase, excludedNoMarketCap: t4.excludedNoMarketCap || [],
             notableTotal: (t4.items || []).filter((i) => !['none', 'unknown'].includes(i.congestion.phase)).length,
             notable: (t4.items || []).filter((i) => !['none', 'unknown'].includes(i.congestion.phase)).slice(0, 10)
               .map((i) => ({ ticker: i.ticker, phase: i.congestion.phaseKo, months: i.congestion.baseMonths, volx: i.volx,
                 baseHigh: i.congestion.baseHigh, baseLow: i.congestion.baseLow, distToPivotPct: i.congestion.distToPivotPct, score: i.congestion.score, trigger: i.congestion.buyTrigger })) },
    team5: { top2m6: (t5.strictTop2.m6 || []).map((x) => ({ industry: x.industry, wrs: x.wrs, rankPct: x.rankPct })),
             sectors: (t5.sectors || []).slice(0, 8) },
    chartCheck: cc.items,
    chartCheckTotal: cc.total ?? (cc.items || []).length,
  };

  const file = path.join(paths.llmInDir, '_args.json');
  fs.writeFileSync(file, JSON.stringify(out), 'utf8');

  console.log(`\n════════ LLM 워크플로 인자 준비 완료 ════════`);
  console.log(`날짜        ${date} (RS 세션 ${sessionDate})`);
  console.log(`1팀 뉴스후보 ${out.team1args.candidates.length}건`);
  console.log(`2팀 종목     조사 ${t2sel.length}개 (상한 ${t2cap}) · TTL(${TTL}거래일) 안 이월 ${sel2.skipped.length}개 · 후보 ${t2Ordered.length}/${(t2.picks || []).length}`);
  if (BP) console.log(`  기간별     1M ${BP.m1.count} · 3M ${BP.m3.count} · 6M ${BP.m6.count} · 교차 지속 ${CR.counts.persistent}/신규 ${CR.counts.newEntrants}/중기 ${CR.counts.midTerm}/퇴조 ${CR.counts.fading}`);
  console.log(`  조사 이유  ${sel2.why.join(', ') || '없음'}`);
  if (sel2.skipped.length) console.log(`  이월       ${sel2.skipped.map((s) => `${s.key}@${s.last}`).join(', ')}`);
  console.log(`4팀 종목     조사 ${epPick.length}개 (상한 ${t4cap}) · 적격 ${t4elig.length}/${(t4.items || []).length} · 이월 ${sel4.skipped.length} · ⑥재조사 제외 ${sel4.ineligible.length}`);
  console.log(`  조사 이유  ${sel4.why.join(', ') || '없음'}`);
  console.log(`5팀 업종     조사 ${sel5.picked.length}개 · 이월 ${sel5.skipped.length} · 후보 풀 ${uniqAll.length}`);
  console.log(`  조사 이유  ${sel5.why.join(', ') || '없음'}`);
  console.log(`차트확인     ${(cc.items || []).length}개${cc.total > (cc.items || []).length ? ` (전체 ${cc.total})` : ''}`);
  console.log(`\n저장: ${file}`);
}

if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
module.exports = { main };
