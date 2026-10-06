'use strict';
// 6팀 관심 종목 심층 분석(team6-deepdive.js) 에 넘길 인자를 준비한다. (2026-10-03 사용자 요청)
//   node scripts/prepare-deepdive-args.js
//
// 하는 일: dashboard/data/team6.js 의 오늘 밤 관심 종목(watch, 최대 10개)마다
//   state/llm-in/_t6/{TICKER}.json   plan · site(사이트 수치) · eye(차트확인) · detail(실적·뉴스·8-K·국내리포트)
//                                    · chart(숫자 사이드카 + PNG 2장) · market(한별 판정)
//   state/llm-in/_t6/{TICKER}-3m.png · -6m.png   render-charts.js 가 CACHE_DIR 에 그린 것을 복사 (.gitignore)
//   state/llm-in/_t6args.json        워크플로 args — { date, cap, model, argsDir, items:[경량], skipped }
//
// 건너뛰기: ① run-breakout 이 이월한 deep.session 이 오늘 세션과 같다(휴장일·같은 날 재실행)
//          ② 로테이션 캐시 bucket 'team6' TTL(DEEP_TTL, 기본 1거래일) 안
// 모델: DEEP_MODEL (기본 opus). 워크플로 스크립트는 env 를 못 읽으므로 args 로 넘긴다.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { paths, loadEnv, ensureDir, say, readJson } = require('./lib/util');
const rot = require('./lib/research-rotation');
const { fetchDetail, slimDetail } = require('./lib/detail');

const CAP = 10;

function loadWindowData(file, varName) {
  const src = fs.readFileSync(path.join(paths.dashboardData, file), 'utf8');
  const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  if (!m) throw new Error(`${file} 파싱 실패 — run-breakout 을 먼저 실행하세요`);
  return JSON.parse(m[1]);
}

// 사이트·스크리닝 수치 — 2팀 pick 에 있으면 그것을, 없으면 4팀 item 을, 둘 다 없으면 null 필드로.
function siteOf(p2, p4) {
  const s = p2 || p4;
  if (!s) return null;
  return {
    rs: p2 ? p2.rs : null, ret1m: p2 ? p2.ret1m ?? null : null, ret3m: p2 ? p2.ret3m ?? null : null, ret6m: p2 ? p2.ret6m ?? null : null,
    marketCap: s.marketCap ?? null, volx: s.volx ?? null, volSurgeWk: s.volSurgeWk ?? null, high52: s.high52 ?? null, newHigh52: s.newHigh52 ?? null,
    adr: s.adr ?? null, div50: p2 ? p2.div50 ?? null : null, div200: p2 ? p2.div200 ?? null : null,
    targetStatus: s.targetStatus ?? null, saleCy: s.saleCy ?? null, saleNy: s.saleNy ?? null, epsCy: s.epsCy ?? null, epsNy: s.epsNy ?? null,
    cyTrend: s.cyTrend ?? null, nyTrend: s.nyTrend ?? null, est: s.est || null, fs: s.fs || null,
    qualifiedBy: p2 ? p2.qualifiedBy || [] : [], top2Since: p2 ? p2.top2Since || null : null, top2Streak: p2 ? p2.top2Streak || null : null,
  };
}

async function main() {
  loadEnv();
  ensureDir(paths.llmInDir);
  const t6 = loadWindowData('team6.js', 'TEAM6_DATA');
  const t1 = loadWindowData('team1.js', 'TEAM1_DATA');
  const t2 = loadWindowData('team2.js', 'TEAM2_DATA');
  const t4 = loadWindowData('team4.js', 'TEAM4_DATA');
  const cc = loadWindowData('chartcheck.js', 'CHARTCHECK_DATA');
  const date = t6.generated;
  const session = t6.sessionDate || null;
  const argsDir = path.join(paths.llmInDir, '_t6');
  const argsFile = path.join(paths.llmInDir, '_t6args.json');
  const model = process.env.DEEP_MODEL || 'opus';
  const docsDir = path.join(__dirname, '..', 'docs');   // 기준 문서 — 에이전트가 Read 한다
  ensureDir(argsDir);
  for (const f of fs.readdirSync(argsDir)) fs.unlinkSync(path.join(argsDir, f));   // 어제 티커·PNG 가 남으면 안 된다

  const watch = (t6.plans || []).filter((p) => p.watch).slice(0, CAP);
  const empty = (skipped) => { fs.writeFileSync(argsFile, JSON.stringify({ date, cap: CAP, model, argsDir, docsDir, items: [], skipped }), 'utf8'); };
  if (!watch.length) { empty([]); say('T6', '관심 종목 없음 — 심층 분석 생략'); return; }

  // ① 같은 세션 분석이 이미 있으면(이월) 건너뛴다 — 월요일(금요일 데이터 재사용)·같은 날 재실행
  const sameSession = watch.filter((p) => p.deep && p.deep.status === 'done' && session && p.deep.session === session);
  // ② TTL
  const rc = rot.loadCache();
  const TTL = Number(process.env.DEEP_TTL || 1);
  const sel = rot.selectForResearch(watch.filter((p) => !sameSession.includes(p)), { cache: rc, bucket: 'team6', today: date, ttl: TTL, cap: CAP });
  const picked = sel.picked;
  const skipped = [...sameSession.map((p) => `${p.ticker}@세션동일`), ...sel.skipped.map((s) => `${s.key}@${s.last}`)];
  say('T6', `심층 분석 대상 ${picked.length}/${watch.length} (상한 ${CAP} · 모델 ${model})${skipped.length ? ` · 이월 ${skipped.join(', ')}` : ''}`);
  if (picked.length) say('T6', `  조사 이유  ${sel.why.join(', ')}`);
  if (!picked.length) { empty(skipped); return; }

  // 차트 PNG + 숫자 사이드카 — render-charts 가 CACHE_DIR/charts/<date>/ 에 그린다. 실패해도 숫자만으로 진행한다.
  let chartDir = null, views = new Map();
  try {
    const out = execFileSync(process.execPath, [path.join(__dirname, 'render-charts.js'), '--watch-only', `--date=${date}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
    const last = out.trim().split('\n').pop();
    chartDir = JSON.parse(last).dir;
    const side = readJson(path.join(paths.chartViews, `${date}.json`), { items: [] });
    views = new Map((side.items || []).map((v) => [v.ticker, v]));
  } catch (e) { say('WARN', `차트 렌더 실패 — 숫자만으로 진행합니다 (${e.message.split('\n')[0]})`); }

  const pick2 = new Map((t2.picks || []).map((p) => [p.ticker, p]));
  const item4 = new Map((t4.items || []).map((i) => [i.ticker, i]));
  const eyeOf = new Map((cc.items || []).map((c) => [c.ticker, { score: c.score, reasons: c.reasons, resistance: c.resistance ?? null }]));
  const market = t1 ? { verdict: t1.qqq && t1.qqq.verdict, ko: t1.qqq && t1.qqq.ko, finraKo: t1.finra && t1.finra.ko, finraLevel: t1.finra && t1.finra.level } : null;

  const items = [];
  let fetched = 0, reused = 0;
  for (const p of picked) {
    const p2 = pick2.get(p.ticker), p4 = item4.get(p.ticker);
    let detail = null, detailNote = null;
    if (p2 && p2.detail) { detail = slimDetail(p2.detail); reused++; }
    else {
      try { const r = await fetchDetail(p.ticker, date); if (r.gotAny) { detail = slimDetail(r.detail); fetched++; } else detailNote = '실적·뉴스·공시 수집 실패 — 웹검색에 의존'; }
      catch (e) { detailNote = `수집 실패: ${e.message}`; }
    }
    const v = views.get(p.ticker) || null;
    let chart = null;
    if (v && v.ok) {
      const tag = p.ticker.replace(/[^A-Z0-9]/gi, '_');
      const cp = (suffix) => {
        const src = chartDir ? path.join(chartDir, `${tag}-${suffix}.png`) : null;
        if (!src || !fs.existsSync(src)) return null;
        const dst = path.join(argsDir, `${p.ticker}-${suffix}.png`);
        fs.copyFileSync(src, dst);
        return dst;
      };
      chart = { lastBar: v.lastBar, numbers: v.numbers, last10: v.last10, png3m: cp('3m'), png6m: cp('6m') };
      if (!chart.png3m) chart.chartNote = '차트 그림 없음 — 숫자만';
    }
    const { deep, ...plan } = p;   // 이월된 지난 분석은 에이전트에게 주지 않는다(복사해 쓰면 안 된다)
    fs.writeFileSync(path.join(argsDir, `${p.ticker}.json`), JSON.stringify({
      ticker: p.ticker, date, session, plan, site: siteOf(p2, p4), eye: eyeOf.get(p.ticker) || null, detail, detailNote, chart, market,
    }, null, 1), 'utf8');
    items.push({ ticker: p.ticker, name: p.name || null, grade: p.grade, sector: p.sector, industry: p.industry, price: p.price, pivot: p.pivot, stop: p.stop,
      distToPivotPct: p.distToPivotPct, earnings: p.earnings || null, hasChart: !!(chart && chart.png3m), hasDetail: !!detail });
  }
  say('T6', `근거 자료: 2팀 재사용 ${reused} · 신규 수집 ${fetched} · 차트 ${items.filter((i) => i.hasChart).length}/${items.length}`);
  fs.writeFileSync(argsFile, JSON.stringify({ date, session, cap: CAP, model, argsDir, docsDir, items, skipped }), 'utf8');
  console.log(`\n저장: ${argsFile}`);
}

if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
module.exports = { main };
