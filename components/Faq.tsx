import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/faq";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="// faq"
        title="Common questions"
        lead="The things most people ask before starting a project."
      />

      <div className="flex max-w-3xl flex-col gap-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-edge bg-panel open:border-accent/40"
          >
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="text-accent transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
