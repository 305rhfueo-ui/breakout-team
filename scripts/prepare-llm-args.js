'use strict';
// LLM 워크플로에 넘길 인자를 준비한다.
// Claude 가 `start breakout` 에서 이 스크립트를 실행한 뒤 state/llm-in/_args.json 을 읽어
// 각 워크플로에 args 로 넘긴다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, ensureDir, say } = require('./lib/util');
const rot = require('./lib/research-rotation');

function loadWindowData(file, varName) {
  const src = fs.readFileSync(path.join(paths.dashboardData, file), 'utf8');
  const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  if (!m) throw new Error(`${file} 파싱 실패 — run-breakout 을 먼저 실행하세요`);
  return JSON.parse(m[1]);
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

  const { getMarketNews } = require('./data/news-rss');
  const nw = await getMarketNews();

  const out = { date };

  out.team1args = {
    date,
    candidates: nw.items.slice(0, 22),
    context: {
      qqqKo: t1.qqq.ko, qqqPrice: t1.qqq.price,
      ma10: t1.qqq.ma10, ma20: t1.qqq.ma20, ma50: t1.qqq.ma50,
      finraKo: t1.finra.ko,
      sectors: (t1.leaders.sectors || []).slice(0, 5),
      over150: t1.leaders.market_overheat.over150,
    },
  };

  // ── 조사 순서 — 오래 안 본 종목 → 돈이 들어오는 업종 → 지표 순 ──
  // 상한을 올리지 않고 커버리지를 채우는 방법이다. 매일 같은 상위 N개만 조사하면
  // 나머지는 영원히 미조사로 남는다(2026-08-11 이전 동작).
  const rc = rot.loadCache();
  const flowRank = rot.flowRankOf(t5.flow ? t5.flow.industries : null);
  if (!flowRank.size) say('WARN', '자금흐름 데이터 없음 — 리서치 우선순위에서 업종 항목이 빠집니다');

  const t2Ordered = rot.orderForResearch((t2.picks || []).filter((p) => p.detail), {
    flowRank, cache: rc, bucket: 'team2', today: date, ttl: 5, metric: (p) => p.bestPct || 0,
  });
  out.team2args = {
    date, cap: Number(process.env.RESEARCH_CAP || 20),
    clusters: (t2.themes.clusters || []).slice(0, 14),
    picks: t2Ordered.map((p) => ({
      ticker: p.ticker, sector: p.sector, industry: p.industry,
      rs: p.rs, adr: p.adr, high52: p.high52, div200: p.div200,
      ret1m: p.ret1m, ret3m: p.ret3m, ret6m: p.ret6m,
      detail: p.detail,
    })),
  };

  // 4팀은 Congestion 셋업이 있거나 거래량이 특히 큰 종목 우선 — 그 안에서 로테이션
  const epPick = rot.orderForResearch(
    (t4.items || []).filter((i) => ['bounce_trigger', 'retest', 'breakout', 'base', 'extended'].includes(i.congestion.phase) || (i.volx ?? 0) >= 3),
    { flowRank, cache: rc, bucket: 'team4', today: date, ttl: 5, metric: (i) => i.volx || 0 },
  ).slice(0, Number(process.env.CATALYST_CAP || 12));
  out.team4args = {
    date, cap: epPick.length,
    items: epPick.map((i) => ({
      ticker: i.ticker, sector: i.sector, industry: i.industry,
      volx: i.volx, volSurgeWk: i.volSurgeWk, aboveMa150: i.aboveMa150,
      brk60d: i.brk60d, clsPos: i.clsPos, high52: i.high52,
      congestion: i.congestion,
      news: null, filings: null,   // 4팀 뉴스는 워크플로가 웹검색으로 보강
    })),
  };

  const pool = [...(t5.strictTop2.m6 || []), ...(t5.strictTop2.m1 || []), ...(t5.strictTop2.m3 || []), ...(t5.top10by6 || [])];
  const seen = new Set();
  const uniq = pool.filter((x) => !seen.has(x.key) && seen.add(x.key)).slice(0, 6);
  out.team5args = {
    date, cap: 6,
    industries: uniq.map((x) => ({
      ...x,
      members: (t2.picks || []).filter((p) => `${p.sector}|${p.industry}` === x.key).map((p) => p.ticker),
    })),
  };

  // 실장 종합에 넘길 요약 (원본 전체는 너무 크다)
  out.chiefTeams = {
    team1: { verdict: t1.qqq.verdict, ko: t1.qqq.ko, price: t1.qqq.price, ma10: t1.qqq.ma10, ma20: t1.qqq.ma20, ma50: t1.qqq.ma50,
             goldenCross: t1.qqq.goldenCrossDate, deathCross: t1.qqq.deathCrossDate,
             finra: { ko: t1.finra.ko, yoyPct: t1.finra.yoyPct, level: t1.finra.level },
             leaders: (t1.leaders.stocks || []).slice(0, 8).map((s) => ({ ticker: s.ticker, div200: s.div200, status: s.overheat.label })),
             sectors: (t1.leaders.sectors || []).slice(0, 5), overheat: t1.leaders.market_overheat.ko },
    team2: { stats: t2.stats, themeHeadline: t2.themes.headline,
             top: (t2.picks || []).slice(0, 15).map((p) => ({ ticker: p.ticker, sector: p.sector, industry: p.industry,
               rsTop: p.bestPct ? Number((100 - p.bestPct).toFixed(1)) : null, adr: p.adr, high52: p.high52, volx: p.volx, div200: p.div200 })) },
    team3: { summary: t3.summary, dropped: t3.dropped_today, breakouts: (t3.breakouts || []).slice(0, 10) },
    team4: { universeHits: t4.universeHits, byPhase: t4.byPhase,
             notable: (t4.items || []).filter((i) => i.congestion.phase !== 'none').slice(0, 10)
               .map((i) => ({ ticker: i.ticker, phase: i.congestion.phaseKo, months: i.congestion.baseMonths, volx: i.volx, trigger: i.congestion.buyTrigger })) },
    team5: { top2m6: (t5.strictTop2.m6 || []).map((x) => ({ industry: x.industry, wrs: x.wrs, rankPct: x.rankPct })),
             sectors: (t5.sectors || []).slice(0, 6) },
    chartCheck: cc.items,
  };

  const file = path.join(paths.llmInDir, '_args.json');
  fs.writeFileSync(file, JSON.stringify(out), 'utf8');

  console.log(`\n════════ LLM 워크플로 인자 준비 완료 ════════`);
  console.log(`날짜        ${date}`);
  console.log(`1팀 뉴스후보 ${out.team1args.candidates.length}건`);
  const cap2 = out.team2args.cap;
  const fresh2 = out.team2args.picks.slice(0, cap2).filter((p) => !rot.lastResearched(rc, 'team2', p.ticker)).length;
  console.log(`2팀 종목     ${out.team2args.picks.length}개 (상한 ${cap2}) · 클러스터 ${out.team2args.clusters.length}`);
  console.log(`  조사 순서  ${out.team2args.picks.slice(0, cap2).map((p) => p.ticker).join(', ')}`);
  console.log(`  신규 ${fresh2}종목 · 누적 조사 ${Object.keys(rc.team2).length}/${(t2.picks || []).length}종목`);
  console.log(`4팀 종목     ${out.team4args.items.length}개 — ${out.team4args.items.map((i) => i.ticker).join(', ')}`);
  console.log(`5팀 업종     ${out.team5args.industries.length}개 — ${out.team5args.industries.map((x) => x.industry).join(', ')}`);
  console.log(`차트확인     ${(cc.items || []).length}개`);
  console.log(`\n저장: ${file}`);
}

if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
module.exports = { main };
