'use strict';
// 육안 차트 판정 기록 — 사용자의 판정과, Claude 가 렌더된 PNG 를 직접 보고 쓴 소견.
//
//   node scripts/mark-breakout.js --ticker=PANW --verdict=breakout --note="6개월 수렴 후 거래량 동반 돌파"
//   node scripts/mark-breakout.js --by=claude --ticker=FEIM --verdict=keep --note="..."
//
// 사용자 verdict : breakout(돌파) | watching(관찰) | failed(실패) | reject(관심없음)
// Claude  verdict : keep(계획 유지) | hold(보류) | drop(제외)   ← 6팀 매수 계획에 대한 차트 소견
//
// 시스템의 수치 판정과 나란히 대시보드에 표시된다 — 사용자 판단이 최종이고 시스템·Claude 는 보조다.
// ⚠️ Claude 소견은 by:'claude' 로 구분해 남긴다. 나중에 실제 결과와 대조해 적중률을 센다(docs/CLAUDE-NOTES.md).
//    그래서 소견을 쓸 당시의 등급·피벗·가격을 같이 저장한다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, readJson, writeJson, writeWindowData, today } = require('./lib/util');

const VERDICTS = { breakout: '🚀 돌파 확인', watching: '👀 관찰 중', failed: '❌ 돌파 실패', reject: '⛔ 관심 제외' };
const READS = { keep: '✅ 계획 유지', hold: '⏸ 보류', drop: '⛔ 제외' };

function arg(name, def = null) {
  const p = process.argv.find((s) => s.startsWith(`--${name}=`));
  return p ? p.slice(name.length + 3) : def;
}

function loadTeam6() {
  const file = path.join(paths.dashboardData, 'team6.js');
  try {
    const m = fs.readFileSync(file, 'utf8').match(/window\.TEAM6_DATA\s*=\s*([\s\S]*);\s*$/);
    return m ? { file, data: JSON.parse(m[1]) } : null;
  } catch (e) { return null; }
}

// 가장 최근 Claude 소견 (티커별 1건). run-breakout 이 매수 계획에 붙일 때도 쓴다.
function latestReads(log, { by = 'claude', sinceDate = null } = {}) {
  const out = new Map();
  for (const e of (log && log.entries) || []) {
    if ((e.by || 'user') !== by) continue;
    if (sinceDate && e.date < sinceDate) continue;
    if (!out.has(e.ticker)) out.set(e.ticker, { date: e.date, verdict: e.verdict, note: e.note || '' });
  }
  return out;
}

function main() {
  loadEnv();
  const ticker = (arg('ticker') || '').toUpperCase();
  const by = (arg('by') || 'user').toLowerCase();
  const table = by === 'claude' ? READS : VERDICTS;
  const verdict = (arg('verdict') || (by === 'claude' ? 'hold' : 'watching')).toLowerCase();
  const note = arg('note', '');
  const dateStr = arg('date', today());

  if (process.argv.includes('--list')) {
    const log = readJson(paths.breakoutLog, { entries: [] });
    console.log(`\n판정 기록 ${log.entries.length}건 (최근 20)\n`);
    for (const e of log.entries.slice(0, 20)) {
      const who = (e.by || 'user') === 'claude' ? '🤖' : '👤';
      console.log(`${e.date}  ${who} ${e.ticker.padEnd(8)} ${VERDICTS[e.verdict] || READS[e.verdict] || e.verdict}${e.note ? '  — ' + e.note : ''}`);
    }
    return;
  }

  if (!ticker || !table[verdict] || !['user', 'claude'].includes(by)) {
    console.log('사용법: node scripts/mark-breakout.js --ticker=PANW --verdict=breakout --note="..."');
    console.log('        node scripts/mark-breakout.js --by=claude --ticker=FEIM --verdict=keep --note="..."');
    console.log('사용자 verdict: ' + Object.keys(VERDICTS).join(' | '));
    console.log('Claude verdict: ' + Object.keys(READS).join(' | '));
    console.log('목록: node scripts/mark-breakout.js --list');
    process.exit(1);
  }

  const entry = { date: dateStr, ticker, verdict, note, by, recorded_at: new Date().toISOString() };
  const t6 = loadTeam6();
  if (by === 'claude' && t6) {
    const p = [...(t6.data.plans || []), ...(t6.data.post || [])].find((x) => x.ticker === ticker);
    if (p) {
      entry.at = { grade: p.grade, state: p.state, pivot: p.pivot, stop: p.stop, price: p.price, asOf: p.asOf, watch: !!p.watch };
      // 대시보드에 바로 보이게 — 다음 run-breakout 을 기다리지 않는다
      p.lastRead = { date: dateStr, verdict, note };
      writeWindowData(t6.file, 'TEAM6_DATA', t6.data);
    }
  }

  const log = readJson(paths.breakoutLog, { entries: [] });
  // 같은 날 같은 사람이 같은 종목을 다시 쓰면 덮어쓴다 (소견을 고쳐 쓴 것이지 두 번 본 게 아니다)
  log.entries = log.entries.filter((e) => !(e.date === dateStr && e.ticker === ticker && (e.by || 'user') === by));
  log.entries.unshift(entry);
  log.entries = log.entries.slice(0, 1000);
  writeJson(paths.breakoutLog, log);

  console.log(`✅ ${by === 'claude' ? '🤖' : '👤'} ${ticker} · ${table[verdict]}${note ? ' — ' + note : ''} (${dateStr})`);
}

module.exports = { latestReads, READS, VERDICTS };

if (require.main === module) main();
