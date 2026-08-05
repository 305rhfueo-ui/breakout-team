'use strict';
// RGB 픽셀 버퍼 + 기본 드로잉 — 의존성 0. png.js 가 이걸 PNG 로 인코딩한다.

const { glyph, GLYPH_W, GLYPH_H, SPACING, textWidth } = require('./font5x7');

class Raster {
  constructor(w, h, bg = [13, 17, 23]) {
    this.w = w; this.h = h;
    this.data = Buffer.alloc(w * h * 3);
    for (let i = 0; i < w * h; i++) {
      this.data[i * 3] = bg[0]; this.data[i * 3 + 1] = bg[1]; this.data[i * 3 + 2] = bg[2];
    }
  }

  px(x, y, rgb) {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    const i = (y * this.w + x) * 3;
    this.data[i] = rgb[0]; this.data[i + 1] = rgb[1]; this.data[i + 2] = rgb[2];
  }

  hline(x0, x1, y, rgb) {
    if (x0 > x1) [x0, x1] = [x1, x0];
    for (let x = Math.round(x0); x <= Math.round(x1); x++) this.px(x, y, rgb);
  }

  vline(x, y0, y1, rgb) {
    if (y0 > y1) [y0, y1] = [y1, y0];
    for (let y = Math.round(y0); y <= Math.round(y1); y++) this.px(x, y, rgb);
  }

  // Bresenham. thick 은 아래로 두께를 더한다.
  line(x0, y0, x1, y1, rgb, thick = 1) {
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    const dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    for (;;) {
      for (let t = 0; t < thick; t++) this.px(x0, y0 + t, rgb);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  }

  rect(x, y, w, h, rgb, { fill = false } = {}) {
    if (fill) {
      for (let yy = 0; yy < h; yy++) this.hline(x, x + w - 1, y + yy, rgb);
    } else {
      this.hline(x, x + w - 1, y, rgb);
      this.hline(x, x + w - 1, y + h - 1, rgb);
      this.vline(x, y, y + h - 1, rgb);
      this.vline(x + w - 1, y, y + h - 1, rgb);
    }
  }

  dashedH(x0, x1, y, rgb, on = 4, off = 4) {
    let x = Math.round(x0);
    while (x <= x1) {
      for (let i = 0; i < on && x + i <= x1; i++) this.px(x + i, y, rgb);
      x += on + off;
    }
  }

  // font5x7 로 텍스트. scale 배율(1=5×7px)
  text(x, y, str, rgb, scale = 1) {
    let cx = Math.round(x);
    for (const ch of String(str)) {
      const g = glyph(ch);
      for (let row = 0; row < GLYPH_H; row++) {
        const bits = g[row];
        for (let col = 0; col < GLYPH_W; col++) {
          if (bits & (1 << (GLYPH_W - 1 - col))) {
            for (let sy = 0; sy < scale; sy++) {
              for (let sx = 0; sx < scale; sx++) {
                this.px(cx + col * scale + sx, y + row * scale + sy, rgb);
              }
            }
          }
        }
      }
      cx += (GLYPH_W + SPACING) * scale;
    }
    return cx;
  }

  textRight(xRight, y, str, rgb, scale = 1) {
    return this.text(xRight - textWidth(str, scale), y, str, rgb, scale);
  }
}

module.exports = { Raster };
