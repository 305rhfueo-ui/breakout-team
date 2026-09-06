# 기간별(1M·3M·6M) 테마 분석 + RS 사이트 데이터 최대 활용 — 2026-09-07

사용자 요청 두 가지를 구현했다. 계획 원문은 `~/.claude/plans/prancy-kindling-thompson.md` 마지막 절.

## A. 기간별 테마 3세트 + 교차

- `scripts/lib/screen.js`
  - `clusterOf(items, minCount)` — 유니온(`detectThemes`)과 기간별이 공유하는 클러스터링 본체
  - `detectThemes` 유니온 클러스터에 `periods:{m1,m3,m6}` (멤버가 어느 기간으로 통과했나)
  - `detectThemesByPeriod(qualified)` → `byPeriod.{m1,m3,m6} = {count, tickers, headline, clusters(≤10), topSectors, topIndustries}`
    + `cross = {persistent(3기간 모두), newEntrants(1M만), midTerm(3M, 1M 아님), fading(6M만), other{}, counts, labels}`
  - ⚠️ 한 종목이 여러 기간에 들어가므로 기간별 count 합 > 유니온. sharePct 분모는 그 기간 count. `cross.counts` 합 = 전체.
- `scripts/lib/rs-entry.js` (신규) — "언제 상위 2% 에 들어왔나"
  - 슬림 스냅샷을 날짜별로 재랭킹해 `state/history/top2-daily.json` 에 누적(증분, 최근 60 평일). 오늘 라이브 rows 는 세션일 키로 추가.
  - `entryStats` → `top2Since/top2Streak/gaps/streakCapped` (캐시에 **존재하는 평일** 기준 연속일, 결손은 gaps, 이력 시작 전이면 `≤date`)
  - picks 에 `top2Since/top2Streak`, `themes.crossDetail` 에 교차 목록별 `{ticker, since, streak}`
- 산출: 리포트 2팀 절 `### 기간별 상위 2%`(3블록) + `#### 기간 교차`, 클러스터 줄 `[1M n · 3M n · 6M n]`; `state/picks/{date}.json` 에 `byPeriod/cross`; `history.js` runs 에 `crossCounts`
- LLM: `team2args.themesByPeriod/cross/crossDetail`, picks 에 `qualifiedBy/top2Since/top2Streak`; 테마종합(에이전트 1명, sonnet) THEME 에 `byPeriod{m1,m3,m6}` + `rotation{persistent,newEntrants,fading,narrative}` required. `build-chief-report.js` 가 티커를 Node 목록과 교집합으로 정제(`theme.sanitized.removed`). 실장 인자 `themeHeadlineByPeriod/crossCounts/crossTop(D+N)`.
- 대시보드: `breakout-room.html` 2팀 탭 "기간별 상위 2% 테마" 카드(+교차, D+N), 통과 열에 지속/신규/중기/퇴조 배지, 테마 해석 카드에 byPeriod·rotation; `index.html` themeSection ①-2 + 도윤 브리핑 한 문장.
- 5팀: `team5args.industries[].pickedBy` (m6/m1/m3/top10), 프롬프트에 "상위 2% 진입 기간".
- 테스트: `tests/lib/themes-period.test.js`

## B. RS 사이트 데이터

### 새로 가져오는 것 (breakout-team)
- `result.json` 13컬럼: `Target_Status`, `CY_Current/CY_30Ago/NY_Current/NY_30Ago`(est), `SALE_CY/SALE_NY/EPS_CY/EPS_NY`, `BB_Center_Breakout_5D`, `New_High_52W`, `api_called`, `RS_Rank_Pct`(대조용) → `screen.js pickRow`, universe.js(`ts,cyc,cy30,nyc,ny30,scy,sny,ecy,eny,nh,bbc,ac`), 4팀 items
- top-level `market_condition`(사용자 시트 A1) → `team1.data_source.siteCondition`, 리포트 1팀·대시보드 1팀·실장 인자 `siteCondition` (QQQ 판정과 **병기**, 덮어쓰지 않음)
- `fs_data.json`(최근 3분기 매출성장·순이익·영업이익률) → `scripts/data/rs-fs-data.js`(하루 캐시), picks/4팀 `fs`, `team2.fs_coverage`
- `api_called` 집계 → `data_source.apiCalled{fresh,cached,total}`; `degraded/data_quality` 메타(사이트 가드 도입 후 값이 옴) → 발행 보류일이면 dataNotice + 배제 판정·신규 편입 보류
- 리포트: 2팀 `### 컨센서스·최근 3분기` 표, 4팀 표 Target/EPS CY/신고가 열; 대시보드 2팀 표 Target·매출성장·EPS성장·신고가 열 + 팝업 "컨센서스·최근 3분기" 카드; LLM `_t2/{T}.json`·`_t4/{T}.json` 의 `site` 블록, 4팀 프롬프트 "컨센서스(사이트)" 줄

### 사이트(RS_Investment) 수정 — `selection/RS_Investment` 클론(main 최신으로 pull 후 편집, **커밋 전**)
- `utils.py` `_finite()` + `calculate_percentile_rank` NaN 가드 — **실측: NaN 이 sorted() 를 깨뜨려 `RS_Rank_Pct` 가 1,392종목 중 1,378개 오류**(BAND 상위 0.5% 가 91% 로). 고치기 전까지 breakout-team 은 이 컬럼을 쓰지 않고 자체 백분위를 쓴다(대조 WARN 만)
- `fetch_and_save.py`: `RS_1mo_Rank_Pct`·`RS_3mo_Rank_Pct` 추가, WRS 그룹 필터 `_finite`, `assess_quality()` → `data_quality{total,blank_rows,null_rate,api_called_count,duration_s,threshold}`, `publish()` — `null_rate > 15%` 면 `result_partial.json` 에만 새 결과를 쓰고 `result.json` 은 전날 data 유지 + `degraded:true/degraded_at/data_quality`, history·history_index·구글시트 누적 **모두 생략**(사용자 결정)
- `test_publish_guard.py` — 배치 실행 없이 가드 검증 (`PYTHONIOENCODING=utf-8 python test_publish_guard.py`)

## 남은 것
- 사이트 클론 커밋·push (사용자 확인 후). push 되면 다음 배치부터 `RS_1mo_Rank_Pct/RS_3mo_Rank_Pct`·`data_quality`·`degraded` 가 result.json 에 실린다.
- `wrs_data_1mo/3mo` 사이트 측 추가는 보류 — breakout-team 이 이미 오차 0 으로 재계산한다.
