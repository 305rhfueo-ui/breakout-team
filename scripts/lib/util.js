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
// compact:true 면 들여쓰기를 빼서 파일을 절반으로 줄인다.
// 사람이 읽을 일 없는 큰 데이터(유니버스 1,412행)에만 쓴다 — git diff 가 한 줄이 되므로
// 사람이 들여다보는 team*.js 에는 쓰지 않는다.
function writeWindowData(file, varName, obj, { compact = false } = {}) {
  const json = compact ? JSON.stringify(obj) : JSON.stringify(obj, null, 2);
  writeAtomic(file, `window.${varName} = ${json};\n`);
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

// ETF·ETN 판별. RS 사이트는 Sector/Industry 를 둘 다 'ETF' 로 준다 (실측 14종목).
//
// 4팀 EP 는 개별 종목의 실적 촉매(어닝 서프라이즈·FDA·계약)를 찾는 팀이라 ETF 가 섞이면 안 된다.
// ETF 는 실적 발표 자체가 없어 6분류가 성립하지 않고, 레버리지 상품(GDXU 3배 등)은
// ADR·이격도 같은 변동성 지표가 구조적으로 왜곡된다.
// ⚠️ 1팀 주도주와 5팀 업종표에는 그대로 둔다 — 거기서는 "시장에서 뭐가 극단적인가"를
//    보는 용도라 ETF 도 정보 가치가 있다.
function isEtf(row) {
  if (!row) return false;
  const s = String(row.Sector ?? row.sector ?? '').trim().toUpperCase();
  const i = String(row.Industry ?? row.industry ?? '').trim().toUpperCase();
  return s === 'ETF' || i === 'ETF';
}

// ── 리서치 커버리지 ──
// "상한 때문에 빠진 항목을 숨기지 마라"는 이 시스템의 원칙이다.
//
// ⚠️ 같은 버그가 두 번 났다. 워크플로가 돌려주는 coverage.total 은
//    "그 실행에 넘긴 개수"(=상한)라, 그대로 쓰면 12/12 처럼 전량 조사한 것으로 보인다.
//    2팀에서 한 번 고쳤는데 4팀에서 스프레드 순서 때문에 재발했다:
//      { done, total: items.length, ...payload.coverage }   ← 뒤가 앞을 덮어씀
//    그래서 계산을 한곳에 모으고 total 을 호출부가 반드시 명시하게 만든다.
//
// @param total   전체 대상 수 — 상한이 아니라 "조사했어야 할 전체"
// @param failed  조사를 시도했으나 에이전트 오류로 실패한 수.
//                ⚠️ 이걸 pending 에 섞으면 "상한 때문에 안 했다"는 거짓말이 된다.
//                2026-08-11 에 BMRN 이 실제로 그렇게 표시됐다 — 시도했다가 죽은 건데.
//
// done + failed + pending === total 이 항상 성립한다. tests/lib/coverage.test.js 가 고정한다.
function coverageOf({ done, total, cap = null, unit = '종목', hint = '', failed = 0 }) {
  const d = Number(done) || 0;
  const t = Number(total) || 0;
  const f = Math.max(0, Math.min(Number(failed) || 0, Math.max(0, t - d)));
  const pending = Math.max(0, t - d - f);

  const parts = [];
  if (pending || f) parts.push(`${t}${unit} 중 ${d}${unit}을 조사했습니다.`);
  if (f) parts.push(`${f}${unit}은 조사 중 오류로 실패했습니다 — 다음 실행에서 재시도합니다.`);
  if (pending) {
    parts.push(`나머지 ${pending}${unit}은 상한(${cap ?? '?'}) 밖이라 아직 조사하지 않았습니다.`);
    // ⚠️ 로테이션이 실제로 구현된 뒤에만 이 약속을 한다.
    //    예전 문구("캐시가 쌓이면 며칠 안에 전량 커버됩니다")는 순환 로직이 없어서 거짓이었다.
    parts.push('다음 실행부터 순환 조사되어 며칠에 걸쳐 전량 채워집니다.');
  }
  if (hint) parts.push(hint);

  return {
    done: d, total: t, cap, pending, failed: f,
    note: parts.length ? parts.join(' ') : `전 ${unit}(${t}) 조사 완료`,
  };
}

module.exports = {
  coverageOf,
  isEtf,
  paths, CACHE_DIR, loadEnv,
  ensureDir, readJson, writeJson, writeText, writeAtomic, writeWindowData,
  today, ymd, isoWeek, isWeekday,
  num, yes, round, parseMarketCap, money, pct, topPct,
  say,
};
