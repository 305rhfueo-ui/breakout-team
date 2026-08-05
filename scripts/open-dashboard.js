'use strict';
// 대시보드를 OS 기본 브라우저로 연다. Windows / macOS / Linux.

const { execFile } = require('child_process');
const fs = require('fs');
const { paths, loadEnv, say } = require('./lib/util');

function openDashboard(file = paths.dashboardHtml) {
  if (!fs.existsSync(file)) {
    say('WARN', `대시보드 파일이 없습니다: ${file}`);
    return false;
  }
  // ⚠️ 경로에 한글·공백이 있으므로 셸을 거치지 않고 인자 배열로 넘긴다
  if (process.platform === 'win32') {
    execFile('cmd', ['/c', 'start', '', file], () => {});
  } else if (process.platform === 'darwin') {
    execFile('open', [file], () => {});
  } else {
    execFile('xdg-open', [file], () => {});
  }
  say('SYSTEM', `대시보드 열기: ${file}`);
  return true;
}

module.exports = { openDashboard };

if (require.main === module) {
  loadEnv();
  openDashboard(process.argv[2] || paths.dashboardHtml);
}
