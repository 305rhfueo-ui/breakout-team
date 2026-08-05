'use strict';
// 실행 결과를 커밋하고 push — 이걸 해야 GitHub Pages 웹사이트가 갱신된다.
//
// ⚠️ 경로에 한글·공백이 있으므로 셸을 거치지 않고 execFileSync 에 인자 배열로 넘긴다.
//    문자열로 넘기면 "바탕 화면" 의 공백에서 깨진다.

const { execFileSync } = require('child_process');
const { paths, loadEnv, today, say } = require('./lib/util');

function git(args, opts = {}) {
  return execFileSync('git', args, {
    cwd: paths.root, encoding: 'utf8',
    stdio: opts.quiet ? ['ignore', 'pipe', 'pipe'] : ['ignore', 'pipe', 'inherit'],
  });
}

function hasRemote() {
  try { return git(['remote'], { quiet: true }).trim().length > 0; } catch (e) { return false; }
}

function currentBranch() {
  try { return git(['rev-parse', '--abbrev-ref', 'HEAD'], { quiet: true }).trim(); } catch (e) { return null; }
}

// 변경사항을 커밋하고 push. 실패해도 예외를 던지지 않는다 —
// 스캔 결과는 이미 로컬에 저장돼 있으므로 push 실패로 실행 전체가 죽으면 안 된다.
function commitAndPush(dateStr = today(), summary = '', { push = true } = {}) {
  const result = { ok: false, committed: false, pushed: false, error: null };
  try {
    // 산출물만 스테이징 (코드 변경은 개발자가 직접 커밋한다)
    git(['add', 'state', 'dashboard', 'analysis'], { quiet: true });

    const staged = git(['diff', '--staged', '--name-only'], { quiet: true }).trim();
    if (!staged) {
      say('SYSTEM', 'GitHub: 변경 없음 (커밋 생략)');
      return { ...result, ok: true };
    }
    const fileCount = staged.split('\n').length;

    const msg = `chore: ${dateStr} 브레이크아웃 스캔${summary ? ` — ${summary}` : ''}`;
    git(['-c', 'core.safecrlf=false', 'commit', '-q', '-m', msg], { quiet: true });
    result.committed = true;
    say('SYSTEM', `GitHub: 커밋 완료 (${fileCount}개 파일)`);

    if (!push) return { ...result, ok: true };
    if (!hasRemote()) {
      say('WARN', 'GitHub: 원격(origin) 없음 — 로컬 커밋만 됐습니다');
      return { ...result, ok: true };
    }

    const br = currentBranch() || 'master';
    git(['push', '-q', 'origin', br], { quiet: true });
    result.pushed = true;
    say('SYSTEM', `GitHub: push 완료 (${br}) — Pages 는 1~2분 뒤 갱신됩니다`);
    return { ...result, ok: true };
  } catch (e) {
    const m = String(e.stderr || e.message || e).split('\n')[0];
    result.error = m;
    say('WARN', `GitHub: 실패 (${m}) — 결과는 로컬에 저장돼 있습니다`);
    return result;
  }
}

module.exports = { commitAndPush, hasRemote, currentBranch };

if (require.main === module) {
  loadEnv();
  const summary = process.argv.slice(2).filter((s) => !s.startsWith('--')).join(' ');
  const r = commitAndPush(today(), summary, { push: !process.argv.includes('--no-push') });
  console.log(JSON.stringify(r));
  process.exit(r.ok ? 0 : 1);
}
