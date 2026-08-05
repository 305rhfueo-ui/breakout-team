#!/usr/bin/env bash
# 무인 실행 (macOS/Linux) — 모든 권한 프롬프트를 건너뛴다.
# ⚠️ 이 세션은 권한 체크 없이 동작하므로 breakout-team 전용으로만 쓸 것.
set -euo pipefail
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO"

node scripts/run-breakout.js

if command -v claude >/dev/null 2>&1; then
  claude --dangerously-skip-permissions -p "start breakout"
else
  echo "claude CLI 없음 - Node 파이프라인 결과만 생성됨"
fi
