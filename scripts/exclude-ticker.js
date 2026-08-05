'use strict';
// 3팀 추적 목록 수동 배제 / 복구.
//   node scripts/exclude-ticker.js --ticker=XYZ --reason="차트 확인 결과 추세 붕괴"
//   node scripts/exclude-ticker.js --ticker=XYZ --restore
//
// 수동 배제는 자동 재편입보다 우선한다 (manualHold=true → 2팀이 다시 뽑아도 복귀 안 함).

const { loadEnv, today, say } = require('./lib/util');
const tracking = require('./lib/tracking');

function arg(name, def = null) {
  const p = process.argv.find((s) => s.startsWith(`--${name}=`));
  return p ? p.slice(name.length + 3) : def;
}

function main() {
  loadEnv();
  const ticker = (arg('ticker') || '').toUpperCase();
  const restore = process.argv.includes('--restore');
  const list = process.argv.includes('--list');

  if (list) {
    const st = tracking.load();
    const s = tracking.summary(st);
    console.log(`\n활성 ${s.active} / 휴면 ${s.dormant} / 배제 ${s.excluded} (누적 ${s.total})\n`);
    for (const it of st.items.slice().sort((a, b) => a.status.localeCompare(b.status) || a.ticker.localeCompare(b.ticker))) {
      const mark = it.status === 'active' ? '🟢' : it.status === 'dormant' ? '🟡' : '🔴';
      console.log(`${mark} ${it.ticker.padEnd(8)} ${it.status.padEnd(9)}${it.manualHold ? '[수동] ' : ''}${it.excludedReason || it.addedReason || ''}`);
    }
    return;
  }

  if (!ticker) {
    console.log('사용법:');
    console.log('  node scripts/exclude-ticker.js --ticker=XYZ --reason="사유"');
    console.log('  node scripts/exclude-ticker.js --ticker=XYZ --restore');
    console.log('  node scripts/exclude-ticker.js --list');
    process.exit(1);
  }

  const r = restore
    ? tracking.manualRestore(ticker, today())
    : tracking.manualExclude(ticker, arg('reason', '사용자 지시'), today());

  if (!r.ok) { console.error('❌ ' + r.error); process.exit(1); }
  console.log(restore
    ? `✅ ${ticker} 복구 — 활성으로 되돌리고 고점(peak)을 리셋했습니다`
    : `✅ ${ticker} 수동 배제 — ${r.reason}\n   (manualHold: 2팀이 다시 선정해도 자동 복귀하지 않습니다. --restore 로 해제)`);
}

if (require.main === module) main();
