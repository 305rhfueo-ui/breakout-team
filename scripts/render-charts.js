'use strict';
// 후보 종목 캔들 차트를 PNG 로 그린다 — Claude Code 세션이 Read 도구로 직접 보고 소견을 쓰기 위한 그림.
//
//   node scripts/render-charts.js                 6팀 관심·피벗 근처 + 이미 돌파 + 차트확인 목록
//   node scripts/render-charts.js --tickers=ZS,MRNA
//   node scripts/render-charts.js --watch-only    6팀 관심 종목만
//
// 종목당 두 장: 3개월(63봉 · MA10/20/50) · 6개월(126봉 · MA20/50/150). 피벗·예비 손절은 점선으로 긋는다.
//
// ⚠️ PNG 는 저장소에 넣지 않는다 (CACHE_DIR/charts/{날짜}/). 매일 40장씩 쌓이면 git 이 1년에 200MB 가까이 분다.
//    대시보드는 Finviz·TradingView 링크를 쓴다. 저장소에는 숫자 사이드카(state/chart-views)만 남긴다.
// ⚠️ 그림에서 읽은 가격은 ±1% 오차가 있다. 소견에 쓰는 가격은 사이드카의 숫자를 인용할 것.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, today, readJson, writeJson, say, ensureDir, round } = require('./lib/util');
const { fetchBarsCached, barDateET } = require('./lib/bars');
const { saveChart } = require('./lib/chart');
const { analyze, volumeExpansion } = require('./lib/ta');

const PIVOT = [245, 165, 36], STOP = [248, 81, 73], RESIST = [125, 133, 144];

function loadWindow(file, varName) {
  try {
    const m = fs.readFileSync(path.join(paths.dashboardData, file), 'utf8').match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
    return m ? JSON.parse(m[1]) : null;
  } catch (e) { return null; }
}

function targets(argv) {
  const pick = (argv.find((a) => a.startsWith('--tickers=')) || '').slice(10);
  const t6 = loadWindow('team6.js', 'TEAM6_DATA') || {};
  const planOf = new Map([...(t6.plans || []), ...(t6.post || [])].map((p) => [p.ticker, p]));
  if (pick) return pick.split(',').map((t) => t.trim().toUpperCase()).filter(Boolean).map((t) => ({ ticker: t, why: '지정', plan: planOf.get(t) || null, cc: null }));
  const out = new Map();
  const add = (t, why, extra) => { if (!out.has(t)) out.set(t, { ticker: t, why, plan: planOf.get(t) || null, cc: null, ...extra }); };
  for (const p of t6.plans || []) if (p.watch) add(p.ticker, '6팀 관심');
  if (argv.includes('--watch-only')) return [...out.values()];
  for (const p of t6.plans || []) add(p.ticker, '6팀 피벗 근처');
  for (const p of (t6.post || []).slice(0, 10)) add(p.ticker, '이미 돌파');
  const cc = readJson(paths.chartCheck, { items: [] });
  for (const c of cc.items || []) { add(c.ticker, '차트확인'); out.get(c.ticker).cc = c; }
  return [...out.values()];
}

async function main() {
  loadEnv();
  const argv = process.argv.slice(2);
  const dateStr = (argv.find((a) => a.startsWith('--date=')) || '').slice(7) || today();
  const list = targets(argv);
  if (!list.length) { say('WARN', '그릴 종목이 없습니다 — run-breakout 을 먼저 실행하세요'); return; }
  const dir = path.join(paths.cacheDir, 'charts', dateStr);
  ensureDir(dir);

  const views = [];
  for (const x of list) {
    const r = await fetchBarsCached(x.ticker, { range: '2y' });
    if (!r.ok) { say('WARN', `${x.ticker}: 봉 없음 (${r.error})`); views.push({ ticker: x.ticker, ok: false, error: r.error }); continue; }
    const p = x.plan;
    const hlines = [];
    if (p && p.pivot) hlines.push({ price: p.pivot, label: 'PIVOT', color: PIVOT });
    if (p && p.stop && p.state !== 'post') hlines.push({ price: p.stop, label: 'STOP', color: STOP });
    if (!p && x.cc && x.cc.resistance) hlines.push({ price: x.cc.resistance, label: 'RESIST', color: RESIST });
    const tag = `${x.ticker.replace(/[^A-Z0-9]/gi, '_')}`;
    const f3 = path.join(dir, `${tag}-3m.png`), f6 = path.join(dir, `${tag}-6m.png`);
    const sub = p ? `${p.state === 'post' ? 'BROKE ' + p.breakDate : 'GRADE ' + p.grade}   PIVOT ${p.pivot}${p.state !== 'post' ? '   STOP ' + p.stop : ''}` : '';
    const a = saveChart(r.bars, { maPeriods: [10, 20, 50], displayBars: 63, title: `${x.ticker} DAILY 3M`, subtitle: `MA 10 / 20 / 50   ${sub}`.trim(), hlines, file: f3, png: true });
    const b = saveChart(r.bars, { maPeriods: [20, 50, 150], displayBars: 126, title: `${x.ticker} DAILY 6M`, subtitle: `MA 20 / 50 / 150   ${sub}`.trim(), hlines, file: f6, png: true });
    const an = analyze(r.bars), vol = volumeExpansion(r.bars);
    const last10 = r.bars.slice(-10).map((k) => ({ d: barDateET(k.t), o: round(k.o), h: round(k.h), l: round(k.l), c: round(k.c),
      v: k.v, clsPos: k.h > k.l ? round((k.c - k.l) / (k.h - k.l) * 100, 0) : null, gapPct: null }));
    for (let i = 0; i < last10.length; i++) {
      const prev = r.bars[r.bars.length - last10.length + i - 1];
      if (prev && prev.c > 0) last10[i].gapPct = round((last10[i].o / prev.c - 1) * 100);
    }
    views.push({ ticker: x.ticker, ok: a.ok && b.ok, why: x.why, png3m: a.file, png6m: b.file,
      lastBar: barDateET(r.bars[r.bars.length - 1].t),
      plan: p ? { grade: p.grade, state: p.state, pivot: p.pivot, stop: p.stop, distToPivotPct: p.distToPivotPct, extensionAdr: p.extensionAdr,
        adrPct: p.adrPct, watch: !!p.watch, blocked: p.blocked || null, breakDate: p.breakDate || null, reasons: p.reasons, metrics: p.metrics } : null,
      chartCheck: x.cc ? { score: x.cc.score, reasons: x.cc.reasons, resistance: x.cc.resistance } : null,
      numbers: { price: an.price, ma20: an.ma20, ma50: an.ma50, ma150: an.ma150, distMA50: an.distMA50, periodHigh: an.periodHigh, pullbackFromHigh: an.pullbackFromHigh,
        volRatio20: vol.ok ? vol.volRatio20 : null, dryUpRatio: vol.ok ? vol.dryUpRatio : null },
      last10 });
    say('SYSTEM', `${x.ticker.padEnd(6)} ${x.why} → ${path.basename(f3)} · ${path.basename(f6)}`);
  }

  // 사이드카에는 PNG 경로를 넣지 않는다 (개인 PC 경로가 공개 저장소에 남는다)
  writeJson(path.join(paths.chartViews, `${dateStr}.json`), { date: dateStr, count: views.length,
    items: views.map(({ png3m, png6m, ...v }) => v) });
  const okN = views.filter((v) => v.ok).length;
  say('SYSTEM', `차트 ${okN}종목 × 2장 → ${dir}`);
  say('SYSTEM', `숫자 사이드카 → ${path.join(paths.chartViews, dateStr + '.json')}`);
  console.log(JSON.stringify({ dir, tickers: views.filter((v) => v.ok).map((v) => v.ticker) }));
}

module.exports = { targets };

if (require.main === module) main().catch((e) => { console.error('차트 렌더 오류:', e); process.exit(1); });
