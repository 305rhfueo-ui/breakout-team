'use strict';
// _args.json 을 워크플로에 인라인으로 넘길 수 있는 크기로 줄인다.
//   node scripts/slim-args.js [--t2=5] [--t4=5] [--t5=3] [--print=t2|t4|t5]
// 전체를 그대로 넘기면 args 가 너무 커진다 (2팀 detail 만 수백 KB).

const fs = require('fs');
const path = require('path');
const { paths, loadEnv } = require('./lib/util');

function arg(n, d) { const p = process.argv.find((s) => s.startsWith(`--${n}=`)); return p ? p.slice(n.length + 3) : d; }

loadEnv();
const a = JSON.parse(fs.readFileSync(path.join(paths.llmInDir, '_args.json'), 'utf8'));
const n2 = Number(arg('t2', 5)), n4 = Number(arg('t4', 5)), n5 = Number(arg('t5', 3));

const t2 = {
  date: a.date, cap: n2,
  clusters: (a.team2args.clusters || []).slice(0, 6),
  picks: a.team2args.picks.slice(0, n2).map((p) => ({
    ticker: p.ticker, sector: p.sector, industry: p.industry,
    rs: p.rs, adr: p.adr, high52: p.high52, div200: p.div200,
    ret1m: p.ret1m, ret3m: p.ret3m, ret6m: p.ret6m,
    detail: {
      nameKo: p.detail.nameKo, nameEn: p.detail.nameEn,
      financials: p.detail.financials ? {
        profitLabel: p.detail.financials.profitLabel,
        quarters: p.detail.financials.quarters.map((q) => ({ periodEnd: q.periodEnd, revenue: q.revenue, profit: q.profit, yoy: q.yoy })),
      } : null,
      news: p.detail.news ? { items: p.detail.news.items.filter((x) => x.direct).slice(0, 4) } : null,
      filings: (p.detail.filings || []).slice(0, 3),
      krReports: p.detail.krReports ? {
        total: p.detail.krReports.total,
        reports: p.detail.krReports.reports.slice(0, 3).map((r) => ({
          date: r.date, broker: r.broker, analyst: r.analyst, title: r.title,
          summary: String(r.summary || '').slice(0, 150), pdfUrl: r.pdfUrl,
        })),
      } : null,
    },
  })),
};

const t4 = { date: a.date, cap: n4, items: a.team4args.items.slice(0, n4) };
const t5 = { date: a.date, cap: n5, industries: a.team5args.industries.slice(0, n5) };

for (const [k, v] of [['t2', t2], ['t4', t4], ['t5', t5]]) {
  fs.writeFileSync(path.join(paths.llmInDir, `_${k}slim.json`), JSON.stringify(v), 'utf8');
}

const which = arg('print', null);
if (which) {
  process.stdout.write(JSON.stringify({ t2, t4, t5 }[which]));
} else {
  console.log(`team2 ${JSON.stringify(t2).length} bytes · ${t2.picks.length}종목: ${t2.picks.map((p) => p.ticker).join(', ')}`);
  console.log(`team4 ${JSON.stringify(t4).length} bytes · ${t4.items.length}종목: ${t4.items.map((i) => i.ticker).join(', ')}`);
  console.log(`team5 ${JSON.stringify(t5).length} bytes · ${t5.industries.length}업종: ${t5.industries.map((x) => x.industry).join(', ')}`);
}
