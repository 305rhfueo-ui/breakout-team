'use strict';
// 최소 xlsx 시트 파서 — sheet XML → 행 배열([{A:'2026-06', B:1502072, ...}]).
// sharedStrings 유무 양쪽 지원, inlineStr 지원, 자기폐합 셀(<c r="B2"/>) 지원.

const { listEntries, readEntry, readEntryFrom } = require('./unzip');

function decodeEntities(s) {
  return String(s)
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&amp;/g, '&');   // & 는 마지막에 (이중 디코드 방지)
}

// 셀 참조 "AB12" → 열문자 "AB"
function colOf(ref) {
  const m = String(ref || '').match(/^([A-Z]+)/);
  return m ? m[1] : null;
}

function parseSharedStrings(xml) {
  if (!xml) return [];
  const out = [];
  const siRe = /<si\b[^>]*>([\s\S]*?)<\/si>/g;
  let m;
  while ((m = siRe.exec(xml))) {
    // <si> 안에 <t> 가 여러 개(리치텍스트)일 수 있다 → 전부 이어붙인다
    const parts = [];
    const tRe = /<t\b[^>]*>([\s\S]*?)<\/t>/g;
    let t;
    while ((t = tRe.exec(m[1]))) parts.push(decodeEntities(t[1]));
    out.push(parts.join(''));
  }
  return out;
}

// 한 <c ...>...</c> 또는 <c .../> 에서 값 추출
function cellValue(attrs, inner, shared) {
  const tm = attrs.match(/\bt="([^"]*)"/);
  const type = tm ? tm[1] : null;

  if (type === 'inlineStr') {
    const parts = [];
    const tRe = /<t\b[^>]*>([\s\S]*?)<\/t>/g;
    let t;
    while ((t = tRe.exec(inner || ''))) parts.push(decodeEntities(t[1]));
    return parts.join('');
  }

  const vm = (inner || '').match(/<v\b[^>]*>([\s\S]*?)<\/v>/);
  if (!vm) return null;
  const raw = decodeEntities(vm[1]);

  if (type === 's') {
    const idx = Number(raw);
    return Number.isFinite(idx) && shared[idx] !== undefined ? shared[idx] : raw;
  }
  if (type === 'str' || type === 'e') return raw;
  const n = Number(raw);
  return Number.isFinite(n) ? n : raw;
}

function parseSheet(xml, shared) {
  const rows = [];
  const rowRe = /<row\b([^>]*)>([\s\S]*?)<\/row>/g;
  let rm;
  while ((rm = rowRe.exec(xml))) {
    const cells = {};
    // 열린 셀과 자기폐합 셀 둘 다 매칭
    const cRe = /<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g;
    let cm;
    while ((cm = cRe.exec(rm[2]))) {
      const attrs = cm[1] || '';
      const inner = cm[2];
      const refm = attrs.match(/\br="([^"]*)"/);
      const col = colOf(refm ? refm[1] : null);
      if (!col) continue;
      const v = cellValue(attrs, inner, shared);
      if (v !== null && v !== '') cells[col] = v;
    }
    if (Object.keys(cells).length) rows.push(cells);
  }
  return rows;
}

// zip 버퍼 → 첫 워크시트(또는 지정 시트)의 행 배열
function readSheetRows(zipBuf, { sheet } = {}) {
  const entries = listEntries(zipBuf);
  const sharedBuf = entries.find((e) => e.name === 'xl/sharedStrings.xml');
  const shared = sharedBuf ? parseSharedStrings(readEntryFrom(zipBuf, sharedBuf).toString('utf8')) : [];

  let target = sheet
    ? entries.find((e) => e.name === sheet)
    : entries.filter((e) => /^xl\/worksheets\/sheet\d+\.xml$/.test(e.name))
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))[0];
  if (!target) throw new Error('워크시트 없음');

  const xml = readEntryFrom(zipBuf, target).toString('utf8');
  return { rows: parseSheet(xml, shared), sheetName: target.name, sharedCount: shared.length, entryCount: entries.length };
}

module.exports = { readSheetRows, parseSheet, parseSharedStrings, decodeEntities, colOf };
