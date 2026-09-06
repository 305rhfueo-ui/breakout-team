'use strict';
// 실장(chief-report) 워크플로에 넘길 인자를 만든다.
//
//   node scripts/prepare-chief-args.js --team1=<1팀 결과> --team2=<2팀 결과> --team4=<4팀 결과> --team5=<5팀 결과>
//
// prepare-llm-args.js 가 만든 _args.json 의 chiefTeams 를 바탕으로
//   ① chief.js 의 flowCross (5팀 업종판정 × 2·3팀 종목 교차)
//   ② 1·2·4·5팀 LLM 이 조사한 내용의 요약 (+ 이월분은 team*.js 에서)
//   ③ Node 가 센 개수 (llmResearchedCount 등 — 실장이 배열을 세지 않게)
// 을 덧붙여 state/llm-in/_chiefargs.json 에 저장한다.
//
// ⚠️ flowCross 를 빼먹으면 실장이 "돈이 몰리는 섹터의 강세 종목"을 말하지 못한다.
// ⚠️ 2·4팀 결과를 안 넘기면 실장이 "상승 이유는 조사되지 않았습니다" 라고 **사실과 다르게** 쓴다
//    (2026-08-20 실제 발생). 이월분은 team2.js/team4.js 의 research/catalyst 에서 읽으므로
//    오늘 새로 조사한 것이 0개여도 실장은 전량을 본다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, say } = require('./lib/util');

function arg(n, d = null) { const p = process.argv.find((s) => s.startsWith(`--${n}=`)); return p ? p.slice(n.length + 3) : d; }

function loadWindowData(file, varName) {
  const src = fs.readFileSync(path.join(paths.dashboardData, file), 'utf8');
  const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  return m ? JSON.parse(m[1]) : null;
}

function readResult(file) {
  if (!file || !fs.existsSync(file)) return null;
  const j = JSON.parse(fs.readFileSync(file, 'utf8'));
  return j.result !== undefined ? j.result : j;
}

const finLine = (fin) => {
  const q = fin && Array.isArray(fin.quarters) && fin.quarters[0];
  if (!q) return null;
  const y = q.yoy || {};
  return { periodEnd: q.periodEnd, revenueM: q.revenue != null ? Math.round(q.revenue / 1e6) : null, revenueYoY: y.revenue ?? null,
           profitM: q.profit != null ? Math.round(q.profit / 1e6) : null, profitYoY: y.profit ?? null, profitLabel: fin.profitLabel || '영업이익', marginPct: q.margin ?? null };
};

function main() {
  loadEnv();
  const base = JSON.parse(fs.readFileSync(path.join(paths.llmInDir, '_args.json'), 'utf8'));
  const teams = { ...base.chiefTeams };
  const date = base.date;

  const chief = loadWindowData('chief.js', 'CHIEF_DATA');
  if (chief && chief.flowCross) teams.flowCross = chief.flowCross;
  else say('WARN', 'chief.js 에 flowCross 가 없다 — 실장이 섹터×종목 교차를 못 본다');

  const t2 = loadWindowData('team2.js', 'TEAM2_DATA');
  const t4 = loadWindowData('team4.js', 'TEAM4_DATA');
  const t5 = loadWindowData('team5.js', 'TEAM5_DATA');
  if (t2 && t2.dataNotice) { teams.dataNotice = t2.dataNotice; say('WARN', `데이터 경고를 실장에게 전달: ${t2.dataNotice.column} 오염`); }
  if (teams.barsNotice) say('WARN', '야후 봉 품질 경고를 실장에게 전달');

  // ── 1팀 LLM 뉴스 ──
  const t1r = readResult(arg('team1'));
  if (t1r && Array.isArray(t1r.digest)) {
    teams.team1 = { ...teams.team1, news: {
      digest: t1r.digest.slice(0, 10).map((d) => ({ headline: d.headline, impact: d.impact, whyMatters: d.whyMatters, publisher: ((d.sources || [])[0] || {}).publisher || null })),
      marketNarrative: t1r.marketNarrative || null, keyRisks: t1r.keyRisks || [],
    } };
  }

  // ── 2팀 — 오늘 조사분 + 이월분 (team2.js 의 research) ──
  const t2r = readResult(arg('team2'));
  const todayRes = new Map(((t2r && t2r.researched) || []).map((x) => [x.ticker, x]));
  const detailFin = new Map(((t2 && t2.picks) || []).map((p) => [p.ticker, p.detail && p.detail.financials]));
  const llmResearched = [];
  let carriedCount = 0;
  for (const p of ((t2 && t2.picks) || [])) {
    const x = todayRes.get(p.ticker) || (p.research && ['done', 'no_source'].includes(p.research.status) ? p.research : null);
    if (!x) continue;
    const carried = !todayRes.has(p.ticker);
    if (carried) carriedCount++;
    llmResearched.push({
      ticker: p.ticker, researchedOn: carried ? (p.research.researchedOn || null) : date, carried,
      top: ((x.whyRose || [])[0] || {}).statement || '근거 없음',
      against: ((x.counterpoint || [])[0] || {}).statement || null,
      revisions: (x.estimateRevisions || {}).direction || null,
      confidence: x.confidence || null,
      financials: finLine(detailFin.get(p.ticker)),
      cyTrend: p.cyTrend ?? null, nyTrend: p.nyTrend ?? null, upCount: p.upCount ?? null, downCount: p.downCount ?? null,
    });
  }
  teams.team2 = {
    ...teams.team2, llmResearched, llmResearchedCount: llmResearched.length, llmCarriedCount: carriedCount,
    llmFailed: (t2r && t2r.failed) || [],
    theme: (t2r && t2r.theme) || (t2 && t2.themes && (t2.themes.llm || t2.themes.llmCarried)) || null,
  };

  // ── 4팀 — 오늘 분류분 + 이월분 ──
  const t4r = readResult(arg('team4'));
  const todayCat = new Map(((t4r && t4r.items) || []).map((x) => [x.ticker, x]));
  const llmItems = [];
  for (const it of ((t4 && t4.items) || [])) {
    const x = todayCat.get(it.ticker) || (it.catalyst && it.catalyst.status === 'done' ? it.catalyst : null);
    if (!x) continue;
    llmItems.push({ ticker: it.ticker, carried: !todayCat.has(it.ticker), researchedOn: todayCat.has(it.ticker) ? date : (it.catalyst.researchedOn || null),
      category: x.categoryName || x.category, isHighlight: !!x.isHighlight, top: ((x.claims || [])[0] || {}).statement || '근거 없음',
      volx: it.volx, phase: it.congestion && it.congestion.phaseKo });
  }
  teams.team4 = { ...teams.team4, llmItems, llmItemsCount: llmItems.length, llmFailed: (t4r && t4r.failed) || [],
    summary: (t4r && t4r.summary) || (t4 && (t4.llm || t4.llmCarried)) || null };

  // ── 5팀 — 오늘 조사분 + 이월분 ──
  const t5r = readResult(arg('team5'));
  const todayInd = new Map(((t5r && t5r.industries) || []).map((x) => [x.key, x]));
  const allInd = [...todayInd.values(), ...(((t5 && t5.llm && t5.llm.industries) || []).filter((x) => x.carried && !todayInd.has(x.key)))];
  teams.team5 = { ...teams.team5,
    llmIndustries: allInd.map((x) => ({ industry: x.industry, driver: x.driver, durability: x.durability, keyStocks: x.keyStocks || [],
      top: ((x.whyStrong || [])[0] || {}).statement || '근거 없음', risk: x.risk || null, carried: !todayInd.has(x.key), researchedOn: todayInd.has(x.key) ? date : (x.researchedOn || null) })),
    summary: (t5r && t5r.summary) || (t5 && t5.llm && t5.llm.summary) || null,
  };

  const out = { date, teams };
  const file = path.join(paths.llmInDir, '_chiefargs.json');
  fs.writeFileSync(file, JSON.stringify(out), 'utf8');
  say('SYSTEM', `실장 인자 준비: ${date} · ${JSON.stringify(out).length}자 · flowCross ${teams.flowCross ? '있음' : '없음'}`
    + ` · 1팀 뉴스 ${teams.team1.news ? teams.team1.news.digest.length : 0}` + ` · 2팀 ${llmResearched.length}(이월 ${carriedCount})`
    + ` · 4팀 ${llmItems.length} · 5팀 ${allInd.length}건 · 차트확인 ${(teams.chartCheck || []).length}/${teams.chartCheckTotal ?? '?'}`);
  if (!llmResearched.length) say('WARN', '2팀 LLM 결과가 없다 — 실장이 "상승 이유 조사 안 됨"이라고 잘못 쓴다. --team2= 를 넘기거나 이월분을 확인하라');
  console.log(file);
}

if (require.main === module) main();
module.exports = { main };
