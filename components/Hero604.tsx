"use client";

import { useEffect, useRef } from "react";

const SIZE = 540;
const SAMPLE_STEP = 9;
const CONNECT_RADIUS = 33;
const MAX_LINKS_PER_NODE = 3;

const CYAN = { r: 34, g: 211, b: 238 };
const WHITE = { r: 255, g: 255, b: 255 };

type Node = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  phase: number;
  bobSpeed: number;
  pulseAmt: number;
  color: typeof CYAN;
};

type Link = {
  a: Node;
  b: Node;
  pulse: number;
  pulseSpeed: number;
  hasPulse: boolean;
};

function rgba(c: typeof CYAN, a: number) {
  return `rgba(${c.r},${c.g},${c.b},${a})`;
}

// Rasterize "604" offscreen and sample lit pixels into node positions,
// tagging each digit so the "0" can stay cyan.
function buildNodes(): Node[] {
  const off = document.createElement("canvas");
  off.width = SIZE;
  off.height = SIZE;
  const ctx = off.getContext("2d");
  if (!ctx) return [];

  const fontSize = 170;
  ctx.font = `900 ${fontSize}px Arial, Helvetica, sans-serif`;
  const digits = ["6", "0", "4"] as const;
  const widths = digits.map((d) => ctx.measureText(d).width);
  const totalW = widths[0] + widths[1] + widths[2];
  const scale = (SIZE * 0.92) / totalW;

  const nodes: Node[] = [];
  let xCursor = (SIZE - totalW * scale) / 2;

  digits.forEach((digit, i) => {
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.font = `900 ${fontSize}px Arial, Helvetica, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText(digit, 0, SIZE / 2);
    const pixels = ctx.getImageData(0, 0, SIZE, SIZE).data;

    for (let y = 0; y < SIZE; y += SAMPLE_STEP) {
      for (let x = 0; x < Math.ceil(widths[i]); x += SAMPLE_STEP) {
        if (pixels[(y * SIZE + x) * 4 + 3] > 128) {
          nodes.push({
            baseX: xCursor + x * scale,
            baseY: SIZE / 2 + (y - SIZE / 2) * scale,
            x: 0,
            y: 0,
            phase: Math.random() * Math.PI * 2,
            bobSpeed: 0.3 + Math.random() * 0.4,
            pulseAmt: 0,
            color: digit === "0" ? CYAN : WHITE,
          });
        }
      }
    }
    xCursor += widths[i] * scale;
  });

  return nodes;
}

function buildLinks(nodes: Node[]): Link[] {
  const links: Link[] = [];
  const linkCount = new Map<Node, number>();

  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    const candidates: { node: Node; dist: number }[] = [];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const d = Math.hypot(a.baseX - b.baseX, a.baseY - b.baseY);
      if (d < CONNECT_RADIUS) candidates.push({ node: b, dist: d });
    }
    candidates.sort((p, q) => p.dist - q.dist);
    for (const c of candidates.slice(0, MAX_LINKS_PER_NODE)) {
      if ((linkCount.get(c.node) ?? 0) >= MAX_LINKS_PER_NODE + 1) continue;
      links.push({
        a,
        b: c.node,
        pulse: Math.random(),
        pulseSpeed: 0.3 + Math.random() * 0.5,
        hasPulse: Math.random() < 0.18,
      });
      linkCount.set(c.node, (linkCount.get(c.node) ?? 0) + 1);
    }
  }
  return links;
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

    const nodes = buildNodes();
    const links = buildLinks(nodes);
    if (nodes.length === 0) return;

    // Bounds of the "0" (cyan nodes) so a node can orbit it, echoing the logo.
    let zMinX = Infinity, zMaxX = -Infinity, zMinY = Infinity, zMaxY = -Infinity;
    for (const n of nodes) {
      if (n.color === CYAN) {
        zMinX = Math.min(zMinX, n.baseX);
        zMaxX = Math.max(zMaxX, n.baseX);
        zMinY = Math.min(zMinY, n.baseY);
        zMaxY = Math.max(zMaxY, n.baseY);
      }
    }
    const zeroCenter = { x: (zMinX + zMaxX) / 2, y: (zMinY + zMaxY) / 2 };
    const zeroR = Math.max(zMaxX - zMinX, zMaxY - zMinY) / 2 + 2;

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

      const offX = (mx - 0.5) * 14;
      const offY = (my - 0.5) * 10;

      for (const n of nodes) {
        n.x = n.baseX + Math.sin(elapsed * n.bobSpeed + n.phase) * 1.6 + offX;
        n.y = n.baseY + Math.cos(elapsed * n.bobSpeed + n.phase) * 1.6 + offY;

        const dHover = Math.hypot(n.x - localMX, n.y - localMY);
        if (dHover < 42) n.pulseAmt = Math.min(1, n.pulseAmt + dt * 6);
        else if (n.pulseAmt > 0) n.pulseAmt = Math.max(0, n.pulseAmt - dt * 1.6);
      }

      for (const l of links) {
        const boost = Math.max(l.a.pulseAmt, l.b.pulseAmt);
        const lineGrad = ctx!.createLinearGradient(l.a.x, l.a.y, l.b.x, l.b.y);
        lineGrad.addColorStop(0, rgba(l.a.color, 0.1 + boost * 0.3));
        lineGrad.addColorStop(1, rgba(l.b.color, 0.1 + boost * 0.3));
        ctx!.beginPath();
        ctx!.moveTo(l.a.x, l.a.y);
        ctx!.lineTo(l.b.x, l.b.y);
        ctx!.strokeStyle = lineGrad;
        ctx!.lineWidth = 0.6 + boost * 0.6;
        ctx!.stroke();

        if (l.hasPulse) {
          l.pulse = (l.pulse + l.pulseSpeed * dt) % 1;
          const px = l.a.x + (l.b.x - l.a.x) * l.pulse;
          const py = l.a.y + (l.b.y - l.a.y) * l.pulse;
          ctx!.beginPath();
          ctx!.arc(px, py, 1.4 + boost, 0, Math.PI * 2);
          ctx!.fillStyle = rgba(l.pulse < 0.5 ? l.a.color : l.b.color, 0.8);
          ctx!.fill();
        }
      }

      for (const n of nodes) {
        const boost = n.pulseAmt;
        if (boost > 0.05) {
          const glowR = 8 + boost * 8;
          const grd = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
          grd.addColorStop(0, rgba(n.color, 0.35 * boost));
          grd.addColorStop(1, "rgba(0,0,0,0)");
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, glowR, 0, Math.PI * 2);
          ctx!.fillStyle = grd;
          ctx!.fill();
        }
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.7 + boost * 1.2, 0, Math.PI * 2);
        ctx!.fillStyle = rgba(n.color, 0.92 + boost * 0.08);
        ctx!.fill();
      }

      // orbit node circling the "0", carried over from the logo mark
      const orbitAngle = elapsed * 0.5 - Math.PI / 4;
      const ox = zeroCenter.x + Math.cos(orbitAngle) * zeroR + offX;
      const oy = zeroCenter.y + Math.sin(orbitAngle) * zeroR + offY;
      ctx!.beginPath();
      ctx!.arc(ox, oy, 8, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(11,13,18,1)";
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
      ctx!.fillStyle = "rgba(34,211,238,0.3)";
      ctx!.fillText("// six_o_four.canvas", 8, SIZE - 8);

      if (!reducedMotion) raf = requestAnimationFrame(drawFrame);
    }

    if (reducedMotion) {
      // Single static frame, no animation loop
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
