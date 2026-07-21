"use client";

import { useEffect, useRef } from "react";

const SIZE = 540;
const FONT_SIZE = 190;
const EDGE_MIN_DIST = 6; // even spacing between outline dots (offscreen px)
const DOT_R = 3.4; // base display dot radius

const CYAN = { r: 34, g: 211, b: 238 };
const WHITE = { r: 245, g: 247, b: 250 };
const INK = { r: 11, g: 13, b: 18 };

type Node = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  phase: number;
  bobSpeed: number;
  r: number;
  color: typeof CYAN;
  pulseAmt: number;
};

function rgba(c: typeof CYAN, a: number) {
  return `rgba(${c.r},${c.g},${c.b},${a})`;
}

// Trace each digit's outline with evenly spaced dots (matches the logo's
// dense particle-ring "o"), tag the "0" cyan and record its center/radius
// so an orbit node can circle it.
function buildNodes(): {
  nodes: Node[];
  zeroCenter: { x: number; y: number };
  zeroR: number;
} {
  const empty = { nodes: [] as Node[], zeroCenter: { x: 0, y: 0 }, zeroR: 0 };
  const off = document.createElement("canvas");
  off.width = SIZE;
  off.height = SIZE;
  const ctx = off.getContext("2d", { willReadFrequently: true });
  if (!ctx) return empty;

  const font = `900 ${FONT_SIZE}px Arial, Helvetica, sans-serif`;
  ctx.font = font;
  const digits = ["6", "0", "4"] as const;
  const widths = digits.map((d) => ctx.measureText(d).width);
  const gap = FONT_SIZE * 0.08;
  const totalW = widths[0] + widths[1] + widths[2] + gap * 2;
  const scale = (SIZE * 0.94) / totalW;

  const nodes: Node[] = [];
  let cursor = (SIZE - totalW * scale) / 2;
  let zeroCenter = { x: 0, y: 0 };
  let zeroR = 0;

  digits.forEach((digit, di) => {
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.font = font;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText(digit, 0, SIZE / 2);
    const w = Math.ceil(widths[di]);
    const data = ctx.getImageData(0, 0, SIZE, SIZE).data;
    const lit = (x: number, y: number) =>
      x >= 0 && y >= 0 && x < SIZE && y < SIZE && data[(y * SIZE + x) * 4 + 3] > 128;

    // edge pixels: lit with at least one non-lit 4-neighbor
    const edges: [number, number][] = [];
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < w; x++) {
        if (!lit(x, y)) continue;
        if (!lit(x - 1, y) || !lit(x + 1, y) || !lit(x, y - 1) || !lit(x, y + 1))
          edges.push([x, y]);
      }
    }

    // thin to even spacing with a spatial grid
    const cell = EDGE_MIN_DIST;
    const grid = new Map<string, [number, number][]>();
    const kept: [number, number][] = [];
    for (const [x, y] of edges) {
      const gx = Math.floor(x / cell);
      const gy = Math.floor(y / cell);
      let ok = true;
      for (let ny = gy - 1; ny <= gy + 1 && ok; ny++) {
        for (let nx = gx - 1; nx <= gx + 1 && ok; nx++) {
          const arr = grid.get(`${nx},${ny}`);
          if (arr)
            for (const p of arr)
              if (Math.hypot(p[0] - x, p[1] - y) < EDGE_MIN_DIST) {
                ok = false;
                break;
              }
        }
      }
      if (ok) {
        kept.push([x, y]);
        const k = `${gx},${gy}`;
        if (!grid.has(k)) grid.set(k, []);
        grid.get(k)!.push([x, y]);
      }
    }

    const color = digit === "0" ? CYAN : WHITE;
    let minx = Infinity,
      maxx = -Infinity,
      miny = Infinity,
      maxy = -Infinity;
    for (const [x, y] of kept) {
      const dx = cursor + x * scale;
      const dy = SIZE / 2 + (y - SIZE / 2) * scale;
      nodes.push({
        baseX: dx,
        baseY: dy,
        x: 0,
        y: 0,
        phase: Math.random() * Math.PI * 2,
        bobSpeed: 0.3 + Math.random() * 0.3,
        r: DOT_R * (0.85 + Math.random() * 0.3),
        color,
        pulseAmt: 0,
      });
      if (digit === "0") {
        minx = Math.min(minx, dx);
        maxx = Math.max(maxx, dx);
        miny = Math.min(miny, dy);
        maxy = Math.max(maxy, dy);
      }
    }
    if (digit === "0") {
      zeroCenter = { x: (minx + maxx) / 2, y: (miny + maxy) / 2 };
      zeroR = Math.max(maxx - minx, maxy - miny) / 2 + 2;
    }
    cursor += (widths[di] + (di < 2 ? gap : 0)) * scale;
  });

  return { nodes, zeroCenter, zeroR };
}

export default function Hero604() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.scale(dpr, dpr);

    const { nodes, zeroCenter, zeroR } = buildNodes();
    if (nodes.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let mx = 0.5;
    let my = 0.5;
    let localMX = -999;
    let localMY = -999;

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX / window.innerWidth;
      my = e.clientY / window.innerHeight;
      const rect = canvas!.getBoundingClientRect();
      localMX = e.clientX - rect.left;
      localMY = e.clientY - rect.top;
    }
    document.addEventListener("mousemove", onMouseMove, { passive: true });

    let raf: number | null = null;
    let lastTs: number | null = null;
    let elapsed = 0;

    function drawFrame(ts: number) {
      if (lastTs === null) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      elapsed += dt;

      ctx!.clearRect(0, 0, SIZE, SIZE);

      const offX = (mx - 0.5) * 12;
      const offY = (my - 0.5) * 8;

      for (const n of nodes) {
        n.x = n.baseX + Math.sin(elapsed * n.bobSpeed + n.phase) * 1.2 + offX;
        n.y = n.baseY + Math.cos(elapsed * n.bobSpeed + n.phase) * 1.2 + offY;

        const dHover = Math.hypot(n.x - localMX, n.y - localMY);
        if (dHover < 46) n.pulseAmt = Math.min(1, n.pulseAmt + dt * 6);
        else if (n.pulseAmt > 0) n.pulseAmt = Math.max(0, n.pulseAmt - dt * 1.6);

        const boost = n.pulseAmt;
        if (boost > 0.05) {
          const glowR = 7 + boost * 9;
          const grd = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
          grd.addColorStop(0, rgba(n.color, 0.32 * boost));
          grd.addColorStop(1, "rgba(0,0,0,0)");
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, glowR, 0, Math.PI * 2);
          ctx!.fillStyle = grd;
          ctx!.fill();
        }

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r + boost * 1.1, 0, Math.PI * 2);
        ctx!.fillStyle = rgba(n.color, 0.9 + boost * 0.1);
        ctx!.fill();
      }

      // orbit node circling the 0, echoing the logo mark
      const angle = elapsed * 0.5 - Math.PI / 4;
      const ox = zeroCenter.x + Math.cos(angle) * zeroR + offX;
      const oy = zeroCenter.y + Math.sin(angle) * zeroR + offY;
      ctx!.beginPath();
      ctx!.arc(ox, oy, 8, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(INK, 1);
      ctx!.fill();
      ctx!.lineWidth = 2.6;
      ctx!.strokeStyle = rgba(CYAN, 0.95);
      ctx!.stroke();
      ctx!.beginPath();
      ctx!.arc(ox, oy, 2.8, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(CYAN, 1);
      ctx!.fill();

      ctx!.font = '8px "Courier New", monospace';
      ctx!.textAlign = "left";
      ctx!.fillStyle = rgba(CYAN, 0.3);
      ctx!.fillText("// six_o_four.canvas", 8, SIZE - 8);

      if (!reducedMotion) raf = requestAnimationFrame(drawFrame);
    }

    if (reducedMotion) {
      requestAnimationFrame(drawFrame);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (raf === null) {
              lastTs = null;
              raf = requestAnimationFrame(drawFrame);
            }
          } else if (raf !== null) {
            cancelAnimationFrame(raf);
            raf = null;
          }
        },
        { threshold: 0 },
      );
      observer.observe(canvas);
      raf = requestAnimationFrame(drawFrame);

      return () => {
        observer.disconnect();
        if (raf !== null) cancelAnimationFrame(raf);
        document.removeEventListener("mousemove", onMouseMove);
      };
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: SIZE, height: SIZE }}
      aria-hidden="true"
    />
  );
}
