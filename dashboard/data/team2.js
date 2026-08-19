window.TEAM2_DATA = {
  "generated": "2026-08-20",
  "stats": {
    "universe": 1412,
    "byPeriod": {
      "m1": 12,
      "m3": 28,
      "m6": 28
    },
    "unionTop": 58,
    "afterEtf": 57,
    "afterAdr": 49,
    "afterMa150": 49,
    "ma150Unknown": 0,
    "dropped": {
      "etf": 1,
      "adr": 8,
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
    "reason": "200일선 위 종목이 74.8% 인데 150일선 위는 24.9% 뿐 — 앞뒤가 맞지 않는다",
    "stats": {
      "total": 1412,
      "o150": 351,
      "x150": 1061,
      "d200Pos": 1056,
      "contradiction": 192,
      "checked": 1412,
      "contraPct": 13.6,
      "abovePct": 24.9,
      "d200PosPct": 74.8
    },
    "effect": "150일선 필터 미적용 · 3팀 배제조건 ③ 미적용 · 3팀 신규 편입 보류",
    "ko": "⚠️ RS 사이트의 150일선 컬럼이 오염돼 오늘은 판정불가로 처리했습니다. (150일선 위 351종목인데 200일선 위는 1056종목 — 앞뒤가 맞지 않습니다.) 종목을 잘라내지 않았으므로 오늘 2팀 목록에는 실제로는 150일선 아래인 종목이 섞여 있을 수 있습니다."
  },
  "picks": [
    {
      "ticker": "MRNA",
      "price": 174.3800048828125,
      "marketCap": "69.62B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": 2.002927601157797,
          "pct": 99.91568296795953
        },
        "m3": {
          "v": 2.719709917016503,
          "pct": 99.96389891696751
        },
        "m6": {
          "v": 2.3722685741677934,
          "pct": 99.60231381055677
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo",
        "6mo"
      ],
      "bestPct": 99.96389891696751,
      "adr": 8.43,
      "cyTrend": -0.95,
      "nyTrend": 3.25,
      "upCount": 43,
      "downCount": 20,
      "upDownRatio": 68.25,
      "bbwthd": 1.63,
      "bbwthdLow": 0.13,
      "high52": 98.71,
      "volx": 16.84,
      "volSurgeWk": 33.37,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 140.24,
      "div50": 172.86,
      "div200": 266.38,
      "ret1m": 200.29,
      "ret3m": 271.97,
      "ret6m": 237.23,
      "maxRise1m": 235.47,
      "maxRise3m": 302.41,
      "maxRise6m": 304.44,
      "brk60d": true,
      "clsPos": 96.33,
      "ma150Slope": 8.44,
      "ta": {
        "price": 174.38,
        "resistance": null,
        "support": 64.11,
        "contraction": 2.82,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "모더나",
      "nameEn": "MODERNA INC",
      "detail": {
        "fetchedAt": "2026-08-20",
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
              "title": "Stock Market Today, Aug. 19: Moderna Skyrockets 177% on Positive Phase 3 Melanoma Data",
              "url": "https://www.nasdaq.com/articles/stock-market-today-aug-19-moderna-skyrockets-177-positive-phase-3-melanoma-data",
              "date": "2026-08-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRNA",
                "MRNA"
              ]
            },
            {
              "title": "Moderna or Merck: Which Soaring Cancer Vaccine Stock Is the Better Buy?",
              "url": "https://www.nasdaq.com/articles/moderna-or-merck-which-soaring-cancer-vaccine-stock-better-buy",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRK",
                "MRNA"
              ]
            },
            {
              "title": "Moderna and Merck Just Made History With the First mRNA Cancer Vaccine to Succeed in a Phase 3 Trial. Here's What That Means for Investors.",
              "url": "https://www.nasdaq.com/articles/moderna-and-merck-just-made-history-first-mrna-cancer-vaccine-succeed-phase-3-trial-heres",
              "date": "2026-08-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRNA",
                "MRNA"
              ]
            },
            {
              "title": "From COVID to Cancer: Moderna Scores Melanoma Breakthrough",
              "url": "https://www.nasdaq.com/articles/covid-cancer-moderna-scores-melanoma-breakthrough",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRK",
                "MRNA"
              ]
            },
            {
              "title": "Moderna (MRNA) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/moderna-mrna-q2-2026-earnings-call-transcript",
              "date": "2026-08-08",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRNA",
                "MRNA"
              ]
            },
            {
              "title": "MRK Stock Up 5.6% in a Month as Estimates Fall: Buy, Hold or Sell?",
              "url": "https://www.nasdaq.com/articles/mrk-stock-56-month-estimates-fall-buy-hold-or-sell",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "MRK",
                "AZN",
                "MRNA"
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
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MGRT",
      "price": 98.80000305175781,
      "marketCap": "1.36B",
      "sector": "Technology",
      "industry": "Information Technology Services",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.14883724478788155,
          "pct": 70.93862815884476
        },
        "m6": {
          "v": 14.782747514276931,
          "pct": 99.96384671005062
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.96384671005062,
      "adr": 5.58,
      "cyTrend": null,
      "nyTrend": null,
      "upCount": null,
      "downCount": null,
      "upDownRatio": null,
      "bbwthd": null,
      "bbwthdLow": 0.18,
      "high52": 58.12,
      "volx": 0.66,
      "volSurgeWk": 0.5,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 1.71,
      "div50": 15.46,
      "div200": 105.75,
      "ret1m": null,
      "ret3m": 14.88,
      "ret6m": 1478.27,
      "maxRise1m": 17.18,
      "maxRise3m": 85.24,
      "maxRise6m": 2682.32,
      "brk60d": false,
      "clsPos": 100,
      "ma150Slope": 23.39,
      "ta": {
        "price": 98.8,
        "resistance": 102.5,
        "support": 90.54,
        "contraction": 0.65,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2042,
        "m3": 0.0276,
        "m6": 0.0408,
        "rankPct6": 52.14,
        "count": 16
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "메가 포춘",
      "nameEn": "MEGA FORTUNE COMPANY LIMITED",
      "detail": {
        "fetchedAt": "2026-08-20",
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
      "ticker": "TWST",
      "price": 142.38999938964844,
      "marketCap": "8.93B",
      "sector": "Healthcare",
      "industry": "Diagnostics & Research",
      "rs": {
        "m1": {
          "v": 0.5114106864811193,
          "pct": 99.4097807757167
        },
        "m3": {
          "v": 1.350833747846557,
          "pct": 99.89169675090253
        },
        "m6": {
          "v": 1.9232190939424236,
          "pct": 99.31308749096168
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo",
        "6mo"
      ],
      "bestPct": 99.89169675090253,
      "adr": 8.14,
      "cyTrend": -22.08,
      "nyTrend": -17.03,
      "upCount": 5,
      "downCount": 2,
      "upDownRatio": 71.43,
      "bbwthd": 0.62,
      "bbwthdLow": 0.14,
      "high52": 99.68,
      "volx": 2.67,
      "volSurgeWk": 2.94,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 16.26,
      "div50": 46.67,
      "div200": 144.64,
      "ret1m": 51.14,
      "ret3m": 135.08,
      "ret6m": 192.32,
      "maxRise1m": 77.24,
      "maxRise3m": 135.71,
      "maxRise6m": 244.03,
      "brk60d": true,
      "clsPos": 97,
      "ma150Slope": 17.36,
      "ta": {
        "price": 142.39,
        "resistance": null,
        "support": 87.57,
        "contraction": 0.93,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1911,
        "m3": 0.3423,
        "m6": 0.237,
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
        "fetchedAt": "2026-08-20",
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
      "ticker": "AGL",
      "price": 93.63999938964844,
      "marketCap": "1.57B",
      "sector": "Healthcare",
      "industry": "Medical Care Facilities",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.08392175079548295,
          "pct": 55.12635379061371
        },
        "m6": {
          "v": 5.29512600938813,
          "pct": 99.89154013015184
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.89154013015184,
      "adr": 10.13,
      "cyTrend": -42.89,
      "nyTrend": -430.71,
      "upCount": 5,
      "downCount": 6,
      "upDownRatio": 45.45,
      "bbwthd": null,
      "bbwthdLow": 0.14,
      "high52": 70.38,
      "volx": 0.42,
      "volSurgeWk": 0.66,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 1.4,
      "div50": -11.65,
      "div200": 103.37,
      "ret1m": null,
      "ret3m": 8.39,
      "ret6m": 529.51,
      "maxRise1m": 33.08,
      "maxRise3m": 66.3,
      "maxRise6m": 1678.61,
      "brk60d": false,
      "clsPos": 21.21,
      "ma150Slope": 21.61,
      "ta": {
        "price": 93.64,
        "resistance": 100.5,
        "support": 93.01,
        "contraction": 0.86,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.1439,
        "m3": 0.1253,
        "m6": -0.017,
        "rankPct6": 75.71,
        "count": 12
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "애질론 헬스",
      "nameEn": "AGILON HEALTH INC",
      "detail": {
        "fetchedAt": "2026-08-18",
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
            },
            {
              "title": "Why Fast-paced Mover Agilon (AGL) Is a Great Choice for Value Investors",
              "url": "https://www.nasdaq.com/articles/why-fast-paced-mover-agilon-agl-great-choice-value-investors",
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
      "ticker": "TEAM",
      "price": 174.22999572753906,
      "marketCap": "44.10B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 1.040163847944919,
          "pct": 99.74704890387859
        },
        "m3": {
          "v": 1.0396862498515118,
          "pct": 99.81949458483754
        },
        "m6": {
          "v": 1.1935036517453717,
          "pct": 98.0115690527838
        }
      },
      "qualifiedBy": [
        "1mo",
        "3mo",
        "6mo"
      ],
      "bestPct": 99.81949458483754,
      "adr": 6.23,
      "cyTrend": -12.73,
      "nyTrend": -7.57,
      "upCount": 23,
      "downCount": 62,
      "upDownRatio": 27.06,
      "bbwthd": 0.99,
      "bbwthdLow": 0.22,
      "high52": 94.69,
      "volx": 1.42,
      "volSurgeWk": 1.4,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": 12.83,
      "div50": 69.36,
      "div200": 61.46,
      "ret1m": 104.02,
      "ret3m": 103.97,
      "ret6m": 119.35,
      "maxRise1m": 120.19,
      "maxRise3m": 136.73,
      "maxRise6m": 214.5,
      "brk60d": true,
      "clsPos": 86.89,
      "ma150Slope": -4.29,
      "ta": {
        "price": 174.23,
        "resistance": 176.72,
        "support": 165.43,
        "contraction": 1.31,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.2573,
        "m3": 0.2397,
        "m6": 0.2235,
        "rankPct6": 11.43,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "아틀라시언",
      "nameEn": "ATLASSIAN CORP",
      "detail": {
        "fetchedAt": "2026-08-20",
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
            },
            {
              "title": "What Does the Sale of Atlassian Stock Worth $1.2 Million by Its Chief Revenue Officer Mean for Investors?",
              "url": "https://www.nasdaq.com/articles/what-does-sale-atlassian-stock-worth-12-million-its-chief-revenue-officer-mean-investors",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TEAM",
                "TEAM"
              ]
            },
            {
              "title": "Atlassian Conference Highlights AI-Led Cloud Growth, Expanding Enterprise Demand",
              "url": "https://www.nasdaq.com/articles/atlassian-conference-highlights-ai-led-cloud-growth-expanding-enterprise-demand",
              "date": "2026-08-18",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TEAM"
              ]
            },
            {
              "title": "Atlassian vs. Salesforce: Which Cloud Software Stock Has an Edge?",
              "url": "https://www.nasdaq.com/articles/atlassian-vs-salesforce-which-cloud-software-stock-has-edge",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CRM",
                "TEAM"
              ]
            },
            {
              "title": "This Software Stock Is Up 74% in 1 Month, and It Can Keep Climbing Higher From Here",
              "url": "https://www.nasdaq.com/articles/software-stock-74-1-month-and-it-can-keep-climbing-higher-here",
              "date": "2026-08-15",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "TEAM",
                "TEAM"
              ]
            },
            {
              "title": "ROP Gains From Robust Application Software Unit: A Sign for More Upside?",
              "url": "https://www.nasdaq.com/articles/rop-gains-robust-application-software-unit-sign-more-upside",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ROP",
                "ADSK",
                "TEAM"
              ]
            }
          ],
          "directCount": 4,
          "total": 6,
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
      "ticker": "MXL",
      "price": 66.43000030517578,
      "marketCap": "6.02B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": -0.23467744274658192,
          "pct": 1.93929173693086
        },
        "m3": {
          "v": -0.33007263158704636,
          "pct": 1.768953068592058
        },
        "m6": {
          "v": 2.707031251247307,
          "pct": 99.81923355025307
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.81923355025307,
      "adr": 10.6,
      "cyTrend": 30.84,
      "nyTrend": 37.74,
      "upCount": 31,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.47,
      "bbwthdLow": 0.24,
      "high52": 51.78,
      "volx": 0.74,
      "volSurgeWk": 1.12,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -10.51,
      "div50": -19.09,
      "div200": 49.01,
      "ret1m": -23.47,
      "ret3m": -33.01,
      "ret6m": 270.7,
      "maxRise1m": 68.15,
      "maxRise3m": 128.17,
      "maxRise6m": 772.79,
      "brk60d": false,
      "clsPos": 1.9,
      "ma150Slope": 15.22,
      "ta": {
        "price": 66.43,
        "resistance": 94.55,
        "support": 56.23,
        "contraction": 0.84,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0265,
        "m3": -0.0129,
        "m6": 0.3973,
        "rankPct6": 3.57,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "맥스리니어",
      "nameEn": "MAXLINEAR INC",
      "detail": {
        "fetchedAt": "2026-08-18",
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
            },
            {
              "title": "MaxLinear Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/maxlinear-q2-earnings-call-highlights",
              "date": "2026-07-23",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL"
              ]
            },
            {
              "title": "AAOI vs. MXL: Which AI Data Center Infrastructure Stock Has an Edge?",
              "url": "https://www.nasdaq.com/articles/aaoi-vs-mxl-which-ai-data-center-infrastructure-stock-has-edge",
              "date": "2026-07-16",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MXL",
                "AAOI"
              ]
            }
          ],
          "directCount": 7,
          "total": 7,
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
      "ticker": "CORT",
      "price": 119.0199966430664,
      "marketCap": "12.87B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.9764196982803837,
          "pct": 99.74729241877256
        },
        "m6": {
          "v": 2.3264393712594003,
          "pct": 99.53000723065799
        }
      },
      "qualifiedBy": [
        "3mo",
        "6mo"
      ],
      "bestPct": 99.74729241877256,
      "adr": 4.42,
      "cyTrend": 337.61,
      "nyTrend": 81.03,
      "upCount": 5,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.19,
      "high52": 97.39,
      "volx": 0.8,
      "volSurgeWk": 1.22,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 4.75,
      "div50": 24.96,
      "div200": 86.67,
      "ret1m": null,
      "ret3m": 97.64,
      "ret6m": 232.64,
      "maxRise1m": 35.79,
      "maxRise3m": 107.03,
      "maxRise6m": 284.19,
      "brk60d": false,
      "clsPos": 23.72,
      "ma150Slope": 11.35,
      "ta": {
        "price": 119.02,
        "resistance": 122.21,
        "support": 90,
        "contraction": 0.57,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "코셉트 테라퓨틱스",
      "nameEn": "CORCEPT THERAPEUTICS INC",
      "detail": {
        "fetchedAt": "2026-08-18",
        "nameKo": "코셉트 테라퓨틱스",
        "nameEn": "CORCEPT THERAPEUTICS INC",
        "infomaxCode": "NAS:CORT",
        "financials": {
          "ok": true,
          "ticker": "CORT",
          "cik": "0001088856",
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
              "revenue": 256147000,
              "profit": 41300000,
              "netIncome": 42987000,
              "margin": 16.1,
              "yoy": {
                "revenue": 31.7,
                "profit": 54.8,
                "netIncome": 22.3,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 164903000,
              "profit": -49601000,
              "netIncome": -31761000,
              "margin": -30.1,
              "yoy": {
                "revenue": 4.9,
                "profit": -1552,
                "netIncome": -254.6,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 202125000,
              "profit": 4487000,
              "netIncome": 24288000,
              "margin": 2.2,
              "yoy": {
                "revenue": 11.1,
                "profit": -82.2,
                "netIncome": -21,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 207638000,
              "profit": 10219000,
              "netIncome": 19668000,
              "margin": 4.9,
              "yoy": {
                "revenue": 13.7,
                "profit": -78.1,
                "netIncome": -58.3,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001088856&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "CORT",
          "items": [
            {
              "title": "Why Corcept Therapeutics (CORT) is a Top Momentum Stock for the Long-Term",
              "url": "https://www.nasdaq.com/articles/why-corcept-therapeutics-cort-top-momentum-stock-long-term",
              "date": "2026-08-05",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CORT"
              ]
            },
            {
              "title": "Corcept Therapeutics (CORT) Q2 Earnings and Revenues Surpass Estimates",
              "url": "https://www.nasdaq.com/articles/corcept-therapeutics-cort-q2-earnings-and-revenues-surpass-estimates",
              "date": "2026-07-29",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CORT",
                "MDGL"
              ]
            },
            {
              "title": "Corcept Therapeutics Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/corcept-therapeutics-q2-earnings-call-highlights",
              "date": "2026-07-29",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CORT"
              ]
            },
            {
              "title": "Corcept Therapeutics Q2 Profit Rises; Raises FY26 Outlook",
              "url": "https://www.nasdaq.com/articles/corcept-therapeutics-q2-profit-rises-raises-fy26-outlook",
              "date": "2026-07-29",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CORT"
              ]
            },
            {
              "title": "Are Medical Stocks Lagging  Corcept Therapeutics (CORT) This Year?",
              "url": "https://www.nasdaq.com/articles/are-medical-stocks-lagging-corcept-therapeutics-cort-year",
              "date": "2026-07-23",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CORT",
                "DGX"
              ]
            },
            {
              "title": "Corcept's CFO Set His Selling Plan the Month the Stock Fell 50% — Here's What Investors Should Know",
              "url": "https://www.nasdaq.com/articles/corcepts-cfo-set-his-selling-plan-month-stock-fell-50-heres-what-investors-should-know",
              "date": "2026-07-21",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CORT",
                "CORT"
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
            "filingDate": "2026-07-29",
            "reportDate": "2026-07-29",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1088856/000162828026050607/cort-20260729.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-17",
            "reportDate": "2026-06-17",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1088856/000119312526274258/d159941d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-03",
            "reportDate": "2026-05-19",
            "items": [
              "8.01"
            ],
            "itemsKo": [
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1088856/000119312526254622/d103585d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-28",
            "reportDate": "2026-05-21",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1088856/000162828026038793/cort-20260521.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-30",
            "reportDate": "2026-04-30",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1088856/000162828026028892/cort-20260430.htm",
            "description": "8-K"
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
            "url": "https://www.sec.gov/Archives/edgar/data/1088856/000119312526123543/d123475d8k.htm",
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
      "ticker": "DELL",
      "price": 437.54998779296875,
      "marketCap": "282.72B",
      "sector": "Technology",
      "industry": "Computer Hardware",
      "rs": {
        "m1": {
          "v": -0.00961973770355011,
          "pct": 34.991568296795954
        },
        "m3": {
          "v": 0.4847150637869909,
          "pct": 96.4259927797834
        },
        "m6": {
          "v": 2.6198363862325094,
          "pct": 99.7469269703543
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.7469269703543,
      "adr": 7.15,
      "cyTrend": 1.39,
      "nyTrend": -0.66,
      "upCount": 7,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.3,
      "bbwthdLow": 0.14,
      "high52": 85.13,
      "volx": 1.18,
      "volSurgeWk": 1.21,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": -5.82,
      "div50": 2.92,
      "div200": 87.31,
      "ret1m": -0.96,
      "ret3m": 48.47,
      "ret6m": 261.98,
      "maxRise1m": 43.22,
      "maxRise3m": 72.44,
      "maxRise6m": 279.43,
      "brk60d": false,
      "clsPos": 22.64,
      "ma150Slope": 18.81,
      "ta": {
        "price": 437.55,
        "resistance": 444,
        "support": 378.66,
        "contraction": 0.91,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0107,
        "m3": 0.1716,
        "m6": 1.276,
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
        "fetchedAt": "2026-08-19",
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
              "title": "Bull of the Day: Dell (DELL)",
              "url": "https://www.nasdaq.com/articles/bull-day-dell-dell",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Dell Technologies (DELL) Is Up 8.16% in One Week: What You Should Know",
              "url": "https://www.nasdaq.com/articles/dell-technologies-dell-816-one-week-what-you-should-know",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Dell Technologies (DELL) Exceeds Market Returns: Some Facts to Consider",
              "url": "https://www.nasdaq.com/articles/dell-technologies-dell-exceeds-market-returns-some-facts-consider",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Will Dell Technologies (DELL) Beat Estimates Again in Its Next Earnings Report?",
              "url": "https://www.nasdaq.com/articles/will-dell-technologies-dell-beat-estimates-again-its-next-earnings-report-0",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Top Big Data Stocks Tapping the Surging Demand for AI Analytics",
              "url": "https://www.nasdaq.com/articles/top-big-data-stocks-tapping-surging-demand-ai-analytics",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "DELL",
                "NVDA",
                "PLTR"
              ]
            },
            {
              "title": "How to Find Strong Buy Computer and Technology Stocks Using the Zacks Rank",
              "url": "https://www.nasdaq.com/articles/how-find-strong-buy-computer-and-technology-stocks-using-zacks-rank-2",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "DELL"
              ]
            },
            {
              "title": "Why Investors Need to Take Advantage of These 2 Computer and Technology Stocks Now",
              "url": "https://www.nasdaq.com/articles/why-investors-need-take-advantage-these-2-computer-and-technology-stocks-now",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "DELL",
                "MU"
              ]
            },
            {
              "title": "Buy Lenovo Group (LNVGY) Stock for Higher Highs Ahead of Earnings?",
              "url": "https://www.nasdaq.com/articles/buy-lenovo-group-lnvgy-stock-higher-highs-ahead-earnings",
              "date": "2026-08-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "AAPL",
                "DELL",
                "NVDA"
              ]
            }
          ],
          "directCount": 4,
          "total": 8,
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
              "secureId": "eqlciziegxilkkggcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlciziegxilkkggcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] Go out and buy a Dell",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-05-29",
              "summary": "- 실적발표 이후 40% 주가 상승. 단순 AI 서버 OEM에서 플랫폼 기업으로 확장. 기대를 서프라이즈 실적으로 증명. 커버리지 내 최선호주 제시- FY1Q27 매출액 438억달러(YoY+87.5%, 이하 전년동기대비), 영업이익 42억달러(+154.2%, OPM 9.7%)로 컨센서스를 각각 23.4%, 52.8% 상회. AI 서버 매출은 161억달러(+757%) 기록. 1분기 AI 서버 주문 244억달러, 백로그 513억달러 달성. FY27 AI 서버 매출 가이던스 600억달러로 상향- 전통 서버 매출도 85억달러(+92%) 기록. Agentic AI 확산으로 전통 서버 의 AI 추론 및 내부 워크로드 처리 역할 확대. 14세대 이하 서버 설치 기 반이 여전히 큰 상황에서, 18세대 서버는 14세대 13대 통합 효과 제공. 평 균단가 상승에도 비용 절감 효과가 커서 교체 수요 기반 매출 확대 전망. CSG 부문(+17%)도 점유율과 수익성 개선(+2.6%p)으로 하방을 뒷받침",
              "pages": "5",
              "secureId": "eqlcciqxcilleikgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlcciqxcilleikgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] AI 인프라 기업으로 재평가",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-04-27",
              "summary": "- 시장은 델을 AI 인프라 기업으로 바라보기 시작- PC와 전통 서버 판매에 AI가 더해졌다- 전통 PC OEM에서 AI 인프라 기업으로 멀티플 확장 국면 진입",
              "pages": "22",
              "secureId": "eqqqglcgmceemikgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqqglcgmceemikgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] AI 고성장, 메모리 가격은 관리 가능 수준",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2026-02-27",
              "summary": "- 델의 FY 4Q26 매출액은 334억 달러(YoY +39.5%), EPS는 3.89 달러 (YoY +45.1%)를 기록해 컨센서스를 각각 5.2%, 10.5% 상회했다. 각 각 가이던스 상단(320억 달러, 3.50 달러)을 초과했다.- 델은 FY 1Q27 가이던스를 중간값 기준 매출액 352억 달러(YoY +50.6%, vs. 컨센서스 293억 달러), EPS 2.9 달러(YoY +87.1%, vs. 컨 센서스 2.4 달러)로 제시했다- 2027 연간으로는 매출액 1,400억 달러 (YoY +23.3%, vs. 컨센서스 1,263억 달러), EPS 12.90 달러(YoY +25.2%, vs. 컨센서스 11.56 달러)를 기록할 것으로 예상했다. 현재 AI 서버 수주잔고는 엔비디아 그레이스 블랙웰 제품 비중이 압도적이며, 차세대 베라루빈 아키텍처는 회계연도 하반기 출하가 예정돼 있다",
              "pages": "7",
              "secureId": "eqqgeligkiqmcgqgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgeligkiqmcgqgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[델 테크놀로지스 (NYS:DELL)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2025-11-26",
              "summary": "- 매출액 270억 달러(YoY +10.8%), 조정 EPS 2.59 달러(YoY +20.5%)로 각각 예상치 0.7% 하회, 4.9% 상회. AI 서버 출하량 증가 및 운영 효율성으로 3분기 기준 매출, EPS 최고치 경신- CSG: 상업용 클라이언트, 소비자 매출은 각각 106.2억 달러(YoY +4.8%), 18.6억 달러(YOY -6.8%). 상업용 클라이언트 부문은 5분기 연속 매출 성장, 중소기업 전반에서 강력한 수요 확인. 소비자 수요와 심리는 3년 만에 성장세로 전환- AI 서버 수요 증가에 기록적 출하액, 수주잔고 달성. 4Q26 가이던스 시장 예상 대폭 상회. 시간 외 3.5% 상승",
              "pages": "1",
              "secureId": "eqxkeggxcizekzmgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkeggxcizekzmgcgxclem.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MNPR",
      "price": 123.83999633789062,
      "marketCap": "0.83B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.9619771614941115,
          "pct": 99.67509025270758
        },
        "m6": {
          "v": 1.2658494026863063,
          "pct": 98.30079537237889
        }
      },
      "qualifiedBy": [
        "3mo",
        "6mo"
      ],
      "bestPct": 99.67509025270758,
      "adr": 6.18,
      "cyTrend": 3.52,
      "nyTrend": -36.89,
      "upCount": 21,
      "downCount": 4,
      "upDownRatio": 84,
      "bbwthd": null,
      "bbwthdLow": 0.13,
      "high52": 99.21,
      "volx": 1.54,
      "volSurgeWk": 2.01,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 6.03,
      "div50": 26.43,
      "div200": 70.44,
      "ret1m": null,
      "ret3m": 96.2,
      "ret6m": 126.58,
      "maxRise1m": 23.58,
      "maxRise3m": 116.33,
      "maxRise6m": 149.29,
      "brk60d": false,
      "clsPos": 95.46,
      "ma150Slope": 9.53,
      "ta": {
        "price": 123.84,
        "resistance": 124.82,
        "support": 104.75,
        "contraction": 0.77,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "모노파 테라퓨틱스",
      "nameEn": "MONOPAR THERAPEUTICS INC"
    },
    {
      "ticker": "BAND",
      "price": 52.29999923706055,
      "marketCap": "1.68B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": -0.14806972215283395,
          "pct": 9.133574007220217
        },
        "m6": {
          "v": 2.531397552682455,
          "pct": 99.67462039045553
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.67462039045553,
      "adr": 8.7,
      "cyTrend": -2.78,
      "nyTrend": -15.28,
      "upCount": 2,
      "downCount": 14,
      "upDownRatio": 12.5,
      "bbwthd": null,
      "bbwthdLow": 0.38,
      "high52": 66.14,
      "volx": 0.8,
      "volSurgeWk": 1.24,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 1.16,
      "div50": -9.38,
      "div200": 67.28,
      "ret1m": null,
      "ret3m": -14.81,
      "ret6m": 253.14,
      "maxRise1m": 85.78,
      "maxRise3m": 124.66,
      "maxRise6m": 463.25,
      "brk60d": false,
      "clsPos": 16.16,
      "ma150Slope": 14.29,
      "ta": {
        "price": 52.3,
        "resistance": 75.98,
        "support": 48.15,
        "contraction": 0.73,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2162,
        "m3": 0.1468,
        "m6": 0.3292,
        "rankPct6": 6.43,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "밴드위스",
      "nameEn": "BANDWIDTH INC",
      "detail": {
        "fetchedAt": "2026-08-20",
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
            },
            {
              "title": "Bandwidth Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/bandwidth-q2-earnings-call-highlights",
              "date": "2026-07-29",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "BAND"
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
      "ticker": "SNOW",
      "price": 325.010009765625,
      "marketCap": "112.65B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 0.21362966609574408,
          "pct": 89.96627318718382
        },
        "m3": {
          "v": 0.8873984641434843,
          "pct": 99.60288808664261
        },
        "m6": {
          "v": 0.878019267020877,
          "pct": 96.56543745480839
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.60288808664261,
      "adr": 4.57,
      "cyTrend": 0.06,
      "nyTrend": 0.26,
      "upCount": 154,
      "downCount": 11,
      "upDownRatio": 93.33,
      "bbwthd": 0.33,
      "bbwthdLow": 0.08,
      "high52": 95.05,
      "volx": 0.73,
      "volSurgeWk": 1,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": -1.4,
      "div50": 18.12,
      "div200": 50.96,
      "ret1m": 21.36,
      "ret3m": 88.74,
      "ret6m": 87.8,
      "maxRise1m": 34.84,
      "maxRise3m": 97.57,
      "maxRise6m": 189.05,
      "brk60d": false,
      "clsPos": 89.77,
      "ma150Slope": 5.96,
      "ta": {
        "price": 325.01,
        "resistance": 341.95,
        "support": 253.59,
        "contraction": 0.76,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2573,
        "m3": 0.2397,
        "m6": 0.2235,
        "rankPct6": 11.43,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "스노우플레이크",
      "nameEn": "SNOWFLAKE INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "스노우플레이크",
        "nameEn": "SNOWFLAKE INC",
        "infomaxCode": "NYS:SNOW",
        "financials": {
          "ok": true,
          "ticker": "SNOW",
          "cik": "0001640147",
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
              "periodStart": "2025-10-31",
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
              "periodStart": "2025-08-01",
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
            },
            {
              "periodStart": "2025-05-01",
              "periodEnd": "2025-07-31",
              "derived": false,
              "revenue": 1144969000,
              "profit": -340276000,
              "netIncome": -298017000,
              "margin": -29.7,
              "yoy": {
                "revenue": 31.8,
                "profit": 4.2,
                "netIncome": 6,
                "priorEnd": "2024-07-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001640147&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "SNOW",
          "items": [
            {
              "title": "Snowflake vs. DELL: Which AI Infrastructure Stock Is the Better Buy?",
              "url": "https://www.nasdaq.com/articles/snowflake-vs-dell-which-ai-infrastructure-stock-better-buy",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "DELL",
                "SNOW"
              ]
            },
            {
              "title": "Snowflake Inc. (SNOW) Suffers a Larger Drop Than the General Market: Key Insights",
              "url": "https://www.nasdaq.com/articles/snowflake-inc-snow-suffers-larger-drop-general-market-key-insights",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNOW"
              ]
            },
            {
              "title": "Reddit vs. Snowflake: Which High-Growth Tech Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/reddit-vs-snowflake-which-high-growth-tech-stock-better-buy-2026",
              "date": "2026-08-16",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "RDDT",
                "RDDT",
                "SNOW"
              ]
            },
            {
              "title": "Snowflake vs. Verizon: Which Technology Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/snowflake-vs-verizon-which-technology-stock-better-buy-2026",
              "date": "2026-08-15",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNOW",
                "SNOW",
                "VZ"
              ]
            },
            {
              "title": "Snowflake Inc. (SNOW) Rises As Market Takes a Dip: Key Facts",
              "url": "https://www.nasdaq.com/articles/snowflake-inc-snow-rises-market-takes-dip-key-facts",
              "date": "2026-08-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNOW"
              ]
            },
            {
              "title": "SpaceX Has Slumped Since Its Debut. Here Is Where History Says the Stock Heads Next.",
              "url": "https://www.nasdaq.com/articles/spacex-has-slumped-its-debut-here-where-history-says-stock-heads-next",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "META",
                "BABA",
                "SNOW"
              ]
            },
            {
              "title": "Is ZETA Worth Buying Now as Growth Surges but Valuation Stays Rich?",
              "url": "https://www.nasdaq.com/articles/zeta-worth-buying-now-growth-surges-valuation-stays-rich",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ZETA",
                "SNOW",
                "PLTR"
              ]
            },
            {
              "title": "ZETA Jumps 12.9% in One Week as AI Momentum Builds: Is There More?",
              "url": "https://www.nasdaq.com/articles/zeta-jumps-129-one-week-ai-momentum-builds-there-more",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ZETA",
                "SNOW",
                "PLTR"
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
            "filingDate": "2026-07-16",
            "reportDate": "2026-07-15",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000162828026048373/snow-20260715.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-30",
            "reportDate": "2026-06-29",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000032/snow-20260629.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000027/snow-20260527.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-31",
            "reportDate": "2026-03-31",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000013/snow-20260331.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-25",
            "reportDate": "2026-02-25",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/snow-20260225.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-02",
            "reportDate": "2026-01-28",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1640147/000162828026004606/snow-20260128.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 6,
          "reports": [
            {
              "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
              "broker": "키움증권",
              "analyst": "김승혁",
              "date": "2026-06-01",
              "summary": "- 스노우플레이크는 클라우드에 데이터를 모아 저장·분석해주는 데이터 플랫폼 기업- FY1Q27 실적은 성장률 재가속과 가이던스 상향 등 긍정적. 발표 후 주가 +36%- 기업용 데이터·AI 플랫폼 시장 확장, 고객 확보 속도 증가 등에 우호적 흐름 전망",
              "pages": "6",
              "secureId": "eqlcgxlggimzelmgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 꺾이지 않은 성장, 남은 건 ‘증명’",
              "broker": "키움증권",
              "analyst": "김승혁",
              "date": "2026-02-27",
              "summary": "- 스노우플레이크는 데이터 저장·분석과 AI 활용을 지원하는 클라우드 데이터 플랫폼- FY4Q26은 매출 +30% 성장, NRR 125%, RPO +42%로 성장 탄력이 유지된 실적- FY27 성장 둔화, RPO 단기 인식 비중 하락 속 Cortex Code가 성장 재가속의 핵심",
              "pages": "4",
              "secureId": "eqqgemlmilqxxqzgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgemlmilqxxqzgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 높은 상호운용성 핵심",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2026-02-26",
              "summary": "- AI 에이전트 확산으로 인한 비용 최적화 위험 비교적 적음- 원래부터 높았던 AI 기여도가 한층 더 확대 + 상호운용성 확장- 전년대비 제품 매출 +27% 성장 가이던스는 보수적으로 제시된 수치",
              "pages": "6",
              "secureId": "eqqgcmxeclqgmlxgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgcmxeclqgmlxgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 사실은 괜찮은 실적",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2025-12-05",
              "summary": "- FY3Q26은 호실적 달성에도 불구하고 4Q 가이던스를 아쉽게 제시하며 직후 주가 급락- AI는 동사에게 별도의 모멘텀이 아니라 기존 플랫폼 사용량을 끌어올리는 직접적 성장 엔진- 2Q의 대규모 마이그레이션 효과에서 정상 패턴으로의 복귀 때문에 이번 분기 실적이 언뜻 아쉬워보일 수 있으나, 레거시 시스템의 데이터 수집 및 마이그레이션은 여전히 규모가 크고 미완성된 시장임을 염두에 두어야 함 (AWS는 온프레미스 마이그레이션이 15-20%만 완료되었다고 간주).",
              "pages": "6",
              "secureId": "eqxklllckxqgkxqgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxklllckxqgkxqgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 데이터 웨어하우징 2위 업체, 24년의 오랜 하락 끝 턴어라운드",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2025-09-25",
              "summary": "- 스노우플레이크는 클라우드 기반 데이터 웨어하우징(DWaaS) 및 분석 업체. 고객이 사용하는 서비스에 대해서만 비용을 지불하는 소비 기반 가격 책정 전략이 경쟁사와의 가장 큰 차별점- 이로 인해 대부분의 SW 업체가 채택하는 선수지표들(Billings, RPO, Backlog, 이연수익 등)이 불명확해지지 않은가 하는 우려가 있을 수 있지만, 계약 Capa 만큼 미리 청구를 해서 계약 최소금을 Booking으로 잡아놓기 때문에 오히려 선수지표 추이보다 매출에 인식되는 부분이 클 수 있음- AI로 인해 데이터의 양과 종류가 기하급수적으로 폭증. 이로 인해 고객 데이터 플랫폼(CDP) 시장이 점점 더 중요해지면서 TAM과 고객 기반이 모두 빠르게 확대",
              "pages": "2",
              "secureId": "eqzlqqziceiqmxqgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzlqqziceiqmxqgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 신규 고객의 높은 AI 수요 비중",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2025-08-29",
              "summary": "- 스노우플레이크는 데이터웨어하우징(DWaaS) 산업에서 추정 점유율 2위를 보유하고 있는 업체. FY2Q26에 호실적 및 가이던스 상향으로 직후 주가 급등을 이끌어내며, 전날 발표한 몽고DB 호실적과 함께 데이터 SW 전반 의 강세 증명- 순유지율은 125%로 전분기 대비 개선. 상반기에만 250개 기능을 정식 출 시한 점이 주효(신제품: Cortex Agent, Gen2 웨어하우스, Snowflake Postgres, OpenFlow, Apache Spark용 Snowpark Connect 등)- 2분기 신규 고객의 51%와 전체 활용 사례의 25%에 AI가 중요한 영향을 미쳤으며, 현재 약 6,100개 계정이 동사의 AI를 매주 사용하고 있다고 밝 힘",
              "pages": "6",
              "secureId": "eqzxkgicieikqlegcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzxkgicieikqlegcgxclem.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ELF",
      "price": 99.6500015258789,
      "marketCap": "5.88B",
      "sector": "Consumer Defensive",
      "industry": "Household & Personal Products",
      "rs": {
        "m1": {
          "v": 0.2609136159063659,
          "pct": 93.50758853288364
        },
        "m3": {
          "v": 0.8837428856619163,
          "pct": 99.53068592057762
        },
        "m6": {
          "v": 0.052826200944465024,
          "pct": 45.58929862617499
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.53068592057762,
      "adr": 5.14,
      "cyTrend": 9.36,
      "nyTrend": 5.14,
      "upCount": 34,
      "downCount": 28,
      "upDownRatio": 54.84,
      "bbwthd": 0.31,
      "bbwthdLow": 0.16,
      "high52": 66,
      "volx": 1.22,
      "volSurgeWk": 1.78,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": 5.68,
      "div50": 28.84,
      "div200": 32.65,
      "ret1m": 26.09,
      "ret3m": 88.37,
      "ret6m": 5.28,
      "maxRise1m": 35.65,
      "maxRise3m": 106.25,
      "maxRise6m": 106.25,
      "brk60d": true,
      "clsPos": 83.05,
      "ma150Slope": 1.48,
      "ta": {
        "price": 99.65,
        "resistance": 114.61,
        "support": 98.5,
        "contraction": 1.05,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.002,
        "m3": 0.0539,
        "m6": -0.0903,
        "rankPct6": 89.29,
        "count": 10
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "엘프 뷰티",
      "nameEn": "E L F BEAUTY INC",
      "detail": {
        "fetchedAt": "2026-08-14",
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
              "title": "e.l.f. Beauty (ELF) Q1 2027 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/elf-beauty-elf-q1-2027-earnings-call-transcript",
              "date": "2026-08-13",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF",
                "ELF"
              ]
            },
            {
              "title": "Why e.l.f. Beauty (ELF) is a Top Momentum Stock for the Long-Term",
              "url": "https://www.nasdaq.com/articles/why-elf-beauty-elf-top-momentum-stock-long-term",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF"
              ]
            },
            {
              "title": "ELF Q1 Earnings Call Highlights Higher Outlook and Rhode Growth",
              "url": "https://www.nasdaq.com/articles/elf-q1-earnings-call-highlights-higher-outlook-and-rhode-growth",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF"
              ]
            },
            {
              "title": "e.l.f. Beauty (ELF) Surpasses Q1 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/elf-beauty-elf-surpasses-q1-earnings-and-revenue-estimates",
              "date": "2026-08-05",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF",
                "EL"
              ]
            },
            {
              "title": "e.l.f. Beauty (ELF) Outperforms Broader Market: What You Need to Know",
              "url": "https://www.nasdaq.com/articles/elf-beauty-elf-outperforms-broader-market-what-you-need-know",
              "date": "2026-07-30",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ELF"
              ]
            }
          ],
          "directCount": 8,
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
          },
          {
            "form": "8-K",
            "filingDate": "2025-08-26",
            "reportDate": "2025-08-21",
            "items": [
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1600033/000160003325000043/elf-20250821.htm",
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
              "secureId": "eqqmkcimxiexzmzgcgxclek",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqmkcimxiexzmzgcgxclek.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] Rhode만이 희망이다",
              "broker": "키움증권",
              "analyst": "조소정",
              "date": "2026-02-06",
              "summary": "- 미국 화장품 브랜드사. 본업은 성장이 둔화되고 있지만, 인수 브랜드 Rhode가 성장을 견인 중- 향후 주가는 Rhode의 글로벌 채널 확장 속도 및 성과에 따라 달라질 수 있을 듯- 2 월에는 호주, 뉴질랜드 런칭을 시작으로 해외 유통 확대가 본격화될 예정. 주요 채널 내 성과에 주목",
              "pages": "4",
              "secureId": "eqqcizzcxelmexlgcgxclek",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcizzcxelmexlgcgxclek.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] FY 3Q26 Re: 관세 터널을 무사히 지나다",
              "broker": "메리츠증권",
              "analyst": "박종대",
              "date": "2026-02-06",
              "summary": "- 매출 시장 기대치(컨센서스 매출: 4.6억달러) 7% 상회, Rhode 인수 효과 반영(제외 시 YoY 2% 성장)- 조정 순이익(Non-GAAP) 0.75억달러, 시장 기대치 75% 상회(컨센서스 0.43억달러)- 28분기 연속 매출 성장 및 시장 점유율 상승(QoQ 1.3%p) 달성, e.l.f. 및 Rhode 성장세 고무적",
              "pages": "6",
              "secureId": "eqqcizgkzzkcexmgcgxclek",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcizgkzzkcexmgcgxclek.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] M&A 통한 외형 성장 시현",
              "broker": "신한투자증권",
              "analyst": "박현진",
              "date": "2026-02-06",
              "summary": "- 전세계 저가 인디뷰티 브랜드 수요 증가로 2026년에도 매출은 두 자리 성 장률 유지할 전망. M&A 통한 외형 확대 전략도 유효. 타겟이나 월마트 등 중저가 위주 유통채널 전개에서 세포라까지 확장 국면.- FY26 3Q 순매출(3월 결산) 전년동기대비 38% 성장, 조정 EBITDA 79% 증가. 이 중 Rhode 인수에 따른 매출 증가분이 30%p 이상 기여. 조정 주 당순이익은 1.24달러로 컨센서스 0.72달러 대폭 상회- 글로벌 프로모션 및 슈퍼볼 광고 등 마케팅비 투자 지속되며, 관세 부담 높으나 M&A 브랜드 중심 매출 고성장으로 마진 회복 노력할 것이라 피 력. 오프라인 채널뿐만 아니라 이커머스 중심으로 미국 10~20대들의 트래 픽을 유입시키려 노력 중",
              "pages": "5",
              "secureId": "eqqciiglzzkizkggcgxclek",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqciiglzzkizkggcgxclek.pdf",
              "opinion": null
            },
            {
              "title": "[엘프 뷰티 (NYS:ELF)] 재도약 위한 리밸런싱",
              "broker": "신한투자증권",
              "analyst": "박현진",
              "date": "2025-11-25",
              "summary": "- 미국 시장 내 저가 인디뷰티 브랜드 수요 증가로 향후 매출은 두 자리 성 장률을 유지할 전망. 다만 중국 생산 비중 70% 이상으로 미국 내 수입 시 관세 부담 커진 게 이익 부진 및 주가 수익률 부진의 주요인- M&A 통해 브랜드 확장 지속하여 매출 성장 끌고 갈 전망. 매출보단 이 익 회복이 주가 추세 상승을 만들 포인트. 회복 기간 다소 소요 예상되나 중장기로는 인디뷰티 대세장의 대표 기업임은 자명함- 현 시장 컨센서스는 3Q25 매출이 전년동기대비 14% 성장한 데 이어 4Q25에도 20% 이상 성장할 것으로 전망 중. 특히 저가 스킨케어 제품 수 요가 증가하는 트렌드 속에서 동사도 2023년 10월 인수했던 스킨케어 브 랜드 Naturium 통해 스킨케어 비중 높이는 중. 2026년 기준 스킨케어 카 테고리의 매출 비중은 20%를 초과할 것으로 예상",
              "pages": "5",
              "secureId": "eqxkcgiqgieclqqgcgxclek",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkcgiqgieclqqgcgxclek.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "QLYS",
      "price": 186.67999267578125,
      "marketCap": "6.46B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.823581006810261,
          "pct": 99.45848375451264
        },
        "m6": {
          "v": 0.9927411621225972,
          "pct": 97.14389009399855
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.45848375451264,
      "adr": 5.56,
      "cyTrend": 2.7,
      "nyTrend": 1.74,
      "upCount": 61,
      "downCount": 12,
      "upDownRatio": 83.56,
      "bbwthd": null,
      "bbwthdLow": 0.12,
      "high52": 92.63,
      "volx": 0.62,
      "volSurgeWk": 0.74,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 0.02,
      "div50": 26.48,
      "div200": 52.77,
      "ret1m": null,
      "ret3m": 82.36,
      "ret6m": 99.27,
      "maxRise1m": 53.85,
      "maxRise3m": 105.07,
      "maxRise6m": 170.49,
      "brk60d": false,
      "clsPos": 71.78,
      "ma150Slope": 3.51,
      "ta": {
        "price": 186.68,
        "resistance": 201.54,
        "support": 140.31,
        "contraction": 0.86,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2162,
        "m3": 0.1468,
        "m6": 0.3292,
        "rankPct6": 6.43,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "퀄리스",
      "nameEn": "QUALYS INC",
      "detail": {
        "fetchedAt": "2026-08-20",
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
      "ticker": "ORKA",
      "price": 109.69000244140625,
      "marketCap": "7.26B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": 0.18545340849986955,
          "pct": 86.93086003372682
        },
        "m3": {
          "v": 0.8097673871772297,
          "pct": 99.38628158844766
        },
        "m6": {
          "v": 2.1960956706520176,
          "pct": 99.45770065075922
        }
      },
      "qualifiedBy": [
        "3mo",
        "6mo"
      ],
      "bestPct": 99.45770065075922,
      "adr": 5.56,
      "cyTrend": 11.98,
      "nyTrend": 11.23,
      "upCount": 7,
      "downCount": 5,
      "upDownRatio": 58.33,
      "bbwthd": 0.32,
      "bbwthdLow": 0.17,
      "high52": 94.96,
      "volx": 1.82,
      "volSurgeWk": 1.71,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 2.61,
      "div50": 22.15,
      "div200": 103.01,
      "ret1m": 18.55,
      "ret3m": 80.98,
      "ret6m": 219.61,
      "maxRise1m": 35.67,
      "maxRise3m": 115.42,
      "maxRise6m": 268.81,
      "brk60d": false,
      "clsPos": 27.07,
      "ma150Slope": 17.84,
      "ta": {
        "price": 109.69,
        "resistance": null,
        "support": 85.14,
        "contraction": 1,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "오루카 테라퓨틱스",
      "nameEn": "ORUKA THERAPEUTICS INC",
      "detail": {
        "fetchedAt": "2026-08-18",
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
            },
            {
              "title": "An Oruka Therapeutics (ORKA) Insider Sold 105,000 Shares Worth $6.2 Million",
              "url": "https://www.nasdaq.com/articles/oruka-therapeutics-orka-insider-sold-105000-shares-worth-62-million",
              "date": "2026-05-31",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA",
                "ORKA"
              ]
            },
            {
              "title": "Oruka Therapeutics (ORKA) Price Target Increased by 50.51% to 138.41",
              "url": "https://www.nasdaq.com/articles/oruka-therapeutics-orka-price-target-increased-5051-13841",
              "date": "2026-05-14",
              "publisher": "Fintel",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA"
              ]
            },
            {
              "title": "Why This Biotech Fund Increased Its Oruka Therapeutics Stake Amid a Staggering 500% Rally",
              "url": "https://www.nasdaq.com/articles/why-biotech-fund-increased-its-oruka-therapeutics-stake-amid-staggering-500-rally",
              "date": "2026-05-13",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ORKA",
                "ORKA"
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
          },
          {
            "form": "8-K",
            "filingDate": "2025-12-11",
            "reportDate": "2025-12-11",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/907654/000121390025120676/ea0268925-8k_oruka.htm",
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
      "ticker": "MRVL",
      "price": 237.27000427246094,
      "marketCap": "212.96B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": 0.12455565711688808,
          "pct": 78.33052276559866
        },
        "m3": {
          "v": 0.20882457431913995,
          "pct": 81.1913357400722
        },
        "m6": {
          "v": 1.9946692026471415,
          "pct": 99.38539407086044
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.38539407086044,
      "adr": 6.97,
      "cyTrend": 0.08,
      "nyTrend": 0.81,
      "upCount": 33,
      "downCount": 4,
      "upDownRatio": 89.19,
      "bbwthd": 0.38,
      "bbwthdLow": 0.24,
      "high52": 71.94,
      "volx": 2.16,
      "volSurgeWk": 2.06,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": false,
      "div10": 7.9,
      "div50": 1.2,
      "div200": 65.36,
      "ret1m": 12.46,
      "ret3m": 20.88,
      "ret6m": 199.47,
      "maxRise1m": 50.7,
      "maxRise3m": 102.45,
      "maxRise6m": 338.66,
      "brk60d": false,
      "clsPos": 52.73,
      "ma150Slope": 11.03,
      "ta": {
        "price": 237.27,
        "resistance": 300,
        "support": 177.95,
        "contraction": 0.99,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0265,
        "m3": -0.0129,
        "m6": 0.3973,
        "rankPct6": 3.57,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "마벨 테크놀로지 그룹",
      "nameEn": "MARVELL TECHNOLOGY INC",
      "detail": {
        "fetchedAt": "2026-08-13",
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
              "title": "Here's Why Marvell Technology (MRVL) Fell More Than Broader Market",
              "url": "https://www.nasdaq.com/articles/heres-why-marvell-technology-mrvl-fell-more-broader-market",
              "date": "2026-08-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL"
              ]
            },
            {
              "title": "See Which Recent 13F Filers Hold MRVL",
              "url": "https://www.nasdaq.com/articles/see-which-recent-13f-filers-hold-mrvl",
              "date": "2026-08-07",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MRVL"
              ]
            },
            {
              "title": "Alpha and Omega Semiconductor (AOSL) Reports Q4 Loss, Beats Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/alpha-and-omega-semiconductor-aosl-reports-q4-loss-beats-revenue-estimates",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "AOSL",
                "MRVL"
              ]
            },
            {
              "title": "ALAB Benefits From PCIe Demand: Can It Stay Ahead of Its Competitors?",
              "url": "https://www.nasdaq.com/articles/alab-benefits-pcie-demand-can-it-stay-ahead-its-competitors",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ALAB",
                "MRVL",
                "CRDO"
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
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-15",
            "reportDate": "2026-04-15",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526157134/d123910d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-31",
            "reportDate": "2026-03-31",
            "items": [
              "3.02",
              "5.03",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "3.02",
              "5.03",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526134462/d113606d8k.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 6,
          "reports": [
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] AI 네트워크 병목 공략 본격화",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-05-28",
              "summary": "- 단순 광 DSP 업체를 넘어, 광연결-스위칭-XPU를 결합한 AI 인프라 연결 플랫폼으로 진화. 12MF P/E 43배의 멀티플을 실적을 통해 입증할 전망- FY1Q27 매출액 24.2억(YoY+27.6%, 이하 전년동기대비), Non-GAAP 영업이익 8.5억달러(+30.8%)를 기록하며 컨센서스에 부합. 데이터센터향 매출이 18.3억달러(+27.2%)로 전체의 76%를 기록- AI 데이터센터 연결 병목 해결을 위해 핵심 기술들을 확보. 2월 Celestial AI 인수로 광 기반 포토닉 패브릭과 Scale-up 광연결 역량 확보. XConn 인수는 PCIe, *CXL 스위치와 UALink 스케일업 스위칭 로드맵 보강",
              "pages": "5",
              "secureId": "eqqmmzqxzcxkqgcgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqmmzqxzcxkqgcgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] Custom Chip 부문 실적 강세 전환 예상",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2025-12-05",
              "summary": "- 3Q25CY 실적 기대치 부합, 4Q25CY 가이던스 역시 장 컨센서스 부합- 다만 커스텀 부문의 성장세가 가속화되며, 2027년 2배 수준의 성장을 보일 전망- ASIC 시장 성장과 함께, Marvell의 실적 성장 및 주가 상승세 이어질 것으로 판단",
              "pages": "6",
              "secureId": "eqxkmekziimlmgxgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkmekziimlmgxgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] 주목할 만한 비즈니스 로드맵",
              "broker": "신한투자증권",
              "analyst": "김형태, 송혜수",
              "date": "2025-12-03",
              "summary": "- 단기 실적 기대감은 높지 않겠으나 미래 성장 동력에 주목- FY3Q26 Review: 실적은 예상 부합, 중장기 사업 계획이 서프라이즈- 2023~28년 연평균성장률 +50% 언급. 데이터센터 애플리케이션 강화",
              "pages": "4",
              "secureId": "eqxkqzqzckqcgzqgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkqzqzckqcgzqgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2025-12-03",
              "summary": "- 매출액 20.8억 달러(YoY +36.8%)로 예상치 0.6% 상회, 가이던스 중간값 대비 1,500만 달러 높은 수치로 사상 최고치 기록- Non-GAAP 매출총이익률은 59.7%(YoY -0.8%p), 영업이익률은 36.3%(YoY +6.6%p) 기록- 2분기 연속 사상 최대 실적 달성. *예상을 상회하는 향후 2개 회계연도의 데이터센터 성장 전망 제시. 시간 외 8.7% 상승",
              "pages": "1",
              "secureId": "eqxkqixmiqgqqmkgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxkqixmiqgqqmkgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] Custom Chip 부문 실적 부진 우려",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2025-09-01",
              "summary": "- 2Q25CY 실적 기대치 부합, 3Q25 매출액 가이던스는 시장 컨센서스 소폭 하회- 그러나, Data Center 부문의 매출액 가이던스가 컨센서스를 크게 하회- 그 원인도 custom chip 실적 부진이라고 언급돼, 당분간 주가의 기간 조정 예상",
              "pages": "5",
              "secureId": "eqzxxmeczkikgzlgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzxxmeczkikgzlgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[마블 테크놀로지 그룹 (NAS:MRVL)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "김유민",
              "date": "2025-08-29",
              "summary": "- 매출액 20.1억 달러(YoY +57.6%)로 예상치 0.3% 하회, 가이던스 중간값 대비 600만 달러 높은 수치로 사상 최고치 기록- Non-GAAP 매출총이익률은 59.4%(YoY -2.5%p), 영업이익률은 34.8%(YoY +8.7%p) 기록- 사상 최대 실적에도 불구, 3분기 매출액 가이던스 예상 하회 및 맞춤형 실리콘 모멘텀 둔화 우려에 시간 외 11.3% 급락",
              "pages": "1",
              "secureId": "eqzxkkilcxlqzicgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzxkkilcxlqzicgcgxclei.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "BXC",
      "price": 86.16000366210938,
      "marketCap": "0.68B",
      "sector": "Industrials",
      "industry": "Industrial Distribution",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.7637667626080629,
          "pct": 99.2418772563177
        },
        "m6": {
          "v": 0.2657558990507921,
          "pct": 79.93492407809111
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.2418772563177,
      "adr": 6.85,
      "cyTrend": 108.47,
      "nyTrend": 23.52,
      "upCount": 2,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.13,
      "high52": 91.86,
      "volx": 0.57,
      "volSurgeWk": 0.64,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -1.64,
      "div50": 34.47,
      "div200": 40.74,
      "ret1m": null,
      "ret3m": 76.38,
      "ret6m": 26.58,
      "maxRise1m": 76.51,
      "maxRise3m": 92.73,
      "maxRise6m": 109.47,
      "brk60d": false,
      "clsPos": 50.19,
      "ma150Slope": 2,
      "ta": {
        "price": 86.16,
        "resistance": 87.88,
        "support": 75.8,
        "contraction": 1.07,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0212,
        "m3": 0.0284,
        "m6": 0.068,
        "rankPct6": 40.71,
        "count": 12
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "블루링스 홀딩스",
      "nameEn": "BLUELINX HLDGS INC"
    },
    {
      "ticker": "P",
      "price": 112,
      "marketCap": "37.23B",
      "sector": "Technology",
      "industry": "Computer Hardware",
      "rs": {
        "m1": {
          "v": 0.5017430577933271,
          "pct": 99.24114671163575
        },
        "m3": {
          "v": 0.2844037146753334,
          "pct": 88.84476534296029
        },
        "m6": {
          "v": 0.6974839997220209,
          "pct": 95.0469992769342
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 99.24114671163575,
      "adr": 5.79,
      "cyTrend": 0.36,
      "nyTrend": 2.14,
      "upCount": 2,
      "downCount": 2,
      "upDownRatio": 50,
      "bbwthd": 0.79,
      "bbwthdLow": 0.17,
      "high52": 94.04,
      "volx": 1.15,
      "volSurgeWk": 0.81,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": 3.93,
      "div50": 38.1,
      "div200": 49.64,
      "ret1m": 50.17,
      "ret3m": 28.44,
      "ret6m": 69.75,
      "maxRise1m": 74.56,
      "maxRise3m": 83.8,
      "maxRise6m": 109.76,
      "brk60d": false,
      "clsPos": 20.93,
      "ma150Slope": 4.44,
      "ta": {
        "price": 112,
        "resistance": null,
        "support": 86.52,
        "contraction": 1.46,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0107,
        "m3": 0.1716,
        "m6": 1.276,
        "rankPct6": 0.71,
        "count": 8
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "에버퓨어",
      "nameEn": "EVERPURE INC",
      "detail": {
        "fetchedAt": "2026-08-19",
        "nameKo": "에버퓨어",
        "nameEn": "EVERPURE INC",
        "infomaxCode": "NYS:P",
        "financials": {
          "ok": true,
          "ticker": "P",
          "cik": "0001474432",
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
              "periodStart": "2026-02-02",
              "periodEnd": "2026-05-03",
              "derived": false,
              "revenue": 1052896000,
              "profit": 19939000,
              "netIncome": 24078000,
              "margin": 1.9,
              "yoy": {
                "revenue": 35.2,
                "profit": 164,
                "netIncome": 272,
                "priorEnd": "2025-05-04"
              }
            },
            {
              "periodStart": "2025-11-02",
              "periodEnd": "2026-02-01",
              "derived": true,
              "revenue": 1058903000,
              "profit": 87198000,
              "netIncome": 100252000,
              "margin": 8.2,
              "yoy": {
                "revenue": 20.4,
                "profit": 105.3,
                "netIncome": 136.2,
                "priorEnd": "2025-02-02"
              }
            },
            {
              "periodStart": "2025-08-04",
              "periodEnd": "2025-11-02",
              "derived": false,
              "revenue": 964453000,
              "profit": 53918000,
              "netIncome": 54806000,
              "margin": 5.6,
              "yoy": {
                "revenue": 16,
                "profit": -9.7,
                "netIncome": -13.9,
                "priorEnd": "2024-11-03"
              }
            },
            {
              "periodStart": "2025-05-05",
              "periodEnd": "2025-08-03",
              "derived": false,
              "revenue": 861002000,
              "profit": 4871000,
              "netIncome": 47118000,
              "margin": 0.6,
              "yoy": {
                "revenue": 12.7,
                "profit": -80.4,
                "netIncome": 32.1,
                "priorEnd": "2024-08-04"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001474432&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "P",
          "items": [
            {
              "title": "VNT or P: Which Is the Better Value Stock Right Now?",
              "url": "https://www.nasdaq.com/articles/vnt-or-p-which-better-value-stock-right-now",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "VNT",
                "P"
              ]
            },
            {
              "title": "STX vs. P: Which Storage Stock Deserves a Spot in Your Portfolio?",
              "url": "https://www.nasdaq.com/articles/stx-vs-p-which-storage-stock-deserves-spot-your-portfolio",
              "date": "2026-07-31",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "STX",
                "P"
              ]
            },
            {
              "title": "3 Reasons Growth Investors Will Love Everpure (P)",
              "url": "https://www.nasdaq.com/articles/3-reasons-growth-investors-will-love-everpure-p",
              "date": "2026-07-23",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "P"
              ]
            },
            {
              "title": "Aether Holdings, Inc. (ATHR) Reports Q3 Loss, Lags Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/aether-holdings-inc-athr-reports-q3-loss-lags-revenue-estimates",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ATHR",
                "P"
              ]
            },
            {
              "title": "PureCycle Technologies, Inc. (PCT) Reports Q2 Loss, Misses Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/purecycle-technologies-inc-pct-reports-q2-loss-misses-revenue-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "PCT",
                "P"
              ]
            },
            {
              "title": "Deluxe (DLX) Q2 Earnings and Revenues Beat Estimates",
              "url": "https://www.nasdaq.com/articles/deluxe-dlx-q2-earnings-and-revenues-beat-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "DLX",
                "P"
              ]
            },
            {
              "title": "Is STX Stock Still Attractive After Its Massive 2026 Price Rally?",
              "url": "https://www.nasdaq.com/articles/stx-stock-still-attractive-after-its-massive-2026-price-rally",
              "date": "2026-07-30",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "STX",
                "WDC",
                "P"
              ]
            }
          ],
          "directCount": 3,
          "total": 7,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-06-12",
            "reportDate": "2026-06-10",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1474432/000147443226000066/pstg-20260610.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1474432/000147443226000046/pstg-20260527.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-25",
            "reportDate": "2026-02-25",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1474432/000147443226000015/pstg-20260225.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-23",
            "reportDate": "2026-02-23",
            "items": [
              "5.03"
            ],
            "itemsKo": [
              "5.03"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1474432/000147443226000011/pstg-20260223.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-12-02",
            "reportDate": "2025-12-02",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1474432/000147443225000062/pstg-20251202.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-05",
            "reportDate": "2025-11-04",
            "items": [
              "2.02",
              "5.02"
            ],
            "itemsKo": [
              "실적 발표",
              "임원 변동"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1474432/000162828025049165/pstg-20251104.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 23,
          "reports": [
            {
              "title": "[프록터 앤드 갬블 (NYS:PG)] [Issue & News] 프리미엄 웰니스 브랜드 Thorne 인수 발표 - 정체된 Health Care 카테고리의 프리미엄화 시도",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-05",
              "summary": "- P&G, 프리미엄 웰니스 브랜드 Thorne 인수 발표- 금액·조건 미공개, Health Care 부진 만회 포석- FY27 가이던스 영향은 세부조건 공개 이후 판단",
              "pages": "5",
              "secureId": "eqlzlmilkqimgxcgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzlmilkqimgxcgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[필립 모리스 인터내셔널 (NYS:PM)] 담배는 너무 잘 팔지만",
              "broker": "키움증권",
              "analyst": "박상준",
              "date": "2026-07-24",
              "summary": "- 말보로와 아이코스 등으로 유명한 글로벌 담배 시장점유율 1위 업체- 2분기 매출액 및 조정 EPS는 시장 컨센서스 상회- SFP 판매 비중 확대와 궐련담배 ASP 상승에 힘입어, 구조적 실적 개선 지속 전망",
              "pages": "7",
              "secureId": "eqlklklzzgmiqixgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlklklzzgmiqixgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[필립 모리스 인터내셔널 (NYS:PM)] 불 붙은 매출 신기록",
              "broker": "신한투자증권",
              "analyst": "조상훈",
              "date": "2026-07-23",
              "summary": "- 2Q26 글로벌 담배 시장 점유율 29.1%로 업계 최고 수준의 시장장악력(일 반담배 23.3%, 궐련형 전자담배 5.8%) 지속. 일반담배 출하량이 오랜만에 플러스 전환하며 반등한 가운데, 가열식 담배 IQOS, 니코틴 파우치 ZYN, 액상형 VEEV의 고성장 지속.- 2Q26 매출과 영업이익은 111.9억달러(+10.4%, 이하 YoY), 45.3억달러 (+22%) 기록하며 분기 최초로 매출 110억 달러 돌파, 컨센서스 상회. 조 정 EPS 역시 2.2달러(+15.2%)로 기대치 상회. Smoke-Free 카테고리(궐련 형 전자담배, 니코틴 파우치 등)는 482억본(+7.5%), 일반담배는 1,569억 본(+1.1%) 판매하며 5개 분기만에 플러스 전환- 부문별 매출 성장률은 해외 Smoke-Free +14.2%, 해외 일반담배 +9.8%, 미국 -0.7%. 전반적인 해외 성장 속 지정학적 리스크가 비용에 일부 영향",
              "pages": "5",
              "secureId": "eqlkqmcilemieqkgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlkqmcilemieqkgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[플래닛 랩스 (NYS:PL)] 증자는 이벤트, 본질은 성장",
              "broker": "신한투자증권",
              "analyst": "이주은",
              "date": "2026-06-08",
              "summary": "- 실적 컨퍼런스 콜에서 자금 조달 필요에 대한 언급 없이 주식 발행 계획을 발표하면서 투자자와의 신뢰도 훼손과 시장 하락 속 주가 급락. AI 활용으 로 방산과 상업부문 성장 지속. 다만, 단기 시장 변동성 확대와 SpaceX 상장은 부담으로 작용. SpaceX 상장 후 매수 추천- 매출 9,420만달러(+42% YoY, 이하 전년동기대비), 매출총이익 5,300만달 러(+36%), 조정 EBITDA -103만달러(적자전환), 조정EPS -0.30달러(적자 확대). 시장 예상치를 매출 +4.6%p, EBITDA +77.3%p, EPS +54.1%p상회- 2Q 매출 1.02~1.07억달러(+39~46%), GPM 52~55% 제시. FY27 매출 4.25~4.41억달러, GPM 52-54%로 상향",
              "pages": "5",
              "secureId": "eqlclmixegqxqelgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlclmixegqxqelgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[프록터 앤드 갬블 (NYS:PG)] 마진 하락, 비용 상승 지속 예상",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-04-28",
              "summary": "- 프록터앤갬블의 FY 3Q26 매출액은 212.4억 달러(YoY +7.4%), 조정 EPS는 1.59 달러(YoY +3.2%)로 각각 컨센서스를 3.6%, 1.9% 상회했 다. 모든 지역 및 사업부에서 본업 매출이 전년 동기 대비 성장했다.- 영업이익은 47.2억 달러(YoY +3.6%), 영업이익률은 21.5%(YoY - 1.5%p)였다. 영업이익에 구조조정 비용 1.4억 달러가 포함되는데, 이 영향을 제거한 핵심(Core) 영업이익률은 22.2%(YoY -0.8%p)다- 잉여현금흐름은 30.3억 달러(YoY +6.3%)를 기록했다. 분기 배당금으 로 25억 달러, 자사주 매입으로 6억 달러를 지출했다. 4월에 분기 배당 금을 3% 인상했다.",
              "pages": "7",
              "secureId": "eqqqiiczxqlxqlegcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqqiiczxqlxqlegcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[필립 모리스 인터내셔널 (NYS:PM)] 1Q26 Re: 시장 기대치 상회",
              "broker": "하나증권",
              "analyst": "심은주",
              "date": "2026-04-24",
              "summary": "- 1분기 매출액 및 영업이익은 각각 101.1억달러(YoY 9.1%), 38.9억달러(YoY 9.8%)를 기록하며 시장 기대치를 상회- 1분기 궐련형 전자담배 출하량은 YoY 11.3% 증가한 413억 개비를 기록- 올해 연간 조정 희석 EPS 가이던스(환율 제외)를 8.11~8.26달러로 유지",
              "pages": "5",
              "secureId": "eqqqcccxgzqxkkcgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqqcccxgzqxkkcgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[필립 모리스 인터내셔널 (NYS:PM)] IQOS, 말보로를 넘다",
              "broker": "키움증권",
              "analyst": "박상준",
              "date": "2026-04-24",
              "summary": "- 말보로와 아이코스 등으로 유명한 글로벌 담배 시장점유율 1위 업체- 1분기 조정 EPS는 시장 컨센서스 상회, 실적발표 당일 주가 약 +7% 상승- SFP 판매 비중 확대와 궐련담배 ASP 상승에 힘입어, 구조적 실적 개선 지속 전망",
              "pages": "7",
              "secureId": "eqqxmlxzgixkzimgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqxmlxzgixkzimgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[프로로지스 (NYS:PLD)] 데이터센터 확장 속 연간 가이던스 상향",
              "broker": "하나증권",
              "analyst": "하민호",
              "date": "2026-04-24",
              "summary": "- 1Q26 Review: 컨센서스 상회- 본업 정상화와 신사업 가속화- 매크로 불확실성 속 펀더멘털 재평가",
              "pages": "4",
              "secureId": "eqqxmleqxmzikiigcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqxmleqxmzikiigcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[필립 모리스 인터내셔널 (NYS:PM)] 불 꺼도 1등",
              "broker": "신한투자증권",
              "analyst": "조상훈",
              "date": "2026-04-23",
              "summary": "- 덜 나쁜 것도 웰빙인 시대, 전자담배가 바꾼 패러다임- 1Q26 Review: Smoke-Free와 Zyn 호조세 지속 vs. 일반담배 부진- 견조한 실적 기반 지속적인 주주환원",
              "pages": "5",
              "secureId": "eqqxmgmzkxlqlelgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqxmgmzkxlqlelgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[플래닛 랩스 (NYS:PL)] 흑자 전환으로 자생력을 증명한 우주+AI 플랫폼",
              "broker": "키움증권",
              "analyst": "박기현",
              "date": "2026-03-30",
              "summary": "- 지정학 수혜 및 수주잔고 급증 기반 첫 연간 흑자 달성과 외형 성장 가시성 확보- NVIDIA 협업 및 방대한 데이터 기반 AI Earth Intelligence 플랫폼으로의 질적 진화- 선제 투자로 인한 단기 마진 압박 존재하나 데이터 기업으로 밸류 리레이팅 기대",
              "pages": "4",
              "secureId": "eqqkqqilgmimlimgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqkqqilgmimlimgcgxclem.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "AEHR",
      "price": 107.95999908447266,
      "marketCap": "3.52B",
      "sector": "Technology",
      "industry": "Semiconductor Equipment & Materials",
      "rs": {
        "m1": {
          "v": 0.1541586276225024,
          "pct": 83.22091062394603
        },
        "m3": {
          "v": 0.13618188695600716,
          "pct": 67.83393501805054
        },
        "m6": {
          "v": 1.7125628430651725,
          "pct": 99.24078091106291
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.24078091106291,
      "adr": 13.37,
      "cyTrend": 400,
      "nyTrend": 361.11,
      "upCount": 9,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.9,
      "bbwthdLow": 0.33,
      "high52": 73.24,
      "volx": 1.18,
      "volSurgeWk": 0.95,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": -9.25,
      "div50": 13.93,
      "div200": 83.46,
      "ret1m": 15.42,
      "ret3m": 13.62,
      "ret6m": 171.26,
      "maxRise1m": 131,
      "maxRise3m": 132.79,
      "maxRise6m": 406.01,
      "brk60d": false,
      "clsPos": 3.17,
      "ma150Slope": 17.33,
      "ta": {
        "price": 107.96,
        "resistance": 108.75,
        "support": 86.58,
        "contraction": 1.37,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0572,
        "m3": 0.0518,
        "m6": 0.2452,
        "rankPct6": 9.29,
        "count": 23
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "에흐르 테스트 시스템스",
      "nameEn": "AEHR TEST SYSTEMS",
      "detail": {
        "fetchedAt": "2026-08-18",
        "nameKo": "에흐르 테스트 시스템스",
        "nameEn": "AEHR TEST SYSTEMS",
        "infomaxCode": "NAS:AEHR",
        "financials": {
          "ok": true,
          "ticker": "AEHR",
          "cik": "0001040470",
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
              "periodEnd": "2026-05-29",
              "derived": true,
              "revenue": 18835000,
              "profit": -1206000,
              "netIncome": 1391000,
              "margin": -6.4,
              "yoy": {
                "revenue": 33.7,
                "profit": 62.4,
                "netIncome": 148,
                "priorEnd": "2025-05-30"
              }
            },
            {
              "periodStart": "2025-11-29",
              "periodEnd": "2026-02-27",
              "derived": false,
              "revenue": 10313000,
              "profit": -4229000,
              "netIncome": -3203000,
              "margin": -41,
              "yoy": {
                "revenue": -43.7,
                "profit": -277.9,
                "netIncome": -398.1,
                "priorEnd": "2025-02-28"
              }
            },
            {
              "periodStart": "2025-08-30",
              "periodEnd": "2025-11-28",
              "derived": false,
              "revenue": 9884000,
              "profit": -4648000,
              "netIncome": -3230000,
              "margin": -47,
              "yoy": {
                "revenue": -26.5,
                "profit": -207.2,
                "netIncome": -214.2,
                "priorEnd": "2024-11-29"
              }
            },
            {
              "periodStart": "2025-05-31",
              "periodEnd": "2025-08-29",
              "derived": false,
              "revenue": 10969000,
              "profit": -4066000,
              "netIncome": -2084000,
              "margin": -37.1,
              "yoy": {
                "revenue": -16.4,
                "profit": -2657.2,
                "netIncome": -415.8,
                "priorEnd": "2024-08-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001040470&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "AEHR",
          "items": [
            {
              "title": "Aehr Test Systems' CEO Sells Shares Worth $5.2 Million After a 564% Rally in Price. Here's a Closer Look at the Transaction.",
              "url": "https://www.nasdaq.com/articles/aehr-test-systems-ceo-sells-shares-worth-52-million-after-564-rally-price-heres-closer",
              "date": "2026-08-14",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AEHR",
                "AEHR"
              ]
            },
            {
              "title": "Can Aehr's $22M AI Order Unlock a Bigger WLBI Opportunity?",
              "url": "https://www.nasdaq.com/articles/can-aehrs-22m-ai-order-unlock-bigger-wlbi-opportunity",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AEHR",
                "FORM",
                "TER"
              ]
            },
            {
              "title": "Aehr Test Systems Stock Soars 72% in a Month: Is it Still a Buy?",
              "url": "https://www.nasdaq.com/articles/aehr-test-systems-stock-soars-72-month-it-still-buy",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AEHR",
                "COHU",
                "TER"
              ]
            },
            {
              "title": "An Aehr Test Systems Vice President Sells 1,000 Shares as the Stock Soars. Here's a Deeper Look at the Transaction.",
              "url": "https://www.nasdaq.com/articles/aehr-test-systems-vice-president-sells-1000-shares-stock-soars-heres-deeper-look",
              "date": "2026-08-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AEHR",
                "AEHR"
              ]
            },
            {
              "title": "An Aehr Test Systems Director Is Among the Insiders Selling with 20,000 Shares Sold for Over $2 Million. Here Are Insights into the Transaction.",
              "url": "https://www.nasdaq.com/articles/aehr-test-systems-director-among-insiders-selling-20000-shares-sold-over-2-million-here",
              "date": "2026-08-05",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AEHR",
                "AEHR"
              ]
            },
            {
              "title": "Here's What Could Help Aehr Test Systems (AEHR) Maintain Its Recent Price Strength",
              "url": "https://www.nasdaq.com/articles/heres-what-could-help-aehr-test-systems-aehr-maintain-its-recent-price-strength",
              "date": "2026-08-05",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AEHR"
              ]
            },
            {
              "title": "Microsoft vs. Aehr Test Systems: Comparing Revenue Trends Between These Artificial Intelligence Companies",
              "url": "https://www.nasdaq.com/articles/microsoft-vs-aehr-test-systems-comparing-revenue-trends-between-these-artificial",
              "date": "2026-08-04",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MSFT",
                "MSFT",
                "AEHR"
              ]
            },
            {
              "title": "An Aehr Test Systems Insider Sells Shares Worth $2.5 Million as the Stock Soars. Here's a Closer Look at the Transaction.",
              "url": "https://www.nasdaq.com/articles/aehr-test-systems-insider-sells-shares-worth-25-million-stock-soars-heres-closer-look",
              "date": "2026-08-04",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AEHR",
                "AEHR"
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
            "filingDate": "2026-07-14",
            "reportDate": "2026-07-14",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1040470/000165495426006655/aehr_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-20",
            "reportDate": "2026-04-17",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1040470/000165495426003746/aehr_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-08",
            "reportDate": "2026-04-08",
            "items": [
              "1.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1040470/000165495426003355/aehr_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-07",
            "reportDate": "2026-04-07",
            "items": [
              "2.02",
              "5.03",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "5.03",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1040470/000165495426003310/aehr_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-08",
            "reportDate": "2026-01-08",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1040470/000165495426000197/aehr_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-07",
            "reportDate": "2025-10-21",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1040470/000165495425012704/aehr_8k.htm",
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
      "ticker": "MANE",
      "price": 111.2300033569336,
      "marketCap": "4.65B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.09456800187574088,
          "pct": 57.509025270758116
        },
        "m6": {
          "v": 1.592169744872228,
          "pct": 99.16847433116413
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.16847433116413,
      "adr": 6.18,
      "cyTrend": 4.52,
      "nyTrend": -11.55,
      "upCount": 3,
      "downCount": 1,
      "upDownRatio": 75,
      "bbwthd": null,
      "bbwthdLow": 0.13,
      "high52": 84.75,
      "volx": 0.82,
      "volSurgeWk": 0.92,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 0.55,
      "div50": 0.86,
      "div200": 29.89,
      "ret1m": null,
      "ret3m": 9.46,
      "ret6m": 159.22,
      "maxRise1m": 25.77,
      "maxRise3m": 51.15,
      "maxRise6m": 208.22,
      "brk60d": false,
      "clsPos": 15.83,
      "ma150Slope": null,
      "ta": {
        "price": 111.23,
        "resistance": 114.41,
        "support": 104.98,
        "contraction": 0.67,
        "trend": null
      },
      "ma150SlopeDir": null,
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "VERADERMICS INC",
      "nameEn": "VERADERMICS INC"
    },
    {
      "ticker": "EAT",
      "price": 233.4600067138672,
      "marketCap": "10.01B",
      "sector": "Consumer Cyclical",
      "industry": "Restaurants",
      "rs": {
        "m1": {
          "v": 0.24691562271679474,
          "pct": 92.15851602023609
        },
        "m3": {
          "v": 0.6990029873512293,
          "pct": 99.09747292418773
        },
        "m6": {
          "v": 0.5396689256476457,
          "pct": 92.80549530007231
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.09747292418773,
      "adr": 4.59,
      "cyTrend": 5.15,
      "nyTrend": 6.15,
      "upCount": 12,
      "downCount": 14,
      "upDownRatio": 46.15,
      "bbwthd": 0.33,
      "bbwthdLow": 0.14,
      "high52": 92.02,
      "volx": 0.6,
      "volSurgeWk": 0.49,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 0.03,
      "div50": 21.94,
      "div200": 49.59,
      "ret1m": 24.69,
      "ret3m": 69.9,
      "ret6m": 53.97,
      "maxRise1m": 40.09,
      "maxRise3m": 90.53,
      "maxRise6m": 103.03,
      "brk60d": false,
      "clsPos": 27.49,
      "ma150Slope": 5.94,
      "ta": {
        "price": 233.46,
        "resistance": null,
        "support": 166.38,
        "contraction": 1.52,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0339,
        "m3": 0.0198,
        "m6": -0.0457,
        "rankPct6": 82.14,
        "count": 18
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "브링커 인터내셔널",
      "nameEn": "BRINKER INTERNATIONAL",
      "detail": {
        "fetchedAt": "2026-08-18",
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
              "title": "Is Brinker International (EAT) a Solid Growth Stock? 3 Reasons to Think &quot;Yes&quot;",
              "url": "https://www.nasdaq.com/articles/brinker-international-eat-solid-growth-stock-3-reasons-think-yes",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "Brinker International (EAT) Is Up 5.31% in One Week: What You Should Know",
              "url": "https://www.nasdaq.com/articles/brinker-international-eat-531-one-week-what-you-should-know",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "August 2027 Options Now Available For Brinker International (EAT)",
              "url": "https://www.nasdaq.com/articles/august-2027-options-now-available-brinker-international-eat",
              "date": "2026-08-17",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "Why Brinker International (EAT) is a Top Momentum Stock for the Long-Term",
              "url": "https://www.nasdaq.com/articles/why-brinker-international-eat-top-momentum-stock-long-term-1",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "Brinker International (EAT) Is Considered a Good Investment by Brokers: Is That True?",
              "url": "https://www.nasdaq.com/articles/brinker-international-eat-considered-good-investment-brokers-true",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT"
              ]
            },
            {
              "title": "EAT Jumps 28.7% in a Month, Can Chili's Momentum Keep It Going?",
              "url": "https://www.nasdaq.com/articles/eat-jumps-287-month-can-chilis-momentum-keep-it-going",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT",
                "DRI",
                "TXRH"
              ]
            },
            {
              "title": "Is EAT a Buy Now as Chili's Growth Meets Cost and Valuation Risks?",
              "url": "https://www.nasdaq.com/articles/eat-buy-now-chilis-growth-meets-cost-and-valuation-risks",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT",
                "DRI",
                "TXRH"
              ]
            },
            {
              "title": "EAT's Fiscal 2027 Guidance Gets a Boost From the 53rd Operating Week",
              "url": "https://www.nasdaq.com/articles/eats-fiscal-2027-guidance-gets-boost-53rd-operating-week",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "EAT",
                "DRI",
                "TXRH"
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
      "ticker": "PENG",
      "price": 52.95000076293945,
      "marketCap": "2.71B",
      "sector": "Technology",
      "industry": "Information Technology Services",
      "rs": {
        "m1": {
          "v": -0.10557432296373621,
          "pct": 11.2141652613828
        },
        "m3": {
          "v": -0.004886268107624792,
          "pct": 31.87725631768953
        },
        "m6": {
          "v": 1.58418747459312,
          "pct": 99.09616775126537
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.09616775126537,
      "adr": 8.27,
      "cyTrend": 14.51,
      "nyTrend": 19.03,
      "upCount": 17,
      "downCount": 2,
      "upDownRatio": 89.47,
      "bbwthd": 0.35,
      "bbwthdLow": 0.25,
      "high52": 58.92,
      "volx": 0.73,
      "volSurgeWk": 0.98,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -9.49,
      "div50": -14.81,
      "div200": 51.9,
      "ret1m": -10.56,
      "ret3m": -0.49,
      "ret6m": 158.42,
      "maxRise1m": 50.77,
      "maxRise3m": 106.05,
      "maxRise6m": 460.22,
      "brk60d": false,
      "clsPos": 1.07,
      "ma150Slope": 13.59,
      "ta": {
        "price": 52.95,
        "resistance": 53.27,
        "support": 43.61,
        "contraction": 0.9,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2042,
        "m3": 0.0276,
        "m6": 0.0408,
        "rankPct6": 52.14,
        "count": 16
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "펭귄 솔루션스",
      "nameEn": "PENGUIN SOLUTIONS INC",
      "detail": {
        "fetchedAt": "2026-08-19",
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
            },
            {
              "title": "Earnings Estimates Rising for Penguin Solutions, Inc. (PENG): Will It Gain?",
              "url": "https://www.nasdaq.com/articles/earnings-estimates-rising-penguin-solutions-inc-peng-will-it-gain",
              "date": "2026-07-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG"
              ]
            },
            {
              "title": "Are You Looking for a Top Momentum Pick? Why Penguin Solutions, Inc. (PENG) is a Great Choice",
              "url": "https://www.nasdaq.com/articles/are-you-looking-top-momentum-pick-why-penguin-solutions-inc-peng-great-choice",
              "date": "2026-07-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PENG"
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
      "ticker": "WDAY",
      "price": 198.4199981689453,
      "marketCap": "49.00B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": 0.4984141437292218,
          "pct": 99.07251264755482
        },
        "m3": {
          "v": 0.5484626120965498,
          "pct": 97.50902527075812
        },
        "m6": {
          "v": 0.42635322621212274,
          "pct": 89.47939262472885
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 99.07251264755482,
      "adr": 6.51,
      "cyTrend": 0.29,
      "nyTrend": 0,
      "upCount": 5,
      "downCount": 1,
      "upDownRatio": 83.33,
      "bbwthd": 0.48,
      "bbwthdLow": 0.13,
      "high52": 79.42,
      "volx": 0.89,
      "volSurgeWk": 0.56,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": 5.77,
      "div50": 33.99,
      "div200": 22.44,
      "ret1m": 49.84,
      "ret3m": 54.85,
      "ret6m": 42.64,
      "maxRise1m": 78.97,
      "maxRise3m": 104.03,
      "maxRise6m": 106.13,
      "brk60d": false,
      "clsPos": 79.08,
      "ma150Slope": -3.71,
      "ta": {
        "price": 198.42,
        "resistance": 220.93,
        "support": 180.56,
        "contraction": 1.42,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.2573,
        "m3": 0.2397,
        "m6": 0.2235,
        "rankPct6": 11.43,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "워크데이",
      "nameEn": "WORKDAY INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "워크데이",
        "nameEn": "WORKDAY INC",
        "infomaxCode": "NAS:WDAY",
        "financials": {
          "ok": true,
          "ticker": "WDAY",
          "cik": "0001327811",
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
              "revenue": 2542000000,
              "profit": 338000000,
              "netIncome": 222000000,
              "margin": 13.3,
              "yoy": {
                "revenue": 13.5,
                "profit": 766.7,
                "netIncome": 226.5,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodStart": "2025-10-31",
              "periodEnd": "2026-01-31",
              "derived": true,
              "revenue": 2532000000,
              "profit": 174000000,
              "netIncome": 145000000,
              "margin": 6.9,
              "yoy": {
                "revenue": 14.5,
                "profit": 132,
                "netIncome": 54.3,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodStart": "2025-08-01",
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 2432000000,
              "profit": 259000000,
              "netIncome": 252000000,
              "margin": 10.6,
              "yoy": {
                "revenue": 12.6,
                "profit": 57,
                "netIncome": 30.6,
                "priorEnd": "2024-10-31"
              }
            },
            {
              "periodStart": "2025-05-01",
              "periodEnd": "2025-07-31",
              "derived": false,
              "revenue": 2348000000,
              "profit": 248000000,
              "netIncome": 228000000,
              "margin": 10.6,
              "yoy": {
                "revenue": 12.6,
                "profit": 123.4,
                "netIncome": 72.7,
                "priorEnd": "2024-07-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001327811&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "WDAY",
          "items": [
            {
              "title": "SBA Communications Takes Over #130 Spot From Workday",
              "url": "https://www.nasdaq.com/articles/sba-communications-takes-over-130-spot-workday",
              "date": "2026-08-18",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SBAC",
                "SBAC",
                "WDAY"
              ]
            },
            {
              "title": "Workday (WDAY) Declines More Than Market: Some Information for Investors",
              "url": "https://www.nasdaq.com/articles/workday-wday-declines-more-market-some-information-investors",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WDAY"
              ]
            },
            {
              "title": "Where Will Workday Stock Be in 5 Years If Silver Lake Doesn't Buy It?",
              "url": "https://www.nasdaq.com/articles/where-will-workday-stock-be-5-years-if-silver-lake-doesnt-buy-it",
              "date": "2026-08-17",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WDAY",
                "WDAY"
              ]
            },
            {
              "title": "Workday (WDAY) Surges 17.8%: Is This an Indication of Further Gains?",
              "url": "https://www.nasdaq.com/articles/workday-wday-surges-178-indication-further-gains",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WDAY",
                "CRM"
              ]
            },
            {
              "title": "Stock Market Today, Aug. 13: Stocks Rise as Inflation Cools, Workday Soars 18%",
              "url": "https://www.nasdaq.com/articles/stock-market-today-aug-13-stocks-rise-inflation-cools-workday-soars-18",
              "date": "2026-08-13",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "QQQ",
                "WDAY"
              ]
            },
            {
              "title": "StoneCo Ltd. (STNE) Q2 Earnings Beat Estimates",
              "url": "https://www.nasdaq.com/articles/stoneco-ltd-stne-q2-earnings-beat-estimates",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "STNE",
                "WDAY"
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
            "filingDate": "2026-06-22",
            "reportDate": "2026-06-16",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327811/000132781126000031/wday-20260616.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-21",
            "reportDate": "2026-05-21",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1327811/000132781126000024/wday-20260521.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-24",
            "reportDate": "2026-04-20",
            "items": [
              "9.01"
            ],
            "itemsKo": [
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327811/000132781126000019/wday-20260420.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-06",
            "reportDate": "2026-03-05",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327811/000132781126000016/wday-20260305.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1327811/000132781126000010/wday-20260224.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-09",
            "reportDate": "2026-02-06",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1327811/000132781126000007/wday-20260206.htm",
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
      "ticker": "VSXY",
      "price": 88.61000061035156,
      "marketCap": "7.04B",
      "sector": "Consumer Cyclical",
      "industry": "Apparel Retail",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6894184808661116,
          "pct": 99.02527075812274
        },
        "m6": {
          "v": 0.3476806176479325,
          "pct": 85.647143890094
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 99.02527075812274,
      "adr": 4.66,
      "cyTrend": 0.81,
      "nyTrend": 1.91,
      "upCount": 12,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.16,
      "high52": 86.48,
      "volx": 0.65,
      "volSurgeWk": 0.75,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -3.26,
      "div50": 5.5,
      "div200": 48.91,
      "ret1m": null,
      "ret3m": 68.94,
      "ret6m": 34.77,
      "maxRise1m": 26.2,
      "maxRise3m": 100.67,
      "maxRise6m": 144.01,
      "brk60d": false,
      "clsPos": 70.28,
      "ma150Slope": 7.26,
      "ta": {
        "price": 88.61,
        "resistance": 102.46,
        "support": 77.6,
        "contraction": 1.13,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0036,
        "m3": -0.0195,
        "m6": -0.005,
        "rankPct6": 72.86,
        "count": 9
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "VICTORIAS SECRET AND CO",
      "nameEn": "VICTORIAS SECRET AND CO"
    },
    {
      "ticker": "SYRE",
      "price": 108.91999816894531,
      "marketCap": "9.60B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.47089795651750144,
          "pct": 96.13718411552347
        },
        "m6": {
          "v": 1.5242177130311645,
          "pct": 99.02386117136659
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 99.02386117136659,
      "adr": 5.73,
      "cyTrend": -4,
      "nyTrend": 10.08,
      "upCount": 11,
      "downCount": 17,
      "upDownRatio": 39.29,
      "bbwthd": null,
      "bbwthdLow": 0.14,
      "high52": 98.86,
      "volx": 1.14,
      "volSurgeWk": 1.18,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 4,
      "div50": 14.15,
      "div200": 91.1,
      "ret1m": null,
      "ret3m": 47.09,
      "ret6m": 152.42,
      "maxRise1m": 19.28,
      "maxRise3m": 60.84,
      "maxRise6m": 187.21,
      "brk60d": true,
      "clsPos": 79.1,
      "ma150Slope": 16.25,
      "ta": {
        "price": 108.92,
        "resistance": null,
        "support": 92.37,
        "contraction": 0.83,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "스파이어 테라퓨틱스",
      "nameEn": "SPYRE THERAPEUTICS INC"
    },
    {
      "ticker": "WGS",
      "price": 79.6500015258789,
      "marketCap": "2.38B",
      "sector": "Healthcare",
      "industry": "Diagnostics & Research",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6835763942895492,
          "pct": 98.95306859205776
        },
        "m6": {
          "v": -0.021258242638566845,
          "pct": 28.669558929862614
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.95306859205776,
      "adr": 7.77,
      "cyTrend": 15.91,
      "nyTrend": -5.08,
      "upCount": 4,
      "downCount": 12,
      "upDownRatio": 25,
      "bbwthd": null,
      "bbwthdLow": 0.26,
      "high52": 46.61,
      "volx": 0.91,
      "volSurgeWk": 1.38,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 2.21,
      "div50": 19.22,
      "div200": -9.68,
      "ret1m": null,
      "ret3m": 68.36,
      "ret6m": -2.13,
      "maxRise1m": 42.25,
      "maxRise3m": 79.21,
      "maxRise6m": 196.12,
      "brk60d": false,
      "clsPos": 51.78,
      "ma150Slope": -10.64,
      "ta": {
        "price": 79.65,
        "resistance": 82.49,
        "support": 76.04,
        "contraction": 0.73,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.1911,
        "m3": 0.3423,
        "m6": 0.237,
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
        "fetchedAt": "2026-08-20",
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
            },
            {
              "title": "Tuesday 5/12 Insider Buying Report: WGS, MOBI",
              "url": "https://www.nasdaq.com/articles/tuesday-5-12-insider-buying-report-wgs-mobi",
              "date": "2026-05-12",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "WGS",
                "WGS",
                "MOBI"
              ]
            }
          ],
          "directCount": 8,
          "total": 10,
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
              "secureId": "eqqgezeeieeimxmgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgezeeieeimxmgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[진DX 홀딩스 (NAS:WGS)] 여전히 기대되는 성장 가능성",
              "broker": "iM증권",
              "analyst": "정재원",
              "date": "2025-09-12",
              "summary": "- 2분기 동사는 1억달러의 매출을 기록했으며 전년동기 대비 49%  성장하는 호실적을 달성했다- 향후  기대되는  시너지는  동사가  확보한  75만건  이상  누적된  희귀질환  유전체 데이터셋과  Fabric이  가진  해석  플랫폼을  통해  새로운  비즈니스  모델  및  신규 시장 진출이 용이할 것으로 전망한다- 현재 Fabric 플랫폼은 interpretation-as-a-service 모델로 해석 기술의 고도화를 동사의  데이터셋을  통해  이끌어낼  수  있을  것으로  기대된다",
              "pages": "6",
              "secureId": "eqzqxigeiizkxlxgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzqxigeiizkxlxgcgxclem.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ATEX",
      "price": 88.68000030517578,
      "marketCap": "1.73B",
      "sector": "Communication Services",
      "industry": "Telecom Services",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.3949976518939009,
          "pct": 94.33212996389891
        },
        "m6": {
          "v": 1.4490472948728403,
          "pct": 98.95155459146783
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.95155459146783,
      "adr": 7.69,
      "cyTrend": -73.97,
      "nyTrend": -113.09,
      "upCount": 4,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.26,
      "high52": 78.48,
      "volx": 0.73,
      "volSurgeWk": 0.6,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -4.45,
      "div50": -4.19,
      "div200": 82.49,
      "ret1m": null,
      "ret3m": 39.5,
      "ret6m": 144.9,
      "maxRise1m": 34.29,
      "maxRise3m": 85.25,
      "maxRise6m": 225.13,
      "brk60d": false,
      "clsPos": 42.77,
      "ma150Slope": 19.51,
      "ta": {
        "price": 88.68,
        "resistance": 107.31,
        "support": 85.88,
        "contraction": 0.96,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.041,
        "m3": -0.0232,
        "m6": -0.0832,
        "rankPct6": 87.14,
        "count": 7
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "안테릭스",
      "nameEn": "ANTERIX INC",
      "detail": {
        "fetchedAt": "2026-08-13",
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
            },
            {
              "title": "Strength Seen in Anterix (ATEX): Can Its 4.8% Jump Turn into More Strength?",
              "url": "https://www.nasdaq.com/articles/strength-seen-anterix-atex-can-its-48-jump-turn-more-strength",
              "date": "2026-07-01",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX",
                "BAND"
              ]
            },
            {
              "title": "Anterix Insider Transaction: 4,291 Shares Sold as Utility Broadband Stock Gains 170% This Past Year",
              "url": "https://www.nasdaq.com/articles/anterix-insider-transaction-4291-shares-sold-utility-broadband-stock-gains-170-past-year",
              "date": "2026-06-24",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX",
                "ATEX"
              ]
            },
            {
              "title": "Anterix Surges 163% in the Past Year: Should You Bet on the Stock?",
              "url": "https://www.nasdaq.com/articles/anterix-surges-163-past-year-should-you-bet-stock",
              "date": "2026-06-22",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ERIC",
                "BAND",
                "ATEX"
              ]
            },
            {
              "title": "Anterix Q4 Earnings Call Highlights Rising Spectrum Demand",
              "url": "https://www.nasdaq.com/articles/anterix-q4-earnings-call-highlights-rising-spectrum-demand",
              "date": "2026-06-16",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ATEX"
              ]
            },
            {
              "title": "Camtek (CAMT) Tops Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/camtek-camt-tops-q2-earnings-and-revenue-estimates",
              "date": "2026-08-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "CAMT",
                "ATEX"
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
      "ticker": "AXON",
      "price": 645.719970703125,
      "marketCap": "52.46B",
      "sector": "Industrials",
      "industry": "Aerospace & Defense",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6728496650340026,
          "pct": 98.88086642599278
        },
        "m6": {
          "v": 0.17363086904126804,
          "pct": 67.78741865509761
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.88086642599278,
      "adr": 6.4,
      "cyTrend": 0.32,
      "nyTrend": -0.13,
      "upCount": 38,
      "downCount": 21,
      "upDownRatio": 64.41,
      "bbwthd": null,
      "bbwthdLow": 0.11,
      "high52": 81.3,
      "volx": 0.89,
      "volSurgeWk": 1.07,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 7.19,
      "div50": 20.67,
      "div200": 27.16,
      "ret1m": null,
      "ret3m": 67.28,
      "ret6m": 17.36,
      "maxRise1m": 34.15,
      "maxRise3m": 77.83,
      "maxRise6m": 96.18,
      "brk60d": false,
      "clsPos": 82.66,
      "ma150Slope": -0.48,
      "ta": {
        "price": 645.72,
        "resistance": 649.89,
        "support": 638.5,
        "contraction": 1.85,
        "trend": "up"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.1493,
        "m3": 0.127,
        "m6": 0.0264,
        "rankPct6": 59.29,
        "count": 35
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "액손 엔터프라이즈",
      "nameEn": "AXON ENTERPRISE INC",
      "detail": {
        "fetchedAt": "2026-08-19",
        "nameKo": "액손 엔터프라이즈",
        "nameEn": "AXON ENTERPRISE INC",
        "infomaxCode": "NAS:AXON",
        "financials": {
          "ok": true,
          "ticker": "AXON",
          "cik": "0001069183",
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
              "revenue": 904389000,
              "profit": 46778000,
              "netIncome": 29427000,
              "margin": 5.2,
              "yoy": {
                "revenue": 35.3,
                "profit": 4615.3,
                "netIncome": -18.5,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 807345000,
              "profit": 29243000,
              "netIncome": 169312000,
              "margin": 3.6,
              "yoy": {
                "revenue": 33.7,
                "profit": 432.6,
                "netIncome": 92.4,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 796724000,
              "profit": -50118000,
              "netIncome": 2745000,
              "margin": -6.3,
              "yoy": {
                "revenue": 38.5,
                "profit": -218.1,
                "netIncome": -98,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 710641000,
              "profit": -2129000,
              "netIncome": -2186000,
              "margin": -0.3,
              "yoy": {
                "revenue": 30.6,
                "profit": -108.8,
                "netIncome": -103.3,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001069183&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "AXON",
          "items": [
            {
              "title": "Strength in Software & Services Unit Drives AXON: Can the Momentum Sustain?",
              "url": "https://www.nasdaq.com/articles/strength-software-services-unit-drives-axon-can-momentum-sustain-0",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON",
                "WWD",
                "KTOS"
              ]
            },
            {
              "title": "Axon: A Strong Contender in Law Enforcement Tech",
              "url": "https://www.nasdaq.com/articles/axon-strong-contender-law-enforcement-tech",
              "date": "2026-08-13",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON",
                "AXON"
              ]
            },
            {
              "title": "Should You Buy, Hold or Sell AXON Stock Post Q2 Earnings Release?",
              "url": "https://www.nasdaq.com/articles/should-you-buy-hold-or-sell-axon-stock-post-q2-earnings-release",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON",
                "TDY",
                "WWD"
              ]
            },
            {
              "title": "Will Strength in Connected Devices Unit Continue to Drive AXON's Growth?",
              "url": "https://www.nasdaq.com/articles/will-strength-connected-devices-unit-continue-drive-axons-growth",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON",
                "TDY",
                "WWD"
              ]
            },
            {
              "title": "Axon’s Post-Earnings Pullback May Be More About Valuation Than Growth",
              "url": "https://www.nasdaq.com/articles/axons-post-earnings-pullback-may-be-more-about-valuation-growth",
              "date": "2026-08-08",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON"
              ]
            },
            {
              "title": "$10,000 in Axon Stock a Decade Ago Would Be Worth About $329,000 Today. The Stock Is Down Over the Past Year.",
              "url": "https://www.nasdaq.com/articles/10000-axon-stock-decade-ago-would-be-worth-about-329000-today-stock-down-over-past-year",
              "date": "2026-08-08",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON",
                "AXON"
              ]
            },
            {
              "title": "Axon Enterprise vs. Chewy: Do Customers of Police or Pets Make One Stock a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/axon-enterprise-vs-chewy-do-customers-police-or-pets-make-one-stock-better-buy-2026",
              "date": "2026-08-07",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON",
                "AXON",
                "CHWY"
              ]
            },
            {
              "title": "Axon Enterprise vs. Booking: Which Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/axon-enterprise-vs-booking-which-stock-better-buy-2026",
              "date": "2026-08-06",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AXON",
                "AXON",
                "BKNG"
              ]
            }
          ],
          "directCount": 8,
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
            "url": "https://www.sec.gov/Archives/edgar/data/1069183/000162828026053363/axon-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-10",
            "reportDate": "2026-07-08",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1069183/000162828026047888/axon-20260708.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-01",
            "reportDate": "2026-05-28",
            "items": [
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1069183/000162828026039483/axon-20260528.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1069183/000162828026031285/axon-20260506.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-10",
            "reportDate": "2026-04-06",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1069183/000162828026024720/axon-20260406.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-11",
            "reportDate": "2026-03-05",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1069183/000162828026016872/axon-20260305.htm",
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
      "ticker": "LQDA",
      "price": 75.33000183105469,
      "marketCap": "6.70B",
      "sector": "Healthcare",
      "industry": "Drug Manufacturers - Specialty & Generic",
      "rs": {
        "m1": {
          "v": -0.13453583365465788,
          "pct": 6.829679595278246
        },
        "m3": {
          "v": 0.23532309604035298,
          "pct": 84.58483754512636
        },
        "m6": {
          "v": 1.446573549566408,
          "pct": 98.87924801156906
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.87924801156906,
      "adr": 6.29,
      "cyTrend": -7.3,
      "nyTrend": 1.36,
      "upCount": 1,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.29,
      "bbwthdLow": 0.13,
      "high52": 80.47,
      "volx": 0.66,
      "volSurgeWk": 0.42,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -7.16,
      "div50": -4.52,
      "div200": 54.84,
      "ret1m": -13.45,
      "ret3m": 23.53,
      "ret6m": 144.66,
      "maxRise1m": 30.87,
      "maxRise3m": 76.42,
      "maxRise6m": 214.02,
      "brk60d": false,
      "clsPos": 60.72,
      "ma150Slope": 13.82,
      "ta": {
        "price": 75.33,
        "resistance": 82.96,
        "support": 70.85,
        "contraction": 1.07,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0451,
        "m3": 0.0141,
        "m6": 0.0951,
        "rankPct6": 30.71,
        "count": 7
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "리퀴디아",
      "nameEn": "LIQUIDIA CORPORATION"
    },
    {
      "ticker": "CTRN",
      "price": 70.91000366210938,
      "marketCap": "0.59B",
      "sector": "Consumer Cyclical",
      "industry": "Apparel Retail",
      "rs": {
        "m1": {
          "v": 0.10417319081659468,
          "pct": 73.77740303541316
        },
        "m3": {
          "v": 0.6641634040456381,
          "pct": 98.80866425992781
        },
        "m6": {
          "v": 0.48970600704244427,
          "pct": 91.57628344179321
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.80866425992781,
      "adr": 4.06,
      "cyTrend": 1.91,
      "nyTrend": 1.26,
      "upCount": 4,
      "downCount": 3,
      "upDownRatio": 57.14,
      "bbwthd": null,
      "bbwthdLow": 0.2,
      "high52": 91.02,
      "volx": 0.92,
      "volSurgeWk": 1.21,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -3.27,
      "div50": 12.94,
      "div200": 44.9,
      "ret1m": 10.42,
      "ret3m": 66.42,
      "ret6m": 48.97,
      "maxRise1m": 27.7,
      "maxRise3m": 91.24,
      "maxRise6m": 116.12,
      "brk60d": false,
      "clsPos": 16.24,
      "ma150Slope": 7.46,
      "ta": {
        "price": 70.91,
        "resistance": 77.91,
        "support": 61.01,
        "contraction": 1.26,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0036,
        "m3": -0.0195,
        "m6": -0.005,
        "rankPct6": 72.86,
        "count": 9
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "시티 트렌즈",
      "nameEn": "CITI TRENDS INC",
      "detail": {
        "fetchedAt": "2026-08-18",
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
            },
            {
              "title": "Citi Trends Swings To Net Profit In Q4; Stock Surges 13.6%",
              "url": "https://www.nasdaq.com/articles/citi-trends-swings-net-profit-q4-stock-surges-136",
              "date": "2026-03-17",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends Sees Higher Total Sales Growth In FY26; Stock Surges 13.6% - Update",
              "url": "https://www.nasdaq.com/articles/citi-trends-sees-higher-total-sales-growth-fy26-stock-surges-136-update",
              "date": "2026-03-17",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "CTRN"
              ]
            },
            {
              "title": "Citi Trends (CTRN) Price Target Increased by 15.62% to 56.61",
              "url": "https://www.nasdaq.com/articles/citi-trends-ctrn-price-target-increased-1562-5661",
              "date": "2025-12-06",
              "publisher": "Fintel",
              "tier1": false,
              "direct": true,
              "tickers": [
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
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-20",
            "reportDate": "2026-02-19",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1318484/000110465926017849/tm266871d1_8k.htm",
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
      "ticker": "PANW",
      "price": 359.760009765625,
      "marketCap": "293.20B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": 0.07301363360610862,
          "pct": 66.18887015177066
        },
        "m3": {
          "v": 0.38061258847234675,
          "pct": 93.82671480144404
        },
        "m6": {
          "v": 1.4080322922562767,
          "pct": 98.80694143167028
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.80694143167028,
      "adr": 4.21,
      "cyTrend": 0.05,
      "nyTrend": -0.54,
      "upCount": 91,
      "downCount": 13,
      "upDownRatio": 87.5,
      "bbwthd": 0.31,
      "bbwthdLow": 0.15,
      "high52": 90.19,
      "volx": 0.94,
      "volSurgeWk": 1.08,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": -4.55,
      "div50": 8.31,
      "div200": 60.13,
      "ret1m": 7.3,
      "ret3m": 38.06,
      "ret6m": 140.8,
      "maxRise1m": 29.28,
      "maxRise3m": 64.12,
      "maxRise6m": 177.97,
      "brk60d": false,
      "clsPos": 33.24,
      "ma150Slope": 10.56,
      "ta": {
        "price": 359.76,
        "resistance": 368.17,
        "support": 314.95,
        "contraction": 1.03,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2162,
        "m3": 0.1468,
        "m6": 0.3292,
        "rankPct6": 6.43,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "팰로 앨토 네트웍스",
      "nameEn": "PALO ALTO NETWORKS INC",
      "detail": {
        "fetchedAt": "2026-08-20",
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
              "title": "Palo Alto Networks (PANW) Stock Declines While Market Improves: Some Information for Investors",
              "url": "https://www.nasdaq.com/articles/palo-alto-networks-panw-stock-declines-while-market-improves-some-information-investors",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PANW"
              ]
            },
            {
              "title": "PANW vs. NET: Which Cybersecurity Stock Has an Edge Right Now?",
              "url": "https://www.nasdaq.com/articles/panw-vs-net-which-cybersecurity-stock-has-edge-right-now",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PANW",
                "NET"
              ]
            },
            {
              "title": "Palo Alto Networks (PANW) Outperforms Broader Market: What You Need to Know",
              "url": "https://www.nasdaq.com/articles/palo-alto-networks-panw-outperforms-broader-market-what-you-need-know",
              "date": "2026-08-13",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PANW"
              ]
            },
            {
              "title": "Can Cloudflare's AI Security Strategy Help it Challenge PANW & ZS?",
              "url": "https://www.nasdaq.com/articles/can-cloudflares-ai-security-strategy-help-it-challenge-panw-zs",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NET",
                "PANW",
                "ZS"
              ]
            },
            {
              "title": "Massive Update for Palo Alto Stock Investors",
              "url": "https://www.nasdaq.com/articles/massive-update-palo-alto-stock-investors",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PANW",
                "PANW"
              ]
            },
            {
              "title": "Fortinet Expands AI Security With Virtue AI: Can Growth Accelerate?",
              "url": "https://www.nasdaq.com/articles/fortinet-expands-ai-security-virtue-ai-can-growth-accelerate",
              "date": "2026-08-18",
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
              "title": "Zscaler Increases CapEx: Can AI-Led Demand Justify Higher Spending?",
              "url": "https://www.nasdaq.com/articles/zscaler-increases-capex-can-ai-led-demand-justify-higher-spending",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ZS",
                "PANW",
                "CRWD"
              ]
            }
          ],
          "directCount": 5,
          "total": 7,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
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
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-11",
            "reportDate": "2026-02-11",
            "items": [
              "1.01",
              "2.03",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1327567/000119312526045600/d40626d8k.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 4,
          "reports": [
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] [Issue & News] 중국 CAC, 사이버보안 심사 착수 - 마이크론식 조달금지 리스크 부상",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-06",
              "summary": "- 중국 CAC, 팔로알토 제품 사이버보안 심사 착수- 2023년 마이크론 심사·조달금지 사례와 유사한 절차- 中매출 미공시로 실적 영향 크기 파악 어려움",
              "pages": "5",
              "secureId": "eqlxczlecmeceelgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxczlecmeceelgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] AI 에이전트 시대의 필요 조건은 사이버 보안",
              "broker": "키움증권",
              "analyst": "김진구",
              "date": "2026-08-04",
              "summary": "- 보안 프로세스 전체를 아우르는 토탈 보안 솔루션 플랫폼 업체를 목표- 프런티어 업체와 긴밀한 연계 및 상호 교차검증 수요 증가로 성장 기대- 장기적으로 프런티어 업체의 보안 솔루션 내재화 여지는 잠재적 리스크",
              "pages": "8",
              "secureId": "eqlzqmxgmmkzqzlgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzqmxgmmkzqzlgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] 토탈 보안 플랫폼의 반격",
              "broker": "키움증권",
              "analyst": "김승혁",
              "date": "2025-09-02",
              "summary": "- 팰로 앨토 네트웍스는 토털 보안 플랫폼을 제공하는 글로벌 사이버 보안 기업- AI 확산 속 통합 보안 플랫폼으로 급증하는 트래픽 수요를 선점- CyberArk 인수로 아이덴티티까지 아우르며 토털 보안 표준과 경쟁 우위를 강화",
              "pages": "7",
              "secureId": "eqzxqxqkclqlxmkgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzxqxqkclqlxmkgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[팰로 앨토 네트웍스 (NAS:PANW)] ‘토탈’의 반격",
              "broker": "키움증권",
              "analyst": "김승혁",
              "date": "2025-08-20",
              "summary": "- 팰로 앨토 네트웍스는 토털 보안 플랫폼을 제공하는 글로벌 사이버 보안 기업- FY4Q25 실적에서 차세대 보안 ARR과 수주 잔고 등이 높은 성장률을 기록- 통합 보안 솔루션 니즈 확대와 경쟁사 대비 차별성 기반 긍정적 실적 흐름 전망",
              "pages": "6",
              "secureId": "eqzzxkzeliecmeigcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzzxkzeliecmeigcgxclem.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MDB",
      "price": 440.5299987792969,
      "marketCap": "35.43B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": 0.4445027281896183,
          "pct": 98.73524451939292
        },
        "m3": {
          "v": 0.3507803396918092,
          "pct": 92.45487364620939
        },
        "m6": {
          "v": 0.30872528430550905,
          "pct": 83.18872017353578
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 98.73524451939292,
      "adr": 5.16,
      "cyTrend": -0.1,
      "nyTrend": -0.02,
      "upCount": 107,
      "downCount": 31,
      "upDownRatio": 77.54,
      "bbwthd": 0.62,
      "bbwthdLow": 0.22,
      "high52": 93.12,
      "volx": 0.91,
      "volSurgeWk": 0.74,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": true,
      "div10": 2.24,
      "div50": 24.47,
      "div200": 29.9,
      "ret1m": 44.45,
      "ret3m": 35.08,
      "ret6m": 30.87,
      "maxRise1m": 62.14,
      "maxRise3m": 62.82,
      "maxRise6m": 119.35,
      "brk60d": false,
      "clsPos": 78.19,
      "ma150Slope": -1.71,
      "ta": {
        "price": 440.53,
        "resistance": 444.72,
        "support": 408,
        "contraction": 1.3,
        "trend": "up"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.2162,
        "m3": 0.1468,
        "m6": 0.3292,
        "rankPct6": 6.43,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "몽고DB",
      "nameEn": "MONGODB INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "몽고DB",
        "nameEn": "MONGODB INC",
        "infomaxCode": "NAS:MDB",
        "financials": {
          "ok": true,
          "ticker": "MDB",
          "cik": "0001441816",
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
              "revenue": 687616000,
              "profit": -24804000,
              "netIncome": 4434000,
              "margin": -3.6,
              "yoy": {
                "revenue": 25.2,
                "profit": 53.7,
                "netIncome": 111.8,
                "priorEnd": "2025-04-30"
              }
            },
            {
              "periodStart": "2025-10-31",
              "periodEnd": "2026-01-31",
              "derived": true,
              "revenue": 695072000,
              "profit": 304000,
              "netIncome": 15530000,
              "margin": 0,
              "yoy": {
                "revenue": 26.7,
                "profit": 101.6,
                "netIncome": -1.9,
                "priorEnd": "2025-01-31"
              }
            },
            {
              "periodStart": "2025-08-01",
              "periodEnd": "2025-10-31",
              "derived": false,
              "revenue": 628309000,
              "profit": -18424000,
              "netIncome": -2007000,
              "margin": -2.9,
              "yoy": {
                "revenue": 18.7,
                "profit": 33.9,
                "netIncome": 79.5,
                "priorEnd": "2024-10-31"
              }
            },
            {
              "periodStart": "2025-05-01",
              "periodEnd": "2025-07-31",
              "derived": false,
              "revenue": 591402000,
              "profit": -65294000,
              "netIncome": -47048000,
              "margin": -11,
              "yoy": {
                "revenue": 23.7,
                "profit": 8.6,
                "netIncome": 13.7,
                "priorEnd": "2024-07-31"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001441816&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "MDB",
          "items": [
            {
              "title": "MongoDB (MDB) Dips More Than Broader Market: What You Should Know",
              "url": "https://www.nasdaq.com/articles/mongodb-mdb-dips-more-broader-market-what-you-should-know",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MDB"
              ]
            },
            {
              "title": "Here's Why MongoDB (MDB) Fell More Than Broader Market",
              "url": "https://www.nasdaq.com/articles/heres-why-mongodb-mdb-fell-more-broader-market-0",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MDB"
              ]
            },
            {
              "title": "Here's Why MongoDB (MDB) Fell More Than Broader Market",
              "url": "https://www.nasdaq.com/articles/heres-why-mongodb-mdb-fell-more-broader-market",
              "date": "2026-07-23",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MDB"
              ]
            },
            {
              "title": "MongoDB Director Dwight Merriman Sells 16,000 Shares for $5.2 Million",
              "url": "https://www.nasdaq.com/articles/mongodb-director-dwight-merriman-sells-16000-shares-52-million",
              "date": "2026-07-21",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MDB",
                "MDB"
              ]
            },
            {
              "title": "MongoDB (MDB) Declines More Than Market: Some Information for Investors",
              "url": "https://www.nasdaq.com/articles/mongodb-mdb-declines-more-market-some-information-investors",
              "date": "2026-07-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MDB"
              ]
            },
            {
              "title": "MongoDB (MDB) Stock Sinks As Market Gains: Here's Why",
              "url": "https://www.nasdaq.com/articles/mongodb-mdb-stock-sinks-market-gains-heres-why-0",
              "date": "2026-07-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MDB"
              ]
            },
            {
              "title": "MongoDB (MDB) Stock Moves -1.25%: What You Should Know",
              "url": "https://www.nasdaq.com/articles/mongodb-mdb-stock-moves-125-what-you-should-know",
              "date": "2026-07-02",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MDB"
              ]
            },
            {
              "title": "PDF Solutions (PDFS) Surpasses Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/pdf-solutions-pdfs-surpasses-q2-earnings-and-revenue-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "PDFS",
                "MDB"
              ]
            }
          ],
          "directCount": 7,
          "total": 10,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-06",
            "reportDate": "2026-06-30",
            "items": [
              "5.03",
              "5.07"
            ],
            "itemsKo": [
              "5.03",
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026047228/mdb-20260630.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026038798/mdb-20260528.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-02",
            "reportDate": "2026-03-02",
            "items": [
              "2.02",
              "5.02",
              "5.03",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "임원 변동",
              "5.03",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026013199/mdb-20260302.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-12-01",
            "reportDate": "2025-12-01",
            "items": [
              "2.02"
            ],
            "itemsKo": [
              "실적 발표"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828025054425/mdb-20251201.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-03",
            "reportDate": "2025-10-29",
            "items": [
              "2.02",
              "5.02"
            ],
            "itemsKo": [
              "실적 발표",
              "임원 변동"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828025047941/mdb-20251029.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-09-17",
            "reportDate": "2025-09-17",
            "items": [
              "7.01"
            ],
            "itemsKo": [
              "Reg FD 공시"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1441816/000144181625000197/mdb-20250917.htm",
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
      "ticker": "SNDK",
      "price": 1568.8699951171875,
      "marketCap": "229.71B",
      "sector": "Technology",
      "industry": "Computer Hardware",
      "rs": {
        "m1": {
          "v": -0.019008687740531036,
          "pct": 31.787521079258006
        },
        "m3": {
          "v": 0.060986452389860245,
          "pct": 49.13357400722022
        },
        "m6": {
          "v": 1.406611345853701,
          "pct": 98.7346348517715
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.7346348517715,
      "adr": 11.16,
      "cyTrend": 0.13,
      "nyTrend": 6.33,
      "upCount": 36,
      "downCount": 15,
      "upDownRatio": 70.59,
      "bbwthd": 0.58,
      "bbwthdLow": 0.35,
      "high52": 66.64,
      "volx": 1.04,
      "volSurgeWk": 0.87,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 8.39,
      "div50": -5.26,
      "div200": 69.56,
      "ret1m": -1.9,
      "ret3m": 6.1,
      "ret6m": 140.66,
      "maxRise1m": 83.13,
      "maxRise3m": 135.87,
      "maxRise6m": 355.39,
      "brk60d": false,
      "clsPos": 17.11,
      "ma150Slope": 14.56,
      "ta": {
        "price": 1568.87,
        "resistance": 1600,
        "support": 1514.36,
        "contraction": 0.8,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0107,
        "m3": 0.1716,
        "m6": 1.276,
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
        "fetchedAt": "2026-08-19",
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
              "title": "Sandisk Is Up More Than 35-Fold in a Year and Sits Nearly a Third Below Its Peak. History Says What Comes Next.",
              "url": "https://www.nasdaq.com/articles/sandisk-more-35-fold-year-and-sits-nearly-third-below-its-peak-history-says-what-comes",
              "date": "2026-08-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "SNDK",
                "MU"
              ]
            },
            {
              "title": "Palantir and Sandisk Stocks Are Soaring: Wall Street Says to Buy 1 and Avoid the Other",
              "url": "https://www.nasdaq.com/articles/palantir-and-sandisk-stocks-are-soaring-wall-street-says-buy-1-and-avoid-other",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "SNDK",
                "PLTR"
              ]
            },
            {
              "title": "Up More Than 3,400% in the Past 12 Months, Here's Why Sandisk's Stock Could Still Go Higher",
              "url": "https://www.nasdaq.com/articles/more-3400-past-12-months-heres-why-sandisks-stock-could-still-go-higher",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "SNDK"
              ]
            },
            {
              "title": "Sandisk Stock Is Down 30% From Its Peak: Is the Memory Winner Still a Screaming Buy Before September?",
              "url": "https://www.nasdaq.com/articles/sandisk-stock-down-30-its-peak-memory-winner-still-screaming-buy-september",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "SNDK"
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
              "secureId": "eqlxxxxkgkmlcklgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxxxxkgkmlcklgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-08-06",
              "summary": "- 매출액 89.7억 달러(YOY +371.6%), 영업이익 70.4억 달러(YoY +38,994.4%), 조정 EPS 39.3 달러 (YoY +13,434.5%)로 각각 예상치 3.8%, 9.7%, 14.2% 상회- 2분기 자사주 45.2억 달러 매입. 140억 달러 추가 자사주 매입 승인으로 잔여 한도 155억 달러로 확대- 가격 상승폭 둔화와 NBM 계약으로 인해 판매량 증가율이 둔화된다는 가이던스에 따라 시간 외 8% 하락",
              "pages": "1",
              "secureId": "eqlxcczlkqixekegcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxcczlkqixekegcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] [26Q4 Review] 마진 상향의 시대가 끝났다, 투자의견 중립 신규",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-05",
              "summary": "- Q4 매출 $8.97B·비GAAP EPS $39.25로 컨센 상회- Q1 매출 가이던스 컨센 하회, 시간외 11% 하락- 자사주 잔여한도 $15.5B, NTM PER 6.8배",
              "pages": "7",
              "secureId": "eqlzmqeqgkxgcligcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzmqeqgkxgcligcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] 과소평가된 NAND 업황",
              "broker": "신한투자증권",
              "analyst": "김형태, 송혜수",
              "date": "2026-05-04",
              "summary": "- NAND 턴어라운드 3Q25부터 가속화. 단기 모멘텀이 아닌 구조적 변화로 해석. AI 추론 수요와 동행하는 SSD 호황 장기화 기대. 엔비디아의 DPU 를 비롯한 SSD 활용 시도 다각화 전망. 단순 데이터 저장 용도가 아닌 추 론 보조 연산 역할로 급부상 → 공급 부족 심화 구간 진입- 매출 59.5억달러(+97%, 전분기대비), EPS 23.41달러로 컨센서스를 각각 26.5%, 61% 상회. 부문별 실적은 데이터센터 14.7억달러(+233.4%), 엣지 36.6억달러(+118.3%), 컨슈머 8.2억달러(-9.6%)로 엔터프라이즈향 SSD 수요가 실적 견인. 지난 분기부터 높아졌던 추정치를 대폭 상회하며 업황 호조 재차 증명. 구속력 있는 장기 계약 확대로 외형 성장 가시성도 확보- FY4Q26 가이던스 매출 80억달러, EPS 31.50달러로 컨센서스(65억달러, 22.83달러) 대폭 상회. 장기 계약 3건 기준 최소 계약 매출 420억달러. 100억달러 수준의 금융 보증 포함. FY2027 예정된 출하 물량 1/3이 장기 계약 구조로 공급 예정. 가격은 단기 고정, 장기 변동 반영 구조. 가격 상 승세 지속, 고부가 제품 비중 확대 → 매출총이익률 가이던스 80% 제시",
              "pages": "4",
              "secureId": "eqqqlzeiqkxliligcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqqlzeiqkxliligcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] eSSD 수요 전망치 상향",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2025-11-11",
              "summary": "- 3Q25CY 실적 기대치 상회, 4Q25CY 가이던스도 컨센서스 크게 상회- 2026년 eSSD 수요 전망치 기존 +24~26%YoY에서 +44~46%YoY로 상향- 당분간 NAND의 가격 상승 흐름 이어질 것으로 판단함",
              "pages": "6",
              "secureId": "eqxgleleqqmllqqgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxgleleqqmllqqgcgxclem.pdf",
              "opinion": null
            },
            {
              "title": "[샌디스크 (NAS:SNDK)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2025-11-07",
              "summary": "- 매출액 23.1억 달러(YoY +22.6%), 조정 EPS 1.22 달러(YoY -33.3%)로 각각 예상치 7.2%, 37.1% 상회- 수요가 공급을 초과함에 따라 재고 회전일수가 135일에서 115일로 감소- 실적 예상 대폭 상회. 주요 클라우드 기업들의 CAPEX 확대 지속되며 스토리지 수요 증가 기대감 확산. 시간 외 6.9% 상승",
              "pages": "1",
              "secureId": "eqxgkmcgqcqeqzlgcgxclem",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxgkmcgqcqeqzlgcgxclem.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "HPE-C",
      "price": 135.97999572753906,
      "marketCap": "N/A",
      "sector": "N/A",
      "industry": "N/A",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.4026412341110469,
          "pct": 94.54873646209386
        },
        "m6": {
          "v": 1.3906308231502011,
          "pct": 98.66232827187275
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.66232827187275,
      "adr": 4.5,
      "cyTrend": null,
      "nyTrend": null,
      "upCount": null,
      "downCount": null,
      "upDownRatio": null,
      "bbwthd": null,
      "bbwthdLow": 0.2,
      "high52": 83.69,
      "volx": 1.64,
      "volSurgeWk": 1.03,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -4.83,
      "div50": 8.44,
      "div200": 65.83,
      "ret1m": null,
      "ret3m": 40.26,
      "ret6m": 139.06,
      "maxRise1m": 42.28,
      "maxRise3m": 70.9,
      "maxRise6m": 186.71,
      "brk60d": false,
      "clsPos": 76.58,
      "ma150Slope": null,
      "ta": null
    },
    {
      "ticker": "SN",
      "price": 181.24000549316406,
      "marketCap": "25.65B",
      "sector": "Consumer Cyclical",
      "industry": "Furnishings, Fixtures & Appliances",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6177810181915059,
          "pct": 98.59205776173286
        },
        "m6": {
          "v": 0.428436391996231,
          "pct": 89.55169920462762
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.59205776173286,
      "adr": 4.03,
      "cyTrend": 6.83,
      "nyTrend": 8.08,
      "upCount": 41,
      "downCount": 1,
      "upDownRatio": 97.62,
      "bbwthd": null,
      "bbwthdLow": 0.15,
      "high52": 94.78,
      "volx": 0.54,
      "volSurgeWk": 0.58,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -1.86,
      "div50": 16.37,
      "div200": 48.43,
      "ret1m": null,
      "ret3m": 61.78,
      "ret6m": 42.84,
      "maxRise1m": 34.78,
      "maxRise3m": 69.13,
      "maxRise6m": 97.42,
      "brk60d": false,
      "clsPos": 41.78,
      "ma150Slope": 6.21,
      "ta": {
        "price": 181.24,
        "resistance": 191.22,
        "support": 143.26,
        "contraction": 1,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.0538,
        "m3": 0.3585,
        "m6": 0.1408,
        "rankPct6": 22.14,
        "count": 6
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "샤크닌자",
      "nameEn": "SHARKNINJA INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "샤크닌자",
        "nameEn": "SHARKNINJA INC",
        "infomaxCode": "NYS:SN",
        "financials": {
          "ok": true,
          "ticker": "SN",
          "cik": "0001957132",
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
              "revenue": 1765476000,
              "profit": 179380000,
              "netIncome": 129816000,
              "margin": 10.2,
              "yoy": {
                "revenue": 22.2,
                "profit": 6.4,
                "netIncome": -7,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 1412806000,
              "profit": 164525000,
              "netIncome": 121462000,
              "margin": 11.6,
              "yoy": {
                "revenue": 15.6,
                "profit": 13.5,
                "netIncome": 3.1,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 1444876000,
              "profit": 168647000,
              "netIncome": 139598000,
              "margin": 11.7,
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
              "revenue": 1222638000,
              "profit": 144946000,
              "netIncome": 117835000,
              "margin": 11.9,
              "yoy": {
                "revenue": null,
                "profit": null,
                "netIncome": null,
                "priorEnd": null
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001957132&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "SN",
          "items": [
            {
              "title": "Wall Street Analysts See SharkNinja, Inc. (SN) as a Buy: Should You Invest?",
              "url": "https://www.nasdaq.com/articles/wall-street-analysts-see-sharkninja-inc-sn-buy-should-you-invest",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SN"
              ]
            },
            {
              "title": "Is SN Stock Worth Buying as Growth Collides With a Rich Valuation?",
              "url": "https://www.nasdaq.com/articles/sn-stock-worth-buying-growth-collides-rich-valuation",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SN",
                "NWL",
                "HELE"
              ]
            },
            {
              "title": "SN Raises 2026 Outlook as International Growth Fuels Earnings Upside",
              "url": "https://www.nasdaq.com/articles/sn-raises-2026-outlook-international-growth-fuels-earnings-upside",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SN",
                "NWL",
                "HELE"
              ]
            },
            {
              "title": "SN Stock Jumps 14.7% in a Week as Investors Weigh More Upside Ahead",
              "url": "https://www.nasdaq.com/articles/sn-stock-jumps-147-week-investors-weigh-more-upside-ahead",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SN",
                "NWL",
                "HELE"
              ]
            },
            {
              "title": "SharkNinja (SN) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/sharkninja-sn-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SN",
                "SN"
              ]
            },
            {
              "title": "Here's Why SharkNinja, Inc. (SN) is a Strong Momentum Stock",
              "url": "https://www.nasdaq.com/articles/heres-why-sharkninja-inc-sn-strong-momentum-stock",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SN"
              ]
            },
            {
              "title": "SharkNinja, Inc. (SN) Hit a 52 Week High, Can the Run Continue?",
              "url": "https://www.nasdaq.com/articles/sharkninja-inc-sn-hit-52-week-high-can-run-continue",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SN",
                "LCUT"
              ]
            },
            {
              "title": "LCUT or SN: Which Is the Better Value Stock Right Now?",
              "url": "https://www.nasdaq.com/articles/lcut-or-sn-which-better-value-stock-right-now",
              "date": "2026-08-10",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "LCUT",
                "SN"
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
            "url": "https://www.sec.gov/Archives/edgar/data/1957132/000195713226000047/sharkninja-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-13",
            "reportDate": "2026-07-13",
            "items": [
              "8.01"
            ],
            "itemsKo": [
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1957132/000110465926082783/tm2620293d1_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-18",
            "reportDate": "2026-06-18",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1957132/000195713226000040/sharkninja-20260618.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1957132/000195713226000033/sharkninja-20260506.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-11",
            "reportDate": "2026-02-11",
            "items": [
              "2.02",
              "8.01"
            ],
            "itemsKo": [
              "실적 발표",
              "기타 중요사건"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1957132/000195713226000009/sharkninja-20260211.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-01-20",
            "reportDate": "2026-01-19",
            "items": [
              "5.02",
              "9.01"
            ],
            "itemsKo": [
              "임원 변동",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1957132/000195713226000005/sharkninja-20260119.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 6,
          "reports": [
            {
              "title": "[스노우플레이크 (NYS:SNOW)] SNOW의 시간은 거꾸로 간다",
              "broker": "키움증권",
              "analyst": "김승혁",
              "date": "2026-06-01",
              "summary": "- 스노우플레이크는 클라우드에 데이터를 모아 저장·분석해주는 데이터 플랫폼 기업- FY1Q27 실적은 성장률 재가속과 가이던스 상향 등 긍정적. 발표 후 주가 +36%- 기업용 데이터·AI 플랫폼 시장 확장, 고객 확보 속도 증가 등에 우호적 흐름 전망",
              "pages": "6",
              "secureId": "eqlcgxlggimzelmgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlcgxlggimzelmgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 꺾이지 않은 성장, 남은 건 ‘증명’",
              "broker": "키움증권",
              "analyst": "김승혁",
              "date": "2026-02-27",
              "summary": "- 스노우플레이크는 데이터 저장·분석과 AI 활용을 지원하는 클라우드 데이터 플랫폼- FY4Q26은 매출 +30% 성장, NRR 125%, RPO +42%로 성장 탄력이 유지된 실적- FY27 성장 둔화, RPO 단기 인식 비중 하락 속 Cortex Code가 성장 재가속의 핵심",
              "pages": "4",
              "secureId": "eqqgemlmilqxxqzgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgemlmilqxxqzgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 높은 상호운용성 핵심",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2026-02-26",
              "summary": "- AI 에이전트 확산으로 인한 비용 최적화 위험 비교적 적음- 원래부터 높았던 AI 기여도가 한층 더 확대 + 상호운용성 확장- 전년대비 제품 매출 +27% 성장 가이던스는 보수적으로 제시된 수치",
              "pages": "6",
              "secureId": "eqqgcmxeclqgmlxgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgcmxeclqgmlxgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 사실은 괜찮은 실적",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2025-12-05",
              "summary": "- FY3Q26은 호실적 달성에도 불구하고 4Q 가이던스를 아쉽게 제시하며 직후 주가 급락- AI는 동사에게 별도의 모멘텀이 아니라 기존 플랫폼 사용량을 끌어올리는 직접적 성장 엔진- 2Q의 대규모 마이그레이션 효과에서 정상 패턴으로의 복귀 때문에 이번 분기 실적이 언뜻 아쉬워보일 수 있으나, 레거시 시스템의 데이터 수집 및 마이그레이션은 여전히 규모가 크고 미완성된 시장임을 염두에 두어야 함 (AWS는 온프레미스 마이그레이션이 15-20%만 완료되었다고 간주).",
              "pages": "6",
              "secureId": "eqxklllckxqgkxqgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxklllckxqgkxqgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 데이터 웨어하우징 2위 업체, 24년의 오랜 하락 끝 턴어라운드",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2025-09-25",
              "summary": "- 스노우플레이크는 클라우드 기반 데이터 웨어하우징(DWaaS) 및 분석 업체. 고객이 사용하는 서비스에 대해서만 비용을 지불하는 소비 기반 가격 책정 전략이 경쟁사와의 가장 큰 차별점- 이로 인해 대부분의 SW 업체가 채택하는 선수지표들(Billings, RPO, Backlog, 이연수익 등)이 불명확해지지 않은가 하는 우려가 있을 수 있지만, 계약 Capa 만큼 미리 청구를 해서 계약 최소금을 Booking으로 잡아놓기 때문에 오히려 선수지표 추이보다 매출에 인식되는 부분이 클 수 있음- AI로 인해 데이터의 양과 종류가 기하급수적으로 폭증. 이로 인해 고객 데이터 플랫폼(CDP) 시장이 점점 더 중요해지면서 TAM과 고객 기반이 모두 빠르게 확대",
              "pages": "2",
              "secureId": "eqzlqqziceiqmxqgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzlqqziceiqmxqgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[스노우플레이크 (NYS:SNOW)] 신규 고객의 높은 AI 수요 비중",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2025-08-29",
              "summary": "- 스노우플레이크는 데이터웨어하우징(DWaaS) 산업에서 추정 점유율 2위를 보유하고 있는 업체. FY2Q26에 호실적 및 가이던스 상향으로 직후 주가 급등을 이끌어내며, 전날 발표한 몽고DB 호실적과 함께 데이터 SW 전반 의 강세 증명- 순유지율은 125%로 전분기 대비 개선. 상반기에만 250개 기능을 정식 출 시한 점이 주효(신제품: Cortex Agent, Gen2 웨어하우스, Snowflake Postgres, OpenFlow, Apache Spark용 Snowpark Connect 등)- 2분기 신규 고객의 51%와 전체 활용 사례의 25%에 AI가 중요한 영향을 미쳤으며, 현재 약 6,100개 계정이 동사의 AI를 매주 사용하고 있다고 밝 힘",
              "pages": "6",
              "secureId": "eqzxkgicieikqlegcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzxkgicieikqlegcgxclgc.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "SHAZ",
      "price": 65.44999694824219,
      "marketCap": "2.34B",
      "sector": "Technology",
      "industry": "Information Technology Services",
      "rs": {
        "m1": {
          "v": -0.07149951863054041,
          "pct": 18.12816188870152
        },
        "m3": {
          "v": -0.03834852635874073,
          "pct": 23.212996389891696
        },
        "m6": {
          "v": 1.378270198385047,
          "pct": 98.59002169197397
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.59002169197397,
      "adr": 14.2,
      "cyTrend": 410.06,
      "nyTrend": 158.5,
      "upCount": 0,
      "downCount": 7,
      "upDownRatio": 0,
      "bbwthd": 0.73,
      "bbwthdLow": 0.36,
      "high52": 67.14,
      "volx": 1.04,
      "volSurgeWk": 0.91,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 2.38,
      "div50": -4.48,
      "div200": 28.42,
      "ret1m": -7.15,
      "ret3m": -3.83,
      "ret6m": 137.83,
      "maxRise1m": 104.45,
      "maxRise3m": 149.12,
      "maxRise6m": 489,
      "brk60d": false,
      "clsPos": 24.19,
      "ma150Slope": null,
      "ta": {
        "price": 65.45,
        "resistance": 75.84,
        "support": 64.53,
        "contraction": 0.81,
        "trend": null
      },
      "ma150SlopeDir": null,
      "wrs": {
        "m1": 0.2042,
        "m3": 0.0276,
        "m6": 0.0408,
        "rankPct6": 52.14,
        "count": 16
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "샤로나이 홀딩스",
      "nameEn": "SHARONAI HLDGS INC",
      "detail": {
        "fetchedAt": "2026-08-20",
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
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-04",
            "reportDate": "2026-08-04",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226035925/form8-k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-24",
            "reportDate": "2026-07-22",
            "items": [
              "1.01",
              "1.02",
              "5.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "1.02",
              "임원 변동",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226034569/form8-k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-23",
            "reportDate": "2026-07-23",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226034324/form8-k.htm",
            "description": "8-K"
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
            "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226034162/form8-k.htm",
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
      "ticker": "HURN",
      "price": 158.97999572753906,
      "marketCap": "2.53B",
      "sector": "Industrials",
      "industry": "Consulting Services",
      "rs": {
        "m1": {
          "v": 0.42531822146872206,
          "pct": 98.56661045531197
        },
        "m3": {
          "v": 0.5074909644195739,
          "pct": 96.93140794223827
        },
        "m6": {
          "v": 0.10949824256098058,
          "pct": 55.85683297180043
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 98.56661045531197,
      "adr": 5.96,
      "cyTrend": 3.96,
      "nyTrend": 3.64,
      "upCount": 14,
      "downCount": 3,
      "upDownRatio": 82.35,
      "bbwthd": 0.46,
      "bbwthdLow": 0.07,
      "high52": 85.12,
      "volx": 0.49,
      "volSurgeWk": 0.95,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": false,
      "div10": 4.38,
      "div50": 31.57,
      "div200": 13.77,
      "ret1m": 42.53,
      "ret3m": 50.75,
      "ret6m": 10.95,
      "maxRise1m": 59.91,
      "maxRise3m": 103.7,
      "maxRise6m": 103.7,
      "brk60d": false,
      "clsPos": 89.81,
      "ma150Slope": -3.28,
      "ta": {
        "price": 158.98,
        "resistance": 169,
        "support": 157.52,
        "contraction": 0.58,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.2484,
        "m3": 0.1251,
        "m6": -0.0486,
        "rankPct6": 83.57,
        "count": 7
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "휴런 컨설팅 그룹",
      "nameEn": "HURON CONSULTING GROUP INC",
      "detail": {
        "fetchedAt": "2026-08-19",
        "nameKo": "휴런 컨설팅 그룹",
        "nameEn": "HURON CONSULTING GROUP INC",
        "infomaxCode": "NAS:HURN",
        "financials": {
          "ok": true,
          "ticker": "HURN",
          "cik": "0001289848",
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
              "revenue": 451767000,
              "profit": 36583000,
              "netIncome": 23247000,
              "margin": 8.1,
              "yoy": {
                "revenue": 11.8,
                "profit": 11.8,
                "netIncome": -5.3,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 441963000,
              "profit": 50184000,
              "netIncome": 30654000,
              "margin": 11.4,
              "yoy": {
                "revenue": 10.7,
                "profit": 6.7,
                "netIncome": -9.8,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 441284000,
              "profit": 50000000,
              "netIncome": 30420000,
              "margin": 11.3,
              "yoy": {
                "revenue": 16.7,
                "profit": 17.8,
                "netIncome": 12,
                "priorEnd": "2024-09-30"
              }
            },
            {
              "periodStart": "2025-04-01",
              "periodEnd": "2025-06-30",
              "derived": false,
              "revenue": 411755000,
              "profit": 45654000,
              "netIncome": 19430000,
              "margin": 11.1,
              "yoy": {
                "revenue": 8.1,
                "profit": -23.1,
                "netIncome": -48.2,
                "priorEnd": "2024-06-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001289848&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "HURN",
          "items": [
            {
              "title": "Wall Street Analysts See a 27.2% Upside in Huron Consulting (HURN): Can the Stock Really Move This High?",
              "url": "https://www.nasdaq.com/articles/wall-street-analysts-see-272-upside-huron-consulting-hurn-can-stock-really-move-high",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HURN"
              ]
            },
            {
              "title": "Huron Consulting (HURN) is an Incredible Growth Stock: 3 Reasons Why",
              "url": "https://www.nasdaq.com/articles/huron-consulting-hurn-incredible-growth-stock-3-reasons-why",
              "date": "2026-08-03",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HURN"
              ]
            },
            {
              "title": "Huron Consulting (HURN) Upgraded to Strong Buy: What Does It Mean for the Stock?",
              "url": "https://www.nasdaq.com/articles/huron-consulting-hurn-upgraded-strong-buy-what-does-it-mean-stock",
              "date": "2026-08-03",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HURN"
              ]
            },
            {
              "title": "CRAI Jumps 20% in 3 Months as Demand Broadens Across Key Practices",
              "url": "https://www.nasdaq.com/articles/crai-jumps-20-3-months-demand-broadens-across-key-practices",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "CRAI",
                "FCN",
                "HURN"
              ]
            },
            {
              "title": "Is CRAI Stock Worth Buying as Growth Meets Margin and Leverage Risks?",
              "url": "https://www.nasdaq.com/articles/crai-stock-worth-buying-growth-meets-margin-and-leverage-risks",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "CRAI",
                "FCN",
                "HURN"
              ]
            },
            {
              "title": "Gartner Jumps 39.3% in Past Month. Can Its Strong Rally Keep Running?",
              "url": "https://www.nasdaq.com/articles/gartner-jumps-393-past-month-can-its-strong-rally-keep-running",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "IT",
                "EFX",
                "HURN"
              ]
            },
            {
              "title": "Best Value Stocks to Buy for August 3rd",
              "url": "https://www.nasdaq.com/articles/best-value-stocks-buy-august-3rd",
              "date": "2026-08-03",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "HURN"
              ]
            }
          ],
          "directCount": 3,
          "total": 7,
          "note": "Nasdaq RSS · <nasdaq:tickers> 3개 이하만. 제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 \"관련\"으로 표시합니다. 발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요."
        },
        "filings": [
          {
            "form": "8-K",
            "filingDate": "2026-07-28",
            "reportDate": "2026-07-28",
            "items": [
              "2.02",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1289848/000162828026050168/hurn-20260728.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-27",
            "reportDate": "2026-07-23",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1289848/000162828026049857/hurn-20260723.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-22",
            "reportDate": "2026-06-19",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1289848/000162828026044612/hurn-20260619.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-12",
            "reportDate": "2026-05-08",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1289848/000128984826000098/hurn-20260508.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1289848/000128984826000080/hurn-20260505.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1289848/000162828026011092/hurn-20260224.htm",
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
      "ticker": "PAYC",
      "price": 222.16000366210938,
      "marketCap": "10.01B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6165908584949288,
          "pct": 98.51985559566788
        },
        "m6": {
          "v": 0.7210352445429347,
          "pct": 95.26391901663051
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.51985559566788,
      "adr": 4.46,
      "cyTrend": 10.23,
      "nyTrend": 12.72,
      "upCount": 60,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.11,
      "high52": 95.44,
      "volx": 0.53,
      "volSurgeWk": 0.63,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 2.77,
      "div50": 41.13,
      "div200": 53.25,
      "ret1m": null,
      "ret3m": 61.66,
      "ret6m": 72.1,
      "maxRise1m": 64.34,
      "maxRise3m": 85.8,
      "maxRise6m": 104.03,
      "brk60d": false,
      "clsPos": 89.86,
      "ma150Slope": 2.83,
      "ta": {
        "price": 222.16,
        "resistance": 226.12,
        "support": 218,
        "contraction": 1.05,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2573,
        "m3": 0.2397,
        "m6": 0.2235,
        "rankPct6": 11.43,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "페이컴 소프트웨어",
      "nameEn": "PAYCOM SOFTWARE INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "페이컴 소프트웨어",
        "nameEn": "PAYCOM SOFTWARE INC",
        "infomaxCode": "NYS:PAYC",
        "financials": {
          "ok": true,
          "ticker": "PAYC",
          "cik": "0001590955",
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
              "revenue": 531200000,
              "profit": 168500000,
              "netIncome": 107400000,
              "margin": 31.7,
              "yoy": {
                "revenue": 9.8,
                "profit": 50,
                "netIncome": 20,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 571900000,
              "profit": 210200000,
              "netIncome": 155700000,
              "margin": 36.8,
              "yoy": {
                "revenue": 7.8,
                "profit": 13.6,
                "netIncome": 11.7,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 544300000,
              "profit": 157100000,
              "netIncome": 113800000,
              "margin": 28.9,
              "yoy": {
                "revenue": 10.2,
                "profit": 5.8,
                "netIncome": 0.2,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 493300000,
              "profit": 112600000,
              "netIncome": 110700000,
              "margin": 22.8,
              "yoy": {
                "revenue": 9.2,
                "profit": 7.3,
                "netIncome": 51,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001590955&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "PAYC",
          "items": [
            {
              "title": "Paycom Software (PAYC) is a Top-Ranked Momentum Stock: Should You Buy?",
              "url": "https://www.nasdaq.com/articles/paycom-software-payc-top-ranked-momentum-stock-should-you-buy",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC"
              ]
            },
            {
              "title": "Here's How Much a $1000 Investment in Paycom Software Made 10 Years Ago Would Be Worth Today",
              "url": "https://www.nasdaq.com/articles/heres-how-much-1000-investment-paycom-software-made-10-years-ago-would-be-worth-today",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC"
              ]
            },
            {
              "title": "Paycom (PAYC) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/paycom-payc-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC",
                "PAYC"
              ]
            },
            {
              "title": "Paycom Software Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/paycom-software-q2-earnings-call-highlights",
              "date": "2026-08-09",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC"
              ]
            },
            {
              "title": "PAYC Q2 Earnings Call Centers on Automation and Raised Outlook (Revised)",
              "url": "https://www.nasdaq.com/articles/payc-q2-earnings-call-centers-automation-and-raised-outlook-revised",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC"
              ]
            },
            {
              "title": "PAYC Q2 Earnings Call Centers on Automation and Raised Outlook",
              "url": "https://www.nasdaq.com/articles/payc-q2-earnings-call-centers-automation-and-raised-outlook",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC"
              ]
            },
            {
              "title": "Paycom Software (PAYC) Tops Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/paycom-software-payc-tops-q2-earnings-and-revenue-estimates",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC",
                "DDOG"
              ]
            },
            {
              "title": "Amended: Paycom Software Reveals Increase In Q2 Bottom Line",
              "url": "https://www.nasdaq.com/articles/amended-paycom-software-reveals-increase-q2-bottom-line",
              "date": "2026-08-05",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PAYC"
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
            "url": "https://www.sec.gov/Archives/edgar/data/1590955/000119312526335105/payc-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-08-03",
            "reportDate": "2026-08-03",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1590955/000119312526330818/payc-20260803.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-09",
            "reportDate": "2026-07-08",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1590955/000119312526299695/payc-20260708.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-07",
            "reportDate": "2026-05-04",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1590955/000119312526211919/payc-20260504.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1590955/000119312526208968/payc-20260506.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-04",
            "reportDate": "2026-05-04",
            "items": [
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1590955/000119312526204311/payc-20260504.htm",
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
      "price": 289.0199890136719,
      "marketCap": "50.14B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": -0.1265507227075893,
          "pct": 8.347386172006747
        },
        "m3": {
          "v": -0.05819869520648888,
          "pct": 19.67509025270758
        },
        "m6": {
          "v": 1.3182802058119012,
          "pct": 98.5177151120752
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.5177151120752,
      "adr": 9.3,
      "cyTrend": 33.86,
      "nyTrend": 46.38,
      "upCount": 76,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.33,
      "bbwthdLow": 0.31,
      "high52": 57.86,
      "volx": 0.81,
      "volSurgeWk": 1,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -8.85,
      "div50": -18.09,
      "div200": 32.69,
      "ret1m": -12.66,
      "ret3m": -5.82,
      "ret6m": 131.83,
      "maxRise1m": 50.38,
      "maxRise3m": 104.19,
      "maxRise6m": 410.24,
      "brk60d": false,
      "clsPos": 35.9,
      "ma150Slope": 8.97,
      "ta": {
        "price": 289.02,
        "resistance": 342.3,
        "support": 244.61,
        "contraction": 0.79,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0265,
        "m3": -0.0129,
        "m6": 0.3973,
        "rankPct6": 3.57,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "아스테라 랩스",
      "nameEn": "ASTERA LABS INC",
      "detail": {
        "fetchedAt": "2026-08-13",
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
              "title": "ALAB Benefits From PCIe Demand: Can It Stay Ahead of Its Competitors?",
              "url": "https://www.nasdaq.com/articles/alab-benefits-pcie-demand-can-it-stay-ahead-its-competitors",
              "date": "2026-08-12",
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
              "title": "Astera Labs (ALAB) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/astera-labs-alab-q2-2026-earnings-call-transcript",
              "date": "2026-08-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB",
                "ALAB"
              ]
            },
            {
              "title": "Astera Labs vs. Arm: Which Technology Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/astera-labs-vs-arm-which-technology-stock-better-buy-2026",
              "date": "2026-08-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB",
                "ALAB",
                "ARM"
              ]
            },
            {
              "title": "Astera Labs vs. AppLovin: Which Technology Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/astera-labs-vs-applovin-which-technology-stock-better-buy-2026",
              "date": "2026-08-06",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB",
                "ALAB",
                "APP"
              ]
            },
            {
              "title": "ALAB Q2 Earnings Call Puts Scorpio Ramp Ahead of Schedule",
              "url": "https://www.nasdaq.com/articles/alab-q2-earnings-call-puts-scorpio-ramp-ahead-schedule",
              "date": "2026-08-05",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB"
              ]
            },
            {
              "title": "Astera Labs, Inc. (ALAB) Beats Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/astera-labs-inc-alab-beats-q2-earnings-and-revenue-estimates",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ALAB",
                "CEVA"
              ]
            },
            {
              "title": "Are Computer and Technology Stocks Lagging  ASE Technology (ASX) This Year?",
              "url": "https://www.nasdaq.com/articles/are-computer-and-technology-stocks-lagging-ase-technology-asx-year",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ASX",
                "ALAB"
              ]
            },
            {
              "title": "Nvidia, Micron, and Sandisk Are Up Over 1,000% Since the AI Boom Started. These 2 AI Stocks Could Be the Next Big Winners.",
              "url": "https://www.nasdaq.com/articles/nvidia-micron-and-sandisk-are-over-1000-ai-boom-started-these-2-ai-stocks-could-be-next",
              "date": "2026-08-06",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ALAB",
                "ALAB",
                "ANET"
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
          "total": 0,
          "reports": [],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "AMD",
      "price": 466.4200134277344,
      "marketCap": "761.42B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": -0.15554107327854133,
          "pct": 4.974704890387859
        },
        "m3": {
          "v": -0.002331493048538295,
          "pct": 32.59927797833935
        },
        "m6": {
          "v": 1.2899647987035423,
          "pct": 98.44540853217643
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.44540853217643,
      "adr": 5.65,
      "cyTrend": 2.03,
      "nyTrend": 15.97,
      "upCount": 111,
      "downCount": 17,
      "upDownRatio": 86.72,
      "bbwthd": 0.2,
      "bbwthdLow": 0.14,
      "high52": 79.77,
      "volx": 0.63,
      "volSurgeWk": 0.86,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -3.9,
      "div50": -8.53,
      "div200": 42.32,
      "ret1m": -15.55,
      "ret3m": -0.23,
      "ret6m": 129,
      "maxRise1m": 31.24,
      "maxRise3m": 37.9,
      "maxRise6m": 210.66,
      "brk60d": false,
      "clsPos": 15.83,
      "ma150Slope": 11.24,
      "ta": {
        "price": 466.42,
        "resistance": 469.22,
        "support": 463.21,
        "contraction": 0.55,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0265,
        "m3": -0.0129,
        "m6": 0.3973,
        "rankPct6": 3.57,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "AMD",
      "nameEn": "ADVANCED MICRO DEVICES INC",
      "detail": {
        "fetchedAt": "2026-08-13",
        "nameKo": "AMD",
        "nameEn": "ADVANCED MICRO DEVICES INC",
        "infomaxCode": "NAS:AMD",
        "financials": {
          "ok": true,
          "ticker": "AMD",
          "cik": "0000002488",
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
              "periodStart": "2026-03-29",
              "periodEnd": "2026-06-27",
              "derived": false,
              "revenue": 11536000000,
              "profit": 1990000000,
              "netIncome": 2297000000,
              "margin": 17.3,
              "yoy": {
                "revenue": 50.1,
                "profit": 1585.1,
                "netIncome": 163.4,
                "priorEnd": "2025-06-28"
              }
            },
            {
              "periodStart": "2025-12-28",
              "periodEnd": "2026-03-28",
              "derived": false,
              "revenue": 10253000000,
              "profit": 1476000000,
              "netIncome": 1383000000,
              "margin": 14.4,
              "yoy": {
                "revenue": 37.8,
                "profit": 83.1,
                "netIncome": 95.1,
                "priorEnd": "2025-03-29"
              }
            },
            {
              "periodStart": "2025-09-27",
              "periodEnd": "2025-12-27",
              "derived": true,
              "revenue": 10270000000,
              "profit": 1752000000,
              "netIncome": 1511000000,
              "margin": 17.1,
              "yoy": {
                "revenue": 34.1,
                "profit": 101.1,
                "netIncome": 213.5,
                "priorEnd": "2024-12-28"
              }
            },
            {
              "periodStart": "2025-06-29",
              "periodEnd": "2025-09-27",
              "derived": false,
              "revenue": 9246000000,
              "profit": 1270000000,
              "netIncome": 1243000000,
              "margin": 13.7,
              "yoy": {
                "revenue": 35.6,
                "profit": 75.4,
                "netIncome": 61.2,
                "priorEnd": "2024-09-28"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000002488&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "AMD",
          "items": [
            {
              "title": "Adobe vs. Advanced Micro Devices: Which Technology Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/adobe-vs-advanced-micro-devices-which-technology-stock-better-buy-2026",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ADBE",
                "ADBE",
                "AMD"
              ]
            },
            {
              "title": "Advanced Micro Devices vs. AppLovin: Which Technology Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/advanced-micro-devices-vs-applovin-which-technology-stock-better-buy-2026",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMD",
                "AMD",
                "APP"
              ]
            },
            {
              "title": "Notable Wednesday Option Activity: HUBG, AMD, SPCX",
              "url": "https://www.nasdaq.com/articles/notable-wednesday-option-activity-hubg-amd-spcx",
              "date": "2026-08-12",
              "publisher": "BNK Invest",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HUBG",
                "HUBG",
                "AMD"
              ]
            },
            {
              "title": "Advanced Micro Devices vs. Alphabet: Which Artificial Intelligence Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/advanced-micro-devices-vs-alphabet-which-artificial-intelligence-stock-better-buy-2026",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMD",
                "AMD",
                "GOOGL"
              ]
            },
            {
              "title": "AMD Trades at 63x Forward Earnings, While Nvidia Trades at 24x. History Says This Is the Better Buy.",
              "url": "https://www.nasdaq.com/articles/amd-trades-63x-forward-earnings-while-nvidia-trades-24x-history-says-better-buy",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NVDA",
                "NVDA",
                "AMD"
              ]
            },
            {
              "title": "Better Buy: AMD Stock or Intel Stock?",
              "url": "https://www.nasdaq.com/articles/better-buy-amd-stock-or-intel-stock-0",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMD",
                "AMD",
                "INTC"
              ]
            },
            {
              "title": "TSMC & Sony Establish JV in Japan to Develop Smartphone Image Sensors",
              "url": "https://www.nasdaq.com/articles/tsmc-sony-establish-jv-japan-develop-smartphone-image-sensors",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "TSM",
                "AMD",
                "AVGO"
              ]
            },
            {
              "title": "NVIDIA's $500B Funding Push: Can It Unlock More Revenue Growth?",
              "url": "https://www.nasdaq.com/articles/nvidias-500b-funding-push-can-it-unlock-more-revenue-growth",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "NVDA",
                "AMD",
                "AVGO"
              ]
            }
          ],
          "directCount": 6,
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
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/amd-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-01",
            "reportDate": "2026-06-26",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000115/amd-20260626.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-15",
            "reportDate": "2026-05-13",
            "items": [
              "1.01",
              "1.02",
              "2.03",
              "5.02",
              "5.07",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "1.02",
              "2.03",
              "임원 변동",
              "주주총회 표결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2488/000119312526226746/d118163d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-05",
            "reportDate": "2026-05-05",
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
            "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000072/amd-20260505.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-24",
            "reportDate": "2026-02-23",
            "items": [
              "1.01",
              "3.02",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "3.02",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000045/amd-20260223.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-17",
            "reportDate": "2026-02-10",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000029/amd-20260210.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 15,
          "reports": [
            {
              "title": "[AMD (NAS:AMD)] [Issue & News] Taalas 인수로 AI 추론 컴퓨트 포트폴리오 확장 - DC 다음 성장축 선점 시도",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-07",
              "summary": "- AMD, Taalas 인수해 AI 추론 컴퓨트 솔루션 강화- 인수가·조건 미공개, 재무 영향 판단 유보- DC 비중 58%·가속기 TAM 1.4조 목표와 결 같음",
              "pages": "5",
              "secureId": "eqlxczlellggeqkgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlxczlellggeqkgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] EPYC CPU의 성장, Helios의 가세",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-08-05",
              "summary": "- 실적발표 이후 8% 하락. 시장은 당분기 호실적보다 Helios 램프, 매출 가 시성과 CapEx 및 현금흐름에 주목한 것이 원인. 다만, EPYC CPU의 견조 한 수요와 Helios 일정은 변함없음. 하반기 이후 기대감 여전히 유효- 2Q26 매출액 115.4억달러(YoY+50.1%, 이하 전년동기대비), 영업이익 30.9억달러(+244.9%, OPM 26.8%)를 기록해 컨센서스 영업이익 30.1억달 러에 부합. 데이터센터 매출이 67.2억달러(+107%, OPM 31.3%) 기록하며 매출총이익률도 Non-GAAP 기준 56.2%로 역대 최대 분기 실적 달성.- 3Q 가이던스는 중간값 기준 매출액 130억달러, 매출총이익률 56%로 컨 센서스에 부합. 서버 CPU 매출은 26년 하반기, 27년 각각 80%, 70% 이상 성장 전망. 27년 데이터센터 매출은 Helios 채택 확대로 100% 이상 성장 예상. Helios 램프는 일정대로 진행 중",
              "pages": "6",
              "secureId": "eqlzmemccilcelegcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzmemccilcelegcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-08-05",
              "summary": "- 매출액 115.4억 달러(YoY +50.1%), 영업이익 31억 달러(YoY +244.9%), 조정 EPS 1.66 달러(YoY +245.8%)로 각각 예상치 2.0%, 2.9%, 2.7% 상회- 게이밍 부문 매출 감소는 콘솔 사이클 후반부 진입에 따른 *세미 커스텀 매출 하락과 하드웨어 비용 상승이 촉발한 그래픽카드 가격 인상에 따른 수요 위축이 주된 요인- 스페이스X가 지상·궤도 데이터센터를 Nvidia 제품으로 독점 구축한다는 소식에 시간 외 -8.8%(vs. 엔비디아 +2.2%)",
              "pages": "1",
              "secureId": "eqlzmecgmmlkzmkgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzmecgmmlkzmkgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] 성장은 증명, 해자는 숙제",
              "broker": "유진투자증권",
              "analyst": "박재환",
              "date": "2026-08-05",
              "summary": "- AMD의 FY2Q26 매출은 115.4억달러(+50.1% yoy), 데이터센터 매출은 67.2억달러(+107% yoy)를 기록하며 컨센 상회. 데이터센터향 서버 CPU 와 Instinct GPU 강세로 견조한 외형 성장을 기록.- Agent AI 워크로드 확산으로 서버 CPU 수요 강세 기조가 유지되는 가운데, AMD의 서버 CPU 매출은 5분기 연속 사상 최고치를 경신. EPYC Turin(Gen5)뿐 아니라 구세대 Genoa(Gen4)도 여전히 견조한 수요를 보 이고 있으며,CPU 세대 전환에 따른 믹스 개선으로 ASP가 상승하는 동시에 안정적인 공급망 확보로 출하량이 동반 개선되는 P·Q 동반 성장 구간- 다만 Instinct 시리즈의 마진 부담은 여전. AMD는 Instinct의 GPM을 전사 평균 대비 낮게 책정하고 있으며, 하반기 출시될 MI455X GPU 역시 432GB(엔비디아 Rubin GPU 288GB)에 달하는 HBM4 탑재량으로 인해 높은 마진 책정이 쉽지 않을 것으로 전망",
              "pages": "6",
              "secureId": "eqlzmcmkiggczzqgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzmcmkiggczzqgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] [26Q2 Review] 데이터센터 두 배, 현금은 잠시 뒤로, 투자의견 적극 매수 유지",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-04",
              "summary": "- 매출 $11.5B·DC $6.7B(+107%), Q3 가이드 $13B- 컨센 상회폭 +2%대로 축소, NTM PE 43배- FCF -39%·설비투자 약 $808M, 램프 선투자",
              "pages": "7",
              "secureId": "eqlzlmixgiqlkgxgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzlmixgiqlkgxgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] [2Q26 Preview] 데이터센터 독주는 계속될까, 높아진 기대가 독이 될까",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-07-27",
              "summary": "- 8월 5일, AMD의 AI 성장 궤도가 다시 한번 시험대에 오른다- OpenAI·Anthropic 확보로 GPU 스토리가 한 단계 올라섰음- 데이터센터 63~66억 달러 구간이 밸류에이션의 방향을 정한다- 상회하면 추가 상승, 부합이면 제자리, 하회하면 프리미엄 조정",
              "pages": "5",
              "secureId": "eqlzeekilzmelklgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzeekilzmelklgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] 주가 상승 원인 점검",
              "broker": "iM증권",
              "analyst": "송명섭",
              "date": "2026-06-11",
              "summary": "- AMD의 현재 주가는 YTD로 약 120%의 높은 상승률을 기록하고 있으며 특히 4월 중순 이후 폭발적인 랠리를 보이고 있다. 이에는 강력한 동사 GPU의 성장과 좋은 실적이 영향을 주었으나, 최근 에이전틱 AI 시대에 들어서며 CPU의 수요가 빠르게 증가할 것이라는 시장 전망에도 기인한다.- AI 학습 국면에서는 대규모 행렬 연산이 핵심이기 때문에 GPU 중심으로 인프라가 구축된다. 반면 추론, 특히 에이전틱 AI 단계에 진입하면 모델 호출 전후의 제어 과정이 대폭 확대된다.- CPU 업체들은 향후 AI 데이터센터 내 CPU와 GPU의 사용량 비율이 1대 8에서 1대 1로 수렴할 것이라고 주장한다. 여기서 1대 1 비율은 서버 한 대 내부의 구조 변화를 뜻하는 것이 아니라, 데이터센터 클러스터 전체의 자원 배분 비율이 바뀌는 것을 의미한다.",
              "pages": "6",
              "secureId": "eqleeiekccxzikcgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqleeiekccxzikcgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] 서버 CPU, 장기 수요 전망치 대폭 상향",
              "broker": "키움증권",
              "analyst": "박유악",
              "date": "2026-05-07",
              "summary": "- 1Q26CY 실적 및 2Q26CY 가이던스 시장 컨센서스 상회- 2030년 서버 CPU TAM을 기존 $60B에서 $120B로 상향 조정- 2Q26 서버 DRAM 가격 상승률 역시 기존 전망치를 상회할 가능성 높다고 판단함",
              "pages": "6",
              "secureId": "eqqleclqexxqgxzgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqleclqexxqgxzgcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] 나도 CPU 쇼티지 수혜주",
              "broker": "신한투자증권",
              "analyst": "고준혁",
              "date": "2026-05-07",
              "summary": "- AI CPU + GPU 동시 수혜 가능성 부각. 서버 CPU 출하량 중심의 성장으 로 구조적 점유율 상승은 기대되나 공급망/수익성 리스크에 주의 필요- 1Q26 매출액 102.5억달러(YoY+37.8%, 이하 전년동기대비), 영업이익 25.4억달러(+42.8%, OPM 24.8%)를 기록해 컨센서스 영업이익 24.1억달 러를 상회. 매출총이익률은 Non-GAAP 기준 55.4%로 전분기 중국향 MI308 매출과 재고충당급 환입 효과를 제외하면 안정적인 마진율 기록- 2분기 가이던스는 매출액 112억달러, 매출총이익률 56%로 컨센서스를 상 회. 서버 CPU 매출도 전년대비 70% 이상 성장 예상. AI GPU는 MI450과 Helios 하반기 램프를 통한 대형 파트너십 출하 일정이 실적의 핵심 변수",
              "pages": "5",
              "secureId": "eqqleclxxqzqziigcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqleclxxqzqziigcgxclei.pdf",
              "opinion": null
            },
            {
              "title": "[AMD (NAS:AMD)] 실적은 호조, 마진은 정체",
              "broker": "한화증권",
              "analyst": "임해인",
              "date": "2026-02-04",
              "summary": "- AMD의 FY 4Q25 매출액은 103억 달러(YoY +34.1%)로 최고치를 경 신했고, 조정 EPS는 1.53 달러(YoY +40.4%)를 기록해 컨센서스를 각 각 8.5%, 15.9% 상회했다- AMD는 FY 1Q26 매출액을 95억 ~ 101억 달러(vs. 컨센서스 94억 달 러)로 전망했다. 중간값 기준 전년 동기 대비 +31.8%의 성장을 시사 하며, 가이던스 안에는 중국 MI 308 매출 1억 달러 규모가 포함돼 있 다.- 매출총이익률은 55%(YoY +1%p, vs. 컨센서스 54.5%)로, 유리한 제품 믹스를 유지할 것으로 예상했다. 영업 비용 가이던스는 약 30.5 억 달러(YoY +37.8%)로 제시했다",
              "pages": "7",
              "secureId": "eqqcemimlzxxmxzgcgxclei",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcemimlzxxmxzgcgxclei.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "KYMR",
      "price": 127.30999755859375,
      "marketCap": "10.47B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": 0.15379736980175743,
          "pct": 83.05227655986509
        },
        "m3": {
          "v": 0.6137659848340518,
          "pct": 98.37545126353791
        },
        "m6": {
          "v": 0.3396821971371987,
          "pct": 85.35791757049893
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.37545126353791,
      "adr": 4.1,
      "cyTrend": 8.04,
      "nyTrend": 14.1,
      "upCount": 9,
      "downCount": 45,
      "upDownRatio": 16.67,
      "bbwthd": 0.25,
      "bbwthdLow": 0.11,
      "high52": 97.89,
      "volx": 1.42,
      "volSurgeWk": 1.27,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 10.89,
      "div50": 18.98,
      "div200": 48.76,
      "ret1m": 15.38,
      "ret3m": 61.38,
      "ret6m": 33.97,
      "maxRise1m": 27.97,
      "maxRise3m": 87.18,
      "maxRise6m": 87.18,
      "brk60d": false,
      "clsPos": 99.1,
      "ma150Slope": 4.94,
      "ta": {
        "price": 127.31,
        "resistance": 130.05,
        "support": 108.87,
        "contraction": 1.06,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "키메라 테라퓨틱스",
      "nameEn": "KYMERA THERAPEUTICS INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "키메라 테라퓨틱스",
        "nameEn": "KYMERA THERAPEUTICS INC",
        "infomaxCode": "NAS:KYMR",
        "financials": {
          "ok": true,
          "ticker": "KYMR",
          "cik": "0001815442",
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
              "revenue": 65000000,
              "profit": -75607000,
              "netIncome": -61211000,
              "margin": -116.3,
              "yoy": {
                "revenue": 466.4,
                "profit": 10.6,
                "netIncome": 20.1,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 34365000,
              "profit": -84154000,
              "netIncome": -69234000,
              "margin": -244.9,
              "yoy": {
                "revenue": 55.5,
                "profit": -13.1,
                "netIncome": -5.6,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 2870000,
              "profit": -97896000,
              "netIncome": 535721000,
              "margin": -3411,
              "yoy": {
                "revenue": -61.2,
                "profit": -21.2,
                "netIncome": 42.1,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 2764000,
              "profit": -92521000,
              "netIncome": -82175000,
              "margin": -3347.4,
              "yoy": {
                "revenue": -26.1,
                "profit": -28.3,
                "netIncome": -31.5,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001815442&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "KYMR",
          "items": [
            {
              "title": "Kymera Therapeutics (KYMR) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/kymera-therapeutics-kymr-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR",
                "KYMR"
              ]
            },
            {
              "title": "KYMR Q2 Earnings and Revenues Top Estimates on Gilead, Sanofi Payments",
              "url": "https://www.nasdaq.com/articles/kymr-q2-earnings-and-revenues-top-estimates-gilead-sanofi-payments",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR",
                "SNY",
                "GILD"
              ]
            },
            {
              "title": "Kymera Therapeutics Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/kymera-therapeutics-q2-earnings-call-highlights",
              "date": "2026-08-05",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR"
              ]
            },
            {
              "title": "Kymera Reports Narrower Loss In Q2 As Collaboration Revenue Jumps",
              "url": "https://www.nasdaq.com/articles/kymera-reports-narrower-loss-q2-collaboration-revenue-jumps",
              "date": "2026-08-05",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR"
              ]
            },
            {
              "title": "Kymera Therapeutics, Inc. (KYMR) Reports Q2 Loss, Tops Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/kymera-therapeutics-inc-kymr-reports-q2-loss-tops-revenue-estimates",
              "date": "2026-08-05",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR",
                "MXCT"
              ]
            },
            {
              "title": "Is Kymera Therapeutics Poised for a Breakthrough With KT-621?",
              "url": "https://www.nasdaq.com/articles/kymera-therapeutics-poised-breakthrough-kt-621",
              "date": "2026-07-24",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR",
                "ARVN",
                "NRIX"
              ]
            },
            {
              "title": "Kymera's CEO Sold $6 Million in Stock After a 170% Run",
              "url": "https://www.nasdaq.com/articles/kymeras-ceo-sold-6-million-stock-after-170-run",
              "date": "2026-07-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR",
                "KYMR"
              ]
            },
            {
              "title": "KYMR Stock Soars 51% YTD on Progress of Atopic Dermatitis Drug",
              "url": "https://www.nasdaq.com/articles/kymr-stock-soars-51-ytd-progress-atopic-dermatitis-drug",
              "date": "2026-07-01",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "KYMR",
                "SNY",
                "GILD"
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
            "url": "https://www.sec.gov/Archives/edgar/data/1815442/000119312526333834/kymr-20260805.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-27",
            "reportDate": "2026-07-27",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1815442/000119312526318078/d167778d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-25",
            "reportDate": "2026-06-25",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1815442/000119312526281817/d62555d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-24",
            "reportDate": "2026-06-24",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1815442/000119312526281051/d131538d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-08",
            "reportDate": "2026-06-05",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1815442/000119312526261698/d13635d8k.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1815442/000119312526193957/kymr-20260430.htm",
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
      "ticker": "AAOI",
      "price": 122.19000244140625,
      "marketCap": "10.33B",
      "sector": "Technology",
      "industry": "Communication Equipment",
      "rs": {
        "m1": {
          "v": 0.10559180377130399,
          "pct": 74.11467116357504
        },
        "m3": {
          "v": -0.3267397722018989,
          "pct": 1.9133574007220218
        },
        "m6": {
          "v": 1.2758429049506588,
          "pct": 98.37310195227765
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.37310195227765,
      "adr": 13.05,
      "cyTrend": -23.45,
      "nyTrend": -3.56,
      "upCount": 0,
      "downCount": 8,
      "upDownRatio": 0,
      "bbwthd": 0.73,
      "bbwthdLow": 0.27,
      "high52": 52.29,
      "volx": 0.93,
      "volSurgeWk": 0.86,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -9.75,
      "div50": -6.43,
      "div200": 26.63,
      "ret1m": 10.56,
      "ret3m": -32.67,
      "ret6m": 127.58,
      "maxRise1m": 111.8,
      "maxRise3m": 175.81,
      "maxRise6m": 256.38,
      "brk60d": false,
      "clsPos": 4.04,
      "ma150Slope": 10.45,
      "ta": {
        "price": 122.19,
        "resistance": 128.35,
        "support": 91.5,
        "contraction": 1.34,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0031,
        "m3": -0.0664,
        "m6": 0.3103,
        "rankPct6": 7.14,
        "count": 13
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "어플라이드 옵토일렉트로닉스",
      "nameEn": "APPLIED OPTOELECTRONICS INC",
      "detail": {
        "fetchedAt": "2026-08-18",
        "nameKo": "어플라이드 옵토일렉트로닉스",
        "nameEn": "APPLIED OPTOELECTRONICS INC",
        "infomaxCode": "NAS:AAOI",
        "financials": {
          "ok": true,
          "ticker": "AAOI",
          "cik": "0001158114",
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
              "revenue": 191922000,
              "profit": -24727000,
              "netIncome": -22781000,
              "margin": -12.9,
              "yoy": {
                "revenue": 86.4,
                "profit": -54.8,
                "netIncome": -150.4,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 151144000,
              "profit": -12991000,
              "netIncome": -14281000,
              "margin": -8.6,
              "yoy": {
                "revenue": 51.4,
                "profit": -45.4,
                "netIncome": -55.7,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 134274000,
              "profit": -11501000,
              "netIncome": -2022000,
              "margin": -8.6,
              "yoy": {
                "revenue": 33.9,
                "profit": -77.7,
                "netIncome": 98.3,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 118630000,
              "profit": -18187000,
              "netIncome": -17936000,
              "margin": -15.3,
              "yoy": {
                "revenue": 82.1,
                "profit": -9.9,
                "netIncome": -1,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001158114&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "AAOI",
          "items": [
            {
              "title": "Zacks Investment Ideas feature highlights: Applied Optoelectronics, NVIDIA and Amazon",
              "url": "https://www.nasdaq.com/articles/zacks-investment-ideas-feature-highlights-applied-optoelectronics-nvidia-and-amazon",
              "date": "2026-08-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMZN",
                "NVDA",
                "AAOI"
              ]
            },
            {
              "title": "The Optical Shift: Why AAOI is Built for the AI Boom",
              "url": "https://www.nasdaq.com/articles/optical-shift-why-aaoi-built-ai-boom",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AMZN",
                "NVDA",
                "AAOI"
              ]
            },
            {
              "title": "AAOI Rides on Datacenter & CATV Growth: Can It Beat LITE and COHR?",
              "url": "https://www.nasdaq.com/articles/aaoi-rides-datacenter-catv-growth-can-it-beat-lite-and-cohr",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AAOI",
                "COHR",
                "LITE"
              ]
            },
            {
              "title": "AAOI Q2 Earnings Call Focuses on Capacity-Led 800G Ramp",
              "url": "https://www.nasdaq.com/articles/aaoi-q2-earnings-call-focuses-capacity-led-800g-ramp",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AAOI"
              ]
            },
            {
              "title": "Applied Optoelectronics (AAOI) Surpasses Q2 Earnings and Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/applied-optoelectronics-aaoi-surpasses-q2-earnings-and-revenue-estimates",
              "date": "2026-08-07",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AAOI",
                "AMAT"
              ]
            },
            {
              "title": "Applied Optoelectronics Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/applied-optoelectronics-q2-earnings-call-highlights",
              "date": "2026-08-06",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "AAOI"
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
            "url": "https://www.sec.gov/Archives/edgar/data/1158114/000168316826006055/aaoi_8k.htm",
            "description": "CURRENT REPORT"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-01",
            "reportDate": "2026-06-25",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1158114/000168316826005221/aaoi_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-16",
            "reportDate": "2026-06-11",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1158114/000168316826004885/aaoi_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-05",
            "reportDate": "2026-06-04",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1158114/000168316826004596/aaoi_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-14",
            "reportDate": "2026-05-14",
            "items": [
              "1.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1158114/000110465926061168/tm2614157d2_8k.htm",
            "description": "FORM 8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-13",
            "reportDate": "2026-05-08",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1158114/000168316826003817/aaoi_8k.htm",
            "description": "FORM 8-K"
          }
        ],
        "krReports": {
          "total": 2,
          "reports": [
            {
              "title": "[어플라이드 옵토일렉트로닉스 (NAS:AAOI)] 광모듈시장의‘캡틴아메리카’",
              "broker": "메리츠증권",
              "analyst": "양승수",
              "date": "2026-03-23",
              "summary": "- 미중 분쟁으로 인해 중국산 광모듈에 대한 공급망 리스크가 부각되고 있으며, 점진적인 미국 광모듈 공급 업체들의 점유율 확대 전망- AAOI는 미국 내 자체 레이저 팹과 자동화 생산시설을 기반으로 전 공정을 수직계열화한 광트랜시버 업체로, 2017년 AWS향 공급을 시작하며 데이터센터 밸류체인에 진입- Lumentum, Coherent 등 EML 레이저 기반 업체들과 달리, 자체 개발한 CW 레이저와 SiPho(실리콘포토닉스 변조기)를 결합한 구조를 채택해 400mW급 레이저 성능을 구현",
              "pages": "3",
              "secureId": "eqqkggzzxqcixeqgcgxclel",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqkggzzxqcixeqgcgxclel.pdf",
              "opinion": null
            },
            {
              "title": "[어플라이드 옵토일렉트로닉스 (NAS:AAOI)] 숨겨진 광통신 강자",
              "broker": "키움증권",
              "analyst": "박기현",
              "date": "2026-03-17",
              "summary": "- 수직계열화를 통한 원가 경쟁력과 공급 안정성 확보- 400G 트랜시버 수요에 힘입어 4Q 실적 시장 기대치 상회- 2분기 흑자 전환 구간 진입을 통한 실적 턴어라운드 본격화 전망",
              "pages": "4",
              "secureId": "eqqixmmqgxziikxgcgxclel",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqixmmqgxziikxgcgxclel.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "W",
      "price": 107.80000305175781,
      "marketCap": "14.77B",
      "sector": "Consumer Cyclical",
      "industry": "Internet Retail",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6072760331334357,
          "pct": 98.30324909747293
        },
        "m6": {
          "v": 0.3650753626111948,
          "pct": 86.65943600867679
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.30324909747293,
      "adr": 5.41,
      "cyTrend": 3.27,
      "nyTrend": 4.32,
      "upCount": 40,
      "downCount": 30,
      "upDownRatio": 57.14,
      "bbwthd": 0.37,
      "bbwthdLow": 0.15,
      "high52": 89.85,
      "volx": 0.57,
      "volSurgeWk": 0.81,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 4.11,
      "div50": 17.36,
      "div200": 21.93,
      "ret1m": null,
      "ret3m": 60.73,
      "ret6m": 36.51,
      "maxRise1m": 49.81,
      "maxRise3m": 77.24,
      "maxRise6m": 112.78,
      "brk60d": false,
      "clsPos": 97.93,
      "ma150Slope": -1.11,
      "ta": {
        "price": 107.8,
        "resistance": 108.72,
        "support": 105.86,
        "contraction": 0.76,
        "trend": "up"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.0894,
        "m3": 0.0198,
        "m6": 0.2186,
        "rankPct6": 12.86,
        "count": 9
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "웨이페어",
      "nameEn": "WAYFAIR INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "웨이페어",
        "nameEn": "WAYFAIR INC",
        "infomaxCode": "NYS:W",
        "financials": {
          "ok": true,
          "ticker": "W",
          "cik": "0001616707",
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
              "revenue": 3519000000,
              "profit": 104000000,
              "netIncome": -1000000,
              "margin": 3,
              "yoy": {
                "revenue": 7.5,
                "profit": 511.8,
                "netIncome": -106.7,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 2931000000,
              "profit": -11000000,
              "netIncome": -105000000,
              "margin": -0.4,
              "yoy": {
                "revenue": 7.4,
                "profit": 91,
                "netIncome": 7.1,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 3337000000,
              "profit": 84000000,
              "netIncome": -116000000,
              "margin": 2.5,
              "yoy": {
                "revenue": 6.9,
                "profit": 171.8,
                "netIncome": 9.4,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 3117000000,
              "profit": 38000000,
              "netIncome": -99000000,
              "margin": 1.2,
              "yoy": {
                "revenue": 8.1,
                "profit": 151.4,
                "netIncome": -33.8,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001616707&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "W",
          "items": [
            {
              "title": "Wayfair (W) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/wayfair-w-q2-2026-earnings-call-transcript",
              "date": "2026-08-11",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "W",
                "W"
              ]
            },
            {
              "title": "Wayfair (W) Just Flashed Golden Cross Signal: Do You Buy?",
              "url": "https://www.nasdaq.com/articles/wayfair-w-just-flashed-golden-cross-signal-do-you-buy",
              "date": "2026-08-11",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "W"
              ]
            },
            {
              "title": "Wayfair Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/wayfair-q2-earnings-call-highlights",
              "date": "2026-08-09",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "W"
              ]
            },
            {
              "title": "Here's Why Wayfair (W) is a Strong Momentum Stock",
              "url": "https://www.nasdaq.com/articles/heres-why-wayfair-w-strong-momentum-stock",
              "date": "2026-08-06",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "W"
              ]
            },
            {
              "title": "Why Wayfair Stock Popped Today",
              "url": "https://www.nasdaq.com/articles/why-wayfair-stock-popped-today",
              "date": "2026-08-04",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "W",
                "W"
              ]
            },
            {
              "title": "Here's What Key Metrics Tell Us About Wayfair (W) Q2 Earnings",
              "url": "https://www.nasdaq.com/articles/heres-what-key-metrics-tell-us-about-wayfair-w-q2-earnings",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "W"
              ]
            },
            {
              "title": "Wayfair (W) Q2 Earnings and Revenues Surpass Estimates",
              "url": "https://www.nasdaq.com/articles/wayfair-w-q2-earnings-and-revenues-surpass-estimates",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "W",
                "MELI"
              ]
            },
            {
              "title": "These 2 Retail and Wholesale Stocks Could Beat Earnings: Why They Should Be on Your Radar",
              "url": "https://www.nasdaq.com/articles/these-2-retail-and-wholesale-stocks-could-beat-earnings-why-they-should-be-your-radar-7",
              "date": "2026-08-14",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "ROST",
                "W"
              ]
            }
          ],
          "directCount": 7,
          "total": 10,
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
            "url": "https://www.sec.gov/Archives/edgar/data/1616707/000161670726000147/w-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-22",
            "reportDate": "2026-05-21",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1616707/000161670726000122/w-20260521.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-18",
            "reportDate": "2026-05-14",
            "items": [
              "1.01",
              "2.03",
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "2.03",
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1616707/000119312526229012/d122682d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-14",
            "reportDate": "2026-05-13",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1616707/000119312526222168/d155001d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-13",
            "reportDate": "2026-05-01",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1616707/000119312526220660/d153028d8k.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1616707/000161670726000110/w-20260430.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 21,
          "reports": [
            {
              "title": "[월풀 (NYS:WHR)] ASP 반등, 수요의 시험 (ASP Up, Units Down?)",
              "broker": "SK증권",
              "analyst": "박형우",
              "date": "2026-08-06",
              "summary": "- Signal: 가전에도 찾아온 IT 인플레이션, 10년 만의 최대폭 판가 인상- Key: Whirlpool 의 미국 역내 생산은 절대 수혜 아닌 상대 우위- Step: 비용 부담이 판가 인상으로, 상대 우위에도 수요는 불확실",
              "pages": "4",
              "secureId": "eqlzmqicgeizckxgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzmqicgeizckxgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[윌리엄스 컴퍼니스 (NYS:WMB)] [2Q26 Review] 모멘텀 미드스트림 인수, 헤인즈빌-걸프코스트 LNG 연결 - 성장 CapEx 확장 사이클의 새 축",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-04",
              "summary": "- 모멘텀 미드스트림 인수, 헤인즈빌-걸프코스트 LNG 연결 확보- 인수 대금·거래 구조는 본 입력에 미포함- 기존 레버리지 4.1배·CapEx 부담 심화 가능성",
              "pages": "5",
              "secureId": "eqlzqmmciiiiimmgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzqmmciiiiimmgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[윌리엄스 컴퍼니스 (NYS:WMB)] [26Q2 Review] 성장률 둔화, 스토리는 인수로, 투자의견 매수 유지",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-03",
              "summary": "- Adj EBITDA +6%로 성장률 둔화, EPS는 컨센 부합- Momentum $5.5B 인수로 FY26 가이던스 $8.4B 상향- 레버리지 3.67x·Blackstone JV로 자금 우려 완화",
              "pages": "7",
              "secureId": "eqlzlqqlilcgieigcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzlqqlilcgieigcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[웰스파고 (NYS:WFC)] 화려하진 않았지만 컨센서스 상회",
              "broker": "키움증권",
              "analyst": "김은갑",
              "date": "2026-07-16",
              "summary": "- EPS 컨센서스 상회- 이자이익과 비이자이익 전반적으로 증가- 자본비율 유지, 주당배당금 상향 예정",
              "pages": "5",
              "secureId": "eqlkezkemlkzizkgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlkezkemlkzizkgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[웰스파고 (NYS:WFC)] 자산 한도 해제 후 대차대조표 성장 본격화",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-07-15",
              "summary": "- 웰스파고의 FY 2Q26 영업수익은 226억 달러(YoY +8.6%), 조정 EPS 는 2 달러(YoY +25%)를 기록해 컨센서스를 각각 3.8%, 17% 상회했 다.- 웰스파고는 2026 회계연도 연간 순이자이익 전망치를 500억 달러 (YoY +5.2%, 컨센서스 부합) 내외로 유지했다.- 유통 시장 제외 순이자 이익은 약 480억 달러(YoY +8.7%)로 예상했다. FY 3Q26에는 2분기 와 마찬가지로 순이자마진의 완만한 하락이 지속될 것으로 보이나, 4분 기에는 수익성이 안정화될 것으로 전망했다",
              "pages": "6",
              "secureId": "eqlkcmmckklielcgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlkcmmckklielcgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[웰타워 (NYS:WELL)] 금리 상승에도 훌륭한 주가 퍼포먼스 지속",
              "broker": "iM증권",
              "analyst": "배세호",
              "date": "2026-06-25",
              "summary": "- 시니어 하우징 리츠 Welltower의 YTD 주가 상승률은 19.0% 상승하여 SPX +7.5% 및 리츠 벤치마크인 Nareits +16.5%를 아웃퍼폼 하였다- 1Q26 Welltower는 매출액 34억달러(+38.3% YoY), 동일시설 기준 순영업수익(SSNOI) 7억달러(+16.7%, YoY), 조정 주당 FFO 1.35달러(+15.4% YoY)를 기록했다- 최근 금리 상승 추이에도 Welltower에게 미치는 재무적 영향은 제한적일 것으로 예상된다. 1Q26 기준 Welltower의 차입금 규모는 184억달러로, 가중평균금리 4%, 가중평균만기는 5년이다",
              "pages": "5",
              "secureId": "eqlgikekxkmzqmlgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlgikekxkmzqmlgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[웰스파고 (NYS:WFC)] 이자이익 부진, 영업수익 컨센서스 하회",
              "broker": "키움증권",
              "analyst": "김은갑",
              "date": "2026-04-16",
              "summary": "- EPS는 컨센서스 상회했지만 순영업수익은 하회- NIM 하락과 이자이익 부진- 자산상한 규제 해소 이후 자산증가세",
              "pages": "5",
              "secureId": "eqqxgmikqilcggggcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqxgmikqilcggggcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[월풀 (NYS:WHR)] 불확실성의 연속",
              "broker": "신한투자증권",
              "analyst": "오강호, 서지범",
              "date": "2026-02-04",
              "summary": "- 4Q25 북미 시장 둔화로 실적 부진. 가전 시장 경쟁 심화 및 판매 부진이 이유. 2026년 1) 신제품 라인업 확대, 2) 관세 영향 본격화, 3) 비용 효율화 등 실적 변동성 확대 구간 진입. 수익성 회복이 주가 방향성 결정할 전망- 매출액 41.0억달러(-1%, 이하 전년대비). EPS(주당순이익) 1.91달러로 흑 자전환. 환율 효과를 제외한 대형 가전(MDA) 지역별 매출 성장률은 북미 -1%, 남미 -5%, 글로벌 소형 가전(SDA) +8% 기록- 2026년 예상 실적 기준 P/E 13.5배 추정. 글로벌 가전(LG전자, 메이디) 업체 평균 11.6배와 유사. 소형 가전 및 북미 시장 실적 성장이 핵심. 리 스크 요인으로 높은 1) 재고자산(+13%), 2) 부채비율은 확인 필요",
              "pages": "3",
              "secureId": "eqqcezlqkkxgmzkgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcezlqkkxgmzkgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[웰스파고 (NYS:WFC)] 자산증가와 양호한 이자이익 증가세",
              "broker": "키움증권",
              "analyst": "김은갑",
              "date": "2026-01-16",
              "summary": "- 25 년 4 분기 순영업수익은 21.3 십억달러로 컨센서스를 1.6% 하회했고, EPS 는 1.76 달러로 컨센서스를 6.0% 상회했다- 이자이익은 YoY 4%, QoQ 3% 증가했다. NIM 이 2.60%로 전분기 2.61%와 거의 같은 수준으로 유지되는 상황에서 자산증가, 고정금리 자산의 리프라이싱 효과가 발휘되었다- 4 분기 5 십억달러의 자기주식 매입이 있었고, 2024 년말 대비 보통주 주식 수는 6% 감소했다. 2025 년 Tangible capital ROE 는 14.6%로 기존 목표 15.0%에 근접했다",
              "pages": "5",
              "secureId": "eqxlzexxklmkimlgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxlzexxklmkimlgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[웰타워 (NYS:WELL)] 수익성 위주의 포트폴리오 개편 중",
              "broker": "iM증권",
              "analyst": "배세호",
              "date": "2025-12-26",
              "summary": "- Welltower(WELL US)는 북미와 영국을 기반으로 노인 주거시설 및 의료시설을 보유·운영하는 대표적인 헬스케어 리츠다. 3Q25 NOI(순영업수익) 비중은 노인주거시설 운영 및 임차(SHO, SH NNN) 78%, 외래진료센터(OM) 4%, 장기요양 및 재활 병원(Long-Term/Post-Acute Care) 18%이다.- 3Q25 Welltower는 매출액 27억달러(+30.7% YoY), 동일시설 기준 순영업수익(SSNOI)은 6억달러(+14.5%, YoY), 조정 주당 FFO 1.34달러(+20.7% YoY)를 기록하며 2024년 이후 두자릿 수 성장세를 이어 나가고 있다. SHO 부문의 강한 실적 개선이 성장세의 배경이다. SHO 부문 평균 임차율은 전년 동기대비 400bp 상승하였으며, 입주객당매출(RevPOR) 역시 전년 동기 대비 4.8% 상승하였다.- Welltower는 견조한 실적 성장세와 수익성이 높은 시니어 하우징 위주의 포트폴리오 조정을 통한 기대수익률 상승으로 2025년 연간 조정 주당 FFO 가이던스를 기존 주당 5.10달러에서 5.27달러로 상향 조정하였다",
              "pages": "5",
              "secureId": "eqxxqciqzellizggcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxxqciqzellizggcgxclgc.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "ALNT",
      "price": 101.80999755859375,
      "marketCap": "1.73B",
      "sector": "Technology",
      "industry": "Electronic Components",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6065961697115921,
          "pct": 98.23104693140795
        },
        "m6": {
          "v": 0.5183099710103836,
          "pct": 92.44396240057846
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.23104693140795,
      "adr": 6.06,
      "cyTrend": 8.1,
      "nyTrend": 7.23,
      "upCount": 16,
      "downCount": 3,
      "upDownRatio": 84.21,
      "bbwthd": null,
      "bbwthdLow": 0.24,
      "high52": 85.79,
      "volx": 0.83,
      "volSurgeWk": 1.03,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": -8.28,
      "div50": 6.96,
      "div200": 43.9,
      "ret1m": null,
      "ret3m": 60.66,
      "ret6m": 51.83,
      "maxRise1m": 51.4,
      "maxRise3m": 74.93,
      "maxRise6m": 115.5,
      "brk60d": false,
      "clsPos": 8.05,
      "ma150Slope": 8.13,
      "ta": {
        "price": 101.81,
        "resistance": 104.65,
        "support": 89.54,
        "contraction": 1.25,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0283,
        "m3": -0.0425,
        "m6": 0.0932,
        "rankPct6": 31.43,
        "count": 22
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "얼라이언트",
      "nameEn": "ALLIENT INC"
    },
    {
      "ticker": "PLTR",
      "price": 175.19000244140625,
      "marketCap": "420.99B",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "rs": {
        "m1": {
          "v": 0.40635789412051554,
          "pct": 98.22934232715008
        },
        "m3": {
          "v": 0.2798801592050804,
          "pct": 88.4115523465704
        },
        "m6": {
          "v": 0.28873031701553625,
          "pct": 81.81489515545914
        }
      },
      "qualifiedBy": [
        "1mo"
      ],
      "bestPct": 98.22934232715008,
      "adr": 4.69,
      "cyTrend": 8.58,
      "nyTrend": 10.49,
      "upCount": 85,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": 0.63,
      "bbwthdLow": 0.1,
      "high52": 84.42,
      "volx": 0.87,
      "volSurgeWk": 1.21,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": false,
      "jeongbae": false,
      "div10": 1.77,
      "div50": 27.78,
      "div200": 15.43,
      "ret1m": 40.64,
      "ret3m": 27.99,
      "ret6m": 28.87,
      "maxRise1m": 52.84,
      "maxRise3m": 69.39,
      "maxRise6m": 69.39,
      "brk60d": false,
      "clsPos": 76.88,
      "ma150Slope": -2.82,
      "ta": {
        "price": 175.19,
        "resistance": 185.75,
        "support": 170.82,
        "contraction": 0.97,
        "trend": "mixed"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.2162,
        "m3": 0.1468,
        "m6": 0.3292,
        "rankPct6": 6.43,
        "count": 33
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "팔란티어 테크",
      "nameEn": "PALANTIR TECH INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "팔란티어 테크",
        "nameEn": "PALANTIR TECH INC",
        "infomaxCode": "NAS:PLTR",
        "financials": {
          "ok": true,
          "ticker": "PLTR",
          "cik": "0001321655",
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
              "revenue": 1935464000,
              "profit": 912004000,
              "netIncome": 1061890000,
              "margin": 47.1,
              "yoy": {
                "revenue": 92.8,
                "profit": 238.6,
                "netIncome": 225,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 1632583000,
              "profit": 753998000,
              "netIncome": 870527000,
              "margin": 46.2,
              "yoy": {
                "revenue": 84.7,
                "profit": 328.3,
                "netIncome": 306.7,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 1406802000,
              "profit": 575394000,
              "netIncome": 608676000,
              "margin": 40.9,
              "yoy": {
                "revenue": 70,
                "profit": 5110.5,
                "netIncome": 670.4,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 1181092000,
              "profit": 393256000,
              "netIncome": 475599000,
              "margin": 33.3,
              "yoy": {
                "revenue": 62.8,
                "profit": 247.6,
                "netIncome": 231.4,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001321655&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "PLTR",
          "items": [
            {
              "title": "Palantir Stock Investors Just Got Good News From CEO Alex Karp. Wall Street Says It's Time to Buy.",
              "url": "https://www.nasdaq.com/articles/palantir-stock-investors-just-got-good-news-ceo-alex-karp-wall-street-says-its-time-buy",
              "date": "2026-08-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PLTR",
                "PLTR"
              ]
            },
            {
              "title": "Zacks Investment Ideas feature highlights: Palantir, Micron and SpaceX",
              "url": "https://www.nasdaq.com/articles/zacks-investment-ideas-feature-highlights-palantir-micron-and-spacex",
              "date": "2026-08-19",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "PLTR"
              ]
            },
            {
              "title": "Arista Networks vs. Palantir Technologies: Which Technology Stock Is a Better Buy in 2026?",
              "url": "https://www.nasdaq.com/articles/arista-networks-vs-palantir-technologies-which-technology-stock-better-buy-2026",
              "date": "2026-08-19",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "ANET",
                "ANET",
                "PLTR"
              ]
            },
            {
              "title": "Is Palantir the Next Trillion-Dollar Stock?",
              "url": "https://www.nasdaq.com/articles/palantir-next-trillion-dollar-stock",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PLTR",
                "PLTR",
                "NVDA"
              ]
            },
            {
              "title": "Better Buy: Palantir at 108 Times Forward Earnings or Tesla at 190 Times?",
              "url": "https://www.nasdaq.com/articles/better-buy-palantir-108-times-forward-earnings-or-tesla-190-times",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PLTR",
                "PLTR",
                "TSLA"
              ]
            },
            {
              "title": "Palantir, SpaceX and Micron: Buy, Sell or Hold?",
              "url": "https://www.nasdaq.com/articles/palantir-spacex-and-micron-buy-sell-or-hold",
              "date": "2026-08-18",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "MU",
                "PLTR"
              ]
            },
            {
              "title": "Michael Burry Is Betting Against Palantir Again—Should Investors Care?",
              "url": "https://www.nasdaq.com/articles/michael-burry-betting-against-palantir-again-should-investors-care",
              "date": "2026-08-18",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "PLTR",
                "PLTR",
                "NVDA"
              ]
            },
            {
              "title": "Palantir and Sandisk Stocks Are Soaring: Wall Street Says to Buy 1 and Avoid the Other",
              "url": "https://www.nasdaq.com/articles/palantir-and-sandisk-stocks-are-soaring-wall-street-says-buy-1-and-avoid-other",
              "date": "2026-08-18",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "SNDK",
                "SNDK",
                "PLTR"
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
            "filingDate": "2026-08-03",
            "reportDate": "2026-08-03",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/pltr-20260803.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-09",
            "reportDate": "2026-06-03",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000033/pltr-20260603.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-04",
            "reportDate": "2026-05-04",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000026/pltr-20260504.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-02",
            "reportDate": "2026-02-02",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000004/pltr-20260202.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-11-03",
            "reportDate": "2025-11-03",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000130/pltr-20251103.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2025-08-04",
            "reportDate": "2025-08-04",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000105/pltr-20250804.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 14,
          "reports": [
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 또 한번 역대급 실적으로 존재감 증명",
              "broker": "신한투자증권",
              "analyst": "리서치본부",
              "date": "2026-08-04",
              "summary": "- 팔란티어는 2Q26에도 전 지표에서 기대를 상회하고 다시 한번 연간 가이 던스를 큰 폭으로 상향하며 주가 급등. Rule of 40(매출 성장+영업이익률) 이 155%, 기존 고객 유지율이 157%로 재차 확대- AI랩 대비 팔란티어의 경쟁력에 대해, 1) 토큰 과금 모델은 랩에게는 유효 하나 구매자에게는 그렇지 않다는 구조(AI Slop과 관련), 2) 기업이 프론티 어 모델에 노출하는 것은 원 데이터 및 그보다 가치가 큰 ‘알파’(메타데이 터, 추론 궤적, 사용 패턴 등)인데, 기업에는 이를 통제할 메커니즘이 아직 없다는 설명, 3) 모델 종속 및 단절 리스크(팔란티어는 계약 구조 자체가 모델 교체를 전제로 설계), 4) 벤치마크와 실무의 불일치 등이 폭넓게 제시- 특히 기업들도 소버린(주권) 개념 하에 자사의 데이터, 로직, 액션, 보안에 대한 완전한 소유권을 요구하는 경우가 증가. 따라서 고객 보안 내에서 실 행되고, 학습 재료가 운영 텔레메트리며, 산출물인 가중치의 소유권이 고 객인 경우가 더욱 중요해지기에 AIP와 FDE가 경쟁력을 갖는다는 설명",
              "pages": "7",
              "secureId": "eqlzlglixmzeiezgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzlglixmzeiezgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 미국 사업 모멘텀 강화, 전망도 대폭 상향",
              "broker": "하나증권",
              "analyst": "김재임",
              "date": "2026-08-04",
              "summary": "- 미국 커머셜 149%, 전체 매출 성장 93%로 가속화, Rule of 40 155pt (컨센 138)- 2026년 가이던스 매출 성장 82%, 조정 OPM 60%로 상향조정- 미국 사업 모멘텀 지속 기대하는 이유",
              "pages": "7",
              "secureId": "eqlzlggzkgcmkzxgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzlggzkgcmkzxgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] Earnings Flash",
              "broker": "한화증권",
              "analyst": "박제인",
              "date": "2026-08-04",
              "summary": "- 매출액 19.4억 달러(YoY +92.8%), 조정 EPS 0.41달러(YoY +156.3%)로 각각 예상치 7.0%, 18.2% 상회- 1,000만 달러 이상 계약 73건, 500만 달러 이상 계약 98건, 100만 달러 이상 계약 220건 체결- 어닝 서프라이즈와 연간 가이던스 상향으로 시간외 14.9% 상승",
              "pages": "1",
              "secureId": "eqlzlelqxmzkilmgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzlelqxmzkilmgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] [26Q2 Review] 성장 가속과 배수 압축의 교차, 투자의견 적극 매수 상향",
              "broker": "대신증권",
              "analyst": "조재운",
              "date": "2026-08-03",
              "summary": "- 매출 $1,935M(+93% YoY), 14분기 연속 가이던스 상회- FY26 가이던스 $8.15B로 $500M 상향, 컨센 5.5% 위- NTM PE 67.5x, 5년 중간값 첫 하회 — bullish/high",
              "pages": "7",
              "secureId": "eqlzqmmclkkkkizgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqlzqmmclkkkkizgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 좋은 실적 속 감안해야 할 변수들",
              "broker": "키움증권",
              "analyst": "김진구",
              "date": "2026-05-18",
              "summary": "- 1Q26 주요 지표에서 우수한 실적 기록, 국제 부문 성장성 확보가 맥점- AI 프런티어 업체들과 향후 본격적 경쟁 예상 하에 지속 성장성 확인 필요- 동사 내재가치 시뮬레이션 결과치로 3,561억달러 제시, 멀티플 정당화 관건",
              "pages": "6",
              "secureId": "eqqlmekglmimekcgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqlmekglmimekcgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 가장 큰 폭의 가이던스 상향",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2026-05-07",
              "summary": "- 매출 +85% YoY(이하 생략) 성장 등 전반적 호실적과 함께 26년 연간 가 이던스를 대폭 상향했으나, 미국 민간 매출이 예상치를 하회하며(+133%) 직후 주가 급락.- 민간 TCV(총계약가치) +42%(미국은 +45%, TTM +115%), 정부 TCV +61%, 총 RDV(잔존거래가치) +98%(미국 민간 +112%), RPO +134%, NDR(기존고객 유지율) 150% 등 이번 분기도 대부분 추가 지표에서 시장 의 기대 크게 상승(정부 계약 특성상 RPO에는 주로 민간 부문 반영)- 2Q26 가이던스로 매출 17.97-18.01억달러, 영업이익 10.63-10.67억달러 제시. 26년 연간 가이던스로 매출 76.50-76.67억달러(+71%), 미국 민간 매출 +120% 이상, 영업이익 44.40-44.52억달러, FCF 42-44억달러 제시. 연간 가이던스는 전 분기 대비 성장률 10%p 상향해 역대 최대 가이던스 인상 폭이라고 언급. 40의 법칙 26년 가이던스는 129%",
              "pages": "7",
              "secureId": "eqqleclllxmglzxgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqleclllxmglzxgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 글로벌 백본 기반 빅테크와 직접적 경합 변수",
              "broker": "키움증권",
              "analyst": "김진구",
              "date": "2026-03-04",
              "summary": "- 운영체제 및 AGI 추구할 백본 기반 빅테크의 엔터프라이즈 사업 진출- 동 변화에 대해 동사는 온톨로지 기반 독자 노선을 중심으로 대응 관측- 동사 내재가치 정당화를 위한 연간 지속적인 탑라인 그로스 담보가 요구",
              "pages": "6",
              "secureId": "eqqgzqqcgigglqcgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqgzqqcgigglqcgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 최근의 SW에 가장 필요했던 실적",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2026-02-03",
              "summary": "- 팔란티어는 4Q25에 매출 14억달러(+69.2% YoY(이하 생략), 6.6% 상회), Non-GAAP EPS 0.25달러(0.02 달러 상회)로 다시한번 강력한 실적 발표. 헤드라인 지표 외에도 고객 유지율 139%, 청구액(Billings) +91%, 총 RPO +143%, 총 계약가치(TCV) +138%, 미국 민간 잔여 거래 가치 (RDV) +145% 등 모든 면에서 완벽한 경로를 유지- 40의 법칙(매출 성장률+영업이익률이 40을 넘어야 한다는 지표)을 넘어 127의 법칙을 제시. FY26년 가이던스로 약 72억달러 매출을 제시해 컨센 서스 62억달러 대비 상당히 상향된 약 +61% 성장률 제시.- 현재 팔란티어 주가는 두 가지 관점에서 볼 수 있음. 1) 작년 11월부터 이 어지고 있는 SW 섹터 자체의 여러 약세론에 개별 기업이 실적으로 맞서 야 하는 상황이고, 2) 팔란티어 자체는 24년부터 장기간 큰 부침없이 주가 가 올라 향후 기대 주가 상승폭 자체가 지난 2년 대비 부담이 있다는 점",
              "pages": "7",
              "secureId": "eqqcecqkmzicelmgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcecqkmzicelmgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 최근의 SW에 가장 필요했던 실적",
              "broker": "신한투자증권",
              "analyst": "심지현",
              "date": "2026-02-03",
              "summary": "- 팔란티어는 4Q25에 매출 14억달러(+69.2% YoY(이하 생략), 6.6% 상회), Non-GAAP EPS 0.25달러(0.02 달러 상회)로 다시한번 강력한 실적 발표. 헤드라인 지표 외에도 고객 유지율 139%, 청구액(Billings) +91%, 총 RPO +143%, 총 계약가치(TCV) +138%, 미국 민간 잔여 거래 가치 (RDV) +145% 등 모든 면에서 완벽한 경로를 유지- 40의 법칙(매출 성장률+영업이익률이 40을 넘어야 한다는 지표)을 넘어 127의 법칙을 제시. FY26년 가이던스로 약 72억달러 매출을 제시해 컨센 서스 62억달러 대비 상당히 상향된 약 +61% 성장률 제시- 현재 팔란티어 주가는 두 가지 관점에서 볼 수 있음. 1) 작년 11월부터 이 어지고 있는 SW 섹터 자체의 여러 약세론에 개별 기업이 실적으로 맞서 야 하는 상황이고, 2) 팔란티어 자체는 24년부터 장기간 큰 부침없이 주가 가 올라 향후 기대 주가 상승폭 자체가 지난 2년 대비 부담이 있다는 점",
              "pages": "7",
              "secureId": "eqqcecelkkgiglcgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqqcecelkkgiglcgcgxclgc.pdf",
              "opinion": null
            },
            {
              "title": "[팔란티어 테크 (NAS:PLTR)] 다면적 가치 판단의 구간",
              "broker": "키움증권",
              "analyst": "김진구",
              "date": "2025-12-09",
              "summary": "- 동사의 가치 판단과 적정 기업가치 수준을 두고 시장 논쟁 증가 조망- 분기 실적을 통한 성장성과 이에 대한 지속성으로 결과로 입증할 필요- AGI를 타겟할 글로벌 빅테크의 엔터프라이즈 영역 진입은 잠재 리스크",
              "pages": "5",
              "secureId": "eqxziemxxxckieqgcgxclgc",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxziemxxxckieqgcgxclgc.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "MU",
      "price": 937.10498046875,
      "marketCap": "1058.36B",
      "sector": "Technology",
      "industry": "Semiconductors",
      "rs": {
        "m1": {
          "v": -0.023319923766485243,
          "pct": 30.269814502529513
        },
        "m3": {
          "v": 0.2480014618176545,
          "pct": 85.81227436823104
        },
        "m6": {
          "v": 1.2563356314991139,
          "pct": 98.22848879248012
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.22848879248012,
      "adr": 7.16,
      "cyTrend": 0.13,
      "nyTrend": 3.73,
      "upCount": 83,
      "downCount": 2,
      "upDownRatio": 97.65,
      "bbwthd": 0.29,
      "bbwthdLow": 0.26,
      "high52": 74.68,
      "volx": 0.67,
      "volSurgeWk": 0.75,
      "aboveMa150": true,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 1.74,
      "div50": -2.62,
      "div200": 66.29,
      "ret1m": -2.33,
      "ret3m": 24.8,
      "ret6m": 125.63,
      "maxRise1m": 40.42,
      "maxRise3m": 70.06,
      "maxRise6m": 302.9,
      "brk60d": false,
      "clsPos": 48.93,
      "ma150Slope": 13.7,
      "ta": {
        "price": 937.1,
        "resistance": 1011.77,
        "support": 891.66,
        "contraction": 0.69,
        "trend": "mixed"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": -0.0265,
        "m3": -0.0129,
        "m6": 0.3973,
        "rankPct6": 3.57,
        "count": 42
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "마이크론 테크놀로지",
      "nameEn": "MICRON TECHNOLOGY INC"
    },
    {
      "ticker": "NUTX",
      "price": 190.6199951171875,
      "marketCap": "1.31B",
      "sector": "Healthcare",
      "industry": "Medical Care Facilities",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.603061048243231,
          "pct": 98.15884476534296
        },
        "m6": {
          "v": 0.6465405601150109,
          "pct": 94.39624005784526
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.15884476534296,
      "adr": 7.73,
      "cyTrend": 31.51,
      "nyTrend": 25.18,
      "upCount": 4,
      "downCount": 0,
      "upDownRatio": 100,
      "bbwthd": null,
      "bbwthdLow": 0.17,
      "high52": 93.44,
      "volx": 0.65,
      "volSurgeWk": 0.59,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 6.41,
      "div50": 15.89,
      "div200": 39.68,
      "ret1m": null,
      "ret3m": 60.31,
      "ret6m": 64.65,
      "maxRise1m": 42.6,
      "maxRise3m": 72.88,
      "maxRise6m": 142.89,
      "brk60d": false,
      "clsPos": 43.69,
      "ma150Slope": -0.82,
      "ta": {
        "price": 190.62,
        "resistance": 192,
        "support": 156.15,
        "contraction": 2.11,
        "trend": "up"
      },
      "ma150SlopeDir": "down",
      "wrs": {
        "m1": 0.1439,
        "m3": 0.1253,
        "m6": -0.017,
        "rankPct6": 75.71,
        "count": 12
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "뉴텍스 헬스",
      "nameEn": "NUTEX HEALTH INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "뉴텍스 헬스",
        "nameEn": "NUTEX HEALTH INC",
        "infomaxCode": "NAS:NUTX",
        "financials": {
          "ok": true,
          "ticker": "NUTX",
          "cik": "0001479681",
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
              "revenue": 210752000,
              "profit": 121718000,
              "netIncome": 65842000,
              "margin": 57.8,
              "yoy": {
                "revenue": -13.6,
                "profit": 261.4,
                "netIncome": 472.1,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 216485000,
              "profit": 81265000,
              "netIncome": 46807000,
              "margin": 37.5,
              "yoy": {
                "revenue": 2.2,
                "profit": 0.7,
                "netIncome": 120.6,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 151679000,
              "profit": 30918000,
              "netIncome": 11834000,
              "margin": 20.4,
              "yoy": {
                "revenue": -41.1,
                "profit": -72.9,
                "netIncome": -80.8,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 267804000,
              "profit": 130367000,
              "netIncome": 55435000,
              "margin": 48.7,
              "yoy": {
                "revenue": 239.9,
                "profit": 1249.1,
                "netIncome": 730.8,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001479681&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "NUTX",
          "items": [
            {
              "title": "Nutex Health (NUTX) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/nutex-health-nutx-q2-2026-earnings-call-transcript",
              "date": "2026-08-13",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX",
                "NUTX"
              ]
            },
            {
              "title": "Nutex Health Q2 Profit Soars As IDR Cost Reductions Drive Margin Gains",
              "url": "https://www.nasdaq.com/articles/nutex-health-q2-profit-soars-idr-cost-reductions-drive-margin-gains",
              "date": "2026-08-10",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX"
              ]
            },
            {
              "title": "Nutex Health Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/nutex-health-q2-earnings-call-highlights",
              "date": "2026-08-07",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX"
              ]
            },
            {
              "title": "Nutex Health NUTX Q1 2025 Earnings Transcript",
              "url": "https://www.nasdaq.com/articles/nutex-health-nutx-q1-2025-earnings-transcript",
              "date": "2026-05-04",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX",
                "NUTX"
              ]
            },
            {
              "title": "Nutex Health NUTX Q2 2025 Earnings Transcript",
              "url": "https://www.nasdaq.com/articles/nutex-health-nutx-q2-2025-earnings-transcript",
              "date": "2026-05-04",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX",
                "NUTX"
              ]
            },
            {
              "title": "Nutex (NUTX) Q1 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/nutex-nutx-q1-2026-earnings-call-transcript",
              "date": "2026-05-01",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX",
                "NUTX"
              ]
            },
            {
              "title": "Nutex Health, Inc. Profit Rises In Q1",
              "url": "https://www.nasdaq.com/articles/nutex-health-inc-profit-rises-q1",
              "date": "2026-05-01",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX"
              ]
            },
            {
              "title": "Nutex Health (NUTX) Q4 2025 Earnings Transcript",
              "url": "https://www.nasdaq.com/articles/nutex-health-nutx-q4-2025-earnings-transcript",
              "date": "2026-03-09",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "NUTX",
                "NUTX"
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
            "filingDate": "2026-08-13",
            "reportDate": "2026-08-11",
            "items": [
              "8.01"
            ],
            "itemsKo": [
              "기타 중요사건"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1479681/000162828026056696/nutx-20260811.htm",
            "description": "8-K"
          },
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
            "url": "https://www.sec.gov/Archives/edgar/data/1479681/000162828026054274/nutx-20260806.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-21",
            "reportDate": "2026-07-15",
            "items": [
              "1.01"
            ],
            "itemsKo": [
              "중요 계약 체결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1479681/000162828026049061/nutx-20260715.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1479681/000162828026028852/nutx-20260430.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-04-23",
            "reportDate": "2026-04-23",
            "items": [
              "5.07"
            ],
            "itemsKo": [
              "주주총회 표결"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1479681/000162828026026828/nutx-20260423.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1479681/000162828026015174/nutx-20260305.htm",
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
      "ticker": "TVTX",
      "price": 65.95999908447266,
      "marketCap": "6.22B",
      "sector": "Healthcare",
      "industry": "Biotechnology",
      "rs": {
        "m1": {
          "v": 0.1724138118082174,
          "pct": 85.7504215851602
        },
        "m3": {
          "v": 0.4845824585058304,
          "pct": 96.28158844765343
        },
        "m6": {
          "v": 1.2193809087617964,
          "pct": 98.15618221258134
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.15618221258134,
      "adr": 4.56,
      "cyTrend": -5.79,
      "nyTrend": 13.18,
      "upCount": 11,
      "downCount": 6,
      "upDownRatio": 64.71,
      "bbwthd": 0.23,
      "bbwthdLow": 0.06,
      "high52": 99.58,
      "volx": 0.96,
      "volSurgeWk": 1.28,
      "aboveMa150": true,
      "aboveMa50": true,
      "order": true,
      "jeongbae": true,
      "div10": 5.71,
      "div50": 15.32,
      "div200": 62.79,
      "ret1m": 17.24,
      "ret3m": 48.46,
      "ret6m": 121.94,
      "maxRise1m": 24,
      "maxRise3m": 56.34,
      "maxRise6m": 153.31,
      "brk60d": false,
      "clsPos": 91.93,
      "ma150Slope": 8.01,
      "ta": {
        "price": 65.96,
        "resistance": null,
        "support": 54.87,
        "contraction": 0.79,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.4876,
        "m3": 0.433,
        "m6": 0.4686,
        "rankPct6": 2.86,
        "count": 55
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "트래비어 테라퓨틱스",
      "nameEn": "TRAVERE THERAPEUTICS INC",
      "detail": {
        "fetchedAt": "2026-08-20",
        "nameKo": "트래비어 테라퓨틱스",
        "nameEn": "TRAVERE THERAPEUTICS INC",
        "infomaxCode": "NAS:TVTX",
        "financials": {
          "ok": true,
          "ticker": "TVTX",
          "cik": "0001438533",
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
              "revenue": 169584000,
              "profit": 3954000,
              "netIncome": -34797000,
              "margin": 2.3,
              "yoy": {
                "revenue": 48.2,
                "profit": 131.3,
                "netIncome": -172.8,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 127199000,
              "profit": -36915000,
              "netIncome": -37102000,
              "margin": -29,
              "yoy": {
                "revenue": 55.6,
                "profit": 13.5,
                "netIncome": 10,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 129689000,
              "profit": -32428000,
              "netIncome": 2729000,
              "margin": -25,
              "yoy": {
                "revenue": 73.4,
                "profit": 46.6,
                "netIncome": 104.5,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 164859000,
              "profit": 24931000,
              "netIncome": 25706000,
              "margin": 15.1,
              "yoy": {
                "revenue": 162.1,
                "profit": 144.4,
                "netIncome": 146.9,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001438533&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "TVTX",
          "items": [
            {
              "title": "Travere Therapeutics Sees FILSPARI FSGS Launch Top Expectations, Expands Renal Pipeline",
              "url": "https://www.nasdaq.com/articles/travere-therapeutics-sees-filspari-fsgs-launch-top-expectations-expands-renal-pipeline",
              "date": "2026-08-18",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TVTX"
              ]
            },
            {
              "title": "Travere Therapeutics (TVTX) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/travere-therapeutics-tvtx-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TVTX",
                "TVTX"
              ]
            },
            {
              "title": "Travere Q2 Loss Widens Despite FILSPARI Sales Surge; Phase 4 SPARLIGHT Study Set To Begin In H2 '26",
              "url": "https://www.nasdaq.com/articles/travere-q2-loss-widens-despite-filspari-sales-surge-phase-4-sparlight-study-set-begin-h2",
              "date": "2026-08-07",
              "publisher": "RTTNews",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TVTX"
              ]
            },
            {
              "title": "Travere Therapeutics Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/travere-therapeutics-q2-earnings-call-highlights",
              "date": "2026-08-05",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TVTX"
              ]
            },
            {
              "title": "Travere (TVTX) Reports Q2 Earnings: What Key Metrics Have to Say",
              "url": "https://www.nasdaq.com/articles/travere-tvtx-reports-q2-earnings-what-key-metrics-have-say",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TVTX"
              ]
            },
            {
              "title": "Travere Therapeutics (TVTX) Reports Q2 Loss, Beats Revenue Estimates",
              "url": "https://www.nasdaq.com/articles/travere-therapeutics-tvtx-reports-q2-loss-beats-revenue-estimates",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "TVTX",
                "RNXT"
              ]
            },
            {
              "title": "Can Novartis' Fabhalta Strengthen Its Nephrology Franchise?",
              "url": "https://www.nasdaq.com/articles/can-novartis-fabhalta-strengthen-its-nephrology-franchise",
              "date": "2026-07-17",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "NVS",
                "VRTX",
                "TVTX"
              ]
            },
            {
              "title": "FDA Accepts AstraZeneca's Filing for Expanded Use of Ultomiris",
              "url": "https://www.nasdaq.com/articles/fda-accepts-astrazenecas-filing-expanded-use-ultomiris",
              "date": "2026-06-16",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "AZN",
                "NVS",
                "TVTX"
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
            "url": "https://www.sec.gov/Archives/edgar/data/1438533/000143853326000062/tvtx-20260804.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-07-09",
            "reportDate": "2026-07-06",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1438533/000143853326000054/tvtx-20260706.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-16",
            "reportDate": "2026-06-12",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1438533/000143853326000048/tvtx-20260612.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-02",
            "reportDate": "2026-06-01",
            "items": [
              "1.01",
              "9.01"
            ],
            "itemsKo": [
              "중요 계약 체결",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1438533/000119312526252474/d107618d8k.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-21",
            "reportDate": "2026-05-19",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1438533/000143853326000046/tvtx-20260519.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-11",
            "reportDate": "2026-05-06",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1438533/000119312526217100/d38424d8k.htm",
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
      "ticker": "HNGE",
      "price": 88.45999908447266,
      "marketCap": "7.14B",
      "sector": "Healthcare",
      "industry": "Health Information Services",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.6010859562800481,
          "pct": 98.08664259927798
        },
        "m6": {
          "v": 1.0256469611528056,
          "pct": 97.2885032537961
        }
      },
      "qualifiedBy": [
        "3mo"
      ],
      "bestPct": 98.08664259927798,
      "adr": 5.57,
      "cyTrend": -6.23,
      "nyTrend": -7.55,
      "upCount": 15,
      "downCount": 30,
      "upDownRatio": 33.33,
      "bbwthd": null,
      "bbwthdLow": 0.14,
      "high52": 94.99,
      "volx": 0.93,
      "volSurgeWk": 1.32,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 0.89,
      "div50": 10.54,
      "div200": 64.72,
      "ret1m": null,
      "ret3m": 60.11,
      "ret6m": 102.56,
      "maxRise1m": 30.43,
      "maxRise3m": 78.24,
      "maxRise6m": 168.85,
      "brk60d": false,
      "clsPos": 34.32,
      "ma150Slope": 8.79,
      "ta": {
        "price": 88.46,
        "resistance": 91.5,
        "support": 71.4,
        "contraction": 0.91,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2343,
        "m3": 0.3392,
        "m6": 0.2686,
        "rankPct6": 8.57,
        "count": 6
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "힌지 헬스",
      "nameEn": "HINGE HEALTH INC",
      "detail": {
        "fetchedAt": "2026-08-18",
        "nameKo": "힌지 헬스",
        "nameEn": "HINGE HEALTH INC",
        "infomaxCode": "NYS:HNGE",
        "financials": {
          "ok": true,
          "ticker": "HNGE",
          "cik": "0001673743",
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
              "revenue": 212817000,
              "profit": 40440000,
              "netIncome": 43690000,
              "margin": 19,
              "yoy": {
                "revenue": 53,
                "profit": 107,
                "netIncome": 107.6,
                "priorEnd": "2025-06-30"
              }
            },
            {
              "periodStart": "2026-01-01",
              "periodEnd": "2026-03-31",
              "derived": false,
              "revenue": 182307000,
              "profit": 32069000,
              "netIncome": 35128000,
              "margin": 17.6,
              "yoy": {
                "revenue": 47.2,
                "profit": 144.1,
                "netIncome": 105,
                "priorEnd": "2025-03-31"
              }
            },
            {
              "periodStart": "2025-09-30",
              "periodEnd": "2025-12-31",
              "derived": true,
              "revenue": 170726000,
              "profit": 27256000,
              "netIncome": 32095000,
              "margin": 16,
              "yoy": {
                "revenue": 45.6,
                "profit": 30.3,
                "netIncome": 18.4,
                "priorEnd": "2024-12-31"
              }
            },
            {
              "periodStart": "2025-07-01",
              "periodEnd": "2025-09-30",
              "derived": false,
              "revenue": 154211000,
              "profit": -6093000,
              "netIncome": -1844000,
              "margin": -4,
              "yoy": {
                "revenue": 53.3,
                "profit": -58.5,
                "netIncome": -640.8,
                "priorEnd": "2024-09-30"
              }
            }
          ],
          "unit": "USD",
          "source_url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001673743&type=10-Q"
        },
        "news": {
          "ok": true,
          "ticker": "HNGE",
          "items": [
            {
              "title": "Is Hinge Health Stock a Buy as Growth Accelerates and Risks Rise?",
              "url": "https://www.nasdaq.com/articles/hinge-health-stock-buy-growth-accelerates-and-risks-rise",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HNGE",
                "TDOC",
                "OMDA"
              ]
            },
            {
              "title": "Hinge Health's Cylinder Deal Opens a $135B GI Care Growth Opportunity",
              "url": "https://www.nasdaq.com/articles/hinge-healths-cylinder-deal-opens-135b-gi-care-growth-opportunity",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HNGE",
                "TDOC",
                "OMDA"
              ]
            },
            {
              "title": "HNGE Rallies 64.6% in 3 Months as Growth and Margins Gain Momentum",
              "url": "https://www.nasdaq.com/articles/hnge-rallies-646-3-months-growth-and-margins-gain-momentum",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HNGE",
                "TDOC",
                "OMDA"
              ]
            },
            {
              "title": "Is the Options Market Predicting a Spike in Hinge Health Stock?",
              "url": "https://www.nasdaq.com/articles/options-market-predicting-spike-hinge-health-stock",
              "date": "2026-08-12",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HNGE"
              ]
            },
            {
              "title": "Hinge Health (HNGE) Q2 2026 Earnings Call Transcript",
              "url": "https://www.nasdaq.com/articles/hinge-health-hnge-q2-2026-earnings-call-transcript",
              "date": "2026-08-12",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HNGE",
                "HNGE"
              ]
            },
            {
              "title": "Hinge Health Q2 Earnings Call Highlights",
              "url": "https://www.nasdaq.com/articles/hinge-health-q2-earnings-call-highlights",
              "date": "2026-08-05",
              "publisher": "MarketBeat",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HNGE"
              ]
            },
            {
              "title": "Hinge Health Inc. (HNGE) Q2 Earnings Meet Estimates",
              "url": "https://www.nasdaq.com/articles/hinge-health-inc-hnge-q2-earnings-meet-estimates",
              "date": "2026-08-04",
              "publisher": "Zacks",
              "tier1": false,
              "direct": true,
              "tickers": [
                "HNGE",
                "PRVA"
              ]
            },
            {
              "title": "Will Carlsmed, Inc. (CARL) Report Negative Earnings Next Week? What You Should Know",
              "url": "https://www.nasdaq.com/articles/will-carlsmed-inc-carl-report-negative-earnings-next-week-what-you-should-know",
              "date": "2026-07-29",
              "publisher": "Zacks",
              "tier1": false,
              "direct": false,
              "tickers": [
                "CARL",
                "HNGE"
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
            "reportDate": "2026-07-29",
            "items": [
              "2.02",
              "7.01",
              "8.01",
              "9.01"
            ],
            "itemsKo": [
              "실적 발표",
              "Reg FD 공시",
              "기타 중요사건",
              "재무제표·첨부"
            ],
            "isEarnings": true,
            "url": "https://www.sec.gov/Archives/edgar/data/1673743/000162828026052558/hnge-20260729.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-06-09",
            "reportDate": "2026-06-09",
            "items": [
              "7.01",
              "9.01"
            ],
            "itemsKo": [
              "Reg FD 공시",
              "재무제표·첨부"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1673743/000162828026041886/hnge-20260609.htm",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1673743/000162828026040802/hnge-20260603.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-05-05",
            "reportDate": "2026-05-05",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1673743/000162828026030499/hnge-20260505.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-03-17",
            "reportDate": "2026-03-16",
            "items": [
              "5.02"
            ],
            "itemsKo": [
              "임원 변동"
            ],
            "isEarnings": false,
            "url": "https://www.sec.gov/Archives/edgar/data/1673743/000162828026018710/hnge-20260316.htm",
            "description": "8-K"
          },
          {
            "form": "8-K",
            "filingDate": "2026-02-10",
            "reportDate": "2026-02-10",
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
            "url": "https://www.sec.gov/Archives/edgar/data/1673743/000162828026006826/hnge-20260210.htm",
            "description": "8-K"
          }
        ],
        "krReports": {
          "total": 2,
          "reports": [
            {
              "title": "[힌지 헬스 (NYS:HNGE)] 안 아프게, 돈 덜 나가게, 위기는 아무렇지 않게",
              "broker": "키움증권",
              "analyst": "신민수",
              "date": "2025-11-06",
              "summary": "- 집에서 쓰는 근골격계 재활 관리 플랫폼, 앱을 운영하는 헬스케어 기업- 고객사 수, 청구액, 회원 전환율 등 주요 실적 지표 꾸준히 좋아지는 중- `25년 연간 실적 가이던스 대폭 상향하며 수익성 개선에 자신감 내비친 상황",
              "pages": "10",
              "secureId": "eqxgileqxcceixcgcgxclel",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqxgileqxcceixcgcgxclel.pdf",
              "opinion": null
            },
            {
              "title": "[힌지 헬스 (NYS:HNGE)] 집에서 만나는 나만의 물리치료사",
              "broker": "iM증권",
              "analyst": "정재원",
              "date": "2025-09-12",
              "summary": "- Hinge health는 2015년 설립, 2025년 5월 나스닥에 상장한 디지털 헬스케어 플랫폼과 원격 물리치료를 결합한 하이브리드 비즈니스 모델을 보유한 기업이다- 힌지헬스의 강점은 다양한 임상을 진행함으로써 성능의 우수성을 입증했고, 동사의 서비스를 사용하는 고용주 분석을 통해 실제 의료비 절감 효과를 확인했다는 점이다- 그 외에도 1만 명의 실제 진료받는 환자를 대상으로 12주 동안 추적관찰을 통해 평균 통증이 약 68%  감소하였음을 확인해 대규모에서의 재현성과 확장성을 입증했다",
              "pages": "5",
              "secureId": "eqzqxigemxxgimlgcgxclel",
              "pdfUrl": "https://rreport.einfomax.co.kr/report/eqzqxigemxxgimlgcgxclel.pdf",
              "opinion": null
            }
          ],
          "note": "연합인포맥스 Global Market Monitor 피드 · 미래에셋·한국투자·삼성·NH 자사 리포트는 미포함"
        }
      }
    },
    {
      "ticker": "FROG",
      "price": 91.20999908447266,
      "marketCap": "11.25B",
      "sector": "Technology",
      "industry": "Software - Application",
      "rs": {
        "m1": {
          "v": null,
          "pct": null
        },
        "m3": {
          "v": 0.23273417648164568,
          "pct": 84.15162454873646
        },
        "m6": {
          "v": 1.1946582307643943,
          "pct": 98.08387563268258
        }
      },
      "qualifiedBy": [
        "6mo"
      ],
      "bestPct": 98.08387563268258,
      "adr": 6.54,
      "cyTrend": 2.77,
      "nyTrend": 2.19,
      "upCount": 44,
      "downCount": 18,
      "upDownRatio": 70.97,
      "bbwthd": null,
      "bbwthdLow": 0.18,
      "high52": 91.93,
      "volx": 0.88,
      "volSurgeWk": 0.89,
      "aboveMa150": false,
      "aboveMa50": false,
      "order": false,
      "jeongbae": false,
      "div10": 1.16,
      "div50": 5.92,
      "div200": 44.52,
      "ret1m": null,
      "ret3m": 23.27,
      "ret6m": 119.47,
      "maxRise1m": 36.5,
      "maxRise3m": 41.06,
      "maxRise6m": 157.71,
      "brk60d": false,
      "clsPos": 82.23,
      "ma150Slope": 4.78,
      "ta": {
        "price": 91.21,
        "resistance": 99.22,
        "support": 76.58,
        "contraction": 1.15,
        "trend": "up"
      },
      "ma150SlopeDir": "up",
      "wrs": {
        "m1": 0.2573,
        "m3": 0.2397,
        "m6": 0.2235,
        "rankPct6": 11.43,
        "count": 50
      },
      "research": {
        "status": "pending",
        "note": "LLM 리서치 대기"
      },
      "nameKo": "제이프로그",
      "nameEn": "JFROG LTD",
      "detail": {
        "fetchedAt": "2026-08-20",
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
            },
            {
              "title": "Why JFrog Stock Jumped Today",
              "url": "https://www.nasdaq.com/articles/why-jfrog-stock-jumped-today",
              "date": "2026-08-07",
              "publisher": "The Motley Fool",
              "tier1": false,
              "direct": true,
              "tickers": [
                "FROG",
                "FROG"
              ]
            }
          ],
          "directCount": 12,
          "total": 13,
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
    }
  ],
  "themes": {
    "bySector": [
      {
        "name": "Technology",
        "count": 24,
        "tickers": [
          "MGRT",
          "TEAM",
          "MXL",
          "DELL",
          "BAND",
          "SNOW",
          "QLYS",
          "MRVL",
          "P",
          "AEHR",
          "PENG",
          "WDAY",
          "PANW",
          "MDB",
          "SNDK",
          "SHAZ",
          "PAYC",
          "ALAB",
          "AMD",
          "AAOI",
          "ALNT",
          "PLTR",
          "MU",
          "FROG"
        ],
        "sharePct": 49
      },
      {
        "name": "Healthcare",
        "count": 14,
        "tickers": [
          "MRNA",
          "TWST",
          "AGL",
          "CORT",
          "MNPR",
          "ORKA",
          "MANE",
          "SYRE",
          "WGS",
          "LQDA",
          "KYMR",
          "NUTX",
          "TVTX",
          "HNGE"
        ],
        "sharePct": 28.6
      },
      {
        "name": "Consumer Cyclical",
        "count": 5,
        "tickers": [
          "EAT",
          "VSXY",
          "CTRN",
          "SN",
          "W"
        ],
        "sharePct": 10.2
      },
      {
        "name": "Industrials",
        "count": 3,
        "tickers": [
          "BXC",
          "AXON",
          "HURN"
        ],
        "sharePct": 6.1
      },
      {
        "name": "Consumer Defensive",
        "count": 1,
        "tickers": [
          "ELF"
        ],
        "sharePct": 2
      },
      {
        "name": "Communication Services",
        "count": 1,
        "tickers": [
          "ATEX"
        ],
        "sharePct": 2
      },
      {
        "name": "미분류",
        "count": 1,
        "tickers": [
          "HPE-C"
        ],
        "sharePct": 2
      }
    ],
    "byIndustry": [
      {
        "name": "Biotechnology",
        "count": 8,
        "tickers": [
          "MRNA",
          "CORT",
          "MNPR",
          "ORKA",
          "MANE",
          "SYRE",
          "KYMR",
          "TVTX"
        ],
        "sharePct": 16.3
      },
      {
        "name": "Software - Application",
        "count": 5,
        "tickers": [
          "TEAM",
          "SNOW",
          "WDAY",
          "PAYC",
          "FROG"
        ],
        "sharePct": 10.2
      },
      {
        "name": "Semiconductors",
        "count": 5,
        "tickers": [
          "MXL",
          "MRVL",
          "ALAB",
          "AMD",
          "MU"
        ],
        "sharePct": 10.2
      },
      {
        "name": "Software - Infrastructure",
        "count": 5,
        "tickers": [
          "BAND",
          "QLYS",
          "PANW",
          "MDB",
          "PLTR"
        ],
        "sharePct": 10.2
      },
      {
        "name": "Information Technology Services",
        "count": 3,
        "tickers": [
          "MGRT",
          "PENG",
          "SHAZ"
        ],
        "sharePct": 6.1
      },
      {
        "name": "Computer Hardware",
        "count": 3,
        "tickers": [
          "DELL",
          "P",
          "SNDK"
        ],
        "sharePct": 6.1
      },
      {
        "name": "Diagnostics & Research",
        "count": 2,
        "tickers": [
          "TWST",
          "WGS"
        ],
        "sharePct": 4.1
      },
      {
        "name": "Medical Care Facilities",
        "count": 2,
        "tickers": [
          "AGL",
          "NUTX"
        ],
        "sharePct": 4.1
      },
      {
        "name": "Apparel Retail",
        "count": 2,
        "tickers": [
          "VSXY",
          "CTRN"
        ],
        "sharePct": 4.1
      },
      {
        "name": "Household & Personal Products",
        "count": 1,
        "tickers": [
          "ELF"
        ],
        "sharePct": 2
      },
      {
        "name": "Industrial Distribution",
        "count": 1,
        "tickers": [
          "BXC"
        ],
        "sharePct": 2
      },
      {
        "name": "Semiconductor Equipment & Materials",
        "count": 1,
        "tickers": [
          "AEHR"
        ],
        "sharePct": 2
      },
      {
        "name": "Restaurants",
        "count": 1,
        "tickers": [
          "EAT"
        ],
        "sharePct": 2
      },
      {
        "name": "Telecom Services",
        "count": 1,
        "tickers": [
          "ATEX"
        ],
        "sharePct": 2
      },
      {
        "name": "Aerospace & Defense",
        "count": 1,
        "tickers": [
          "AXON"
        ],
        "sharePct": 2
      },
      {
        "name": "Drug Manufacturers - Specialty & Generic",
        "count": 1,
        "tickers": [
          "LQDA"
        ],
        "sharePct": 2
      },
      {
        "name": "미분류",
        "count": 1,
        "tickers": [
          "HPE-C"
        ],
        "sharePct": 2
      },
      {
        "name": "Furnishings, Fixtures & Appliances",
        "count": 1,
        "tickers": [
          "SN"
        ],
        "sharePct": 2
      },
      {
        "name": "Consulting Services",
        "count": 1,
        "tickers": [
          "HURN"
        ],
        "sharePct": 2
      },
      {
        "name": "Communication Equipment",
        "count": 1,
        "tickers": [
          "AAOI"
        ],
        "sharePct": 2
      },
      {
        "name": "Internet Retail",
        "count": 1,
        "tickers": [
          "W"
        ],
        "sharePct": 2
      },
      {
        "name": "Electronic Components",
        "count": 1,
        "tickers": [
          "ALNT"
        ],
        "sharePct": 2
      },
      {
        "name": "Health Information Services",
        "count": 1,
        "tickers": [
          "HNGE"
        ],
        "sharePct": 2
      }
    ],
    "clusters": [
      {
        "key": "Sector:Technology",
        "level": "Sector",
        "name": "Technology",
        "count": 24,
        "sharePct": 49,
        "tickers": [
          "MGRT",
          "TEAM",
          "MXL",
          "DELL",
          "BAND",
          "SNOW",
          "QLYS",
          "MRVL",
          "P",
          "AEHR",
          "PENG",
          "WDAY",
          "PANW",
          "MDB",
          "SNDK",
          "SHAZ",
          "PAYC",
          "ALAB",
          "AMD",
          "AAOI",
          "ALNT",
          "PLTR",
          "MU",
          "FROG"
        ],
        "concentration": "high"
      },
      {
        "key": "Sector:Healthcare",
        "level": "Sector",
        "name": "Healthcare",
        "count": 14,
        "sharePct": 28.6,
        "tickers": [
          "MRNA",
          "TWST",
          "AGL",
          "CORT",
          "MNPR",
          "ORKA",
          "MANE",
          "SYRE",
          "WGS",
          "LQDA",
          "KYMR",
          "NUTX",
          "TVTX",
          "HNGE"
        ],
        "concentration": "high"
      },
      {
        "key": "Industry:Biotechnology",
        "level": "Industry",
        "name": "Biotechnology",
        "count": 8,
        "sharePct": 16.3,
        "tickers": [
          "MRNA",
          "CORT",
          "MNPR",
          "ORKA",
          "MANE",
          "SYRE",
          "KYMR",
          "TVTX"
        ],
        "concentration": "mid"
      },
      {
        "key": "Sector:Consumer Cyclical",
        "level": "Sector",
        "name": "Consumer Cyclical",
        "count": 5,
        "sharePct": 10.2,
        "tickers": [
          "EAT",
          "VSXY",
          "CTRN",
          "SN",
          "W"
        ],
        "concentration": "mid"
      },
      {
        "key": "Industry:Software - Application",
        "level": "Industry",
        "name": "Software - Application",
        "count": 5,
        "sharePct": 10.2,
        "tickers": [
          "TEAM",
          "SNOW",
          "WDAY",
          "PAYC",
          "FROG"
        ],
        "concentration": "mid"
      },
      {
        "key": "Industry:Semiconductors",
        "level": "Industry",
        "name": "Semiconductors",
        "count": 5,
        "sharePct": 10.2,
        "tickers": [
          "MXL",
          "MRVL",
          "ALAB",
          "AMD",
          "MU"
        ],
        "concentration": "mid"
      },
      {
        "key": "Industry:Software - Infrastructure",
        "level": "Industry",
        "name": "Software - Infrastructure",
        "count": 5,
        "sharePct": 10.2,
        "tickers": [
          "BAND",
          "QLYS",
          "PANW",
          "MDB",
          "PLTR"
        ],
        "concentration": "mid"
      },
      {
        "key": "Sector:Industrials",
        "level": "Sector",
        "name": "Industrials",
        "count": 3,
        "sharePct": 6.1,
        "tickers": [
          "BXC",
          "AXON",
          "HURN"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Information Technology Services",
        "level": "Industry",
        "name": "Information Technology Services",
        "count": 3,
        "sharePct": 6.1,
        "tickers": [
          "MGRT",
          "PENG",
          "SHAZ"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Computer Hardware",
        "level": "Industry",
        "name": "Computer Hardware",
        "count": 3,
        "sharePct": 6.1,
        "tickers": [
          "DELL",
          "P",
          "SNDK"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Diagnostics & Research",
        "level": "Industry",
        "name": "Diagnostics & Research",
        "count": 2,
        "sharePct": 4.1,
        "tickers": [
          "TWST",
          "WGS"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Medical Care Facilities",
        "level": "Industry",
        "name": "Medical Care Facilities",
        "count": 2,
        "sharePct": 4.1,
        "tickers": [
          "AGL",
          "NUTX"
        ],
        "concentration": "low"
      },
      {
        "key": "Industry:Apparel Retail",
        "level": "Industry",
        "name": "Apparel Retail",
        "count": 2,
        "sharePct": 4.1,
        "tickers": [
          "VSXY",
          "CTRN"
        ],
        "concentration": "low"
      }
    ],
    "headline": "Technology 24종목(49%) · Healthcare 14종목(28.6%) · Biotechnology 8종목(16.3%)",
    "minCount": 2,
    "total": 49
  },
  "research_coverage": {
    "done": 0,
    "total": 49
  },
  "detail_coverage": {
    "done": 40,
    "freshToday": 20,
    "carried": 20,
    "total": 49,
    "cap": 20
  }
};
