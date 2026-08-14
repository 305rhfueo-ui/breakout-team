'use strict';
// ═══════════════════════════════════════════════════════════════
//  START BREAKOUT — 쿨라매기 Break-out + Episodic Pivot 5팀 시스템
//  Node 전용 (LLM 0). 이 단계만으로 완결된 산출물이 나온다.
//  LLM 리서치는 이후 워크플로가 덧입힌다.
// ═══════════════════════════════════════════════════════════════

const path = require('path');
const {
  paths, loadEnv, today, isoWeek, num, round, say, ensureDir,
  readJson, writeJson, writeText, writeWindowData, isEtf,
} = require('./lib/util');
const cache = require('./lib/cache');
const { fetchRsData } = require('./fetch-rs-data');
const { rankPercentiles, bestPct } = require('./lib/percentile');
const { computeWrsAll, validateAgainstSite } = require('./lib/wrs');
const { selectBreakoutCandidates, detectThemes } = require('./lib/screen');
const { checkMaColumns } = require('./lib/ma-guard');
const { fetchMany, fetchBarsCached } = require('./lib/bars');
const { analyze, consecutiveDaysBelowMA, maSlope, priorHighBreak, volumeExpansion } = require('./lib/ta');
const { qullamaggieRegime } = require('./lib/regime');
const { leadingStocks, leadingSectors, marketOverheat, indexDip } = require('./lib/leaders');
const { detectCongestion } = require('./lib/congestion');
const { eyeCheckScore } = require('./lib/vcp');
const tracking = require('./lib/tracking');
const { saveChart } = require('./lib/chart');
const { fetchFinraMargin } = require('./data/finra-margin');

function parseArgs(argv) {
  const a = { teams: null, git: true, png: true, date: null, yahoo: true, offline: false };
  for (const s of argv) {
    if (s.startsWith('--teams=')) a.teams = s.slice(8).split(',').map(Number);
    else if (s === '--no-git') a.git = false;
    else if (s === '--no-png') a.png = false;
    else if (s === '--no-yahoo') a.yahoo = false;
    else if (s === '--offline') a.offline = true;
    else if (s.startsWith('--date=')) a.date = s.slice(7);
  }
  return a;
}
const wants = (a, t) => !a.teams || a.teams.includes(t);

// ── 주간 주도주 질문 상태 ──
function weeklyQuestion(dateStr) {
  const st = readJson(paths.weeklyQuestion, { current: null, history: [] });
  const wk = isoWeek(dateStr);
  if (!st.current || st.current.week !== wk) {
    if (st.current) st.history.unshift(st.current);
    st.history = st.history.slice(0, 20);
    st.current = {
      week: wk, opened_on: dateStr, answered: false, answered_on: null,
      question: '이번 주 주도주가 뭐라고 생각하세요?', tickers: [], note: '',
    };
    writeJson(paths.weeklyQuestion, st);
  }
  return st;
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  if (args.offline) process.env.OFFLINE = '1';
  const dateStr = args.date || today();
  const t0 = Date.now();

  console.log('\n═══════════════════════════════════════════════');
  say('SYSTEM', `START BREAKOUT — ${dateStr} 🚀`);
  console.log('═══════════════════════════════════════════════\n');

  // ── 1) RS 데이터 ──
  const { rows, meta, source, stale } = await fetchRsData();
  const staleData = stale !== null && stale >= 4;
  const keyCount = Object.keys(rows[0] || {}).length;
  say('SYSTEM', `data[] 컬럼 ${keyCount}개 · wrs_data ${meta.wrs_data.length}그룹`);

  // ── 2) 백분위 (한 번만, 전 팀 공유) ──
  rankPercentiles(rows);

  // ── 3) WRS 3기간 + 사이트 대조 검증 ──
  const wrs = computeWrsAll(rows);
  const wrsCheck = validateAgainstSite(rows, meta.wrs_data);
  say('T5', `WRS 재계산 ${wrs.byKey.size}그룹 · 사이트 대조 ${wrsCheck.matched}/${wrsCheck.comparable} 일치` +
    (wrsCheck.recovered.length ? ` · 사이트 NaN 복구 ${wrsCheck.recovered.length}그룹` : ''));
  if (!wrsCheck.ok) say('WARN', '⚠️ WRS 대조 불일치 — WRS 컬럼을 신뢰하지 마세요');

  // ── 3b) 150/50일선 컬럼 신뢰도 검사 ──
  // 사이트가 MA 계산에 실패하면 조용히 전 종목을 "X"(150일선 아래)로 만든다.
  // 2026-08-13 에 실제로 터져서 2팀이 61→18 로 붕괴하고 3팀이 48종목을 배제할 뻔했다.
  // 배제는 tracking.json 에 영구 기록되므로 조용히 통과시키는 것이 최악이다.
  const maCheck = checkMaColumns(rows);
  if (!maCheck.ok) {
    say('WARN', `⚠️ 150일선 컬럼 오염 감지 — ${maCheck.reason}`);
    say('WARN', `   150일선 위 ${maCheck.stats.o150} / 아래 ${maCheck.stats.x150}`
      + ` · 200일선 위 ${maCheck.stats.d200Pos}/${maCheck.stats.checked}`
      + ` · 모순 ${maCheck.stats.contradiction}개(${maCheck.stats.contraPct}%)`);
    say('WARN', '   → 150일선 필터를 끄고 "판정불가"로 표기합니다. 종목을 잘라내지 않습니다.');
    say('WARN', '   → 3팀 배제조건 ③(150일선 이탈)도 오늘은 적용하지 않습니다.');
  }
  const maTrusted = maCheck.ok;
  // 화면·실장에게도 알린다. 이걸 안 넘기면 61종목이 필터를 정상 통과한 것처럼 보인다.
  const maNotice = maTrusted ? null : {
    column: 'Above_150_SMA',
    reason: maCheck.reason,
    stats: maCheck.stats,
    effect: '150일선 필터 미적용 · 3팀 배제조건 ③ 미적용 · 3팀 신규 편입 보류',
    ko: `⚠️ RS 사이트의 150일선 컬럼이 오염돼 오늘은 판정불가로 처리했습니다. `
      + `(150일선 위 ${maCheck.stats.o150}종목인데 200일선 위는 ${maCheck.stats.d200Pos}종목 — 앞뒤가 맞지 않습니다.) `
      + `종목을 잘라내지 않았으므로 오늘 2팀 목록에는 실제로는 150일선 아래인 종목이 섞여 있을 수 있습니다.`,
  };

  // ── 4) 2팀 스크리닝 ──
  const { qualified, stats: screenStats } = selectBreakoutCandidates(rows, { requireMa150: maTrusted });
  const themes = detectThemes(qualified);
  say('T2', `퍼널 ${screenStats.universe} → 상위2% ${screenStats.unionTop}`
    + (screenStats.dropped.etf ? ` → ETF제외 ${screenStats.afterEtf}` : '')
    + ` → ADR≥4 ${screenStats.afterAdr} → `
    + (maTrusted ? `150일선 ${screenStats.afterMa150}종목` : `${screenStats.afterMa150}종목 (150일선 판정불가 — 필터 미적용)`));
  say('T2', `테마: ${themes.headline}`);

  // ── 5) 4팀 EP 후보 (VOL_X≥2.0 또는 주간거래량≥2.0배) ──
  // ⚠️ ETF·ETN 은 제외한다. 4팀은 개별 종목의 실적 촉매를 찾는 팀이라
  //    실적 발표가 없는 ETF 는 6분류가 성립하지 않고, 레버리지 상품은 변동성 지표가 왜곡된다.
  //    (상한을 없애기 전에는 40위 밖이라 안 보였을 뿐 원래 섞여 있었다)
  const epAll = rows.filter((r) => (num(r.VOL_X) ?? 0) >= 2.0 || (num(r.Vol_Surge_Wk) ?? 0) >= 2.0);
  const epEtf = epAll.filter(isEtf);
  const epRows = epAll.filter((r) => !isEtf(r));
  // ⚠️ 예전엔 상위 40개만 분석했다(EP_CAP). 그런데 그 40개를 VOL_X(거래대금/20일평균)로만
  //    골라서, 거래대금은 낮지만 주식 수 기준 거래량이 폭증한 종목이 조용히 잘려나갔다.
  //    두 지표는 단위가 달라(거래대금 vs 주식 수) 하나로 줄세우는 것 자체가 틀렸다.
  //    congestion 판정은 봉만 있으면 되고 LLM 을 쓰지 않는다 — 26종목 추가에 약 2초다.
  //    그래서 정렬 기준을 고민하는 대신 상한을 없애 선택 편향을 통째로 제거한다.
  //    (여전히 제한하고 싶으면 EP_CAP 환경변수로 지정할 수 있다)
  const epCap = Number(process.env.EP_CAP || 0);
  const epSorted = [...epRows].sort((a, b) => (num(b.VOL_X) ?? 0) - (num(a.VOL_X) ?? 0));
  const epTop = epCap > 0 ? epSorted.slice(0, epCap) : epSorted;
  say('T4', `거래량 급증 ${epAll.length}종목 (VOL_X≥2 또는 주간 2배)`
    + (epEtf.length ? ` → ETF ${epEtf.length}개 제외(${epEtf.map((r) => r.Ticker).join(',')})` : '')
    + ` → ${epTop.length}개 분석`
    + (epCap > 0 ? ` (EP_CAP=${epCap} — ${epRows.length - epTop.length}종목 추가 제외)` : ' (전량)'));

  // ── 6) 추적 상태 로드 + 2팀 픽 반영 ──
  // ⚠️ 150일선을 못 믿는 날에는 신규 편입·재편입을 하지 않는다.
  //    2팀 자격은 「RS 상위 2% + ADR + 150일선 위」 셋인데 하나를 검증 못 한 상태라
  //    두 조건만 통과한 종목이 tracking.json 에 영구 기록되면 안 된다.
  //    기존 활성 종목의 평가(50일선·낙폭)는 그대로 돌린다 — 그건 야후 봉 기반이라 멀쩡하다.
  const trackState = tracking.load();
  const ing = maTrusted
    ? tracking.ingestPicks(trackState, qualified, dateStr)
    : { added: 0, restored: 0, refreshed: 0, held: qualified.length, heldReason: '150일선 판정불가 — 신규 편입 보류' };
  if (!maTrusted) say('WARN', `   → 3팀 신규 편입도 보류합니다 (2팀 ${qualified.length}종목은 화면에만 표시)`);
  const activeTickers = trackState.items.filter((x) => x.status === 'active').map((x) => x.ticker);

  // ── 7) 봉 일괄 수집 (2·3·4팀 + QQQ 중복 제거) ──
  const rowByTicker = new Map(rows.map((r) => [r.Ticker, r]));
  const needBars = [...new Set(['QQQ', ...qualified.map((q) => q.ticker), ...activeTickers, ...epTop.map((r) => r.Ticker)])];
  let barsMap = new Map();
  if (args.yahoo) {
    const res = await fetchMany(needBars, { range: '2y', concurrency: 5, budgetMs: 240000, label: '봉 수집' });
    barsMap = res.results;
  } else {
    say('WARN', '--no-yahoo — 봉 기반 판정은 전부 판정불가로 표기됩니다');
  }
  const barsOf = (t) => { const r = barsMap.get(String(t).toUpperCase()); return r && r.ok ? r.bars : null; };

  // ── 8) 1팀 시장환경 ──
  let team1 = null;
  if (wants(args, 1)) {
    const qbars = barsOf('QQQ');
    const regime = qbars ? qullamaggieRegime(qbars) : { ok: false, verdict: 'unknown', ko: 'QQQ 봉 없음 — 판정불가' };
    let chart = null;
    if (qbars && args.png) {
      const r = await fetchBarsCached('QQQ', { range: '6mo' });
      if (r.ok) {
        const out = saveChart(r.bars, {
          maPeriods: [10, 20, 50], displayBars: 63,
          title: 'QQQ DAILY', subtitle: '10 / 20 / 50 DAY MA   LAST 3 MONTHS',
          file: path.join(paths.dashboardCharts, `qqq-${dateStr}.png`),
          latestFile: path.join(paths.dashboardCharts, 'qqq-latest.png'),
        });
        chart = { svg: out.svg, png: `charts/qqq-${dateStr}.png` };
      }
    }
    const finra = await fetchFinraMargin();
    const qa = qbars ? analyze(qbars) : null;
    team1 = {
      generated: dateStr,
      data_source: { rs_last_updated: meta.last_updated, stale: staleData, source, columns: keyCount },
      qqq: { ...regime, chart_svg: chart ? chart.svg : null, chart_png: chart ? chart.png : null,
             index_dip: qa ? indexDip(qa.distMA200) : { status: 'unknown' } },
      finra,
      leaders: {
        stocks: leadingStocks(rows, 10),
        sectors: leadingSectors(rows, { topN: 50, sectorN: 6 }),
        market_overheat: marketOverheat(rows),
      },
      weekly_question: weeklyQuestion(dateStr).current,
      news: { llm: false, digest: [], note: 'LLM 뉴스 리서치 미실행 — start breakout 으로 실행하세요' },
    };
    say('T1', regime.ko);
    say('T1', finra.ko);
    say('T1', team1.leaders.market_overheat.ko);
  }

  // ── 9) 2팀 상세 (야후 보강) ──
  let team2 = null;
  if (wants(args, 2)) {
    for (const q of qualified) {
      const b = barsOf(q.ticker);
      if (!b) { q.ma150Slope = null; q.ta = null; continue; }
      const sl = maSlope(b, 150, 20);
      q.ma150Slope = sl.ok ? sl.pct : null;
      q.ma150SlopeDir = sl.ok ? sl.dir : null;
      const a = analyze(b);
      q.ta = { price: a.price, resistance: a.resistance, support: a.support, contraction: a.contraction, trend: a.trend };
      // 산업 WRS 3기간 주입 (자체 계산값)
      const wk = wrs.byKey.get(`${q.sector}|${q.industry}`);
      q.wrs = wk ? { m1: wk.m1 ? wk.m1.wrs : null, m3: wk.m3 ? wk.m3.wrs : null, m6: wk.m6 ? wk.m6.wrs : null,
                     rankPct6: wk.m6 ? wk.m6.rankPct : null, count: wk.Count } : null;
      q.research = { status: 'pending', note: 'LLM 리서치 대기' };
    }
    team2 = { generated: dateStr, stats: screenStats, criteria: { topPct: 2, adrMin: 4, requireMa150: maTrusted },
              dataNotice: maNotice,
              picks: qualified, themes, research_coverage: { done: 0, total: qualified.length } };
    writeJson(path.join(paths.picksDir, `${dateStr}.json`),
      { date: dateStr, count: qualified.length, tickers: qualified.map((q) => q.ticker), criteria: team2.criteria, themes: themes.clusters });
  }

  // ── 10) 3팀 추적 ──
  let team3 = null;
  if (wants(args, 3)) {
    const ctx = {};
    for (const it of trackState.items) {
      if (it.status === 'excluded') continue;
      const b = barsOf(it.ticker);
      const row = rowByTicker.get(it.ticker);
      if (!b) continue;
      const a = analyze(b);
      const adr = row ? num(row.ADR_20D) : null;
      ctx[it.ticker] = {
        price: a.price,
        // ⚠️ 컬럼이 오염됐으면 null(판정불가) 로 넘긴다. false 로 넘기면 배제조건 ③ 이 걸려
        //    tracking.json 에 "150일선 이탈"이 영구 기록된다 — 2026-08-13 에 48종목이 그럴 뻔했다.
        aboveMa150: maTrusted
          ? (row ? (String(row.Above_150_SMA || '').toUpperCase() === 'O') : a.aboveMA150)
          : null,
        high52Price: a.periodHigh,
        belowMa50: consecutiveDaysBelowMA(b, 50),
        brk: priorHighBreak(b),
        vol: volumeExpansion(b),
        volx: row ? num(row.VOL_X) : null,
        volSurgeWk: row ? num(row.Vol_Surge_Wk) : null,
        congestion: detectCongestion(b, { adr }),
        eye: eyeCheckScore(b, row || {}),
      };
    }
    const dropped = staleData ? [] : tracking.evaluate(trackState, dateStr, ctx);
    if (staleData) say('WARN', 'RS 데이터가 오래돼 배제 판정을 건너뜁니다');
    const cap = tracking.enforceCap(trackState, dateStr, ctx);
    tracking.save(trackState);
    const sum = tracking.summary(trackState);
    say('T3', `활성 ${sum.active} / 휴면 ${sum.dormant} / 배제 ${sum.excluded}  (신규 ${ing.added} · 재편입 ${ing.restored} · 오늘 탈락 ${dropped.length}${cap.protectedCount ? ` · 상한초과 보호 ${cap.protectedCount}` : ''})`);

    const breakouts = [];
    for (const [t, c] of Object.entries(ctx)) {
      const volOk = (c.volx ?? 0) >= 2.0 || (c.volSurgeWk ?? 0) >= 2.0 || (c.vol.ok && c.vol.volRatio5 >= 2.0);
      if (c.brk.ok && c.brk.broke) {
        breakouts.push({ ticker: t, priorHigh: c.brk.priorHigh, priorHighDate: c.brk.priorHighDate,
          closeAbovePct: c.brk.closeAbovePct, breakDate: c.brk.breakDate,
          volx: c.volx, volSurgeWk: c.volSurgeWk, volRatio5: c.vol.ok ? c.vol.volRatio5 : null,
          volumeConfirmed: volOk, congestion: c.congestion.phase, congestionKo: c.congestion.phaseKo,
          baseMonths: c.congestion.baseMonths ?? null });
      }
    }
    breakouts.sort((a, b) => (b.volumeConfirmed - a.volumeConfirmed) || ((b.volx ?? 0) - (a.volx ?? 0)));
    if (breakouts.length) say('T3', `전고점 돌파 ${breakouts.length}종목 (거래량 확인 ${breakouts.filter((b) => b.volumeConfirmed).length})`);

    team3 = {
      generated: dateStr, summary: sum,
      items: trackState.items.map((it) => ({ ...it, live: ctx[it.ticker] ? {
        price: ctx[it.ticker].price, belowMa50Days: ctx[it.ticker].belowMa50.days,
        eyeScore: ctx[it.ticker].eye.score, congestion: ctx[it.ticker].congestion.phase,
      } : null })),
      dropped_today: dropped, breakouts, ingest: ing, cap,
    };
    var _ctx3 = ctx;
  }

  // ── 11) 4팀 EP ──
  let team4 = null;
  if (wants(args, 4)) {
    const items = [];
    for (const r of epTop) {
      const t = r.Ticker;
      const b = barsOf(t);
      const adr = num(r.ADR_20D);
      const c = b ? detectCongestion(b, { adr }) : { ok: false, phase: 'none', phaseKo: '봉 없음 — 판정불가' };
      items.push({
        ticker: t, sector: r.Sector, industry: r.Industry, price: num(r.Price),
        volx: num(r.VOL_X), volSurgeWk: num(r.Vol_Surge_Wk),
        aboveMa150: String(r.Above_150_SMA || '').toUpperCase() === 'O',
        brk60d: String(r.BRK_60D || '').toUpperCase() === 'YES',
        clsPos: num(r.CLS_POS), high52: num(r.High_52W_Pct), adr,
        congestion: c,
        catalyst: { status: 'pending', category: null, note: 'LLM 촉매 분류 대기' },
      });
    }
    const byPhase = {};
    for (const i of items) byPhase[i.congestion.phase] = (byPhase[i.congestion.phase] || 0) + 1;
    team4 = { generated: dateStr, filter: { volXMin: 2.0, volSurgeWkMin: 2.0 },
              universeHits: epRows.length, analyzed: items.length, items, byPhase,
              research_coverage: { done: 0, total: items.length } };
    say('T4', `Congestion 국면: ${Object.entries(byPhase).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
  }

  // ── 12) 5팀 주도 섹터/업종 (WRS) ──
  let team5 = null;
  if (wants(args, 5)) {
    const industries = [...wrs.byKey.values()].filter((x) => x.m6);
    const withPct = industries.map((x) => ({
      key: x.key, sector: x.Sector, industry: x.Industry, count: x.Count, counts: x.counts,
      wrs: { m1: x.m1 ? x.m1.wrs : null, m3: x.m3 ? x.m3.wrs : null, m6: x.m6 ? x.m6.wrs : null },
      final: { m1: x.m1 ? x.m1.final : null, m3: x.m3 ? x.m3.final : null, m6: x.m6 ? x.m6.final : null },
      rankPct: { m1: x.m1 ? x.m1.rankPct : null, m3: x.m3 ? x.m3.rankPct : null, m6: x.m6 ? x.m6.rankPct : null },
    }));
    // 상위 2% (사이트 rankPct 는 낮을수록 상위)
    const top2 = (k) => withPct.filter((x) => x.rankPct[k] !== null && x.rankPct[k] <= 2)
      .sort((a, b) => a.rankPct[k] - b.rankPct[k]);
    const strictTop2 = { m1: top2('m1'), m3: top2('m3'), m6: top2('m6') };
    const top10by6 = [...withPct].filter((x) => x.rankPct.m6 !== null).sort((a, b) => a.rankPct.m6 - b.rankPct.m6).slice(0, 10);

    // 섹터 레벨 (약 11개뿐 → 상위 2% 가 0개. 순위표로 제공하고 그 사실을 밝힌다)
    const secMap = new Map();
    for (const x of withPct) {
      if (!secMap.has(x.sector)) secMap.set(x.sector, { sector: x.sector, count: 0, industries: 0, sum6: 0 });
      const s = secMap.get(x.sector);
      s.count += x.count; s.industries++; s.sum6 += (x.wrs.m6 ?? 0) * x.count;
    }
    const sectors = [...secMap.values()].map((s) => ({ ...s, wrs6: round(s.count ? s.sum6 / s.count : 0, 4) }))
      .sort((a, b) => b.wrs6 - a.wrs6);

    team5 = {
      generated: dateStr,
      note: 'WRS(1MO)/(3MO) 는 사이트에 없어 공식대로 자체 계산한 값입니다 (WRS_6mo 는 사이트와 대조 검증 통과)',
      validation: { comparable: wrsCheck.comparable, matched: wrsCheck.matched, recovered: wrsCheck.recovered.length },
      totalIndustries: withPct.length,
      strictTop2, top10by6, sectors,
      sectorNote: `섹터는 ${sectors.length}개뿐이라 상위 2%가 0개입니다 — 순위표로 제공합니다`,
      llm: { status: 'pending' },
    };
    say('T5', `상위 2% 업종: 1개월 ${strictTop2.m1.length} · 3개월 ${strictTop2.m3.length} · 6개월 ${strictTop2.m6.length}개`);

    // ── 12b) 자금 흐름 판정 (F10d/F25d/FRANK + 200일선 이격 변화) ──
    // 사이트 화면에는 이 값들이 있지만 result.json 에는 없다. 브라우저가 만드는 값이라
    // 우리가 직접 계산한다. 사이트 계산에는 버그가 3개 있어(sector-flow.js 주석 참조)
    // 재현값과 정정값을 함께 낸다.
    if (!args.offline) {
      try {
        const H = require('./lib/history-series');
        const { computeFlow } = require('./lib/sector-flow');
        const idx = await H.fetchIndex();
        const wdays = H.weekdaysOnly(idx.dates).slice().reverse();   // 평일만, 최신순
        const alld = idx.dates.slice().reverse();                    // 주말 포함(사이트 기준)
        if (wdays.length >= 26) {
          const need = [...new Set([wdays[10], wdays[25], alld[10], alld[25]])];
          for (const d of need) await H.ensureSnapshot(d);
          const flow = computeFlow(rows, H.loadSnapshot(wdays[10]), H.loadSnapshot(wdays[25]), {
            site10: H.loadSnapshot(alld[10]), site25: H.loadSnapshot(alld[25]),
          });
          const cnt = (f) => flow.filter((x) => x.flow === f).length;
          const flipped = flow.filter((x) => Number.isFinite(x.f10) && Number.isFinite(x.siteF10)
            && (x.f10 > 0) !== (x.siteF10 > 0)).length;
          team5.flow = {
            baseline: { today: alld[0], d10: wdays[10], d25: wdays[25], site10: alld[10], site25: alld[25] },
            note: `업종 강도 변화는 진짜 10·25거래일(${wdays[10]}·${wdays[25]}) 기준으로 다시 계산했습니다. `
                + `RS 사이트 화면은 주말 스냅샷이 섞인 ${alld[10]}·${alld[25]}를 쓰고, 오늘 값과 과거 값에 `
                + `서로 다른 공식을 적용해 비교합니다 — 그래서 화면값과 다르며 ${flipped}개 업종은 부호까지 반대입니다.`,
            siteMismatch: flipped,
            industries: flow,
          };
          say('T5', `자금 흐름: 주도 ${cnt('leading')} · 유입 ${cnt('inflow')} · 소수종목 ${cnt('narrow')} · 대기 ${cnt('pending')} · 유출 ${cnt('outflow')} (사이트와 부호 다른 업종 ${flipped}개)`);
        } else {
          say('WARN', `스냅샷 평일분 ${wdays.length}개 — 26개 미만이라 자금 흐름 판정을 건너뜁니다`);
        }
      } catch (e) { say('WARN', `자금 흐름 판정 실패: ${e.message}`); }
    }
  }

  // ── 12-0a) 회사명 매핑 (전 선정 종목, 상한·SKIP_DETAIL 과 무관) ──
  // 테마 카드와 티커 검색에 티커만 나열하면 무슨 회사인지 알 수 없다.
  // 국문명은 인포맥스(30일 캐시), 없으면 SEC company_tickers 의 영문명으로 채운다.
  // 둘 다 없으면 비워두고 화면에 '회사명 미확보'로 표기한다 — 지어내지 않는다.
  // ⚠️ 팝업 상세(SKIP_DETAIL)와 분리했다. 상세를 건너뛰어도 이름은 있어야 검색이 쓸모 있다.
  if (team2 && !args.offline) {
    const kr = require('./data/kr-reports');
    const { nameOf } = require('./data/sec-edgar');
    let okKo = 0, okEn = 0;
    for (const q of qualified) {
      try {
        const info = await kr.lookupTicker(q.ticker);
        if (info && info.ok) { q.nameKo = info.nameKo || null; q.nameEn = info.nameEn || null; if (q.nameKo) okKo++; }
      } catch (e) { /* 매핑 실패해도 티커로 표시하면 된다 */ }
      if (!q.nameEn) {
        try { const en = await nameOf(q.ticker); if (en) { q.nameEn = en; okEn++; } } catch (e) { /* noop */ }
      }
    }
    say('T2', `회사명: 국문 ${okKo} · 영문보강 ${okEn} / ${qualified.length}종목`);
  }

  // ── 12-0) 팝업 상세 데이터 (실적 · 뉴스 · 국내 리포트) ──
  // 비용이 큰 단계라 상위 N 종목만. 전부 TTL 캐시라 2회차부터는 거의 무료다.
  if (team2 && !args.offline && process.env.SKIP_DETAIL !== '1') {
    const cap = Number(process.env.POPUP_CAP || 20);

    // ⚠️ 예전엔 `qualified.slice(0, cap)` — bestPct 상위 20개만 영원히. 순위가 안 바뀌면
    //    나머지 34종목은 상세도, LLM 리서치도(리서치는 detail 있는 종목만 대상) 영영 못 받았다.
    //    그런데 화면엔 "며칠 안에 전량 커버"라고 떴다. 이제 실제로 순환시킨다.
    //    ① 오래 안 본 종목 → ② 돈이 들어오는 업종 → ③ bestPct 순.
    const rot = require('./lib/research-rotation');
    const rc = rot.loadCache();
    const flowRank = rot.flowRankOf(team5 && team5.flow ? team5.flow.industries : null);
    if (!flowRank.size) say('WARN', '자금흐름 데이터 없음 — 상세 조사 우선순위에서 업종 항목이 빠집니다');
    const targets = rot.orderForResearch(qualified, {
      flowRank, cache: rc, bucket: 'detail', today: dateStr,
      ttl: Number(process.env.DETAIL_TTL || 10),
      metric: (q) => q.bestPct || 0,
    }).slice(0, cap);
    const { getQuarterlyFinancials, getFilings } = require('./data/sec-edgar');
    const { getTickerNews } = require('./data/news-rss');
    const kr = require('./data/kr-reports');
    let okFin = 0, okNews = 0, okKr = 0;

    for (let i = 0; i < targets.length; i++) {
      const q = targets[i];
      const detail = { fetchedAt: dateStr };
      try {
        const info = await kr.lookupTicker(q.ticker);
        detail.nameKo = info && info.ok ? info.nameKo : null;
        detail.nameEn = info && info.ok ? info.nameEn : null;
        detail.infomaxCode = info && info.ok ? info.code : null;
      } catch (e) { /* 매핑 실패해도 진행 */ }
      try {
        const f = await getQuarterlyFinancials(q.ticker);
        if (f.ok) { detail.financials = f; okFin++; }
        else detail.financialsError = f.error;
      } catch (e) { detail.financialsError = e.message; }
      try {
        const nw = await getTickerNews(q.ticker, { nameHint: detail.nameEn || null, limit: 8 });
        if (nw.ok) { detail.news = nw; okNews++; }
      } catch (e) { /* noop */ }
      try {
        const fl = await getFilings(q.ticker, { forms: ['8-K'], limit: 6 });
        if (fl.ok) detail.filings = fl.filings;
      } catch (e) { /* noop */ }
      try {
        const rp = await kr.getReports(q.ticker, { months: 12 });
        if (rp.ok) { detail.krReports = { total: rp.total, reports: rp.reports.slice(0, 10), note: rp.note }; okKr++; }
      } catch (e) { /* noop */ }
      q.detail = detail;
      if ((i + 1) % 5 === 0) process.stdout.write(`\r  팝업 상세 ${i + 1}/${targets.length}   `);
    }
    process.stdout.write('\r');
    for (const t of targets) rc.detail[t.ticker] = dateStr;
    rot.saveCache(rc, dateStr);

    // ── 이월 — 오늘 안 뽑힌 종목은 지난 실행의 상세를 물려받는다 ──
    // 로테이션만 넣고 이월을 빼면 어제 보이던 팝업이 오늘 텅 빈다. fetchedAt 을 유지해
    // 화면이 "언제 기준 자료인지" 밝힐 수 있게 한다 — 오늘 조사한 것처럼 보이면 안 된다.
    let carried = 0;
    try {
      const prevSrc = require('fs').readFileSync(path.join(paths.dashboardData, 'team2.js'), 'utf8');
      const m = prevSrc.match(/window\.TEAM2_DATA\s*=\s*([\s\S]*);\s*$/);
      const prev = m ? JSON.parse(m[1]) : null;
      const prevDetail = new Map((prev && prev.picks || []).filter((p) => p.detail).map((p) => [p.ticker, p.detail]));
      for (const q of qualified) {
        if (q.detail || !prevDetail.has(q.ticker)) continue;
        q.detail = prevDetail.get(q.ticker);
        carried++;
      }
    } catch (e) { /* 첫 실행이면 이월할 게 없다 */ }

    const withDetail = qualified.filter((q) => q.detail).length;
    say('T2', `팝업 상세: 실적 ${okFin} · 뉴스 ${okNews} · 국내리포트 ${okKr} / 오늘 ${targets.length}종목 신규`
      + `${carried ? ` · 이월 ${carried}종목` : ''} → 보유 ${withDetail}/${qualified.length} (상한 ${cap})`);
    team2.detail_coverage = { done: withDetail, freshToday: targets.length, carried, total: qualified.length, cap };
  }

  // ── 12-1) 팝업 시계열의 종가를 야후(분할 조정)로 갱신 ──
  // RS 사이트 Price 는 원본 종가라 액면분할 시 그래프가 수직 낙하한다 (CRWD 2026-07-02 4:1 등).
  if (args.yahoo) {
    try {
      const H = require('./lib/history-series');
      const { barDateET } = require('./lib/bars');
      const seriesTickers = [...new Set([...qualified.map((q) => q.ticker), ...activeTickers])];
      const up = H.updatePricesFromBars(seriesTickers, barsOf, { barDateET });
      if (up.updated) say('SYSTEM', `시계열 종가 갱신 ${up.updated}종목 (야후 분할조정)${up.splits ? ` · 분할 감지 ${up.splits}종목` : ''}`);
      // 라이브 result.json 은 같은 거래일이라도 스냅샷보다 새로울 수 있다 → 마지막 지점을 맞춘다
      const dataDay = (meta.last_updated || '').slice(0, 10) || dateStr;
      const sync = H.syncLastPointFromLive(dataDay, rows, wrs, seriesTickers);
      if (sync.tickers || sync.industries) say('SYSTEM', `시계열 라이브 동기화 (${dataDay}): 종목 ${sync.tickers} · 업종 ${sync.industries}`);
    } catch (e) { say('WARN', `시계열 종가 갱신 실패: ${e.message}`); }
  }

  // ── 13) 차트확인 리스트 ──
  const chartCheck = [];
  if (typeof _ctx3 !== 'undefined') {
    for (const [t, c] of Object.entries(_ctx3)) {
      if (c.eye && c.eye.eyeCheck) chartCheck.push({ ticker: t, score: c.eye.score, source: 'T3', reasons: c.eye.reasons });
    }
  }
  if (team4) {
    for (const i of team4.items) {
      if (['retest', 'bounce_trigger'].includes(i.congestion.phase)) {
        chartCheck.push({ ticker: i.ticker, score: i.congestion.score || 0, source: 'T4',
          reasons: [`${i.congestion.phaseKo} · 횡보 ${i.congestion.baseMonths ?? '—'}개월`] });
      }
    }
  }
  const seen = new Set();
  const chartCheckTop = chartCheck.filter((c) => !seen.has(c.ticker) && seen.add(c.ticker))
    .sort((a, b) => b.score - a.score).slice(0, 10);
  writeJson(paths.chartCheck, { generated: dateStr, items: chartCheckTop });
  if (chartCheckTop.length) say('CHIEF', `👁️ 오늘 차트 볼 종목 ${chartCheckTop.length}개: ${chartCheckTop.map((c) => c.ticker).join(', ')}`);

  // ── 14) 실장 종합 + 대시보드 데이터 ──
  const chief = {
    generated: dateStr,
    market: team1 ? { verdict: team1.qqq.verdict, ko: team1.qqq.ko, finra: team1.finra.level, finraKo: team1.finra.ko } : null,
    counts: {
      universe: rows.length,
      picks: qualified.length,
      tracking: team3 ? team3.summary : null,
      breakouts: team3 ? team3.breakouts.length : 0,
      epCandidates: epRows.length,
      chartCheck: chartCheckTop.length,
    },
    theme: themes.headline,
    chartCheck: chartCheckTop,
    // 5팀 업종 흐름 × 2·3팀 종목 교차 — "돈이 몰리는 업종 안에서 뭐가 강한가"
    flowCross: (team5 && team5.flow)
      ? require('./lib/flow-cross').crossFlow(team5.flow.industries,
          { picks: qualified, rowByTicker, team3, cap: 4 })
      : null,
    stale: staleData,
    llm: { status: 'pending', note: 'LLM 리서치는 start breakout 실행 시 덧입혀집니다' },
  };

  ensureDir(paths.dashboardData);
  if (team1) writeWindowData(path.join(paths.dashboardData, 'team1.js'), 'TEAM1_DATA', team1);
  if (team2) writeWindowData(path.join(paths.dashboardData, 'team2.js'), 'TEAM2_DATA', team2);
  if (team3) writeWindowData(path.join(paths.dashboardData, 'team3.js'), 'TEAM3_DATA', team3);
  if (team4) writeWindowData(path.join(paths.dashboardData, 'team4.js'), 'TEAM4_DATA', team4);
  if (team5) writeWindowData(path.join(paths.dashboardData, 'team5.js'), 'TEAM5_DATA', team5);
  writeWindowData(path.join(paths.dashboardData, 'chief.js'), 'CHIEF_DATA', chief);
  writeWindowData(path.join(paths.dashboardData, 'chartcheck.js'), 'CHARTCHECK_DATA', { generated: dateStr, items: chartCheckTop });

  // ── 티커 검색용 유니버스 (전 1,412종목) ──
  // ⚠️ 약 500KB 라 초기 로딩에 넣으면 안 된다. 대시보드가 검색창을 처음 쓸 때만
  //    <script> 를 동적 주입해 불러온다 (file:// 에서도 동작하는 series 로딩 패턴).
  {
    const flowByKey = new Map(((team5 && team5.flow && team5.flow.industries) || [])
      .map((i) => [i.key, { FRANK: i.FRANK, f10: i.f10, f25: i.f25, frank25: i.frank25,
        stage: i.stage, stageKo: i.stageKo, flow: i.flow, d200Delta: i.d200Delta }]));
    const nameByTicker = new Map(qualified.filter((p) => p.nameKo || p.nameEn)
      .map((p) => [p.ticker, { ko: p.nameKo || null, en: p.nameEn || null }]));
    const uni = rows.map((r) => {
      const nm = nameByTicker.get(r.Ticker) || {};
      return {
        t: r.Ticker, ko: nm.ko || null, en: nm.en || null,
        s: r.Sector, i: r.Industry, p: num(r.Price), mc: r['Market Cap'],
        r1: num(r.RS_1mo), r3: num(r.RS_3mo), r6: num(r.RS_6mo),
        // __p 는 rankPercentiles 가 붙인 백분위 (높을수록 강함, 98 이상이 상위 2%)
        p1: r.__p ? r.__p.RS_1mo : null, p3: r.__p ? r.__p.RS_3mo : null, p6: r.__p ? r.__p.RS_6mo : null,
        adr: num(r.ADR_20D), d10: num(r['10DIV']), d50: num(r['50DIV']), d200: num(r['200DIV']),
        h52: num(r.High_52W_Pct), vx: num(r.VOL_X), vw: num(r.Vol_Surge_Wk),
        cy: num(r.CY_Trend), ny: num(r.NY_Trend), u: num(r.Up_Count), dn: num(r.Down_Count),
        a50: r.Above_50_SMA, a150: r.Above_150_SMA, ord: r.Order,
        bb: num(r.BBWTHD), bbl: num(r.BBWTHD_LOW), cls: num(r.CLS_POS), brk: r.BRK_60D,
      };
    });
    writeWindowData(path.join(paths.dashboardData, 'universe.js'), 'UNIVERSE_DATA',
      { generated: dateStr, count: uni.length, industries: Object.fromEntries(flowByKey), rows: uni },
      { compact: true });
    say('SYSTEM', `티커 검색 유니버스 ${uni.length}종목 · 회사명 ${nameByTicker.size}개`);
  }

  // 히스토리 누적
  const histFile = path.join(paths.dashboardData, 'history.js');
  const prevHist = (() => { try { const m = require('fs').readFileSync(histFile, 'utf8').match(/=\s*([\s\S]*);\s*$/); return m ? JSON.parse(m[1]) : { runs: [] }; } catch (e) { return { runs: [] }; } })();
  prevHist.runs = [{ date: dateStr, qqq: chief.market ? chief.market.verdict : null,
    finraYoY: team1 && team1.finra.ok ? team1.finra.yoyPct : null,
    picks: qualified.length, breakouts: chief.counts.breakouts, chartCheck: chartCheckTop.length,
    theme: themes.headline }, ...prevHist.runs.filter((r) => r.date !== dateStr)].slice(0, 120);
  writeWindowData(histFile, 'HISTORY_DATA', prevHist);

  // 마크다운 리포트
  writeText(path.join(paths.reportsDir, `${dateStr}-breakout.md`), buildReport({ dateStr, chief, team1, team2, team3, team4, team5 }));

  // ── 15) GitHub 반영 (Pages 웹사이트 갱신) ──
  // ⚠️ LLM 리서치는 이 시점에 아직 안 붙어 있다. start breakout 흐름에서는
  //    build-chief-report.js 가 병합한 뒤 다시 push 하므로 최종본이 올라간다.
  if (args.git) {
    const { commitAndPush } = require('./update-github');
    commitAndPush(dateStr, `선정 ${qualified.length} · 돌파 ${chief.counts.breakouts} · 차트확인 ${chartCheckTop.length}`);
  }

  cache.report('외부API 캐시');
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log('\n═══════════════════════════════════════════════');
  say('CHIEF', `완료 (${secs}s) · 대시보드: ${paths.dashboardHtml}`);
  console.log('═══════════════════════════════════════════════\n');
}

function buildReport({ dateStr, chief, team1, team2, team3, team4, team5 }) {
  const L = [];
  L.push(`# 브레이크아웃 종합 리포트 — ${dateStr}`);
  L.push('');
  L.push('> ⚠️ 교육용 스크리닝 자료이며 투자 조언이 아닙니다. 최종 판단은 본인의 차트 확인으로 하세요.');
  L.push('');
  if (team1 && !team1.weekly_question.answered) {
    L.push(`## ❓ 이번 주 질문 (미응답)`);
    L.push(`**${team1.weekly_question.question}** (${team1.weekly_question.week})`);
    L.push('');
    L.push('답하시면: `node scripts/answer-weekly.js --tickers=NVDA,AVGO --note="AI 인프라"`');
    L.push('');
  }
  if (team1) {
    L.push('## 1팀 · 시장환경');
    L.push(`- ${team1.qqq.ko}`);
    L.push(`- QQQ $${team1.qqq.price} · MA10 ${team1.qqq.ma10} / MA20 ${team1.qqq.ma20} / MA50 ${team1.qqq.ma50}`);
    L.push(`- ${team1.finra.ko}`);
    L.push(`- ${team1.leaders.market_overheat.ko}`);
    L.push(`- 주도섹터: ${team1.leaders.sectors.slice(0, 4).map((s) => `${s.name} ${s.count}종목(${s.sharePct}%)`).join(' · ')}`);
    L.push('');
    L.push('### 주도주 200DIV');
    L.push('| 종목 | 섹터 | 상위% | 200DIV | 임계 | 상태 |');
    L.push('|---|---|---|---|---|---|');
    for (const s of team1.leaders.stocks) {
      L.push(`| ${s.ticker} | ${s.sector} | ${round(100 - s.bestPct, 2)}% | ${s.div200 ?? '—'} | ${s.overheat.threshold} | ${s.overheat.label} |`);
    }
    L.push('');
  }
  if (team2) {
    L.push('## 2팀 · 종목 선정');
    L.push(`- 퍼널: ${team2.stats.universe} → 상위2% ${team2.stats.unionTop} → ADR≥4 ${team2.stats.afterAdr} → 150일선 위 **${team2.stats.afterMa150}종목**`);
    L.push(`- 테마: **${team2.themes.headline}**`);
    // ⚠️ 여기는 LLM 실행 전이라 항상 0/N 이다. "(LLM 미실행)"이라고 못박으면
    //    나중에 리서치가 병합돼도 거짓말로 남는다 → build-chief-report 가 이 줄을 갈아끼운다.
    L.push(`- 리서치 커버리지: ${team2.research_coverage.done}/${team2.research_coverage.total} (LLM 리서치 대기)`);
    L.push('');
    L.push('| 종목 | 섹터/업종 | RS 1M/3M/6M (상위%) | ADR | 52주 | VOL_X | 주간 | 200DIV | 150MA기울기 |');
    L.push('|---|---|---|---|---|---|---|---|---|');
    for (const p of team2.picks.slice(0, 30)) {
      const tp = (v) => v === null || v === undefined ? '—' : round(100 - v, 1);
      L.push(`| **${p.ticker}** | ${p.sector} / ${p.industry} | ${tp(p.rs.m1.pct)} / ${tp(p.rs.m3.pct)} / ${tp(p.rs.m6.pct)} | ${p.adr ?? '—'} | ${p.high52 ?? '—'} | ${p.volx ?? '—'} | ${p.volSurgeWk ?? '—'} | ${p.div200 ?? '—'} | ${p.ma150Slope === null ? '판정불가' : p.ma150Slope + '%'} |`);
    }
    L.push('');
  }
  if (team3) {
    L.push('## 3팀 · 추적');
    L.push(`- 활성 ${team3.summary.active} / 휴면 ${team3.summary.dormant} / 배제 ${team3.summary.excluded} (누적 ${team3.summary.total})`);
    if (team3.dropped_today.length) {
      L.push('');
      L.push('### 오늘 배제');
      for (const d of team3.dropped_today) L.push(`- **${d.ticker}** — ${d.reason}`);
    }
    if (team3.breakouts.length) {
      L.push('');
      L.push('### 전고점 돌파');
      L.push('| 종목 | 직전고점 | 돌파일 | 초과% | VOL_X | 주간 | 거래량확인 | Congestion |');
      L.push('|---|---|---|---|---|---|---|---|');
      for (const b of team3.breakouts.slice(0, 20)) {
        L.push(`| ${b.ticker} | $${b.priorHigh} (${b.priorHighDate}) | ${b.breakDate ?? '—'} | ${b.closeAbovePct}% | ${b.volx ?? '—'} | ${b.volSurgeWk ?? '—'} | ${b.volumeConfirmed ? '✅' : '—'} | ${b.congestionKo} |`);
      }
    }
    L.push('');
  }
  if (team4) {
    L.push('## 4팀 · Episodic Pivot');
    L.push(`- 거래량 급증 ${team4.universeHits}종목 → 상위 ${team4.analyzed}개 분석`);
    L.push(`- 국면: ${Object.entries(team4.byPhase).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
    const notable = team4.items.filter((i) => ['bounce_trigger', 'retest', 'breakout', 'base'].includes(i.congestion.phase));
    if (notable.length) {
      L.push('');
      L.push('| 종목 | 국면 | 횡보(개월) | 돌파거래량 | 150MA | VOL_X | 매수 트리거 |');
      L.push('|---|---|---|---|---|---|---|');
      for (const i of notable.slice(0, 20)) {
        L.push(`| ${i.ticker} | ${i.congestion.phaseKo} | ${i.congestion.baseMonths ?? '—'} | ${i.congestion.breakoutVolX ?? '—'} | ${i.aboveMa150 ? '위' : '아래'} | ${i.volx ?? '—'} | ${i.congestion.buyTrigger ? i.congestion.buyTrigger.note : '—'} |`);
      }
    }
    L.push('');
  }
  if (team5) {
    L.push('## 5팀 · 주도 섹터/업종 (WRS)');
    L.push(`- ${team5.note}`);
    L.push(`- 검증: 사이트 정상 ${team5.validation.comparable}그룹 중 ${team5.validation.matched} 일치 · NaN 복구 ${team5.validation.recovered}그룹`);
    L.push('');
    L.push(`### 상위 2% 업종 (6개월 기준, 전체 ${team5.totalIndustries}개 중)`);
    L.push('| 업종 | 섹터 | 종목수 | WRS 1M | WRS 3M | WRS 6M | 상위% |');
    L.push('|---|---|---|---|---|---|---|');
    for (const x of team5.strictTop2.m6) {
      L.push(`| ${x.industry} | ${x.sector} | ${x.count} | ${x.wrs.m1 ?? '—'} | ${x.wrs.m3 ?? '—'} | ${x.wrs.m6 ?? '—'} | ${x.rankPct.m6} |`);
    }
    L.push('');
  }
  if (chief.chartCheck.length) {
    L.push('## 👁️ 오늘 차트를 봐야 할 종목');
    for (const c of chief.chartCheck) {
      L.push(`- **${c.ticker}** (score ${c.score}, ${c.source})`);
      for (const r of c.reasons) L.push(`  - ${r}`);
    }
    L.push('');
  }
  return L.join('\n');
}

if (require.main === module) {
  main().catch((e) => { console.error('실행 오류:', e); process.exit(1); });
}

module.exports = { main };
