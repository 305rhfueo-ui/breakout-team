#!/bin/bash
# 아침 작업 — launchd com.breakout.daily 가 07:10 에 부른다. 순서가 중요해서 한 줄로 잇는다.
#   1) RS 사이트가 직전 세션으로 갱신될 때까지 기다린다 (실제 갱신은 09:30~10:50 KST — wait-rs-fresh.js 참고)
#   2) 아침 스캔 → 6팀 관심 목록 → push → 💹 텔레그램
#   3) 화~토만: start breakout (LLM 조사 + 실장 리포트) — 2)의 결과를 이어받는다
# 따로 시각을 정해 두면 3)이 2)보다 먼저 돌아 낡은 결과를 재사용했다 (2026-09-30 · 10-01).
cd "$(dirname "$0")/../.."
node scripts/wait-rs-fresh.js
node scripts/run-breakout.js
case "$(date +%u)" in 2|3|4|5|6) bash deploy/macmini/run-claude-job.sh research ;; esac
