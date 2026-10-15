'use strict';
// 7팀(지우) — 텔레그램으로 받은 한 종목의 재료를 모은다 (AI 없음, 2026-10-13).
//   node scripts/prepare-ondemand.js SNOW
// run-breakout 12-0b/12-0c 의 종목별 보강(봉 → 셋업 → 체크표 → CNBC·KIS·실적·리포트)을 한 종목용으로 옮긴 것. 전부 기존 함수 재사용.
// 아침 파이프라인과 섞이지 않게 **자기 폴더**(state/ondemand/<날짜>/)만 쓴다 — _t6/·chart-views 사이드카를 건드리지 않는다.
// 출력: <dir>/<T>.json (에이전트 입력) · <T>-3m.png · <T>-6m.png · <T>-report*.pdf · <T>-args.json (워크플로 args)
// 마지막 줄에 JSON { ok, ticker, dir, argsFile } 을 찍는다. RS 사이트 목록에 없는 종목도 된다(RS·컨센서스만 null).

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, ensureDir, say, readJson, today, round } = require('./lib/util');
const { fetchBarsCached, barDateET } = require('./lib/bars');
const { gradeSetup } = require('./lib/setup-grade');
const { loadRules } = require('./lib/rules');
const CK = require('./lib/checklist');
const { analyze, volumeExpansion } = require('./lib/ta');
const { saveChart } = require('./lib/chart');
const { fetchDetail, slimDetail } = require('./lib/detail');
const { copyReportPdfs } = require('./data/kr-reports');
const master = require('./data/kis-master');

const PIVOT = [245, 165, 36], STOP = [248, 81, 73];   // render-charts.js 와 같은 색 (RGB 배열)
const tagOf = (t) => t.replace(/[^A-Z0-9]/gi, '_');
const dirOf = (date) => path.join(paths.root || path.join(__dirname, '..'), 'state', 'ondemand', date);

function loadWindow(file, varName) {
  try {
    const src = fs.readFileSync(path.join(paths.dashboardData, file), 'utf8');
    const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
    return m ? JSON.parse(m[1]) : null;
  } catch (e) { return null; }
}

// "매수 적정"을 막는 조건 — 문턱은 여기서 새로 정하지 않는다. gradeSetup(state·chase) · 실적 달력 · 한별 시장 판정 · 50일선.
// 프롬프트가 이 값을 읽고, finish-ondemand 가 같은 값으로 AI 결론을 다시 강제한다.
function gatesOf({ market, setup, numbers, earnings, lastBar, marketAsOf }) {
  const g = [];
  if (!market || !market.verdict) g.push({ key: 'market_unknown', ko: '시장 판정을 확인하지 못했다' });
  else if (market.verdict === 'red') g.push({ key: 'market_red', ko: '시장 판정이 빨간불이다 (신규 매수 금지 구간)' });
  if (numbers && numbers.price != null && numbers.ma50 != null && numbers.price < numbers.ma50) g.push({ key: 'below_ma50', ko: `종가 ${numbers.price} 가 50일선 ${numbers.ma50} 아래다` });
  if (!setup) g.push({ key: 'no_setup', ko: '봉 자료가 부족해 셋업을 계산하지 못했다' });
  else if (setup.state === 'none') g.push({ key: 'no_base', ko: '쉬는 구간(베이스)이 없어 넘으면 사는 선(피벗)이 없다' });
  else if (setup.state === 'post') g.push({ key: 'post_breakout', ko: `이미 피벗 ${setup.pivot} 을 넘었다(${setup.breakDate || '?'}) — 넘은 뒤에 사는 것은 추격이다` });
  if (setup && setup.chase) g.push({ key: 'chase', ko: `10일선에서 ${setup.extensionAdr} ADR 떨어져 있다 — 추격 구간` });
  if (earnings === 'unknown') g.push({ key: 'earnings_unknown', ko: '실적 발표일을 확인하지 못했다' });
  else if (earnings) g.push({ key: 'earnings_soon', ko: `실적 발표가 임박했다 (${typeof earnings === 'string' ? earnings : JSON.stringify(earnings)})` });
  return { blocked: g.length > 0, reasons: g, asOf: { bar: lastBar || null, market: marketAsOf || null } };
}

async function build(tickerIn, { date = today(), offline = false } = {}) {
  const m = await master.lookup(tickerIn);
  if (!m.ok && m.reason === 'not_found') return { ok: false, error: 'not_found' };
  if (m.ok && m.isEtf) return { ok: false, error: 'etf' };
  const T = m.ok ? m.ticker : String(tickerIn).trim().toUpperCase();
  const dir = dirOf(date);
  ensureDir(dir);
  const tag = tagOf(T);

  // 봉 → 셋업 → 차트 숫자
  const br = await fetchBarsCached(T, { range: '2y' });
  if (!br.ok || !br.bars || br.bars.length < 60) return { ok: false, error: `bars: ${br.error || '봉이 60개 미만'}` };
  const bars = br.bars, lastBar = barDateET(bars[bars.length - 1].t);
  const t1 = loadWindow('team1.js', 'TEAM1_DATA');
  const market = t1 && t1.qqq ? { verdict: t1.qqq.verdict, ko: t1.qqq.ko, finra: t1.finra && t1.finra.level, finraKo: t1.finra && t1.finra.ko } : null;
  const marketAsOf = t1 ? ((t1.data_source && t1.data_source.sessionDate) || t1.generated || null) : null;
  const rules = loadRules();
  let setup = null;
  try { const s = gradeSetup(bars, { rules, regime: (market && market.verdict) || 'green' }); setup = s && s.ok ? s : null; } catch (e) { setup = null; }
  const an = analyze(bars), vol = volumeExpansion(bars);
  const numbers = { price: an.price, ma20: an.ma20, ma50: an.ma50, ma150: an.ma150, distMA50: an.distMA50, periodHigh: an.periodHigh, pullbackFromHigh: an.pullbackFromHigh,
    volRatio20: vol.ok ? vol.volRatio20 : null, dryUpRatio: vol.ok ? vol.dryUpRatio : null };
  const last10 = bars.slice(-10).map((k, i, a) => {
    const prev = bars[bars.length - a.length + i - 1];
    return { d: barDateET(k.t), o: round(k.o), h: round(k.h), l: round(k.l), c: round(k.c), v: k.v,
      clsPos: k.h > k.l ? round((k.c - k.l) / (k.h - k.l) * 100, 0) : null, gapPct: prev && prev.c > 0 ? round((k.o / prev.c - 1) * 100) : null };
  });

  // 차트 PNG (피벗·손절 선 포함) — render-charts CLI 를 쓰지 않는다(아침 사이드카를 덮지 않게)
  const hlines = [];
  if (setup && setup.pivot) hlines.push({ price: setup.pivot, label: 'PIVOT', color: PIVOT });
  if (setup && setup.stop && setup.state !== 'post') hlines.push({ price: setup.stop, label: 'STOP', color: STOP });
  const sub = setup && setup.pivot ? `PIVOT ${setup.pivot}${setup.state !== 'post' ? '   STOP ' + setup.stop : ''}` : 'NO BASE';
  const f3 = path.join(dir, `${tag}-3m.png`), f6 = path.join(dir, `${tag}-6m.png`);
  let hasChart = false;
  try {
    const a = saveChart(bars, { maPeriods: [10, 20, 50], displayBars: 63, title: `${T} DAILY 3M`, subtitle: `MA 10 / 20 / 50   ${sub}`, hlines, file: f3, png: true });
    const b = saveChart(bars, { maPeriods: [20, 50, 150], displayBars: 126, title: `${T} DAILY 6M`, subtitle: `MA 20 / 50 / 150   ${sub}`, hlines, file: f6, png: true });
    hasChart = !!(a.ok && b.ok);
  } catch (e) { hasChart = false; say('WARN', `차트 그림 실패: ${e.message}`); }

  // RS 사이트 행 (목록에 없으면 null — RS·컨센서스는 "확인 불가")
  let site = null, item = null, sector = null, industry = null, fsRow = null;
  if (!offline) {
    try {
      const { fetchRsData } = require('./fetch-rs-data');
      const { rankPercentiles } = require('./lib/percentile');
      const { pickRow } = require('./lib/screen');
      const lists = require('./lib/lists');
      const rs = await fetchRsData();
      if (rs.source === 'live') {
        rankPercentiles(rs.rows);
        const row = rs.rows.find((r) => String(r.Ticker).toUpperCase() === T);
        if (row) {
          const p = pickRow(row); item = lists.itemOf(row);
          sector = p.sector; industry = p.industry;
          site = { rs: p.rs, rank: { m1: item.rnk1, m3: item.rnk3, m6: item.rnk6 }, marketCap: p.marketCap ?? null, volx: p.volx ?? null, high52: p.high52 ?? null, adr: p.adr ?? null,
            div50: p.div50 ?? null, div200: p.div200 ?? null, targetStatus: p.targetStatus ?? null,
            saleCy: p.saleCy ?? null, saleNy: p.saleNy ?? null, epsCy: p.epsCy ?? null, epsNy: p.epsNy ?? null, cyTrend: p.cyTrend ?? null, nyTrend: p.nyTrend ?? null, est: p.est || null,
            siteUpdated: rs.meta && rs.meta.last_updated };
        }
      }
      const { getFsData, fsOf } = require('./data/rs-fs-data');
      try { fsRow = fsOf(await getFsData(), T); if (site) site.fs = fsRow || null; } catch (e) { /* 없으면 없는 대로 */ }
    } catch (e) { say('WARN', `RS 사이트 조회 실패 — RS·컨센서스 없이 진행 (${e.message})`); }
  }

  // 상세(SEC 실적·8-K·나스닥 뉴스·연합인포맥스 리포트) · CNBC · KIS · 실적 달력 · 리포트 PDF
  let detail = null, rawDetail = null, detailNote = null, cnbc = null, kis = null, earnings = 'unknown', reportPdfs = [], estimates = null;
  if (!offline) {
    try { const r = await fetchDetail(T, date); if (r.gotAny) { rawDetail = r.detail; detail = slimDetail(r.detail); } else detailNote = '실적·뉴스·공시 수집 실패 — 웹검색에 의존'; } catch (e) { detailNote = `수집 실패: ${e.message}`; }
    try { const c = await require('./data/cnbc').getTickerArticles(T); cnbc = c.ok ? c.items : null; } catch (e) { cnbc = null; }
    // 밤 루프가 KIS 를 쓰는 중이면 호출 한도가 겹친다 → 건너뛰고 "확인 불가" (캐시가 있으면 facts 가 캐시를 준다)
    const nightOn = (() => { try { return require('child_process').execFileSync('pgrep', ['-f', 'night-loop.js|paper-trader.js']).toString().trim().length > 0; } catch (e) { return false; } })();
    try { const K = require('./lib/kis'); if (K.configured() && !nightOn) kis = await K.facts(T); } catch (e) { kis = null; }
    try { const E = require('./lib/earnings'); const res = await E.upcomingEarnings(lastBar || date, rules.risk.earningsBlockDays); earnings = res && res.ok ? E.earningsOf(res, T) : 'unknown'; } catch (e) { earnings = 'unknown'; }
    try { estimates = await require('./data/yahoo-estimates').getEstimates(T, { today: date }); } catch (e) { estimates = null; }
    try { reportPdfs = await copyReportPdfs(detail && detail.krReports && detail.krReports.reports, dir, T); } catch (e) { reportPdfs = []; }
  }
  if (!sector) { sector = '확인 불가'; industry = (rawDetail && rawDetail.industryKo) || '확인 불가'; }

  // 코드 체크표 (AI 없음) — 화면에 그대로 나가고, 결론 근거(basis.checkRef)를 대조하는 기준이 된다
  const ckItem = item || { ticker: T, high52: null, volx: null, ret1d: null, rnk1: null, rnk3: null, rnk6: null, maxRise3m: null, ext10Adr: setup ? setup.extensionAdr : null };
  const checks = {
    qm: CK.qullamaggie({ item: ckItem, setup, bars, market }),
    canslim: CK.canslim({ item: ckItem, fs: fsRow, detail: rawDetail, kis, cnbc, market, dry: CK.dryUp(bars) }),
  };
  const plan = setup ? { state: setup.state, grade: setup.grade, pivot: setup.pivot ?? null, stop: setup.stop ?? null, distToPivotPct: setup.distToPivotPct ?? null, distToPivotAdr: setup.distToPivotAdr ?? null,
    riskPerSharePct: setup.riskPerSharePct ?? null, extensionAdr: setup.extensionAdr ?? null, adrPct: setup.adrPct ?? null, breakDate: setup.breakDate || null, chase: !!setup.chase,
    metrics: setup.metrics || null, reasons: setup.reasons || null, earnings: earnings === 'unknown' ? null : earnings } : null;
  const gates = gatesOf({ market, setup, numbers, earnings, lastBar, marketAsOf });

  // 업종이 하린(5팀) FRANK 10위 안이면 그 결론 한 줄을 붙인다
  let industryRank = null;
  const t5 = loadWindow('team5.js', 'TEAM5_DATA');
  const hit = t5 && (t5.industries || []).find((x) => x.industry === industry);
  if (hit) industryRank = { frank: hit.frank, frank25dChg: hit.frank25dChg, headline: hit.report && hit.report.status === 'done' ? hit.report.headline : null, asOf: t5.generated };

  const name = (m.ok && (m.nameKo || m.nameEn)) || (rawDetail && (rawDetail.nameKo || rawDetail.nameEn)) || null;
  const input = { ticker: T, name, exchange: m.ok ? m.exchange : null, date, session: lastBar, source: 'ondemand', sector, industry, industryRank,
    plan, gates, checks, site, eye: null, detail, detailNote, reportPdfs, cnbc, kis, estimates,
    chart: { lastBar, numbers, last10, png3m: hasChart ? f3 : null, png6m: hasChart ? f6 : null }, market,
    note: 'gates = "매수 적정"을 막는 조건(코드 계산). checks = 코드가 계산한 체크표. site 가 null 이면 RS 사이트 목록에 없는 종목이다(RS·컨센서스 확인 불가).' };
  fs.writeFileSync(path.join(dir, `${tag}.json`), JSON.stringify(input, null, 1), 'utf8');

  const args = { mode: 'verdict', date, session: lastBar, cap: 1, model: process.env.ONDEMAND_MODEL || 'opus', argsDir: dir, docsDir: path.join(__dirname, '..', 'docs'),
    items: [{ ticker: tag === T ? T : tag, name, grade: plan ? plan.grade : '—', sector, industry, price: numbers.price, pivot: plan ? plan.pivot : null, stop: plan ? plan.stop : null,
      distToPivotPct: plan ? plan.distToPivotPct : null, earnings: earnings === 'unknown' ? null : earnings, hasChart, hasDetail: !!detail, source: 'ondemand', model: process.env.ONDEMAND_MODEL || 'opus' }], skipped: [] };
  const argsFile = path.join(dir, `${tag}-args.json`);
  fs.writeFileSync(argsFile, JSON.stringify(args), 'utf8');
  say('T6', `온디맨드 재료: ${T}${name ? ` (${name})` : ''} · 봉 ${lastBar} · 셋업 ${setup ? setup.state : '없음'} · 막는 조건 ${gates.reasons.length} · 뉴스 ${detail && detail.news ? (detail.news.items || []).length : 0} · CNBC ${(cnbc || []).length} · 리포트 PDF ${reportPdfs.length} · RS ${site ? '있음' : '목록 밖'}`);
  return { ok: true, ticker: T, tag, dir, argsFile, inputFile: path.join(dir, `${tag}.json`) };
}

if (require.main === module) {
  loadEnv();
  const t = process.argv[2];
  if (!t || !/^[A-Za-z][A-Za-z.\-/]{0,7}$/.test(t)) { console.log(JSON.stringify({ ok: false, error: 'usage: prepare-ondemand.js TICKER' })); process.exit(2); }
  build(t, { offline: process.argv.includes('--offline') })
    .then((r) => { console.log(JSON.stringify(r)); process.exit(r.ok ? 0 : 1); })
    .catch((e) => { console.log(JSON.stringify({ ok: false, error: e.message })); process.exit(1); });
}
module.exports = { build, gatesOf, dirOf, tagOf };
