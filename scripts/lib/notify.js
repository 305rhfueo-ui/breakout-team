'use strict';
// 텔레그램 알림 — 아침 관심 목록(run-breakout)과 밤 매매(paper-trader)가 같이 쓴다.
//
// .env 에 TELEGRAM_TOKEN · TELEGRAM_CHAT_ID 가 없으면 조용히 건너뛴다 (알림은 선택 기능이다).
// ⚠️ 수량(주)은 알림에만 실린다. 파일·대시보드에는 쓰지 않는다 — 받는 사람이 본인뿐이기 때문이다.
// 절대 throw 하지 않는다. 알림이 실패해도 스캔과 매매는 계속된다.

async function tg(method, body) {
  const c = new AbortController();
  const timer = setTimeout(() => c.abort(), 20000);   // 첫 연결은 8초를 넘기도 한다 (2026-09-28 실측)
  try {
    const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/${method}`, { method: 'POST', signal: c.signal,
      headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}) });
    const j = await res.json().catch(() => ({}));
    return j.ok ? { ok: true, result: j.result } : { ok: false, error: j.description || `HTTP ${res.status}` };
  } catch (e) {
    return { ok: false, error: e.name === 'AbortError' ? 'timeout' : e.message };
  } finally { clearTimeout(timer); }
}

const configured = () => !!(process.env.TELEGRAM_TOKEN && process.env.TELEGRAM_CHAT_ID);

async function notify(text) {
  if (!configured()) return { ok: false, error: 'not configured' };
  return tg('sendMessage', { chat_id: process.env.TELEGRAM_CHAT_ID, text: String(text).slice(0, 4000), disable_web_page_preview: true });
}

// 아침 메시지 — 오늘 밤 관심 종목. sharesOf(plan) 은 수량(없으면 null).
function watchMessage(t6, sharesOf) {
  const w = (t6.plans || []).filter((p) => p.watch);
  const rg = { green: '🟢 초록 — 신규 매수 가능', yellow: '🟡 노랑 — 종목당 위험 절반', red: '🔴 빨강 — 신규 매수 중단' }[t6.regime] || t6.regime;
  const L = [`💹 ${t6.generated} 오늘 밤 관심 종목 ${w.length}개`, `시장 ${rg} · 기준 봉 ${t6.sessionDate}`];
  if (!t6.earningsOk) L.push('⚠️ 실적 달력을 받지 못했습니다 — 발표 직전 종목이 섞여 있을 수 있습니다');
  if (!w.length) L.push('', '고점 바로 아래에서 쉬고 있는 종목이 없습니다. 오늘 밤은 살 것이 없습니다.');
  for (const p of w) {
    const sh = sharesOf ? sharesOf(p) : null;
    const read = p.lastRead ? ` · 차트 소견 ${({ keep: '유지', hold: '보류', drop: '제외' })[p.lastRead.verdict] || p.lastRead.verdict}` : '';
    L.push('', `${p.ticker} (${p.grade}) 현재 ${p.price}`,
      `  넘으면 사는 선 ${p.pivot} (${p.distToPivotPct > 0 ? '+' : ''}${p.distToPivotPct}%)`,
      `  예비 손절 ${p.stop} · 위험 ${p.riskPerSharePct}% · 비중 ${p.weightPct}%${sh != null ? ` · ${sh}주` : ''}${read}`);
  }
  if (w.length) L.push('', '밤에 거래량을 실어 이 선과 장중 고가를 같이 넘는 순간에만 삽니다. 실제로 살 때 손절은 그 시각의 당일 저가로 바뀝니다.');
  const post = (t6.post || []).slice(0, 6).map((p) => p.ticker);
  if (post.length) L.push(`이미 넘은 종목(따라 사지 않음): ${post.join(' · ')}`);
  return L.join('\n');
}

module.exports = { tg, notify, configured, watchMessage };
