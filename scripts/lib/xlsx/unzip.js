'use strict';
// 최소 ZIP 리더 — Node 내장 zlib 만으로 .xlsx(=ZIP) 안의 XML 을 꺼낸다. 의존성 0.
//
// xlsx 구조: ZIP 안에 xl/worksheets/sheet1.xml, xl/sharedStrings.xml 등이 들어있다.
// FINRA margin-statistics.xlsx 실측: 10개 엔트리, 전부 deflate(method 8), sharedStrings 없음.

const zlib = require('zlib');

const SIG_EOCD = 0x06054b50;
const SIG_CD = 0x02014b50;

// End Of Central Directory 를 뒤에서 찾는다 (주석 최대 65535 + 헤더 22)
function findEOCD(buf) {
  const maxBack = Math.min(buf.length, 65557);
  for (let i = buf.length - 22; i >= buf.length - maxBack; i--) {
    if (i < 0) break;
    if (buf.readUInt32LE(i) === SIG_EOCD) return i;
  }
  return -1;
}

function listEntries(buf) {
  const eocd = findEOCD(buf);
  if (eocd < 0) throw new Error('EOCD 없음 — ZIP 아님');
  const entryCount = buf.readUInt16LE(eocd + 10);
  const cdOffset = buf.readUInt32LE(eocd + 16);
  // ZIP64 방어: 이 값이면 32비트 필드로 표현 못 하는 크기다 → 지원하지 않는다
  if (cdOffset === 0xFFFFFFFF || entryCount === 0xFFFF) throw new Error('ZIP64 미지원');

  const entries = [];
  let p = cdOffset;
  for (let i = 0; i < entryCount; i++) {
    if (p + 46 > buf.length || buf.readUInt32LE(p) !== SIG_CD) break;
    const method = buf.readUInt16LE(p + 10);
    const csize = buf.readUInt32LE(p + 20);
    const usize = buf.readUInt32LE(p + 24);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOffset = buf.readUInt32LE(p + 42);
    const name = buf.slice(p + 46, p + 46 + nameLen).toString('utf8');
    entries.push({ name, method, csize, usize, localOffset });
    p += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

function readEntryFrom(buf, entry) {
  const lho = entry.localOffset;
  if (lho + 30 > buf.length) return null;
  const nameLen = buf.readUInt16LE(lho + 26);
  const extraLen = buf.readUInt16LE(lho + 28);
  const start = lho + 30 + nameLen + extraLen;
  const raw = buf.slice(start, start + entry.csize);
  if (entry.method === 0) return raw;                      // stored
  if (entry.method === 8) return zlib.inflateRawSync(raw);  // deflate
  return null;                                              // 그 외 압축방식은 미지원
}

function readEntry(buf, name) {
  const entries = listEntries(buf);
  const e = entries.find((x) => x.name === name);
  if (!e) return null;
  return readEntryFrom(buf, e);
}

module.exports = { listEntries, readEntry, readEntryFrom, findEOCD };
