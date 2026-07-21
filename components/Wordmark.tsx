type WordmarkProps = {
  size?: "sm" | "lg" | "xl";
};

// Dense particle ring (radius 25) sampled from the logo art: [cx, cy, r, opacity].
// Colors are driven by design tokens via CSS custom properties so the mark
// stays in sync with the palette.
const RING_DOTS: [number, number, number, number][] = [
  [25, 0, 2.9, 1], [23.8, 7.7, 2.4, 0.9], [20.2, 14.7, 2.8, 1], [14.7, 20.2, 2.3, 0.95],
  [7.7, 23.8, 2.9, 1], [0, 25, 2.4, 0.9], [-7.7, 23.8, 2.8, 1], [-14.7, 20.2, 2.3, 0.95],
  [-20.2, 14.7, 2.9, 1], [-23.8, 7.7, 2.4, 0.9], [-25, 0, 2.8, 1], [-23.8, -7.7, 2.3, 0.95],
  [-20.2, -14.7, 2.9, 1], [-14.7, -20.2, 2.4, 0.9], [-7.7, -23.8, 2.8, 1], [0, -25, 2.3, 0.9],
  [7.7, -23.8, 2.9, 1], [14.7, -20.2, 2.4, 0.95], [20.2, -14.7, 2.8, 1], [23.8, -7.7, 2.3, 0.9],
];

function ParticleO({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-30 -30 60 60"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {RING_DOTS.map(([cx, cy, r, o], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="var(--color-accent)" opacity={o} />
      ))}
      {/* orbit node */}
      <circle
        cx={17.7}
        cy={-17.7}
        r={6.5}
        fill="var(--color-ink)"
        stroke="var(--color-accent)"
        strokeWidth={3}
      />
      <circle cx={17.7} cy={-17.7} r={2.4} fill="var(--color-accent)" />
    </svg>
  );
}

export default function Wordmark({ size = "sm" }: WordmarkProps) {
  const nameClass =
    size === "xl" ? "text-5xl" : size === "lg" ? "text-3xl" : "text-xl";
  const subClass =
    size === "xl"
      ? "text-[0.95rem]"
      : size === "lg"
        ? "text-[0.7rem]"
        : "text-[0.5rem]";

  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className={`inline-flex items-center font-semibold tracking-tight text-fg ${nameClass}`}>
        Six
        <ParticleO className="mx-[0.03em] h-[0.72em] w-[0.72em]" />
        phor
      </span>
      <span
        className={`mt-[0.4em] font-medium uppercase text-fg ${subClass}`}
        style={{ letterSpacing: "0.45em", paddingLeft: "0.45em" }}
      >
        Software
      </span>
    </span>
  );
}
