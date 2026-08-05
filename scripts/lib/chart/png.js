'use strict';
// 최소 PNG 인코더 — Raster(RGB) → PNG Buffer. Node 내장 zlib 만 사용, 의존성 0.
//
// 스펙: colorType 2 (truecolor RGB), bitDepth 8, 필터 None(0).
// ⚠️ PNG 의 IDAT 은 zlib 래퍼를 포함한다 → deflateSync (ZIP 쪽의 deflateRawSync 가 아니다).

const zlib = require('zlib');

// CRC32 (다항식 0xEDB88320) — 테이블 지연 생성
let CRC_TABLE = null;
function crcTable() {
  if (CRC_TABLE) return CRC_TABLE;
  CRC_TABLE = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    CRC_TABLE[n] = c;
  }
  return CRC_TABLE;
}

function crc32(buf) {
  const t = crcTable();
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = t[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function encodePng(raster) {
  const { w, h, data } = raster;

  // 원시 스캔라인: 각 행 앞에 필터바이트 0(None) + RGB w*3
  const stride = w * 3;
  const raw = Buffer.alloc(h * (1 + stride));
  for (let y = 0; y < h; y++) {
    raw[y * (1 + stride)] = 0;
    data.copy(raw, y * (1 + stride) + 1, y * stride, (y + 1) * stride);
  }

  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 2;   // color type 2 = truecolor RGB
  ihdr[10] = 0;  // compression
  ihdr[11] = 0;  // filter
  ihdr[12] = 0;  // interlace

  const idat = zlib.deflateSync(raw, { level: 9 });

  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

module.exports = { encodePng, crc32 };

// ── 자체 검증 ──
if (require.main === module) {
  const { Raster } = require('./raster');
  const fs = require('fs');
  const path = require('path');
  const os = require('os');

  if (process.argv.includes('--selftest')) {
    const W = 64, H = 64;
    const r = new Raster(W, H, [0, 0, 0]);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) r.px(x, y, [x * 4, y * 4, 128]);
    r.text(4, 28, 'PNG OK', [255, 255, 255], 1);
    const png = encodePng(r);

    const checks = [];
    // 1) 시그니처 8바이트
    const sigOk = png.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]));
    checks.push(['시그니처 8바이트', sigOk]);
    // 2) IDAT 역압축 길이 == h*(1+w*3)
    let idatData = null;
    let p = 8;
    while (p < png.length) {
      const len = png.readUInt32BE(p);
      const type = png.slice(p + 4, p + 8).toString('ascii');
      if (type === 'IDAT') { idatData = png.slice(p + 8, p + 8 + len); break; }
      p += 12 + len;
    }
    const inflated = idatData ? zlib.inflateSync(idatData) : Buffer.alloc(0);
    const expect = H * (1 + W * 3);
    checks.push([`IDAT 역압축 길이 ${inflated.length} == ${expect}`, inflated.length === expect]);
    // 3) 각 스캔라인 첫 바이트 == 0 (필터 None)
    let filtersOk = true;
    for (let y = 0; y < H; y++) if (inflated[y * (1 + W * 3)] !== 0) { filtersOk = false; break; }
    checks.push(['모든 스캔라인 필터바이트 0', filtersOk]);
    // 4) CRC 검증 (알려진 값)
    checks.push(['CRC32("IEND") == 0xAE426082', crc32(Buffer.from('IEND', 'ascii')) === 0xAE426082]);

    console.log('\n════════ PNG 인코더 자체검증 ════════');
    let allOk = true;
    for (const [label, ok] of checks) { console.log(`  ${ok ? '✅' : '❌'} ${label}`); if (!ok) allOk = false; }

    const out = path.join(os.tmpdir(), 'breakout-png-selftest.png');
    fs.writeFileSync(out, png);
    console.log(`\n  파일: ${out} (${png.length.toLocaleString()} bytes)`);
    console.log(allOk ? '  → OS 뷰어로 열어 그라디언트 + "PNG OK" 글자가 보이면 완전 통과' : '  → 실패 항목 확인 필요');
    process.exit(allOk ? 0 : 1);
  }
  console.log('사용법: node png.js --selftest');
}
