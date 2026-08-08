'use strict';
// 이미 만들어진 dashboard/data/team2.js 의 선정 종목에 회사명을 채워 넣는다.
//
// 테마 카드가 티커만 나열하면 무슨 회사인지 알 수 없다. 원래는 run-breakout 이
// 전 종목에 이름을 붙이지만, 그 코드가 들어가기 전에 만들어진 데이터에는 상위 20종목분만 있다.
// 이 스크립트는 그 구멍만 메운다 — 다른 값은 절대 건드리지 않는다.
//
//   node scripts/backfill-names.js
//
// ⚠️ 이름을 못 찾으면 비워둔다. 화면이 '회사명 미확보'로 표시한다. 지어내지 않는다.

const path = require('path');
const fs = require('fs');
const { paths, loadEnv, writeWindowData, say } = require('./lib/util');

function loadWindowData(file, varName) {
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  return m ? JSON.parse(m[1]) : null;
}

async function main() {
  loadEnv();
  const file = path.join(paths.dashboardData, 'team2.js');
  const d = loadWindowData(file, 'TEAM2_DATA');
  if (!d || !Array.isArray(d.picks)) { say('WARN', 'team2.js 를 읽지 못했습니다'); process.exit(0); }

  const kr = require('./data/kr-reports');
  const { nameOf } = require('./data/sec-edgar');

  const todo = d.picks.filter((p) => !p.nameKo && !p.nameEn);
  say('SYSTEM', `전체 ${d.picks.length}종목 중 이름 없는 ${todo.length}종목을 조회합니다`);

  let ko = 0, en = 0, miss = 0;
  for (let i = 0; i < d.picks.length; i++) {
    const p = d.picks[i];
    // 이미 detail 로 받아둔 이름이 있으면 위로 끌어올린다 (재조회 불필요)
    if (!p.nameKo && p.detail && p.detail.nameKo) p.nameKo = p.detail.nameKo;
    if (!p.nameEn && p.detail && p.detail.nameEn) p.nameEn = p.detail.nameEn;
    if (p.nameKo || p.nameEn) { if (p.nameKo) ko++; continue; }

    try {
      const info = await kr.lookupTicker(p.ticker);
      if (info && info.ok) { p.nameKo = info.nameKo || null; p.nameEn = info.nameEn || null; }
    } catch (e) { /* 인포맥스 실패는 치명적이지 않다 */ }
    if (p.nameKo) ko++;
    if (!p.nameEn) {
      try { const t = await nameOf(p.ticker); if (t) { p.nameEn = t; en++; } } catch (e) { /* noop */ }
    }
    if (!p.nameKo && !p.nameEn) { miss++; say('WARN', `${p.ticker}: 회사명 확보 실패 — 비워둡니다`); }
    if ((i + 1) % 10 === 0) process.stdout.write(`\r  ${i + 1}/${d.picks.length}   `);
  }
  process.stdout.write('\r');

  writeWindowData(file, 'TEAM2_DATA', d);
  say('T2', `회사명 채움: 국문 ${ko} · 영문보강 ${en} · 미확보 ${miss} / ${d.picks.length}종목`);
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { main };
