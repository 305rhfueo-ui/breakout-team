'use strict';
// 국내 증권사의 미국 주식 리포트 — 연합인포맥스 Global Market Monitor 공개 API.
// 무로그인·무안티봇헤더. Content-Type: application/json 하나면 동작한다.
//
// ⚠️ 이전 판단 정정: "국내 증권사의 미국 종목 리포트는 존재하지 않는다"는 틀렸다.
//    한경컨센서스·네이버·FnGuide 는 KRX 6자리 코드 기반이라 미국 티커가 없을 뿐,
//    연합인포맥스 피드에는 20개 증권사의 리포트가 PDF 까지 공개돼 있다.
//
// 한계 (리포트에 반드시 표기):
//  · 미래에셋·한국투자·삼성·NH 자사 리포트는 이 피드에 없다
//  · 목표주가·투자의견은 구조화 필드가 없다 (rptopninvest 는 관측상 전부 빈 문자열)
//    → 숫자가 필요하면 PDF 원문을 읽어야 한다
//  · 티커당 월 1.5~3건 수준 — "매일 새 리포트"를 기대하면 안 된다 (캐시 7일)

const { say, round } = require('../lib/util');
const cache = require('../lib/cache');

const HOST = 'https://globalmonitor.einfomax.co.kr';
const PDF_BASE = 'https://rreport.einfomax.co.kr/report';

async function postJson(url, body, { timeoutMs = 20000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false, status: res.status, data: null };
    return { ok: true, status: 200, data: await res.json() };
  } catch (e) {
    return { ok: false, status: 0, data: null, error: e.message };
  } finally { clearTimeout(timer); }
}

// ── 티커 → 인포맥스코드·국문명 ──
// 하드코딩 맵이 필요 없다. 런타임 조회 후 30일 캐시.
async function lookupTicker(ticker) {
  const t = String(ticker).trim().toUpperCase();
  return cache.through('krTickerMap', t, async () => {
    const r = await postJson(`${HOST}/facset/tickerlist_cached/USA`, { ticker: t, support_country: ['미국'] });
    if (!r.ok || !r.data) return { ok: false, ticker: t };
    const d = r.data;
    const src = d._source || (Array.isArray(d) ? null : d);
    if (!src || !src['인포맥스코드']) return { ok: false, ticker: t, found: false };
    return {
      ok: true, ticker: t,
      code: src['인포맥스코드'],        // "NAS:NVDA"
      nameKo: src['국문명'] || null,     // "엔비디아"
      nameEn: src['영문명'] || null,
      exchange: src['거래소명'] || null,
      industryKo: src['산업분류명dept2'] || null,
    };
  });
}

function ymd(d) { return d.toISOString().slice(0, 10); }

// ── 종목 리포트 목록 ──
// ⚠️ searchItem 은 'title' 만 동작한다. 'auth'(증권사별)는 빈 배열을 반환한다.
//    searchStr 은 "NAS:NVDA" 형태(거래소 프리픽스 포함)가 정확도가 높다 —
//    이 피드의 제목이 항상 "[엔비디아 (NAS:NVDA)] ..." 포맷이기 때문.
async function getReports(ticker, opts = {}) {
  const months = opts.months || 12;
  const t = String(ticker).trim().toUpperCase();
  const info = await lookupTicker(t);
  const searchStr = (info && info.ok && info.code) ? info.code : t;

  const end = opts.endDate ? new Date(opts.endDate) : new Date();
  const start = new Date(end.getTime() - months * 30.44 * 86400000);
  const ckey = `${searchStr}_${months}m_${ymd(end)}`;

  const data = await cache.through('krReportList', ckey, async () => {
    const r = await postJson(`${HOST}/bizrpt/reportlist`, {
      targetPeriodCheck: false,
      page: 1,
      sortType: 'latest',
      lscCd: 700,
      targetPeriodDate: null,
      sscCd: '524910,521090,523050,523070',
      authSscCd: 0,
      cmd: 'rl_011',
      startDate: ymd(start),
      endDate: ymd(end),
      searchItem: 'title',
      searchStr,
      authLscCd: 0,
      pagePerItem: opts.limit || 100,
    });
    return r.ok ? r.data : null;
  });

  if (!data) return { ok: false, ticker: t, info, reports: [], total: 0, error: '수신 실패' };

  const list = data.reportlist || data.list || [];
  const reports = list.map((x) => ({
    title: x.title || '',
    broker: x.auth || null,          // 증권사
    analyst: x.writer || null,       // 애널리스트 실명
    date: (x.writeDate || '').replace(/\//g, '-'),
    summary: (x.summary || '').trim() || null,
    pages: x.pagecount || null,
    secureId: x.secureId || null,
    pdfUrl: x.secureId ? `${PDF_BASE}/${x.secureId}.pdf` : null,
    // 투자의견 필드는 존재하나 관측상 전부 빈 문자열 → 있으면 쓰고 없으면 null
    opinion: (x.rptopninvest || '').trim() || null,
  })).filter((r) => r.title);

  return {
    ok: true, ticker: t, info,
    searchStr,
    total: data.totCount != null ? data.totCount : reports.length,
    reports,
    period: { from: ymd(start), to: ymd(end) },
    source_url: 'https://www.truefriend.com/main/bond/research/_static/TF03cc030300.jsp',
    note: '연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함',
  };
}

// ── PDF 다운로드 (secureId 단위 영구 캐시) ──
async function downloadPdf(secureId, { timeoutMs = 30000 } = {}) {
  if (!secureId) return { ok: false, error: 'secureId 없음' };
  const hit = cache.getBuf('pdf', secureId, 'pdf');
  if (hit) return { ok: true, buf: hit, cached: true, bytes: hit.length, path: null };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${PDF_BASE}/${secureId}.pdf`, { signal: controller.signal });
    if (!res.ok) return { ok: false, error: 'HTTP ' + res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    // 매직바이트 확인 — HTML 오류 페이지를 PDF 로 착각하지 않는다
    if (buf.slice(0, 4).toString('latin1') !== '%PDF') {
      return { ok: false, error: 'PDF 아님 (매직바이트 불일치)', bytes: buf.length };
    }
    const p = cache.setBuf('pdf', secureId, buf, 'pdf');
    return { ok: true, buf, cached: false, bytes: buf.length, path: p };
  } catch (e) {
    return { ok: false, error: e.message };
  } finally { clearTimeout(timer); }
}

module.exports = { getReports, lookupTicker, downloadPdf, HOST, PDF_BASE };

if (require.main === module) {
  require('../lib/util').loadEnv();
  const tks = process.argv.slice(2).length ? process.argv.slice(2) : ['NVDA', 'TSLA', 'AAPL', 'PLTR', 'AEHR'];
  (async () => {
    for (const t of tks) {
      const r = await getReports(t);
      console.log(`\n════════ ${t} ════════`);
      if (!r.ok) { console.log('  실패:', r.error); continue; }
      const i = r.info;
      console.log(`  ${i && i.ok ? `${i.nameKo} (${i.code}) · ${i.exchange}` : '티커 매핑 실패 → 원본 티커로 검색'}`);
      console.log(`  ${r.period.from} ~ ${r.period.to} · 총 ${r.total}건 (수신 ${r.reports.length}건)`);
      for (const x of r.reports.slice(0, 5)) {
        console.log(`   ${x.date}  ${String(x.broker || '?').padEnd(10)} ${String(x.analyst || '').padEnd(14)} ${x.title.slice(0, 54)}`);
        if (x.summary) console.log(`      ${x.summary.replace(/\s+/g, ' ').slice(0, 90)}`);
        console.log(`      📄 ${x.pdfUrl}`);
      }
      if (r.reports.length === 0) console.log('   해당 기간 국내 증권사 리포트 없음');
    }
    // PDF 실물 검증
    const first = await getReports(tks[0]);
    if (first.ok && first.reports[0] && first.reports[0].secureId) {
      const p = await downloadPdf(first.reports[0].secureId);
      console.log(`\n📄 PDF 검증: ${p.ok ? `OK · ${p.bytes.toLocaleString()} bytes · 매직바이트 %PDF 확인${p.cached ? ' (캐시)' : ''}` : '실패 ' + p.error}`);
      if (p.ok) console.log(`   저장: ${p.path}`);
    }
    cache.report('국내리포트 캐시');
  })();
}
