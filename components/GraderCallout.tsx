import Link from "next/link";

export default function GraderCallout() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <div className="flex flex-col items-center gap-5 rounded-lg border border-accent/40 bg-accent/5 px-6 py-8 text-center sm:flex-row sm:justify-between sm:gap-8 sm:text-left">
        <div>
          <p className="text-xl font-semibold sm:text-2xl">
            Curious how your website scores?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Get an instant report card on speed, mobile, and SEO. Free, and no
            email required.
          </p>
        </div>
        <Link
          href="/grader"
          className="inline-flex min-h-12 shrink-0 items-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85"
        >
          Try the free grader →
        </Link>
      </div>
    </section>
  );
}
