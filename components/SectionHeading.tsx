type SectionHeadingProps = {
  title: string;
  lead?: string;
};

export default function SectionHeading({ title, lead }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="mb-4 h-1 w-10 rounded bg-accent" aria-hidden="true" />
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-2xl text-muted">{lead}</p>}
    </div>
  );
}
