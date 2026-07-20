"use client";

import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -120px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="// process"
        title="Process"
        lead="Four steps, no surprises. You always know where the project stands and what happens next."
      />

      <ol
        ref={ref}
        className={`relative grid gap-6 md:grid-cols-4 md:gap-4 ${active ? "process-active" : ""}`}
      >
        {/* Rail behind the step numbers, desktop only */}
        <div
          className="absolute left-0 right-0 top-[18px] hidden h-px bg-edge md:block"
          aria-hidden="true"
        />
        <div
          className="rail-progress absolute left-0 right-0 top-[18px] hidden h-px bg-accent md:block"
          aria-hidden="true"
        />

        {steps.map((step, index) => (
          <li key={step.title} className="relative flex flex-col">
            <span
              className="rail-step relative z-10 mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{ transitionDelay: `${300 + index * 280}ms` }}
            >
              {index + 1}
            </span>
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
