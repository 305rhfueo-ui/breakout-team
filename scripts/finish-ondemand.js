'use strict';
// 7팀(지우) — 한 종목 분석 결과를 검증해 대시보드에 싣고 텔레그램으로 답한다 (2026-10-13).
//   node scripts/finish-ondemand.js SNOW [--date=YYYY-MM-DD] [--no-git] [--no-send] [--no-linkcheck]
// 입력: state/ondemand/<date>/<T>.json (재료) · <T>-out.json (team6-deepdive.js mode:'verdict' 결과)
// 하는 일: ① 출처 URL 실접속·인용문·숫자 대조(verify-claims) ② 서술문 숫자 대조(deep-guard)
//          ③ **결론 안전장치** — 막는 조건(gates)에 걸리면 '매수 적정'을 '조건부'로 내리고, 근거(basis)가 가리키는 체크표·주장이 실제와 안 맞으면 지운다
//          ④ dashboard/data/ondemand.js · ohlc/<T>.js 저장 → 자기 파일만 커밋·push ⑤ 텔레그램 답장(요약 2~3개 + 차트 1장)
// ⚠️ 금액·수량·비중은 어디에도 쓰지 않는다(공개 저장소). 결론은 AI 판정이며 투자 판단 보조다.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { paths, loadEnv, readJson, writeWindowData, say, today, round } = require('./lib/util');
const { verifyPayload } = require('./lib/verify-claims');
const { guardDeepItem, nClaims } = require('./lib/deep-guard');
const { dirOf, tagOf } = require('./prepare-ondemand');
const { fetchBarsCached, barDateET } = require('./lib/bars');

const MAX_ITEMS = 30;
const SITE = 'https://305rhfueo-ui.github.io/breakout-team/';
const ICON = { '매수 적정': '🟢', '조건부': '🟡', '아니다': '🔴', '판정 불가': '⚪' };
const sourced = (c) => c && c.evidence_level === 'sourced' && (c.sources || []).length > 0;

function allClaims(it) {
  const f = it.financials || {};
  return [...(it.recentNews || []), ...(it.risks || []), ...(f.revenueTrend || []), ...(f.profitTrend || []), ...(f.guidance || []),
    ...(((f.estimateRevisions || {}).claims) || []), ...nClaims(it)];
}

// 결론 안전장치 — AI 판정을 코드가 다시 본다. it 을 고쳐 돌려준다.
function enforceVerdict(it, input) {
  const notes = [];
  const gates = (input && input.gates) || { blocked: false, reasons: [] };
  const checks = (input && input.checks) || { qm: [], canslim: [] };
  // ① 근거가 가리키는 것이 실제로 있는가
  const ids = new Set(allClaims(it).filter(sourced).map((c) => c.id));
  const statusOf = (ref) => {
    const m = String(ref || '').match(/^(차트|CANSLIM)\s*[:：]\s*(.+)$/i);
    if (!m) return ids.has(String(ref || '').trim()) ? 'claim' : null;
    if (m[1] === '차트') { const r = checks.qm.find((x) => x.item === m[2].trim()); return r ? r.status : null; }
    const L = m[2].trim()[0].toUpperCase();
    if (L === 'N') return it.nVerdict === '충족' || it.nVerdict === '부분 충족' ? '충족' : it.nVerdict === '미충족' ? '미충족' : '확인 불가';   // N 은 코드가 판정하지 않는다 — 검증을 거친 N 심층 결과를 쓴다
    const r = checks.canslim.find((x) => x.item[0] === L); return r ? r.status : null;
  };
  const before = (it.basis || []).length;
  it.basis = (it.basis || []).filter((b) => {
    const st = statusOf(b.checkRef);
    if (st == null) return false;                                   // 가리키는 근거가 없거나 검증에서 지워졌다
    if (st === 'claim') return true;
    if (b.side === 'for' && st !== '충족') return false;           // 코드 체크표가 충족이 아닌데 유리한 근거로 썼다
    if (b.side === 'against' && st === '충족') return false;
    return true;
  });
  if (it.basis.length < before) notes.push(`근거 ${before - it.basis.length}개 삭제 — 가리키는 체크표·출처와 맞지 않음`);
  // ② 막는 조건에 걸리면 '매수 적정' 불가
  if (it.verdict === '매수 적정' && gates.blocked) {
    it.verdictOriginal = it.verdict; it.verdict = '조건부';
    notes.push(`'매수 적정' → '조건부' — ${gates.reasons.map((g) => g.ko).join(' · ')}`);
    it.conditions = [...(it.conditions || []), ...gates.reasons.map((g) => `해소돼야 할 조건: ${g.ko}`)];
  }
  // ③ 유리한 근거가 하나도 안 남았는데 '매수 적정'이면 판정할 수 없다. 근거가 0개면 어떤 판정도 못 한다.
  const pro = it.basis.filter((b) => b.side === 'for').length;
  if (!it.basis.length) { it.verdictOriginal = it.verdictOriginal || it.verdict; it.verdict = '판정 불가'; notes.push('검증을 통과한 근거가 없어 판정하지 않는다'); }
  else if (it.verdict === '매수 적정' && !pro) { it.verdictOriginal = it.verdict; it.verdict = '조건부'; notes.push("'매수 적정' → '조건부' — 검증을 통과한 유리한 근거가 없음"); }
  if (notes.length) it.verdictAdjusted = notes;
  it.gates = gates;
  return it;
}

function loadOndemand() {
  try {
    const src = fs.readFileSync(path.join(paths.dashboardData, 'ondemand.js'), 'utf8');
    const m = src.match(/window\.ONDEMAND_DATA\s*=\s*([\s\S]*);\s*$/);
    return m ? JSON.parse(m[1]) : { items: [] };
  } catch (e) { return { items: [] }; }
}

// 텔레그램 답장 — 4000자 제한이라 나눠 보낸다. 금액·수량 없음.
// 텔레그램 "살까?" (2026-10-26) — 같은 분석을 실장 종합 형식으로. 판정 말만 바꾸고(매수 적정→지금 사도 됨) 판정 자체·안전장치는 그대로다.
const BUY_KO = { '매수 적정': '🟢 지금 사도 됨', '조건부': '🟡 조건이 맞으면', '아니다': '🔴 지금은 아님', '판정 불가': '⚪ 판단 못 함' };
function teamLines(rec, cut) {
  const v = rec.teamView || {}, L = [];
  const mk = rec.market && rec.market.verdict;
  L.push(`· 시장(한별): ${{ green: '🟢 초록불', yellow: '🟡 노란불', red: '🔴 빨간불' }[mk] || '확인 불가'}${rec.market && rec.market.finraKo ? ` · ${cut(rec.market.finraKo, 60)}` : ''}`);
  const s = v.seojun;
  L.push(s ? `· 서준: ${s.grade}등급 · ${s.state === 'post' ? '이미 피벗 돌파(추격 구간)' : s.watch ? '오늘 밤 관심' : `막힘 — ${s.blocked || '사유 없음'}`}` : '· 서준: 후보 아님(피벗 근처 셋업 없음)');
  L.push(v.doyun ? `· 도윤: ${v.doyun.lists.length ? v.doyun.lists.join('·') : '선정 종목'}${v.doyun.lead ? ` — ${cut(v.doyun.lead, 120)}` : ''}` : '· 도윤: 목록에 없음');
  L.push(v.jaemin ? `· 재민: ${v.jaemin.category}${v.jaemin.why ? ` — ${cut(v.jaemin.why, 120)}` : ''}` : '· 재민: 거래량 급증 종목 아님');
  const r = rec.industryRank;
  L.push(r ? `· 하린: 업종 순위 ${r.frank}위${r.headline ? ` — ${cut(r.headline, 100)}` : ''}` : '· 하린: 업종이 상위 10위 밖');
  L.push(v.holding ? `· 보유: 이미 보유 중(${v.holding.side === 'short' ? '공매도' : '매수'}) — 추가 매수 기준으로 판단` : '· 보유: 없음');
  return L;
}
function messages(rec, { ask = null } = {}) {
  const d = rec.deep, cnt = (arr, s) => (arr || []).filter((x) => x.status === s).length;
  const cut = (s, nn) => { const t = String(s || '').trim(); return t.length > nn ? t.slice(0, nn - 1) + '…' : t; };
  const buy = ask === 'buy';
  const m1 = buy ? [`🧑‍💼 실장 — ${rec.ticker}${rec.nameKo ? ` (${rec.nameKo})` : ''} 살까?`, `결론: ${BUY_KO[rec.verdict] || rec.verdict}`, cut(rec.verdictLine, 300), '']
    : [`${ICON[rec.verdict] || '⚪'} ${rec.ticker}${rec.nameKo ? ` (${rec.nameKo})` : ''} — ${rec.verdict}`, cut(rec.verdictLine, 300), ''];
  for (const b of rec.basis || []) m1.push(`${b.side === 'for' ? '＋' : '－'} ${cut(b.point, 220)}`);
  if ((rec.conditions || []).length) { m1.push('', '확인되면 바뀌는 조건'); for (const c of rec.conditions) m1.push(`· ${cut(c, 200)}`); }
  if (rec.invalidation) m1.push('', `틀렸다고 볼 조건: ${cut(rec.invalidation, 260)}`);
  for (const a of rec.verdictAdjusted || []) m1.push(`⚠️ 코드 조정: ${cut(a, 260)}`);
  if (buy) m1.push('', '[팀 의견]', ...teamLines(rec, cut));
  m1.push('', `체크표(코드 계산) 쿨라매기 충족 ${cnt(rec.checks.qm, '충족')}/11 · CAN SLIM 충족 ${cnt(rec.checks.canslim, '충족')}/7 · N ${d.nVerdict || '—'}`,
    `기준 봉 ${rec.session} · 시장 판정 ${(rec.gates.asOf && rec.gates.asOf.market) || '?'} 기준${rec.setup && rec.setup.pivot ? ` · 넘으면 사는 선 ${rec.setup.pivot} · 예비 손절 ${rec.setup.stop ?? '—'}` : ''}`);
  const m2 = [`🔎 ${rec.ticker} 근거 요약`];
  if (d.company) m2.push(cut(d.company, 400));
  if (d.nNarrative) m2.push('', `[N 새로운 성장 동력 — ${d.nVerdict || ''}]`, cut(d.nNarrative, 700));
  if (d.newsNarrative) m2.push('', '[최근 뉴스]', cut(d.newsNarrative, 600));
  if (d.financialsNarrative) m2.push('', '[재무]', cut(d.financialsNarrative, 600));
  const rk = (d.risks || []).filter(sourced).slice(0, 3);
  if (rk.length) { m2.push('', '[리스크]'); for (const r of rk) m2.push(`· ${cut(r.statement, 200)}`); }
  const removed = (d.factcheck && d.factcheck.removed || []).length;
  m2.push('', `전체 분석·출처: ${SITE}#tk=${encodeURIComponent(rec.ticker)}`,
    `검증: 출처 ${rec.verified ? rec.verified.checked : '?'}개 확인${removed ? ` · 팩트체크에서 ${removed}건 제거` : ''}${rec.numberCut ? ` · 숫자 대조로 ${rec.numberCut}문장 삭제` : ''}${rec.dataLimits ? ` · 자료 한계: ${cut(rec.dataLimits, 200)}` : ''}`,
    buy ? '실장 종합은 판단 보조입니다. 최종 결정과 책임은 사장님께 있습니다.' : 'AI 판정 — 투자 판단 보조입니다. 최종 판단과 책임은 본인에게 있습니다.');
  return [m1.join('\n').slice(0, 3900), m2.join('\n').slice(0, 3900)];
}

function gitPublish(files, msg) {
  const git = (a) => execFileSync('git', a, { cwd: paths.root, stdio: ['ignore', 'pipe', 'pipe'] }).toString();
  const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  for (let i = 0; i < 4; i++) {
    try {
      git(['add', '--', ...files]);
      if (!git(['diff', '--staged', '--name-only', '--', ...files]).trim()) return { ok: true, pushed: false };
      git(['-c', 'core.safecrlf=false', 'commit', '-q', '-m', msg, '--', ...files]);   // 자기 파일만 — 밤 루프·아침 실행이 쓰던 파일은 건드리지 않는다
      break;
    } catch (e) {
      const m = String(e.stderr || e.message);
      if (i < 3 && /index\.lock|another git process/i.test(m)) { sleep(5000); continue; }   // 다른 작업이 커밋 중 — 잠깐 기다린다
      return { ok: false, error: m.split('\n')[0] };
    }
  }
  for (let i = 0; i < 3; i++) {
    try { git(['push', '-q', 'origin', 'HEAD']); return { ok: true, pushed: true }; }
    catch (e) {
      try { git(['pull', '--rebase', '--autostash', '-q', 'origin', git(['rev-parse', '--abbrev-ref', 'HEAD']).trim()]); }
      catch (e2) { try { git(['rebase', '--abort']); } catch (_) { /* 진행 중인 rebase 없음 */ } sleep(8000); }
    }
  }
  return { ok: false, error: 'push 실패 — 로컬 커밋만 됨 (다음 자동 실행이 올린다)' };
}

async function finish(tickerIn, { date = today(), git = true, send = true, linkcheck = true } = {}) {
  const tag = tagOf(String(tickerIn).toUpperCase()), dir = dirOf(date);
  const input = readJson(path.join(dir, `${tag}.json`), null);
  const out = readJson(path.join(dir, `${tag}-out.json`), null);
  if (!input) return { ok: false, error: '재료 파일 없음 — prepare-ondemand 를 먼저' };
  const raw = out && (out.items || (out.result && out.result.items) || [])[0];
  if (!raw) return { ok: false, error: '분석 결과 없음 (에이전트 실패)' };
  const T = input.ticker;
  raw.ticker = T;

  const { payload, report } = await verifyPayload({ it: raw }, { runDate: date, check: linkcheck });
  const it = payload.it;
  let numberCut = report.numberCut || 0;
  numberCut += guardDeepItem(it, input, { onCut: (c) => say('SYSTEM', `  ✂ ${T} ${c.sentence.slice(0, 60)} (없음: ${c.missing.join(', ')})`) });
  enforceVerdict(it, input);
  say('T6', `온디맨드 ${T}: ${it.verdict}${it.verdictOriginal ? ` (AI 원래 판정 ${it.verdictOriginal})` : ''} · 근거 ${it.basis.length} · URL ${report.checked}개(죽음 ${report.dead}) · 숫자 대조 삭제 ${numberCut}`);
  for (const a of it.verdictAdjusted || []) say('WARN', `  결론 조정: ${a}`);

  const { verdict, verdictLine, basis, conditions, invalidation, dataLimits, verdictAdjusted, verdictOriginal, gates, ...deepRest } = it;
  const rec = {
    ticker: T, nameKo: input.name || null, sector: input.sector, industry: input.industry, industryRank: input.industryRank || null,
    requestedOn: date, session: input.session, at: new Date().toISOString(),
    verdict, verdictLine, basis, conditions: conditions || [], invalidation: invalidation || '', dataLimits: dataLimits || '',
    verdictAdjusted: verdictAdjusted || null, verdictOriginal: verdictOriginal || null, gates,
    setup: input.plan, checks: input.checks, kis: input.kis || null, estimates: input.estimates || null, cnbc: (input.cnbc || []).slice(0, 6), detail: input.detail || null,
    rank: input.site ? input.site.rank : null, yahooNews: (input.yahooNews || []).slice(0, 6), teamView: input.teamView || null, market: input.market || null,
    verified: { checked: report.checked, ok: report.ok, unverified: report.unverified, dead: report.dead, stripped: report.stripped }, numberCut,
    deep: { status: 'done', ...deepRest, researchedOn: date, session: input.session, carried: false, source: 'ondemand' },
  };

  // 대시보드 — 최근 30건, 같은 종목은 새 결과로 교체
  const od = loadOndemand();
  od.items = [rec, ...(od.items || []).filter((x) => x.ticker !== T)].slice(0, MAX_ITEMS);
  od.updated = new Date().toISOString();
  const odFile = path.join(paths.dashboardData, 'ondemand.js');
  writeWindowData(odFile, 'ONDEMAND_DATA', od);
  // 팝업 캔들차트용 봉 (lists.writeOhlcFiles 는 다른 종목 파일을 지우므로 쓰지 않는다)
  const files = [odFile];
  try {
    const br = await fetchBarsCached(T, { range: '2y' });
    if (br.ok) {
      const safe = T.replace(/[^A-Za-z0-9.\-]/g, '_'), f = path.join(paths.dashboardData, 'ohlc', `${safe}.js`);
      const rowsOut = br.bars.slice(-126).map((k) => [barDateET(k.t), round(k.o, 2), round(k.h, 2), round(k.l, 2), round(k.c, 2), Math.round(k.v || 0)]);
      fs.mkdirSync(path.dirname(f), { recursive: true });
      fs.writeFileSync(f, `window.OHLC=window.OHLC||{};window.OHLC[${JSON.stringify(T)}]=${JSON.stringify(rowsOut)};\n`, 'utf8');
      files.push(f);
    }
  } catch (e) { /* 차트 없이도 결론은 나간다 */ }
  fs.writeFileSync(path.join(dir, `${tag}-final.json`), JSON.stringify(rec), 'utf8');

  let pub = { ok: true, pushed: false };
  if (git) { pub = gitPublish(files, `ondemand: ${date} ${T} — ${verdict}`); if (!pub.ok) say('WARN', `GitHub: ${pub.error}`); }
  const msgs = messages(rec, { ask: process.env.ONDEMAND_ASK || null });   // 'buy' = 텔레그램 "살까?" — 실장 종합 형식
  if (send) {
    const { notify, tgPhoto } = require('./lib/notify');
    for (const m of msgs) await notify(m);
    if (input.chart && input.chart.png3m && fs.existsSync(input.chart.png3m)) await tgPhoto(input.chart.png3m, `${T} 3개월 일봉 · 주황 점선 = 넘으면 사는 선 · 빨간 점선 = 예비 손절`);
    if (!pub.ok || !pub.pushed) await notify(`ℹ️ ${T}: 대시보드 반영이 늦을 수 있습니다 (${pub.error || '변경 없음'})`);
  }
  return { ok: true, ticker: T, verdict, messages: msgs, pushed: !!pub.pushed };
}

if (require.main === module) {
  loadEnv();
  const a = process.argv.slice(2), t = a.find((x) => !x.startsWith('--'));
  const date = (a.find((x) => x.startsWith('--date=')) || '').slice(7) || today();
  finish(t, { date, git: !a.includes('--no-git'), send: !a.includes('--no-send'), linkcheck: !a.includes('--no-linkcheck') })
    .then((r) => { if (a.includes('--print') && r.messages) console.log(r.messages.join('\n\n────────\n\n')); console.log(JSON.stringify({ ok: r.ok, ticker: r.ticker, verdict: r.verdict, error: r.error, pushed: r.pushed })); process.exit(r.ok ? 0 : 1); })
    .catch((e) => { console.log(JSON.stringify({ ok: false, error: e.message })); process.exit(1); });
}
module.exports = { finish, enforceVerdict, messages, teamLines, allClaims, loadOndemand, gitPublish };
