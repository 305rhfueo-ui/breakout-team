window.TEAM4_DATA = {
  "generated": "2026-08-05",
  "filter": {
    "volXMin": 2,
    "volSurgeWkMin": 2
  },
  "universeHits": 101,
  "analyzed": 40,
  "items": [
    {
      "ticker": "EA",
      "sector": "Communication Services",
      "industry": "Electronic Gaming & Multimedia",
      "price": 209.6999969482422,
      "volx": 9.66,
      "volSurgeWk": 11.67,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 0,
      "high52": 99.87,
      "adr": 0.31,
      "congestion": {
        "ok": true,
        "baseHigh": 206.82,
        "baseLow": 196.4,
        "baseBars": 126,
        "baseMonths": 6,
        "rangePct": 5.31,
        "breakoutDate": "2026-07-15",
        "breakoutVolX": 2.02,
        "barsSinceBreakout": 14,
        "aboveMa150AtBreak": true,
        "ma150AtBreak": 202.66,
        "pivot": 206.82,
        "distToPivotPct": 1.39,
        "retestDate": "2026-07-16",
        "retestVolRatio": 1.26,
        "dryUp": false,
        "phase": "extended",
        "phaseKo": "과확장 (추격 금지)",
        "score": 50,
        "buyTrigger": {
          "price": 206.82,
          "note": "과확장(피봇 +1.39% > 3×ADR 0.93%) — 되돌림 대기"
        }
      },
      "catalyst": {
        "status": "done",
        "ticker": "EA",
        "category": 6,
        "categoryName": "특수상황: M&A(LBO) 인수합병 완료·상장폐지 — 표준 6분류(①~⑤) 어디에도 해당 안됨, 스키마 제약상 6번에 배치(주의: '뉴스 없음'이 아니라 '분류체계 부적합')",
        "claims": [
          {
            "id": "claim-1-lbo-closing",
            "statement": "PIF(사우디 국부펀드)·Silver Lake·Affinity Partners 컨소시엄이 EA를 주당 210달러 현금, 총 550억 달러 규모로 인수하는 LBO 딜이 2026-07-30 모든 규제 승인을 획득했고 2026-08-04 종가 기준 클로징되어 EA 보통주는 나스닥에서 거래 정지·상장폐지됨. 원래 목표는 2026-06-30 클로징이었으나 반독점·국가안보 심사로 지연됨.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Electronic Arts expects merger closing on or about Aug. 4 after receiving all regulatory approvals",
                "publisher": "TradingView News",
                "url": "https://www.tradingview.com/news/tradingview:941b189aec99e:0-electronic-arts-expects-merger-closing-on-or-about-aug-4-after-receiving-all-regulatory-approvals/",
                "date": "2026-07-30",
                "quote": "Electronic Arts expects merger closing on or about Aug. 4 after receiving all regulatory approvals",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "EA Announces Completion of Acquisition by PIF, Silver Lake, and Affinity Partners",
                "publisher": "EA.com (official)",
                "url": "https://www.ea.com/news/ea-announces-completion-of-acquisition",
                "date": "2026-08-04",
                "quote": "Electronic Arts has successfully closed its acquisition by PIF, Silver Lake, and Affinity Partners",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Electronic Arts Set to Close $55 Billion Go-Private Deal Next Week",
                "publisher": "Variety",
                "url": "https://variety.com/2026/gaming/news/electronic-arts-close-55-billion-private-deal-1236824625/",
                "date": "2026-07-28",
                "quote": "The all-cash transaction was valued at $55 billion... EA stockholders received $210 per share in cash. The deal marks the end of Electronic Arts' 35-year run as a publicly traded company.",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "8-K Electronic Arts Inc reports material event",
                "publisher": "SEC EDGAR / StockTitan",
                "url": "https://www.sec.gov/Archives/edgar/data/712515/000114036126030255/ef20078929_8k.htm",
                "date": "2026-07-30",
                "quote": "Electronic Arts (NASDAQ: EA) eyes Aug. 4 close for investor consortium merger",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "claim-2-merger-pinning",
            "statement": "Node가 제공한 '횡보 6개월·베이스폭 5.31%·과확장(추격 금지)' 기술적 패턴은 딜 확정가($210) 근처에 주가가 고정되는 전형적 머저 아비트리지(merger pinning) 현상과 일치하며, 8/4 클로징 확정 및 상장폐지 절차에 따른 최종 거래일 물량(차익거래 청산·인덱스 강제매도)이 VOL_X 9.66배·주간 11.67배 거래량 폭증의 직접 원인으로 추정됨.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Electronic Arts nears merger closing, going private",
                "publisher": "TipRanks",
                "url": "https://www.tipranks.com/news/company-announcements/electronic-arts-nears-merger-closing-going-private",
                "date": "2026-07-30",
                "quote": "Electronic Arts nears merger closing, going private",
                "verified": "unverified",
                "httpStatus": 403
              },
              {
                "title": "Electronic Arts says it'll be a private company next week",
                "publisher": "Engadget",
                "url": "https://www.engadget.com/2227680/electronic-arts-goes-private-next-week/",
                "date": "2026-07-28",
                "quote": "Electronic Arts says it'll be a private company next week",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "claim-3-earnings-side-note",
            "statement": "동시기(2026-08-04 전후) EA는 마지막 공개기업 분기실적도 발표: GAAP EPS 1.81달러(예상 1.30달러 대비 +39.6% 서프라이즈), 매출 약 19% YoY 성장. 이 자체는 ①번(어닝서프라이즈) 요건에 근접하나 초대형 거래량 폭증의 지배적 원인은 아니며, M&A 클로징이 주된 요인으로 판단됨(참고용 부차 근거).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Earnings call transcript: Electronic Arts Q1 2026 beats EPS estimates",
                "publisher": "Investing.com",
                "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-electronic-arts-q1-2026-beats-eps-estimates-93CH-4158698",
                "date": "2026-08-04",
                "quote": "EPS (GAAP): $1.81 vs analyst estimates of $1.30 (39.6% beat)",
                "verified": "unverified",
                "httpStatus": 403
              },
              {
                "title": "Electronic Arts's (NASDAQ:EA) Q1 CY2026: Beats On Revenue",
                "publisher": "StockStory / The Globe and Mail",
                "url": "https://www.theglobeandmail.com/investing/markets/stocks/EA/pressreleases/1722641/electronic-artss-nasdaqea-q1-cy2026-beats-on-revenue/",
                "date": "2026-08-04",
                "quote": "sales up 17.8% year on year to $2.12 billion",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "confidence": "high",
        "isHighlight": false,
        "volumeExplanation": "거래량 폭증(VOL_X 9.66배, 주간 11.67배)은 성장형 호재가 아니라 PIF·Silver Lake·Affinity Partners 컨소시엄의 550억달러 EA 인수(주당 210달러 현금)가 2026-08-04 종가 기준 클로징되며 나스닥 상장폐지가 확정된 데 따른 최종 거래일 물량(합병차익거래 청산, 인덱스 추종자금 강제매도)임. 6개월간의 횡보·과확장 구간도 딜 확정가 근접 고정(merger pinning) 현상으로 설명됨. 종목이 사실상 비상장 전환 절차 중이므로 브레이크아웃/EP 매수 후보로는 부적합.",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reason": "M&A 완료 및 상장폐지는 표준 5분류 외의 특수상황. TradingView(공식), EA.com(공식), Variety, SEC EDGAR 등 다중 신뢰 출처가 일관되게 2026-07-30 규제 승인, 2026-08-04 클로징 확정을 보도. Category 6 분류 정확."
        }
      }
    },
    {
      "ticker": "SCDL",
      "sector": "ETF",
      "industry": "ETF",
      "price": 59.60430145263672,
      "volx": 5.69,
      "volSurgeWk": 12.7,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 100,
      "high52": 97.79,
      "adr": 0.62,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 27.99
      },
      "catalyst": {
        "status": "done",
        "ticker": "SCDL",
        "category": 6,
        "categoryName": "암묵적 호재 (뉴스 없이 거래량만 폭증)",
        "claims": [
          {
            "id": "c1",
            "statement": "근거 없음 - 웹검색 결과 SCDL(ETRACS 2x Leveraged US Dividend Factor TR ETN) 관련 직접 뉴스, 공시, 촉매성 이벤트를 전혀 찾지 못함",
            "evidence_level": "no_source",
            "sources": []
          },
          {
            "id": "c2",
            "statement": "SCDL은 UBS가 발행한 ETN으로, Dow Jones U.S. Dividend 100 지수를 분기 리밸런싱 방식으로 2배 레버리지 추종하는 상품이며 개별 기업이 아니므로 실적발표·임상·계약 등 기업 촉매 자체가 구조적으로 존재하지 않음",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "ETRACS 2x Leveraged US Div Fctr TR ETN (SCDL)",
                "publisher": "AAII",
                "url": "https://www.aaii.com/etf/ticker/SCDL",
                "date": "2026-08-05",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          }
        ],
        "isHighlight": false,
        "confidence": "high",
        "volumeExplanation": "SCDL은 UBS 발행 2배 레버리지 배당지수 ETN으로, 관련 직접 뉴스나 8-K 공시가 전혀 검색되지 않음. VOL_X 5.69, 주간 거래량배수 12.7의 급증은 기초지수(다우존스 배당100) 변동성 확대에 따른 레버리지 상품 특유의 거래량 반응이거나 옵션/차익거래 수요 등 시장 미시구조적 요인으로 추정되나, 표면적으로 확인 가능한 촉매 뉴스는 없어 암묵적 호재(category 6)로 분류함.",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reason": "UBS 발행 배당지수 2배 레버리지 ETN이므로 기업 촉매가 구조적으로 부재. 거래량 폭증은 레버리지 상품의 기초지수 변동성 반응이거나 옵션 미시구조 요인으로 추정. 근거 불충분하므로 category 6 (암묵적 호재) 정확."
        }
      }
    },
    {
      "ticker": "DORM",
      "sector": "Consumer Cyclical",
      "industry": "Auto Parts",
      "price": 147.8000030517578,
      "volx": 5.42,
      "volSurgeWk": 5.23,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 52,
      "high52": 88.56,
      "adr": 4.12,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 57.44
      },
      "catalyst": {
        "status": "done",
        "ticker": "DORM",
        "category": 1,
        "categoryName": "어닝 서프라이즈 및 향후 실적 가이던스 상향",
        "isHighlight": true,
        "confidence": "high",
        "volumeExplanation": "2026-08-03(월) 장마감 후 발표된 2분기 실적에서 희석 EPS가 전년 대비 53% 급증(2.93달러)하고 조정 EPS(3.08달러)가 컨센서스(1.89달러)를 큰 폭 상회했으며, 동시에 2026년 EPS 가이던스를 상향 조정한 것이 8/4~8/5 거래일 거래량 급증(VOL_X 5.42, 주간거래량배수 5.23)의 직접적 촉매로 확인됨.",
        "claims": [
          {
            "id": "c1",
            "statement": "Dorman Products는 2026년 8월 3일 8-K(Item 2.02 실적발표, Item 9.01)를 통해 2026 회계연도 2분기(6/27 마감) 실적을 공시했으며, 순매출 5억 4,460만 달러(전년 대비 +0.7%), 희석 EPS 2.93달러(전년 대비 +53%), 조정 희석 EPS 3.08달러(+50%)를 기록했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Dorman Products, Inc. Reports Second Quarter 2026 Results; Updates 2026 Financial Guidance",
                "publisher": "StockTitan (8-K Filing)",
                "url": "https://www.stocktitan.net/sec-filings/DORM/8-k-dorman-products-inc-reports-material-event-064d70e9b89a.html",
                "date": "2026-08-03",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Dorman Products, Inc. Reports Second Quarter 2026 Results; Updates 2026 Financial Guidance",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/DORM/dorman-products-inc-reports-second-quarter-2026-results-updates-2026-pr2y9fmsh6wf.html",
                "date": "2026-08-03",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c2",
            "statement": "이번 분기 조정 EPS 3.08달러는 애널리스트 컨센서스 1.89달러를 1.19달러 상회하는 어닝 서프라이즈였다(GuruFocus 보도).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Is Dorman Products Inc (DORM) Overvalued After Q2 Earnings Beat? EPS Hits $2.93 on $544.6 Million Revenue - GF Score: 89/100",
                "publisher": "GuruFocus",
                "url": "https://www.gurufocus.com/news/8999370/is-dorman-products-inc-dorm-overvalued-after-q2-earnings-beat-eps-hits-293-on-5446-million-revenue-gf-score-89100",
                "date": "2026-08-04",
                "verified": "unverified",
                "httpStatus": 403
              }
            ]
          },
          {
            "id": "c3",
            "statement": "Dorman은 2026년 가이던스에서 희석 EPS 전망을 7.57~7.97달러에서 7.93~8.23달러로, 조정 희석 EPS를 8.10~8.50달러에서 8.50~8.80달러로 상향 조정했다(IEEPA 관세 환급 이익 반영). 다만 순매출 성장률 가이던스는 7~9%에서 3~5%로 하향됐다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Dorman Products, Inc. Reports Second Quarter 2026 Results; Updates 2026 Financial Guidance",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/DORM/dorman-products-inc-reports-second-quarter-2026-results-updates-2026-pr2y9fmsh6wf.html",
                "date": "2026-08-03",
                "verified": "ok",
                "httpStatus": 200
              },
              {
                "title": "Dorman Products (NASDAQ:DORM) Releases FY 2026 Earnings Guidance",
                "publisher": "Daily Political",
                "url": "https://www.dailypolitical.com/2026/08/03/dorman-products-nasdaqdorm-releases-fy-2026-earnings-guidance.html",
                "date": "2026-08-03",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reason": "2026-08-03 공식 8-K 기반 2분기 실적 발표. 희석 EPS 2.93 (+53% YoY), 조정 EPS 3.08이 컨센서스 1.89를 크게 상회 (서프라이즈). 2026년 가이던스 상향 추가. StockTitan, GuruFocus, Daily Political 출처 유효. Category 1 (어닝 서프라이즈) 정확."
        }
      }
    },
    {
      "ticker": "KNF",
      "sector": "Basic Materials",
      "industry": "Building Materials",
      "price": 69.51000213623047,
      "volx": 5.03,
      "volSurgeWk": 5.39,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 59.46,
      "high52": 72.2,
      "adr": 4.4,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 46.32
      },
      "catalyst": {
        "status": "done",
        "ticker": "KNF",
        "category": 1,
        "categoryName": "어닝 발표 촉매 - 단 서프라이즈 상향 아닌 어닝 미스(실적 부진, 갭다운)",
        "claims": [
          {
            "id": "c1",
            "statement": "KNF는 2026년 8월 4일(화) 장 개장 전 2분기 실적을 발표했으며 EPS $0.77로 컨센서스 $1.13을 $0.36 대폭 하회(어닝 미스)했다. 매출은 $938.6M으로 컨센서스 $931.39M을 소폭 상회(전년동기 대비 +12.6%)했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Knife River (NYSE:KNF) Shares Gap Down After Earnings Miss",
                "publisher": "Ticker Report",
                "url": "https://www.tickerreport.com/banking-finance/13529486/knife-river-nyseknf-shares-gap-down-after-earnings-miss.html",
                "date": "2026-08-05",
                "quote": "The company reported $0.77 EPS for the quarter, missing the consensus estimate of $1.13 by ($0.36)... Knife River Corporation's stock price gapped down prior to trading on Tuesday... The stock had previously closed at $78.84, but opened at $71.15.",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c2",
            "statement": "KNF는 2026년 8월 4일 오전 11시(EDT) 2분기 실적 컨퍼런스콜을 개최했으며, 실적 자료는 그날 아침 뉴욕증시 개장 전 발표되었다(사전 예고된 일정).",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Knife River Schedules Morning Release of Second-Quarter Results",
                "publisher": "StockTitan",
                "url": "https://www.stocktitan.net/news/MDU/knife-river-corporation-announces-timing-of-second-quarter-2026-qn5ls2gm3bzb.html",
                "date": "2026-07-15",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          },
          {
            "id": "c3",
            "statement": "해당 종목을 직접 언급하는 Nasdaq RSS 뉴스는 확인되지 않았으며, Node가 자동수집한 SEC 8-K 목록에도 이번 실적 공시가 누락되어 있었으나, 웹검색을 통해 실제 실적 발표 및 어닝 미스 사실을 직접 확인했다.",
            "evidence_level": "sourced",
            "sources": [
              {
                "title": "Knife River (NYSE:KNF) Shares Gap Down After Earnings Miss",
                "publisher": "Ticker Report",
                "url": "https://www.tickerreport.com/banking-finance/13529486/knife-river-nyseknf-shares-gap-down-after-earnings-miss.html",
                "date": "2026-08-05",
                "verified": "ok",
                "httpStatus": 200
              }
            ]
          }
        ],
        "confidence": "medium",
        "isHighlight": true,
        "volumeExplanation": "전일(8/4) 장전 2분기 실적 발표에서 EPS가 컨센서스를 큰 폭($0.36)으로 하회하는 어닝 미스가 발생, 전일 종가 $78.84에서 익일 시가 $71.15로 약 9.8% 갭다운했다. 매출은 소폭 서프라이즈였으나 EPS 쇼크가 매도 물량을 촉발하며 거래대금·거래량이 급증(VOL_X 5.03, 주간배수 5.39)한 것으로 판단된다. 다만 이는 상승 호재가 아닌 실적 부진에 따른 변동성 급증이며, 종가강도 59.46은 장중 저점 대비 일부 낙폭을 되돌린 수준이다.",
        "factcheck": {
          "verdict": "pass",
          "removed": [],
          "reason": "2026-08-04 2분기 실적 발표 확인 (Ticker Report 기사). EPS 0.77이 컨센서스 1.13을 하회 (어닝 미스, -0.36). 공식 8-K 미발견이나 실적 기사 충분. 검증 기준 '8-K 또는 실적 기사' 충족. 전일 종가 $78.84→익일 시가 $71.15 갭다운 정보도 일관성 있음. Category 1 (어닝 미스) 정확."
        }
      }
    },
    {
      "ticker": "PLTR",
      "sector": "Technology",
      "industry": "Software - Infrastructure",
      "price": 162.66000366210938,
      "volx": 4.92,
      "volSurgeWk": 4.2,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 91.29,
      "high52": 78.38,
      "adr": 5.13,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 55.19
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "APTV",
      "sector": "Consumer Cyclical",
      "industry": "Auto Parts",
      "price": 47.720001220703125,
      "volx": 4.55,
      "volSurgeWk": 5.41,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 28.46,
      "high52": 53.66,
      "adr": 3.51,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 87.01
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "W",
      "sector": "Consumer Cyclical",
      "industry": "Internet Retail",
      "price": 116.08000183105469,
      "volx": 4.43,
      "volSurgeWk": 3.22,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 78.41,
      "high52": 96.75,
      "adr": 5.44,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 112.78
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "NRG",
      "sector": "Utilities",
      "industry": "Utilities - Independent Power Producers",
      "price": 117.04000091552734,
      "volx": 4.29,
      "volSurgeWk": 4.96,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 16.52,
      "high52": 62.02,
      "adr": 5.32,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 68.85
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "ZBRA",
      "sector": "Technology",
      "industry": "Communication Equipment",
      "price": 368.8299865722656,
      "volx": 4.06,
      "volSurgeWk": 2.42,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 97.62,
      "high52": 99.74,
      "adr": 4.43,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 85.78
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "ULS",
      "sector": "Industrials",
      "industry": "Specialty Business Services",
      "price": 78.33999633789062,
      "volx": 4.04,
      "volSurgeWk": 5.42,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 22.07,
      "high52": 72.95,
      "adr": 3.59,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 57.27
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "FERG",
      "sector": "Industrials",
      "industry": "Industrial Distribution",
      "price": 255.50999450683594,
      "volx": 3.96,
      "volSurgeWk": 2.18,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 62.61,
      "high52": 94.78,
      "adr": 2.74,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 26.67
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "ATKR",
      "sector": "Industrials",
      "industry": "Electrical Equipment & Parts",
      "price": 93.52999877929688,
      "volx": 3.89,
      "volSurgeWk": 1.5,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 75,
      "high52": 99.93,
      "adr": 3.56,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 74.14
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "VXZ",
      "sector": "ETF",
      "industry": "ETF",
      "price": 50.709999084472656,
      "volx": 3.75,
      "volSurgeWk": 5.87,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 100,
      "high52": 81.68,
      "adr": 0.88,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 24.48
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "NOVTU",
      "sector": "Technology",
      "industry": "Scientific & Technical Instruments",
      "price": 66.81999969482422,
      "volx": 3.74,
      "volSurgeWk": 1.32,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 100,
      "high52": 90.23,
      "adr": 1.95,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 184,
        "rangePct": 48.07
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "UFPT",
      "sector": "Healthcare",
      "industry": "Medical Devices",
      "price": 334.8399963378906,
      "volx": 3.63,
      "volSurgeWk": 3.44,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 88.53,
      "high52": 98.86,
      "adr": 4.49,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 94.81
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "WGS",
      "sector": "Healthcare",
      "industry": "Diagnostics & Research",
      "price": 70.9000015258789,
      "volx": 3.46,
      "volSurgeWk": 2.55,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 43.84,
      "high52": 41.49,
      "adr": 8.33,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 216.49
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "BRKR",
      "sector": "Healthcare",
      "industry": "Medical Devices",
      "price": 50.29999923706055,
      "volx": 3.42,
      "volSurgeWk": 3.88,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 2.88,
      "high52": 77.03,
      "adr": 5.19,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 101.73
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "AIN",
      "sector": "Consumer Cyclical",
      "industry": "Textile Manufacturing",
      "price": 62.97999954223633,
      "volx": 3.25,
      "volSurgeWk": 5.05,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 20.08,
      "high52": 81.79,
      "adr": 3.31,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 58.57
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "FNGS",
      "sector": "ETF",
      "industry": "ETF",
      "price": 79.7300033569336,
      "volx": 3.14,
      "volSurgeWk": 4.13,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 80.84,
      "high52": 98.72,
      "adr": 1.67,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 42.43
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "TSEM",
      "sector": "Technology",
      "industry": "Semiconductors",
      "price": 239.52999877929688,
      "volx": 3.04,
      "volSurgeWk": 2.87,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 75.36,
      "high52": 74.87,
      "adr": 9.46,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 195.07
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "ITGR",
      "sector": "Healthcare",
      "industry": "Medical Devices",
      "price": 125.05000305175781,
      "volx": 3.03,
      "volSurgeWk": 1.11,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 86.96,
      "high52": 99.61,
      "adr": 3.7,
      "congestion": {
        "ok": true,
        "baseHigh": 101.96,
        "baseLow": 77.05,
        "baseBars": 126,
        "baseMonths": 6,
        "rangePct": 32.33,
        "breakoutDate": "2026-07-31",
        "breakoutVolX": 4.79,
        "barsSinceBreakout": 2,
        "aboveMa150AtBreak": true,
        "ma150AtBreak": 88.19,
        "pivot": 101.96,
        "distToPivotPct": 22.65,
        "phase": "extended",
        "phaseKo": "과확장 (추격 금지)",
        "score": 45,
        "buyTrigger": {
          "price": 101.96,
          "note": "과확장(피봇 +22.65% > 3×ADR 11.1%) — 되돌림 대기"
        }
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "LNTH",
      "sector": "Healthcare",
      "industry": "Drug Manufacturers - Specialty & Generic",
      "price": 101.11000061035156,
      "volx": 3,
      "volSurgeWk": 1.58,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 49.52,
      "high52": 90.39,
      "adr": 3.3,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 76.3
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "TDW",
      "sector": "Energy",
      "industry": "Oil & Gas Equipment & Services",
      "price": 84.19000244140625,
      "volx": 2.99,
      "volSurgeWk": 2.99,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 91.69,
      "high52": 90.4,
      "adr": 4.55,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 49.97
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "IT",
      "sector": "Technology",
      "industry": "Information Technology Services",
      "price": 185.7899932861328,
      "volx": 2.94,
      "volSurgeWk": 2.09,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 83.08,
      "high52": 69.89,
      "adr": 5.62,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 54.42
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "WLK",
      "sector": "Basic Materials",
      "industry": "Specialty Chemicals",
      "price": 80.62999725341797,
      "volx": 2.88,
      "volSurgeWk": 2.03,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 100,
      "high52": 65.29,
      "adr": 3.35,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 81.41
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "GEF.B",
      "sector": "Consumer Cyclical",
      "industry": "Packaging & Containers",
      "price": 110.36000061035156,
      "volx": 2.82,
      "volSurgeWk": 2.03,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 73.54,
      "high52": 98.04,
      "adr": 3.32,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 49.87
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "DVA",
      "sector": "Healthcare",
      "industry": "Medical Care Facilities",
      "price": 227.99000549316406,
      "volx": 2.8,
      "volSurgeWk": 3.02,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 45.37,
      "high52": 92.12,
      "adr": 2.8,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 97.99
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "PLD",
      "sector": "Real Estate",
      "industry": "REIT - Industrial",
      "price": 139.0500030517578,
      "volx": 2.74,
      "volSurgeWk": 3.34,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 5.47,
      "high52": 90.67,
      "adr": 2.25,
      "congestion": {
        "ok": true,
        "phase": "base",
        "phaseKo": "6개월 횡보 베이스 형성 중",
        "baseHigh": 153.35,
        "baseLow": 127.29,
        "baseBars": 126,
        "baseMonths": 6,
        "rangePct": 20.47,
        "contraction": 0.94,
        "pivot": 153.35,
        "distToPivotPct": -9.33,
        "aboveMa150AtNow": true,
        "buyTrigger": {
          "price": 153.35,
          "note": "$153.35(저항선) 거래량 동반 돌파 시 진입 검토"
        },
        "score": 50
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "STRD",
      "sector": "Technology",
      "industry": "Software - Application",
      "price": 61.36000061035156,
      "volx": 2.74,
      "volSurgeWk": 1.79,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 82.93,
      "high52": 79.82,
      "adr": 2.5,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 291,
        "rangePct": 63.65
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "FET",
      "sector": "Energy",
      "industry": "Oil & Gas Equipment & Services",
      "price": 74.30000305175781,
      "volx": 2.74,
      "volSurgeWk": 1.43,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 92.68,
      "high52": 99.4,
      "adr": 5.72,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 68.28
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "CBT",
      "sector": "Basic Materials",
      "industry": "Specialty Chemicals",
      "price": 81.95999908447266,
      "volx": 2.73,
      "volSurgeWk": 3.02,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 65.31,
      "high52": 86.7,
      "adr": 3.19,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 41.92
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "TRI",
      "sector": "Industrials",
      "industry": "Specialty Business Services",
      "price": 109.1500015258789,
      "volx": 2.72,
      "volSurgeWk": 2.17,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 97.57,
      "high52": 55.57,
      "adr": 4.92,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 48.6
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "LGIH",
      "sector": "Consumer Cyclical",
      "industry": "Residential Construction",
      "price": 61.459999084472656,
      "volx": 2.72,
      "volSurgeWk": 2.14,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 84.37,
      "high52": 88.43,
      "adr": 4.92,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 97.47
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "CZFS",
      "sector": "Financial Services",
      "industry": "Banks - Regional",
      "price": 82.62999725341797,
      "volx": 2.7,
      "volSurgeWk": 1.89,
      "aboveMa150": true,
      "brk60d": true,
      "clsPos": 85.6,
      "high52": 99.11,
      "adr": 4.73,
      "congestion": {
        "ok": true,
        "baseHigh": 76,
        "baseLow": 56.5,
        "baseBars": 126,
        "baseMonths": 6,
        "rangePct": 34.51,
        "breakoutDate": "2026-07-28",
        "breakoutVolX": 2.19,
        "barsSinceBreakout": 5,
        "aboveMa150AtBreak": true,
        "ma150AtBreak": 64.74,
        "pivot": 76,
        "distToPivotPct": 8.72,
        "retestDate": "2026-07-29",
        "retestVolRatio": 1.81,
        "dryUp": false,
        "phase": "bounce_trigger",
        "phaseKo": "🎯 리테스트 반등 — 매수 트리거",
        "score": 20,
        "buyTrigger": {
          "price": 82.63,
          "note": "리테스트 저점 $76.66 반등 + 거래량 회복 — 매수 트리거"
        }
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "AAOI",
      "sector": "Technology",
      "industry": "Communication Equipment",
      "price": 131.6300048828125,
      "volx": 2.64,
      "volSurgeWk": 1.82,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 63.66,
      "high52": 56.33,
      "adr": 11.54,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 531.23
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "VCTR",
      "sector": "Financial Services",
      "industry": "Asset Management",
      "price": 102.62000274658203,
      "volx": 2.63,
      "volSurgeWk": 3.07,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 26.45,
      "high52": 97.23,
      "adr": 3.14,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 73.3
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "ASTE",
      "sector": "Industrials",
      "industry": "Farm & Heavy Construction Machinery",
      "price": 52.25,
      "volx": 2.63,
      "volSurgeWk": 2.07,
      "aboveMa150": false,
      "brk60d": false,
      "clsPos": 33.22,
      "high52": 79.75,
      "adr": 3.92,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 43.15
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "AEIS",
      "sector": "Industrials",
      "industry": "Electrical Equipment & Parts",
      "price": 341.3900146484375,
      "volx": 2.61,
      "volSurgeWk": 1.63,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 85.33,
      "high52": 85.92,
      "adr": 6.02,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 65.26
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "AXTI",
      "sector": "Technology",
      "industry": "Semiconductor Equipment & Materials",
      "price": 65.2699966430664,
      "volx": 2.58,
      "volSurgeWk": 1.41,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 60.09,
      "high52": 45.59,
      "adr": 14.87,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 767.64
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    },
    {
      "ticker": "OTTR",
      "sector": "Industrials",
      "industry": "Conglomerates",
      "price": 92.81999969482422,
      "volx": 2.55,
      "volSurgeWk": 2.71,
      "aboveMa150": true,
      "brk60d": false,
      "clsPos": 84.24,
      "high52": 97.71,
      "adr": 2.82,
      "congestion": {
        "ok": true,
        "phase": "none",
        "phaseKo": "해당 패턴 없음",
        "bars": 501,
        "rangePct": 14.82
      },
      "catalyst": {
        "status": "pending",
        "note": "LLM 촉매 분류 대기 (상한 초과)"
      }
    }
  ],
  "byPhase": {
    "extended": 2,
    "none": 36,
    "base": 1,
    "bounce_trigger": 1
  },
  "research_coverage": {
    "done": 4,
    "total": 4,
    "cap": 4
  },
  "llm": {
    "highlights": [
      {
        "ticker": "DORM",
        "category": 1,
        "oneLine": "8/3 2분기 8-K 공시 — 조정 EPS 3.08달러로 컨센서스 1.89달러를 1.19달러 상회, 동시에 2026년 조정 EPS 가이던스를 8.10~8.50 → 8.50~8.80달러로 상향(관세 환급 반영). 오늘 후보 중 유일하게 '어닝 서프라이즈 + 가이던스 상향'을 동시에 충족한 정방향 EP."
      },
      {
        "ticker": "KNF",
        "category": 1,
        "oneLine": "8/4 장전 2분기 발표 — 매출은 938.6M로 컨센서스 소폭 상회(+12.6% YoY)했으나 EPS 0.77달러로 컨센서스 1.13달러를 0.36달러 하회한 어닝 미스. 분류상 1번(실적 촉매)이지만 방향이 반대인 갭다운 EP이므로 쿨라매기 선호 호재가 아니라 회피 대상."
      }
    ],
    "sectorSignal": "특정 섹터 쏠림 없음. 후보 4종의 촉매 성격이 M&A 클로징·상장폐지(EA) 1건, 실적 촉매 2건(DORM 상향 / KNF 미스로 방향 반대), 촉매 미확인 레버리지 ETN(SCDL) 1건으로 흩어져 있고, 같은 산업·테마를 공유하는 조합이 하나도 없다. 즉 오늘 거래량 폭증은 섹터 자금 순환이 아니라 개별 종목 이벤트가 각자 만든 것으로 봐야 한다. 카테고리 5(산업 기술 돌파) 후보는 0건이라 주도 테마 신호 자체가 잡히지 않았다.",
    "watchList": [
      "DORM — 실적 서프라이즈 + 가이던스 상향이라는 정방향 촉매가 확인된 유일한 종목. 발표(8/3) 직후 갭·거래량 구간의 고점을 기준으로 눌림·리테스트가 성립하는지 관찰 대상. 다만 순매출 성장률 가이던스가 7~9% → 3~5%로 하향된 점은 후속 랠리의 발목을 잡을 수 있어 리테스트 지지 여부로 판단할 것.",
      "SCDL — 뉴스·공시·촉매가 전혀 확인되지 않은 채 거래량만 튄 케이스. 2배 레버리지 ETN(UBS 발행, Dow Jones U.S. Dividend 100 추종)이라 기업 촉매가 구조적으로 존재할 수 없으므로 EP로 매수하지 말고, 순수 관찰(기초지수·분기 리밸런싱 영향 확인)용으로만 남길 것.",
      "EA — 관찰 리스트에서 제외 권고. Node가 잡은 '6개월 횡보·베이스폭 5.31%'는 딜가 210달러에 주가가 고정된 머저 피닝이고, 8/4 종가로 클로징·상장폐지되어 거래 자체가 없다. 돌파·리테스트 국면이 성립하지 않는다.",
      "KNF — 어닝 미스 갭다운이므로 돌파 후보가 아니라 역방향 사례. 굳이 본다면 매수가 아니라 실적 발표 갭다운 이후 하락 지속 여부를 확인하는 관찰용."
    ],
    "caution": "이번 분류는 네 가지 한계를 안고 있다. (1) 카테고리 6이 서로 다른 두 상황에 혼용됐다 — EA는 '뉴스 없음'이 아니라 M&A/상장폐지라 표준 5분류에 자리가 없어 스키마 제약상 6번에 들어간 것이고, SCDL은 진짜로 촉매를 못 찾은 케이스다. 같은 번호지만 해석이 정반대다. (2) 카테고리 1이 방향을 구분하지 않는다 — DORM(서프라이즈·상향)과 KNF(미스·갭다운)가 같은 1번으로 묶여, 번호만 보고 매수 후보로 취급하면 위험하다. (3) 거래량 폭증의 원인이 재현 불가능한 경우가 있다 — EA의 VOL_X 9.66배는 차익거래 청산과 인덱스 강제매도라는 일회성 기술적 물량이고, 실제 EP 수급이 아니다. 함께 나온 EPS 1.81달러(+39.6% 서프라이즈)도 상장폐지 직전 마지막 공시라 후속 주가로 이어질 수 없다. (4) 데이터 수집에 누락이 있다 — KNF는 Node의 자동수집 SEC 8-K 목록과 Nasdaq RSS 어디에도 잡히지 않았고 웹검색으로만 확인됐다. 자동 파이프라인이 실적 공시를 놓칠 수 있다는 뜻이므로, '촉매 없음(SCDL)' 판정도 진짜 없는 것인지 못 찾은 것인지 단정하기 어렵다. 또한 오늘은 쿨라매기가 선호하는 카테고리 5(산업 기술 돌파) 후보가 0건이라, 실질적으로 매수 검토 가능한 정방향 EP는 DORM 한 종목뿐이다."
  },
  "byCategory": {
    "1": 2,
    "6": 2
  }
};
