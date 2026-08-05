'use strict';
// 사용자의 육안 차트 판정 기록.
//   node scripts/mark-breakout.js --ticker=PANW --verdict=breakout --note="6개월 수렴 후 거래량 동반 돌파"
//
// verdict: breakout(돌파) | watching(관찰) | failed(실패) | reject(관심없음)
// 시스템의 수치 판정과 나란히 대시보드에 표시된다 — 내 판단이 최종이고 시스템은 보조다.

const { paths, loadEnv, readJson, writeJson, today } = require('./lib/util');

const VERDICTS = { breakout: '🚀 돌파 확인', watching: '👀 관찰 중', failed: '❌ 돌파 실패', reject: '⛔ 관심 제외' };

function arg(name, def = null) {
  const p = process.argv.find((s) => s.startsWith(`--${name}=`));
  return p ? p.slice(name.length + 3) : def;
}

function main() {
  loadEnv();
  const ticker = (arg('ticker') || '').toUpperCase();
  const verdict = (arg('verdict') || 'watching').toLowerCase();
  const note = arg('note', '');
  const dateStr = arg('date', today());

  if (process.argv.includes('--list')) {
    const log = readJson(paths.breakoutLog, { entries: [] });
    console.log(`\n육안 판정 기록 ${log.entries.length}건 (최근 20)\n`);
    for (const e of log.entries.slice(0, 20)) {
      console.log(`${e.date}  ${e.ticker.padEnd(8)} ${VERDICTS[e.verdict] || e.verdict}${e.note ? '  — ' + e.note : ''}`);
    }
    return;
  }

  if (!ticker || !VERDICTS[verdict]) {
    console.log('사용법: node scripts/mark-breakout.js --ticker=PANW --verdict=breakout --note="..."');
    console.log('verdict: ' + Object.keys(VERDICTS).join(' | '));
    console.log('목록: node scripts/mark-breakout.js --list');
    process.exit(1);
  }

  const log = readJson(paths.breakoutLog, { entries: [] });
  log.entries.unshift({ date: dateStr, ticker, verdict, note, recorded_at: new Date().toISOString() });
  log.entries = log.entries.slice(0, 500);
  writeJson(paths.breakoutLog, log);

  console.log(`✅ ${ticker} · ${VERDICTS[verdict]}${note ? ' — ' + note : ''} (${dateStr})`);
  console.log(`   저장: ${paths.breakoutLog}`);
  console.log('   다음 run-breakout 실행 시 대시보드 3팀 탭에 시스템 판정과 나란히 표시됩니다.');
}

if (require.main === module) main();
