'use strict';
// RS 사이트(야후) 업종 이름 → 연합인포맥스 리포트 제목 검색어 (2026-10-12, 5팀 하린)
// 검색어는 리포트 제목에 실제로 쓰이는 말이다(실측: "정유" 5건, "반도체" 20건). 없는 업종은 종목별 리포트만 쓴다.
// 한국어 업종 이름은 화면과 같은 dashboard/data/industry-ko.js(INDUSTRY_KO) 를 읽는다 — 이름표를 두 벌 두지 않는다.
// 표에 없는 업종이 FRANK 상위에 오면 로그에 뜬다 — 그때 한 줄 추가하면 된다.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let NAMES = null;
function names() {
  if (NAMES) return NAMES;
  const win = {};
  try { vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../../dashboard/data/industry-ko.js'), 'utf8'), { window: win }); } catch (e) { /* 없으면 영문 그대로 */ }
  NAMES = win.INDUSTRY_KO || {};
  return NAMES;
}

const MAP = {
  'Oil & Gas Refining & Marketing': ['정유', '정제마진'],
  'Oil & Gas E&P': ['원유', '셰일'],
  'Oil & Gas Integrated': ['석유', '유가'],
  'Oil & Gas Midstream': ['미드스트림', '파이프라인'],
  'Oil & Gas Equipment & Services': ['유전 서비스'],
  'Uranium': ['우라늄', '원전'],
  'Utilities - Regulated Electric': ['전력', '유틸리티'],
  'Utilities - Independent Power Producers': ['전력', '원전'],
  'Utilities - Renewable': ['신재생', '태양광'],
  'Solar': ['태양광'],
  'Semiconductors': ['반도체'],
  'Semiconductor Equipment & Materials': ['반도체 장비'],
  'Computer Hardware': ['서버', 'AI 서버'],
  'Communication Equipment': ['광통신', '네트워크'],
  'Electronic Components': ['광통신', '커넥터'],
  'Electronics & Computer Distribution': ['IT 유통'],
  'Scientific & Technical Instruments': [],
  'Software - Infrastructure': ['사이버보안', '클라우드'],
  'Software - Application': ['SaaS', '사스포칼립스', 'AI 에이전트'],
  'Information Technology Services': ['IT 서비스'],
  'Internet Content & Information': ['인터넷', '광고'],
  'Internet Retail': ['이커머스'],
  'Biotechnology': ['바이오', '임상'],
  'Drug Manufacturers - General': ['제약', '비만'],
  'Drug Manufacturers - Specialty & Generic': ['제약'],
  'Diagnostics & Research': ['진단'],
  'Medical Devices': ['의료기기'],
  'Medical Instruments & Supplies': ['의료기기'],
  'Healthcare Plans': ['건강보험', '메디케어'],
  'Health Information Services': ['헬스케어'],
  'Medical Care Facilities': ['병원'],
  'Aerospace & Defense': ['방산', '우주'],
  'Engineering & Construction': ['건설', '데이터센터'],
  'Specialty Industrial Machinery': ['기계'],
  'Electrical Equipment & Parts': ['전력 장비', '전력기기'],
  'Building Products & Equipment': [],
  'Marine Shipping': ['해운', '유조선'],
  'Airlines': ['항공'],
  'Railroads': ['철도'],
  'Trucking': ['운송'],
  'Integrated Freight & Logistics': ['물류'],
  'Steel': ['철강'],
  'Gold': ['금광', '금값'],
  'Silver': ['은'],
  'Copper': ['구리'],
  'Other Industrial Metals & Mining': ['광산', '희토류'],
  'Aluminum': ['알루미늄'],
  'Chemicals': ['화학'],
  'Specialty Chemicals': ['화학'],
  'Agricultural Inputs': ['비료'],
  'Banks - Diversified': ['은행'],
  'Banks - Regional': ['지역은행'],
  'Capital Markets': ['투자은행', '증권'],
  'Asset Management': ['자산운용'],
  'Insurance - Diversified': ['보험'],
  'Insurance - Property & Casualty': ['손해보험'],
  'Credit Services': ['카드', '결제'],
  'Financial Data & Stock Exchanges': ['거래소'],
  'REIT - Specialty': ['리츠', '데이터센터'],
  'Real Estate Services': ['부동산'],
  'Auto Manufacturers': ['자동차', '전기차'],
  'Auto Parts': ['자동차 부품'],
  'Restaurants': ['외식'],
  'Specialty Retail': ['소매'],
  'Discount Stores': ['할인점'],
  'Apparel Retail': ['의류'],
  'Leisure': ['레저'],
  'Travel Services': ['여행'],
  'Gambling': ['카지노'],
  'Entertainment': ['엔터테인먼트'],
  'Telecom Services': ['통신'],
  'Packaged Foods': ['식품'],
  'Beverages - Non-Alcoholic': ['음료'],
  'Tobacco': ['담배'],
  'Household & Personal Products': ['생활용품'],
};

function industryKo(industry) {
  return { name: names()[industry] || null, keywords: MAP[industry] || [] };
}

// 주가가 움직였다는 사실만 전하는 자동 생성 기사 제목(Zacks 류). "왜 강한가·누가 주도주인가"의 근거가 아니다 (2026-10-12 실측:
// "Hits Fresh High" · "Up 7.24% in One Week" · "Upgraded to Strong Buy" 만으로 주도주가 뽑혔다). 근거 묶음과 주도주 검사에서 뺀다.
const PRICE_NOISE = [
  /hits? (a )?(fresh|new|52-week) high/i, /soars? to (a )?52-week high/i, /52-week high/i, /room to run/i, /time to cash out/i,
  /\bup \d+(\.\d+)?% (in|since)\b/i, /rall(y|ies) \d+(\.\d+)?% in/i, /since last earnings report/i,
  /upgraded to (strong )?buy/i, /wall street analysts (see|think|believe)/i, /\d+(\.\d+)?% upside/i, /momentum stock/i,
  /is it time to buy/i, /should you buy/i, /what you should know/i, /stocks? (making|on) the (biggest )?move/i, /\bvs\.? /i,
  /overbought|oversold/i, /brokers suggest/i, /is a (strong|great|top) (growth|value|momentum)/i, /here'?s why you should/i,
];
const isPriceNoise = (title) => PRICE_NOISE.some((re) => re.test(String(title || '')));

module.exports = { industryKo, isPriceNoise, MAP };
