#!/bin/bash
# 아침 작업 — launchd com.breakout.daily 가 07:10 에 부른다. 순서가 중요해서 한 줄로 잇는다.
#   1) RS 사이트가 직전 세션으로 갱신될 때까지 기다린다 (실제 갱신은 09:30~10:50 KST — wait-rs-fresh.js 참고)
#   2) 아침 스캔 → 6팀 관심 목록 → push → 💹 텔레그램
#   3) 화~토만: start breakout (LLM 조사 + 실장 리포트) — 2)의 결과를 이어받는다
# 따로 시각을 정해 두면 3)이 2)보다 먼저 돌아 낡은 결과를 재사용했다 (2026-09-30 · 10-01).
cd "$(dirname "$0")/../.."
node scripts/holdings-watch.js || true   # 보유 종목 새 소식 (2026-10-17) — RS 대기(몇 시간) 전에 먼저, 실패해도 계속
node scripts/fed-watch.js || true        # 10팀 윤슬 — 연준 금리 전환 감시 + 경제전망(SEP, 연 4회) (2026-10-29) — 몇 초, SEP 날엔 해석 1~3분
node scripts/wait-rs-fresh.js
node scripts/run-breakout.js
case "$(date +%u)" in 2|3|4|5|6) bash deploy/macmini/run-claude-job.sh research ;; esac
node scripts/sns-watch.js || true   # 팝업 맨 밑 SNS 반응(레딧, 2026-10-28) — 맨 끝: 예절 간격 때문에 20분 안팎이라 실장 보고를 늦추지 않게
if [ "$(date +%u)" = 6 ]; then node scripts/ticker-universe.js --write || true; fi   # RS 사이트 티커 목록(사용자 구글 시트 첫 탭) 주 1회 — $70 넣고 $50 밑이면 뺌 (2026-10-29)
