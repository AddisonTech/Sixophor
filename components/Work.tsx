import SectionHeading from "./SectionHeading";

const demos = [
  {
    label: "Restaurant",
    summary:
      "A site for a local restaurant: menu, hours, location, and online ordering links, built to be updated without a developer.",
  },
  {
    label: "Contractor / home services",
    summary:
      "A lead-focused site for a contractor: services, service area, photo gallery, and a quote request form that goes straight to their phone.",
  },
  {
    label: "Small retail shop",
    summary:
      "A storefront site for a small shop: featured products, store info, and hooks for social and email so regulars keep coming back.",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        title="Work"
        lead="Case studies land here as projects wrap up. These three demo builds show the kind of work Sixophor takes on."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <div
            key={demo.label}
            className="flex flex-col rounded-lg border border-panel bg-panel p-6"
          >
            <span className="mb-3 inline-block w-fit rounded-full border border-accent/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
              Demo project, coming soon
            </span>
            <h3 className="text-lg font-semibold">{demo.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {demo.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
