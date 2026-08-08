/* 업종·섹터 영문명 → 한글명.
 *
 * 미르·실장 보고에 "Oil & Gas Refining & Marketing" 같은 영문이 그대로 나오면 안 된다는
 * 서술 규칙 때문에 만들었다. 리서치룸(index.html)과 대시보드(breakout-room.html) 가
 * 같이 쓰므로 별도 파일로 뺐다.
 *
 * ⚠️ 여기 없는 업종은 영문 그대로 보여준다. 억지로 번역하지 않는다 —
 *    잘못된 한글명은 없는 것보다 나쁘다.
 * ⚠️ 출처는 RS 사이트가 쓰는 업종 분류명(야후 파이낸스 계열)이다. 새 업종이 나타나면
 *    화면에 영문으로 뜨므로 그때 여기 추가하면 된다.
 */
window.SECTOR_KO = {
  'Technology': '기술', 'Healthcare': '헬스케어', 'Industrials': '산업재',
  'Consumer Cyclical': '경기소비재', 'Consumer Defensive': '필수소비재',
  'Energy': '에너지', 'Communication Services': '통신서비스',
  'Financial Services': '금융', 'Basic Materials': '소재',
  'Real Estate': '부동산', 'Utilities': '유틸리티', 'N/A': '미분류',
};

window.INDUSTRY_KO = {
  // ── 기술 ──
  'Semiconductors': '반도체',
  'Semiconductor Equipment & Materials': '반도체 장비·소재',
  'Software - Infrastructure': '인프라 소프트웨어',
  'Software - Application': '응용 소프트웨어',
  'Information Technology Services': 'IT 서비스',
  'Computer Hardware': '컴퓨터 하드웨어',
  'Consumer Electronics': '소비자 가전',
  'Communication Equipment': '통신장비',
  'Electronic Components': '전자부품',
  'Electronics & Computer Distribution': '전자·컴퓨터 유통',
  'Scientific & Technical Instruments': '과학·기술 측정기기',
  'Solar': '태양광',

  // ── 헬스케어 ──
  'Biotechnology': '바이오테크',
  'Diagnostics & Research': '진단·연구',
  'Medical Devices': '의료기기',
  'Medical Instruments & Supplies': '의료기구·소모품',
  'Drug Manufacturers - General': '제약(대형)',
  'Drug Manufacturers - Specialty & Generic': '제약(전문·제네릭)',
  'Healthcare Plans': '건강보험',
  'Health Information Services': '헬스케어 정보서비스',
  'Medical Care Facilities': '의료기관',
  'Medical Distribution': '의약품 유통',
  'Pharmaceutical Retailers': '약국 체인',

  // ── 금융 ──
  'Banks - Diversified': '종합은행',
  'Banks - Regional': '지역은행',
  'Capital Markets': '증권·자본시장',
  'Asset Management': '자산운용',
  'Insurance - Diversified': '종합보험',
  'Insurance - Life': '생명보험',
  'Insurance - Property & Casualty': '손해보험',
  'Insurance - Specialty': '특종보험',
  'Insurance - Reinsurance': '재보험',
  'Insurance Brokers': '보험중개',
  'Credit Services': '여신·카드',
  'Financial Data & Stock Exchanges': '금융데이터·거래소',
  'Financial Conglomerates': '금융지주',
  'Mortgage Finance': '주택금융',
  'Shell Companies': '기업인수목적회사(SPAC)',

  // ── 산업재 ──
  'Aerospace & Defense': '항공우주·방산',
  'Specialty Industrial Machinery': '산업기계',
  'Farm & Heavy Construction Machinery': '농기계·중장비',
  'Engineering & Construction': '건설·엔지니어링',
  'Building Products & Equipment': '건축자재·설비',
  'Industrial Distribution': '산업재 유통',
  'Electrical Equipment & Parts': '전기장비·부품',
  'Metal Fabrication': '금속가공',
  'Tools & Accessories': '공구·액세서리',
  'Consulting Services': '컨설팅',
  'Specialty Business Services': '기업서비스',
  'Staffing & Employment Services': '인력·채용 서비스',
  'Security & Protection Services': '보안·경비 서비스',
  'Rental & Leasing Services': '렌탈·리스',
  'Waste Management': '폐기물 처리',
  'Pollution & Treatment Controls': '환경설비',
  'Integrated Freight & Logistics': '종합물류',
  'Trucking': '육상운송',
  'Railroads': '철도',
  'Marine Shipping': '해운',
  'Airlines': '항공',
  'Airports & Air Services': '공항·항공서비스',
  'Conglomerates': '복합기업',
  'Infrastructure Operations': '인프라 운영',

  // ── 경기소비재 ──
  'Internet Retail': '온라인 유통',
  'Specialty Retail': '전문 소매',
  'Apparel Retail': '의류 유통',
  'Apparel Manufacturing': '의류 제조',
  'Footwear & Accessories': '신발·액세서리',
  'Luxury Goods': '명품',
  'Department Stores': '백화점',
  'Home Improvement Retail': '홈인테리어 유통',
  'Furnishings, Fixtures & Appliances': '가구·인테리어·가전',
  'Residential Construction': '주택건설',
  'Auto Manufacturers': '완성차',
  'Auto Parts': '자동차 부품',
  'Auto & Truck Dealerships': '자동차 딜러',
  'Recreational Vehicles': '레저용 차량',
  'Restaurants': '외식',
  'Lodging': '숙박',
  'Resorts & Casinos': '리조트·카지노',
  'Gambling': '게이밍·베팅',
  'Travel Services': '여행 서비스',
  'Leisure': '레저',
  'Personal Services': '개인 서비스',
  'Textile Manufacturing': '섬유 제조',
  'Packaging & Containers': '포장·용기',
  'Education & Training Services': '교육·훈련',

  // ── 필수소비재 ──
  'Packaged Foods': '가공식품',
  'Grocery Stores': '식료품 소매',
  'Discount Stores': '할인점',
  'Beverages - Non-Alcoholic': '음료(무알코올)',
  'Beverages - Brewers': '맥주',
  'Beverages - Wineries & Distilleries': '와인·증류주',
  'Tobacco': '담배',
  'Household & Personal Products': '생활용품',
  'Confectioners': '제과',
  'Farm Products': '농산물',
  'Agricultural Inputs': '농업 자재',
  'Food Distribution': '식품 유통',

  // ── 에너지 ──
  'Oil & Gas Integrated': '종합 정유',
  'Oil & Gas Refining & Marketing': '정유·석유제품 판매',
  'Oil & Gas E&P': '석유·가스 탐사생산',
  'Oil & Gas Midstream': '석유·가스 수송저장',
  'Oil & Gas Equipment & Services': '정유·가스 장비·서비스',
  'Oil & Gas Drilling': '시추',
  'Thermal Coal': '발전용 석탄',
  'Uranium': '우라늄',

  // ── 소재 ──
  'Specialty Chemicals': '정밀화학',
  'Chemicals': '화학',
  'Steel': '철강',
  'Aluminum': '알루미늄',
  'Copper': '구리',
  'Gold': '금',
  'Silver': '은',
  'Other Industrial Metals & Mining': '기타 산업금속·광업',
  'Other Precious Metals & Mining': '기타 귀금속·광업',
  'Coking Coal': '제철용 석탄',
  'Building Materials': '건축소재',
  'Paper & Paper Products': '제지',
  'Lumber & Wood Production': '목재',

  // ── 통신서비스 ──
  'Telecom Services': '통신 서비스',
  'Entertainment': '엔터테인먼트',
  'Electronic Gaming & Multimedia': '게임·멀티미디어',
  'Internet Content & Information': '인터넷 콘텐츠',
  'Advertising Agencies': '광고',
  'Broadcasting': '방송',
  'Publishing': '출판',

  // ── 부동산 ──
  'REIT - Retail': '리츠(상업시설)',
  'REIT - Residential': '리츠(주거)',
  'REIT - Office': '리츠(오피스)',
  'REIT - Industrial': '리츠(물류·산업)',
  'REIT - Healthcare Facilities': '리츠(의료시설)',
  'REIT - Hotel & Motel': '리츠(호텔)',
  'REIT - Diversified': '리츠(복합)',
  'REIT - Specialty': '리츠(특수)',
  'REIT - Mortgage': '모기지 리츠',
  'Real Estate Services': '부동산 서비스',
  'Real Estate - Development': '부동산 개발',
  'Real Estate - Diversified': '부동산(복합)',

  // ── 유틸리티 ──
  'Utilities - Regulated Electric': '전력(규제)',
  'Utilities - Regulated Gas': '가스(규제)',
  'Utilities - Regulated Water': '수도(규제)',
  'Utilities - Diversified': '유틸리티(복합)',
  'Utilities - Renewable': '신재생 발전',
  'Utilities - Independent Power Producers': '민자 발전',
};

/* 업종명을 "한글 (영문)" 으로. 한글이 없으면 영문만 — 지어내지 않는다. */
window.indKo = function (en, opts) {
  const o = opts || {};
  const ko = window.INDUSTRY_KO[en] || window.SECTOR_KO[en] || null;
  if (!ko) return en || '';
  return o.koOnly ? ko : `${ko}(${en})`;
};
