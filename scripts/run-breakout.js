'use strict';
// ═══════════════════════════════════════════════════════════════
//  START BREAKOUT — 쿨라매기 Break-out + Episodic Pivot 5팀 시스템
//  Node 전용 (LLM 0). 이 단계만으로 완결된 산출물이 나온다.
//  LLM 리서치는 이후 워크플로가 덧입힌다.
// ═══════════════════════════════════════════════════════════════

const path = require('path');
const {
  paths, loadEnv, today, isoWeek, num, round, say, ensureDir,
  readJson, writeJson, writeText, writeWindowData, isEtf, coverageOf,
} = require('./lib/util');
const { team4Eligible } = require('./lib/research-rotation');
const cache = require('./lib/cache');
const { fetchRsData } = require('./fetch-rs-data');
const { rankPercentiles, bestPct } = require('./lib/percentile');
const { computeWrsAll, validateAgainstSite } = require('./lib/wrs');
const { selectBreakoutCandidates, detectThemes, detectThemesByPeriod } = require('./lib/screen');
const { yes } = require('./lib/util');
const { checkMaColumns, aboveMa150Of } = require('./lib/ma-guard');
const { fetchMany, fetchBarsCached, barDateET } = require('./lib/bars');
const cal = require('./lib/market-calendar');
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

// 지난 실행의 대시보드 데이터 파일 (이월용). 첫 실행이면 null.
function readPrevWindow(file, varName) {
  try {
    const src = require('fs').readFileSync(path.join(paths.dashboardData, file), 'utf8');
    const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
    return m ? JSON.parse(m[1]) : null;
  } catch (e) { return null; }
}

// 시총을 못 읽는 티커(우선주·유닛·ETN 등). "N/A" 또는 빈 값.
// ⚠️ 4팀이 NEE-T(넥스트에라 유닛)를 보통주로 조사해 리포트에 실었다 (2026-09-03). 시총 없는 티커는
//    거래량 폭증 자체가 노이즈이고 뉴스도 잡히지 않아 ⑥ 판정만 반복한다 → 4팀 후보에서 뺀다.
//    접미사 정규식으로 자르지 않는 이유: BRK.B·MOG.B 같은 보통주 클래스가 걸린다. 시총 유무가 더 정확하다.
function hasMarketCap(row) {
  const mc = row && row['Market Cap'];
  if (mc == null) return false;
  const s = String(mc).trim();
  return s !== '' && s.toUpperCase() !== 'N/A' && s !== '-' && s !== '0';
}

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
  // ⚠️ 샘플 파일이 없어서 라이브 실패 시 0종목으로 "정상 완료"하고 push 까지 했다. 0종목이면 멈춘다.
  if (!rows || !rows.length) {
    throw new Error(`RS 데이터 0종목 (source=${source}) — 사이트 장애이거나 샘플 파일이 없습니다. 실행을 중단합니다.`);
  }
  // 사이트가 결측률 초과로 발행을 보류한 날엔 result.json 이 전날 데이터다 → 배제 판정·신규 편입을 건너뛴다
  const siteDegraded = !!meta.degraded;
  if (siteDegraded) say('WARN', `⚠️ RS 사이트가 오늘 발행을 보류했습니다 (degraded_at ${meta.degraded_at || '?'} · ${JSON.stringify(meta.data_quality || {})}) — 전날 데이터로 실행합니다`);
  const staleData = (stale !== null && stale >= 4) || siteDegraded;
  const keyCount = Object.keys(rows[0] || {}).length;
  // RS 데이터가 가리키는 세션일(ET 마지막 거래일). last_updated 는 렌더 시각(UTC)이라 그대로 쓰면
  // 월요일 00:xx UTC 렌더가 금요일 데이터에 월요일 날짜를 붙인다 (2026-09-01 실제 발생).
  const sessionDate = cal.sessionDateFromUtc(meta.last_updated) || null;
  say('SYSTEM', `data[] 컬럼 ${keyCount}개 · wrs_data ${meta.wrs_data.length}그룹 · RS 세션일 ${sessionDate || '?'} (last_updated ${meta.last_updated || '?'})`);

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
  // 기간별(1M·3M·6M) 테마 3세트 + 교차(지속/신규/중기/퇴조) — 2026-09-07 사용자 요청
  Object.assign(themes, detectThemesByPeriod(qualified));
  // 사이트 6개월 순위 백분위와 자체 백분위 대조 (사이트는 index 순위·동점 미보정이라 소수점 차이는 정상)
  {
    let compared = 0, mismatch = 0;
    for (const r of rows) {
      const site = num(r.RS_Rank_Pct), mine = r.__p ? r.__p.RS_6mo : null;
      if (site == null || mine == null) continue;
      compared++;
      if (Math.abs((100 - mine) - site) > 0.5) mismatch++;
    }
    screenStats.siteRankCheck = { compared, mismatch };
    // ⚠️ 2026-09-07 실측: 1378/1392 불일치(BAND 사이트 91% vs 자체 상위 0.5%). 원인은 사이트 utils.py
    //    calculate_percentile_rank 가 NaN 을 `is not None` 으로 통과시켜 sorted() 순서가 깨지는 것.
    //    사이트 PR(B-4 (d))로 고치기 전까지 RS_Rank_Pct 는 쓰지 않는다 — 자체 백분위가 기준이다.
    if (compared && mismatch / compared > 0.05) say('WARN', `RS_Rank_Pct 대조: ${mismatch}/${compared} 불일치(>0.5%p) — 사이트 순위 컬럼은 NaN 정렬 버그로 신뢰 불가, 자체 백분위를 쓴다`);
  }
  say('T2', `퍼널 ${screenStats.universe} → 상위2% ${screenStats.unionTop}`
    + (screenStats.dropped.etf ? ` → ETF제외 ${screenStats.afterEtf}` : '')
    + ` → ADR≥4 ${screenStats.afterAdr} → `
    + (maTrusted ? `150일선 ${screenStats.afterMa150}종목` : `${screenStats.afterMa150}종목 (150일선 판정불가 — 필터 미적용)`));
  say('T2', `테마: ${themes.headline}`);
  say('T2', `기간별 상위2%: 1M ${themes.byPeriod.m1.count}(${themes.byPeriod.m1.headline}) · 3M ${themes.byPeriod.m3.count} · 6M ${themes.byPeriod.m6.count}`
    + ` · 교차 지속 ${themes.cross.counts.persistent} / 신규 ${themes.cross.counts.newEntrants} / 중기 ${themes.cross.counts.midTerm} / 퇴조 ${themes.cross.counts.fading}`);
  if (meta.market_condition) say('T1', `사이트 시장국면(사용자 시트): ${meta.market_condition}`);

  // ── 5) 4팀 EP 후보 (VOL_X≥2.0 또는 주간거래량≥2.0배) ──
  // ⚠️ ETF·ETN 은 제외한다. 4팀은 개별 종목의 실적 촉매를 찾는 팀이라
  //    실적 발표가 없는 ETF 는 6분류가 성립하지 않고, 레버리지 상품은 변동성 지표가 왜곡된다.
  //    (상한을 없애기 전에는 40위 밖이라 안 보였을 뿐 원래 섞여 있었다)
  const epAll = rows.filter((r) => (num(r.VOL_X) ?? 0) >= 2.0 || (num(r.Vol_Surge_Wk) ?? 0) >= 2.0);
  const epEtf = epAll.filter(isEtf);
  const epNoMc = epAll.filter((r) => !isEtf(r) && !hasMarketCap(r));
  const epRows = epAll.filter((r) => !isEtf(r) && hasMarketCap(r));
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
    + (epNoMc.length ? ` → 시총 미확인(우선주·유닛) ${epNoMc.length}개 제외(${epNoMc.map((r) => r.Ticker).join(',')})` : '')
    + ` → ${epTop.length}개 분석`
    + (epCap > 0 ? ` (EP_CAP=${epCap} — ${epRows.length - epTop.length}종목 추가 제외)` : ' (전량)'));

  // ── 6) 추적 상태 로드 + 2팀 픽 반영 ──
  // ⚠️ 150일선을 못 믿는 날에는 신규 편입·재편입을 하지 않는다.
  //    2팀 자격은 「RS 상위 2% + ADR + 150일선 위」 셋인데 하나를 검증 못 한 상태라
  //    두 조건만 통과한 종목이 tracking.json 에 영구 기록되면 안 된다.
  //    기존 활성 종목의 평가(50일선·낙폭)는 그대로 돌린다 — 그건 야후 봉 기반이라 멀쩡하다.
  const trackState = tracking.load();
  const ing = (maTrusted && !siteDegraded)
    ? tracking.ingestPicks(trackState, qualified, dateStr)
    : { added: 0, restored: 0, refreshed: 0, restoredTickers: [], held: qualified.length, heldReason: siteDegraded ? '사이트 발행 보류일 — 신규 편입 보류' : '150일선 판정불가 — 신규 편입 보류' };
  if (!maTrusted || siteDegraded) say('WARN', `   → 3팀 신규 편입도 보류합니다 (2팀 ${qualified.length}종목은 화면에만 표시)`);
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
  const qualityOf = (t) => { const r = barsMap.get(String(t).toUpperCase()); return r && r.ok && r.quality ? r.quality : null; };

  // ── 7b) 봉 품질 — 누락 거래일 · 세션일 불일치 ──
  // ⚠️ 2026-08-31·09-01 실행은 야후가 8/28 봉을 빼고 줘서 데드크로스 날짜가 실행마다 바뀌었다(8/31 D+0 → 8/28 D+2).
  //    검사가 없으면 조용히 통과한다. 여기서 QQQ 기준으로 잡고, 종목별 누락은 ctx 에 barGap 으로 남긴다.
  const qq = qualityOf('QQQ');
  const expectedSession = sessionDate || cal.prevTradingDay(dateStr);
  const gappedTickers = [...barsMap.entries()].filter(([, r]) => r && r.ok && r.quality && r.quality.gap).map(([t]) => t);
  const barsNotice = (() => {
    const problems = [];
    if (qq && qq.gap) problems.push(`QQQ 봉에 거래일 ${qq.missing.join(', ')} 가 없습니다`);
    if (qq && expectedSession && qq.lastBarDate && qq.lastBarDate < expectedSession) {
      problems.push(`QQQ 마지막 봉이 ${qq.lastBarDate} 인데 RS 데이터 세션은 ${expectedSession} 입니다`);
    }
    if (!qq && args.yahoo) problems.push('QQQ 봉을 받지 못했습니다');
    if (gappedTickers.length) problems.push(`봉이 빠진 종목 ${gappedTickers.length}개 (${gappedTickers.slice(0, 8).join(', ')}${gappedTickers.length > 8 ? ' …' : ''})`);
    if (!problems.length) return null;
    return {
      level: (qq && (qq.gap || (expectedSession && qq.lastBarDate < expectedSession))) ? 'critical' : 'warn',
      qqqLastBar: qq ? qq.lastBarDate : null, expectedSession, qqqMissing: qq ? qq.missing : [], gappedTickers,
      ko: `⚠️ 야후 일봉 품질 경고 — ${problems.join(' · ')}. 데드크로스 날짜·50일선 연속 이탈일수·돌파 거래량 판정이 하루씩 어긋날 수 있습니다. `
        + `이 경고가 사라진 실행의 판정을 기준으로 삼으세요.`,
    };
  })();
  if (barsNotice) say('WARN', barsNotice.ko);
  const sessionMismatch = !!(qq && expectedSession && qq.lastBarDate && qq.lastBarDate !== expectedSession);
  if (sessionMismatch) say('WARN', `RS 세션 ${expectedSession} ≠ 봉 마지막 ${qq.lastBarDate} — RS 컬럼(VOL_X·150일선)과 봉 기반 판정이 다른 거래일을 봅니다`);

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
      data_source: {
        rs_last_updated: meta.last_updated, sessionDate, stale: staleData, source, columns: keyCount,
        qqqLastBar: qq ? qq.lastBarDate : null, sessionMismatch, barGaps: gappedTickers.length, barsNotice,
        // 사이트 메타 (2026-09-07): 사용자 시트의 시장국면 · 오늘 새로 조회한 행 수 · 발행 보류 여부 · 품질
        siteCondition: meta.market_condition || null, apiCalled: meta.apiCalled || null,
        degraded: siteDegraded, degradedAt: meta.degraded_at || null, dataQuality: meta.data_quality || null,
      },
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
  // 사이트 fs_data.json (최근 3분기 매출성장·순이익·영업이익률) — 하루 캐시
  let fsMap = null;
  if (!args.offline) {
    try { fsMap = await require('./data/rs-fs-data').getFsData(); } catch (e) { say('WARN', `fs_data.json 수신 실패: ${e.message}`); }
  }
  const { fsOf } = require('./data/rs-fs-data');
  if (wants(args, 2)) {
    let fsHave = 0;
    for (const q of qualified) {
      q.fs = fsMap ? fsOf(fsMap, q.ticker) : null;
      if (q.fs) fsHave++;
    }
    if (fsMap) say('T2', `fs_data(최근 3분기): ${fsHave}/${qualified.length}종목 보유`);
    // ── 상위 2% 진입일·연속일 (스냅샷 이력 재랭킹, 증분 캐시) ──
    try {
      const RE = require('./lib/rs-entry');
      const up = await RE.updateCache({ lookback: Number(process.env.TOP2_LOOKBACK || 60), offline: args.offline, liveRows: rows, liveDate: sessionDate || dateStr });
      const st = RE.entryStats(up.cache, qualified.map((q) => q.ticker), sessionDate || dateStr);
      for (const q of qualified) {
        const s = st[q.ticker];
        if (s) { q.top2Since = s.top2Since; q.top2Streak = s.top2Streak; q.top2Gaps = s.gaps; q.top2Capped = s.streakCapped; }
      }
      const detail = (list) => list.map((t) => { const s = st[t] || {}; return { ticker: t, since: s.top2Since || null, streak: s.top2Streak || null }; });
      themes.crossDetail = { persistent: detail(themes.cross.persistent), newEntrants: detail(themes.cross.newEntrants),
        midTerm: detail(themes.cross.midTerm), fading: detail(themes.cross.fading), asOf: (Object.values(st)[0] || {}).asOf || null };
      say('T2', `상위2% 이력: 캐시 ${up.days}일 · 스냅샷 신규 ${up.fetched} · 계산 ${up.computed}${up.failed ? ` · 실패 ${up.failed}` : ''}`);
    } catch (e) { say('WARN', `상위2% 이력 계산 실패: ${e.message}`); }
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
    // ── 리서치 이월 — 지난 실행에서 조사한 종목은 결과를 물려받는다 ──
    // ⚠️ 예전엔 매일 pending 으로 초기화해서, 캐시상 37/37 조사 완료인데 화면은 done 20 / pending 17 이었다.
    //    prepare-llm-args 가 TTL 안 종목을 재조사에서 빼므로(토큰 절반) 이월이 없으면 화면이 텅 빈다.
    //    researchedOn 을 붙여 "언제 조사분인지" 밝힌다 — 오늘 조사한 것처럼 보이면 안 된다.
    {
      const prev = readPrevWindow('team2.js', 'TEAM2_DATA');
      const prevRes = new Map(((prev && prev.picks) || [])
        .filter((p) => p.research && ['done', 'no_source'].includes(p.research.status))
        .map((p) => [p.ticker, { ...p.research, researchedOn: p.research.researchedOn || prev.generated, carried: true }]));
      let carriedRes = 0;
      for (const q of qualified) {
        if (prevRes.has(q.ticker)) { q.research = prevRes.get(q.ticker); carriedRes++; }
      }
      if (carriedRes) say('T2', `리서치 이월 ${carriedRes}종목 (조사일 표기, prepare-llm-args 가 TTL 기준으로 재조사 여부 결정)`);
      if (prev && prev.themes && prev.themes.llm) themes.llmCarried = { ...prev.themes.llm, researchedOn: prev.generated };
      var _carriedRes = carriedRes;
    }
    // 커버리지는 이월분을 done 으로 센다 — build-chief-report 가 오늘 조사분을 더해 다시 쓴다
    const siteNotice = siteDegraded ? {
      column: 'result.json', reason: `사이트 발행 보류 (${JSON.stringify(meta.data_quality || {})})`,
      effect: '전날 데이터로 실행 · 3팀 배제 판정·신규 편입 보류',
      ko: `⚠️ RS 사이트가 오늘 수집 결측률 초과로 발행을 보류했습니다(전날 데이터 유지). 오늘 2팀 목록·지표는 전날 세션 기준이며, 3팀 배제 판정과 신규 편입은 건너뛰었습니다.`,
    } : null;
    team2 = { generated: dateStr, stats: screenStats, criteria: { topPct: 2, adrMin: 4, requireMa150: maTrusted },
              dataNotice: maNotice || siteNotice,
              picks: qualified, themes,
              fs_coverage: fsMap ? { have: qualified.filter((q) => q.fs).length, total: qualified.length } : null,
              research_coverage: coverageOf({ done: _carriedRes || 0, carried: _carriedRes || 0, total: qualified.length }) };
    writeJson(path.join(paths.picksDir, `${dateStr}.json`),
      { date: dateStr, count: qualified.length, tickers: qualified.map((q) => q.ticker), criteria: team2.criteria, themes: themes.clusters,
        byPeriod: { m1: themes.byPeriod.m1.tickers, m3: themes.byPeriod.m3.tickers, m6: themes.byPeriod.m6.tickers },
        cross: { persistent: themes.cross.persistent, newEntrants: themes.cross.newEntrants, midTerm: themes.cross.midTerm, fading: themes.cross.fading } });
  }

  // ── 10) 3팀 추적 ──
  let team3 = null;
  if (wants(args, 3)) {
    const ctx = {};
    const unevaluated = [];
    for (const it of trackState.items) {
      if (it.status === 'excluded') continue;
      const b = barsOf(it.ticker);
      const row = rowByTicker.get(it.ticker);
      if (!b) { if (it.status === 'active') unevaluated.push(it.ticker); continue; }
      const a = analyze(b);
      const adr = row ? num(row.ADR_20D) : null;
      const qlt = qualityOf(it.ticker);
      ctx[it.ticker] = {
        price: a.price,
        lastBarDate: qlt ? qlt.lastBarDate : barDateET(b[b.length - 1].t),
        barGap: !!(qlt && qlt.gap),
        barMissing: qlt ? qlt.missing : [],
        // ⚠️ 컬럼이 오염됐으면 null(판정불가) 로 넘긴다. false 로 넘기면 배제조건 ③ 이 걸려
        //    tracking.json 에 "150일선 이탈"이 영구 기록된다 — 2026-08-13 에 48종목이 그럴 뻔했다.
        //    정상인 날에도 행 단위로 지표가 비어 있으면(X 지만 200DIV·RS 전부 null) null 이다 (2026-09-04 사고).
        //    행이 없으면 야후 봉의 150일선으로 판정한다.
        aboveMa150: maTrusted
          ? (row ? aboveMa150Of(row) : a.aboveMA150)
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
    // 재편입 churn 방지 — 오늘 복귀한 종목 중 배제 사유가 여전한 것은 조용히 되돌린다 (tracking.js 주석 참조)
    const blocked = staleData ? [] : tracking.revertReentries(trackState, dateStr, ctx, ing.restoredTickers || []);
    if (blocked.length) say('T3', `재편입 차단 ${blocked.length}종목 (배제 사유 유지): ${blocked.map((b) => b.ticker).join(', ')}`);
    const restoredNet = (ing.restored || 0) - blocked.length;
    if (!staleData) tracking.evaluate(trackState, dateStr, ctx);
    else say('WARN', 'RS 데이터가 오래돼 배제 판정을 건너뜁니다');
    // ⚠️ dropped_today 는 evaluate 반환값이 아니라 상태에서 파생한다(멱등). 같은 날 두 번 실행해도
    //    "오늘 배제"가 비지 않는다. 수동 배제는 제외.
    const dropped = trackState.items
      .filter((it) => it.status === 'excluded' && it.excludedAt === dateStr && !it.manualHold)
      .map((it) => ({ ticker: it.ticker, reason: it.excludedReason, asOf: it.excludedAsOf || null, firstExcludedAt: it.firstExcludedAt || it.excludedAt }));
    const cap = tracking.enforceCap(trackState, dateStr, ctx);
    // ⚠️ tracking.save 는 대시보드 쓰기 직전(14단계)으로 옮겼다. 여기서 저장하면 후반 단계가 실패했을 때
    //    재실행에서 dropped_today 가 비어 "오늘 배제 0건"이 된다.
    const sum = tracking.summary(trackState);
    sum.unevaluated = unevaluated;
    sum.reentryBlocked = blocked.length;
    if (unevaluated.length) say('WARN', `활성인데 봉이 없어 평가하지 못한 종목 ${unevaluated.length}개: ${unevaluated.join(', ')}`);
    say('T3', `활성 ${sum.active} / 휴면 ${sum.dormant} / 배제 ${sum.excluded}  (신규 ${ing.added} · 재편입 ${restoredNet}${blocked.length ? `(차단 ${blocked.length})` : ''} · 오늘 탈락 ${dropped.length}${cap.protectedCount ? ` · 상한초과 보호 ${cap.protectedCount}` : ''})`);

    // 최종 status 가 active 인 종목만 돌파·차트확인 후보다.
    // ⚠️ 예전엔 ctx 를 그대로 순회해서, 방금 재배제된 AGL·STX·ATEX·SNDK 가 "차트 볼 종목"에 실렸다 (2026-09-03).
    const statusOf = new Map(trackState.items.map((it) => [it.ticker, it.status]));
    const isActive = (t) => statusOf.get(t) === 'active';
    const breakouts = [];
    for (const [t, c] of Object.entries(ctx)) {
      if (!isActive(t)) continue;
      if (c.brk.ok && c.brk.broke) {
        // 거래량 확인 = 돌파봉 자체의 거래량. RS 컬럼(VOL_X·주간)은 돌파일이 RS 세션일과 같을 때만 쓴다.
        const brkOnSession = c.brk.breakDate && sessionDate && c.brk.breakDate === sessionDate;
        const volOk = (c.brk.breakVolRatio != null && c.brk.breakVolRatio >= 2.0)
          || (brkOnSession && ((c.volx ?? 0) >= 2.0 || (c.volSurgeWk ?? 0) >= 2.0));
        breakouts.push({ ticker: t, priorHigh: c.brk.priorHigh, priorHighDate: c.brk.priorHighDate,
          closeAbovePct: c.brk.closeAbovePct, breakDate: c.brk.breakDate,
          breakVolRatio: c.brk.breakVolRatio, breakVol: c.brk.breakVol,
          volx: c.volx, volSurgeWk: c.volSurgeWk, volRatio5: c.vol.ok ? c.vol.volRatio5 : null,
          volumeConfirmed: !!volOk, volumeBasis: c.brk.breakVolRatio != null ? '돌파봉/20일평균' : (brkOnSession ? 'RS 당일' : '판정불가'),
          congestion: c.congestion.phase, congestionKo: c.congestion.phaseKo,
          baseMonths: c.congestion.baseMonths ?? null, barGap: c.barGap });
      }
    }
    breakouts.sort((a, b) => (b.volumeConfirmed - a.volumeConfirmed) || ((b.breakVolRatio ?? 0) - (a.breakVolRatio ?? 0)));
    if (breakouts.length) say('T3', `전고점 돌파 ${breakouts.length}종목 (돌파봉 거래량 확인 ${breakouts.filter((b) => b.volumeConfirmed).length})`);

    team3 = {
      generated: dateStr, summary: sum,
      items: trackState.items.map((it) => ({ ...it, live: ctx[it.ticker] ? {
        price: ctx[it.ticker].price, lastBarDate: ctx[it.ticker].lastBarDate, barGap: ctx[it.ticker].barGap,
        belowMa50Days: ctx[it.ticker].belowMa50.days,
        eyeScore: ctx[it.ticker].eye.score, congestion: ctx[it.ticker].congestion.phase,
      } : null })),
      dropped_today: dropped, reentryBlocked: blocked, breakouts, ingest: { ...ing, blocked: blocked.length }, cap,
    };
    var _ctx3 = ctx;
    var _isActive3 = isActive;
  }

  // ── 11) 4팀 EP ──
  let team4 = null;
  if (wants(args, 4)) {
    const items = [];
    // 촉매 분류 이월 (2팀 리서치 이월과 같은 이유)
    const prev4 = readPrevWindow('team4.js', 'TEAM4_DATA');
    const prevCat = new Map(((prev4 && prev4.items) || [])
      .filter((i) => i.catalyst && i.catalyst.status === 'done')
      .map((i) => [i.ticker, { ...i.catalyst, researchedOn: i.catalyst.researchedOn || prev4.generated, carried: true }]));
    let carriedCat = 0;
    for (const r of epTop) {
      const t = r.Ticker;
      const b = barsOf(t);
      const adr = num(r.ADR_20D);
      let c = b ? detectCongestion(b, { adr }) : { ok: false, phase: 'unknown', phaseKo: '봉 없음 — 판정불가' };
      // ⚠️ 봉 부족(<70)은 "패턴 없음"이 아니라 "판정불가"다. none 에 합산하면 40 이 어느 쪽인지 알 수 없다.
      if (!c.ok && c.phase === 'none') c = { ...c, phase: 'unknown' };
      const cat = prevCat.get(t);
      if (cat) carriedCat++;
      items.push({
        ticker: t, sector: r.Sector, industry: r.Industry, price: num(r.Price), marketCap: r['Market Cap'] || null,
        volx: num(r.VOL_X), volSurgeWk: num(r.Vol_Surge_Wk),
        aboveMa150: String(r.Above_150_SMA || '').toUpperCase() === 'O',
        brk60d: String(r.BRK_60D || '').toUpperCase() === 'YES',
        clsPos: num(r.CLS_POS), high52: num(r.High_52W_Pct), adr,
        // 사이트 컨센서스·신고가·BB (2026-09-07 추가)
        targetStatus: yes(r.Target_Status), saleCy: num(r.SALE_CY), saleNy: num(r.SALE_NY), epsCy: num(r.EPS_CY), epsNy: num(r.EPS_NY),
        cyTrend: num(r.CY_Trend), nyTrend: num(r.NY_Trend), newHigh52: yes(r.New_High_52W), bbCenterBrk5d: yes(r.BB_Center_Breakout_5D),
        fs: fsMap ? fsOf(fsMap, t) : null,
        congestion: c,
        catalyst: cat || { status: 'pending', category: null, note: 'LLM 촉매 분류 대기' },
      });
    }
    const byPhase = {};
    for (const i of items) byPhase[i.congestion.phase] = (byPhase[i.congestion.phase] || 0) + 1;
    team4 = { generated: dateStr, filter: { volXMin: 2.0, volSurgeWkMin: 2.0 },
              universeHits: epRows.length, analyzed: items.length, items, byPhase,
              excludedEtf: epEtf.map((r) => r.Ticker), excludedNoMarketCap: epNoMc.map((r) => r.Ticker),
              research_coverage: coverageOf({ done: carriedCat, carried: carriedCat, total: items.length,
                ineligible: items.filter((i) => !team4Eligible(i) && !(prevCat.has(i.ticker))).length, ineligibleWhy: '셋업·거래량 기준 미달' }) };
    if (carriedCat) say('T4', `촉매 분류 이월 ${carriedCat}종목`);
    if (prev4 && prev4.llm) team4.llmCarried = { ...prev4.llm, researchedOn: prev4.generated };
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
    // 업종 리서치 이월 — 5팀은 같은 업종을 매일 재조사했다(20회 중 14회). TTL 안이면 지난 결과를 물려받는다.
    {
      const prev5 = readPrevWindow('team5.js', 'TEAM5_DATA');
      const inds = ((prev5 && prev5.llm && prev5.llm.industries) || [])
        .map((x) => ({ ...x, researchedOn: x.researchedOn || prev5.generated, carried: true }));
      if (inds.length) {
        team5.llm = { status: 'carried', industries: inds, summary: prev5.llm.summary || null,
                      summaryResearchedOn: (prev5.llm.summaryResearchedOn || prev5.generated) };
        say('T5', `업종 리서치 이월 ${inds.length}건 (조사일 표기)`);
      }
    }
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
      // ⚠️ 하위 수집이 전부 실패한 종목은 캐시 도장을 찍지 않는다 — 찍으면 10거래일 동안 근거 0 인 채 LLM 대상이 된다.
      const gotAny = !!(detail.financials || detail.news || detail.filings || detail.krReports);
      if (gotAny) { q.detail = detail; rc.detail[q.ticker] = dateStr; }
      else { q.detailFailed = { at: dateStr, error: detail.financialsError || '수집 실패' }; }
      if ((i + 1) % 5 === 0) process.stdout.write(`\r  팝업 상세 ${i + 1}/${targets.length}   `);
    }
    process.stdout.write('\r');
    rot.saveCache(rc, dateStr);

    // ── 이월 — 오늘 안 뽑힌 종목은 지난 실행의 상세를 물려받는다 ──
    // 로테이션만 넣고 이월을 빼면 어제 보이던 팝업이 오늘 텅 빈다. fetchedAt 을 유지해
    // 화면이 "언제 기준 자료인지" 밝힐 수 있게 한다 — 오늘 조사한 것처럼 보이면 안 된다.
    let carried = 0;
    try {
      const prev = readPrevWindow('team2.js', 'TEAM2_DATA');
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
      // ⚠️ 날짜는 세션일이다. last_updated 의 UTC 날짜를 쓰면 같은 세션이 두 날짜로 들어간다 (series/AGL.js 09-03 null 사례).
      const dataDay = sessionDate || (meta.last_updated || '').slice(0, 10) || dateStr;
      const sync = H.syncLastPointFromLive(dataDay, rows, wrs, seriesTickers);
      if (sync.tickers || sync.industries) say('SYSTEM', `시계열 라이브 동기화 (${dataDay}): 종목 ${sync.tickers} · 업종 ${sync.industries}`);
    } catch (e) { say('WARN', `시계열 종가 갱신 실패: ${e.message}`); }
  }

  // ── 13) 차트확인 리스트 ──
  const chartCheck = [];
  if (typeof _ctx3 !== 'undefined') {
    for (const [t, c] of Object.entries(_ctx3)) {
      if (!_isActive3(t)) continue;   // 오늘 배제된 종목은 차트를 볼 이유가 없다
      if (c.eye && c.eye.eyeCheck) {
        chartCheck.push({ ticker: t, score: c.eye.score, source: 'T3', reasons: c.eye.reasons,
          flags: c.eye.flags || null, resistance: c.congestion && c.congestion.pivot ? c.congestion.pivot : null,
          price: c.price, barGap: c.barGap });
      }
    }
  }
  if (team4) {
    for (const i of team4.items) {
      if (['retest', 'bounce_trigger'].includes(i.congestion.phase)) {
        chartCheck.push({ ticker: i.ticker, score: i.congestion.score || 0, source: 'T4',
          reasons: [`${i.congestion.phaseKo} · 횡보 ${i.congestion.baseMonths ?? '—'}개월`],
          resistance: i.congestion.pivot ?? null, price: i.price });
      }
    }
  }
  const seen = new Set();
  const chartCheckAll = chartCheck.filter((c) => !seen.has(c.ticker) && seen.add(c.ticker)).sort((a, b) => b.score - a.score);
  // ⚠️ 상한 10 을 걸되 총량을 같이 쓴다. 안 쓰면 history 에 매일 "정확히 10" 만 남고 잘린 티가 안 난다 (실측 21 → 10).
  const CC_CAP = Number(process.env.CHARTCHECK_CAP || 10);
  const chartCheckTop = chartCheckAll.slice(0, CC_CAP);
  const chartCheckOut = { generated: dateStr, items: chartCheckTop, total: chartCheckAll.length, shown: chartCheckTop.length,
                          cap: CC_CAP, beyondCap: chartCheckAll.slice(CC_CAP).map((c) => `${c.ticker}(${c.score})`) };
  writeJson(paths.chartCheck, chartCheckOut);
  if (chartCheckTop.length) say('CHIEF', `👁️ 오늘 차트 볼 종목 ${chartCheckTop.length}개${chartCheckAll.length > chartCheckTop.length ? ` (전체 ${chartCheckAll.length}, 상한 ${CC_CAP})` : ''}: ${chartCheckTop.map((c) => c.ticker).join(', ')}`);

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
      chartCheck: chartCheckAll.length,
      chartCheckShown: chartCheckTop.length,
    },
    theme: themes.headline,
    chartCheck: chartCheckTop,
    chartCheckTotal: chartCheckAll.length,
    barsNotice, sessionDate, sessionMismatch,
    // 5팀 업종 흐름 × 2·3팀 종목 교차 — "돈이 몰리는 업종 안에서 뭐가 강한가"
    flowCross: (team5 && team5.flow)
      ? require('./lib/flow-cross').crossFlow(team5.flow.industries,
          { picks: qualified, rowByTicker, team3, cap: 4 })
      : null,
    stale: staleData,
    llm: { status: 'pending', note: 'LLM 리서치는 start breakout 실행 시 덧입혀집니다' },
  };

  ensureDir(paths.dashboardData);
  // 추적 상태 저장 — 산출물 쓰기 직전. 여기까지 못 오면 아무것도 저장하지 않아 재실행이 처음부터 같은 판정을 낸다.
  if (team3) tracking.save(trackState);
  if (team1) writeWindowData(path.join(paths.dashboardData, 'team1.js'), 'TEAM1_DATA', team1);
  if (team2) writeWindowData(path.join(paths.dashboardData, 'team2.js'), 'TEAM2_DATA', team2);
  if (team3) writeWindowData(path.join(paths.dashboardData, 'team3.js'), 'TEAM3_DATA', team3);
  if (team4) writeWindowData(path.join(paths.dashboardData, 'team4.js'), 'TEAM4_DATA', team4);
  if (team5) writeWindowData(path.join(paths.dashboardData, 'team5.js'), 'TEAM5_DATA', team5);
  writeWindowData(path.join(paths.dashboardData, 'chief.js'), 'CHIEF_DATA', chief);
  writeWindowData(path.join(paths.dashboardData, 'chartcheck.js'), 'CHARTCHECK_DATA', chartCheckOut);

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
        // 2026-09-07 추가: Target · 컨센서스 EPS 현재/30일전 · 매출/EPS 성장 CY/NY · 신고가 · BB중심돌파 · 오늘 조회
        ts: r.Target_Status, cyc: num(r.CY_Current), cy30: num(r.CY_30Ago), nyc: num(r.NY_Current), ny30: num(r.NY_30Ago),
        scy: num(r.SALE_CY), sny: num(r.SALE_NY), ecy: num(r.EPS_CY), eny: num(r.EPS_NY),
        nh: r.New_High_52W, bbc: r.BB_Center_Breakout_5D, ac: r.api_called === true,
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
    picks: qualified.length, breakouts: chief.counts.breakouts, chartCheck: chartCheckAll.length,
    droppedToday: team3 ? team3.dropped_today.length : null, reentryBlocked: team3 ? team3.reentryBlocked.length : null,
    barsNotice: barsNotice ? barsNotice.level : null,
    crossCounts: themes.cross ? themes.cross.counts : null, siteCondition: meta.market_condition || null,
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
  // 독자는 금융 실무자다. 원 수치를 생략하지 않는다 — 계산된 것은 표로 싣는다.
  const L = [];
  const v = (x, d = '—') => (x === null || x === undefined || Number.isNaN(x) ? d : x);
  const tp = (x) => (x === null || x === undefined ? '—' : round(100 - x, 1));   // 백분위 → 상위%
  const fmtM = (n) => (n == null ? '—' : Math.round(n).toLocaleString('en-US'));
  const fmtUsd = (n, unit = 1e6) => (n == null ? '—' : (n / unit).toLocaleString('en-US', { maximumFractionDigits: 0 }) + 'M');
  const pct = (n) => (n == null ? '—' : `${n > 0 ? '+' : ''}${n}%`);

  L.push(`# 브레이크아웃 종합 리포트 — ${dateStr}`);
  L.push('');
  L.push('> 스크리닝·추적 자료이며 투자 조언이 아닙니다. 최종 판단은 본인의 차트 확인으로 하세요.');
  if (chief.barsNotice) { L.push(''); L.push(`> ${chief.barsNotice.ko}`); }
  if (team2 && team2.dataNotice) { L.push(''); L.push(`> ${team2.dataNotice.ko}`); }
  L.push('');
  if (team1 && !team1.weekly_question.answered) {
    L.push(`## ❓ 이번 주 질문 (미응답)`);
    L.push(`**${team1.weekly_question.question}** (${team1.weekly_question.week})`);
    L.push('');
    L.push('답하시면: `node scripts/answer-weekly.js --tickers=NVDA,AVGO --note="AI 인프라"`');
    L.push('');
  }

  // ── 1팀 ──
  if (team1) {
    const q = team1.qqq;
    L.push('## 1팀 · 시장환경');
    L.push(`- ${q.ko}`);
    L.push(`- QQQ ${v(q.price)} · MA10 ${v(q.ma10)} / MA20 ${v(q.ma20)} / MA50 ${v(q.ma50)}`
      + (q.slope10Pct != null ? ` · 10일선 기울기 ${pct(q.slope10Pct)} / 20일선 ${pct(q.slope20Pct)}` : '')
      + (q.goldenCrossDate ? ` · 최근 골든크로스 ${q.goldenCrossDate}` : '')
      + (q.deathCrossDate ? ` · 최근 데드크로스 ${q.deathCrossDate}` : ''));
    if (q.index_dip && q.index_dip.ko) L.push(`- QQQ 200일선 이격: ${q.index_dip.ko}`);
    L.push(`- 데이터 기준: RS 세션 ${v(team1.data_source.sessionDate)} · QQQ 마지막 봉 ${v(team1.data_source.qqqLastBar)}`
      + (team1.data_source.sessionMismatch ? ' ⚠️ 불일치' : '') + (team1.data_source.barGaps ? ` · 봉 누락 ${team1.data_source.barGaps}종목` : '')
      + (team1.data_source.apiCalled ? ` · 사이트 신규 조회 ${team1.data_source.apiCalled.fresh}/${team1.data_source.apiCalled.total} (나머지는 사이트 캐시)` : '')
      + (team1.data_source.degraded ? ' · ⚠️ 사이트 발행 보류일' : ''));
    if (team1.data_source.siteCondition) L.push(`- 사이트 시장국면(사용자 시트 A1): **${team1.data_source.siteCondition}** — QQQ 쿨라매기 판정과 별개로 병기`);
    if (team1.data_source.dataQuality) L.push(`- 사이트 수집 품질: ${JSON.stringify(team1.data_source.dataQuality)}`);
    L.push('');
    const f = team1.finra;
    L.push('### FINRA 마진부채');
    L.push(`- ${f.ko}`);
    if (f.ok && f.latest) {
      L.push(`- 최신 ${f.latest.month}: 마진부채 ${fmtM(f.latest.debit)} · 현금계좌 free credit ${fmtM(f.latest.freeCreditCash)} · 마진계좌 free credit ${fmtM(f.latest.freeCreditMargin)} (단위 ${f.unit || 'M$'})`);
      if (f.prior) L.push(`- 전년동월 ${f.prior.month}: 마진부채 ${fmtM(f.prior.debit)} → YoY ${pct(f.yoyPct)}`);
      if (f.latest.freeCreditCash != null && f.latest.freeCreditMargin != null && f.latest.debit) {
        const fc = f.latest.freeCreditCash + f.latest.freeCreditMargin;
        L.push(`- 순레버리지(마진부채 − free credit 합계, 자체 계산): ${fmtM(f.latest.debit - fc)} · 마진부채/free credit 비율 ${round(f.latest.debit / fc, 2)}`);
      }
      if (Array.isArray(f.series13) && f.series13.length) {
        L.push('');
        L.push('| 월 | 마진부채 | free credit(현금) | free credit(마진) |');
        L.push('|---|---:|---:|---:|');
        for (const s of f.series13) L.push(`| ${s.month} | ${fmtM(s.debit)} | ${fmtM(s.freeCreditCash)} | ${fmtM(s.freeCreditMargin)} |`);
      }
    }
    L.push('');
    const mo = team1.leaders.market_overheat;
    L.push(`- 과열 집계: ${mo.ko}` + (mo.reentry != null ? ` · 200일선 −20% 이하(재진입권) ${mo.reentry}종목 · 200DIV 중앙값 ${v(mo.median)}% · 최대 ${v(mo.max)}%` : ''));
    L.push(`- 주도섹터(RS 상위 50): ${team1.leaders.sectors.map((s) => `${s.name} ${s.count}종목(${s.sharePct}%)`).join(' · ')}`);
    L.push('');
    L.push('### 주도주 (RS 최고 백분위 상위 10)');
    L.push('| 종목 | 섹터 | 상위% | RS 1M/3M/6M 상위% | 가격 | 50DIV | 200DIV | 임계 | 상태 | ADR | 52주% |');
    L.push('|---|---|---:|---|---:|---:|---:|---:|---|---:|---:|');
    for (const s of team1.leaders.stocks) {
      L.push(`| ${s.ticker} | ${s.sector} | ${round(100 - s.bestPct, 2)}% | ${tp(s.rs.m1)} / ${tp(s.rs.m3)} / ${tp(s.rs.m6)} | ${v(round(s.price))} | ${v(s.div50)} | ${v(s.div200)} | ${s.overheat.threshold} | ${s.overheat.label} | ${v(s.adr)} | ${v(s.high52)} |`);
    }
    L.push('');
  }

  // ── 2팀 ──
  if (team2) {
    const st = team2.stats;
    L.push('## 2팀 · 종목 선정');
    L.push(`- 퍼널: ${st.universe} → 상위2% ${st.unionTop}` + (st.dropped && st.dropped.etf ? ` → ETF제외 ${st.afterEtf}` : '') + ` → ADR≥4 ${st.afterAdr} → 150일선 위 **${st.afterMa150}종목**`
      + (st.byPeriod ? ` (기간별 상위2%: 1M ${st.byPeriod.m1 ?? '—'} · 3M ${st.byPeriod.m3 ?? '—'} · 6M ${st.byPeriod.m6 ?? '—'})` : ''));
    L.push(`- 테마: **${team2.themes.headline}**`);
    // ⚠️ 여기는 LLM 실행 전이라 항상 0/N 이다. build-chief-report 가 이 줄을 갈아끼운다.
    L.push(`- 리서치 커버리지: ${team2.research_coverage.done}/${team2.research_coverage.total} (LLM 리서치 대기)`);
    L.push('');
    L.push(`### 선정 ${team2.picks.length}종목 (전량)`);
    L.push('| 종목 | 회사 | 섹터/업종 | 시총 | 가격 | RS 1M/3M/6M (상위%) | RS 원값 1M/3M/6M | 수익률 1M/3M/6M | ADR | 52주% | VOL_X | 주간 | 10/50/200DIV | CY/NY 전망 | Up/Dn | BBWTHD(저점) | 저항 / 지지 | 150MA기울기 | 정배열 |');
    L.push('|---|---|---|---:|---:|---|---|---|---:|---:|---:|---:|---|---|---|---|---|---:|---|');
    for (const p of team2.picks) {
      const rs = p.rs || {};
      const nm = p.nameKo || p.nameEn || '';
      L.push(`| **${p.ticker}** | ${nm} | ${p.sector} / ${p.industry} | ${v(p.marketCap)} | ${v(round(p.price))} | ${tp(rs.m1 && rs.m1.pct)} / ${tp(rs.m3 && rs.m3.pct)} / ${tp(rs.m6 && rs.m6.pct)} `
        + `| ${v(round(rs.m1 && rs.m1.v, 3))} / ${v(round(rs.m3 && rs.m3.v, 3))} / ${v(round(rs.m6 && rs.m6.v, 3))} | ${pct(p.ret1m)} / ${pct(p.ret3m)} / ${pct(p.ret6m)} | ${v(p.adr)} | ${v(p.high52)} | ${v(p.volx)} | ${v(p.volSurgeWk)} `
        + `| ${v(p.div10)} / ${v(p.div50)} / ${v(p.div200)} | ${v(p.cyTrend)} / ${v(p.nyTrend)} | ${v(p.upCount)}/${v(p.downCount)} | ${v(p.bbwthd)}(${v(p.bbwthdLow)}) `
        + `| ${p.ta ? `${v(p.ta.resistance)} / ${v(p.ta.support)}` : '—'} | ${p.ma150Slope === null ? '판정불가' : p.ma150Slope + '%'} | ${p.order === 'YES' ? 'O' : (p.order || '—')} |`);
    }
    L.push('');
    L.push('용어: RS 원값 = QQQ 대비 초과수익률(0.35 = +35%p) · 10/50/200DIV = 각 이동평균 대비 이격(%) · CY/NY 전망 = 당해/차기 연도 컨센서스 변화율(%) · Up/Dn = 30일 내 추정치 상향/하향 인원 · BBWTHD = 볼린저 밴드 폭(저점 = 60일 최저) · 정배열 = 주가>50>150>200일선.');
    L.push('');
    // ── 컨센서스·최근 3분기 (사이트 result.json 13컬럼 + fs_data.json — 2026-09-07 추가) ──
    {
      const fsUpd = team2.picks.map((p) => p.fs && p.fs.updated).filter(Boolean).sort().slice(-1)[0];
      const cell = (x) => (x === null || x === undefined ? '—' : (typeof x === 'number' ? x : String(x)));
      const tri = (a) => (Array.isArray(a) ? a.map(cell).join(' / ') : '—');
      L.push(`### 컨센서스·최근 3분기 (사이트 yfinance 컨센서스 · fs_data${fsUpd ? ` ${fsUpd.slice(0, 10)} 갱신` : ''}${team2.fs_coverage ? ` · 보유 ${team2.fs_coverage.have}/${team2.fs_coverage.total}` : ''})`);
      L.push('| 종목 | Target | 매출성장 CY/NY | EPS성장 CY/NY | CY EPS 30일전→현재 | NY EPS 30일전→현재 | 3분기 매출성장 q0/q1/q2 | 순이익 q0/q1/q2 | 영업이익률 q0/q1/q2 | 52주 신고가 | BB중심 5일돌파 | 사이트 조회 |');
      L.push('|---|---|---|---|---|---|---|---|---|---|---|---|');
      for (const p of team2.picks) {
        const e = p.est || {};
        L.push(`| **${p.ticker}** | ${p.targetStatus ? 'YES' : (p.targetStatus === false ? '—' : '?')} | ${pct(p.saleCy)} / ${pct(p.saleNy)} | ${pct(p.epsCy)} / ${pct(p.epsNy)} | ${cell(e.cy30)} → ${cell(e.cyCur)} | ${cell(e.ny30)} → ${cell(e.nyCur)} | ${p.fs ? tri(p.fs.sale) : '—'} | ${p.fs ? tri(p.fs.ni) : '—'} | ${p.fs && p.fs.opm ? tri(p.fs.opm) : '—'} | ${p.newHigh52 ? 'Y' : '—'} | ${p.bbCenterBrk5d ? 'YES' : '—'} | ${p.apiCalled ? '오늘' : '캐시'} |`);
      }
      L.push('');
      L.push('용어: Target = 사이트 기준 당해·차기 EPS 컨센서스가 30일 전 대비 둘 다 +5% 이상 상향 · 매출/EPS 성장 = 컨센서스 기준 당해(CY)/차기(NY) 연간 성장률 · 3분기 = fs_data 의 최근 분기부터 q0/q1/q2, 순이익은 사이트 표기("흑자전환" 등) 그대로 · 사이트 조회 = 오늘 yfinance 를 새로 받았는지(캐시면 최대 3일 전 값).');
      L.push('');
    }
    // ── 기간별 상위 2% 테마 3세트 + 교차 (2026-09-07 사용자 요청) ──
    const BP = team2.themes.byPeriod, CR = team2.themes.cross, CD = team2.themes.crossDetail || {};
    if (BP && CR) {
      L.push('### 기간별 상위 2% — 어느 기간의 강세인가');
      L.push('한 종목이 여러 기간에 동시에 들어갈 수 있어 기간별 종목 수의 합은 전체보다 크다. 비중(%)의 분모는 그 기간의 종목 수다.');
      L.push('');
      for (const [k, label] of [['m1', '1개월'], ['m3', '3개월'], ['m6', '6개월']]) {
        const b = BP[k];
        L.push(`#### ${label} 상위 2% — ${b.count}종목 · ${b.headline}`);
        if (b.count) {
          L.push(`- 섹터: ${b.topSectors.map((s) => `${s.name} ${s.count}(${s.sharePct}%)`).join(' · ') || '—'}`);
          L.push(`- 업종: ${b.topIndustries.map((s) => `${s.name} ${s.count}(${s.sharePct}%)`).join(' · ') || '—'}`);
          for (const c of b.clusters.slice(0, 5)) L.push(`- ${c.level === 'Sector' ? '섹터' : '업종'} **${c.name}** ${c.count}종목(${c.sharePct}%): ${c.tickers.join(', ')}`);
          L.push(`- 종목: ${b.tickers.join(', ')}`);
        }
        L.push('');
      }
      const fmtD = (list, key) => (list || []).map((x) => {
        const st = x.streak && x.streak[key];
        const since = x.since && x.since[key];
        return `${x.ticker}${st ? `(D+${st}${since ? `, ${since}` : ''})` : ''}`;
      }).join(' · ') || '—';
      L.push(`#### 기간 교차 (전체 ${CR.counts.total}종목 = 지속 ${CR.counts.persistent} + 신규 ${CR.counts.newEntrants} + 중기 ${CR.counts.midTerm} + 퇴조 ${CR.counts.fading} + 기타 ${CR.counts.other})`);
      L.push(`- **지속 주도** (1M·3M·6M 모두 상위 2%) ${CR.counts.persistent}: ${CD.persistent ? fmtD(CD.persistent, 'm6') : CR.persistent.join(', ') || '—'}`);
      L.push(`- **신규 진입** (1M 만) ${CR.counts.newEntrants}: ${CD.newEntrants ? fmtD(CD.newEntrants, 'm1') : CR.newEntrants.join(', ') || '—'}`);
      L.push(`- **중기** (3M 기준, 1M 은 아님) ${CR.counts.midTerm}: ${CD.midTerm ? fmtD(CD.midTerm, 'm3') : CR.midTerm.join(', ') || '—'}`);
      L.push(`- **퇴조** (6M 만) ${CR.counts.fading}: ${CD.fading ? fmtD(CD.fading, 'm6') : CR.fading.join(', ') || '—'}`);
      for (const [key, list] of Object.entries(CR.other || {})) L.push(`- 기타 ${key}: ${list.join(', ')}`);
      L.push(`- D+N = 그 기간 상위 2% 에 연속 포함된 거래일 수(스냅샷 존재 평일 기준, ≤ 는 이력 시작 이전부터). 기준일 ${v(CD.asOf)}`);
      L.push('');
    }
    if (team2.themes.clusters && team2.themes.clusters.length) {
      L.push('### 테마 클러스터 (전 기간 합집합)');
      for (const c of team2.themes.clusters) {
        const pr = c.periods ? ` [1M ${c.periods.m1} · 3M ${c.periods.m3} · 6M ${c.periods.m6}]` : '';
        L.push(`- ${c.level === 'Sector' ? '섹터' : '업종'} **${c.name}** — ${c.count}종목(${c.sharePct}%)${pr}: ${c.tickers.join(', ')}`);
      }
      L.push('');
    }
  }

  // ── 3팀 ──
  if (team3) {
    const s = team3.summary;
    L.push('## 3팀 · 추적');
    L.push(`- 활성 ${s.active} / 휴면 ${s.dormant} / 배제 ${s.excluded} (누적 ${s.total})`
      + (team3.ingest ? ` · 오늘 신규 ${team3.ingest.added} · 재편입 ${(team3.ingest.restored || 0) - (team3.ingest.blocked || 0)}` : '')
      + (team3.reentryBlocked && team3.reentryBlocked.length ? ` · 재편입 차단 ${team3.reentryBlocked.length}` : ''));
    if (s.unevaluated && s.unevaluated.length) L.push(`- ⚠️ 활성인데 봉이 없어 평가하지 못함: ${s.unevaluated.join(', ')}`);
    if (team3.dropped_today.length) {
      L.push('');
      L.push('### 오늘 배제');
      L.push('| 종목 | 사유 | 판정 기준 봉 | 최초 배제일 |');
      L.push('|---|---|---|---|');
      for (const d of team3.dropped_today) L.push(`| **${d.ticker}** | ${d.reason} | ${v(d.asOf)} | ${v(d.firstExcludedAt)} |`);
    }
    if (team3.reentryBlocked && team3.reentryBlocked.length) {
      L.push('');
      L.push('### 재편입 차단 (2팀 재선정됐으나 배제 사유가 그대로인 종목)');
      for (const b of team3.reentryBlocked) L.push(`- ${b.ticker} — ${b.reason}`);
    }
    if (team3.breakouts.length) {
      L.push('');
      L.push(`### 전고점 돌파 ${team3.breakouts.length}건 (돌파봉 거래량 확인 ${team3.breakouts.filter((b) => b.volumeConfirmed).length})`);
      L.push('| 종목 | 직전고점 | 돌파일 | 초과% | 돌파봉 거래량/20일평균 | VOL_X | 주간 | 거래량확인 | 판정 근거 | Congestion |');
      L.push('|---|---|---|---:|---:|---:|---:|---|---|---|');
      for (const b of team3.breakouts) {
        L.push(`| ${b.ticker} | $${b.priorHigh} (${b.priorHighDate}) | ${v(b.breakDate)} | ${b.closeAbovePct}% | ${v(b.breakVolRatio)} | ${v(b.volx)} | ${v(b.volSurgeWk)} | ${b.volumeConfirmed ? '✅' : '—'} | ${v(b.volumeBasis)} | ${b.congestionKo}${b.barGap ? ' ⚠️봉누락' : ''} |`);
      }
    }
    const act = team3.items.filter((it) => it.status === 'active');
    if (act.length) {
      L.push('');
      L.push(`### 활성 추적 ${act.length}종목`);
      L.push('| 종목 | 업종 | 편입 | 최근 선정 | 선정 횟수 | 현재가 | 편입 후 고점 | 고점일 | 고점 대비 | 50일선 아래 연속 | eyeScore | Congestion |');
      L.push('|---|---|---|---|---:|---:|---:|---|---:|---:|---:|---|');
      for (const it of act.sort((a, b) => (b.live ? b.live.eyeScore : -1) - (a.live ? a.live.eyeScore : -1))) {
        const lv = it.live || {};
        L.push(`| ${it.ticker} | ${it.industry || ''} | ${it.added} | ${it.lastPicked} | ${it.pickCount} | ${v(lv.price)} | ${v(it.peak)} | ${v(it.peakDate)} | ${it.drawdownPct != null ? it.drawdownPct + '%' : '—'} | ${v(lv.belowMa50Days)} | ${v(lv.eyeScore)} | ${v(lv.congestion)}${lv.barGap ? ' ⚠️' : ''} |`);
      }
    }
    L.push('');
  }

  // ── 4팀 ──
  if (team4) {
    L.push('## 4팀 · Episodic Pivot');
    L.push(`- 거래량 급증 ${team4.universeHits}종목 → ${team4.analyzed}개 분석`
      + (team4.excludedNoMarketCap && team4.excludedNoMarketCap.length ? ` · 시총 미확인(우선주·유닛) 제외 ${team4.excludedNoMarketCap.length}: ${team4.excludedNoMarketCap.join(', ')}` : '')
      + (team4.excludedEtf && team4.excludedEtf.length ? ` · ETF 제외 ${team4.excludedEtf.length}` : ''));
    L.push(`- 국면: ${Object.entries(team4.byPhase).map(([k, val]) => `${k} ${val}`).join(' · ')} (unknown = 봉 부족으로 판정불가)`);
    L.push('');
    L.push(`### 거래량 급증 ${team4.items.length}종목 (전량)`);
    L.push('| 종목 | 업종 | 시총 | 가격 | VOL_X | 주간 | 종가강도 | 52주% | 60일 신고가 | 52주 신고가 | Target | 매출성장 CY | EPS성장 CY | 150MA | 국면 | 횡보(개월) | 베이스 상단/하단 | 수축비 | 피봇까지 | 점수 | 매수 트리거 |');
    L.push('|---|---|---:|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|---|---:|---|---:|---:|---:|---|');
    for (const i of team4.items) {
      const c = i.congestion || {};
      L.push(`| ${i.ticker} | ${i.industry} | ${v(i.marketCap)} | ${v(round(i.price))} | ${v(i.volx)} | ${v(i.volSurgeWk)} | ${v(i.clsPos)} | ${v(i.high52)} | ${i.brk60d ? 'YES' : '—'} | ${i.newHigh52 ? 'Y' : '—'} | ${i.targetStatus ? 'YES' : '—'} | ${pct(i.saleCy)} | ${pct(i.epsCy)} | ${i.aboveMa150 ? '위' : '아래'} | ${c.phaseKo || c.phase} | ${v(c.baseMonths)} | ${c.baseHigh != null ? `${c.baseHigh} / ${c.baseLow}` : '—'} | ${v(c.contraction)} | ${c.distToPivotPct != null ? c.distToPivotPct + '%' : '—'} | ${v(c.score)} | ${c.buyTrigger ? c.buyTrigger.note : '—'} |`);
    }
    L.push('');
    L.push('용어: 종가강도(CLS_POS) = 당일 저가~고가 구간에서 종가 위치(0~100) · 수축비 = 최근 10봉 진폭 / 직전 10봉 진폭 · 피봇 = 베이스 상단 저항선.');
    L.push('');
  }

  // ── 5팀 ──
  if (team5) {
    L.push('## 5팀 · 주도 섹터/업종 (WRS)');
    L.push(`- ${team5.note}`);
    L.push(`- 검증: 사이트 정상 ${team5.validation.comparable}그룹 중 ${team5.validation.matched} 일치 · NaN 복구 ${team5.validation.recovered}그룹`);
    L.push('');
    const seenKey = new Set();
    const top = [];
    for (const k of ['m6', 'm1', 'm3']) for (const x of team5.strictTop2[k] || []) if (!seenKey.has(x.key)) { seenKey.add(x.key); top.push({ ...x, by: k }); }
    L.push(`### 상위 2% 업종 (1M·3M·6M 어느 기간이든, 전체 ${team5.totalIndustries}개 중)`);
    L.push('| 업종 | 섹터 | 종목수 | WRS 1M | WRS 3M | WRS 6M | 상위% 1M/3M/6M | Final_WRS 6M |');
    L.push('|---|---|---:|---:|---:|---:|---|---:|');
    for (const x of top) {
      L.push(`| ${x.industry} | ${x.sector} | ${x.count} | ${v(x.wrs.m1)} | ${v(x.wrs.m3)} | ${v(x.wrs.m6)} | ${v(x.rankPct.m1)} / ${v(x.rankPct.m3)} / ${v(x.rankPct.m6)} | ${x.final ? v(x.final.m6) : '—'} |`);
    }
    L.push('');
    if (team5.sectors && team5.sectors.length) {
      L.push('### 섹터 순위 (6개월 WRS, 종목수 가중)');
      L.push('| 섹터 | 종목수 | 업종수 | WRS 6M |');
      L.push('|---|---:|---:|---:|');
      for (const s of team5.sectors) L.push(`| ${s.sector} | ${s.count} | ${s.industries} | ${s.wrs6} |`);
      L.push('');
    }
    if (team5.flow && Array.isArray(team5.flow.industries)) {
      const fl = team5.flow.industries.filter((x) => ['leading', 'inflow', 'narrow', 'pending', 'outflow'].includes(x.flow));
      const order = { leading: 0, inflow: 1, narrow: 2, pending: 3, outflow: 4 };
      fl.sort((a, b) => (order[a.flow] - order[b.flow]) || ((a.FRANK ?? 999) - (b.FRANK ?? 999)));
      const flowKo = { leading: '🟢 주도', inflow: '📈 유입', narrow: '⚠️ 소수종목', pending: '⭐ 대기', outflow: '📉 유출' };
      L.push(`### 자금 흐름 판정 ${fl.length}업종 (기준일 ${team5.flow.baseline.d10}·${team5.flow.baseline.d25}, 정정 계산)`);
      L.push(`- ${team5.flow.note}`);
      L.push('');
      L.push('| 흐름 | 업종 | 종목수 | FRANK | 25일 순위변동 | F10d% | F25d% | 50DIV 중앙 | 200DIV 중앙 | 200DIV Δ25d | CY/NY 중앙 | 상향비율 | 승률 | 국면 |');
      L.push('|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|---|');
      for (const x of fl) {
        L.push(`| ${flowKo[x.flow] || x.flow} | ${x.industry} | ${x.count} | ${v(x.FRANK)} | ${x.frank25 != null ? (x.frank25 > 0 ? '+' : '') + x.frank25 : '—'} | ${v(x.f10)} | ${v(x.f25)} | ${v(x.d50)} | ${v(x.d200)} | ${x.d200Delta != null ? (x.d200Delta > 0 ? '+' : '') + x.d200Delta : '—'} | ${v(x.cy)} / ${v(x.ny)} | ${x.upRatio != null ? x.upRatio + '%' : '—'}${x.coverage != null ? ` (n=${x.coverage})` : ''} | ${x.winRate != null ? x.winRate + '%' : '—'} | ${x.stageKo || x.stage || '—'} |`);
      }
      L.push('');
      L.push('용어: FRANK = Final_WRS 순위(1이 최상위) · F10d/F25d = 10·25거래일 전 대비 Final_WRS 변화율(분모가 0 근처면 폭발하므로 순위 변동으로 읽을 것) · 200DIV Δ25d = 200일선 이격 중앙값의 25거래일 변화(%p).');
      L.push('');
    }
  }

  // ── 차트확인 ──
  if (chief.chartCheck.length) {
    L.push(`## 👁️ 오늘 차트를 봐야 할 종목 ${chief.chartCheck.length}개` + (chief.chartCheckTotal > chief.chartCheck.length ? ` (전체 ${chief.chartCheckTotal}, 상한 ${chief.chartCheck.length})` : ''));
    for (const c of chief.chartCheck) {
      L.push(`- **${c.ticker}** (score ${c.score}, ${c.source}${c.price != null ? `, 현재가 ${round(c.price)}` : ''}${c.resistance != null ? `, 저항 ${c.resistance}` : ''}${c.barGap ? ', ⚠️봉누락' : ''})`);
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
