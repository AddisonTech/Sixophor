type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="node-divider mb-4" aria-hidden="true" />
      {eyebrow && (
        <p className="mb-2 font-mono text-sm text-accent/80">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-2xl text-muted">{lead}</p>}
    </div>
  );
}
