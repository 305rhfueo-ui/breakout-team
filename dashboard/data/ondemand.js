window.ONDEMAND_DATA = {
  "items": [
    {
      "ticker": "ICLR",
      "nameKo": "아이콘",
      "sector": "Healthcare",
      "industry": "Diagnostics & Research",
      "industryRank": {
        "frank": 1,
        "frank25dChg": 2,
        "headline": "신약 개발 위탁·암 진단 기업들의 실적이 예상을 웃돌면서 진단·연구 업종이 상위를 차지했다.",
        "asOf": "2026-10-29"
      },
      "requestedOn": "2026-10-30",
      "session": "2026-10-29",
      "at": "2026-10-30T01:12:15.010Z",
      "verdict": "아니다",
      "verdictLine": "시장이 빨간불인 데다 이미 피벗 177.67 을 21% 넘겨 추격 구간이라 지금은 기준에 맞지 않는다.",
      "basis": [
        {
          "point": "시장 판정이 빨간불이고 10일선이 20일선 아래 7일째라 신규 매수를 막는 구간이다.",
          "side": "against",
          "checkRef": "차트:시장"
        },
        {
          "point": "2026-10-21 에 피벗 177.67 을 넘었고 현재가는 그보다 21.28%(4.18 하루 변동폭) 위다.",
          "side": "against",
          "checkRef": "차트:피벗 거리"
        },
        {
          "point": "최근 5일 거래량이 20일 평균의 1.62배로, 쉬면서 거래량이 마르는 모습이 아니다.",
          "side": "against",
          "checkRef": "차트:거래량 마름"
        },
        {
          "point": "상대강도가 1개월 상위 1.49%로 업종 주도주 기준은 넘는다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "3분기 순수주 3,150백만 달러, 수주잔고 24.5십억 달러로 수주 흐름은 좋다.",
          "side": "for",
          "checkRef": "n1"
        }
      ],
      "conditions": [],
      "invalidation": "예비 손절은 169.72 지만 현재가 215.48 에서 21% 아래라 지금 가격에는 쓸 수 없는 값이다. 시장이 초록으로 바뀌고 2주 이상 새 횡보 구간이 생겨 손절 폭이 하루 변동폭 5.09% 안으로 좁혀지면 이 판단을 다시 봐야 한다.",
      "dataLimits": "기관 보유 자료 없음 · 국내 증권사 리포트와 8-K 공시 0건 · 코드 체크표의 최근 분기 이익은 9월 8일자 요약값이라 3분기 실적 반영 전 숫자다",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": true,
        "reasons": [
          {
            "key": "market_red",
            "ko": "시장 판정이 빨간불이다 (신규 매수 금지 구간)"
          },
          {
            "key": "post_breakout",
            "ko": "이미 피벗 177.67 을 넘었다(2026-10-21) — 넘은 뒤에 사는 것은 추격이다"
          }
        ],
        "asOf": {
          "bar": "2026-10-29",
          "market": "2026-10-28"
        }
      },
      "setup": {
        "state": "post",
        "grade": "B",
        "pivot": 177.67,
        "stop": 169.72,
        "distToPivotPct": 21.28,
        "distToPivotAdr": 4.18,
        "riskPerSharePct": 4.47,
        "extensionAdr": 2.64,
        "adrPct": 5.09,
        "breakDate": "2026-10-21",
        "chase": false,
        "metrics": {
          "baseBars": 40,
          "baseWeeks": 8,
          "depthPct": 11.8,
          "priorMovePct": 52.5,
          "higherLows": 0,
          "contraction": 0.95,
          "closeRange10Adr": 1.4,
          "surf10": 0.8,
          "surf20": 0.79,
          "slope20": 0.37,
          "baseLow": 156.7,
          "lastSwingLow": 157.38
        },
        "reasons": [
          "선행 상승 +53%",
          "베이스 8주",
          "깊이 11.8%",
          "✗ 저점 상승 0회",
          "진폭 0.95배 · 10일 종가폭 1.4 ADR",
          "10일선 +0.8 ADR · 20일선 +0.8 ADR",
          "20일선 기울기 +0.37%"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 53% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 8주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 0.95배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 11.8% · ADR 5.09%의 2.3배 · 선행 상승의 절반 26%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 215.48 · 20일선 176.13 · 50일선 171.22"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.62배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "미충족",
            "evidence": "2026-10-21 돌파봉 거래량 = 20일 평균의 1.26배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "이미 2026-10-21 피벗 177.67 돌파 — 추격 구간"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 4.47% · ADR 5.09%"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위 2.6 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 빨강"
          }
        ],
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순이익 전년비 -64.3% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "사이트 최근 3분기 순이익 -64%/-35%/-166% — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 100%"
          },
          {
            "item": "S 수급",
            "status": "충족",
            "evidence": "최근 5일 거래량 1.62배(20일 평균 대비) · 오늘 거래대금 4.6배(상승일) · 상장주식 77M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 1.49% · 3M 3.2% · 6M 3.74% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 빨강 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "ICLR",
        "fetchedAt": "2026-10-29",
        "source": "한국투자증권 Open API",
        "per": 388.75,
        "pbr": 1.76,
        "eps": 0.55,
        "bps": 121.55,
        "shares": 77154200,
        "marketCapM": 16523,
        "high52": 214.94,
        "high52Date": "2026-10-28",
        "low52": 66.57,
        "low52Date": "2026-02-12",
        "last": 214.16,
        "prevClose": 182.98,
        "nameKo": "아이콘",
        "nameEn": "ICON PLC",
        "listedOn": null,
        "exchange": "나스닥",
        "listedShares": 77154200
      },
      "estimates": {
        "ticker": "ICLR",
        "url": "https://finance.yahoo.com/quote/ICLR/analysis/",
        "fetchedAt": "2026-10-29",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-12-31",
            "eps": 2.88,
            "epsLow": 2.72,
            "epsHigh": 3.02,
            "epsYearAgo": 2.52,
            "epsAnalysts": 14,
            "epsGrowth": 14.2,
            "epsCur": "USD",
            "rev": 2029377500,
            "revAnalysts": 13,
            "revYearAgo": 2112517000,
            "revGrowth": -3.9,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2027-03-31",
            "eps": 2.74,
            "epsLow": 2.6,
            "epsHigh": 2.84,
            "epsYearAgo": 2.5,
            "epsAnalysts": 10,
            "epsGrowth": 9.8,
            "epsCur": "USD",
            "rev": 2059004760,
            "revAnalysts": 9,
            "revYearAgo": 2033999000,
            "revGrowth": 1.2,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "eps": 10.54,
            "epsLow": 10.41,
            "epsHigh": 10.66,
            "epsYearAgo": 12.53,
            "epsAnalysts": 16,
            "epsGrowth": -15.9,
            "epsCur": "USD",
            "rev": 8145217280,
            "revAnalysts": 17,
            "revYearAgo": 8251340000,
            "revGrowth": -1.3,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "eps": 11.77,
            "epsLow": 10.88,
            "epsHigh": 12.48,
            "epsYearAgo": 10.54,
            "epsAnalysts": 18,
            "epsGrowth": 11.7,
            "epsCur": "USD",
            "rev": 8451837410,
            "revAnalysts": 16,
            "revYearAgo": 8145217280,
            "revGrowth": 3.8,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 2.88,
            "d7": 1,
            "d30": 1.2,
            "d90": 0.6,
            "ago90": 2.86,
            "up7": 2,
            "up30": 4,
            "down7": 1,
            "down30": 2
          },
          {
            "period": "+1q",
            "endDate": "2027-03-31",
            "cur": "USD",
            "now": 2.74,
            "d7": 0,
            "d30": -0.8,
            "d90": -0.1,
            "ago90": 2.75,
            "up7": 1,
            "up30": 1,
            "down7": 1,
            "down30": 1
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 10.54,
            "d7": -0.2,
            "d30": -0.4,
            "d90": -0.9,
            "ago90": 10.64,
            "up7": 1,
            "up30": 1,
            "down7": 2,
            "down30": 4
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "cur": "USD",
            "now": 11.77,
            "d7": 0,
            "d30": -0.3,
            "d90": -0.7,
            "ago90": 11.85,
            "up7": 1,
            "up30": 1,
            "down7": 3,
            "down30": 5
          }
        ],
        "surprises": [
          {
            "quarter": "2026-09-30",
            "actual": 2.66,
            "estimate": 2.63,
            "surprisePct": 1.3,
            "cur": "USD"
          },
          {
            "quarter": "2026-06-30",
            "actual": 2.56,
            "estimate": 2.52,
            "surprisePct": 1.7,
            "cur": "USD"
          },
          {
            "quarter": "2026-03-31",
            "actual": 2.5,
            "estimate": 2.43,
            "surprisePct": 3.1,
            "cur": "USD"
          },
          {
            "quarter": "2025-12-31",
            "actual": 2.52,
            "estimate": 3.11,
            "surprisePct": -18.9,
            "cur": "USD"
          }
        ],
        "beats": 3,
        "ratings": {
          "upgrades": 0,
          "downgrades": 0,
          "initiations": 0,
          "ptRaised": 2,
          "ptLowered": 1,
          "total": 3,
          "recent": [
            {
              "date": "2026-09-18",
              "firm": "Citigroup",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Lowers",
              "pt": 175,
              "ptPrior": 180
            },
            {
              "date": "2026-07-31",
              "firm": "Citigroup",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 180,
              "ptPrior": 165
            },
            {
              "date": "2026-07-31",
              "firm": "Truist Securities",
              "action": "reit",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 209,
              "ptPrior": 207
            }
          ]
        },
        "nextEarnings": {
          "date": "2026-10-27",
          "upcoming": false,
          "estimated": false
        }
      },
      "cnbc": [],
      "detail": {
        "fetchedAt": "2026-10-30",
        "nameKo": "아이콘",
        "nameEn": "ICON PLC",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001060955&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-09-30",
              "derived": false,
              "revenue": 2024757000,
              "profit": 198841000,
              "netIncome": 122130000,
              "margin": 9.8,
              "yoy": {
                "revenue": -2.9,
                "profit": 189.2,
                "netIncome": 143,
                "priorEnd": "2025-09-30"
              }
            },
            {
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 2063486000,
              "profit": 137829000,
              "netIncome": 72582000,
              "margin": 6.7,
              "yoy": {
                "revenue": 1.2,
                "profit": -40.3,
                "netIncome": -64.3,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 2033999000,
              "profit": 173734000,
              "netIncome": 104751000,
              "margin": 8.5,
              "yoy": {
                "revenue": 0.9,
                "profit": -23.5,
                "netIncome": -34.9,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 2112517000,
              "profit": 207847000,
              "netIncome": 149194000,
              "margin": 9.8,
              "yoy": {
                "revenue": 2.5,
                "profit": -37.1,
                "netIncome": -49.4,
                "priorEnd": "2024-12-31"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "What Icon (ICLR) Said on Its Q3 Earnings Call",
              "url": "https://www.nasdaq.com/articles/what-icon-iclr-said-its-q3-earnings-call",
              "date": "2026-10-28",
              "publisher": "MarketBeat"
            },
            {
              "title": "ICON (ICLR) Q3 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/icon-iclr-q3-2026-earnings-call-transcript",
              "date": "2026-10-28",
              "publisher": "The Motley Fool"
            },
            {
              "title": "ICON plc Reports $2.15 Billion Senior Notes Issuance and Debt Repayments",
              "url": "https://www.nasdaq.com/articles/icon-plc-reports-215-billion-senior-notes-issuance-and-debt-repayments",
              "date": "2026-10-28",
              "publisher": "Fintel"
            },
            {
              "title": "ICON Public Limited Company Reports Third Quarter 2026 Results",
              "url": "https://www.nasdaq.com/articles/icon-public-limited-company-reports-third-quarter-2026-results",
              "date": "2026-10-28",
              "publisher": "Fintel"
            },
            {
              "title": "Icon PLC (ICLR) Q3 Earnings and Revenues Beat Estimates",
              "url": "https://www.nasdaq.com/articles/icon-plc-iclr-q3-earnings-and-revenues-beat-estimates",
              "date": "2026-10-27",
              "publisher": "Zacks"
            },
            {
              "title": "Analysts Estimate Icon PLC (ICLR) to Report a Decline in Earnings: What to Look Out for",
              "url": "https://www.nasdaq.com/articles/analysts-estimate-icon-plc-iclr-report-decline-earnings-what-look-out",
              "date": "2026-10-20",
              "publisher": "Zacks"
            },
            {
              "title": "Icon PLC (ICLR) Up 2.5% Since Last Earnings Report: Can It Continue?",
              "url": "https://www.nasdaq.com/articles/icon-plc-iclr-25-last-earnings-report-can-it-continue",
              "date": "2026-08-28",
              "publisher": "Zacks"
            },
            {
              "title": "Is ICON a Buy as Valuation Improves but Earnings Risks Still Persist?",
              "url": "https://www.nasdaq.com/articles/icon-buy-valuation-improves-earnings-risks-still-persist",
              "date": "2026-08-06",
              "publisher": "Zacks"
            }
          ]
        },
        "filings": [],
        "krReports": {
          "total": 0,
          "reports": []
        }
      },
      "rank": {
        "m1": 1.49,
        "m3": 3.2,
        "m6": 3.74
      },
      "yahooNews": [
        {
          "title": "UBS Adjusts Price Target on ICON to $236 From $195, Maintains Neutral Rating",
          "url": "https://finance.yahoo.com/markets/stocks/articles/ubs-adjusts-price-target-icon-141407234.html",
          "date": "2026-10-29",
          "publisher": "MT Newswires",
          "via": "Yahoo"
        },
        {
          "title": "Deutsche Bank Adjusts ICON Price Target to $250 From $200, Maintains Buy Rating",
          "url": "https://finance.yahoo.com/markets/stocks/articles/deutsche-bank-adjusts-icon-price-114836987.html",
          "date": "2026-10-29",
          "publisher": "MT Newswires",
          "via": "Yahoo"
        },
        {
          "title": "RBC Raises Price Target on ICON to $226 From $185, Keeps Outperform Rating",
          "url": "https://finance.yahoo.com/markets/stocks/articles/rbc-raises-price-target-icon-113841574.html",
          "date": "2026-10-29",
          "publisher": "MT Newswires",
          "via": "Yahoo"
        },
        {
          "title": "Truist Securities Adjusts Price Target on ICON to $268 From $209, Keeps Buy Rating",
          "url": "https://finance.yahoo.com/markets/stocks/articles/truist-securities-adjusts-price-target-101019674.html",
          "date": "2026-10-29",
          "publisher": "MT Newswires",
          "via": "Yahoo"
        },
        {
          "title": "ICON (ICLR) Could Be 15% Overvalued After Record Wins And Fresh Buyback",
          "url": "https://finance.yahoo.com/markets/stocks/articles/icon-iclr-could-15-overvalued-071140953.html",
          "date": "2026-10-29",
          "publisher": "Simply Wall St.",
          "via": "Yahoo"
        },
        {
          "title": "Icon PLC (ICLR) (Q3 2026) Earnings Call Highlights: Record $3. ...",
          "url": "https://finance.yahoo.com/healthcare/articles/icon-plc-iclr-q3-2026-230512171.html",
          "date": "2026-10-28",
          "publisher": "GuruFocus.com",
          "via": "Yahoo"
        }
      ],
      "teamView": {
        "seojun": {
          "asOf": "2026-10-29",
          "grade": "B",
          "state": "post",
          "watch": false,
          "blocked": null,
          "distToPivotPct": 20.54
        },
        "doyun": {
          "lists": [
            "거래대금 상위",
            "RS(1MO)"
          ],
          "lead": "ICLR은 10월 28일 발표한 3분기 실적이 예상치를 웃돌면서 주가가 올랐다. 다음 분기에도 이익 개선이 이어지는지 확인되지 않으면 이 반등은 일회성에 그칠 수 있다.",
          "researchedOn": "2026-10-29"
        },
        "jaemin": {
          "category": "어닝 서프라이즈/가이던스 상향",
          "why": "10월 27일 발표한 3분기 실적이 시장 예상을 웃돌았고 회사가 올해 전망도 높였습니다. 이 소식이 반영된 28일에 거래량이 평소보다 크게 늘었습니다.",
          "researchedOn": "2026-10-29"
        },
        "holding": null
      },
      "market": {
        "verdict": "red",
        "ko": "🔴 10일선이 20일선 아래 7일째(2026-10-19부터) — 새로 사지 않고, 들고 있는 것도 정리 검토",
        "finra": "warn",
        "finraKo": "⚠️ 빚내서 산 주식(마진부채)이 1년 전보다 +31.4% — 주의선 +30% 초과"
      },
      "verified": {
        "checked": 6,
        "ok": 24,
        "unverified": 0,
        "dead": 0,
        "stripped": 0
      },
      "numberCut": 0,
      "deep": {
        "status": "done",
        "ticker": "ICLR",
        "company": "ICON(아이콘)은 제약·바이오 회사의 임상시험을 대신 설계하고 운영해 주는 아일랜드 본사의 위탁 연구기관(CRO)이다. 고객은 대형 제약사와 바이오텍이며, 수주를 받아 쌓아 둔 잔고를 시간을 두고 매출로 바꾼다. 최근에는 임상 속도를 높인다는 AI 기반 디지털 플랫폼을 성장 축으로 내세우고 있다.",
        "lead": "ICLR은 3분기 수주가 크게 늘었지만 지금 가격은 매수 기준에서 벗어나 있다. 가장 강한 근거는 분기 순수주 3,150백만 달러와 24.5십억 달러까지 늘어난 수주잔고다. 가장 큰 걱정은 매출이 1년 전보다 2.9% 줄었고 조정 기준 이익도 떨어졌다는 점이다. 시장 신호등이 초록으로 바뀌고 새 횡보 구간과 새 피벗이 생기는지가 이 그림을 다시 볼 기준이다.",
        "newsNarrative": "10월 27일 발표한 3분기 실적이 주가를 끌어올렸다. 매출은 2,024.8백만 달러로 1년 전보다 2.9% 줄었지만, 새로 따낸 수주가 3,150백만 달러로 북투빌 1.56배를 기록했다. 회사는 올해 전망을 매출 8,100~8,200백만 달러, 조정 희석 EPS 10.35~10.65달러로 제시하고 3분기에 400.0백만 달러어치 자사주를 사들였다. 발표 다음 날 증권사들이 목표주가를 잇따라 올렸다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "3분기 순수주가 3,150백만 달러, 북투빌 1.56배로 늘었고 수주잔고는 24.5십억 달러가 됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Reports Third Quarter 2026 Results",
                "publisher": "ICON plc (finanznachrichten.de 게재)",
                "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                "date": "2026-10-27",
                "quote": "Strong commercial performance with net business wins in the quarter of $3,150 million; a net book-to-bill of 1.56x and closing backlog of $24.5 billion, up 4.8% sequentially.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n2",
            "statement": "3분기 매출은 2,024.8백만 달러로 1년 전보다 2.9% 줄었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Reports Third Quarter 2026 Results",
                "publisher": "ICON plc (finanznachrichten.de 게재)",
                "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                "date": "2026-10-27",
                "quote": "Revenue for the third quarter was $2,024.8 million. This represents a decrease of 2.9% on quarter three 2025",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n3",
            "statement": "회사는 올해 전망을 매출 8,100~8,200백만 달러, 조정 희석 EPS 10.35~10.65달러로 갱신했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Reports Third Quarter 2026 Results",
                "publisher": "ICON plc (finanznachrichten.de 게재)",
                "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                "date": "2026-10-27",
                "quote": "Updating 2026 full-year financial guidance issued with revenue expected in the range of $8,100 $8,200 million and adjusted diluted earnings per share* expected in the range of $10.35 $10.65.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n4",
            "statement": "3분기에 자사주 400.0백만 달러어치를 평균 170달러에 매입해 주주에게 돌려줬다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Reports Third Quarter 2026 Results",
                "publisher": "ICON plc (finanznachrichten.de 게재)",
                "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                "date": "2026-10-27",
                "quote": "$400.0 million worth of stock repurchased in quarter three at an average price of $170 per share",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "8월에 2.15십억 달러 규모 투자등급 채권을 발행했고 9월 말 순부채는 2.6십억 달러다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Reports Third Quarter 2026 Results",
                "publisher": "ICON plc (finanznachrichten.de 게재)",
                "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                "date": "2026-10-27",
                "quote": "In August 2026, ICON completed a successful investment grade bond issuance of $2.15 billion. … Net debt as at September 30, 2026 was $2.6 billion.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n6",
            "statement": "실적 발표 다음 날 증권사들이 목표주가를 올렸다 — 도이체방크는 200달러에서 250달러로 높였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Deutsche Bank Adjusts ICON Price Target to $250 From $200, Maintains Buy Rating",
                "publisher": "MT Newswires (Yahoo Finance 게재)",
                "url": "https://finance.yahoo.com/markets/stocks/articles/deutsche-bank-adjusts-icon-price-114836987.html",
                "date": "2026-10-29",
                "quote": "Deutsche Bank Adjusts ICON Price Target to $250 From $200, Maintains Buy Rating",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "매출은 줄고 수주는 늘어난 분기였다. 3분기 매출은 2,024.8백만 달러로 1년 전보다 2.9% 감소했다. 같은 기간 새로 따낸 수주는 3,150백만 달러, 수주잔고는 24.5십억 달러까지 쌓였다. 회사가 내놓은 올해 전망은 매출 8,100~8,200백만 달러, 조정 희석 EPS 10.35~10.65달러다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f1",
              "statement": "3분기 매출 2,024.8백만 달러로 1년 전보다 2.9% 줄어 매출 감소가 이어졌다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "ICON Reports Third Quarter 2026 Results",
                  "publisher": "ICON plc (finanznachrichten.de 게재)",
                  "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                  "date": "2026-10-27",
                  "quote": "Revenue for the third quarter was $2,024.8 million. This represents a decrease of 2.9% on quarter three 2025",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f2",
              "statement": "총수주 3,789백만 달러는 1년 전보다 26.9% 늘었고 취소 639백만 달러를 뺀 순수주가 3,150백만 달러다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "ICON Reports Third Quarter 2026 Results",
                  "publisher": "ICON plc (finanznachrichten.de 게재)",
                  "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                  "date": "2026-10-27",
                  "quote": "In quarter three 2026, gross bookings were $3,789 million, an increase of 26.9% on quarter three 2025, with cancellations of $639 million. This resulted in net business wins of $3,150 million and a book-to-bill of 1.56x. Backlog as at September 30, 2026 was $24.5 billion.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "f3",
              "statement": "회사는 사업 구성이 좋아지고 비용을 조인 덕에 조정 EBITDA 가 전 분기보다 3% 늘었다고 밝혔다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "ICON Reports Third Quarter 2026 Results",
                  "publisher": "ICON plc (finanznachrichten.de 게재)",
                  "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                  "date": "2026-10-27",
                  "quote": "Adjusted EBITDA grew 3% sequentially, reflecting improved business mix and strong cost discipline, while sustained commercial excellence supported another quarter of exceptional bookings performance.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f4",
              "statement": "조정 기준으로는 3분기 이익과 매출이 모두 떨어졌다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "ICON Q3 Non-GAAP Earnings, Revenue Fall; Lifts 2026 Guidance",
                  "publisher": "MT Newswires (Yahoo Finance 게재)",
                  "url": "https://finance.yahoo.com/healthcare/articles/icon-q3-non-gaap-earnings-212258927.html",
                  "date": "2026-10-27",
                  "quote": "ICON Q3 Non-GAAP Earnings, Revenue Fall; Lifts 2026 Guidance",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "guidance": [
            {
              "id": "f5",
              "statement": "회사 가이던스(회사가 내놓은 전망)는 올해 매출 8,100~8,200백만 달러, 조정 희석 EPS 10.35~10.65달러다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "ICON Reports Third Quarter 2026 Results",
                  "publisher": "ICON plc (finanznachrichten.de 게재)",
                  "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                  "date": "2026-10-27",
                  "quote": "Updating 2026 full-year financial guidance issued with revenue expected in the range of $8,100 $8,200 million and adjusted diluted earnings per share* expected in the range of $10.35 $10.65.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "mixed",
            "claims": [
              {
                "id": "f6",
                "statement": "실적 뒤 트루이스트는 목표주가를 209달러에서 268달러로 올리며 매수 의견을 유지했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Truist Securities Adjusts Price Target on ICON to $268 From $209, Keeps Buy Rating",
                    "publisher": "MT Newswires (Yahoo Finance 게재)",
                    "url": "https://finance.yahoo.com/markets/stocks/articles/truist-securities-adjusts-price-target-101019674.html",
                    "date": "2026-10-29",
                    "quote": "Truist Securities Adjusts Price Target on ICON to $268 From $209, Keeps Buy Rating",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "f7",
                "statement": "UBS 는 목표주가를 195달러에서 236달러로 올렸지만 투자의견은 중립을 유지했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "UBS Adjusts Price Target on ICON to $236 From $195, Maintains Neutral Rating",
                    "publisher": "MT Newswires (Yahoo Finance 게재)",
                    "url": "https://finance.yahoo.com/markets/stocks/articles/ubs-adjusts-price-target-icon-141407234.html",
                    "date": "2026-10-29",
                    "quote": "UBS Adjusts Price Target on ICON to $236 From $195, Maintains Neutral Rating",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        },
        "estimatesNarrative": "애널리스트들은 목표주가는 올렸지만 이익 추정치는 아직 내리는 쪽이다. 올해(2026-12-31 결산) EPS 추정은 10.54달러로 1년 전 12.53달러보다 15.9% 낮고, 최근 30일 동안 0.4% 내렸다(상향 1명·하향 4명). 반면 이번 분기 추정은 30일간 1.2% 올랐고, 3분기 실적은 2.66달러로 추정 2.63달러를 1.3% 넘겨 최근 4분기 중 3번 예상을 웃돌았다.",
        "newDrivers": [
          {
            "what": "분기 수주 급증 — 새로 따낸 임상시험 계약이 크게 늘어 수주잔고가 불어났다",
            "kind": "contract",
            "stage": "매출 발생 중",
            "since": "2026-10-27",
            "basis": [
              {
                "id": "d1",
                "statement": "3분기 순수주 3,150백만 달러, 북투빌 1.56배로 수주가 크게 늘었다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "ICON Reports Third Quarter 2026 Results",
                    "publisher": "ICON plc (finanznachrichten.de 게재)",
                    "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                    "date": "2026-10-27",
                    "quote": "Strong commercial performance with net business wins in the quarter of $3,150 million; a net book-to-bill of 1.56x and closing backlog of $24.5 billion, up 4.8% sequentially.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "d2",
                "statement": "총수주가 3,789백만 달러로 1년 전보다 26.9% 늘었고 수주잔고는 24.5십억 달러까지 쌓였다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "ICON Reports Third Quarter 2026 Results",
                    "publisher": "ICON plc (finanznachrichten.de 게재)",
                    "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                    "date": "2026-10-27",
                    "quote": "In quarter three 2026, gross bookings were $3,789 million, an increase of 26.9% on quarter three 2025, with cancellations of $639 million. This resulted in net business wins of $3,150 million and a book-to-bill of 1.56x. Backlog as at September 30, 2026 was $24.5 billion.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "d3",
                "statement": "사업 구성 개선과 비용 통제로 조정 EBITDA 가 전 분기보다 3% 늘었다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "ICON Reports Third Quarter 2026 Results",
                    "publisher": "ICON plc (finanznachrichten.de 게재)",
                    "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                    "date": "2026-10-27",
                    "quote": "Adjusted EBITDA grew 3% sequentially, reflecting improved business mix and strong cost discipline, while sustained commercial excellence supported another quarter of exceptional bookings performance.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [
              {
                "id": "d4",
                "statement": "회사 가이던스 기준 2026년 매출은 8,100~8,200백만 달러, 조정 희석 EPS 는 10.35~10.65달러다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "ICON Reports Third Quarter 2026 Results",
                    "publisher": "ICON plc (finanznachrichten.de 게재)",
                    "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                    "date": "2026-10-27",
                    "quote": "Updating 2026 full-year financial guidance issued with revenue expected in the range of $8,100 $8,200 million and adjusted diluted earnings per share* expected in the range of $10.35 $10.65.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "d5",
                "statement": "수주가 늘어도 3분기 매출은 2,024.8백만 달러로 1년 전보다 2.9% 줄었다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "ICON Reports Third Quarter 2026 Results",
                    "publisher": "ICON plc (finanznachrichten.de 게재)",
                    "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                    "date": "2026-10-27",
                    "quote": "Revenue for the third quarter was $2,024.8 million. This represents a decrease of 2.9% on quarter three 2025",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d6",
                "statement": "같은 분기에 고객이 취소한 과제가 639백만 달러로, 따낸 수주가 그대로 남지 않는다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "ICON Reports Third Quarter 2026 Results",
                    "publisher": "ICON plc (finanznachrichten.de 게재)",
                    "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                    "date": "2026-10-27",
                    "quote": "In quarter three 2026, gross bookings were $3,789 million, an increase of 26.9% on quarter three 2025, with cancellations of $639 million. This resulted in net business wins of $3,150 million and a book-to-bill of 1.56x. Backlog as at September 30, 2026 was $24.5 billion.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "AI 기반 디지털 플랫폼 — 임상시험의 생산성·예측 가능성·속도를 높인다는 자체 서비스",
            "kind": "service",
            "stage": "매출 발생 중",
            "since": "",
            "basis": [
              {
                "id": "d7",
                "statement": "최고경영자는 고객 상당수가 이 플랫폼 때문에 ICON 을 고른다고 말했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "ICON Reports Third Quarter 2026 Results",
                    "publisher": "ICON plc (finanznachrichten.de 게재)",
                    "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                    "date": "2026-10-27",
                    "quote": "I am particularly pleased that our AI-enabled digital platform continues to resonate with customers, many of whom choose ICON because of its impact on productivity, predictability and speed.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": []
          }
        ],
        "nNarrative": "새로운 것은 신제품이 아니라 새로 따낸 계약이다. 3분기 순수주가 3,150백만 달러, 북투빌 1.56배로 늘면서 수주잔고가 24.5십억 달러까지 쌓였다. 이익 쪽에서는 사업 구성 개선과 비용 통제로 조정 EBITDA 가 전 분기보다 3% 늘었다. 기대 성장은 회사 가이던스 기준 올해 매출 8,100~8,200백만 달러, 조정 희석 EPS 10.35~10.65달러다. 고객들이 선택 이유로 꼽는다는 AI 기반 디지털 플랫폼이 더해지지만 그 매출·이익 기여를 보여 주는 숫자는 확인되지 않았다. 따낸 수주가 실제 매출로 바뀌는지가 관건으로, 3분기 매출은 아직 1년 전보다 2.9% 줄었고 취소도 639백만 달러 있었다.",
        "nVerdict": "충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "충족",
            "evidence": "3분기(2026-09-30) 영업이익 전년비 +189.2% · 순이익 +143% · 매출은 -2.9% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 4분기 영업이익 전년비 +189.2%/-40.3%/-23.5%/-37.1% — 네 분기가 모두 플러스는 아니다. 3년 추세·ROE 는 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "3분기 순수주 3,150백만 달러·수주잔고 24.5십억 달러 + AI 기반 디지털 플랫폼 · 참고로 52주 고점 근처"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 1.62배로 기준 0.7 이하를 넘었다 · 오늘 거래대금은 20일 평균의 4.6배(상승일) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1개월 1.49% · 3개월 3.2% · 6개월 3.74% · 기준 상위 20% · 진단·연구 업종 순위 1위"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "시장 판정 빨강 · 빚내서 산 주식이 1년 전보다 +31.4%로 주의선 초과"
          }
        ],
        "risks": [
          {
            "id": "r1",
            "statement": "매출이 1년 전보다 2.9% 줄어 수주 증가가 아직 매출로 이어지지 않았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Reports Third Quarter 2026 Results",
                "publisher": "ICON plc (finanznachrichten.de 게재)",
                "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                "date": "2026-10-27",
                "quote": "Revenue for the third quarter was $2,024.8 million. This represents a decrease of 2.9% on quarter three 2025",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r2",
            "statement": "조정 기준 3분기 이익과 매출이 함께 떨어졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Q3 Non-GAAP Earnings, Revenue Fall; Lifts 2026 Guidance",
                "publisher": "MT Newswires (Yahoo Finance 게재)",
                "url": "https://finance.yahoo.com/healthcare/articles/icon-q3-non-gaap-earnings-212258927.html",
                "date": "2026-10-27",
                "quote": "ICON Q3 Non-GAAP Earnings, Revenue Fall; Lifts 2026 Guidance",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r3",
            "statement": "9월 말 순부채가 2.6십억 달러로, 자사주 매입과 함께 빚 부담이 남아 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON Reports Third Quarter 2026 Results",
                "publisher": "ICON plc (finanznachrichten.de 게재)",
                "url": "https://www.finanznachrichten.de/nachrichten-2026-10/69952489-icon-plc-icon-reports-third-quarter-2026-results-004.htm",
                "date": "2026-10-27",
                "quote": "Net debt as at September 30, 2026 was $2.6 billion.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r4",
            "statement": "수주 기록과 자사주 매입에도 지금 주가가 비싸다는 평가가 나왔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ICON (ICLR) Could Be 15% Overvalued After Record Wins And Fresh Buyback",
                "publisher": "Simply Wall St. (Yahoo Finance 게재)",
                "url": "https://finance.yahoo.com/markets/stocks/articles/icon-iclr-could-15-overvalued-071140953.html",
                "date": "2026-10-29",
                "quote": "ICON (ICLR) Could Be 15% Overvalued After Record Wins And Fresh Buyback",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "매출이 제약사의 임상 개발 예산에 달려 있어 고객이 과제를 줄이면 바로 영향을 받는다.",
          "따낸 임상시험은 중간에 취소될 수 있어 총수주가 그대로 매출로 남지 않는다.",
          "수주잔고가 매출로 바뀌는 데 시간이 걸려 수주 증가와 매출 반등 사이에 시차가 있다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 52.5% · 기준 30% 이상"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 8주(40봉) · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 0.95배(1 미만이면 폭이 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 11.8% · 하루 변동폭 5.09%의 2.3배 · 선행 상승 52.5%의 절반 아래"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 215.48 · 20일선 176.13 · 50일선 171.22 · 150일선 150.95"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 1.62배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "미충족",
            "evidence": "2026-10-21 돌파봉 거래량이 20일 평균의 1.26배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "2026-10-21 에 피벗 177.67 을 넘었고 현재가는 그보다 21.28%(4.18 하루 변동폭) 위"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 4.47% · 하루 변동폭 5.09% 안"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위 2.64 하루 변동폭 · 기준 2 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "시장 판정 빨강 — 10일선이 20일선 아래 7일째"
          }
        ],
        "chartObservation": {
          "base": "9월 초부터 10월 중순까지 8주(40봉) 동안 좁은 구간에 머물렀다. 그 구간의 저점은 156.7 이고 고점 대비 깊이는 11.8%로 하루 변동폭 5.09%의 2.3배다. 다만 저점이 높아진 횟수가 0회이고 진폭은 0.95배로 거의 줄지 않았다.",
          "volume": "횡보 구간이던 10월 16~20일 거래량은 66.8만~93.6만 주였다. 10월 28일에는 394.7만 주로 크게 늘었고 다음 날도 179.5만 주였다. 그 결과 최근 5일 거래량이 20일 평균의 1.62배로 오히려 늘어난 상태다.",
          "position": "현재가 215.48 은 피벗 177.67 보다 21.28% 위이고, 하루 변동폭으로 재면 4.18배 떨어져 있다. 예비 손절 169.72 도 현재가보다 한참 아래라 지금 가격에는 맞지 않는 값이다. 10일선 기준으로도 2.64 하루 변동폭만큼 떠 있다.",
          "maStack": "종가 215.48 이 20일선 176.13, 50일선 171.22, 150일선 150.95 를 모두 위에서 지나고 있다. 20일선 기울기는 +0.37%로 올라가는 중이고 50일선과의 거리는 25.85%다.",
          "note": "그림에서도 8주 횡보 뒤 10월 28일에 긴 양봉과 함께 거래량 막대가 한 번 크게 솟는 모습이 보인다. 그림과 숫자가 일치한다."
        },
        "entryChecklist": [
          "시장 판정이 빨간불에서 벗어나 10일선이 20일선 위로 올라서는지",
          "현재가 215.48 이 피벗 177.67 보다 21.28% 높은 상태에서, 2주 이상 새로 쉬는 구간이 생겨 새 피벗이 만들어지는지",
          "10일선 위 2.64 하루 변동폭인 이격이 2 하루 변동폭 이하로 좁아지는지",
          "최근 5일 거래량이 20일 평균의 1.62배에서 0.7배 이하로 줄어드는지",
          "다음 분기(2026-12-31 결산)에 매출이 전년비 -3.9% 추정을 넘어 돌아서는지"
        ],
        "earningsRisk": "3분기 실적은 2026년 10월 27일에 이미 발표됐고, 확정된 실적 발표 일정 없음(달력 기준). 다음 결산은 2026년 12월 31일 분기로, 발표일이 잡히면 그 전에 들어가지 않는 것이 규칙이다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": [
            "모든 claim의 숫자·날짜가 quote와 정확히 일치 (3,150백만 달러, 1.56배, 24.5십억 달러, 2,024.8백만 달러, 2.9%, 639백만 달러 등)",
            "단위 환산 정확 (백만=million, 십억=billion)",
            "모든 증권사 목표주가 조정 내용 확인 (도이체방크 200→250, 트루이스트 209→268, UBS 195→236)",
            "출처의 title·date·quote가 모두 statement를 뒷받침",
            "서술문(lead·newsNarrative·financialsNarrative·nNarrative)의 모든 숫자가 유지된 claim에서만 나옴",
            "AI 플랫폼 주장은 CEO 직접 인용으로 명확히 근거됨"
          ]
        },
        "consensus": {
          "saleCy": -1.36,
          "saleNy": 3.39,
          "epsCy": -15.7,
          "epsNy": 11.41,
          "cyTrend": -0.14,
          "nyTrend": -0.26
        },
        "researchedOn": "2026-10-30",
        "session": "2026-10-29",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "TSLA",
      "nameKo": "테슬라",
      "sector": "Consumer Cyclical",
      "industry": "Auto Manufacturers",
      "industryRank": null,
      "requestedOn": "2026-10-28",
      "session": "2026-10-27",
      "at": "2026-10-28T03:54:29.214Z",
      "verdict": "아니다",
      "verdictLine": "시장이 빨간불이고 쉬는 구간이 없어 넘으면 사는 선이 없으며, 영업이익도 56% 줄어 지금 기준에 맞지 않는다",
      "basis": [
        {
          "point": "시장 판정이 빨강이라 신규 매수를 막는 구간이다.",
          "side": "against",
          "checkRef": "차트:시장"
        },
        {
          "point": "쉬는 구간이 없어 넘으면 사는 선도 예비 손절도 계산되지 않는다.",
          "side": "against",
          "checkRef": "차트:횡보 길이"
        },
        {
          "point": "최근 분기 순이익이 전년비 -4.9%로 기준 +25%에 크게 못 미친다.",
          "side": "against",
          "checkRef": "CANSLIM:C"
        },
        {
          "point": "상대강도는 1개월 상위 7.44%, 3개월 상위 6%로 주도주 기준을 넘는다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "프리몬트 Optimus 양산 시작으로 새로운 성장 동력이 출처로 확인된다.",
          "side": "for",
          "checkRef": "b1"
        }
      ],
      "conditions": [],
      "invalidation": "2주 이상의 쉬는 구간이 새로 생기면서 저점이 높아지고 거래량이 20일 평균의 0.7배 이하로 마르는데도 보지 않았다면 이 판단이 틀린 것이다. 쉬는 구간이 없어 예비 손절 값은 계산되지 않았다.",
      "dataLimits": "기관 보유 자료가 없고 CNBC 기사 본문은 열리지 않아 제목만 확인했다. 쉬는 구간이 없어 피벗·손절·베이스 지표 자체가 계산되지 않았고, 다른 팀 의견도 비어 있다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": true,
        "reasons": [
          {
            "key": "market_red",
            "ko": "시장 판정이 빨간불이다 (신규 매수 금지 구간)"
          },
          {
            "key": "no_base",
            "ko": "쉬는 구간(베이스)이 없어 넘으면 사는 선(피벗)이 없다"
          }
        ],
        "asOf": {
          "bar": "2026-10-27",
          "market": "2026-10-27"
        }
      },
      "setup": {
        "state": "none",
        "grade": null,
        "pivot": null,
        "stop": null,
        "distToPivotPct": null,
        "distToPivotAdr": null,
        "riskPerSharePct": null,
        "extensionAdr": 2.63,
        "adrPct": 2.95,
        "breakDate": null,
        "chase": false,
        "metrics": null,
        "reasons": [
          "쉬는 구간 없음"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "미충족",
            "evidence": "3개월 최대상승 29% (약함) · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "저점 높아짐",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "깊이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 407.46 · 20일선 374.31 · 50일선 366.12"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.24배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "피벗 거리",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "손절 폭",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위 2.6 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 빨강"
          }
        ],
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순이익 전년비 -4.9% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "사이트 최근 3분기 순이익 -5%/17%/-60% — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 82%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 1.24배(20일 평균 대비) · 오늘 거래대금 1.3배(상승일) · 상장주식 3953M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 7.44% · 3M 6% · 6M 54.42% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 빨강 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "TSLA",
        "fetchedAt": "2026-10-28",
        "source": "한국투자증권 Open API",
        "per": 448.2,
        "pbr": 18.04,
        "eps": 0.91,
        "bps": 22.59,
        "shares": 3952760000,
        "marketCapM": 1610592,
        "high52": 498.83,
        "high52Date": "2025-12-22",
        "low52": 297.38,
        "low52Date": "2026-07-29",
        "last": 407.46,
        "prevClose": 391.62,
        "nameKo": "테슬라",
        "nameEn": "TESLA INC",
        "listedOn": null,
        "exchange": "나스닥",
        "listedShares": 3952760000
      },
      "estimates": {
        "ticker": "TSLA",
        "url": "https://finance.yahoo.com/quote/TSLA/analysis/",
        "fetchedAt": "2026-10-28",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-12-31",
            "eps": 0.5,
            "epsLow": 0.34,
            "epsHigh": 0.88,
            "epsYearAgo": 0.5,
            "epsAnalysts": 28,
            "epsGrowth": 0.7,
            "epsCur": "USD",
            "rev": 29322961330,
            "revAnalysts": 28,
            "revYearAgo": 24901000000,
            "revGrowth": 17.8,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2027-03-31",
            "eps": 0.46,
            "epsLow": 0.28,
            "epsHigh": 0.9,
            "epsYearAgo": 0.41,
            "epsAnalysts": 13,
            "epsGrowth": 12.2,
            "epsCur": "USD",
            "rev": 26501696410,
            "revAnalysts": 15,
            "revYearAgo": 22387000000,
            "revGrowth": 18.4,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "eps": 1.74,
            "epsLow": 1.17,
            "epsHigh": 2.28,
            "epsYearAgo": 1.66,
            "epsAnalysts": 35,
            "epsGrowth": 4.8,
            "epsCur": "USD",
            "rev": 107787605400,
            "revAnalysts": 43,
            "revYearAgo": 94827000000,
            "revGrowth": 13.7,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "eps": 2.16,
            "epsLow": 1.03,
            "epsHigh": 4.13,
            "epsYearAgo": 1.74,
            "epsAnalysts": 33,
            "epsGrowth": 23.8,
            "epsCur": "USD",
            "rev": 122322999010,
            "revAnalysts": 43,
            "revYearAgo": 107787605400,
            "revGrowth": 13.5,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 0.5,
            "d7": 3.6,
            "d30": 2.3,
            "d90": 1.4,
            "ago90": 0.5,
            "up7": 1,
            "up30": 3,
            "down7": 3,
            "down30": 5
          },
          {
            "period": "+1q",
            "endDate": "2027-03-31",
            "cur": "USD",
            "now": 0.46,
            "d7": -1.1,
            "d30": 0.5,
            "d90": -0.7,
            "ago90": 0.46,
            "up7": 0,
            "up30": 0,
            "down7": 1,
            "down30": 4
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 1.74,
            "d7": -0.2,
            "d30": -1.2,
            "d90": -2.1,
            "ago90": 1.78,
            "up7": 2,
            "up30": 4,
            "down7": 4,
            "down30": 9
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "cur": "USD",
            "now": 2.16,
            "d7": -0.6,
            "d30": -0.8,
            "d90": -2.8,
            "ago90": 2.22,
            "up7": 1,
            "up30": 1,
            "down7": 3,
            "down30": 10
          }
        ],
        "surprises": [
          {
            "quarter": "2026-09-30",
            "actual": 0.48,
            "estimate": 0.45,
            "surprisePct": 6.4,
            "cur": "USD"
          },
          {
            "quarter": "2026-06-30",
            "actual": 0.33,
            "estimate": 0.54,
            "surprisePct": -39.2,
            "cur": "USD"
          },
          {
            "quarter": "2026-03-31",
            "actual": 0.41,
            "estimate": 0.35,
            "surprisePct": 17.2,
            "cur": "USD"
          },
          {
            "quarter": "2025-12-31",
            "actual": 0.5,
            "estimate": 0.45,
            "surprisePct": 11,
            "cur": "USD"
          }
        ],
        "beats": 3,
        "ratings": {
          "upgrades": 3,
          "downgrades": 0,
          "initiations": 0,
          "ptRaised": 11,
          "ptLowered": 2,
          "total": 27,
          "recent": [
            {
              "date": "2026-10-26",
              "firm": "Barclays",
              "action": "up",
              "from": "Equal-Weight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 450,
              "ptPrior": 370
            },
            {
              "date": "2026-10-22",
              "firm": "UBS",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 425,
              "ptPrior": 391
            },
            {
              "date": "2026-10-22",
              "firm": "CLSA",
              "action": "up",
              "from": "Underperform",
              "to": "Hold",
              "ptAction": "Raises",
              "pt": 400,
              "ptPrior": 310
            },
            {
              "date": "2026-10-22",
              "firm": "Canaccord Genuity",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 442,
              "ptPrior": 410
            },
            {
              "date": "2026-10-22",
              "firm": "Morgan Stanley",
              "action": "main",
              "from": "Equal-Weight",
              "to": "Equal-Weight",
              "ptAction": "Raises",
              "pt": 410,
              "ptPrior": 400
            },
            {
              "date": "2026-10-22",
              "firm": "BNP Paribas",
              "action": "up",
              "from": "Underperform",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 420,
              "ptPrior": 266
            },
            {
              "date": "2026-10-22",
              "firm": "RBC Capital",
              "action": "reit",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Maintains",
              "pt": 480,
              "ptPrior": 480
            },
            {
              "date": "2026-10-22",
              "firm": "JP Morgan",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 430,
              "ptPrior": 415
            },
            {
              "date": "2026-10-22",
              "firm": "TD Cowen",
              "action": "reit",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Maintains",
              "pt": 460,
              "ptPrior": 460
            },
            {
              "date": "2026-10-22",
              "firm": "Piper Sandler",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 475,
              "ptPrior": 450
            }
          ]
        },
        "nextEarnings": {
          "date": "2026-10-21",
          "upcoming": false,
          "estimated": false
        }
      },
      "cnbc": [
        {
          "title": "SpaceX, Tesla and Anthropic may reshape the S&P 500—but not right away",
          "url": "https://www.cnbc.com/make-it/2026/10/27/spacex-tesla-anthropic-and-sp-500-index-rules.html",
          "date": "2026-10-27",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves midday: Lockheed, JetBlue, CoreWeave, Surgery Partners & more",
          "url": "https://www.cnbc.com/2026/10/26/stocks-making-the-biggest-moves-midday-lockheed-jetblue-coreweave-surgery-partners-more.html",
          "date": "2026-10-26",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Monday's big analyst calls: Tesla, Nvidia, SpaceX, Apple, Ross, Lockheed Martin",
          "url": "https://www.cnbc.com/2026/10/26/monday-biggest-wall-street-analyst-calls-like-tesla.html",
          "date": "2026-10-26",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Buy Tesla ahead of potential SpaceX merger, says Barclays",
          "url": "https://www.cnbc.com/2026/10/26/tesla-spacex-merger-barclays.html",
          "date": "2026-10-26",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Texas Senate race: New Talarico ad rips Elon Musk 'dark money' push",
          "url": "https://www.cnbc.com/2026/10/23/james-talarico-campaign-ad-elon-musk-texas-senate-election.html",
          "date": "2026-10-23",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "With earnings in rearview mirror, SpaceX-Tesla merger chatter takes center stage",
          "url": "https://www.cnbc.com/2026/10/23/spacex-tesla-merger-chatter-takes-center-stage-after-earnings.html",
          "date": "2026-10-23",
          "publisher": "CNBC",
          "kind": "article"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-28",
        "nameKo": "테슬라",
        "nameEn": "TESLA INC",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318605&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-09-30",
              "derived": false,
              "revenue": 28046000000,
              "profit": 718000000,
              "netIncome": 787000000,
              "margin": 2.6,
              "yoy": {
                "revenue": -0.2,
                "profit": -55.8,
                "netIncome": -42.7,
                "priorEnd": "2025-09-30"
              }
            },
            {
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 28236000000,
              "profit": 398000000,
              "netIncome": 1114000000,
              "margin": 1.4,
              "yoy": {
                "revenue": 25.5,
                "profit": -56.9,
                "netIncome": -4.9,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 22387000000,
              "profit": 941000000,
              "netIncome": 477000000,
              "margin": 4.2,
              "yoy": {
                "revenue": 15.8,
                "profit": 135.8,
                "netIncome": 16.6,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 24901000000,
              "profit": 1409000000,
              "netIncome": 901000000,
              "margin": 5.7,
              "yoy": {
                "revenue": -3.1,
                "profit": -11,
                "netIncome": -58.9,
                "priorEnd": "2024-12-31"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "3 Types of Investors Who Should Avoid SpaceX and Tesla Stocks as the Companies Explore a Potential Merger",
              "url": "https://www.nasdaq.com/articles/3-types-investors-who-should-avoid-spacex-and-tesla-stocks-companies-explore-potential",
              "date": "2026-10-27",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Tesla's Q3 Per-Car Fiscal Metrics Show Minor but Important Progress",
              "url": "https://www.nasdaq.com/articles/teslas-q3-car-fiscal-metrics-show-minor-important-progress",
              "date": "2026-10-27",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Zacks Investment Ideas feature highlights: SpaceX and Tesla",
              "url": "https://www.nasdaq.com/articles/zacks-investment-ideas-feature-highlights-spacex-and-tesla",
              "date": "2026-10-27",
              "publisher": "Zacks"
            },
            {
              "title": "In a SpaceX-Tesla Merger, Tesla Shareholders Might Be the Junior Partner",
              "url": "https://www.nasdaq.com/articles/spacex-tesla-merger-tesla-shareholders-might-be-junior-partner",
              "date": "2026-10-27",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Elon Musk Reveals the Real Reason He Hasn't Confirmed a SpaceX-Tesla Merger Will Happen",
              "url": "https://www.nasdaq.com/articles/elon-musk-reveals-real-reason-he-hasnt-confirmed-spacex-tesla-merger-will-happen",
              "date": "2026-10-27",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Elon Musk Says Merging SpaceX and Tesla Would Be a Good Idea. Here's What Investors Should Know.",
              "url": "https://www.nasdaq.com/articles/elon-musk-says-merging-spacex-and-tesla-would-be-good-idea-heres-what-investors-should",
              "date": "2026-10-27",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Tesla Is Investing Aggressively in its Next Generation Technology",
              "url": "https://www.nasdaq.com/articles/tesla-investing-aggressively-its-next-generation-technology",
              "date": "2026-10-27",
              "publisher": "The Motley Fool"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-10-21",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026066738/tsla-20261021.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-10-02",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026064366/tsla-20261002.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-29",
            "itemsKo": [
              "중요 계약 체결",
              "1.02",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026063820/tsla-20260929.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-22",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049213/tsla-20260722.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-02",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026046717/tsla-20260702.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-22",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026026551/tsla-20260422.htm"
          }
        ],
        "krReports": {
          "total": 34,
          "reports": [
            {
              "date": "2026-10-23",
              "broker": "신한투자증권",
              "analyst": "함형도",
              "title": "[테슬라 (NAS:TSLA)] 신사업 수익 가시성 확보에 주목",
              "summary": "- 자금 조달과 현금흐름 우려 상존하지만 FSD 확산과 로보택시 수익화로 우려는 점차 완화될 것. 27년 하반기부터 본격적인 성장 모멘텀 반영 기대- 3분기 매출액 280억달러(-0.2%, 이하 YoY), GPM +19.6%(+1.6%p), Adj-EPS 0.48달러(-4%)로 컨센대비 각각 -0.3%, +1.9%p, +10% 달성- [자동차] 매출액 206억달러(-3%), 크레딧 제외 GPM +18.1%(+2.7%p) 기록. 차량 판매량 48.7만대(3Q25 49.7만대, 2Q26 48.0만대) 기록. APAC 지역 판매 증가와 FSD 구독 매출 증가로 마진율 방어",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgqcmzzexexiqgcgxecgl.pdf",
              "pages": "4"
            },
            {
              "date": "2026-10-23",
              "broker": "iM증권",
              "analyst": "이상수",
              "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
              "summary": "- ① Automotive: 매출액 매출액 205.6억달러 (-3.0% YoY) 실적 기록. 26.3Q 차량 인도 대수는 486,532대 (-2.1% YoY, +1.3% QoQ)로 2개 분기 연속 48만대를 상회했으나, 탄소 규제 크레딧 매출이 1.13억달러로 전년 동기 4.17억달러 대비 72.9% 급감- ② Energy Generation & Storage: 매출액 28.8억달러 (-15.6% YoY) 실적 기록. 26.3Q 설치용량은 13.7GWh (+9.6% YoY)로 역대 두번째 수준이었으나, 관세 관련 고객 환불이 매출에서 차감되며 외형은 감소- ③ Service and Others: 매출액 46.1억달러 (+32.5% YoY) 실적 기록. 동사업부 매출총이익은 7.3억달러로 사상 최대를 기록했고, GPM은 15.9%로 직전 분기 14.1% 대비 1.8%p 개선",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
              "pages": "9"
            },
            {
              "date": "2026-10-22",
              "broker": "대신증권",
              "analyst": "김회재",
              "title": "[테슬라 (NAS:TSLA)] 기대에 못 미친 실적, 로보택시·옵티머스 실행 구체화",
              "summary": "- 차량 판매 예상 상회했지만 매출은 전년 수준에 정체- 로보택시·옵티머스·테라팹 실행계획 구체화. 향후 수익화가 핵심- 스페이스X와의 합병 공식 검토 시작, 두 기업 간 AI 역할 분담 가능성",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgqeexelcgikxgcgxecgl.pdf",
              "pages": "13"
            },
            {
              "date": "2026-10-22",
              "broker": "키움증권",
              "analyst": "김승혁",
              "title": "[테슬라 (NAS:TSLA)] 자동차 UP vs 에너지 Down",
              "summary": "- 테슬라는 전기차를 기반으로 FSD·로보택시·ESS·로봇 사업을 확장하는 기업- FY3Q26은 크레딧 감소에도 마진이 개선됐으나 에너지 매출이 부진- 투자와 주요 일정이 2027년으로 넘어간 만큼 규제 승인과 합병 조건 확인이 필요",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgqcqcqqgzzzggcgxecgl.pdf",
              "pages": "7"
            },
            {
              "date": "2026-10-22",
              "broker": "한화증권",
              "analyst": "박제인",
              "title": "[테슬라 (NAS:TSLA)] Earnings Flash",
              "summary": "- 매출액 280억 달러(YoY -0.2%), 조정 EPS 0.48달러(YoY -4%)로 예상치 0.3% 하회, 9.6% 상회- *FSD 유료 가입·구매 고객 174만 명(YoY +67%). 북미 신규 인도 차량의 75% 이상이 출고 시 FSD 유료 구독 신청- AI·로보틱스 투자비 증가에 따른 수익성 악화와 CAPEX 가이던스 하향에 따른 성장 둔화 우려로 시간 외 -3.3%",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgxzclgmckxkqgcgxecgl.pdf",
              "pages": "1"
            },
            {
              "date": "2026-10-22",
              "broker": "하나증권",
              "analyst": "송선재",
              "title": "[테슬라 (NAS:TSLA)] 마진은 바닥 통과, 시선은 로보택시와 스페이스X로",
              "summary": "- 3Q26 실적: 판매 -2% (YoY), 매출액 flat, EPS $0.48(vs. 컨센서스 $0.44)- 실적 발표의 내용: 자동차는 증설 목표 구체화, 로보택시는 확장, 옵티머스는 속도 조절- 시사점: 마진은 바닥 통과, 주가는 당분간 자율주행/합병 이슈에 연동",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgxkzkgmqlkqkgcgxecgl.pdf",
              "pages": "8"
            },
            {
              "date": "2026-10-22",
              "broker": "신영증권",
              "analyst": "문용권",
              "title": "[테슬라 (NAS:TSLA)] 차세대 성장을 견인할 신사업을 준비하는 시간",
              "summary": "- 매출 $280억(전년동기 대비 -0.2%), 영업이익 $7.2억(-56%), 영업이익률 2.6%- 북미 FSD 채택률이 75%(2Q 대비 약 +20%P), 로봇택시는 2027년 기대- 2027년 기대 요인: 로보택시 확대와 Optimus 외부 판매 개시",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgxkkiekilzkzgcgxecgl.pdf",
              "pages": "5"
            },
            {
              "date": "2026-10-21",
              "broker": "대신증권",
              "analyst": "조재운",
              "title": "[테슬라 (NAS:TSLA)] [26Q3 Review] 설비투자(CapEx) 가이던스 5분기 만에 첫 하향, 투자의견 중립 유지",
              "summary": "- 조정 EPS 0.48달러로 컨센 0.44 상회- FCF 15.3억 흑자, IBES -49억 추정 반전- CapEx 가이던스 250억→200억 첫 하향",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgxigmgzgzkelgcgxecgl.pdf",
              "pages": "10"
            }
          ]
        }
      },
      "rank": {
        "m1": 7.44,
        "m3": 6,
        "m6": 54.42
      },
      "yahooNews": [
        {
          "title": "‘Where Are The Cybercabs?’ Tesla Investor Ross Gerber Takes Aim at Elon Musk as Amazon’s Zoox Eyes Expansion With Santa Monica Deal for 150 Robotaxis",
          "url": "https://finance.yahoo.com/technology/articles/where-cybercabs-tesla-investor-ross-023011208.html",
          "date": "2026-10-28",
          "publisher": "Benzinga",
          "via": "Yahoo"
        },
        {
          "title": "TSLA Stock Rises As Cybercabs Overtake Model Ys In Authorized Texas Robotaxi Fleet",
          "url": "https://finance.yahoo.com/markets/stocks/articles/tsla-stock-rises-cybercabs-overtake-223957703.html",
          "date": "2026-10-27",
          "publisher": "Stocktwits",
          "via": "Yahoo"
        },
        {
          "title": "Scott Galloway Warns Tesla Is the ‘Patient’ and SpaceX Its ‘Organ Donor’ in Elon Musk’s $3.5 Trillion Merger Plan: 'Real Merger With a Fake Premise'",
          "url": "https://finance.yahoo.com/markets/stocks/articles/scott-galloway-warns-tesla-patient-213018121.html",
          "date": "2026-10-27",
          "publisher": "Benzinga",
          "via": "Yahoo"
        },
        {
          "title": "Has Space Exploration Technologies (SPCX) Become Fully Valued Following Its $3.42b Shelf Filing?",
          "url": "https://finance.yahoo.com/markets/stocks/articles/space-exploration-technologies-spcx-become-210745055.html",
          "date": "2026-10-27",
          "publisher": "Simply Wall St.",
          "via": "Yahoo"
        },
        {
          "title": "Tesla Stock Rises In A Buy Range; Musk Touts Cybercab Fleet Expansion",
          "url": "https://finance.yahoo.com/m/85f94354-9e71-320a-a15d-a3a35ca2bddb/tesla-stock-rises-in-a-buy.html",
          "date": "2026-10-27",
          "publisher": "Investor's Business Daily",
          "via": "Yahoo"
        },
        {
          "title": "Want to Test Tesla’s Full Self-Driving? Rent It on Turo.",
          "url": "https://finance.yahoo.com/m/090e3be6-8740-3fee-8c26-265560ecca31/want-to-test-tesla%E2%80%99s-full.html",
          "date": "2026-10-27",
          "publisher": "Barrons.com",
          "via": "Yahoo"
        }
      ],
      "teamView": {
        "seojun": null,
        "doyun": null,
        "jaemin": null,
        "holding": null
      },
      "market": {
        "verdict": "red",
        "ko": "🔴 10일선이 20일선 아래 6일째(2026-10-19부터) — 새로 사지 않고, 들고 있는 것도 정리 검토",
        "finra": "warn",
        "finraKo": "⚠️ 빚내서 산 주식(마진부채)이 1년 전보다 +31.4% — 주의선 +30% 초과"
      },
      "verified": {
        "checked": 6,
        "ok": 28,
        "unverified": 0,
        "dead": 0,
        "stripped": 0
      },
      "numberCut": 0,
      "deep": {
        "status": "done",
        "ticker": "TSLA",
        "company": "테슬라는 전기차를 팔아 매출 대부분을 번다 — 3분기 자동차 부문이 205.6억달러로 전체 280.5억달러의 큰 축이다. 여기에 에너지 저장장치와 충전·보험 같은 서비스 매출이 붙는다. 최근 성장 축은 자율주행 구독(FSD)과 로보택시, 휴머노이드 로봇 Optimus 쪽으로 옮겨가는 중이다.",
        "lead": "지금 테슬라는 실적이 아니라 합병과 로봇 기대로 움직이고 있다. 새로운 것이 실제로 돌아가기 시작한 건 사실로, Optimus 양산이 시작됐고 FSD 유료 고객은 174만명으로 늘었다. 다만 본업은 매출 280.5억달러로 제자리인데 영업이익이 56% 줄어 이익률이 2.6%까지 내려왔다. 합병안이 주주총회에서 부결되면 지금 붙은 프리미엄 기대는 사라진다.",
        "newsNarrative": "10월 21일 3분기 실적이 나온 뒤 시선은 곧바로 합병으로 옮겨갔다. 실적 자체는 매출 280.5억달러로 제자리였지만 조정 EPS 0.48달러가 예상을 웃돌았다. 같은 자리에서 설비투자 계획이 250억 달러에서 200억 달러로 낮아지며 성장 둔화 우려가 나왔다. 이어 양사 이사회가 합병 검토 특별위원회를 꾸린 사실이 알려지고 바클레이즈가 투자의견을 올리면서 합병이 당장의 주가 재료가 됐다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "3분기 매출 280.5억달러로 1년 전과 같은 수준이었고 조정 EPS 0.48달러는 4.0% 줄었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                "publisher": "iM증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                "date": "2026-10-23",
                "quote": "Tesla는 26.3Q 매출액 280.5억달러 (-0.2% YoY), 조정 EPS 0.48달러 (-4.0% YoY) 등의 실적을 기록했다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n2",
            "statement": "머스크가 프리몬트 공장에서 양산 품질 수준의 Optimus 생산이 시작됐다고 실적 발표에서 확인했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                "publisher": "iM증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                "date": "2026-10-23",
                "quote": "26.3Q 어닝콜에서는 Optimus의 양산이 공식적으로 확인되었다. 일론 머스크는 프리몬트 공장에서 양산 품질 수준이 확보된 Optimus 생산이 시작되었으며, 생산 설비의 구축 또한 대부분 완료되었다고 밝혔다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n3",
            "statement": "테슬라와 SpaceX 이사회가 각각 합병 검토를 위한 특별위원회를 구성했다고 머스크가 밝혔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                "publisher": "iM증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                "date": "2026-10-23",
                "quote": "일론 머스크는 Tesla와 SpaceX 이사회가 각각 합병 검토를 위한 특별위원회를 구성했다고 밝혔다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n4",
            "statement": "설비투자 가이던스를 250억 달러에서 200억 달러로 처음 낮췄다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] [26Q3 Review] 설비투자(CapEx) 가이던스 5분기 만에 첫 하향, 투자의견 중립 유지",
                "publisher": "대신증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgxigmgzgzkelgcgxecgl.pdf",
                "date": "2026-10-21",
                "quote": "- CapEx 가이던스 250억→200억 첫 하향",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "FSD 유료 가입·구매 고객이 174만 명으로 1년 전보다 67% 늘었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] Earnings Flash",
                "publisher": "한화증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgxzclgmckxkqgcgxecgl.pdf",
                "date": "2026-10-22",
                "quote": "- *FSD 유료 가입·구매 고객 174만 명(YoY +67%). 북미 신규 인도 차량의 75% 이상이 출고 시 FSD 유료 구독 신청",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n6",
            "statement": "바클레이즈가 합병 가능성을 앞세워 테슬라 투자의견을 올렸다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Buy Tesla ahead of potential SpaceX merger, says Barclays",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/10/26/tesla-spacex-merger-barclays.html",
                "date": "2026-10-26",
                "quote": "Buy Tesla ahead of potential SpaceX merger, says Barclays",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "매출은 1년째 제자리인데 이익은 반 토막이다. 3분기 매출은 280.5억달러로 전년비 0.2% 줄었고 영업이익은 7.2억달러로 56% 감소해 영업이익률이 2.6%다. 부문별로는 서비스·기타가 46.1억달러로 32.5% 늘었지만 에너지가 28.8억달러로 15.6% 줄며 외형을 깎았다. 다만 크레딧을 뺀 자동차 매출총이익률은 18.1%로 직전 분기 16.3%보다 1.8%p 올라 마진 쪽은 되돌아오는 흐름이다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f1",
              "statement": "3분기 매출 280.5억달러로 전년 동기 대비 0.2% 줄며 성장이 멈췄다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                  "publisher": "iM증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                  "date": "2026-10-23",
                  "quote": "Tesla는 26.3Q 매출액 280.5억달러 (-0.2% YoY), 조정 EPS 0.48달러 (-4.0% YoY) 등의 실적을 기록했다.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f2",
              "statement": "서비스·기타가 46.1억달러로 32.5% 늘어난 반면 에너지는 28.8억달러로 15.6% 줄었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                  "publisher": "iM증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                  "date": "2026-10-23",
                  "quote": "② Energy Generation & Storage: 매출액 28.8억달러 (-15.6% YoY) 실적 기록. 26.3Q 설치용량은 13.7GWh (+9.6% YoY)로 역대 두번째 수준이었으나, 관세 관련 고객 환불이 매출에서 차감되며 외형은 감소- ③ Service and Others: 매출액 46.1억달러 (+32.5% YoY) 실적 기록.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "f3",
              "statement": "3분기 영업이익은 7.2억달러로 56% 줄었고 영업이익률은 2.6%에 그쳤다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[테슬라 (NAS:TSLA)] 차세대 성장을 견인할 신사업을 준비하는 시간",
                  "publisher": "신영증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgxkkiekilzkzgcgxecgl.pdf",
                  "date": "2026-10-22",
                  "quote": "- 매출 $280억(전년동기 대비 -0.2%), 영업이익 $7.2억(-56%), 영업이익률 2.6%",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f4",
              "statement": "크레딧을 뺀 자동차 매출총이익률은 18.1%로 직전 분기 16.3%보다 1.8%p 올랐다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                  "publisher": "iM증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                  "date": "2026-10-23",
                  "quote": "그럼에도 크레딧 제외 Automotive GPM은 18.1%로 직전 분기 16.3% 대비 1.8%p 개선.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "guidance": [
            {
              "id": "f5",
              "statement": "회사가 설비투자 가이던스를 250억 달러에서 200억 달러로 낮췄다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[테슬라 (NAS:TSLA)] [26Q3 Review] 설비투자(CapEx) 가이던스 5분기 만에 첫 하향, 투자의견 중립 유지",
                  "publisher": "대신증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgxigmgzgzkelgcgxecgl.pdf",
                  "date": "2026-10-21",
                  "quote": "- CapEx 가이던스 250억→200억 첫 하향",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f6",
              "statement": "회사는 로보택시 수익이 2H27에 크게 기여할 것이라고 언급했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[테슬라 (NAS:TSLA)] 신사업 수익 가시성 확보에 주목",
                  "publisher": "신한투자증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgqcmzzexexiqgcgxecgl.pdf",
                  "date": "2026-10-23",
                  "quote": "신사업의 실적 기여 시점 확인 필요한데, 로보택시 수익이 2H27에 크게 기여할 것으로 언급.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "mixed",
            "claims": [
              {
                "id": "f7",
                "statement": "바클레이즈는 합병 가능성을 이유로 투자의견을 올렸다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Buy Tesla ahead of potential SpaceX merger, says Barclays",
                    "publisher": "CNBC",
                    "url": "https://www.cnbc.com/2026/10/26/tesla-spacex-merger-barclays.html",
                    "date": "2026-10-26",
                    "quote": "Buy Tesla ahead of potential SpaceX merger, says Barclays",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "f8",
                "statement": "대신증권은 설비투자 가이던스 첫 하향을 들어 투자의견 중립을 유지했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] [26Q3 Review] 설비투자(CapEx) 가이던스 5분기 만에 첫 하향, 투자의견 중립 유지",
                    "publisher": "대신증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgxigmgzgzkelgcgxecgl.pdf",
                    "date": "2026-10-21",
                    "quote": "[테슬라 (NAS:TSLA)] [26Q3 Review] 설비투자(CapEx) 가이던스 5분기 만에 첫 하향, 투자의견 중립 유지",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        },
        "estimatesNarrative": "애널리스트들은 올해·내년 전망치를 조금씩 낮추는 쪽이다. 올해 EPS 전망 1.74달러는 30일 전보다 1.2% 낮고, 같은 기간 하향 9명에 상향 4명이었다. 반면 직전 분기 실적은 예상을 6.4% 웃돌았는데, 매출이 늘어서가 아니라 원가 절감과 FSD 구독 부가 매출로 마진이 올라온 덕이다.",
        "newDrivers": [
          {
            "what": "휴머노이드 로봇 Optimus — 프리몬트 공장에서 양산 품질 로봇 생산을 시작한 신제품",
            "kind": "product",
            "stage": "출시",
            "since": "2026-10",
            "basis": [
              {
                "id": "b1",
                "statement": "3분기 실적 발표에서 프리몬트 공장의 Optimus 양산 시작이 공식 확인됐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                    "publisher": "iM증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "26.3Q 어닝콜에서는 Optimus의 양산이 공식적으로 확인되었다. 일론 머스크는 프리몬트 공장에서 양산 품질 수준이 확보된 Optimus 생산이 시작되었으며, 생산 설비의 구축 또한 대부분 완료되었다고 밝혔다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [
              {
                "id": "g1",
                "statement": "회사는 연간 100만대 생산이 가능하고 2027년 말부터 외부 고객 공급을 목표한다고 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                    "publisher": "iM증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "덱스트러스 등 양산을 늦추는 병목이 존재함은 인정했으나, 그럼에도 연간 100만대 생산량이 가능하고, 2027년 말부터 외부고객에게 Optimus 공급을 목표하고 있다는 점도 확인되었다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "c1",
                "statement": "머스크 스스로 덱스트러스 등 양산을 늦추는 병목이 있다고 인정했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                    "publisher": "iM증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "덱스트러스 등 양산을 늦추는 병목이 존재함은 인정했으나, 그럼에도 연간 100만대 생산량이 가능하고, 2027년 말부터 외부고객에게 Optimus 공급을 목표하고 있다는 점도 확인되었다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "자율주행 구독 FSD와 Austin에서 운행을 시작한 Cybercab 로보택시 — 차를 판 뒤에도 돈을 받는 서비스",
            "kind": "service",
            "stage": "매출 발생 중",
            "since": "2026-09",
            "basis": [
              {
                "id": "b2",
                "statement": "지난달 Austin에서 Cybercab 로보택시 운행이 시작됐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                    "publisher": "iM증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "지난달 Austin에서 운행을 시작한 Cybercab 로보택시 매출 역시 동사업부에 포함되나, 실적 기여도는 크지 않은 것으로 파악됨.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "r1",
                "statement": "FSD 활성 고객이 174만명으로 늘었고 북미 신차 인도 시 유료 가입률이 75%를 넘었다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] 신사업 수익 가시성 확보에 주목",
                    "publisher": "신한투자증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqcmzzexexiqgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "FSD 활성 고객은 174만명(3Q25 104만, 2Q26 148만)으로 확대. 북미 지역의 신차 인도 시 유료 FSD 구독 가입률이 75%(+20%p) 이상 기록",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "p1",
                "statement": "FSD 구독 매출 증가로 크레딧 제외 자동차 매출총이익률이 18.1%로 2.7%p 올랐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] 신사업 수익 가시성 확보에 주목",
                    "publisher": "신한투자증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqcmzzexexiqgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "[자동차] 매출액 206억달러(-3%), 크레딧 제외 GPM +18.1%(+2.7%p) 기록. 차량 판매량 48.7만대(3Q25 49.7만대, 2Q26 48.0만대) 기록. APAC 지역 판매 증가와 FSD 구독 매출 증가로 마진율 방어.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [
              {
                "id": "g2",
                "statement": "신한투자증권은 로보택시 수익이 2H27에 크게 기여할 것이라는 회사 언급과 마일당 0.3달러 비용 목표를 전했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] 신사업 수익 가시성 확보에 주목",
                    "publisher": "신한투자증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqcmzzexexiqgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "신사업의 실적 기여 시점 확인 필요한데, 로보택시 수익이 2H27에 크게 기여할 것으로 언급. 비용 목표인 0.3달러/마일로 감축 중(현재 운임 1.4달러/마일 수준). 27년 로보택시 모멘텀 기대",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "c2",
                "statement": "Austin 로보택시 매출의 실적 기여도는 아직 크지 않은 것으로 파악됐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                    "publisher": "iM증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "지난달 Austin에서 운행을 시작한 Cybercab 로보택시 매출 역시 동사업부에 포함되나, 실적 기여도는 크지 않은 것으로 파악됨.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "SpaceX와의 합병 검토 — 양사 이사회가 특별위원회를 꾸려 지배구조 자체가 바뀔 수 있는 변화",
            "kind": "management",
            "stage": "발표만",
            "since": "2026-10",
            "basis": [
              {
                "id": "b3",
                "statement": "양사 이사회가 각각 합병 검토 특별위원회를 구성했고 위원회는 머스크를 뺀 독립 이사로 꾸려진다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                    "publisher": "iM증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "일론 머스크는 Tesla와 SpaceX 이사회가 각각 합병 검토를 위한 특별위원회를 구성했다고 밝혔다. 해당 특별위원회는 이해상충 당사자인 일론 머스크를 제외한 독립 이사로 구성될 예정이다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": [
              {
                "id": "c3",
                "statement": "합병은 양사 주주총회 의결을 거쳐야 하고 부결될 가능성이 있다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                    "publisher": "iM증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                    "date": "2026-10-23",
                    "quote": "단 전술한바와 같이 합병은 양사 주주총회의 의결을 모두 거쳐야 한다. Tesla에 대한 일론 머스크의 실제 지배력은 20% 수준이기에, 주주총회에서 합병 안건이 부결될 가능성은 존재하기에, 합병 안건의 통과에 대한 시나리오 분석이 필요하다고 판단된다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        ],
        "nNarrative": "새로운 것은 셋이다 — 프리몬트에서 시작된 Optimus 양산, Austin의 Cybercab 로보택시, SpaceX 합병 검토. 매출로 실제 돈이 되고 있는 것은 아직 FSD 구독뿐이다. FSD 활성 고객은 174만명으로 늘었고 북미 신차 인도 시 유료 가입률이 75%를 넘었다. 이익에서도 FSD 부가 매출 덕에 크레딧 제외 자동차 매출총이익률이 18.1%로 2.7%p 올랐다. 기대 성장은 아직 회사 목표에 기대고 있다 — Optimus는 연간 100만대 생산과 2027년 말 외부 공급, 로보택시는 2H27 수익 기여다. 확인할 것은 Optimus 양산 병목이 풀리는지와 로보택시 매출이 실제 숫자로 잡히는 시점이다.",
        "nVerdict": "충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순이익 전년비 -4.9% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 3분기 순이익 전년비 -5%/17%/-60% — 모두 늘지 않았다. 3년 추세·ROE 는 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "프리몬트 Optimus 양산 시작 · FSD 유료 고객 174만 명(전년비 +67%) · 참고: 52주 고점의 82%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 1.24배(20일 평균 대비) · 오늘 거래대금 1.3배(상승일) · 상장주식 3953M주 · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 7.44% · 3M 6% · 6M 54.42% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 빨강 · 빚내서 산 주식(마진부채)이 1년 전보다 +31.4%"
          }
        ],
        "risks": [
          {
            "id": "k1",
            "statement": "AI·로보틱스 투자비 증가와 설비투자 가이던스 하향으로 성장 둔화 우려가 나와 시간외 주가가 3.3% 떨어졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] Earnings Flash",
                "publisher": "한화증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgxzclgmckxkqgcgxecgl.pdf",
                "date": "2026-10-22",
                "quote": "- AI·로보틱스 투자비 증가에 따른 수익성 악화와 CAPEX 가이던스 하향에 따른 성장 둔화 우려로 시간 외 -3.3%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "k2",
            "statement": "27년 대규모 자금 집행으로 현금흐름 우려가 남아 있고 Terafab에만 장기적으로 1천억달러 이상이 필요하다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] 신사업 수익 가시성 확보에 주목",
                "publisher": "신한투자증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgqcmzzexexiqgcgxecgl.pdf",
                "date": "2026-10-23",
                "quote": "FCF는 2Q -11억달러, 3Q +15억달러(-62%)로 개선. 26년 CapEx 축소 때문이지만, 27년 대규모 자금 집행으로 현금흐름 우려 상존. SpaceX와 분담 예정인 Terafab만 28년 초까지 수백억달러에서 장기적으로 1천억달러 이상 필요.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "k3",
            "statement": "합병이 성사되면 주주는 1주 1의결권을 포기하고 머스크 단독 과반 의결권 체제를 받아들이게 된다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                "publisher": "iM증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                "date": "2026-10-23",
                "quote": "위와 같은 합병 성공 시나리오에서 Tesla 주주는 20~40% 수준의 프리미엄과 함께 합병법인 지분 42~49%를 받게 되나 (기존 Tesla 주주 수령 프리미엄 0~30% 기준), 그 대가로 1주 1의결권을 포기하고 머스크 단독 과반 의결권 체제를 받아들이게 된다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "k4",
            "statement": "합병안이 부결되면 프리미엄 기대가 사라지며 단기 주가 조정이 올 수 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[테슬라 (NAS:TSLA)] Optimus로 쏘아올린 합병의 신호탄",
                "publisher": "iM증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgqclqkqmggzlgcgxecgl.pdf",
                "date": "2026-10-23",
                "quote": "프리미엄 기대 소멸에 따른 단기 주가 조정. 본업. FSD 실적 중심의 밸류에이션으로 회귀, Terafab 비용 분담이 별도 변수",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "중국 사업 비중이 커서 합병을 추진하면 반독점·국가안보 심사에 걸릴 수 있다.",
          "탄소 규제 크레딧처럼 정책에 기대는 매출이 줄면 이익이 곧바로 깎인다.",
          "에너지 부문은 관세와 고객 환불 같은 외부 변수에 분기 실적이 흔들린다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "미충족",
            "evidence": "3개월 최대상승 29% (약함) · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "저점 높아짐",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "깊이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 407.46 · 20일선 374.31 · 50일선 366.12"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.24배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "피벗 거리",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "손절 폭",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위 2.6 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 빨강"
          }
        ],
        "chartObservation": {
          "base": "쉬는 구간(횡보)이 없어 베이스 길이·저점 높아짐·깊이를 잴 수 없다. 최근 10봉은 10월 16일 종가 354.72에서 10월 27일 407.46까지 한 방향으로 올랐다. 3개월 그림에도 'NO BASE'가 표시돼 숫자와 같다.",
          "volume": "횡보 중 거래량이 줄어드는 모습은 없다. 최근 5일 거래량이 20일 평균의 1.24배로 오히려 많다. 최근 10봉에서는 10월 26일 5309만주, 10월 27일 4519만주로 늘어난 날이 이어졌다.",
          "position": "쉬는 구간이 없어 넘으면 사는 선(피벗)과 예비 손절 값이 계산되지 않았다. 현재가 407.46은 50일선 366.12보다 11.29% 위에 있다. 10일선 기준으로는 2.63 ADR(하루 평균 변동폭 2.95%) 위에 떠 있다.",
          "maStack": "가격 407.46이 20일선 374.31·50일선 366.12·150일선 376.94를 모두 넘어 있다. 6개월 그림에서 20일선이 50일선 위로 올라와 둘 다 오르는 중이고 150일선은 아직 완만하다.",
          "note": "그림과 숫자가 일치한다."
        },
        "entryChecklist": [
          "2주 이상 옆으로 가는 구간이 새로 생기면서 저점이 높아지는지",
          "그 구간에서 최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어드는지 (지금 1.24배)",
          "시장 판정이 빨간불에서 벗어나 10일선이 20일선 위로 올라오는지",
          "10일선 위 이격이 2 ADR 이하로 좁혀지는지 (지금 2.63 ADR)",
          "합병 특별위원회 결론과 12.03 주주총회 결과가 확인되는지"
        ],
        "earningsRisk": "3분기 실적은 2026-10-21에 이미 발표했고 확정된 실적 발표 일정 없음(달력 기준)이다. 대신 12.03 주주총회가 예정돼 당분간은 실적보다 합병 안건이 변동성의 원인이다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        },
        "consensus": {
          "saleCy": 13.64,
          "saleNy": 13.51,
          "epsCy": 6.75,
          "epsNy": 23.03,
          "cyTrend": 0.58,
          "nyTrend": 0.33
        },
        "researchedOn": "2026-10-28",
        "session": "2026-10-27",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "ZS",
      "nameKo": "지스케일러",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "industryRank": {
        "frank": 4,
        "frank25dChg": 2,
        "headline": "AI 확산이 보안 수요를 키우면서 사이버보안 기업의 실적이 좋아져 인프라 소프트웨어 업종이 상위에 올랐다.",
        "asOf": "2026-10-26"
      },
      "requestedOn": "2026-10-27",
      "session": "2026-10-26",
      "at": "2026-10-26T23:41:50.793Z",
      "verdict": "아니다",
      "verdictLine": "이미 10월 22일 피벗 237.22를 9.79% 넘어선 추격 구간인 데다 시장 판정이 빨간불이어서 지금 새로 살 자리는 아니다.",
      "basis": [
        {
          "point": "10월 22일에 피벗 237.22를 넘어 지금은 9.79% 위에 있다 — 넘은 뒤 사는 것은 추격이다.",
          "side": "against",
          "checkRef": "차트:피벗 거리"
        },
        {
          "point": "시장 판정이 빨간불이라 새로 사지 않는 구간이다.",
          "side": "against",
          "checkRef": "차트:시장"
        },
        {
          "point": "최근 분기도 순손실 336.9만 달러로 적자다.",
          "side": "against",
          "checkRef": "CANSLIM:C"
        },
        {
          "point": "상대강도가 1개월 기준 상위 0.5%로 업종 주도주 자리에 있다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "회사 가이던스 기준 2027 회계연도 매출은 16.6~17.5% 늘어난다.",
          "side": "for",
          "checkRef": "f5"
        }
      ],
      "conditions": [],
      "invalidation": "예비 손절 225.77 아래로 종가가 내려가면 이번 상승 흐름은 깨진 것으로 본다. 반대로 시장이 돌아서고 피벗 위에서 저점을 높이며 조용히 쉬는 구간이 새로 생기면 이 판정은 성급했던 것이 된다.",
      "dataLimits": "기관 보유 자료가 없고 국내 증권사 리포트도 0건이며, 신제품별 매출은 회사가 공개하지 않아 전체 수치로만 확인했다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": true,
        "reasons": [
          {
            "key": "market_red",
            "ko": "시장 판정이 빨간불이다 (신규 매수 금지 구간)"
          },
          {
            "key": "post_breakout",
            "ko": "이미 피벗 237.22 을 넘었다(2026-10-22) — 넘은 뒤에 사는 것은 추격이다"
          }
        ],
        "asOf": {
          "bar": "2026-10-26",
          "market": "2026-10-23"
        }
      },
      "setup": {
        "state": "post",
        "grade": "B",
        "pivot": 237.22,
        "stop": 225.77,
        "distToPivotPct": 9.79,
        "distToPivotAdr": 2.02,
        "riskPerSharePct": 4.83,
        "extensionAdr": 2.49,
        "adrPct": 4.86,
        "breakDate": "2026-10-22",
        "chase": false,
        "metrics": {
          "baseBars": 11,
          "baseWeeks": 2.2,
          "depthPct": 14.3,
          "priorMovePct": 71.9,
          "higherLows": 0,
          "contraction": 1.38,
          "closeRange10Adr": 2.3,
          "surf10": 0.89,
          "surf20": 1.69,
          "slope20": 1.43,
          "baseLow": 203.33,
          "lastSwingLow": 203.33
        },
        "reasons": [
          "선행 상승 +72%",
          "베이스 2.2주",
          "깊이 14.3%",
          "✗ 저점 상승 0회",
          "진폭 1.38배 · 10일 종가폭 2.3 ADR",
          "10일선 +0.9 ADR · 20일선 +1.7 ADR",
          "20일선 기울기 +1.43%"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 72% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 2.2주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 1.38배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 14.3% · ADR 4.86%의 2.9배 · 선행 상승의 절반 36%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 260.45 · 20일선 219.3 · 50일선 198.76"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.09배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "미충족",
            "evidence": "2026-10-22 돌파봉 거래량 = 20일 평균의 1.32배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "이미 2026-10-22 피벗 237.22 돌파 — 추격 구간"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 4.83% · ADR 4.86%"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위 2.5 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 빨강"
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
            "evidence": "사이트 최근 3분기 순이익 적자축소/적자확대/적자확대 — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 76%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 1.09배(20일 평균 대비) · 오늘 거래대금 1.69배(상승일) · 상장주식 163M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 0.5% · 3M 0.59% · 6M 3.56% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 빨강 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "ZS",
        "fetchedAt": "2026-10-27",
        "source": "한국투자증권 Open API",
        "per": 653.68,
        "pbr": 16.22,
        "eps": 0.4,
        "bps": 15.93,
        "shares": 163055000,
        "marketCapM": 42133,
        "high52": 336.99,
        "high52Date": "2025-11-03",
        "low52": 114.625,
        "low52Date": "2026-04-10",
        "last": 258.4,
        "prevClose": 255.15,
        "nameKo": "지스케일러",
        "nameEn": "ZSCALER INC",
        "listedOn": "2018-03-15",
        "exchange": "나스닥",
        "listedShares": 163055000
      },
      "estimates": {
        "ticker": "ZS",
        "url": "https://finance.yahoo.com/quote/ZS/analysis/",
        "fetchedAt": "2026-10-27",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-10-31",
            "eps": 1.16,
            "epsLow": 1.15,
            "epsHigh": 1.2,
            "epsYearAgo": 0.96,
            "epsAnalysts": 41,
            "epsGrowth": 21,
            "epsCur": "USD",
            "rev": 938160410,
            "revAnalysts": 42,
            "revYearAgo": 788112000,
            "revGrowth": 19,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2027-01-31",
            "eps": 1.18,
            "epsLow": 1.14,
            "epsHigh": 1.29,
            "epsYearAgo": 1.01,
            "epsAnalysts": 41,
            "epsGrowth": 17.3,
            "epsCur": "USD",
            "rev": 957752100,
            "revAnalysts": 41,
            "revYearAgo": 815751000,
            "revGrowth": 17.4,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2027-07-31",
            "eps": 4.91,
            "epsLow": 4.86,
            "epsHigh": 5.42,
            "epsYearAgo": 4.21,
            "epsAnalysts": 44,
            "epsGrowth": 16.6,
            "epsCur": "USD",
            "rev": 3931401600,
            "revAnalysts": 46,
            "revYearAgo": 3352523000,
            "revGrowth": 17.3,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2028-07-31",
            "eps": 5.62,
            "epsLow": 4.68,
            "epsHigh": 6.78,
            "epsYearAgo": 4.91,
            "epsAnalysts": 43,
            "epsGrowth": 14.6,
            "epsCur": "USD",
            "rev": 4579063640,
            "revAnalysts": 43,
            "revYearAgo": 3931401600,
            "revGrowth": 16.5,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-10-31",
            "cur": "USD",
            "now": 1.16,
            "d7": 0,
            "d30": 0,
            "d90": 7.7,
            "ago90": 1.08,
            "up7": 34,
            "up30": 34,
            "down7": 0,
            "down30": 0
          },
          {
            "period": "+1q",
            "endDate": "2027-01-31",
            "cur": "USD",
            "now": 1.18,
            "d7": 0,
            "d30": 0,
            "d90": 6.4,
            "ago90": 1.11,
            "up7": 0,
            "up30": 0,
            "down7": 1,
            "down30": 1
          },
          {
            "period": "0y",
            "endDate": "2027-07-31",
            "cur": "USD",
            "now": 4.91,
            "d7": 0,
            "d30": 0,
            "d90": 6.8,
            "ago90": 4.6,
            "up7": 2,
            "up30": 2,
            "down7": 1,
            "down30": 0
          },
          {
            "period": "+1y",
            "endDate": "2028-07-31",
            "cur": "USD",
            "now": 5.62,
            "d7": 0,
            "d30": 0.4,
            "d90": 3.3,
            "ago90": 5.44,
            "up7": 11,
            "up30": 12,
            "down7": 2,
            "down30": 2
          }
        ],
        "surprises": [
          {
            "quarter": "2026-07-31",
            "actual": 1.19,
            "estimate": 1.09,
            "surprisePct": 9.2,
            "cur": "USD"
          },
          {
            "quarter": "2026-04-30",
            "actual": 1.08,
            "estimate": 1.01,
            "surprisePct": 7.1,
            "cur": "USD"
          },
          {
            "quarter": "2026-01-31",
            "actual": 1.01,
            "estimate": 0.9,
            "surprisePct": 12.6,
            "cur": "USD"
          },
          {
            "quarter": "2025-10-31",
            "actual": 0.96,
            "estimate": 0.86,
            "surprisePct": 11.4,
            "cur": "USD"
          }
        ],
        "beats": 4,
        "ratings": {
          "upgrades": 0,
          "downgrades": 0,
          "initiations": 2,
          "ptRaised": 48,
          "ptLowered": 0,
          "total": 61,
          "recent": [
            {
              "date": "2026-10-22",
              "firm": "Freedom Broker",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 270,
              "ptPrior": 230
            },
            {
              "date": "2026-10-21",
              "firm": "DA Davidson",
              "action": "init",
              "from": null,
              "to": "Neutral",
              "ptAction": "Announces",
              "pt": 215,
              "ptPrior": null
            },
            {
              "date": "2026-10-15",
              "firm": "Citigroup",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 260,
              "ptPrior": 245
            },
            {
              "date": "2026-10-09",
              "firm": "Citizens",
              "action": "main",
              "from": "Market Outperform",
              "to": "Market Outperform",
              "ptAction": "Raises",
              "pt": 265,
              "ptPrior": 210
            },
            {
              "date": "2026-10-08",
              "firm": "Amerx",
              "action": "init",
              "from": null,
              "to": "Buy",
              "ptAction": "Announces",
              "pt": 305,
              "ptPrior": null
            },
            {
              "date": "2026-10-07",
              "firm": "Macquarie",
              "action": "main",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Raises",
              "pt": 250,
              "ptPrior": 200
            },
            {
              "date": "2026-10-07",
              "firm": "UBS",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 250,
              "ptPrior": 225
            },
            {
              "date": "2026-10-07",
              "firm": "Citigroup",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 245,
              "ptPrior": 205
            },
            {
              "date": "2026-10-07",
              "firm": "Jefferies",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 250,
              "ptPrior": 220
            },
            {
              "date": "2026-10-07",
              "firm": "Canaccord Genuity",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 250,
              "ptPrior": 210
            }
          ]
        },
        "nextEarnings": {
          "date": "2026-11-24",
          "upcoming": true,
          "estimated": true
        }
      },
      "cnbc": [
        {
          "title": "One cybersecurity stock has lagged of late. Jay Woods says the charts are now turning bullish",
          "url": "https://www.cnbc.com/2026/09/17/one-cybersecurity-stock-has-lagged-of-late-jay-woods-says-the-charts-are-now-turning-bullish.html",
          "date": "2026-09-17",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Investors should use the volatility to add to their portfolios, says Hightower's Stephanie Link",
          "url": "https://www.cnbc.com/video/2026/10/26/investors-should-use-the-volatility-to-add-to-their-portfolios-says-hightowers-stephanie-link.html",
          "date": "2026-10-26",
          "publisher": "CNBC",
          "kind": "video"
        },
        {
          "title": "Trade Tracker: Hightower's Stephanie Link buys Zscaler, buys more Wells Fargo and sells Dover",
          "url": "https://www.cnbc.com/video/2026/10/23/trade-tracker-stephanie-link-buys-zscaler-buys-more-wells-fargo-sells-dover.html",
          "date": "2026-10-23",
          "publisher": "CNBC",
          "kind": "video"
        },
        {
          "title": "Final Trades: Zscaler, ServiceNow and Spotify",
          "url": "https://www.cnbc.com/video/2026/10/22/final-trades-zscaler-servicenow-and-spotify.html",
          "date": "2026-10-22",
          "publisher": "CNBC",
          "kind": "video"
        },
        {
          "title": "Zscaler CEO Jay Chaudhry on cybersecurity in the age of AI, company growth outlook",
          "url": "https://www.cnbc.com/video/2026/10/06/zscaler-ceo-jay-chaudhry-on-cybersecurity-in-the-age-of-ai-company-growth-outlook.html",
          "date": "2026-10-06",
          "publisher": "CNBC",
          "kind": "video"
        },
        {
          "title": "Final Trade: HQY, EEM, C, ZS",
          "url": "https://www.cnbc.com/video/2026/10/05/final-trade-hqy-eem-c-zs.html",
          "date": "2026-10-05",
          "publisher": "CNBC",
          "kind": "video"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-27",
        "nameKo": "지스케일러",
        "nameEn": "ZSCALER INC",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001713683&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-07-31",
              "derived": true,
              "revenue": 898185000,
              "profit": -15492000,
              "netIncome": -3369000,
              "margin": -1.7,
              "yoy": {
                "revenue": 24.9,
                "profit": 52,
                "netIncome": 80.8,
                "priorEnd": "2025-07-31"
              }
            },
            {
              "periodEnd": "2026-04-30",
              "derived": false,
              "revenue": 850475000,
              "profit": -29640000,
              "netIncome": -13883000,
              "margin": -3.5,
              "yoy": {
                "revenue": 25.4,
                "profit": -16.6,
                "netIncome": -236.6,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodEnd": "2026-01-31",
              "derived": false,
              "revenue": 815751000,
              "profit": -51773000,
              "netIncome": -34312000,
              "margin": -6.3,
              "yoy": {
                "revenue": 25.9,
                "profit": -29,
                "netIncome": -344.2,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 788112000,
              "profit": -36362000,
              "netIncome": -11615000,
              "margin": -4.6,
              "yoy": {
                "revenue": 25.5,
                "profit": -18.6,
                "netIncome": 3.6,
                "priorEnd": "2024-10-31"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "Zscaler Consensus Price Target Rises 10.12% to $238.39",
              "url": "https://www.nasdaq.com/articles/zscaler-consensus-price-target-rises-1012-23839",
              "date": "2026-10-23",
              "publisher": "Fintel"
            },
            {
              "title": "Zscaler Reaches Analyst Target Price",
              "url": "https://www.nasdaq.com/articles/zscaler-reaches-analyst-target-price",
              "date": "2026-10-23",
              "publisher": "BNK Invest"
            },
            {
              "title": "Zscaler (ZS) Ascends While Market Falls: Some Facts to Note",
              "url": "https://www.nasdaq.com/articles/zscaler-zs-ascends-while-market-falls-some-facts-note-0",
              "date": "2026-10-22",
              "publisher": "Zacks"
            },
            {
              "title": "Zscaler's Data Security Push: Can Its Security Tools Win More Deals?",
              "url": "https://www.nasdaq.com/articles/zscalers-data-security-push-can-its-security-tools-win-more-deals",
              "date": "2026-10-22",
              "publisher": "Zacks"
            },
            {
              "title": "Here's Why Zscaler (ZS) is a Strong Momentum Stock",
              "url": "https://www.nasdaq.com/articles/heres-why-zscaler-zs-strong-momentum-stock-0",
              "date": "2026-10-19",
              "publisher": "Zacks"
            },
            {
              "title": "Should You Invest in Zscaler (ZS) Based on Bullish Wall Street Views?",
              "url": "https://www.nasdaq.com/articles/should-you-invest-zscaler-zs-based-bullish-wall-street-views",
              "date": "2026-10-19",
              "publisher": "Zacks"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-10-06",
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zs-20261006.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-24",
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000193/zs-20260924.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-03",
            "itemsKo": [
              "실적 발표",
              "2.05",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-20260901.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-26",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000095/zs-20260526.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-16",
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000082/zs-20260415.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-26",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000047/zs-20260226.htm"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": []
        }
      },
      "rank": {
        "m1": 0.5,
        "m3": 0.59,
        "m6": 3.56
      },
      "yahooNews": [
        {
          "title": "CrowdStrike CEO Competes on Model Pricing: “Ours Is Like Three Cents”",
          "url": "https://finance.yahoo.com/markets/stocks/articles/crowdstrike-ceo-competes-model-pricing-143437629.html",
          "date": "2026-10-26",
          "publisher": "TIKR",
          "via": "Yahoo"
        }
      ],
      "teamView": {
        "seojun": {
          "asOf": "2026-10-26",
          "grade": "B",
          "state": "post",
          "watch": false,
          "blocked": null,
          "distToPivotPct": 7.56,
          "fit": null
        },
        "doyun": {
          "lists": [
            "거래대금 상위",
            "RS(1MO)",
            "RS(3MO)"
          ],
          "lead": "9월 초 발표한 분기 실적에서 매출이 25% 늘고 적자가 줄어든 것이 반등의 바탕으로 보인다. 52주 저점(4월) 이후 3개월 52%, 6개월 77% 올랐다. 다만 고점 대비로는 아직 크게 낮고 주가 부담이 커서, 매출 증가세가 꺾이면 이야기가 약해진다.",
          "researchedOn": "2026-10-22"
        },
        "jaemin": null,
        "holding": null
      },
      "market": {
        "verdict": "red",
        "ko": "🔴 10일선이 20일선 아래 4일째(2026-10-19부터) — 새로 사지 않고, 들고 있는 것도 정리 검토",
        "finra": "warn",
        "finraKo": "⚠️ 빚내서 산 주식(마진부채)이 1년 전보다 +31.4% — 주의선 +30% 초과"
      },
      "verified": {
        "checked": 6,
        "ok": 26,
        "unverified": 0,
        "dead": 0,
        "stripped": 0
      },
      "numberCut": 0,
      "deep": {
        "status": "done",
        "ticker": "ZS",
        "company": "지스케일러는 기업 직원과 기기가 인터넷·내부 업무앱에 접속할 때 거치는 보안 관문을 클라우드로 제공한다. 매출은 대부분 구독 계약(연간반복매출)에서 나온다. 최근에는 데이터 보안과 AI 보안 쪽으로 제품을 넓히고 있다.",
        "lead": "지금은 매수 기준에 맞지 않는다. 가장 큰 걱정은 2027 회계연도 매출 증가율 전망이 16.6~17.5%로 낮아진 것이다. 다만 매출은 꾸준히 늘고 있고, 시장이 돌아서면 그림이 달라진다.",
        "newsNarrative": "10월 주가를 움직인 것은 투자자의 날과 증권가 눈높이 상향이다. 회사는 10월 6일 투자자의 날에서 1분기와 2027 회계연도 가이던스를 그대로 유지했다. 그 뒤 증권사 목표주가 평균이 10.12% 올라 238.39달러가 됐다. 10월 23일에는 하이타워의 스테파니 링크가 지스케일러를 샀다고 CNBC에서 밝혔다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "2026년 7월 끝난 분기 매출이 1년 전보다 25% 늘어 8억 9,820만 달러가 됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                "date": "2026-09-03",
                "quote": "Revenue: Grew 25% year over year to $898.2 million.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n2",
            "statement": "10월 6일 투자자의 날에서 1분기와 2027 회계연도 가이던스를 그대로 유지했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Zscaler, Inc. Form 8-K (Regulation FD Disclosure)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zs-20261006.htm",
                "date": "2026-10-06",
                "quote": "The Company also issued a press release on October 6, 2026 summarizing the presentation and reaffirmed its guidance for first quarter and fiscal year 2027.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n3",
            "statement": "영업 조직을 총괄하는 최고매출책임자가 10월 1일 자로 Ross Tackett 으로 바뀌었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Zscaler, Inc. Form 8-K (Departure/Appointment of Certain Officers)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000193/zs-20260924.htm",
                "date": "2026-09-24",
                "quote": "Zscaler, Inc. (the \"Company\") is promoting Ross Tackett to be the Company's Chief Revenue Officer effective October 1, 2026.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n4",
            "statement": "증권사 목표주가 평균이 10.12% 올라 238.39달러가 됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Zscaler Consensus Price Target Rises 10.12% to $238.39",
                "publisher": "Fintel (Nasdaq)",
                "url": "https://www.nasdaq.com/articles/zscaler-consensus-price-target-rises-1012-23839",
                "date": "2026-10-23",
                "quote": "Zscaler Consensus Price Target Rises 10.12% to $238.39",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "하이타워의 스테파니 링크가 지스케일러를 매수했다고 CNBC 에서 밝혔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Trade Tracker: Hightower's Stephanie Link buys Zscaler, buys more Wells Fargo and sells Dover",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/video/2026/10/23/trade-tracker-stephanie-link-buys-zscaler-buys-more-wells-fargo-sells-dover.html",
                "date": "2026-10-23",
                "quote": "Trade Tracker: Hightower's Stephanie Link buys Zscaler, buys more Wells Fargo and sells Dover",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "매출은 꾸준히 늘지만 이익은 아직 적자다. 2026 회계연도 매출은 25% 늘어 33.53억 달러였다. 분기 적자는 줄어 4분기 순손실이 340만 달러로 1년 전 1,760만 달러에서 작아졌다. 다만 연간으로는 순손실이 6,320만 달러로 전년 4,150만 달러보다 커졌다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f1",
              "statement": "2026 회계연도 매출이 25% 늘어 33.53억 달러가 됐다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                  "date": "2026-09-03",
                  "quote": "Revenue: Grew 25% year over year to $3,353 million.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f2",
              "statement": "연간반복매출이 25% 늘어 37.71억 달러가 됐고 그중 2.46억 달러가 순증분이다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                  "date": "2026-09-03",
                  "quote": "ARR: Grew 25% year over year to $3,771 million, of which $246 million was net new ARR",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "f3",
              "statement": "4분기 순손실이 340만 달러로 1년 전 1,760만 달러에서 줄었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                  "date": "2026-09-03",
                  "quote": "GAAP net loss was $3.4 million, compared to $17.6 million in the fourth quarter of fiscal 2025",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f4",
              "statement": "연간으로는 순손실이 6,320만 달러로 전년 4,150만 달러보다 커졌다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                  "date": "2026-09-03",
                  "quote": "GAAP net loss was $63.2 million, compared to $41.5 million in fiscal 2025",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "guidance": [
            {
              "id": "f5",
              "statement": "회사 가이던스 기준 2027 회계연도 매출은 39.08억~39.38억 달러로 16.6~17.5% 늘어난다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Zscaler Hosts 2026 Investor Day; Reaffirms First Quarter and Fiscal 2027 Guidance (Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zsinvestordaypressrelease.htm",
                  "date": "2026-10-06",
                  "quote": "Revenue of approximately $3.908 billion to $3.938 billion, growth of 16.6% to 17.5%.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f6",
              "statement": "1분기 매출 가이던스는 9.35억~9.39억 달러로 약 19% 증가다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Zscaler Hosts 2026 Investor Day; Reaffirms First Quarter and Fiscal 2027 Guidance (Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zsinvestordaypressrelease.htm",
                  "date": "2026-10-06",
                  "quote": "Revenue of $935 million to $939 million, approximately 19% year-over-year growth.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "raised",
            "claims": [
              {
                "id": "f7",
                "statement": "증권사 목표주가 평균이 10.12% 올라 238.39달러가 됐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Consensus Price Target Rises 10.12% to $238.39",
                    "publisher": "Fintel (Nasdaq)",
                    "url": "https://www.nasdaq.com/articles/zscaler-consensus-price-target-rises-1012-23839",
                    "date": "2026-10-23",
                    "quote": "Zscaler Consensus Price Target Rises 10.12% to $238.39",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        },
        "estimatesNarrative": "증권가는 눈높이를 올리는 쪽이다 — 이번 분기 주당순이익 추정치가 90일 전보다 7.7% 높아졌고 최근 30일 상향 34명·하향 0명이다. 최근 네 개 분기 실적이 모두 예상을 9.2~12.6% 웃돌았고, 이는 매출이 24.9% 늘어난 데서 나왔다. 다만 다음 회계연도 주당순이익 증가율 추정은 14.6%로 올해 16.6%보다 낮다.",
        "newDrivers": [
          {
            "what": "AI 보안·에이전틱 보안운영 제품군 — AI가 만드는 새 위협과 AI 에이전트의 작업을 감시·차단하는 신제품 묶음",
            "kind": "product",
            "stage": "매출 발생 중",
            "since": "2026-09",
            "basis": [
              {
                "id": "d1",
                "statement": "회사는 제로트러스트 SASE·에이전틱 보안운영·데이터 보안·AI 보안 네 갈래의 혁신이 플랫폼 채택을 늘린다고 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                    "date": "2026-09-03",
                    "quote": "Our continued innovation across Zero Trust SASE, Agentic SecOps, Data Security, and Security for AI is driving increased platform adoption and creating new avenues for growth",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "d3",
                "statement": "신제품을 포함한 전체 연간반복매출이 25% 늘어 37.71억 달러가 됐고 순증분은 2.46억 달러다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                    "date": "2026-09-03",
                    "quote": "ARR: Grew 25% year over year to $3,771 million, of which $246 million was net new ARR",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "d4",
                "statement": "회사는 1분기 비GAAP 영업이익이 2.15억~2.17억 달러로 25~26% 늘고 영업이익률 23%가 될 것으로 본다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Hosts 2026 Investor Day; Reaffirms First Quarter and Fiscal 2027 Guidance (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zsinvestordaypressrelease.htm",
                    "date": "2026-10-06",
                    "quote": "Non-GAAP income from operations of $215 million to $217 million, approximately 25% to 26% year-over-year growth, representing a 23% operating margin.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [
              {
                "id": "d5",
                "statement": "회사 가이던스 기준 2027 회계연도 매출은 39.08억~39.38억 달러, 증가율 16.6~17.5%다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Hosts 2026 Investor Day; Reaffirms First Quarter and Fiscal 2027 Guidance (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zsinvestordaypressrelease.htm",
                    "date": "2026-10-06",
                    "quote": "Revenue of approximately $3.908 billion to $3.938 billion, growth of 16.6% to 17.5%.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d6",
                "statement": "회사는 장기 목표로 연간반복매출 100억 달러를 제시했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Hosts 2026 Investor Day; Reaffirms First Quarter and Fiscal 2027 Guidance (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zsinvestordaypressrelease.htm",
                    "date": "2026-10-06",
                    "quote": "drive Zscaler towards achieving our $10 billion ARR target",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "d7",
                "statement": "2027 회계연도 매출 증가율 전망 16.6~17.5%는 직전 회계연도 25%보다 낮다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Hosts 2026 Investor Day; Reaffirms First Quarter and Fiscal 2027 Guidance (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zsinvestordaypressrelease.htm",
                    "date": "2026-10-06",
                    "quote": "Revenue of approximately $3.908 billion to $3.938 billion, growth of 16.6% to 17.5%.",
                    "verified": "ok",
                    "httpStatus": 200
                  },
                  {
                    "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                    "date": "2026-09-03",
                    "quote": "Revenue: Grew 25% year over year to $3,353 million.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d8",
                "statement": "4분기 잉여현금흐름이 6,080만 달러로 매출의 7%에 그쳐 1년 전 24%에서 낮아졌다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                    "date": "2026-09-03",
                    "quote": "Free cash flow was $60.8 million, or 7% of revenue, compared to $171.9 million, or 24% of revenue, in the fourth quarter of fiscal 2025",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "최고매출책임자(영업 총괄) 교체 — Ross Tackett 승진",
            "kind": "management",
            "stage": "출시",
            "since": "2026-10-01",
            "basis": [
              {
                "id": "d9",
                "statement": "Ross Tackett 이 10월 1일 자로 최고매출책임자로 승진했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler, Inc. Form 8-K (Departure/Appointment of Certain Officers)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000193/zs-20260924.htm",
                    "date": "2026-09-24",
                    "quote": "Zscaler, Inc. (the \"Company\") is promoting Ross Tackett to be the Company's Chief Revenue Officer effective October 1, 2026.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d10",
                "statement": "전임 Mike Rich 는 임원에서 물러나 연말까지 전략 자문으로 남는다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Zscaler, Inc. Form 8-K (Departure/Appointment of Certain Officers)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000193/zs-20260924.htm",
                    "date": "2026-09-24",
                    "quote": "Mr. Tackett will succeed Mike Rich, who will step down as an officer effective October 1, 2026, but will remain with the Company as a strategic advisor for a transition period through December 31, 2026.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": []
          }
        ],
        "nNarrative": "새로운 것은 AI 보안 제품군과 영업 총괄 교체 두 가지다. 회사는 9월 실적 발표에서 제로트러스트 SASE·에이전틱 보안운영·데이터 보안·AI 보안 네 갈래의 혁신이 플랫폼 채택을 늘리고 있다고 밝혔다. 이들을 포함한 전체 연간반복매출은 25% 늘어 37.71억 달러가 됐다. 회사 가이던스 기준 2027 회계연도 매출 증가율은 16.6~17.5%이고, 장기 목표로는 연간반복매출 100억 달러를 내걸었다. 10월 1일에는 대형 계약 영업을 이끄는 최고매출책임자가 Ross Tackett 으로 바뀌었다. 다만 회사가 제품별 매출을 따로 공개하지 않아 신제품이 얼마나 보태는지는 가려지지 않는다.",
        "nVerdict": "충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순손실 336.9만 달러 — 1년 전보다 80.8% 줄었으나 흑자 전환은 아니다 · 매출 24.9% 증가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 네 개 분기 모두 영업적자 — 전년비 +52%·-16.6%·-29%·-18.6% · 3년 추세와 자기자본이익률은 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "AI 보안·데이터 보안 신제품군과 10월 1일 최고매출책임자 교체 확인 · 참고: 52주 고점의 76%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 1.09배로 줄지 않았다 · 상승일 거래대금 1.69배 · 상장주식 163M주 · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1개월 0.5% · 3개월 0.59% · 6개월 3.56% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "시장 판정 빨강 · 빚내서 산 주식이 1년 전보다 31.4% 늘어 주의선 초과"
          }
        ],
        "risks": [
          {
            "id": "r1",
            "statement": "2027 회계연도 매출 증가율 전망 16.6~17.5%는 직전 회계연도 25%보다 낮다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Zscaler Hosts 2026 Investor Day; Reaffirms First Quarter and Fiscal 2027 Guidance (Exhibit 99.1)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000200/zsinvestordaypressrelease.htm",
                "date": "2026-10-06",
                "quote": "Revenue of approximately $3.908 billion to $3.938 billion, growth of 16.6% to 17.5%.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                "date": "2026-09-03",
                "quote": "Revenue: Grew 25% year over year to $3,353 million.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r2",
            "statement": "4분기 잉여현금흐름이 매출의 7%로 1년 전 24%에서 크게 낮아졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                "date": "2026-09-03",
                "quote": "Free cash flow was $60.8 million, or 7% of revenue, compared to $171.9 million, or 24% of revenue, in the fourth quarter of fiscal 2025",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r3",
            "statement": "2026 회계연도 순손실이 6,320만 달러로 전년 4,150만 달러보다 커졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Zscaler Reports Fourth Quarter and Fiscal Year 2026 Financial Results (Exhibit 99.1)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1713683/000171368326000156/zs-07312026_991.htm",
                "date": "2026-09-03",
                "quote": "GAAP net loss was $63.2 million, compared to $41.5 million in fiscal 2025",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "매출이 구독 계약 중심이라 신규·갱신 계약이 줄면 성장률이 곧바로 내려간다.",
          "영업 총괄인 최고매출책임자가 막 바뀌어 대형 계약 영업 체계가 흔들릴 수 있다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 72% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 2.2주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 1.38배로 좁아지지 않았다"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 14.3% · 하루 평균 변동폭 4.86%의 2.9배 · 선행 상승의 절반 아래"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 260.45 · 20일선 219.3 · 50일선 198.76"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.09배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "미충족",
            "evidence": "10월 22일 돌파봉 거래량 = 20일 평균의 1.32배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "10월 22일 피벗 237.22를 이미 넘어 9.79% 위 — 추격 구간"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 4.83% · 하루 평균 변동폭 4.86%"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위 2.49배 · 기준 2배 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "시장 판정 빨강"
          }
        ],
        "chartObservation": {
          "base": "횡보는 11봉, 약 2.2주 이어졌고 구간 저점은 203.33이다. 베이스 깊이는 14.3%로 하루 평균 변동폭 4.86%의 2.9배다. 횡보 중 저점이 높아진 횟수는 0회였고 폭은 1.38배로 오히려 넓어졌다.",
          "volume": "최근 5일 거래량은 20일 평균의 1.09배로 줄지 않았다. 10월 22일 돌파봉 거래량은 20일 평균의 1.32배였다. 최근 10봉 중에서는 10월 23일 거래량이 가장 많았다.",
          "position": "현재가 260.45는 피벗 237.22보다 9.79% 위, 하루 변동폭으로 2.02배 떨어져 있다. 예비 손절 225.77까지는 4.83%로 하루 평균 변동폭 4.86%와 비슷하다. 10일선과의 이격은 2.49배다.",
          "maStack": "종가 260.45는 20일선 219.3, 50일선 198.76, 150일선 162.43을 모두 위에 두고 있다. 20일선 기울기는 +1.43%이고 50일선과의 이격은 31.04%다.",
          "note": "그림과 숫자가 일치한다. 10월 중순 좁은 구간 뒤 긴 양봉이 이어지고 그 자리에서 거래량 막대가 커지는 모습이 보인다."
        },
        "entryChecklist": [
          "시장 판정이 빨간불에서 벗어나 10일선이 20일선 위로 다시 올라서는지",
          "주가가 피벗 237.22 위에서 2주 이상 쉬면서 저점을 높이는지",
          "최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어드는지 — 지금은 1.09배",
          "10일선 위 이격이 하루 변동폭 2배 이내로 좁혀지는지 — 지금은 2.49배",
          "11월 24일로 추정되는 실적 발표일이 확정되고 그 전후 어디에 서 있는지"
        ],
        "earningsRisk": "확정된 실적 발표 일정 없음(달력 기준). 야후 파이낸스 자료는 다음 발표일을 11월 24일로 추정하는데, 날짜가 확정되지 않은 채 발표가 다가오면 그 전에 들어가는 것은 도박이 된다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "d2"
          ],
          "reasons": [
            "d2의 quote가 투자자의 날의 구체적 내용(전략·플랫폼 혁신과 장기 성장 동력)을 뒷받침하지 않음 — '프레젠테이션을 요약한 보도자료 발표'라고만 기술"
          ],
          "leadFixed": true
        },
        "leadOriginal": "지금은 매수 기준에 맞지 않는다 — 이미 돌파한 뒤 올라선 구간이고 시장 판정이 빨간불이다. 가장 강한 근거는 매출이 꾸준히 늘고 상대강도가 1개월 기준 상위 0.5%라는 점이다. 가장 큰 걱정은 2027 회계연도 매출 증가율 전망이 16.6~17.5%로 낮아진 것이다. 시장이 돌아서고 피벗 237.22 위에서 저점을 높이며 쉬는 모습이 나오면 그림이 달라진다.",
        "consensus": {
          "saleCy": 17.27,
          "saleNy": 16.47,
          "epsCy": 16.57,
          "epsNy": 14.57,
          "cyTrend": -0.01,
          "nyTrend": 0.37
        },
        "researchedOn": "2026-10-27",
        "session": "2026-10-26",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "CRL",
      "nameKo": "찰스 리버 래브러토리스 인터내셔널",
      "sector": "Healthcare",
      "industry": "Diagnostics & Research",
      "industryRank": {
        "frank": 1,
        "frank25dChg": 4,
        "headline": "신약 개발 외주 수주가 되살아나고 암 진단 검사 매출이 빠르게 늘면서 진단·연구 업종이 상위로 올라섰다.",
        "asOf": "2026-10-26"
      },
      "requestedOn": "2026-10-27",
      "session": "2026-10-26",
      "at": "2026-10-26T23:16:01.016Z",
      "verdict": "아니다",
      "verdictLine": "시장이 빨간불인데다 10월 21일 피벗 333.3을 이미 7% 넘어선 추격 구간이고 11월 4일 실적도 코앞이라, 지금은 기준에 맞지 않는다.",
      "basis": [
        {
          "point": "시장 판정이 빨강이라 새로 사는 것을 막는 구간이다.",
          "side": "against",
          "checkRef": "차트:시장"
        },
        {
          "point": "10월 21일 피벗 333.3을 이미 넘어 현재가가 7.19% 위에 있다.",
          "side": "against",
          "checkRef": "차트:피벗 거리"
        },
        {
          "point": "최근 분기 순이익이 전년비 -102.8%로 기준 +25%에 크게 못 미친다.",
          "side": "against",
          "checkRef": "CANSLIM:C"
        },
        {
          "point": "선행 상승 56.2% 뒤 2.2주 쉬는 동안 저점이 높아지고 진폭이 0.77배로 좁아졌다.",
          "side": "for",
          "checkRef": "차트:저점 높아짐"
        },
        {
          "point": "2027~2030년 누적 3억 달러 비용 절감이라는 새 경영 목표가 출처로 확인된다.",
          "side": "for",
          "checkRef": "d3"
        }
      ],
      "conditions": [],
      "invalidation": "예비 손절 320.18달러를 종가로 깨면 10월 21일 돌파가 되돌려진 것으로 본다. 11월 4일 실적에서 수주 회복이 멈추고 올해 조정 주당순이익 전망이 내려가면 이 그림의 근거가 사라진다.",
      "dataLimits": "기관 보유 자료가 없고 국내 증권사 리포트는 1건뿐이다. 증권사 리포트 원문 PDF가 제공되지 않아 제품별 매출 전망은 요약으로만 확인했고, FDA·랩코프 공동연구는 계약 금액이 공개되지 않아 매출 영향을 숫자로 확인하지 못했다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": true,
        "reasons": [
          {
            "key": "market_red",
            "ko": "시장 판정이 빨간불이다 (신규 매수 금지 구간)"
          },
          {
            "key": "post_breakout",
            "ko": "이미 피벗 333.3 을 넘었다(2026-10-21) — 넘은 뒤에 사는 것은 추격이다"
          }
        ],
        "asOf": {
          "bar": "2026-10-26",
          "market": "2026-10-23"
        }
      },
      "setup": {
        "state": "post",
        "grade": "A",
        "pivot": 333.3,
        "stop": 320.18,
        "distToPivotPct": 7.19,
        "distToPivotAdr": 1.64,
        "riskPerSharePct": 3.94,
        "extensionAdr": 2.31,
        "adrPct": 4.4,
        "breakDate": "2026-10-21",
        "chase": false,
        "metrics": {
          "baseBars": 11,
          "baseWeeks": 2.2,
          "depthPct": 13.5,
          "priorMovePct": 56.2,
          "higherLows": 1,
          "contraction": 0.77,
          "closeRange10Adr": 1.3,
          "surf10": 0.99,
          "surf20": 1.3,
          "slope20": 2.17,
          "baseLow": 288.43,
          "lastSwingLow": 288.43
        },
        "reasons": [
          "선행 상승 +56%",
          "베이스 2.2주",
          "깊이 13.5%",
          "저점 상승 1회",
          "진폭 0.77배 · 10일 종가폭 1.3 ADR",
          "10일선 +1 ADR · 20일선 +1.3 ADR",
          "20일선 기울기 +2.17%"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 56% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 2.2주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "충족",
            "evidence": "저점 상승 1회 · 진폭 0.77배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 13.5% · ADR 4.4%의 3.1배 · 선행 상승의 절반 28%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 357.27 · 20일선 309.79 · 50일선 295.49"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.57배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "충족",
            "evidence": "2026-10-21 돌파봉 거래량 = 20일 평균의 2.8배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "이미 2026-10-21 피벗 333.3 돌파 — 추격 구간"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 3.94% · ADR 4.4%"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위 2.3 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 빨강"
          }
        ],
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순이익 전년비 -102.8% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "사이트 최근 3분기 순이익 -103%/-158%/적자확대 — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 98%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 1.57배(20일 평균 대비) · 오늘 거래대금 0.83배(상승일) · 상장주식 48M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 4.55% · 3M 2.48% · 6M 1.94% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 빨강 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "CRL",
        "fetchedAt": "2026-10-27",
        "source": "한국투자증권 Open API",
        "per": 73.58,
        "pbr": 6,
        "eps": 4.85,
        "bps": 59.5,
        "shares": 47738900,
        "marketCapM": 17044,
        "high52": 368.525,
        "high52Date": "2026-10-26",
        "low52": 146.195,
        "low52Date": "2026-05-19",
        "last": 357.03,
        "prevClose": 345.37,
        "nameKo": "찰스 리버 래브러토리스 인터내셔널",
        "nameEn": "CHARLES RIVER LABORATORIES",
        "listedOn": null,
        "exchange": "뉴욕거래소",
        "listedShares": 47738900
      },
      "estimates": {
        "ticker": "CRL",
        "url": "https://finance.yahoo.com/quote/CRL/analysis/",
        "fetchedAt": "2026-10-27",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-09-30",
            "eps": 2.97,
            "epsLow": 2.93,
            "epsHigh": 3.09,
            "epsYearAgo": 2.43,
            "epsAnalysts": 13,
            "epsGrowth": 22.3,
            "epsCur": "USD",
            "rev": 960355700,
            "revAnalysts": 12,
            "revYearAgo": 1004852000,
            "revGrowth": -4.4,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2026-12-31",
            "eps": 3.33,
            "epsLow": 3,
            "epsHigh": 3.44,
            "epsYearAgo": 2.39,
            "epsAnalysts": 13,
            "epsGrowth": 39.3,
            "epsCur": "USD",
            "rev": 956346180,
            "revAnalysts": 12,
            "revYearAgo": 994227000,
            "revGrowth": -3.8,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "eps": 11.38,
            "epsLow": 11.02,
            "epsHigh": 11.49,
            "epsYearAgo": 10.28,
            "epsAnalysts": 17,
            "epsGrowth": 10.7,
            "epsCur": "USD",
            "rev": 3917009930,
            "revAnalysts": 14,
            "revYearAgo": 4015382000,
            "revGrowth": -2.5,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "eps": 12.75,
            "epsLow": 11.9,
            "epsHigh": 13.68,
            "epsYearAgo": 11.38,
            "epsAnalysts": 17,
            "epsGrowth": 12,
            "epsCur": "USD",
            "rev": 4016133430,
            "revAnalysts": 15,
            "revYearAgo": 3917009930,
            "revGrowth": 2.5,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-09-30",
            "cur": "USD",
            "now": 2.97,
            "d7": -0.1,
            "d30": 0.7,
            "d90": -2.5,
            "ago90": 3.05,
            "up7": 0,
            "up30": 4,
            "down7": 1,
            "down30": 2
          },
          {
            "period": "+1q",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 3.33,
            "d7": -0.1,
            "d30": 0.6,
            "d90": 2.7,
            "ago90": 3.24,
            "up7": 3,
            "up30": 3,
            "down7": 1,
            "down30": 1
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 11.38,
            "d7": 0,
            "d30": 0.4,
            "d90": 2.5,
            "ago90": 11.1,
            "up7": 1,
            "up30": 5,
            "down7": 1,
            "down30": 3
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "cur": "USD",
            "now": 12.75,
            "d7": -0.1,
            "d30": 0.3,
            "d90": 3.4,
            "ago90": 12.33,
            "up7": 1,
            "up30": 6,
            "down7": 0,
            "down30": 3
          }
        ],
        "surprises": [
          {
            "quarter": "2026-06-30",
            "actual": 3.02,
            "estimate": 2.74,
            "surprisePct": 10.3,
            "cur": "USD"
          },
          {
            "quarter": "2026-03-31",
            "actual": 2.06,
            "estimate": 1.95,
            "surprisePct": 5.4,
            "cur": "USD"
          },
          {
            "quarter": "2025-12-31",
            "actual": 2.39,
            "estimate": 2.35,
            "surprisePct": 1.9,
            "cur": "USD"
          },
          {
            "quarter": "2025-09-30",
            "actual": 2.43,
            "estimate": 2.34,
            "surprisePct": 3.9,
            "cur": "USD"
          }
        ],
        "beats": 4,
        "ratings": {
          "upgrades": 1,
          "downgrades": 0,
          "initiations": 0,
          "ptRaised": 15,
          "ptLowered": 0,
          "total": 15,
          "recent": [
            {
              "date": "2026-10-13",
              "firm": "Morgan Stanley",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 340,
              "ptPrior": 300
            },
            {
              "date": "2026-09-28",
              "firm": "Jefferies",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 340,
              "ptPrior": 305
            },
            {
              "date": "2026-09-25",
              "firm": "Deutsche Bank",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 320,
              "ptPrior": 300
            },
            {
              "date": "2026-09-25",
              "firm": "TD Cowen",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 325,
              "ptPrior": 300
            },
            {
              "date": "2026-09-25",
              "firm": "Evercore ISI Group",
              "action": "main",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Raises",
              "pt": 330,
              "ptPrior": 320
            },
            {
              "date": "2026-09-25",
              "firm": "RBC Capital",
              "action": "main",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Raises",
              "pt": 322,
              "ptPrior": 282
            },
            {
              "date": "2026-09-25",
              "firm": "Barclays",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 330,
              "ptPrior": 300
            },
            {
              "date": "2026-09-25",
              "firm": "Mizuho",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 295,
              "ptPrior": 264
            },
            {
              "date": "2026-09-25",
              "firm": "Baird",
              "action": "main",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Raises",
              "pt": 334,
              "ptPrior": 291
            },
            {
              "date": "2026-09-11",
              "firm": "Evercore ISI Group",
              "action": "main",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Raises",
              "pt": 320,
              "ptPrior": 300
            }
          ]
        },
        "nextEarnings": {
          "date": "2026-11-04",
          "upcoming": true,
          "estimated": false
        }
      },
      "cnbc": [
        {
          "title": "This drug researcher that just reported earnings could keep rallying, JPMorgan says",
          "url": "https://www.cnbc.com/2026/08/06/this-drug-researcher-will-rally-on-biotech-funding-boost-jpmorgan-says.html",
          "date": "2026-08-06",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves midday: Alphabet, SpaceX, Shopify & more",
          "url": "https://www.cnbc.com/2026/08/05/stocks-making-the-biggest-moves-midday-googl-spcx-shop-nem-podd.html",
          "date": "2026-08-05",
          "publisher": "CNBC",
          "kind": "article"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-27",
        "nameKo": "찰스 리버 래브러토리스 인터내셔널",
        "nameEn": "CHARLES RIVER LABORATORIES",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001100682&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-06-27",
              "derived": false,
              "revenue": 1004078000,
              "profit": 119888000,
              "netIncome": -1482000,
              "margin": 11.9,
              "yoy": {
                "revenue": -2.7,
                "profit": 19.7,
                "netIncome": -102.8,
                "priorEnd": "2025-06-28"
              }
            },
            {
              "periodEnd": "2026-03-28",
              "derived": false,
              "revenue": 995830000,
              "profit": 119897000,
              "netIncome": -14843000,
              "margin": 12,
              "yoy": {
                "revenue": 1.2,
                "profit": 60.6,
                "netIncome": -158.3,
                "priorEnd": "2025-03-29"
              }
            },
            {
              "periodEnd": "2025-12-27",
              "derived": true,
              "revenue": 994227000,
              "profit": -283440000,
              "netIncome": -276555000,
              "margin": -28.5,
              "yoy": {
                "revenue": -0.8,
                "profit": -69,
                "netIncome": -28.9,
                "priorEnd": "2024-12-28"
              }
            },
            {
              "periodEnd": "2025-09-27",
              "derived": false,
              "revenue": 1004852000,
              "profit": 133799000,
              "netIncome": 54422000,
              "margin": 13.3,
              "yoy": {
                "revenue": -0.5,
                "profit": 14,
                "netIncome": -21.9,
                "priorEnd": "2024-09-28"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "PGNY or CRL: Which Is the Better Value Stock Right Now?",
              "url": "https://www.nasdaq.com/articles/pgny-or-crl-which-better-value-stock-right-now",
              "date": "2026-10-07",
              "publisher": "Zacks"
            },
            {
              "title": "Charles River Laboratories International Consensus Price Target Increased by 11.46% to $307.39",
              "url": "https://www.nasdaq.com/articles/charles-river-laboratories-international-consensus-price-target-increased-1146-30739",
              "date": "2026-10-02",
              "publisher": "Fintel"
            },
            {
              "title": "Charles River Laboratories International Now #430 Largest Company, Surpassing Tyler Technologies",
              "url": "https://www.nasdaq.com/articles/charles-river-laboratories-international-now-430-largest-company-surpassing-tyler",
              "date": "2026-10-01",
              "publisher": "BNK Invest"
            },
            {
              "title": "Charles River Targets 5%-7% Growth, $300M Savings in 2030 Plan",
              "url": "https://www.nasdaq.com/articles/charles-river-targets-5-7-growth-300m-savings-2030-plan",
              "date": "2026-09-26",
              "publisher": "MarketBeat"
            },
            {
              "title": "PGNY vs. CRL: Which Stock Is the Better Value Option?",
              "url": "https://www.nasdaq.com/articles/pgny-vs-crl-which-stock-better-value-option",
              "date": "2026-09-18",
              "publisher": "Zacks"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-09-24",
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000142/crl-20260924.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl-20260805.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-11",
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1100682/000095010326007060/dp246529_8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-07",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000036/crl-20260507.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-25",
            "itemsKo": [
              "Reg FD 공시"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1100682/000162828026011395/crl-20260225.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-18",
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1100682/000095010326002326/dp241741_8k.htm"
          }
        ],
        "krReports": {
          "total": 1,
          "reports": [
            {
              "date": "2026-09-17",
              "broker": "키움증권",
              "analyst": "신민수",
              "title": "[찰스 리버 래브러토리스 인터내셔널 (NYS:CRL)] 바이오 안전성 평가 수주 회복으로 돌아온 성장세",
              "summary": "- 비임상 CRO·연구모델·제조 지원 서비스 기업, 신약 안전성 평가 업황이 중요- DSA 순수주/매출 1.19배로 4년 내 최고, 조정 EPS $3.02로 컨센서스 10.6% 상회- FY26 유기적 성장 0~1%·조정 EPS $11.15~11.45로 상향, 하반기 마진 +500bp",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlmxccqzmqzxlcgcgxecgq.pdf",
              "pages": "15"
            }
          ]
        }
      },
      "rank": {
        "m1": 4.55,
        "m3": 2.48,
        "m6": 1.94
      },
      "yahooNews": [
        {
          "title": "Charles River Laboratories International Insider Sold Shares Worth $8,414,700, According to a Recent SEC Filing",
          "url": "https://finance.yahoo.com/markets/stocks/articles/charles-river-laboratories-international-insider-205723305.html",
          "date": "2026-10-26",
          "publisher": "MT Newswires",
          "via": "Yahoo"
        },
        {
          "title": "Charles River Laboratories’ Q3 2026 Earnings: What to Expect",
          "url": "https://finance.yahoo.com/healthcare/articles/charles-river-laboratories-q3-2026-063256840.html",
          "date": "2026-10-26",
          "publisher": "Barchart",
          "via": "Yahoo"
        },
        {
          "title": "Global Clinical Trials Market Size, Share, Growth Trends, and Forecast, 2026-2035 | Clinical Trials Market set to more than Double to $144.4bn as Drugmakers Lean on Outside Researchers",
          "url": "https://finance.yahoo.com/healthcare/articles/global-clinical-trials-market-size-131600615.html",
          "date": "2026-10-23",
          "publisher": "GlobeNewswire",
          "via": "Yahoo"
        },
        {
          "title": "Labcorp, Charles River and FDA Partner on Drug Abuse Research",
          "url": "https://finance.yahoo.com/healthcare/articles/labcorp-charles-river-fda-partner-215510255.html",
          "date": "2026-10-22",
          "publisher": "MT Newswires",
          "via": "Yahoo"
        },
        {
          "title": "Charles River, Labcorp, and FDA Collaborate to Validate New Preclinical Methods for Abuse Potential Assessment",
          "url": "https://finance.yahoo.com/healthcare/articles/charles-river-labcorp-fda-collaborate-203000215.html",
          "date": "2026-10-22",
          "publisher": "Business Wire",
          "via": "Yahoo"
        },
        {
          "title": "Labcorp, Charles River and FDA Announce Research Collaboration to Advance Preclinical Methods for Evaluating Drug Abuse Potential",
          "url": "https://finance.yahoo.com/healthcare/articles/labcorp-charles-river-fda-announce-203000083.html",
          "date": "2026-10-22",
          "publisher": "PR Newswire",
          "via": "Yahoo"
        }
      ],
      "teamView": {
        "seojun": {
          "asOf": "2026-10-26",
          "grade": "A",
          "state": "post",
          "watch": false,
          "blocked": null,
          "distToPivotPct": 3.62,
          "fit": null
        },
        "doyun": {
          "lists": [
            "RS(6MO)"
          ],
          "lead": "바이오 안전성 평가 주문이 4년 내 최고로 회복되고 올해 이익 전망이 올라가면서 주가가 올랐다. 증권사 목표주가도 오르는 중이다. 다만 하반기 마진 개선이 실제로 확인돼야 이 이야기가 유지된다.",
          "researchedOn": "2026-10-22"
        },
        "jaemin": null,
        "holding": null
      },
      "market": {
        "verdict": "red",
        "ko": "🔴 10일선이 20일선 아래 4일째(2026-10-19부터) — 새로 사지 않고, 들고 있는 것도 정리 검토",
        "finra": "warn",
        "finraKo": "⚠️ 빚내서 산 주식(마진부채)이 1년 전보다 +31.4% — 주의선 +30% 초과"
      },
      "verified": {
        "checked": 5,
        "ok": 28,
        "unverified": 0,
        "dead": 0,
        "stripped": 7
      },
      "numberCut": 7,
      "deep": {
        "status": "done",
        "ticker": "CRL",
        "company": "찰스 리버 래브러토리스는 제약·바이오 회사의 신약 개발을 대신 해 주는 외주 연구기관이다. 가장 큰 사업은 임상 전 단계의 안전성 평가(DSA)로, 2026년 2분기 매출 6억 650만 달러를 올려 분기 매출의 절반을 넘는다. 실험용 동물 모델 공급과 바이오 의약품 품질검사·제조 지원도 같이 한다.",
        "lead": "신약 외주 주문이 4년 만에 가장 좋아지면서 주가가 올랐다. 가장 강한 근거는 2026년 2분기에 4년 만의 최고 수주를 기록하고 회사가 올해 전망을 상단으로 올린 점이다. 가장 큰 걱정은 매출 자체는 아직 제자리(올해 유기적 성장 0~1% 전망)이고 회계상 순이익이 적자라는 점이다. 11월 4일 실적에서 수주 회복이 이어지지 않으면 이 상승세는 깨질 수 있다.",
        "newsNarrative": "9월 24일 투자자의 날이 이번 상승의 분기점이었다. 회사가 2030년까지 연 5~7% 성장과 3억 달러 비용 절감을 제시하고 올해 실적이 전망 범위 상단에 올 것이라고 밝히면서 증권사 목표주가 상향이 15건 이어졌다. 그 바탕에는 8월에 발표한 2분기 실적이 있다 — 수주가 4년 만에 최고였고 조정 주당순이익 3.02달러로 예상을 10.3% 웃돌았다. 10월 들어서는 FDA·랩코프와의 공동연구가 발표됐고 주가는 10월 21일 하루에 344.87달러까지 뛰었다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "9월 24일 투자자의 날에서 2027~2030년 연평균 5~7% 유기적 매출 성장을 목표로 제시했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Charles River Laboratories Unveils Pathway to Purpose Strategy and 2030 Financial Targets",
                "publisher": "SEC EDGAR (Charles River 8-K 첨부 보도자료)",
                "url": "https://www.sec.gov/Archives/edgar/data/0001100682/000110068226000142/crlinvestorday2026pressr.htm",
                "date": "2026-09-24",
                "quote": "5% – 7% 2027-2030 CAGR",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n2",
            "statement": "같은 날 회사는 2026년 매출과 비GAAP 주당순이익이 기존 전망 범위의 상단에 올 것이라고 밝혔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Charles River Laboratories Unveils Pathway to Purpose Strategy and 2030 Financial Targets",
                "publisher": "SEC EDGAR (Charles River 8-K 첨부 보도자료)",
                "url": "https://www.sec.gov/Archives/edgar/data/0001100682/000110068226000142/crlinvestorday2026pressr.htm",
                "date": "2026-09-24",
                "quote": "revenue and non-GAAP earnings per share to be at the upper ends of their respective guidance ranges, primarily reflecting continued favorable demand from biopharmaceutical clients.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n3",
            "statement": "8월 5일 2분기 실적에서 신규 수주가 4년 만에 가장 많았다고 발표했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                "date": "2026-08-05",
                "quote": "We recorded the highest net book-to-bill in nearly four years.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n4",
            "statement": "키움증권은 9월 17일 자료에서 안전성 평가 부문 수주가 매출의 1.19배로 4년 내 최고이고 회사가 올해 조정 주당순이익 전망을 올렸다고 전했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[찰스 리버 래브러토리스 인터내셔널 (NYS:CRL)] 바이오 안전성 평가 수주 회복으로 돌아온 성장세",
                "publisher": "키움증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqlmxccqzmqzxlcgcgxecgq.pdf",
                "date": "2026-09-17",
                "quote": "- DSA 순수주/매출 1.19배로 4년 내 최고, 조정 EPS $3.02로 컨센서스 10.6% 상회- FY26 유기적 성장 0~1%·조정 EPS $11.15~11.45로 상향, 하반기 마진 +500bp",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "10월 22일 FDA·랩코프와 신약의 남용 가능성을 평가하는 새 검사법을 함께 개발하기로 했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Charles River, Labcorp, and FDA Collaborate to Validate New Preclinical Methods for Abuse Potential Assessment",
                "publisher": "Business Wire (Yahoo Finance 게재)",
                "url": "https://finance.yahoo.com/healthcare/articles/charles-river-labcorp-fda-collaborate-203000215.html",
                "date": "2026-10-22",
                "quote": "Research Collaboration Agreement (RCA) with the U.S. Food and Drug Administration (FDA) and Labcorp for developing sensitive screening tools to quantify and rank the abuse potential of new drugs.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n6",
            "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
            "evidence_level": "no_source",
            "sources": [
              {
                "title": "Charles River Laboratories International Insider Sold Shares Worth $8,414,700, According to a Recent SEC Filing",
                "publisher": "MT Newswires (Yahoo Finance 게재)",
                "url": "https://finance.yahoo.com/markets/stocks/articles/charles-river-laboratories-international-insider-205723305.html",
                "date": "2026-10-26",
                "quote": "Charles River Laboratories International Insider Sold Shares Worth $8,414,700, According to a Recent SEC Filing",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statementOriginal": "10월 26일 내부자가 841만 4,700달러어치 주식을 팔았다는 공시가 전해졌다.",
            "stripped": true
          }
        ],
        "financialsNarrative": "매출은 아직 늘지 않지만 이익의 질은 돌아오고 있다. 유기적 성장 0.1%는 2023년 3분기 이후 가장 높은 수치였다. 조정 주당순이익은 3.02달러였고 조정 영업이익률은 직전 분기보다 4.2%포인트 오른 20.5%가 됐다. 다만 회계 기준으로는 주당 0.03달러 손실이라 흑차로 완전히 돌아섰다고 말하기는 이르다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f2",
              "statement": "가장 큰 부문인 안전성 평가의 2분기 매출은 6억 650만 달러였다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                  "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                  "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                  "date": "2026-08-05",
                  "quote": "Revenue for the DSA segment was $606.5 million in the second quarter of 2026",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "f3",
              "statement": "2026년 2분기는 회계 기준으로 주당 0.03달러 손실이었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                  "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                  "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                  "date": "2026-08-05",
                  "quote": "GAAP loss per share of $(0.03)",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f4",
              "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
              "evidence_level": "no_source",
              "sources": [
                {
                  "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                  "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                  "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                  "date": "2026-08-05",
                  "quote": "Non-GAAP operating margin increased 420 basis points on a sequential basis to 20.5%",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statementOriginal": "일회성을 뺀 조정 영업이익률이 직전 분기보다 4.2%포인트 올라 20.5%가 됐다.",
              "stripped": true
            }
          ],
          "guidance": [
            {
              "id": "f5",
              "statement": "회사가 내놓은 2026년 유기적 매출 성장 전망은 0.0~1.0%로 사실상 제자리다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                  "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                  "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                  "date": "2026-08-05",
                  "quote": "\"Revenue growth/(decrease), organic\" range of \"0.0% - 1.0%\"",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f6",
              "statement": "2026년 조정 주당순이익 전망은 11.15~11.45달러다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                  "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                  "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                  "date": "2026-08-05",
                  "quote": "\"Non-GAAP EPS estimate\" of \"$11.15 – $11.45\"",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "raised",
            "claims": [
              {
                "id": "f7",
                "statement": "회사가 9월 24일 올해 매출·이익이 전망 범위 상단에 올 것이라고 밝히며 눈높이를 올렸다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River Laboratories Unveils Pathway to Purpose Strategy and 2030 Financial Targets",
                    "publisher": "SEC EDGAR (Charles River 8-K 첨부 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001100682/000110068226000142/crlinvestorday2026pressr.htm",
                    "date": "2026-09-24",
                    "quote": "revenue and non-GAAP earnings per share to be at the upper ends of their respective guidance ranges, primarily reflecting continued favorable demand from biopharmaceutical clients.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "f8",
                "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
                "evidence_level": "no_source",
                "sources": [
                  {
                    "title": "[찰스 리버 래브러토리스 인터내셔널 (NYS:CRL)] 바이오 안전성 평가 수주 회복으로 돌아온 성장세",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqlmxccqzmqzxlcgcgxecgq.pdf",
                    "date": "2026-09-17",
                    "quote": "- DSA 순수주/매출 1.19배로 4년 내 최고, 조정 EPS $3.02로 컨센서스 10.6% 상회- FY26 유기적 성장 0~1%·조정 EPS $11.15~11.45로 상향, 하반기 마진 +500bp",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statementOriginal": "키움증권은 회사가 올해 조정 주당순이익 전망을 11.15~11.45달러로 상향했고 하반기 마진이 5%포인트 개선될 것으로 봤다.",
                "stripped": true
              }
            ]
          }
        },
        "estimatesNarrative": "애널리스트들은 전망치를 조금씩 올리는 중이고 방향은 회사 발표와 맞는다. 올해 주당순이익 추정은 11.38달러로 90일 전보다 2.5% 올랐고 내년 추정 12.75달러는 3.4% 올랐다. 다만 올해 매출 추정은 -2.5%로 여전히 역성장이어서, 올라가는 것은 매출이 아니라 이익률이다. 최근 네 분기 실적이 모두 예상을 넘었고 2026년 2분기는 10.3% 상회했는데, 이는 매출 증가가 아니라 수주 회복과 비용 절감에서 나온 것이다.",
        "newDrivers": [
          {
            "what": "패스웨이 투 퍼포스 — 2030년까지의 새 경영 전략과 '크리에이트 더 퓨처' 비용 절감 프로그램",
            "kind": "management",
            "stage": "발표만",
            "since": "2026-09-24",
            "basis": [
              {
                "id": "d1",
                "statement": "9월 24일 투자자의 날에서 2027~2030년 재무 목표를 담은 새 전략을 공개했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River Laboratories Unveils Pathway to Purpose Strategy and 2030 Financial Targets",
                    "publisher": "SEC EDGAR (Charles River 8-K 첨부 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001100682/000110068226000142/crlinvestorday2026pressr.htm",
                    "date": "2026-09-24",
                    "quote": "5% – 7% 2027-2030 CAGR",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "d2",
                "statement": "회사는 2027~2030년 유기적 매출이 연평균 5~7% 늘어나는 것을 목표로 제시했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River Laboratories Unveils Pathway to Purpose Strategy and 2030 Financial Targets",
                    "publisher": "SEC EDGAR (Charles River 8-K 첨부 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001100682/000110068226000142/crlinvestorday2026pressr.htm",
                    "date": "2026-09-24",
                    "quote": "5% – 7% 2027-2030 CAGR",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "d3",
                "statement": "업무 단순화·자동화로 2027~2030년 누적 3억 달러 넘는 비용을 아끼겠다는 계획이다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River Laboratories Unveils Pathway to Purpose Strategy and 2030 Financial Targets",
                    "publisher": "SEC EDGAR (Charles River 8-K 첨부 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001100682/000110068226000142/crlinvestorday2026pressr.htm",
                    "date": "2026-09-24",
                    "quote": "generate over $300 million in cumulative savings from 2027 through 2030",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [
              {
                "id": "d4",
                "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
                "evidence_level": "no_source",
                "sources": [
                  {
                    "title": "Charles River Laboratories Unveils Pathway to Purpose Strategy and 2030 Financial Targets",
                    "publisher": "SEC EDGAR (Charles River 8-K 첨부 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001100682/000110068226000142/crlinvestorday2026pressr.htm",
                    "date": "2026-09-24",
                    "quote": "Low-double-digit 2027-2030 CAGR",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statementOriginal": "회사 자체 목표로 2027~2030년 비GAAP 주당순이익이 연평균 10%대 초반 성장한다고 밝혔다.",
                "stripped": true
              }
            ],
            "counter": [
              {
                "id": "d5",
                "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
                "evidence_level": "no_source",
                "sources": [
                  {
                    "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                    "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                    "date": "2026-08-05",
                    "quote": "\"Revenue growth/(decrease), organic\" range of \"0.0% - 1.0%\"",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statementOriginal": "2026년 유기적 매출 성장 전망은 0.0~1.0%여서 5~7% 목표까지 가려면 2027년부터 속도가 크게 붙어야 한다.",
                "stripped": true
              }
            ]
          },
          {
            "what": "신약 안전성 평가 수주 회복 — 제약사들이 미뤘던 임상 전 연구 주문을 다시 내기 시작한 업계 변화",
            "kind": "industry",
            "stage": "매출 발생 중",
            "since": "2026-08-05",
            "basis": [
              {
                "id": "d6",
                "statement": "2026년 2분기에 신규 수주가 4년 만에 가장 많았다고 회사가 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                    "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                    "date": "2026-08-05",
                    "quote": "We recorded the highest net book-to-bill in nearly four years.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "d7",
                "statement": "안전성 평가 부문 매출이 유기적으로 0.2% 늘었고 규제용 안전성 시험 물량 증가가 이유다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                    "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                    "date": "2026-08-05",
                    "quote": "Organic revenue increased by 0.2%, driven primarily by higher study volume for regulated safety assessment services.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "d8",
                "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
                "evidence_level": "no_source",
                "sources": [
                  {
                    "title": "[찰스 리버 래브러토리스 인터내셔널 (NYS:CRL)] 바이오 안전성 평가 수주 회복으로 돌아온 성장세",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqlmxccqzmqzxlcgcgxecgq.pdf",
                    "date": "2026-09-17",
                    "quote": "- DSA 순수주/매출 1.19배로 4년 내 최고, 조정 EPS $3.02로 컨센서스 10.6% 상회- FY26 유기적 성장 0~1%·조정 EPS $11.15~11.45로 상향, 하반기 마진 +500bp",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ],
                "statementOriginal": "키움증권은 수주 회복으로 하반기 마진이 5%포인트 개선될 것으로 봤다.",
                "stripped": true
              }
            ],
            "expectedGrowth": [
              {
                "id": "d9",
                "statement": "키움증권 자료 기준 2026년 조정 주당순이익 전망은 11.15~11.45달러다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[찰스 리버 래브러토리스 인터내셔널 (NYS:CRL)] 바이오 안전성 평가 수주 회복으로 돌아온 성장세",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqlmxccqzmqzxlcgcgxecgq.pdf",
                    "date": "2026-09-17",
                    "quote": "- DSA 순수주/매출 1.19배로 4년 내 최고, 조정 EPS $3.02로 컨센서스 10.6% 상회- FY26 유기적 성장 0~1%·조정 EPS $11.15~11.45로 상향, 하반기 마진 +500bp",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "d10",
                "statement": "수주가 늘어도 아직 매출로는 거의 나오지 않아 2분기 유기적 성장은 0.1%에 머물렀다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                    "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                    "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                    "date": "2026-08-05",
                    "quote": "Organic revenue growth of 0.1% reached the highest level since the third quarter of 2023.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "FDA·랩코프와의 공동연구 — 신약의 남용 가능성을 더 정확히 걸러내는 새 검사법 개발",
            "kind": "contract",
            "stage": "발표만",
            "since": "2026-10-22",
            "basis": [
              {
                "id": "d11",
                "statement": "FDA·랩코프와 연구협력 계약을 맺고 남용 가능성을 수치로 매기는 선별 도구를 함께 만든다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River, Labcorp, and FDA Collaborate to Validate New Preclinical Methods for Abuse Potential Assessment",
                    "publisher": "Business Wire (Yahoo Finance 게재)",
                    "url": "https://finance.yahoo.com/healthcare/articles/charles-river-labcorp-fda-collaborate-203000215.html",
                    "date": "2026-10-22",
                    "quote": "Research Collaboration Agreement (RCA) with the U.S. Food and Drug Administration (FDA) and Labcorp for developing sensitive screening tools to quantify and rank the abuse potential of new drugs.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d12",
                "statement": "매타완 시설의 예비 연구에서 이 접근법이 가능하다는 초기 자료를 확보했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Charles River, Labcorp, and FDA Collaborate to Validate New Preclinical Methods for Abuse Potential Assessment",
                    "publisher": "Business Wire (Yahoo Finance 게재)",
                    "url": "https://finance.yahoo.com/healthcare/articles/charles-river-labcorp-fda-collaborate-203000215.html",
                    "date": "2026-10-22",
                    "quote": "provided preliminary proof-of-concept data that demonstrated the promise of this approach.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": []
          }
        ],
        "nNarrative": "새로운 것은 제품이 아니라 회사를 바꾸는 계획과 업계 수요의 전환이다. 9월 24일 투자자의 날에서 2030년까지의 새 전략과 비용 절감 프로그램을 공개했고, 업계에서는 제약사들이 미뤘던 임상 전 연구 주문을 다시 내기 시작했다. 매출 쪽 영향은 안전성 평가 부문 6억 650만 달러로 이미 나타나지만 증가폭은 0.2%에 그친다. 이익 쪽 근거는 누적 3억 달러 비용 절감과 하반기 마진 5%포인트 개선 전망이다. 기대 성장률은 회사 목표로 2027~2030년 매출 연 5~7%, 주당순이익 연 10%대 초반이다. 10월 22일 FDA·랩코프 공동연구는 새 일거리지만 금액이 공개되지 않아 매출 영향은 아직 숫자로 확인되지 않는다.",
        "nVerdict": "충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순이익 전년비 -102.8% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 3개 분기 순이익 -102.8% / -158.3% / 적자확대 — 4개 분기 모두 플러스가 아니다. 3년 추세·자기자본이익률은 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "2030년 전략과 누적 3억 달러 비용 절감 발표(9/24), 수주 4년 내 최고, FDA·랩코프 공동연구(10/22)"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 1.57배 · 기준 0.7 이하 · 상장주식 4,774만 주 · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1개월 4.55% · 3개월 2.48% · 6개월 1.94% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "시장 판정 빨강 · 빚내서 산 주식이 1년 전보다 +31.4%로 주의선 초과"
          }
        ],
        "risks": [
          {
            "id": "r1",
            "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
            "evidence_level": "no_source",
            "sources": [
              {
                "title": "Charles River Laboratories International Insider Sold Shares Worth $8,414,700, According to a Recent SEC Filing",
                "publisher": "MT Newswires (Yahoo Finance 게재)",
                "url": "https://finance.yahoo.com/markets/stocks/articles/charles-river-laboratories-international-insider-205723305.html",
                "date": "2026-10-26",
                "quote": "Charles River Laboratories International Insider Sold Shares Worth $8,414,700, According to a Recent SEC Filing",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statementOriginal": "내부자가 10월 26일 841만 4,700달러어치 주식을 매도했다.",
            "stripped": true
          },
          {
            "id": "r2",
            "statement": "회사 스스로 2026년 유기적 매출 성장을 0.0~1.0%로 보고 있어 주가 상승만큼 매출이 늘고 있지 않다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                "date": "2026-08-05",
                "quote": "\"Revenue growth/(decrease), organic\" range of \"0.0% - 1.0%\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r3",
            "statement": "2026년 2분기는 회계 기준으로 주당 0.03달러 손실이어서 이익 회복은 아직 조정 수치에서만 보인다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Charles River Laboratories 2026년 2분기 실적 발표",
                "publisher": "SEC EDGAR (8-K 첨부 실적 보도자료)",
                "url": "https://www.sec.gov/Archives/edgar/data/1100682/000110068226000115/crl2q26earningsrelease.htm",
                "date": "2026-08-05",
                "quote": "GAAP loss per share of $(0.03)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "매출의 절반 이상이 신약 안전성 평가 한 부문에서 나와 제약사 연구개발 예산이 줄면 바로 타격을 받는다.",
          "고객인 바이오텍 기업들의 자금 조달 환경에 수주가 좌우된다.",
          "규제기관이 임상 전 시험 요구 방식을 바꾸면 기존 서비스 수요가 달라진다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 56.2% · 기준 30% 이상"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "횡보 2.2주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "충족",
            "evidence": "저점 상승 1회 · 진폭 0.77배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "횡보 깊이 13.5% · 하루 평균 변동폭 4.4%의 3.1배 · 선행 상승의 절반인 28%보다 얕다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 357.27 · 20일선 309.79 · 50일선 295.49"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 1.57배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "충족",
            "evidence": "2026-10-21 돌파봉 거래량이 20일 평균의 2.8배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "2026-10-21 피벗 333.3 을 이미 넘었고 현재가는 그보다 7.19% 위(하루 변동폭의 1.64배) — 추격 구간"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절까지 3.94% · 하루 평균 변동폭 4.4% 이내"
          },
          {
            "item": "10일선 이격",
            "status": "미충족",
            "evidence": "10일선 위로 하루 변동폭의 2.3배 · 기준 2배 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "시장 판정 빨강 — 10일선이 20일선 아래 4일째"
          }
        ],
        "chartObservation": {
          "base": "직전 쉬는 구간은 2.2주이고 그 안에서 저점이 한 번 높아졌다. 움직이는 폭은 이전의 0.77배로 좁아졌다. 구간 깊이는 13.5%로 선행 상승 56.2%의 절반인 28%보다 얕다.",
          "volume": "쉬는 동안 줄었던 거래량이 최근 다시 크게 늘었다. 10월 19일 50만 6,600주까지 줄었다가 10월 21일 274만 4,500주로 뛰었다. 최근 5일 거래량은 20일 평균의 1.57배로 거래량이 마른 상태가 아니다.",
          "position": "현재가 357.27달러는 피벗 333.3달러를 7.19% 위로 넘어선 자리다. 예비 손절 320.18달러까지는 3.94% 아래이고 10일선과는 하루 변동폭의 2.3배 떨어져 있다. 10월 26일 종가는 그날 고저폭의 96% 위치에서 마감했다.",
          "maStack": "가격이 20일선 309.79달러, 50일선 295.49달러, 150일선 229.96달러를 모두 위에 두고 있다. 20일선 기울기는 +2.17%로 오르고 있다.",
          "note": "그림과 숫자가 일치한다. 10월 21일 긴 양봉과 함께 거래량 막대가 치솟는 모습이 그대로 보인다."
        },
        "entryChecklist": [
          "시장 판정이 빨간불에서 벗어나 10일선이 20일선 위로 다시 올라서는지",
          "2026년 11월 4일 3분기 실적에서 수주 회복과 올해 조정 주당순이익 11.15~11.45달러 전망이 유지되는지",
          "실적 이후 새로 만들어지는 쉬는 구간의 저점과 그때 생기는 피벗이 어디인지",
          "현재가 357.27달러가 10일선 쪽으로 돌아와 이격이 하루 변동폭 2배 이내로 줄어드는지",
          "최근 5일 거래량이 20일 평균의 0.7배 수준까지 줄어드는지"
        ],
        "earningsRisk": "매매 달력에는 확정된 실적 발표 일정이 없으나, 애널리스트 전망치 자료는 다음 실적일을 2026년 11월 4일로 적고 있다. 일주일 뒤라 결과에 따라 주가가 크게 움직일 수 있는 구간이다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "f1"
          ],
          "reasons": [
            "f1: statement의 '2026년 2분기 매출은 10억 달러'가 quote(Organic revenue growth of 0.1%...)에 명시되지 않음. f2에서 DSA 부문만 $606.5M인데 전체 매출 10억 달러는 근거가 없음",
            "lead: '10월 21일 이미 피벗 333.3달러를 넘어 추격 구간에 들어왔고 시장 판정이 빨간불'은 어떤 claim의 quote에도 없는 차트 판정 — CLAUDE.md 지침(모든 팀·실장은 차트 모양을 판정하지 않는다)에 위배"
          ],
          "leadFixed": true,
          "financialsNarrativeFixed": true
        },
        "leadOriginal": "신약 외주 주문이 4년 만에 가장 좋아지면서 주가가 5개월 만에 두 배 넘게 올랐다. 가장 강한 근거는 2026년 2분기에 4년 만의 최고 수주를 기록하고 회사가 올해 전망을 상단으로 올린 점이다. 가장 큰 걱정은 매출 자체는 아직 제자리(올해 유기적 성장 0~1% 전망)이고 회계상 순이익이 적자라는 점이다. 10월 21일 이미 피벗 333.3달러를 넘어 추격 구간에 들어왔고 시장 판정이 빨간불이라, 11월 4일 실적에서 수주 회복이 이어지지 않으면 이 그림은 깨진다.",
        "financialsNarrativeOriginal": "매출은 아직 늘지 않지만 이익의 질은 돌아오고 있다. 2026년 2분기 매출은 10억 달러로 유기적 성장 0.1%에 그쳤는데, 이게 2023년 3분기 이후 가장 높은 수치다. 조정 주당순이익은 3.02달러였고 조정 영업이익률은 직전 분기보다 4.2%포인트 오른 20.5%가 됐다. 다만 회계 기준으로는 주당 0.03달러 손실이라 흑자로 완전히 돌아섰다고 말하기는 이르다.",
        "consensus": {
          "saleCy": -2.44,
          "saleNy": 2.55,
          "epsCy": 10.64,
          "epsNy": 12.11,
          "cyTrend": 0.39,
          "nyTrend": 0.32
        },
        "researchedOn": "2026-10-27",
        "session": "2026-10-26",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "BLK",
      "nameKo": "블랙록",
      "sector": "Financial Services",
      "industry": "Asset Management",
      "industryRank": null,
      "requestedOn": "2026-10-17",
      "session": "2026-10-16",
      "at": "2026-10-17T04:37:56.894Z",
      "verdict": "조건부",
      "verdictLine": "사모 수수료와 분기 실적은 사상 최대지만, 8주 횡보에서 거래량이 평균의 1.51배로 오히려 늘고 피벗까지 1.93 ADR 남아 조건부다.",
      "basis": [
        {
          "point": "사모시장 수수료율이 전사 평균의 다섯 배라, 운용자산의 2%가 기본보수의 11%를 만든다.",
          "side": "for",
          "checkRef": "rv1"
        },
        {
          "point": "고보수 상품 비중이 늘며 매출은 19%, 비용은 14% 늘어 영업이익률이 47.8%로 올랐다.",
          "side": "for",
          "checkRef": "pf1"
        },
        {
          "point": "상대강도가 1개월 상위 17.9%, 3개월 24.3%로 업종 안에서 앞서 있다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "횡보 중 거래량이 줄지 않고 20일 평균의 1.51배로 늘어 기준 0.7배를 크게 벗어났다.",
          "side": "against",
          "checkRef": "차트:거래량 마름"
        },
        {
          "point": "저점 상승이 0회이고 진폭이 1.26배로 넓어져 베이스가 조여지지 않았다.",
          "side": "against",
          "checkRef": "차트:저점 높아짐"
        }
      ],
      "conditions": [
        "피벗 1187.17달러를 거래량 20일 평균 2배 이상으로 종가 돌파",
        "최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어 횡보가 조여지는 것",
        "시장 판정이 노랑에서 초록으로 전환",
        "종가가 50일선 1106.41달러 위를 유지"
      ],
      "invalidation": "피벗 1187.17달러를 넘은 뒤 예비 손절 1161.01달러 아래로 되밀리면 이 판단은 틀린 것이다. 돌파 없이 50일선 1106.41달러를 종가로 내주는 경우도 마찬가지다.",
      "dataLimits": "기관 보유 자료가 없고, CNBC 기사 본문은 열리지 않아 제목만 근거로 썼다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": false,
        "reasons": [],
        "asOf": {
          "bar": "2026-10-16",
          "market": "2026-10-16"
        }
      },
      "setup": {
        "state": "pre",
        "grade": "C",
        "pivot": 1187.17,
        "stop": 1161.01,
        "distToPivotPct": -4.45,
        "distToPivotAdr": -1.93,
        "riskPerSharePct": 2.2,
        "extensionAdr": 1.92,
        "adrPct": 2.31,
        "breakDate": null,
        "chase": false,
        "metrics": {
          "baseBars": 40,
          "baseWeeks": 8,
          "depthPct": 14.3,
          "priorMovePct": 25.3,
          "higherLows": 0,
          "contraction": 1.26,
          "closeRange10Adr": 2.6,
          "surf10": 1.92,
          "surf20": 2.19,
          "slope20": 0.91,
          "baseLow": 1017.46,
          "lastSwingLow": 1040.42
        },
        "reasons": [
          "✗ 선행 상승 +25%",
          "베이스 8주",
          "깊이 14.3%",
          "✗ 저점 상승 0회",
          "✗ 진폭 1.26배 · 10일 종가폭 2.6 ADR",
          "✗ 10일선 +1.9 ADR · 20일선 +2.2 ADR",
          "20일선 기울기 +0.91%"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "미충족",
            "evidence": "선행 상승 25% (약함) · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 8주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 1.26배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "미충족",
            "evidence": "베이스 깊이 14.3% · ADR 2.31%의 6.2배 · 선행 상승의 절반 13%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 1134.38 · 20일선 1077.06 · 50일선 1106.41"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.51배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "아직 돌파 전 — 돌파일에 20일 평균 2배가 실리는지 본다"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "피벗 1187.17까지 -4.45% (-1.93 ADR) · 기준 1 ADR 이내"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 2.2% · ADR 2.31%"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.9 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 노랑(보통)"
          }
        ],
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순이익 전년비 20.2% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "사이트 최근 3분기 순이익 20%/46%/-33% — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 96%"
          },
          {
            "item": "S 수급",
            "status": "충족",
            "evidence": "최근 5일 거래량 1.51배(20일 평균 대비) · 오늘 거래대금 2.03배(상승일) · 상장주식 155M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 17.9% · 3M 24.3% · 6M 39.54% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 노랑 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "BLK",
        "fetchedAt": "2026-10-17",
        "source": "한국투자증권 Open API",
        "per": 26.53,
        "pbr": 3.2,
        "eps": 42.76,
        "bps": 354.32,
        "shares": 154869000,
        "marketCapM": 175680,
        "high52": 1184.5743,
        "high52Date": "2025-10-16",
        "low52": 907.591,
        "low52Date": "2026-03-12",
        "last": 1134.38,
        "prevClose": 1120.78,
        "nameKo": "블랙록",
        "nameEn": "BLACKROCK INC",
        "listedOn": null,
        "exchange": "뉴욕거래소",
        "listedShares": 154869000
      },
      "estimates": {
        "ticker": "BLK",
        "url": "https://finance.yahoo.com/quote/BLK/analysis/",
        "fetchedAt": "2026-10-17",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-12-31",
            "eps": 15.45,
            "epsLow": 14.88,
            "epsHigh": 16.05,
            "epsYearAgo": 13.16,
            "epsAnalysts": 11,
            "epsGrowth": 17.4,
            "epsCur": "USD",
            "rev": 7903573330,
            "revAnalysts": 6,
            "revYearAgo": 7008000000,
            "revGrowth": 12.8,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2027-03-31",
            "eps": 14.81,
            "epsLow": 14,
            "epsHigh": 15.97,
            "epsYearAgo": 12.53,
            "epsAnalysts": 9,
            "epsGrowth": 18.2,
            "epsCur": "USD",
            "rev": 7625175820,
            "revAnalysts": 5,
            "revYearAgo": 6698000000,
            "revGrowth": 13.8,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "eps": 57.86,
            "epsLow": 56.84,
            "epsHigh": 59.09,
            "epsYearAgo": 48.09,
            "epsAnalysts": 14,
            "epsGrowth": 20.3,
            "epsCur": "USD",
            "rev": 29303996920,
            "revAnalysts": 10,
            "revYearAgo": 24216000000,
            "revGrowth": 21,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "eps": 64.66,
            "epsLow": 60.03,
            "epsHigh": 67.84,
            "epsYearAgo": 57.86,
            "epsAnalysts": 18,
            "epsGrowth": 11.8,
            "epsCur": "USD",
            "rev": 32352318070,
            "revAnalysts": 11,
            "revYearAgo": 29303996920,
            "revGrowth": 10.4,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 15.45,
            "d7": 0.7,
            "d30": 0.1,
            "d90": 0.6,
            "ago90": 15.36,
            "up7": 1,
            "up30": 1,
            "down7": 6,
            "down30": 7
          },
          {
            "period": "+1q",
            "endDate": "2027-03-31",
            "cur": "USD",
            "now": 14.81,
            "d7": -0.6,
            "d30": 0.6,
            "d90": 1.5,
            "ago90": 14.59,
            "up7": 1,
            "up30": 1,
            "down7": 4,
            "down30": 5
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 57.86,
            "d7": 3.2,
            "d30": 2.8,
            "d90": 2.9,
            "ago90": 56.25,
            "up7": 2,
            "up30": 3,
            "down7": 7,
            "down30": 8
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "cur": "USD",
            "now": 64.66,
            "d7": 0.8,
            "d30": 0.5,
            "d90": 1.2,
            "ago90": 63.9,
            "up7": 1,
            "up30": 1,
            "down7": 8,
            "down30": 10
          }
        ],
        "surprises": [
          {
            "quarter": "2026-09-30",
            "actual": 15.93,
            "estimate": 14.3,
            "surprisePct": 11.4,
            "cur": "USD"
          },
          {
            "quarter": "2026-06-30",
            "actual": 13.91,
            "estimate": 12.69,
            "surprisePct": 9.6,
            "cur": "USD"
          },
          {
            "quarter": "2026-03-31",
            "actual": 12.53,
            "estimate": 11.46,
            "surprisePct": 9.4,
            "cur": "USD"
          },
          {
            "quarter": "2025-12-31",
            "actual": 13.16,
            "estimate": 12.19,
            "surprisePct": 7.9,
            "cur": "USD"
          }
        ],
        "beats": 4,
        "ratings": {
          "upgrades": 0,
          "downgrades": 0,
          "initiations": 1,
          "ptRaised": 8,
          "ptLowered": 8,
          "total": 17,
          "recent": [
            {
              "date": "2026-10-15",
              "firm": "UBS",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 1300,
              "ptPrior": 1277
            },
            {
              "date": "2026-10-15",
              "firm": "Morgan Stanley",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 1531,
              "ptPrior": 1468
            },
            {
              "date": "2026-10-15",
              "firm": "JP Morgan",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 1449,
              "ptPrior": 1435
            },
            {
              "date": "2026-10-15",
              "firm": "Barclays",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Lowers",
              "pt": 1410,
              "ptPrior": 1420
            },
            {
              "date": "2026-10-15",
              "firm": "Wells Fargo",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 1250,
              "ptPrior": 1230
            },
            {
              "date": "2026-10-15",
              "firm": "Keefe, Bruyette & Woods",
              "action": "main",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Raises",
              "pt": 1310,
              "ptPrior": 1290
            },
            {
              "date": "2026-10-13",
              "firm": "Morgan Stanley",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Lowers",
              "pt": 1468,
              "ptPrior": 1479
            },
            {
              "date": "2026-10-12",
              "firm": "TD Cowen",
              "action": "main",
              "from": "Hold",
              "to": "Hold",
              "ptAction": "Raises",
              "pt": 1212,
              "ptPrior": 1190
            },
            {
              "date": "2026-10-09",
              "firm": "Evercore ISI Group",
              "action": "main",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Lowers",
              "pt": 1275,
              "ptPrior": 1300
            },
            {
              "date": "2026-10-08",
              "firm": "Wells Fargo",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Lowers",
              "pt": 1230,
              "ptPrior": 1245
            }
          ]
        },
        "nextEarnings": {
          "date": "2027-01-14",
          "upcoming": true,
          "estimated": true
        }
      },
      "cnbc": [
        {
          "title": "Stocks making the biggest moves midday: CoreWeave, Dell, HPE & more",
          "url": "https://www.cnbc.com/2026/10/14/stocks-making-the-biggest-moves-midday-crwv-bsp-dell-hpe-bac.html",
          "date": "2026-10-14",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "BlackRock's Larry Fink warns a data center moratorium could trigger a recession",
          "url": "https://www.cnbc.com/2026/10/14/blackrocks-fink-warns-data-center-moratorium-could-spark-a-recession.html",
          "date": "2026-10-14",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Time to lock in Treasury yields? BlackRock unveils bonds pivot",
          "url": "https://www.cnbc.com/2026/10/13/blackrock-treasurys-bonds-us-equities.html",
          "date": "2026-10-13",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Banks are set to report this week. Here's what the options market expects",
          "url": "https://www.cnbc.com/2026/10/12/banks-are-set-to-report-this-week-heres-what-the-options-market-expects.html",
          "date": "2026-10-12",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Wednesday, October 14, 2026: Cramer says this financial firm is the one investors want to buy",
          "url": "https://www.cnbc.com/investingclub/video/2026/10/14/wednesday-october-14-2026-cramer-says-this-financial-firm-is-the-one-investors-want-to-buy.html",
          "date": "2026-10-14",
          "publisher": "CNBC",
          "kind": "video"
        },
        {
          "title": "News Update – Market Open",
          "url": "https://www.cnbc.com/video/2026/10/14/market-open-october-14-2026.html",
          "date": "2026-10-14",
          "publisher": "CNBC",
          "kind": "video"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-17",
        "nameKo": "블랙록",
        "nameEn": "BLACKROCK INC",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002012383&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 7084000000,
              "profit": 2461000000,
              "netIncome": 1914000000,
              "margin": 34.7,
              "yoy": {
                "revenue": 30.6,
                "profit": 42.2,
                "netIncome": 20.2,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 6698000000,
              "profit": 2814000000,
              "netIncome": 2212000000,
              "margin": 42,
              "yoy": {
                "revenue": 27,
                "profit": 65.7,
                "netIncome": 46.5,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 7008000000,
              "profit": 1661000000,
              "netIncome": 1127000000,
              "margin": 23.7,
              "yoy": {
                "revenue": 23.4,
                "profit": -20,
                "netIncome": -32.5,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 6509000000,
              "profit": 1955000000,
              "netIncome": 1323000000,
              "margin": 30,
              "yoy": {
                "revenue": 25.2,
                "profit": -2.5,
                "netIncome": -18.9,
                "priorEnd": "2024-09-30"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "BLK Q3 Earnings Call Puts AI Financing and Fees in Focus",
              "url": "https://www.nasdaq.com/articles/blk-q3-earnings-call-puts-ai-financing-and-fees-focus",
              "date": "2026-10-15",
              "publisher": "Zacks"
            },
            {
              "title": "BlackRock (BLK) Q3 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/blackrock-blk-q3-2026-earnings-call-transcript",
              "date": "2026-10-14",
              "publisher": "The Motley Fool"
            },
            {
              "title": "BLK Q3 Earnings Beat, Stock Gains Pre-Market on Revenue & AUM Growth",
              "url": "https://www.nasdaq.com/articles/blk-q3-earnings-beat-stock-gains-pre-market-revenue-aum-growth",
              "date": "2026-10-14",
              "publisher": "Zacks"
            },
            {
              "title": "Compared to Estimates, BlackRock (BLK) Q3 Earnings: A Look at Key Metrics",
              "url": "https://www.nasdaq.com/articles/compared-estimates-blackrock-blk-q3-earnings-look-key-metrics",
              "date": "2026-10-14",
              "publisher": "Zacks"
            },
            {
              "title": "BlackRock (BLK) Tops Q3 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/blackrock-blk-tops-q3-earnings-and-revenue-estimates",
              "date": "2026-10-14",
              "publisher": "Zacks"
            },
            {
              "title": "Blackrock Inc. Reveals Climb In Q3 Bottom Line",
              "url": "https://www.nasdaq.com/articles/blackrock-inc-reveals-climb-q3-bottom-line",
              "date": "2026-10-14",
              "publisher": "RTTNews"
            },
            {
              "title": "Blackrock Q3 26 Earnings Conference Call At 7:30 AM ET",
              "url": "https://www.nasdaq.com/articles/blackrock-q3-26-earnings-conference-call-7-30-am-et",
              "date": "2026-10-14",
              "publisher": "RTTNews"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-10-14",
            "itemsKo": [
              "실적 발표",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2012383/000119312526420979/blk-20261014.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-15",
            "itemsKo": [
              "실적 발표",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2012383/000119312526304013/blk-20260715.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-30",
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2012383/000119312526290830/d108689d8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-22",
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2012383/000119312526237027/d30456d8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-14",
            "itemsKo": [
              "실적 발표",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2012383/000119312526153768/blk-20260414.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-03",
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2012383/000119312526142112/d101747d8k.htm"
          }
        ],
        "krReports": {
          "total": 6,
          "reports": [
            {
              "date": "2026-10-15",
              "broker": "키움증권",
              "analyst": "김승혁",
              "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
              "summary": "- 블랙록은 세계 최대 자산운용사로 ETF·사모·대체투자를 운용하는 금융 기업- FY3Q26은 고보수 자금 유입과 채권 수요 확대로 매출·영업이익·EPS 사상 최대- AI 인프라 자금 수요와 작년 약정분의 집행 전환으로 사모 수수료 성장 지속 전망",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
              "pages": "6"
            },
            {
              "date": "2026-07-16",
              "broker": "키움증권",
              "analyst": "김승혁",
              "title": "[블랙록 (NYS:BLK)] 1차 해소된 사모시장 우려",
              "summary": "- 블랙록은 세계 최대 자산운용사로 ETF·사모·대체투자를 운용하는 금융 기업- FY2Q26 기준 AUM과 순유입액은 사상 최고치를 기록했고 사모신용 역시 안정적- 제한적인 사모시장 환매 요청과 수수료율 성장이 확인될 경우 긍정적 성장 전망",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlkkxxlqzlzgeggcgxeceq.pdf",
              "pages": "5"
            },
            {
              "date": "2026-04-17",
              "broker": "키움증권",
              "analyst": "김승혁",
              "title": "[블랙록 (NYS:BLK)] 단기 변동 vs 구조적 성장",
              "summary": "- 블랙록은 세계 최대 자산운용사로 ETF·사모·대체투자를 운용하는 금융 기업- FY1Q26 실적은 전 부문 컨센서스를 상회하며 조정 영업이익률 44.5% 기록- 인수 효과 본격화되고 유동성 환경 개선되며 긍정적 성장 흐름 전망",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqxilclmlxxzmmgcgxeceq.pdf",
              "pages": "6"
            },
            {
              "date": "2026-04-15",
              "broker": "한화증권",
              "analyst": "박제인",
              "title": "[블랙록 (NYS:BLK)] 실적으로 증명, 운용사 주가 반등 신호 확인",
              "summary": "- 블랙록의 FY 1Q26 매출액은 67억 달러(YoY +27%), EPS는 12.53 달 러(YoY +10.9%)로 각각 컨센서스를 3.1%, 9.1% 상회했다. 영업이익 은 28.1억 달러(YoY +65.7%), 영업이익률은 42%(YoY +9.8%p)를 기 록했다. 조정 영업이익률은 44.5%(YoY +2.3%p), 성과 수수료 및 관 련 보상을 제외한 반복 수수료 기반 이익률은 45.6%(YoY +1.8%p)을 달성했다. 1분기 AUM 순유입액은 1,300억 달러(YoY +54%), 분기말 AUM은 13.9조 달러(YoY +20%)였다. 1분기에 4.5억 달러 규모의 자 사주를 매입했고, 분기 배당금을 10% 인상(주당 5.73 달러)했다.- 블랙록은 45% 이상의 조정 영업이익률을 목표로 하고 있으며, 장기적 으로는 46~47%까지 확대할 계획이다. 2030년까지 5% 이상의 본업 운용보수 성장률 달성을 목표로 하고 있으며, 2026년 남은 기간 동안 에 분기당 최소 4.5억 달러 규모의 자사주 매입을 지속할 것이라고 언 급했다. 기술 서비스 부문은 장기적으로 두 자릿수 초중반의 연간 계 약 금액(ACV) 유지 목표를 제시했다.",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqxgmgqilgekqcgcgxeceq.pdf",
              "pages": "6"
            },
            {
              "date": "2026-01-16",
              "broker": "키움증권",
              "analyst": "김승혁",
              "title": "[블랙록 (NYS:BLK)] 재차 달성한 사상 최고 수준의 AUM",
              "summary": "- 블랙록은 세계 최대 자산운용사로 ETF·사모·대체투자를 운용하는 금융 기업- FY4Q25 기준 AUM 순유입액은 사상 최고치를 경신하며 긍정적 실적을 기록- 지속적 AUM 확장 및 고마진 수익구조 확보 기반 고무적인 흐름 기대",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxlqkixgicxziegcgxeceq.pdf",
              "pages": "7"
            },
            {
              "date": "2025-11-05",
              "broker": "키움증권",
              "analyst": "조민주",
              "title": "[블랙록 (NYS:BLK)] 투자 포인트",
              "summary": "- 투자 포인트: 1)트럼프 정권 하에 금융 규제 및 M&A 심사 기준 완화와 법인세 인하 효과로 캐피탈 시장 가속화 및 기업들의 M&A가 활발해지면서 동사와 같은 자산 관리 및 투자 서비스 기업에 수혜. OBBBA를 통해 법인세율 인하 조항 영구적 연장, R&D 비용 즉시 공제와 100% 보너스 감가상각 영구화 등이 적용되면 기업의 현금흐름 개선 뿐만 아니라 시중의 유동성을 높이는 데에도 일조할 전망- 2030년까지 사모 시장과 기술 분야 매출 비중 30%를 목표로 설정. 사모 신용 및 인프라 투자에 중점을 둔 HPS Investment Partners와 Global Infrastructure Partners 인수해 상품 라인업 확대- 실적 및 밸류에이션: FY3Q25 모든 실적 지표 컨센서스 상회. 특히 AUM이 YoY +17% 급등한 13.5조 달러로 사상 최고치 경신. 단순한 시장 반등 때문이 아닌 ETF 중심 자금 유입이 확대된 결과",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxgillmmmkeilxgcgxeceq.pdf",
              "pages": "3"
            }
          ]
        }
      },
      "rank": {
        "m1": 17.9,
        "m3": 24.3,
        "m6": 39.54
      },
      "verified": {
        "checked": 6,
        "ok": 25,
        "unverified": 0,
        "dead": 0,
        "stripped": 0
      },
      "numberCut": 1,
      "deep": {
        "status": "done",
        "ticker": "BLK",
        "company": "ETF·채권 상품에서 받는 운용보수가 본업이고, 여기에 사모·인프라 같은 대체투자 수수료와 리스크 관리 시스템(알라딘) 구독료가 더해진다. 최근 성장 축은 수수료율이 높은 사모시장과 액티브·채권 ETF다.",
        "lead": "3분기 실적이 매출·이익률 모두 분기 최대를 찍으면서 관심 종목이 됐다. 가장 강한 근거는 수수료율이 전사 평균의 다섯 배인 사모시장 자금이 실제로 집행되기 시작했다는 점이다. 가장 큰 걱정은 차트 쪽으로, 8주 횡보 동안 거래량이 줄지 않았고 저점도 높아지지 않았다.",
        "newsNarrative": "10월 14일 발표한 3분기 실적에서 매출이 77.52억 달러로 1년 전보다 19.1% 늘며 분기 최대를 기록했다. 수수료율이 높은 사모·액티브 상품으로 자금이 몰린 덕에 조정 영업이익률이 47.8%까지 올랐다. 발표 뒤 10월 15일 종가는 1120.78달러로 전날 1073.79달러에서 올라섰다. 같은 날 래리 핑크 회장은 데이터센터 건설이 막히면 경기 침체가 온다고 공개 경고했다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "블랙록이 10월 14일 3분기 실적을 공시했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "BlackRock, Inc. Form 8-K (2026-10-14)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/2012383/000119312526420979/blk-20261014.htm",
                "date": "2026-10-14",
                "quote": "On October 14, 2026, BlackRock, Inc. (the \"Company\") reported results of operations for the three and nine months ended September 30, 2026.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n2",
            "statement": "3분기 매출·조정 영업이익·조정 EPS가 모두 컨센서스를 웃돌았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                "publisher": "키움증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                "date": "2026-10-15",
                "quote": "FY3Q26(9월말) 실적은 매출액 77.52억 달러(YoY +19.1%, QoQ +9.4%, 컨센서스 대비 +4.8%), 조정 영업이익 33.30 억 달러(YoY +27.1%, QoQ +14.2%, 컨센서스 대비 +9.3%), 조정 순이익 26.2 억 달러(YoY +37.4%, QoQ +14.4%, 컨센서스 대비 +11.6%), 조정 EPS 15.93 달러(YoY +37.9%, QoQ +14.5%, 컨센서스 대비 +12.6%)를 기록했다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n3",
            "statement": "실적 발표 직후 장전 주가가 올랐다는 보도가 나왔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "BLK Q3 Earnings Beat, Stock Gains Pre-Market on Revenue & AUM Growth",
                "publisher": "Zacks (Nasdaq)",
                "url": "https://www.nasdaq.com/articles/blk-q3-earnings-beat-stock-gains-pre-market-revenue-aum-growth",
                "date": "2026-10-14",
                "quote": "BLK Q3 Earnings Beat, Stock Gains Pre-Market on Revenue & AUM Growth",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n4",
            "statement": "래리 핑크 회장이 데이터센터 건설 중단이 경기 침체를 부를 수 있다고 경고했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "BlackRock's Larry Fink warns a data center moratorium could trigger a recession",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/10/14/blackrocks-fink-warns-data-center-moratorium-could-spark-a-recession.html",
                "date": "2026-10-14",
                "quote": "BlackRock's Larry Fink warns a data center moratorium could trigger a recession",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "블랙록이 국채·채권 쪽으로 자산배분 의견을 바꿨다는 보도가 나왔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Time to lock in Treasury yields? BlackRock unveils bonds pivot",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/10/13/blackrock-treasurys-bonds-us-equities.html",
                "date": "2026-10-13",
                "quote": "Time to lock in Treasury yields? BlackRock unveils bonds pivot",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "매출과 이익률이 함께 올라가는 중이다. 3분기 매출은 77.52억 달러로 1년 전보다 19.1% 늘었고, 조정 영업이익률은 47.8%로 3.2%p 개선됐다. 핵심은 자산보다 수수료가 더 빨리 늘었다는 점으로, 최근 1년 순유입으로 운용자산이 6% 늘 때 기본보수는 10% 증가했다. 회계기준 순이익은 1,659백만 달러로 전년 동기보다 25.4% 늘었지만 직전 분기보다는 13.3% 줄었다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f1",
              "statement": "분기 매출이 전년 동기 대비 19.1%, 직전 분기 대비 9.4% 늘었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장 — 블랙록 상세실적표",
                  "publisher": "키움증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                  "date": "2026-10-15",
                  "quote": "매출액 6,509 7,084 7,752 19.1 9.4",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f2",
              "statement": "운용자산이 전년 동기 대비 15.0% 늘어 수수료 기반이 커졌다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장 — 블랙록 상세실적표",
                  "publisher": "키움증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                  "date": "2026-10-15",
                  "quote": "AUM(백만 달러) 13,463,625 15,344,624 15,488,263 15.0 0.9",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "p1",
              "statement": "회계기준 순이익은 전년 동기 대비 25.4% 늘었으나 직전 분기 대비로는 13.3% 줄었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장 — 블랙록 상세실적표",
                  "publisher": "키움증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                  "date": "2026-10-15",
                  "quote": "BlackRock 귀속 순이익 1,323 1,914 1,659 25.4 -13.3",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "p2",
              "statement": "자산 증가보다 수수료 증가가 더 빨랐다 — 저보수 자금이 나가고 고보수 자금이 들어왔기 때문이다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                  "publisher": "키움증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                  "date": "2026-10-15",
                  "quote": "최근 1 년 동사의 운용자산은 순유입만으로 6% 늘었지만, 기본보수는 10% 증가했다. 저보수 자금이 빠지고 고보수 자금이 들어온 결과다.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "guidance": [
            {
              "id": "g1",
              "statement": "회사는 조정 영업이익률 목표와 2030년까지의 본업 운용보수 성장률 목표, 분기 자사주 매입 계획을 제시했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[블랙록 (NYS:BLK)] 실적으로 증명, 운용사 주가 반등 신호 확인",
                  "publisher": "한화증권(연합인포맥스)",
                  "url": "https://rreport.einfomax.co.kr/report/eqqxgmgqilgekqcgcgxeceq.pdf",
                  "date": "2026-04-15",
                  "quote": "블랙록은 45% 이상의 조정 영업이익률을 목표로 하고 있으며, 장기적 으로는 46~47%까지 확대할 계획이다. 2030년까지 5% 이상의 본업 운용보수 성장률 달성을 목표로 하고 있으며, 2026년 남은 기간 동안 에 분기당 최소 4.5억 달러 규모의 자사주 매입을 지속할 것이라고 언 급했다.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "mixed",
            "claims": []
          }
        },
        "estimatesNarrative": "애널리스트들의 올해 EPS 추정치는 57.86달러로 최근 7일 3.2%, 30일 2.8% 올랐다. 3분기 EPS가 예상보다 11.4% 높게 나왔고 최근 4개 분기 모두 예상을 넘었는데, 이 서프라이즈는 수수료 수익이 늘어난 데서 나온 것이라 일회성으로 보기 어렵다. 다만 내년 추정치 상향폭은 30일 0.5%에 그쳤고 목표주가도 상향 8건·하향 8건으로 갈려, 올해 호조가 내년까지 이어진다고는 아직 보지 않는다.",
        "newDrivers": [
          {
            "what": "AI 데이터센터 자금을 대는 사모시장 — 은행·공모채권시장이 못 받는 대형·장기 자금을 보험사·연기금 돈으로 집행하는 구조",
            "kind": "industry",
            "stage": "이익 기여 중",
            "since": "2026-10",
            "basis": [
              {
                "id": "b1",
                "statement": "회사는 50년 경력에서 처음으로 진짜 자본 부족을 보고 있다고 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "동사는 “50 년 경력에서 처음으로 진짜 자본 부족을 보고 있다”고 밝혔다. 미 연방부채가 40 조 달러 안팎으로 늘어 국채가 자금을 흡수하는 가운데, 미국 AI 인프라에도 7~9 조 달러가 필요하기 때문이다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "b2",
                "statement": "보험사들이 고등급 사모 솔루션으로 옮겨가는 흐름이 연말과 내년에 가속된다고 회사가 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "동사가 보험사들이 고등급 사모 솔루션으로 갈아타는 흐름이 연말과 2027 년에 가속된다고 밝힌 것이 이러한 맥락이다. Meta 엘패소 데이터센터가 대표적 사례다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "rv1",
                "statement": "사모시장 수수료율이 전사 평균의 다섯 배라, 운용자산의 2%가 기본보수의 11%를 만든다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "동사가 받는 사모시장 수수료율은 약 80bp 로 전사 평균 16bp 의 다섯 배이다. 운용자산 2%가 기본보수의 11%를 차지한 비결이다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "rv2",
                "statement": "아직 집행되지 않은 약정 자금이 남아 있어 신규 모금 없이도 기본보수가 예약돼 있다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "중요한 부분은 미집행 자금이 현재 960 억 달러로 사모 수수료 자산 3,360 억 달러의 29%에 달한다는 점이다. 이에, 80bp를 적용하면 연 7~8억 달러의 기본보수가 신규 모금 없이도 예약돼 있는 셈이다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "pf1",
                "statement": "고보수 상품 비중이 늘면서 매출 증가율이 비용 증가율을 앞질러 영업이익률이 올랐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "고보수 상품은 매출 19%, 비용 14%의 차이를 만들어 영업이익률 47.8%(+3.2%p), 성과보수 제외 마진 48.6%(+2.3%p) 상승했다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [
              {
                "id": "eg1",
                "statement": "회사 목표는 조정 영업이익률 45% 이상, 장기 46~47%이며 2030년까지 본업 운용보수 5% 이상 성장이다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 실적으로 증명, 운용사 주가 반등 신호 확인",
                    "publisher": "한화증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqqxgmgqilgekqcgcgxeceq.pdf",
                    "date": "2026-04-15",
                    "quote": "블랙록은 45% 이상의 조정 영업이익률을 목표로 하고 있으며, 장기적 으로는 46~47%까지 확대할 계획이다. 2030년까지 5% 이상의 본업 운용보수 성장률 달성을 목표로 하고 있으며, 2026년 남은 기간 동안 에 분기당 최소 4.5억 달러 규모의 자사주 매입을 지속할 것이라고 언 급했다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "eg2",
                "statement": "키움증권이 인용한 블룸버그 컨센서스는 2027년 매출과 영업이익 성장률을 두 자릿수로 본다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장 — 향후 실적 컨센서스 표",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "매출액 7,842 11.9% 7,459 11.4% 29,108 20.2% 32,459 11.5%",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "c2",
                "statement": "약정부터 집행까지 시차가 길어 수수료 인식이 늦어질 수 있다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "Aligned 데이터센터(400 억 달러)를 작년 10 월에 발표하고 올해 7 월에야 종결한 것이 이러한 시차를 보여준다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "고금리가 만든 채권·액티브 ETF 자금 이동 — 지수 전체보다 특정 분야에 집중하는 상품으로 돈이 옮겨간 변화",
            "kind": "industry",
            "stage": "매출 발생 중",
            "since": "2026-10",
            "basis": [
              {
                "id": "b3",
                "statement": "금리가 오르자 장기 수익률을 확보하려는 자금이 채권으로 몰렸다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "고금리 환경에 의한 이자수익 역시 신규 자금을 끌어들였다. 10 년물 금리가 5.3%까지 오르자 높은 수익률을 장기간 확보할 기회로 받아들인 자금 유입이 공격적으로 이루어졌다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "rv3",
                "statement": "채권 쪽 순유입이 가격 하락분의 약 3분의 2를 상쇄했고, 대부분 채권 ETF로 들어왔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "이에 3 분기 채권 운용자산은 가격 하락으로 1,174 억 달러 줄었지만 782 억 달러가 순유입돼 감소분의 약 3 분의 2 를 상쇄했다. 유입액 중 610 억 달러는 채권 ETF 에 집중됐다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "rv4",
                "statement": "올해 유입액의 절반 가까이가 수수료율이 높은 상품으로 들어왔고 액티브 ETF 분기 유입은 사상 최대였다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "이에 올해 유입액 5,240 억 달러 중 2,700 억 달러가 수수료율 10~60bp 상품으로 들어왔다. 3 분기 액티브 ETF 유입은 220 억 달러로 사상 최대였고, 반도체·한국 ETF 도 유입 최상위에 오른 것이 이를 반증한다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": [
              {
                "id": "c3",
                "statement": "수수료율이 낮은 기관 인덱스 주식 계좌에서는 세 분기 연속 자금이 빠져나갔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                    "publisher": "키움증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                    "date": "2026-10-15",
                    "quote": "수수료율 3bp 안팎의 기관 인덱스 주식 계좌에서는 3 분기 270 억 달러가 빠지며 세 분기 연속 유출됐다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        ],
        "nNarrative": "새로운 것은 AI 데이터센터에 돈을 대는 사모시장이다. 은행은 규제자본 때문에 대형 자산을 오래 들고 있지 못해, 보험사·연기금 돈을 모은 운용사가 그 수요를 받고 있다. 이 사모시장 수수료율은 약 80bp로 전사 평균 16bp의 다섯 배라 운용자산의 2%가 기본보수의 11%를 만든다. 고보수 상품 덕에 매출은 19% 늘 때 비용은 14%만 늘어 영업이익률이 47.8%로 올랐다. 미집행 자금 960억 달러가 남아 있어 신규 모금 없이도 연 7~8억 달러 기본보수가 예약돼 있고, 회사는 조정 영업이익률 45% 이상을 목표로 제시했다.",
        "nVerdict": "충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "최근 분기 순이익 전년비 20.2% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 3분기 순이익 20%/46%/-33% — 한 분기가 역성장이라 최근 1년 성장도 성립하지 않는다. 3년 추세·ROE 는 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "AI 인프라 자금을 받는 사모시장 — 수수료율 80bp로 전사 평균 16bp의 5배, 미집행 자금 960억 달러 (키움증권 2026-10-15)"
          },
          {
            "item": "S 수급",
            "status": "충족",
            "evidence": "최근 5일 거래량 1.51배(20일 평균 대비) · 오늘 거래대금 2.03배(상승일) · 상장주식 155M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 17.9% · 3M 24.3% · 6M 39.54% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 노랑 · 마진부채 주의(+30% 초과)"
          }
        ],
        "risks": [
          {
            "id": "r1",
            "statement": "수수료율이 낮은 기관 인덱스 주식 계좌에서 세 분기 연속 자금이 빠지고 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                "publisher": "키움증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                "date": "2026-10-15",
                "quote": "수수료율 3bp 안팎의 기관 인덱스 주식 계좌에서는 3 분기 270 억 달러가 빠지며 세 분기 연속 유출됐다. 최근 1 년 주식시장 상승(+19%)에 따른 비중 조정의 결과다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r2",
            "statement": "금리가 오르면 채권 운용자산이 평가손으로 줄어 수수료 기반이 깎인다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                "publisher": "키움증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                "date": "2026-10-15",
                "quote": "이에 3 분기 채권 운용자산은 가격 하락으로 1,174 억 달러 줄었지만 782 억 달러가 순유입돼 감소분의 약 3 분의 2 를 상쇄했다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r3",
            "statement": "개인용 사모대출 에버그린 펀드에 환매 요청이 남아 있어 유입 전환은 아직 전망 단계다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[블랙록 (NYS:BLK)] 오히려 효자가 된 사모시장",
                "publisher": "키움증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqmgecgqemkemeegcgxeceq.pdf",
                "date": "2026-10-15",
                "quote": "동사가 환매 요청이 남아 있던 에버그린 펀드(약 200 억 달러)가 4 분기부터 유입으로 돌아설 것이라 전망하는 근거는 여기에 있다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "수익이 운용자산 규모에 연동돼, 주식·채권 시장이 내리면 수수료가 함께 줄어든다.",
          "저보수 인덱스 상품은 수수료율이 몇 bp 수준이라 가격 경쟁 압력이 상시적이다.",
          "사모 수수료는 약정이 아니라 집행 시점에 붙어, 거래가 지연되면 수수료 인식도 미뤄진다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "미충족",
            "evidence": "선행 상승 25% (약함) · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 8주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 1.26배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "미충족",
            "evidence": "베이스 깊이 14.3% · ADR 2.31%의 6.2배 · 선행 상승의 절반 13%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 1134.38 · 20일선 1077.06 · 50일선 1106.41"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.51배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "아직 돌파 전 — 돌파일에 20일 평균 2배가 실리는지 본다"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "피벗 1187.17까지 -4.45% (-1.93 ADR) · 기준 1 ADR 이내"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 2.2% · ADR 2.31%"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.9 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 노랑(보통)"
          }
        ],
        "chartObservation": {
          "base": "횡보는 8주째로 기준 범위 2~8주의 끝에 걸쳐 있다. 베이스 깊이는 14.3%로 하루 평균 변동폭 2.31%의 6.2배이고, 선행 상승 25.3%의 절반을 넘는다. 저점이 높아진 횟수는 0회이고 진폭은 1.26배로 좁아지지 않았다.",
          "volume": "횡보 중 거래량이 마르지 않았다 — 최근 5일 거래량이 20일 평균의 1.51배다. 10월 5~12일에는 32만~61만 주 사이였는데 13일 65만 주, 14일 109만 주, 15일 123만 주, 16일 114만 주로 늘었다. 가장 최근 봉의 거래량은 20일 평균의 1.94배다.",
          "position": "종가 1134.38달러는 피벗 1187.17달러보다 4.45% 아래이고, 하루 변동폭 기준으로는 1.93배 아래다. 예비 손절 1161.01달러는 피벗 바로 아래에 놓여 현재가보다 위에 있다. 10일선 위로는 1.9 ADR 떠 있고 손절까지의 폭은 2.2%다.",
          "maStack": "종가 1134.38달러는 20일선 1077.06, 50일선 1106.41, 150일선 1056.83을 모두 위에 두고 있다. 다만 20일선이 50일선보다 아래라 선들의 순서가 아직 맞지 않고, 20일선 기울기는 +0.91%다.",
          "note": "3개월 그림에서 9월 고점 뒤 10월 내내 좁은 폭으로 오르내린 구간이 보이고, 마지막 네 봉의 거래량 막대가 앞 구간보다 길어진 것이 확인된다 — 그림과 숫자가 일치한다."
        },
        "entryChecklist": [
          "피벗 1187.17달러를 거래량 20일 평균 2배 이상으로 종가 돌파하는지",
          "최근 5일 거래량이 20일 평균의 1.51배에서 0.7배 이하로 줄며 횡보가 다시 조여지는지",
          "종가가 50일선 1106.41달러 위를 계속 지키는지",
          "시장 판정이 노랑에서 초록으로 바뀌고 마진부채 경고가 풀리는지",
          "기관 인덱스 주식 계좌의 자금 유출이 네 분기째로 이어지는지"
        ],
        "earningsRisk": "3분기 실적을 2026-10-14에 이미 발표해 당분간 실적 공백이고, 달력에도 예정된 발표일이 없다. 다음 발표는 2027-01-14로 추정돼 있어 실적 직전 매수 위험은 지금 낮다.",
        "confidence": "high",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "c1",
            "r4"
          ],
          "reasons": [
            "c1: statement의 '자금 수요 자체가 꺾인다'는 quote('경기 침체')에 없는 근거 없는 추론",
            "r4: statement의 '사모 자금 수요가 함께 꺾일 수 있다'는 quote('경기 침체')에 없는 추론"
          ],
          "leadFixed": true,
          "nNarrativeFixed": true
        },
        "leadOriginal": "3분기 실적이 매출·이익률 모두 분기 최대를 찍으면서 관심 종목이 됐다. 가장 강한 근거는 수수료율이 전사 평균의 다섯 배인 사모시장 자금이 실제로 집행되기 시작했다는 점이다. 가장 큰 걱정은 차트 쪽으로, 8주 횡보 동안 거래량이 줄지 않았고 저점도 높아지지 않았다. 데이터센터 건설이 막히면 이 사모 자금 수요 자체가 꺾인다.",
        "nNarrativeOriginal": "새로운 것은 AI 데이터센터에 돈을 대는 사모시장이다. 은행은 규제자본 때문에 대형 자산을 오래 들고 있지 못해, 보험사·연기금 돈을 모은 운용사가 그 수요를 받고 있다. 이 사모시장 수수료율은 약 80bp로 전사 평균 16bp의 다섯 배라 운용자산의 2%가 기본보수의 11%를 만든다. 고보수 상품 덕에 매출은 19% 늘 때 비용은 14%만 늘어 영업이익률이 47.8%로 올랐다. 미집행 자금 960억 달러가 남아 있어 신규 모금 없이도 연 7~8억 달러 기본보수가 예약돼 있고, 회사는 조정 영업이익률 45% 이상을 목표로 제시했다. 데이터센터 건설 제한이 퍼지면 이 구조의 전제가 되는 자금 수요가 꺾인다.",
        "consensus": {
          "saleCy": 21.01,
          "saleNy": 10.4,
          "epsCy": 20.32,
          "epsNy": 11.75,
          "cyTrend": 2.8,
          "nyTrend": 0.54
        },
        "researchedOn": "2026-10-17",
        "session": "2026-10-16",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "MRNA",
      "nameKo": "모더나",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "industryRank": {
        "frank": 5,
        "frank25dChg": 10,
        "headline": "바이오테크는 모더나의 mRNA 암 치료제 3상 성공과 코디악·레볼루션의 신약 성과가 겹치며 업종 순위 6위로 올랐다.",
        "asOf": "2026-10-16"
      },
      "requestedOn": "2026-10-16",
      "session": "2026-10-15",
      "at": "2026-10-16T08:58:29.452Z",
      "verdict": "조건부",
      "verdictLine": "쉬는 구간(베이스)이 없어 넘으면 사는 선이 아예 없고, 10월 24일 흑색종 전체 데이터라는 큰 변수가 남아 조건부다.",
      "basis": [
        {
          "point": "상대강도가 6개월 기준 전체 상위 0.05%로 주도주 조건을 넘는다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "머크와 공동 개발한 흑색종 백신이 3상에서 재발·전이 위험을 줄였다.",
          "side": "for",
          "checkRef": "d1b1"
        },
        {
          "point": "쉬는 구간이 없어 넘으면 사는 선과 예비 손절선을 잡을 수 없다.",
          "side": "against",
          "checkRef": "차트:횡보 길이"
        },
        {
          "point": "최근 5일 거래량이 20일 평균의 0.97배로 줄지 않았다.",
          "side": "against",
          "checkRef": "차트:거래량 마름"
        },
        {
          "point": "2026년 2분기 순손실이 7.82억 달러로 적자가 이어진다.",
          "side": "against",
          "checkRef": "CANSLIM:C"
        }
      ],
      "conditions": [
        "10월 24일 전체 생존율 데이터가 공개된 뒤 2주 이상 쉬는 구간이 만들어지는지",
        "그 구간에서 최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어드는지 (지금 0.97배)",
        "쉬는 구간 고점이 넘으면 사는 선으로 잡히고 20일 평균 2배 거래량으로 종가 돌파하는지",
        "11월 6일 예정 실적 발표를 지나고 시장 판정이 노랑에서 초록으로 바뀌는지"
      ],
      "invalidation": "종가가 50일 평균선 151.65달러 아래로 내려가면 이 판단은 틀린 것으로 본다. 10월 24일 공개되는 전체 생존율 데이터가 기대에 못 미쳐도 마찬가지다.",
      "dataLimits": "기관 보유 자료가 없고, 쉬는 구간이 없어 피벗·손절·베이스 지표가 전부 비어 있으며, 흑색종 백신의 제품별 매출·이익 전망 숫자는 찾지 못했다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": true,
        "reasons": [
          {
            "key": "no_base",
            "ko": "쉬는 구간(베이스)이 없어 넘으면 사는 선(피벗)이 없다"
          }
        ],
        "asOf": {
          "bar": "2026-10-15",
          "market": "2026-10-15"
        }
      },
      "setup": {
        "state": "none",
        "grade": null,
        "pivot": null,
        "stop": null,
        "distToPivotPct": null,
        "distToPivotAdr": null,
        "riskPerSharePct": null,
        "extensionAdr": 1.37,
        "adrPct": 8.45,
        "breakDate": null,
        "chase": false,
        "metrics": null,
        "reasons": [
          "쉬는 구간 없음"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "3개월 최대상승 360% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "저점 높아짐",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "깊이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 236.5 · 20일선 197.98 · 50일선 151.65"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 0.97배 (보통) · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "피벗 거리",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "손절 폭",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.4 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 노랑(보통)"
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
            "evidence": "사이트 최근 3분기 순이익 적자축소/적자확대/적자축소 — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 98%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 0.97배(20일 평균 대비) · 오늘 거래대금 1.13배(상승일) · 상장주식 399M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 0.23% · 3M 0.05% · 6M 0.05% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 노랑 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "MRNA",
        "fetchedAt": "2026-10-16",
        "source": "한국투자증권 Open API",
        "per": 29.62,
        "pbr": 13.96,
        "eps": 7.98,
        "bps": 16.94,
        "shares": 399236000,
        "marketCapM": 94419,
        "high52": 242.29,
        "high52Date": "2026-10-15",
        "low52": 22.28,
        "low52Date": "2025-11-21",
        "last": 236.5,
        "prevClose": 226.3,
        "nameKo": "모더나",
        "nameEn": "MODERNA INC",
        "listedOn": "2018-12-06",
        "exchange": "나스닥",
        "listedShares": 399236000
      },
      "estimates": {
        "ticker": "MRNA",
        "url": "https://finance.yahoo.com/quote/MRNA/analysis/",
        "fetchedAt": "2026-10-16",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-09-30",
            "eps": -1.27,
            "epsLow": -3.28,
            "epsHigh": -0.53,
            "epsYearAgo": -0.51,
            "epsAnalysts": 15,
            "epsGrowth": -148.5,
            "epsCur": "USD",
            "rev": 892380860,
            "revAnalysts": 14,
            "revYearAgo": 1016000000,
            "revGrowth": -12.2,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2026-12-31",
            "eps": -1.74,
            "epsLow": -2.09,
            "epsHigh": -0.63,
            "epsYearAgo": -2.11,
            "epsAnalysts": 14,
            "epsGrowth": 17.4,
            "epsCur": "USD",
            "rev": 675414520,
            "revAnalysts": 13,
            "revYearAgo": 678000000,
            "revGrowth": -0.4,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "eps": -8.38,
            "epsLow": -10.57,
            "epsHigh": -6.66,
            "epsYearAgo": -7.26,
            "epsAnalysts": 21,
            "epsGrowth": -15.5,
            "epsCur": "USD",
            "rev": 2101263170,
            "revAnalysts": 21,
            "revYearAgo": 1944000000,
            "revGrowth": 8.1,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "eps": -4.78,
            "epsLow": -7.11,
            "epsHigh": -2.73,
            "epsYearAgo": -8.38,
            "epsAnalysts": 20,
            "epsGrowth": 43,
            "epsCur": "USD",
            "rev": 2438891820,
            "revAnalysts": 19,
            "revYearAgo": 2101263170,
            "revGrowth": 16.1,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-09-30",
            "cur": "USD",
            "now": -1.27,
            "d7": 0.5,
            "d30": 1.7,
            "d90": -3.3,
            "ago90": -1.23,
            "up7": 2,
            "up30": 3,
            "down7": 0,
            "down30": 0
          },
          {
            "period": "+1q",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": -1.74,
            "d7": 0.3,
            "d30": -0.1,
            "d90": 15.7,
            "ago90": -2.07,
            "up7": 0,
            "up30": 0,
            "down7": 1,
            "down30": 2
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": -8.38,
            "d7": 0,
            "d30": 0,
            "d90": 3.3,
            "ago90": -8.67,
            "up7": 1,
            "up30": 2,
            "down7": 0,
            "down30": 0
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "cur": "USD",
            "now": -4.78,
            "d7": 0.2,
            "d30": 0.1,
            "d90": -0.5,
            "ago90": -4.76,
            "up7": 1,
            "up30": 1,
            "down7": 0,
            "down30": 1
          }
        ],
        "surprises": [
          {
            "quarter": "2026-06-30",
            "actual": -1.97,
            "estimate": -2.06,
            "surprisePct": 4.3,
            "cur": "USD"
          },
          {
            "quarter": "2026-03-31",
            "actual": -3.4,
            "estimate": -3.88,
            "surprisePct": 12.4,
            "cur": "USD"
          },
          {
            "quarter": "2025-12-31",
            "actual": -2.11,
            "estimate": -2.6,
            "surprisePct": 18.9,
            "cur": "USD"
          },
          {
            "quarter": "2025-09-30",
            "actual": -0.51,
            "estimate": -2.18,
            "surprisePct": 76.6,
            "cur": "USD"
          }
        ],
        "beats": 4,
        "ratings": {
          "upgrades": 3,
          "downgrades": 2,
          "initiations": 0,
          "ptRaised": 11,
          "ptLowered": 0,
          "total": 14,
          "recent": [
            {
              "date": "2026-10-15",
              "firm": "Goldman Sachs",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 137,
              "ptPrior": 120
            },
            {
              "date": "2026-10-07",
              "firm": "Morgan Stanley",
              "action": "main",
              "from": "Equal-Weight",
              "to": "Equal-Weight",
              "ptAction": "Raises",
              "pt": 95,
              "ptPrior": 89
            },
            {
              "date": "2026-09-30",
              "firm": "Citigroup",
              "action": "down",
              "from": "Neutral",
              "to": "Sell",
              "ptAction": "Raises",
              "pt": 80,
              "ptPrior": 60
            },
            {
              "date": "2026-09-03",
              "firm": "Rothschild & Co",
              "action": "down",
              "from": "Neutral",
              "to": "Sell",
              "ptAction": "Raises",
              "pt": 81,
              "ptPrior": 40
            },
            {
              "date": "2026-08-28",
              "firm": "Argus Research",
              "action": "up",
              "from": "Hold",
              "to": "Buy",
              "ptAction": "Announces",
              "pt": 180,
              "ptPrior": null
            },
            {
              "date": "2026-08-25",
              "firm": "Wolfe Research",
              "action": "up",
              "from": "Underperform",
              "to": "Peer Perform",
              "ptAction": null,
              "pt": null,
              "ptPrior": null
            },
            {
              "date": "2026-08-24",
              "firm": "Barclays",
              "action": "main",
              "from": "Equal-Weight",
              "to": "Equal-Weight",
              "ptAction": "Raises",
              "pt": 125,
              "ptPrior": 48
            },
            {
              "date": "2026-08-21",
              "firm": "JP Morgan",
              "action": "main",
              "from": "Underweight",
              "to": "Underweight",
              "ptAction": "Raises",
              "pt": 77,
              "ptPrior": 40
            },
            {
              "date": "2026-08-20",
              "firm": "Goldman Sachs",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 120,
              "ptPrior": 67
            },
            {
              "date": "2026-08-20",
              "firm": "UBS",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 150,
              "ptPrior": 50
            }
          ]
        },
        "nextEarnings": {
          "date": "2026-11-06",
          "upcoming": true,
          "estimated": false
        }
      },
      "cnbc": [
        {
          "title": "Stocks making big moves midday: Rogers, United Therapeutics, Moderna, FormFactor",
          "url": "https://www.cnbc.com/2026/09/30/stocks-making-the-biggest-moves-midday-rog-uthr-mrna-form.html",
          "date": "2026-09-30",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Moderna has been on a tear since mid-August. Citi now sees it plunging 60%",
          "url": "https://www.cnbc.com/2026/09/30/moderna-has-been-on-a-tear-since-mid-august-citi-now-sees-it-plunging-60percent.html",
          "date": "2026-09-30",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Thursday's biggest analyst calls: Nvidia, Apple, Broadcom, Snowflake, Deere, Tesla, Amazon",
          "url": "https://www.cnbc.com/2026/09/03/thursdays-analyst-calls-include-nvidia.html",
          "date": "2026-09-03",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Moderna is now overvalued after cancer vaccine-led stock surge, Rothschild & Co. says",
          "url": "https://www.cnbc.com/2026/09/03/moderna-is-now-overvalued-after-cancer-vaccine-led-stock-surge-rothschild-co-says.html",
          "date": "2026-09-03",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves midday: Nvidia, Hormel, HP, Best Buy & more",
          "url": "https://www.cnbc.com/2026/08/27/stocks-making-the-biggest-moves-midday-nvda-okta-hrl-veev.html",
          "date": "2026-08-27",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making big moves midday: Dick's Sporting Goods, Marvell, AMD & more",
          "url": "https://www.cnbc.com/2026/08/25/stocks-making-the-biggest-moves-midday-dks-mrvl-amd-kura.html",
          "date": "2026-08-25",
          "publisher": "CNBC",
          "kind": "article"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-16",
        "nameKo": "모더나",
        "nameEn": "MODERNA INC",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001682852&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 145000000,
              "profit": -815000000,
              "netIncome": -782000000,
              "margin": -562.1,
              "yoy": {
                "revenue": 2.1,
                "profit": 10.1,
                "netIncome": 5.2,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 389000000,
              "profit": -1388000000,
              "netIncome": -1343000000,
              "margin": -356.8,
              "yoy": {
                "revenue": 260.2,
                "profit": -32.2,
                "netIncome": -38.3,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 678000000,
              "profit": -857000000,
              "netIncome": -826000000,
              "margin": -126.4,
              "yoy": {
                "revenue": -29.8,
                "profit": 31.2,
                "netIncome": 26.3,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 1016000000,
              "profit": -260000000,
              "netIncome": -200000000,
              "margin": -25.6,
              "yoy": {
                "revenue": -45.4,
                "profit": -271.4,
                "netIncome": -1638.5,
                "priorEnd": "2024-09-30"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "Moderna vs. Vertex Pharmaceuticals: Which Healthcare Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/moderna-vs-vertex-pharmaceuticals-which-healthcare-stock-better-buy-2026",
              "date": "2026-10-13",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Here's Why Moderna (MRNA) Fell More Than Broader Market",
              "url": "https://www.nasdaq.com/articles/heres-why-moderna-mrna-fell-more-broader-market",
              "date": "2026-10-12",
              "publisher": "Zacks"
            },
            {
              "title": "Moderna Now Trades 61% Above Wall Street's Average Price Target. Should You Sell?",
              "url": "https://www.nasdaq.com/articles/moderna-now-trades-61-above-wall-streets-average-price-target-should-you-sell",
              "date": "2026-10-10",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Why Moderna Stock Surged Today",
              "url": "https://www.nasdaq.com/articles/why-moderna-stock-surged-today",
              "date": "2026-10-10",
              "publisher": "The Motley Fool"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-09-30",
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000119312526408289/d18337d8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-01",
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "3.02",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000119312526378505/d108896d8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-31",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000147/mrna-20260731.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-08",
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000134/mrna-20260706.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-11",
            "itemsKo": [
              "5.03",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000101/mrna-20260506.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-01",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000057/mrna-20260501.htm"
          }
        ],
        "krReports": {
          "total": 3,
          "reports": [
            {
              "date": "2026-08-28",
              "broker": "대신증권",
              "analyst": "조재운",
              "title": "[모더나 (NAS:MRNA)] [Issue & News] 20억 달러 전환사채 사모 발행 추진 - 흑색종 데이터發 주가 급등을 활용한 자본조달",
              "summary": "- 20억 달러 전환사채 사모 발행 공시, 세부조건 미공개- 흑색종 3상 데이터 이후 주가 급등 시점에 조달- 현금여력 확대되지만 전환권 행사 시 희석 우려",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqlqkzlgiexqxgcgxecex.pdf",
              "pages": "5"
            },
            {
              "date": "2026-08-26",
              "broker": "대신증권",
              "analyst": "조재운",
              "title": "[모더나 (NAS:MRNA)] [Issue & News] 머크 공동 흑색종 백신 작동원리·생산과제 상세 공개",
              "summary": "- 흑색종 백신 작동원리·비소세포폐암 등 확장 파이프라인 공개- 전체 생존율 데이터는 아직 미공개, 임상 불확실성 지속- 개인맞춤 생산 특성상 10~100배 증설 필요, 실행 리스크 부각",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqqcexmkclgzegcgxecex.pdf",
              "pages": "5"
            },
            {
              "date": "2026-08-21",
              "broker": "키움증권",
              "analyst": "허혜민",
              "title": "[모더나 (NAS:MRNA)] mRNA 기반 암 치료제 최초 3상 성공",
              "summary": "- 코로나19 백신으로 mRNA 상업화에 성공한 바이오텍. mRNA 기반 암 치료제로는 세계 최초 3상 성공- 다만, 시장은 이미 흑색종 성공을 상당부분 선반영한 상태로 신장암, 방광암, 폐암 등 다른 암종으로 확장성에 주목",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqgxkklglmlgzgcgxecex.pdf",
              "pages": "7"
            }
          ]
        }
      },
      "rank": {
        "m1": 0.23,
        "m3": 0.05,
        "m6": 0.05
      },
      "verified": {
        "checked": 9,
        "ok": 22,
        "unverified": 4,
        "dead": 0,
        "stripped": 2
      },
      "numberCut": 2,
      "deep": {
        "status": "done",
        "ticker": "MRNA",
        "company": "모더나는 mRNA 기술로 백신과 치료제를 만드는 미국 바이오 회사다. 코로나19 백신으로 상업화에 성공했고, 올해 계절성 독감 백신이 승인되며 승인 제품이 5개가 됐다. 최근 성장 축은 머크와 함께 개발 중인 개인맞춤형 흑색종 백신이다.",
        "lead": "지금은 쉬는 구간이 없어 들어갈 자리가 보이지 않는 종목이다. 가장 강한 근거는 머크와 함께 만든 흑색종 백신이 3상에서 성공했고 상대강도가 전체 상위 0.05%라는 점이다. 가장 큰 걱정은 아직 적자이고 20억 달러 전환사채로 주식 수가 늘 수 있다는 점이다. 10월 24일 공개되는 전체 생존율 데이터가 기대에 못 미치면 이 그림은 바로 깨진다.",
        "newsNarrative": "10월 들어 주가가 다시 오른 이유는 흑색종 백신의 전체 3상 데이터 공개가 가까워졌기 때문이다. 회사는 10월 24일 유럽종양학회에서 1,137명 임상 결과를 발표한다. 9월 말에는 생산을 맡을 최고운영책임자를 새로 선임했다. 반면 시티그룹은 급등을 이유로 투자의견을 매도로 내리며 60% 하락을 전망했고, 주가는 월가 평균 목표주가보다 61% 높다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "흑색종 백신의 전체 3상 결과가 10월 24일 유럽종양학회에서 공개된다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna Stock Jumps 4.5% as Major Cancer Vaccine Catalyst Approaches",
                "publisher": "TipRanks",
                "url": "https://www.tipranks.com/news/moderna-stock-jumps-4-5-as-major-cancer-vaccine-catalyst-approaches",
                "date": "2026-10-15",
                "quote": "researchers will present the Phase 3 melanoma findings in Madrid at 10:30 a.m. Eastern on October 24.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "n2",
            "statement": "이 임상은 1,137명이 참여했고 재발을 줄이는 1차 목표를 이미 충족했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna Stock Jumps 4.5% as Major Cancer Vaccine Catalyst Approaches",
                "publisher": "TipRanks",
                "url": "https://www.tipranks.com/news/moderna-stock-jumps-4-5-as-major-cancer-vaccine-catalyst-approaches",
                "date": "2026-10-15",
                "quote": "The trial involved 1,137 patients and has already shown that the treatment helps prevent cancer from returning or spreading. The combination met the study's main goal of reducing cancer recurrence.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "n3",
            "statement": "데이터 공개를 앞두고 투자자들이 몰리며 주가가 목요일 4.5% 올랐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna Stock Jumps 4.5% as Major Cancer Vaccine Catalyst Approaches",
                "publisher": "TipRanks",
                "url": "https://www.tipranks.com/news/moderna-stock-jumps-4-5-as-major-cancer-vaccine-catalyst-approaches",
                "date": "2026-10-15",
                "quote": "Moderna shares rose by about 4.5% in Thursday trading as investors looked ahead to an October 24 presentation of detailed cancer trial results.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "n4",
            "statement": "시티그룹은 8월 중순 이후 급등을 근거로 60% 하락을 전망했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna has been on a tear since mid-August. Citi now sees it plunging 60%",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/09/30/moderna-has-been-on-a-tear-since-mid-august-citi-now-sees-it-plunging-60percent.html",
                "date": "2026-09-30",
                "quote": "Moderna has been on a tear since mid-August. Citi now sees it plunging 60%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "로스차일드는 암백신發 급등 이후 주가가 고평가 상태라고 봤다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna is now overvalued after cancer vaccine-led stock surge, Rothschild & Co. says",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/09/03/moderna-is-now-overvalued-after-cancer-vaccine-led-stock-surge-rothschild-co-says.html",
                "date": "2026-09-03",
                "quote": "Moderna is now overvalued after cancer vaccine-led stock surge, Rothschild & Co. says",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n6",
            "statement": "회사는 9월 30일 최고운영책임자 자리를 새로 만들고 후안 안드레스를 선임했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna, Inc. Form 8-K Exhibit 99.1 (2026-09-30)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/0001682852/000119312526408289/d18337dex991.htm",
                "date": "2026-09-30",
                "quote": "Moderna, Inc. (NASDAQ:MRNA) today announced the addition of a Chief Operating Officer role to support the increasing scale and diversification of the Company. Juan Andres will return to Moderna as Chief Operating Officer, effective October 5, 2026.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "매출은 쪼그라들었고 적자는 이어진다. 직전 네 분기 매출은 10.16억 달러에서 1.45억 달러까지 줄었다. 2026년 2분기 순손실은 7.82억 달러로 1년 전보다 5.2% 줄었을 뿐 흑자와는 멀다. 다만 연말 현금·투자자산을 47억~52억 달러로 보고 있어 당장 자금이 마르지는 않는다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f1",
              "statement": "2026년 2분기 매출은 1.45억 달러로 1년 전보다 2.1% 늘었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "모더나 분기 실적 (SEC companyfacts)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001682852&type=10-Q",
                  "date": "2026-06-30",
                  "quote": "{\"periodEnd\":\"2026-06-30\",\"revenue\":145000000,\"netIncome\":-782000000,\"yoy\":{\"revenue\":2.1,\"netIncome\":5.2}}",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f2",
              "statement": "직전 네 분기 매출은 10.16억 달러, 6.78억 달러, 3.89억 달러, 1.45억 달러로 줄었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "모더나 분기 실적 (SEC companyfacts)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001682852&type=10-Q",
                  "date": "2026-06-30",
                  "quote": "{\"periodEnd\":\"2025-09-30\",\"revenue\":1016000000} {\"periodEnd\":\"2025-12-31\",\"revenue\":678000000} {\"periodEnd\":\"2026-03-31\",\"revenue\":389000000} {\"periodEnd\":\"2026-06-30\",\"revenue\":145000000}",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "p1",
              "statement": "2026년 2분기 순손실은 7.82억 달러로 1년 전보다 5.2% 줄었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "모더나 분기 실적 (SEC companyfacts)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001682852&type=10-Q",
                  "date": "2026-06-30",
                  "quote": "{\"periodEnd\":\"2026-06-30\",\"profit\":-815000000,\"netIncome\":-782000000,\"yoy\":{\"profit\":10.1,\"netIncome\":5.2}}",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "p2",
              "statement": "그 직전 분기인 2026년 1분기에는 순손실이 13.43억 달러로 1년 전보다 38.3% 커졌다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "모더나 분기 실적 (SEC companyfacts)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001682852&type=10-Q",
                  "date": "2026-03-31",
                  "quote": "{\"periodEnd\":\"2026-03-31\",\"profit\":-1388000000,\"netIncome\":-1343000000,\"yoy\":{\"profit\":-32.2,\"netIncome\":-38.3}}",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "guidance": [
            {
              "id": "g1",
              "statement": "회사는 2026년 매출이 2025년보다 최대 10% 늘어나는 것을 목표로 한다고 밝혔다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Moderna Second Quarter 2026 Financial Results (Form 8-K Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001682852/000168285226000147/exhibit9912026q2pressrelea.htm",
                  "date": "2026-07-31",
                  "quote": "The Company is targeting up to 10% growth from 2025 revenue",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "g2",
              "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
              "evidence_level": "no_source",
              "sources": [
                {
                  "title": "Moderna Second Quarter 2026 Financial Results (Form 8-K Exhibit 99.1)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001682852/000168285226000147/exhibit9912026q2pressrelea.htm",
                  "date": "2026-07-31",
                  "quote": "Research and development expenses for 2026 are now anticipated to be approximately $2.9 billion, lowered from approximately $3.0 billion. Year-end cash and investments for 2026 are now projected to be $4.7 to $5.2 billion. Cash, cash equivalents and investments as of June 30, 2026, were $6.9 billion",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statementOriginal": "연구개발비 전망을 약 30억 달러에서 약 29억 달러로 낮췄고, 연말 현금·투자자산은 47억~52억 달러로 본다.",
              "stripped": true
            }
          ],
          "estimateRevisions": {
            "direction": "mixed",
            "claims": [
              {
                "id": "e1",
                "statement": "시티그룹은 9월 30일 모더나 투자의견을 내리며 60% 하락을 전망했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Moderna has been on a tear since mid-August. Citi now sees it plunging 60%",
                    "publisher": "CNBC",
                    "url": "https://www.cnbc.com/2026/09/30/moderna-has-been-on-a-tear-since-mid-august-citi-now-sees-it-plunging-60percent.html",
                    "date": "2026-09-30",
                    "quote": "Moderna has been on a tear since mid-August. Citi now sees it plunging 60%",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "e2",
                "statement": "주가가 월가 평균 목표주가보다 61% 높다는 지적도 나왔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Moderna Now Trades 61% Above Wall Street's Average Price Target. Should You Sell?",
                    "publisher": "The Motley Fool (Nasdaq)",
                    "url": "https://www.nasdaq.com/articles/moderna-now-trades-61-above-wall-streets-average-price-target-should-you-sell",
                    "date": "2026-10-10",
                    "quote": "Moderna Now Trades 61% Above Wall Street's Average Price Target. Should You Sell?",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        },
        "estimatesNarrative": "애널리스트 전망은 조금씩 좋아지는 쪽이다. 2026년 주당순손실 전망은 -8.38달러로 90일 전 -8.67달러보다 3.3% 개선됐고, 최근 30일 상향 2명·하향 0명이다. 최근 4개 분기 모두 예상보다 손실이 적었는데, 매출이 늘어서가 아니라 연구개발비를 29억 달러로 낮추는 등 비용을 줄인 영향이 크다.",
        "newDrivers": [
          {
            "what": "인티스메란 오토진 — 환자 종양을 서열분석해 만드는 개인맞춤형 흑색종 백신, 머크 키트루다와 병용",
            "kind": "product",
            "stage": "발표만",
            "since": "2026-08",
            "basis": [
              {
                "id": "d1b1",
                "statement": "8월 20일 3상 중간 데이터에서 키트루다 병용이 재발·전이 위험을 줄였다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[모더나] 머크 공동 흑색종 백신 작동원리·생산과제 상세 공개",
                    "publisher": "대신증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqlqqcexmkclgzegcgxecex.pdf",
                    "date": "2026-08-26",
                    "quote": "8 월 20 일 3 상 중간 데이터에서 이 백신과 머크의 면역관문억제제 키트루다 병용이 재발·전이 위험을 줄인다는 결과가 나온 직후 나온 후속 보도로, 새 데이터가 아니라 그 데이터의 의미를 풀어주는 성격이 강하다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d1b2",
                "statement": "전체 3상 결과는 10월 24일 유럽종양학회에서 공개된다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Moderna Stock Jumps 4.5% as Major Cancer Vaccine Catalyst Approaches",
                    "publisher": "TipRanks",
                    "url": "https://www.tipranks.com/news/moderna-stock-jumps-4-5-as-major-cancer-vaccine-catalyst-approaches",
                    "date": "2026-10-15",
                    "quote": "researchers will present the Phase 3 melanoma findings in Madrid at 10:30 a.m. Eastern on October 24.",
                    "verified": "unverified",
                    "httpStatus": 403
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": [
              {
                "id": "d1c1",
                "statement": "환자가 얼마나 오래 사는지를 보는 전체 생존율 데이터가 아직 공개되지 않았다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[모더나] 머크 공동 흑색종 백신 작동원리·생산과제 상세 공개",
                    "publisher": "대신증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqlqqcexmkclgzegcgxecex.pdf",
                    "date": "2026-08-26",
                    "quote": "첫째, 전체 생존율(overall survival) 데이터는 이번 중간 결과에 아직 포함되지 않았다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d1c2",
                "statement": "상업화하려면 생산 규모를 지금의 10배에서 100배까지 늘려야 한다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "[모더나] 머크 공동 흑색종 백신 작동원리·생산과제 상세 공개",
                    "publisher": "대신증권(연합인포맥스)",
                    "url": "https://rreport.einfomax.co.kr/report/eqlqqcexmkclgzegcgxecex.pdf",
                    "date": "2026-08-26",
                    "quote": "전문가들은 상업화를 위해 현재 임상 단계 대비 생산 규모를 10 배에서 100 배까지 늘려야 한다고 지적했고, 경영진은 향후 수요를 맞출 수 있는 수준으로 확장이 가능하다고 밝혔으나 구체적 시점은 제시하지 않았다.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "최고운영책임자 신설과 후안 안드레스 선임 — 흑색종 백신 생산 확대를 맡는 자리",
            "kind": "management",
            "stage": "발표만",
            "since": "2026-10-05",
            "basis": [
              {
                "id": "d3b1",
                "statement": "회사가 최고운영책임자 자리를 새로 만들고 후안 안드레스를 선임했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Moderna, Inc. Form 8-K Exhibit 99.1 (2026-09-30)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001682852/000119312526408289/d18337dex991.htm",
                    "date": "2026-09-30",
                    "quote": "Moderna, Inc. (NASDAQ:MRNA) today announced the addition of a Chief Operating Officer role to support the increasing scale and diversification of the Company. Juan Andres will return to Moderna as Chief Operating Officer, effective October 5, 2026.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d3b2",
                "statement": "이 선임은 흑색종 백신의 출시와 생산 확대를 준비하기 위한 것이다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Moderna, Inc. Form 8-K Exhibit 99.1 (2026-09-30)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001682852/000119312526408289/d18337dex991.htm",
                    "date": "2026-09-30",
                    "quote": "the potential launch and scale-up of intismeran autogene following positive Phase 3 results",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": []
          }
        ],
        "nNarrative": "새로운 것은 머크와 함께 만든 개인맞춤형 흑색종 백신이다. 이 백신은 3상에서 재발·전이 위험을 줄였고 전체 결과는 10월 24일 공개된다. 계절성 독감 백신도 미국에서 승인돼 승인 백신이 5개로 늘었다. 생산 확대를 맡을 최고운영책임자도 새로 선임했다. 다만 흑색종 백신은 아직 매출이 없고, 그 제품이 매출·이익을 얼마나 바꾸는지 보여 주는 숫자 근거는 찾지 못했다. 회사가 밝힌 것은 2026년 매출을 2025년보다 최대 10% 늘리겠다는 목표뿐이다.",
        "nVerdict": "부분 충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "2026년 2분기 순손실 7.82억 달러 — 1년 전보다 5.2% 줄었을 뿐 적자 지속 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "직전 네 분기 모두 적자이고 2026년 1분기는 적자가 38.3% 커졌다 · 3년 추세·ROE 는 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "미충족",
            "evidence": "부분 충족 — 흑색종 백신 3상 성공·독감 백신 승인·최고운영책임자 선임은 확인되나 매출·이익 영향 숫자 근거를 찾지 못했다 · 참고: 52주 고점 242.29달러 대비 2.39% 아래"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 0.97배(20일 평균 대비) · 오늘 거래대금 1.13배 · 상장주식 399,236,000주 · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1개월 0.23% · 3개월 0.05% · 6개월 0.05% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "시장 판정 노랑 · 빚내서 산 주식이 1년 전보다 37.2% 늘어 주의선 30%를 넘었다"
          }
        ],
        "risks": [
          {
            "id": "r1",
            "statement": "20억 달러 전환사채를 발행해, 전환권이 행사되면 주식 수가 늘 수 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[모더나] 20억 달러 전환사채 사모 발행 추진 - 흑색종 데이터發 주가 급등을 활용한 자본조달",
                "publisher": "대신증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqlqlqkzlgiexqxgcgxecex.pdf",
                "date": "2026-08-28",
                "quote": "다만 20 억 달러는 최근 분기 매출 1 억 4,500 만 달러에 비하면 큰 금액이고, 전환권이 행사되면 향후 발행주식수 증가로 이어질 수 있다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r2",
            "statement": "시티그룹은 급등을 근거로 60% 하락을 전망하며 투자의견을 내렸다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna has been on a tear since mid-August. Citi now sees it plunging 60%",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/09/30/moderna-has-been-on-a-tear-since-mid-august-citi-now-sees-it-plunging-60percent.html",
                "date": "2026-09-30",
                "quote": "Moderna has been on a tear since mid-August. Citi now sees it plunging 60%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r3",
            "statement": "주가가 월가 평균 목표주가보다 61% 높아 눈높이를 크게 앞서 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Moderna Now Trades 61% Above Wall Street's Average Price Target. Should You Sell?",
                "publisher": "The Motley Fool (Nasdaq)",
                "url": "https://www.nasdaq.com/articles/moderna-now-trades-61-above-wall-streets-average-price-target-should-you-sell",
                "date": "2026-10-10",
                "quote": "Moderna Now Trades 61% Above Wall Street's Average Price Target. Should You Sell?",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r4",
            "statement": "핵심인 전체 생존율 데이터가 아직 없어 임상 불확실성이 그대로 남아 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[모더나] 머크 공동 흑색종 백신 작동원리·생산과제 상세 공개",
                "publisher": "대신증권(연합인포맥스)",
                "url": "https://rreport.einfomax.co.kr/report/eqlqqcexmkclgzegcgxecex.pdf",
                "date": "2026-08-26",
                "quote": "재발·전이 위험 감소라는 1 차·2 차 목표는 충족됐지만, 치료가 실제 생존 기간 연장으로 이어지는지는 확인되지 않은 상태다.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "매출이 코로나19 백신에 기대어 왔고 그 수요가 줄면서 분기 매출이 내려앉았다.",
          "환자마다 따로 만드는 맞춤 백신이라 기존 대량 생산 방식이 통하지 않는다.",
          "임상 데이터 발표 하나에 주가가 크게 흔들리는 신약 개발 회사다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "종가 236.5달러 · 200일 평균보다 209.32% 위 · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "저점 높아짐",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "깊이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 236.5 · 20일선 197.98 · 50일선 151.65"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 0.97배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없어 돌파봉 자체가 없다"
          },
          {
            "item": "피벗 거리",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없어 넘으면 사는 선이 없다"
          },
          {
            "item": "손절 폭",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없어 예비 손절선이 없다"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.37 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "시장 판정 노랑(보통)"
          }
        ],
        "chartObservation": {
          "base": "쉬는 구간(베이스)을 코드가 찾아내지 못했다. 최근 10봉 종가는 190.01달러에서 236.5달러까지 이어서 올랐고 횡보라 부를 구간이 없다. 그래서 베이스 길이·저점 높아짐·깊이는 모두 확인 불가다.",
          "volume": "마지막 봉 거래량은 1,727만주로 20일 평균의 0.94배다. 최근 5일 거래량은 20일 평균의 0.97배로 줄어드는 모습이 아니다. 최근 10봉 중에서는 10월 8일 3,740만주가 가장 많았다.",
          "position": "쉬는 구간이 없어 넘으면 사는 선과 예비 손절선이 모두 비어 있다. 종가 236.5달러는 10일 평균선 위 1.37 ADR(하루 평균 등락폭의 배수) 자리다. 52주 고점 242.29달러보다 2.39% 아래다.",
          "maStack": "종가 236.5달러가 20일선 197.98, 50일선 151.65, 150일선 87.07을 모두 위에 두고 있다. 50일 평균보다 55.95% 위로 멀리 떨어져 있다.",
          "note": "그림에서도 8월 중순 급등 뒤 머문 구간과 10월 재상승이 보이고, 거래량 막대는 급등일 이후 줄었다가 10월에 다시 늘었다. 숫자와 어긋나는 점은 없다."
        },
        "entryChecklist": [
          "10월 24일 전체 생존율 데이터가 공개된 뒤 2주 이상 쉬는 구간이 생기는지",
          "그 구간에서 최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어드는지",
          "쉬는 구간의 고점이 넘으면 사는 선으로 잡히고, 20일 평균 2배 거래량으로 종가 돌파하는지",
          "11월 6일로 잡힌 실적 발표를 지나는지",
          "시장 판정이 노랑에서 초록으로 바뀌는지"
        ],
        "earningsRisk": "확정된 실적 발표 일정 없음(달력 기준). 다만 전망치 자료는 다음 실적일을 11월 6일로 보고 있어, 그 전에 들어가면 발표 위험을 그대로 떠안는다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        },
        "consensus": {
          "saleCy": 8.09,
          "saleNy": 16.07,
          "epsCy": 15.53,
          "epsNy": -43,
          "cyTrend": 0.05,
          "nyTrend": -0.13
        },
        "researchedOn": "2026-10-16",
        "session": "2026-10-15",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "ESTC",
      "nameKo": "엘라스틱",
      "sector": "Technology",
      "industry": "Software - Application",
      "industryRank": {
        "frank": 3,
        "frank25dChg": 11,
        "headline": "AI가 소프트웨어를 대체한다는 공포가 걷히며 응용 소프트웨어가 저점에서 반등해 업종 순위 3위에 올랐다.",
        "asOf": "2026-10-16"
      },
      "requestedOn": "2026-10-16",
      "session": "2026-10-15",
      "at": "2026-10-16T04:39:05.410Z",
      "verdict": "조건부",
      "verdictLine": "피벗 108 까지 9.96% 떨어져 있고 시장 판정이 노랑이라 지금은 조건부 — 돌파와 거래량 확인이 먼저다.",
      "basis": [
        {
          "point": "선행 상승 104% 뒤 6.6주째 쉬고 있어 돌파 셋업의 앞부분은 갖췄다.",
          "side": "for",
          "checkRef": "차트:선행 상승"
        },
        {
          "point": "상대강도가 3개월 상위 1.76%, 6개월 상위 3.02% 로 주도주 기준을 넘는다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "피벗 108 까지 -9.96%, 하루 변동폭으로 2.5일치 거리라 아직 매수선과 멀다.",
          "side": "against",
          "checkRef": "차트:피벗 거리"
        },
        {
          "point": "최근 5일 거래량이 20일 평균의 1.15배로, 쉬는 동안 줄어야 할 거래량이 줄지 않았다.",
          "side": "against",
          "checkRef": "차트:거래량 마름"
        },
        {
          "point": "시장 판정이 노랑이고 빚내서 산 주식이 1년 전보다 37.2% 늘어 주의선을 넘었다.",
          "side": "against",
          "checkRef": "CANSLIM:M"
        }
      ],
      "conditions": [
        "피벗 108 을 거래량 20일 평균 2배 이상으로 종가 돌파하는 것",
        "돌파 전 최근 5일 거래량이 20일 평균의 0.7배 이하로 줄어드는 것",
        "시장 판정이 노랑에서 초록으로 바뀌는 것",
        "2026-11-19 로 추정되는 실적 발표가 지나 일정 불확실성이 사라지는 것"
      ],
      "invalidation": "종가가 50일선 88.04 아래로 내려가면 이 그림은 틀린 것이다. 피벗 108 을 넘어 들어간 뒤에는 예비 손절 104.12 를 종가로 깨는 것이 기준이다.",
      "dataLimits": "기관 보유 자료가 없고 국내 증권사 리포트·원문 PDF 가 0건이며, 새 지표 제품의 매출·이익 기여 숫자가 공개되지 않았다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": false,
        "reasons": [],
        "asOf": {
          "bar": "2026-10-15",
          "market": "2026-10-15"
        }
      },
      "setup": {
        "state": "pre",
        "grade": "A",
        "pivot": 108,
        "stop": 104.12,
        "distToPivotPct": -9.96,
        "distToPivotAdr": -2.5,
        "riskPerSharePct": 3.59,
        "extensionAdr": 0.6,
        "adrPct": 3.99,
        "breakDate": null,
        "chase": false,
        "metrics": {
          "baseBars": 33,
          "baseWeeks": 6.6,
          "depthPct": 23.9,
          "priorMovePct": 103.6,
          "higherLows": 1,
          "contraction": 1.12,
          "closeRange10Adr": 1.6,
          "surf10": 0.6,
          "surf20": 1.27,
          "slope20": 2.77,
          "baseLow": 82.15,
          "lastSwingLow": 84.62
        },
        "reasons": [
          "선행 상승 +104%",
          "베이스 6.6주",
          "깊이 23.9%",
          "저점 상승 1회",
          "진폭 1.12배 · 10일 종가폭 1.6 ADR",
          "10일선 +0.6 ADR · 20일선 +1.3 ADR",
          "20일선 기울기 +2.77%"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 104% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 6.6주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 1회 · 진폭 1.12배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 23.9% · ADR 3.99%의 6배 · 선행 상승의 절반 52%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 97.24 · 20일선 92.33 · 50일선 88.04"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 1.15배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "아직 돌파 전 — 돌파일에 20일 평균 2배가 실리는지 본다"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "피벗 108까지 -9.96% (-2.5 ADR) · 기준 1 ADR 이내"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 3.59% · ADR 3.99%"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 0.6 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "한별 판정 노랑(보통)"
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
            "evidence": "사이트 최근 3분기 순이익 적자축소/흑자전환/흑자전환 — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 85%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 1.15배(20일 평균 대비) · 오늘 거래대금 — · 상장주식 105M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 10.32% · 3M 1.76% · 6M 3.02% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "한별 판정 노랑 · 마진부채 주의(+30% 초과)"
          }
        ]
      },
      "kis": {
        "ticker": "ESTC",
        "fetchedAt": "2026-10-16",
        "source": "한국투자증권 Open API",
        "per": 27.23,
        "pbr": 7.88,
        "eps": 3.57,
        "bps": 12.34,
        "shares": 104991000,
        "marketCapM": 10209,
        "high52": 108,
        "high52Date": "2026-08-28",
        "low52": 42.05,
        "low52Date": "2026-04-10",
        "last": 97.24,
        "prevClose": 92.06,
        "nameKo": "엘라스틱",
        "nameEn": "ELASTIC N V",
        "listedOn": "2018-10-05",
        "exchange": "뉴욕거래소",
        "listedShares": 104991000
      },
      "estimates": {
        "ticker": "ESTC",
        "url": "https://finance.yahoo.com/quote/ESTC/analysis/",
        "fetchedAt": "2026-10-16",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-10-31",
            "eps": 0.81,
            "epsLow": 0.8,
            "epsHigh": 0.84,
            "epsYearAgo": 0.64,
            "epsAnalysts": 28,
            "epsGrowth": 26.5,
            "epsCur": "USD",
            "rev": 486668760,
            "revAnalysts": 25,
            "revYearAgo": 423481000,
            "revGrowth": 14.9,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2027-01-31",
            "eps": 0.95,
            "epsLow": 0.9,
            "epsHigh": 1.06,
            "epsYearAgo": 0.73,
            "epsAnalysts": 27,
            "epsGrowth": 30.5,
            "epsCur": "USD",
            "rev": 517808500,
            "revAnalysts": 25,
            "revYearAgo": 449881000,
            "revGrowth": 15.1,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2027-04-30",
            "eps": 3.36,
            "epsLow": 3.32,
            "epsHigh": 3.6,
            "epsYearAgo": 2.57,
            "epsAnalysts": 29,
            "epsGrowth": 30.7,
            "epsCur": "USD",
            "rev": 2005289720,
            "revAnalysts": 27,
            "revYearAgo": 1739331000,
            "revGrowth": 15.3,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2028-04-30",
            "eps": 3.96,
            "epsLow": 3.52,
            "epsHigh": 4.43,
            "epsYearAgo": 3.36,
            "epsAnalysts": 29,
            "epsGrowth": 17.7,
            "epsCur": "USD",
            "rev": 2300097150,
            "revAnalysts": 28,
            "revYearAgo": 2005289720,
            "revGrowth": 14.7,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-10-31",
            "cur": "USD",
            "now": 0.81,
            "d7": 0,
            "d30": 0,
            "d90": 1.8,
            "ago90": 0.79,
            "up7": 0,
            "up30": 16,
            "down7": 1,
            "down30": 9
          },
          {
            "period": "+1q",
            "endDate": "2027-01-31",
            "cur": "USD",
            "now": 0.95,
            "d7": 0,
            "d30": 0,
            "d90": -0.3,
            "ago90": 0.96,
            "up7": 0,
            "up30": 6,
            "down7": 1,
            "down30": 16
          },
          {
            "period": "0y",
            "endDate": "2027-04-30",
            "cur": "USD",
            "now": 3.36,
            "d7": 0,
            "d30": 0,
            "d90": 3.6,
            "ago90": 3.24,
            "up7": 0,
            "up30": 29,
            "down7": 0,
            "down30": 0
          },
          {
            "period": "+1y",
            "endDate": "2028-04-30",
            "cur": "USD",
            "now": 3.96,
            "d7": 0,
            "d30": 0,
            "d90": 1.9,
            "ago90": 3.88,
            "up7": 2,
            "up30": 20,
            "down7": 0,
            "down30": 8
          }
        ],
        "surprises": [
          {
            "quarter": "2026-07-31",
            "actual": 0.7,
            "estimate": 0.58,
            "surprisePct": 19.9,
            "cur": "USD"
          },
          {
            "quarter": "2026-04-30",
            "actual": 0.61,
            "estimate": 0.56,
            "surprisePct": 8.4,
            "cur": "USD"
          },
          {
            "quarter": "2026-01-31",
            "actual": 0.73,
            "estimate": 0.65,
            "surprisePct": 13,
            "cur": "USD"
          },
          {
            "quarter": "2025-10-31",
            "actual": 0.64,
            "estimate": 0.58,
            "surprisePct": 11.1,
            "cur": "USD"
          }
        ],
        "beats": 4,
        "ratings": {
          "upgrades": 0,
          "downgrades": 1,
          "initiations": 0,
          "ptRaised": 30,
          "ptLowered": 1,
          "total": 35,
          "recent": [
            {
              "date": "2026-10-09",
              "firm": "Wedbush",
              "action": "reit",
              "from": "Outperform",
              "to": "Outperform",
              "ptAction": "Maintains",
              "pt": 125,
              "ptPrior": 125
            },
            {
              "date": "2026-10-09",
              "firm": "Stifel",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 120,
              "ptPrior": 107
            },
            {
              "date": "2026-09-23",
              "firm": "Cantor Fitzgerald",
              "action": "reit",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Maintains",
              "pt": 100,
              "ptPrior": 100
            },
            {
              "date": "2026-08-28",
              "firm": "Scotiabank",
              "action": "main",
              "from": "Sector Perform",
              "to": "Sector Perform",
              "ptAction": "Raises",
              "pt": 84,
              "ptPrior": 58
            },
            {
              "date": "2026-08-28",
              "firm": "Wells Fargo",
              "action": "main",
              "from": "Equal-Weight",
              "to": "Equal-Weight",
              "ptAction": "Raises",
              "pt": 100,
              "ptPrior": 80
            },
            {
              "date": "2026-08-28",
              "firm": "UBS",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 105,
              "ptPrior": 85
            },
            {
              "date": "2026-08-28",
              "firm": "TD Cowen",
              "action": "main",
              "from": "Hold",
              "to": "Hold",
              "ptAction": "Raises",
              "pt": 95,
              "ptPrior": 70
            },
            {
              "date": "2026-08-28",
              "firm": "Citigroup",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 128,
              "ptPrior": 104
            },
            {
              "date": "2026-08-28",
              "firm": "Stifel",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 107,
              "ptPrior": 90
            },
            {
              "date": "2026-08-28",
              "firm": "Barclays",
              "action": "main",
              "from": "Overweight",
              "to": "Overweight",
              "ptAction": "Raises",
              "pt": 118,
              "ptPrior": 94
            }
          ]
        },
        "nextEarnings": {
          "date": "2026-11-19",
          "upcoming": true,
          "estimated": true
        }
      },
      "cnbc": [
        {
          "title": "Stocks making the biggest moves midday: Amazon, Marvell, PayPal & more",
          "url": "https://www.cnbc.com/2026/08/28/stocks-making-the-biggest-moves-midday-amzn-mrvl-pypl-crm.html",
          "date": "2026-08-28",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves premarket: PayPal, Affirm Holdings, Gap, Marvell",
          "url": "https://www.cnbc.com/2026/08/28/stocks-making-the-biggest-moves-premarket-pypl-afrm-gap-mrvl.html",
          "date": "2026-08-28",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves after hours: Gap, Workday, Autodesk and more",
          "url": "https://www.cnbc.com/2026/08/27/stocks-making-the-biggest-moves-after-hours-gap-wday-adsk-and-more.html",
          "date": "2026-08-27",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Where you want to invest in tech for the second half, according to one top analyst",
          "url": "https://www.cnbc.com/2026/06/30/where-you-want-to-invest-in-tech-for-the-second-half-according-to-one-top-analyst.html",
          "date": "2026-06-30",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Investors will love AI spenders when returns start to come in, says Citi's Heath Terry",
          "url": "https://www.cnbc.com/video/2026/06/30/investors-will-love-ai-spenders-when-returns-start-to-come-in-says-citis-heath-terry.html",
          "date": "2026-06-30",
          "publisher": "CNBC",
          "kind": "video"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-16",
        "nameKo": "엘라스틱",
        "nameEn": "ELASTIC N V",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-07-31",
              "derived": false,
              "revenue": 478113000,
              "profit": -23574000,
              "netIncome": -16729000,
              "margin": -4.9,
              "yoy": {
                "revenue": 15.1,
                "profit": -149.7,
                "netIncome": 32,
                "priorEnd": "2025-07-31"
              }
            },
            {
              "periodEnd": "2026-04-30",
              "derived": true,
              "revenue": 450681000,
              "profit": -16411000,
              "netIncome": 435900000,
              "margin": -3.6,
              "yoy": {
                "revenue": 16,
                "profit": -36.5,
                "netIncome": 373.3,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodEnd": "2026-01-31",
              "derived": false,
              "revenue": 449881000,
              "profit": 611000,
              "netIncome": 7753000,
              "margin": 0.1,
              "yoy": {
                "revenue": 17.7,
                "profit": 113.2,
                "netIncome": 145.5,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 423481000,
              "profit": -8236000,
              "netIncome": -51284000,
              "margin": -1.9,
              "yoy": {
                "revenue": 15.9,
                "profit": -86.1,
                "netIncome": -101.5,
                "priorEnd": "2024-10-31"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "Is the Options Market Predicting a Spike in Elastic Stock?",
              "url": "https://www.nasdaq.com/articles/options-market-predicting-spike-elastic-stock",
              "date": "2026-10-05",
              "publisher": "Zacks"
            },
            {
              "title": "Elastic Unveils AI-Era Metrics Platform, Claims Major Speed and Storage Gains",
              "url": "https://www.nasdaq.com/articles/elastic-unveils-ai-era-metrics-platform-claims-major-speed-and-storage-gains",
              "date": "2026-09-25",
              "publisher": "MarketBeat"
            },
            {
              "title": "Elastic (ESTC) Just Overtook the 20-Day Moving Average",
              "url": "https://www.nasdaq.com/articles/elastic-estc-just-overtook-20-day-moving-average",
              "date": "2026-09-22",
              "publisher": "Zacks"
            },
            {
              "title": "Wall Street Analysts See a 29.62% Upside in Elastic (ESTC): Can the Stock Really Move This High?",
              "url": "https://www.nasdaq.com/articles/wall-street-analysts-see-2962-upside-elastic-estc-can-stock-really-move-high",
              "date": "2026-09-15",
              "publisher": "Zacks"
            },
            {
              "title": "Elastic N.V. Consensus Price Target Increased 32.39% to $110.86",
              "url": "https://www.nasdaq.com/articles/elastic-nv-consensus-price-target-increased-3239-11086",
              "date": "2026-09-15",
              "publisher": "Fintel"
            },
            {
              "title": "Elastic's 2026 Outlook: AI Search Integration Fuels Enterprise Customer Retention",
              "url": "https://www.nasdaq.com/articles/elastics-2026-outlook-ai-search-integration-fuels-enterprise-customer-retention",
              "date": "2026-09-08",
              "publisher": "The Motley Fool"
            },
            {
              "title": "Can Elastic (ESTC) Run Higher on Rising Earnings Estimates?",
              "url": "https://www.nasdaq.com/articles/can-elastic-estc-run-higher-rising-earnings-estimates",
              "date": "2026-09-02",
              "publisher": "Zacks"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-10-15",
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000061/estc-20261015.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-27",
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000036/estc-20260824.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-27",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000035/estc-20260827.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-24",
            "itemsKo": [
              "2.05",
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000024/estc-20260618.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-28",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000008/estc-20260528.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-26",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000003/estc-20260226.htm"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": []
        }
      },
      "rank": {
        "m1": 10.32,
        "m3": 1.76,
        "m6": 3.02
      },
      "verified": {
        "checked": 7,
        "ok": 19,
        "unverified": 0,
        "dead": 0,
        "stripped": 1
      },
      "numberCut": 1,
      "deep": {
        "status": "done",
        "ticker": "ESTC",
        "company": "엘라스틱은 검색 엔진 Elasticsearch 를 만드는 소프트웨어 회사다. 기업이 쌓아 둔 문서·로그·지표를 빠르게 찾고 분석하게 해 주고, 시스템 장애를 추적하는 관측 제품과 보안 제품을 구독으로 판다. 최근 성장 축은 클라우드 구독과 AI 검색 기능이다.",
        "lead": "매출은 꾸준히 15% 넘게 늘고 새 제품도 나왔지만, 지금 주가는 매수선 아래에서 쉬는 구간이다. 가장 강한 근거는 8월 분기 실적에서 매출이 1년 전보다 15% 늘고 비GAAP 영업이익률 16.2% 를 내며 연간 전망을 15.2% 성장으로 올린 것이다. 가장 큰 걱정은 피벗(넘으면 사는 선) 108 까지 9.96% 남아 있고 시장 판정이 노랑이라는 점이다. 종가가 50일선 88.04 아래로 내려가면 이 그림은 깨진다.",
        "newsNarrative": "8월 27일 분기 실적에서 매출이 1년 전보다 15% 늘고 연간 전망까지 올라가면서 주가가 크게 뛰었다. 9월에는 서버·앱이 쏟아내는 지표를 다루는 새 제품을 공개해 AI 수요를 겨냥했다. 이어 증권사 목표주가 평균이 110.86달러로 32.39% 올랐다. AI 검색 기능이 기업 고객을 붙잡아 둔다는 평가도 함께 나왔다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
            "evidence_level": "no_source",
            "sources": [
              {
                "title": "Elastic N.V. 8-K Exhibit 99.1 — Q1 FY2027 실적 발표문",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm",
                "date": "2026-08-27",
                "quote": "Total revenue was $478 million, an increase of 15% year-over-year",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statementOriginal": "8월 27일 발표한 분기 실적에서 매출이 1년 전보다 15% 늘었고, 비GAAP 영업이익률은 16.2% 였다.",
            "stripped": true
          },
          {
            "id": "n2",
            "statement": "같은 날 회사는 올해(2027년 4월 결산) 매출 전망을 15.2% 성장으로 올려 잡았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic N.V. 8-K Exhibit 99.1 — FY2027 가이던스",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm",
                "date": "2026-08-27",
                "quote": "Total revenue is expected to be between $1.998 billion and $2.010 billion, representing 15.2% year-over-year growth",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n3",
            "statement": "9월 25일 엘라스틱이 AI 시대를 겨냥한 새 지표 플랫폼을 공개했다고 보도됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic Unveils AI-Era Metrics Platform, Claims Major Speed and Storage Gains",
                "publisher": "MarketBeat",
                "url": "https://www.nasdaq.com/articles/elastic-unveils-ai-era-metrics-platform-claims-major-speed-and-storage-gains",
                "date": "2026-09-25",
                "quote": "Elastic Unveils AI-Era Metrics Platform, Claims Major Speed and Storage Gains",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n4",
            "statement": "9월 15일 증권사 목표주가 평균이 110.86달러로 32.39% 올랐다는 집계가 나왔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic N.V. Consensus Price Target Increased 32.39% to $110.86",
                "publisher": "Fintel",
                "url": "https://www.nasdaq.com/articles/elastic-nv-consensus-price-target-increased-3239-11086",
                "date": "2026-09-15",
                "quote": "Elastic N.V. Consensus Price Target Increased 32.39% to $110.86",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "9월 8일에는 AI 검색 기능 결합이 기업 고객 유지를 끌어올린다는 분석이 보도됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic's 2026 Outlook: AI Search Integration Fuels Enterprise Customer Retention",
                "publisher": "The Motley Fool",
                "url": "https://www.nasdaq.com/articles/elastics-2026-outlook-ai-search-integration-fuels-enterprise-customer-retention",
                "date": "2026-09-08",
                "quote": "Elastic's 2026 Outlook: AI Search Integration Fuels Enterprise Customer Retention",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "매출은 네 분기 연속 15~18% 늘며 속도가 유지되고 있다. 직전 분기(2026년 7월 결산)에는 매출이 1년 전보다 15% 증가했다. 회사가 쓰는 기준(비GAAP) 영업이익률은 16.2% 지만, 회계 기준 영업이익률은 -4.9% 로 아직 적자다. 회사는 올해 매출을 15.2% 성장으로, 비GAAP 주당순이익을 3.29~3.37달러로 제시했다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "r1",
              "statement": "직전 분기 매출이 1년 전보다 15% 늘었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic N.V. 8-K Exhibit 99.1 — Q1 FY2027 실적 발표문",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm",
                  "date": "2026-08-27",
                  "quote": "Total revenue was $478 million, an increase of 15% year-over-year",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "r2",
              "statement": "매출 증가율이 네 분기 연속 15~18% 구간을 지켰다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic N.V. 분기 실적표",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=10-Q",
                  "date": "2026-07-31",
                  "quote": "2026-07-31 전년비 매출 15.1 · 2026-04-30 16 · 2026-01-31 17.7 · 2025-10-31 15.9",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "p1",
              "statement": "회사가 쓰는 기준으로 본 분기 영업이익률은 16.2% 다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic N.V. 8-K Exhibit 99.1 — Q1 FY2027 실적 발표문",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm",
                  "date": "2026-08-27",
                  "quote": "Non-GAAP operating margin was 16.2%",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "p2",
              "statement": "회계 기준 영업이익률은 직전 분기 -4.9% 로, 영업손익이 1년 전보다 149.7% 나빠졌다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic N.V. 분기 실적표",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=10-Q",
                  "date": "2026-07-31",
                  "quote": "2026-07-31 영업이익률 -4.9 · 전년비 영업이익 -149.7 · 전년비 순이익 32",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "guidance": [
            {
              "id": "g1",
              "statement": "회사는 올해(2027년 4월 결산) 매출 전망을 15.2% 성장으로 올렸다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic N.V. 8-K Exhibit 99.1 — FY2027 가이던스",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm",
                  "date": "2026-08-27",
                  "quote": "Total revenue is expected to be between $1.998 billion and $2.010 billion, representing 15.2% year-over-year growth",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "g2",
              "statement": "같은 전망에서 올해 비GAAP 주당순이익은 3.29~3.37달러로 제시됐다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic N.V. 8-K Exhibit 99.1 — FY2027 가이던스",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm",
                  "date": "2026-08-27",
                  "quote": "Non-GAAP diluted earnings per share is expected to be between $3.29 and $3.37",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "mixed",
            "claims": [
              {
                "id": "e1",
                "statement": "올해(2027년 4월 결산) 주당순이익 추정치가 3.36달러로 90일 전 3.24달러보다 3.6% 높고, 최근 30일 29명이 올리고 내린 사람은 없다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Elastic (ESTC) Analysis — 추정치 변화",
                    "publisher": "Yahoo Finance",
                    "url": "https://finance.yahoo.com/quote/ESTC/analysis/",
                    "date": "2026-10-16",
                    "quote": "0y · endDate 2027-04-30 · now 3.36 · ago90 3.24 · d90 3.6 · up30 29 · down30 0",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "e2",
                "statement": "반면 2027년 1월 결산 분기 추정치는 0.95달러로 90일 전 0.96달러보다 0.3% 낮고, 최근 30일 16명이 내리고 6명이 올렸다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Elastic (ESTC) Analysis — 추정치 변화",
                    "publisher": "Yahoo Finance",
                    "url": "https://finance.yahoo.com/quote/ESTC/analysis/",
                    "date": "2026-10-16",
                    "quote": "+1q · endDate 2027-01-31 · now 0.95 · ago90 0.96 · d90 -0.3 · up30 6 · down30 16",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        },
        "estimatesNarrative": "올해 전망은 오르는데 다음 분기 전망은 내려가는 엇갈린 모습이다. 2027년 4월 결산 주당순이익 추정치는 3.36달러로 90일 전 3.24달러보다 3.6% 높고 최근 30일 29명이 올렸지만, 2027년 1월 결산 분기 추정치는 0.95달러로 90일 전 0.96달러보다 0.3% 낮다. 최근 4분기 실적이 모두 추정치를 넘었고 직전 분기는 19.9% 웃돌았는데, 매출이 15% 늘고 비GAAP 영업이익률 16.2% 를 낸 데서 나온 결과다.",
        "newDrivers": [
          {
            "what": "AI 시대 지표(메트릭) 플랫폼 — 서버·앱이 쏟아내는 숫자 기록을 Elasticsearch 가 직접 싸고 빠르게 저장·조회하도록 만든 신제품",
            "kind": "product",
            "stage": "출시",
            "since": "2026-09",
            "basis": [
              {
                "id": "d1",
                "statement": "9월 25일 엘라스틱이 AI 시대를 겨냥한 지표 플랫폼을 공개했다고 보도됐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Elastic Unveils AI-Era Metrics Platform, Claims Major Speed and Storage Gains",
                    "publisher": "MarketBeat",
                    "url": "https://www.nasdaq.com/articles/elastic-unveils-ai-era-metrics-platform-claims-major-speed-and-storage-gains",
                    "date": "2026-09-25",
                    "quote": "Elastic Unveils AI-Era Metrics Platform, Claims Major Speed and Storage Gains",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d2",
                "statement": "회사는 저장 구조와 연산 엔진을 열 단위 지표 엔진으로 다시 만들었다고 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "30x faster than Prometheus: How we rebuilt Elasticsearch as a leading columnar metrics datastore",
                    "publisher": "Elastic Search Labs",
                    "url": "https://www.elastic.co/search-labs/blog/elasticsearch-columnar-metrics-engine-30x-faster-prometheus",
                    "date": "2026-05-07",
                    "quote": "rebuilt TSDS storage and the ES|QL compute engine into a fully columnar metrics engine",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": [
              {
                "id": "d3",
                "statement": "이 분야에는 Prometheus·Mimir·ClickHouse 같은 대안이 이미 쓰이고 있어 고객이 실제로 옮겨 와야 한다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "30x faster than Prometheus: How we rebuilt Elasticsearch as a leading columnar metrics datastore",
                    "publisher": "Elastic Search Labs",
                    "url": "https://www.elastic.co/search-labs/blog/elasticsearch-columnar-metrics-engine-30x-faster-prometheus",
                    "date": "2026-05-07",
                    "quote": "queries them up to 30x faster and with up to 2.5x better storage efficiency, compared to Prometheus, Mimir and ClickHouse",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        ],
        "nNarrative": "9월에 내놓은 새 지표 제품이 최근 3개월 안에 확인된 유일한 새로운 것이다. 서버와 앱이 끊임없이 내보내는 숫자 기록을 Elasticsearch 가 직접 다루도록 저장 구조와 연산 엔진을 열 단위로 다시 만들었다. 회사는 Prometheus·Mimir·ClickHouse 와 비교해 조회가 최대 30배 빠르고 저장 효율이 최대 2.5배 좋다고 밝혔다. 다만 이 제품이 매출을 얼마나 올렸는지는 아직 공개된 숫자가 없다. 이익이나 마진에 주는 영향도 따로 밝혀진 것이 없다. 경쟁 도구가 이미 자리잡은 시장이라 고객이 실제로 옮겨 오는지가 다음 실적에서 확인돼야 한다.",
        "nVerdict": "부분 충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "미충족",
            "evidence": "직전 분기 회계 기준 영업이익률 -4.9%, 순이익은 전년비 32% 개선에 그친 적자축소 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 3분기 순이익 적자축소·흑자전환·흑자전환 (순이익 기준, 주식 수 변동 미반영) · 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "미충족",
            "evidence": "부분 충족 — 2026-09 새 지표 플랫폼 출시는 확인되나 매출·이익 영향 숫자가 없다 · 참고: 52주 고점 108 대비 종가 97.24"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 1.15배로 줄지 않았다(기준 0.7 이하) · 상장주식 104991000주 · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1개월 10.32% · 3개월 1.76% · 6개월 3.02% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "미충족",
            "evidence": "시장 판정 노랑 · 빚내서 산 주식이 1년 전보다 37.2% 늘어 주의선 30% 초과"
          }
        ],
        "risks": [
          {
            "id": "k1",
            "statement": "회계 기준으로는 직전 분기 영업손익이 적자였고 1년 전보다 149.7% 나빠졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic N.V. 분기 실적표",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=10-Q",
                "date": "2026-07-31",
                "quote": "2026-07-31 영업이익률 -4.9 · 전년비 영업이익 -149.7",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "k2",
            "statement": "다음 분기 주당순이익 추정치는 최근 30일 사이 16명이 내리고 6명만 올려 방향이 아래쪽이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic (ESTC) Analysis — 추정치 변화",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/quote/ESTC/analysis/",
                "date": "2026-10-16",
                "quote": "+1q · endDate 2027-01-31 · now 0.95 · ago90 0.96 · up30 6 · down30 16",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "k3",
            "statement": "모든 증권사가 긍정적이지는 않다 — 9월 23일 Cantor Fitzgerald 는 중립 의견에 목표주가 100달러를 유지했고, 최근 집계에 투자의견 하향도 1건 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic (ESTC) Analysis — 투자의견·목표주가 변경",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/quote/ESTC/analysis/",
                "date": "2026-10-16",
                "quote": "2026-09-23 · Cantor Fitzgerald · Neutral → Neutral · pt 100 · ptPrior 100 · downgrades 1",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "지표·관측 분야에서 Prometheus·Mimir·ClickHouse 같은 대안 도구와 정면으로 경쟁한다.",
          "회계 기준 영업손익이 분기마다 흑자와 적자를 오간다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 104% · 기준 30% 이상"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 6.6주(33봉) · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 1회 · 진폭 1.12배로 좁아지지 않았다(1 미만이어야 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 23.9% · 하루 변동폭 3.99%의 약 6배 · 선행 상승의 절반 아래"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 97.24 · 20일선 92.33 · 50일선 88.04"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 1.15배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "아직 돌파 전 — 돌파일에 20일 평균 2배가 실리는지 본다"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "피벗 108까지 -9.96%(하루 변동폭의 2.5배) · 기준 1배 이내"
          },
          {
            "item": "손절 폭",
            "status": "충족",
            "evidence": "예비 손절 폭 3.59% · 하루 변동폭 3.99% 이내"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 0.6배 · 기준 2배 이하"
          },
          {
            "item": "시장",
            "status": "미충족",
            "evidence": "시장 판정 노랑(보통)"
          }
        ],
        "chartObservation": {
          "base": "3개월 고점 118.84 에서 18.18% 내려온 자리에서 33봉(6.6주)째 가격대가 유지되고 있다. 베이스 고점 대비 저점 깊이는 23.9% 로 하루 변동폭 3.99% 의 약 6배다. 저점은 한 번 높아졌지만 진폭은 1.12배로 좁아지지 않았다.",
          "volume": "최근 5일 거래량이 20일 평균의 1.15배로 줄지 않았다. 10월 15일 거래량 4181049주는 최근 10봉 중 가장 많았고, 그날 종가는 하루 폭의 96% 지점이었다. 직전 10월 14일은 1592400주였다.",
          "position": "종가 97.24 는 피벗 108 보다 9.96% 아래이고, 하루 변동폭으로 2.5일치 거리다. 예비 손절 104.12 는 현재가보다 위에 있는데, 피벗을 넘어 들어간 뒤에 적용되는 선이기 때문이다. 10일선보다는 0.6배만 떠 있다.",
          "maStack": "종가 97.24 가 20일선 92.33, 50일선 88.04, 150일선 66.37 위에 모두 있다. 20일선 기울기는 +2.77% 로 올라가는 중이다.",
          "note": "그림에서도 9월 초 급등 뒤 10월까지 이어진 가격대와, 10월 15일에만 솟은 거래량 막대가 보인다 — 그림과 숫자가 일치한다."
        },
        "entryChecklist": [
          "피벗 108 을 20일 평균 2배 이상 거래량으로 종가 돌파하는지",
          "돌파 전까지 최근 5일 거래량이 20일 평균의 0.7배 아래로 줄어드는지",
          "종가가 50일선 88.04 위를 계속 지키는지",
          "시장 판정이 노랑에서 초록으로 바뀌는지",
          "돌파 시점이 2026-11-19 로 추정되는 실적 발표와 겹치지 않는지"
        ],
        "earningsRisk": "확정된 실적 발표 일정 없음(달력 기준). 전망치 자료의 추정 발표일은 2026-11-19 이며, 피벗까지 9.96% 남아 있어 돌파 시점이 발표와 겹칠 수 있다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": [
            "모든 claim의 숫자·날짜가 quote에 실제로 존재하고 일치함",
            "네 서술문(lead, newsNarrative, financialsNarrative, nNarrative) 모두 claim으로 지지됨",
            "신제품(metrics platform)은 매출영향을 별도로 주장하지 않고 사실만 기술함",
            "경쟁 도구 언급은 quote에서 Prometheus/Mimir/ClickHouse 비교로 근거됨"
          ]
        },
        "consensus": {
          "saleCy": 15.29,
          "saleNy": 14.7,
          "epsCy": 30.71,
          "epsNy": 17.73,
          "cyTrend": 0,
          "nyTrend": 0
        },
        "researchedOn": "2026-10-16",
        "session": "2026-10-15",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "PBF",
      "nameKo": "PBF 에너지",
      "sector": "Energy",
      "industry": "Oil & Gas Refining & Marketing",
      "industryRank": {
        "frank": 1,
        "frank25dChg": 2,
        "headline": "정제마진이 사상 최고로 오르고 제품 재고는 바닥이라, 정유사 이익이 급증하며 업종 순위 1위에 올랐다.",
        "asOf": "2026-10-15"
      },
      "requestedOn": "2026-10-15",
      "session": "2026-10-14",
      "at": "2026-10-15T05:30:20.130Z",
      "verdict": "조건부",
      "verdictLine": "실적과 업종 강도는 최고 수준이지만 쉬는 구간이 없어 넘으면 사는 선도 손절선도 없고 실적 발표가 2주 앞이라 조건부다.",
      "basis": [
        {
          "point": "2026년 2분기 영업이익이 전년비 2858.4%, 매출이 56.2% 늘어 이익 기준을 크게 넘겼다.",
          "side": "for",
          "checkRef": "CANSLIM:C"
        },
        {
          "point": "상대강도가 1개월 상위 2.57%, 6개월 상위 1.4%로 업종 주도주 기준을 넘는다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "이자 9.875%짜리 8억 달러 채권을 전액 조기상환해 이자 부담이 줄어든다.",
          "side": "for",
          "checkRef": "n2"
        },
        {
          "point": "쉬는 구간이 없어 넘으면 사는 선과 예비 손절선을 잡을 수 없다.",
          "side": "against",
          "checkRef": "차트:횡보 길이"
        },
        {
          "point": "최근 5일 거래량이 20일 평균의 0.84배로 거래량이 마르는 구간이 아니다.",
          "side": "against",
          "checkRef": "차트:거래량 마름"
        }
      ],
      "conditions": [
        "2~8주 길이의 쉬는 구간이 생기고 그 안에서 저점이 높아지는 것이 확인될 때",
        "그 구간에서 최근 5일 거래량이 20일 평균의 0.7배 아래로 마를 때",
        "2026년 10월 29일 실적 발표가 지나고 4분기 전망이 확인될 때",
        "그렇게 생긴 구간의 고점을 20일 평균의 2배 거래량으로 종가 돌파할 때"
      ],
      "invalidation": "종가가 50일선 74.92 아래로 내려가면 지금의 상승 흐름이 깨진 것으로 본다. 2027년 주당순이익이 올해보다 38.6% 줄어든다는 전망대로 정제마진이 꺾이면 지금 실적은 정점이었던 셈이 된다.",
      "dataLimits": "국내 증권사 리포트와 원문 PDF가 없고 기관 보유 자료도 받지 않아 수급은 확인하지 못했다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": true,
        "reasons": [
          {
            "key": "no_base",
            "ko": "쉬는 구간(베이스)이 없어 넘으면 사는 선(피벗)이 없다"
          }
        ],
        "asOf": {
          "bar": "2026-10-14",
          "market": "2026-10-14"
        }
      },
      "setup": {
        "state": "none",
        "grade": null,
        "pivot": null,
        "stop": null,
        "distToPivotPct": null,
        "distToPivotAdr": null,
        "riskPerSharePct": null,
        "extensionAdr": 0.79,
        "adrPct": 5.9,
        "breakDate": null,
        "chase": false,
        "metrics": null,
        "reasons": [
          "쉬는 구간 없음"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "3개월 최대상승 59% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "저점 높아짐",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "깊이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 89.51 · 20일선 79.7 · 50일선 74.92"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 0.84배 (보통) · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "피벗 거리",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "손절 폭",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 0.8 ADR · 기준 2 ADR 이하"
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
            "status": "충족",
            "evidence": "2026-06-30 분기 영업이익 전년비 2858.4% · 기준 +25% (SEC, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "충족",
            "evidence": "SEC 최근 4분기 이익 전년비 2858%/159%/133%/174% — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "N 분석 대기 — 목록 순환 심층 분석이 신제품·신서비스와 그 매출·이익 영향을 증권사 리포트·기사로 조사한다(N 없는 종목부터 하루 14개) · 참고: 52주 고점의 100%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 0.84배(20일 평균 대비) · 오늘 거래대금 —(상승일) · 상장주식 119M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 2.57% · 3M 3.74% · 6M 1.4% · 기준 상위 20%"
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
        "ticker": "PBF",
        "fetchedAt": "2026-10-15",
        "source": "한국투자증권 Open API",
        "per": 7.91,
        "pbr": 1.66,
        "eps": 11.31,
        "bps": 54.06,
        "shares": 118537000,
        "marketCapM": 10610,
        "high52": 92.46,
        "high52Date": "2026-10-14",
        "low52": 25.1551,
        "low52Date": "2025-12-18",
        "last": 89.51,
        "prevClose": 91.17,
        "nameKo": "PBF 에너지",
        "nameEn": "PBF ENERGY INC",
        "listedOn": "0000-00-00",
        "exchange": "뉴욕거래소",
        "listedShares": 118537000
      },
      "estimates": {
        "ticker": "PBF",
        "url": "https://finance.yahoo.com/quote/PBF/analysis/",
        "fetchedAt": "2026-10-15",
        "source": "Yahoo Finance",
        "periods": [
          {
            "period": "0q",
            "endDate": "2026-09-30",
            "eps": 11.13,
            "epsLow": 7.17,
            "epsHigh": 13.56,
            "epsYearAgo": -0.52,
            "epsAnalysts": 13,
            "epsGrowth": "n/m",
            "epsCur": "USD",
            "rev": 10573043910,
            "revAnalysts": 10,
            "revYearAgo": 7651100000,
            "revGrowth": 38.2,
            "revCur": "USD"
          },
          {
            "period": "+1q",
            "endDate": "2026-12-31",
            "eps": 7.78,
            "epsLow": 6.41,
            "epsHigh": 10.07,
            "epsYearAgo": 0.66,
            "epsAnalysts": 4,
            "epsGrowth": "n/m",
            "epsCur": "USD",
            "rev": 10040277520,
            "revAnalysts": 10,
            "revYearAgo": 7139500000,
            "revGrowth": 40.6,
            "revCur": "USD"
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "eps": 23.97,
            "epsLow": 16.35,
            "epsHigh": 27.6,
            "epsYearAgo": -4.13,
            "epsAnalysts": 14,
            "epsGrowth": "n/m",
            "epsCur": "USD",
            "rev": 40602820750,
            "revAnalysts": 11,
            "revYearAgo": 29332300000,
            "revGrowth": 38.4,
            "revCur": "USD"
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "eps": 17.38,
            "epsLow": 10.6,
            "epsHigh": 26.4,
            "epsYearAgo": 28.31,
            "epsAnalysts": 4,
            "epsGrowth": -38.6,
            "epsCur": "USD",
            "rev": 37057627060,
            "revAnalysts": 11,
            "revYearAgo": 40602820750,
            "revGrowth": -8.7,
            "revCur": "USD"
          }
        ],
        "changes": [
          {
            "period": "0q",
            "endDate": "2026-09-30",
            "cur": "USD",
            "now": 11.13,
            "d7": 3.7,
            "d30": 22.3,
            "d90": 138.7,
            "ago90": 4.66,
            "up7": 3,
            "up30": 6,
            "down7": 1,
            "down30": 0
          },
          {
            "period": "+1q",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 7.78,
            "d7": 13.9,
            "d30": 98.5,
            "d90": 233.2,
            "ago90": 2.34,
            "up7": 2,
            "up30": 4,
            "down7": 0,
            "down30": 0
          },
          {
            "period": "0y",
            "endDate": "2026-12-31",
            "cur": "USD",
            "now": 23.97,
            "d7": 3.9,
            "d30": 21,
            "d90": 152.8,
            "ago90": 9.48,
            "up7": 4,
            "up30": 8,
            "down7": 0,
            "down30": 0
          },
          {
            "period": "+1y",
            "endDate": "2027-12-31",
            "cur": "USD",
            "now": 17.38,
            "d7": -1.6,
            "d30": 58,
            "d90": 134.6,
            "ago90": 7.41,
            "up7": 2,
            "up30": 3,
            "down7": 0,
            "down30": 0
          }
        ],
        "surprises": [
          {
            "quarter": "2026-06-30",
            "actual": 6.22,
            "estimate": 4.12,
            "surprisePct": 51.1,
            "cur": "USD"
          },
          {
            "quarter": "2026-03-31",
            "actual": -0.88,
            "estimate": -0.9,
            "surprisePct": 1.7,
            "cur": "USD"
          },
          {
            "quarter": "2025-12-31",
            "actual": 0.49,
            "estimate": -0.11,
            "surprisePct": 550,
            "cur": "USD"
          },
          {
            "quarter": "2025-09-30",
            "actual": -0.52,
            "estimate": -0.75,
            "surprisePct": 31,
            "cur": "USD"
          }
        ],
        "beats": 4,
        "ratings": {
          "upgrades": 0,
          "downgrades": 0,
          "initiations": 1,
          "ptRaised": 11,
          "ptLowered": 0,
          "total": 12,
          "recent": [
            {
              "date": "2026-10-09",
              "firm": "Goldman Sachs",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 91,
              "ptPrior": 81
            },
            {
              "date": "2026-10-08",
              "firm": "Mizuho",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 89,
              "ptPrior": 65
            },
            {
              "date": "2026-10-06",
              "firm": "Citigroup",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 91,
              "ptPrior": 74
            },
            {
              "date": "2026-09-14",
              "firm": "Morgan Stanley",
              "action": "main",
              "from": "Underweight",
              "to": "Underweight",
              "ptAction": "Raises",
              "pt": 76,
              "ptPrior": 38
            },
            {
              "date": "2026-08-18",
              "firm": "Goldman Sachs",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 81,
              "ptPrior": 71
            },
            {
              "date": "2026-08-04",
              "firm": "UBS",
              "action": "main",
              "from": "Buy",
              "to": "Buy",
              "ptAction": "Raises",
              "pt": 84,
              "ptPrior": 62
            },
            {
              "date": "2026-08-04",
              "firm": "Mizuho",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 65,
              "ptPrior": 57
            },
            {
              "date": "2026-07-31",
              "firm": "Citigroup",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 74,
              "ptPrior": 65
            },
            {
              "date": "2026-07-24",
              "firm": "Citigroup",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 65,
              "ptPrior": 43
            },
            {
              "date": "2026-07-23",
              "firm": "Goldman Sachs",
              "action": "main",
              "from": "Neutral",
              "to": "Neutral",
              "ptAction": "Raises",
              "pt": 71,
              "ptPrior": 51
            }
          ]
        },
        "nextEarnings": {
          "date": "2026-10-29",
          "upcoming": true,
          "estimated": false
        }
      },
      "cnbc": [
        {
          "title": "Stocks making the biggest moves midday: Meta, Microsoft, Teladoc & more",
          "url": "https://www.cnbc.com/2026/07/30/stocks-making-the-biggest-moves-midday-meta-msft-mktx-crox.html",
          "date": "2026-07-30",
          "publisher": "CNBC",
          "kind": "article"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-15",
        "nameKo": "PBF 에너지",
        "nameEn": "PBF ENERGY INC",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001534504&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 11678300000,
              "profit": 1272100000,
              "netIncome": 906400000,
              "margin": 10.9,
              "yoy": {
                "revenue": 56.2,
                "profit": 2858.4,
                "netIncome": 17530.8,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 7904300000,
              "profit": 299600000,
              "netIncome": 198300000,
              "margin": 3.8,
              "yoy": {
                "revenue": 11.9,
                "profit": 158.6,
                "netIncome": 149.4,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 7139500000,
              "profit": 128000000,
              "netIncome": 78400000,
              "margin": 1.8,
              "yoy": {
                "revenue": -2.9,
                "profit": 133.4,
                "netIncome": 127.1,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 7651100000,
              "profit": 285900000,
              "netIncome": 170100000,
              "margin": 3.7,
              "yoy": {
                "revenue": -8.7,
                "profit": 174,
                "netIncome": 159.5,
                "priorEnd": "2024-09-30"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "PBF Energy Surges 189.4% in a Year: Should Investors Buy the Stock?",
              "url": "https://www.nasdaq.com/articles/pbf-energy-surges-1894-year-should-investors-buy-stock",
              "date": "2026-10-13",
              "publisher": "Zacks"
            },
            {
              "title": "PBF vs. NTOIY: Which Stock Is the Better Value Option?",
              "url": "https://www.nasdaq.com/articles/pbf-vs-ntoiy-which-stock-better-value-option",
              "date": "2026-10-12",
              "publisher": "Zacks"
            },
            {
              "title": "PBF Energy (PBF) Is Up 9.62% in One Week: What You Should Know",
              "url": "https://www.nasdaq.com/articles/pbf-energy-pbf-962-one-week-what-you-should-know",
              "date": "2026-10-05",
              "publisher": "Zacks"
            },
            {
              "title": "Zacks Investment Ideas feature highlights: Hewlett, PBF Energy and NetApp",
              "url": "https://www.nasdaq.com/articles/zacks-investment-ideas-feature-highlights-hewlett-pbf-energy-and-netapp",
              "date": "2026-10-05",
              "publisher": "Zacks"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-10-14",
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1534504/000153450426000035/pbf-20261014.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-10-01",
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1534504/000153450426000033/pbf-20260930.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-17",
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "3.02",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526394108/d175053d8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-15",
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526391405/d175358d8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-09-14",
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526389847/d179978d8k.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-30",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1534504/000153450426000029/pbf-20260730.htm"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": []
        }
      },
      "rank": {
        "m1": 2.57,
        "m3": 3.74,
        "m6": 1.4
      },
      "verified": {
        "checked": 8,
        "ok": 28,
        "unverified": 0,
        "dead": 0,
        "stripped": 2
      },
      "numberCut": 2,
      "deep": {
        "status": "done",
        "ticker": "PBF",
        "company": "PBF 에너지는 미국에서 정유공장 여러 곳을 돌려 원유를 휘발유·경유 같은 석유제품으로 바꿔 파는 회사다. 공장은 동부·중부·걸프·서부 네 권역에 흩어져 있고, 3분기 기준 회사 전체 원유 처리량 목표는 하루 90만~96만 배럴이다. 자회사 St. Bernard Renewables를 통해 재생디젤도 만든다. 돈 버는 구조는 단순해서, 사 오는 원유값과 파는 제품값의 차이(정제마진)가 벌어지면 이익이 급증하고 좁아지면 적자로 간다.",
        "lead": "업황과 실적은 최고 국면인데 살 자리가 없는 종목이다. 2분기 매출이 1년 전보다 56.2% 늘고 영업이익이 2858.4% 증가하면서 증권사 올해 이익 추정치가 90일 전보다 152.8% 올라갔다. 걱정은 차트에 옆으로 쉬는 구간이 전혀 없어 넘으면 사는 선(피벗)도 손절선도 잡히지 않는다는 점이다. 10월 29일 실적 발표가 2주 앞이고, 2027년 이익이 올해보다 38.6% 줄어든다는 전망대로 정제마진이 꺾이면 지금 숫자는 정점이었던 것이 된다.",
        "newsNarrative": "최근 한 달 PBF 뉴스의 핵심은 빚 갈아타기다. 9월 17일 이자 0%짜리 교환사채 5억 5,000만 달러를 발행해, 이자 7.875%를 물던 2030년 만기 채권 5억 달러를 갚는 데 썼다. 10월 14일에는 이자 9.875%짜리 8억 달러 채권까지 전액 조기상환하겠다고 통지했다. 9월 30일에는 한도 40억 달러짜리 운전자금 대출 약정을 2031년 만기로 새로 맺어, 이자 부담과 자금 여력이 함께 개선됐다.",
        "recentNews": [
          {
            "id": "n1",
            "statement": "9월 17일 이자 0%짜리 교환사채 5억 5,000만 달러를 발행해 고금리 채권을 갚을 실탄을 마련했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Inc. Form 8-K (2026-09-17)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526394108/d175053d8k.htm",
                "date": "2026-09-17",
                "quote": "the Issuers issued $550.0 million in aggregate principal amount of 0% Exchangeable Senior Notes due 2032",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n2",
            "statement": "10월 14일 이자 9.875%짜리 8억 달러 채권 전액을 조기상환하겠다고 통지했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Inc. Form 8-K (2026-10-14)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1534504/000153450426000035/pbf-20261014.htm",
                "date": "2026-10-14",
                "quote": "issued a notice of optional full redemption to redeem all $800.0 million in aggregate principal amount of the outstanding 9.875% Senior Notes due 2030",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n3",
            "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
            "evidence_level": "no_source",
            "sources": [
              {
                "title": "PBF Energy Inc. Form 8-K (2026-09-14)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526389847/d179978d8k.htm",
                "date": "2026-09-14",
                "quote": "On September 14, 2026, the Company announced that PBF Holding and PBF Holding's wholly owned subsidiary, PBF Finance Corporation (\"PBF Finance\"), as co-issuers, intend to commence a private offering of $500.0 million in aggregate principal amount of senior unsecured exchangeable notes due 2032",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statementOriginal": "9월 14일 5억 달러 교환사채 발행 계획을 알리며, 이자 7.875% 채권을 갚는 데 쓰겠다고 밝혔다.",
            "stripped": true
          },
          {
            "id": "n4",
            "statement": "9월 30일 한도 40억 달러짜리 운전자금 대출 약정을 새로 맺어 자금 여력을 늘렸다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Inc. Form 8-K (2026-10-01)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1534504/000153450426000033/pbf-20260930.htm",
                "date": "2026-10-01",
                "quote": "The 2026 Revolving Loan has a maximum commitment of $4.0 billion",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n5",
            "statement": "2분기에 순차입금을 14억 달러 넘게 줄였다고 회사가 밝혔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Reports Second Quarter 2026 Results",
                "publisher": "PBF Energy (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                "date": "2026-07-30",
                "quote": "We are in a cyclical business with a volatile and ever-changing environment. During the second quarter, PBF delivered significant equity value through our net debt reduction of over $1.4 billion.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "n6",
            "statement": "주가가 1년 사이 189.4% 올라 지금 수준이 적정한지를 두고 기사가 나왔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Surges 189.4% in a Year: Should Investors Buy the Stock?",
                "publisher": "Zacks",
                "url": "https://www.nasdaq.com/articles/pbf-energy-surges-1894-year-should-investors-buy-stock",
                "date": "2026-10-13",
                "quote": "PBF Energy Surges 189.4% in a Year: Should Investors Buy the Stock?",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "정제마진이 벌어지면서 실적이 1년 만에 완전히 달라졌다. 2026년 2분기 매출은 11,678.3백만 달러로 1년 전 같은 분기보다 56.2% 늘었다. 영업이익은 1,272.1백만 달러로 전년 동기 대비 2858.4% 증가했고, 영업이익률은 직전 분기 3.8%에서 10.9%로 뛰었다. 직전 세 분기 이익도 모두 전년보다 늘어, 회복 흐름이 1년째 이어지고 있다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f1",
              "statement": "2026년 2분기 매출은 11,678.3백만 달러로 1년 전보다 56.2% 늘었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "PBF Energy Reports Second Quarter 2026 Results",
                  "publisher": "PBF Energy (SEC EDGAR)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                  "date": "2026-07-30",
                  "quote": "Q2 Revenues: $11,678.3 million",
                  "verified": "ok",
                  "httpStatus": 200
                },
                {
                  "title": "PBF Energy 분기 실적 (SEC EDGAR)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001534504&type=10-Q",
                  "date": "2026-06-30",
                  "quote": "\"periodEnd\": \"2026-06-30\", \"revenue\": 11678300000, \"yoy\": { \"revenue\": 56.2 }",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f2",
              "statement": "직전 분기인 2026년 3월 말 분기 매출은 7,904.3백만 달러, 전년비 11.9% 증가로 2분기에 증가 속도가 빨라졌다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "PBF Energy 분기 실적 (SEC EDGAR)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001534504&type=10-Q",
                  "date": "2026-03-31",
                  "quote": "\"periodEnd\": \"2026-03-31\", \"revenue\": 7904300000, \"yoy\": { \"revenue\": 11.9 }",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "f3",
              "statement": "2026년 2분기 영업이익은 1,272.1백만 달러로 전년 동기보다 2858.4% 늘었고 영업이익률은 10.9%였다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "PBF Energy Reports Second Quarter 2026 Results",
                  "publisher": "PBF Energy (SEC EDGAR)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                  "date": "2026-07-30",
                  "quote": "Q2 Income from operations: $1,272.1 million",
                  "verified": "ok",
                  "httpStatus": 200
                },
                {
                  "title": "PBF Energy 분기 실적 (SEC EDGAR)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001534504&type=10-Q",
                  "date": "2026-06-30",
                  "quote": "\"periodEnd\": \"2026-06-30\", \"profit\": 1272100000, \"margin\": 10.9, \"yoy\": { \"profit\": 2858.4 }",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f4",
              "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
              "evidence_level": "no_source",
              "sources": [
                {
                  "title": "PBF Energy 분기 실적 (SEC EDGAR)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001534504&type=10-Q",
                  "date": "2026-06-30",
                  "quote": "\"yoy\": { \"profit\": 2858.4 } / \"yoy\": { \"profit\": 158.6 } / \"yoy\": { \"profit\": 133.4 } / \"yoy\": { \"profit\": 174 }",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statementOriginal": "최근 4개 분기 이익이 전년 대비 각각 2858.4%·158.6%·133.4%·174% 늘어 1년 내내 증가했다.",
              "stripped": true
            }
          ],
          "guidance": [
            {
              "id": "g1",
              "statement": "회사는 3분기 전사 원유 처리량을 하루 900,000~960,000 배럴로 제시했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "PBF Energy Reports Second Quarter 2026 Results",
                  "publisher": "PBF Energy (SEC EDGAR)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                  "date": "2026-07-30",
                  "quote": "Total: 900,000-960,000",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "raised",
            "claims": [
              {
                "id": "e1",
                "statement": "증권사 목표주가 상향이 최근 11건 나왔고 투자의견 상향·하향은 0건이다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy 애널리스트 전망치",
                    "publisher": "Yahoo Finance",
                    "url": "https://finance.yahoo.com/quote/PBF/analysis/",
                    "date": "2026-10-15",
                    "quote": "\"upgrades\": 0, \"downgrades\": 0, \"initiations\": 1, \"ptRaised\": 11, \"ptLowered\": 0, \"total\": 12",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "e2",
                "statement": "올해 주당순이익 추정치는 23.97달러로 90일 전 9.48달러에서 152.8% 올랐다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy 애널리스트 전망치",
                    "publisher": "Yahoo Finance",
                    "url": "https://finance.yahoo.com/quote/PBF/analysis/",
                    "date": "2026-10-15",
                    "quote": "\"period\": \"0y\", \"now\": 23.97, \"d30\": 21, \"d90\": 152.8, \"ago90\": 9.48, \"up30\": 8, \"down30\": 0",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        },
        "estimatesNarrative": "증권사 전망치는 한 방향으로 계속 올라가고 있다. 올해(12월 결산) 주당순이익 추정치는 23.97달러로 30일 전보다 21%, 90일 전 9.48달러보다 152.8% 높아졌고 최근 30일 상향 8명·하향 0명이다. 2분기 실적이 추정치를 51.1% 웃돈 것이 상향의 출발점인데, 같은 분기 매출이 56.2% 늘어난 만큼 일회성이 아니라 정제마진에서 나온 결과로 보인다. 다만 2027년 주당순이익 추정은 17.38달러로 올해보다 38.6% 낮고 매출도 8.7% 줄어든다고 보고 있어, 증권사들은 지금을 이익 정점으로 두고 있다.",
        "newDrivers": [
          {
            "what": "서부 마티네즈 정유공장 전면 재가동 — 멈춰 있던 서부 핵심 공장이 다시 돌아 처리량이 돌아왔다",
            "kind": "product",
            "stage": "매출 발생 중",
            "since": "2026-06",
            "basis": [
              {
                "id": "d1b1",
                "statement": "회사는 마티네즈 정유공장이 2분기에 전면 가동 상태로 복귀했다고 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Reports Second Quarter 2026 Results",
                    "publisher": "PBF Energy (SEC EDGAR)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                    "date": "2026-07-30",
                    "quote": "The Martinez refinery successfully returned to full operations in the second quarter",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "d1r1",
                "statement": "재가동으로 3분기 서부 권역 처리량 목표가 하루 270,000~290,000 배럴로 잡혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Reports Second Quarter 2026 Results",
                    "publisher": "PBF Energy (SEC EDGAR)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                    "date": "2026-07-30",
                    "quote": "West Coast: 270,000-290,000",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "d1p1",
                "statement": "재가동 분기인 2분기에 영업이익률이 10.9%로 직전 분기 3.8%에서 올라섰다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy 분기 실적 (SEC EDGAR)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001534504&type=10-Q",
                    "date": "2026-06-30",
                    "quote": "\"periodEnd\": \"2026-06-30\", \"margin\": 10.9 / \"periodEnd\": \"2026-03-31\", \"margin\": 3.8",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [
              {
                "id": "d1g1",
                "statement": "회사 가이던스 기준 3분기 전사 처리량은 하루 900,000~960,000 배럴이다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Reports Second Quarter 2026 Results",
                    "publisher": "PBF Energy (SEC EDGAR)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                    "date": "2026-07-30",
                    "quote": "Total: 900,000-960,000",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "d1c1",
                "statement": "경영진이 변동이 심한 순환 산업이라고 못 박았다 — 마진이 꺾이면 처리량이 늘어도 이익은 준다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Reports Second Quarter 2026 Results",
                    "publisher": "PBF Energy (SEC EDGAR)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                    "date": "2026-07-30",
                    "quote": "We are in a cyclical business with a volatile and ever-changing environment.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "고금리 회사채를 이자 0% 교환사채로 교체 — 7.875%·9.875% 채권을 0%짜리로 갈아탄다",
            "kind": "contract",
            "stage": "출시",
            "since": "2026-09-17",
            "basis": [
              {
                "id": "d2b1",
                "statement": "9월 17일 이자 0%짜리 교환사채 5억 5,000만 달러를 발행했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Inc. Form 8-K (2026-09-17)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526394108/d175053d8k.htm",
                    "date": "2026-09-17",
                    "quote": "the Issuers issued $550.0 million in aggregate principal amount of 0% Exchangeable Senior Notes due 2032",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              },
              {
                "id": "d2b2",
                "statement": "조달한 돈은 이자 7.875%짜리 2030년 만기채를 전액 갚는 데 쓴다고 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Inc. Form 8-K (2026-09-14)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526389847/d179978d8k.htm",
                    "date": "2026-09-14",
                    "quote": "to fund the redemption in full of its outstanding 7.875% Senior Unsecured Notes due 2030",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [
              {
                "id": "d2p1",
                "statement": "이자 9.875%짜리 8억 달러 채권까지 전액 상환하면 해마다 나가던 이자가 그만큼 사라진다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Inc. Form 8-K (2026-10-14)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1534504/000153450426000035/pbf-20261014.htm",
                    "date": "2026-10-14",
                    "quote": "issued a notice of optional full redemption to redeem all $800.0 million in aggregate principal amount of the outstanding 9.875% Senior Notes due 2030",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [],
            "counter": [
              {
                "id": "d2c1",
                "statement": "교환사채가 주식으로 바뀌면 최대 7,812,475주가 새로 나와 기존 주주 몫이 줄어든다(희석).",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "PBF Energy Inc. Form 8-K (2026-09-17)",
                    "publisher": "SEC EDGAR",
                    "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526394108/d175053d8k.htm",
                    "date": "2026-09-17",
                    "quote": "A maximum of 7,812,475 shares of Common Stock may be issued upon exchange of the Notes, based on the initial maximum exchange rate of 14.2045 shares of Common Stock per $1,000 principal amount",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          }
        ],
        "nNarrative": "새로 생긴 것은 두 가지다. 첫째, 멈춰 있던 서부 마티네즈 정유공장이 2분기에 전면 재가동돼 서부 처리량 목표가 하루 270,000~290,000 배럴로 돌아왔고 전사로는 하루 900,000~960,000 배럴이다. 둘째, 9월 17일 이자 0%짜리 교환사채 5억 5,000만 달러를 발행해 7.875%·9.875% 채권을 갚는 중이라 해마다 나가던 이자가 줄어든다. 이익 쪽에서는 재가동 분기인 2분기 영업이익률이 10.9%로 직전 분기 3.8%에서 올라선 것이 확인된다. 기대 성장률로 회사가 내놓은 것은 3분기 처리량 가이던스뿐이고 마진 전망은 제시하지 않았다. 꺾일 수 있는 지점은 둘 — 경영진 표현대로 변동이 심한 순환 산업이라 마진이 내려가면 처리량이 늘어도 이익이 줄고, 교환사채가 주식으로 바뀌면 최대 7,812,475주가 새로 나온다.",
        "nVerdict": "충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "충족",
            "evidence": "2026-06-30 분기 영업이익 전년비 +2858.4%, 매출 +56.2% · 기준 +25% (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "충족",
            "evidence": "최근 4개 분기 이익 전년비 2858.4%/158.6%/133.4%/174% — 최근 1년은 모두 증가(부분 충족). 3년 추세·자기자본이익률은 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "서부 마티네즈 공장 2분기 전면 재가동, 3분기 서부 처리량 목표 하루 270,000~290,000 배럴 · 이자 0% 교환사채 5억 5,000만 달러로 9.875%·7.875% 채권 교체 · 참고: 52주 고점의 100%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 0.84배 · 기준 0.7 이하 · 상장주식 118,537,000주 · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1개월 2.57% · 3개월 3.74% · 6개월 1.4% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "충족",
            "evidence": "시장 판정 초록(10일선이 20일선 위, 둘 다 상승) · 빚내서 산 주식이 1년 전보다 +37.2%로 주의선 +30% 초과"
          }
        ],
        "risks": [
          {
            "id": "r1",
            "statement": "교환사채가 주식으로 바뀌면 최대 7,812,475주가 새로 발행돼 기존 주주 몫이 줄어든다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Inc. Form 8-K (2026-09-17)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526394108/d175053d8k.htm",
                "date": "2026-09-17",
                "quote": "A maximum of 7,812,475 shares of Common Stock may be issued upon exchange of the Notes, based on the initial maximum exchange rate of 14.2045 shares of Common Stock per $1,000 principal amount",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r2",
            "statement": "증권사들은 2027년 주당순이익을 17.38달러로 올해보다 38.6% 낮게, 매출도 8.7% 줄어든다고 본다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy 애널리스트 전망치",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/quote/PBF/analysis/",
                "date": "2026-10-15",
                "quote": "\"period\": \"+1y\", \"endDate\": \"2027-12-31\", \"eps\": 17.38, \"epsGrowth\": -38.6, \"revGrowth\": -8.7",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r3",
            "statement": "경영진이 변동이 심한 순환 산업이라고 직접 밝혀, 분기마다 실적이 크게 흔들릴 수 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Reports Second Quarter 2026 Results",
                "publisher": "PBF Energy (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/0001534504/000153450426000029/a991pressreleaseq2-26.htm",
                "date": "2026-07-30",
                "quote": "We are in a cyclical business with a volatile and ever-changing environment.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r4",
            "statement": "9월 상환한 2030년 만기채는 원금의 103.938%를 지급하는 조건이라 조기상환에 추가 현금이 나갔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "PBF Energy Inc. Form 8-K (2026-09-14)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/Archives/edgar/data/1534504/000119312526389847/d179978d8k.htm",
                "date": "2026-09-14",
                "quote": "On September 14, 2026, PBF Holding and PBF Finance issued a notice of conditional optional full redemption for all $500 million of the outstanding 2030 Notes at a redemption price equal to 103.938% of the aggregate principal amount thereof",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "원유값과 제품값의 차이에 이익이 통째로 달려 있어 분기 실적 진폭이 크다.",
          "공장 한 곳이 사고나 정기보수로 멈추면 권역 처리량이 바로 줄어든다.",
          "차입금 규모가 커서 금리와 채권시장 상황에 재무구조가 좌우된다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "3개월 최대 상승 59% · 기준 30% 이상"
          },
          {
            "item": "횡보 길이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "저점 높아짐",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "깊이",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 89.51 · 20일선 79.7 · 50일선 74.92"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 0.84배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없어 돌파봉을 잴 수 없다"
          },
          {
            "item": "피벗 거리",
            "status": "확인 불가",
            "evidence": "쉬는 구간(베이스)이 없어 넘으면 사는 선이 없다"
          },
          {
            "item": "손절 폭",
            "status": "확인 불가",
            "evidence": "예비 손절선이 없다 · 참고 하루 변동폭 5.9%"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 0.8 ADR · 기준 2 ADR 이하"
          },
          {
            "item": "시장",
            "status": "충족",
            "evidence": "시장 판정 초록"
          }
        ],
        "chartObservation": {
          "base": "옆으로 쉬는 구간이 없다. 7월 이후 계속 올라 종가가 50일선보다 19.47% 위에 있다. 최근 고점은 92.46이고 현재가는 거기서 3.19% 아래다.",
          "volume": "최근 5일 거래량은 20일 평균의 0.84배, 마지막 봉은 0.86배다. 10월 13일 상승일에 3,399,200주, 다음 날 2,976,892주가 거래됐다. 쉬는 구간이 없어 거래량이 말랐는지 잴 기준 구간 자체가 없다.",
          "position": "현재가 89.51에 대해 넘으면 사는 선(피벗)도 예비 손절선도 잡히지 않았다. 10일선 위 0.8 ADR로 이평선에는 붙어 있다. 52주 고점 92.46은 바로 전날인 10월 14일에 찍혔다.",
          "maStack": "가격이 20일선 79.7, 50일선 74.92, 150일선 56.18 위에 있고 세 선 모두 우상향이다.",
          "note": "그림과 숫자가 일치한다. 7월 이후 이평선을 타고 계단식으로 오르기만 했고 옆으로 눌러앉은 구간이 보이지 않으며, 거래량 막대도 줄어드는 모양이 아니다."
        },
        "entryChecklist": [
          "2~8주 길이로 옆으로 쉬는 구간이 생기고 그 안에서 저점이 높아지는지",
          "그 구간에서 최근 5일 거래량이 20일 평균의 0.7배 아래로 줄어드는지",
          "2026년 10월 29일 실적 발표와 4분기 전망이 나온 뒤인지",
          "종가가 50일선 74.92 위를 계속 지키는지",
          "교환사채 전환으로 최대 7,812,475주가 실제로 발행되는지"
        ],
        "earningsRisk": "다음 실적 발표는 2026년 10월 29일로 2주 앞이다. 최근 4개 분기 모두 추정치를 웃돌았지만 정제마진이 분기마다 크게 움직여, 발표 전에 들어가면 결과에 베팅하는 셈이 된다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        },
        "consensus": {
          "saleCy": 38.42,
          "saleNy": -8.73,
          "epsCy": -680.3,
          "epsNy": -27.49,
          "cyTrend": 21.02,
          "nyTrend": 57.98
        },
        "researchedOn": "2026-10-15",
        "session": "2026-10-14",
        "carried": false,
        "source": "ondemand"
      }
    },
    {
      "ticker": "TEAM",
      "nameKo": "아틀라시언",
      "sector": "Technology",
      "industry": "Software - Application",
      "industryRank": {
        "frank": 3,
        "frank25dChg": 13,
        "headline": "AI에 소프트웨어가 대체될 것이라는 공포가 가라앉으며 바닥에서 반등한 응용 소프트웨어가 업종 순위 5위까지 올라섰다.",
        "asOf": "2026-10-14"
      },
      "requestedOn": "2026-10-14",
      "session": "2026-10-13",
      "at": "2026-10-14T01:36:53.457Z",
      "verdict": "조건부",
      "verdictLine": "10월 8일 피벗 200 을 넘은 뒤라 지금 진입은 추격이며, 돌파봉 거래량도 20일 평균의 0.99배에 그쳐 확인이 더 필요하다.",
      "basis": [
        {
          "point": "종가 208.04 가 20일선 192.94·50일선 178.07 위에 있고 20일선이 오르는 중이다.",
          "side": "for",
          "checkRef": "차트:이평선 위"
        },
        {
          "point": "상대강도가 3개월 상위 0.32%, 6개월 상위 0.41% 로 업종 안에서 앞서 있다.",
          "side": "for",
          "checkRef": "CANSLIM:L"
        },
        {
          "point": "2026-10-08 에 피벗 200 을 이미 넘어 지금은 4.02% 위의 추격 구간이다.",
          "side": "against",
          "checkRef": "차트:피벗 거리"
        },
        {
          "point": "그 돌파일 거래량이 20일 평균의 0.99배로 기준인 2배에 크게 못 미쳤다.",
          "side": "against",
          "checkRef": "차트:돌파 거래량"
        },
        {
          "point": "최근 4분기 중 3분기가 영업적자였고 흑자는 마지막 한 분기뿐이다.",
          "side": "against",
          "checkRef": "CANSLIM:A"
        }
      ],
      "conditions": [
        "피벗 200 위에서 2주 이상 새로 쉬는 구간이 만들어지고, 그 상단 아래 하루 변동폭 4.16% 안에서 다시 멈춰 설 것",
        "그 새 구간을 넘는 날 거래량이 20일 평균의 2배 이상 실릴 것",
        "11월 5일 실적 발표가 지나고 클라우드 매출 증가율 28.5% 전망이 지켜졌음이 확인될 것",
        "예비 손절 폭이 하루 평균 변동폭 4.16% 이내로 좁혀지는 자리가 나올 것"
      ],
      "invalidation": "종가가 예비 손절 191.34 아래로 내려가면 이 판단은 틀린 것으로 본다. 쉬는 구간 저점 168.05 를 깨면 흐름 자체가 바뀐 것이다.",
      "dataLimits": "기관 보유 자료가 없고, 국내 증권사 리포트가 0건이라 증권사 전망치 변화는 확인하지 못했다.",
      "verdictAdjusted": null,
      "verdictOriginal": null,
      "gates": {
        "blocked": true,
        "reasons": [
          {
            "key": "post_breakout",
            "ko": "이미 피벗 200 을 넘었다(2026-10-08) — 넘은 뒤에 사는 것은 추격이다"
          }
        ],
        "asOf": {
          "bar": "2026-10-13",
          "market": "2026-10-13"
        }
      },
      "setup": {
        "state": "post",
        "grade": "B",
        "pivot": 200,
        "stop": 191.34,
        "distToPivotPct": 4.02,
        "distToPivotAdr": 0.97,
        "riskPerSharePct": 4.33,
        "extensionAdr": 1.28,
        "adrPct": 4.16,
        "breakDate": "2026-10-08",
        "chase": false,
        "metrics": {
          "baseBars": 19,
          "baseWeeks": 3.8,
          "depthPct": 16,
          "priorMovePct": 168.8,
          "higherLows": 0,
          "contraction": 0.98,
          "closeRange10Adr": 2.4,
          "surf10": 0.92,
          "surf20": 0.82,
          "slope20": 1.05,
          "baseLow": 168.05,
          "lastSwingLow": 168.05
        },
        "reasons": [
          "선행 상승 +169%",
          "베이스 3.8주",
          "깊이 16%",
          "✗ 저점 상승 0회",
          "진폭 0.98배 · 10일 종가폭 2.4 ADR",
          "10일선 +0.9 ADR · 20일선 +0.8 ADR",
          "20일선 기울기 +1.05%"
        ],
        "earnings": null
      },
      "checks": {
        "qm": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 169% · 기준 30%↑"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 3.8주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 0.98배(1 미만이면 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 16% · ADR 4.16%의 3.8배 · 선행 상승의 절반 84%"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 208.04 · 20일선 192.94 · 50일선 178.07"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량 = 20일 평균의 0.79배 (보통) · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "미충족",
            "evidence": "2026-10-08 돌파봉 거래량 = 20일 평균의 0.99배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "이미 2026-10-08 피벗 200 돌파 — 추격 구간"
          },
          {
            "item": "손절 폭",
            "status": "미충족",
            "evidence": "예비 손절 폭 4.33% · ADR 4.16%"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.3 ADR · 기준 2 ADR 이하"
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
            "status": "충족",
            "evidence": "최근 분기 흑자전환 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "사이트 최근 3분기 순이익 흑자전환/적자확대/적자확대 — 모두 늘었으면 최근 1년 성장(부분 충족). 3년 추세·ROE 는 확인 불가"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "확인 불가",
            "evidence": "신제품·신서비스·신경영진 여부는 코드로 판정하지 않는다 — AI 심층 분석에서 출처로 판정 · 참고: 52주 고점의 98%"
          },
          {
            "item": "S 수급",
            "status": "미충족",
            "evidence": "최근 5일 거래량 0.79배(20일 평균 대비) · 오늘 거래대금 —(상승일) · 상장주식 159M주(한국투자증권) · 유통주식은 확인 불가"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 상위 1M 15.37% · 3M 0.32% · 6M 0.41% · 기준 상위 20%"
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
        "ticker": "TEAM",
        "fetchedAt": "2026-10-13",
        "source": "한국투자증권 Open API",
        "per": 1110.96,
        "pbr": 49.74,
        "eps": 0.19,
        "bps": 4.18,
        "shares": 159005000,
        "marketCapM": 33033,
        "high52": 212.84,
        "high52Date": "2026-10-12",
        "low52": 56.0101,
        "low52Date": "2026-04-10",
        "last": 207.75,
        "prevClose": 206.79,
        "nameKo": "아틀라시언",
        "nameEn": "ATLASSIAN CORP",
        "listedOn": "2015-12-09",
        "exchange": "나스닥",
        "listedShares": 159005000
      },
      "cnbc": [
        {
          "title": "Jim Cramer's top 10 things to watch in the stock market Tuesday",
          "url": "https://www.cnbc.com/investingclub/2026/09/01/jim-cramers-top-10-things-to-watch-in-the-stock-market-tuesday.html",
          "date": "2026-09-01",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
          "url": "https://www.cnbc.com/2026/08/07/saaspocalypse-debate-intensifies-as-software-stocks-swing-wildly.html",
          "date": "2026-08-07",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves midday: SpaceX, Coherent, Airbnb & more",
          "url": "https://www.cnbc.com/2026/08/07/stocks-making-the-biggest-moves-midday-spcx-cohr-team-abnb-ttd.html",
          "date": "2026-08-07",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Stocks making the biggest moves premarket: Atlassian, Wendy's, Vista & more",
          "url": "https://www.cnbc.com/2026/08/07/stocks-making-the-biggest-moves-premarket-atlassian-corporation-wendys-vista-corp-first-solar-airbnb-more.html",
          "date": "2026-08-07",
          "publisher": "CNBC",
          "kind": "article"
        },
        {
          "title": "Software companies are evaporating the terminal risk fears AI models posed: Citi's Fatima Boolani",
          "url": "https://www.cnbc.com/video/2026/08/07/software-companies-are-evaporating-the-terminal-risk-fears-ai-models-posed-citis-fatima-boolani.html",
          "date": "2026-08-07",
          "publisher": "CNBC",
          "kind": "video"
        }
      ],
      "detail": {
        "fetchedAt": "2026-10-14",
        "nameKo": "아틀라시언",
        "nameEn": "ATLASSIAN CORP",
        "financials": {
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001650372&type=10-Q",
          "quarters": [
            {
              "periodEnd": "2026-06-30",
              "derived": true,
              "revenue": 1766469000,
              "profit": 210723000,
              "netIncome": 139076000,
              "margin": 11.9,
              "yoy": {
                "revenue": 27.6,
                "profit": 839.9,
                "netIncome": 681.8,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 1786971000,
              "profit": -56284000,
              "netIncome": -98389000,
              "margin": -3.1,
              "yoy": {
                "revenue": 31.7,
                "profit": -351.9,
                "netIncome": -39,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodEnd": "2025-12-31",
              "derived": false,
              "revenue": 1586315000,
              "profit": -47747000,
              "netIncome": -42645000,
              "margin": -3,
              "yoy": {
                "revenue": 23.3,
                "profit": 16.9,
                "netIncome": -11.6,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 1432553000,
              "profit": -96337000,
              "netIncome": -51870000,
              "margin": -6.7,
              "yoy": {
                "revenue": 20.6,
                "profit": -201.3,
                "netIncome": 58.1,
                "priorEnd": "2024-09-30"
              }
            }
          ]
        },
        "news": {
          "items": [
            {
              "title": "Intuit vs. Atlassian: Which Software Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/intuit-vs-atlassian-which-software-stock-better-buy-2026",
              "date": "2026-10-05",
              "publisher": "The Motley Fool"
            }
          ]
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-06",
            "itemsKo": [
              "실적 발표",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000031/team-20260806.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-30",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000024/team-20260430.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-11",
            "itemsKo": [
              "2.05",
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000021/team-20260311.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-18",
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000017/team-20260218.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-05",
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000008/team-20260205.htm"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-15",
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000003/team-20260115.htm"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": []
        }
      },
      "rank": {
        "m1": 15.37,
        "m3": 0.32,
        "m6": 0.41
      },
      "verified": {
        "checked": 4,
        "ok": 18,
        "unverified": 0,
        "dead": 0,
        "stripped": 2
      },
      "numberCut": 3,
      "deep": {
        "status": "done",
        "ticker": "TEAM",
        "company": "아틀라시언은 개발팀과 업무팀이 쓰는 협업 소프트웨어를 구독 방식으로 파는 회사다. 주력은 업무 추적 도구 Jira 와 문서 협업 도구 Confluence 이며, 매출의 대부분이 클라우드 구독에서 나온다. 최근에는 AI 비서 Rovo 를 기존 제품에 얹어 파는 쪽으로 성장 축을 옮기고 있다.",
        "lead": "지금 기준으로는 이미 사는 선을 넘어선 뒤라 새로 들어가기엔 늦은 자리다. 가장 강한 근거는 사업 쪽인데, 분기 매출이 1년 전보다 28% 늘고 영업이익이 흑자로 돌아섰으며 10월 6일 OpenAI 와 제휴를 확대했다. 가장 큰 걱정은 회사 스스로 내놓은 2027회계연도 총매출 증가율 전망이 약 13% 로 지금의 28% 보다 크게 낮다는 점이다. 11월 5일 실적 발표에서 이 둔화가 숫자로 확인되거나, 종가가 예비 손절 191.34 아래로 내려가면 이 그림은 깨진다.",
        "newsNarrative": "8월 6일 분기 실적 발표가 최근 주가 흐름의 출발점이다. 매출이 1년 전보다 28% 늘고 영업이익이 흑자로 돌아서면서, AI 가 소프트웨어 회사를 대체할 것이라는 공포가 한풀 꺾였다. 10월 6일에는 OpenAI 와 제휴를 넓혀 GPT-6 계열 모델이 Rovo 와 플랫폼 전반을 구동한다고 알렸다. 10월 5일 회사는 다음 분기 실적을 11월 5일 장 마감 후 발표한다고 공지했다.",
        "recentNews": [
          {
            "id": "r1",
            "statement": "8월 6일 발표한 분기 실적에서 매출이 17.66억 달러로 1년 전보다 28% 늘고, 클라우드 매출은 12.13억 달러로 31% 증가했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                "publisher": "SEC EDGAR (Atlassian Corporation)",
                "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                "date": "2026-08-06",
                "quote": "Quarterly revenue of $1,766 million, up 28% year-over-year … Quarterly cloud revenue of $1,213 million, up 31% year-over-year",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r2",
            "statement": "10월 6일 OpenAI 와 제휴를 확대해 GPT-6 계열 모델이 아틀라시언 플랫폼과 Rovo 전반을 구동하게 됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "OpenAI and Atlassian Expand Partnership to Bring GPT-6 to Rovo",
                "publisher": "Channel Insider",
                "url": "https://www.channelinsider.com/channel-business/news-openai-atlassian-partnership-gpt-6-rovo/",
                "date": "2026-10-06",
                "quote": "Announced Oct. 6, the expanded agreement brings GPT-6 family models across Atlassian's platform and Rovo.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r3",
            "statement": "회사는 10월 5일 공지에서 다음 분기 실적을 11월 5일 장 마감 후 발표한다고 밝혔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian Announces Date for First Quarter of Fiscal Year 2027 Financial Results",
                "publisher": "Atlassian (Finviz 게재)",
                "url": "https://finviz.com/news/398890/atlassian-announces-date-for-first-quarter-of-fiscal-year-2027-financial-results",
                "date": "2026-10-05",
                "quote": "it will release financial results for its first quarter of fiscal year 2027 ended September 30, 2026 after market close on Thursday, November 5, 2026",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "r4",
            "statement": "AI 가 소프트웨어 업체를 대체할 것인지를 둘러싼 논쟁이 격해지며 8월 초 소프트웨어 주가가 크게 출렁였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/08/07/saaspocalypse-debate-intensifies-as-software-stocks-swing-wildly.html",
                "date": "2026-08-07",
                "quote": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "financialsNarrative": "매출은 빠르게 늘고 있고, 이익은 이제 막 흑자로 돌아섰다. 가장 최근 분기 매출은 17.66억 달러로 1년 전보다 28% 늘었고, 성장의 축인 클라우드 매출은 31% 증가했다. 같은 분기 회계기준 영업이익률이 12% 로 올라서며 직전 세 분기의 영업적자에서 벗어났다. 다만 회사가 내놓은 2027회계연도 총매출 증가율 전망은 약 13.0% 로, 지금 속도의 절반에도 못 미친다.",
        "financials": {
          "revenueTrend": [
            {
              "id": "f1",
              "statement": "가장 최근 분기 매출은 17.66억 달러로 1년 전보다 28% 늘었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                  "publisher": "SEC EDGAR (Atlassian Corporation)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                  "date": "2026-08-06",
                  "quote": "Quarterly revenue of $1,766 million, up 28% year-over-year",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f2",
              "statement": "구독 연간환산매출은 66.06억 달러로 23% 늘었고, 앞으로 매출로 잡힐 계약 잔고는 48.17억 달러로 44% 증가했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                  "publisher": "SEC EDGAR (Atlassian Corporation)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                  "date": "2026-08-06",
                  "quote": "Subscription ARR of $6,606 million, up 23% year-over-year … Remaining performance obligations of $4,817 million, up 44% year-over-year",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "profitTrend": [
            {
              "id": "f3",
              "statement": "가장 최근 분기 회계기준 영업이익률은 12%, 조정 기준 영업이익률은 36% 였다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                  "publisher": "SEC EDGAR (Atlassian Corporation)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                  "date": "2026-08-06",
                  "quote": "Quarterly GAAP operating margin of 12% and non-GAAP operating margin of 36%",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f4",
              "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
              "evidence_level": "no_source",
              "sources": [
                {
                  "title": "아틀라시언 분기 실적 (SEC 공시 기준 분기 실적표)",
                  "publisher": "SEC EDGAR",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                  "date": "2026-08-06",
                  "quote": "2026-06-30 분기 영업이익 210,723천 달러 · 영업이익률 11.9% / 2026-03-31 분기 영업이익 -56,284천 달러 / 2025-12-31 분기 -47,747천 달러 / 2025-09-30 분기 -96,337천 달러",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ],
              "statementOriginal": "직전 세 분기는 모두 영업적자였고, 2026-06-30 분기에 영업이익 2.1억 달러로 돌아섰다.",
              "stripped": true
            }
          ],
          "guidance": [
            {
              "id": "f5",
              "statement": "회사는 다음 분기 매출을 17.05억~17.15억 달러로, 클라우드 매출 증가율을 약 28.5% 로 제시했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                  "publisher": "SEC EDGAR (Atlassian Corporation)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                  "date": "2026-08-06",
                  "quote": "Total revenue is expected to be in the range of $1,705 million to $1,715 million. … Cloud revenue growth year-over-year is expected to be approximately 28.5%.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "f6",
              "statement": "2027회계연도 전체로는 구독 연간환산매출 증가율 약 18.0%, 총매출 증가율 약 13.0% 를 제시했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                  "publisher": "SEC EDGAR (Atlassian Corporation)",
                  "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                  "date": "2026-08-06",
                  "quote": "Subscription ARR growth year-over-year is expected to be approximately 18.0%. … Total revenue growth year-over-year is expected to be approximately 13.0%.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ],
          "estimateRevisions": {
            "direction": "unknown",
            "claims": []
          }
        },
        "newDrivers": [
          {
            "what": "Jira 안에서 AI 에이전트가 개발 업무를 맡아 처리하는 기능 — 기업용 AI 관리 기능 정식 출시와 Rovo 의 의료정보보호 규정 적용이 함께 묶였다",
            "kind": "product",
            "stage": "매출 발생 중",
            "since": "2026-08-06",
            "basis": [
              {
                "id": "d1",
                "statement": "회사는 소프트웨어 개발 전 과정에서 AI 에이전트 작업을 운영할 수 있는 새 기능을 Jira 에 넣었다고 밝혔다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                    "publisher": "SEC EDGAR (Atlassian Corporation)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                    "date": "2026-08-06",
                    "quote": "Atlassian released new agentic development capabilities in Jira that help teams orchestrate and scale agentic work across the full software development lifecycle. … Atlassian launched advanced AI admin controls across cloud enterprise editions into general availability.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [
              {
                "id": "d3",
                "statement": "이 기능들이 실리는 클라우드 부문 매출은 분기 12.13억 달러로 1년 전보다 31% 늘었고, 계약 잔고는 48.17억 달러로 44% 증가했다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                    "publisher": "SEC EDGAR (Atlassian Corporation)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                    "date": "2026-08-06",
                    "quote": "Quarterly cloud revenue of $1,213 million, up 31% year-over-year … Remaining performance obligations of $4,817 million, up 44% year-over-year",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "profitImpact": [
              {
                "id": "d4",
                "statement": "AI 기능 확대에도 같은 분기 회계기준 영업이익률이 12% 로 흑자를 냈고, 조정 기준으로는 36% 였다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                    "publisher": "SEC EDGAR (Atlassian Corporation)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                    "date": "2026-08-06",
                    "quote": "Quarterly GAAP operating margin of 12% and non-GAAP operating margin of 36%",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "expectedGrowth": [
              {
                "id": "d5",
                "statement": "회사 자신의 2027회계연도 전망은 구독 연간환산매출 약 18.0% 증가, 총매출 약 13.0% 증가다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                    "publisher": "SEC EDGAR (Atlassian Corporation)",
                    "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                    "date": "2026-08-06",
                    "quote": "Subscription ARR growth year-over-year is expected to be approximately 18.0%. … Total revenue growth year-over-year is expected to be approximately 13.0%.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "counter": [
              {
                "id": "d6",
                "statement": "AI 가 소프트웨어 업체의 자리를 빼앗을 것이라는 논쟁이 이어져 업종 전체의 주가 변동이 크다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
                    "publisher": "CNBC",
                    "url": "https://www.cnbc.com/2026/08/07/saaspocalypse-debate-intensifies-as-software-stocks-swing-wildly.html",
                    "date": "2026-08-07",
                    "quote": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ]
          },
          {
            "what": "OpenAI 와의 제휴 확대 — GPT-6 계열 모델이 아틀라시언 플랫폼과 AI 비서 Rovo 를 구동한다",
            "kind": "contract",
            "stage": "발표만",
            "since": "2026-10-06",
            "basis": [
              {
                "id": "d2",
                "statement": "10월 6일 맺은 확대 계약으로 GPT-6 계열 모델이 아틀라시언 플랫폼과 Rovo 전반에 들어간다.",
                "evidence_level": "sourced",
                "sources": [
                  {
                    "title": "OpenAI and Atlassian Expand Partnership to Bring GPT-6 to Rovo",
                    "publisher": "Channel Insider",
                    "url": "https://www.channelinsider.com/channel-business/news-openai-atlassian-partnership-gpt-6-rovo/",
                    "date": "2026-10-06",
                    "quote": "Announced Oct. 6, the expanded agreement brings GPT-6 family models across Atlassian's platform and Rovo.",
                    "verified": "ok",
                    "httpStatus": 200
                  }
                ]
              }
            ],
            "revenueImpact": [],
            "profitImpact": [],
            "expectedGrowth": [],
            "counter": []
          }
        ],
        "nNarrative": "새로운 것은 AI 다. 8월 6일 회사는 Jira 안에서 AI 가 개발 업무를 맡아 처리하는 기능과 기업용 AI 관리 기능을 정식 출시했고, 10월 6일에는 OpenAI 와 제휴를 넓혀 GPT-6 계열 모델이 Rovo 를 구동하게 했다. 매출 쪽에서는 이 기능들이 실리는 클라우드 부문이 분기 12.13억 달러로 1년 전보다 31% 늘었고, 앞으로 매출로 잡힐 계약 잔고가 48.17억 달러로 44% 증가했다. 이익 쪽에서는 AI 투자를 늘리면서도 같은 분기 회계기준 영업이익률이 12% 로 흑자를 냈다. 기대 성장률은 회사 자신의 2027회계연도 전망으로, 구독 연간환산매출 약 18.0% 증가·총매출 약 13.0% 증가다. OpenAI 제휴가 매출로 얼마나 이어지는지는 아직 숫자가 없어, 11월 5일 실적에서 클라우드 성장률이 약속한 28.5% 를 지키는지가 확인 지점이다.",
        "nVerdict": "충족",
        "canslim": [
          {
            "item": "C 최근 분기 이익",
            "status": "충족",
            "evidence": "2026-06-30 분기 영업이익 2.1억 달러로 흑자 전환, 매출 1년 전보다 27.6% 증가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "A 연간 이익 성장",
            "status": "미충족",
            "evidence": "최근 4분기 중 3분기가 영업적자(-96.3M·-47.7M·-56.3M), 마지막 한 분기만 흑자 — 3년 추세·자기자본이익률은 확인 불가 (순이익 기준, 주식 수 변동 미반영)"
          },
          {
            "item": "N 신제품·신서비스",
            "status": "충족",
            "evidence": "2026-08-06 Jira 의 AI 에이전트 개발 기능 정식 출시, 2026-10-06 OpenAI 제휴 확대 — 클라우드 매출 1년 전보다 31% 증가"
          },
          {
            "item": "S 수급",
            "status": "확인 불가",
            "evidence": "근거 숫자를 입력 자료에서 찾지 못해 지웠다"
          },
          {
            "item": "L 주도주",
            "status": "충족",
            "evidence": "상대강도 3개월 상위 0.32%, 6개월 상위 0.41%, 1개월 상위 15.37% · 기준 상위 20%"
          },
          {
            "item": "I 기관 보유",
            "status": "확인 불가",
            "evidence": "기관 보유 자료를 받지 않는다"
          },
          {
            "item": "M 시장 방향",
            "status": "충족",
            "evidence": "시장 판정 초록 — 10일선이 20일선 위, 둘 다 상승 · 빚내서 산 주식이 1년 전보다 +37.2% 로 주의선 초과"
          }
        ],
        "risks": [
          {
            "id": "k1",
            "statement": "근거 없음(출처에 없는 숫자라 제거됨)",
            "evidence_level": "no_source",
            "sources": [
              {
                "title": "Atlassian Corp - Form 8-K, Exhibit 99.1 (Q4 FY2026 실적 발표)",
                "publisher": "SEC EDGAR (Atlassian Corporation)",
                "url": "https://www.sec.gov/Archives/edgar/data/0001650372/000165037226000031/ex991q4fy26.htm",
                "date": "2026-08-06",
                "quote": "Total revenue growth year-over-year is expected to be approximately 13.0%.",
                "verified": "ok",
                "httpStatus": 200
              }
            ],
            "statementOriginal": "회사 스스로 2027회계연도 총매출 증가율을 약 13.0% 로 제시해, 최근 분기의 28% 보다 크게 낮은 속도를 예고했다.",
            "stripped": true
          },
          {
            "id": "k2",
            "statement": "AI 가 소프트웨어 업체를 대체할 것이라는 논쟁이 격해지며 소프트웨어 주가가 크게 흔들렸다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/08/07/saaspocalypse-debate-intensifies-as-software-stocks-swing-wildly.html",
                "date": "2026-08-07",
                "quote": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "structuralRisks": [
          "매출이 Jira·Confluence 를 중심으로 한 협업 도구 구독에 몰려 있다.",
          "핵심 AI 기능을 외부 모델 공급사에 의존해, 제휴 조건이 바뀌면 제품 경쟁력이 흔들릴 수 있다."
        ],
        "chartCheck": [
          {
            "item": "선행 상승",
            "status": "충족",
            "evidence": "선행 상승 168.8% · 기준 30% 이상"
          },
          {
            "item": "횡보 길이",
            "status": "충족",
            "evidence": "베이스 19봉, 3.8주 · 기준 2~8주"
          },
          {
            "item": "저점 높아짐",
            "status": "미충족",
            "evidence": "저점 상승 0회 · 진폭 0.98배(1 미만이면 폭이 좁아짐)"
          },
          {
            "item": "깊이",
            "status": "충족",
            "evidence": "베이스 깊이 16% · 하루 변동폭 4.16% 의 3.8배 · 선행 상승 168.8% 의 절반에 못 미친다"
          },
          {
            "item": "이평선 위",
            "status": "충족",
            "evidence": "종가 208.04 · 20일선 192.94 · 50일선 178.07 — 둘 다 위"
          },
          {
            "item": "거래량 마름",
            "status": "미충족",
            "evidence": "최근 5일 거래량이 20일 평균의 0.79배 · 기준 0.7 이하"
          },
          {
            "item": "돌파 거래량",
            "status": "미충족",
            "evidence": "2026-10-08 돌파봉 거래량이 20일 평균의 0.99배 · 기준 2배"
          },
          {
            "item": "피벗 거리",
            "status": "미충족",
            "evidence": "2026-10-08 에 피벗 200 을 이미 넘었고 지금 4.02% 위 — 추격 구간"
          },
          {
            "item": "손절 폭",
            "status": "미충족",
            "evidence": "예비 손절까지 4.33% · 하루 평균 변동폭 4.16% 보다 넓다"
          },
          {
            "item": "10일선 이격",
            "status": "충족",
            "evidence": "10일선 위 1.28 하루변동폭 · 기준 2 이하"
          },
          {
            "item": "시장",
            "status": "충족",
            "evidence": "시장 판정 초록 — 10일선이 20일선 위, 둘 다 상승 중(18일째)"
          }
        ],
        "chartObservation": {
          "base": "쉬는 구간은 19봉, 약 3.8주로 기준인 2~8주 안에 있다. 그 안에서 저점이 높아진 횟수는 0회였고, 폭은 0.98배로 거의 좁아지지 않았다. 고점 대비 저점 깊이는 16% 로 하루 평균 변동폭 4.16% 의 3.8배다.",
          "volume": "최근 5일 거래량은 20일 평균의 0.79배로 횡보 중 다소 줄었다. 다만 2026-10-08 피벗을 넘은 날 거래량은 20일 평균의 0.99배에 그쳤다. 최근 10봉에서 가장 많았던 날은 10-05 의 303.7만주, 그다음이 10-08 의 290.6만주, 10-13 의 260.1만주다.",
          "position": "현재가 208.04 는 피벗 200 을 4.02%, 하루 변동폭으로는 0.97배 웃돈다. 예비 손절 191.34 까지는 4.33% 아래다. 10일선 기준으로는 1.28 하루변동폭 위에 있다.",
          "maStack": "208.04 가 20일선 192.94, 50일선 178.07, 150일선 114.39 위에 차례로 놓여 있다. 20일선 기울기는 +1.05% 로 올라가는 중이다.",
          "note": "그림에서도 9월 내내 200 아래에서 옆으로 움직이다 10월 들어 그 선을 넘는 모습과, 8월 초 큰 거래량 뒤 막대가 줄어드는 모습이 확인된다. 그림과 숫자가 일치한다."
        },
        "entryChecklist": [
          "피벗 200 을 넘은 뒤 다시 2주 이상 쉬는 구간이 생기고, 그 상단 아래 하루 변동폭 4.16% 안으로 들어오는지",
          "상승 마감한 날의 거래량이 20일 평균의 2배 이상 실리는지 — 10-08 돌파일은 0.99배에 그쳤다",
          "11월 5일 실적 발표에서 클라우드 매출 증가율이 회사가 제시한 28.5% 를 지키는지",
          "종가가 20일선 192.94 와 예비 손절 191.34 위를 계속 지키는지",
          "저점 상승 0회·진폭 0.98배였던 지금 구간과 달리, 새 구간에서는 저점이 높아지는지"
        ],
        "earningsRisk": "회사는 11월 5일 장 마감 후 분기 실적을 발표한다고 알렸다(매매 달력 자료에는 아직 올라 있지 않다). 약 3주 뒤이므로, 발표 전에 들어가면 하루 만에 가격이 크게 벌어지는 위험을 그대로 떠안는다.",
        "confidence": "medium",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "d7"
          ],
          "reasons": [
            "d7의 quote '\"Combining OpenAI frontier models with Atlassian brings powerful agentic capabilities together within the context of how businesses actually operate.\"'는 더 깊은 연동이 '검토 단계'이거나 '제품화 시점이 정해지지 않았다'는 주장을 명시적으로 뒷받침하지 않음. 근거 없는 추론"
          ]
        },
        "consensus": {
          "saleCy": 13.59,
          "saleNy": 14.88,
          "epsCy": -7.02,
          "epsNy": -59.79,
          "cyTrend": 0.33,
          "nyTrend": 6.32
        },
        "researchedOn": "2026-10-14",
        "session": "2026-10-13",
        "carried": false,
        "source": "ondemand"
      }
    },
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
  "updated": "2026-10-30T01:12:15.015Z"
};
