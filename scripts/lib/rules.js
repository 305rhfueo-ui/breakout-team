'use strict';
// 6팀 매매 규칙 로더 — config/rules.json 을 읽는다. 파일이 없거나 항목이 빠지면 아래 기본값.
// 규칙은 코드가 아니라 이 파일에서만 바꾼다 (버전별 성적 비교가 가능하도록).

const path = require('path');
const { paths, readJson } = require('./util');

const FILE = path.join(paths.root, 'config', 'rules.json');

function loadRules(file = FILE) {
  const j = readJson(file, null);
  if (!j || !j.setup || !j.risk) throw new Error(`규칙 파일을 읽지 못했습니다: ${file}`);
  return j;
}

// 계좌 규모·리스크는 .env 에서만 온다. 금액은 공개 저장소에 쓰지 않는다 — 비중(%)만 쓴다.
function account(rules) {
  const usd = Number(process.env.ACCOUNT_USD);
  const riskPct = Number(process.env.RISK_PCT);
  return {
    usd: Number.isFinite(usd) && usd > 0 ? usd : null,
    riskPct: Number.isFinite(riskPct) && riskPct > 0 ? riskPct : rules.risk.riskPct,
  };
}

module.exports = { loadRules, account, FILE };
