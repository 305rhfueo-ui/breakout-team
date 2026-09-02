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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "메가 포춘(Mega Fortune Company Limited)은 2011년 홍콩 사틴(Sha Tin)에서 설립된 회사로, 사물인터넷(IoT, 기기와 기기를 인터넷으로 연결해 데이터를 주고받게 하는 기술) 통합 서비스를 팔아 돈을 번다. 기업 고객이 각자의 설비·기기를 IoT로 연결하도록 컨설팅부터 개발·구축, 데이터 분석까지 대행해주고, 이후 유지보수·기술지원 서비스와 기업 업무를 대신 처리해주는 업무위탁(BPO, Business Process Outsourcing) 서비스, IoT 관련 제품 유통도 함께 한다. 주 고객은 홍콩 및 중화권 지역의 기업들이다. 2025년 7월 16일 375만 주를 주당 4달러에 팔아 1,500만 달러를 조달하며 나스닥에 상장한 초소형주(마이크로캡)다. 최근 이 종목이 주목받는 이유는 본업인 IoT 사업 자체보다, 2026년 1월 새 대주주(WANG Zixi, 지분 77.27%)가 들어오고 이사회와 최고재무책임자(CFO)가 통째로 교체된 뒤 유동주식이 크게 줄어든 상태에서 주가가 반년 새 12배 가까이(1197.96%) 폭등한 투기적 흐름 때문이다. 시가총액이 매출 규모(약 1,100만 달러)에 비해 지나치게 커져 주가수익비율(PER)이 830배 수준까지 벌어지면서 거품 논란도 함께 커지고 있다.",
        "lead": "메가 포춘(Mega Fortune Company Limited, MGRT)은 홍콩에 본사를 둔 사물인터넷(IoT) 통합·유지보수 서비스업체로, 2025년 7월 16일 1,500만 달러 규모의 초소형 기업공개(IPO)를 통해 나스닥에 상장했다. 2026년 1월 20~21일 이사회 독립이사 2명과 최고재무책임자(CFO), 최고운영책임자(COO)가 동시에 사임하며 경영진이 전면 교체됐고, 곧이어 WANG Zixi가 1월 26일 거래를 종결하며 지분 77.27%를 확보해 최대주주로 올라섰다. 유동주식(플로트)이 극도로 적어진 상태에서 투기적 매수세가 몰리며 주가는 최근 6개월간 1197.96% 폭등했고, 52주 주가 범위는 3.08달러에서 170달러까지 벌어졌다. 2025 회계연도 매출은 전년 대비 233.3% 늘어난 1,109만 달러를 기록해 실적 자체도 개선됐지만, 시가총액이 매출 규모에 비해 지나치게 크다는 밸류에이션 우려와 반복된 변동성 거래정지가 함께 나타나고 있다.",
        "whyRose": [
          {
            "id": "wr1",
            "statement": "새 대주주 WANG Zixi가 2026년 1월 26일 거래를 종결하며 지분 77.27%(약 1,062만5,237주)를 확보해 최대주주 겸 사실상 경영권을 갖게 됐다 — 유동주식이 급격히 줄면서 주가 변동성을 키운 핵심 배경으로 꼽힌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "WANG Zixi group takes 77% stake and board changes at Mega Fortune (MGRT)",
                "publisher": "StockTitan (SEC Filing Schedule 13D/A)",
                "url": "https://www.stocktitan.net/sec-filings/MGRT/schedule-13d-a-mega-fortune-co-ltd-amended-major-shareholder-report-a2c0bc4d8cef.html",
                "date": "2026-01-26",
                "quote": "77.27% of the Issuer's total issued and outstanding ordinary shares and approximately 77.27% of the total voting power",
                "verified": "unverified",
                "httpStatus": 429
              }
            ]
          },
          {
            "id": "wr2",
            "statement": "2026년 1월 20~21일 독립이사 2명(PoTin Wong, Wan Kwun Lun), CFO 겸 이사(Chi Chuen Lai), COO 겸 이사(Sin Yi Cheng) 등 4명이 동반 사임하고, GF Securities·Vanguard 등 글로벌 금융기관 출신인 Charles Lin·Chunyan Wang(독립이사)과 Longwai Lai(신임 CFO)가 새로 선임되는 이사회·재무라인 전면 개편이 있었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mega Fortune Overhauls Board and Finance Leadership After January 2026 Resignations",
                "publisher": "The Globe and Mail (press release)",
                "url": "https://www.theglobeandmail.com/investing/markets/stocks/MGRT-Q/pressreleases/1435097/mega-fortune-overhauls-board-and-finance-leadership-after-january-2026-resignations/",
                "date": "2026-01-21",
                "quote": "January 20–21, 2026",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr3",
            "statement": "경영권 이전 직후인 2026년 4월 초 특별한 호재 뉴스 없이 나흘 만에 최대 238% 급등했고, 일일 거래대금은 230만 달러에서 1,690만 달러로 급증하는 등 투기적 매수세가 몰렸다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "How Mega Fortune Stock Tripled This Week",
                "publisher": "The Motley Fool (Nasdaq)",
                "url": "https://www.nasdaq.com/articles/how-mega-fortune-stock-tripled-week",
                "date": "2026-04-09",
                "quote": "Mega Fortune stock gained as much as 238% in just four days with no news to justify the move. Daily trading volume surged from $2.3 million to $16.9 million as speculators piled in.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr4",
            "statement": "이런 급등 흐름 속에 2025 회계연도 매출이 전년 대비 233.3% 늘어난 1,109만 달러, 순이익은 345.4% 늘어난 179만 달러, 주당순이익(EPS)은 312.7% 늘어난 0.17달러를 기록해 실적 자체도 큰 폭으로 개선됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mega Fortune Company (MGRT) Stock Price & Overview",
                "publisher": "stockanalysis.com",
                "url": "https://stockanalysis.com/stocks/mgrt/",
                "date": "2026-09-01",
                "quote": "매출: $11.09M (전년 대비 +233.3%) / 순이익: $1.79M (전년 대비 +345.4%) / EPS: $0.17 (전년 대비 +312.7%)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr5",
            "statement": "9월 1일 종가는 107.99달러(전일 대비 +10.12%, +9.92달러)로 최근에도 강세가 이어지고 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mega Fortune Company (MGRT) Stock Price & Overview",
                "publisher": "stockanalysis.com",
                "url": "https://stockanalysis.com/stocks/mgrt/",
                "date": "2026-09-01",
                "quote": "종가: $107.99 (▲9.92, +10.12%), 기준일: 2026년 9월 1일",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "cp1",
            "statement": "시가총액이 17억 달러를 넘어서는데 연매출은 1,100만 달러대에 그쳐, 밸류에이션과 지분 집중(오너십 컨센트레이션)에 대한 우려가 시장에서 제기되고 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why Is Mega Fortune Company Limited (MGRT) Stock Down -20% Today?",
                "publisher": "Tickeron",
                "url": "https://tickeron.com/blogs/why-is-mega-fortune-company-limited-mgrt-stock-down-20-today-13639/",
                "date": "2026-05-21",
                "quote": "Market participants have also highlighted concerns around the company's valuation and ownership concentration. With a market capitalization above $1.7 billion despite modest annual revenue",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp2",
            "statement": "2026년 5월 21일 하루 만에 주가가 122.49달러에서 100.42달러로 20% 급락했는데, 4월 이사회·경영진 개편에 따른 거버넌스 불확실성과 기술적 지지선 이탈이 원인으로 지목됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why Is Mega Fortune Company Limited (MGRT) Stock Down -20% Today?",
                "publisher": "Tickeron",
                "url": "https://tickeron.com/blogs/why-is-mega-fortune-company-limited-mgrt-stock-down-20-today-13639/",
                "date": "2026-05-21",
                "quote": "MGRT shares fell 20% to $100.42 from the prior close of $122.49",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp3",
            "statement": "지분 77.27%가 대주주 한 명(WANG Zixi)에게 쏠려 유통 가능한 주식 수가 크게 줄었고, 이 여파로 52주 주가 범위가 3.08달러에서 170달러까지 벌어질 만큼 극단적인 변동성을 보였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "WANG Zixi group takes 77% stake and board changes at Mega Fortune (MGRT)",
                "publisher": "StockTitan (SEC Filing Schedule 13D/A)",
                "url": "https://www.stocktitan.net/sec-filings/MGRT/schedule-13d-a-mega-fortune-co-ltd-amended-major-shareholder-report-a2c0bc4d8cef.html",
                "date": "2026-01-26",
                "quote": "77.27% of the Issuer's total issued and outstanding ordinary shares and approximately 77.27% of the total voting power",
                "verified": "unverified",
                "httpStatus": 429
              },
              {
                "title": "Mega Fortune Company (MGRT) Stock Price & Overview",
                "publisher": "stockanalysis.com",
                "url": "https://stockanalysis.com/stocks/mgrt/",
                "date": "2026-09-01",
                "quote": "52주 범위: $3.08 - $170.00",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp4",
            "statement": "4월 초 급등 자체가 '특별한 뉴스 없이' 투기 수요만으로 나타난 밈스톡(meme stock) 성격의 움직임이라, 펀더멘털과 무관하게 언제든 되돌려질 수 있다는 한계가 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "How Mega Fortune Stock Tripled This Week",
                "publisher": "The Motley Fool (Nasdaq)",
                "url": "https://www.nasdaq.com/articles/how-mega-fortune-stock-tripled-week",
                "date": "2026-04-09",
                "quote": "Mega Fortune stock gained as much as 238% in just four days with no news to justify the move.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "estimateRevisions": {
          "direction": "unknown",
          "claims": []
        },
        "themeTags": [
          "사물인터넷(IoT)",
          "경영권·대주주 변경",
          "고변동성 소형주(마이크로캡)"
        ],
        "confidence": "medium",
        "ticker": "MGRT",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        }
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
        "status": "done",
        "company": "아틀라시언(Atlassian)은 호주 출신 소프트웨어 회사로, 여러 사람이 함께 일할 때 쓰는 협업 도구를 만들어 판다. 대표 제품은 개발팀이 할 일을 나누고 진행 상황을 추적하는 '지라(Jira)'와 문서를 함께 쓰는 '컨플루언스(Confluence)'다. 고객은 스타트업부터 대기업까지 다양하며, 매달 또는 매년 구독료를 받는 클라우드(인터넷으로 접속하는 구독형 서비스) 방식으로 돈을 번다. 2026회계연도(2025년 7월~2026년 6월) 매출은 65억7,200만달러로 전년보다 26% 늘었고, 그중에서도 클라우드 매출 비중이 계속 커지고 있다. 최근에는 AI 비서 '로보(Rovo)'를 제품에 붙여 업무를 자동으로 처리해주는 기능을 강화하고 있는데, 이 AI 기능 도입 속도가 빨라지면서 투자자들의 관심을 받고 있다.",
        "lead": "아틀라시언 주가는 2026년 8월 6일 발표한 2026회계연도(FY26) 4분기 실적을 계기로 급등했다. 4분기 매출이 17억6,600만달러로 전년동기 대비 28% 늘어 시장 예상치(16억6,000만달러)를 웃돌았고, 클라우드 매출은 31% 증가한 12억1,300만달러를 기록했다. AI 비서 로보의 사용량이 전분기 대비 50% 늘고 포춘500대 기업의 80% 이상이 이를 쓴다고 회사가 밝히면서 \"AI가 협업 소프트웨어 수요를 갉아먹을 것\"이라는 시장의 우려가 옅어졌고, 대형 소비자기술기업과 사상 최대 규모 계약을 맺었다는 소식도 더해졌다. 실적 발표 다음 거래일 주가는 30% 넘게 급등했고, 이후 뱅크오브아메리카(BofA)를 비롯한 여러 증권사가 목표주가를 잇따라 올렸다.",
        "ticker": "TEAM",
        "whyRose": [
          {
            "id": "q4-revenue-beat",
            "statement": "8월 6일 발표된 2026회계연도 4분기 매출이 17억6,600만달러로 전년동기 대비 28% 늘어 시장 예상치인 16억6,000만달러를 웃돌았고, 발표 다음 거래일 주가는 30% 넘게 급등했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian earnings beat drives 30% stock surge",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/atlassian-earnings-beat-drives-30-155400317.html",
                "date": "2026-08-08",
                "quote": "Atlassian shares surged more than 30% following strong quarterly results that exceeded expectations across multiple metrics.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Atlassian Announces Fourth Quarter and Fiscal Year 2026 Results",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/atlassian-announces-fourth-quarter-fiscal-200500156.html",
                "date": "2026-08-06",
                "quote": "Total revenue was $1,766 million for the fourth quarter of fiscal year 2026, up 28% from $1,384 million for the fourth quarter of fiscal year 2025.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cloud-arr-growth",
            "statement": "클라우드 매출은 전년동기 대비 31% 늘어난 12억1,300만달러를 기록했고, 구독형 연간반복매출(ARR)은 23% 증가한 66억달러에 달했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian Announces Fourth Quarter and Fiscal Year 2026 Results",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/atlassian-announces-fourth-quarter-fiscal-200500156.html",
                "date": "2026-08-06",
                "quote": "Cloud Revenue was $1,213 million, representing 31% year-over-year growth due to migrations and seat expansion.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "rovo-ai-adoption",
            "statement": "AI 비서 로보(Rovo)의 사용량이 전분기 대비 50% 늘었고, 포춘500대 기업의 80% 이상이 로보를 쓰고 있다고 회사가 밝히면서 AI가 소프트웨어 수요를 잠식할 것이라는 우려가 완화됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian Announces Fourth Quarter and Fiscal Year 2026 Results",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/atlassian-announces-fourth-quarter-fiscal-200500156.html",
                "date": "2026-08-06",
                "quote": "Rovo is now used by over 80% of the Fortune 500. Additionally, Rovo-assisted actions were up 50% quarter-over-quarter.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "largest-ever-deal",
            "statement": "분기 중 대형 소비자기술기업과 회사 사상 최대 규모의 계약을 체결했다고 밝히며, AI 도구가 협업 소프트웨어 수요를 대체할 것이라는 시장 우려를 정면으로 반박했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian earnings beat drives 30% stock surge",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/atlassian-earnings-beat-drives-30-155400317.html",
                "date": "2026-08-08",
                "quote": "the company signed \"its largest-ever deal with a major consumer technology company\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "bofa-target-raise",
            "statement": "실적 발표 후 뱅크오브아메리카(BofA)는 8월 31일 목표주가를 175달러에서 210달러로 올리며 매수(Buy) 의견을 유지했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian (NASDAQ:TEAM) Stock Price Expected to Rise, Bank of America Analyst Says",
                "publisher": "Daily Political",
                "url": "https://www.dailypolitical.com/2026/08/31/atlassian-nasdaqteam-stock-price-expected-to-rise-bank-of-america-analyst-says.html",
                "date": "2026-08-31",
                "quote": "Price Target Change: $175.00 → $210.00 / Rating: Buy",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "sbc-dilution",
            "statement": "주식보상비용(임직원에게 주식으로 주는 보상, SBC)이 2026회계연도 기준 16억660만달러로 매출 65억7,200만달러의 약 24.4%에 달해, 성숙한 소프트웨어 기업들보다 여전히 높은 수준이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian — Fourth Quarter and Fiscal Year 2026 Earnings Summary",
                "publisher": "newsfilter.io",
                "url": "https://newsfilter.io/earnings/atlassian-fourth-quarter-and-fiscal-year-2026-earnings-summary-8f4a22186d0ebe9bdfb0c0f62ff98cc5",
                "date": "2026-08-06",
                "quote": "Fiscal 2026 GAAP operating expenses included $1,606.6 million in stock-based compensation.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "guidance-deceleration",
            "statement": "2027회계연도(FY27) 매출 성장률 가이던스는 약 13%로, 이번 4분기 매출 성장률(28%)보다 크게 둔화될 것으로 예상되며, 데이터센터(자체 서버형 제품) 매출은 약 17% 줄어들 전망이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian — Fourth Quarter and Fiscal Year 2026 Earnings Summary",
                "publisher": "newsfilter.io",
                "url": "https://newsfilter.io/earnings/atlassian-fourth-quarter-and-fiscal-year-2026-earnings-summary-8f4a22186d0ebe9bdfb0c0f62ff98cc5",
                "date": "2026-08-06",
                "quote": "Total revenue growth is projected to increase by \"approximately 13.0% year-over-year\" ... Data Center revenue is expected to \"decline approximately 17.0% year-over-year\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "march-layoffs-comp-review",
            "statement": "2026년 3월 CEO가 인력 1,600명 감원을 발표했는데, 당시 주가는 최근 1년 새 65% 하락한 상태였고 회사 스스로도 주식보상비용 수준이 실리콘밸리 동종업계 대비 높은 편임을 인정했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Atlassian cuts staff and share-based compensation",
                "publisher": "Ticker News",
                "url": "https://tickernews.co/atlassian-cuts-staff-and-share-based-compensation",
                "date": "2026-03-14",
                "quote": "Atlassian acknowledged it is \"on the high side\" compared to other Silicon Valley firms, prompting a reassessment of compensation practices.",
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
              "id": "bofa-raise-post-earnings",
              "statement": "BofA는 8월 31일 목표주가를 175달러에서 210달러로 상향하며 매수 의견을 유지했다 — 실적 서프라이즈 이후 나온 조정이다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Atlassian (NASDAQ:TEAM) Stock Price Expected to Rise, Bank of America Analyst Says",
                  "publisher": "Daily Political",
                  "url": "https://www.dailypolitical.com/2026/08/31/atlassian-nasdaqteam-stock-price-expected-to-rise-bank-of-america-analyst-says.html",
                  "date": "2026-08-31",
                  "quote": "Price Target Change: $175.00 → $210.00",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "fy27-cloud-guide-above-consensus",
              "statement": "회사가 제시한 2027회계연도 클라우드 매출 성장률 가이던스(약 25.5%)가 시장 예상치를 웃돌면서, 실적 발표 후 목표주가 상향의 근거가 됐다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Atlassian Announces Fourth Quarter and Fiscal Year 2026 Results",
                  "publisher": "Yahoo Finance",
                  "url": "https://finance.yahoo.com/markets/stocks/articles/atlassian-announces-fourth-quarter-fiscal-200500156.html",
                  "date": "2026-08-06",
                  "quote": "The company projected cloud revenue growth of approximately 25.5%, total revenue growth around 13%, and subscription ARR growth of about 18% for the year.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "bofa-cut-pre-earnings",
              "statement": "다만 실적 발표 전인 7월 20일 BofA는 데이터센터 매출 둔화 우려로 목표주가를 110달러에서 105달러로 낮춘 바 있어, 8월의 상향은 이런 우려를 뒤집은 결과다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "BofA cuts Atlassian stock price target on lower revenue outlook",
                  "publisher": "Investing.com",
                  "url": "https://www.investing.com/news/analyst-ratings/bofa-cuts-atlassian-stock-price-target-on-lower-revenue-outlook-93CH-4801542",
                  "date": "2026-07-20",
                  "quote": "BofA Securities lowered revenue forecasts due to reduced Data Center revenue expectations and \"more conservative Cloud assumptions.\"",
                  "verified": "unverified",
                  "httpStatus": 403
                }
              ]
            }
          ]
        },
        "themeTags": [
          "기업용 협업 소프트웨어",
          "AI 소프트웨어",
          "SaaS 구독형 클라우드"
        ],
        "upcomingCatalyst": {
          "what": "2027회계연도 1분기(2026년 7~9월) 실적발표",
          "date": "2026-10-29",
          "sources": [
            {
              "title": "Atlassian (TEAM) Earnings, Revenues Date & History",
              "publisher": "TipRanks",
              "url": "https://www.tipranks.com/stocks/team/earnings",
              "date": "2026-09-01",
              "quote": "Atlassian (TEAM) will release its next earnings report on Oct 29, 2026.",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "high",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "cp3"
          ],
          "reasons": [
            "counterpoint cp3 (march-layoffs-comp-review): 주가 '65% 하락'이라는 구체적 수치가 출처 quote에 없음. 기사는 인력감원 사실만 확인되고 주가 낙폭 정보는 검증 불가능"
          ]
        }
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
        "status": "done",
        "company": "엘프 뷰티(e.l.f. Beauty)는 화장품과 스킨케어 제품을 만들어 파는 미국 회사다. 원래 대표 브랜드인 e.l.f. Cosmetics는 타겟·월마트 같은 대형마트에서 파는 저렴한 화장품으로 유명해졌다. 최근 몇 년 사이 스킨케어 브랜드 나투리움(Naturium)과, 배우 헤일리 비버가 만든 스킨케어 브랜드 로드(rhode)를 잇달아 인수하면서 여러 브랜드를 거느린 '뷰티 플랫폼' 회사로 몸집을 키웠다. 주 고객은 가격에 민감하면서도 유행에 밝은 10~20대와 젊은 밀레니얼 세대이며, 최근에는 대형마트뿐 아니라 세포라·얼타 같은 고급 화장품 매장으로도 판매 채널을 넓히고 있다. 지금 이 회사가 주목받는 이유는 인수한 로드 브랜드가 기대보다 훨씬 빠르게 커지면서 실적에 크게 기여하고 있고, 동시에 미국 정부로부터 받은 관세 환급까지 겹쳐 최근 분기 이익이 크게 늘었기 때문이다.",
        "lead": "엘프 뷰티는 저가 화장품 e.l.f. Cosmetics로 시작해 스킨케어 브랜드 나투리움과 헤일리 비버의 로드(rhode)를 인수하며 여러 브랜드를 가진 뷰티 기업으로 성장했다. 회사는 8월 5일 발표한 2027회계연도 1분기(2026년 4~6월) 매출이 4억7,940만달러로 전년동기대비 36% 늘었다고 밝히며, 연간 매출 성장률 전망치를 기존 12~14%에서 18~20%로 상향했다. 미국 정부의 관세 환급(IEEPA) 덕분에 매출총이익률이 전년보다 14%포인트(1,400bp) 오른 83%를 기록했고, 로드 브랜드가 인수 당시 예상을 웃도는 실적을 내면서 1,610만달러의 공정가치 재평가 이익까지 반영됐다. 이 소식에 캐나코드·TD코웬 등이 목표주가를 110달러로 올렸고, 8월 13일 발표된 기사에 따르면 한 주간 주가가 18.8% 뛰었다.",
        "whyRose": [
          {
            "id": "w1",
            "statement": "8월 5일 발표한 2027회계연도 1분기(2026년 4~6월) 매출이 4억7,940만달러로 전년동기대비 36% 늘었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "e.l.f. Beauty Announces First Quarter Fiscal 2027 Results",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/ELF/e-l-f-beauty-announces-first-quarter-fiscal-2027-a0pe4ye0ru5v.html",
                "date": "2026-08-05",
                "quote": "Net sales increased 36% to $479.4 million",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w2",
            "statement": "실적 발표와 함께 회사는 2027회계연도 연간 매출 성장률 전망치를 기존 12~14%에서 18~20%로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "e.l.f. Beauty Announces First Quarter Fiscal 2027 Results",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/ELF/e-l-f-beauty-announces-first-quarter-fiscal-2027-a0pe4ye0ru5v.html",
                "date": "2026-08-05",
                "quote": "raising our fiscal 2027 outlook to 18 to 20 percent net sales growth from 12 to 14 percent previously",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w4",
            "statement": "헤일리 비버의 스킨케어 브랜드 로드(rhode)가 인수 당시 예상을 웃도는 실적을 내면서, 6월 말로 끝난 분기에 1,610만달러의 공정가치 재평가 이익을 반영했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "e.l.f. Beauty Announces First Quarter Fiscal 2027 Results",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/ELF/e-l-f-beauty-announces-first-quarter-fiscal-2027-a0pe4ye0ru5v.html",
                "date": "2026-08-05",
                "quote": "The Company recorded a fair value adjustment of $16.1 million for the three months ended June 30, 2026, driven by the outperformance of rhode's revenue results",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w5",
            "statement": "실적 발표 후 캐나코드(Canaccord)는 목표주가를 97달러에서 110달러로, TD코웬(TD Cowen)은 85달러에서 110달러로 올리며 매수 의견을 유지했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "e.l.f. Beauty (ELF) News 2026-08-24",
                "publisher": "Timothy Sykes",
                "url": "https://www.timothysykes.com/news/elf-beauty-inc-elf-news-2026_08_24/",
                "date": "2026-08-24",
                "quote": "Canaccord just raised its price target on e.l.f. Beauty to $110 from $97, keeping a Buy rating after strong Q1 numbers",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w6",
            "statement": "8월 13일 자 기사는 로드 브랜드 성장과 가이던스 상향에 힘입어 ELF 주가가 한 주 동안 18.8% 뛰었다고 전했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ELF Jumps 18.8% in a Week Amid Rhode Growth and Stronger Guidance",
                "publisher": "Zacks (Nasdaq)",
                "url": "https://www.nasdaq.com/articles/elf-jumps-188-week-amid-rhode-growth-and-stronger-guidance",
                "date": "2026-08-13",
                "quote": "ELF Jumps 18.8% in a Week Amid Rhode Growth and Stronger Guidance",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c1",
            "statement": "주가는 여전히 52주 최고가 150.99달러에는 크게 못 미친다. 5월 발표한 보수적 가이던스(12~14% 성장) 여파로 주가가 밀렸다가, 8월 가이던스 재상향 이후에도 100달러 안팎으로 회복하는 데 그쳤다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "An e.l.f. Beauty Insider Sells 5,718 Shares. Here's What That Means for Investors.",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/coverage/filings/2026/08/23/an-e-l-f-beauty-insider-sells-5-718-shares-here-s-what-that-means-for-investors/",
                "date": "2026-08-23",
                "quote": "e.l.f. Beauty stock is down from its 52-week high of $150.99 because it delivered conservative fiscal 2027 guidance of 12% to 14% year-over-year growth",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c2",
            "statement": "실적 호조에도 밸류에이션이 여전히 비싸다는 지적이 나온다. 관세 환급·M&A·해외 확장에 대한 의존도가 높아 이익 변동성과 마진 취약성이 남아 있다는 우려도 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "e.l.f. Beauty (ELF) Stock Faces Rich Valuation After Guidance Lift",
                "publisher": "Webull",
                "url": "https://www.webull.com/news/15359900543640576",
                "date": "2026-08",
                "quote": "The longer-term question for you is whether those higher multi-year earnings targets justify a stock that already trades on a very rich trailing P/E multiple. The cautious view on e.l.f. Beauty is that heavy reliance on tariffs, M&A and international expansion leaves earnings volatile and margins fragile.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c3",
            "statement": "8월 19일 조슈아 프랭크스(Joshua Franks) 운영담당 수석부사장이 주당 100달러에 자사주 5,718주를 매도했다(사전 예정된 10b5-1 매매 계획에 따른 거래). 이 시점까지 최근 1년 총수익률은 -17%였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "An e.l.f. Beauty Insider Sells 5,718 Shares. Here's What That Means for Investors.",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/coverage/filings/2026/08/23/an-e-l-f-beauty-insider-sells-5-718-shares-here-s-what-that-means-for-investors/",
                "date": "2026-08-23",
                "quote": "Joshua Allen Franks, Senior Vice President of Operations at e.l.f. Beauty, Inc. (ELF -3.22%), sold 5,718 shares of common stock at $100.00 per share on August 19, 2026 ... the stock's -17% total return in the year leading up to the transaction date",
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
              "statement": "1분기 실적 발표 후 캐나코드는 목표주가를 97달러에서 110달러로, TD코웬은 85달러에서 110달러로 각각 상향 조정했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "e.l.f. Beauty (ELF) News 2026-08-24",
                  "publisher": "Timothy Sykes",
                  "url": "https://www.timothysykes.com/news/elf-beauty-inc-elf-news-2026_08_24/",
                  "date": "2026-08-24",
                  "quote": "Canaccord just raised its price target on e.l.f. Beauty to $110 from $97, keeping a Buy rating after strong Q1 numbers ... TD Cowen piled on earlier in the month, also taking its ELF target to $110 from $85 and reaffirming a Buy rating",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "e2",
              "statement": "반면 JPMorgan은 목표주가를 111달러에서 106달러로 소폭 낮췄지만, 비중확대(Overweight) 투자의견은 유지했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "e.l.f. Beauty (ELF) News 2026-08-24",
                  "publisher": "Timothy Sykes",
                  "url": "https://www.timothysykes.com/news/elf-beauty-inc-elf-news-2026_08_24/",
                  "date": "2026-08-24",
                  "quote": "JPMorgan added nuance, shaving its ELF target to $106 from $111 but sticking with an Overweight rating",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "인디 뷰티 붐",
          "브랜드 M&A 롤업",
          "관세 환급 수혜"
        ],
        "upcomingCatalyst": {
          "what": "2027회계연도 2분기 실적 발표",
          "date": "2026-11-04",
          "sources": [
            {
              "title": "e.l.f. Beauty (ELF) Earnings Dates, Call Summary & Reports",
              "publisher": "TipRanks",
              "url": "https://www.tipranks.com/stocks/elf/earnings",
              "date": "2026-09",
              "quote": "Nov 04, 2026, After Close (Confirmed)",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "high",
        "ticker": "ELF",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "w3"
          ],
          "reasons": [
            "whyRose w3: 'GAAP 순이익은 6,660만달러로 전년동기대비 99.9% 늘었다'는 순이익 수치와 증가율이 출처 quote에 없음 (매출총이익률 관련 정보만 quote에 존재)"
          ]
        }
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "ticker": "AMR",
        "company": "알파 메탈러지컬 리소시스(Alpha Metallurgical Resources)는 미국 테네시주 브리스톨에 본사를 둔 석탄회사로, 버지니아·웨스트버지니아에 있는 광산 19곳과 석탄 가공·선적시설 8곳에서 제철에 쓰이는 원료탄(코킹콜, metallurgical coal)을 캐서 판다. 주 고객은 철을 만들 때 코크스(coke)의 원료로 이 석탄을 쓰는 전 세계 철강회사들이다. 최근 12개월(TTM) 매출은 21억달러였지만 같은 기간 순손실이 4,610만달러에 달할 정도로 수익성은 아직 좋지 않은 상태다. 그럼에도 최근 1개월 새 주가가 약 66%(절대 상승률 66.02%) 뛰면서 시장의 관심을 받고 있는데, 그 배경에는 회사 이사가 8월 한 달에만 세 차례에 걸쳐 자사주를 직접 사들인 점과 15억달러 규모 자사주 매입 프로그램으로 유통 주식 수가 크게 줄어든 점이 있다. 쉽게 말하면 철강 만들 때 꼭 필요한 '특수 석탄'을 캐서 파는 회사인데, 실적 자체는 아직 적자이지만 회사 내부자와 회사 스스로가 자기 회사 주식을 적극적으로 사들이면서 주가가 급등한 상황이다.",
        "lead": "알파 메탈러지컬 리소시스(AMR)는 버지니아·웨스트버지니아의 광산 19곳에서 제철용 원료탄(코킹콜)을 캐 전 세계 철강사에 파는 회사다. 8월7일 발표한 2분기 실적은 주당손실 0.96달러로 시장 예상치(0.97달러 손실)보다 적자 폭이 작아 서프라이즈 +1.03%를 냈고, 매출도 4억9,286만달러로 컨센서스를 0.28% 웃돌았다. 이후 8월20일부터 25일까지 사흘 새 이사 켄네스 코티스가 세 차례에 걸쳐 수백만 달러어치 자사주를 직접 사들였고, 8월21일 하루에만 주가가 약 7.2% 뛰는 등 급등세가 이어졌다. 회사는 15억달러 규모 자사주 매입 프로그램에 따라 7월말까지 약 700만주(약 12억달러어치)를 사들여 유통주식이 1,268만주까지 줄어든 상태라, 이런 매수세가 주가를 더 크게 흔들 수 있는 여건이었다.",
        "whyRose": [
          {
            "id": "insider-buying-3days",
            "statement": "8월20일부터 25일까지 사흘 새 이사 켄네스 코티스가 세 차례에 걸쳐 자사주를 직접 매수했다 — 8월20일 15,000주(주당 193.50달러, 약 290만달러), 8월25일 5,000주(주당 216.53달러, 약 110만달러) 등이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Metallurgical Resources Director Courtis Buys $2.9 Million Shares. What Does This Mean for Investors?",
                "publisher": "The Motley Fool",
                "url": "https://www.nasdaq.com/articles/alpha-metallurgical-resources-director-courtis-buys-29-million-shares-what-does-mean",
                "date": "2026-08-22",
                "quote": "Kenneth S. Courtis, Director at Alpha Metallurgical Resources, Inc. (NYSE:AMR), purchased 15,000 shares of common stock on Aug. 20, 2026.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Alpha Metallurgical Director Courtis Keeps Buying as He Adds Another $1.1 Million Shares",
                "publisher": "The Motley Fool",
                "url": "https://www.nasdaq.com/articles/alpha-metallurgical-director-courtis-keeps-buying-he-adds-another-11-million-shares",
                "date": "2026-08-25",
                "quote": "Kenneth S. Courtis, a Director at Alpha Metallurgical Resources, Inc. (NYSE:AMR), executed a purchase of 5,000 shares of common stock on Aug. 25, 2026, according to a SEC Form 4 filing.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "stock-jump-aug21",
            "statement": "8월21일(금) 하루에만 주가가 약 7.2% 급등했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Friday 8/21 Insider Buying Report: ET, AMR",
                "publisher": "BNK Invest",
                "url": "https://www.nasdaq.com/articles/friday-8-21-insider-buying-report-et-amr",
                "date": "2026-08-21",
                "quote": "Alpha Metallurgical Resources Inc is trading up about 7.2% on the day Friday.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "earnings-beat",
            "statement": "8월7일 발표한 2분기 실적에서 주당손실 0.96달러로 시장 예상치(0.97달러 손실)보다 적자 폭이 작아 서프라이즈 +1.03%를 냈고, 매출은 4억9,286만달러로 컨센서스를 0.28% 웃돌았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Metallurgical (AMR) Reports Q2 Loss, Beats Revenue Estimates",
                "publisher": "Zacks",
                "url": "https://www.nasdaq.com/articles/alpha-metallurgical-amr-reports-q2-loss-beats-revenue-estimates",
                "date": "2026-08-07",
                "quote": "Alpha Metallurgical (AMR) came out with a quarterly loss of $0.96 per share versus the Zacks Consensus Estimate of a loss of $0.97... This quarterly report represents an earnings surprise of +1.03%.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "buyback-shrinking-float",
            "statement": "회사는 15억달러 규모 자사주 매입 프로그램에 따라 7월31일 기준 약 700만주(약 12억달러, 주당평균 166.29달러)를 사들였고, 이에 따라 유통주식수가 1,267만9,045주까지 줄었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Announces Financial Results for Second Quarter 2026",
                "publisher": "Alpha Metallurgical Resources (SEC 8-K Exhibit 99.1)",
                "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000030/pressrelease6302026.htm",
                "date": "2026-08-07",
                "quote": "As of July 31, 2026, the company had acquired approximately 7.0 million shares of common stock at a cost of approximately $1.2 billion, or approximately $166.29 per share.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "long-term-insider-buying",
            "statement": "코티스 이사는 이번 매수 이전에도 최근 12개월간 10차례에 걸쳐 총 4,612만달러어치를 주당 평균 168.93달러에 사들여, 이번이 일회성이 아닌 꾸준한 매수임을 보여준다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Friday 8/21 Insider Buying Report: ET, AMR",
                "publisher": "BNK Invest",
                "url": "https://www.nasdaq.com/articles/friday-8-21-insider-buying-report-et-amr",
                "date": "2026-08-21",
                "quote": "Before this latest buy, Courtis purchased AMR on 10 other occasions during the past twelve months, for a total investment of $46.12M at an average of $168.93 per share.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "yoy-loss-widens",
            "statement": "2분기(4~6월) 순손실은 1,225만달러로 전년동기(495만달러 손실)보다 적자가 2.5배 가까이 늘었고, 조정EBITDA도 2,557만달러로 전년동기(4,607만달러) 대비 크게 줄었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Announces Financial Results for Second Quarter 2026",
                "publisher": "Alpha Metallurgical Resources (SEC 8-K Exhibit 99.1)",
                "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000030/pressrelease6302026.htm",
                "date": "2026-08-07",
                "quote": "Net loss ($12.3) ($11.0) ($5.0) Adjusted EBITDA (1) $25.6 $30.0 $46.1",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "shipment-decline",
            "statement": "2분기 판매 물량은 350만톤으로 전분기(360만톤)와 전년동기(390만톤)보다 줄었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Announces Financial Results for Second Quarter 2026",
                "publisher": "Alpha Metallurgical Resources (SEC 8-K Exhibit 99.1)",
                "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000030/pressrelease6302026.htm",
                "date": "2026-08-07",
                "quote": "Tons of coal sold 3.5 3.6 3.9",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "dta-storm-damage",
            "statement": "6월 발생한 강풍(태풍급) 피해로 도미니언터미널(DTA) 하역설비가 손상돼, 회사가 연간 판매물량 가이던스를 하향 조정했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Announces Financial Results for Second Quarter 2026",
                "publisher": "Alpha Metallurgical Resources (SEC 8-K Exhibit 99.1)",
                "url": "https://www.sec.gov/Archives/edgar/data/1704715/000170471526000030/pressrelease6302026.htm",
                "date": "2026-08-07",
                "quote": "We continue to engage with terminal leaders at Dominion Terminal Associates (DTA) to address the high-wind storm damage that occurred in June. Our reduced sales volume guidance for the balance of the year incorporates our expectations of reduced efficiency at DTA",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cost-inflation-iran-war",
            "statement": "이란 전쟁으로 국제유가가 오르면서 회사가 쓰는 디젤 관련 비용이 톤당 7달러 늘어 원가 부담이 커졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Metallurgical Resources Director Courtis Buys $2.9 Million Shares. What Does This Mean for Investors?",
                "publisher": "The Motley Fool",
                "url": "https://www.nasdaq.com/articles/alpha-metallurgical-resources-director-courtis-buys-29-million-shares-what-does-mean",
                "date": "2026-08-22",
                "quote": "The Iran war has raised the price of fossil fuels, which means the diesel Alpa Metallurgical needs in its operations caused a rise in costs of $7 per ton.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "ytd-still-down-before-rally",
            "statement": "8월7일 실적발표 시점 기준으로는 연초 이후 주가가 23.9% 하락한 상태였다(같은 기간 S&P500은 12.6% 상승).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Metallurgical (AMR) Reports Q2 Loss, Beats Revenue Estimates",
                "publisher": "Zacks",
                "url": "https://www.nasdaq.com/articles/alpha-metallurgical-amr-reports-q2-loss-beats-revenue-estimates",
                "date": "2026-08-07",
                "quote": "Alpha Metallurgical shares have lost about 23.9% since the beginning of the year versus the S&P 500's gain of 12.6%.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "structural-coal-headwind",
            "statement": "천연가스·태양광·풍력 등 다른 발전원이 석탄보다 저렴해지면서 석탄 산업 자체가 구조적으로 밀려나고 있고, 이 때문에 월가는 2026년 매출이 줄어들 것으로 본다는 지적도 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Alpha Metallurgical Resources Director Courtis Buys $2.9 Million Shares. What Does This Mean for Investors?",
                "publisher": "The Motley Fool",
                "url": "https://www.nasdaq.com/articles/alpha-metallurgical-resources-director-courtis-buys-29-million-shares-what-does-mean",
                "date": "2026-08-22",
                "quote": "Coal is also on the outs generally, as other forms of power generation -- natural gas, solar, and wind -- are far cheaper than coal for generating electricity. That has Wall Street seeing revenue declining in 2026 as management revised expected shipments downward in its most recent earnings call.",
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
              "id": "fy2026-consensus-level",
              "statement": "실적발표 시점 컨센서스는 2026 회계연도 전체 주당순이익 0.20달러(매출 21억1,000만달러), 3분기 주당순이익 0.14달러(매출 5억3,330만달러)를 예상하고 있었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Alpha Metallurgical (AMR) Reports Q2 Loss, Beats Revenue Estimates",
                  "publisher": "Zacks",
                  "url": "https://www.nasdaq.com/articles/alpha-metallurgical-amr-reports-q2-loss-beats-revenue-estimates",
                  "date": "2026-08-07",
                  "quote": "The current consensus EPS estimate is $0.14 on $533.3 million in revenues for the coming quarter and $0.20 on $2.11 billion in revenues for the current fiscal year.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "원료탄(코킹콜)",
          "제철용 원자재",
          "내부자 매수",
          "자사주매입"
        ],
        "confidence": "medium",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "zacks-mixed-pre-earnings"
          ],
          "reasons": [
            "zacks-mixed-pre-earnings: statement에서 'Zacks 등급은 3등급(Hold)'이라고 했으나, quote에는 estimate revisions trend의 '혼조' 정보만 있고 Zacks 등급이 없음"
          ]
        }
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "트위스트 바이오사이언스(Twist Bioscience)는 실리콘 칩 위에 DNA를 화학적으로 '인쇄'하듯 찍어내는 독자 기술로 맞춤 유전자·DNA 조각을 대량 생산해 파는 회사다. 과학자가 원하는 염기서열을 주문하면 회사가 그 DNA를 합성해 보내주는 방식으로, 신약을 개발하는 제약·바이오텍 회사, 유전체를 분석하는 연구소·병원, 농업·화학 기업 등이 주 고객이다. 최근에는 인공지능(AI)으로 신약 후보물질을 설계하는 'AI 신약개발' 흐름에 필요한 항체 라이브러리·DNA 조각 수요가 급증하면서 관련 매출이 크게 늘었다. 2026회계연도 3분기(4~6월) 매출은 전년 동기 대비 23% 넘게 늘어난 1억1,840만달러로 14분기 연속 성장을 이어갔고, 회사는 연간 매출 전망치를 상향 조정했다. 다만 아직 분기마다 순손실을 내고 있고 손실 폭이 시장 예상보다 컸던 데다, 8월에는 3억달러 규모 유상증자로 신주를 발행해 기존 주주 지분이 희석되는 등 수익성으로 가는 길은 여전히 진행형이다.",
        "lead": "트위스트 바이오사이언스(TWST)는 실리콘 칩 위에서 합성 DNA를 만들어 파는 회사로, 최근 AI(인공지능) 신약개발 수요를 등에 업고 주가가 가파르게 올랐다. 회사는 8월 3일 발표한 2026회계연도 3분기 매출이 1억1,840만달러로 전년 동기 대비 23% 넘게 늘었다고 밝히며 14분기 연속 성장을 이어갔고, 이에 맞춰 연간 매출 가이던스를 4억5,600만~4억5,700만달러로 상향했다. AI 신약개발 수요가 몰린 치료제(Therapeutics) 부문 매출은 전년 대비 49% 급증했다. 실적 발표 후 TD코웬·파이퍼샌들러·베어드 등 애널리스트들이 목표주가를 최대 115달러까지 일제히 올렸고 컨센서스 목표주가도 13% 상승한 104달러가 됐다. 다만 조정 주당손실이 시장 예상보다 컸고 회사는 3억달러 규모 유상증자를 단행하는 등 수익성 우려도 함께 남아 있다.",
        "whyRose": [
          {
            "id": "revenue-growth",
            "statement": "8월 3일 발표한 2026회계연도 3분기 매출이 1억1,840만달러로 전년 동기(9,610만달러) 대비 23% 넘게 늘었고, 이는 14분기 연속 매출 성장이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Twist Bioscience (TWST): Q3 Revenue Jumps 23% As FY2026 Guidance Raised",
                "publisher": "RTTNews",
                "url": "https://www.rttnews.com/3682164/twist-bioscience-twst-q3-revenue-jumps-23-as-fy2026-guidance-raised.aspx",
                "date": "2026-08-19",
                "quote": "record revenue of $118.4 million in the third quarter of fiscal 2026, up more than 23% from $96.1 million in the year-ago quarter",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "guidance-raise",
            "statement": "회사는 2026회계연도 매출 가이던스를 4억5,600만~4억5,700만달러(전년비 약 21% 성장)로 상향 조정했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Twist Bioscience (TWST): Q3 Revenue Jumps 23% As FY2026 Guidance Raised",
                "publisher": "RTTNews",
                "url": "https://www.rttnews.com/3682164/twist-bioscience-twst-q3-revenue-jumps-23-as-fy2026-guidance-raised.aspx",
                "date": "2026-08-19",
                "quote": "raised its full-year fiscal 2026 revenue outlook to $456 million-$457 million, representing approximately 21% year-over-year growth",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "therapeutics-growth",
            "statement": "AI 신약개발 수요에 힘입어 치료제(Therapeutics) 부문 매출이 전년 동기 대비 49% 급증했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Twist Bioscience Corp (TWST) (Q3 2026) Earnings Call Highlights: Record Revenue and AI-Driven ...",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/healthcare/articles/twist-bioscience-corp-twst-q3-190050269.html",
                "date": "2026-08-04",
                "quote": "Therapeutics revenue surged 49% year-over-year, driven by AI-enabled drug discovery and strong pharma demand.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "ebitda-outlook",
            "statement": "회사는 2026회계연도 4분기에 조정 EBITDA(상각전영업이익) 손익분기점 달성을, 2027회계연도에는 흑자 유지를 목표로 제시했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Twist Bioscience Corp (TWST) (Q3 2026) Earnings Call Highlights: Record Revenue and AI-Driven ...",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/healthcare/articles/twist-bioscience-corp-twst-q3-190050269.html",
                "date": "2026-08-04",
                "quote": "Adjusted EBITDA breakeven expected in Q4 fiscal 2026, with a commitment to maintain positive EBITDA in fiscal 2027.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "analyst-target-raise",
            "statement": "실적 발표 후 8월 19일 TD코웬·파이퍼샌들러·베어드가 목표주가를 85~89달러에서 115달러로 일제히 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Twist Bioscience Stock Jumps As Analysts Hike Targets",
                "publisher": "Timothy Sykes",
                "url": "https://www.timothysykes.com/news/twist-bioscience-corporation-twst-news-2026_08_19-3/",
                "date": "2026-08-19",
                "quote": "TD Cowen bumped its TWST price target to $115 from $89 and reiterated a Buy rating",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "consensus-target",
            "statement": "8월 6일 기준 컨센서스 목표주가는 13% 올라 104달러가 됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Earnings Update: Here's Why Analysts Just Lifted Their Twist Bioscience Corporation (NASDAQ:TWST) Price Target To US$104",
                "publisher": "Simply Wall St",
                "url": "https://simplywall.st/stocks/us/pharmaceuticals-biotech/nasdaq-twst/twist-bioscience/news/earnings-update-heres-why-analysts-just-lifted-their-twist-b",
                "date": "2026-08-06",
                "quote": "The consensus price target rose 13% to US$104",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "eps-miss",
            "statement": "8월 3일 실적에서 조정 주당손실이 0.56달러로 시장 예상(-0.48달러)보다 손실 폭이 컸다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Earnings call transcript: Twist Bioscience Q3 2026 revenue beats, shares fall premarket",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-twist-bioscience-q3-2026-revenue-beats-shares-fall-premarket-93CH-4831373",
                "date": "2026-08-03",
                "quote": "adjusted earnings came in at a loss of $0.56 a share, wider than the expected loss of $0.48",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "opex-surge",
            "statement": "매출원가를 제외한 영업비용이 9,870만달러로 전년 동기 8,140만달러보다 크게 늘어 수익성에 부담을 줬다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Earnings call transcript: Twist Bioscience Q3 2026 revenue beats, shares fall premarket",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-twist-bioscience-q3-2026-revenue-beats-shares-fall-premarket-93CH-4831373",
                "date": "2026-08-03",
                "quote": "Operating expenses excluding cost to revenues were $98.7 million for the quarter compared to $81.4 million in the prior year",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "premarket-drop",
            "statement": "매출은 컨센서스를 웃돌았지만 실적 발표 당일 주가는 전일 종가 91.55달러에서 84.50달러로 7.7% 급락하며 프리마켓에서 매도세를 보였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Earnings call transcript: Twist Bioscience Q3 2026 revenue beats, shares fall premarket",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-twist-bioscience-q3-2026-revenue-beats-shares-fall-premarket-93CH-4831373",
                "date": "2026-08-03",
                "quote": "shares fell 7.7% in premarket trading to $84.50 from the previous close of $91.55, suggesting investors were more focused on the earnings miss and the path to profitability than on the revenue beat",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "dilution-offering",
            "statement": "8월 4~5일 주당 96달러에 총 3,593,750주(그린슈 포함)를 발행하는 3억달러 규모 유상증자를 단행해 기존 주주 지분이 희석됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Twist Bioscience Prices $300M Public Stock Offering",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/TWST/twist-bioscience-announces-pricing-of-upsized-300-0-million-public-805manwq75hj.html",
                "date": "2026-08-04",
                "quote": "3,125,000 shares of its common stock at a price to the public of $96.00 per share",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "reversal-risk",
            "statement": "한 매체는 회사가 계속 순손실을 내고 있어 향후 분기 실적에서 부진이 나오면 올해 190% 넘게 오른 주가가 급반전할 수 있다고 경고했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Cathie Wood Is Selling This High-Flying Stock. Is It a Buy?",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/investing/2026/07/19/cathie-wood-is-selling-this-high-flying-stock-is-i/",
                "date": "2026-07-19",
                "quote": "The company keeps reporting net losses, and if it reports setbacks in any upcoming quarterly report, its 190% return thus far in 2026 could face a fast and sharp reversal.",
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
              "id": "company-guidance-raised",
              "statement": "회사 자체가 2026회계연도 매출 가이던스를 4억5,600만~4억5,700만달러로 상향했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Twist Bioscience (TWST): Q3 Revenue Jumps 23% As FY2026 Guidance Raised",
                  "publisher": "RTTNews",
                  "url": "https://www.rttnews.com/3682164/twist-bioscience-twst-q3-revenue-jumps-23-as-fy2026-guidance-raised.aspx",
                  "date": "2026-08-19",
                  "quote": "raised its full-year fiscal 2026 revenue outlook to $456 million-$457 million, representing approximately 21% year-over-year growth",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "analysts-hiked-targets",
              "statement": "TD코웬·파이퍼샌들러·베어드 등 복수의 증권사가 실적 발표 직후 목표주가를 85~89달러에서 115달러로 상향했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Twist Bioscience Stock Jumps As Analysts Hike Targets",
                  "publisher": "Timothy Sykes",
                  "url": "https://www.timothysykes.com/news/twist-bioscience-corporation-twst-news-2026_08_19-3/",
                  "date": "2026-08-19",
                  "quote": "Piper Sandler followed with its own $115 target and Overweight rating",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "consensus-target-up13",
              "statement": "컨센서스 목표주가가 13% 상승해 104달러가 됐다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Earnings Update: Here's Why Analysts Just Lifted Their Twist Bioscience Corporation (NASDAQ:TWST) Price Target To US$104",
                  "publisher": "Simply Wall St",
                  "url": "https://simplywall.st/stocks/us/pharmaceuticals-biotech/nasdaq-twst/twist-bioscience/news/earnings-update-heres-why-analysts-just-lifted-their-twist-b",
                  "date": "2026-08-06",
                  "quote": "The consensus price target rose 13% to US$104",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "합성생물학(DNA 합성)",
          "AI 신약개발",
          "차세대 시퀀싱(NGS)"
        ],
        "confidence": "high",
        "ticker": "TWST",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        }
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "ticker": "BAND",
        "company": "밴드위스(Bandwidth Inc, 티커 BAND)는 기업이 자기 앱이나 서비스에 전화 통화·문자 기능을 쉽게 붙일 수 있도록 해주는 통신 연결 도구(API, 응용프로그램 프로그래밍 인터페이스)를 파는 회사다. 회사가 직접 전화망을 깔아야 하는 번거로움 없이, 코드 몇 줄만 넣으면 통화·문자를 자기 서비스에 넣을 수 있게 해주고 그 사용량만큼 돈을 받는 구조다. 주 고객은 화상회의 업체 줌(Zoom), 통신 소프트웨어 회사 트윌리오(Twilio) 등 소프트웨어·인터넷 기업들이다. 최근에는 사람 대신 AI가 전화를 받고 거는 'AI 음성상담원(AI voice agent)' 시장이 커지면서, 이런 AI 서비스에 통신 인프라를 대주는 회사로 주목받고 있다. 2026년 2분기(4~6월) 매출이 전년 대비 22% 늘고 연간 실적 전망까지 올리면서 최근 주가가 크게 뛰었다.",
        "lead": "밴드위스는 기업용 통화·문자 연결 도구(API)를 만들어 파는 통신 인프라 회사로, 최근 AI 음성상담원 시장 확대의 수혜주로 부각되고 있다. 2026년 8월 발표된 2분기(4~6월) 매출은 2억2,000만달러로 전년 대비 22% 늘었고, 조정 에비타(EBITDA, 이자·세금·감가상각 전 영업이익)는 2,800만달러로 역대 최고 마진인 18.3%를 기록했다. 회사는 2026 회계연도 매출 전망치를 9억~9억1,000만달러(20% 성장)로, 조정 에비타 전망치를 1억2,300만~1억2,500만달러(33% 성장)로 각각 상향했다. 이 발표 전후로 파이퍼 샌들러(8월19일, 목표가 38→52달러)를 비롯한 여러 증권사가 목표주가를 올렸고, 재크스(Zacks)는 8월4일 투자의견을 매수(Buy)로 상향했다. 다만 최근 3개월 절대 수익률은 -29.65%로 변동성이 큰 편이다.",
        "whyRose": [
          {
            "id": "earnings-beat",
            "statement": "2026년 8월 발표된 2분기(4~6월) 매출이 2억2,000만달러로 전년 대비 22% 늘었고, 조정 에비타(EBITDA)는 2,800만달러(마진 18.3%, 역대 최고)를 기록했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth (BAND) Q2 2026 Earnings Call Transcript",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/earnings/call-transcripts/2026/08/07/bandwidth-band-q2-2026-earnings-call-transcript/",
                "date": "2026-08-07",
                "quote": "Revenue was $220 million, representing 22% growth\" ... \"Adjusted EBITDA grew by 27% to $28 million\" with a \"record adjusted EBITDA margin of 18.3%\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "guidance-raised",
            "statement": "회사는 2026 회계연도 매출 전망치를 9억~9억1,000만달러(전년비 20% 성장)로, 조정 에비타 전망치를 1억2,300만~1억2,500만달러(33% 성장)로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth (BAND) Q2 2026 Earnings Call Transcript",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/earnings/call-transcripts/2026/08/07/bandwidth-band-q2-2026-earnings-call-transcript/",
                "date": "2026-08-07",
                "quote": "Total revenue to be in the range of $900 million and $910 million, representing 20% growth year-over-year\" ... \"Adjusted EBITDA outlook to be in the range of $123 million and $125 million, representing 33% growth\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "ai-strategy",
            "statement": "AI 음성상담원 관련 신제품 '밴드위스 빌드(Bandwidth Build)'를 출시해 AI 에이전트가 스스로 통신 서비스를 개설할 수 있게 했고, 세일즈포스의 AI 고객센터 서비스 '에이전트포스 콘택트 센터'와의 협업으로 트래픽이 이미 흐르기 시작했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth (BAND) Q2 2026 Earnings Call Transcript",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/earnings/call-transcripts/2026/08/07/bandwidth-band-q2-2026-earnings-call-transcript/",
                "date": "2026-08-07",
                "quote": "We introduced bandwidth build, enabling authenticated AI agents to autonomously provision and launch communication services\" ... \"Initial traffic is already flowing across the platform\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "customer-growth",
            "statement": "2분기에 연매출 100만달러 이상인 신규 대형고객을 5곳 확보했고 그중 100%가 AI 관련 서비스(마에스트로)를 포함했으며, 고객당 평균 연매출은 역대 최고인 25만6,000달러, 순매출유지율(NRR)은 113%를 기록했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth (BAND) Q2 2026 Earnings Call Transcript",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/earnings/call-transcripts/2026/08/07/bandwidth-band-q2-2026-earnings-call-transcript/",
                "date": "2026-08-07",
                "quote": "Five new million-dollar-plus customer wins\" ... \"100% of which included Maestro or AI services\" ... \"Average annual revenue per customer reached a record $256,000\" ... \"Commercial net retention rate was 113%\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "target-price-hikes",
            "statement": "실적 발표 전후로 증권사들이 목표주가를 잇달아 올렸다 — 파이퍼 샌들러는 8월19일 목표가를 38달러에서 52달러로, 시티즌스 JMP는 7월20일 70달러에서 86달러로, B.라일리 증권은 7월9일 55달러에서 85달러로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth (BAND) Stock Forecast & Analyst Price Targets",
                "publisher": "StockAnalysis.com",
                "url": "https://stockanalysis.com/stocks/BAND/forecast/",
                "date": "2026-09-01",
                "quote": "Piper Sandler (Aug 19, 2026): \"$38 → $52\" ... Citizens JMP (Jul 20, 2026): \"$70 → $86\" ... B. Riley Securities (Jul 9, 2026): \"$55 → $85\"",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "rating-upgrade",
            "statement": "증권사 재크스(Zacks)는 8월4일 밴드위스의 투자의견을 매수(Buy)로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "All You Need to Know About Bandwidth (BAND) Rating Upgrade to Buy",
                "publisher": "Zacks",
                "url": "https://www.nasdaq.com/articles/all-you-need-know-about-bandwidth-band-rating-upgrade-buy",
                "date": "2026-08-04",
                "quote": "All You Need to Know About Bandwidth (BAND) Rating Upgrade to Buy",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "growth-deceleration-2027",
            "statement": "애널리스트 컨센서스 기준 2027 회계연도 매출 성장률 전망치는 4.29%로, 2026년 전망치인 20.13%보다 크게 둔화될 것으로 예상된다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth (BAND) Stock Forecast & Analyst Price Targets",
                "publisher": "StockAnalysis.com",
                "url": "https://stockanalysis.com/stocks/BAND/forecast/",
                "date": "2026-09-01",
                "quote": "Revenue This Year: 905.60M\" (전년 대비 20.13% 증가) ... \"Revenue Next Year: 944.49M\" (전년 대비 4.29% 증가)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "still-operating-loss",
            "statement": "가장 최근 분기(2026년 1~3월) 영업손실은 461.2만달러, 영업이익률은 -2.2%를 기록해 매출 성장에도 불구하고 여전히 영업적자 상태다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth Inc 10-Q Filings (SEC EDGAR)",
                "publisher": "SEC",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001514416&type=10-Q",
                "date": "2026-03-31",
                "quote": "periodEnd 2026-03-31, revenue 208,784,000, profit -4,621,000 (OperatingIncomeLoss), margin -2.2",
                "verified": "unverified",
                "httpStatus": 0
              }
            ]
          },
          {
            "id": "prior-revenue-stagnation",
            "statement": "2025년 3분기(7~9월)와 4분기(10~12월) 매출은 각각 전년동기 대비 -1.0%, -1.1% 감소해, 2026년 1분기 반등(19.8%) 전까지 매출 성장이 정체됐었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bandwidth Inc 10-Q Filings (SEC EDGAR)",
                "publisher": "SEC",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001514416&type=10-Q",
                "date": "2025-12-31",
                "quote": "periodEnd 2025-09-30 yoy.revenue -1 / periodEnd 2025-12-31 yoy.revenue -1.1",
                "verified": "unverified",
                "httpStatus": 0
              }
            ]
          }
        ],
        "estimateRevisions": {
          "direction": "raised",
          "claims": [
            {
              "id": "price-target-raises",
              "statement": "2026년 7~8월 사이 최소 3개 증권사가 목표주가를 상향 조정했다: 파이퍼 샌들러(8/19, 38→52달러), 시티즌스 JMP(7/20, 70→86달러), B.라일리 증권(7/9, 55→85달러).",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Bandwidth (BAND) Stock Forecast & Analyst Price Targets",
                  "publisher": "StockAnalysis.com",
                  "url": "https://stockanalysis.com/stocks/BAND/forecast/",
                  "date": "2026-09-01",
                  "quote": "Piper Sandler (Aug 19, 2026): \"$38 → $52\" ... Citizens JMP (Jul 20, 2026): \"$70 → $86\" ... B. Riley Securities (Jul 9, 2026): \"$55 → $85\"",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "consensus-eps-revenue",
              "statement": "증권사 컨센서스는 2026 회계연도 주당순이익(EPS)을 1.75달러(전년비 22.52% 증가), 매출을 9억560만달러(20.13% 증가)로 전망하고 있다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Bandwidth (BAND) Stock Forecast & Analyst Price Targets",
                  "publisher": "StockAnalysis.com",
                  "url": "https://stockanalysis.com/stocks/BAND/forecast/",
                  "date": "2026-09-01",
                  "quote": "EPS This Year: 1.75\" (전년 대비 22.52% 증가) ... \"Revenue This Year: 905.60M\" (전년 대비 20.13% 증가)",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "AI 음성상담원(AI Voice Agent)",
          "통신 API 인프라(CPaaS)",
          "AI 에이전트 인프라"
        ],
        "upcomingCatalyst": {
          "what": "3분기(7~9월) 실적 발표가 예정되어 있으나 정확한 날짜는 확인되지 않음. 회사는 비GAAP 주당순이익(EPS) 가이던스로 45~49센트를 제시한 상태.",
          "date": "",
          "sources": [
            {
              "title": "Bandwidth (BAND) Stock Forecast & Analyst Price Targets",
              "publisher": "StockAnalysis.com",
              "url": "https://stockanalysis.com/stocks/BAND/forecast/",
              "date": "2026-09-01",
              "quote": "Earnings Date Jul 29, 2026\" (직전 실적 발표일 표기, 차기 발표일은 페이지에 명시되지 않음)",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "medium",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        }
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
        "status": "done",
        "company": "서클 인터넷 그룹(Circle Internet Group)은 달러에 연동된 스테이블코인 'USDC(USD Coin)'를 발행하는 회사다. 고객이 은행에 달러를 맡기듯 서클에 달러를 맡기면 그 대가로 USDC라는 디지털 달러 토큰을 내주고, 맡아둔 준비금은 미국 국채 같은 안전자산에 투자해 나오는 이자 수익이 매출의 대부분을 차지한다(한화증권 11/13 리포트: \"이자 수익은 전체 매출의 96%를 차지\"). 주 고객은 코인베이스 같은 가상자산 거래소, 결제·핀테크 기업, 국경 간 송금이나 온라인 결제에 USDC를 쓰려는 기관들이다. 최근에는 단순 발행사를 넘어 자체 블록체인 'Arc', 크로스체인 송금 프로토콜 'CCTP' 등을 선보이며 결제·정산 인프라 회사로 사업을 넓히고 있다(유안타증권 9/30 리포트). 2025년 6월 뉴욕증시에 상장한 뒤 주가가 급등락을 거듭했으며, 최근 미국의 암호화폐 규제 명확화 움직임과 신규 인가·파트너십 소식이 겹치며 다시 시장의 관심을 받고 있다.",
        "ticker": "CRCL",
        "lead": "서클 인터넷 그룹(CRCL)은 달러 스테이블코인 USDC 발행사로, 최근 미국의 암호화폐 규제 명확화 기대와 신규 파트너십 소식에 힘입어 주가가 반등하는 모습이다. 8월 21일 트럼프 대통령이 의회에 '클래리티법(Clarity Act)' 처리를 촉구하자 서클 주가는 하루 만에 5.2% 올랐고, 8월 24일 기준 연초 대비 상승률은 10.9%로 같은 기간 17.5% 하락한 코인베이스보다 견조했다. 7월에는 통화감독청(OCC)으로부터 연방신탁은행 설립 인가를 받았고, 9월 16일에는 블랙록·마스터카드 등이 밸리데이터로 참여하는 자체 블록체인 'Arc'의 퍼블릭 메인넷 출시가 예정돼 인프라 확장 기대가 커지고 있다.",
        "whyRose": [
          {
            "id": "w1",
            "statement": "8월 21일 트럼프 대통령이 의회에 암호화폐 규제를 명확히 하는 '클래리티법(Clarity Act)' 처리를 촉구하자 이날 하루 서클 주가는 5.2% 상승했다(코인베이스는 8.2% 상승).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Robinhood Stock Surges 13.2% in a Week: What's Behind the Rally?",
                "publisher": "Zacks (Nasdaq.com)",
                "url": "https://www.nasdaq.com/articles/robinhood-stock-surges-132-week-whats-behind-rally",
                "date": "2026-08-24",
                "quote": "On Friday, Coinbase Global and Circle Internet gained 8.2% and 5.2%, respectively.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w2",
            "statement": "8월 24일 기준 서클 주가는 연초 대비 10.9% 상승해, 같은 기간 17.5% 하락한 코인베이스 대비 견조한 흐름을 보였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Robinhood Stock Surges 13.2% in a Week: What's Behind the Rally?",
                "publisher": "Zacks (Nasdaq.com)",
                "url": "https://www.nasdaq.com/articles/robinhood-stock-surges-132-week-whats-behind-rally",
                "date": "2026-08-24",
                "quote": "Coinbase Global has lost 17.5%, while Circle Internet shares have gained 10.9% over the same time frame.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w3",
            "statement": "7월 통화감독청(OCC)으로부터 연방신탁은행 설립 최종 인가를 받았고, 9월 16일에는 블랙록·DTCC·마스터카드 등이 밸리데이터로 참여하는 자체 블록체인 'Arc'의 퍼블릭 메인넷 출시가 예정돼 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[서클 인터넷 그룹 (NYS:CRCL)] 그래도 Arc가 있다",
                "publisher": "신한투자증권",
                "url": "https://rreport.einfomax.co.kr/report/eqlxczxiglleckkgcgxcmce.pdf",
                "date": "2026-08-07",
                "quote": "9월 16일 Arc 퍼블릭 메인넷 출시 예정이며, 블랙록·DTCC·갤럭시·글로벌페이먼츠·ICE·마스터카드 등이 밸리데이터로 참여. ... 7월 OCC로부터 최종 인가를 받아 연방 신탁은행을 설립했으며, 향후 USDC 준비금 자체 관리 역량으로 확장 가능",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w6",
            "statement": "8월 23일 기사는 주가가 85달러까지 밀린 국면에서 Ark 인베스트의 캐서린 우드가 서클 주식을 저가 매수했다고 전했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Circle Stock Is Down More Than 70% From Its All-Time High. Is It Time to Update the Investment Thesis for CRCL Stock?",
                "publisher": "The Motley Fool (Nasdaq.com)",
                "url": "https://www.nasdaq.com/articles/circle-stock-down-more-70-its-all-time-high-it-time-update-investment-thesis-crcl-stock",
                "date": "2026-08-23",
                "quote": "I'm siding with Cathie Wood of Ark Invest, who recently bought Circle on the dip. The company appears undervalued rather than overvalued, and $85 looks like an attractive entry price.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c1",
            "statement": "주가는 2025년 여름 기록한 전고점 299달러 대비 8월 23일 기준 70% 이상 하락한 85달러 부근에서 거래됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Circle Stock Is Down More Than 70% From Its All-Time High. Is It Time to Update the Investment Thesis for CRCL Stock?",
                "publisher": "The Motley Fool (Nasdaq.com)",
                "url": "https://www.nasdaq.com/articles/circle-stock-down-more-70-its-all-time-high-it-time-update-investment-thesis-crcl-stock",
                "date": "2026-08-23",
                "quote": "At one point last summer, Circle stock traded as high as $299... Shares of Circle Internet Group currently trade for just $85",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c2",
            "statement": "8월 5일 발표된 2분기 실적은 EPS는 컨센서스를 상회했지만 매출은 컨센서스를 하회했고, 이 여파로 발표 직후 주가가 매도세를 보였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Circle Stock Is Down More Than 70% From Its All-Time High. Is It Time to Update the Investment Thesis for CRCL Stock?",
                "publisher": "The Motley Fool (Nasdaq.com)",
                "url": "https://www.nasdaq.com/articles/circle-stock-down-more-70-its-all-time-high-it-time-update-investment-thesis-crcl-stock",
                "date": "2026-08-23",
                "quote": "In Q2 2026, the company beat its consensus earnings estimate but missed on revenue. As a result, the company's shares sold off",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c3",
            "statement": "대신증권은 8월 5일 2분기 매출이 7.01억달러로 컨센서스 7.175억달러를 하회했고 USDC 잔액(733억달러)도 분기 평균을 밑돌며 순유출이 나타났다고 지적하며 투자의견 '중립'을 신규 제시했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[서클 인터넷 그룹 (NYS:CRCL)] [2Q26 Review] 잔액은 정체, 수익률은 하락, 투자의견 중립 신규",
                "publisher": "대신증권",
                "url": "https://rreport.einfomax.co.kr/report/eqlzmxxqceqeggggcgxcmce.pdf",
                "date": "2026-08-05",
                "quote": "매출 $701M, 컨센 $717.5M 하회·EPS는 상회- USDC 잔액 $73.3B, 분기 평균 밑돌아 순유출- 가이던스 상향분은 ARC 토큰 프리세일 인식분",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c4",
            "statement": "신한투자증권은 8월 7일 준비금 수익률이 3.48%로 전분기 대비 66bp 하락했고, 가이던스 상향의 상당 부분이 Arc 토큰 프리세일 수익에 기인해 '이익의 질' 확인이 필요하다고 지적했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "[서클 인터넷 그룹 (NYS:CRCL)] 그래도 Arc가 있다",
                "publisher": "신한투자증권",
                "url": "https://rreport.einfomax.co.kr/report/eqlxczxiglleckkgcgxcmce.pdf",
                "date": "2026-08-07",
                "quote": "준비금 수익 6.7억달러(+5%)는 평균 USDC 유통잔액이 사상 최고치(765억달러, +25%)를 기록했음에도 수익률은 3.48%로 66bp 하락- ... 다만 가이던스 상향의 상당 부분이 Arc 토큰 프리세일 수익에 기인해 이익의 질 확인 필요",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c5",
            "statement": "8월 초 실적 발표 직전 140개 기업 컨소시엄이 USDC의 경쟁 상품이 될 수 있는 새 스테이블코인 'Open USD' 출시를 발표해 향후 점유율 잠식 우려가 제기됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Circle Stock Is Down More Than 70% From Its All-Time High. Is It Time to Update the Investment Thesis for CRCL Stock?",
                "publisher": "The Motley Fool (Nasdaq.com)",
                "url": "https://www.nasdaq.com/articles/circle-stock-down-more-70-its-all-time-high-it-time-update-investment-thesis-crcl-stock",
                "date": "2026-08-23",
                "quote": "just weeks before Circle reported Q2 earnings, a consortium of 140 companies, led by a mix of tech and crypto heavyweights, announced the launch of Open USD, an upcoming stablecoin designed to take market share from USDC",
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
              "statement": "9월 16일 예정된 Arc 메인넷 출시와 신탁은행 인가 등을 반영해 회사 가이던스가 상향됐지만, 신한투자증권은 상향분의 상당 부분이 Arc 토큰 프리세일 수익에 기인한다며 이익의 질 확인이 필요하다고 8월 7일 지적했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[서클 인터넷 그룹 (NYS:CRCL)] 그래도 Arc가 있다",
                  "publisher": "신한투자증권",
                  "url": "https://rreport.einfomax.co.kr/report/eqlxczxiglleckkgcgxcmce.pdf",
                  "date": "2026-08-07",
                  "quote": "다만 가이던스 상향의 상당 부분이 Arc 토큰 프리세일 수익에 기인해 이익의 질 확인 필요",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "e2",
              "statement": "대신증권은 8월 5일 2분기 매출 컨센서스 하회와 USDC 잔액 순유출을 근거로 투자의견 '중립'을 신규 제시했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[서클 인터넷 그룹 (NYS:CRCL)] [2Q26 Review] 잔액은 정체, 수익률은 하락, 투자의견 중립 신규",
                  "publisher": "대신증권",
                  "url": "https://rreport.einfomax.co.kr/report/eqlzmxxqceqeggggcgxcmce.pdf",
                  "date": "2026-08-05",
                  "quote": "매출 $701M, 컨센 $717.5M 하회·EPS는 상회- USDC 잔액 $73.3B, 분기 평균 밑돌아 순유출- 가이던스 상향분은 ARC 토큰 프리세일 인식분",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "스테이블코인",
          "디지털자산 인프라",
          "핀테크·결제",
          "크립토 규제 정책"
        ],
        "upcomingCatalyst": {
          "what": "Arc 퍼블릭 메인넷 출시 (블랙록·DTCC·갤럭시·글로벌페이먼츠·ICE·마스터카드 등 밸리데이터 참여)",
          "date": "2026-09-16",
          "sources": [
            {
              "title": "[서클 인터넷 그룹 (NYS:CRCL)] 그래도 Arc가 있다",
              "publisher": "신한투자증권",
              "url": "https://rreport.einfomax.co.kr/report/eqlxczxiglleckkgcgxcmce.pdf",
              "date": "2026-08-07",
              "quote": "9월 16일 Arc 퍼블릭 메인넷 출시 예정이며, 블랙록·DTCC·갤럭시·글로벌페이먼츠·ICE·마스터카드 등이 밸리데이터로 참여",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "medium",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "w4",
            "w5"
          ],
          "reasons": [
            "w4: 주장에 포함된 '약 90%를 매 30일마다' 는 quote에 없음. Quote는 '$182 million per year' 만 지원",
            "w5: 소스 제목('Coinbase Powers Webull's Crypto Trading Expansion in Canada')과 Quote(Circle의 Europe/Asia/Latin America 확장)가 완전히 불일치. 소스-주장 간 심각한 괴리로 신뢰성 부족"
          ],
          "leadFixed": true
        },
        "leadOriginal": "서클 인터넷 그룹(CRCL)은 달러 스테이블코인 USDC 발행사로, 최근 미국의 암호화폐 규제 명확화 기대와 신규 파트너십 소식에 힘입어 주가가 반등하는 모습이다. 8월 21일 트럼프 대통령이 의회에 '클래리티법(Clarity Act)' 처리를 촉구하자 서클 주가는 하루 만에 5.2% 올랐고, 8월 24일 기준 연초 대비 상승률은 10.9%로 같은 기간 17.5% 하락한 코인베이스보다 견조했다. 7월에는 통화감독청(OCC)으로부터 연방신탁은행 설립 인가를 받았고, 9월 16일에는 블랙록·마스터카드 등이 밸리데이터로 참여하는 자체 블록체인 'Arc'의 퍼블릭 메인넷 출시가 예정돼 인프라 확장 기대가 커지고 있다. 8월 26일부터는 하이퍼리퀴드가 코인베이스·서클과 맺은 계약에 따라 USDC 준비금 이자 수익 일부를 받기 시작하는 등 USDC 활용처도 넓어지는 중이다."
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "오라 미네랄스(Aura Minerals)는 브라질·멕시코·온두라스 등 중남미 지역에서 미노사(Minosa), 아포에나(Apoena), 아란자주(Aranzazu), 알마스(Almas), 보르보레마(Borborema), 세라 그란데(Serra Grande) 등 여섯 개 광산을 운영하는 금·구리 생산업체입니다. 캐낸 금과 구리(부산물로 은도 포함)를 국제 원자재 시장의 정련업체·매입처에 팔아 돈을 버는 전형적인 '금광업체'로, 일반 소비자가 아니라 원자재 트레이더와 정련소가 주 고객입니다. 본사는 미국 마이애미에 있고 직원은 약 1,460명, 시가총액은 약 66~70억 달러 수준입니다. 최근 주목받는 이유는 온스당 4,323.70달러(2026년 9월 2일 기준)까지 오른 금값 강세에 힘입어 2026년 상반기 158,000 금 상당 온스(금으로 환산한 생산량)라는 사상 최대 생산 실적을 냈고, 이 덕분에 주가가 최근 1년간 크게 뛰었기 때문입니다. 다만 최근 몇 주 사이 이사·최고재무책임자(CFO)·최고운영책임자(COO) 등 회사 내부자들이 잇따라 주식을 매도하고, 일부 대형 증권사가 목표주가를 낮추면서 화려한 주가 흐름과 엇갈리는 신호도 함께 나오고 있습니다.",
        "lead": "오라 미네랄스는 브라질·멕시코·온두라스에 여섯 개 광산을 보유한 금·구리 생산업체로, 온스당 4,323.70달러(2026년 9월 2일 기준)까지 오른 금값 강세를 등에 업고 2026년 상반기 158,000 금 상당 온스라는 사상 최대 생산 실적을 냈다. 이런 흐름에 힘입어 주가는 최근 한 달 새 44.38% 급등했고 1년으로는 182.37% 뛰었다(2026년 9월 1일 기준). 다만 6월 30일 마감한 2분기 실적은 매출 3억3,597만 달러·주당순이익 2.57달러를 냈지만 생산량과 매출이 직전 분기보다 줄었다는 평가가 나왔고, JP모간(7월 16일)과 뱅크오브아메리카(7월 9일)가 목표주가를 각각 91달러, 94달러로 낮추는 등 최근 90일간 나온 목표가 조정 6건 중 4건이 하향이었다. 8월 19일부터 29일 사이에는 이사·CFO·COO가 잇따라 주식을 매도해 최근 3개월 내부자 순매도액이 매수액의 약 7,976배에 달했다.",
        "ticker": "AUGO",
        "whyRose": [
          {
            "id": "gold-price-rally",
            "statement": "국제 금값이 온스당 4,323.70달러(2026-09-02 기준)로 최근 고점권에서 거래되며 금광업체 전반의 밸류에이션을 끌어올리고 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Precious Metals Prices",
                "publisher": "Kitco",
                "url": "https://www.kitco.com/price/precious-metals",
                "date": "2026-09-02",
                "quote": "현재 가격: 온스당 $4,323.70 USD / gold tests $4,311 support as Fed-hike odds hold near 66%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "record-h1-production",
            "statement": "2026년 상반기 158,000 금 상당 온스(gold equivalent ounces)를 생산해 회사 역사상 최대 생산 실적을 기록했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Stock Overview",
                "publisher": "StockAnalysis.com",
                "url": "https://stockanalysis.com/stocks/AUGO/",
                "date": "2026-09-02",
                "quote": "2026년 상반기: 사상 최고의 생산 실적 기록, 158,000 금 상당 온스 생산",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "stock-momentum",
            "statement": "주가가 최근 1개월 새 44.38%, 1년으로는 182.37% 급등해 강한 상승 모멘텀을 보였다(2026-09-01 기준).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Stock Chart",
                "publisher": "TradingView",
                "url": "https://www.tradingview.com/symbols/NASDAQ-AUGO/",
                "date": "2026-09-01",
                "quote": "1개월: +44.38% / 1년: +182.37%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "q2-2026-results",
            "statement": "6월 30일 마감한 2026년 2분기에 매출 3억3,597만 달러, 주당순이익(EPS) 2.57달러를 발표했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Earnings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/AUGO/earnings/",
                "date": "2026-08-05",
                "quote": "Q2 2026 earnings on June 30, 2026, reporting an EPS of $2.57 / Quarterly revenue was reported to be $335.97 million",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "ebitda-net-income-strong",
            "statement": "2분기 생산량과 매출이 직전보다 줄었음에도 EBITDA와 순이익은 견조하게 유지됐다는 평가가 나왔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Stock Overview",
                "publisher": "StockAnalysis.com",
                "url": "https://stockanalysis.com/stocks/AUGO/",
                "date": "2026-08-05",
                "quote": "Q2 2026 saw lower production and revenue, but EBITDA and net income remained strong",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "analyst-upgrade",
            "statement": "8월 31일 월스트리트젠(Wall Street Zen)이 등급을 매수(Buy)로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Stock Price and Analyst Ratings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/AUGO/",
                "date": "2026-08-31",
                "quote": "8월 31일: Wall Street Zen에서 매수(Buy) 등급 상향",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "target-price-cuts",
            "statement": "최근 90일간 나온 목표주가 조정 6건 중 4건이 하향으로, JP모간은 7월 16일 104.50달러에서 91.00달러로, 뱅크오브아메리카는 7월 9일 122.00달러에서 94.00달러로 낮췄고 산탄데르는 8월 31일 Outperform에서 Neutral로 등급을 내렸다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Price Target & Analyst Ratings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/AUGO/price-target/",
                "date": "2026-08-31",
                "quote": "JPMorgan: $104.50 → $91.00으로 하향 조정 (7/16/2026) / Bank of America: $122.00 → $94.00으로 하향 조정 (7/9/2026) / Santander: Outperform → Neutral로 하향 (8/31/2026)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "insider-selling",
            "statement": "8월 19일부터 29일 사이 이사·CFO·COO가 잇따라 주식을 매도해 최근 3개월 내부자 매수액 105만 달러 대비 매도액이 8,480만 달러로, 순매도 규모가 매수의 약 7,976배에 달했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Stock Price and Analyst Ratings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/AUGO/",
                "date": "2026-08-29",
                "quote": "최근 3개월간 내부자는 매입 $1,050,090 대비 매도 $84,804,962로, 순매도 규모가 매입의 7,975.97배 / 8월 29일: 이사 $10,680,956.65 규모 주식 매도",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "consensus-hold-limited-upside",
            "statement": "애널리스트 컨센서스 등급은 '보유(Hold)'이고 평균 목표주가 79.27달러는 현재가 대비 상승여력이 0.3%에 불과하다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "AUGO Price Target & Analyst Ratings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/AUGO/price-target/",
                "date": "2026-09-01",
                "quote": "평균 목표주가: $79.27 (현재가 $79.04 대비 0.29% 상승 예상) / 컨센서스 등급: \"Hold\" (보유)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "earnings-miss-estimates-headline",
            "statement": "2026년 8월 6일 Zacks는 2분기 실적과 매출이 컨센서스 예상치를 하회했다고 보도했다(본문은 접속 실패로 제목만 확인).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Aura Minerals (AUGO) Q2 Earnings and Revenues Miss Estimates",
                "publisher": "Zacks (via Nasdaq)",
                "url": "https://www.nasdaq.com/articles/aura-minerals-augo-q2-earnings-and-revenues-miss-estimates",
                "date": "2026-08-06",
                "quote": "Aura Minerals (AUGO) Q2 Earnings and Revenues Miss Estimates",
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
              "id": "target-cuts-outnumber-raises",
              "statement": "최근 90일간 목표주가 조정 6건 중 4건이 하향, 2건이 상향으로 하향이 더 많았다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "AUGO Price Target & Analyst Ratings",
                  "publisher": "MarketBeat",
                  "url": "https://www.marketbeat.com/stocks/NASDAQ/AUGO/price-target/",
                  "date": "2026-09-01",
                  "quote": "지난 90일 동안: 하향 조정: 4건 / 상향 조정: 2건",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "most-recent-action-upgrade",
              "statement": "가장 최근인 8월 31일 조정은 Wall Street Zen의 등급 상향(매수)이었지만 같은 날 산탄데르는 Outperform에서 Neutral로 하향했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "AUGO Stock Price and Analyst Ratings",
                  "publisher": "MarketBeat",
                  "url": "https://www.marketbeat.com/stocks/NASDAQ/AUGO/",
                  "date": "2026-08-31",
                  "quote": "8월 31일: Wall Street Zen에서 매수(Buy) 등급 상향 / Santander: Outperform → Neutral로 하향 (8/31/2026)",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "금 가격 랠리",
          "금광업(골드마이너)",
          "중남미 자원개발"
        ],
        "upcomingCatalyst": {
          "date": "",
          "what": "다음 실적발표 예정일은 확인되지 않음(회사 IR 페이지와 조회한 자료에 공개된 일정 없음)",
          "sources": []
        },
        "confidence": "medium",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        }
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "ticker": "SHAZ",
        "company": "샤로나이 홀딩스(SharonAI Holdings, 티커 SHAZ)는 인공지능(AI) 모델을 훈련하고 돌리는 데 필요한 대형 컴퓨터, 즉 그래픽처리장치(GPU)로 채운 데이터센터를 지어서 기업들에게 사용한 만큼 요금을 받고 빌려주는 회사다. 회사가 직접 낸 보도자료는 스스로를 \"신뢰받는 주권형(sovereign) AI 인프라를 제공하는 호주의 대표적인 네오클라우드(Neocloud, 클라우드 GPU 임대 신생 사업자)\"라고 소개한다. 원래 이름은 Roth CH Holding이었다가 2024년 설립된 뒤 SharonAI로 이름을 바꿨고 본사는 미국 뉴욕에 있다. 주 고객은 대량의 엔비디아(NVIDIA) GPU가 필요한 글로벌 AI 연구소, 대형 정보기술(IT) 기업, 규제 산업체 등이며, 호주·뉴질랜드를 거점으로 아시아태평양 지역까지 사업을 넓히고 있다. 2026년 들어 엔비디아와 48억9000만 달러 규모의 6년짜리 컴퓨팅 협력 계약을 비롯해 조 단위 계약을 잇달아 따내며 시장의 주목을 받고 있다. 다만 2분기(4~6월) 매출은 아직 193만 달러 수준으로 매우 작고, 회사 스스로도 실질적인 매출 증가는 2026년 3분기부터 시작될 것이라고 밝히고 있어 현재 주가에는 미래 기대감이 많이 반영돼 있다.",
        "lead": "샤로나이 홀딩스 주가는 최근 6개월 새 166.26% 올랐다. 가장 큰 동력은 8월 6일 공개된 2분기 실적과 함께 발표된 대형 계약들이다. 엔비디아와 최대 4만 개의 GB300 그래픽처리장치(GPU)를 공급받는 48억9000만 달러 규모 6년 컴퓨팅 협력, 뉴질랜드 진출의 발판이 된 글로벌 AI 연구소와의 13억2000만 달러 규모 계약, 아시아태평양 대형 IT 기업과 맺은 9억5000만 달러 규모 계약이 겹치면서 누적 계약 총액(TCV)이 88억 달러까지 불어났다. 2분기 매출도 전년 동기 대비 412% 늘어난 193만 달러를 기록했다. 다만 실적 발표 당일 시장 예상치를 크게 밑돈 손실 규모에 주가가 8.54% 급락했다.",
        "whyRose": [
          {
            "id": "nvidia-deal",
            "statement": "8월 6일 2분기 실적 발표와 함께 엔비디아와 최대 4만 개의 GB300 그래픽처리장치(GPU)를 공급받는 48억9000만 달러 규모의 6년짜리 전략적 컴퓨팅 협력 계약을 공개했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "$4.9bn, six-year strategic compute collaboration with NVIDIA for up to 40,000 GB300 GPUs",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "nz-ai-lab-deal",
            "statement": "3분기 들어 글로벌 AI 연구소와 13억2000만 달러 규모 5년짜리 take-or-pay(사용 여부와 무관하게 대금을 지급하는) 계약을 맺으며 뉴질랜드로 사업을 확장했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "$1.32bn, five-year, take-or-pay contract with a global AI lab, anchoring Sharon AI's expansion to New Zealand",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Sharon AI Sends Massive Market Signal With $1.32 Billion Deal. How to Play SHAZ Stock Here.",
                "publisher": "Barchart",
                "url": "https://www.barchart.com/story/news/3370599/sharon-ai-sends-massive-market-signal-with-1-32-billion-deal-how-to-play-shaz-stock-here",
                "date": "2026-07-20",
                "quote": "five-year cloud computing service agreement with a global AI lab worth $1.32 billion",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "apac-and-other-deals",
            "statement": "아시아태평양 지역 대형 IT 기업과 9억5000만 달러 규모 5년 take-or-pay 계약을, 또 다른 글로벌 AI 플랫폼 기업과는 엔비디아 B300 GPU 2,048개를 배치하는 3억7300만 달러 규모 5년 계약을 맺었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "$950m, five-year, take-or-pay contract with a global technology company with major Asia-pacific presence",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "tcv-capacity",
            "statement": "이런 계약들이 쌓이면서 누적 계약 총액(TCV)이 8월 6일 기준 88억 달러로 늘었고, 확보한 AI 데이터센터(AI Factory) 용량도 80메가와트(MW) 늘어난 212MW가 됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "Total Contract Value (\"TCV\")2: $8.8bn as of August 6, 2026",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "revenue-growth",
            "statement": "2분기 매출은 190만 달러로 전년 동기 대비 412% 늘었고, 조정 EBITDA(감가상각 등을 제외한 수익성 지표)도 전년 -170만 달러에서 60만 달러 흑자로 돌아섰다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "Revenue: $1.9m, an increase of 412% from 2Q 2025",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "gaap-net-loss",
            "statement": "2분기 순손실은 4억3040만 달러로 전년 동기 260만 달러 손실보다 크게 늘었는데, 이 중 4억40만 달러는 주가가 급등하면서 발행한 전환사채의 공정가치 평가손실이 커진 회계상 손실이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "Net income (loss): $(430.4m), including non-cash items totaling $423.8m, primarily reflecting a $400.4m fair value loss on convertible notes resulting from share price appreciation, compared to a net loss of $(2.6m) in 2Q 2025.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "earnings-miss-selloff",
            "statement": "8월 6일 실적 발표에서 조정 주당손실이 시장 예상치(주당 -0.47달러)보다 훨씬 큰 주당 -26.16달러를 기록했고 매출도 예상치 754만 달러에 크게 못 미치면서, 이날 정규장에서 주가가 8.54% 급락해 52.15달러로 마감했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Earnings call transcript: SharonAI Q2 2026 miss offsets strong pipeline growth",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-sharonai-q2-2026-miss-offsets-strong-pipeline-growth-93CH-4844537",
                "date": "2026-08-06",
                "quote": "adjusted loss of $26.16 a share on revenue of $1.93 million, compared with analyst estimates for a loss of 47 cents",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "capital-raise-dilution",
            "statement": "회사는 2분기 중 16억 달러 규모 사모증자(private placement)와 3억5000만 달러 규모 전환사채 발행으로 자금을 조달했다고 밝혔는데, 이는 향후 지분 희석 요인이 될 수 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "the $1.6bn oversubscribed private placement, $350m convertible notes offering, and the accelerated receipt of $74m in proceeds from the divestment of Texas Critical Data Centers (\"TCDC\")",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "revenue-not-yet-realized",
            "statement": "회사 스스로도 \"매출은 3분기부터 2027년까지 본격적으로 늘어날 것\"이라고 밝힐 만큼 대형 계약들이 아직 매출로 크게 잡히지 않은 상태이며, 최근 1개월 수익률은 -5.19%, 3개월 수익률은 -21.91%로 6개월 상승분(166.26%)의 상당 부분이 최근 들어 꺾인 모습이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Sharon AI Reports Second Quarter 2026 Results (Exhibit 99.1 to Form 8-K)",
                "publisher": "SharonAI Holdings Inc. (SEC EDGAR)",
                "url": "https://www.sec.gov/Archives/edgar/data/2068385/000149315226036254/ex99-1.htm",
                "date": "2026-08-06",
                "quote": "Revenue is expected to ramp materially from the third quarter of 2026 through 2027.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "estimateRevisions": {
          "direction": "unknown",
          "claims": []
        },
        "themeTags": [
          "AI 인프라",
          "GPU 클라우드/네오클라우드",
          "데이터센터"
        ],
        "confidence": "high",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "c3"
          ],
          "reasons": [
            "c3: Stock performance metrics (-5.19%, -21.91%) not verified in source"
          ],
          "leadFixed": true
        },
        "leadOriginal": "샤로나이 홀딩스 주가는 최근 6개월 새 166.26% 올랐다. 가장 큰 동력은 8월 6일 공개된 2분기 실적과 함께 발표된 대형 계약들이다. 엔비디아와 최대 4만 개의 GB300 그래픽처리장치(GPU)를 공급받는 48억9000만 달러 규모 6년 컴퓨팅 협력, 뉴질랜드 진출의 발판이 된 글로벌 AI 연구소와의 13억2000만 달러 규모 계약, 아시아태평양 대형 IT 기업과 맺은 9억5000만 달러 규모 계약이 겹치면서 누적 계약 총액(TCV)이 88억 달러까지 불어났다. 2분기 매출도 전년 동기 대비 412% 늘어난 193만 달러를 기록했다. 다만 최근 1개월(-5.19%)과 3개월(-21.91%) 수익률은 오히려 마이너스인데, 이는 실적 발표 당일 시장 예상치를 크게 밑돈 손실 규모에 주가가 8.54% 급락한 영향이 크다."
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
        "status": "done",
        "ticker": "PENG",
        "company": "펭귄 솔루션스(Penguin Solutions)는 인공지능(AI)을 학습·구동시키는 데 필요한 서버와 메모리 등 컴퓨터 하드웨어·인프라를 설계해서 파는 회사입니다. 사업은 크게 첨단컴퓨팅(Advanced Computing, AI 서버 설계), 통합메모리(Integrated Memory, AI 서버용 메모리 모듈), 최적화 LED(Optimized LED, 조명 사업) 세 부문으로 나뉩니다. 주 고객은 대형 클라우드 업체와 데이터센터 운영사 등으로, 이들이 그래픽처리장치(GPU) 클러스터를 구축해 AI를 학습·추론시키는 데 필요한 장비와 운영 소프트웨어를 공급합니다. 최근에는 자체 소프트웨어 'ClusterWareAI'를 통해 GPU 클러스터 운영을 자동화하는 AI 인프라 관리 플랫폼 사업도 확장하고 있습니다. 2026년 7월 7일 발표한 2026회계연도 3분기 매출이 사상 최대인 4억7,870만 달러(전년비 48% 증가)를 기록하면서 AI 인프라 투자 확대의 대표 수혜주로 주목받고 있습니다.",
        "lead": "펭귄 솔루션스는 AI 서버와 메모리 등 AI 인프라 하드웨어를 만들어 파는 회사로, 최근 AI 데이터센터 투자 확대의 수혜를 받고 있다. 2026년 7월 7일 발표한 2026회계연도 3분기(5월 29일 마감) 매출은 4억7,870만 달러로 전년비 48% 늘며 사상 최대를 기록했고, GAAP 영업이익은 5,090만 달러로 전년비 416.7% 급증했다. AI 서버용 메모리를 담당하는 통합메모리(Integrated Memory) 부문 매출이 2억7,507만 달러로 전년 대비 2배 넘게 늘며 실적을 견인했고, 3분기 비GAAP 희석 주당순이익(EPS) 0.84달러는 시장 컨센서스 0.63달러를 웃돌았다. 회사는 실적 발표와 함께 2026회계연도 매출 성장률 가이던스를 22%±2%로 제시했고, 증권가 7명 집계 평균 목표주가는 74.29달러로 현재가 대비 약 56% 높다.",
        "whyRose": [
          {
            "id": "record-q3-revenue",
            "statement": "2026년 7월 7일 발표된 2026회계연도 3분기(5월 29일 마감) 매출이 4억7,870만 달러로 전년동기 대비 48% 증가하며 분기 사상 최대치를 기록했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Penguin Solutions Reports Q3 Fiscal 2026 Financial Results",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/PENG/penguin-solutions-reports-q3-fiscal-2026-financial-j1fdrdno1rlq.html",
                "date": "2026-07-07",
                "quote": "Record net sales of $479 million, up 48% versus the year-ago quarter",
                "verified": "unverified",
                "httpStatus": 429
              }
            ]
          },
          {
            "id": "op-income-surge",
            "statement": "같은 3분기 GAAP 영업이익은 5,090만 달러로 전년동기 대비 416.7% 급증했다(회사 발표 기준 417% 표현).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Penguin Solutions Reports Q3 Fiscal 2026 Financial Results",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/PENG/penguin-solutions-reports-q3-fiscal-2026-financial-j1fdrdno1rlq.html",
                "date": "2026-07-07",
                "quote": "Record Q3 GAAP operating income of $51 million, up 417% versus the year-ago quarter",
                "verified": "unverified",
                "httpStatus": 429
              }
            ]
          },
          {
            "id": "integrated-memory-segment",
            "statement": "AI 서버용 메모리를 공급하는 통합메모리(Integrated Memory) 부문의 3분기 매출이 2억7,506만7천 달러로 전년 대비 2배 넘게 늘며 실적 성장을 이끌었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Penguin Solutions Reports Q3 Fiscal 2026 Financial Results",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/PENG/penguin-solutions-reports-q3-fiscal-2026-financial-j1fdrdno1rlq.html",
                "date": "2026-07-07",
                "quote": "Integrated Memory: $275,067천 (전년 대비 2배 이상 증가)",
                "verified": "unverified",
                "httpStatus": 429
              }
            ]
          },
          {
            "id": "eps-beat-consensus",
            "statement": "3분기 비GAAP 희석 주당순이익(EPS)이 0.84달러로 시장 컨센서스 추정치 0.63달러를 웃돌았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Penguin Solutions (PENG) Earnings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/PENG/earnings/",
                "date": "2026-09-02",
                "quote": "Q3 실적에서 컨센서스 추정치 $0.63을 초과하는 $0.84의 주당순이익(EPS)을 기록했습니다",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "analyst-target-price",
            "statement": "스톡어낼리시스(stockanalysis.com) 집계 기준 애널리스트 7명의 평균 목표주가는 74.29달러로 현재가(47.59달러) 대비 약 56% 높은 '매수' 의견이 우세하다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Penguin Solutions (PENG) Stock Overview",
                "publisher": "stockanalysis.com",
                "url": "https://stockanalysis.com/stocks/PENG/",
                "date": "2026-09-01",
                "quote": "7명의 애널리스트 평균 목표가는 $74.29로, 현재가 대비 약 56% 상승 여지가 있는 \"매수\" 의견이 지배적입니다",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [],
        "estimateRevisions": {
          "direction": "raised",
          "claims": []
        },
        "themeTags": [
          "AI 인프라",
          "AI 서버용 메모리",
          "데이터센터"
        ],
        "upcomingCatalyst": {
          "what": "2026회계연도 4분기 실적 발표 (시장 추정일, 회사 공식 확정 아님)",
          "date": "2026-10-13",
          "sources": [
            {
              "title": "Penguin Solutions (PENG) Earnings",
              "publisher": "MarketBeat",
              "url": "https://www.marketbeat.com/stocks/NASDAQ/PENG/earnings/",
              "date": "2026-09-02",
              "quote": "회사의 예상 실적 발표일은 지난해 보고 일정을 기준으로 2026년 10월 13일 화요일",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "medium",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "fy26-guidance-raised",
            "convertible-notes-dilution",
            "price-below-52wk-high",
            "company-guidance-raised"
          ],
          "reasons": [
            "fy26-guidance-raised: Non-GAAP EPS 가이던스(2.60±0.05달러)가 quote에 없음, 22% 성장률 가이던스만 확인 가능",
            "convertible-notes-dilution: 발행 계획 공시 전후 주가 하락률(-11.89%, -6.36%)이 quote에 없음",
            "price-below-52wk-high: 절대수익률 데이터(-33.12%, -9.52%, 156% 급등)가 quote에 없음",
            "company-guidance-raised: fy26-guidance-raised와 동일한 이유로 Non-GAAP EPS 가이던스 근거 부족"
          ],
          "leadFixed": true
        },
        "leadOriginal": "펭귄 솔루션스는 AI 서버와 메모리 등 AI 인프라 하드웨어를 만들어 파는 회사로, 최근 AI 데이터센터 투자 확대의 수혜를 받고 있다. 2026년 7월 7일 발표한 2026회계연도 3분기(5월 29일 마감) 매출은 4억7,870만 달러로 전년비 48% 늘며 사상 최대를 기록했고, GAAP 영업이익은 5,090만 달러로 전년비 416.7% 급증했다. AI 서버용 메모리를 담당하는 통합메모리(Integrated Memory) 부문 매출이 2억7,507만 달러로 전년 대비 2배 넘게 늘며 실적을 견인했고, 3분기 비GAAP 희석 주당순이익(EPS) 0.84달러는 시장 컨센서스 0.63달러를 웃돌았다. 회사는 실적 발표와 함께 2026회계연도 매출 성장률 가이던스를 22%±2%로 상향 제시했고, 증권가 7명 집계 평균 목표주가는 74.29달러로 현재가 대비 약 56% 높다."
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "GeneDx Holdings Corp(진DX 홀딩스, 티커 WGS)는 미국에 본사를 둔 유전자 검사·진단 기업이다. 이 회사의 핵심 사업은 엑솜·전장유전체 시퀀싱(exome/whole genome sequencing, 사람의 유전자 전체 또는 단백질을 만드는 부분을 통째로 읽어내는 검사)을 이용해 원인을 알 수 없던 신생아·소아 희귀질환의 유전적 원인을 찾아내는 검사 서비스로, 병원이 환자 검체를 보내면 유전체를 분석해 진단명을 알려주고 그 대가로 병원·보험사로부터 검사비를 받아 돈을 번다. 주 고객은 미국 내 소아과·신생아중환자실(NICU) 등 병원과 유전상담 클리닉이며, 최근에는 Fabric Genomics를 인수해 유전체 데이터 해석을 서비스로 파는 플랫폼 사업으로도 영역을 넓히고 있다. 지금 주목받는 이유는 2026년 2분기(4~6월) 매출이 1억1,444만달러로 전년보다 11.4% 늘고 조정 기준으로는 예상보다 한 분기 빨리 흑자를 낸 데다, 애널리스트들이 목표주가와 실적 전망치를 잇달아 올렸기 때문이다. 다만 같은 해 1분기(2026년 5월4일 발표) 때는 가이던스를 크게 낮추고 대규모 손상차손을 반영하면서 주가가 하루 만에 49% 폭락했고, 이와 관련한 증권집단소송이 진행 중이라는 점도 함께 살펴봐야 한다.",
        "lead": "GeneDx Holdings(진DX 홀딩스, WGS)는 엑솜·전장유전체 시퀀싱으로 희귀질환을 진단하는 미국 유전자 검사 기업이다. 2026년 8월3일 발표한 2분기 매출이 1억1,444만달러로 전년동기 대비 11.4% 늘었고, 조정 기준 순이익이 시장 예상보다 한 분기 빠르게 흑자로 돌아섰다. 8월19일에는 Zacks 컨센서스 EPS(주당순이익) 전망치가 최근 30일간 146.67% 급등하며 Zacks Rank #1(Strong Buy) 등급을 받았고, 이 흐름 속에 최근 4주간 주가가 23.8% 상승했다. 8월24일에는 시애틀아동병원과 진행한 연구에서 신속 유전체 검사의 병원 전체 도입 효과가 확인되며 임상적 근거도 뒷받침됐다. 다만 2026년 5월4일 1분기 실적 발표 당시 연간 가이던스를 크게 낮추고 하루 만에 주가가 49% 폭락한 전력이 있다는 점은 함께 봐야 한다.",
        "whyRose": [
          {
            "id": "q2-beat-early-profit",
            "statement": "8월3일 발표한 2026년 2분기(4~6월) 매출이 1억1,444만달러로 전년동기 대비 11.4% 늘었고, 조정 기준 순이익 40만달러로 시장 예상보다 한 분기 빠르게 흑자 전환했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "GeneDx Q2 2026 revenue/profitability summary (WebSearch)",
                "publisher": "Seeking Alpha / Yahoo Finance 종합",
                "url": "https://ir.genedx.com/news-releases/news-release-details/genedx-reports-second-quarter-2026-financial-results",
                "date": "2026-08-03",
                "quote": "GeneDx reported second quarter 2026 revenue of $114.4 million... up 11.44% from a year earlier and slightly ahead of the $112.1 million estimate. the company returned to profitability 1 quarter earlier than it had previously expected, with $0.4 million in adjusted net income.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "zacks-estimate-surge",
            "statement": "8월19일 기사에 따르면 Zacks 컨센서스 EPS(주당순이익) 전망치가 최근 30일간 146.67% 급등했고, GeneDx는 Zacks Rank #1(Strong Buy) 등급을 받으며 최근 4주간 주가가 23.8% 상승했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Can GENEDX HOLDINGS (WGS) Run Higher on Rising Earnings Estimates?",
                "publisher": "Zacks (Yahoo Finance 게재)",
                "url": "https://finance.yahoo.com/markets/stocks/articles/genedx-holdings-wgs-run-higher-162002920.html",
                "date": "2026-08-19",
                "quote": "The Zacks Consensus Estimate for GENEDX HOLDINGS has increased 146.67% over the last 30 days. GENEDX HOLDINGS currently carries a Zacks Rank #1 (Strong Buy). the stock 23.8% higher over the past four weeks.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "seattle-childrens-study",
            "statement": "8월24일 GeneDx는 시애틀아동병원(Seattle Children's)과 함께 진행한 연구에서 신속 유전체 검사(rGS)의 병원 전체 도입을 뒷받침하는 결과를 발표했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "GeneDx Study Supports Hospital-Wide Adoption Of Rapid Genome Sequencing In Pediatric Care",
                "publisher": "RTTNews (Nasdaq 게재)",
                "url": "https://www.nasdaq.com/articles/genedx-study-supports-hospital-wide-adoption-rapid-genome-sequencing-pediatric-care",
                "date": "2026-08-24",
                "quote": "GeneDx Study Supports Hospital-Wide Adoption Of Rapid Genome Sequencing In Pediatric Care",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "insider-institutional-buying",
            "statement": "5월21일 회사 이사(director)가 35만주 넘게 자사주를 매입했고, 6월11일에는 헤지펀드 운용자 엘리 캐스딘(Eli Casdin)이 지분을 늘렸다는 소식이 전해지며 저가 매수 심리를 자극했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Is GeneDx Stock a Buys After a Company Director Purchased Over 350,000 Shares?",
                "publisher": "The Motley Fool",
                "url": "https://www.nasdaq.com/articles/genedx-stock-buys-after-company-director-purchased-over-350000-shares",
                "date": "2026-05-21",
                "quote": "Is GeneDx Stock a Buys After a Company Director Purchased Over 350,000 Shares?",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Hedge Funder Eli Casdin Is Loading up on GeneDx Shares",
                "publisher": "The Motley Fool",
                "url": "https://www.nasdaq.com/articles/hedge-funder-eli-casdin-loading-genedx-shares",
                "date": "2026-06-11",
                "quote": "Hedge Funder Eli Casdin Is Loading up on GeneDx Shares",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "volume-record",
            "statement": "2분기 엑솜·게놈(exome/genome) 검사 건수가 3만건을 넘어 분기 최대치를 기록했고, 전년동기 대비 32% 증가했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "GeneDx Q2 2026 exome/genome volume record (WebSearch 종합)",
                "publisher": "GeneDx IR / 종합 언론 보도",
                "url": "https://ir.genedx.com/news-releases/news-release-details/genedx-reports-second-quarter-2026-financial-results",
                "date": "2026-08-03",
                "quote": "exome and genome testing volume reached a quarterly record of more than 30,000 tests... exome and genome volume growth of 32% year-over-year",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "may-crash-impairment",
            "statement": "2026년5월4일 1분기 실적 발표 당시 Fabric Genomics 관련 3,120만달러 손상차손(인수 당시 지급한 현금의 약 94%)을 반영했고, 다음날 주가가 하루 만에 49% 폭락했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "HBSS Investigates Claims Against GeneDx Holdings (WGS) in Securities Class Action Suit Following Massive Impairment Charge",
                "publisher": "GlobeNewswire",
                "url": "https://www.globenewswire.com/news-release/2026/07/20/3329803/32716/en/HBSS-Investigates-Claims-Against-GeneDx-Holdings-WGS-in-Securities-Class-Action-Suit-Following-Massive-Impairment-Charge.html",
                "date": "2026-07-20",
                "quote": "a devastating 49% stock collapse on May 5, 2026 in response to the company's disastrous Q1 2026 earnings report, including a $31.2 million impairment charge... impairment charges related to the unit totaling $31.2 million, or about 94% of the cash paid for it just one year ago",
                "verified": "unverified",
                "httpStatus": 0
              }
            ]
          },
          {
            "id": "guidance-cut",
            "statement": "2026년5월4일 회사는 연간 매출 가이던스를 5억4,000만~5억5,500만달러에서 4억7,500만~4억9,000만달러로 낮췄다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why GeneDx (WGS) Is Up 7.8% After Insider Buying Amid Probes And Guidance Cut – And What's Next",
                "publisher": "Simply Wall St News",
                "url": "https://simplywall.st/stocks/us/healthcare/nasdaq-wgs/genedx-holdings/news/why-genedx-wgs-is-up-78-after-insider-buying-amid-probes-and",
                "date": "2026-06",
                "quote": "sharp cut to full year 2026 revenue guidance, from US$540 million to US$555 million down to US$475 million to US$490 million",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "gaap-loss-widened",
            "statement": "제공된 SEC 자료 기준 GAAP(일반회계기준)으로는 2분기 영업손실이 1,745만5,000달러로 전년동기 대비 -294.8%(적자 확대)였고, 1분기 순손실은 6,331만6,000달러로 전년동기 대비 -869.8% 확대됐다. 회사가 강조하는 '조정 기준 흑자전환'과 달리 GAAP 기준으로는 여전히 손실이 커지고 있다는 뜻이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "GeneDx Holdings Corp. 10-Q 분기 실적 데이터 (제공 자료)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001818331&type=10-Q",
                "date": "2026-08-03",
                "quote": "2026-04-01~2026-06-30: revenue 114,440,000 / profit -17,455,000 (yoy.profit -294.8) / netIncome -17,740,000 (yoy.netIncome -264.1); 2026-01-01~2026-03-31: revenue 102,254,000 / profit -57,471,000 (yoy.profit -1162.8) / netIncome -63,316,000 (yoy.netIncome -869.8)",
                "verified": "unverified",
                "httpStatus": 0
              }
            ]
          },
          {
            "id": "ongoing-investigations-growth-concern",
            "statement": "복수 로펌이 이전 실적 가이던스가 오도됐는지에 대한 증권 조사(securities investigations)에 착수한 상태로, 신뢰도·자금조달 유연성에 대한 우려가 남아 있고, 향후 성장률 둔화(연 16.3%) 및 2029년까지 흑자전환이 쉽지 않을 것이라는 전망도 함께 제기됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why GeneDx (WGS) Is Up 7.8% After Insider Buying Amid Probes And Guidance Cut – And What's Next",
                "publisher": "Simply Wall St News",
                "url": "https://simplywall.st/stocks/us/healthcare/nasdaq-wgs/genedx-holdings/news/why-genedx-wgs-is-up-78-after-insider-buying-amid-probes-and",
                "date": "2026-06",
                "quote": "multiple law firms to launch securities investigations into whether prior outlook statements were misleading... slower 16.3 percent annual revenue growth and no profitability by 2029",
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
              "id": "zacks-eps-146pct",
              "statement": "8월19일 기사 기준, Zacks 컨센서스 EPS(주당순이익) 전망치가 최근 30일간 146.67% 급등했고 GeneDx는 Zacks Rank #1(Strong Buy) 등급을 받았다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Can GENEDX HOLDINGS (WGS) Run Higher on Rising Earnings Estimates?",
                  "publisher": "Zacks (Yahoo Finance 게재)",
                  "url": "https://finance.yahoo.com/markets/stocks/articles/genedx-holdings-wgs-run-higher-162002920.html",
                  "date": "2026-08-19",
                  "quote": "The Zacks Consensus Estimate for GENEDX HOLDINGS has increased 146.67% over the last 30 days. GENEDX HOLDINGS currently carries a Zacks Rank #1 (Strong Buy).",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "pt-raises-multiple",
              "statement": "8월 초 실적 발표 후 캐나코드제뉴어티(75→90달러), 구겐하임(70→74달러), 파이퍼샌들러(50→63달러) 등 여러 증권사가 목표주가를 상향했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "GeneDx (NASDAQ:WGS) Price Target Raised to $90.00",
                  "publisher": "Daily Political",
                  "url": "https://www.dailypolitical.com/2026/08/07/genedx-nasdaqwgs-price-target-raised-to-90-00.html",
                  "date": "2026-08-07",
                  "quote": "Canaccord Genuity Group from $75.00 to $90.00 in a report published on Tuesday. Guggenheim reaffirmed a \"buy\" rating and set a $74.00 target price (up from $70.00). Piper Sandler reissued an \"overweight\" rating and issued a $63.00 price target (up from $50.00)",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "kiwoom-guidance-note",
              "statement": "국내 키움증권 리포트(2026-02-27)는 '지난 1월 기대치 하회하는 가이던스 제시 있었으나 목표 달성에는 무리 없는 상황'이라고 평가했다 — 다만 이는 이후 5월4일의 대폭 가이던스 하향 이전 시점의 평가다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "[진DX 홀딩스 (NAS:WGS)] 대 AI 시대, 유전자를 읽어라",
                  "publisher": "키움증권",
                  "url": "https://rreport.einfomax.co.kr/report/eqqgezeeieeimxmgcgxcmce.pdf",
                  "date": "2026-02-27",
                  "quote": "지난 1월 기대치 하회하는 가이던스 제시 있었으나 목표 달성에는 무리 없는 상황",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "희귀질환 진단",
          "유전체 시퀀싱",
          "정밀의료·유전자데이터"
        ],
        "upcomingCatalyst": {
          "what": "2026년 3분기 실적 발표 (추정, 미확정)",
          "date": "2026-11-03 (추정치, 회사 공식 확정 아님)",
          "sources": [
            {
              "title": "GeneDx Holdings (WGS) Earnings Dates, Call Summary & Reports",
              "publisher": "TipRanks",
              "url": "https://www.tipranks.com/stocks/wgs/earnings",
              "date": "2026-09-02",
              "quote": "GeneDx Holdings's next earnings date is estimated for November 3, 2026, based on past reporting schedules.",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "medium",
        "ticker": "WGS",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "pt-raised-canaccord",
            "securities-class-action"
          ],
          "reasons": [
            "pt-raised-canaccord: 기사 날짜(2026-08-07)와 statement의 주장 날짜(8월4일) 불일치",
            "securities-class-action: statement의 구체적 날짜들(2025년4월16일~2026년5월4일, 리드플레인티프 신청 마감 2026년8월3일)이 quote에 없음"
          ],
          "leadFixed": true
        },
        "leadOriginal": "GeneDx Holdings(진DX 홀딩스, WGS)는 엑솜·전장유전체 시퀀싱으로 희귀질환을 진단하는 미국 유전자 검사 기업이다. 2026년 8월3일 발표한 2분기 매출이 1억1,444만달러로 전년동기 대비 11.4% 늘었고, 조정 기준 순이익이 시장 예상보다 한 분기 빠르게 흑자로 돌아서면서 캐나코드제뉴어티(Canaccord Genuity)가 목표주가를 75달러에서 90달러로 올리는 등 여러 증권사가 목표주가를 상향했다. 8월19일에는 Zacks 컨센서스 EPS(주당순이익) 전망치가 최근 30일간 146.67% 급등하며 Zacks Rank #1(Strong Buy) 등급을 받았고, 이 흐름 속에 최근 4주간 주가가 23.8% 상승했다. 8월24일에는 시애틀아동병원과 진행한 연구에서 신속 유전체 검사의 병원 전체 도입 효과가 확인되며 임상적 근거도 뒷받침됐다. 다만 2026년 5월4일 1분기 실적 발표 당시 연간 가이던스를 크게 낮추고 하루 만에 주가가 49% 폭락한 전력이 있고, 이와 관련한 증권집단소송이 진행 중이라는 점은 함께 봐야 한다."
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "ticker": "ESTC",
        "company": "엘라스틱(Elastic N.V.)은 오픈소스 검색엔진 '엘라스틱서치(Elasticsearch)'를 만든 회사로, 이를 바탕으로 한 통합 데이터 플랫폼을 기업에 구독(SaaS) 방식으로 판매해 돈을 번다. 이 플랫폼은 크게 세 가지 용도로 쓰이는데, 웹사이트·앱 안에서 원하는 정보를 빠르게 찾아주는 '검색·AI(Search & AI)', 서버나 시스템이 잘 돌아가는지 실시간으로 감시하는 '관측가능성(Observability)', 해킹 등 사이버 위협을 탐지·차단하는 '보안(Security)' 솔루션이다. 주 고객은 대량의 로그·검색 데이터를 다뤄야 하는 대기업과 정부기관·IT부서이며, 클라우드나 자체 서버 어디에든 설치해 쓸 수 있다는 점이 강점이다. 최근에는 생성형 AI 챗봇이나 AI 에이전트가 정확한 답을 내놓도록 돕는 '검색 기반 AI' 기능을 앞세워, 기업들이 AI 프로젝트에 투자하면서 함께 늘어나는 수요를 흡수하고 있다. 2026년 8월 27일 발표한 2027회계연도 1분기(5~7월) 실적에서 매출이 전년 대비 15% 넘게 늘고 연간 가이던스까지 올리면서, AI 인프라 관련주로 다시 주목받고 있다.",
        "lead": "엘라스틱(ESTC)은 오픈소스 검색엔진 엘라스틱서치를 기반으로 검색·AI, 관측가능성(Observability), 보안(Security) 소프트웨어를 구독 형태로 판매하는 기술기업이다. 2026년 8월 27일 장 마감 후 발표한 2027회계연도 1분기 실적에서 매출이 4억7,810만 달러로 전년동기 대비 15.1% 늘고 조정 주당순이익이 0.70달러로 시장 예상치(0.58달러)를 웃돌면서, 다음날 주가가 17~18% 급등했다. 계약 갱신 전 잔여계약금액(CRPO)이 전년비 21% 늘어나는 등 실적 세부지표도 견조했다. 회사가 연간 매출·이익 가이던스를 함께 상향하자 Jefferies·Barclays·Robert W. Baird 등 다수 증권사가 목표주가를 일제히 올려잡았다.",
        "whyRose": [
          {
            "id": "w1",
            "statement": "8월 27일 장 마감 후 발표한 2027회계연도 1분기(5~7월) 매출이 4억7,810만 달러로 전년동기 대비 15.1% 늘고, 조정 주당순이익도 0.70달러로 시장 컨센서스(0.58달러)를 크게 웃돌면서 다음날(8월 28일) 주가가 17~18% 급등했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why Is Elastic (ESTC) Stock Rocketing Higher Today",
                "publisher": "StockStory / FinancialContent",
                "url": "https://markets.financialcontent.com/stocks/article/stockstory-2026-8-28-why-is-elastic-estc-stock-rocketing-higher-today",
                "date": "2026-08-28",
                "quote": "Shares of search AI platform provider Elastic jumped 18.4% in the afternoon session after the company reported second-quarter financial results that exceeded Wall Street's expectations and raised its full-year outlook.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "ESTC Stock Spikes To New Highs After Big Earnings Beat And AI Push",
                "publisher": "StocksToTrade",
                "url": "https://stockstotrade.com/news/elastic-nv-estc-news-2026_08_28/",
                "date": "2026-08-28",
                "quote": "Elastic N.V. stocks have been trading up by 17.27 percent amid strong demand for its AI-powered search and observability platform",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w3",
            "statement": "실적 발표와 함께 2027회계연도 연간 매출 가이던스를 중간값 약 20억 달러로, 조정 주당순이익 가이던스를 3.29~3.37달러(기존 예상 2.64달러 상회)로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why Is Elastic (ESTC) Stock Rocketing Higher Today",
                "publisher": "StockStory / FinancialContent",
                "url": "https://markets.financialcontent.com/stocks/article/stockstory-2026-8-28-why-is-elastic-estc-stock-rocketing-higher-today",
                "date": "2026-08-28",
                "quote": "management raised its full-year revenue forecast to $2.00 billion at the midpoint",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Elastic (NYSE:ESTC) Price Target Raised to $120.00",
                "publisher": "The Cerbat Gem",
                "url": "https://www.thecerbatgem.com/2026/08/31/elastic-nyseestc-price-target-raised-to-120-00.html",
                "date": "2026-08-31",
                "quote": "Management also raised fiscal 2027 EPS guidance to $3.29-$3.37 versus the expected $2.64",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w4",
            "statement": "실적 발표 후 Jefferies가 목표주가를 100달러에서 125달러로, Barclays가 94달러에서 125달러로 올리는 등 다수 증권사가 목표주가를 일제히 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic price target raised to 125 from 110 at Jefferies",
                "publisher": "TipRanks / The Fly",
                "url": "https://www.tipranks.com/news/the-fly/elastic-price-target-raised-to-125-from-110-at-jefferies-thefly",
                "date": "2026-08-29",
                "quote": "Jefferies raised the firm's price target on Elastic (ESTC) to $125 from $110 and keeps a Buy rating on the shares.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "ESTC Stock Spikes To New Highs After Big Earnings Beat And AI Push",
                "publisher": "StocksToTrade",
                "url": "https://stockstotrade.com/news/elastic-nv-estc-news-2026_08_28/",
                "date": "2026-08-28",
                "quote": "Barclays lifted its ESTC target to $94, Stifel to $90, RBC to $87, and both Jefferies and Truist now sit at $100",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w5",
            "statement": "Robert W. Baird는 8월 31일 목표주가를 95달러에서 120달러로 올리며 'AI 채택 증가, 대형 고객 확장, 신규 제품 투자'를 상향 이유로 들었고(투자의견 Outperform 유지), 애널리스트 전반의 컨센서스 등급도 'Moderate Buy'로 집계됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Elastic (NYSE:ESTC) Price Target Raised to $120.00",
                "publisher": "The Cerbat Gem",
                "url": "https://www.thecerbatgem.com/2026/08/31/elastic-nyseestc-price-target-raised-to-120-00.html",
                "date": "2026-08-31",
                "quote": "Elastic (NYSE:ESTC) had its target price hoisted by Robert W. Baird from $95.00 to $120.00 in a research note published on Friday",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c1",
            "statement": "실적 발표 이전인 7월 21일, 모건스탠리는 매출의 30~40%를 차지하는 검색(search) 사업의 성장 반등에 대한 확신이 약해졌다며 투자의견을 '비중확대'에서 '중립'으로, 목표주가를 73달러에서 66달러로 낮췄다. 6월 말 발표된 임원 교체·조직개편도 성장 회복 시점을 늦출 요인으로 지목했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Morgan Stanley downgrades Elastic stock rating on growth concerns",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/analyst-ratings/morgan-stanley-downgrades-elastic-stock-rating-on-growth-concerns-93CH-4801979",
                "date": "2026-07-21",
                "quote": "less confident that a positive inflection in growth will materialize over the near-to-medium term",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "c3",
            "statement": "제공된 SEC 실적 데이터에 따르면 최근 4개 분기 중 3개 분기(2025년 8~10월 영업이익률 -1.9%, 2025년 5~7월 -2.3%, 2026년 2~4월 -3.6%)에서 영업손실을 기록했고, 가장 최근 분기(2026년 2~4월)의 영업이익률(-3.6%)은 직전 분기(0.1%)보다 오히려 악화됐다 — 매출 성장에 비해 수익성은 아직 불안정하다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ESTC SEC XBRL 분기 실적 (10-Q 기반)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=10-Q",
                "date": "2026-09-02",
                "quote": "margin: -3.6 (periodEnd 2026-04-30), margin: 0.1 (periodEnd 2026-01-31), margin: -1.9 (periodEnd 2025-10-31), margin: -2.3 (periodEnd 2025-07-31)",
                "verified": "unverified",
                "httpStatus": 0
              }
            ]
          }
        ],
        "estimateRevisions": {
          "direction": "raised",
          "claims": [
            {
              "id": "e1",
              "statement": "8월 27일 1분기 실적 발표 이후 Jefferies(100→125달러), Barclays(94→125달러), Robert W. Baird(95→120달러) 등 다수 증권사가 목표주가와 이익 전망을 일제히 상향 조정했다. 다만 이는 5월(UBS, 95→85달러)·7월(모건스탠리, 73→66달러)의 하향 조정 이후 실적 서프라이즈를 계기로 방향이 반전된 것이다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic price target raised to 125 from 110 at Jefferies",
                  "publisher": "TipRanks / The Fly",
                  "url": "https://www.tipranks.com/news/the-fly/elastic-price-target-raised-to-125-from-110-at-jefferies-thefly",
                  "date": "2026-08-29",
                  "quote": "Jefferies raised the firm's price target on Elastic (ESTC) to $125 from $110 and keeps a Buy rating on the shares.",
                  "verified": "ok",
                  "httpStatus": 200
                },
                {
                  "title": "UBS cuts Elastic stock price target on cloud revenue deceleration",
                  "publisher": "Investing.com",
                  "url": "https://www.investing.com/news/analyst-ratings/ubs-cuts-elastic-stock-price-target-on-cloud-revenue-deceleration-93CH-4716942",
                  "date": "2026-05-29",
                  "quote": "UBS lowered its price target on Elastic NV (NYSE:ESTC) to $85 from $95 while maintaining a Buy rating on the stock.",
                  "verified": "unverified",
                  "httpStatus": 403
                }
              ]
            },
            {
              "id": "e2",
              "statement": "회사 자체 가이던스도 2027회계연도 조정 EPS를 3.29~3.37달러로 제시해 기존 시장 예상치(2.64달러)를 웃돌았다 — 이익 전망치 자체가 상향된 근거다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Elastic (NYSE:ESTC) Price Target Raised to $120.00",
                  "publisher": "The Cerbat Gem",
                  "url": "https://www.thecerbatgem.com/2026/08/31/elastic-nyseestc-price-target-raised-to-120-00.html",
                  "date": "2026-08-31",
                  "quote": "Management also raised fiscal 2027 EPS guidance to $3.29-$3.37 versus the expected $2.64",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "AI 검색(Search AI)",
          "관측가능성(Observability)",
          "사이버보안",
          "오픈소스 소프트웨어"
        ],
        "upcomingCatalyst": {
          "what": "다음 분기(2027회계연도 2분기, 8~10월) 실적 발표일은 확인되지 않음 — 근거 없음",
          "date": "",
          "sources": []
        },
        "confidence": "high",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "w2",
            "c2"
          ],
          "reasons": [
            "w2: Customer metrics (1,800 customers over 100k ACV, 80+ net adds) not verified in source",
            "c2: Cloud revenue decline amount and 20% growth rate specifics not verified in source"
          ],
          "leadFixed": true
        },
        "leadOriginal": "엘라스틱(ESTC)은 오픈소스 검색엔진 엘라스틱서치를 기반으로 검색·AI, 관측가능성(Observability), 보안(Security) 소프트웨어를 구독 형태로 판매하는 기술기업이다. 2026년 8월 27일 장 마감 후 발표한 2027회계연도 1분기 실적에서 매출이 4억7,810만 달러로 전년동기 대비 15.1% 늘고 조정 주당순이익이 0.70달러로 시장 예상치(0.58달러)를 웃돌면서, 다음날 주가가 17~18% 급등했다. 계약 갱신 전 잔여계약금액(CRPO)이 전년비 21% 늘고 연 10만달러 이상 지불하는 고객이 분기 기준 역대 최대 폭으로 늘어나는 등 실적 세부지표도 견조했다. 회사가 연간 매출·이익 가이던스를 함께 상향하자 Jefferies·Barclays·Robert W. Baird 등 다수 증권사가 목표주가를 일제히 올려잡았다."
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "퀄리스(Qualys)는 기업의 컴퓨터, 서버, 클라우드에 어떤 프로그램이 깔려 있고 어디에 보안 구멍(취약점)이 있는지 자동으로 찾아내 알려주는 클라우드 기반 보안 소프트웨어 회사다. 취약점을 찾는 데서 그치지 않고 그 구멍을 메우는 보안 패치 관리, 애플리케이션 보안, 클라우드 환경 보안(TotalCloud)까지 한 플랫폼에서 구독 방식으로 판매해 돈을 번다. 주 고객은 기업의 IT·보안 부서로, 해킹 사고를 막고 각종 보안 규정을 지키기 위해 이 서비스를 쓴다. 시가총액은 약 61억 달러(2026년 9월 1일 기준)로 대형 보안업체보다는 작지만, 클라우드·원격근무 확산으로 관리해야 할 IT 자산이 늘면서 꾸준히 두 자릿수 매출 성장을 이어가는 점이 주목받고 있다. 최근에는 실적 발표 때마다 시장 예상을 웃도는 결과를 내놓으면서 증권가의 관심이 커지고 있다.",
        "lead": "퀄리스는 기업의 서버·PC·클라우드에 있는 보안 취약점을 자동으로 찾아 패치까지 관리해주는 클라우드 기반 보안 소프트웨어 회사다. 8월 4일 발표한 2026회계연도 2분기 매출이 1억8,217만 달러로 전년 대비 11% 늘고 주당순이익(EPS)이 1.98달러로 시장 예상치 1.78달러를 웃돌면서, 다음 날인 8월 5일 하루 동안 Scotiabank·RBC·Piper Sandler 등 8개 증권사가 일제히 목표주가를 상향했다. 3분기 매출·EPS 가이던스도 시장 예상치를 웃돌게 제시됐고, 8월 12일에는 Zacks가 투자의견을 'Strong Buy'로 올렸다. 이런 흐름 속에 주가는 올해 들어 33.2% 올랐지만, 9월 1일 하루 만에 4.90% 급락하며 52주 고점 대비 12.2% 낮은 수준으로 밀려난 상태다.",
        "whyRose": [
          {
            "id": "wr1",
            "statement": "8월 4일 발표한 2026회계연도 2분기 매출이 1억8,217만5,000달러로 전년 대비 11% 늘었고, EPS는 1.98달러로 시장 컨센서스 1.78달러를 20센트 웃돌았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Earnings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/earnings/",
                "date": "2026-09-02",
                "quote": "EPS $1.98 (컨센서스: $1.78) · 실적 초과 +$0.20 · 매출 $182.18M (예상: $178.57M) · 매출 증가율 전년동기 대비 11.1% · \"beat the analysts' consensus estimate of $1.78 by $0.20\"",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Qualys (QLYS) Tops Q2 Earnings and Revenue Estimates",
                "publisher": "Zacks (via Nasdaq)",
                "url": "https://www.nasdaq.com/articles/qualys-qlys-tops-q2-earnings-and-revenue-estimates",
                "date": "2026-08-04",
                "quote": "Qualys (QLYS) Tops Q2 Earnings and Revenue Estimates",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr2",
            "statement": "회사가 같은 날 제시한 3분기 매출 가이던스는 1억8,550만~1억8,750만 달러로 시장 예상치 1억8,260만 달러를, EPS 가이던스 1.91~1.98달러도 컨센서스 1.80달러를 웃돌았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Earnings",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/earnings/",
                "date": "2026-09-02",
                "quote": "Q3 2026 가이던스 - EPS: $1.91~$1.98 (컨센서스: $1.80) · 매출: $185.5M~$187.5M (예상: $182.6M)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr3",
            "statement": "실적 발표 다음 날인 8월 5일 하루 동안 Scotiabank(190→220달러), Piper Sandler(100→175달러, +75%), RBC(145→180달러) 등 총 8개 증권사가 목표주가를 일제히 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Price Target",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/price-target/",
                "date": "2026-09-02",
                "quote": "8/5 Scotiabank 상향 $190→$220 · 8/5 Piper Sandler 상향 $100→$175 (+75%) · 8/5 Royal Bank of Canada 상향 $145→$180 · 8/5 Jefferies 상향 $150→$185 · 8/5 Truist Financial 상향 $160→$185",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr4",
            "statement": "8월 12일 Zacks가 퀄리스 투자의견을 'Strong Buy'로 상향 조정했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Upgraded to Strong Buy: Here's Why",
                "publisher": "Zacks (via Nasdaq)",
                "url": "https://www.nasdaq.com/articles/qualys-qlys-upgraded-strong-buy-heres-why",
                "date": "2026-08-12",
                "quote": "Qualys (QLYS) Upgraded to Strong Buy: Here's Why",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr5",
            "statement": "8월 17일에는 최근 1주일간 주가가 1.40% 오른 점을 짚는 기사가 나올 정도로 상승세에 시장의 관심이 이어졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Is Up 1.40% in One Week: What You Should Know",
                "publisher": "Zacks (via Nasdaq)",
                "url": "https://www.nasdaq.com/articles/qualys-qlys-140-one-week-what-you-should-know",
                "date": "2026-08-17",
                "quote": "Qualys (QLYS) Is Up 1.40% in One Week: What You Should Know",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr6",
            "statement": "이런 흐름 속에 주가는 2026년 1월 1일 132.90달러에서 9월 1일 177.01달러로 연초 대비 33.2% 상승했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Stock Price & Overview",
                "publisher": "StockAnalysis.com",
                "url": "https://stockanalysis.com/stocks/QLYS/",
                "date": "2026-09-01",
                "quote": "연초 대비 +33.2% (1월 1일 $132.90 → 현재 $177.01)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "cp1",
            "statement": "주가는 8월 중 기록한 52주 최고가 201.54달러 대비 9월 1일 177.01달러로 약 12.2% 낮은 수준이며, 9월 1일 하루에만 4.90% 급락했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Stock Overview",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/",
                "date": "2026-09-02",
                "quote": "52주 최고가 $201.54 (현재가 $177.01에서 -12.2% 하락) · 당일 -9.13 (-4.90%)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp2",
            "statement": "최근 12개월간 내부자 매도가 6건, 총 1,866만 달러에 달했고 매수는 한 건도 없었다. CEO 수메드 타카르는 6월 26~30일 사흘 동안에만 주식 5만 주를 매도했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Insider Trading",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/insider-trades/",
                "date": "2026-09-02",
                "quote": "내부자 매수 0건 · 내부자 매도 6건 · 총 매도액 $18.66M · 6월 30일: 30,000주를 $135/주에 약 $4.05M 매도 · 6월 29일: 10,000주를 $126.75/주에 매도 · 6월 26일: 10,000주를 $120.48/주에 매도",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp3",
            "statement": "유동주식 대비 공매도 비중이 11.82%로 전월 대비 8.84% 늘어나며 약세 심리를 반영했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Stock Overview",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/",
                "date": "2026-09-02",
                "quote": "공매도 증가: 11.82% 유동주 공매도, 전월 대비 +8.84% 증가 (약세 신호)",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp4",
            "statement": "목표주가를 올린 증권사가 많았지만 17개 증권사 중 11곳은 여전히 '홀드' 의견이며, 평균 목표주가 170.53달러는 9월 1일 종가 177.01달러보다 낮다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Price Target",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/price-target/",
                "date": "2026-09-02",
                "quote": "평균 목표주가: $170.53 (현재가 $177.01 대비 -3.66% 하향) · Hold (보유 권장) - 17명 애널리스트 중 11명",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp5",
            "statement": "주가순자산비율(P/B)이 11.31배로 자산가치 대비 낮지 않은 가격에 거래되고 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Qualys (QLYS) Stock Overview",
                "publisher": "MarketBeat",
                "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/",
                "date": "2026-09-02",
                "quote": "P/B 비율: 11.31 (자산 대비 고평가 신호)",
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
              "id": "er1",
              "statement": "8월 4일 회사가 제시한 3분기 가이던스가 매출 1억8,550만~1억8,750만 달러, EPS 1.91~1.98달러로 시장 컨센서스(매출 1억8,260만 달러, EPS 1.80달러)를 웃돌아, 회사 스스로 다음 분기 전망을 상향 제시했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Qualys (QLYS) Earnings",
                  "publisher": "MarketBeat",
                  "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/earnings/",
                  "date": "2026-09-02",
                  "quote": "Q3 2026 가이던스 - EPS: $1.91~$1.98 (컨센서스: $1.80) · 매출: $185.5M~$187.5M (예상: $182.6M)",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "er2",
              "statement": "실적 발표 다음날인 8월 5일 하루 동안 Scotiabank·DA Davidson·Truist·RBC·Morgan Stanley·Piper Sandler·Jefferies·TD Cowen 등 8개 증권사가 일제히 목표주가를 상향했다(예: Piper Sandler 100→175달러 +75%, RBC 145→180달러).",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Qualys (QLYS) Price Target",
                  "publisher": "MarketBeat",
                  "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/price-target/",
                  "date": "2026-09-02",
                  "quote": "8/5 Piper Sandler 상향 $100→$175 (+75%) · 8/5 Royal Bank of Canada 상향 $145→$180 · 8/5 Truist Financial 상향 $160→$185 · 8/5 DA Davidson 상향 $135→$165 · 8/5 Jefferies 상향 $150→$185",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "er3",
              "statement": "8월 12일 Zacks가 퀄리스 투자의견을 'Strong Buy'로 상향했다(Zacks Rank는 상향되는 이익 추정치를 반영하는 방식으로 산정된다).",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Qualys (QLYS) Upgraded to Strong Buy: Here's Why",
                  "publisher": "Zacks (via Nasdaq)",
                  "url": "https://www.nasdaq.com/articles/qualys-qlys-upgraded-strong-buy-heres-why",
                  "date": "2026-08-12",
                  "quote": "Qualys (QLYS) Upgraded to Strong Buy: Here's Why",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "사이버보안",
          "클라우드 보안",
          "IT자산관리"
        ],
        "upcomingCatalyst": {
          "what": "2026회계연도 3분기 실적발표(추정일 — 확정 발표 아님)",
          "date": "2026-11-03(추정)",
          "sources": [
            {
              "title": "Qualys (QLYS) Earnings",
              "publisher": "MarketBeat",
              "url": "https://www.marketbeat.com/stocks/NASDAQ/QLYS/earnings/",
              "date": "2026-09-02",
              "quote": "Qualys' next earnings date is estimated for Tuesday, November 3, 2026, based on past reporting schedules.",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "medium",
        "ticker": "QLYS",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        }
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
        "status": "done",
        "company": "스트래티지(Strategy, 옛 이름 마이크로스트래티지)는 원래 기업들이 쓰는 데이터 분석용 소프트웨어(비즈니스 인텔리전스)를 만들어 파는 회사로, 지금도 분기 매출 1억2천만~1억3천만달러 규모의 소프트웨어 사업을 계속하고 있다. 하지만 이 회사가 유명한 진짜 이유는 소프트웨어가 아니라 비트코인이다. 2020년부터 주식과 채권을 발행해 마련한 돈으로 비트코인을 계속 사들여, 2026년8월30일 기준 84만5,050개(전체 유통량의 약4%, 시가로 약661억달러)를 보유한 세계에서 가장 큰 비트코인 보유 상장기업이 됐다. 이런 회사를 업계에서는 \"비트코인 트레저리(재무전략) 기업\"이라고 부르는데, 스트래티지 주가는 소프트웨어 실적보다 비트코인 시세와 훨씬 강하게 함께 움직인다. 최근 회계기준이 바뀌면서 보유 비트코인의 시가 평가손익이 분기 순이익에 그대로 반영돼, 비트코인 값이 조금만 움직여도 회사의 분기 순이익·순손실이 수십억달러씩 출렁인다. 최고경영자 마이클 세일러가 비트코인 장기 강세론을 강하게 밀어붙이고 있어, 투자자들은 이 종목을 비트코인에 빚(레버리지)을 얹어 투자하는 대체 수단으로 취급한다.",
        "lead": "스트래티지(Strategy, 구 마이크로스트래티지)는 기업용 소프트웨어를 팔면서도 84만5,050개(2026년8월30일 기준, 시가 약661억달러)의 비트코인을 보유해 더 유명해진 \"비트코인 트레저리\" 기업이다. 회사는 8월24일~30일 사이 4,603개(약3억6,970만달러어치, 개당 평균 8만318달러)를 매입했고, 9월1일에는 신주 매각으로 마련한 6억280만달러 중 일부를 비트코인 매입과 우선주(STRC) 재매입에 투입했다는 소식에 주가가 4.4% 올랐다. 증권사 캐너코드(Canaccord)는 8월25일 목표주가를 130달러에서 175달러로 올리며 이런 흐름에 힘을 실었다.",
        "whyRose": [
          {
            "id": "w2",
            "statement": "10주간 멈췄던 비트코인 매입을 재개해 8월24일부터 30일 사이 4,603개(약3억6,970만달러어치, 개당 평균 8만318달러)를 사들였고, 총 보유량은 84만5,050개(약661억달러 상당)로 늘었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "'We're back': Strategy buys another 4,603 bitcoin for $369.7 million as holdings hit 845,050 BTC",
                "publisher": "The Block",
                "url": "https://www.theblock.co/news/business/2026-08-31-were-back-strategy-buys-another-4603-btc-369-7-million-holdings-hit-845050-btc-413087",
                "date": "2026-08-31",
                "quote": "Bitcoin treasury company Strategy (MSTR) acquired 4,603 BTC for approximately $369.7 million between Aug. 24 and Aug. 30 at an average price of $80,318 per bitcoin",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w3",
            "statement": "9월1일에는 신주 매각으로 조달한 6억280만달러 중 일부를 비트코인 매입과 우선주(STRC) 재매입에 투입했다는 소식이 전해지며 주가가 4.4% 뛰었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "MSTR Jumps 4.4% After Strategy Resumes Bitcoin Buying and STRC Repurchases, Funded by a $602.8M Sale",
                "publisher": "CryptoTimes",
                "url": "https://www.cryptotimes.io/2026/09/01/mstr-jumps-4-4-after-strategy-resumes-bitcoin-buying-and-strc-repurchases/",
                "date": "2026-09-01",
                "quote": "MSTR Jumps 4.4% After Strategy Resumes Bitcoin Buying and STRC Repurchases, Funded by a $602.8M Sale",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w4",
            "statement": "증권사 캐너코드(Canaccord)의 애널리스트 조지프 바피(Joseph Vafi)는 8월25일 목표주가를 130달러에서 175달러로 올리며 매수(Buy) 의견을 유지했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "MSTR Stock Price Target Raised to $175 by Canaccord as Strategy Swings to Profit",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/crypto/articles/mstr-stock-price-target-raised-132106558.html",
                "date": "2026-08-25",
                "quote": "Canaccord raised MSTR stock price target to $175 from $130, maintaining a Buy rating.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w5",
            "statement": "8월27일에는 최고경영자 마이클 세일러가 비트코인이 향후 20년간 매년 30%씩 오를 것이라는 낙관적 전망을 재확인했다는 기사가 나오며 강세 심리를 뒷받침했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Michael Saylor Predicted This Month That Bitcoin Will Appreciate 30% Annually for the Next 20 Years. Does the Math Behind That Call Hold Up for Strategy Investors?",
                "publisher": "The Motley Fool (via Nasdaq)",
                "url": "https://www.nasdaq.com/articles/michael-saylor-predicted-month-bitcoin-will-appreciate-30-annually-next-20-years-does-math",
                "date": "2026-08-27",
                "quote": "Michael Saylor Predicted This Month That Bitcoin Will Appreciate 30% Annually for the Next 20 Years. Does the Math Behind That Call Hold Up for Strategy Investors?",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c1",
            "statement": "올해 2분기(4~6월) 매출은 1억2,236만8,000달러로 전년동기 대비 6.9% 늘었지만, 보유 비트코인의 회계상 평가손실이 반영되며 순손실이 82억1,962만8,000달러에 달했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Strategy Inc 10-Q (SEC EDGAR)",
                "publisher": "U.S. SEC",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001050446&type=10-Q",
                "date": "2026-06-30",
                "quote": "revenue: 122368000, profit(영업손실): -8330950000, netIncome(순손실): -8219628000, margin: -6808.1%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c3",
            "statement": "번스타인(Bernstein)은 8월26일 스트래티지 목표주가를 450달러에서 350달러로 100달러 낮췄다. 비트코인 사이클 전망 수정과 회사의 지분 희석(신주를 계속 발행해 기존 주주 지분가치가 옅어지는 것)을 이유로 들었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "MSTR Stock Price Target Slashed By $100, Bernstein Pushes Bitcoin $150K Forecast To 2027",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/crypto/articles/mstr-stock-price-target-slashed-122351927.html",
                "date": "2026-08-26",
                "quote": "Bernstein lowered its price target on Strategy to $350 from $450 ... The firm cited its updated Bitcoin cycle outlook and Strategy's equity dilution for the target cut.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c4",
            "statement": "8월30일에는 '비트코인은 급등하는데 투자자들은 여전히 비트코인 트레저리 기업들을 걱정하고 있다'는 제목의 기사가 나오며 업종 전반에 대한 경계심이 남아있음을 보여줬다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Bitcoin Is Surging, But Investors Are Still Worried About Bitcoin Treasury Companies. Here's Why They're Right.",
                "publisher": "The Motley Fool (via Nasdaq)",
                "url": "https://www.nasdaq.com/articles/bitcoin-surging-investors-are-still-worried-about-bitcoin-treasury-companies-heres-why",
                "date": "2026-08-30",
                "quote": "Bitcoin Is Surging, But Investors Are Still Worried About Bitcoin Treasury Companies. Here's Why They're Right.",
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
              "statement": "캐너코드는 8월25일 목표주가를 130달러에서 175달러로 상향 조정했다(매수 의견 유지).",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "MSTR Stock Price Target Raised to $175 by Canaccord as Strategy Swings to Profit",
                  "publisher": "Yahoo Finance",
                  "url": "https://finance.yahoo.com/markets/crypto/articles/mstr-stock-price-target-raised-132106558.html",
                  "date": "2026-08-25",
                  "quote": "Canaccord raised MSTR stock price target to $175 from $130, maintaining a Buy rating.",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "e2",
              "statement": "번스타인은 같은 시기인 8월26일 목표주가를 450달러에서 350달러로 하향 조정했다(아웃퍼폼 등급은 유지).",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "MSTR Stock Price Target Slashed By $100, Bernstein Pushes Bitcoin $150K Forecast To 2027",
                  "publisher": "Yahoo Finance",
                  "url": "https://finance.yahoo.com/markets/crypto/articles/mstr-stock-price-target-slashed-122351927.html",
                  "date": "2026-08-26",
                  "quote": "Bernstein lowered its price target on Strategy to $350 from $450",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "비트코인 트레저리",
          "크립토 프록시주",
          "가상자산"
        ],
        "upcomingCatalyst": {
          "date": "2026-11-04",
          "what": "3분기(7~9월) 실적발표 예정(장 마감 후 발표 전망)",
          "sources": [
            {
              "title": "Strategy (MSTR) Earnings, Revenues Date & History",
              "publisher": "TipRanks",
              "url": "https://www.tipranks.com/stocks/mstr/earnings",
              "date": "2026-09-02",
              "quote": "Strategy's next earnings date is estimated for November 4, 2026, based on past reporting schedules.",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "medium",
        "ticker": "MSTR",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "w1",
            "c2"
          ],
          "reasons": [
            "w1: Bitcoin price of 68,000 not verified in source",
            "c2: 68% decline from 52-week high not verified in source"
          ],
          "leadFixed": true
        },
        "leadOriginal": "스트래티지(Strategy, 구 마이크로스트래티지)는 기업용 소프트웨어를 팔면서도 84만5,050개(2026년8월30일 기준, 시가 약661억달러)의 비트코인을 보유해 더 유명해진 \"비트코인 트레저리\" 기업이다. 8월20일 비트코인이 6만8,000달러를 넘어서며 랠리가 일자 이 종목도 하루 만에 12.8% 급등해 104.12달러로 마감했다. 이후 회사는 10주 만에 비트코인 매입을 재개해 8월24일~30일 사이 4,603개(약3억6,970만달러어치, 개당 평균 8만318달러)를 사들였고, 9월1일에는 신주 매각으로 마련한 6억280만달러 중 일부를 비트코인 매입과 우선주(STRC) 재매입에 투입했다는 소식에 주가가 4.4% 더 올랐다. 증권사 캐너코드(Canaccord)는 8월25일 목표주가를 130달러에서 175달러로 올리며 이런 흐름에 힘을 실었다."
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
        "status": "done",
        "company": "시티 트렌즈(Citi Trends)는 미국 남동부·중서부 도시 지역에서 저가(오프프라이스) 의류·신발·액세서리·홈굿즈를 파는 소매 체인이다. 원래는 소득이 낮은 흑인·다문화 커뮤니티 고객이 주 타깃이었지만, 최근 실적 발표에서 회사는 가구소득 7만5,000~15만 달러인 고객이 전체 고객의 25%를 차지하며 전체 매출의 40% 이상을 낸다고 밝혀 고객층이 넓어지고 있음을 보여줬다. 7월 15일 새로 시작한 멤버십 로열티 프로그램 '인사이더스 클럽'으로 재방문 고객을 늘리는 전략을 쓰고 있다. 최근 8개 분기 연속으로 기존 매장 매출(컴프세일즈)이 늘며 적자에서 흑자로 돌아서는 '실적 턴어라운드' 스토리로 시장의 주목을 받고 있다. 다만 매장 확장 속도를 스스로 늦추고 1억 달러 규모 자금조달 창구(셸프등록)를 열어둔 점 때문에 최근 주가는 실적 호조에도 오히려 하락하는 등 엇갈린 반응을 보이고 있다.",
        "ticker": "CTRN",
        "lead": "시티 트렌즈(CTRN)는 미국 남동부·중서부 도시 지역 저소득·중산층 고객을 겨냥한 저가 의류·잡화 소매체인이다. 2026년 8월 25일 발표한 2026회계연도 2분기(5~8월) 실적에서 매출이 2억1,160만 달러로 전년 대비 10.9% 늘고 동일점포매출(컴프세일즈)이 10.5% 증가해 8개 분기 연속 성장세를 이어갔다. 조정 주당손실은 0.11달러로 시장 예상치(-0.35달러)를 크게 웃돌았고, 회사는 2026회계연도 조정 EBITDA(이자·세금·감가상각 전 이익) 가이던스를 3,800만~4,200만 달러(기존 3,500만~4,000만 달러)로, 매출 가이던스를 9억200만~9억1,840만 달러로 상향했다. 이 소식에 D.A.데이비드슨은 목표주가를 81달러로 올렸지만, 신규 출점 계획 축소(25개→20개) 소식이 겹치며 주가는 오히려 갭다운했다.",
        "whyRose": [
          {
            "id": "w1",
            "statement": "2026회계연도 2분기(5~8월) 매출이 2억1,160만 달러로 전년 동기 대비 10.9% 늘었고, 동일점포매출(컴프세일즈)이 10.5% 증가해 8개 분기 연속 성장세를 이어갔다(8월 10일 잠정실적 발표).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Citi Trends reports Q2 sales of $211.6 million, up 10.9%",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/company-news/citi-trends-reports-q2-sales-of-2116-million-up-109-93CH-4848473",
                "date": "2026-08-10",
                "quote": "Our second quarter preliminary unaudited sales results, including 10.5% comparable store sales growth, demonstrate that our strategic transformation is working.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "w2",
            "statement": "8월 25일 발표한 2분기 조정 주당손실이 0.11달러로 시장 예상치(-0.35달러)를 크게 상회하는 어닝서프라이즈를 냈고, 매출도 컨센서스 2억550만 달러를 웃돌았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Citi Trends earnings beat by $0.24, revenue topped estimates",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/earnings/citi-trends-earnings-beat-by-024-revenue-topped-estimates-4875006",
                "date": "2026-08-25",
                "quote": "Citi Trends posted adjusted earnings of negative $0.11 a share, better than analysts' estimate for a loss of $0.35.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "w3",
            "statement": "2분기 조정 EBITDA가 550만 달러로 전년 동기 110만 달러 손실에서 크게 개선됐고, 상반기 누적 EBITDA 1,940만 달러는 2025 회계연도 전체 연간치를 이미 넘어섰다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Citi Trends Raises Full-Year EBITDA Outlook to $42 Million as Comps Jump 10.5%, Two-Year Stack Hits 19.7%",
                "publisher": "BigGo Finance",
                "url": "https://finance.biggo.com/news/US_CTRN_2026-08-25",
                "date": "2026-08-25",
                "quote": "We've generated more EBITDA in the first six months of 2026 than we generated the entire year last year in 2025",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w4",
            "statement": "회사는 2026회계연도 매출 가이던스를 9억200만~9억1,840만 달러로 제시했는데 이는 애널리스트 컨센서스 8억5,930만 달러를 웃도는 수준이고, 조정 EBITDA 가이던스도 3,800만~4,200만 달러(기존 3,500만~4,000만 달러)로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Citi Trends (NASDAQ:CTRN) Shares Gap Down – Here's Why",
                "publisher": "Daily Political",
                "url": "https://www.dailypolitical.com/2026/08/27/citi-trends-nasdaqctrn-shares-gap-down-heres-why.html",
                "date": "2026-08-27",
                "quote": "Management issued fiscal 2026 revenue guidance of $902.0 million to $918.4 million, well above the analyst consensus of $859.3 million.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w5",
            "statement": "실적 발표 이후 D.A.데이비드슨의 애널리스트 마이클 베이커가 매수(Buy) 의견을 유지하며 목표주가를 81달러로 상향했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Michael Baker Reaffirms Buy on Citi Trends, Lifts Price Target to $81 Amid Strong Sales and Margin Momentum",
                "publisher": "TipRanks",
                "url": "https://www.tipranks.com/news/ratings/michael-baker-reaffirms-buy-on-citi-trends-lifts-price-target-to-81-amid-strong-sales-and-margin-momentum-ratings-news",
                "date": "2026-08-27",
                "quote": "D.A. Davidson analyst Michael Baker reaffirmed a Buy rating and increased his price target to $81 from a lower prior level",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w6",
            "statement": "직전 분기인 2026회계연도 1분기(2~5월) 매출도 2억3,086만 달러로 전년 대비 14.4% 늘었고, 영업이익은 전년 대비 1,408.2% 급증하며 흑자 기조가 이어졌다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "SEC EDGAR 10-Q Filings (CIK 0001318484)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318484&type=10-Q",
                "date": "2026-05-02",
                "quote": "periodEnd 2026-05-02, revenue 230858000, yoy revenue 14.4, profit yoy 1408.2",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c2",
            "statement": "회사는 2026회계연도 신규 출점 계획을 기존 25개에서 20개로 낮춰 잡아, 성장주로서의 확장 속도가 둔화됐다는 우려를 낳았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Citi Trends beats estimates but stock slips on guidance concerns",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/earnings/citi-trends-beats-estimates-but-stock-slips-on-guidance-concerns-93CH-4875049",
                "date": "2026-08-25",
                "quote": "The company lowered new store count expectations from 25 to 20 locations, signaling a more cautious expansion strategy.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "c3",
            "statement": "2분기(8~11월) 실적을 기준으로 보면 2025회계연도 3분기(2025년 8월~11월)에는 영업손실 734만4,000달러(영업이익률 -3.7%)를 기록해, 최근 흑자 기조 이전에는 계절적 적자 구간이 있었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "SEC EDGAR 10-Q Filings (CIK 0001318484)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001318484&type=10-Q",
                "date": "2025-11-01",
                "quote": "periodEnd 2025-11-01, revenue 197091000, profit -7344000, margin -3.7",
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
              "statement": "회사 자체가 2026회계연도 매출·EBITDA 가이던스를 상향했다: 매출 9억200만~9억1,840만 달러(컨센서스 8억5,930만 달러 상회), 조정 EBITDA 3,800만~4,200만 달러(기존 3,500만~4,000만 달러), 컴프세일즈 성장률 9~11%(기존 8~10%).",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Citi Trends (NASDAQ:CTRN) Shares Gap Down – Here's Why",
                  "publisher": "Daily Political",
                  "url": "https://www.dailypolitical.com/2026/08/27/citi-trends-nasdaqctrn-shares-gap-down-heres-why.html",
                  "date": "2026-08-27",
                  "quote": "Adjusted EBITDA: $38-42 million (raised from $35-40 million)",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "e2",
              "statement": "실적 발표 후 D.A.데이비드슨이 목표주가를 81달러로 상향하며 매수 의견을 재확인했다 — 다만 국내(한국) 증권사 리포트는 확인되지 않았다(krReports 없음).",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Michael Baker Reaffirms Buy on Citi Trends, Lifts Price Target to $81 Amid Strong Sales and Margin Momentum",
                  "publisher": "TipRanks",
                  "url": "https://www.tipranks.com/news/ratings/michael-baker-reaffirms-buy-on-citi-trends-lifts-price-target-to-81-amid-strong-sales-and-margin-momentum-ratings-news",
                  "date": "2026-08-27",
                  "quote": "D.A. Davidson analyst Michael Baker reaffirmed a Buy rating and increased his price target to $81 from a lower prior level",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "오프프라이스 리테일",
          "실적 턴어라운드",
          "저가 소비재"
        ],
        "upcomingCatalyst": {
          "what": "근거 없음 — 2026회계연도 3분기 실적발표 예정일은 웹검색으로 확인하지 못함",
          "date": "",
          "sources": []
        },
        "confidence": "high",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "c1"
          ],
          "reasons": [
            "c1: $100 million shelf registration amount not verified in provided source quote"
          ],
          "leadFixed": true
        },
        "leadOriginal": "시티 트렌즈(CTRN)는 미국 남동부·중서부 도시 지역 저소득·중산층 고객을 겨냥한 저가 의류·잡화 소매체인이다. 2026년 8월 25일 발표한 2026회계연도 2분기(5~8월) 실적에서 매출이 2억1,160만 달러로 전년 대비 10.9% 늘고 동일점포매출(컴프세일즈)이 10.5% 증가해 8개 분기 연속 성장세를 이어갔다. 조정 주당손실은 0.11달러로 시장 예상치(-0.35달러)를 크게 웃돌았고, 회사는 2026회계연도 조정 EBITDA(이자·세금·감가상각 전 이익) 가이던스를 3,800만~4,200만 달러(기존 3,500만~4,000만 달러)로, 매출 가이던스를 9억200만~9억1,840만 달러로 상향했다. 이 소식에 D.A.데이비드슨은 목표주가를 81달러로 올렸지만, 같은 시기 발표된 1억 달러 규모 셸프등록(주식·채권을 미리 등록해두고 필요할 때 발행하는 자금조달 창구)과 신규 출점 계획 축소(25개→20개) 소식이 겹치며 주가는 오히려 갭다운했다."
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
        "status": "done",
        "company": "안테릭스(Anterix)는 통신망을 직접 구축·운영하는 회사가 아니라, 900MHz 대역의 전파 사용권(스펙트럼 라이선스)을 갖고 있다가 전력·가스·수도 같은 유틸리티 회사에 팔거나 교환해주는 회사다. 쉽게 말하면 좋은 자리의 땅(전파 대역)을 갖고 있다가, 그 땅이 꼭 필요한 기업에게 구획을 나눠 파는 것과 비슷하다. 유틸리티 회사들은 이 전파를 사서 정전이나 재해 상황에서도 끊기지 않는 자체 사설 무선 통신망(스마트그리드 통신망)을 구축하는 데 쓴다. 주요 고객은 노스웨스턴에너지, CPS에너지, 텍사스-뉴멕시코파워 같은 대형 지역 유틸리티 회사들이다. 최근에는 900MHz 대역이 희소해지면서(스페이스X의 에코스타 스펙트럼 인수 등으로 업계 전반의 스펙트럼 가치가 재조명됨) 라이선스 판매·교환 계약이 이어지고 있고, 부채 없이 현금을 쌓으면서 최근 6개월간 주가가 크게 오른 점이 시장의 주목을 받는 이유다.",
        "ticker": "ATEX",
        "lead": "안테릭스는 900MHz 대역 전파 사용권을 유틸리티 회사에 팔거나 교환해 수익을 내는 스펙트럼 라이선스 회사다. 4월 6일 자회사 PDV Spectrum Holding이 노스웨스턴에너지에 900MHz 광대역 라이선스를 판매했다. 이후 B. Riley증권이 목표주가를 44달러에서 69달러로 올렸고, 8월 13일에는 900MHz 스펙트럼의 희소성이 유틸리티 계약과 위성 사업 기회를 더 키울 것이라는 분석 기사도 나왔다. 다만 같은 시기 실적은 컨센서스 매출 전망치를 소폭 밑돌았고 최근 1개월 주가는 조정을 받는 모습이다.",
        "whyRose": [
          {
            "id": "wr1",
            "statement": "4월 6일 안테릭스 자회사 PDV Spectrum Holding이 노스웨스턴에너지(NorthWestern Energy)에 900MHz 광대역 스펙트럼 라이선스를 판매했다(몬태나·사우스다코타·와이오밍 일부 지역 대상, 9개 카운티는 6MHz·나머지는 10MHz 광대역 구성으로 10MHz 구성의 첫 배치).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Anterix Sells 900 MHz Licenses to NorthWestern Energy",
                "publisher": "TipRanks",
                "url": "https://www.tipranks.com/news/company-announcements/anterix-sells-900-mhz-licenses-to-northwestern-energy",
                "date": "2026-04-06",
                "quote": "Anterix Sells 900 MHz Licenses to NorthWestern Energy",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr3",
            "statement": "B. Riley증권이 6월 안테릭스 목표주가를 44달러에서 69달러로 올리고 매수(Buy) 의견을 재확인했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Anterix ATEX Surges As Spectrum Gains Power Earnings Beat",
                "publisher": "Timothy Sykes",
                "url": "https://www.timothysykes.com/news/anterixinc-atex-news-2026_06_28/",
                "date": "2026-06-28",
                "quote": "B. Riley raised its price target on Anterix to $69 from $44 and reiterated a Buy rating",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr5",
            "statement": "8월 13일 보도에 따르면 900MHz 스펙트럼의 현재 시장 가격은 MHz-pops당 약 0.60달러인데, 과거 Auction 113 평균 거래가는 MHz-pops당 약 2.50달러로 4배 이상 차이가 나, 스펙트럼 희소성에 따른 유틸리티 계약·위성 사업 기회 확대가 부각됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Anterix Sees Scarce 900 MHz Spectrum Driving Utility Deals and Satellite Upside",
                "publisher": "Yahoo Finance (MarketBeat)",
                "url": "https://finance.yahoo.com/technology/articles/anterix-sees-scarce-900-mhz-170437771.html",
                "date": "2026-08-13",
                "quote": "$0.60/MHz-pops ... Auction 113 ... $2.50/MHz-pops",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr6",
            "statement": "5월 29일 보도에 따르면 기관투자자 Plustick Management가 5월 15일 안테릭스 주식 49만9,596주(약 1,581만 달러 상당)를 매수한 것으로 공개됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Anterix Stock Is Up 140%. Here's Why One Investor Just Bought $15.8 Million",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/coverage/filings/2026/05/29/anterix-stock-is-up-140-here-s-why-one-investor-just-bought-usd15-8-million/",
                "date": "2026-05-29",
                "quote": "Anterix Stock Is Up 140%. Here's Why One Investor Just Bought $15.8 Million",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "cp1",
            "statement": "8월 12일경 보도에 따르면 안테릭스 주가(88.68달러)가 공정가치 추정치(86.00달러) 대비 약 3.1% 프리미엄에 거래되고 있었고, 같은 자료 기준 최근 1개월 수익률은 -13%로 조정을 받았다(90일 수익률은 +47.8%).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Anterix (ATEX) Faces A 3% Premium Following First Quarter 2026 Results",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/anterix-atex-faces-3-premium-051135833.html",
                "date": "2026-08-12",
                "quote": "$88.68 ... Fair Value $86.00 ... 1 Month -13%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp2",
            "statement": "8월 11일 Zacks 보도 제목대로, 안테릭스는 2027회계연도 1분기 실적에서 손실을 기록했고 매출은 컨센서스 전망치를 밑돈 것으로 보도됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Anterix (ATEX) Reports Q1 Loss, Misses Revenue Estimates",
                "publisher": "Zacks",
                "url": "https://www.nasdaq.com/articles/anterix-atex-reports-q1-loss-misses-revenue-estimates",
                "date": "2026-08-11",
                "quote": "Anterix (ATEX) Reports Q1 Loss, Misses Revenue Estimates",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp5",
            "statement": "2025년 10~12월 분기(2025-12-31 마감)에는 매출 157만3,000달러에 순손실 660만1,000달러(영업이익률 -576%)를 기록해, 분기별 실적 변동성이 매우 크다는 점도 유의해야 한다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Anterix Inc — SEC 10-Q 재무데이터(Node 수집)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001304492&type=10-Q",
                "date": "2025-12-31",
                "quote": "revenue: 1573000, profit: -9061000, netIncome: -6601000, margin: -576 (periodEnd 2025-12-31)",
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
              "id": "er1",
              "statement": "B. Riley증권이 2026년 6월 안테릭스 목표주가를 44달러에서 69달러로 상향 조정했다(매수 의견 유지). 다만 국내 증권사 리포트나 다른 대형 IB의 추정치 상향/하향에 대한 별도 근거는 확인하지 못했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Anterix ATEX Surges As Spectrum Gains Power Earnings Beat",
                  "publisher": "Timothy Sykes",
                  "url": "https://www.timothysykes.com/news/anterixinc-atex-news-2026_06_28/",
                  "date": "2026-06-28",
                  "quote": "B. Riley raised its price target on Anterix to $69 from $44 and reiterated a Buy rating",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "주파수 스펙트럼",
          "유틸리티 사설 무선망",
          "스마트그리드"
        ],
        "confidence": "medium",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "wr2",
            "wr4",
            "cp3"
          ],
          "reasons": [
            "whyRose wr2: 연간 계약 수익금 1억2,700만 달러, 목표 8,000만 달러, 현금 9,850만 달러 등 구체적 수치가 출처 quote에 없음 (제목만 있음)",
            "whyRose wr4: 매출액(196만, 142만 달러), 순이익(24만 달러), '흑자 전환' 정보가 출처에 없으며, 기사 제목 'Reports Narrower-Than-Expected Q1 Loss'와 모순",
            "counterpoint cp3: 주당순이익 구체적 수치(전년 1.35달러, 이번 1센트)가 quote에 없음"
          ],
          "leadFixed": true
        },
        "leadOriginal": "안테릭스(ATEX)는 900MHz 대역 전파 사용권을 유틸리티 회사에 팔거나 교환해 수익을 내는 스펙트럼 라이선스 회사다. 4월 6일 자회사 PDV Spectrum Holding이 노스웨스턴에너지에 900MHz 광대역 라이선스를 판매했고, 6월 10일 발표한 2026회계연도 4분기·연간 실적에서는 연간 계약 수익금이 1억2,700만 달러로 애초 목표(8,000만 달러)를 크게 웃돌았으며 부채 없이 현금 9,850만 달러를 쌓았다고 밝혔다. 이후 B. Riley증권이 목표주가를 44달러에서 69달러로 올렸고, 8월 11일 발표한 2027회계연도 1분기 매출은 196만 달러로 전년(142만 달러) 대비 38.1% 늘었다. 8월 13일에는 900MHz 스펙트럼의 희소성이 유틸리티 계약과 위성 사업 기회를 더 키울 것이라는 분석 기사도 나왔다. 다만 같은 시기 실적은 컨센서스 매출 전망치를 소폭 밑돌았고 최근 1개월 주가는 조정을 받는 모습이다."
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "가이드와이어 소프트웨어(Guidewire Software)는 손해보험(자동차·주택·기업보험 등 P&C 보험) 회사들이 쓰는 핵심 업무용 소프트웨어를 만드는 회사다. 보험 계약을 관리하는 '폴리시센터(PolicyCenter)', 보험금 청구를 처리하는 '클레임센터(ClaimCenter)', 보험료를 걷고 청구하는 '빌링센터(BillingCenter)' 같은 프로그램을 클라우드 구독 형태로 빌려주고 매달·매년 이용료를 받아 돈을 번다. 주 고객은 전 세계 손해보험사들이며, 낡은 사내 전산 시스템을 클라우드로 옮기고 보험 업무에 인공지능(AI)을 접목하려는 수요가 커지면서 최근 주목받고 있다. 2026회계연도 3분기(2026년 4월 말 마감) 기준 매출의 상당 부분이 매달 반복적으로 들어오는 구독형 매출(subscription and support, 2억4,470만 달러, 전년비 35%↑)에서 나오고 있어, 실적이 갈수록 안정적이고 예측 가능해지는 점도 투자자들이 좋아하는 지점이다.",
        "lead": "가이드와이어는 손해보험사에 계약·청구·수납을 처리하는 핵심 업무 소프트웨어를 구독 형태로 제공하는 회사로, 최근 클라우드 전환과 AI 도입 수요에 힘입어 주가가 강하게 올랐다. 6월 4일 발표한 2026회계연도 3분기(2026년 4월 말 마감) 매출은 3억7,254만 달러로 전년 대비 27% 늘었고, 연간반복매출(ARR)도 11억4,700만 달러로 19% 성장했다. 이 실적을 발판으로 8월 한 달 동안 스티펠·오펜하이머·구겐하임·베어드 등 여러 증권사가 목표주가를 잇달아 올렸고, 9월 3일로 예정된 2026회계연도 4분기 실적 발표를 앞두고 시장의 기대감도 커지는 분위기다. 다만 같은 기간 최고경영자를 포함한 내부자들의 매도가 한쪽으로 쏠려 있었고, 구독 매출과 달리 라이선스 매출과 순이익은 오히려 줄어든 부분도 함께 살펴볼 필요가 있다.",
        "ticker": "GWRE",
        "whyRose": [
          {
            "id": "w1",
            "statement": "6월 4일 발표된 2026회계연도 3분기(4월 말 마감) 매출이 3억7,254만 달러로 전년 대비 27% 증가했고, 연간반복매출(ARR)도 11억4,700만 달러로 19% 늘었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Guidewire Announces Third Quarter Fiscal Year 2026 Financial Results",
                "publisher": "Guidewire Software (공식 보도자료)",
                "url": "https://www.guidewire.com/about/press-center/press-releases/20260604/guidewire-announces-third-quarter-fiscal-year-2026-financial-results",
                "date": "2026-06-04",
                "quote": "Total revenue for the third quarter of fiscal year 2026 was $372.5 million, an increase of 27%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w3",
            "statement": "스티펠은 8월 11일 보고서에서 지속적인 클라우드 수요와 가이드와이어의 시장 리더십을 목표주가 상향의 근거로 들었고, 보험 업무의 AI·에이전틱 기능에 대한 관심 확대도 함께 언급했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Stifel raises Guidewire stock price target to $225 on cloud demand",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/analyst-ratings/stifel-raises-guidewire-stock-price-target-to-225-on-cloud-demand-93CH-4852203",
                "date": "2026-08-11",
                "quote": "core system consolidation and support of additional insurance lines",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "w4",
            "statement": "6월 4일 실적 발표에서 최고경영자(CEO) 마이크 로젠바움은 보험사들이 핵심 시스템을 클라우드로 옮기고 각종 애플리케이션에 AI를 도입하고 있다고 설명해, 클라우드·AI 전환이 성장 동력으로 부각됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Guidewire Announces Third Quarter Fiscal Year 2026 Financial Results",
                "publisher": "Guidewire Software (공식 보도자료)",
                "url": "https://www.guidewire.com/about/press-center/press-releases/20260604/guidewire-announces-third-quarter-fiscal-year-2026-financial-results",
                "date": "2026-06-04",
                "quote": "migrating critical business functions to our cloud platform solutions, and adopting AI across our applications.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w5",
            "statement": "9월 3일 4분기 실적 발표를 앞두고 8월 27일 Zacks가 '월가는 이익 성장을 기대하고 있다'고 보도하는 등, 실적 발표를 앞둔 기대감이 최근 주가 상승에 반영됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Guidewire Software (GWRE) Reports Next Week: Wall Street Expects Earnings Growth",
                "publisher": "Zacks (Nasdaq)",
                "url": "https://www.nasdaq.com/articles/guidewire-software-gwre-reports-next-week-wall-street-expects-earnings-growth",
                "date": "2026-08-27",
                "quote": "Guidewire Software (GWRE) Reports Next Week: Wall Street Expects Earnings Growth",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c1",
            "statement": "내부자 매도가 한쪽으로 쏠려 있다. 최고경영자(CEO) 마이클 로젠바움은 최근 1년간 11만3,099주를 매도한 반면 매수는 0주였고, 회사 전체로도 같은 기간 매도 86건에 매수는 0건이었다. 8월 24일에는 로젠바움이 1,200주를 주당 187.82달러에 팔아 약 22만5,384달러를 현금화했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Guidewire Software (GWRE) CEO Michael Rosenbaum Sells 1,200 Shares",
                "publisher": "GuruFocus",
                "url": "https://www.gurufocus.com/news/9050724/guidewire-software-gwre-ceo-michael-rosenbaum-sells-1200-shares",
                "date": "2026-08-24",
                "quote": "has sold 113,099 shares in total and purchased 0 shares in total during this period",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c2",
            "statement": "구독형 매출은 크게 늘었지만 라이선스 매출은 오히려 줄었다. 2026회계연도 3분기 라이선스 매출은 5,600만 달러로 전년 대비 2% 감소했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Guidewire Announces Third Quarter Fiscal Year 2026 Financial Results",
                "publisher": "Guidewire Software (공식 보도자료)",
                "url": "https://www.guidewire.com/about/press-center/press-releases/20260604/guidewire-announces-third-quarter-fiscal-year-2026-financial-results",
                "date": "2026-06-04",
                "quote": "license revenue was $56.0 million, a decrease of 2%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c3",
            "statement": "영업이익은 크게 늘었지만 순이익은 오히려 줄었다. SEC 제출 자료 기준 2026년 4월 말 마감 분기 순이익은 1,647만 달러로 전년동기 대비 64.2% 감소했다(같은 분기 영업이익은 전년동기 대비 585.7% 증가했음에도 순이익은 줄어든 것으로, 세금·비영업 손익 등 다른 요인이 작용했을 가능성이 있다).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "SEC EDGAR 10-Q 재무제표 (XBRL, RevenueFromContractWithCustomerExcludingAssessedTax / OperatingIncomeLoss / ProfitLoss 태그)",
                "publisher": "U.S. SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001528396&type=10-Q",
                "date": "2026-04-30",
                "quote": "periodEnd 2026-04-30: revenue 372,541,000 / profit(영업이익) 30,637,000 / netIncome(순이익) 16,471,000 / yoy netIncome -64.2 / yoy profit 585.7",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "estimateRevisions": {
          "direction": "raised",
          "claims": []
        },
        "themeTags": [
          "보험 소프트웨어(인슈어테크)",
          "클라우드 전환",
          "기업용 AI 도입"
        ],
        "upcomingCatalyst": {
          "what": "2026회계연도 4분기 및 연간(2026년 7월 말 마감) 실적 발표 — 장 마감 후 실적 공개, 오후 2시(태평양시간)/오후 5시(동부시간) 컨퍼런스콜",
          "date": "2026-09-03",
          "sources": [
            {
              "title": "GUIDEWIRE TO ANNOUNCE FOURTH QUARTER & FISCAL YEAR 2026 FINANCIAL RESULTS ON SEPTEMBER 3, 2026",
              "publisher": "PR Newswire (Morningstar 게재)",
              "url": "https://www.morningstar.com/news/pr-newswire/20260820la30877/guidewire-to-announce-fourth-quarter-fiscal-year-2026-financial-results-on-september-3-2026",
              "date": "2026-08-20",
              "quote": "GUIDEWIRE TO ANNOUNCE FOURTH QUARTER & FISCAL YEAR 2026 FINANCIAL RESULTS ON SEPTEMBER 3, 2026",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "high",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "w2",
            "e1",
            "e2"
          ],
          "reasons": [
            "whyRose w2: 4개 증권사 중 구겐하임(180→210달러)과 베어드(202→235달러)의 구체적 목표주가 변경액이 어떤 출처에도 없음",
            "estimateRevisions e1: w2와 동일 문제",
            "estimateRevisions e2: 구겐하임의 구체적 목표주가 변경액(180→210)이 출처 제목이나 quote에 없음"
          ]
        }
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "JFrog(제이프로그)는 소프트웨어 개발자가 만든 프로그램 결과물(설치 파일, 컨테이너 이미지 같은 '바이너리')을 안전하게 저장·관리하고, 그 안에 보안 취약점은 없는지 점검해 주는 '소프트웨어 공급망' 관리 플랫폼 회사다. 대표 제품인 Artifactory(범용 저장소 관리 도구)와 Xray(보안 취약점 스캔 도구)를 묶은 JFrog 플랫폼을 기업 고객에게 매달 또는 매년 구독료를 받고 빌려주는 방식(SaaS)으로 돈을 번다. 주 고객은 자체적으로 소프트웨어를 개발·배포하는 대기업 IT·개발조직이며, 이들이 코드를 빌드해서 서비스에 올리는 전 과정(CI/CD 파이프라인)에서 이 플랫폼을 쓴다. 최근에는 클라우드 구독 매출 비중이 빠르게 커지고 있고(2026년 2분기 클라우드 매출이 전체의 53%), AI가 코드를 대신 짜주는 시대가 되면서 AI가 만들어낸 소프트웨어를 안전하게 저장·검증하려는 수요가 늘어 'AI 코딩 붐의 수혜주'로 시장의 주목을 받고 있다.",
        "ticker": "FROG",
        "lead": "JFrog(FROG)는 소프트웨어 개발 산출물을 저장·관리하고 보안 취약점을 점검해주는 '소프트웨어 공급망' 플랫폼 기업으로, 대표 제품 Artifactory와 보안 도구 Xray를 기업 고객에게 구독 형태로 판매한다. 8월 6일 발표한 2분기(4~6월) 매출이 1억6,377만 달러로 전년 대비 28.7% 늘며 월가 예상치(1억5,549만 달러)를 5.34% 웃돌았고, 조정 주당순이익도 0.27달러로 예상치 0.24달러를 12.5% 상회하면서 발표 당일 시간외 거래에서 주가가 15.96% 급등했다. 특히 클라우드 매출이 8,750만 달러로 전년 대비 53% 급증해 전체 매출의 53%(1년 전 45%)를 차지했고, 고객이 매년 지출을 얼마나 늘리는지 보여주는 지표인 순매출유지율(NDR)도 121%를 기록했다. 이를 근거로 회사는 2026 회계연도 매출 전망을 6억4,800만~6억5,200만 달러로 상향했고, 모건스탠리를 비롯한 여러 증권사가 목표주가를 잇달아 올렸다.",
        "whyRose": [
          {
            "id": "wr1",
            "statement": "8월 6일 발표한 2026년 2분기(4~6월) 매출이 1억6,377만 달러로 전년동기 대비 28.7% 늘며 월가 예상치(1억5,549만 달러)를 5.34% 웃돌았고, 조정 주당순이익도 0.27달러로 예상치 0.24달러를 12.5% 상회하면서 발표 당일 시간외 거래에서 주가가 15.96% 급등해 96.29달러를 기록했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Earnings call transcript: JFrog Q2 2026 beats estimates, shares jump 16%",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-jfrog-q2-2026-beats-estimates-shares-jump-16-93CH-4844703",
                "date": "2026-08-06",
                "quote": "JFrog posted adjusted earnings of $0.27 a share, beating the $0.24 consensus estimate by $0.03, or 12.5%. Revenue came in at $163.8 million, above the $155.49 million forecast by $8.31 million, or 5.34%. Shares jumped 15.96% in after-hours trading to $96.29, from a regular-session close of $83.04.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "wr2",
            "statement": "2분기 클라우드 매출이 8,750만 달러로 전년동기 대비 53% 급증하며 전체 매출의 53%(1년 전 45%)를 차지했고, 최근 4개 분기 기준 순매출유지율(NDR, 기존 고객의 지출 증가율을 나타내는 지표)이 121%에 달해 클라우드 구독 전환이 성장을 이끌고 있음을 보여줬다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "JFrog Q2 Earnings Beat Estimates on Cloud and Security Growth",
                "publisher": "Zacks (via TradingView)",
                "url": "https://www.tradingview.com/news/zacks:0fe621932094b:0-jfrog-q2-earnings-beat-estimates-on-cloud-and-security-growth/",
                "date": "2026-08-11",
                "quote": "Cloud revenues rose 53% year over year to $87.5 million, while trailing four-quarter net dollar retention reached 121%. Cloud represented 53% of total revenues in the quarter, up from 45% a year earlier.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "wr3",
            "statement": "실적 발표와 함께 회사는 2026 회계연도 매출 전망을 6억4,800만~6억5,200만 달러(직전 전망 대비 상향)로, 비-GAAP 희석 주당순이익 전망을 0.96~1.00달러로 올려 잡았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "JFrog Q2 2026 slides: cloud surge drives beat, security gains traction",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/company-news/jfrog-q2-2026-slides-cloud-surge-drives-beat-security-gains-traction-93CH-4844861",
                "date": "2026-08-06",
                "quote": "The company now expects revenue of $648 million to $652 million, up from its prior outlook, and non-GAAP diluted earnings per share of $0.96 to $1.00.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "wr4",
            "statement": "실적 서프라이즈 이후 모건스탠리(Morgan Stanley)가 8월 7일 목표주가를 95달러에서 100달러로 올리며 클라우드 가속화, 보안 기능 부착률, 잔여계약금액(RPO)의 견고함, 121%의 순매출유지율 등 '펀더멘털이 옳은 방향으로 움직이고 있다'고 평가했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Morgan Stanley raises JFrog stock price target to $100 on cloud growth",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/analyst-ratings/morgan-stanley-raises-jfrog-stock-price-target-to-100-on-cloud-growth-93CH-4846018",
                "date": "2026-08-07",
                "quote": "Morgan Stanley raised its price target on JFrog Ltd. (NASDAQ:FROG) to $100 from $95. Morgan Stanley noted that fundamentals are moving in the right direction, including cloud acceleration, security attach, RPO durability, and net dollar retention at 121%.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "wr5",
            "statement": "회사 스스로도 실적 발표 전후 'AI 소프트웨어 붐과 클라우드 수요, 보안 채택 확대가 성장을 이끌고 있다'고 밝히며, AI가 만들어내는 코드를 안전하게 저장·검증하려는 수요 확대를 성장 스토리로 강조했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "JFrog Says AI Software Boom, Cloud Demand and Security Adoption Are Fueling Growth",
                "publisher": "MarketBeat (via Nasdaq)",
                "url": "https://www.nasdaq.com/articles/jfrog-says-ai-software-boom-cloud-demand-and-security-adoption-are-fueling-growth",
                "date": "2026-08-14",
                "quote": "JFrog Says AI Software Boom, Cloud Demand and Security Adoption Are Fueling Growth",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "cp1",
            "statement": "목표주가를 올린 모건스탠리조차 투자의견은 '중립(Equalweight)'을 유지했는데, 주가가 3월 이후 100% 넘게 재평가돼 긍정적 요인들이 이미 상당 부분 주가에 반영됐다고 지적했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Morgan Stanley raises JFrog stock price target to $100 on cloud growth",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/analyst-ratings/morgan-stanley-raises-jfrog-stock-price-target-to-100-on-cloud-growth-93CH-4846018",
                "date": "2026-08-07",
                "quote": "The stock has re-rated more than 100% since March, which Morgan Stanley said has priced in much of the positive developments.",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "cp2",
            "statement": "매출 대비 주가 배수(P/S, 매출 1달러당 주가가 몇 배인지 보여주는 밸류에이션 지표)가 약 17.9배로 소프트웨어 업종 평균 3.7배, 동종업계 평균 5.4배를 크게 웃돌아, 모형상 적정하다고 추정되는 7.4배 대비도 고평가 상태라는 분석이 나왔다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "JFrog (FROG) Stock Seems Fair On Cash Flow But Pricey On Sales",
                "publisher": "Simply Wall St (via Yahoo Finance)",
                "url": "https://finance.yahoo.com/markets/stocks/articles/jfrog-frog-stock-seems-fair-071203104.html",
                "date": "2026-08",
                "quote": "On this measure, JFrog trades on a P/S of about 17.9x, compared with an industry average of roughly 3.7x and a peer group average of about 5.4x in the Software space. The modelled fair P/S ratio for JFrog is about 7.4x.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp3",
            "statement": "8월 13일 공동창업자 겸 최고기술책임자(CTO) 요아브 랜드먼(Yoav Landman)이 보유주식 45,000주(주당 90.86달러, 약 410만 달러 상당)를 매도했다. 사전에 정해둔 매매계획(10b5-1 플랜)에 따른 것이고 매도 후에도 540만 주 넘게 보유하고 있어, 기사는 '투자자가 우려할 사안은 아니다'라고 평가했지만 경영진의 반복적인 지분 매도는 참고할 부분이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "JFrog Co-Founder Sells 45,000 Shares Worth $4.1 Million. Here's What That Means for Investors.",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/coverage/filings/2026/08/18/jfrog-co-founder-sells-45-000-shares-worth-usd4-1-million-here-s-what-that-means-for-investors/",
                "date": "2026-08-18",
                "quote": "Co-founder and Chief Technology Officer Yoav Landman sold 45,000 ordinary shares... $90.86... ~$4.1 million... his disposition was a non-discretionary transaction conducted under a Rule 10b5-1 trading plan... suggests the sale is not a cause for investor concern.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "cp4",
            "statement": "매출은 크게 늘었지만 2분기 영업손실이 1,325만 달러(영업이익률 -8.1%), 순손실이 417만 달러로 여전히 적자 상태다. 다만 영업손실 규모는 전년동기 대비 49%, 순손실은 80.8% 줄어드는 개선 추세를 보였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "JFrog Ltd 10-Q 재무제표 (SEC EDGAR)",
                "publisher": "SEC EDGAR",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001800667&type=10-Q",
                "date": "2026-06-30",
                "quote": "periodEnd 2026-06-30: revenue 163,772,000 / profit(영업이익) -13,249,000 / margin -8.1% / netIncome -4,165,000; yoy: revenue +28.7%, profit +49%, netIncome +80.8%",
                "verified": "unverified",
                "httpStatus": 0
              }
            ]
          }
        ],
        "estimateRevisions": {
          "direction": "raised",
          "claims": [
            {
              "id": "er1",
              "statement": "JFrog는 8월 6일 2분기 실적 발표와 함께 2026 회계연도 매출 전망을 6억4,800만~6억5,200만 달러로, 비-GAAP 희석 주당순이익 전망을 0.96~1.00달러로 상향 조정했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "JFrog Q2 2026 slides: cloud surge drives beat, security gains traction",
                  "publisher": "Investing.com",
                  "url": "https://www.investing.com/news/company-news/jfrog-q2-2026-slides-cloud-surge-drives-beat-security-gains-traction-93CH-4844861",
                  "date": "2026-08-06",
                  "quote": "The company now expects revenue of $648 million to $652 million, up from its prior outlook, and non-GAAP diluted earnings per share of $0.96 to $1.00.",
                  "verified": "unverified",
                  "httpStatus": 403
                }
              ]
            },
            {
              "id": "er2",
              "statement": "실적 발표 이후 모건스탠리가 8월 7일 목표주가를 95달러에서 100달러로 올리는 등, 회사 가이던스 상향에 맞춰 증권사들이 목표주가를 상향 조정하는 흐름이 나타났다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Morgan Stanley raises JFrog stock price target to $100 on cloud growth",
                  "publisher": "Investing.com",
                  "url": "https://www.investing.com/news/analyst-ratings/morgan-stanley-raises-jfrog-stock-price-target-to-100-on-cloud-growth-93CH-4846018",
                  "date": "2026-08-07",
                  "quote": "Morgan Stanley raised its price target on JFrog Ltd. (NASDAQ:FROG) to $100 from $95.",
                  "verified": "unverified",
                  "httpStatus": 403
                }
              ]
            }
          ]
        },
        "themeTags": [
          "AI 코딩/소프트웨어 공급망 보안",
          "DevOps·클라우드 플랫폼 전환",
          "보안(시큐리티) 소프트웨어"
        ],
        "upcomingCatalyst": {
          "what": "",
          "date": "",
          "sources": []
        },
        "confidence": "high",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reasons": []
        }
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
        "status": "done",
        "company": "메사 래브러토리스(Mesa Laboratories, MLAB)는 병원·제약회사·산업 현장에서 쓰는 품질관리·계측 장비를 만들어 파는 회사다. 크게 네 가지 사업부로 나뉘는데, 살균·소독 제어(SDC, Sterilization & Disinfection Controls)는 병원 등에서 멸균기가 제대로 작동하는지 확인하는 생물학적·화학적 지표 제품을, 계측 솔루션(Calibration Solutions)은 각종 산업 장비의 정확도를 교정하는 서비스를, 바이오의약품 개발(BPD, Biopharmaceutical Development)은 제약사가 신약 개발 중 단백질 상호작용을 분석하는 자동면역분석장비 '자이로랩(Gyrolab)' 등을, 임상 유전체(Clinical Genomics) 부문은 유전자 진단 관련 제품을 판매한다. 주 고객은 병원, 의료기기 제조사, 제약·바이오텍 기업, 산업용 품질관리가 필요한 회사들이다. 시가총액 수천억원대의 니치 소형주로, 최근 신임 CEO 싯다르타 카디아(Siddhartha Kadia) 체제에서 비용 절감과 부채 상환, 마진 개선을 추진하는 '턴어라운드' 스토리로 시장의 주목을 받고 있다.",
        "lead": "메사 래브러토리스(MLAB)는 병원·제약사·산업 현장에서 쓰는 살균·소독 검증 제품과 계측·교정 장비, 바이오의약품 품질관리 장비를 만들어 파는 회사다. 8월10일 발표한 2027회계연도 1분기(2026년 4~6월) 실적에서 조정 주당순이익(EPS)이 2.68달러로 시장 예상치 2.40달러를 11.67% 웃돌았고, 매출총이익률도 64.9%로 전년(62%)보다 약 290bp(1bp=0.01%포인트) 개선됐다. 이 소식에 8월12일 주가가 9.5% 급등했고, 이후 웰스파고(Wells Fargo)가 목표주가를 94달러에서 110달러로 올리는 등 우호적 반응이 이어지며 주가는 8월31일 장중 129.66달러까지 올라 52주 신고가를 다시 썼다. 다만 최근 상승이 신임 CEO 체제 턴어라운드에 대한 기대가 실제 실적 개선으로 이어지는지는 11월로 예정된 연간 가이던스 제시 때 다시 확인해볼 필요가 있다.",
        "whyRose": [
          {
            "id": "w1",
            "statement": "8월10일 발표한 2027회계연도 1분기(2026년 4~6월) 실적에서 조정 주당순이익(EPS)이 2.68달러로 시장 컨센서스 2.40달러를 11.67% 상회했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories Q1 Results: Adj EPS Beats Estimates by 11.67%",
                "publisher": "ScanX",
                "url": "https://scanx.trade/stock-market-news/companies/mesa-laboratories-q1-results-adj-eps-beats-estimates-by-11-67/47946769",
                "date": "2026-08-11",
                "quote": "Mesa Laboratories delivered a strong earnings beat in Q1 with adjusted EPS of $2.68, exceeding estimates by 11.67%.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w2",
            "statement": "같은 분기 매출총이익률이 64.9%로 전년 62%에서 약 290bp(1bp=0.01%포인트) 개선됐고, 조정영업이익(AOI, Adjusted Operating Income)은 전년 대비 늘어난 1,500만 달러를 기록했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories Inc (MLAB) (Q1 2027) Earnings Call Highlights: Margin Expansion and Debt Paydown",
                "publisher": "Yahoo Finance / Motley Fool",
                "url": "https://finance.yahoo.com/markets/stocks/articles/mesa-laboratories-inc-mlab-q1-050412982.html",
                "date": "2026-08-11",
                "quote": "Gross Profit: $39 million, or 64.9% of revenues, up roughly 290 basis points from 62%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w3",
            "statement": "영업활동현금흐름은 1,470만 달러로 전년보다 1,280만 달러 늘었고, 회사는 분기 중 부채 870만 달러를 상환하며 재무구조를 개선했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories Inc (MLAB) (Q1 2027) Earnings Call Highlights: Margin Expansion and Debt Paydown",
                "publisher": "Yahoo Finance / Motley Fool",
                "url": "https://finance.yahoo.com/markets/stocks/articles/mesa-laboratories-inc-mlab-q1-050412982.html",
                "date": "2026-08-11",
                "quote": "Operating Cash Flow: $14.7 million in Q1, a $12.8 million year-over-year increase",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w4",
            "statement": "실적 발표 이틀 뒤인 8월12일 주가가 9.5% 급등해 111달러 부근까지 올랐다. 신임 CEO 체제에서 나온 첫 실적에 시장이 긍정적으로 반응한 결과였다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories (MLAB) Stock Jumps As Margin Gains Meet Backlog Doubts",
                "publisher": "Simply Wall St",
                "url": "https://simplywall.st/stocks/us/pharmaceuticals-biotech/nasdaq-mlab/mesa-laboratories/news/mesa-laboratories-mlab-stock-jumps-as-margin-gains-meet-back",
                "date": "2026-08-12",
                "quote": "Mesa Laboratories stock rose 9.5% to about US$111 after investors got their first clean look at earnings under the new CEO.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w5",
            "statement": "웰스파고(Wells Fargo)는 8월14일 목표주가를 94달러에서 110달러로 상향 조정했다(투자의견은 Equal Weight 유지).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories (NASDAQ:MLAB) Given New $110.00 Price Target at Wells Fargo & Company",
                "publisher": "Daily Political",
                "url": "https://www.dailypolitical.com/2026/08/14/mesa-laboratories-nasdaqmlab-given-new-110-00-price-target-at-wells-fargo-company.html",
                "date": "2026-08-14",
                "quote": "Wells Fargo & Company from $94.00 to $110.00 in a research note issued to investors on Friday",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w6",
            "statement": "이런 흐름 속에 주가는 8월31일 장중 129.66달러까지 오르며 52주 신고가를 새로 썼다(거래량 15만3,074주).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories (NASDAQ:MLAB) Sets New 1-Year High – What's Next?",
                "publisher": "Daily Political",
                "url": "https://www.dailypolitical.com/2026/08/31/mesa-laboratories-nasdaqmlab-sets-new-1-year-high-whats-next.html",
                "date": "2026-08-31",
                "quote": "The stock traded as high as $129.66 and last traded at $127.6650, with a volume of 153074 shares.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c2",
            "statement": "당시 CEO 싯다르타 카디아는 내부 점검이 아직 끝나지 않았다며 2027회계연도 연간 가이던스 제시를 미뤘고, 8월 실적발표에서도 '11월 2분기 실적 때 연간 가이던스를 주겠다'고 재확인했다 — 즉 최근 상승은 회사가 아직 스스로 연간 전망치를 내놓지 않은 상태에서 이뤄지고 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why Mesa Laboratories Stock Is Getting Hit With a Huge Sell-Off Today",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/investing/2026/05/27/why-mesa-laboratories-stock-is-getting-hit-with-a/",
                "date": "2026-05-27",
                "quote": "Mesa president and CEO Siddhartha Kadia is still conducting an internal review of the business and expects to be able to deliver full-year guidance with the company's fiscal Q2 report.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Mesa Laboratories (MLAB) Q1 2027 Earnings Call Transcript",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/earnings/call-transcripts/2026/08/17/mesa-laboratories-mlab-q1-2027-earnings-call-transcript/",
                "date": "2026-08-17",
                "quote": "At our next earnings call in November, alongside first half results, I'll give you a full year guidance.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c3",
            "statement": "조정 실적은 좋았지만 GAAP(일반회계기준) 순이익은 283만 달러로 전년 동기 대비 40.3% 줄었다 — 이익의 '질'을 두고는 여전히 이견이 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "MLAB.json — 노드 확정 재무데이터(SEC 10-Q 기반)",
                "publisher": "SEC EDGAR (Node 수집)",
                "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000724004&type=10-Q",
                "date": "2026-06-30",
                "quote": "periodEnd 2026-06-30, netIncome 2830000, yoy.netIncome -40.3",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c4",
            "statement": "최대 매출 비중을 차지하는 살균·소독 제어(SDC) 사업부는 유기적 매출이 줄었는데, 이는 주문 처리 지연과 고객 불만 탓이라는 지적이 나온다. 미처리 수주잔고(past due backlog)도 분기 중 약 100만 달러 늘었고, 회사는 아직 해소 일정을 구체적으로 제시하지 않았다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories (MLAB) Stock Jumps As Margin Gains Meet Backlog Doubts",
                "publisher": "Simply Wall St",
                "url": "https://simplywall.st/stocks/us/pharmaceuticals-biotech/nasdaq-mlab/mesa-laboratories/news/mesa-laboratories-mlab-stock-jumps-as-margin-gains-meet-back",
                "date": "2026-08-12",
                "quote": "Sterilization & Disinfection Controls, the largest segment, saw an organic revenue decline tied to fulfillment issues and customer frustration.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Mesa Laboratories (MLAB) Q1 2027 Earnings Call Transcript",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/earnings/call-transcripts/2026/08/17/mesa-laboratories-mlab-q1-2027-earnings-call-transcript/",
                "date": "2026-08-17",
                "quote": "SDC past due backlog increased by approximately $1 million during the quarter, which management attributed to internal process variability rather than lack of demand.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c5",
            "statement": "바이오의약품 품질관리용 차세대 '자이로랩(Gyrolab)' 플랫폼 출시는 2028회계연도로 다시 조정됐고, 회사는 이 제품의 매출 기대치를 아직 제시하지 않고 있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Mesa Laboratories (MLAB) Q1 2027 Earnings Call Transcript",
                "publisher": "The Motley Fool",
                "url": "https://www.fool.com/earnings/call-transcripts/2026/08/17/mesa-laboratories-mlab-q1-2027-earnings-call-transcript/",
                "date": "2026-08-17",
                "quote": "We now expect the new Gyrolab platform to launch in fiscal 2028",
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
              "statement": "실적 발표(8월10일) 이후 웰스파고(Wells Fargo)가 목표주가를 94달러에서 110달러로 17% 올렸다. 정식 EPS 컨센서스 상향 발표는 확인되지 않았지만, 목표주가 상향은 실적 개선에 대한 기대 상승을 보여준다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Mesa Laboratories (NASDAQ:MLAB) Given New $110.00 Price Target at Wells Fargo & Company",
                  "publisher": "Daily Political",
                  "url": "https://www.dailypolitical.com/2026/08/14/mesa-laboratories-nasdaqmlab-given-new-110-00-price-target-at-wells-fargo-company.html",
                  "date": "2026-08-14",
                  "quote": "Wells Fargo & Company from $94.00 to $110.00 in a research note issued to investors on Friday",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "themeTags": [
          "생명과학 도구(Life Science Tools)",
          "신임 CEO 턴어라운드",
          "마진 개선(margin expansion)",
          "품질관리·계측 장비"
        ],
        "upcomingCatalyst": {
          "what": "2027회계연도 2분기(상반기) 실적 발표와 함께 CEO가 처음으로 연간(FY2027) 가이던스를 제시할 예정이다.",
          "date": "2026-11(정확한 일자 미정)",
          "sources": [
            {
              "title": "Mesa Laboratories (MLAB) Q1 2027 Earnings Call Transcript",
              "publisher": "The Motley Fool",
              "url": "https://www.fool.com/earnings/call-transcripts/2026/08/17/mesa-laboratories-mlab-q1-2027-earnings-call-transcript/",
              "date": "2026-08-17",
              "quote": "At our next earnings call in November, alongside first half results, I'll give you a full year guidance.",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "confidence": "medium",
        "ticker": "MLAB",
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "c1",
            "c6"
          ],
          "reasons": [
            "c1: Revenue miss of 1.48 million vs consensus not verified in source",
            "c6: 5-year earnings decline rate of 37.2% annually not verified in source"
          ],
          "leadFixed": true
        },
        "leadOriginal": "메사 래브러토리스(MLAB)는 병원·제약사·산업 현장에서 쓰는 살균·소독 검증 제품과 계측·교정 장비, 바이오의약품 품질관리 장비를 만들어 파는 회사다. 8월10일 발표한 2027회계연도 1분기(2026년 4~6월) 실적에서 조정 주당순이익(EPS)이 2.68달러로 시장 예상치 2.40달러를 11.67% 웃돌았고, 매출총이익률도 64.9%로 전년(62%)보다 약 290bp(1bp=0.01%포인트) 개선됐다. 이 소식에 8월12일 주가가 9.5% 급등했고, 이후 웰스파고(Wells Fargo)가 목표주가를 94달러에서 110달러로 올리는 등 우호적 반응이 이어지며 주가는 8월31일 장중 129.66달러까지 올라 52주 신고가를 다시 썼다. 다만 직전 분기인 2026회계연도 4분기 실적 발표(5월27일) 때는 순손실과 매출 부진으로 주가가 하루 만에 19.5% 급락했던 전례가 있어, 최근 상승이 신임 CEO 체제 턴어라운드에 대한 기대가 실제 실적 개선으로 이어지는지는 11월로 예정된 연간 가이던스 제시 때 다시 확인해볼 필요가 있다."
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "status": "done",
        "company": "SMCIP는 AI 서버를 만드는 회사 슈퍼마이크로컴퓨터(Super Micro Computer, 티커 SMCI)가 발행한 '7% 시리즈 A 강제전환우선주'를 1/20씩 쪼갠 예탁증서다. 슈퍼마이크로는 엔비디아 그래픽칩(GPU)을 넣은 AI 서버·랙 시스템을 만들어 데이터센터 운영사와 대형 클라우드 기업에 파는 회사로, 최근 AI 붐을 타고 매출이 폭발적으로 늘고 있다. 이 우선주는 2026년 6월 슈퍼마이크로가 밀려드는 AI 서버 주문에 필요한 부품을 사들이려고 70억 달러 규모로 새로 찍어낸 것으로, 분기(3·6·9·12월)마다 연 7% 배당을 주다가 2029년 6월 1일 보통주로 자동 전환된다. 그래서 채권처럼 고정 배당을 받으면서도 가격은 보통주(SMCI) 주가·실적 발표에 따라 함께 출렁이는 하이브리드 상품이다. 최근 주목받는 이유는 8월 11일 발표한 2026회계연도 4분기 실적에서 이익률이 크게 좋아지고 2027회계연도 매출 전망을 시장 예상보다 훨씬 높게 제시했기 때문이다.",
        "lead": "슈퍼마이크로컴퓨터의 우선주 SMCIP는 2027회계연도 매출 가이던스로 시장 컨센서스(544억 달러)를 크게 웃도는 650억~720억 달러를 제시하면서 강하게 반등했다. 이미 7월 21일 예비 실적 발표에서 매출총이익률을 기존 가이던스(8.2~8.4%)의 거의 두 배인 15~17%로 제시한 것이 선반영되며 주가가 먼저 뛰었다. 8월 16일에는 미국 7월 생산자물가지수(PPI)가 예상보다 둔화되며 금리 인하 기대감이 커진 거시 환경까지 겹쳐 슈퍼마이크로 주가가 하루 만에 11.2% 급등했고, 2029년 보통주 전환이 예정된 SMCIP도 이 랠리에 연동해 함께 올랐다. 다만 급등한 매출총이익률이 앞으로도 유지될 수 있을지에는 의문이 남아 있다.",
        "ticker": "SMCIP",
        "confidence": "medium",
        "themeTags": [
          "AI 인프라",
          "AI 서버",
          "엔비디아 GPU 서버",
          "강제전환우선주"
        ],
        "whyRose": [
          {
            "id": "w2",
            "statement": "슈퍼마이크로는 7월 21일 예비실적 발표에서 매출총이익률을 15~17%로 제시했는데, 이는 기존 가이던스 8.2~8.4%의 거의 두 배 수준이었다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Supermicro Provides Fourth Quarter of Fiscal Year 2026 Preliminary Business Update",
                "publisher": "Supermicro IR",
                "url": "https://ir.supermicro.com/news/news-details/2026/Supermicro-Provides-Fourth-Quarter-of-Fiscal-Year-2026-Preliminary-Business-Update/default.aspx",
                "date": "2026-07-21",
                "quote": "GAAP and non-GAAP gross margins are estimated to be in the range of 15% to 17%",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w3",
            "statement": "슈퍼마이크로는 4분기 한 분기에만 600억 달러가 넘는 신규 수주를 확보했다고 밝혔고, 2027회계연도 매출 가이던스도 650억~720억 달러로 컨센서스(544억 달러)를 크게 웃도는 수준으로 제시했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why Are Super Micro (SMCI) Shares Soaring Today",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/why-super-micro-smci-shares-051700299.html",
                "date": "2026-08-16",
                "quote": "secured over $60 billion in new orders during the quarter",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w4",
            "statement": "8월 16일에는 미국 7월 생산자물가지수(PPI)가 예상보다 둔화되며 금리 인하 기대가 커진 거시 환경까지 겹쳐 슈퍼마이크로 주가가 하루 만에 11.2% 급등했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Why Are Super Micro (SMCI) Shares Soaring Today",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/why-super-micro-smci-shares-051700299.html",
                "date": "2026-08-16",
                "quote": "U.S. Producer Price Index (PPI) cooled more than expected in July",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w5",
            "statement": "실적 발표 이후 Rosenblatt(목표주가 51달러), Raymond James(48달러) 등 여러 증권사가 마진 개선을 근거로 목표주가를 상향 조정했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Super Micro Computer (SMCI) Stock Gets Fair Value Boost After Analysts Lift Targets",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/super-micro-computer-smci-stock-020918009.html",
                "date": "2026-08-15",
                "quote": "margin driven earnings beat, strong customer and product mix, and large disclosed orders",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "w6",
            "statement": "SMCIP 자체도 7월 22일까지 저점(약 42~43달러) 대비 16.57% 반등했으며, AI 서버 수요에 대한 낙관론이 강해진 점이 상승 배경으로 지목됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "SMCIP Stock Grinds Higher As Bulls Defend New Range",
                "publisher": "Timothy Sykes",
                "url": "https://timothysykes.com/news/super-micro-computer-inc-depositary-shares-each-representing-a-1-20th-interest-in-a-share-of-7-series-a-mandatory-convertible-preferred-stock-smcip-news-2026_07_22-3/",
                "date": "2026-07-22",
                "quote": "AI server demand optimism strengthened",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "counterpoint": [
          {
            "id": "c1",
            "statement": "2026년 3월 19일 슈퍼마이크로 공동창업자 등 3명이 규제 대상 엔비디아 AI 칩을 중국에 밀반출한 혐의로 기소된 사실이 공개되며 주가가 하루 만에 33% 폭락한 전례가 있어, 관련 소송·평판 리스크는 여전히 남아있다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Super Micro shares tank 33% after employees charged with smuggling Nvidia chips to China",
                "publisher": "CNBC",
                "url": "https://www.cnbc.com/2026/03/19/us-tech-execs-smuggled-nvidia-chips-to-china-prosecutors-say.html",
                "date": "2026-03-19",
                "quote": "Super Micro shares plunged 33% on Friday following the public disclosure of the indictment.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c2",
            "statement": "실제 4분기 매출은 가이던스(110억~125억 달러) 하단에 가까운 수준에 그쳐, 이번 상승은 매출 자체보다 마진 개선과 미래 가이던스에 기댄 것이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Supermicro Provides Fourth Quarter of Fiscal Year 2026 Preliminary Business Update",
                "publisher": "Supermicro IR",
                "url": "https://ir.supermicro.com/news/news-details/2026/Supermicro-Provides-Fourth-Quarter-of-Fiscal-Year-2026-Preliminary-Business-Update/default.aspx",
                "date": "2026-07-21",
                "quote": "Revenues for the fourth quarter of fiscal year 2026 are estimated to be near the low end of our guidance of $11.0 billion to $12.5 billion.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c3",
            "statement": "8월 15일경 Netlist가 슈퍼마이크로 등을 상대로 DDR5 메모리 모듈 특허 침해를 이유로 미국 국제무역위원회(ITC)에 제소해 조사 개시와 수입금지 명령을 요청했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Super Micro Computer (SMCI) Named In Netlist DDR5 ITC Complaint",
                "publisher": "Yahoo Finance",
                "url": "https://finance.yahoo.com/markets/stocks/articles/super-micro-computer-smci-hit-031846891.html",
                "date": "2026-08-15",
                "quote": "Super Micro Computer (SMCI) Named In Netlist DDR5 ITC Complaint",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c4",
            "statement": "2026년 6월 슈퍼마이크로는 부품 확보 자금을 마련하려고 보통주 4,545만4,545주를 주당 27.50달러에 새로 발행하는 등 70억 달러 규모 증자를 단행해 기존 보통주 지분이 희석됐다 — SMCIP 자체도 이 증자로 새로 발행된 물량이다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Supermicro Announces Pricing of Equity and Equity-Linked Financing Transactions To Fund AI Orders",
                "publisher": "Supermicro IR",
                "url": "https://ir.supermicro.com/news/news-details/2026/Supermicro-Announces-Pricing-of-Equity-and-Equity-Linked-Financing-Transactions-To-Fund-AI-Orders/default.aspx",
                "date": "2026-06-11",
                "quote": "45,454,545 shares of common stock at a public offering price of $27.50 per share",
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
              "statement": "Rosenblatt은 목표주가를 51달러로, Raymond James는 48달러로 올렸다 — 마진 주도 실적 서프라이즈와 대규모 수주를 근거로 들었다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Super Micro Computer (SMCI) Stock Gets Fair Value Boost After Analysts Lift Targets",
                  "publisher": "Yahoo Finance",
                  "url": "https://finance.yahoo.com/markets/stocks/articles/super-micro-computer-smci-stock-020918009.html",
                  "date": "2026-08-15",
                  "quote": "margin driven earnings beat, strong customer and product mix, and large disclosed orders",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            },
            {
              "id": "e2",
              "statement": "Bernstein·Barclays·Citi도 목표주가를 30달러대 후반~40달러대로 상향하며 예상을 웃돈 매출총이익률과 향후 전망에 주목했다.",
              "evidence_level": "sourced",
              "sources": [
                {
                  "title": "Super Micro Computer (SMCI) Stock Gets Fair Value Boost After Analysts Lift Targets",
                  "publisher": "Yahoo Finance",
                  "url": "https://finance.yahoo.com/markets/stocks/articles/super-micro-computer-smci-stock-020918009.html",
                  "date": "2026-08-15",
                  "quote": "better than expected gross margins and an outlook that investors appear to be focusing on",
                  "verified": "ok",
                  "httpStatus": 200
                }
              ]
            }
          ]
        },
        "upcomingCatalyst": {
          "what": "이사회가 승인할 경우 지급되는 SMCIP의 다음 분기 배당(연 7%, 3·6·9·12월 1일 지급 예정)",
          "date": "2026-12-01",
          "sources": [
            {
              "title": "Super Micro Computer Inc. 7% Series A Preferred (SMCIP) Live Share Price",
              "publisher": "INDmoney",
              "url": "https://www.indmoney.com/us-stocks/super-micro-computer-inc-depositary-shares-representing-a-120th-interest-in-a-share-of-7-series-a-mandatory-convertible-preferred-stock-share-price-smcip",
              "date": "",
              "quote": "Dividends are payable when declared by the board of directors on March 1, June 1, September 1, and December 1 of each year, beginning September 1, 2026, through June 1, 2029.",
              "verified": "ok",
              "httpStatus": 200
            }
          ]
        },
        "factcheck": {
          "verdict": "partial",
          "removed": [
            "w1"
          ],
          "reasons": [
            "w1: Q4 revenue figure of 111억9,777만 달러 does not match source data of 11119777000 (digit order mismatch)"
          ],
          "leadFixed": true
        },
        "leadOriginal": "슈퍼마이크로컴퓨터의 우선주 SMCIP는 8월 11일 발표된 2026회계연도 4분기 실적에서 매출 111억9,777만 달러(전년 동기 대비 93.2% 증가), 영업이익률 13.4%(직전 분기 6.1%에서 개선)를 기록하고, 2027회계연도 매출 가이던스로 시장 컨센서스(544억 달러)를 크게 웃도는 650억~720억 달러를 제시하면서 강하게 반등했다. 이미 7월 21일 예비 실적 발표에서 매출총이익률을 기존 가이던스(8.2~8.4%)의 거의 두 배인 15~17%로 제시한 것이 선반영되며 주가가 먼저 뛰었다. 8월 16일에는 미국 7월 생산자물가지수(PPI)가 예상보다 둔화되며 금리 인하 기대감이 커진 거시 환경까지 겹쳐 슈퍼마이크로 주가가 하루 만에 11.2% 급등했고, 2029년 보통주 전환이 예정된 SMCIP도 이 랠리에 연동해 함께 올랐다. 다만 4분기 매출 자체는 가이던스(110억~125억 달러) 하단에 가까웠고, 급등한 매출총이익률이 앞으로도 유지될 수 있을지에는 의문이 남아 있다."
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
        "note": "아직 조사하지 않았습니다 (순환 조사 대기)"
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
    "total": 41,
    "llm": {
      "leadingTheme": {
        "name": "AI 인프라 지출 사이클 — 데이터센터·서버·메모리 하드웨어",
        "plainKo": "인공지능을 돌리려면 거대한 데이터센터와 그 안을 채울 서버, 메모리, 통신 부품이 필요합니다. 지금 큰 회사들이 여기에 한꺼번에 돈을 쏟아붓고 있어서, 그 돈이 데이터센터를 빌려주는 회사 → 서버를 조립해 파는 회사 → 안에 들어가는 반도체와 저장장치 회사로 차례차례 흘러갑니다. 오늘 오른 기술주 20개 중 절반가량이 이 한 줄기 돈의 서로 다른 구간에 서 있습니다.",
        "why": "근거는 제공된 검증 리서치의 수치를 그대로 인용한 것이며, 이번 회차에는 웹검색 예산 소진으로 원문 URL을 새로 확인하지 못해 URL을 붙이지 않았다(추측 URL 생성 금지 규칙 적용). (1) 계약 수주 단계 — SHAZ는 8월 6일 2분기 실적과 함께 엔비디아로부터 최대 4만 개의 GB300 그래픽처리장치를 공급받는 48억9000만 달러 규모 6년 계약을 공개했고, 이후 13억2000만 달러(5년, 뉴질랜드), 9억5000만 달러(5년, 아시아태평양), 3억7300만 달러(5년, B300 GPU 2,048개) 계약이 잇따라 쌓이며 누적 계약 총액이 8월 6일 기준 88억 달러, 확보 데이터센터 용량은 80메가와트 늘어난 212메가와트가 됐다. 2분기 매출은 190만 달러로 전년 대비 412% 증가했고 조정 EBITDA(감가상각 등을 뺀 수익성 지표)는 -170만 달러에서 60만 달러 흑자로 전환했다. (2) 서버 조립 단계 — SMCIP의 모회사 슈퍼마이크로는 7월 21일 예비실적에서 매출총이익률을 15~17%로 제시해 기존 가이던스 8.2~8.4%의 거의 두 배를 내놨고, 4분기 한 분기에만 600억 달러가 넘는 신규 수주를 확보했다고 밝혔으며 2027회계연도 매출 가이던스를 650억~720억 달러(컨센서스 544억 달러)로 제시했다. 8월 16일 미국 7월 생산자물가지수 둔화로 금리 인하 기대가 커진 날 주가는 하루 11.2% 급등했고, SMCIP 자체도 7월 22일까지 저점(약 42~43달러) 대비 16.57% 반등했다. Rosenblatt(목표주가 51달러), Raymond James(48달러)가 마진 개선을 근거로 목표가를 올렸다. (3) 부품·메모리 단계 — PENG는 7월 7일 발표한 2026회계연도 3분기(5월 29일 마감) 매출이 4억7,870만 달러로 전년 대비 48% 늘어 분기 사상 최대를 기록했고, GAAP 영업이익은 5,090만 달러로 416.7% 급증했다. 특히 AI 서버용 메모리를 공급하는 통합메모리 부문 매출이 2억7,506만7천 달러로 전년 대비 2배 넘게 늘며 성장을 이끌었고, 비GAAP 주당순이익은 0.84달러로 컨센서스 0.63달러를 웃돌았다. 애널리스트 7명 평균 목표주가는 74.29달러로 현재가 47.59달러 대비 약 56% 높다. (4) 클러스터 근거 — Node 확정 클러스터에서 Technology 섹터는 20종목·48.8%로 집중도 'high'이며, 그 하위에 반도체 4종목(MXL·MRVL·ALAB·MU, 9.8%)과 컴퓨터하드웨어 4종목(DELL·SNDK·SMCIP·STX, 9.8%)이 각각 별도 클러스터로 잡혔다. 반대 근거 — MU·MRVL·ALAB·DELL·STX·SNDK·MXL 7종목은 이번 검증 리서치에 개별 촉매 문서가 없어, 이들은 산업 분류상 같은 칸에 있다는 사실만으로 묶였을 뿐 개별 상승 이유가 AI 인프라 때문인지는 이번 회차에 확인되지 않았다.",
        "tickers": [
          "SHAZ",
          "SMCIP",
          "PENG",
          "MU",
          "MRVL",
          "ALAB",
          "DELL",
          "STX",
          "SNDK",
          "MXL"
        ],
        "strength": "strong"
      },
      "subThemes": [
        {
          "name": "AI를 '비용'이 아니라 '매출'로 바꾼 기업용 소프트웨어",
          "plainKo": "한동안 시장은 인공지능이 기존 소프트웨어를 대체해 이 회사들의 밥그릇을 뺏을 거라고 걱정했습니다. 그런데 8월 실적에서 오히려 인공지능 기능을 얹은 뒤 고객이 돈을 더 쓴다는 숫자가 나오면서, 걱정이 기대로 뒤집혔습니다.",
          "why": "TEAM은 8월 6일 발표한 2026회계연도 4분기 매출이 17억6,600만달러로 전년 대비 28% 늘어 예상치 16억6,000만달러를 웃돌았고 다음 거래일 주가가 30% 넘게 급등했다. AI 비서 로보의 사용량이 전분기 대비 50% 늘고 포춘500 기업의 80% 이상이 쓴다고 밝히면서 잠식 우려가 완화됐으며, 뱅크오브아메리카는 8월 31일 목표주가를 175달러에서 210달러로 올렸다. ESTC는 8월 27일 장 마감 후 2027회계연도 1분기 매출 4억7,810만달러(전년비 15.1% 증가), 조정 주당순이익 0.70달러(컨센서스 0.58달러)를 발표해 다음날 17~18% 급등했고 연간 조정 주당순이익 가이던스를 3.29~3.37달러로 올렸다. Robert W. Baird는 8월 31일 목표가를 95→120달러로 올리며 'AI 채택 증가'를 이유로 들었다. FROG는 8월 6일 2분기 매출 1억6,377만달러(전년비 28.7% 증가)로 예상치를 5.34% 웃돌았고 시간외에서 15.96% 급등, 클라우드 매출이 8,750만달러로 53% 늘어 전체의 53%를 차지했으며 순매출유지율은 121%였다. GWRE는 6월 4일 3분기 매출 3억7,254만달러(27% 증가), 연간반복매출 11억4,700만달러(19% 증가)를 발표했고 9월 3일 4분기 발표를 앞두고 기대감이 반영됐다. 반대 근거 — 네 종목 모두 상승 촉매가 8월 실적 발표라는 한 가지 이벤트에 몰려 있어, 실적시즌이 끝나면 동력이 빠질 수 있다. 이번 회차 웹검색 예산 소진으로 원문 URL은 재확인하지 못했다.",
          "tickers": [
            "TEAM",
            "ESTC",
            "FROG",
            "GWRE"
          ]
        },
        {
          "name": "유전자 데이터로 돈 버는 진단·합성 기업의 흑자 전환",
          "plainKo": "유전자를 읽고 만드는 회사들이 드디어 적자를 벗어나기 시작했습니다. 신약을 인공지능으로 개발하려는 수요와 병원의 유전자 검사 도입이 동시에 늘면서, 매출은 물론 이익 숫자까지 예상보다 빨리 좋아졌습니다.",
          "why": "TWST는 8월 3일 2026회계연도 3분기 매출 1억1,840만달러(전년 9,610만달러 대비 23% 이상 증가, 14분기 연속 성장)를 발표하고 연간 가이던스를 4억5,600만~4억5,700만달러로 상향했으며, AI 신약개발 수요로 치료제 부문 매출이 49% 급증했다. 4분기 조정 EBITDA 손익분기 달성을 목표로 제시했고, 8월 19일 TD코웬·파이퍼샌들러·베어드가 목표주가를 85~89달러에서 115달러로 일제히 올렸다. WGS는 8월 3일 2026년 2분기 매출 1억1,444만달러(전년비 11.4% 증가)와 조정 순이익 40만달러로 시장 예상보다 한 분기 빠르게 흑자 전환했고, 2분기 엑솜·게놈 검사 건수가 3만건을 넘어 분기 최대치(전년비 32% 증가)를 기록했다. 8월 19일 기사 기준 Zacks 컨센서스 주당순이익 전망치가 30일간 146.67% 급등하고 Zacks Rank #1(Strong Buy)을 받으며 4주간 23.8% 상승했다. 클러스터상 '진단 및 연구' 2종목·4.9%로 규모는 작다. 반대 근거 — 두 종목뿐이고 헬스케어 섹터 9종목 중 나머지 7종목(MRNA·AGL·MNPR·INBX·ORKA·SYRE·NUTX)은 공통 촉매가 확인되지 않아 섹터 전체를 이 논리로 설명할 수 없다.",
          "tickers": [
            "TWST",
            "WGS"
          ]
        },
        {
          "name": "공급 축소 원자재 — 원료탄과 금",
          "plainKo": "철을 만들 때 쓰는 석탄과 금처럼, 새로 캐내기 어려운 원자재 가격이 버티고 있습니다. 여기에 회사가 자기 주식을 사들이거나 임원이 직접 사는 움직임이 겹치면서 시장에 바닥 신호로 읽혔습니다.",
          "why": "AMR은 8월 7일 2분기 주당손실 0.96달러로 예상치(-0.97달러)보다 적자 폭이 작아 서프라이즈 +1.03%를 냈고 매출 4억9,286만달러로 컨센서스를 0.28% 웃돌았다. 15억달러 자사주 매입 프로그램에 따라 7월 31일 기준 약 700만주(약 12억달러, 주당 평균 166.29달러)를 사들여 유통주식수가 1,267만9,045주까지 줄었고, 이사 켄네스 코티스는 8월 20일 15,000주(주당 193.50달러, 약 290만달러), 8월 25일 5,000주(주당 216.53달러, 약 110만달러)를 매수했으며 최근 12개월간 10차례에 걸쳐 총 4,612만달러어치를 주당 평균 168.93달러에 사들였다. 8월 21일 하루 주가는 약 7.2% 급등했다. AUGO는 국제 금값이 2026년 9월 2일 기준 온스당 4,323.70달러로 고점권에 있는 가운데 2026년 상반기 158,000 금 상당 온스를 생산해 사상 최대 실적을 냈고, 2분기 매출 3억3,597만달러·주당순이익 2.57달러를 기록했다. 주가는 최근 1개월 44.38%, 1년 182.37% 급등했고(2026년 9월 1일 기준) 8월 31일 월스트리트젠이 등급을 매수로 상향했다. 반대 근거 — 원료탄(AMR·HCC)과 금(AUGO)은 가격 결정 요인이 서로 다르며, HCC는 개별 검증 리서치가 없어 AMR과 같은 이유로 올랐는지 확인되지 않았다. 기초소재 섹터 비중은 3종목·7.3%에 불과하다.",
          "tickers": [
            "AMR",
            "HCC",
            "AUGO"
          ]
        },
        {
          "name": "코드와 자산을 지키는 보안 소프트웨어",
          "plainKo": "인공지능이 코드를 쏟아내고 회사 자산이 클라우드로 옮겨가면서, 그것을 검사하고 지켜주는 회사들의 일감이 늘었습니다. 보안은 경기가 나빠도 잘 줄이지 않는 지출이라 실적이 안정적으로 나왔습니다.",
          "why": "QLYS는 8월 4일 2026회계연도 2분기 매출 1억8,217만5,000달러(전년비 11% 증가)와 주당순이익 1.98달러(컨센서스 1.78달러 대비 20센트 상회)를 발표했고, 3분기 가이던스도 매출 1억8,550만~1억8,750만달러(예상 1억8,260만달러), 주당순이익 1.91~1.98달러(컨센서스 1.80달러)로 모두 웃돌았다. 다음 날인 8월 5일 하루에 Scotiabank(190→220달러), Piper Sandler(100→175달러), RBC(145→180달러) 등 8개 증권사가 목표주가를 일제히 올렸고 8월 12일 Zacks가 투자의견을 Strong Buy로 상향했다. 주가는 2026년 1월 1일 132.90달러에서 9월 1일 177.01달러로 33.2% 올랐다. FROG는 보안 기능 부착률과 잔여계약금액의 견고함을 근거로 모건스탠리가 8월 7일 목표가를 95→100달러로 올렸고, 회사는 'AI가 만들어내는 코드를 안전하게 저장·검증하려는 수요 확대'를 성장 스토리로 제시했다. 반대 근거 — 같은 인프라 소프트웨어 클러스터의 PANW와 BAND는 이번 검증 리서치에 개별 촉매가 없어 근거 없음이며, 이 하위 테마는 사실상 QLYS 1종목의 실적 서프라이즈에 FROG가 부분적으로 겹치는 수준이다.",
          "tickers": [
            "QLYS",
            "FROG"
          ]
        }
      ],
      "crossCuttingDriver": "관통하는 원인은 세 겹이다. 첫째, 인공지능 데이터센터 자본지출 사이클이다. SHAZ의 48억9000만 달러 규모 6년 GPU 공급계약과 누적 계약 총액 88억 달러, 슈퍼마이크로가 한 분기에 확보한 600억 달러 이상의 신규 수주, PENG의 AI 서버용 통합메모리 부문 매출 2배 증가가 모두 같은 지출의 서로 다른 구간에서 나온 숫자다. 둘째, 8월 실적시즌의 어닝 서프라이즈와 가이던스 상향이 물리적 촉매였다. TEAM(8월 6일, 다음 거래일 +30% 이상), FROG(8월 6일, 시간외 +15.96%), ESTC(8월 27일, 다음날 +17~18%), MLAB(8월 12일 +9.5%), CTRN(8월 25일 서프라이즈), QLYS(8월 5일 증권사 8곳 목표가 상향) 등 상승 대부분이 실적 발표일 전후 며칠에 몰려 있다. 셋째, 금리 인하 기대다. 8월 16일 미국 7월 생산자물가지수가 예상보다 둔화되며 금리 인하 기대가 커진 날 슈퍼마이크로 주가가 하루 11.2% 급등했고, 같은 통화 완화 기대가 금값을 온스당 4,323.70달러(9월 2일 기준) 고점권에 붙잡아 두며 AUGO 같은 금광주와 실적 턴어라운드 소비주까지 밀어 올렸다. 요약하면 '인공지능 설비투자 + 실적 서프라이즈 + 완화적 금리 기대'가 겹친 국면이며, 그중 종목 수로 가장 두꺼운 줄기는 인공지능 인프라다.",
      "caution": "첫째, 이번 회차는 웹검색 예산이 소진되어(200/200) 신규 검증을 하지 못했다. 위 근거는 전량 '검증 통과 리서치'로 전달받은 수치를 그대로 옮긴 것이며, 원문 URL을 새로 확인하지 못했으므로 URL을 붙이지 않았다(추측 URL 생성 금지). 둘째, Technology 48.8%라는 숫자는 산업 분류상의 집중일 뿐 하나의 테마가 아니다. 같은 기술 섹터 안에 비트코인 84만5,050개를 보유한 MSTR(크립토 프록시), 대주주가 지분 77.27%를 확보한 뒤 나흘 만에 238% 급등한 마이크로캡 MGRT(경영권 변경 투기), 신임 CEO 체제에서 매출총이익률 64.9%를 낸 계측장비 업체 MLAB(생명과학 도구)이 섞여 있고 이들은 인공지능 인프라와 무관하다. 셋째, 주도 테마로 지목한 10종목 중 개별 촉매가 문서로 확인된 것은 SHAZ·SMCIP·PENG 3종목뿐이며 MU·MRVL·ALAB·DELL·STX·SNDK·MXL 7종목은 근거 없음이다. 즉 이 테마의 강도(strong) 판정은 절반 이상이 '같은 산업 분류에 속한다'는 간접 증거에 기대고 있다. 넷째, 상승 촉매가 8월 실적 발표에 심하게 몰려 있어 실적시즌 종료 후에는 같은 종목군이 함께 움직이지 않을 가능성이 크다. 반증 시나리오는 명확하다 — GWRE의 9월 3일 4분기 실적이 부진하거나, 인공지능 데이터센터 계약이 지연·취소되거나, 금리 인하 기대가 물가 반등으로 되돌려지면 세 겹의 원인 중 두 겹이 동시에 사라진다."
    },
    "reusedFrom": null
  },
  "research_coverage": {
    "done": 20,
    "total": 41,
    "cap": 20,
    "pending": 21,
    "failed": 0,
    "note": "41종목 중 20종목을 조사했습니다. 나머지 21종목은 상한(20) 밖이라 아직 조사하지 않았습니다. 다음 실행부터 순환 조사되어 며칠에 걸쳐 전량 채워집니다."
  },
  "detail_coverage": {
    "done": 40,
    "freshToday": 20,
    "carried": 20,
    "total": 41,
    "cap": 20
  }
};
