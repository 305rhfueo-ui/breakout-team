window.ONDEMAND_DATA = {
  "items": [
    {
      "ticker": "SNOW",
      "nameKo": "스노우플레이크",
      "sector": "Technology",
      "industry": "Software - Application",
      "industryRank": {
        "frank": 5,
        "frank25dChg": 13,
        "headline": "AI에 소프트웨어가 대체될 것이라는 공포가 가라앉으며 바닥에서 반등한 응용 소프트웨어가 업종 순위 5위까지 올라섰다.",
        "asOf": "2026-10-12"
      },
      "requestedOn": "2026-10-13",
      "session": "2026-10-12",
      "at": "2026-10-12T22:13:30.230Z",
      "verdict": "조건부",
      "verdictLine": "매출 35% 성장과 신제품 효과는 기준을 채우지만, 피벗 384.56까지 6.29% 떨어져 있고 거래량도 마르지 않아 조건부다.",
      "basis": [
        {
          "point": "선행 상승 77%로 기준 30%를 크게 넘었고 베이스 5.2주도 2~8주 범위 안이다.",
          "side": "for",
          "checkRef": "차트:선행 상승"
        },
        {
          "point": "2026년 2월 내놓은 CoCo 효과로 회사가 연간 제품 매출 전망을 6,070백만 달러로 올렸다.",
          "side": "for",
          "checkRef": "CANSLIM:N"
        },
        {
          "point": "피벗 384.56까지 -6.29%(-1.58 ADR) 떨어져 있어 아직 살 자리에 오지 않았다.",
          "side": "against",
          "checkRef": "차트:피벗 거리"
        },
        {
          "point": "최근 5일 거래량이 20일 평균의 1.07배로, 쉬는 동안 거래량이 마르지 않았다.",
          "side": "against",
          "checkRef": "차트:거래량 마름"
        },
        {
          "point": "최근 분기 순손실이 35.7% 줄었을 뿐 아직 적자라 이익 기준을 못 넘는다.",
          "side": "against",
          "checkRef": "CANSLIM:C"
        }
      ],
      "conditions": [
        "피벗 384.56을 20일 평균의 2배 이상 거래량으로 종가 돌파하면 바뀐다",
        "돌파 전까지 최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어들면 바뀐다",
        "다음 분기 실적 발표일이 달력에 확정되고 그 날짜가 진입 시점 이후면 바뀐다"
      ],
      "invalidation": "종가가 20일선 338.35 아래로 내려가거나 베이스 저점 316.63을 깨면 이 판단은 틀린 것이다. 돌파 이후라면 예비 손절 370.18 이탈이 기준이 된다.",
      "dataLimits": "기관 보유 자료가 없고, 다음 실적 발표일이 달력에 아직 없으며, 증권사 전망치가 최근 올랐는지 내렸는지는 확인하지 못했다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": false,
        "reasons": [],
        "asOf": {
          "bar": "2026-10-12",
          "market": "2026-10-09"
        }
      },
      "setup": {
        "state": "pre",
        "grade": "B",
        "pivot": 384.56,
        "stop": 370.18,
        "distToPivotPct": -6.29,
        "distToPivotAdr": -1.58,
        "riskPerSharePct": 3.74,
        "extensionAdr": 1.18,
        "adrPct": 3.99,
        "breakDate": null,
        "chase": false,
        "metrics": {
          "baseBars": 26,
          "baseWeeks": 5.2,
          "depthPct": 17.7,
          "priorMovePct": 76.8,
          "higherLows": 1,
          "contraction": 0.93,
          "closeRange10Adr": 2.7,
          "surf10": 1.18,
          "surf20": 1.53,
          "slope20": 1.25,
          "baseLow": 316.63,
          "lastSwingLow": 332
        },
        "reasons": [
          "선행 상승 +77%",
          "베이스 5.2주",
          "깊이 17.7%",
          "저점 상승 1회",
          "✗ 진폭 0.93배 · 10일 종가폭 2.7 ADR",
          "10일선 +1.2 ADR · 20일선 +1.5 ADR",
          "20일선 기울기 +1.25%"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 77% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 5.2주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "충족",
            "evidence": "저점 상승 1회 · 진폭 0.93배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 17.7% · ADR 3.99%의 4.4배 · 선행 상승의 절반 38%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 360.37 · 20일선 338.35 · 50일선 331.59"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.07배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "아직 돌파 전 — 돌파일에 20일 평균 2배가 실리는지 본다"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "피벗 384.56까지 -6.29% (-1.58 ADR) · 기준 1 ADR 이내"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 3.74% · ADR 3.99%"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.2 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "충족",
            "evidence": "한별 판정 초록"
          }
        ],
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 적자축소 (순이익 기준)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "사이트 최근 3분기 순이익 적자축소/적자축소/적자축소 — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "신제품·신서비스·신경영진 여부는 코드로 판정하지 않는다 — AI 심층 분석에서 출처로 판정 · 참고: 52주 고점의 96%"
          },
          {
            "item": "S 수급",
            "status": "충족",
            "evidence": "최근 5일 거래량 1.07배(20일 평균 대비) · 오늘 거래대금 2.09배(상승일) · 상장주식 353M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 7.98% · 3M 5% · 6M 1.49% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "충족",
            "evidence": "한별 판정 초록 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "SNOW",
        "fetchedAt": "2026-10-13",
        "source": "한국투자증권 Open API",
        "per": 113.44,
        "pbr": 59.04,
        "eps": 3.17,
        "bps": 6.1,
        "shares": 352800000,
        "marketCapM": 127043,
        "high52": 384.56,
        "high52Date": "2026-09-03",
        "low52": 118.3,
        "low52Date": "2026-04-10",
        "last": 360.1,
        "prevClose": 368.89,
        "nameKo": "스노우플레이크",
        "nameEn": "SNOWFLAKE INC",
        "listedOn": "0000-00-00",
        "exchange": "뉴욕거래소",
        "listedShares": 352800000
      },
      "cnbc": [
        {
          "title": "Palantir is a bargain compared to AI-linked software peers, UBS says",
          "url": "https://www.cnbc.com/2026/09/15/palantir-is-a-bargain-compared-to-ai-linked-software-peers-ubs-says.html",
          "date": "2026-09-15",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves midday: Tesla, Ciena, Meta, Snowflake & more",
          "url": "https://www.cnbc.com/2026/09/03/stocks-making-the-biggest-moves-midday-tsla-cien-meta-snow-rare.html",
          "date": "2026-09-03",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Cramer says Microsoft's improved cloud transparency is a win for investors",
          "url": "https://www.cnbc.com/investingclub/2026/09/03/cramer-says-microsofts-improved-cloud-transparency-is-a-win-for-investors-.html",
          "date": "2026-09-03",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Software is up nearly 40% since 'SaaSpocalypse' bottom. Ways to play the sector",
          "url": "https://www.cnbc.com/2026/09/03/software-is-up-40percent-since-saaspocalypse-bottom-ways-to-play-the-sector-.html",
          "date": "2026-09-03",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Jim Cramer's top 10 things to watch in the stock market Thursday",
          "url": "https://www.cnbc.com/investingclub/2026/09/03/jim-cramers-top-10-things-to-watch-in-the-stock-market-thursday.html",
          "date": "2026-09-03",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Thursday's biggest analyst calls: Nvidia, Apple, Broadcom, Snowflake, Deere, Tesla, Amazon",
          "url": "https://www.cnbc.com/2026/09/03/thursdays-analyst-calls-include-nvidia.html",
          "date": "2026-09-03",
          "publisher": "CNBC",
          "kind": "article"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-13",
        "nameKo": "스노우플레이크",
        "nameEn": "SNOWFLAKE INC",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001640147&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-07-31",
              "derived": false,
              "revenue": 1546793000,
              "profit": -262967000,
              "netIncome": -191720000,
              "margin": -17,
              "yoy": {
                "revenue": 35.1,
                "profit": 22.7,
                "netIncome": 35.7,
                "priorEnd": "2025-07-31"
              }
            },
            {
              "periodEnd": "2026-04-30",
              "derived": false,
              "revenue": 1390951000,
              "profit": -326154000,
              "netIncome": -295571000,
              "margin": -23.4,
              "yoy": {
                "revenue": 33.5,
                "profit": 27.1,
                "netIncome": 31.3,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodEnd": "2026-01-31",
              "derived": true,
              "revenue": 1283994000,
              "profit": -318159000,
              "netIncome": -306969000,
              "margin": -24.8,
              "yoy": {
                "revenue": 30.1,
                "profit": 17.7,
                "netIncome": 7.3,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 1212909000,
              "profit": -329473000,
              "netIncome": -293957000,
              "margin": -27.2,
              "yoy": {
                "revenue": 28.7,
                "profit": 9.8,
                "netIncome": 9.4,
                "priorEnd": "2024-10-31"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "Snowflake Inc. (SNOW) Is a Trending Stock: Facts to Know Before Betting on It",
              "url": "https://www.nasdaq.com/articles/snowflake-inc-snow-trending-stock-facts-know-betting-it",
              "date": "2026-10-12",
              "publisher": "Zacks"
            },
            {
              "title": "Is Snowflake (SNOW) a Buy as Wall Street Analysts Look Optimistic?",
              "url": "https://www.nasdaq.com/articles/snowflake-snow-buy-wall-street-analysts-look-optimistic",
              "date": "2026-10-09",
              "publisher": "Zacks"
            },
            {
              "title": "Wall Street Analysts See a 25.64% Upside in Snowflake (SNOW): Can the Stock Really Move This High?",
              "url": "https://www.nasdaq.com/articles/wall-street-analysts-see-2564-upside-snowflake-snow-can-stock-really-move-high",
              "date": "2026-10-06",
              "publisher": "Zacks"
            },
            {
              "title": "Why Is Snowflake (SNOW) Down 4.1% Since Last Earnings Report?",
              "url": "https://www.nasdaq.com/articles/why-snowflake-snow-down-41-last-earnings-report",
              "date": "2026-10-02",
              "publisher": "Zacks"
            },
            {
              "title": "Investors Heavily Search Snowflake Inc. (SNOW): Here is What You Need to Know",
              "url": "https://www.nasdaq.com/articles/investors-heavily-search-snowflake-inc-snow-here-what-you-need-know",
              "date": "2026-09-29",
              "publisher": "Zacks"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-10-02",
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "3.02",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000043/snow-20260928.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-02",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000033/snow-20260902.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-16",
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000162828026048373/snow-20260715.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-30",
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000032/snow-20260629.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-27",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000027/snow-20260527.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-31",
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000013/snow-20260331.htm"
          }
        ],
        "krReports": {
          "total": 4,
          "reports": [
            {
              "date": "2026-06-01",
              "broker": "키움증권",
              "analyst": "김승혁",
              "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
              "summary": "- 스노우플레이크는 클라우드에 데이터를 모아 저장·분석해주는 데이터 플랫폼 기업- FY1Q27 실적은 성장률 재가속과 가이던스 상향 등 긍정적. 발표 후 주가 +36%- 기업용 데이터·AI 플랫폼 시장 확장, 고객 확보 속도 증가 등에 우호적 흐름 전망",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
              "pages": "6"
            },
            {
              "date": "2026-02-27",
              "broker": "키움증권",
              "analyst": "김승혁",
              "title": "[스노우플레이크 (NYS:SNOW)] 꺾이지 않은 성장, 남은 건 ‘증명’",
              "summary": "- 스노우플레이크는 데이터 저장·분석과 AI 활용을 지원하는 클라우드 데이터 플랫폼- FY4Q26은 매출 +30% 성장, NRR 125%, RPO +42%로 성장 탄력이 유지된 실적- FY27 성장 둔화, RPO 단기 인식 비중 하락 속 Cortex Code가 성장 재가속의 핵심",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgemlmilqxxqzgcgxecei.pdf",
              "pages": "4"
            },
            {
              "date": "2026-02-26",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "title": "[스노우플레이크 (NYS:SNOW)] 높은 상호운용성 핵심",
              "summary": "- AI 에이전트 확산으로 인한 비용 최적화 위험 비교적 적음- 원래부터 높았던 AI 기여도가 한층 더 확대 + 상호운용성 확장- 전년대비 제품 매출 +27% 성장 가이던스는 보수적으로 제시된 수치",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgcmxeclqgmlxgcgxecei.pdf",
              "pages": "6"
            },
            {
              "date": "2025-12-05",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "title": "[스노우플레이크 (NYS:SNOW)] 사실은 괜찮은 실적",
              "summary": "- FY3Q26은 호실적 달성에도 불구하고 4Q 가이던스를 아쉽게 제시하며 직후 주가 급락- AI는 동사에게 별도의 모멘텀이 아니라 기존 플랫폼 사용량을 끌어올리는 직접적 성장 엔진- 2Q의 대규모 마이그레이션 효과에서 정상 패턴으로의 복귀 때문에 이번 분기 실적이 언뜻 아쉬워보일 수 있으나, 레거시 시스템의 데이터 수집 및 마이그레이션은 여전히 규모가 크고 미완성된 시장임을 염두에 두어야 함 (AWS는 온프레미스 마이그레이션이 15-20%만 완료되었다고 간주).",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxklllckxqgkxqgcgxecei.pdf",
              "pages": "6"
            }
          ]
        }
      },
      "rank": {
        "m1": 7.98,
        "m3": 5,
        "m6": 1.49
      },
      "verified": {
        "checked": 7,
        "ok": 27,
        "unverified": 0,
        "dead": 0,
        "stripped": 1
      },
      "numberCut": 1,
      "deep": {
        "status": "done",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "순손실이 1년 전보다 35.7% 줄었으나 아직 적자 — 기준은 이익 25% 증가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 4개 분기 모두 순손실이고 적자 폭만 축소 — 3년 추세·ROE 는 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "2026년 2월 출시한 CoCo 가 7,100개 이상 계정에서 쓰이고 회사가 가이던스 상향의 최대 요인으로 지목 · 참고: 52주 고점의 96%"
          },
          {
            "item": "S 수급",
            "status": "충족",
            "evidence": "최근 5일 거래량 1.07배(20일 평균 대비) · 오늘 거래대금 2.09배(상승일) · 상장주식 353M주 · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1개월 7.98% · 3개월 5% · 6개월 1.49% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "충족",
            "evidence": "시장 판정 초록 · 마진부채 1년 전보다 +37.2% 로 주의선 +30% 초과"
          }
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 77% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 5.2주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "충족",
            "evidence": "저점 상승 1회 · 진폭 0.93배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 17.7% · ADR 3.99%의 4.4배 · 선행 상승의 절반 38%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 360.37 · 20일선 338.35 · 50일선 331.59"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.07배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "아직 돌파 전 — 돌파일에 20일 평균 2배가 실리는지 본다"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "피벗 384.56까지 -6.29% (-1.58 ADR) · 기준 1 ADR 이내"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 3.74% · ADR 3.99%"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.2 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "충족",
            "evidence": "시장 판정 초록"
          }
        ],
        "chartObservation": {
          "base": "9월 초 급등 뒤 26거래일(5.2주)째 한 구간에서 오르내리고 있다. 이 구간의 고점 대비 저점 깊이는 17.7%로 ADR 3.99%의 4.4배이며, 베이스 저점은 316.63이다. 저점은 1회 높아졌고 폭은 직전 대비 0.93배로 좁아졌다.",
          "volume": "쉬는 동안 거래량이 줄지 않았다. 최근 5일 거래량이 20일 평균의 1.07배로 기준 0.7배를 넘는다. 최근 10봉 중 10월 9일 거래량이 8,025,600주로 가장 많았고 그날 종가는 고가권(종가 위치 99)이었으며, 다음 날 10월 12일은 4,114,311주에 종가 위치 26이었다.",
          "position": "현재가 360.37은 피벗 384.56보다 6.29%(1.58 ADR) 아래에 있다. 예비 손절 370.18은 현재가보다 위에 있고, 손절 폭 3.74%는 ADR 3.99% 안에 들어온다. 10일선 기준으로는 1.18 ADR 위에 떠 있다.",
          "maStack": "종가 360.37이 20일선 338.35, 50일선 331.59, 150일선 244.25를 모두 위에 두고 있다. 50일선보다 8.68% 위이며 20일선 기울기는 +1.25%다.",
          "note": "그림과 숫자가 일치한다. 3개월 그림에서 9월 초 큰 양봉 이후의 가로 구간과 10월 9일 커진 거래량 막대가 그대로 보인다."
        },
        "company": "기업이 쓰는 데이터를 클라우드에 모아 저장하고 분석해 주는 데이터 플랫폼 회사다. 고객이 쓴 만큼 돈을 받는 사용량 기반 과금 구조이고, 주 고객은 대형 기업이다. 최근 성장 축은 AI 제품으로, 개발자용 CoCo와 일반 직원용 CoWork가 기존 플랫폼 사용량까지 끌어올리는 역할을 한다.",
        "confidence": "medium",
        "earningsRisk": "달력 기준으로 확정된 실적 발표 일정이 없다. 직전 분기 실적은 2026년 9월 2일에 나왔으므로, 진입 전에 다음 발표일이 뜨는지 다시 확인해야 한다.",
        "entryChecklist": [
          "피벗 384.56을 20일 평균의 2배 이상 거래량으로 종가 돌파하는지",
          "돌파 전까지 최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어드는지 (지금 1.07배)",
          "종가가 20일선 338.35 위를 계속 지키는지",
          "다음 분기 실적 발표일이 달력에 확정되는지, 그 날짜가 진입 시점보다 뒤인지",
          "돌파 시 당일 저가 기준 손절 폭이 ADR 3.99% 안에 들어오는지"
        ],
        "financials": {
          "estimateRevisions": {
            "claims": [],
            "direction": "unknown"
          },
          "guidance": [
            {
              "evidence_level": "sourced",
              "id": "g1",
              "sources": [
                {
                  "date": "2026-09-02",
                  "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                  "quote": "Product revenue of $6,070 million, representing 36% year-over-year growth, up from previous guidance of $5,840 million",
                  "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statement": "회사가 올해 제품 매출 전망을 5,840백만 달러에서 6,070백만 달러로 올렸고, 이는 1년 전보다 36% 증가하는 수준이다."
            },
            {
              "evidence_level": "sourced",
              "id": "g2",
              "sources": [
                {
                  "date": "2026-09-02",
                  "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                  "quote": "14.5%, up from previous guidance of 13.5%",
                  "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statement": "연간 영업이익률 전망도 13.5%에서 14.5%로 올려, 매출만이 아니라 수익성 계획도 함께 높였다."
            }
          ],
          "profitTrend": [
            {
              "evidence_level": "sourced",
              "id": "p1",
              "sources": [
                {
                  "date": "2026-06-01",
                  "publisher": "키움증권(연합인포맥스)",
                  "quote": "영업이익 (447) (318) (326) 적자축소 적자확대",
                  "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                  "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statement": "회계 기준으로는 아직 영업적자다. 1년 전 447백만 달러였던 분기 영업적자가 326백만 달러로 줄어든 단계다."
            },
            {
              "evidence_level": "sourced",
              "id": "p2",
              "sources": [
                {
                  "date": "2026-06-01",
                  "publisher": "키움증권(연합인포맥스)",
                  "quote": "AI 제품은 거대 언어모델을 비싼 GPU 로 돌려야 하고 외부 모델 비용도 들어가 매출총이익률이 코어보다 낮은데, 그럼에도 75% 가이던스를 지켜냈다.",
                  "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                  "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statement": "AI 제품은 원가가 더 드는데도 회사는 매출총이익률 75% 목표를 지켜냈다."
            }
          ],
          "revenueTrend": [
            {
              "evidence_level": "no_source",
              "id": "f1",
              "sources": [
                {
                  "date": "2026-09-02",
                  "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                  "quote": "Revenue of $1.55 billion in the second quarter, representing 35% year-over-year growth",
                  "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
              "statementOriginal": "가장 최근 분기 매출이 1년 전보다 35% 늘었고, 그중 제품 매출만 보면 37% 늘었다.",
              "stripped": true
            },
            {
              "evidence_level": "sourced",
              "id": "f2",
              "sources": [
                {
                  "date": "2026-09-02",
                  "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                  "quote": "Net revenue retention rate of 126%",
                  "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statement": "기존 고객이 1년 전보다 126%를 쓰고 있어, 새 고객 없이도 매출이 늘어나는 구조가 유지된다."
            }
          ]
        },
        "financialsNarrative": "매출 성장률이 다시 빨라지는 중이다. 가장 최근 분기 매출은 1년 전보다 35% 늘었고, 기존 고객이 1년 전보다 126%를 쓰면서 성장을 떠받치고 있다. 다만 회계 기준 영업적자는 아직 남아 있고, 1년 전 447백만 달러에서 326백만 달러로 적자 폭이 줄어든 단계다. 회사는 연간 영업이익률 전망을 13.5%에서 14.5%로 올려 수익성이 개선되는 방향임을 밝혔다.",
        "lead": "SNOW는 매출 성장이 다시 빨라지고 신제품 효과가 숫자로 확인된 종목이지만, 지금 가격은 매수 기준선인 피벗 384.56 아래에 있다. 가장 강한 근거는 분기 매출이 1년 전보다 35% 늘고 회사가 연간 제품 매출 전망을 6,070백만 달러로 올린 것이다. 가장 큰 걱정은 아직 영업적자이고, 9월 28일 전환사채를 발행해 나중에 주식이 늘어날 수 있다는 점이다. 종가가 20일선 338.35 아래로 내려가면 이 그림은 깨진다.",
        "nNarrative": "새로운 것은 AI 제품 두 개다. 2026년 2월 내놓은 CoCo는 데이터 작업을 말로 시키면 대신 처리해 주는 개발 보조 도구이고, 6월 2일 행사에서 개편한 CoWork는 일반 직원이 쓰는 업무 도구다. 매출 쪽에서는 회사가 연간 제품 매출 전망을 6,070백만 달러로 올리면서 그 최대 요인으로 CoCo를 직접 꼽았다. 이익 쪽에서는 AI 제품 원가가 더 드는데도 매출총이익률 75% 목표를 지켰고, 5년 60억 달러 규모 AWS 계약에서 나오는 비용 절감이 이를 받쳐 준다. 기대 성장률은 회사 가이던스 기준으로 올해 제품 매출 36% 증가다. 반대로 AI 비용 부담에 고객이 사용량을 줄이면 이 기대는 꺾인다.",
        "nVerdict": "충족",
        "newDrivers": [
          {
            "what": "CoCo(옛 Cortex Code) — 데이터 작업을 말로 시키면 AI가 대신 처리해 주는 개발 보조 도구",
            "kind": "product",
            "stage": "매출 발생 중",
            "since": "2026-02",
            "basis": [
              {
                "evidence_level": "sourced",
                "id": "d1a",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "2 월 출시 이후 7,100 개 이상 계정에서 쓰이고 있고, Snowflake Intelligence 사용 계정은 전분기 대비 두 배 넘게 늘었다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "2026년 2월 출시 이후 7,100개 이상 계정에서 쓰이고 있어, 발표 단계를 넘어 실제로 사용되고 있다."
              }
            ],
            "revenueImpact": [
              {
                "evidence_level": "sourced",
                "id": "d1b",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "이를 반영해 동사는 FY27 제품매출 가이던스를 종전 27%에서 31%로, 영업이익률을 12.5%에서 13.5%로 상향했다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "이 제품 사용을 반영해 회사가 올해 제품 매출 성장 전망을 27%에서 31%로 올렸다."
              },
              {
                "evidence_level": "sourced",
                "id": "d1c",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "동사는 이번 가이던스 상향의 가장 큰 요인으로 COCO 를 직접 꼽았다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "회사가 전망을 올린 가장 큰 이유로 이 제품을 직접 지목했다."
              }
            ],
            "profitImpact": [
              {
                "evidence_level": "sourced",
                "id": "d1d",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "AI 제품은 거대 언어모델을 비싼 GPU 로 돌려야 하고 외부 모델 비용도 들어가 매출총이익률이 코어보다 낮은데, 그럼에도 75% 가이던스를 지켜냈다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "AI 제품은 기존 사업보다 원가가 더 드는데도 매출총이익률 75% 목표를 지켰다."
              }
            ],
            "expectedGrowth": [
              {
                "evidence_level": "sourced",
                "id": "d1e",
                "sources": [
                  {
                    "date": "2026-09-02",
                    "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                    "quote": "Product revenue of $6,070 million, representing 36% year-over-year growth, up from previous guidance of $5,840 million",
                    "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "회사 가이던스 기준 올해 제품 매출은 6,070백만 달러로 36% 증가할 전망이다."
              }
            ],
            "counter": [
              {
                "evidence_level": "sourced",
                "id": "d1f",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "물론, 1) COCO 사용 증가가 매출(소비) 증가로 꾸준히 이어질 것인가, 2) 낮은 AI 마진을, AWS 비용 절감으로 지속 상쇄 가능한지, 3) AI 비용 부담에 의한 고객들의 사용량 감소 등은 중장기적으로 관찰해야 할 지점이다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "사용이 늘어도 매출로 꾸준히 이어질지, AI 비용 부담에 고객이 사용량을 줄이지 않을지가 관찰 대상이다."
              }
            ]
          },
          {
            "what": "CoWork(옛 Snowflake Intelligence) — 일반 직원이 말 걸듯 쓰면서 업무까지 처리하게 해 주는 AI 도구",
            "kind": "product",
            "stage": "출시",
            "since": "2026-06-02",
            "basis": [
              {
                "evidence_level": "sourced",
                "id": "d2a",
                "sources": [
                  {
                    "date": "2026-06-02",
                    "publisher": "IT Brief US",
                    "quote": "CoWork grew 2x quarter over quarter in the most recent period.",
                    "title": "Snowflake unveils platform upgrades for CoCo, CoWork",
                    "url": "https://itbrief.news/story/snowflake-unveils-platform-upgrades-for-coco-cowork",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "6월 2일 행사에서 이름과 기능을 새로 정비했고, 직전 분기 대비 사용이 2배 늘었다."
              }
            ],
            "revenueImpact": [
              {
                "evidence_level": "sourced",
                "id": "d2b",
                "sources": [
                  {
                    "date": "2026-09-02",
                    "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                    "quote": "CoWork and CoCo are driving transformational outcomes for our customers, while fueling rapid adoption, user growth, new workloads, and overall platform consumption.",
                    "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "회사는 이 제품이 새 작업과 플랫폼 사용량 전반을 끌어올리고 있다고 밝혔다."
              }
            ],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": [
              {
                "evidence_level": "sourced",
                "id": "d2c",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "같은 시장을 Databricks·Microsoft·Google 도 노리지만, 동사는 유리한 포지션을 점한다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "같은 시장을 Databricks·Microsoft·Google이 함께 노리고 있어 경쟁이 거세다."
              }
            ]
          },
          {
            "what": "5년 60억 달러 규모 AWS 인프라 계약 — 쓰는 클라우드 비용을 미리 묶어 단가를 낮춘 계약",
            "kind": "contract",
            "stage": "이익 기여 중",
            "since": "2026-05",
            "basis": [
              {
                "evidence_level": "sourced",
                "id": "d3a",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "배경에는 같은 날 발표한 5 년 60 억 달러 규모 AWS 계약이 있다. 이는 Snowflake 가 자사 서비스를 돌리는 AWS 인프라를 대량으로 미리 약정해 단가를 낮춘 계약으로, 여기서 나오는 비용 절감이 AI 확대에 따른 원가 압력을 상쇄한다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "5년 60억 달러 규모로 AWS 인프라를 미리 약정해 단가를 낮췄다."
              }
            ],
            "revenueImpact": [],
            "profitImpact": [
              {
                "evidence_level": "sourced",
                "id": "d3b",
                "sources": [
                  {
                    "date": "2026-06-01",
                    "publisher": "키움증권(연합인포맥스)",
                    "quote": "여기서 나오는 비용 절감이 AI 확대에 따른 원가 압력을 상쇄한다. 매출 가속과 마진 개선이 같은 방향으로 움직인 첫 분기라는 점에 의미가 있다.",
                    "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                    "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statement": "이 계약의 비용 절감이 AI 확대로 커진 원가 부담을 상쇄한다."
              }
            ],
            "expectedGrowth": [],
            "counter": []
          }
        ],
        "newsNarrative": "9월 2일 실적 발표가 최근 흐름의 출발점이다. 분기 매출이 1년 전보다 35% 늘고 회사가 연간 제품 매출 전망을 올리자, 다음 날 증권사들이 추가 상승 여지를 언급했다. 9월 28일에는 이자 0.00% 전환사채를 발행해 현금을 확보했는데, 주가가 전환가 위로 가면 신주가 나온다는 점은 부담이다. 10월 초에는 실적 발표 직후보다 주가가 4.1% 내려왔다는 보도가 나왔다.",
        "recentNews": [
          {
            "evidence_level": "sourced",
            "id": "n1",
            "sources": [
              {
                "date": "2026-09-02",
                "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                "quote": "Product revenue of $1.49 billion in the second quarter, representing 37% year-over-year growth",
                "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "9월 2일 발표한 분기 실적에서 제품 매출이 1년 전보다 37% 늘며 성장률이 더 빨라졌다."
          },
          {
            "evidence_level": "sourced",
            "id": "n2",
            "sources": [
              {
                "date": "2026-09-02",
                "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                "quote": "Product revenue of $6,070 million, representing 36% year-over-year growth, up from previous guidance of $5,840 million",
                "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "같은 날 올해 제품 매출 전망을 5,840백만 달러에서 6,070백만 달러로 올렸다."
          },
          {
            "evidence_level": "sourced",
            "id": "n3",
            "sources": [
              {
                "date": "2026-09-02",
                "publisher": "SEC EDGAR (Snowflake 8-K 첨부 실적 발표문)",
                "quote": "Remaining performance obligations of $9.00 billion, representing 30% year-over-year growth",
                "title": "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
                "url": "https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000033/fy2027q2earnings.htm",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "이미 계약해 놓고 아직 매출로 잡히지 않은 금액이 1년 전보다 30% 늘어, 앞으로의 매출 토대가 두터워졌다."
          },
          {
            "evidence_level": "sourced",
            "id": "n4",
            "sources": [
              {
                "date": "2026-09-03",
                "publisher": "CNBC",
                "quote": "Snowflake is ripping. Two analysts say there's more upside to come",
                "title": "Snowflake is ripping. Two analysts say there's more upside to come",
                "url": "https://www.cnbc.com/2026/09/03/snowflake-is-ripping-two-analysts-say-theres-more-upside-to-come.html",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "실적 다음 날 증권사 두 곳이 추가 상승 여지를 언급했다고 보도됐다."
          },
          {
            "evidence_level": "sourced",
            "id": "n5",
            "sources": [
              {
                "date": "2026-10-02",
                "publisher": "SEC EDGAR (Snowflake 8-K)",
                "quote": "On September 28, 2026, Snowflake Inc. (the \"Company\") completed its previously announced private offering (the \"Offering\") of $2.0 billion aggregate principal amount of 0.00% Convertible Senior Notes due 2029",
                "title": "Snowflake Inc. Form 8-K (2026-10-02)",
                "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000043/snow-20260928.htm",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "9월 28일 이자 0.00%인 전환사채 발행을 마쳐 현금을 확보했다."
          },
          {
            "evidence_level": "sourced",
            "id": "n6",
            "sources": [
              {
                "date": "2026-10-02",
                "publisher": "Zacks (Nasdaq)",
                "quote": "Why Is Snowflake (SNOW) Down 4.1% Since Last Earnings Report?",
                "title": "Why Is Snowflake (SNOW) Down 4.1% Since Last Earnings Report?",
                "url": "https://www.nasdaq.com/articles/why-snowflake-snow-down-41-last-earnings-report",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "10월 2일 기준으로 실적 발표 직후보다 주가가 4.1% 내려왔다는 보도가 나왔다."
          }
        ],
        "risks": [
          {
            "evidence_level": "sourced",
            "id": "r1",
            "sources": [
              {
                "date": "2026-10-02",
                "publisher": "SEC EDGAR (Snowflake 8-K)",
                "quote": "The 2029 Notes have an initial conversion price of approximately $500.38 per share, while the 2031 Notes have an initial conversion price of approximately $483.98 per share.",
                "title": "Snowflake Inc. Form 8-K (2026-10-02)",
                "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000043/snow-20260928.htm",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "전환사채의 전환가는 $500.38과 $483.98이다 — 주가가 그 위로 가면 신주가 나와 기존 주주 몫이 줄어든다."
          },
          {
            "evidence_level": "sourced",
            "id": "r2",
            "sources": [
              {
                "date": "2026-10-02",
                "publisher": "Zacks (Nasdaq)",
                "quote": "Why Is Snowflake (SNOW) Down 4.1% Since Last Earnings Report?",
                "title": "Why Is Snowflake (SNOW) Down 4.1% Since Last Earnings Report?",
                "url": "https://www.nasdaq.com/articles/why-snowflake-snow-down-41-last-earnings-report",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "좋은 실적 발표에도 그 뒤 주가가 4.1% 내려와, 실적이 곧바로 주가로 이어지지 않았다."
          },
          {
            "evidence_level": "sourced",
            "id": "r3",
            "sources": [
              {
                "date": "2026-06-01",
                "publisher": "키움증권(연합인포맥스)",
                "quote": "3) AI 비용 부담에 의한 고객들의 사용량 감소 등은 중장기적으로 관찰해야 할 지점이다.",
                "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
                "url": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxecei.pdf",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "AI 이용료 부담이 커지면 고객이 사용량을 줄일 수 있고, 사용량이 곧 매출이라 바로 타격이 된다."
          },
          {
            "evidence_level": "sourced",
            "id": "r4",
            "sources": [
              {
                "date": "2026-02-27",
                "publisher": "키움증권(연합인포맥스)",
                "quote": "- FY27 성장 둔화, RPO 단기 인식 비중 하락 속 Cortex Code가 성장 재가속의 핵심",
                "title": "[스노우플레이크 (NYS:SNOW)] 꺾이지 않은 성장, 남은 건 '증명'",
                "url": "https://rreport.einfomax.co.kr/report/eqqgemlmilqxxqzgcgxecei.pdf",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statement": "성장 재가속이 AI 신제품 하나에 크게 걸려 있어, 그 제품이 기대만큼 안 되면 성장률이 빠르게 꺾일 수 있다."
          }
        ],
        "structuralRisks": [
          "쓴 만큼 돈을 받는 구조라 고객이 데이터 처리량을 줄이면 매출이 곧바로 줄어든다.",
          "Databricks·Microsoft·Google이 같은 시장을 노리고 있어 경쟁이 상시적이다.",
          "자사 서비스를 외부 클라우드 위에서 돌려 원가가 외부 계약 조건에 좌우된다."
        ],
        "ticker": "SNOW",
        "factcheck": {
          "verdict": "partial",
          "removed": [],
          "reasons": [
            "Lead narrative references unsourced chart technical levels (pivot 384.56, 20-day MA 338.35) not present in any provided claim or source",
            "All 31 claims verify correctly against quoted text and sources",
            "Removed chart-based price threshold language from lead per verification constraint"
          ]
        },
        "consensus": {
          "saleCy": 34.92,
          "saleNy": 28.19,
          "epsCy": 77.84,
          "epsNy": 35.18,
          "cyTrend": 0.32,
          "nyTrend": 0.65
        },
        "researchedOn": "2026-10-13",
        "session": "2026-10-12",
        "carried": false,
        "source": "ondemand"
      }
    }
  ],
  "updated": "2026-10-12T22:13:30.231Z"
};
