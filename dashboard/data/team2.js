window.TEAM2_DATA = {
  "generated": "2026-09-02",
  "stats": {
    "universe": 1412,
    "byPeriod": {
      "m1": 28,
      "m3": 28,
      "m6": 28
    },
    "unionTop": 70,
    "afterEtf": 69,
    "afterAdr": 41,
    "afterMa150": 41,
    "ma150Unknown": 0,
    "dropped": {
      "etf": 1,
      "adr": 28,
      "ma150": 0
    },
    "etfExcluded": [
      "GDXU"
    ],
    "threshold": 98
  },
  "criteria": {
    "topPct": 2,
    "adrMin": 4,
    "requireMa150": false
  },
  "dataNotice": {
    "column": "Above_150_SMA",
    "reason": "200일선 위 종목이 64.1% 인데 150일선 위는 14.4% 뿐 — 앞뒤가 맞지 않는다",
    "stats": {
      "total": 1412,
      "o150": 204,
      "x150": 1208,
      "d200Pos": 905,
      "contradiction": 164,
      "checked": 1412,
      "contraPct": 11.6,
      "abovePct": 14.4,
      "d200PosPct": 64.1
    },
    "effect": "150일선 필터 미적용 · 3팀 배제조건 ③ 미적용 · 3팀 신규 편입 보류",
    "ko": "⚠️ RS 사이트의 150일선 컬럼이 오염돼 오늘은 판정불가로 처리했습니다. (150일선 위 204종목인데 200일선 위는 905종목 — 앞뒤가 맞지 않습니다.) 종목을 잘라내지 않았으므로 오늘 2팀 목록에는 실제로는 150일선 아래인 종목이 섞여 있을 수 있습니다."
  },
  "picks": [
    {
      "ticker": "MRNA",
      "price": 154.27000427246094,
      "marketCap": "55.09B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": 1.7069661296527139,
          "pct": 99.96389891696751
        },
        "m3": {
          "v": 2.2518973174169963,
          "pct": 99.96382054992765
        },
        "m6": {
          "v": 1.7562980330148172,
          "pct": 99.45533769063181
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo",
        "6mo"
      ],
      "bestPct": 99.96389891696751,
      "adr": 11.03,
      "cyTrend": -2.71,
      "nyTrend": 4.8,
      "upCount": 43,
      "downCount": 20,
      "upDownRatio": 68.25,
      "bbwthd": 1.74,
      "bbwthdLow": 0.13,
      "high52": 87.33,
      "volx": 0.85,
      "volSurgeWk": 0.91,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 4.55,
      "div50": 92.32,
      "div200": 191.24,
      "ret1m": 170.7,
      "ret3m": 225.19,
      "ret6m": 175.63,
      "maxRise1m": 228.91,
      "maxRise3m": 289.12,
      "maxRise6m": 304.44,
      "brk60d": false,
      "clsPos": 97.41,
      "ma150Slope": 17.02,
      "ta": {
        "price": 154.27,
        "resistance": 176.66,
        "support": 64.11,
        "contraction": 5.85,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1905,
        "m3": 0.345,
        "m6": 0.3866,
        "rankPct6": 3.57,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "모더나",
      "nameEn": "MODERNA INC",
      "detail": {
        "fetchedAt": "2026-09-01",
        "nameKo": "모더나",
        "nameEn": "MODERNA INC",
        "infomaxCode": "NAS:MRNA",
        "financials": {
          "ok": true,
          "ticker": "MRNA",
          "cik": "0001682852",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
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
              "periodStart": "2026-01-01",
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
              "periodStart": "2025-09-30",
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
              "periodStart": "2025-07-01",
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
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001682852&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MRNA",
          "items": [
            {
              "title": "Is It Too Late to Buy Moderna Stock After Its 127% Surge?",
              "url": "https://www.nasdaq.com/articles/it-too-late-buy-moderna-stock-after-its-127-surge",
              "date": "2026-08-30",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRNA",
                "MRNA",
                "MRK"
              ]
            },
            {
              "title": "Moderna Stock Falls 6% On Announcement Of $2.6 Bln Private Offering Of Convertible Senior Notes",
              "url": "https://www.nasdaq.com/articles/moderna-stock-falls-6-announcement-26-bln-private-offering-convertible-senior-notes",
              "date": "2026-08-28",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRNA"
              ]
            },
            {
              "title": "Merck Stock Hits New 52-Week High: What's Driving the Rally?",
              "url": "https://www.nasdaq.com/articles/merck-stock-hits-new-52-week-high-whats-driving-rally",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "MRK",
                "BMY",
                "MRNA"
              ]
            },
            {
              "title": "Vertex Pharmaceuticals Up 15% in a Month: How to Play the Stock",
              "url": "https://www.nasdaq.com/articles/vertex-pharmaceuticals-15-month-how-play-stock",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "VRTX",
                "MRNA",
                "CRSP"
              ]
            }
          ],
          "directCount": 2,
          "total": 4,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-31",
            "reportDate": "2026-07-31",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000147/mrna-20260731.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-08",
            "reportDate": "2026-07-06",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000134/mrna-20260706.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-11",
            "reportDate": "2026-05-06",
            "items": [
              "5.03",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "5.03",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000101/mrna-20260506.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-01",
            "reportDate": "2026-05-01",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000057/mrna-20260501.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-05",
            "reportDate": "2026-03-03",
            "items": [
              "1.01"
            ],
            "itemsKo": [
              "중요 계약 체결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000047/mrna-20260303.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-13",
            "reportDate": "2026-02-13",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000015/mrna-20260213.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 3,
          "reports": [
            {
              "title": "[모더나 (NAS:MRNA)] [Issue & News] 20억 달러 전환사채 사모 발행 추진 - 흑색종 데이터發 주가 급등을 활용한 자본조달",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-28",
              "summary": "- 20억 달러 전환사채 사모 발행 공시, 세부조건 미공개- 흑색종 3상 데이터 이후 주가 급등 시점에 조달- 현금여력 확대되지만 전환권 행사 시 희석 우려",
              "pages": "5",
              "secureId": "eqlqlqkzlgiexqxgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqlqkzlgiexqxgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[모더나 (NAS:MRNA)] [Issue & News] 머크 공동 흑색종 백신 작동원리·생산과제 상세 공개",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-26",
              "summary": "- 흑색종 백신 작동원리·비소세포폐암 등 확장 파이프라인 공개- 전체 생존율 데이터는 아직 미공개, 임상 불확실성 지속- 개인맞춤 생산 특성상 10~100배 증설 필요, 실행 리스크 부각",
              "pages": "5",
              "secureId": "eqlqqcexmkclgzegcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqqcexmkclgzegcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[모더나 (NAS:MRNA)] mRNA 기반 암 치료제 최초 3상 성공",
              "broker": "키움증권",
              "analyst": "허혜민",
              "date": "2026-08-21",
              "summary": "- 코로나19 백신으로 mRNA 상업화에 성공한 바이오텍. mRNA 기반 암 치료제로는 세계 최초 3상 성공- 다만, 시장은 이미 흑색종 성공을 상당부분 선반영한 상태로 신장암, 방광암, 폐암 등 다른 암종으로 확장성에 주목",
              "pages": "7",
              "secureId": "eqlqgxkklglmlgzgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqgxkklglmlgzgcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MGRT",
      "price": 107.98999786376953,
      "marketCap": "1.37B",
      "sector": "Technology",
      "industry": "Information Technology Services",
      "rs": {
        "m1": {
          "v": 0.13078531794523068,
          "pct": 92.96028880866426
        },
        "m3": {
          "v": 0.4375664791716623,
          "pct": 97.14182344428365
        },
        "m6": {
          "v": 11.979567527021537,
          "pct": 99.96368917937546
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.96368917937546,
      "adr": 4.56,
      "cyTrend": null,
      "nyTrend": null,
      "upCount": null,
      "downCount": null,
      "upDownRatio": null,
      "bbwthd": null,
      "bbwthdLow": 0.09,
      "high52": 63.52,
      "volx": 1.83,
      "volSurgeWk": 2.11,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 20.72,
      "div200": 105.4,
      "ret1m": 13.08,
      "ret3m": 43.76,
      "ret6m": 1197.96,
      "maxRise1m": 19.27,
      "maxRise3m": 55.47,
      "maxRise6m": 2682.32,
      "brk60d": false,
      "clsPos": 100,
      "ma150Slope": 21.77,
      "ta": {
        "price": 107.99,
        "resistance": 108.83,
        "support": 90.54,
        "contraction": 1.18,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0517,
        "m3": -0.0533,
        "m6": 0.0202,
        "rankPct6": 64.29,
        "count": 16
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "메가 포춘",
      "nameEn": "MEGA FORTUNE COMPANY LIMITED",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "메가 포춘",
        "nameEn": "MEGA FORTUNE COMPANY LIMITED",
        "infomaxCode": "NAS:MGRT",
        "financialsError": "매출 태그 없음",
        "news": {
          "ok": true,
          "ticker": "MGRT",
          "items": [
            {
              "title": "Oversold Conditions For Mega Fortune Company (MGRT)",
              "url": "https://www.nasdaq.com/articles/oversold-conditions-mega-fortune-company-mgrt",
              "date": "2026-06-11",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MGRT"
              ]
            },
            {
              "title": "How Mega Fortune Stock Tripled This Week",
              "url": "https://www.nasdaq.com/articles/how-mega-fortune-stock-tripled-week",
              "date": "2026-04-09",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MGRT",
                "MGRT"
              ]
            },
            {
              "title": "Mega Fortune Company Limited Completes Initial Public Offering, Raising $15 Million",
              "url": "https://www.nasdaq.com/articles/mega-fortune-company-limited-completes-initial-public-offering-raising-15-million",
              "date": "2025-07-17",
              "publisher": "Quiver Quantitative",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MGRT"
              ]
            }
          ],
          "directCount": 3,
          "total": 3,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "TEAM",
      "price": 187.02999877929688,
      "marketCap": "48.20B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 0.6954945419154006,
          "pct": 99.89169675090253
        },
        "m3": {
          "v": 0.8802653713084454,
          "pct": 99.67438494934878
        },
        "m6": {
          "v": 1.4788602563840694,
          "pct": 99.16485112563545
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo",
        "6mo"
      ],
      "bestPct": 99.89169675090253,
      "adr": 5.34,
      "cyTrend": -11.3,
      "nyTrend": -5.71,
      "upCount": 23,
      "downCount": 62,
      "upDownRatio": 27.06,
      "bbwthd": 0.53,
      "bbwthdLow": 0.22,
      "high52": 94.79,
      "volx": 0.8,
      "volSurgeWk": 0.81,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": 4.81,
      "div50": 56.84,
      "div200": 72.11,
      "ret1m": 69.55,
      "ret3m": 88.03,
      "ret6m": 147.89,
      "maxRise1m": 83.67,
      "maxRise3m": 165.15,
      "maxRise6m": 252.26,
      "brk60d": false,
      "clsPos": 19.28,
      "ma150Slope": 3.04,
      "ta": {
        "price": 187.03,
        "resistance": 195.95,
        "support": 185.08,
        "contraction": 1.29,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1126,
        "m3": 0.2082,
        "m6": 0.2429,
        "rankPct6": 15,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "아틀라시언",
      "nameEn": "ATLASSIAN CORP",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "아틀라시언",
        "nameEn": "ATLASSIAN CORP",
        "infomaxCode": "NAS:TEAM",
        "financials": {
          "ok": true,
          "ticker": "TEAM",
          "cik": "0001650372",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-01",
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
              "periodStart": "2025-10-01",
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
              "periodStart": "2025-07-01",
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
            },
            {
              "periodStart": "2025-03-31",
              "periodEnd": "2025-06-30",
              "derived": true,
              "revenue": 1384344000,
              "profit": -28479000,
              "netIncome": -23903000,
              "margin": -2.1,
              "yoy": {
                "revenue": 22.3,
                "profit": 57.5,
                "netIncome": 87.9,
                "priorEnd": "2024-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001650372&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "TEAM",
          "items": [
            {
              "title": "Can Rising Adoption of Rovo Help Atlassian Accelerate Its ARR Growth?",
              "url": "https://www.nasdaq.com/articles/can-rising-adoption-rovo-help-atlassian-accelerate-its-arr-growth",
              "date": "2026-08-25",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TEAM",
                "CRM",
                "NOW"
              ]
            },
            {
              "title": "Atlassian's Chief Accounting Officer Sells Over 1,000 Shares as the Stock Surges 30% After Earnings",
              "url": "https://www.nasdaq.com/articles/atlassians-chief-accounting-officer-sells-over-1000-shares-stock-surges-30-after-earnings",
              "date": "2026-08-24",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TEAM",
                "TEAM"
              ]
            },
            {
              "title": "Atlassian CFO James Chuong Sells 9,054 Shares for $1.6 Million",
              "url": "https://www.nasdaq.com/articles/atlassian-cfo-james-chuong-sells-9054-shares-16-million",
              "date": "2026-08-21",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TEAM",
                "TEAM"
              ]
            },
            {
              "title": "Can Strong AI Adoption Help Atlassian Challenge CRM & NOW?",
              "url": "https://www.nasdaq.com/articles/can-strong-ai-adoption-help-atlassian-challenge-crm-now",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TEAM",
                "CRM",
                "NOW"
              ]
            }
          ],
          "directCount": 4,
          "total": 4,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-06",
            "reportDate": "2026-08-06",
            "items": [
              "2.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000031/team-20260806.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-30",
            "reportDate": "2026-04-30",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000024/team-20260430.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-11",
            "reportDate": "2026-03-11",
            "items": [
              "2.05",
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "2.05",
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000021/team-20260311.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-18",
            "reportDate": "2026-02-18",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000017/team-20260218.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-05",
            "reportDate": "2026-02-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000008/team-20260205.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-15",
            "reportDate": "2026-01-15",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000003/team-20260115.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ELF",
      "price": 105.54000091552734,
      "marketCap": "6.14B",
      "sector": "Consumer Defensive",
      "industry": "Household & Personal Products",
      "rs": {
        "m1": {
          "v": 0.20150279275457633,
          "pct": 97.14801444043322
        },
        "m3": {
          "v": 1.1291103805785812,
          "pct": 99.89146164978293
        },
        "m6": {
          "v": 0.3200751087439258,
          "pct": 81.8082788671024
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.89146164978293,
      "adr": 4.63,
      "cyTrend": 8.61,
      "nyTrend": 4.27,
      "upCount": 34,
      "downCount": 28,
      "upDownRatio": 54.84,
      "bbwthd": null,
      "bbwthdLow": 0.16,
      "high52": 69.9,
      "volx": 0.81,
      "volSurgeWk": 1.14,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 24.59,
      "div200": 40.03,
      "ret1m": 20.15,
      "ret3m": 112.91,
      "ret6m": 32.01,
      "maxRise1m": 27.49,
      "maxRise3m": 123.49,
      "maxRise6m": 125.32,
      "brk60d": false,
      "clsPos": 3.98,
      "ma150Slope": 2.39,
      "ta": {
        "price": 105.54,
        "resistance": 114.61,
        "support": 103.59,
        "contraction": 0.88,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.002,
        "m3": 0.064,
        "m6": -0.0008,
        "rankPct6": 71.43,
        "count": 10
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "엘프 뷰티",
      "nameEn": "E L F BEAUTY INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "엘프 뷰티",
        "nameEn": "E L F BEAUTY INC",
        "infomaxCode": "NYS:ELF",
        "financials": {
          "ok": true,
          "ticker": "ELF",
          "cik": "0001600033",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 479373000,
              "profit": 102441000,
              "netIncome": 66599000,
              "margin": 21.4,
              "yoy": {
                "revenue": 35.5,
                "profit": 110.3,
                "netIncome": 99.9,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 449292000,
              "profit": -50333000,
              "netIncome": -49365000,
              "margin": -11.2,
              "yoy": {
                "revenue": 35.1,
                "profit": -213.6,
                "netIncome": -274.7,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-10-01",
              "periodEnd": "2025-12-31",
              "derived": false,
              "revenue": 489505000,
              "profit": 67540000,
              "netIncome": 39376000,
              "margin": 13.8,
              "yoy": {
                "revenue": 37.8,
                "profit": 92.5,
                "netIncome": 128.1,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 343936000,
              "profit": 7716000,
              "netIncome": 2996000,
              "margin": 2.2,
              "yoy": {
                "revenue": 14.2,
                "profit": -72.4,
                "netIncome": -84.2,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001600033&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "ELF",
          "items": [
            {
              "title": "Why e.l.f. Beauty (ELF) is a Top Growth Stock for the Long-Term",
              "url": "https://www.nasdaq.com/articles/why-elf-beauty-elf-top-growth-stock-long-term",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF"
              ]
            },
            {
              "title": "ELF Raises Fiscal 2027 Outlook as Rhode and Global Growth Accelerate",
              "url": "https://www.nasdaq.com/articles/elf-raises-fiscal-2027-outlook-rhode-and-global-growth-accelerate",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF",
                "EL",
                "ULTA"
              ]
            },
            {
              "title": "Is ELF Stock a Buy as Growth Accelerates but Valuation Stays Rich?",
              "url": "https://www.nasdaq.com/articles/elf-stock-buy-growth-accelerates-valuation-stays-rich",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF",
                "EL",
                "ULTA"
              ]
            },
            {
              "title": "ELF Jumps 18.8% in a Week Amid Rhode Growth and Stronger Guidance",
              "url": "https://www.nasdaq.com/articles/elf-jumps-188-week-amid-rhode-growth-and-stronger-guidance",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF",
                "EL",
                "ULTA"
              ]
            },
            {
              "title": "e.l.f. Beauty Stock: Buy or Sell?",
              "url": "https://www.nasdaq.com/articles/elf-beauty-stock-buy-or-sell",
              "date": "2026-09-01",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ELF",
                "ELF"
              ]
            },
            {
              "title": "Amazon.com vs. e.l.f. Beauty: Which High-Growth Consumer Stock Is a Better Investment in 2026?",
              "url": "https://www.nasdaq.com/articles/amazoncom-vs-elf-beauty-which-high-growth-consumer-stock-better-investment-2026",
              "date": "2026-08-26",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "AMZN",
                "AMZN",
                "ELF"
              ]
            },
            {
              "title": "An e.l.f. Beauty Insider Sells 5,718 Shares. Here's What That Means for Investors.",
              "url": "https://www.nasdaq.com/articles/elf-beauty-insider-sells-5718-shares-heres-what-means-investors",
              "date": "2026-08-23",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ELF",
                "ELF"
              ]
            },
            {
              "title": "Coupang vs. e.l.f. Beauty: Which Consumer Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/coupang-vs-elf-beauty-which-consumer-stock-better-buy-2026",
              "date": "2026-08-21",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "CPNG",
                "CPNG",
                "ELF"
              ]
            }
          ],
          "directCount": 4,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-24",
            "reportDate": "2026-08-20",
            "items": [
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1600033/000160003326000044/elf-20260820.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "reportDate": "2026-08-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1600033/000160003326000036/elf-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-20",
            "reportDate": "2026-05-20",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1600033/000160003326000018/elf-20260520.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-13",
            "reportDate": "2026-02-12",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1600033/000160003326000009/elf-20260212.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-04",
            "reportDate": "2026-02-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1600033/000160003326000005/elf-20260204.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-05",
            "reportDate": "2025-11-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1600033/000160003325000053/elf-20251105.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 5,
          "reports": [
            {
              "title": "[엘프 뷰티 (NYS:ELF)] Rhode가 다했다! 기대 이상!",
              "broker": "신한투자증권",
              "analyst": "박현진",
              "date": "2026-05-22",
              "summary": "- 기존 e.l.f. Cosmetics 중심 구조에서 멀티 브랜드 포트폴리오 체제로 확장 되는 흐름이 본격화 중. rhode·Naturium 중심의 멀티 브랜드 전략을 바탕 으로 미국 뷰티 시장 내 높은 성장세와 점유율 확대 중.- FY26 4Q 매출 4.49억달러(+35% YoY, 이하 동일)를 기록하며 시장 컨센 서스 4.23억달러를 6% 상회. 매출총이익률 73%로 1.4%p 개선. 가격 인 상 효과가 관세 부담 일부 상쇄한 것으로 추정- rhode 인수 관련 earn-out 평가손실 5,760만달러 반영. rhode 실적이 인 수 당시 예상치 상회하면서 추가 지급 부담 증가한 영향. 총차입금 8.4억 달러까지 증가했으나 순차입금/EBITDA 2배 미만 유지 중으로 재무 안정 성 우려에 대해선 일축.",
              "pages": "5",
              "secureId": "eqqmkcimxiexzmzgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqmkcimxiexzmzgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] Rhode만이 희망이다",
              "broker": "키움증권",
              "analyst": "조소정",
              "date": "2026-02-06",
              "summary": "- 미국 화장품 브랜드사. 본업은 성장이 둔화되고 있지만, 인수 브랜드 Rhode가 성장을 견인 중- 향후 주가는 Rhode의 글로벌 채널 확장 속도 및 성과에 따라 달라질 수 있을 듯- 2 월에는 호주, 뉴질랜드 런칭을 시작으로 해외 유통 확대가 본격화될 예정. 주요 채널 내 성과에 주목",
              "pages": "4",
              "secureId": "eqqcizzcxelmexlgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcizzcxelmexlgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] FY 3Q26 Re: 관세 터널을 무사히 지나다",
              "broker": "메리츠증권",
              "analyst": "박종대",
              "date": "2026-02-06",
              "summary": "- 매출 시장 기대치(컨센서스 매출: 4.6억달러) 7% 상회, Rhode 인수 효과 반영(제외 시 YoY 2% 성장)- 조정 순이익(Non-GAAP) 0.75억달러, 시장 기대치 75% 상회(컨센서스 0.43억달러)- 28분기 연속 매출 성장 및 시장 점유율 상승(QoQ 1.3%p) 달성, e.l.f. 및 Rhode 성장세 고무적",
              "pages": "6",
              "secureId": "eqqcizgkzzkcexmgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcizgkzzkcexmgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] M&A 통한 외형 성장 시현",
              "broker": "신한투자증권",
              "analyst": "박현진",
              "date": "2026-02-06",
              "summary": "- 전세계 저가 인디뷰티 브랜드 수요 증가로 2026년에도 매출은 두 자리 성 장률 유지할 전망. M&A 통한 외형 확대 전략도 유효. 타겟이나 월마트 등 중저가 위주 유통채널 전개에서 세포라까지 확장 국면.- FY26 3Q 순매출(3월 결산) 전년동기대비 38% 성장, 조정 EBITDA 79% 증가. 이 중 Rhode 인수에 따른 매출 증가분이 30%p 이상 기여. 조정 주 당순이익은 1.24달러로 컨센서스 0.72달러 대폭 상회- 글로벌 프로모션 및 슈퍼볼 광고 등 마케팅비 투자 지속되며, 관세 부담 높으나 M&A 브랜드 중심 매출 고성장으로 마진 회복 노력할 것이라 피 력. 오프라인 채널뿐만 아니라 이커머스 중심으로 미국 10~20대들의 트래 픽을 유입시키려 노력 중",
              "pages": "5",
              "secureId": "eqqciiglzzkizkggcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqciiglzzkizkggcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] 재도약 위한 리밸런싱",
              "broker": "신한투자증권",
              "analyst": "박현진",
              "date": "2025-11-25",
              "summary": "- 미국 시장 내 저가 인디뷰티 브랜드 수요 증가로 향후 매출은 두 자리 성 장률을 유지할 전망. 다만 중국 생산 비중 70% 이상으로 미국 내 수입 시 관세 부담 커진 게 이익 부진 및 주가 수익률 부진의 주요인- M&A 통해 브랜드 확장 지속하여 매출 성장 끌고 갈 전망. 매출보단 이 익 회복이 주가 추세 상승을 만들 포인트. 회복 기간 다소 소요 예상되나 중장기로는 인디뷰티 대세장의 대표 기업임은 자명함- 현 시장 컨센서스는 3Q25 매출이 전년동기대비 14% 성장한 데 이어 4Q25에도 20% 이상 성장할 것으로 전망 중. 특히 저가 스킨케어 제품 수 요가 증가하는 트렌드 속에서 동사도 2023년 10월 인수했던 스킨케어 브 랜드 Naturium 통해 스킨케어 비중 높이는 중. 2026년 기준 스킨케어 카 테고리의 매출 비중은 20%를 초과할 것으로 예상",
              "pages": "5",
              "secureId": "eqxkcgiqgieclqqgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkcgiqgieclqqgcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "AGL",
      "price": 87.47000122070312,
      "marketCap": "1.55B",
      "sector": "Healthcare",
      "industry": "Medical Care Facilities",
      "rs": {
        "m1": {
          "v": -0.077125951178958,
          "pct": 28.772563176895304
        },
        "m3": {
          "v": -0.09685077337326299,
          "pct": 19.283646888567294
        },
        "m6": {
          "v": 4.49262167491797,
          "pct": 99.89106753812636
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.89106753812636,
      "adr": 8.85,
      "cyTrend": -47.7,
      "nyTrend": -430.71,
      "upCount": 5,
      "downCount": 6,
      "upDownRatio": 45.45,
      "bbwthd": null,
      "bbwthdLow": 0.14,
      "high52": 65.75,
      "volx": 0.26,
      "volSurgeWk": 0.41,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -15.48,
      "div200": 74.18,
      "ret1m": -7.71,
      "ret3m": -9.69,
      "ret6m": 449.26,
      "maxRise1m": 38.39,
      "maxRise3m": 61.05,
      "maxRise6m": 1678.61,
      "brk60d": false,
      "clsPos": 27.54,
      "ma150Slope": 18.71,
      "ta": {
        "price": 87.47,
        "resistance": 90,
        "support": 85.9,
        "contraction": 0.55,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0154,
        "m3": 0.1742,
        "m6": -0.0244,
        "rankPct6": 80.71,
        "count": 12
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "애질론 헬스",
      "nameEn": "AGILON HEALTH INC",
      "detail": {
        "fetchedAt": "2026-08-31",
        "nameKo": "애질론 헬스",
        "nameEn": "AGILON HEALTH INC",
        "infomaxCode": "NYS:AGL",
        "financials": {
          "ok": true,
          "ticker": "AGL",
          "cik": "0001831097",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 1420460000,
              "profit": 3997000,
              "netIncome": 48916000,
              "margin": 0.3,
              "yoy": {
                "revenue": -7.3,
                "profit": 118.1,
                "netIncome": 303.9,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 1569491000,
              "profit": -193825000,
              "netIncome": -188882000,
              "margin": -12.3,
              "yoy": {
                "revenue": 3.1,
                "profit": -79.3,
                "netIncome": -78.5,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 1435321000,
              "profit": -131274000,
              "netIncome": -110207000,
              "margin": -9.1,
              "yoy": {
                "revenue": -1.1,
                "profit": 1.7,
                "netIncome": 6.3,
                "priorEnd": "2024-09-30"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 1394982000,
              "profit": -116027000,
              "netIncome": -104370000,
              "margin": -8.3,
              "yoy": {
                "revenue": -5.9,
                "profit": -167.7,
                "netIncome": -240.2,
                "priorEnd": "2024-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001831097&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "AGL",
          "items": [
            {
              "title": "Is Agilon Health (AGL) Outperforming Other Medical Stocks This Year?",
              "url": "https://www.nasdaq.com/articles/agilon-health-agl-outperforming-other-medical-stocks-year",
              "date": "2026-08-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL",
                "ILMN"
              ]
            },
            {
              "title": "Agilon Health (AGL) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/agilon-health-agl-q2-2026-earnings-call-transcript",
              "date": "2026-08-13",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL",
                "AGL"
              ]
            },
            {
              "title": "Has Agilon Health (AGL) Outpaced Other Medical Stocks This Year?",
              "url": "https://www.nasdaq.com/articles/has-agilon-health-agl-outpaced-other-medical-stocks-year",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL",
                "BDSX"
              ]
            },
            {
              "title": "Agilon Health Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/agilon-health-q2-earnings-call-highlights",
              "date": "2026-08-06",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL"
              ]
            },
            {
              "title": "Agilon Health Swings To Q2 Net Profit; Guides For Q3;Lifts 2026 Revenue View; Stock Gains",
              "url": "https://www.nasdaq.com/articles/agilon-health-swings-q2-net-profit-guides-q3lifts-2026-revenue-view-stock-gains",
              "date": "2026-08-06",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL"
              ]
            },
            {
              "title": "Agilon Health (AGL) Tops Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/agilon-health-agl-tops-q2-earnings-and-revenue-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL",
                "SERA"
              ]
            },
            {
              "title": "Agilon (AGL) Q2 Earnings: Taking a Look at Key Metrics Versus Estimates",
              "url": "https://www.nasdaq.com/articles/agilon-agl-q2-earnings-taking-look-key-metrics-versus-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL"
              ]
            },
            {
              "title": "Agilon Health (AGL) Is Up 0.79% in One Week: What You Should Know",
              "url": "https://www.nasdaq.com/articles/agilon-health-agl-079-one-week-what-you-should-know",
              "date": "2026-06-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AGL"
              ]
            }
          ],
          "directCount": 10,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "reportDate": "2026-08-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1831097/000162828026053328/agl-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-22",
            "reportDate": "2026-07-17",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1831097/000162828026049080/agl-20260717.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-03",
            "reportDate": "2026-06-02",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1831097/000162828026040370/agl-20260602.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-06",
            "reportDate": "2026-05-06",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1831097/000162828026031254/agl-20260506.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-27",
            "reportDate": "2026-04-24",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1831097/000162828026027512/agl-20260424.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-30",
            "reportDate": "2026-03-30",
            "items": [
              "3.03",
              "5.03",
              "9.01"
            ],
            "itemsKo": [
              "3.03",
              "5.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1831097/000162828026022074/agl-20260330.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "AMR",
      "price": 233.41000366210938,
      "marketCap": "2.87B",
      "sector": "Basic Materials",
      "industry": "Coking Coal",
      "rs": {
        "m1": {
          "v": 0.6602177234654546,
          "pct": 99.81949458483754
        },
        "m3": {
          "v": 0.15332541768276317,
          "pct": 77.31548480463097
        },
        "m6": {
          "v": 0.24452146021930837,
          "pct": 74.11038489469863
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 99.81949458483754,
      "adr": 5.68,
      "cyTrend": -174.77,
      "nyTrend": -33.08,
      "upCount": 1,
      "downCount": 3,
      "upDownRatio": 25,
      "bbwthd": null,
      "bbwthdLow": 0.12,
      "high52": 91.96,
      "volx": 1.13,
      "volSurgeWk": 0.94,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 42.33,
      "div200": 25,
      "ret1m": 66.02,
      "ret3m": 15.33,
      "ret6m": 24.45,
      "maxRise1m": 69.66,
      "maxRise3m": 78.35,
      "maxRise6m": 78.35,
      "brk60d": false,
      "clsPos": 50.9,
      "ma150Slope": -2.97,
      "ta": {
        "price": 233.41,
        "resistance": 251.98,
        "support": 222,
        "contraction": 1.56,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.4244,
        "m3": 0.0941,
        "m6": 0.2525,
        "rankPct6": 13.57,
        "count": 2
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "알파 메탈러지컬 리소시스",
      "nameEn": "ALPHA METALLURGICAL RESOURCES INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "알파 메탈러지컬 리소시스",
        "nameEn": "ALPHA METALLURGICAL RESOURCES INC",
        "infomaxCode": "NYS:AMR",
        "financials": {
          "ok": true,
          "ticker": "AMR",
          "cik": "0001704715",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 491505000,
              "profit": -10500000,
              "netIncome": -12252000,
              "margin": -2.1,
              "yoy": {
                "revenue": -10.4,
                "profit": -495.5,
                "netIncome": -147.3,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 523533000,
              "profit": -10432000,
              "netIncome": -11032000,
              "margin": -2,
              "yoy": {
                "revenue": -1.2,
                "profit": 74,
                "netIncome": 67.5,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 519060000,
              "profit": -21324000,
              "netIncome": -17271000,
              "margin": -4.1,
              "yoy": {
                "revenue": -15.7,
                "profit": -313.4,
                "netIncome": -711.2,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 525203000,
              "profit": -2522000,
              "netIncome": -5515000,
              "margin": -0.5,
              "yoy": {
                "revenue": -21.6,
                "profit": -147.5,
                "netIncome": -245,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001704715&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "AMR",
          "items": [
            {
              "title": "Alpha Metallurgical Director Courtis Keeps Buying as He Adds Another  $1.1 Million Shares",
              "url": "https://www.nasdaq.com/articles/alpha-metallurgical-director-courtis-keeps-buying-he-adds-another-11-million-shares",
              "date": "2026-08-25",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMR",
                "AMR"
              ]
            },
            {
              "title": "Alpha Metallurgical Resources Director Courtis Buys Again, This Time $3.2 Million in Shares.  Is it Time for Investors to Buy Too?",
              "url": "https://www.nasdaq.com/articles/alpha-metallurgical-resources-director-courtis-buys-again-time-32-million-shares-it-time",
              "date": "2026-08-25",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMR",
                "AMR"
              ]
            },
            {
              "title": "Alpha Metallurgical Resources Director Courtis Buys $2.9 Million Shares. What Does This Mean for Investors?",
              "url": "https://www.nasdaq.com/articles/alpha-metallurgical-resources-director-courtis-buys-29-million-shares-what-does-mean",
              "date": "2026-08-22",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMR",
                "AMR"
              ]
            },
            {
              "title": "Friday 8/21 Insider Buying Report: ET, AMR",
              "url": "https://www.nasdaq.com/articles/friday-8-21-insider-buying-report-et-amr",
              "date": "2026-08-21",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ET",
                "ET",
                "AMR"
              ]
            },
            {
              "title": "Alpha Metallurgical Resources (AMR) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/alpha-metallurgical-resources-amr-q2-2026-earnings-call-transcript",
              "date": "2026-08-14",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMR",
                "AMR"
              ]
            },
            {
              "title": "See How Alpha Metallurgical Resources Ranks Among Analysts' Top Metals Picks",
              "url": "https://www.nasdaq.com/articles/see-how-alpha-metallurgical-resources-ranks-among-analysts-top-metals-picks",
              "date": "2026-08-12",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMR"
              ]
            },
            {
              "title": "Alpha Metallurgical Resources Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/alpha-metallurgical-resources-q2-earnings-call-highlights",
              "date": "2026-08-07",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMR"
              ]
            },
            {
              "title": "Alpha Metallurgical (AMR) Reports Q2 Loss, Beats Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/alpha-metallurgical-amr-reports-q2-loss-beats-revenue-estimates",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMR",
                "SVM"
              ]
            }
          ],
          "directCount": 10,
          "total": 14,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-07",
            "reportDate": "2026-08-07",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000032/amr-20260807.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-07",
            "reportDate": "2026-08-07",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000030/amr-20260807.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-27",
            "reportDate": "2026-07-27",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000025/amr-20260727.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-18",
            "reportDate": "2026-06-18",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000023/amr-20260618.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-15",
            "reportDate": "2026-05-14",
            "items": [
              "1.04"
            ],
            "itemsKo": [
              "1.04"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000021/amr-20260514.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-08",
            "reportDate": "2026-05-08",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000019/amr-20260508.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MNPR",
      "price": 117.56999969482422,
      "marketCap": "0.75B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": -0.00751307949119422,
          "pct": 61.191335740072205
        },
        "m3": {
          "v": 0.9766308103506052,
          "pct": 99.8191027496382
        },
        "m6": {
          "v": 1.0626315735934073,
          "pct": 97.93028322440087
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.8191027496382,
      "adr": 5.99,
      "cyTrend": 3.52,
      "nyTrend": -36.89,
      "upCount": 21,
      "downCount": 4,
      "upDownRatio": 84,
      "bbwthd": null,
      "bbwthdLow": 0.13,
      "high52": 94.19,
      "volx": 0.48,
      "volSurgeWk": 0.7,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 9.26,
      "div200": 58.08,
      "ret1m": -0.75,
      "ret3m": 97.66,
      "ret6m": 106.26,
      "maxRise1m": 19.47,
      "maxRise3m": 115.17,
      "maxRise6m": 149.29,
      "brk60d": false,
      "clsPos": 94.48,
      "ma150Slope": 9.38,
      "ta": {
        "price": 117.57,
        "resistance": 124.27,
        "support": 104.75,
        "contraction": 1.3,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1905,
        "m3": 0.345,
        "m6": 0.3866,
        "rankPct6": 3.57,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "모노파 테라퓨틱스",
      "nameEn": "MONOPAR THERAPEUTICS INC",
      "detail": {
        "fetchedAt": "2026-08-28",
        "nameKo": "모노파 테라퓨틱스",
        "nameEn": "MONOPAR THERAPEUTICS INC",
        "infomaxCode": "NAS:MNPR",
        "financials": {
          "ok": true,
          "ticker": "MNPR",
          "cik": "0001645469",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 0,
              "profit": -5225253,
              "netIncome": -3893050,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -62.2,
                "netIncome": -48.3,
                "priorEnd": null
              }
            },
            {
              "periodStart": "2019-09-30",
              "periodEnd": "2019-12-31",
              "derived": true,
              "revenue": 0,
              "profit": -1224895,
              "netIncome": -1206859,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -32.2,
                "netIncome": -35.5,
                "priorEnd": "2018-12-31"
              }
            },
            {
              "periodStart": "2019-07-01",
              "periodEnd": "2019-09-30",
              "derived": false,
              "revenue": 0,
              "profit": -759448,
              "netIncome": -736080,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -13.8,
                "netIncome": -15,
                "priorEnd": "2018-09-30"
              }
            },
            {
              "periodStart": "2019-04-01",
              "periodEnd": "2019-06-30",
              "derived": false,
              "revenue": 0,
              "profit": -932109,
              "netIncome": -905700,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -39.6,
                "netIncome": -41.5,
                "priorEnd": "2018-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001645469&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MNPR",
          "items": [
            {
              "title": "MNPR Crosses Above Average Analyst Target",
              "url": "https://www.nasdaq.com/articles/mnpr-crosses-above-average-analyst-target",
              "date": "2026-08-20",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            },
            {
              "title": "MNPR Names New Medical Affairs Head As ALXN1840 Advances Toward FDA Decision",
              "url": "https://www.nasdaq.com/articles/mnpr-names-new-medical-affairs-head-alxn1840-advances-toward-fda-decision",
              "date": "2026-08-19",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            },
            {
              "title": "Monopar Q2 Net Loss Widens; Rolling NDA Submission For ALXN1840 In Wilson Disease Underway",
              "url": "https://www.nasdaq.com/articles/monopar-q2-net-loss-widens-rolling-nda-submission-alxn1840-wilson-disease-underway",
              "date": "2026-08-12",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            },
            {
              "title": "Monopar's ALXN1840 Gets FDA's Rare Pediatric Disease Designation For Wilson Disease",
              "url": "https://www.nasdaq.com/articles/monopars-alxn1840-gets-fdas-rare-pediatric-disease-designation-wilson-disease",
              "date": "2026-06-30",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            },
            {
              "title": "Monopar Therapeutics Granted Rare Pediatric Disease Designation To ALXN1840 To Treat Wilson Disease",
              "url": "https://www.nasdaq.com/articles/monopar-therapeutics-granted-rare-pediatric-disease-designation-alxn1840-treat-wilson",
              "date": "2026-06-30",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            },
            {
              "title": "Wall Street Analysts Believe Monopar Therapeutics (MNPR) Could Rally 88.92%: Here's is How to Trade",
              "url": "https://www.nasdaq.com/articles/wall-street-analysts-believe-monopar-therapeutics-mnpr-could-rally-8892-heres-how-trade",
              "date": "2026-06-15",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            },
            {
              "title": "Monopar's ALXN1840 Shows Significant Copper Reduction In Phase 2 Trial For Wilson Disease",
              "url": "https://www.nasdaq.com/articles/monopars-alxn1840-shows-significant-copper-reduction-phase-2-trial-wilson-disease",
              "date": "2026-05-20",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            },
            {
              "title": "Monopar Reports Promising Analyses From Phase 3 FoCus Trial For ALXN1840 In Treating Wilson Disease",
              "url": "https://www.nasdaq.com/articles/monopar-reports-promising-analyses-phase-3-focus-trial-alxn1840-treating-wilson-disease",
              "date": "2026-04-20",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MNPR"
              ]
            }
          ],
          "directCount": 9,
          "total": 9,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-12",
            "reportDate": "2026-08-12",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1645469/000143774926027165/mnpr20260811_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-22",
            "reportDate": "2026-07-22",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1645469/000143774926024041/mnpr20260721_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-30",
            "reportDate": "2026-06-30",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1645469/000143774926022086/mnpr20260629_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-26",
            "reportDate": "2026-06-26",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1645469/000143774926021832/mnpr20260625_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-23",
            "reportDate": "2026-06-22",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1645469/000143774926021350/mnpr20260622_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-29",
            "reportDate": "2026-05-29",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1645469/000143774926018896/mnpr20260529_8k.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MXL",
      "price": 57.59000015258789,
      "marketCap": "5.60B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": -0.2080583170260973,
          "pct": 4.729241877256317
        },
        "m3": {
          "v": -0.2883094234338574,
          "pct": 4.450072358900145
        },
        "m6": {
          "v": 2.4076923936402,
          "pct": 99.81844589687728
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.81844589687728,
      "adr": 7.59,
      "cyTrend": 30.84,
      "nyTrend": 37.74,
      "upCount": 31,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.27,
      "high52": 44.89,
      "volx": 1.08,
      "volSurgeWk": 1.46,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -26.87,
      "div200": 23.41,
      "ret1m": -20.81,
      "ret3m": -28.83,
      "ret6m": 240.77,
      "maxRise1m": 57.61,
      "maxRise3m": 128.17,
      "maxRise6m": 708.95,
      "brk60d": false,
      "clsPos": 49.78,
      "ma150Slope": 13.69,
      "ta": {
        "price": 57.59,
        "resistance": 89,
        "support": 56.23,
        "contraction": 0.81,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0248,
        "m3": -0.0035,
        "m6": 0.3779,
        "rankPct6": 5.71,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "맥스리니어",
      "nameEn": "MAXLINEAR INC",
      "detail": {
        "fetchedAt": "2026-08-31",
        "nameKo": "맥스리니어",
        "nameEn": "MAXLINEAR INC",
        "infomaxCode": "NAS:MXL",
        "financials": {
          "ok": true,
          "ticker": "MXL",
          "cik": "0001288469",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 168847000,
              "profit": -4185000,
              "netIncome": 1760000,
              "margin": -2.5,
              "yoy": {
                "revenue": 55.2,
                "profit": 83,
                "netIncome": 106.6,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 137188000,
              "profit": -17209000,
              "netIncome": -45137000,
              "margin": -12.5,
              "yoy": {
                "revenue": 43,
                "profit": 62.7,
                "netIncome": 9.2,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 136436000,
              "profit": -14892000,
              "netIncome": -14897000,
              "margin": -10.9,
              "yoy": {
                "revenue": 48,
                "profit": 63.8,
                "netIncome": 74.2,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 126459000,
              "profit": -41289000,
              "netIncome": -45485000,
              "margin": -32.7,
              "yoy": {
                "revenue": 55.9,
                "profit": 38.1,
                "netIncome": 40,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001288469&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MXL",
          "items": [
            {
              "title": "MXL vs. VICR: Which Has the Better AI Infrastructure Opportunity?",
              "url": "https://www.nasdaq.com/articles/mxl-vs-vicr-which-has-better-ai-infrastructure-opportunity",
              "date": "2026-08-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL",
                "VICR"
              ]
            },
            {
              "title": "MXL's AI Optical Growth Accelerates: Can It Challenge AVGO & MRVL?",
              "url": "https://www.nasdaq.com/articles/mxls-ai-optical-growth-accelerates-can-it-challenge-avgo-mrvl",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL",
                "MRVL",
                "AVGO"
              ]
            },
            {
              "title": "Here's Why MaxLinear (MXL) Is a Great 'Buy the Bottom' Stock Now",
              "url": "https://www.nasdaq.com/articles/heres-why-maxlinear-mxl-great-buy-bottom-stock-now",
              "date": "2026-08-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL"
              ]
            },
            {
              "title": "Does MaxLinear (MXL) Have the Potential to Rally 31.25% as Wall Street Analysts Expect?",
              "url": "https://www.nasdaq.com/articles/does-maxlinear-mxl-have-potential-rally-3125-wall-street-analysts-expect",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL"
              ]
            },
            {
              "title": "The Zacks Analyst Blog Highlights MaxLinear, Marvell Technology and Broadcom",
              "url": "https://www.nasdaq.com/articles/zacks-analyst-blog-highlights-maxlinear-marvell-technology-and-broadcom",
              "date": "2026-07-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL",
                "AVGO",
                "MXL"
              ]
            },
            {
              "title": "MaxLinear Rides on AI Infrastructure Momentum: More Upside Ahead?",
              "url": "https://www.nasdaq.com/articles/maxlinear-rides-ai-infrastructure-momentum-more-upside-ahead",
              "date": "2026-07-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL",
                "MRVL",
                "AVGO"
              ]
            },
            {
              "title": "MXL Q2 Earnings Call Highlights Optical AI Data Center Growth",
              "url": "https://www.nasdaq.com/articles/mxl-q2-earnings-call-highlights-optical-ai-data-center-growth",
              "date": "2026-07-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL"
              ]
            },
            {
              "title": "MaxLinear (MXL) Tops Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/maxlinear-mxl-tops-q2-earnings-and-revenue-estimates",
              "date": "2026-07-23",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL",
                "ON"
              ]
            }
          ],
          "directCount": 8,
          "total": 9,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-23",
            "reportDate": "2026-07-23",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1288469/000128846926000050/mxl-20260723.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-01",
            "reportDate": "2026-05-28",
            "items": [
              "4.01",
              "9.01"
            ],
            "itemsKo": [
              "4.01",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1288469/000128846926000045/mxl-20260528.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-21",
            "reportDate": "2026-05-20",
            "items": [
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1288469/000128846926000035/mxl-20260520.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-23",
            "reportDate": "2026-04-22",
            "items": [
              "1.01",
              "2.02",
              "2.03",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "실적 발표",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1288469/000128846926000027/mxl-20260422.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-17",
            "reportDate": "2026-02-13",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1288469/000128846926000017/mxl-20260213.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-29",
            "reportDate": "2026-01-29",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1288469/000128846926000009/mxl-20260129.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "TWST",
      "price": 132.05999755859375,
      "marketCap": "8.87B",
      "sector": "Healthcare",
      "industry": "Diagnostics & Research",
      "rs": {
        "m1": {
          "v": 0.3279034852793724,
          "pct": 99.2418772563177
        },
        "m3": {
          "v": 0.9078300379904602,
          "pct": 99.7467438494935
        },
        "m6": {
          "v": 1.818181729374992,
          "pct": 99.5279593318809
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo",
        "6mo"
      ],
      "bestPct": 99.7467438494935,
      "adr": 6.71,
      "cyTrend": -22.08,
      "nyTrend": -17.03,
      "upCount": 5,
      "downCount": 2,
      "upDownRatio": 71.43,
      "bbwthd": null,
      "bbwthdLow": 0.14,
      "high52": 84.96,
      "volx": 0.73,
      "volSurgeWk": 0.79,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 22.25,
      "div200": 110.1,
      "ret1m": 32.79,
      "ret3m": 90.78,
      "ret6m": 181.82,
      "maxRise1m": 48.76,
      "maxRise3m": 133.99,
      "maxRise6m": 274.37,
      "brk60d": false,
      "clsPos": 14.83,
      "ma150Slope": 20.27,
      "ta": {
        "price": 132.06,
        "resistance": null,
        "support": 115.28,
        "contraction": 1.25,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0596,
        "m3": 0.2342,
        "m6": 0.2909,
        "rankPct6": 10,
        "count": 22
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "트위스트 바이오사이언스",
      "nameEn": "TWIST BIOSCIENCE CORPORATION",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "트위스트 바이오사이언스",
        "nameEn": "TWIST BIOSCIENCE CORPORATION",
        "infomaxCode": "NAS:TWST",
        "financials": {
          "ok": true,
          "ticker": "TWST",
          "cik": "0001581280",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerIncludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 118376000,
              "profit": -36280000,
              "netIncome": -35051000,
              "margin": -30.6,
              "yoy": {
                "revenue": 23.2,
                "profit": -20.5,
                "netIncome": -271.9,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 110715000,
              "profit": -45863000,
              "netIncome": -44021000,
              "margin": -41.4,
              "yoy": {
                "revenue": 19.3,
                "profit": -10.4,
                "netIncome": -11.9,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-10-01",
              "periodEnd": "2025-12-31",
              "derived": false,
              "revenue": 103698000,
              "profit": -32900000,
              "netIncome": -30507000,
              "margin": -31.7,
              "yoy": {
                "revenue": 16.9,
                "profit": 5,
                "netIncome": 3.4,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-06-30",
              "periodEnd": "2025-09-30",
              "derived": true,
              "revenue": 99009000,
              "profit": -29934000,
              "netIncome": -27138000,
              "margin": -30.2,
              "yoy": {
                "revenue": 16.9,
                "profit": 16.9,
                "netIncome": 21.7,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001581280&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "TWST",
          "items": [
            {
              "title": "Twist Bioscience (TWST): Q3 Revenue Jumps 23% As FY2026 Guidance Raised",
              "url": "https://www.nasdaq.com/articles/twist-bioscience-twst-q3-revenue-jumps-23-fy2026-guidance-raised",
              "date": "2026-08-19",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TWST"
              ]
            },
            {
              "title": "Twist Bioscience (TWST) Q3 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/twist-bioscience-twst-q3-2026-earnings-call-transcript",
              "date": "2026-08-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TWST",
                "TWST"
              ]
            },
            {
              "title": "Twist Announces Pricing Of $300 Mln Underwritten Upsized Public Offering",
              "url": "https://www.nasdaq.com/articles/twist-announces-pricing-300-mln-underwritten-upsized-public-offering",
              "date": "2026-08-05",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TWST"
              ]
            },
            {
              "title": "Twist Bioscience Q3 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/twist-bioscience-q3-earnings-call-highlights",
              "date": "2026-08-03",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TWST"
              ]
            },
            {
              "title": "Twist Bioscience (TWST) Reports Q3 Loss, Beats Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/twist-bioscience-twst-reports-q3-loss-beats-revenue-estimates",
              "date": "2026-08-03",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TWST",
                "OTLK"
              ]
            },
            {
              "title": "Kiniksa Pharmaceuticals International, plc (KNSA) Q2 Earnings Match Estimates",
              "url": "https://www.nasdaq.com/articles/kiniksa-pharmaceuticals-international-plc-knsa-q2-earnings-match-estimates",
              "date": "2026-07-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "KNSA",
                "TWST"
              ]
            },
            {
              "title": "Alpha Cognition Inc. (ACOG) Surges 8.6%: Is This an Indication of Further Gains?",
              "url": "https://www.nasdaq.com/articles/alpha-cognition-inc-acog-surges-86-indication-further-gains",
              "date": "2026-07-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ACOG",
                "TWST"
              ]
            },
            {
              "title": "Cathie Wood Is Selling This High-Flying Stock. Is It a Buy?",
              "url": "https://www.nasdaq.com/articles/cathie-wood-selling-high-flying-stock-it-buy",
              "date": "2026-07-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "TWST",
                "TWST"
              ]
            }
          ],
          "directCount": 5,
          "total": 8,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-19",
            "reportDate": "2026-08-19",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1581280/000110465926098830/tm2623545d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-19",
            "reportDate": "2026-08-18",
            "items": [
              "7.01"
            ],
            "itemsKo": [
              "Reg FD 공시"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1581280/000158128026000050/twist-20260818.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "reportDate": "2026-08-04",
            "items": [
              "1.01",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1581280/000110465926091280/tm2622018d2_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-03",
            "reportDate": "2026-08-03",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1581280/000158128026000044/twist-20260803.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-04",
            "reportDate": "2026-05-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1581280/000158128026000037/twist-20260504.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-17",
            "reportDate": "2026-02-11",
            "items": [
              "3.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "3.02",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1581280/000110465926015730/tm266463d1_8k.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "INBX",
      "price": 124.66000366210938,
      "marketCap": "1.82B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": 0.4923980065112449,
          "pct": 99.67509025270758
        },
        "m3": {
          "v": 0.43270889094946546,
          "pct": 96.9971056439942
        },
        "m6": {
          "v": 0.6960544715933248,
          "pct": 94.9527959331881
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 99.67509025270758,
      "adr": 8.11,
      "cyTrend": -0.05,
      "nyTrend": 39.05,
      "upCount": 0,
      "downCount": 0,
      "upDownRatio": 0,
      "bbwthd": null,
      "bbwthdLow": 0.1,
      "high52": 80.28,
      "volx": 1.13,
      "volSurgeWk": 0.73,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 31.33,
      "div200": 41.5,
      "ret1m": 49.24,
      "ret3m": 43.27,
      "ret6m": 69.61,
      "maxRise1m": 62.92,
      "maxRise3m": 69.03,
      "maxRise6m": 171.01,
      "brk60d": false,
      "clsPos": 43.63,
      "ma150Slope": 3.96,
      "ta": {
        "price": 124.66,
        "resistance": 150.98,
        "support": 99.2,
        "contraction": 1.49,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1905,
        "m3": 0.345,
        "m6": 0.3866,
        "rankPct6": 3.57,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "인히브릭스 바이오사이언시스",
      "nameEn": "INHIBRX BIOSCIENCES  INC.",
      "detail": {
        "fetchedAt": "2026-08-28",
        "nameKo": "인히브릭스 바이오사이언시스",
        "nameEn": "INHIBRX BIOSCIENCES  INC.",
        "infomaxCode": "NAS:INBX",
        "financials": {
          "ok": true,
          "ticker": "INBX",
          "cik": "0002007919",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 0,
              "profit": -32149000,
              "netIncome": -36650000,
              "margin": null,
              "yoy": {
                "revenue": -100,
                "profit": -17.4,
                "netIncome": -27.9,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 0,
              "profit": -30923000,
              "netIncome": -32834000,
              "margin": null,
              "yoy": {
                "revenue": -100,
                "profit": 38.1,
                "netIncome": 31.4,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 0,
              "profit": -33812000,
              "netIncome": -35256000,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": 27.7,
                "netIncome": 19.6,
                "priorEnd": "2024-09-30"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 1300000,
              "profit": -27389000,
              "netIncome": -28654000,
              "margin": -2106.8,
              "yoy": {
                "revenue": 1200,
                "profit": 83,
                "netIncome": -101.5,
                "priorEnd": "2024-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002007919&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "INBX",
          "items": [],
          "directCount": 0,
          "total": 0,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-13",
            "reportDate": "2026-08-13",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2007919/000200791926000044/inhibrx-20260813.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-16",
            "reportDate": "2026-07-15",
            "items": [
              "1.01",
              "2.03",
              "3.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "3.02",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2007919/000200791926000037/inhibrx-20260715.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-15",
            "reportDate": "2026-06-15",
            "items": [
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2007919/000200791926000033/inhibrx-20260615.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-03",
            "reportDate": "2026-06-03",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2007919/000200791926000030/inhibrx-20260603.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-14",
            "reportDate": "2026-05-14",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2007919/000200791926000028/inhibrx-20260514.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-11",
            "reportDate": "2026-05-11",
            "items": [
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2007919/000200791926000020/inhibrx-20260511.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "BAND",
      "price": 50.790000915527344,
      "marketCap": "1.58B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": 0.0993506510127567,
          "pct": 88.7725631768953
        },
        "m3": {
          "v": -0.29653735370741036,
          "pct": 4.088277858176555
        },
        "m6": {
          "v": 2.237093835173102,
          "pct": 99.67320261437908
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.67320261437908,
      "adr": 7.08,
      "cyTrend": -2.67,
      "nyTrend": -14.63,
      "upCount": 2,
      "downCount": 14,
      "upDownRatio": 12.5,
      "bbwthd": null,
      "bbwthdLow": 0.33,
      "high52": 64.23,
      "volx": 1.11,
      "volSurgeWk": 1.11,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -9.93,
      "div200": 53.47,
      "ret1m": 9.94,
      "ret3m": -29.65,
      "ret6m": 223.71,
      "maxRise1m": 27.15,
      "maxRise3m": 124.66,
      "maxRise6m": 433.6,
      "brk60d": false,
      "clsPos": 94.59,
      "ma150Slope": 13.74,
      "ta": {
        "price": 50.79,
        "resistance": 55.62,
        "support": 48.15,
        "contraction": 1.07,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0179,
        "m3": 0.1678,
        "m6": 0.3106,
        "rankPct6": 9.29,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "밴드위스",
      "nameEn": "BANDWIDTH INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "밴드위스",
        "nameEn": "BANDWIDTH INC",
        "infomaxCode": "NAS:BAND",
        "financials": {
          "ok": true,
          "ticker": "BAND",
          "cik": "0001514416",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 208784000,
              "profit": -4621000,
              "netIncome": 4118000,
              "margin": -2.2,
              "yoy": {
                "revenue": 19.8,
                "profit": 1.4,
                "netIncome": 210.1,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 207668000,
              "profit": -3926000,
              "netIncome": -3000000,
              "margin": -1.9,
              "yoy": {
                "revenue": -1.1,
                "profit": -47,
                "netIncome": -70.6,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 191895000,
              "profit": -2008000,
              "netIncome": -1241000,
              "margin": -1,
              "yoy": {
                "revenue": -1,
                "profit": -123.6,
                "netIncome": -400.5,
                "priorEnd": "2024-09-30"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 180013000,
              "profit": -3748000,
              "netIncome": -4931000,
              "margin": -2.1,
              "yoy": {
                "revenue": 3.7,
                "profit": 38.3,
                "netIncome": -221.6,
                "priorEnd": "2024-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001514416&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "BAND",
          "items": [
            {
              "title": "Why Is Bandwidth (BAND) Up 33.5% Since Last Earnings Report?",
              "url": "https://www.nasdaq.com/articles/why-bandwidth-band-335-last-earnings-report",
              "date": "2026-08-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND"
              ]
            },
            {
              "title": "Zacks Industry Outlook Highlights Bandwidth and Anterix",
              "url": "https://www.nasdaq.com/articles/zacks-industry-outlook-highlights-bandwidth-and-anterix-0",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND",
                "ATEX"
              ]
            },
            {
              "title": "Bandwidth Q2 Results Raise the Stakes for Its AI Growth Strategy",
              "url": "https://www.nasdaq.com/articles/bandwidth-q2-results-raise-stakes-its-ai-growth-strategy",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND",
                "TWLO",
                "ZM"
              ]
            },
            {
              "title": "Bandwidth Stock Faces a Growth Versus Valuation Test for Investors",
              "url": "https://www.nasdaq.com/articles/bandwidth-stock-faces-growth-versus-valuation-test-investors",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND",
                "TWLO",
                "ZM"
              ]
            },
            {
              "title": "Bandwidth Stock Rises 21.7% in a Week: Can the Rally Still Continue?",
              "url": "https://www.nasdaq.com/articles/bandwidth-stock-rises-217-week-can-rally-still-continue",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND",
                "TWLO",
                "ZM"
              ]
            },
            {
              "title": "Bandwidth (BAND) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/bandwidth-band-q2-2026-earnings-call-transcript",
              "date": "2026-08-08",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND",
                "BAND"
              ]
            },
            {
              "title": "All You Need to Know About Bandwidth (BAND) Rating Upgrade to Buy",
              "url": "https://www.nasdaq.com/articles/all-you-need-know-about-bandwidth-band-rating-upgrade-buy",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND"
              ]
            },
            {
              "title": "Bandwidth Q2 Earnings Call Highlights AI Shift, 2026 Outlook Raised",
              "url": "https://www.nasdaq.com/articles/bandwidth-q2-earnings-call-highlights-ai-shift-2026-outlook-raised",
              "date": "2026-07-30",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND"
              ]
            }
          ],
          "directCount": 11,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-03",
            "reportDate": "2026-08-03",
            "items": [
              "8.01"
            ],
            "itemsKo": [
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1514416/000151441626000060/band-20260803.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-29",
            "reportDate": "2026-07-24",
            "items": [
              "1.01",
              "2.02",
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "실적 발표",
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1514416/000151441626000055/band-20260724.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-18",
            "reportDate": "2026-06-15",
            "items": [
              "1.01",
              "2.03",
              "3.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "3.02",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1514416/000151441626000049/band-20260615.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-16",
            "reportDate": "2026-06-15",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1514416/000151441626000045/band-20260615.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-15",
            "reportDate": "2026-06-15",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1514416/000151441626000043/band-20260615.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-29",
            "reportDate": "2026-05-28",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1514416/000151441626000041/band-20260528.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "CRCL",
      "price": 89.4800033569336,
      "marketCap": "22.12B",
      "sector": "Financial Services",
      "industry": "Capital Markets",
      "rs": {
        "m1": {
          "v": 0.4147036103863019,
          "pct": 99.60288808664261
        },
        "m3": {
          "v": 0.11459896260000038,
          "pct": 69.42836468885673
        },
        "m6": {
          "v": -0.2068078601769538,
          "pct": 5.846042120551925
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 99.60288808664261,
      "adr": 7.39,
      "cyTrend": 24.3,
      "nyTrend": -7.35,
      "upCount": 19,
      "downCount": 19,
      "upDownRatio": 50,
      "bbwthd": 0.54,
      "bbwthdLow": 0.16,
      "high52": 56.11,
      "volx": 1.01,
      "volSurgeWk": 0.82,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": false,
      "div10": 0.96,
      "div50": 26.19,
      "div200": 5.47,
      "ret1m": 41.47,
      "ret3m": 11.46,
      "ret6m": -20.68,
      "maxRise1m": 63.06,
      "maxRise3m": 66.67,
      "maxRise6m": 142.05,
      "brk60d": false,
      "clsPos": 26.4,
      "ma150Slope": 0.07,
      "ta": {
        "price": 89.48,
        "resistance": 91.2,
        "support": 84.27,
        "contraction": 1.57,
        "trend": "mixed"
      },
      "ma150SlopeDir": "flat",
      "wrs": {
        "m1": -0.0011,
        "m3": 0.0613,
        "m6": 0.2331,
        "rankPct6": 17.14,
        "count": 23
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "서클 인터넷 그룹",
      "nameEn": "CIRCLE INTERNET GROUP INC.",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "서클 인터넷 그룹",
        "nameEn": "CIRCLE INTERNET GROUP INC.",
        "infomaxCode": "NYS:CRCL",
        "financials": {
          "ok": true,
          "ticker": "CRCL",
          "cik": "0001876042",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 33582000,
              "profit": 34359000,
              "netIncome": 48221000,
              "margin": 102.3,
              "yoy": {
                "revenue": 41.1,
                "profit": 110.6,
                "netIncome": 110,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 41625000,
              "profit": 45002000,
              "netIncome": 55253000,
              "margin": 108.1,
              "yoy": {
                "revenue": 101.5,
                "profit": -51.6,
                "netIncome": -14.7,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 36836000,
              "profit": 55187000,
              "netIncome": 133416000,
              "margin": 149.8,
              "yoy": {
                "revenue": 1434.8,
                "profit": 6850.5,
                "netIncome": 4191.3,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 28518000,
              "profit": 81020000,
              "netIncome": 214385000,
              "margin": 284.1,
              "yoy": {
                "revenue": 5113.5,
                "profit": 27,
                "netIncome": 202,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001876042&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "CRCL",
          "items": [
            {
              "title": "Circle Stock Is Down More Than 70% From Its All-Time High. Is It Time to Update the Investment Thesis for CRCL Stock?",
              "url": "https://www.nasdaq.com/articles/circle-stock-down-more-70-its-all-time-high-it-time-update-investment-thesis-crcl-stock",
              "date": "2026-08-23",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CRCL",
                "CRCL"
              ]
            },
            {
              "title": "Coinbase Powers Webull's Crypto Trading Expansion in Canada",
              "url": "https://www.nasdaq.com/articles/coinbase-powers-webulls-crypto-trading-expansion-canada",
              "date": "2026-09-01",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "COIN",
                "HOOD",
                "CRCL"
              ]
            },
            {
              "title": "President Trump Says the CFTC Is Working to Bring Hyperliquid to the United States. Does That Make It a Screaming Buy?",
              "url": "https://www.nasdaq.com/articles/president-trump-says-cftc-working-bring-hyperliquid-united-states-does-make-it-screaming",
              "date": "2026-08-30",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "COIN",
                "CRCL"
              ]
            },
            {
              "title": "President Trump Says U.S. Regulators Are About to Give the Green Light to Hyperliquid. Is It Finally Time to Believe the Hype About HYPE?",
              "url": "https://www.nasdaq.com/articles/president-trump-says-us-regulators-are-about-give-green-light-hyperliquid-it-finally-time",
              "date": "2026-08-28",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "COIN",
                "CRCL",
                "PURR"
              ]
            },
            {
              "title": "Robinhood Stock Surges 13.2% in a Week: What's Behind the Rally?",
              "url": "https://www.nasdaq.com/articles/robinhood-stock-surges-132-week-whats-behind-rally",
              "date": "2026-08-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "HOOD",
                "COIN",
                "CRCL"
              ]
            }
          ],
          "directCount": 1,
          "total": 5,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "reportDate": "2026-08-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000246/crcl-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-02",
            "reportDate": "2026-06-29",
            "items": [
              "8.01"
            ],
            "itemsKo": [
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-12",
            "reportDate": "2026-06-12",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000192/crcl-20260612.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-18",
            "reportDate": "2026-05-14",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000159/crcl-20260514.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-11",
            "reportDate": "2026-05-11",
            "items": [
              "2.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000148/crcl-20260511.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-17",
            "reportDate": "2026-03-16",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000078/crcl-20260316.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 8,
          "reports": [
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] 그래도 Arc가 있다",
              "broker": "신한투자증권",
              "analyst": "김유민",
              "date": "2026-08-07",
              "summary": "- 준비금 수익률 하락에 따른 성장 둔화가 근본 부담이나, Arc 메인넷 출시 와 신탁은행 인가 등 인프라 확장 모멘텀 부각. 다만 가이던스 상향의 상 당 부분이 Arc 토큰 프리세일 수익에 기인해 이익의 질 확인 필요- 2Q26 매출 7.0억달러(+7%, 이하 전년동기대비)로 컨센서스 대비 1.5% 하회. 준비금 수익 6.7억달러(+5%)는 평균 USDC 유통잔액이 사상 최고 치(765억달러, +25%)를 기록했음에도 수익률은 3.48%로 66bp 하락- 9월 16일 Arc 퍼블릭 메인넷 출시 예정이며, 블랙록·DTCC·갤럭시·글로벌 페이먼츠·ICE·마스터카드 등이 밸리데이터로 참여. 블랙록의 BUIDL이 배 치될 예정이며, DTCC는 DTC 예탁자산의 토큰화를 지원. 7월 OCC로부 터 최종 인가를 받아 연방 신탁은행을 설립했으며, 향후 USDC 준비금 자 체 관리 역량으로 확장 가능",
              "pages": "4",
              "secureId": "eqlxczxiglleckkgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxczxiglleckkgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] [2Q26 Review] 잔액은 정체, 수익률은 하락, 투자의견 중립 신규",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-05",
              "summary": "- 매출 $701M, 컨센 $717.5M 하회·EPS는 상회- USDC 잔액 $73.3B, 분기 평균 밑돌아 순유출- 가이던스 상향분은 ARC 토큰 프리세일 인식분",
              "pages": "6",
              "secureId": "eqlzmxxqceqeggggcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzmxxqceqeggggcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] USDC 지배력 확인, ARC 생태계 개막",
              "broker": "신한투자증권",
              "analyst": "김유민",
              "date": "2026-05-13",
              "summary": "- 금리 하락으로 준비금 수익이 전분기 대비 감소했으나, USDC 유통량 성 장, 온체인 거래량 급증, RLDC 마진 개선 등 펀더멘털은 견고. ARC 생태 계와 Agent Stack 출시로 수익 다각화. 조정 시 분할 매수 관점 유지- 1Q26 매출 6.9억달러(+20% YoY), 순이익은 5,530만달러(-15% YoY)로 각각 컨센서스 대비 3.7% 하회, 14.2% 상회. 순이익 감소는 IPO 후 주식 보상비용이 원인. 준비금 수익률 하락하며 전분기 대비 매출 감소- ARC 토큰 프리세일 2.2억달러 조달(토큰 전량 기준 30억달러 수준), BlackRock, Apollo, ARK 등 참여. 토큰 인도 시 기타 매출로 인식 예정이 며 밸리데이터 수익 등 연계 수익원 추가 확대 전망",
              "pages": "4",
              "secureId": "eqqlxgzezxlikgmgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqlxgzezxlikgmgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] 인터넷 금융 인프라의 완성",
              "broker": "신한투자증권",
              "analyst": "김유민",
              "date": "2026-05-07",
              "summary": "- 암호화폐 시장 변동성에도 불구하고 USDC 기반 성장 지속. 스테이블코인 발행사를 넘어 결제·정산·블록체인 인프라를 아우르는 인터넷 금융 플랫폼 으로 빠르게 확장 중.- USDC 유통량 753억 달러(+72%), 온체인 거래액 11.9조 달러(+247%)로 네트워크 성장 지속 . RLDC 마진 약 40%, EBITDA 마진 54% 수준으로 플랫폼형 고수익 구조 확인.- CPN, Arc, CCTP 등으로 스테이블코인을 결제 레일로 확장 중. CPN에는 55개 금융기관 참여, 실물 결제 및 크로스보더 정산 활용 확대. 대형 기업 과의 파트너십을 통해 실제 결제 및 정산 영역 침투 진행",
              "pages": "3",
              "secureId": "eqqleeczllkgckegcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqleeczllkgckegcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] 암호화폐 시장은 부진했지만, 스테이블코인은 웃고 있다",
              "broker": "키움증권",
              "analyst": "안영준",
              "date": "2026-02-27",
              "summary": "- 달러 스테이블코인 글로벌 점유율 2위인 USDC의 발행사- 수익의 대부분은 USDC 발행 및 준비금 운용을 통한 이자수익- 공식 규제를 충족하는 스테이블코인으로 향후 암호화폐 시장 확대에 따른 수혜 전망",
              "pages": "5",
              "secureId": "eqqgezkikcgcmqigcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgezkikcgcmqigcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] 미워도 다시 한 번",
              "broker": "한화증권",
              "analyst": "김유민",
              "date": "2025-11-13",
              "summary": "- 서클의 FY 3Q25 매출은 7.4억 달러(YoY +65.9%)로 예상치를 4.6% 상회했다. 그 중 이자 수익이 7.1억 달러(YoY +59.8%)로 시장 기대치 를 2.8% 상회했다. 이자 수익은 전체 매출의 96%를 차지하고 있다- 기타 수익은 2,850만 달러(YoY +5,113.5%)로 컨센서스를 38.8% 상회 했다. 구독 및 서비스 수익이 크게 증가했다. 기타 수익은 수익성이 높 은 부문으로, RLDC 마진(Revenue Less Distribution Costs Margin) 강 화에 기여했다. 구독 및 서비스 수익과 거래 수익은 각각 2,360만 달 러, 470만 달러를 기록했다- 서클의 머니마켓펀드 토큰인 USYC 거래 수수료도 실적 개선에 기여 했다. USYC는 6월 말부터 11월 초까지 200% 이상 성장했고 약 10억 달러 규모에 도달했다",
              "pages": "8",
              "secureId": "eqxiceqxkeceleqgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxiceqxkeceleqgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] 위대한 발행 포지션! Base 기반 수직 계열화도 가세",
              "broker": "유안타증권",
              "analyst": "황병준",
              "date": "2025-09-30",
              "summary": "- 동사의 Total Value Locked(TVL)는 24년 1월 $247억에서 25년 9월 $730억 규모로 지난 21개월 간 95% 증가. 블록체인별 USDC, EURC TVL 추이에 따르면 24년 초 이후로 이더 리움 외 타 블록체인의 USDC TVL 확대가 주도. 이는 블록체인간 USDC 송금을 가능하게 하는 CCTP(Cross-Chain Transfer Protocol) 인프라에 기반.- 블록체인간 송금을 발행사 주도의 스테이블코인 소각과 재발행(Burn & Mint) 절차를 통해 구 현, 기존의 브릿지 인프라 등을 통한 Wrapped 토큰(타 블록체인에서 사용 가능한 파생 토 큰) 발행 절차를 수반하지 않아 브릿지 보안 문제에서 자유롭고, 무엇보다 발행사인 동사가 블록체인간 네트워크 효과를 구가할 수 있으며 또한, 온체인 유저의 크로스체인 활동 간소 화는 USDC 채택의 경쟁 우위 요소로 연결",
              "pages": "7",
              "secureId": "eqzmelxiqegqxqcgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzmelxiqegqxqcgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] 글로벌 결제 인프라로의 비전",
              "broker": "신한투자증권",
              "analyst": "박현우",
              "date": "2025-09-22",
              "summary": "- USDC 채택 확산 및 우호적인 규제 환경 지속. 수익성보다는 네트워크 성 장, 시장 내 점유율 확대에 초점을 맞춘 전략 유효- 2Q25 USDC 유통량(평잔) 및 준비금 수익률은 각각 610억(+85% YoY), 4.14%(-2bp QoQ) 기록. 스테이블코인 내 시장 점유율이 확대되며 유통 량은 고성장 중.- 온체인 거래액, Spot Pair Trading 내 비중 등 온체인/거래소 양면으로 긍정 적인 흐름 유지. 쇼피파이와 같은 USDC 결제 UseCase 활성화도 마찬가 지",
              "pages": "4",
              "secureId": "eqzlkmqxcmiilgggcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzlkmqxcmiilgggcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ANF",
      "price": 140.67999267578125,
      "marketCap": "6.59B",
      "sector": "Consumer Cyclical",
      "industry": "Apparel Retail",
      "rs": {
        "m1": {
          "v": 0.27658799066804557,
          "pct": 98.73646209386283
        },
        "m3": {
          "v": 0.8672683768771208,
          "pct": 99.60202604920406
        },
        "m6": {
          "v": 0.6118239532921607,
          "pct": 93.79084967320262
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo"
      ],
      "bestPct": 99.60202604920406,
      "adr": 5.3,
      "cyTrend": 22.52,
      "nyTrend": 6.51,
      "upCount": 4,
      "downCount": 2,
      "upDownRatio": 66.67,
      "bbwthd": null,
      "bbwthdLow": 0.11,
      "high52": 91.01,
      "volx": 0.82,
      "volSurgeWk": 0.26,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 36.34,
      "div200": 46.99,
      "ret1m": 27.66,
      "ret3m": 86.73,
      "ret6m": 61.18,
      "maxRise1m": 53.92,
      "maxRise3m": 105.09,
      "maxRise6m": 121.84,
      "brk60d": false,
      "clsPos": 42.15,
      "ma150Slope": 0.41,
      "ta": {
        "price": 140.68,
        "resistance": 145.55,
        "support": 134.5,
        "contraction": 1.57,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.1199,
        "m3": -0.0747,
        "m6": -0.0411,
        "rankPct6": 85,
        "count": 9
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "애버크롬비 앤드 피치",
      "nameEn": "ABERCROMBIE & FITCH CO",
      "detail": {
        "fetchedAt": "2026-09-01",
        "nameKo": "애버크롬비 앤드 피치",
        "nameEn": "ABERCROMBIE & FITCH CO",
        "infomaxCode": "NYS:ANF",
        "financials": {
          "ok": true,
          "ticker": "ANF",
          "cik": "0001018840",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-02-01",
              "periodEnd": "2026-05-02",
              "derived": false,
              "revenue": 1113821000,
              "profit": 88797000,
              "netIncome": 67134000,
              "margin": 8,
              "yoy": {
                "revenue": 1.5,
                "profit": -12.5,
                "netIncome": -16.5,
                "priorEnd": "2025-05-03"
              }
            },
            {
              "periodStart": "2025-11-01",
              "periodEnd": "2026-01-31",
              "derived": true,
              "revenue": 1669802000,
              "profit": 235931000,
              "netIncome": 172130000,
              "margin": 14.1,
              "yoy": {
                "revenue": 5.4,
                "profit": -7.9,
                "netIncome": -2.9,
                "priorEnd": "2025-02-01"
              }
            },
            {
              "periodStart": "2025-08-03",
              "periodEnd": "2025-11-01",
              "derived": false,
              "revenue": 1290619000,
              "profit": 155021000,
              "netIncome": 112995000,
              "margin": 12,
              "yoy": {
                "revenue": 6.8,
                "profit": -13.5,
                "netIncome": -14.4,
                "priorEnd": "2024-11-02"
              }
            },
            {
              "periodStart": "2025-05-04",
              "periodEnd": "2025-08-02",
              "derived": false,
              "revenue": 1208560000,
              "profit": 206658000,
              "netIncome": 141383000,
              "margin": 17.1,
              "yoy": {
                "revenue": 6.6,
                "profit": 17.7,
                "netIncome": 6.2,
                "priorEnd": "2024-08-03"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001018840&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "ANF",
          "items": [
            {
              "title": "Surging Earnings Estimates Signal Upside for Abercrombie (ANF) Stock",
              "url": "https://www.nasdaq.com/articles/surging-earnings-estimates-signal-upside-abercrombie-anf-stock",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF"
              ]
            },
            {
              "title": "Understanding Abercrombie (ANF) Reliance on International Revenue",
              "url": "https://www.nasdaq.com/articles/understanding-abercrombie-anf-reliance-international-revenue",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF"
              ]
            },
            {
              "title": "Why Abercrombie & Fitch Stock Skyrocketed This Week",
              "url": "https://www.nasdaq.com/articles/why-abercrombie-fitch-stock-skyrocketed-week",
              "date": "2026-08-29",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF",
                "ANF"
              ]
            },
            {
              "title": "Abercrombie (ANF) Upgraded to Buy: Here's Why",
              "url": "https://www.nasdaq.com/articles/abercrombie-anf-upgraded-buy-heres-why",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF"
              ]
            },
            {
              "title": "Is Abercrombie & Fitch (ANF) Stock Undervalued Right Now?",
              "url": "https://www.nasdaq.com/articles/abercrombie-fitch-anf-stock-undervalued-right-now",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF"
              ]
            },
            {
              "title": "Are Retail-Wholesale Stocks Lagging  Abercrombie & Fitch (ANF) This Year?",
              "url": "https://www.nasdaq.com/articles/are-retail-wholesale-stocks-lagging-abercrombie-fitch-anf-year",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF"
              ]
            },
            {
              "title": "Abercrombie & Fitch Company (ANF) Hits Fresh High: Is There Still Room to Run?",
              "url": "https://www.nasdaq.com/articles/abercrombie-fitch-company-anf-hits-fresh-high-there-still-room-run",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF",
                "BOOT"
              ]
            },
            {
              "title": "Why Abercrombie & Fitch Stock Surged 35% Today",
              "url": "https://www.nasdaq.com/articles/why-abercrombie-fitch-stock-surged-35-today",
              "date": "2026-08-26",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANF",
                "ANF",
                "TGT"
              ]
            }
          ],
          "directCount": 10,
          "total": 11,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-26",
            "reportDate": "2026-08-26",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1018840/000101884026000041/anf-20260826.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-20",
            "reportDate": "2026-08-18",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1018840/000101884026000039/anf-20260818.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-04",
            "reportDate": "2026-06-03",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1018840/000101884026000034/anf-20260603.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-27",
            "reportDate": "2026-05-27",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1018840/000101884026000029/anf-20260527.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-04",
            "reportDate": "2026-03-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1018840/000101884026000006/anf-20260304.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-12",
            "reportDate": "2026-01-12",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1018840/000101884026000003/anf-20260112.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 1,
          "reports": [
            {
              "title": "[애버크롬비 앤드 피치 (NYS:ANF)] 저점 통과, 점차 낮아지는 리스크",
              "broker": "키움증권",
              "analyst": "조소정",
              "date": "2025-11-27",
              "summary": "- 캐주얼 의류 브랜드사 (Hollister, Abercrombie)- 3Q26 실적은 매출과 EPS가 시장 기대치를 상회. Hollister가 매출 성장을 견인한 가운데, 재고 관리와 프로모션 축소로 관세 여파를 상쇄한 덕분- 주가는 선행 PER 9배 수준. 최근 주가 급등에도 밸류에이션 부담은 없음. 향후 실적 가시성 개선될 전망인 만큼, 주가 상승 여력이 커질 듯.",
              "pages": "4",
              "secureId": "eqxkemzmcximczmgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkemzmcximczmgcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "DELL",
      "price": 425,
      "marketCap": "294.80B",
      "sector": "Technology",
      "industry": "Computer Hardware",
      "rs": {
        "m1": {
          "v": -0.0904615960954323,
          "pct": 24.368231046931406
        },
        "m3": {
          "v": 0.07939419248969079,
          "pct": 61.03473227206947
        },
        "m6": {
          "v": 1.8976011626691247,
          "pct": 99.60058097313
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.60058097313,
      "adr": 5.62,
      "cyTrend": 2.21,
      "nyTrend": 3.75,
      "upCount": 7,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.18,
      "bbwthdLow": 0.14,
      "high52": 82.68,
      "volx": 2.38,
      "volSurgeWk": 2.99,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": true,
      "div10": -4.97,
      "div50": -2.07,
      "div200": 72,
      "ret1m": -9.05,
      "ret3m": 7.94,
      "ret6m": 189.76,
      "maxRise1m": 23.47,
      "maxRise3m": 44.19,
      "maxRise6m": 252.35,
      "brk60d": false,
      "clsPos": 7.6,
      "ma150Slope": 18.47,
      "ta": {
        "price": 425,
        "resistance": 444,
        "support": 378.66,
        "contraction": 0.85,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.04,
        "m3": 0.0441,
        "m6": 1.0943,
        "rankPct6": 0.71,
        "count": 8
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "델 테크놀로지스",
      "nameEn": "DELL TECHNOLOGIES INC",
      "detail": {
        "fetchedAt": "2026-08-28",
        "nameKo": "델 테크놀로지스",
        "nameEn": "DELL TECHNOLOGIES INC",
        "infomaxCode": "NYS:DELL",
        "financials": {
          "ok": true,
          "ticker": "DELL",
          "cik": "0001571996",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-31",
              "periodEnd": "2026-05-01",
              "derived": false,
              "revenue": 43842000000,
              "profit": 3656000000,
              "netIncome": 3438000000,
              "margin": 8.3,
              "yoy": {
                "revenue": 87.5,
                "profit": 213.8,
                "netIncome": 256.3,
                "priorEnd": "2025-05-02"
              }
            },
            {
              "periodStart": "2025-10-31",
              "periodEnd": "2026-01-30",
              "derived": true,
              "revenue": 33379000000,
              "profit": 3092000000,
              "netIncome": 2259000000,
              "margin": 9.3,
              "yoy": {
                "revenue": 39.5,
                "profit": 43.2,
                "netIncome": 47.4,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodStart": "2025-08-02",
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 27005000000,
              "profit": 2119000000,
              "netIncome": 1548000000,
              "margin": 7.8,
              "yoy": {
                "revenue": 10.8,
                "profit": 23.1,
                "netIncome": 31.7,
                "priorEnd": "2024-11-01"
              }
            },
            {
              "periodStart": "2025-05-03",
              "periodEnd": "2025-08-01",
              "derived": false,
              "revenue": 29776000000,
              "profit": 1773000000,
              "netIncome": 1164000000,
              "margin": 6,
              "yoy": {
                "revenue": 19,
                "profit": 27.4,
                "netIncome": 31.2,
                "priorEnd": "2024-08-02"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001571996&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "DELL",
          "items": [
            {
              "title": "Prediction: Dell Technologies Stock Could Go Parabolic After Sept. 1. Here's Why.",
              "url": "https://www.nasdaq.com/articles/prediction-dell-technologies-stock-could-go-parabolic-after-sept-1-heres-why",
              "date": "2026-08-27",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL",
                "DELL"
              ]
            },
            {
              "title": "SNOW Benefits From Product Revenue Surge: Can It Beat DELL & ORCL?",
              "url": "https://www.nasdaq.com/articles/snow-benefits-product-revenue-surge-can-it-beat-dell-orcl",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNOW",
                "DELL",
                "ORCL"
              ]
            },
            {
              "title": "Dell Technologies (DELL) Q2 Earnings on the Horizon: Analysts' Insights on Key Performance Measures",
              "url": "https://www.nasdaq.com/articles/dell-technologies-dell-q2-earnings-horizon-analysts-insights-key-performance-measures",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Dell Technologies (DELL) Advances While Market Declines: Some Information for Investors",
              "url": "https://www.nasdaq.com/articles/dell-technologies-dell-advances-while-market-declines-some-information-investors",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Zacks.com featured highlights Seagate Technology, Western Digital and Dell",
              "url": "https://www.nasdaq.com/articles/zackscom-featured-highlights-seagate-technology-western-digital-and-dell",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL",
                "WDC",
                "STX"
              ]
            },
            {
              "title": "Dell Technologies Says Agentic AI Will Redefine Work, Infrastructure and Security",
              "url": "https://www.nasdaq.com/articles/dell-technologies-says-agentic-ai-will-redefine-work-infrastructure-and-security",
              "date": "2026-08-25",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Dell Technologies vs. UiPath: Which Technology Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/dell-technologies-vs-uipath-which-technology-stock-better-buy-2026",
              "date": "2026-08-25",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL",
                "DELL",
                "PATH"
              ]
            },
            {
              "title": "HP (HPQ) Q3 Earnings and Revenues Top Estimates",
              "url": "https://www.nasdaq.com/articles/hp-hpq-q3-earnings-and-revenues-top-estimates",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "HPQ",
                "DELL"
              ]
            }
          ],
          "directCount": 7,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-06",
            "reportDate": "2026-07-02",
            "items": [
              "3.03",
              "5.03",
              "9.01"
            ],
            "itemsKo": [
              "3.03",
              "5.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1571996/000119312526296224/d32716d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-01",
            "reportDate": "2026-06-25",
            "items": [
              "3.03",
              "5.07",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "3.03",
              "주주총회 표결",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1571996/000157199626000036/dell-20260625.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-17",
            "reportDate": "2026-06-11",
            "items": [
              "3.02"
            ],
            "itemsKo": [
              "3.02"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1571996/000157199626000032/dell-20260611.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-16",
            "reportDate": "2026-06-16",
            "items": [
              "1.01",
              "2.03",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1571996/000119312526272720/d20600d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-12",
            "reportDate": "2026-06-11",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1571996/000119312526269594/d131151d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-10",
            "reportDate": "2026-06-10",
            "items": [
              "1.01",
              "1.02",
              "2.03",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "1.02",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1571996/000119312526265877/d98058d8k.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 5,
          "reports": [
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] 전통 서버의 부활과 Agentic AI가 이끄는 멀티플 리레이팅",
              "broker": "키움증권",
              "analyst": "박기현",
              "date": "2026-06-02",
              "summary": "- 매출 $43.8B(+88%), EPS $4.86(+214%)로 컨센서스 60% 이상 상회- AI 수요의 전통 IT 전방 확산 및 Agentic AI발 CPU TAM 구조적 확장- 주가 급등에도 Fwd P/E 22.8배로 업종(26.0배) 하회, 대규모 주주환원 안전판",
              "pages": "6",
              "secureId": "eqlciziegxilkkggcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlciziegxilkkggcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] Go out and buy a Dell",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-05-29",
              "summary": "- 실적발표 이후 40% 주가 상승. 단순 AI 서버 OEM에서 플랫폼 기업으로 확장. 기대를 서프라이즈 실적으로 증명. 커버리지 내 최선호주 제시- FY1Q27 매출액 438억달러(YoY+87.5%, 이하 전년동기대비), 영업이익 42억달러(+154.2%, OPM 9.7%)로 컨센서스를 각각 23.4%, 52.8% 상회. AI 서버 매출은 161억달러(+757%) 기록. 1분기 AI 서버 주문 244억달러, 백로그 513억달러 달성. FY27 AI 서버 매출 가이던스 600억달러로 상향- 전통 서버 매출도 85억달러(+92%) 기록. Agentic AI 확산으로 전통 서버 의 AI 추론 및 내부 워크로드 처리 역할 확대. 14세대 이하 서버 설치 기 반이 여전히 큰 상황에서, 18세대 서버는 14세대 13대 통합 효과 제공. 평 균단가 상승에도 비용 절감 효과가 커서 교체 수요 기반 매출 확대 전망. CSG 부문(+17%)도 점유율과 수익성 개선(+2.6%p)으로 하방을 뒷받침",
              "pages": "5",
              "secureId": "eqlcciqxcilleikgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlcciqxcilleikgcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] AI 인프라 기업으로 재평가",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-04-27",
              "summary": "- 시장은 델을 AI 인프라 기업으로 바라보기 시작- PC와 전통 서버 판매에 AI가 더해졌다- 전통 PC OEM에서 AI 인프라 기업으로 멀티플 확장 국면 진입",
              "pages": "22",
              "secureId": "eqqqglcgmceemikgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqqglcgmceemikgcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] AI 고성장, 메모리 가격은 관리 가능 수준",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2026-02-27",
              "summary": "- 델의 FY 4Q26 매출액은 334억 달러(YoY +39.5%), EPS는 3.89 달러 (YoY +45.1%)를 기록해 컨센서스를 각각 5.2%, 10.5% 상회했다. 각 각 가이던스 상단(320억 달러, 3.50 달러)을 초과했다.- 델은 FY 1Q27 가이던스를 중간값 기준 매출액 352억 달러(YoY +50.6%, vs. 컨센서스 293억 달러), EPS 2.9 달러(YoY +87.1%, vs. 컨 센서스 2.4 달러)로 제시했다- 2027 연간으로는 매출액 1,400억 달러 (YoY +23.3%, vs. 컨센서스 1,263억 달러), EPS 12.90 달러(YoY +25.2%, vs. 컨센서스 11.56 달러)를 기록할 것으로 예상했다. 현재 AI 서버 수주잔고는 엔비디아 그레이스 블랙웰 제품 비중이 압도적이며, 차세대 베라루빈 아키텍처는 회계연도 하반기 출하가 예정돼 있다",
              "pages": "7",
              "secureId": "eqqgeligkiqmcgqgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgeligkiqmcgqgcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2025-11-26",
              "summary": "- 매출액 270억 달러(YoY +10.8%), 조정 EPS 2.59 달러(YoY +20.5%)로 각각 예상치 0.7% 하회, 4.9% 상회. AI 서버 출하량 증가 및 운영 효율성으로 3분기 기준 매출, EPS 최고치 경신- CSG: 상업용 클라이언트, 소비자 매출은 각각 106.2억 달러(YoY +4.8%), 18.6억 달러(YOY -6.8%). 상업용 클라이언트 부문은 5분기 연속 매출 성장, 중소기업 전반에서 강력한 수요 확인. 소비자 수요와 심리는 3년 만에 성장세로 전환- AI 서버 수요 증가에 기록적 출하액, 수주잔고 달성. 4Q26 가이던스 시장 예상 대폭 상회. 시간 외 3.5% 상승",
              "pages": "1",
              "secureId": "eqxkeggxcizekzmgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkeggxcizekzmgcgxclgq.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "AUGO",
      "price": 79.04499816894531,
      "marketCap": "7.09B",
      "sector": "Basic Materials",
      "industry": "Gold",
      "rs": {
        "m1": {
          "v": 0.3804521444564124,
          "pct": 99.53068592057762
        },
        "m3": {
          "v": 0.3208002092253569,
          "pct": 93.52387843704776
        },
        "m6": {
          "v": -0.02647875010700141,
          "pct": 25.23602033405955
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 99.53068592057762,
      "adr": 5.03,
      "cyTrend": -8.02,
      "nyTrend": -13.77,
      "upCount": 0,
      "downCount": 4,
      "upDownRatio": 0,
      "bbwthd": null,
      "bbwthdLow": 0.19,
      "high52": 73.07,
      "volx": 1.05,
      "volSurgeWk": 1.26,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 19.65,
      "div200": 18.86,
      "ret1m": 38.05,
      "ret3m": 32.08,
      "ret6m": -2.65,
      "maxRise1m": 51.88,
      "maxRise3m": 90.38,
      "maxRise6m": 127.23,
      "brk60d": false,
      "clsPos": 7.57,
      "ma150Slope": 4.03,
      "ta": {
        "price": 79.04,
        "resistance": 90.19,
        "support": 71.04,
        "contraction": 1.14,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2564,
        "m3": 0.2167,
        "m6": -0.0247,
        "rankPct6": 81.43,
        "count": 8
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "오라 미네랄스",
      "nameEn": "AURA MINERALS INC (VG)",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "오라 미네랄스",
        "nameEn": "AURA MINERALS INC (VG)",
        "infomaxCode": "NAS:AUGO",
        "financialsError": "매출 태그 없음",
        "news": {
          "ok": true,
          "ticker": "AUGO",
          "items": [
            {
              "title": "Wednesday 8/19 Insider Buying Report: AUGO, CODI",
              "url": "https://www.nasdaq.com/articles/wednesday-8-19-insider-buying-report-augo-codi",
              "date": "2026-08-19",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AUGO",
                "AUGO",
                "CODI"
              ]
            },
            {
              "title": "Aura Minerals (AUGO) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/aura-minerals-augo-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AUGO",
                "AUGO"
              ]
            },
            {
              "title": "How To YieldBoost Aura Minerals From 4.7% To 24.2% Using Options",
              "url": "https://www.nasdaq.com/articles/how-yieldboost-aura-minerals-47-242-using-options",
              "date": "2026-08-06",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AUGO"
              ]
            },
            {
              "title": "Aura Minerals Inc. Q2 Income Rises",
              "url": "https://www.nasdaq.com/articles/aura-minerals-inc-q2-income-rises",
              "date": "2026-08-06",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AUGO",
                "AUGO"
              ]
            },
            {
              "title": "Aura Minerals (AUGO) Q2 Earnings and Revenues Miss Estimates",
              "url": "https://www.nasdaq.com/articles/aura-minerals-augo-q2-earnings-and-revenues-miss-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AUGO",
                "EU"
              ]
            },
            {
              "title": "Aura Minerals (AUGO) Earnings Expected to Grow: Should You Buy?",
              "url": "https://www.nasdaq.com/articles/aura-minerals-augo-earnings-expected-grow-should-you-buy",
              "date": "2026-07-29",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AUGO"
              ]
            },
            {
              "title": "Are Options Traders Betting on a Big Move in Aura Minerals Stock?",
              "url": "https://www.nasdaq.com/articles/are-options-traders-betting-big-move-aura-minerals-stock",
              "date": "2026-07-22",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AUGO"
              ]
            },
            {
              "title": "Wheaton Precious Metals Corp. (WPM) Earnings Expected to Grow: Should You Buy?",
              "url": "https://www.nasdaq.com/articles/wheaton-precious-metals-corp-wpm-earnings-expected-grow-should-you-buy",
              "date": "2026-07-30",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "WPM",
                "AUGO"
              ]
            }
          ],
          "directCount": 7,
          "total": 9,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "EAT",
      "price": 233.97999572753906,
      "marketCap": "9.87B",
      "sector": "Consumer Cyclical",
      "industry": "Restaurants",
      "rs": {
        "m1": {
          "v": 0.07207329084783076,
          "pct": 85.2346570397112
        },
        "m3": {
          "v": 0.6658122208706896,
          "pct": 99.45730824891461
        },
        "m6": {
          "v": 0.6209212735311448,
          "pct": 94.0087145969499
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.45730824891461,
      "adr": 4.54,
      "cyTrend": 5.97,
      "nyTrend": 6.72,
      "upCount": 12,
      "downCount": 14,
      "upDownRatio": 46.15,
      "bbwthd": null,
      "bbwthdLow": 0.15,
      "high52": 91.76,
      "volx": 0.93,
      "volSurgeWk": 1.13,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 13.78,
      "div200": 44.69,
      "ret1m": 7.21,
      "ret3m": 66.58,
      "ret6m": 62.09,
      "maxRise1m": 16.08,
      "maxRise3m": 84.53,
      "maxRise6m": 104.06,
      "brk60d": false,
      "clsPos": 94.13,
      "ma150Slope": 6.65,
      "ta": {
        "price": 233.98,
        "resistance": 253.71,
        "support": 227.01,
        "contraction": 0.77,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.005,
        "m3": 0.0413,
        "m6": -0.0383,
        "rankPct6": 84.29,
        "count": 18
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "브링커 인터내셔널",
      "nameEn": "BRINKER INTERNATIONAL",
      "detail": {
        "fetchedAt": "2026-08-31",
        "nameKo": "브링커 인터내셔널",
        "nameEn": "BRINKER INTERNATIONAL",
        "infomaxCode": "NYS:EAT",
        "financials": {
          "ok": true,
          "ticker": "EAT",
          "cik": "0000703351",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2025-12-25",
              "periodEnd": "2026-03-25",
              "derived": false,
              "revenue": 1470200000,
              "profit": 166600000,
              "netIncome": 127900000,
              "margin": 11.3,
              "yoy": {
                "revenue": 3.2,
                "profit": 6.2,
                "netIncome": 7.4,
                "priorEnd": "2025-03-26"
              }
            },
            {
              "periodStart": "2025-09-25",
              "periodEnd": "2025-12-24",
              "derived": false,
              "revenue": 1452200000,
              "profit": 168400000,
              "netIncome": 128500000,
              "margin": 11.6,
              "yoy": {
                "revenue": 6.9,
                "profit": 7.9,
                "netIncome": 8.4,
                "priorEnd": "2024-12-25"
              }
            },
            {
              "periodStart": "2025-06-26",
              "periodEnd": "2025-09-24",
              "derived": false,
              "revenue": 1349200000,
              "profit": 117900000,
              "netIncome": 99500000,
              "margin": 8.7,
              "yoy": {
                "revenue": 18.5,
                "profit": 109,
                "netIncome": 158.4,
                "priorEnd": "2024-09-25"
              }
            },
            {
              "periodStart": "2025-03-26",
              "periodEnd": "2025-06-25",
              "derived": true,
              "revenue": 1461900000,
              "profit": 142700000,
              "netIncome": 107000000,
              "margin": 9.8,
              "yoy": {
                "revenue": 21,
                "profit": 95.2,
                "netIncome": 86.7,
                "priorEnd": "2024-06-26"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000703351&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "EAT",
          "items": [
            {
              "title": "Here's Why Brinker International (EAT) is a Strong Growth Stock",
              "url": "https://www.nasdaq.com/articles/heres-why-brinker-international-eat-strong-growth-stock-1",
              "date": "2026-08-25",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "Brinker (EAT) Q4 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/brinker-eat-q4-2026-earnings-call-transcript",
              "date": "2026-08-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT",
                "EAT"
              ]
            },
            {
              "title": "Earnings Estimates Moving Higher for Brinker International (EAT): Time to Buy?",
              "url": "https://www.nasdaq.com/articles/earnings-estimates-moving-higher-brinker-international-eat-time-buy",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "Here's Why Brinker International (EAT) is a Strong Value Stock",
              "url": "https://www.nasdaq.com/articles/heres-why-brinker-international-eat-strong-value-stock-3",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "Here's How Much You'd Have If You Invested $1000 in Brinker International a Decade Ago",
              "url": "https://www.nasdaq.com/articles/heres-how-much-youd-have-if-you-invested-1000-brinker-international-decade-ago",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "Should You Worry That Another Brinker Executive Sold? Here's What Investors Should Know",
              "url": "https://www.nasdaq.com/articles/should-you-worry-another-brinker-executive-sold-heres-what-investors-should-know",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT",
                "EAT"
              ]
            },
            {
              "title": "A Brinker Director Sold Near the Stock's Peak. Here's What to Know",
              "url": "https://www.nasdaq.com/articles/brinker-director-sold-near-stocks-peak-heres-what-know",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT",
                "EAT"
              ]
            },
            {
              "title": "A Brinker Insider Ended the Day Owning More Stock. Here's What Long-Term Investors Should Know",
              "url": "https://www.nasdaq.com/articles/brinker-insider-ended-day-owning-more-stock-heres-what-long-term-investors-should-know",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT",
                "EAT"
              ]
            }
          ],
          "directCount": 8,
          "total": 9,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-12",
            "reportDate": "2026-08-10",
            "items": [
              "2.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/703351/000070335126000026/eat-20260810.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-17",
            "reportDate": "2026-06-16",
            "items": [
              "8.01"
            ],
            "itemsKo": [
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/703351/000070335126000022/eat-20260616.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-29",
            "reportDate": "2026-04-29",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/703351/000070335126000013/eat-20260429.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-02",
            "reportDate": "2026-02-26",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/703351/000070335126000008/eat-20260226.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-28",
            "reportDate": "2026-01-28",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/703351/000070335126000004/eat-20260128.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-24",
            "reportDate": "2025-11-20",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/703351/000070335125000051/eat-20251120.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ORKA",
      "price": 92.11000061035156,
      "marketCap": "6.04B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": -0.061347160007759236,
          "pct": 36.714801444043324
        },
        "m3": {
          "v": 0.5315929754765835,
          "pct": 98.44428364688856
        },
        "m6": {
          "v": 1.676838158058839,
          "pct": 99.38271604938271
        }
      },
      "qualifiedBy": [
        "3mo",
        "6mo"
      ],
      "bestPct": 99.38271604938271,
      "adr": 5.3,
      "cyTrend": 13.61,
      "nyTrend": 13.69,
      "upCount": 7,
      "downCount": 5,
      "upDownRatio": 58.33,
      "bbwthd": null,
      "bbwthdLow": 0.17,
      "high52": 79.74,
      "volx": 0.64,
      "volSurgeWk": 0.63,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -3,
      "div200": 61.43,
      "ret1m": -6.13,
      "ret3m": 53.16,
      "ret6m": 167.68,
      "maxRise1m": 34.33,
      "maxRise3m": 87.65,
      "maxRise6m": 268.84,
      "brk60d": false,
      "clsPos": 58.32,
      "ma150Slope": 17.13,
      "ta": {
        "price": 92.11,
        "resistance": 96.27,
        "support": 85.14,
        "contraction": 1.09,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1905,
        "m3": 0.345,
        "m6": 0.3866,
        "rankPct6": 3.57,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "오루카 테라퓨틱스",
      "nameEn": "ORUKA THERAPEUTICS INC",
      "detail": {
        "fetchedAt": "2026-08-28",
        "nameKo": "오루카 테라퓨틱스",
        "nameEn": "ORUKA THERAPEUTICS INC",
        "infomaxCode": "NAS:ORKA",
        "financials": {
          "ok": true,
          "ticker": "ORKA",
          "cik": "0000907654",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2024-01-01",
              "periodEnd": "2024-03-31",
              "derived": false,
              "revenue": 0,
              "profit": -2482000,
              "netIncome": -2009000,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -38.2,
                "netIncome": -49.3,
                "priorEnd": "2023-03-31"
              }
            },
            {
              "periodStart": "2023-09-30",
              "periodEnd": "2023-12-31",
              "derived": true,
              "revenue": 0,
              "profit": -1590000,
              "netIncome": -1089000,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -2.7,
                "netIncome": 7.2,
                "priorEnd": "2022-12-31"
              }
            },
            {
              "periodStart": "2023-01-01",
              "periodEnd": "2023-03-31",
              "derived": false,
              "revenue": 0,
              "profit": -1796000,
              "netIncome": -1346000,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": 45.2,
                "netIncome": 58.9,
                "priorEnd": "2022-03-31"
              }
            },
            {
              "periodStart": "2022-09-30",
              "periodEnd": "2022-12-31",
              "derived": true,
              "revenue": 0,
              "profit": -1548000,
              "netIncome": -1174000,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": 72.7,
                "netIncome": 79.3,
                "priorEnd": "2021-12-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000907654&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "ORKA",
          "items": [
            {
              "title": "Show Me The Money: ORKA Makes A Splash With A 500%+ Gain; More Catalysts Ahead",
              "url": "https://www.nasdaq.com/articles/show-me-money-orka-makes-splash-500-gain-more-catalysts-ahead",
              "date": "2026-08-21",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA"
              ]
            },
            {
              "title": "Oruka Q2 Net Loss Expands; Expects Phase 2 EVERLAST-A 28 Week Data Of ORKA-001 At The End Of Q3 2026",
              "url": "https://www.nasdaq.com/articles/oruka-q2-net-loss-expands-expects-phase-2-everlast-28-week-data-orka-001-end-q3-2026",
              "date": "2026-08-11",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA"
              ]
            },
            {
              "title": "Oruka Stock Is Now Up Nearly 700%. Here's What a $687,000 Insider Sale Could Mean",
              "url": "https://www.nasdaq.com/articles/oruka-stock-now-nearly-700-heres-what-687000-insider-sale-could-mean",
              "date": "2026-06-27",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA",
                "ORKA"
              ]
            },
            {
              "title": "Oruka Therapeutics' Head of Finance Sold Over 10,000 Company Shares. What Does That Mean for Investors?",
              "url": "https://www.nasdaq.com/articles/oruka-therapeutics-head-finance-sold-over-10000-company-shares-what-does-mean-investors",
              "date": "2026-06-24",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA",
                "ORKA"
              ]
            },
            {
              "title": "Oruka Therapeutics, Inc. (ORKA) Upgraded to Buy: What Does It Mean for the Stock?",
              "url": "https://www.nasdaq.com/articles/oruka-therapeutics-inc-orka-upgraded-buy-what-does-it-mean-stock",
              "date": "2026-06-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA"
              ]
            },
            {
              "title": "Wall Street Analysts Believe Oruka Therapeutics, Inc. (ORKA) Could Rally 111.13%: Here's is How to Trade",
              "url": "https://www.nasdaq.com/articles/wall-street-analysts-believe-oruka-therapeutics-inc-orka-could-rally-11113-heres-how-trade",
              "date": "2026-06-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA"
              ]
            }
          ],
          "directCount": 6,
          "total": 6,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-24",
            "reportDate": "2026-08-24",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/907654/000121390026093021/ea0302923-8k_oruka.htm",
            "description": "CURRENT REPORT"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-10",
            "reportDate": "2026-08-10",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/907654/000121390026086933/ea0301312-8k_oruka.htm",
            "description": "CURRENT REPORT"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-04",
            "reportDate": "2026-06-02",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/907654/000121390026065294/ea0293648-8k_oruka.htm",
            "description": "CURRENT REPORT"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-01",
            "reportDate": "2026-05-29",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/907654/000121390026063481/ea0292876-8k_oruka.htm",
            "description": "CURRENT REPORT"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-30",
            "reportDate": "2026-04-27",
            "items": [
              "2.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/907654/000121390026050249/ea0288461-8k_oruka.htm",
            "description": "CURRENT REPORT"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-27",
            "reportDate": "2026-04-27",
            "items": [
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/907654/000121390026047743/ea0287782-8k_oruka.htm",
            "description": "CURRENT REPORT"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "SHAZ",
      "price": 52.63999938964844,
      "marketCap": "1.88B",
      "sector": "Technology",
      "industry": "Information Technology Services",
      "rs": {
        "m1": {
          "v": -0.05187321765795316,
          "pct": 40.46931407942238
        },
        "m3": {
          "v": -0.21910700890175205,
          "pct": 7.054992764109985
        },
        "m6": {
          "v": 1.6626200389882504,
          "pct": 99.31009440813362
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.31009440813362,
      "adr": 9.84,
      "cyTrend": 736.47,
      "nyTrend": 158.5,
      "upCount": 0,
      "downCount": 7,
      "upDownRatio": 0,
      "bbwthd": null,
      "bbwthdLow": 0.36,
      "high52": 54,
      "volx": 0.79,
      "volSurgeWk": 1.4,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -19.77,
      "div200": 2.42,
      "ret1m": -5.19,
      "ret3m": -21.91,
      "ret6m": 166.26,
      "maxRise1m": 66.67,
      "maxRise3m": 149.12,
      "maxRise6m": 405.6,
      "brk60d": false,
      "clsPos": 81.46,
      "ma150Slope": null,
      "ta": {
        "price": 52.64,
        "resistance": 75.84,
        "support": 47.51,
        "contraction": 0.83,
        "trend": null
      },
      "ma150SlopeDir": null,
      "wrs": {
        "m1": 0.0517,
        "m3": -0.0533,
        "m6": 0.0202,
        "rankPct6": 64.29,
        "count": 16
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "샤로나이 홀딩스",
      "nameEn": "SHARONAI HLDGS INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "샤로나이 홀딩스",
        "nameEn": "SHARONAI HLDGS INC",
        "infomaxCode": "NAS:SHAZ",
        "financials": {
          "ok": true,
          "ticker": "SHAZ",
          "cik": "0002068385",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 1931381,
              "profit": -24784178,
              "netIncome": -428302926,
              "margin": -1283.2,
              "yoy": {
                "revenue": 412.3,
                "profit": -849.5,
                "netIncome": -16524,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 294014,
              "profit": -2819223,
              "netIncome": -19915764,
              "margin": -958.9,
              "yoy": {
                "revenue": -9.6,
                "profit": -142.8,
                "netIncome": -1290.2,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 376984,
              "profit": -2610233,
              "netIncome": -2576406,
              "margin": -692.4,
              "yoy": {
                "revenue": null,
                "profit": null,
                "netIncome": null,
                "priorEnd": null
              }
            },
            {
              "periodStart": "2025-01-01",
              "periodEnd": "2025-03-31",
              "derived": false,
              "revenue": 325092,
              "profit": -1161248,
              "netIncome": -1432580,
              "margin": -357.2,
              "yoy": {
                "revenue": null,
                "profit": null,
                "netIncome": null,
                "priorEnd": null
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002068385&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "SHAZ",
          "items": [
            {
              "title": "SharonAI (SHAZ) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/sharonai-shaz-q2-2026-earnings-call-transcript",
              "date": "2026-08-14",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SHAZ",
                "SHAZ"
              ]
            },
            {
              "title": "SharonAI Holdings, Inc. Class A Common Stock Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/sharonai-holdings-inc-class-common-stock-q2-earnings-call-highlights",
              "date": "2026-08-07",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SHAZ"
              ]
            },
            {
              "title": "SharonAI Holdings, Inc. Class A Common Stock Q1 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/sharonai-holdings-inc-class-common-stock-q1-earnings-call-highlights",
              "date": "2026-05-15",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SHAZ"
              ]
            }
          ],
          "directCount": 3,
          "total": 3,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-28",
            "reportDate": "2026-08-27",
            "items": [
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226040627/form8-k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-27",
            "reportDate": "2026-08-27",
            "items": [
              "1.01",
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226040426/form8-k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-26",
            "reportDate": "2026-08-21",
            "items": [
              "1.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226040152/form8-k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-20",
            "reportDate": "2026-08-20",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226039364/form8-k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-07",
            "reportDate": "2026-08-07",
            "items": [
              "9.01"
            ],
            "itemsKo": [
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036489/form8-k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-06",
            "reportDate": "2026-08-06",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/form8-k.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "PENG",
      "price": 47.59000015258789,
      "marketCap": "2.54B",
      "sector": "Technology",
      "industry": "Information Technology Services",
      "rs": {
        "m1": {
          "v": -0.09524711914199188,
          "pct": 22.779783393501805
        },
        "m3": {
          "v": -0.33122543980519525,
          "pct": 3.3646888567293773
        },
        "m6": {
          "v": 1.5599784702510047,
          "pct": 99.23747276688452
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.23747276688452,
      "adr": 6.3,
      "cyTrend": 14.51,
      "nyTrend": 19.03,
      "upCount": 17,
      "downCount": 2,
      "upDownRatio": 89.47,
      "bbwthd": 0.33,
      "bbwthdLow": 0.25,
      "high52": 52.96,
      "volx": 1.36,
      "volSurgeWk": 1.84,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -7.97,
      "div50": -21.05,
      "div200": 32.15,
      "ret1m": -9.52,
      "ret3m": -33.12,
      "ret6m": 156,
      "maxRise1m": 41.12,
      "maxRise3m": 106.05,
      "maxRise6m": 460.22,
      "brk60d": false,
      "clsPos": 58.14,
      "ma150Slope": 12.8,
      "ta": {
        "price": 47.59,
        "resistance": 53.27,
        "support": 43.61,
        "contraction": 0.74,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0517,
        "m3": -0.0533,
        "m6": 0.0202,
        "rankPct6": 64.29,
        "count": 16
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "펭귄 솔루션스",
      "nameEn": "PENGUIN SOLUTIONS INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "펭귄 솔루션스",
        "nameEn": "PENGUIN SOLUTIONS INC",
        "infomaxCode": "NAS:PENG",
        "financials": {
          "ok": true,
          "ticker": "PENG",
          "cik": "0001616533",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-02-28",
              "periodEnd": "2026-05-29",
              "derived": false,
              "revenue": 478713000,
              "profit": 50863000,
              "netIncome": 44689000,
              "margin": 10.6,
              "yoy": {
                "revenue": 47.6,
                "profit": 416.7,
                "netIncome": 1579.4,
                "priorEnd": "2025-05-30"
              }
            },
            {
              "periodStart": "2025-11-29",
              "periodEnd": "2026-02-27",
              "derived": false,
              "revenue": 342999000,
              "profit": 25689000,
              "netIncome": 37452000,
              "margin": 7.5,
              "yoy": {
                "revenue": -6.2,
                "profit": 38.9,
                "netIncome": 363.4,
                "priorEnd": "2025-02-28"
              }
            },
            {
              "periodStart": "2025-08-30",
              "periodEnd": "2025-11-28",
              "derived": false,
              "revenue": 343071000,
              "profit": 19582000,
              "netIncome": 5270000,
              "margin": 5.7,
              "yoy": {
                "revenue": 0.6,
                "profit": 12.8,
                "netIncome": 1,
                "priorEnd": "2024-11-29"
              }
            },
            {
              "periodStart": "2025-05-31",
              "periodEnd": "2025-08-29",
              "derived": false,
              "revenue": 337922000,
              "profit": 12448000,
              "netIncome": 9431000,
              "margin": 3.7,
              "yoy": {
                "revenue": 8.6,
                "profit": 41.6,
                "netIncome": 138.4,
                "priorEnd": "2024-08-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001616533&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "PENG",
          "items": [
            {
              "title": "PENG's Backlog Keeps Growing: Is Revenue Visibility Improving?",
              "url": "https://www.nasdaq.com/articles/pengs-backlog-keeps-growing-revenue-visibility-improving",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG",
                "DELL",
                "VRT"
              ]
            },
            {
              "title": "PENG vs. APLD: Which AI Infrastructure Stock Has Better Potential?",
              "url": "https://www.nasdaq.com/articles/peng-vs-apld-which-ai-infrastructure-stock-has-better-potential",
              "date": "2026-08-20",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "APLD",
                "PENG"
              ]
            },
            {
              "title": "Penguin Solutions' Partner Network Broadens: Is More Growth Ahead?",
              "url": "https://www.nasdaq.com/articles/penguin-solutions-partner-network-broadens-more-growth-ahead",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG",
                "SMCI",
                "HPE"
              ]
            },
            {
              "title": "Penguin Solutions Highlights AI Factory Platform, MemoryAI for Inference Growth",
              "url": "https://www.nasdaq.com/articles/penguin-solutions-highlights-ai-factory-platform-memoryai-inference-growth",
              "date": "2026-08-17",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG"
              ]
            },
            {
              "title": "Penguin's ClusterWareAI Expands: Is the Platform Strategy Paying Off?",
              "url": "https://www.nasdaq.com/articles/penguins-clusterwareai-expands-platform-strategy-paying",
              "date": "2026-07-23",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG",
                "SMCI",
                "HPE"
              ]
            },
            {
              "title": "PENG vs. DDOG: Which AI Infrastructure Stock Is the Better Buy Now?",
              "url": "https://www.nasdaq.com/articles/peng-vs-ddog-which-ai-infrastructure-stock-better-buy-now",
              "date": "2026-07-20",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DDOG",
                "PENG"
              ]
            },
            {
              "title": "Can Penguin Solutions Be the Next 10X Stock?",
              "url": "https://www.nasdaq.com/articles/can-penguin-solutions-be-next-10x-stock",
              "date": "2026-07-15",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG",
                "PENG"
              ]
            },
            {
              "title": "Penguin Raises FY26 Outlook: Is AI Demand Finally Paying Off?",
              "url": "https://www.nasdaq.com/articles/penguin-raises-fy26-outlook-ai-demand-finally-paying",
              "date": "2026-07-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG",
                "DELL",
                "ALAB"
              ]
            }
          ],
          "directCount": 9,
          "total": 11,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-17",
            "reportDate": "2026-07-13",
            "items": [
              "1.01",
              "2.03",
              "3.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "3.02",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1616533/000119312526307989/d103073d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-07",
            "reportDate": "2026-07-07",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1616533/000161653326000041/peng-20260707.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-01",
            "reportDate": "2026-05-26",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1616533/000119312526251467/d104493d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-18",
            "reportDate": "2026-05-18",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1616533/000161653326000036/peng-20260518.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-01",
            "reportDate": "2026-04-01",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1616533/000161653326000028/peng-20260401.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-01",
            "reportDate": "2026-03-30",
            "items": [
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1616533/000119312526135770/d119062d8k.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "FET",
      "price": 82.25,
      "marketCap": "0.91B",
      "sector": "Energy",
      "industry": "Oil & Gas Equipment & Services",
      "rs": {
        "m1": {
          "v": 0.1069986086367207,
          "pct": 89.85559566787003
        },
        "m3": {
          "v": 0.6316207151153652,
          "pct": 99.16787264833575
        },
        "m6": {
          "v": 0.42301039940606877,
          "pct": 88.27160493827161
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.16787264833575,
      "adr": 4.64,
      "cyTrend": 85.65,
      "nyTrend": 80.04,
      "upCount": 4,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.1,
      "high52": 94.09,
      "volx": 1.07,
      "volSurgeWk": 1.07,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 29.41,
      "div200": 56.24,
      "ret1m": 10.7,
      "ret3m": 63.16,
      "ret6m": 42.3,
      "maxRise1m": 21.96,
      "maxRise3m": 87.96,
      "maxRise6m": 87.96,
      "brk60d": false,
      "clsPos": 45.87,
      "ma150Slope": 9.96,
      "ta": {
        "price": 82.25,
        "resistance": 87.42,
        "support": 56.5,
        "contraction": 0.98,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0788,
        "m3": 0.028,
        "m6": 0.1413,
        "rankPct6": 25.71,
        "count": 12
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "포럼 에너지 테크놀로지스",
      "nameEn": "FORUM ENERGY TECHNOLOGIES INC",
      "detail": {
        "fetchedAt": "2026-08-31",
        "nameKo": "포럼 에너지 테크놀로지스",
        "nameEn": "FORUM ENERGY TECHNOLOGIES INC",
        "infomaxCode": "NYS:FET",
        "financials": {
          "ok": true,
          "ticker": "FET",
          "cik": "0001401257",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 208700000,
              "profit": 11005000,
              "netIncome": 4492000,
              "margin": 5.3,
              "yoy": {
                "revenue": 8,
                "profit": 25,
                "netIncome": 300.4,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 202200000,
              "profit": 12764000,
              "netIncome": 2072000,
              "margin": 6.3,
              "yoy": {
                "revenue": 0.6,
                "profit": 111.9,
                "netIncome": 102,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 196231000,
              "profit": -6106000,
              "netIncome": -20554000,
              "margin": -3.1,
              "yoy": {
                "revenue": -5.6,
                "profit": -168.5,
                "netIncome": -38.7,
                "priorEnd": "2024-09-30"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 199764000,
              "profit": 14683000,
              "netIncome": 7700000,
              "margin": 7.4,
              "yoy": {
                "revenue": -2.7,
                "profit": 85.1,
                "netIncome": 215,
                "priorEnd": "2024-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001401257&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "FET",
          "items": [
            {
              "title": "Forum Energy Technologies Targets $1.6B Revenue by 2030 in Five-Year Growth Plan",
              "url": "https://www.nasdaq.com/articles/forum-energy-technologies-targets-16b-revenue-2030-five-year-growth-plan",
              "date": "2026-08-27",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FET"
              ]
            },
            {
              "title": "3 Low-Beta Stocks to Minimize Portfolio Risk: VLO, PBF & FET",
              "url": "https://www.nasdaq.com/articles/3-low-beta-stocks-minimize-portfolio-risk-vlo-pbf-fet",
              "date": "2026-08-25",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "VLO",
                "PBF",
                "FET"
              ]
            },
            {
              "title": "Here's What Could Help Forum Energy (FET) Maintain Its Recent Price Strength",
              "url": "https://www.nasdaq.com/articles/heres-what-could-help-forum-energy-fet-maintain-its-recent-price-strength",
              "date": "2026-08-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FET"
              ]
            },
            {
              "title": "Forum Energy Technologies Targets $1.6B Revenue Path by 2030 at EnerCom Conference",
              "url": "https://www.nasdaq.com/articles/forum-energy-technologies-targets-16b-revenue-path-2030-enercom-conference",
              "date": "2026-08-21",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FET"
              ]
            },
            {
              "title": "3 Low-Beta Stocks to Minimize Portfolio Risk: LQDA, PBF & FET",
              "url": "https://www.nasdaq.com/articles/3-low-beta-stocks-minimize-portfolio-risk-lqda-pbf-fet",
              "date": "2026-08-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PBF",
                "FET",
                "LQDA"
              ]
            },
            {
              "title": "Forum Energy Technologies (FET) is a Great Momentum Stock: Should You Buy?",
              "url": "https://www.nasdaq.com/articles/forum-energy-technologies-fet-great-momentum-stock-should-you-buy",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FET"
              ]
            },
            {
              "title": "Is Baytex Energy (BTE) Outperforming Other Oils-Energy Stocks This Year?",
              "url": "https://www.nasdaq.com/articles/baytex-energy-bte-outperforming-other-oils-energy-stocks-year",
              "date": "2026-08-21",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "BTE",
                "FET"
              ]
            },
            {
              "title": "Top Stock Picks for Week of August 17, 2026",
              "url": "https://www.nasdaq.com/articles/top-stock-picks-week-august-17-2026",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "GNRC",
                "FET"
              ]
            }
          ],
          "directCount": 6,
          "total": 10,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-30",
            "reportDate": "2026-07-30",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1401257/000140125726000049/fet-20260730.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-12",
            "reportDate": "2026-05-08",
            "items": [
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1401257/000140125726000039/fet-20260508.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-01",
            "reportDate": "2026-04-30",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1401257/000140125726000030/fet-20260430.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-20",
            "reportDate": "2026-02-19",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1401257/000140125726000010/fet8-kearningsreleaseq42025.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-05",
            "reportDate": "2026-02-04",
            "items": [
              "1.01",
              "2.03",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1401257/000140125726000005/fet-20260204.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-12",
            "reportDate": "2026-01-12",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1401257/000140125726000002/fet-20260112.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "HCC",
      "price": 106.2300033569336,
      "marketCap": "5.65B",
      "sector": "Basic Materials",
      "industry": "Coking Coal",
      "rs": {
        "m1": {
          "v": 0.30457039751239473,
          "pct": 99.09747292418773
        },
        "m3": {
          "v": 0.0640761457761605,
          "pct": 57.41678726483358
        },
        "m6": {
          "v": 0.25655022395628824,
          "pct": 76.2164124909223
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 99.09747292418773,
      "adr": 4.86,
      "cyTrend": 3.6,
      "nyTrend": -5.27,
      "upCount": 5,
      "downCount": 11,
      "upDownRatio": 31.25,
      "bbwthd": null,
      "bbwthdLow": 0.07,
      "high52": 95.53,
      "volx": 0.7,
      "volSurgeWk": 0.71,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 20.47,
      "div200": 20.11,
      "ret1m": 30.46,
      "ret3m": 6.41,
      "ret6m": 25.66,
      "maxRise1m": 34.97,
      "maxRise3m": 46.44,
      "maxRise6m": 46.44,
      "brk60d": false,
      "clsPos": 4.56,
      "ma150Slope": 0.61,
      "ta": {
        "price": 106.23,
        "resistance": 110.39,
        "support": 92.75,
        "contraction": 0.92,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4244,
        "m3": 0.0941,
        "m6": 0.2525,
        "rankPct6": 13.57,
        "count": 2
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "워리어 멧 콜",
      "nameEn": "WARRIOR MET COAL INC",
      "detail": {
        "fetchedAt": "2026-09-01",
        "nameKo": "워리어 멧 콜",
        "nameEn": "WARRIOR MET COAL INC",
        "infomaxCode": "NYS:HCC",
        "financials": {
          "ok": true,
          "ticker": "HCC",
          "cik": "0001691303",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerIncludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 509690000,
              "profit": 94521000,
              "netIncome": 87429000,
              "margin": 18.5,
              "yoy": {
                "revenue": 71.3,
                "profit": 1123.9,
                "netIncome": 1459.6,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 458588000,
              "profit": 79368000,
              "netIncome": 72341000,
              "margin": 17.3,
              "yoy": {
                "revenue": 52.9,
                "profit": 556.6,
                "netIncome": 985.7,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 383988000,
              "profit": 34647000,
              "netIncome": 22962000,
              "margin": 9,
              "yoy": {
                "revenue": 29.1,
                "profit": 923.2,
                "netIncome": 1921.3,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 328589000,
              "profit": 20724000,
              "netIncome": 36598000,
              "margin": 6.3,
              "yoy": {
                "revenue": 0.3,
                "profit": -47,
                "netIncome": -12.4,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001691303&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "HCC",
          "items": [
            {
              "title": "Warrior Met Coal CEO Sells 50,000 Shares for $5.5 Million",
              "url": "https://www.nasdaq.com/articles/warrior-met-coal-ceo-sells-50000-shares-55-million",
              "date": "2026-08-27",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC",
                "HCC"
              ]
            },
            {
              "title": "Warrior Met Coal (HCC) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/warrior-met-coal-hcc-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC",
                "HCC"
              ]
            },
            {
              "title": "Warrior Met Coal Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/warrior-met-coal-q2-earnings-call-highlights",
              "date": "2026-08-08",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC"
              ]
            },
            {
              "title": "Warrior Met Coal (HCC) Surpasses Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/warrior-met-coal-hcc-surpasses-q2-earnings-and-revenue-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC",
                "CNR"
              ]
            },
            {
              "title": "Warrior Met Coal, Inc. Q2 Profit Climbs",
              "url": "https://www.nasdaq.com/articles/warrior-met-coal-inc-q2-profit-climbs",
              "date": "2026-08-05",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC"
              ]
            },
            {
              "title": "Warrior Met Coal (HCC) Earnings Expected to Grow: Should You Buy?",
              "url": "https://www.nasdaq.com/articles/warrior-met-coal-hcc-earnings-expected-grow-should-you-buy",
              "date": "2026-07-29",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC"
              ]
            },
            {
              "title": "Analyst Favorites: Warrior Met Coal Ranks As a Top Metals Pick",
              "url": "https://www.nasdaq.com/articles/analyst-favorites-warrior-met-coal-ranks-top-metals-pick-0",
              "date": "2026-06-24",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC"
              ]
            },
            {
              "title": "Warrior Met Coal Stock Has Soared 80%. One Investor Just Trimmed $32 Million",
              "url": "https://www.nasdaq.com/articles/warrior-met-coal-stock-has-soared-80-one-investor-just-trimmed-32-million",
              "date": "2026-05-15",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HCC",
                "HCC"
              ]
            }
          ],
          "directCount": 12,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "reportDate": "2026-08-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1691303/000119312526335017/hcc-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-30",
            "reportDate": "2026-04-30",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1691303/000119312526197165/hcc-20260430.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-21",
            "reportDate": "2026-04-20",
            "items": [
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1691303/000169130326000011/hcc-20260420.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-12",
            "reportDate": "2026-02-12",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1691303/000119312526048678/hcc-20260212.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-16",
            "reportDate": "2025-11-25",
            "items": [
              "1.01",
              "2.03"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1691303/000119312526015506/d39650d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-05",
            "reportDate": "2025-11-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1691303/000119312525266870/hcc-20251105.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "WGS",
      "price": 84.80999755859375,
      "marketCap": "2.57B",
      "sector": "Healthcare",
      "industry": "Diagnostics & Research",
      "rs": {
        "m1": {
          "v": 0.19619175928561322,
          "pct": 96.93140794223827
        },
        "m3": {
          "v": 0.6244014373832155,
          "pct": 99.09551374819102
        },
        "m6": {
          "v": -0.0034077664010244728,
          "pct": 29.01234567901235
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.09551374819102,
      "adr": 5.67,
      "cyTrend": 15.91,
      "nyTrend": -5.08,
      "upCount": 4,
      "downCount": 12,
      "upDownRatio": 25,
      "bbwthd": null,
      "bbwthdLow": 0.18,
      "high52": 49.63,
      "volx": 0.62,
      "volSurgeWk": 0.69,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 18.85,
      "div200": -0.75,
      "ret1m": 19.62,
      "ret3m": 62.44,
      "ret6m": -0.34,
      "maxRise1m": 39.62,
      "maxRise3m": 78.18,
      "maxRise6m": 184.94,
      "brk60d": false,
      "clsPos": 68.24,
      "ma150Slope": -7.01,
      "ta": {
        "price": 84.81,
        "resistance": 89.11,
        "support": 81.55,
        "contraction": 0.73,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.0596,
        "m3": 0.2342,
        "m6": 0.2909,
        "rankPct6": 10,
        "count": 22
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "진DX 홀딩스",
      "nameEn": "GENEDX HOLDINGS CORP",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "진DX 홀딩스",
        "nameEn": "GENEDX HOLDINGS CORP",
        "infomaxCode": "NAS:WGS",
        "financials": {
          "ok": true,
          "ticker": "WGS",
          "cik": "0001818331",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 114440000,
              "profit": -17455000,
              "netIncome": -17740000,
              "margin": -15.3,
              "yoy": {
                "revenue": 11.4,
                "profit": -294.8,
                "netIncome": -264.1,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 102254000,
              "profit": -57471000,
              "netIncome": -63316000,
              "margin": -56.2,
              "yoy": {
                "revenue": 17.4,
                "profit": -1162.8,
                "netIncome": -869.8,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 120989000,
              "profit": -14235000,
              "netIncome": -17645000,
              "margin": -11.8,
              "yoy": {
                "revenue": 26.5,
                "profit": -261.7,
                "netIncome": -425.3,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 116743000,
              "profit": -3251000,
              "netIncome": -7635000,
              "margin": -2.8,
              "yoy": {
                "revenue": 51.9,
                "profit": 58.2,
                "netIncome": 8.1,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001818331&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "WGS",
          "items": [
            {
              "title": "GeneDx Study Supports Hospital-Wide Adoption Of Rapid Genome Sequencing In Pediatric Care",
              "url": "https://www.nasdaq.com/articles/genedx-study-supports-hospital-wide-adoption-rapid-genome-sequencing-pediatric-care",
              "date": "2026-08-24",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS"
              ]
            },
            {
              "title": "Can GENEDX HOLDINGS (WGS) Run Higher on Rising Earnings Estimates?",
              "url": "https://www.nasdaq.com/articles/can-genedx-holdings-wgs-run-higher-rising-earnings-estimates",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS"
              ]
            },
            {
              "title": "GeneDx (WGS) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/genedx-wgs-q2-2026-earnings-call-transcript",
              "date": "2026-08-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS",
                "WGS"
              ]
            },
            {
              "title": "GeneDx Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/genedx-q2-earnings-call-highlights",
              "date": "2026-08-03",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS"
              ]
            },
            {
              "title": "GeneDx Holdings Corp. (WGS) Q2 Earnings and Revenues Surpass Estimates",
              "url": "https://www.nasdaq.com/articles/genedx-holdings-corp-wgs-q2-earnings-and-revenues-surpass-estimates",
              "date": "2026-08-03",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS",
                "VTRS"
              ]
            },
            {
              "title": "What a $227,000 GeneDx Insider Sale Means as Revenue Climbs 17%",
              "url": "https://www.nasdaq.com/articles/what-227000-genedx-insider-sale-means-revenue-climbs-17",
              "date": "2026-06-23",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS",
                "WGS"
              ]
            },
            {
              "title": "Hedge Funder Eli Casdin Is Loading up on GeneDx Shares",
              "url": "https://www.nasdaq.com/articles/hedge-funder-eli-casdin-loading-genedx-shares",
              "date": "2026-06-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS",
                "WGS"
              ]
            },
            {
              "title": "Is GeneDx Stock a Buys After a Company Director Purchased Over 350,000 Shares?",
              "url": "https://www.nasdaq.com/articles/genedx-stock-buys-after-company-director-purchased-over-350000-shares",
              "date": "2026-05-21",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS",
                "WGS"
              ]
            }
          ],
          "directCount": 9,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-03",
            "reportDate": "2026-08-03",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1818331/000162828026051852/wgs-20260803.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-23",
            "reportDate": "2026-06-18",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1818331/000162828026044806/wgs-20260618.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-16",
            "reportDate": "2026-06-15",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1818331/000162828026043431/wgs-20260615.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-04",
            "reportDate": "2026-05-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1818331/000181833126000039/wgs-20260504.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-02",
            "reportDate": "2026-02-27",
            "items": [
              "1.01",
              "1.02",
              "2.03"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "1.02",
              "2.03"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1818331/000181833126000021/wgs-20260227.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-23",
            "reportDate": "2026-02-23",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1818331/000181833126000014/wgs-20260223.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 2,
          "reports": [
            {
              "title": "[진DX 홀딩스 (NAS:WGS)] 대 AI 시대, 유전자를 읽어라",
              "broker": "키움증권",
              "analyst": "신민수",
              "date": "2026-02-27",
              "summary": "- WGS(전장 유전체 시퀀싱) 기술 기반 희귀 질환 진단, 신약 개발까지 노리는 기업- 보험 지역 확장에 따른 Q 증가, 보험 지급률 상승 및 매출 믹스 개선으로 P 상승- 지난 1월 기대치 하회하는 가이던스 제시 있었으나 목표 달성에는 무리 없는 상황",
              "pages": "7",
              "secureId": "eqqgezeeieeimxmgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgezeeieeimxmgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[진DX 홀딩스 (NAS:WGS)] 여전히 기대되는 성장 가능성",
              "broker": "iM증권",
              "analyst": "정재원",
              "date": "2025-09-12",
              "summary": "- 2분기 동사는 1억달러의 매출을 기록했으며 전년동기 대비 49%  성장하는 호실적을 달성했다- 향후  기대되는  시너지는  동사가  확보한  75만건  이상  누적된  희귀질환  유전체 데이터셋과  Fabric이  가진  해석  플랫폼을  통해  새로운  비즈니스  모델  및  신규 시장 진출이 용이할 것으로 전망한다- 현재 Fabric 플랫폼은 interpretation-as-a-service 모델로 해석 기술의 고도화를 동사의  데이터셋을  통해  이끌어낼  수  있을  것으로  기대된다",
              "pages": "6",
              "secureId": "eqzqxigeiizkxlxgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzqxigeiizkxlxgcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "SNDK",
      "price": 1536.8699951171875,
      "marketCap": "217.43B",
      "sector": "Technology",
      "industry": "Computer Hardware",
      "rs": {
        "m1": {
          "v": 0.07652596655528919,
          "pct": 85.74007220216606
        },
        "m3": {
          "v": -0.014397270569970179,
          "pct": 35.85383502170767
        },
        "m6": {
          "v": 1.344827078850852,
          "pct": 99.09222948438635
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.09222948438635,
      "adr": 7.64,
      "cyTrend": 0.7,
      "nyTrend": 6.56,
      "upCount": 36,
      "downCount": 15,
      "upDownRatio": 70.59,
      "bbwthd": 0.42,
      "bbwthdLow": 0.37,
      "high52": 65.28,
      "volx": 0.85,
      "volSurgeWk": 0.99,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 0.37,
      "div50": -2.58,
      "div200": 56.26,
      "ret1m": 7.65,
      "ret3m": -1.44,
      "ret6m": 134.48,
      "maxRise1m": 57.17,
      "maxRise3m": 135.87,
      "maxRise6m": 321.49,
      "brk60d": false,
      "clsPos": 24.71,
      "ma150Slope": 13.72,
      "ta": {
        "price": 1536.87,
        "resistance": 1600,
        "support": 1514.36,
        "contraction": 0.79,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.04,
        "m3": 0.0441,
        "m6": 1.0943,
        "rankPct6": 0.71,
        "count": 8
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "샌디스크",
      "nameEn": "SANDISK CORP",
      "detail": {
        "fetchedAt": "2026-08-28",
        "nameKo": "샌디스크",
        "nameEn": "SANDISK CORP",
        "infomaxCode": "NAS:SNDK",
        "financials": {
          "ok": true,
          "ticker": "SNDK",
          "cik": "0002023554",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-03",
              "periodEnd": "2026-04-03",
              "derived": false,
              "revenue": 5950000000,
              "profit": 4111000000,
              "netIncome": 3615000000,
              "margin": 69.1,
              "yoy": {
                "revenue": 251,
                "profit": 318.6,
                "netIncome": 287,
                "priorEnd": "2025-03-28"
              }
            },
            {
              "periodStart": "2025-10-04",
              "periodEnd": "2026-01-02",
              "derived": false,
              "revenue": 3025000000,
              "profit": 1065000000,
              "netIncome": 803000000,
              "margin": 35.2,
              "yoy": {
                "revenue": 61.2,
                "profit": 446.2,
                "netIncome": 672.1,
                "priorEnd": "2024-12-27"
              }
            },
            {
              "periodStart": "2025-06-28",
              "periodEnd": "2025-10-03",
              "derived": false,
              "revenue": 2308000000,
              "profit": 176000000,
              "netIncome": 112000000,
              "margin": 7.6,
              "yoy": {
                "revenue": 22.6,
                "profit": -39.5,
                "netIncome": -46.9,
                "priorEnd": "2024-09-27"
              }
            },
            {
              "periodStart": "2025-03-28",
              "periodEnd": "2025-06-27",
              "derived": true,
              "revenue": 1901000000,
              "profit": 18000000,
              "netIncome": -23000000,
              "margin": 0.9,
              "yoy": {
                "revenue": 8,
                "profit": -91,
                "netIncome": -119.2,
                "priorEnd": "2024-06-28"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002023554&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "SNDK",
          "items": [
            {
              "title": "KLAC vs. SNDK: Which Semiconductor Stock is a Better Buy Now?",
              "url": "https://www.nasdaq.com/articles/klac-vs-sndk-which-semiconductor-stock-better-buy-now",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "KLAC"
              ]
            },
            {
              "title": "Kioxia Plans Over $31 Bln Japan Investment With Sandisk",
              "url": "https://www.nasdaq.com/articles/kioxia-plans-over-31-bln-japan-investment-sandisk",
              "date": "2026-08-27",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK"
              ]
            },
            {
              "title": "This Hedge Fund Just Sold Sandisk and Bought Taiwan Semiconductor Manufacturing Stock. Does Wall Street Agree With the Move?",
              "url": "https://www.nasdaq.com/articles/hedge-fund-just-sold-sandisk-and-bought-taiwan-semiconductor-manufacturing-stock-does-wall",
              "date": "2026-08-27",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "SNDK",
                "TSM"
              ]
            },
            {
              "title": "Sandisk vs. Micron: Which Memory Stock Has the Best Risk/Reward?",
              "url": "https://www.nasdaq.com/articles/sandisk-vs-micron-which-memory-stock-has-best-risk-reward",
              "date": "2026-08-25",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "MU",
                "SNDK"
              ]
            },
            {
              "title": "Why Sandisk Stock Popped, Then Dropped Today",
              "url": "https://www.nasdaq.com/articles/why-sandisk-stock-popped-then-dropped-today",
              "date": "2026-08-25",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "SNDK"
              ]
            },
            {
              "title": "Here's Why Sandisk Corporation (SNDK) is a Strong Momentum Stock",
              "url": "https://www.nasdaq.com/articles/heres-why-sandisk-corporation-sndk-strong-momentum-stock",
              "date": "2026-08-25",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK"
              ]
            },
            {
              "title": "3 Storage Devices Stocks to Buy as the Industry Gains Momentum",
              "url": "https://www.nasdaq.com/articles/3-storage-devices-stocks-buy-industry-gains-momentum",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "SNDK",
                "WDC",
                "SMCI"
              ]
            }
          ],
          "directCount": 6,
          "total": 7,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "reportDate": "2026-08-05",
            "items": [
              "2.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndk-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-15",
            "reportDate": "2026-05-14",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2023554/000119312526224694/d157363d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-30",
            "reportDate": "2026-04-30",
            "items": [
              "2.02",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026028879/sndk-20260430.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-25",
            "reportDate": "2026-03-25",
            "items": [
              "1.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2023554/000119312526122705/d136592d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-29",
            "reportDate": "2026-01-29",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026004121/sndk-20260129.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-02",
            "reportDate": "2025-12-30",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026000127/sndk-20251230.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 6,
          "reports": [
            {
              "title": "[샌디스크 (NAS:SNDK)] [Issue & News] 투자자의 날에서 물량 성장·HBF 로드맵 공개 - 가격 사이클 이후 성장동력 다각화 신호",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-14",
              "summary": "- 투자자의날서 물량 두자릿수 중후반 성장·HBF 로드맵 공개- 8개 고객사 총계약가치 939억달러, NBM 계약 흐름과 결 같아- 가격기여·마진 고원 리스크는 여전, 방향성 제시 수준",
              "pages": "5",
              "secureId": "eqlxxxxkgkmlcklgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxxxxkgkmlcklgcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-08-06",
              "summary": "- 매출액 89.7억 달러(YOY +371.6%), 영업이익 70.4억 달러(YoY +38,994.4%), 조정 EPS 39.3 달러 (YoY +13,434.5%)로 각각 예상치 3.8%, 9.7%, 14.2% 상회- 2분기 자사주 45.2억 달러 매입. 140억 달러 추가 자사주 매입 승인으로 잔여 한도 155억 달러로 확대- 가격 상승폭 둔화와 NBM 계약으로 인해 판매량 증가율이 둔화된다는 가이던스에 따라 시간 외 8% 하락",
              "pages": "1",
              "secureId": "eqlxcczlkqixekegcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxcczlkqixekegcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] [26Q4 Review] 마진 상향의 시대가 끝났다, 투자의견 중립 신규",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-05",
              "summary": "- Q4 매출 $8.97B·비GAAP EPS $39.25로 컨센 상회- Q1 매출 가이던스 컨센 하회, 시간외 11% 하락- 자사주 잔여한도 $15.5B, NTM PER 6.8배",
              "pages": "7",
              "secureId": "eqlzmqeqgkxgcligcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzmqeqgkxgcligcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] 과소평가된 NAND 업황",
              "broker": "신한투자증권",
              "analyst": "김형태, 송혜수",
              "date": "2026-05-04",
              "summary": "- NAND 턴어라운드 3Q25부터 가속화. 단기 모멘텀이 아닌 구조적 변화로 해석. AI 추론 수요와 동행하는 SSD 호황 장기화 기대. 엔비디아의 DPU 를 비롯한 SSD 활용 시도 다각화 전망. 단순 데이터 저장 용도가 아닌 추 론 보조 연산 역할로 급부상 → 공급 부족 심화 구간 진입- 매출 59.5억달러(+97%, 전분기대비), EPS 23.41달러로 컨센서스를 각각 26.5%, 61% 상회. 부문별 실적은 데이터센터 14.7억달러(+233.4%), 엣지 36.6억달러(+118.3%), 컨슈머 8.2억달러(-9.6%)로 엔터프라이즈향 SSD 수요가 실적 견인. 지난 분기부터 높아졌던 추정치를 대폭 상회하며 업황 호조 재차 증명. 구속력 있는 장기 계약 확대로 외형 성장 가시성도 확보- FY4Q26 가이던스 매출 80억달러, EPS 31.50달러로 컨센서스(65억달러, 22.83달러) 대폭 상회. 장기 계약 3건 기준 최소 계약 매출 420억달러. 100억달러 수준의 금융 보증 포함. FY2027 예정된 출하 물량 1/3이 장기 계약 구조로 공급 예정. 가격은 단기 고정, 장기 변동 반영 구조. 가격 상 승세 지속, 고부가 제품 비중 확대 → 매출총이익률 가이던스 80% 제시",
              "pages": "4",
              "secureId": "eqqqlzeiqkxliligcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqqlzeiqkxliligcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] eSSD 수요 전망치 상향",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2025-11-11",
              "summary": "- 3Q25CY 실적 기대치 상회, 4Q25CY 가이던스도 컨센서스 크게 상회- 2026년 eSSD 수요 전망치 기존 +24~26%YoY에서 +44~46%YoY로 상향- 당분간 NAND의 가격 상승 흐름 이어질 것으로 판단함",
              "pages": "6",
              "secureId": "eqxgleleqqmllqqgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxgleleqqmllqqgcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2025-11-07",
              "summary": "- 매출액 23.1억 달러(YoY +22.6%), 조정 EPS 1.22 달러(YoY -33.3%)로 각각 예상치 7.2%, 37.1% 상회- 수요가 공급을 초과함에 따라 재고 회전일수가 135일에서 115일로 감소- 실적 예상 대폭 상회. 주요 클라우드 기업들의 CAPEX 확대 지속되며 스토리지 수요 증가 기대감 확산. 시간 외 6.9% 상승",
              "pages": "1",
              "secureId": "eqxgkmcgqcqeqzlgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxgkmcgqcqeqzlgcgxclgq.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ESTC",
      "price": 92.38999938964844,
      "marketCap": "10.50B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 0.3001689074569228,
          "pct": 99.02527075812274
        },
        "m3": {
          "v": 0.4952257326546107,
          "pct": 98.22720694645442
        },
        "m6": {
          "v": 0.7481551950259522,
          "pct": 95.60639070442993
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo"
      ],
      "bestPct": 99.02527075812274,
      "adr": 4.84,
      "cyTrend": 3.5,
      "nyTrend": 1.97,
      "upCount": 5,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.13,
      "high52": 90.21,
      "volx": 1.13,
      "volSurgeWk": 0.76,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 33.71,
      "div200": 45.22,
      "ret1m": 30.02,
      "ret3m": 49.52,
      "ret6m": 74.82,
      "maxRise1m": 54.08,
      "maxRise3m": 93.1,
      "maxRise6m": 143.57,
      "brk60d": false,
      "clsPos": 5.74,
      "ma150Slope": 1.63,
      "ta": {
        "price": 92.39,
        "resistance": 92.95,
        "support": 89.15,
        "contraction": 0.9,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1126,
        "m3": 0.2082,
        "m6": 0.2429,
        "rankPct6": 15,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "엘라스틱",
      "nameEn": "ELASTIC N V",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "엘라스틱",
        "nameEn": "ELASTIC N V",
        "infomaxCode": "NYS:ESTC",
        "financials": {
          "ok": true,
          "ticker": "ESTC",
          "cik": "0001707753",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-01-31",
              "periodEnd": "2026-04-30",
              "derived": true,
              "revenue": 450681000,
              "profit": -16411000,
              "netIncome": 435900000,
              "margin": -3.6,
              "yoy": {
                "revenue": 16,
                "profit": -36.5,
                "netIncome": 2761,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodStart": "2025-11-01",
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
              "periodStart": "2025-08-01",
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
            },
            {
              "periodStart": "2025-05-01",
              "periodEnd": "2025-07-31",
              "derived": false,
              "revenue": 415288000,
              "profit": -9440000,
              "netIncome": -24603000,
              "margin": -2.3,
              "yoy": {
                "revenue": 19.5,
                "profit": 72.1,
                "netIncome": 50,
                "priorEnd": "2024-07-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "ESTC",
          "items": [
            {
              "title": "Is Elastic (ESTC) Stock Outpacing Its Computer and Technology Peers This Year?",
              "url": "https://www.nasdaq.com/articles/elastic-estc-stock-outpacing-its-computer-and-technology-peers-year",
              "date": "2026-09-01",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC",
                "CGNX"
              ]
            },
            {
              "title": "Elastic (ESTC) Q1 2027 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/elastic-estc-q1-2027-earnings-call-transcript",
              "date": "2026-08-31",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC",
                "ESTC"
              ]
            },
            {
              "title": "Why Elastic Stock Snapped Back Today",
              "url": "https://www.nasdaq.com/articles/why-elastic-stock-snapped-back-today",
              "date": "2026-08-29",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC",
                "ESTC"
              ]
            },
            {
              "title": "Elastic Reaches Analyst Target Price",
              "url": "https://www.nasdaq.com/articles/elastic-reaches-analyst-target-price",
              "date": "2026-08-28",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC"
              ]
            },
            {
              "title": "Elastic Q1 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/elastic-q1-earnings-call-highlights",
              "date": "2026-08-27",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC"
              ]
            },
            {
              "title": "Compared to Estimates, Elastic (ESTC) Q1 Earnings: A Look at Key Metrics",
              "url": "https://www.nasdaq.com/articles/compared-estimates-elastic-estc-q1-earnings-look-key-metrics",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC"
              ]
            },
            {
              "title": "Elastic (ESTC) Tops Q1 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/elastic-estc-tops-q1-earnings-and-revenue-estimates",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC",
                "DOCU"
              ]
            },
            {
              "title": "Elastic (ESTC) is a Top-Ranked Momentum Stock: Should You Buy?",
              "url": "https://www.nasdaq.com/articles/elastic-estc-top-ranked-momentum-stock-should-you-buy",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ESTC"
              ]
            }
          ],
          "directCount": 11,
          "total": 11,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-27",
            "reportDate": "2026-08-24",
            "items": [
              "5.02",
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000036/estc-20260824.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-27",
            "reportDate": "2026-08-27",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000035/estc-20260827.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-24",
            "reportDate": "2026-06-18",
            "items": [
              "2.05",
              "5.02"
            ],
            "itemsKo": [
              "2.05",
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000024/estc-20260618.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-28",
            "reportDate": "2026-05-28",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000008/estc-20260528.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-26",
            "reportDate": "2026-02-26",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000003/estc-20260226.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-20",
            "reportDate": "2025-11-20",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775325000053/estc-20251120.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MRVL",
      "price": 210.38999938964844,
      "marketCap": "194.68B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": -0.03751313914460591,
          "pct": 47.978339350180505
        },
        "m3": {
          "v": -0.20126810049429655,
          "pct": 7.995658465991316
        },
        "m6": {
          "v": 1.328032243002055,
          "pct": 99.01960784313727
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.01960784313727,
      "adr": 6,
      "cyTrend": 3.58,
      "nyTrend": 6.46,
      "upCount": 10,
      "downCount": 1,
      "upDownRatio": 90.91,
      "bbwthd": 0.24,
      "bbwthdLow": 0.23,
      "high52": 63.79,
      "volx": 0.81,
      "volSurgeWk": 0.69,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -9.32,
      "div50": -6.33,
      "div200": 40.45,
      "ret1m": -3.75,
      "ret3m": -20.13,
      "ret6m": 132.8,
      "maxRise1m": 26.91,
      "maxRise3m": 102.45,
      "maxRise6m": 287.7,
      "brk60d": false,
      "clsPos": 99.39,
      "ma150Slope": 12.32,
      "ta": {
        "price": 210.39,
        "resistance": 300,
        "support": 177.95,
        "contraction": 0.99,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0248,
        "m3": -0.0035,
        "m6": 0.3779,
        "rankPct6": 5.71,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "마벨 테크놀로지 그룹",
      "nameEn": "MARVELL TECHNOLOGY INC",
      "detail": {
        "fetchedAt": "2026-09-01",
        "nameKo": "마벨 테크놀로지 그룹",
        "nameEn": "MARVELL TECHNOLOGY INC",
        "infomaxCode": "NAS:MRVL",
        "financials": {
          "ok": true,
          "ticker": "MRVL",
          "cik": "0001835632",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-02-01",
              "periodEnd": "2026-05-02",
              "derived": false,
              "revenue": 2417800000,
              "profit": 339400000,
              "netIncome": 34500000,
              "margin": 14,
              "yoy": {
                "revenue": 27.6,
                "profit": 25.4,
                "netIncome": -80.6,
                "priorEnd": "2025-05-03"
              }
            },
            {
              "periodStart": "2025-11-01",
              "periodEnd": "2026-01-31",
              "derived": true,
              "revenue": 2218700000,
              "profit": 404400000,
              "netIncome": 396100000,
              "margin": 18.2,
              "yoy": {
                "revenue": 22.1,
                "profit": 71.9,
                "netIncome": 97.9,
                "priorEnd": "2025-02-01"
              }
            },
            {
              "periodStart": "2025-08-03",
              "periodEnd": "2025-11-01",
              "derived": false,
              "revenue": 2074500000,
              "profit": 357800000,
              "netIncome": 1901300000,
              "margin": 17.2,
              "yoy": {
                "revenue": 36.8,
                "profit": 150.9,
                "netIncome": 381.1,
                "priorEnd": "2024-11-02"
              }
            },
            {
              "periodStart": "2025-05-04",
              "periodEnd": "2025-08-02",
              "derived": false,
              "revenue": 2006100000,
              "profit": 290100000,
              "netIncome": 194800000,
              "margin": 14.5,
              "yoy": {
                "revenue": 57.6,
                "profit": 388.9,
                "netIncome": 200.8,
                "priorEnd": "2024-08-03"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001835632&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MRVL",
          "items": [
            {
              "title": "LITE's AI Optics Push Boosts Growth Prospects Against MRVL & NVDA",
              "url": "https://www.nasdaq.com/articles/lites-ai-optics-push-boosts-growth-prospects-against-mrvl-nvda",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "LITE",
                "NVDA",
                "MRVL"
              ]
            },
            {
              "title": "Wall Street Analysts Believe Marvell (MRVL) Could Rally 34.31%: Here's is How to Trade",
              "url": "https://www.nasdaq.com/articles/wall-street-analysts-believe-marvell-mrvl-could-rally-3431-heres-how-trade",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL"
              ]
            },
            {
              "title": "Marvell (MRVL) Q2 2027 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/marvell-mrvl-q2-2027-earnings-call-transcript",
              "date": "2026-08-31",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL",
                "MRVL"
              ]
            },
            {
              "title": "Marvell (MRVL) International Revenue Performance Explored",
              "url": "https://www.nasdaq.com/articles/marvell-mrvl-international-revenue-performance-explored",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL"
              ]
            },
            {
              "title": "Is Marvell Stock a Buy on the Dip as AI Revenue Soars?",
              "url": "https://www.nasdaq.com/articles/marvell-stock-buy-dip-ai-revenue-soars",
              "date": "2026-08-31",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL",
                "MRVL"
              ]
            },
            {
              "title": "Marvell's AI Bookings Are Stellar. But Its Gross Margin Guide Is What Moved the Stock.",
              "url": "https://www.nasdaq.com/articles/marvells-ai-bookings-are-stellar-its-gross-margin-guide-what-moved-stock",
              "date": "2026-08-29",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL",
                "MRVL"
              ]
            },
            {
              "title": "Marvell (MRVL) Stock Falls 10% After Q2 Earnings: Buy the Dip?",
              "url": "https://www.nasdaq.com/articles/marvell-mrvl-stock-falls-10-after-q2-earnings-buy-dip",
              "date": "2026-08-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL",
                "GOOGL"
              ]
            },
            {
              "title": "Stock Market Today, Aug. 28: Marvell Slides 10% on Softer Fiscal 2028 Guidance and Google Deal Timing",
              "url": "https://www.nasdaq.com/articles/stock-market-today-aug-28-marvell-slides-10-softer-fiscal-2028-guidance-and-google-deal",
              "date": "2026-08-28",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL",
                "MRVL"
              ]
            }
          ],
          "directCount": 8,
          "total": 8,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-27",
            "reportDate": "2026-08-27",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/mrvl-20260827.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-19",
            "reportDate": "2026-08-18",
            "items": [
              "1.01",
              "3.02",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "3.02",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526356217/d412696d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-09",
            "reportDate": "2026-07-09",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526299843/d82462d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-25",
            "reportDate": "2026-06-25",
            "items": [
              "5.07",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "주주총회 표결",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000162828026045564/mrvl-20260625.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-11",
            "reportDate": "2026-06-10",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526267688/d151562d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-27",
            "reportDate": "2026-05-27",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000014/mrvl-20260527.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 9,
          "reports": [
            {
              "title": "[마벨 테크놀로지 그룹 (NAS:MRVL)] 10월 도파민이 필요하다",
              "broker": "하나증권",
              "analyst": "강재구",
              "date": "2026-08-28",
              "summary": "- 단기 주가 약세 가능성. 10월 투자자의 날 행사가 중요- 컨센서스 상회한 FY 2Q27 실적- 시장 예상보다 강한 FY 3Q27 가이던스. 연간 매출 가이던스 상향",
              "pages": "6",
              "secureId": "eqlqlmzgqimxqkcgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqlmzgqimxqkcgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마벨 테크놀로지 그룹 (NAS:MRVL)] [27Q2 Review] 데이터센터 재가속, 마진은 숙제, 투자의견 매수 유지",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-27",
              "summary": "- 매출 27.39억달러, DC +46%로 순차 13.3% 가속- FY27 120억·FY28 180억달러, 다섯 번째 상향- 3분기 총마진 58.0% 가이던스로 90bp 후퇴",
              "pages": "7",
              "secureId": "eqlqlqkllqllkqxgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqlqkllqllkqxgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마벨 테크놀로지 그룹 (NAS:MRVL)] [Issue & News] 구글과 커스텀 반도체 상업 계약 체결, 워런트 5,897만 주 발행 - 대형 고객에 지분 인센티브 얹은 장기 록인",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-19",
              "summary": "- 구글과 7월29일 커스텀 반도체 상업계약 체결- 워런트 최대 5,897만주, 행사가 206.58달러- 1년 확정베스팅 544만주뿐, 잔여조건 미공개",
              "pages": "5",
              "secureId": "eqlqeqmkggkqgezgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqeqmkggkqgezgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마벨 테크놀로지 그룹 (NAS:MRVL)] [27Q2 Preview] 150% 오른 주가, 이번엔 숫자가 따라올까, 투자의견 매수 하향",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-19",
              "summary": "- 마벨 8월 28일 실적, 핵심은 매출보다 성장 재가속 속도 확인- 이번 분기 매출 가이던스 27억달러로 전분기 대비 12% 성장, 성장 재가속 지속 여부가 핵심- 데이터센터 비중 75.7%, 인터커넥트 성장 목표 70% 이상으로 상향, 하반기 30억달러 매출의 선행 신호",
              "pages": "5",
              "secureId": "eqlqcmizcxigmeggcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqcmizcxigmeggcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] AI 네트워크 병목 공략 본격화",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-05-28",
              "summary": "- 단순 광 DSP 업체를 넘어, 광연결-스위칭-XPU를 결합한 AI 인프라 연결 플랫폼으로 진화. 12MF P/E 43배의 멀티플을 실적을 통해 입증할 전망- FY1Q27 매출액 24.2억(YoY+27.6%, 이하 전년동기대비), Non-GAAP 영업이익 8.5억달러(+30.8%)를 기록하며 컨센서스에 부합. 데이터센터향 매출이 18.3억달러(+27.2%)로 전체의 76%를 기록- AI 데이터센터 연결 병목 해결을 위해 핵심 기술들을 확보. 2월 Celestial AI 인수로 광 기반 포토닉 패브릭과 Scale-up 광연결 역량 확보. XConn 인수는 PCIe, *CXL 스위치와 UALink 스케일업 스위칭 로드맵 보강",
              "pages": "5",
              "secureId": "eqqmmzqxzcxkqgcgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqmmzqxzcxkqgcgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] Custom Chip 부문 실적 강세 전환 예상",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2025-12-05",
              "summary": "- 3Q25CY 실적 기대치 부합, 4Q25CY 가이던스 역시 장 컨센서스 부합- 다만 커스텀 부문의 성장세가 가속화되며, 2027년 2배 수준의 성장을 보일 전망- ASIC 시장 성장과 함께, Marvell의 실적 성장 및 주가 상승세 이어질 것으로 판단",
              "pages": "6",
              "secureId": "eqxkmekziimlmgxgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkmekziimlmgxgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] 주목할 만한 비즈니스 로드맵",
              "broker": "신한투자증권",
              "analyst": "김형태, 송혜수",
              "date": "2025-12-03",
              "summary": "- 단기 실적 기대감은 높지 않겠으나 미래 성장 동력에 주목- FY3Q26 Review: 실적은 예상 부합, 중장기 사업 계획이 서프라이즈- 2023~28년 연평균성장률 +50% 언급. 데이터센터 애플리케이션 강화",
              "pages": "4",
              "secureId": "eqxkqzqzckqcgzqgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkqzqzckqcgzqgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2025-12-03",
              "summary": "- 매출액 20.8억 달러(YoY +36.8%)로 예상치 0.6% 상회, 가이던스 중간값 대비 1,500만 달러 높은 수치로 사상 최고치 기록- Non-GAAP 매출총이익률은 59.7%(YoY -0.8%p), 영업이익률은 36.3%(YoY +6.6%p) 기록- 2분기 연속 사상 최대 실적 달성. *예상을 상회하는 향후 2개 회계연도의 데이터센터 성장 전망 제시. 시간 외 8.7% 상승",
              "pages": "1",
              "secureId": "eqxkqixmiqgqqmkgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkqixmiqgqqmkgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] Custom Chip 부문 실적 부진 우려",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2025-09-01",
              "summary": "- 2Q25CY 실적 기대치 부합, 3Q25 매출액 가이던스는 시장 컨센서스 소폭 하회- 그러나, Data Center 부문의 매출액 가이던스가 컨센서스를 크게 하회- 그 원인도 custom chip 실적 부진이라고 언급돼, 당분간 주가의 기간 조정 예상",
              "pages": "5",
              "secureId": "eqzxxmeczkikgzlgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzxxmeczkikgzlgcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "QLYS",
      "price": 177.00999450683594,
      "marketCap": "6.47B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": 0.09903139941647873,
          "pct": 88.70036101083032
        },
        "m3": {
          "v": 0.6106459695103297,
          "pct": 98.9507959479016
        },
        "m6": {
          "v": 0.8312640989090266,
          "pct": 96.62309368191721
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.9507959479016,
      "adr": 4.78,
      "cyTrend": 2.7,
      "nyTrend": 1.74,
      "upCount": 61,
      "downCount": 12,
      "upDownRatio": 83.56,
      "bbwthd": null,
      "bbwthdLow": 0.12,
      "high52": 87.83,
      "volx": 1.15,
      "volSurgeWk": 1.41,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 11,
      "div200": 42.85,
      "ret1m": 9.9,
      "ret3m": 61.06,
      "ret6m": 83.13,
      "maxRise1m": 16.67,
      "maxRise3m": 88.8,
      "maxRise6m": 170.49,
      "brk60d": false,
      "clsPos": 6.49,
      "ma150Slope": 5.93,
      "ta": {
        "price": 177.01,
        "resistance": 196.72,
        "support": 140.31,
        "contraction": 0.73,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0179,
        "m3": 0.1678,
        "m6": 0.3106,
        "rankPct6": 9.29,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "퀄리스",
      "nameEn": "QUALYS INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "퀄리스",
        "nameEn": "QUALYS INC",
        "infomaxCode": "NAS:QLYS",
        "financials": {
          "ok": true,
          "ticker": "QLYS",
          "cik": "0001107843",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 182175000,
              "profit": 61902000,
              "netIncome": 52405000,
              "margin": 34,
              "yoy": {
                "revenue": 11,
                "profit": 20.4,
                "netIncome": 10.8,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 175638000,
              "profit": 60885000,
              "netIncome": 50643000,
              "margin": 34.7,
              "yoy": {
                "revenue": 9.8,
                "profit": 17.6,
                "netIncome": 6.5,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 175282000,
              "profit": 58835000,
              "netIncome": 53130000,
              "margin": 33.6,
              "yoy": {
                "revenue": 10.1,
                "profit": 19.1,
                "netIncome": 20.8,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 169882000,
              "profit": 59955000,
              "netIncome": 50346000,
              "margin": 35.3,
              "yoy": {
                "revenue": 10.4,
                "profit": 33.4,
                "netIncome": 8.9,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001107843&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "QLYS",
          "items": [
            {
              "title": "Qualys (QLYS) Is Up 1.40% in One Week: What You Should Know",
              "url": "https://www.nasdaq.com/articles/qualys-qlys-140-one-week-what-you-should-know",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QLYS"
              ]
            },
            {
              "title": "Qualys Conference: ETM and Patch Management Drive Growth Ambitions",
              "url": "https://www.nasdaq.com/articles/qualys-conference-etm-and-patch-management-drive-growth-ambitions",
              "date": "2026-08-16",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QLYS"
              ]
            },
            {
              "title": "Qualys (QLYS) Upgraded to Strong Buy: Here's Why",
              "url": "https://www.nasdaq.com/articles/qualys-qlys-upgraded-strong-buy-heres-why",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QLYS"
              ]
            },
            {
              "title": "Qualys (QLYS) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/qualys-qlys-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QLYS",
                "QLYS"
              ]
            },
            {
              "title": "Why Qualys Stock Crushed it on Wednesday",
              "url": "https://www.nasdaq.com/articles/why-qualys-stock-crushed-it-wednesday",
              "date": "2026-08-05",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QLYS",
                "QLYS"
              ]
            },
            {
              "title": "Qualys Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/qualys-q2-earnings-call-highlights",
              "date": "2026-08-05",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QLYS"
              ]
            },
            {
              "title": "Qualys (QLYS) Tops Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/qualys-qlys-tops-q2-earnings-and-revenue-estimates",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QLYS",
                "PANW"
              ]
            },
            {
              "title": "Buy 3 High-Flying Mid-Cap Stocks on Solid AI Cloud Computing Momentum",
              "url": "https://www.nasdaq.com/articles/buy-3-high-flying-mid-cap-stocks-solid-ai-cloud-computing-momentum",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "QLYS",
                "FIVN",
                "FSLY"
              ]
            }
          ],
          "directCount": 7,
          "total": 8,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-04",
            "reportDate": "2026-08-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1107843/000110784326000034/qlys-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-11",
            "reportDate": "2026-06-10",
            "items": [
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1107843/000110784326000024/qlys-20260610.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-05",
            "reportDate": "2026-05-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1107843/000110784326000013/qlys-20260505.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-05",
            "reportDate": "2026-02-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1107843/000110784326000004/qlys-20260205.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-04",
            "reportDate": "2025-11-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1107843/000110784325000037/qlys-20251104.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-08-05",
            "reportDate": "2025-08-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1107843/000110784325000030/qlys-20250805.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MSTR",
      "price": 124.87999725341797,
      "marketCap": "50.58B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 0.2788529984848249,
          "pct": 98.80866425992781
        },
        "m3": {
          "v": 0.03686478513790935,
          "pct": 51.193921852387845
        },
        "m6": {
          "v": -0.09723129038965451,
          "pct": 15.649963689179375
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 98.80866425992781,
      "adr": 6.12,
      "cyTrend": -385.03,
      "nyTrend": 80.08,
      "upCount": 6,
      "downCount": 5,
      "upDownRatio": 54.55,
      "bbwthd": 0.56,
      "bbwthdLow": 0.1,
      "high52": 34.19,
      "volx": 0.93,
      "volSurgeWk": 0.74,
      "aboveMa150": false,
      "aboveMa50": true,
      "order": false,
      "jeongbae": false,
      "div10": 1.44,
      "div50": 23.7,
      "div200": -10.83,
      "ret1m": 27.89,
      "ret3m": 3.69,
      "ret6m": -9.72,
      "maxRise1m": 52.48,
      "maxRise3m": 70.86,
      "maxRise6m": 140.8,
      "brk60d": false,
      "clsPos": 20.46,
      "ma150Slope": -5.19,
      "ta": {
        "price": 124.88,
        "resistance": 136.25,
        "support": 118.4,
        "contraction": 1.9,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.1126,
        "m3": 0.2082,
        "m6": 0.2429,
        "rankPct6": 15,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "스트래티지",
      "nameEn": "Strategy Inc",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "스트래티지",
        "nameEn": "Strategy Inc",
        "infomaxCode": "NAS:MSTR",
        "financials": {
          "ok": true,
          "ticker": "MSTR",
          "cik": "0001050446",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 122368000,
              "profit": -8330950000,
              "netIncome": -8219628000,
              "margin": -6808.1,
              "yoy": {
                "revenue": 6.9,
                "profit": -159.4,
                "netIncome": -182,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 124300000,
              "profit": -14470419000,
              "netIncome": -12542670000,
              "margin": -11641.5,
              "yoy": {
                "revenue": 11.9,
                "profit": -144.4,
                "netIncome": -197.4,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 122988000,
              "profit": -17445805000,
              "netIncome": -12436653000,
              "margin": -14185,
              "yoy": {
                "revenue": 1.9,
                "profit": -1616.4,
                "netIncome": -1754,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 128691000,
              "profit": 3890842000,
              "netIncome": 2785024000,
              "margin": 3023.4,
              "yoy": {
                "revenue": 10.9,
                "profit": 999.4,
                "netIncome": 918.7,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001050446&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MSTR",
          "items": [
            {
              "title": "Strategy Just Bought Bitcoin for the First Time in Over Two Months. Here's Why the Timing Matters.",
              "url": "https://www.nasdaq.com/articles/strategy-just-bought-bitcoin-first-time-over-two-months-heres-why-timing-matters",
              "date": "2026-08-31",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MSTR",
                "MSTR",
                "BTC"
              ]
            },
            {
              "title": "Michael Saylor Predicted This Month That Bitcoin Will Appreciate 30% Annually for the Next 20 Years. Does the Math Behind That Call Hold Up for Strategy Investors?",
              "url": "https://www.nasdaq.com/articles/michael-saylor-predicted-month-bitcoin-will-appreciate-30-annually-next-20-years-does-math",
              "date": "2026-08-27",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MSTR",
                "MSTR",
                "BTC"
              ]
            },
            {
              "title": "Stock Market Today, Aug. 31: Stocks Edge Lower as Oil Prices Surge Again",
              "url": "https://www.nasdaq.com/articles/stock-market-today-aug-31-stocks-edge-lower-oil-prices-surge-again",
              "date": "2026-08-31",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "QQQ",
                "QQQ",
                "MSTR"
              ]
            },
            {
              "title": "Bitcoin Is Surging, But Investors Are Still Worried About Bitcoin Treasury Companies. Here's Why They're Right.",
              "url": "https://www.nasdaq.com/articles/bitcoin-surging-investors-are-still-worried-about-bitcoin-treasury-companies-heres-why",
              "date": "2026-08-30",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "MSTR",
                "MSTR",
                "BTC"
              ]
            }
          ],
          "directCount": 2,
          "total": 4,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-09-01",
            "reportDate": "2026-08-31",
            "items": [
              "7.01",
              "8.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1050446/000119312526377583/mstr-20260831.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-31",
            "reportDate": "2026-08-31",
            "items": [
              "7.01",
              "8.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1050446/000119312526375463/mstr-20260831.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-24",
            "reportDate": "2026-08-24",
            "items": [
              "7.01",
              "8.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1050446/000119312526361845/mstr-20260824.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-17",
            "reportDate": "2026-08-17",
            "items": [
              "7.01",
              "8.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1050446/000119312526353240/mstr-20260817.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-10",
            "reportDate": "2026-08-10",
            "items": [
              "7.01",
              "8.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1050446/000119312526341297/mstr-20260810.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-03",
            "reportDate": "2026-08-03",
            "items": [
              "7.01",
              "8.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1050446/000119312526329565/mstr-20260803.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 4,
          "reports": [
            {
              "title": "[스트래티지 (NAS:MSTR)] 변동성 확대, 신중한 접근 필요",
              "broker": "한화증권",
              "analyst": "김유민",
              "date": "2026-02-06",
              "summary": "- 매출은 1억 달러(YoY +1.9%), 영업손실 174억 달러를 기록했다. 순손 실은 126억 달러, 주당 순손실은 42.93 달러다. 비트코인 가격 하락에 따른 평가 손실이 재무제표에 반영되면서 대규모 회계상 손실을 기록 했다.- 주가 및 비트코인 가격 부진에도 공격적인 매수를 지속하며 4분기에 32,470 BTC를 약 31억 달러에 매입했다. 2025년 전체 BTC 수익률은 22.8%를 기록하며 목표 범위(22~26%)를 달성했다.- BTC 수익률은 주 당 비트코인 수의 변화율로 구한다. 주식을 발행해 자금을 조달하더라 도, 그 돈으로 주식 수 증가분보다 더 많은 비율의 비트코인을 매입했 다면 BPS는 상승하고 BTC 수익률은 양의 값을 가진다",
              "pages": "6",
              "secureId": "eqqczixlleezkzggcgxcmcg",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqczixlleezkzggcgxcmcg.pdf",
              "opinion": null
            },
            {
              "title": "[스트래티지 (NAS:MSTR)] 스트래티지 MSCI 편출 우려 완화",
              "broker": "한화증권",
              "analyst": "김유민",
              "date": "2026-01-07",
              "summary": "- 스트래티지는 MSCI 편출 불확실성을 해소하며 시간 외로 6.6% 상승했 습니다. 실제로 제외된다 하더라도 여파는 크지 않을 것으로 보입니다. 10월 MSCI 발표 이후 주가는 51% 하락하며 리스크를 미리 반영했습니 다.- 시장에서는 편출 시 매도 규모를 약 28억 달러로 추정했다. 주가가 급 락하고 변동성이 확대되면 스트래티지의 자본 조달 여건이 약화돼 비 트코인을 매도할 수 있다는 우려가 컸다- 10월 MSCI 발표 이후 주가 는 51% 하락했다. 편출은 보류하지만 가중치 상향 및 추가 편입을 제 한했다. 주식 수나 유통 지분 등의 증가를 반영하지 않으며 당분간 해 당 종목들이 지수 내 비중이 커지는 상황을 막을 것이다",
              "pages": "6",
              "secureId": "eqxqqqeczxeqeqggcgxcmcg",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxqqqeczxeqeqggcgxcmcg.pdf",
              "opinion": null
            },
            {
              "title": "[스트래티지 (NAS:MSTR)] Strategy (MSTR) - 스테이블코인 발행 증가, BTC 채굴 인센티브 상승 견인",
              "broker": "유안타증권",
              "analyst": "황병준",
              "date": "2025-09-30",
              "summary": "- 세계 1위 Bitcoin Treasury 업체로 9월 22일 기준 639,835개의 BTC를 보유, 유통량 기준 3.2%의 점유율을 차지. 동사의 비트코인 수익률(YTD)은 26%로 시장을 14% 상회(SPX)하 고 있는데, 현 국면 BTC 토큰은 De-Fi 시장 성장이 본격화하는 국면에서 담보 자산 가치 상승 측면에서의 수혜를 반영- BTC 토큰 경제학은 시가 총액 2위 토큰 이더리움과 달리 해당 블록체인 생태계 성장을 견 인하는 주요 dApp 시장 성장에 따라 토큰 가치가 영향을 받는 방식이 아닌, 업계 내 보유 자 수, 레거지 담보 자산으로의 입지와 이에 따른 수요 확대가 설명. dApp 시장 경쟁 심화 우려 등 블록체인 생태계 관련 노이즈에 대한 적고, 오로지 시장 전체 성장의 수혜를 받는 주식 시장의 World Index와 같은 자산.",
              "pages": "6",
              "secureId": "eqzmelzmelmlqiigcgxcmcg",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzmelzmelmlqiigcgxcmcg.pdf",
              "opinion": null
            },
            {
              "title": "[스트래티지 (NAS:MSTR)] 비쌀수록 좋은 회사",
              "broker": "신한투자증권",
              "analyst": "함형도",
              "date": "2025-09-22",
              "summary": "- 주가는 코인가격에 동행하며, 최근 코인 횡보장에서 주가도 부진. 코인가 격 상승과, 금리 인하로 자금 조달이 용이해 진다면 스트래티지의 프리미 엄은 확대 가능- 스트래티지는 세계에서 가장 많은 비트코인을 보유한 기업으로, 전체 유통 량의 3%(63만개) 수준. 2Q25 매출액은 1억달러대로 기존 소프트웨어 사 업으로 창출되고 있으며, 비트코인의 미실현 이익이 140억달러에 달함- 회사의 목표는 주당 코인 보유량을 높이는 것. 주당 코인 보유량의 증가율 을 BTC Yield라 부르며, 1주당 코인 개수는 2023년 0.91개에서 2024년 1.59개로 증가(+74%). 2025년은 25%를 목표",
              "pages": "2",
              "secureId": "eqzlkmqxkiiceqkgcgxcmcg",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzlkmqxkiiceqkgcgxcmcg.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "CTRN",
      "price": 67.87000274658203,
      "marketCap": "0.56B",
      "sector": "Consumer Cyclical",
      "industry": "Apparel Retail",
      "rs": {
        "m1": {
          "v": -0.06566625389793374,
          "pct": 33.537906137184116
        },
        "m3": {
          "v": 0.5761727956813305,
          "pct": 98.80607814761215
        },
        "m6": {
          "v": 0.3819996315022683,
          "pct": 86.38344226579521
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.80607814761215,
      "adr": 4.55,
      "cyTrend": 22.93,
      "nyTrend": 18.11,
      "upCount": 5,
      "downCount": 2,
      "upDownRatio": 71.43,
      "bbwthd": null,
      "bbwthdLow": 0.13,
      "high52": 87.11,
      "volx": 0.83,
      "volSurgeWk": 0.5,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 3.06,
      "div200": 34.54,
      "ret1m": -6.57,
      "ret3m": 57.62,
      "ret6m": 38.2,
      "maxRise1m": 19.16,
      "maxRise3m": 84.32,
      "maxRise6m": 116.12,
      "brk60d": false,
      "clsPos": 59.67,
      "ma150Slope": 7.42,
      "ta": {
        "price": 67.87,
        "resistance": 75.07,
        "support": 61.01,
        "contraction": 1.09,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.1199,
        "m3": -0.0747,
        "m6": -0.0411,
        "rankPct6": 85,
        "count": 9
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "시티 트렌즈",
      "nameEn": "CITI TRENDS INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "시티 트렌즈",
        "nameEn": "CITI TRENDS INC",
        "infomaxCode": "NAS:CTRN",
        "financials": {
          "ok": true,
          "ticker": "CTRN",
          "cik": "0001318484",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-02-01",
              "periodEnd": "2026-05-02",
              "derived": false,
              "revenue": 230858000,
              "profit": 7375000,
              "netIncome": 7754000,
              "margin": 3.2,
              "yoy": {
                "revenue": 14.4,
                "profit": 1408.2,
                "netIncome": 790.2,
                "priorEnd": "2025-05-03"
              }
            },
            {
              "periodStart": "2025-11-01",
              "periodEnd": "2026-01-31",
              "derived": true,
              "revenue": 230393000,
              "profit": 7190000,
              "netIncome": null,
              "margin": 3.1,
              "yoy": {
                "revenue": 9.1,
                "profit": 498.2,
                "netIncome": null,
                "priorEnd": "2025-02-01"
              }
            },
            {
              "periodStart": "2025-08-03",
              "periodEnd": "2025-11-01",
              "derived": false,
              "revenue": 197091000,
              "profit": -7344000,
              "netIncome": null,
              "margin": -3.7,
              "yoy": {
                "revenue": 10.1,
                "profit": 16.8,
                "netIncome": null,
                "priorEnd": "2024-11-02"
              }
            },
            {
              "periodStart": "2025-05-04",
              "periodEnd": "2025-08-02",
              "derived": false,
              "revenue": 190750000,
              "profit": 3517000,
              "netIncome": null,
              "margin": 1.8,
              "yoy": {
                "revenue": 8,
                "profit": 114.1,
                "netIncome": null,
                "priorEnd": "2024-08-03"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318484&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "CTRN",
          "items": [
            {
              "title": "Citi Trends (CTRN) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/citi-trends-ctrn-q2-2026-earnings-call-transcript",
              "date": "2026-09-01",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN",
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/citi-trends-q2-earnings-call-highlights",
              "date": "2026-08-25",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends Slips To Net Loss In Q2; Boosts FY26 Sales Growth Outlook",
              "url": "https://www.nasdaq.com/articles/citi-trends-slips-net-loss-q2-boosts-fy26-sales-growth-outlook",
              "date": "2026-08-25",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends (CTRN) Q1 2026 Earnings Transcript",
              "url": "https://www.nasdaq.com/articles/citi-trends-ctrn-q1-2026-earnings-transcript",
              "date": "2026-06-02",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN",
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends Q1 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/citi-trends-q1-earnings-call-highlights",
              "date": "2026-06-02",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends Q1 Income Rises",
              "url": "https://www.nasdaq.com/articles/citi-trends-q1-income-rises",
              "date": "2026-06-02",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends (CTRN) Price Target Increased by 18.42% to 68.85",
              "url": "https://www.nasdaq.com/articles/citi-trends-ctrn-price-target-increased-1842-6885",
              "date": "2026-03-28",
              "publisher": "Fintel",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends (CTRN) Q4 2025 Earnings Transcript",
              "url": "https://www.nasdaq.com/articles/citi-trends-ctrn-q4-2025-earnings-transcript",
              "date": "2026-03-17",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN",
                "CTRN"
              ]
            }
          ],
          "directCount": 12,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-25",
            "reportDate": "2026-08-25",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318484/000110465926100524/tm2623924d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-10",
            "reportDate": "2026-08-10",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318484/000110465926093003/tm2622595d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-12",
            "reportDate": "2026-06-10",
            "items": [
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1318484/000110465926073472/tm2617779d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-02",
            "reportDate": "2026-06-02",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318484/000110465926069202/tm2616574d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-27",
            "reportDate": "2026-05-27",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318484/000110465926066966/tm2615724d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-17",
            "reportDate": "2026-03-17",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1318484/000110465926028942/tm268989d1_8k.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ATEX",
      "price": 89.55000305175781,
      "marketCap": "1.80B",
      "sector": "Communication Services",
      "industry": "Telecom Services",
      "rs": {
        "m1": {
          "v": -0.06377415971572868,
          "pct": 35.270758122743686
        },
        "m3": {
          "v": 0.3178808988022243,
          "pct": 93.23444283646889
        },
        "m6": {
          "v": 1.2722660085886346,
          "pct": 98.80174291938998
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.80174291938998,
      "adr": 7.28,
      "cyTrend": -28.6,
      "nyTrend": -113.09,
      "upCount": 4,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.21,
      "bbwthdLow": 0.17,
      "high52": 79.25,
      "volx": 0.74,
      "volSurgeWk": 0.84,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": true,
      "div10": -1.59,
      "div50": -6.25,
      "div200": 71.28,
      "ret1m": -6.38,
      "ret3m": 31.79,
      "ret6m": 127.23,
      "maxRise1m": 34.29,
      "maxRise3m": 83.72,
      "maxRise6m": 225.13,
      "brk60d": false,
      "clsPos": 64.66,
      "ma150Slope": 17.61,
      "ta": {
        "price": 89.55,
        "resistance": 107.31,
        "support": 85.88,
        "contraction": 0.7,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0244,
        "m3": 0.0455,
        "m6": -0.0805,
        "rankPct6": 89.29,
        "count": 7
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "안테릭스",
      "nameEn": "ANTERIX INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "안테릭스",
        "nameEn": "ANTERIX INC",
        "infomaxCode": "NAS:ATEX",
        "financials": {
          "ok": true,
          "ticker": "ATEX",
          "cik": "0001304492",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "Revenues",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2025-12-31",
              "periodEnd": "2026-03-31",
              "derived": true,
              "revenue": 1958000,
              "profit": 19835000,
              "netIncome": 18520000,
              "margin": 1013,
              "yoy": {
                "revenue": 41,
                "profit": 111.1,
                "netIncome": 101.1,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-10-01",
              "periodEnd": "2025-12-31",
              "derived": false,
              "revenue": 1573000,
              "profit": -9061000,
              "netIncome": -6601000,
              "margin": -576,
              "yoy": {
                "revenue": 0.4,
                "profit": -228.9,
                "netIncome": -185.6,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 1552000,
              "profit": 60675000,
              "netIncome": 53536000,
              "margin": 3909.5,
              "yoy": {
                "revenue": 0.1,
                "profit": 562.1,
                "netIncome": 519.4,
                "priorEnd": "2024-09-30"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 1418000,
              "profit": 22481000,
              "netIncome": 25180000,
              "margin": 1585.4,
              "yoy": {
                "revenue": -7,
                "profit": 249.8,
                "netIncome": 262.2,
                "priorEnd": "2024-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001304492&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "ATEX",
          "items": [
            {
              "title": "Zacks Industry Outlook Highlights Bandwidth and Anterix",
              "url": "https://www.nasdaq.com/articles/zacks-industry-outlook-highlights-bandwidth-and-anterix-0",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND",
                "ATEX"
              ]
            },
            {
              "title": "Anterix (ATEX) Q1 2027 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/anterix-atex-q1-2027-earnings-call-transcript",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX",
                "ATEX"
              ]
            },
            {
              "title": "Anterix Sees Scarce 900 MHz Spectrum Driving Utility Deals and Satellite Upside",
              "url": "https://www.nasdaq.com/articles/anterix-sees-scarce-900-mhz-spectrum-driving-utility-deals-and-satellite-upside",
              "date": "2026-08-13",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX"
              ]
            },
            {
              "title": "Anterix's Q1 Earnings Call Focuses on Spectrum Optionality",
              "url": "https://www.nasdaq.com/articles/anterixs-q1-earnings-call-focuses-spectrum-optionality",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX"
              ]
            },
            {
              "title": "Anterix Q1 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/anterix-q1-earnings-call-highlights",
              "date": "2026-08-12",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX"
              ]
            },
            {
              "title": "Anterix (ATEX) Reports Q1 Loss, Misses Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/anterix-atex-reports-q1-loss-misses-revenue-estimates",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX",
                "CLBT"
              ]
            },
            {
              "title": "Anterix Shareholders Approve Board, Pay and Expanded 2023 Stock Plan",
              "url": "https://www.nasdaq.com/articles/anterix-shareholders-approve-board-pay-and-expanded-2023-stock-plan",
              "date": "2026-08-07",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX"
              ]
            },
            {
              "title": "Anterix (ATEX) Up 31.2% Since Last Earnings Report: Can It Continue?",
              "url": "https://www.nasdaq.com/articles/anterix-atex-312-last-earnings-report-can-it-continue",
              "date": "2026-07-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX"
              ]
            }
          ],
          "directCount": 9,
          "total": 13,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-11",
            "reportDate": "2026-08-11",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1304492/000130449226000045/atex-20260811.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-06",
            "reportDate": "2026-08-04",
            "items": [
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1304492/000130449226000041/atex-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-10",
            "reportDate": "2026-06-10",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1304492/000130449226000024/atex-20260610.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-21",
            "reportDate": "2026-04-21",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1304492/000130449226000019/atex-20260421.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-06",
            "reportDate": "2026-03-31",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1304492/000130449226000016/atex-20260331.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-01",
            "reportDate": "2026-03-25",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1304492/000130449226000014/atex-20260325.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ALAB",
      "price": 279.9100036621094,
      "marketCap": "50.22B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": -0.22606245121275872,
          "pct": 3.068592057761733
        },
        "m3": {
          "v": -0.11717023333925602,
          "pct": 16.534008683068016
        },
        "m6": {
          "v": 1.2444872561703058,
          "pct": 98.72912127814088
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.72912127814088,
      "adr": 6.58,
      "cyTrend": 33.75,
      "nyTrend": 41.1,
      "upCount": 76,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.24,
      "bbwthdLow": 0.24,
      "high52": 56.04,
      "volx": 0.84,
      "volSurgeWk": 1.48,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -2.99,
      "div50": -16.94,
      "div200": 25.54,
      "ret1m": -22.61,
      "ret3m": -11.72,
      "ret6m": 124.45,
      "maxRise1m": 33.68,
      "maxRise3m": 104.19,
      "maxRise6m": 410.24,
      "brk60d": false,
      "clsPos": 26.87,
      "ma150Slope": 7.86,
      "ta": {
        "price": 279.91,
        "resistance": 342.3,
        "support": 266.31,
        "contraction": 0.56,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0248,
        "m3": -0.0035,
        "m6": 0.3779,
        "rankPct6": 5.71,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "아스테라 랩스",
      "nameEn": "ASTERA LABS INC",
      "detail": {
        "fetchedAt": "2026-09-01",
        "nameKo": "아스테라 랩스",
        "nameEn": "ASTERA LABS INC",
        "infomaxCode": "NAS:ALAB",
        "financials": {
          "ok": true,
          "ticker": "ALAB",
          "cik": "0001736297",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 392400000,
              "profit": 89248000,
              "netIncome": 153088000,
              "margin": 22.7,
              "yoy": {
                "revenue": 104.5,
                "profit": 124.4,
                "netIncome": 198.9,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 308361000,
              "profit": 61833000,
              "netIncome": 80310000,
              "margin": 20.1,
              "yoy": {
                "revenue": 93.4,
                "profit": 447.9,
                "netIncome": 152.4,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 270583000,
              "profit": 66958000,
              "netIncome": 44982000,
              "margin": 24.7,
              "yoy": {
                "revenue": 91.8,
                "profit": 46398.6,
                "netIncome": 82,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 230575000,
              "profit": 55406000,
              "netIncome": 91114000,
              "margin": 24,
              "yoy": {
                "revenue": 103.9,
                "profit": 722.8,
                "netIncome": 1300,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001736297&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "ALAB",
          "items": [
            {
              "title": "Is Astera Labs, Inc. (ALAB) Stock Outpacing Its Computer and Technology Peers This Year?",
              "url": "https://www.nasdaq.com/articles/astera-labs-inc-alab-stock-outpacing-its-computer-and-technology-peers-year",
              "date": "2026-08-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB",
                "AVT"
              ]
            },
            {
              "title": "ALAB Rides on Strong Scorpio Demand: Can It Outpace MRVL and CRDO?",
              "url": "https://www.nasdaq.com/articles/alab-rides-strong-scorpio-demand-can-it-outpace-mrvl-and-crdo",
              "date": "2026-08-25",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB",
                "MRVL",
                "CRDO"
              ]
            },
            {
              "title": "Credo vs. Astera Labs: Which AI Connectivity Stock Is the Better Buy?",
              "url": "https://www.nasdaq.com/articles/credo-vs-astera-labs-which-ai-connectivity-stock-better-buy",
              "date": "2026-08-20",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CRDO",
                "ALAB"
              ]
            },
            {
              "title": "Astera Labs vs. monday.com: Comparing Revenue Trends Between These High-Growth Tech Companies",
              "url": "https://www.nasdaq.com/articles/astera-labs-vs-mondaycom-comparing-revenue-trends-between-these-high-growth-tech-companies",
              "date": "2026-08-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB",
                "ALAB",
                "MNDY"
              ]
            },
            {
              "title": "ALAB vs. AVGO: Which AI Infrastructure Stock Is the Better Buy Now?",
              "url": "https://www.nasdaq.com/articles/alab-vs-avgo-which-ai-infrastructure-stock-better-buy-now",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AVGO",
                "ALAB"
              ]
            },
            {
              "title": "Here's Why You Should Retain Broadridge Stock in Your Portfolio",
              "url": "https://www.nasdaq.com/articles/heres-why-you-should-retain-broadridge-stock-your-portfolio",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "BR",
                "TWLO",
                "ALAB"
              ]
            }
          ],
          "directCount": 5,
          "total": 6,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-04",
            "reportDate": "2026-08-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000033/alab-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-08",
            "reportDate": "2026-06-04",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000027/alab-20260604.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-05",
            "reportDate": "2026-05-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000017/alab-20260505.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-10",
            "reportDate": "2026-02-04",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1736297/000110465926012649/tm265461d2_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-10",
            "reportDate": "2026-02-10",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000005/alab-20260210.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-10",
            "reportDate": "2026-02-05",
            "items": [
              "1.01",
              "3.02",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "3.02",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1736297/000110465926012606/tm265461d1_8k.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 1,
          "reports": [
            {
              "title": "[아스테라 랩스 (NAS:ALAB)] 랙 내부에서 커지는 연결 기회",
              "broker": "키움증권",
              "analyst": "박기현",
              "date": "2026-08-25",
              "summary": "- 2Q26 매출·EPS 및 3Q 가이던스 기대치 상회, 외형 성장과 이익 개선 동시 확인- ScorpioX 하반기 양산 본격화. PCIe Gen6 전환, 제품군 확대로 XPU당 콘텐츠 확대- UALink·Optical·CXL 등 신규 연결 영역 확대로 2027년 이후 성장축 다변화 전망",
              "pages": "7",
              "secureId": "eqlqxmzmkczikxegcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqxmzmkczikxegcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "GWRE",
      "price": 201.08999633789062,
      "marketCap": "17.14B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 0.2543821308736011,
          "pct": 98.51985559566788
        },
        "m3": {
          "v": 0.4779509036172953,
          "pct": 97.86541244573083
        },
        "m6": {
          "v": 0.27071087733264215,
          "pct": 77.52360203340596
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 98.51985559566788,
      "adr": 4.12,
      "cyTrend": -0.29,
      "nyTrend": 0.19,
      "upCount": 22,
      "downCount": 18,
      "upDownRatio": 55,
      "bbwthd": 0.3,
      "bbwthdLow": 0.24,
      "high52": 73.77,
      "volx": 1.14,
      "volSurgeWk": 0.97,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": 3.86,
      "div50": 28.72,
      "div200": 27.62,
      "ret1m": 25.44,
      "ret3m": 47.8,
      "ret6m": 27.07,
      "maxRise1m": 37.23,
      "maxRise3m": 102.83,
      "maxRise6m": 102.83,
      "brk60d": false,
      "clsPos": 29.73,
      "ma150Slope": 0.16,
      "ta": {
        "price": 201.09,
        "resistance": 207.1,
        "support": 191.21,
        "contraction": 0.88,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1126,
        "m3": 0.2082,
        "m6": 0.2429,
        "rankPct6": 15,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "가이드와이어 소프트웨어",
      "nameEn": "GUIDEWIRE SOFTWARE INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "가이드와이어 소프트웨어",
        "nameEn": "GUIDEWIRE SOFTWARE INC",
        "infomaxCode": "NYS:GWRE",
        "financials": {
          "ok": true,
          "ticker": "GWRE",
          "cik": "0001528396",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "ProfitLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-02-01",
              "periodEnd": "2026-04-30",
              "derived": false,
              "revenue": 372541000,
              "profit": 30637000,
              "netIncome": 16471000,
              "margin": 8.2,
              "yoy": {
                "revenue": 26.9,
                "profit": 585.7,
                "netIncome": -64.2,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodStart": "2025-11-01",
              "periodEnd": "2026-01-31",
              "derived": false,
              "revenue": 359095000,
              "profit": 38441000,
              "netIncome": 60110000,
              "margin": 10.7,
              "yoy": {
                "revenue": 24,
                "profit": 227.9,
                "netIncome": 261.3,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodStart": "2025-08-01",
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 332639000,
              "profit": 18478000,
              "netIncome": 31308000,
              "margin": 5.6,
              "yoy": {
                "revenue": 26.5,
                "profit": 491.5,
                "netIncome": 242.6,
                "priorEnd": "2024-10-31"
              }
            },
            {
              "periodStart": "2025-04-30",
              "periodEnd": "2025-07-31",
              "derived": true,
              "revenue": 356570000,
              "profit": 29597000,
              "netIncome": 51951000,
              "margin": 8.3,
              "yoy": {
                "revenue": 22.3,
                "profit": 187,
                "netIncome": 210,
                "priorEnd": "2024-07-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001528396&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "GWRE",
          "items": [
            {
              "title": "Guidewire Software Reaches Analyst Target Price",
              "url": "https://www.nasdaq.com/articles/guidewire-software-reaches-analyst-target-price",
              "date": "2026-08-31",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "GWRE"
              ]
            },
            {
              "title": "Guidewire Software (GWRE) Q4 Earnings Preview: What You Should Know Beyond the Headline Estimates",
              "url": "https://www.nasdaq.com/articles/guidewire-software-gwre-q4-earnings-preview-what-you-should-know-beyond-headline-estimates",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "GWRE"
              ]
            },
            {
              "title": "Guidewire Software (GWRE) Reports Next Week: Wall Street Expects Earnings Growth",
              "url": "https://www.nasdaq.com/articles/guidewire-software-gwre-reports-next-week-wall-street-expects-earnings-growth",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "GWRE"
              ]
            },
            {
              "title": "Guidewire CEO Michael Rosenbaum Sells 1,200 Shares for $207,456",
              "url": "https://www.nasdaq.com/articles/guidewire-ceo-michael-rosenbaum-sells-1200-shares-207456",
              "date": "2026-08-24",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "GWRE",
                "GWRE"
              ]
            },
            {
              "title": "Guidewire CEO Michael Rosenbaum Sells Shares for $187,104",
              "url": "https://www.nasdaq.com/articles/guidewire-ceo-michael-rosenbaum-sells-shares-187104",
              "date": "2026-08-07",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "GWRE",
                "GWRE"
              ]
            },
            {
              "title": "Guidewire's CEO Sold $166,000 in Stock — Here's What Investors Should Know",
              "url": "https://www.nasdaq.com/articles/guidewires-ceo-sold-166000-stock-heres-what-investors-should-know",
              "date": "2026-07-14",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "GWRE",
                "GWRE"
              ]
            },
            {
              "title": "GWRE Stock Looks Stronger as Cash Flow Growth Backs Execution",
              "url": "https://www.nasdaq.com/articles/gwre-stock-looks-stronger-cash-flow-growth-backs-execution",
              "date": "2026-07-03",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SAP",
                "CCC",
                "GWRE"
              ]
            },
            {
              "title": "Guidewire Growth Trends Show How AI and Services Are Evolving",
              "url": "https://www.nasdaq.com/articles/guidewire-growth-trends-show-how-ai-and-services-are-evolving",
              "date": "2026-07-03",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SAP",
                "ORCL",
                "GWRE"
              ]
            }
          ],
          "directCount": 9,
          "total": 13,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-22",
            "reportDate": "2026-07-17",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1528396/000152839626000032/gwre-20260717.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-04",
            "reportDate": "2026-06-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1528396/000152839626000026/gwre-20260604.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-05",
            "reportDate": "2026-03-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1528396/000152839626000013/gwre-20260305.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-08",
            "reportDate": "2026-01-08",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1528396/000152839626000007/gwre-20260108.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-12-18",
            "reportDate": "2025-12-15",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1528396/000152839625000248/gwre-20251215.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-12-03",
            "reportDate": "2025-12-03",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1528396/000152839625000242/gwre-20251203.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MU",
      "price": 933.4400024414062,
      "marketCap": "1053.57B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": 0.04567199559946819,
          "pct": 79.09747292418773
        },
        "m3": {
          "v": 0.08052402742648722,
          "pct": 61.39652677279306
        },
        "m6": {
          "v": 1.2307094842064084,
          "pct": 98.51125635439361
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.51125635439361,
      "adr": 4.99,
      "cyTrend": -0.01,
      "nyTrend": 1.11,
      "upCount": 83,
      "downCount": 2,
      "upDownRatio": 97.65,
      "bbwthd": 0.17,
      "bbwthdLow": 0.17,
      "high52": 74.39,
      "volx": 0.96,
      "volSurgeWk": 1.23,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -0.91,
      "div50": -1.32,
      "div200": 56.8,
      "ret1m": 4.57,
      "ret3m": 8.05,
      "ret6m": 123.07,
      "maxRise1m": 25.29,
      "maxRise3m": 70.06,
      "maxRise6m": 302.9,
      "brk60d": false,
      "clsPos": 23.49,
      "ma150Slope": 12.51,
      "ta": {
        "price": 933.44,
        "resistance": 1011.77,
        "support": 891.66,
        "contraction": 0.81,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0248,
        "m3": -0.0035,
        "m6": 0.3779,
        "rankPct6": 5.71,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "마이크론 테크놀로지",
      "nameEn": "MICRON TECHNOLOGY INC",
      "detail": {
        "fetchedAt": "2026-08-31",
        "nameKo": "마이크론 테크놀로지",
        "nameEn": "MICRON TECHNOLOGY INC",
        "infomaxCode": "NAS:MU",
        "financials": {
          "ok": true,
          "ticker": "MU",
          "cik": "0000723125",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-02-27",
              "periodEnd": "2026-05-28",
              "derived": false,
              "revenue": 41456000000,
              "profit": 33318000000,
              "netIncome": 28243000000,
              "margin": 80.4,
              "yoy": {
                "revenue": 345.7,
                "profit": 1436.1,
                "netIncome": 1398.3,
                "priorEnd": "2025-05-29"
              }
            },
            {
              "periodStart": "2025-11-28",
              "periodEnd": "2026-02-26",
              "derived": false,
              "revenue": 23860000000,
              "profit": 16135000000,
              "netIncome": 13785000000,
              "margin": 67.6,
              "yoy": {
                "revenue": 196.3,
                "profit": 810,
                "netIncome": 770.8,
                "priorEnd": "2025-02-27"
              }
            },
            {
              "periodStart": "2025-08-29",
              "periodEnd": "2025-11-27",
              "derived": false,
              "revenue": 13643000000,
              "profit": 6136000000,
              "netIncome": 5240000000,
              "margin": 45,
              "yoy": {
                "revenue": 56.7,
                "profit": 182.2,
                "netIncome": 180.2,
                "priorEnd": "2024-11-28"
              }
            },
            {
              "periodStart": "2025-05-29",
              "periodEnd": "2025-08-28",
              "derived": true,
              "revenue": 11315000000,
              "profit": 3654000000,
              "netIncome": 3201000000,
              "margin": 32.3,
              "yoy": {
                "revenue": 46,
                "profit": 140.1,
                "netIncome": 260.9,
                "priorEnd": "2024-08-29"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000723125&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MU",
          "items": [
            {
              "title": "Prediction: Micron Stock Will Go Parabolic After Sept. 30",
              "url": "https://www.nasdaq.com/articles/prediction-micron-stock-will-go-parabolic-after-sept-30",
              "date": "2026-08-30",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "MU"
              ]
            },
            {
              "title": "Micron's Huge $250M AI Bet Signals a Critical Next Phase for Memory",
              "url": "https://www.nasdaq.com/articles/microns-huge-250m-ai-bet-signals-critical-next-phase-memory",
              "date": "2026-08-30",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "MU"
              ]
            },
            {
              "title": "Micron vs. Sandisk: 1 Artificial Intelligence (AI) Memory Stock Is Clearly the Better Buy Today",
              "url": "https://www.nasdaq.com/articles/micron-vs-sandisk-1-artificial-intelligence-ai-memory-stock-clearly-better-buy-today",
              "date": "2026-08-30",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "MU",
                "SNDK"
              ]
            },
            {
              "title": "Nvidia's CFO Just Explained Why the AI Boom Is Eating Its Gross Margin -- and It's a Green Light for Micron",
              "url": "https://www.nasdaq.com/articles/nvidias-cfo-just-explained-why-ai-boom-eating-its-gross-margin-and-its-green-light-micron",
              "date": "2026-08-29",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "MU",
                "NVDA"
              ]
            },
            {
              "title": "Intel Sold Its NAND Memory Business for About $9 Billion. Micron Is Now Worth More Than Twice What Intel Is.",
              "url": "https://www.nasdaq.com/articles/intel-sold-its-nand-memory-business-about-9-billion-micron-now-worth-more-twice-what-intel",
              "date": "2026-08-29",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "INTC",
                "INTC",
                "MU"
              ]
            },
            {
              "title": "Prediction: This Is What a $1,000 Investment in Micron Stock Will Be Worth by 2030",
              "url": "https://www.nasdaq.com/articles/prediction-what-1000-investment-micron-stock-will-be-worth-2030",
              "date": "2026-08-28",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "MU"
              ]
            },
            {
              "title": "A Once-in-a-Decade Buying Opportunity: Sandisk and Micron Shares Are Dirt Cheap and Look Primed to Skyrocket",
              "url": "https://www.nasdaq.com/articles/once-decade-buying-opportunity-sandisk-and-micron-shares-are-dirt-cheap-and-look-primed",
              "date": "2026-08-28",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "MU",
                "SNDK"
              ]
            },
            {
              "title": "Nvidia Just Locked In a $279 Billion Bet on Memory Chips",
              "url": "https://www.nasdaq.com/articles/nvidia-just-locked-279-billion-bet-memory-chips",
              "date": "2026-08-29",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "NVDA",
                "NVDA",
                "MU"
              ]
            }
          ],
          "directCount": 7,
          "total": 11,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-26",
            "reportDate": "2026-08-24",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/723125/000110465926101067/tm2624017d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-24",
            "reportDate": "2026-06-24",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000013/mu-20260624.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-09",
            "reportDate": "2026-06-09",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/723125/000110465926071845/tm2617112d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-01",
            "reportDate": "2026-03-31",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/723125/000110465926038249/tm2610810d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-25",
            "reportDate": "2026-03-25",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/723125/000110465926034174/tm269755d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-18",
            "reportDate": "2026-03-18",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000004/mu-20260318.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 18,
          "reports": [
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] FY3Q26리뷰 (1) SCA, 장기 사이클의 초석",
              "broker": "메리츠증권",
              "analyst": "김선우",
              "date": "2026-06-26",
              "summary": "- 마이크론은 FY3Q26 실적 컨퍼런스 (=CY2Q26)를 통해 시장 기대치를 큰폭으로 능가하는 실적과 차분기 가이던스를 발표. 메모리 업황에 대한 높은 기대감으로 실적 눈높이 역시 크게 상향되어 왔음에도 실적과 가이던스는 그를 능가하는 서 프라이즈 수준. 아울러, 지난분기 공개된 SCA(Strategic Customer Agreement)의 구체적인 내용이 공개되면서, 장기 계약 기반의 업황 장기화 및 메모리 산업의 구 조적 변화를 선언- 동사는 이번 실적 설명회에서는 SCA의 구체적 내용을 소개하는 것에 중점. 과거 메모리 업체들이 체결했던 LTA(Long-Term Agreement)는 고객사들의 공급 우선 권을 부여하는 고객사의 입장을 대변했다면, SCA는 공급사 중심의 예수금 (Deposit)과 가격 밴드(Floor/Ceiling Price) 등을 포함한 강한 구속력을 가진 계 약이라는 것이 특징- 특히, SCA를 통해 메모리 공급사들에 제기되는 우려 요인(현수준의 실적 유지 가 능 여부와 공격적인 Capex 확대) 을 잠재우는 실적 발표회로 평가. SCA는 1) 장 기공급 물량 가시성과 매출 안정성을 확보하는 동시에, 2) Capex 투자 가시성을 제공하며, 3) 가격 밴드를 통한 수익성 안정화 장치의 역할을 할 뿐 아니라 4) 예 수금 정책을 통한 고객과의 기술 및 협력 강화 유도 장치로서 기능함을 강조",
              "pages": "8",
              "secureId": "eqlgkzqzclxzmeggcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlgkzqzclxzmeggcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] 사이클 정점, 장기공급 계약 증가",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2026-06-26",
              "summary": "- 2Q26CY 실적 및 3Q26CY 가이던스 모두 시장 컨센서스 크게 상회- 다만, 당사 예상치에는 대체로 부합했음- 메모리 반도체는 사이클 정점 부근에서, SCA 계약 비중 증가세",
              "pages": "6",
              "secureId": "eqlgkgqkeqmeexmgcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlgkgqkeqmeexmgcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] 강력한 실적과 긍정적 가이던스. SCA의 의미",
              "broker": "하나증권",
              "analyst": "김록호",
              "date": "2026-06-26",
              "summary": "- FY3Q26 Review: 서프라이즈- FY4Q26 가이던스: 긍정적 가격을 암시- 시장 참여자의 간지러운 곳을 긁어준 SCA 코멘트- DRAM 수요 전망 상향. 2027년 이후에도 공급 제약 지속. CAPEX 상향",
              "pages": "4",
              "secureId": "eqlgkggieceiexegcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlgkggieceiexegcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-06-25",
              "summary": "- 매출액 415억 달러(YoY +345.7%), 영업이익 337억 달러(YoY +1252.7%), EPS 25.11 달러(YoY +1,214.7%)로 각각 예상치 16.2%, 20.9%, 19.7% 상회. EPS 급증은 DRAM/NAND의 ASP 상승에 따른 GPM 개선에 기인- 영업현금흐름 254억 달러(YoY +113.4%), 조정 FCF 183억 달러(YoY +838.5%), 현금 및 투자자산 302억 달러- 어닝 서프라이즈와 컨센서스를 대폭 상회하는 가이던스 발표하며 시간 외 15.8% 상승",
              "pages": "1",
              "secureId": "eqlgixzcmxilggcgcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlgixzcmxilggcgcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] 높아진 기대감, 그 이상을 보여준 실적",
              "broker": "신한투자증권",
              "analyst": "김형태, 송혜수",
              "date": "2026-06-25",
              "summary": "- 연속적인 가격 인상 흐름 반영되며 기대 이상의 실적 달성. 3~5년 단위의 SCA(Strategic Customer Agreement) 16건 언급. FY3Q26 역대 최대 매출, 수익성 기록했으며 차분기 가이던스는 이를 재차 상회.- FY3Q26 매출 414.6억달러(+74%, 이하 전분기대비), EPS 25.11달러로 컨 센서스(358.5억달러, 20.70달러) 각각 15.6%, 21.3% 상회. 제품별 매출은 DRAM 313.3억달러(B/G +Low single%, ASP +Low 60%). NAND 99.4억 달러(B/G +Mid single%, ASP +Mid 80%), 기타 1.9억달러. 전 응용처에서 폭발적인 성장세 지속. 클라우드, 코어데이터 부문 합산 비중 61%(+5%p)- FY4Q26 가이던스(중간값) 매출 500억달러, EPS 31달러로 컨센서스(434억 달러, 24.95달러) 대폭 상회. FY2026 CapEx 270억달러로 20억달러 상향. FY2027 CapEx 추가 확대 계획. 초과 수요 환경 2027년에도 지속될 전망",
              "pages": "4",
              "secureId": "eqlgixcqmekkmmggcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlgixcqmekkmmggcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] 메모리 가격 현황 고려하면 가이던스는 기대치 하회",
              "broker": "하나증권",
              "analyst": "김록호",
              "date": "2026-03-20",
              "summary": "- FY2Q26 Review: 가격 상승을 기반으로 회계연도 2025년 연간 매출액 상회- FY3Q26 가이던스: 전분기대비 매출액 증가폭 40% 제시- DRAM과 NAND 모두 수요 전망 상향. 연간 CAPEX도 25% 상향 조정",
              "pages": "4",
              "secureId": "eqqimcgzzigzqqlgcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqimcgzzigzqqlgcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] FY2Q26리뷰 (1) Mid Cycle 진입 중 뻔한 우려",
              "broker": "메리츠증권",
              "analyst": "김선우",
              "date": "2026-03-19",
              "summary": "- 마이크론은 FY2Q26 실적 컨퍼런스 (=CY1Q26)를 통해 시장 기대치를 능가하는 실적과 차분기 가이던스를 발표. 명확히 개선되는 메모리 업황에 대한 기대감이 컸고, 실적 눈높이 역시 크게 상향되어 왔음에도 실적 가이던스는 그를 능가하는 서프라이즈 수준. 그럼에도 불구하고, 실적발표 전 주가가 사상최고치에 이른 상 황에서, 시장 내 막연한 고점 우려가 불거지며 동사의 시간외 주가는 3.9% 가량 하락- 마이크론은 이번 실적설명회를 통해 SCA (Strategic Customer Agreement, 전략적 고객 협약)을 소개함. 이는 판가 변동성이 큰 상품 성격의 메모리 공급 계 약을 1년 내외로 묶는 LTA (Long Term Agreement) 대비, 더욱 장기화 (3~5년) 하며 특별 합의가 포함된 협의라고 설명함. 이를 통해 주요 고객과 상호 중장기 사업 가시성을 확보할 수 있으리라 강조. 다만 과거 LTA 역시, 물량과 가격의 구 속력이 끝까지 못한 사례가 많았기에, 이번 SCA의 구속력에 대해 시장의 의구심 은 남아있는 상태. 차후 계약 조건이 서서히 공개되거나, SCA의 실적 파급력이 입 증될 경우 시장의 신뢰도는 올라갈 수 있음",
              "pages": "9",
              "secureId": "eqqimxizmmmexezgcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqimxizmmmexezgcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] DRAM 현물 가격 상승세 둔화, HBM 수요는 여전",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-03-19",
              "summary": "- 마이크론의 FY 2Q26 실적이 발표됐습니다. 실적과 가이던스 모두 컨센 서스 대비 양호했고, 매출액은 YoY 약 3배 수준으로 증가했습니다- 마이크론의 FY 2Q26 매출액은 239 달러(YoY +196.3%), EPS는 4.78 달러(YoY +682.1%)로 최고 실적을 경신했고, 각각 컨센서스를 20.9%, 35.6% 상회했다.- 마이크론은 FY 3Q26 가이던스로 중간값 기준 매출액 335억 달러 (YoY +260%, vs. 컨센서스 237억 달러), EPS 19.15 달러(YoY +903%, vs. 컨센서스 11.29 달러)를 제시했다.",
              "pages": "7",
              "secureId": "eqqimcmlcexkexegcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqimcmlcexkexegcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] Peak-out 아닌 Peak 장기화 구간",
              "broker": "신한투자증권",
              "analyst": "김형태, 송혜수",
              "date": "2026-03-19",
              "summary": "- 최대 실적 재차 경신. 고수익성 장기화되는 구조적 변화- FY2Q26 Review: 서프라이즈의 연속, 변함 없는 수요 강세 확인- 폭발적 가이던스, 수익성 개선 지속 전망. 출하 증가는 여전히 제한적",
              "pages": "4",
              "secureId": "eqqimcxeqxzcmzqgcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqimcxeqxzcmzqgcgxclie.pdf",
              "opinion": null
            },
            {
              "title": "[마이크론 테크놀로지 (NAS:MU)] 사이클 정점을 걱정하기 시작한 투자자들",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2026-03-19",
              "summary": "- 1Q26CY 실적 및 2Q26CY 가이던스 모두 시장 컨센서스 크게 상회- 그러나 투자자들은 사이클 변곡점과 수익성 방어 가능 여부에 더욱 집중하는 모습- 메모리는 가격 상승에서 출하 증가 사이클로 전환. 긴 호흡에서 접근해야 할 시기",
              "pages": "6",
              "secureId": "eqqillgkgicxmizgcgxclie",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqillgkgicxmizgcgxclie.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "PANW",
      "price": 362.0899963378906,
      "marketCap": "302.85B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": -0.011601244861290133,
          "pct": 59.09747292418772
        },
        "m3": {
          "v": 0.3309686182138068,
          "pct": 93.81331403762663
        },
        "m6": {
          "v": 1.1954163124816586,
          "pct": 98.43863471314451
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.43863471314451,
      "adr": 4.39,
      "cyTrend": 0.22,
      "nyTrend": 0.17,
      "upCount": 91,
      "downCount": 13,
      "upDownRatio": 87.5,
      "bbwthd": null,
      "bbwthdLow": 0.15,
      "high52": 90.78,
      "volx": 1.55,
      "volSurgeWk": 1.41,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 4.56,
      "div200": 57.12,
      "ret1m": -1.16,
      "ret3m": 33.1,
      "ret6m": 119.54,
      "maxRise1m": 21.61,
      "maxRise3m": 58.82,
      "maxRise6m": 177.97,
      "brk60d": false,
      "clsPos": 25.84,
      "ma150Slope": 11.04,
      "ta": {
        "price": 362.09,
        "resistance": 368.17,
        "support": 314.95,
        "contraction": 1.18,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0179,
        "m3": 0.1678,
        "m6": 0.3106,
        "rankPct6": 9.29,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "팰로 앨토 네트웍스",
      "nameEn": "PALO ALTO NETWORKS INC",
      "detail": {
        "fetchedAt": "2026-09-01",
        "nameKo": "팰로 앨토 네트웍스",
        "nameEn": "PALO ALTO NETWORKS INC",
        "infomaxCode": "NAS:PANW",
        "financials": {
          "ok": true,
          "ticker": "PANW",
          "cik": "0001327567",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-02-01",
              "periodEnd": "2026-04-30",
              "derived": false,
              "revenue": 3002000000,
              "profit": -183000000,
              "netIncome": -177000000,
              "margin": -6.1,
              "yoy": {
                "revenue": 31.1,
                "profit": -183.6,
                "netIncome": -167.6,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodStart": "2025-11-01",
              "periodEnd": "2026-01-31",
              "derived": false,
              "revenue": 2594000000,
              "profit": 397000000,
              "netIncome": 432000000,
              "margin": 15.3,
              "yoy": {
                "revenue": 14.9,
                "profit": 64.7,
                "netIncome": 61.8,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodStart": "2025-08-01",
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 2474000000,
              "profit": 309000000,
              "netIncome": 334000000,
              "margin": 12.5,
              "yoy": {
                "revenue": 15.7,
                "profit": 8,
                "netIncome": -4.8,
                "priorEnd": "2024-10-31"
              }
            },
            {
              "periodStart": "2025-04-30",
              "periodEnd": "2025-07-31",
              "derived": true,
              "revenue": 2536500000,
              "profit": 496900000,
              "netIncome": 253900000,
              "margin": 19.6,
              "yoy": {
                "revenue": 15.8,
                "profit": 108.4,
                "netIncome": -29,
                "priorEnd": "2024-07-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001327567&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "PANW",
          "items": [
            {
              "title": "Is Palo Alto Networks (PANW) a 'Buy' Ahead of Earnings?",
              "url": "https://www.nasdaq.com/articles/palo-alto-networks-panw-buy-ahead-earnings",
              "date": "2026-08-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PANW"
              ]
            },
            {
              "title": "Notable ETF Inflow Detected - QQQI, META, PANW, TXN",
              "url": "https://www.nasdaq.com/articles/notable-etf-inflow-detected-qqqi-meta-panw-txn",
              "date": "2026-08-28",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "META",
                "PANW",
                "TXN"
              ]
            },
            {
              "title": "Fortinet Stock Surges on Security Platform Momentum: What's Ahead?",
              "url": "https://www.nasdaq.com/articles/fortinet-stock-surges-security-platform-momentum-whats-ahead",
              "date": "2026-08-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "FTNT",
                "PANW",
                "CRWD"
              ]
            },
            {
              "title": "Can Strong Momentum in Next-Gen SIEM Boost CRWD's Long-Term Growth?",
              "url": "https://www.nasdaq.com/articles/can-strong-momentum-next-gen-siem-boost-crwds-long-term-growth",
              "date": "2026-08-28",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "CRWD",
                "S",
                "PANW"
              ]
            }
          ],
          "directCount": 2,
          "total": 4,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-21",
            "reportDate": "2026-08-20",
            "items": [
              "5.02",
              "5.03",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "5.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327567/000119312526361122/d180372d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-02",
            "reportDate": "2026-06-02",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1327567/000132756726000012/panw-20260602.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-13",
            "reportDate": "2026-04-08",
            "items": [
              "1.01",
              "2.03",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327567/000119312526151637/d49517d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-23",
            "reportDate": "2026-03-23",
            "items": [
              "8.01"
            ],
            "itemsKo": [
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327567/000119312526119729/d84927d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-11",
            "reportDate": "2026-03-10",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327567/000132756726000009/panw-20260310.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-17",
            "reportDate": "2026-02-17",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1327567/000132756726000003/panw-20260217.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 4,
          "reports": [
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] [4Q26 Preview] 3개월 87% 오른 주식이 실적으로 그 값을 증명할까, 투자의견 중립 하향",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-24",
              "summary": "- 팔로알토 네트웍스, 3개월 주가 87% 상승해 선행 PER 75배까지 확대, 밸류에이션 부담 상승- 차세대 보안 ARR은 60% 증가했지만 인수 효과 제외 시 28%, 유기적 성장 둔화 여부가 핵심- FY27 가이던스와 마진 회복이 주가 방향 좌우, 투자의견 매수에서 중립으로 하향",
              "pages": "5",
              "secureId": "eqlqzglqilizkqkgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlqzglqilizkqkgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] [Issue & News] 중국 CAC, 사이버보안 심사 착수 - 마이크론식 조달금지 리스크 부상",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-06",
              "summary": "- 중국 CAC, 팔로알토 제품 사이버보안 심사 착수- 2023년 마이크론 심사·조달금지 사례와 유사한 절차- 中매출 미공시로 실적 영향 크기 파악 어려움",
              "pages": "5",
              "secureId": "eqlxczlecmeceelgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxczlecmeceelgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] AI 에이전트 시대의 필요 조건은 사이버 보안",
              "broker": "키움증권",
              "analyst": "김진구",
              "date": "2026-08-04",
              "summary": "- 보안 프로세스 전체를 아우르는 토탈 보안 솔루션 플랫폼 업체를 목표- 프런티어 업체와 긴밀한 연계 및 상호 교차검증 수요 증가로 성장 기대- 장기적으로 프런티어 업체의 보안 솔루션 내재화 여지는 잠재적 리스크",
              "pages": "8",
              "secureId": "eqlzqmxgmmkzqzlgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzqmxgmmkzqzlgcgxcmce.pdf",
              "opinion": null
            },
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] 토탈 보안 플랫폼의 반격",
              "broker": "키움증권",
              "analyst": "김승혁",
              "date": "2025-09-02",
              "summary": "- 팰로 앨토 네트웍스는 토털 보안 플랫폼을 제공하는 글로벌 사이버 보안 기업- AI 확산 속 통합 보안 플랫폼으로 급증하는 트래픽 수요를 선점- CyberArk 인수로 아이덴티티까지 아우르며 토털 보안 표준과 경쟁 우위를 강화",
              "pages": "7",
              "secureId": "eqzxqxqkclqlxmkgcgxcmce",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzxqxqkclqlxmkgcgxcmce.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "FROG",
      "price": 91.77999877929688,
      "marketCap": "12.17B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 0.0644861688688852,
          "pct": 83.64620938628158
        },
        "m3": {
          "v": 0.09261903308686756,
          "pct": 64.4356005788712
        },
        "m6": {
          "v": 1.1930705406369642,
          "pct": 98.36601307189542
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.36601307189542,
      "adr": 6.45,
      "cyTrend": 2.76,
      "nyTrend": 2.21,
      "upCount": 44,
      "downCount": 18,
      "upDownRatio": 70.97,
      "bbwthd": null,
      "bbwthdLow": 0.18,
      "high52": 87.55,
      "volx": 1.22,
      "volSurgeWk": 1.27,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 4.03,
      "div200": 41.11,
      "ret1m": 6.45,
      "ret3m": 9.26,
      "ret6m": 119.31,
      "maxRise1m": 31.85,
      "maxRise3m": 45.31,
      "maxRise6m": 159.03,
      "brk60d": false,
      "clsPos": 5.83,
      "ma150Slope": 6.77,
      "ta": {
        "price": 91.78,
        "resistance": 98.47,
        "support": 86.04,
        "contraction": 1.01,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1126,
        "m3": 0.2082,
        "m6": 0.2429,
        "rankPct6": 15,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "제이프로그",
      "nameEn": "JFROG LTD",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "제이프로그",
        "nameEn": "JFROG LTD",
        "infomaxCode": "NAS:FROG",
        "financials": {
          "ok": true,
          "ticker": "FROG",
          "cik": "0001800667",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 163772000,
              "profit": -13249000,
              "netIncome": -4165000,
              "margin": -8.1,
              "yoy": {
                "revenue": 28.7,
                "profit": 49,
                "netIncome": 80.8,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 153977000,
              "profit": -12931000,
              "netIncome": -8267000,
              "margin": -8.4,
              "yoy": {
                "revenue": 25.8,
                "profit": 43.7,
                "netIncome": 55.3,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 145306000,
              "profit": -21322000,
              "netIncome": -15210000,
              "margin": -14.7,
              "yoy": {
                "revenue": 25.2,
                "profit": 16.1,
                "netIncome": 34.4,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 136907000,
              "profit": -21590000,
              "netIncome": -16431000,
              "margin": -15.8,
              "yoy": {
                "revenue": 25.5,
                "profit": 27.8,
                "netIncome": 28.4,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001800667&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "FROG",
          "items": [
            {
              "title": "Here's Why JFrog Ltd. (FROG) is a Strong Momentum Stock",
              "url": "https://www.nasdaq.com/articles/heres-why-jfrog-ltd-frog-strong-momentum-stock",
              "date": "2026-08-21",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG"
              ]
            },
            {
              "title": "JFrog Co-Founder Sells 45,000 Shares Worth $4.1 Million. Here's What That Means for Investors.",
              "url": "https://www.nasdaq.com/articles/jfrog-co-founder-sells-45000-shares-worth-41-million-heres-what-means-investors",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG",
                "FROG"
              ]
            },
            {
              "title": "JFrog’s AI Opportunity Could Fuel a Big Leap in Share Price",
              "url": "https://www.nasdaq.com/articles/jfrogs-ai-opportunity-could-fuel-big-leap-share-price",
              "date": "2026-08-17",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG",
                "FROG",
                "GTLB"
              ]
            },
            {
              "title": "JFrog Says AI Software Boom, Cloud Demand and Security Adoption Are Fueling Growth",
              "url": "https://www.nasdaq.com/articles/jfrog-says-ai-software-boom-cloud-demand-and-security-adoption-are-fueling-growth",
              "date": "2026-08-14",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG"
              ]
            },
            {
              "title": "JFrog (FROG) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/jfrog-frog-q2-2026-earnings-call-transcript",
              "date": "2026-08-13",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG",
                "FROG"
              ]
            },
            {
              "title": "Are Computer and Technology Stocks Lagging  JFrog (FROG) This Year?",
              "url": "https://www.nasdaq.com/articles/are-computer-and-technology-stocks-lagging-jfrog-frog-year",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG",
                "ALNT"
              ]
            },
            {
              "title": "JFrog Says AI Coding Boom Is Driving Demand for Binary Security and Cloud Platform",
              "url": "https://www.nasdaq.com/articles/jfrog-says-ai-coding-boom-driving-demand-binary-security-and-cloud-platform",
              "date": "2026-08-10",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG"
              ]
            },
            {
              "title": "Compared to Estimates, JFrog (FROG) Q2 Earnings: A Look at Key Metrics",
              "url": "https://www.nasdaq.com/articles/compared-estimates-jfrog-frog-q2-earnings-look-key-metrics",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG"
              ]
            }
          ],
          "directCount": 12,
          "total": 12,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-06",
            "reportDate": "2026-08-06",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1800667/000119312526337998/frog-20260806.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-22",
            "reportDate": "2026-05-20",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1800667/000119312526236917/frog-20260520.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-07",
            "reportDate": "2026-05-07",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1800667/000119312526211940/frog-20260507.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-26",
            "reportDate": "2026-02-26",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1800667/000119312526073842/frog-20260226.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-12",
            "reportDate": "2026-02-12",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1800667/000119312526048726/frog-20260212.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-06",
            "reportDate": "2025-11-06",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1800667/000119312525269563/frog-20251106.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MLAB",
      "price": 125.47000122070312,
      "marketCap": "0.72B",
      "sector": "Technology",
      "industry": "Scientific & Technical Instruments",
      "rs": {
        "m1": {
          "v": 0.24209718726867308,
          "pct": 98.30324909747293
        },
        "m3": {
          "v": 0.20921842800319085,
          "pct": 85.70911722141823
        },
        "m6": {
          "v": 0.5610541498357607,
          "pct": 92.77414669571532
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 98.30324909747293,
      "adr": 5.22,
      "cyTrend": -14.37,
      "nyTrend": -16.3,
      "upCount": 3,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.36,
      "bbwthdLow": 0.11,
      "high52": 96.89,
      "volx": 0.76,
      "volSurgeWk": 0.81,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 0.19,
      "div50": 19.04,
      "div200": 34.23,
      "ret1m": 24.21,
      "ret3m": 20.92,
      "ret6m": 56.11,
      "maxRise1m": 39.37,
      "maxRise3m": 48.66,
      "maxRise6m": 68.89,
      "brk60d": false,
      "clsPos": 30.48,
      "ma150Slope": 4.37,
      "ta": {
        "price": 125.47,
        "resistance": 130.12,
        "support": 120.37,
        "contraction": 0.83,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.1095,
        "m3": -0.0448,
        "m6": 0.0806,
        "rankPct6": 43.57,
        "count": 17
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "메사 래브러토리스",
      "nameEn": "MESA LABORATORIES INC",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": "메사 래브러토리스",
        "nameEn": "MESA LABORATORIES INC",
        "infomaxCode": "NAS:MLAB",
        "financials": {
          "ok": true,
          "ticker": "MLAB",
          "cik": "0000724004",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 60138000,
              "profit": 7031000,
              "netIncome": 2830000,
              "margin": 11.7,
              "yoy": {
                "revenue": 1,
                "profit": 129.5,
                "netIncome": -40.3,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2025-12-31",
              "periodEnd": "2026-03-31",
              "derived": true,
              "revenue": 63724000,
              "profit": 2748000,
              "netIncome": -4136000,
              "margin": 4.3,
              "yoy": {
                "revenue": 2.6,
                "profit": 87.1,
                "netIncome": 41.9,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-10-01",
              "periodEnd": "2025-12-31",
              "derived": false,
              "revenue": 65126000,
              "profit": 7975000,
              "netIncome": 3630000,
              "margin": 12.2,
              "yoy": {
                "revenue": 3.6,
                "profit": 38,
                "netIncome": 316.6,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 60737000,
              "profit": 4724000,
              "netIncome": 2476000,
              "margin": 7.8,
              "yoy": {
                "revenue": 5,
                "profit": 34.7,
                "netIncome": -27.8,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000724004&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MLAB",
          "items": [
            {
              "title": "MLAB Ex-Dividend Reminder - 8/31/26",
              "url": "https://www.nasdaq.com/articles/mlab-ex-dividend-reminder-8-31-26",
              "date": "2026-08-27",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB",
                "MLAB",
                "KDVD"
              ]
            },
            {
              "title": "Mesa Laboratories (MLAB) Q1 2027 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/mesa-laboratories-mlab-q1-2027-earnings-call-transcript",
              "date": "2026-08-17",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB",
                "MLAB"
              ]
            },
            {
              "title": "Mesa Laboratories Q1 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/mesa-laboratories-q1-earnings-call-highlights",
              "date": "2026-08-11",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB"
              ]
            },
            {
              "title": "Why Mesa Laboratories Stock Is Getting Hit With a Huge Sell-Off Today",
              "url": "https://www.nasdaq.com/articles/why-mesa-laboratories-stock-getting-hit-huge-sell-today",
              "date": "2026-05-27",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB",
                "MLAB"
              ]
            },
            {
              "title": "Mesa Laboratories Inc. Q4 Loss Declines",
              "url": "https://www.nasdaq.com/articles/mesa-laboratories-inc-q4-loss-declines",
              "date": "2026-05-27",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB"
              ]
            },
            {
              "title": "MLAB Makes Bullish Cross Above Critical Moving Average",
              "url": "https://www.nasdaq.com/articles/mlab-makes-bullish-cross-above-critical-moving-average",
              "date": "2026-03-17",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB"
              ]
            },
            {
              "title": "Wells Fargo Maintains Mesa Laboratories (MLAB) Equal-Weight Recommendation",
              "url": "https://www.nasdaq.com/articles/wells-fargo-maintains-mesa-laboratories-mlab-equal-weight-recommendation",
              "date": "2025-12-15",
              "publisher": "Fintel",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB"
              ]
            },
            {
              "title": "Mesa Labs (MLAB) Stock Jumps 5.7%: Will It Continue to Soar?",
              "url": "https://www.nasdaq.com/articles/mesa-labs-mlab-stock-jumps-57-will-it-continue-soar",
              "date": "2025-09-22",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MLAB",
                "WAT"
              ]
            }
          ],
          "directCount": 10,
          "total": 11,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-10",
            "reportDate": "2026-08-10",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/724004/000143774926026769/mlab20260807_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-30",
            "reportDate": "2026-07-30",
            "items": [
              "5.05",
              "9.01"
            ],
            "itemsKo": [
              "5.05",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/724004/000072400426000082/mlab20260729_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-15",
            "reportDate": "2026-06-11",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/724004/000072400426000056/mlab20260615_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-27",
            "reportDate": "2026-05-27",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/724004/000072400426000039/mlab20260526_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-23",
            "reportDate": "2026-03-20",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/724004/000072400426000030/mlab20260323_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-09",
            "reportDate": "2026-03-03",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/724004/000072400426000020/mlab20260309_8k.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "XMTR",
      "price": 91.1500015258789,
      "marketCap": "5.39B",
      "sector": "Industrials",
      "industry": "Industrial Distribution",
      "rs": {
        "m1": {
          "v": -0.005564064104890437,
          "pct": 62.202166064981945
        },
        "m3": {
          "v": 0.1300520380300613,
          "pct": 72.75687409551375
        },
        "m6": {
          "v": 1.1533191018907127,
          "pct": 98.29339143064634
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.29339143064634,
      "adr": 5.13,
      "cyTrend": -3.33,
      "nyTrend": -5.79,
      "upCount": 7,
      "downCount": 18,
      "upDownRatio": 28,
      "bbwthd": null,
      "bbwthdLow": 0.11,
      "high52": 85.93,
      "volx": 0.83,
      "volSurgeWk": 0.73,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -0.4,
      "div200": 33.79,
      "ret1m": -0.56,
      "ret3m": 13.01,
      "ret6m": 115.33,
      "maxRise1m": 21.43,
      "maxRise3m": 38.09,
      "maxRise6m": 195.82,
      "brk60d": false,
      "clsPos": 57.98,
      "ma150Slope": 5.26,
      "ta": {
        "price": 91.15,
        "resistance": 96.35,
        "support": 88.52,
        "contraction": 0.88,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0598,
        "m3": -0.0155,
        "m6": 0.1238,
        "rankPct6": 28.57,
        "count": 11
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "조메트리",
      "nameEn": "XOMETRY INC",
      "detail": {
        "fetchedAt": "2026-08-31",
        "nameKo": "조메트리",
        "nameEn": "XOMETRY INC",
        "infomaxCode": "NAS:XMTR",
        "financials": {
          "ok": true,
          "ticker": "XMTR",
          "cik": "0001657573",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "ProfitLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-01",
              "periodEnd": "2026-06-30",
              "derived": false,
              "revenue": 229280000,
              "profit": -5545000,
              "netIncome": -5314000,
              "margin": -2.4,
              "yoy": {
                "revenue": 41.1,
                "profit": 46.1,
                "netIncome": 79.9,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 205138000,
              "profit": -5220000,
              "netIncome": -5259000,
              "margin": -2.5,
              "yoy": {
                "revenue": 35.9,
                "profit": 66.1,
                "netIncome": 65.1,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 192397000,
              "profit": -8776000,
              "netIncome": -8638000,
              "margin": -4.6,
              "yoy": {
                "revenue": 29.5,
                "profit": 23.8,
                "netIncome": 12.7,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 180715000,
              "profit": -11059000,
              "netIncome": -11597000,
              "margin": -6.1,
              "yoy": {
                "revenue": 27.5,
                "profit": 3.7,
                "netIncome": -13.7,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001657573&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "XMTR",
          "items": [
            {
              "title": "Here's Why Xometry (XMTR) Could be Great Choice for a Bottom Fisher",
              "url": "https://www.nasdaq.com/articles/heres-why-xometry-xmtr-could-be-great-choice-bottom-fisher",
              "date": "2026-08-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR"
              ]
            },
            {
              "title": "All You Need to Know About Xometry (XMTR) Rating Upgrade to Buy",
              "url": "https://www.nasdaq.com/articles/all-you-need-know-about-xometry-xmtr-rating-upgrade-buy",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR"
              ]
            },
            {
              "title": "Xometry (XMTR) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/xometry-xmtr-q2-2026-earnings-call-transcript",
              "date": "2026-08-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR",
                "XMTR"
              ]
            },
            {
              "title": "Xometry Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/xometry-q2-earnings-call-highlights",
              "date": "2026-08-04",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR"
              ]
            },
            {
              "title": "Xometry (XMTR) Beats Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/xometry-xmtr-beats-q2-earnings-and-revenue-estimates",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR",
                "DNOW"
              ]
            },
            {
              "title": "Will Xometry (XMTR) Beat Estimates Again in Its Next Earnings Report?",
              "url": "https://www.nasdaq.com/articles/will-xometry-xmtr-beat-estimates-again-its-next-earnings-report-0",
              "date": "2026-07-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR"
              ]
            },
            {
              "title": "XMTR Crosses Above Average Analyst Target",
              "url": "https://www.nasdaq.com/articles/xmtr-crosses-above-average-analyst-target-0",
              "date": "2026-06-19",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR"
              ]
            },
            {
              "title": "AI Entreprenuer Buys $4 Million Xometry Shares After Joining Board",
              "url": "https://www.nasdaq.com/articles/ai-entreprenuer-buys-4-million-xometry-shares-after-joining-board",
              "date": "2026-06-08",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "XMTR",
                "XMTR"
              ]
            }
          ],
          "directCount": 8,
          "total": 9,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-04",
            "reportDate": "2026-08-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1657573/000119312526331547/xmtr-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-18",
            "reportDate": "2026-06-16",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1657573/000119312526275887/xmtr-20260616.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-02",
            "reportDate": "2026-06-01",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1657573/000119312526253897/d109952d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-21",
            "reportDate": "2026-05-20",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1657573/000119312526234396/xmtr-20260520.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-08",
            "reportDate": "2026-05-06",
            "items": [
              "3.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "3.02",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1657573/000119312526214604/xmtr-20260506.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-07",
            "reportDate": "2026-05-07",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1657573/000119312526210312/xmtr-20260507.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "SMCIP",
      "price": 62.029998779296875,
      "marketCap": "N/A",
      "sector": "Technology",
      "industry": "Computer Hardware",
      "rs": {
        "m1": {
          "v": 0.23868418839514569,
          "pct": 98.23104693140795
        },
        "m3": {
          "v": null,
          "pct": null
        },
        "m6": {
          "v": null,
          "pct": null
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 98.23104693140795,
      "adr": 4.68,
      "cyTrend": null,
      "nyTrend": null,
      "upCount": null,
      "downCount": null,
      "upDownRatio": null,
      "bbwthd": 0.32,
      "bbwthdLow": 0.25,
      "high52": 88.35,
      "volx": 0.09,
      "volSurgeWk": 0.12,
      "aboveMa150": false,
      "aboveMa50": true,
      "order": false,
      "jeongbae": false,
      "div10": -1.11,
      "div50": 14.79,
      "div200": 15.34,
      "ret1m": 23.87,
      "ret3m": null,
      "ret6m": null,
      "maxRise1m": 37.52,
      "maxRise3m": 65.42,
      "maxRise6m": 65.42,
      "brk60d": false,
      "clsPos": 77.3,
      "ma150Slope": null,
      "ta": {
        "price": 62.03,
        "resistance": 62.38,
        "support": 58.56,
        "contraction": 0.73,
        "trend": null
      },
      "ma150SlopeDir": null,
      "wrs": {
        "m1": -0.04,
        "m3": 0.0441,
        "m6": 1.0943,
        "rankPct6": 0.71,
        "count": 8
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameEn": "Super Micro Computer, Inc.",
      "detail": {
        "fetchedAt": "2026-09-02",
        "nameKo": null,
        "nameEn": null,
        "infomaxCode": null,
        "financials": {
          "ok": true,
          "ticker": "SMCIP",
          "cik": "0001375365",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-03-31",
              "periodEnd": "2026-06-30",
              "derived": true,
              "revenue": 11119777000,
              "profit": 1488064000,
              "netIncome": 1178217000,
              "margin": 13.4,
              "yoy": {
                "revenue": 93.2,
                "profit": 551.5,
                "netIncome": 503.7,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 10243014000,
              "profit": 625868000,
              "netIncome": 483387000,
              "margin": 6.1,
              "yoy": {
                "revenue": 122.7,
                "profit": 326.4,
                "netIncome": 344.4,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-10-01",
              "periodEnd": "2025-12-31",
              "derived": false,
              "revenue": 12682491000,
              "profit": 474298000,
              "netIncome": 400564000,
              "margin": 3.7,
              "yoy": {
                "revenue": 123.4,
                "profit": 28.7,
                "netIncome": 24.9,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 5017790000,
              "profit": 182256000,
              "netIncome": 168285000,
              "margin": 3.6,
              "yoy": {
                "revenue": -15.5,
                "profit": -64.2,
                "netIncome": -60.3,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001375365&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "SMCIP",
          "items": [],
          "directCount": 0,
          "total": 0,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-11",
            "reportDate": "2026-08-11",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1375365/000137536526000021/smci-20260811.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-05",
            "reportDate": "2026-08-05",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1375365/000137536526000020/smci-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-21",
            "reportDate": "2026-07-21",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1375365/000137536526000019/smci-20260721.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-15",
            "reportDate": "2026-06-10",
            "items": [
              "1.01",
              "3.03",
              "5.03",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "3.03",
              "5.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1375365/000119312526270430/d151436d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-12",
            "reportDate": "2026-06-10",
            "items": [
              "1.01",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1375365/000119312526269703/d45696d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-09",
            "reportDate": "2026-06-09",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1375365/000119312526263942/d47444d8k.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "SYRE",
      "price": 88.5,
      "marketCap": "7.97B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": -0.15666096873387822,
          "pct": 9.711191335740073
        },
        "m3": {
          "v": 0.2016293030069137,
          "pct": 84.98552821997106
        },
        "m6": {
          "v": 1.1325301204819278,
          "pct": 98.22076978939724
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.22076978939724,
      "adr": 4.83,
      "cyTrend": -3.95,
      "nyTrend": 9.78,
      "upCount": 11,
      "downCount": 17,
      "upDownRatio": 39.29,
      "bbwthd": null,
      "bbwthdLow": 0.11,
      "high52": 80.33,
      "volx": 1.2,
      "volSurgeWk": 0.79,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -10.07,
      "div200": 45.38,
      "ret1m": -15.67,
      "ret3m": 20.16,
      "ret6m": 113.25,
      "maxRise1m": 28.69,
      "maxRise3m": 55.42,
      "maxRise6m": 182.5,
      "brk60d": false,
      "clsPos": 65.83,
      "ma150Slope": 15.32,
      "ta": {
        "price": 88.5,
        "resistance": 102.06,
        "support": 81.65,
        "contraction": 0.86,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1905,
        "m3": 0.345,
        "m6": 0.3866,
        "rankPct6": 3.57,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "스파이어 테라퓨틱스",
      "nameEn": "SPYRE THERAPEUTICS INC",
      "detail": {
        "fetchedAt": "2026-08-28",
        "nameKo": "스파이어 테라퓨틱스",
        "nameEn": "SPYRE THERAPEUTICS INC",
        "infomaxCode": "NAS:SYRE",
        "financials": {
          "ok": true,
          "ticker": "SYRE",
          "cik": "0001636282",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2024-09-30",
              "periodEnd": "2024-12-31",
              "derived": true,
              "revenue": 0,
              "profit": -61253000,
              "netIncome": -56296000,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -33.4,
                "netIncome": 10.9,
                "priorEnd": "2023-12-31"
              }
            },
            {
              "periodStart": "2024-07-01",
              "periodEnd": "2024-09-30",
              "derived": false,
              "revenue": 0,
              "profit": -55392000,
              "netIncome": -69028000,
              "margin": null,
              "yoy": {
                "revenue": null,
                "profit": -202.1,
                "netIncome": -72.1,
                "priorEnd": "2023-09-30"
              }
            },
            {
              "periodStart": "2024-04-01",
              "periodEnd": "2024-06-30",
              "derived": false,
              "revenue": 0,
              "profit": -44147000,
              "netIncome": -38837000,
              "margin": null,
              "yoy": {
                "revenue": -100,
                "profit": 72.3,
                "netIncome": 82.1,
                "priorEnd": "2023-06-30"
              }
            },
            {
              "periodStart": "2024-01-01",
              "periodEnd": "2024-03-31",
              "derived": false,
              "revenue": 0,
              "profit": -47774000,
              "netIncome": -43857000,
              "margin": null,
              "yoy": {
                "revenue": -100,
                "profit": -154,
                "netIncome": -138.1,
                "priorEnd": "2023-03-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001636282&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "SYRE",
          "items": [
            {
              "title": "Spyre's SPY072 Shows Mixed Efficacy In Phase 2 RA Study, Fails Internal Bar For Monotherapy",
              "url": "https://www.nasdaq.com/articles/spyres-spy072-shows-mixed-efficacy-phase-2-ra-study-fails-internal-bar-monotherapy",
              "date": "2026-08-26",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE"
              ]
            },
            {
              "title": "Is SYRE a Buy Now as Clinical Catalysts Clash With Valuation Risk?",
              "url": "https://www.nasdaq.com/articles/syre-buy-now-clinical-catalysts-clash-valuation-risk",
              "date": "2026-08-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE",
                "JNJ",
                "ABBV"
              ]
            },
            {
              "title": "Can Spyre's SPY772 HS Study Broaden Its Growth Story Beyond Core IBD?",
              "url": "https://www.nasdaq.com/articles/can-spyres-spy772-hs-study-broaden-its-growth-story-beyond-core-ibd",
              "date": "2026-08-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE",
                "INCY",
                "ABBV"
              ]
            },
            {
              "title": "SYRE Rallies 44.9% in 3 Months. Can Clinical Catalysts Sustain It?",
              "url": "https://www.nasdaq.com/articles/syre-rallies-449-3-months-can-clinical-catalysts-sustain-it",
              "date": "2026-08-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE",
                "JNJ",
                "ABBV"
              ]
            },
            {
              "title": "Spyre's CEO Sold Stock, but Kept 567,000 Shares. Here's What Long-Term Investors Should Know",
              "url": "https://www.nasdaq.com/articles/spyres-ceo-sold-stock-kept-567000-shares-heres-what-long-term-investors-should-know",
              "date": "2026-08-06",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE",
                "SYRE"
              ]
            },
            {
              "title": "A Spyre Executive Sold Stock After a 500% Run. Here's What Long-Term Investors Should Know",
              "url": "https://www.nasdaq.com/articles/spyre-executive-sold-stock-after-500-run-heres-what-long-term-investors-should-know",
              "date": "2026-08-06",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE",
                "SYRE"
              ]
            },
            {
              "title": "Spyre Q2 Loss Narrows On $40 Mln Milestone Gains; Two Phase 2 Readouts Due In September 2026",
              "url": "https://www.nasdaq.com/articles/spyre-q2-loss-narrows-40-mln-milestone-gains-two-phase-2-readouts-due-september-2026",
              "date": "2026-08-05",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE"
              ]
            },
            {
              "title": "Is SYRE Stock a Buy Now or a Wait-and-See Biotech Story Today",
              "url": "https://www.nasdaq.com/articles/syre-stock-buy-now-or-wait-and-see-biotech-story-today",
              "date": "2026-06-29",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SYRE",
                "JNJ",
                "ABBV"
              ]
            }
          ],
          "directCount": 10,
          "total": 10,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-25",
            "reportDate": "2026-08-25",
            "items": [
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1636282/000163628226000105/syre-20260825.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-04",
            "reportDate": "2026-08-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1636282/000163628226000098/syre-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-15",
            "reportDate": "2026-06-15",
            "items": [
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1636282/000163628226000083/syre-20260615.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-01",
            "reportDate": "2026-05-29",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1636282/000163628226000075/syre-20260529.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-29",
            "reportDate": "2026-05-27",
            "items": [
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1636282/000163628226000056/syre-20260527.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-05",
            "reportDate": "2026-05-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1636282/000163628226000051/syre-20260505.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "STX",
      "price": 816.6400146484375,
      "marketCap": "188.06B",
      "sector": "Technology",
      "industry": "Computer Hardware",
      "rs": {
        "m1": {
          "v": -0.03396221892311556,
          "pct": 50.144404332129966
        },
        "m3": {
          "v": -0.03569175041107945,
          "pct": 29.920405209840812
        },
        "m6": {
          "v": 1.1210141112639804,
          "pct": 98.14814814814815
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.14814814814815,
      "adr": 6.38,
      "cyTrend": 28.99,
      "nyTrend": 27.46,
      "upCount": 65,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.23,
      "high52": 71.37,
      "volx": 0.55,
      "volSurgeWk": 0.72,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": -5.73,
      "div200": 40.03,
      "ret1m": -3.4,
      "ret3m": -3.57,
      "ret6m": 112.1,
      "maxRise1m": 33.1,
      "maxRise3m": 63.69,
      "maxRise6m": 225.82,
      "brk60d": false,
      "clsPos": 47.41,
      "ma150Slope": 11.94,
      "ta": {
        "price": 816.64,
        "resistance": 841.31,
        "support": 801.89,
        "contraction": 0.74,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.04,
        "m3": 0.0441,
        "m6": 1.0943,
        "rankPct6": 0.71,
        "count": 8
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "시게이트 테크놀로지 홀딩스",
      "nameEn": "SEAGATE TECHNOLOGY HOLDINGS PLC",
      "detail": {
        "fetchedAt": "2026-08-28",
        "nameKo": "시게이트 테크놀로지 홀딩스",
        "nameEn": "SEAGATE TECHNOLOGY HOLDINGS PLC",
        "infomaxCode": "NAS:STX",
        "financials": {
          "ok": true,
          "ticker": "STX",
          "cik": "0001137789",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-03",
              "periodEnd": "2026-07-03",
              "derived": true,
              "revenue": 3629000000,
              "profit": 1559000000,
              "netIncome": 1294000000,
              "margin": 43,
              "yoy": {
                "revenue": 48.5,
                "profit": 174.5,
                "netIncome": 165.2,
                "priorEnd": "2025-06-27"
              }
            },
            {
              "periodStart": "2026-01-03",
              "periodEnd": "2026-04-03",
              "derived": false,
              "revenue": 3112000000,
              "profit": 998000000,
              "netIncome": 748000000,
              "margin": 32.1,
              "yoy": {
                "revenue": 44.1,
                "profit": 131.6,
                "netIncome": 120,
                "priorEnd": "2025-03-28"
              }
            },
            {
              "periodStart": "2025-10-04",
              "periodEnd": "2026-01-02",
              "derived": false,
              "revenue": 2825000000,
              "profit": 843000000,
              "netIncome": 593000000,
              "margin": 29.8,
              "yoy": {
                "revenue": 21.5,
                "profit": 72.7,
                "netIncome": 76.5,
                "priorEnd": "2024-12-27"
              }
            },
            {
              "periodStart": "2025-06-28",
              "periodEnd": "2025-10-03",
              "derived": false,
              "revenue": 2629000000,
              "profit": 694000000,
              "netIncome": 549000000,
              "margin": 26.4,
              "yoy": {
                "revenue": 21.3,
                "profit": 72.2,
                "netIncome": 80,
                "priorEnd": "2024-09-27"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001137789&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "STX",
          "items": [
            {
              "title": "Seagate (STX) Up 10.7% Since Last Earnings Report: Can It Continue?",
              "url": "https://www.nasdaq.com/articles/seagate-stx-107-last-earnings-report-can-it-continue",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "STX",
                "IBM"
              ]
            },
            {
              "title": "3 Growth Stocks to Buy as Treasury Yields Fall: MU, STX & VLO",
              "url": "https://www.nasdaq.com/articles/3-growth-stocks-buy-treasury-yields-fall-mu-stx-vlo",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "STX",
                "MU",
                "VLO"
              ]
            },
            {
              "title": "Zacks.com featured highlights Seagate Technology, Western Digital and Dell",
              "url": "https://www.nasdaq.com/articles/zackscom-featured-highlights-seagate-technology-western-digital-and-dell",
              "date": "2026-08-26",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL",
                "WDC",
                "STX"
              ]
            },
            {
              "title": "Seagate Says AI Is Making Data Storage More Strategic Than Ever",
              "url": "https://www.nasdaq.com/articles/seagate-says-ai-making-data-storage-more-strategic-ever",
              "date": "2026-08-25",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "STX"
              ]
            },
            {
              "title": "Seagate & 2 Momentum Stocks to Buy Now for Explosive Upside",
              "url": "https://www.nasdaq.com/articles/seagate-2-momentum-stocks-buy-now-explosive-upside",
              "date": "2026-08-25",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL",
                "WDC",
                "STX"
              ]
            },
            {
              "title": "Western Digital vs. Seagate Technology: Which Data Storage Stock Is the Better Buy?",
              "url": "https://www.nasdaq.com/articles/western-digital-vs-seagate-technology-which-data-storage-stock-better-buy",
              "date": "2026-08-25",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WDC",
                "WDC",
                "STX"
              ]
            },
            {
              "title": "Will NetApp's Public Cloud Business Maintain Its Growth Momentum?",
              "url": "https://www.nasdaq.com/articles/will-netapps-public-cloud-business-maintain-its-growth-momentum",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "NTAP",
                "WDC",
                "STX"
              ]
            },
            {
              "title": "The Zacks Rank Explained: How to Find Strong Buy Computer and Technology Stocks",
              "url": "https://www.nasdaq.com/articles/zacks-rank-explained-how-find-strong-buy-computer-and-technology-stocks-8",
              "date": "2026-08-27",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "STX"
              ]
            }
          ],
          "directCount": 6,
          "total": 9,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-28",
            "reportDate": "2026-07-28",
            "items": [
              "2.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000153/stx-20260728.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-12",
            "reportDate": "2026-06-11",
            "items": [
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1137789/000119312526268170/d24300d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-28",
            "reportDate": "2026-05-26",
            "items": [
              "3.02",
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "3.02",
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1137789/000119312526243110/d106085d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-21",
            "reportDate": "2026-05-20",
            "items": [
              "3.02",
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "3.02",
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1137789/000119312526233588/d72241d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-06",
            "reportDate": "2026-05-05",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000093/stx-20260505.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-28",
            "reportDate": "2026-04-28",
            "items": [
              "2.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000084/stx-20260428.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 4,
          "reports": [
            {
              "title": "[시게이트 테크놀로지 홀딩스 (NAS:STX)] 더 싸게 만들고, 더 비싸게 판다",
              "broker": "유진투자증권",
              "analyst": "박재환",
              "date": "2026-07-30",
              "summary": "- 데이터센터 내 스토리지의 중요성은 지속적으로 상승하는 추세. 클로드 Fable/Opus 5, 오픈 AI GPT 5.6, Kimi K3 등 모델의 고도화와 출시 주기 단축으로 인해 학습 데이터와 체크포인트가 빠르게 누적되고 있음. Agent AI의 멀티 스탭 워크로드 역시 컨텍스트 누적을 통해 스토리지 부담을 가 중. 이에 주요 CSP들은 SSD와 HDD를 함께 활용하는 계층형 스토리지 구 조로 대응 중이며, 용량 대비 가격 경쟁력이 높은 HDD의 수요도 견조하게 유지되는 상황- 데이터센터 고용량 스토리지 수요 호조로 HDD 엑사바이트 출하량은 전년 비 34% 증가했으며 Nearline HDD가 성장을 견인. 또한 공급 업체의 보수 적 증설 기조로 타이트한 수급 환경이 이어지며 FY4Q26 TB 당 ASP는 전 년비 10.7% 수준 재차 상승한 것으로 추정.- 이에 반해 TB 당 매출원가는 지속적으로 하락. 씨게이트는 공격적인 HAMR 전환을 통해 출하량의 40%를 HAMR 기반 HDD로 전환했으며, CY2026 말까지 50% 이상으로 확대할 계획. HAMR은 유사한 수준의 BOM으로 플래터당 용량을 3TB 이상으로 높일 수 있어 수익성 개선에 긍 정적",
              "pages": "5",
              "secureId": "eqlzixxzmzqmmxegcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzixxzmzqmmxegcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[시게이트 테크놀로지 홀딩스 (NAS:STX)] HAMR 선도 프리미엄을 숫자로 증명",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-07-29",
              "summary": "- HDD 업황의 타이트한 수급과 HAMR 기술 상용화로 FY27 이익 추정치 상향 기대. AI 인프라 투심 회복 시 공급부족 프리미엄 재부각 전망- FY4Q26 매출액 36.3억달러(YoY+48.5%, 이하 전년대비), 영업이익 16.2 억달러(+152.9%, OPM 44.6%)로 컨센서스를 각각 4%, 10.7% 상회. 총 출하용량 218EB(+33.7%), 니어라인 출하량은 195EB(+42.3%) 기록. 평균 가격/TB은 전년대비 10.3% 증가해 매출총이익률 52.7%(+14.8%p) 달성. 데이터센터향 매출이 29.3억달러(+57.1%)로 전체 비중의 81.2% 차지. HAMR 전환에 따른 원가/TB 하락으로 출하량 대비 매출 증가세 재확인- FY1Q27 가이던스는 중간값 기준 매출액 41억달러, OPM 50%, EPS 7.3달 러로 제시. 니어라인 EB 공급은 CY27에서 CY28까지 대부분 배정 완료. 유닛 공급능력 증설을 제한해 가격/EB도 전년대비 20% 안판의 상승 전망",
              "pages": "5",
              "secureId": "eqlziczkmqcekiggcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlziczkmqcekiggcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[시게이트 테크놀로지 홀딩스 (NAS:STX)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-07-29",
              "summary": "- 매출액 36.3억 달러(YoY +48.5%), 영업이익 16.2억 달러(YoY +153%), 조정 EPS 5.71 달러(YoY +120.5%)로 각각 예상치 3.9%, 10.7%. 12.3% 상회.- 분기 배당금 주당 0.74달러로 유지. FY 2026 연간 주주환원액 8.1억 달러- 예상치를 상회하는 실적과 가이던스로 시간외메서 6.6% 상승 마감",
              "pages": "1",
              "secureId": "eqlzicimgicqzgcgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzicimgicqzgcgcgxclgq.pdf",
              "opinion": null
            },
            {
              "title": "[시게이트 테크놀로지 홀딩스 (NAS:STX)] HAMR 상용화 선점",
              "broker": "신한투자증권",
              "analyst": "고준혁, 김형태",
              "date": "2026-06-24",
              "summary": "- YTD  주가수익률 +297.3%, 12MF PER 52배에도 업사이드 여력 존재. HDD 업황의 구조적 개선과 HAMR 기술 선도로 추정치 상향 지속 전망- FY3Q26 매출액 31.1억달러(YoY+44.1%, 이하 전년대비), 영업이익 11.7 억달러(+130.2%, OPM 37.5%)로 컨센서스를 각각 5.4%, 13.4% 상회- FY4Q26 가이던스는 중간값 기준 매출액 34.5억달러, OPM 낮은 40%대, EPS 5.0달러로 제시. FY27 주문생산 계약이 믹스, 가격, 물량 측면에서 이 미 확정돼 분기별로 추가 개선 가능성 시사. CY28 전략적 논의도 진행 중",
              "pages": "4",
              "secureId": "eqlggzmlliiqmilgcgxclgq",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlggzmlliiqmilgcgxclgq.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "BXC",
      "price": 74.7699966430664,
      "marketCap": "0.62B",
      "sector": "Industrials",
      "industry": "Industrial Distribution",
      "rs": {
        "m1": {
          "v": 0.15994411580867146,
          "pct": 95.27075812274369
        },
        "m3": {
          "v": 0.48648106912845845,
          "pct": 98.01013024602025
        },
        "m6": {
          "v": 0.36466500079719444,
          "pct": 85.00363108206245
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.01013024602025,
      "adr": 6.06,
      "cyTrend": 108.47,
      "nyTrend": 23.52,
      "upCount": 2,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.13,
      "high52": 79.71,
      "volx": 0.58,
      "volSurgeWk": 0.83,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 9.88,
      "div200": 20.77,
      "ret1m": 15.99,
      "ret3m": 48.65,
      "ret6m": 36.47,
      "maxRise1m": 48.89,
      "maxRise3m": 92.37,
      "maxRise6m": 109.47,
      "brk60d": false,
      "clsPos": 19.4,
      "ma150Slope": 3.1,
      "ta": {
        "price": 74.77,
        "resistance": 75.48,
        "support": 73.24,
        "contraction": 0.59,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0598,
        "m3": -0.0155,
        "m6": 0.1238,
        "rankPct6": 28.57,
        "count": 11
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "블루링스 홀딩스",
      "nameEn": "BLUELINX HLDGS INC",
      "detail": {
        "fetchedAt": "2026-09-01",
        "nameKo": "블루링스 홀딩스",
        "nameEn": "BLUELINX HLDGS INC",
        "infomaxCode": "NYS:BXC",
        "financials": {
          "ok": true,
          "ticker": "BXC",
          "cik": "0001301787",
          "profitLabel": "영업이익",
          "marginLabel": "영업이익률",
          "profitIsOperating": true,
          "tags": {
            "revenue": "RevenueFromContractWithCustomerExcludingAssessedTax",
            "profit": "OperatingIncomeLoss",
            "netIncome": "NetIncomeLoss"
          },
          "quarters": [
            {
              "periodStart": "2026-04-05",
              "periodEnd": "2026-07-04",
              "derived": false,
              "revenue": 814077000,
              "profit": 20603000,
              "netIncome": 6406000,
              "margin": 2.5,
              "yoy": {
                "revenue": 4.4,
                "profit": 37,
                "netIncome": 48.6,
                "priorEnd": "2025-06-28"
              }
            },
            {
              "periodStart": "2026-01-04",
              "periodEnd": "2026-04-04",
              "derived": false,
              "revenue": 731149000,
              "profit": 7328000,
              "netIncome": -1458000,
              "margin": 1,
              "yoy": {
                "revenue": 3.1,
                "profit": -31.7,
                "netIncome": -152,
                "priorEnd": "2025-03-29"
              }
            },
            {
              "periodStart": "2025-09-27",
              "periodEnd": "2026-01-03",
              "derived": true,
              "revenue": 715804000,
              "profit": -3242000,
              "netIncome": -8551000,
              "margin": -0.5,
              "yoy": {
                "revenue": 0.7,
                "profit": -126.9,
                "netIncome": -262.2,
                "priorEnd": "2024-12-28"
              }
            },
            {
              "periodStart": "2025-06-29",
              "periodEnd": "2025-09-27",
              "derived": false,
              "revenue": 748870000,
              "profit": 9966000,
              "netIncome": 1655000,
              "margin": 1.3,
              "yoy": {
                "revenue": 0.2,
                "profit": -58.5,
                "netIncome": -89.7,
                "priorEnd": "2024-09-28"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001301787&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "BXC",
          "items": [
            {
              "title": "BlueLinx Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/bluelinx-q2-earnings-call-highlights",
              "date": "2026-08-05",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC"
              ]
            },
            {
              "title": "BlueLinx Q1 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/bluelinx-q1-earnings-call-highlights",
              "date": "2026-05-09",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC"
              ]
            },
            {
              "title": "BlueLinx (BXC) Q1 2026 Earnings Transcript",
              "url": "https://www.nasdaq.com/articles/bluelinx-bxc-q1-2026-earnings-transcript",
              "date": "2026-05-06",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC",
                "BXC"
              ]
            },
            {
              "title": "BlueLinx (BXC) Q4 2025 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/bluelinx-bxc-q4-2025-earnings-call-transcript",
              "date": "2026-02-25",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC",
                "BXC"
              ]
            },
            {
              "title": "BlueLinx Q2 EPS Falls 58%",
              "url": "https://www.nasdaq.com/articles/bluelinx-q2-eps-falls-58",
              "date": "2025-08-04",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC",
                "BXC"
              ]
            },
            {
              "title": "BlueLinx Holdings Inc. Q2 Income Declines",
              "url": "https://www.nasdaq.com/articles/bluelinx-holdings-inc-q2-income-declines",
              "date": "2025-07-29",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC"
              ]
            },
            {
              "title": "New Analyst Forecast: $BXC Given $80.0 Price Target",
              "url": "https://www.nasdaq.com/articles/new-analyst-forecast-bxc-given-800-price-target",
              "date": "2025-07-18",
              "publisher": "Quiver Quantitative",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC"
              ]
            },
            {
              "title": "$BXC stock is up 11% today. Here's what we see in our data.",
              "url": "https://www.nasdaq.com/articles/bxc-stock-11-today-heres-what-we-see-our-data",
              "date": "2025-06-20",
              "publisher": "Quiver Quantitative",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BXC"
              ]
            }
          ],
          "directCount": 9,
          "total": 11,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-08-04",
            "reportDate": "2026-08-04",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1301787/000162828026052586/bxc-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-19",
            "reportDate": "2026-05-14",
            "items": [
              "5.07",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "주주총회 표결",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1301787/000110465926063807/tm2614957d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-05",
            "reportDate": "2026-05-05",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1301787/000162828026030601/bxc-20260505.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-24",
            "reportDate": "2026-02-24",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1301787/000162828026011132/bxc-20260224.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-06",
            "reportDate": "2026-02-03",
            "items": [
              "5.03",
              "9.01"
            ],
            "itemsKo": [
              "5.03",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1301787/000110465926011491/tm265384d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-12-15",
            "reportDate": "2025-12-12",
            "items": [
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1301787/000110465925121125/tm2533366d1_8k.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "NUTX",
      "price": 187.33999633789062,
      "marketCap": "1.30B",
      "sector": "Healthcare",
      "industry": "Medical Care Facilities",
      "rs": {
        "m1": {
          "v": 0.18719893989129902,
          "pct": 96.71480144404332
        },
        "m3": {
          "v": 0.41292707981132915,
          "pct": 96.34587554269174
        },
        "m6": {
          "v": 1.0702840176869757,
          "pct": 98.00290486564997
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.00290486564997,
      "adr": 7.61,
      "cyTrend": 31.51,
      "nyTrend": 25.18,
      "upCount": 4,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.17,
      "high52": 91.83,
      "volx": 1.37,
      "volSurgeWk": 1.5,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": null,
      "div50": 9.01,
      "div200": 34.24,
      "ret1m": 18.72,
      "ret3m": 41.29,
      "ret6m": 107.03,
      "maxRise1m": 33.27,
      "maxRise3m": 55.55,
      "maxRise6m": 140.25,
      "brk60d": false,
      "clsPos": 56.12,
      "ma150Slope": 1.34,
      "ta": {
        "price": 187.34,
        "resistance": 192,
        "support": 156.15,
        "contraction": 0.54,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0154,
        "m3": 0.1742,
        "m6": -0.0244,
        "rankPct6": 80.71,
        "count": 12
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "뉴텍스 헬스",
      "nameEn": "NUTEX HEALTH INC"
    }
  ],
  "themes": {
    "bySector": [
      {
        "name": "Technology",
        "count": 20,
        "tickers": [
          "MGRT",
          "TEAM",
          "MXL",
          "BAND",
          "DELL",
          "SHAZ",
          "PENG",
          "SNDK",
          "ESTC",
          "MRVL",
          "QLYS",
          "MSTR",
          "ALAB",
          "GWRE",
          "MU",
          "PANW",
          "FROG",
          "MLAB",
          "SMCIP",
          "STX"
        ],
        "sharePct": 48.8
      },
      {
        "name": "Healthcare",
        "count": 9,
        "tickers": [
          "MRNA",
          "AGL",
          "MNPR",
          "TWST",
          "INBX",
          "ORKA",
          "WGS",
          "SYRE",
          "NUTX"
        ],
        "sharePct": 22
      },
      {
        "name": "Basic Materials",
        "count": 3,
        "tickers": [
          "AMR",
          "AUGO",
          "HCC"
        ],
        "sharePct": 7.3
      },
      {
        "name": "Consumer Cyclical",
        "count": 3,
        "tickers": [
          "ANF",
          "EAT",
          "CTRN"
        ],
        "sharePct": 7.3
      },
      {
        "name": "Industrials",
        "count": 2,
        "tickers": [
          "XMTR",
          "BXC"
        ],
        "sharePct": 4.9
      },
      {
        "name": "Consumer Defensive",
        "count": 1,
        "tickers": [
          "ELF"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Financial Services",
        "count": 1,
        "tickers": [
          "CRCL"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Energy",
        "count": 1,
        "tickers": [
          "FET"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Communication Services",
        "count": 1,
        "tickers": [
          "ATEX"
        ],
        "sharePct": 2.4
      }
    ],
    "byIndustry": [
      {
        "name": "Biotechnology",
        "count": 5,
        "tickers": [
          "MRNA",
          "MNPR",
          "INBX",
          "ORKA",
          "SYRE"
        ],
        "sharePct": 12.2
      },
      {
        "name": "Software - Application",
        "count": 5,
        "tickers": [
          "TEAM",
          "ESTC",
          "MSTR",
          "GWRE",
          "FROG"
        ],
        "sharePct": 12.2
      },
      {
        "name": "Semiconductors",
        "count": 4,
        "tickers": [
          "MXL",
          "MRVL",
          "ALAB",
          "MU"
        ],
        "sharePct": 9.8
      },
      {
        "name": "Computer Hardware",
        "count": 4,
        "tickers": [
          "DELL",
          "SNDK",
          "SMCIP",
          "STX"
        ],
        "sharePct": 9.8
      },
      {
        "name": "Information Technology Services",
        "count": 3,
        "tickers": [
          "MGRT",
          "SHAZ",
          "PENG"
        ],
        "sharePct": 7.3
      },
      {
        "name": "Software - Infrastructure",
        "count": 3,
        "tickers": [
          "BAND",
          "QLYS",
          "PANW"
        ],
        "sharePct": 7.3
      },
      {
        "name": "Medical Care Facilities",
        "count": 2,
        "tickers": [
          "AGL",
          "NUTX"
        ],
        "sharePct": 4.9
      },
      {
        "name": "Coking Coal",
        "count": 2,
        "tickers": [
          "AMR",
          "HCC"
        ],
        "sharePct": 4.9
      },
      {
        "name": "Diagnostics & Research",
        "count": 2,
        "tickers": [
          "TWST",
          "WGS"
        ],
        "sharePct": 4.9
      },
      {
        "name": "Apparel Retail",
        "count": 2,
        "tickers": [
          "ANF",
          "CTRN"
        ],
        "sharePct": 4.9
      },
      {
        "name": "Industrial Distribution",
        "count": 2,
        "tickers": [
          "XMTR",
          "BXC"
        ],
        "sharePct": 4.9
      },
      {
        "name": "Household & Personal Products",
        "count": 1,
        "tickers": [
          "ELF"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Capital Markets",
        "count": 1,
        "tickers": [
          "CRCL"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Gold",
        "count": 1,
        "tickers": [
          "AUGO"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Restaurants",
        "count": 1,
        "tickers": [
          "EAT"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Oil & Gas Equipment & Services",
        "count": 1,
        "tickers": [
          "FET"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Telecom Services",
        "count": 1,
        "tickers": [
          "ATEX"
        ],
        "sharePct": 2.4
      },
      {
        "name": "Scientific & Technical Instruments",
        "count": 1,
        "tickers": [
          "MLAB"
        ],
        "sharePct": 2.4
      }
    ],
    "clusters": [
      {
        "key": "Sector:Technology",
        "level": "Sector",
        "name": "Technology",
        "count": 20,
        "sharePct": 48.8,
        "tickers": [
          "MGRT",
          "TEAM",
          "MXL",
          "BAND",
          "DELL",
          "SHAZ",
          "PENG",
          "SNDK",
          "ESTC",
          "MRVL",
          "QLYS",
          "MSTR",
          "ALAB",
          "GWRE",
          "MU",
          "PANW",
          "FROG",
          "MLAB",
          "SMCIP",
          "STX"
        ],
        "concentration": "high"
      },
      {
        "key": "Sector:Healthcare",
        "level": "Sector",
        "name": "Healthcare",
        "count": 9,
        "sharePct": 22,
        "tickers": [
          "MRNA",
          "AGL",
          "MNPR",
          "TWST",
          "INBX",
          "ORKA",
          "WGS",
          "SYRE",
          "NUTX"
        ],
        "concentration": "high"
      },
      {
        "key": "Industry:Biotechnology",
        "level": "Industry",
        "name": "Biotechnology",
        "count": 5,
        "sharePct": 12.2,
        "tickers": [
          "MRNA",
          "MNPR",
          "INBX",
          "ORKA",
          "SYRE"
        ],
        "concentration": "mid"
      },
      {
        "key": "Industry:Software - Application",
        "level": "Industry",
        "name": "Software - Application",
        "count": 5,
        "sharePct": 12.2,
        "tickers": [
          "TEAM",
          "ESTC",
          "MSTR",
          "GWRE",
          "FROG"
        ],
        "concentration": "mid"
      },
      {
        "key": "Industry:Semiconductors",
        "level": "Industry",
        "name": "Semiconductors",
        "count": 4,
        "sharePct": 9.8,
        "tickers": [
          "MXL",
          "MRVL",
          "ALAB",
          "MU"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Computer Hardware",
        "level": "Industry",
        "name": "Computer Hardware",
        "count": 4,
        "sharePct": 9.8,
        "tickers": [
          "DELL",
          "SNDK",
          "SMCIP",
          "STX"
        ],
        "concentration": "low"
      },
      {
        "key": "Sector:Basic Materials",
        "level": "Sector",
        "name": "Basic Materials",
        "count": 3,
        "sharePct": 7.3,
        "tickers": [
          "AMR",
          "AUGO",
          "HCC"
        ],
        "concentration": "low"
      },
      {
        "key": "Sector:Consumer Cyclical",
        "level": "Sector",
        "name": "Consumer Cyclical",
        "count": 3,
        "sharePct": 7.3,
        "tickers": [
          "ANF",
          "EAT",
          "CTRN"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Information Technology Services",
        "level": "Industry",
        "name": "Information Technology Services",
        "count": 3,
        "sharePct": 7.3,
        "tickers": [
          "MGRT",
          "SHAZ",
          "PENG"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Software - Infrastructure",
        "level": "Industry",
        "name": "Software - Infrastructure",
        "count": 3,
        "sharePct": 7.3,
        "tickers": [
          "BAND",
          "QLYS",
          "PANW"
        ],
        "concentration": "low"
      },
      {
        "key": "Sector:Industrials",
        "level": "Sector",
        "name": "Industrials",
        "count": 2,
        "sharePct": 4.9,
        "tickers": [
          "XMTR",
          "BXC"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Medical Care Facilities",
        "level": "Industry",
        "name": "Medical Care Facilities",
        "count": 2,
        "sharePct": 4.9,
        "tickers": [
          "AGL",
          "NUTX"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Coking Coal",
        "level": "Industry",
        "name": "Coking Coal",
        "count": 2,
        "sharePct": 4.9,
        "tickers": [
          "AMR",
          "HCC"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Diagnostics & Research",
        "level": "Industry",
        "name": "Diagnostics & Research",
        "count": 2,
        "sharePct": 4.9,
        "tickers": [
          "TWST",
          "WGS"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Apparel Retail",
        "level": "Industry",
        "name": "Apparel Retail",
        "count": 2,
        "sharePct": 4.9,
        "tickers": [
          "ANF",
          "CTRN"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Industrial Distribution",
        "level": "Industry",
        "name": "Industrial Distribution",
        "count": 2,
        "sharePct": 4.9,
        "tickers": [
          "XMTR",
          "BXC"
        ],
        "concentration": "low"
      }
    ],
    "headline": "Technology 20종목(48.8%) · Healthcare 9종목(22%) · Biotechnology 5종목(12.2%)",
    "minCount": 2,
    "total": 41
  },
  "research_coverage": {
    "done": 0,
    "total": 41
  },
  "detail_coverage": {
    "done": 40,
    "freshToday": 20,
    "carried": 20,
    "total": 41,
    "cap": 20
  }
};
