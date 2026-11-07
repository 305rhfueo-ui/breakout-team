'use strict';
// 13팀 라온 — 체크리스트 부합 종목 (2026-11-07 사용자: "시장 조건 QQQ 10 > 20 이 안 맞더라도 나머지를 충족하는 게 있으면
//   심층분석 글까지 포함해서 쿨라매기 관점에서 어떤 것들이 어떻게 부합하는지 티스토리에 올리고 텔레그램으로 알려줘")
//   node scripts/checklist-watch.js                 정기(아침 morning.sh, 스캔 뒤) — 오늘 돌파 종목 중 시장 칸 빼고 전부 ✅ → 지우 심층분석 → 글 → 티스토리 → 텔레그램
//   node scripts/checklist-watch.js --list          오늘 돌파 종목 체크리스트만 찍는다 (분석·발행·알림 없음)
//   node scripts/checklist-watch.js --ticker=X --dry   오늘 심층분석이 이미 있는 X 로 글만 만들어 CACHE_DIR/blog/ 에 저장
//
// 체크리스트 = 블로그 21번 글(lib/user-checklist, 코드 판정). 오늘 받은 봉 캐시(아침 스캔이 받은 종목)만 본다 — 야후에 새로 묻지 않는다.
// 2026-11-07 넉 달(RS 스냅샷 83일) 되짚기: 돌파 684건 중 전부 충족 0건 · 하나만 빠짐 6건 — 자주 울리지 않는 게 정상이다.
// 판단 보조. 시장 🔴 이면 체크리스트 1번이 ❌ 이고 지우 판정도 '조건부'로 내려간다 — 글도 그렇게 쓴다.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { paths, loadEnv, readJson, writeJson, ensureDir, say, today } = require('./lib/util');
const { barDateET } = require('./lib/bars');
const { gradeSetup } = require('./lib/setup-grade');
const { loadRules } = require('./lib/rules');
const { qullamaggieRegime } = require('./lib/regime');
const { loadSnapshot } = require('./lib/history-series');
const UC = require('./lib/user-checklist');
const TS = require('./lib/tistory');
const { dirOf, tagOf } = require('./prepare-ondemand');

const MAX_MISS = 0;          // 시장 칸 말고 ✅ 가 아닌 줄을 몇 개까지 봐줄지 — 사용자 요청은 0 ("나머지를 충족하면")
const DAILY_CAP = 3;         // 하루 심층분석 상한 (하나에 오퍼스 12~15분)
const HITS_FILE = path.join(paths.cacheDir, 'checklist-hits.json');
const OUT_DIR = path.join(paths.cacheDir, 'blog');
const REPO = path.join(__dirname, '..');

function screen(day = today()) {
  const dir = path.join(paths.barsCache, day);
  if (!fs.existsSync(dir)) return { ok: false, error: `오늘 봉 캐시 없음 (${dir}) — 아침 스캔 전` };
  const qqq = (readJson(path.join(dir, 'QQQ_2y_1d.json'), null) || {}).bars;
  if (!qqq || qqq.length < 60) return { ok: false, error: 'QQQ 봉 없음' };
  const session = barDateET(qqq[qqq.length - 1].t);
  const regime = qullamaggieRegime(qqq);
  const snapDate = fs.readdirSync(paths.snapshotCache).map((x) => (x.match(/^result_(\d{4}-\d\d-\d\d)\.json$/) || [])[1]).filter(Boolean).sort().pop();
  const ranks = UC.rsRanks(snapDate ? loadSnapshot(snapDate) : null);
  const rules = loadRules(), out = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('_2y_1d.json'))) {
    const T = f.replace('_2y_1d.json', '').replace(/-/g, '.');
    if (T === 'QQQ') continue;
    const bars = (readJson(path.join(dir, f), null) || {}).bars;
    if (!bars || bars.length < 160 || barDateET(bars[bars.length - 1].t) !== session) continue;
    let s; try { s = gradeSetup(bars, { rules, regime: 'green' }); } catch (e) { continue; }
    if (!s.ok || s.state !== 'post' || s.breakDate !== session) continue;          // 오늘(직전 세션) 돌파한 종목만 — 다음 날 진입판
    const ev = UC.evaluate({ bars, setup: s, ranks: ranks.get(T) || null, regime });
    const miss = ev.rows.filter((r) => r.no !== '1' && r.status !== 'info' && r.status !== 'ok');
    out.push({ ticker: T, miss: miss.map((r) => r.no), rows: ev.rows, num: ev.num, grade: s.grade });
  }
  out.sort((a, b) => a.miss.length - b.miss.length || (b.num.breakVol || 0) - (a.num.breakVol || 0));
  return { ok: true, session, regime: { verdict: regime.verdict, ko: regime.ko }, snapDate, items: out };
}

const TASK = (x) => `너는 블로그 주인의 "매수 전 점검" 글을 대신 쓴다. 종목: ${x.ticker}${x.name ? ` (${x.name})` : ''}. ${x.num.breakDate} 피벗 ${x.num.pivot} 을 거래량 ${x.num.breakVol}배로 돌파했고,
블로그 주인의 매수 전 체크리스트(21번 글)에서 시장 칸(1번)을 뺀 나머지가 facts.checklist 처럼 나왔다.
목표: 쿨라매기 관점에서 어떤 조건이 어떻게 부합하는지, 심층분석(facts.deep — 회사·N·뉴스·재무·리스크)과 함께 정리한다. 지난 매매 복기(22번 글)의 교훈과도 대조한다.
시장 칸이 ❌(🔴)이면 반드시 "체크리스트상 지금은 매수 금지 — 시장 🟢 복귀하면 재검토"라고 분명히 쓴다. 지우 판정(facts.deep.verdict)은 그대로 옮긴다.
구성:
- 첫 줄들: 어떤 종목이 언제 돌파했고 체크리스트 몇 개가 맞았는지 요지
- "## 1. 시장상황" — facts.market
- "## 2. 체크리스트 대조" — 그림 {{IMG1}}. facts.checklist 줄마다 ✅/❌/🟡 와 숫자 그대로
- "## 3. 실적·N" — facts.estimates·facts.deep.nVerdict·nNarrative. 서프라이즈·EPS 추정치 7일 전/30일 전 변화·N 을 체크리스트 5번처럼 ✅/❌/확인 못 함으로
- "## 4. 회사·뉴스·재무" — facts.deep 서술을 짧은 줄로. 그림 {{IMG2}}
- "## 5. 리스크 · 틀렸다고 볼 조건" — facts.deep.risks·invalidation
- "## 6. 산다면 숫자" — 다음 날 시가 상한 facts.num.cap (= 피벗 × (1+ADR%)), 손절 = 매수가 × (1 − ADR ${x.num.adr}%) 스톱 주문, 10일선 이탈 매도. 시장 🔴면 "그래도 지금은 안 산다"
- "## 7. 정리" — 지우 판정과 한 줄 결론, 다시 볼 조건
제목: "(BO, 단기용) ${x.ticker} 매수 전 점검 — 한 줄 요지" (요지에 "시장 빼고 체크리스트 통과" 같은 사실을 담는다)`;

async function writeAndPublish(x, { dry = false, day = today() } = {}) {
  const dir = dirOf(day), tag = tagOf(x.ticker);
  const input = readJson(path.join(dir, `${tag}.json`), null), rec = readJson(path.join(dir, `${tag}-final.json`), null);
  if (!input || !rec) return { ok: false, error: '심층분석 결과 없음' };
  const d = rec.deep || {};
  const facts = {
    ticker: x.ticker, name: input.name, sector: input.sector, industry: input.industry, session: input.session,
    market: input.market, checklist: x.rows.map(({ no, item, icon, detail }) => ({ no, item, 판정: icon, detail })), num: x.num, grade: x.grade,
    estimates: input.estimates ? { periods: input.estimates.periods, changes: input.estimates.changes, surprises: input.estimates.surprises, beats: input.estimates.beats, nextEarnings: input.estimates.nextEarnings, asOf: input.estimates.fetchedAt } : null,
    deep: { verdict: rec.verdict, verdictLine: rec.verdictLine, basis: rec.basis, conditions: rec.conditions, invalidation: rec.invalidation, dataLimits: rec.dataLimits, verdictAdjusted: rec.verdictAdjusted,
      company: d.company, lead: d.lead, newsNarrative: d.newsNarrative, financialsNarrative: d.financialsNarrative, estimatesNarrative: d.estimatesNarrative,
      nVerdict: d.nVerdict, nNarrative: d.nNarrative, risks: (d.risks || []).map((r) => r.statement || r).slice(0, 5), earningsRisk: d.earningsRisk },
    industryRank: input.industryRank, teamView: input.teamView,
  };
  const images = [input.chart && input.chart.png3m, input.chart && input.chart.png6m].filter((f) => f && fs.existsSync(f));
  const refs = [];
  for (const no of [21, 22, 10]) { try { refs.push(await TS.readPost(no)); } catch (e) { /* 없음 */ } await new Promise((r) => setTimeout(r, 1500)); }
  const W = require('./lib/blog-writer').writePost({ task: TASK({ ...x, name: input.name }), facts, refs, images: ['3개월 일봉 (주황 점선 = 피벗)', '6개월 일봉 (20·50·150일선)'].slice(0, images.length) });
  if (!W.ok) return W;
  const out = path.join(OUT_DIR, `${day}-${x.ticker}-check`); ensureDir(out);
  fs.writeFileSync(path.join(out, 'post.txt'), [W.title, ...W.lines].join('\n'), 'utf8');
  writeJson(path.join(out, 'facts.json'), facts);
  say('T13', `${x.ticker} 점검 글: ${W.title} · ${W.lines.length}줄 · 숫자 대조 삭제 ${W.cut.length} → ${out}`);
  if (dry) return { ok: true, dry: true, dir: out, title: W.title };
  const pub = TS.publish({ title: W.title, lines: W.lines, images, category: TS.CATEGORY.analysis });
  if (!pub.ok) return { ok: false, error: `티스토리 발행 실패: ${pub.error}`, dir: out, rec };
  const post = await TS.findPublished(W.title);
  return { ok: true, title: W.title, url: post ? post.url : TS.BLOG, telegram: W.telegram, rec };
}

function message(x, sc, r) {
  const mk = { green: '🟢', yellow: '🟡', red: '🔴' }[sc.regime.verdict] || '⚪';
  const ok = x.rows.filter((q) => q.no !== '1' && q.status === 'ok').length, all = x.rows.filter((q) => q.no !== '1' && q.status !== 'info').length;
  return [`🔎 13팀 라온 — 체크리스트 부합 종목: ${x.ticker}${r.rec && r.rec.nameKo ? ` (${r.rec.nameKo})` : ''}`,
    `${x.num.breakDate} 피벗 ${x.num.pivot} 돌파 · 거래량 ${x.num.breakVol}배 · 시장 칸 빼고 ${ok}/${all} ✅`,
    `시장: ${mk} ${sc.regime.ko}${sc.regime.verdict === 'red' ? ' → 체크리스트 1번 ❌ (지금은 매수 금지 구간)' : ''}`,
    r.rec ? `지우 판정: ${r.rec.verdict} — ${String(r.rec.verdictLine || '').slice(0, 200)}` : '',
    `다음 날 시가 상한 ${x.num.cap} (피벗 + 1 ADR ${x.num.adr}%) · 손절 = 매수가 −${x.num.adr}%`,
    r.ok ? `${r.telegram}\n티스토리에 올렸습니다: ${r.url}` : `⚠️ 티스토리 글은 올리지 못했습니다 — ${String(r.error).slice(0, 200)}`,
    '판단 보조입니다. 최종 결정은 사장님께 있습니다.'].filter(Boolean).join('\n');
}

async function main() {
  loadEnv();
  const a = process.argv.slice(2), only = (a.find((x) => x.startsWith('--ticker=')) || '').slice(9).toUpperCase(), dry = a.includes('--dry');
  const sc = screen();
  if (!sc.ok) { say('WARN', `13팀: ${sc.error}`); return; }
  say('T13', `${sc.session} 돌파 ${sc.items.length}종목 · 시장 ${sc.regime.verdict} · RS 스냅샷 ${sc.snapDate}`);
  for (const x of sc.items.slice(0, 15)) say('T13', `  ${x.ticker} 빠진 칸 ${x.miss.length ? x.miss.join(',') : '없음'} · 거래량 ${x.num.breakVol}배`);
  if (a.includes('--list')) return;
  if (only) {
    const x = sc.items.find((i) => i.ticker === only);
    if (!x) { say('WARN', `${only}: 오늘 돌파 종목이 아니다`); return; }
    const r = await writeAndPublish(x, { dry });
    say('T13', JSON.stringify({ ok: r.ok, dir: r.dir, title: r.title, url: r.url, error: r.error }));
    return;
  }
  const hits = readJson(HITS_FILE, { v: 1, hits: {} });
  const todo = sc.items.filter((x) => x.miss.length <= MAX_MISS && !hits.hits[`${x.ticker}|${x.num.breakDate}`]).slice(0, DAILY_CAP);
  const scan = { session: sc.session, regime: sc.regime, snapDate: sc.snapDate, breakouts: sc.items.length,
    near: sc.items.filter((x) => x.miss.length <= 2).slice(0, 8).map((x) => ({ ticker: x.ticker, miss: x.miss, breakVol: x.num.breakVol })) };
  const posts = [], save = () => TS.board((d) => { d.t13.lastScan = scan; d.t13.posts.unshift(...posts); }, { msg: `blog: 13팀 ${sc.session} 돌파 ${sc.items.length}종목 · 부합 ${posts.length}` });
  if (!todo.length) { say('T13', '체크리스트 부합 종목 없음'); save(); return; }
  const { notify } = require('./lib/notify');
  for (const x of todo) {
    say('T13', `${x.ticker} 부합 — 지우 심층분석 시작`);
    let r;
    try {
      execFileSync('bash', [path.join(REPO, 'deploy/macmini/run-ondemand.sh'), x.ticker], { cwd: REPO, env: { ...process.env, ONDEMAND_QUIET: '1' }, stdio: 'inherit', timeout: 30 * 60 * 1000 });
      r = await writeAndPublish(x);
    } catch (e) { r = { ok: false, error: `심층분석 실패 (${String(e.message).split('\n')[0].slice(0, 120)})` }; }
    hits.hits[`${x.ticker}|${x.num.breakDate}`] = { at: new Date().toISOString(), url: r.url || null, error: r.ok ? null : r.error };
    writeJson(HITS_FILE, hits);
    posts.push({ ticker: x.ticker, breakDate: x.num.breakDate, verdict: r.rec ? r.rec.verdict : null, title: r.title || null, url: r.url || null, error: r.ok ? null : String(r.error).slice(0, 150), at: today() });
    await notify(message(x, sc, r));
  }
  save();
}

if (require.main === module) main().catch((e) => { say('ERROR', e.stack || e.message); process.exit(1); });
module.exports = { screen, writeAndPublish };
