'use strict';
// N 심층분석(workflows/n-deep.js) 인자 준비 (2026-11-06 사용자: "N 만 따로 떼어 심층분석 — 중요하다")
//   node scripts/prepare-n-args.js            새 실적 공시가 나온 종목·신규 종목만, 하루 N_CAP(기본 8)개
//   N_ALL=1 node scripts/prepare-n-args.js    상한 없이 대상 전부 (처음 채우기·기준 변경 때)
//   node scripts/prepare-n-args.js --tickers=IDXX,TEAM
//
// 대상: 서준 관심 · 2팀 선정·목록 · 7팀 물어본 종목 — 팝업에 CAN SLIM 체크표가 나오는 종목.
// 다시 조사하는 때: 처음 · 기준 버전(N_V) 변경 · 지난번 실패 · 그 뒤 새 실적 8-K / 10-Q / 10-K 공시 (lib/n-deep.needN)
//
// 만드는 것 (state/llm-in/_n/{T}/ — .gitignore, SEC 원문이라 저장소에 올리지 않는다):
//   release-1.txt · release-2.txt   최근 실적 보도자료(8-K 첨부 99.x) — 제품별 매출·가이던스·CEO 발언
//   mdna.txt                        최신 10-Q·10-K 경영진 설명(MD&A) — 매출 증가의 원인을 회사가 직접 쓴 곳
//   input.json                      코드 33 · SEC 분기 수치 · 컨센서스 · 국내 리포트 요약·PDF · 기사 제목(단서)
//   state/llm-in/_nargs.json        워크플로 args

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, ensureDir, say, readJson } = require('./lib/util');
const sec = require('./data/sec-edgar');
const { slimDetail } = require('./lib/detail');
const { copyReportPdfs } = require('./data/kr-reports');
const { N_V, code33, needN } = require('./lib/n-deep');

const MAX_RELEASE = 60000, MAX_MDNA = 80000;   // 글자 — 보도자료 1건 1.8만~5.6만, MD&A 2.8만~6.7만(2026-11-06 실측 10종목)

function loadWindowData(file, varName) {
  const f = path.join(paths.dashboardData, file);
  if (!fs.existsSync(f)) return null;
  const m = fs.readFileSync(f, 'utf8').match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  return m ? JSON.parse(m[1]) : null;
}

// 공시 목록에서 "N 에 쓰는 공시"의 가장 늦은 날짜 — 실적 8-K · 10-Q · 10-K
function asOfOf(filings) {
  const d = (filings || []).filter((f) => (f.form === '8-K' && f.isEarnings) || f.form === '10-Q' || f.form === '10-K').map((f) => f.filingDate);
  return d.sort().pop() || null;
}

function universe() {
  const t6 = loadWindowData('team6.js', 'TEAM6_DATA') || {};
  const t2 = loadWindowData('team2.js', 'TEAM2_DATA') || {};
  const od = loadWindowData('ondemand.js', 'ONDEMAND_DATA') || {};
  const out = new Map();
  const add = (t, info) => { if (t && !out.has(t)) out.set(t, info); };
  for (const p of (t6.plans || []).filter((x) => x.watch)) add(p.ticker, { name: p.name, industry: p.industry, from: '서준 관심' });
  for (const p of [...(t2.picks || []), ...(t2.listPicks || [])]) add(p.ticker, { name: p.nameKo || p.nameEn, industry: p.industry, from: '도윤', p2: p });
  for (const x of od.items || []) add(x.ticker, { name: x.nameKo || x.nameEn || x.name, industry: x.industry, from: '7팀', p2: x });
  return { list: [...out.entries()].map(([ticker, v]) => ({ ticker, ...v })), date: t2.generated || t6.generated || null };
}

const header = (label, url, date) => `[${label}] ${date || ''} · 원문 ${url}\n\n`;

async function main() {
  loadEnv();
  const argv = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')));
  const { list, date } = universe();
  const only = argv.tickers ? new Set(argv.tickers.split(',').map((s) => s.trim().toUpperCase())) : null;
  const pool = only ? [...only].map((t) => list.find((x) => x.ticker === t) || { ticker: t, from: '지정' }) : list;
  const st = readJson(paths.nDeep, { v: N_V, items: {} });
  const ALL = process.env.N_ALL === '1' || !!only;
  const CAP = Number.isFinite(Number(process.env.N_CAP)) ? Number(process.env.N_CAP) : 8;
  const argsDir = path.join(paths.llmInDir, '_n');
  const argsFile = path.join(paths.llmInDir, '_nargs.json');
  const model = process.env.N_MODEL || 'opus';
  ensureDir(argsDir);

  // 다시 조사할 이유 — 공시 목록은 하루 캐시라 대상 전체를 훑어도 SEC 요청은 종목당 1번 이하다
  const want = [];
  for (const x of pool) {
    const f = await sec.getFilings(x.ticker, { forms: ['8-K', '10-Q', '10-K'], limit: 60 });
    const asOf = f.ok ? asOfOf(f.filings) : null;
    const why = only ? '지정' : needN(st.items[x.ticker], asOf);
    if (why) want.push({ ...x, asOf, why, secOk: f.ok });
  }
  const order = { 신규: 0, '기준 변경': 1, '지난 실패': 2, '새 공시': 3, 지정: 0 };
  want.sort((a, b) => order[a.why] - order[b.why]);
  const picked = ALL ? want : want.slice(0, CAP);
  if (want.length > picked.length) say('N', `N 심층 — 상한 ${CAP} 밖 ${want.length - picked.length}종목은 다음 실행으로 (${want.slice(picked.length).map((x) => x.ticker).join(', ')})`);

  for (const d of fs.readdirSync(argsDir)) fs.rmSync(path.join(argsDir, d), { recursive: true, force: true });   // 어제 종목이 남으면 안 된다
  const items = [];
  for (const x of picked) {
    const dir = path.join(argsDir, x.ticker);
    ensureDir(dir);
    const files = [];
    const docs = await sec.getNDocs(x.ticker);
    const used = [];
    if (docs.ok) {
      docs.releases.forEach((r, i) => {
        const text = r.exhibits.map((e) => header('실적 보도자료 8-K 첨부', e.url, r.filingDate) + e.text).join('\n\n').slice(0, MAX_RELEASE);
        if (!text) return;
        fs.writeFileSync(path.join(dir, `release-${i + 1}.txt`), text, 'utf8'); files.push(`release-${i + 1}.txt`);
        used.push(...r.exhibits.map((e) => ({ label: `실적 보도자료 (${r.filingDate})`, url: e.url, filingDate: r.filingDate })));
      });
      const m = docs.mdna;
      if (m && m.text) {
        fs.writeFileSync(path.join(dir, 'mdna.txt'), header(`${m.form} 경영진 설명(MD&A)`, m.url, m.filingDate) + m.text.slice(0, MAX_MDNA), 'utf8'); files.push('mdna.txt');
        used.push({ label: `${m.form} 경영진 설명 (${m.filingDate})`, url: m.url, filingDate: m.filingDate });
      }
    }
    const fin = await sec.getQuarterlyFinancials(x.ticker).catch(() => null);
    const quarters = fin && fin.ok ? fin.quarters : [];
    const detail = x.p2 && x.p2.detail ? slimDetail(x.p2.detail) : null;
    let reportPdfs = [];
    try { reportPdfs = await copyReportPdfs(detail && detail.krReports && detail.krReports.reports, dir, x.ticker); } catch (e) { reportPdfs = []; }
    const s = x.p2 || {};
    fs.writeFileSync(path.join(dir, 'input.json'), JSON.stringify({
      ticker: x.ticker, name: x.name || docs.companyName || null, industry: x.industry || null, date,
      code33: code33(quarters),
      quarters: quarters.map((q) => ({ periodEnd: q.periodEnd, revenue: q.revenue, netIncome: q.netIncome, yoy: q.yoy })),
      profitNote: '이익은 순이익 기준(EPS 아님 · 주식 수 변동 미반영). 원값 단위는 달러',
      consensus: { saleCy: s.saleCy ?? null, saleNy: s.saleNy ?? null, epsCy: s.epsCy ?? null, epsNy: s.epsNy ?? null },
      krReports: detail && detail.krReports ? detail.krReports.reports : [],
      reportPdfs,
      news: ((detail && detail.news && detail.news.items) || []).map((n) => ({ title: n.title, date: n.date, url: n.url, publisher: n.publisher })),
      cnbc: (s.cnbc || []).slice(0, 8).map((n) => ({ title: n.title, date: n.date, url: n.url })),
      docs: used,
      docsNote: docs.ok ? (files.length ? null : '공시 원문을 받았지만 본문이 비었다') : `SEC 공시 원문을 받지 못했다(${docs.error || '오류'}) — 회사 IR 원문을 웹에서 찾아라`,
    }, null, 1), 'utf8');
    items.push({ ticker: x.ticker, name: x.name || docs.companyName || null, industry: x.industry || null, why: x.why, asOf: docs.asOf || x.asOf, files, pdfs: reportPdfs.length });
    say('N', `  ${x.ticker} (${x.why}) — 원문 ${files.join('·') || '없음'}${reportPdfs.length ? ` · 리포트 PDF ${reportPdfs.length}` : ''}`);
  }
  fs.writeFileSync(argsFile, JSON.stringify({ date, model, argsDir, docsDir: path.join(__dirname, '..', 'docs'), cap: items.length, items }), 'utf8');
  say('N', `N 심층 대상 ${items.length}/${pool.length}종목 (모델 ${model}) → ${argsFile}`);
}

if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
module.exports = { main, asOfOf };
