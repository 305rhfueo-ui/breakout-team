'use strict';
// 공통 유틸 — 의존성 제로 (Node 18+ 내장 기능만 사용)

const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');

// ── 캐시 디렉터리 ──
// repo 가 OneDrive 동기 폴더 안에 있으면 대용량 캐시가 매일 동기화되고 파일 잠금(EBUSY)도 잦다.
// .gitignore 는 git 에만 적용되고 OneDrive 는 무시하고 동기화하므로, 캐시는 repo 밖에 둔다.
function defaultCacheDir() {
  if (process.platform === 'win32') {
    return path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local'), 'breakout-team');
  }
  if (process.platform === 'darwin') {
    return path.join(os.homedir(), 'Library', 'Caches', 'breakout-team');
  }
  return path.join(process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache'), 'breakout-team');
}
const CACHE_DIR = process.env.CACHE_DIR || defaultCacheDir();

const paths = {
  root: ROOT,
  // repo 내부 (git 커밋 대상)
  state: path.join(ROOT, 'state'),
  config: path.join(ROOT, 'state', 'config.json'),
  tracking: path.join(ROOT, 'state', 'tracking.json'),
  picksDir: path.join(ROOT, 'state', 'picks'),
  weeklyQuestion: path.join(ROOT, 'state', 'weekly-question.json'),
  finraCache: path.join(ROOT, 'state', 'finra-margin.json'),
  chartCheck: path.join(ROOT, 'state', 'chart-check.json'),
  researchCache: path.join(ROOT, 'state', 'research-cache.json'),
  breakoutLog: path.join(ROOT, 'state', 'breakout-log.json'),
  llmInDir: path.join(ROOT, 'state', 'llm-in'),
  historyTicker: path.join(ROOT, 'state', 'history', 'ticker'),
  historyIndustry: path.join(ROOT, 'state', 'history', 'industry'),
  reportsDir: path.join(ROOT, 'analysis', 'reports'),
  dashboard: path.join(ROOT, 'dashboard'),
  dashboardData: path.join(ROOT, 'dashboard', 'data'),
  dashboardSeries: path.join(ROOT, 'dashboard', 'data', 'series'),
  dashboardCharts: path.join(ROOT, 'dashboard', 'charts'),
  dashboardHtml: path.join(ROOT, 'dashboard', 'breakout-room.html'),
  sampleData: path.join(ROOT, 'scripts', 'lib', 'sample-rs-data.json'),
  // repo 밖 (OneDrive 동기화 제외)
  cacheDir: CACHE_DIR,
  snapshotCache: path.join(CACHE_DIR, 'rs-snapshots'),
  barsCache: path.join(CACHE_DIR, 'bars'),
  pdfCache: path.join(CACHE_DIR, 'reports'),
  apiCache: path.join(CACHE_DIR, 'api'),
};

// .env 파일을 process.env 로 로드 (dotenv 없이)
function loadEnv() {
  const envPath = path.join(ROOT, '.env');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return fallback;
  }
}

// OneDrive 파일 잠금(EBUSY/EPERM) 대응: 임시파일에 쓰고 rename, 실패 시 1회 재시도
function writeAtomic(file, text) {
  ensureDir(path.dirname(file));
  const tmp = file + '.tmp' + process.pid;
  fs.writeFileSync(tmp, text, 'utf8');
  try {
    fs.renameSync(tmp, file);
  } catch (e) {
    if (e.code === 'EBUSY' || e.code === 'EPERM' || e.code === 'EACCES') {
      const until = Date.now() + 150;
      while (Date.now() < until) { /* 짧은 스핀 대기 */ }
      try {
        fs.renameSync(tmp, file);
      } catch (e2) {
        try { fs.unlinkSync(tmp); } catch (_) { /* noop */ }
        throw e2;
      }
    } else {
      try { fs.unlinkSync(tmp); } catch (_) { /* noop */ }
      throw e;
    }
  }
}

function writeJson(file, obj) {
  writeAtomic(file, JSON.stringify(obj, null, 2) + '\n');
}

function writeText(file, text) {
  writeAtomic(file, text);
}

// 대시보드용 JS 데이터 파일. file:// 로 열리면 fetch() 가 CORS 로 막히므로
// JSON 이 아니라 window 전역에 담은 .js 로 내보낸다.
function writeWindowData(file, varName, obj) {
  writeAtomic(file, `window.${varName} = ${JSON.stringify(obj, null, 2)};\n`);
}

// ── 날짜 ──
function today() {
  return ymd(new Date());
}

function ymd(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// ISO-8601 주차 (목요일 규칙) → "2026-W31"
function isoWeek(dateStr) {
  const d = dateStr instanceof Date ? new Date(dateStr) : new Date(dateStr + 'T00:00:00');
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = t.getUTCDay() || 7;          // 월=1 … 일=7
  t.setUTCDate(t.getUTCDate() + 4 - dayNum);  // 그 주의 목요일로 이동
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t - yearStart) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

// 평일 여부 (RS 사이트 주말 스냅샷은 금요일 복제라 반드시 걸러야 한다)
function isWeekday(dateStr) {
  const day = new Date(dateStr + 'T00:00:00Z').getUTCDay();
  return day >= 1 && day <= 5;
}

// ── 숫자 ──
function num(v) {
  if (v === null || v === undefined || v === '') return null;
  const n = parseFloat(String(v).replace(/[%,$]/g, ''));
  return Number.isFinite(n) ? n : null;
}

function yes(v) {
  return String(v).trim().toUpperCase() === 'YES';
}

function round(n, d = 2) {
  if (n === null || n === undefined || !Number.isFinite(Number(n))) return null;
  const p = Math.pow(10, d);
  return Math.round(Number(n) * p) / p;
}

// "1104.67B" / "3.2T" / "850M" → 숫자(달러)
function parseMarketCap(v) {
  if (v === null || v === undefined) return null;
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  const s = String(v).trim().replace(/[$,]/g, '');
  const m = s.match(/^(-?[\d.]+)\s*([KMBT])?$/i);
  if (!m) return null;
  const base = parseFloat(m[1]);
  if (!Number.isFinite(base)) return null;
  const mult = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 }[(m[2] || '').toUpperCase()] || 1;
  return base * mult;
}

function money(n) {
  if (n === null || n === undefined) return '—';
  return '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 });
}

function pct(n, digits = 2) {
  if (n === null || n === undefined || !Number.isFinite(Number(n))) return '—';
  const v = Number(n);
  return (v >= 0 ? '+' : '') + v.toFixed(digits) + '%';
}

// 백분위(높을수록 강함) → "상위 N%" 표기
function topPct(p, digits = 1) {
  if (p === null || p === undefined) return '—';
  return (100 - Number(p)).toFixed(digits);
}

// ── 로그 ──
const TEAM_COLORS = {
  T1: '\x1b[36m',      // 시장환경
  T2: '\x1b[35m',      // 종목선정
  T3: '\x1b[33m',      // 추적
  T4: '\x1b[32m',      // EP·촉매
  T5: '\x1b[34m',      // 주도섹터
  CHIEF: '\x1b[91m',   // 실장
  SYSTEM: '\x1b[90m',
  WARN: '\x1b[93m',
};
const RESET = '\x1b[0m';

function say(who, msg) {
  const c = TEAM_COLORS[who] || '';
  console.log(`${c}[${who}]${RESET} ${msg}`);
}

module.exports = {
  paths, CACHE_DIR, loadEnv,
  ensureDir, readJson, writeJson, writeText, writeAtomic, writeWindowData,
  today, ymd, isoWeek, isWeekday,
  num, yes, round, parseMarketCap, money, pct, topPct,
  say,
};
