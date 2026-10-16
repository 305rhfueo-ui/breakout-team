window.ONDEMAND_DATA = {
  "items": [
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
  "updated": "2026-10-16T08:58:29.456Z"
};
