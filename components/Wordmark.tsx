type WordmarkProps = {
  size?: "sm" | "lg";
};

export default function Wordmark({ size = "sm" }: WordmarkProps) {
  const nameClass = size === "lg" ? "text-3xl" : "text-xl";
  const subClass = size === "lg" ? "text-[0.65rem]" : "text-[0.55rem]";

  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`${nameClass} font-bold tracking-tight text-fg`}>
        Six<span className="text-accent">o</span>phor
      </span>
      <span
        className={`${subClass} font-medium uppercase tracking-[0.35em] text-muted`}
      >
        Software
      </span>
    </span>
  );
}
