'use strict';
// N 심층분석 결과 병합 (2026-11-06) — 출처 링크 검증 → 숫자 대조 → 판정 강등 → state/n-deep.json · dashboard/data/ndeep.js
//   node scripts/finish-n.js --task=<워크플로 taskId>      워크플로 출력 파일(tasks/<id>.output)의 result 를 읽는다
//   node scripts/finish-n.js --in=<결과 JSON 파일>
//   --push  커밋·push 까지 (start breakout 안에서는 build-chief-report 가 같이 올리므로 붙이지 않는다)
//   --no-linkcheck  링크 생존 확인 생략

const fs = require('fs');
const os = require('os');
const path = require('path');
const { paths, loadEnv, say, readJson, writeJson, writeWindowData } = require('./lib/util');
const { verifyPayload } = require('./lib/verify-claims');
const { N_V, guardN } = require('./lib/n-deep');

// 워크플로 결과는 세션의 tasks/<id>.output 에 있다. 세션 폴더 이름은 실행마다 바뀌므로 찾아서 쓴다(손으로 다시 적지 않는다).
function taskOutput(id) {
  const root = `/private/tmp/claude-${os.userInfo().uid}`;
  const hits = [];
  for (const proj of fs.existsSync(root) ? fs.readdirSync(root) : []) {
    const pd = path.join(root, proj);
    if (!fs.statSync(pd).isDirectory()) continue;
    for (const s of fs.readdirSync(pd)) { const f = path.join(pd, s, 'tasks', `${id}.output`); if (fs.existsSync(f)) hits.push(f); }
  }
  if (!hits.length) throw new Error(`워크플로 출력 파일 없음: ${id}`);
  hits.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  return JSON.parse(fs.readFileSync(hits[0], 'utf8')).result;
}

function corpusText(dir) {
  if (!fs.existsSync(dir)) return '';
  return fs.readdirSync(dir).filter((f) => /\.(txt|json)$/.test(f)).map((f) => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
}

async function main() {
  loadEnv();
  const argv = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')));
  const res = argv.task ? taskOutput(argv.task) : argv.in ? readJson(argv.in, null) : null;
  if (!res) throw new Error('결과가 없다 — --task=<id> 또는 --in=<file>');
  const nargs = readJson(path.join(paths.llmInDir, '_nargs.json'), { items: [] });
  const meta = new Map((nargs.items || []).map((x) => [x.ticker, x]));
  const date = res.date && res.date !== 'today' ? res.date : nargs.date;

  const { payload, report } = await verifyPayload({ items: res.items || [] }, { runDate: date, check: !('no-linkcheck' in argv) });
  const st = readJson(paths.nDeep, { v: N_V, items: {} });
  let cut = 0, done = 0;
  for (const it of payload.items || []) {
    const dir = path.join(paths.llmInDir, '_n', it.ticker);
    cut += guardN(it, corpusText(dir), { onCut: (c) => say('SYSTEM', `  ✂ N ${it.ticker} ${String(c.sentence).slice(0, 60)} (없음: ${c.missing.join(', ')})`) });
    const input = readJson(path.join(dir, 'input.json'), {});
    const m = meta.get(it.ticker) || {};
    st.items[it.ticker] = { ...it, status: 'done', v: N_V, researchedOn: date, asOf: m.asOf || null, why: m.why || null,
      docs: input.docs || [], code33: input.code33 || null, quarters: input.quarters || [], consensus: input.consensus || null };
    done++;
  }
  for (const t of res.failed || []) {
    const e = st.items[t];
    if (e && e.status === 'done') e.failedOn = date;   // 지난 분석은 두고 실패만 표시한다
    else st.items[t] = { ticker: t, status: 'failed', v: N_V, researchedOn: date, note: 'N 심층 실패 (에이전트 오류) — 다음 실행에서 다시 시도합니다' };
  }
  st.v = N_V; st.updated = date;
  writeJson(paths.nDeep, st);
  writeWindowData(path.join(paths.dashboardData, 'ndeep.js'), 'NDEEP_DATA', { generated: date, v: N_V, items: st.items });
  const vc = {};
  for (const x of Object.values(st.items)) if (x.status === 'done') vc[x.nVerdict] = (vc[x.nVerdict] || 0) + 1;
  say('N', `N 심층 병합 ${done}종목 · 실패 ${(res.failed || []).length} · 숫자 대조 삭제 ${cut} · 출처 URL ${report.checked} (생존 ${report.ok} · 미검증 ${report.unverified} · 죽음 ${report.dead} · 근거 없음으로 강등 ${report.stripped})`);
  say('N', `  누적 판정: ${Object.entries(vc).map(([k, v]) => `${k} ${v}`).join(' · ')} (전체 ${Object.keys(st.items).length}종목)`);
  if ('push' in argv) {
    const r = require('./update-github').commitAndPush(date, `N 심층 ${done}종목`);
    say('SYSTEM', r.ok ? `GitHub: ${r.pushed ? 'push 완료' : '커밋만'}` : `GitHub 실패: ${r.error}`);
  }
}

if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
module.exports = { main, taskOutput };
