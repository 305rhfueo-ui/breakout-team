'use strict';
// RS 히스토리 백필 — 1회성 무거운 단계. 매일 실행(run-breakout)과 분리한다.
//   node scripts/backfill-history.js               # 최근 63 평일
//   node scripts/backfill-history.js --days=90
//   node scripts/backfill-history.js --tickers=NVDA,MU   # 특정 종목만 시계열 생성
//
// 첫 실행은 5~15분 걸린다 (스냅샷 다운로드). 이후 run-breakout 이 신규분만 1개씩 추가한다.
// 원본은 슬림화해 CACHE_DIR(OneDrive 밖)에 저장한다.

const { paths, loadEnv, say, ensureDir } = require('./lib/util');
const H = require('./lib/history-series');

function arg(name, def = null) {
  const p = process.argv.find((s) => s.startsWith(`--${name}=`));
  return p ? p.slice(name.length + 3) : def;
}

async function main() {
  loadEnv();
  const days = Number(arg('days', 63));
  const only = arg('tickers');
  const all = process.argv.includes('--all');
  const t0 = Date.now();

  // 기본값: 추적 목록 + 오늘 2팀 픽만 시계열을 만든다.
  // 유니버스 전체(1,412개)를 쓰면 매일 그만큼의 파일이 갱신·커밋되어 git 히스토리가 폭증한다.
  let tickers = null;
  if (only) {
    tickers = only.split(',').map((s) => s.trim().toUpperCase());
  } else if (!all) {
    const tr = require('./lib/tracking').load();
    const set = new Set(tr.items.map((x) => x.ticker));
    const fs2 = require('fs');
    try {
      for (const f of fs2.readdirSync(paths.picksDir).slice(-5)) {
        const j = JSON.parse(fs2.readFileSync(require('path').join(paths.picksDir, f), 'utf8'));
        for (const t of (j.tickers || [])) set.add(t);
      }
    } catch (e) { /* picks 없으면 추적분만 */ }
    tickers = [...set];
    say('SYSTEM', `대상 종목 ${tickers.length}개 (추적 + 최근 픽). 전체를 원하면 --all`);
  }

  ensureDir(paths.snapshotCache);
  say('SYSTEM', `히스토리 백필 시작 · 캐시: ${paths.snapshotCache}`);

  const idx = await H.fetchIndex();
  const weekdays = H.weekdaysOnly(idx.dates);
  const target = weekdays.slice(-days);
  say('SYSTEM', `스냅샷 색인 ${idx.dates.length}개 → 평일 ${weekdays.length}개 → 대상 ${target.length}개 (${target[0]} ~ ${target[target.length - 1]})`);
  say('SYSTEM', `주말 스냅샷 ${idx.dates.length - weekdays.length}개 제외 (금요일 값 복제라 그래프가 계단형으로 왜곡됨)`);

  let net = 0, hit = 0, fail = 0;
  for (let i = 0; i < target.length; i++) {
    const d = target[i];
    try {
      const r = await H.ensureSnapshot(d);
      if (r.cached) hit++; else net++;
      if ((i + 1) % 10 === 0 || i === target.length - 1) {
        process.stdout.write(`\r  진행 ${i + 1}/${target.length} · 다운로드 ${net} · 캐시 ${hit}${fail ? ` · 실패 ${fail}` : ''}   `);
      }
    } catch (e) { fail++; }
  }
  process.stdout.write('\n');

  say('SYSTEM', '시계열 추출 중 (종목별 RS + 업종별 WRS 3기간 재계산)…');
  const { byTicker, byIndustry, dates } = H.buildSeries(target, { tickers });
  say('SYSTEM', `종목 ${byTicker.size}개 · 업종 ${byIndustry.size}개 · 유효 스냅샷 ${dates.length}일`);

  const w = H.writeSeriesFiles(byTicker, byIndustry, { tickers });
  say('SYSTEM', `내보내기: 종목 ${w.tickers}파일 · 업종 ${w.industries}파일 → ${paths.dashboardSeries}`);
  if (tickers) {
    const pruned = H.pruneSeries(tickers);
    if (pruned) say('SYSTEM', `불필요한 시계열 ${pruned}개 정리 (추적 목록 밖 종목)`);
  }

  // 검증: 주말 중복이 실제로 걸러졌는지
  const sample = byTicker.get('AAPL') || byTicker.values().next().value;
  if (sample) {
    const dup = sample.p.filter((v, i) => i > 0 && v === sample.p[i - 1]).length;
    console.log(`\n검증 (${sample.ticker}): ${sample.d.length}일 · 연속 동일종가 ${dup}건`);
    console.log(`  최근 5일: ${sample.d.slice(-5).map((d, i) => `${d}=${sample.p.slice(-5)[i]}`).join('  ')}`);
  }

  console.log(`\n완료 (${((Date.now() - t0) / 1000).toFixed(1)}s) · 다운로드 ${net} · 캐시 ${hit}${fail ? ` · 실패 ${fail}` : ''}`);
  console.log('이제 대시보드 2팀/5팀 팝업에서 RS·WRS 3개월 그래프가 표시됩니다.');
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
