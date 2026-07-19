import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import DemoBadge from "@/components/DemoBadge";
import QuoteForm from "./QuoteForm";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Ironwood Exteriors | Demo site by Sixophor Software",
  description:
    "A demo contractor website built by Sixophor Software. Ironwood Exteriors is a fictional business.",
  robots: { index: false, follow: false },
};

const services = [
  {
    name: "Roofing",
    blurb: "Full replacements and repairs. Architectural shingle or metal.",
  },
  {
    name: "Siding",
    blurb: "Vinyl and fiber cement. Tear-off, wrap, and clean install.",
  },
  {
    name: "Decks & Porches",
    blurb: "Pressure treated or composite, built to code and built to last.",
  },
  {
    name: "Gutters",
    blurb: "Seamless gutters, guards, and downspout drainage that works.",
  },
];

const promises = [
  { title: "Licensed & insured", blurb: "Proof provided with every quote, before you sign anything." },
  { title: "Straight quotes", blurb: "Itemized, in writing, good for 30 days. No mystery line items." },
  { title: "Clean job sites", blurb: "Magnet sweep for nails and full haul-off. Like we were never there." },
];

export default function ContractorDemo() {
  return (
    <div className="min-h-screen bg-[#101820] text-white">
      <div className={oswald.variable}>
        <div className="bg-[#f2a007] px-5 py-2 text-center text-sm font-bold text-[#101820]">
          Free quotes. Call (555) 555-0198 today.
        </div>

        <header className="border-b border-white/10">
          <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
            <span className="text-2xl font-bold uppercase tracking-wider [font-family:var(--font-oswald)]">
              Ironwood <span className="text-[#f2a007]">Exteriors</span>
            </span>
            <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide sm:flex">
              <a href="#services" className="hover:text-[#f2a007]">
                Services
              </a>
              <a href="#why" className="hover:text-[#f2a007]">
                Why us
              </a>
              <a
                href="#quote"
                className="rounded bg-[#f2a007] px-5 py-2.5 text-[#101820] transition-opacity hover:opacity-90"
              >
                Free quote
              </a>
            </div>
            <a
              href="#quote"
              className="rounded bg-[#f2a007] px-4 py-2.5 text-sm font-bold uppercase text-[#101820] sm:hidden"
            >
              Quote
            </a>
          </nav>
        </header>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <h1 className="max-w-3xl text-5xl font-bold uppercase leading-none tracking-tight [font-family:var(--font-oswald)] sm:text-7xl">
            Roofs, siding, and decks{" "}
            <span className="text-[#f2a007]">done right the first time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Two decades on ladders in this county. We show up when we say we
            will, quote what it actually costs, and stand behind the work.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex min-h-12 items-center justify-center rounded bg-[#f2a007] px-8 font-bold uppercase tracking-wide text-[#101820] transition-opacity hover:opacity-90"
            >
              Get a free quote
            </a>
            <a
              href="tel:5555550198"
              className="inline-flex min-h-12 items-center justify-center rounded border-2 border-white/30 px-8 font-bold uppercase tracking-wide transition-colors hover:border-[#f2a007] hover:text-[#f2a007]"
            >
              (555) 555-0198
            </a>
          </div>
        </section>

        <section id="services" className="bg-white/5 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold uppercase tracking-tight [font-family:var(--font-oswald)]">
              What we do
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="rounded border-t-4 border-[#f2a007] bg-[#101820] p-6"
                >
                  <h3 className="text-xl font-bold uppercase [font-family:var(--font-oswald)]">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {s.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-4xl font-bold uppercase tracking-tight [font-family:var(--font-oswald)]">
            Why folks call us back
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {promises.map((p) => (
              <div key={p.title} className="border-l-4 border-[#f2a007] pl-5">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.blurb}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm uppercase tracking-wide text-white/40">
            Serving the tri-county area, 30 miles around town.
          </p>
        </section>

        <section id="quote" className="bg-white/5 py-20">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="text-4xl font-bold uppercase tracking-tight [font-family:var(--font-oswald)]">
              Get your free quote
            </h2>
            <p className="mt-3 text-white/60">
              Tell us about the job. We&apos;ll call you back the same business
              day.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-center text-sm text-white/40">
          Ironwood Exteriors is a fictional company. This page is a demo
          build.
        </footer>
      </div>

      <DemoBadge />
    </div>
  );
}
