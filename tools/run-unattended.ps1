# 무인 실행 (Windows) — 모든 권한 프롬프트를 건너뛴다.
# ⚠️ 이 세션은 권한 체크 없이 동작하므로 breakout-team 전용으로만 쓸 것.
$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

# 1) Node 파이프라인 (LLM 0) — 이것만으로도 완결된 산출물이 나온다
node scripts/run-breakout.js
if ($LASTEXITCODE -ne 0) { Write-Host "run-breakout 실패"; exit 1 }

# 2) LLM 리서치 (Claude 필요). claude CLI 가 없으면 건너뛴다.
if (Get-Command claude -ErrorAction SilentlyContinue) {
  claude --dangerously-skip-permissions -p "start breakout"
} else {
  Write-Host "claude CLI 없음 - Node 파이프라인 결과만 생성됨"
}
