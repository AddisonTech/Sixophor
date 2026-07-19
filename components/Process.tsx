import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Scope it together",
    description:
      "We talk through your project: what you need, what it should do, and what it will cost. No obligation.",
  },
  {
    title: "Sign and start",
    description:
      "You sign a scope of work and pay a 50% deposit. That locks in the schedule and I get to work.",
  },
  {
    title: "Build with checkpoints",
    description:
      "I build in stages with revision checkpoints along the way, so you see progress and steer before anything is final.",
  },
  {
    title: "Handoff",
    description:
      "You pay the remaining 50% and receive the final files, accounts, and a walkthrough of how everything works.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        title="Process"
        lead="Four steps, no surprises. You always know where the project stands and what happens next."
      />

      <ol className="grid gap-6 md:grid-cols-4 md:gap-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex flex-col">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
                {index + 1}
              </span>
              <span
                className="hidden h-px flex-1 bg-edge md:block"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
