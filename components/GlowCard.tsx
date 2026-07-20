"use client";

import { useRef } from "react";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

// Card wrapper whose border lights up with a cyan glow that follows the cursor.
export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
      className={`glow-card ${className}`}
    >
      {children}
    </div>
  );
}
