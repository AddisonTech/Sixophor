import Image from "next/image";
import Link from "next/link";
import Wordmark from "./Wordmark";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import BookCallButton from "./BookCallButton";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/lib/site";
import type { Industry } from "@/lib/industries";

export default function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Sixophor Software home" className="py-2">
            <Wordmark />
          </Link>
          <BookCallButton className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-85" />
        </nav>
      </header>

      <main className="flex-1 overflow-x-clip">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <p className="font-mono text-sm text-accent/80">{industry.eyebrow}</p>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {industry.headline}{" "}
                <span className="text-accent">{industry.headlineAccent}</span>
              </h1>
              <p className="max-w-xl text-lg text-muted">{industry.subhead}</p>
              <div className="mt-2 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <BookCallButton className="inline-flex min-h-12 items-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85" />
                  <a
                    href={industry.demo.href}
                    className="inline-flex min-h-12 items-center rounded-md border border-edge px-8 text-base font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    See the live demo
                  </a>
                </div>
                <p className="text-sm text-muted">
                  Free scoping call, no obligation, reply within one business day.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-edge bg-panel">
              <a href={industry.demo.href} className="group block">
                <Image
                  src={industry.demo.image}
                  alt={`Demo website for ${industry.label.toLowerCase()}`}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 550px, 100vw"
                  placeholder="blur"
                  priority
                />
              </a>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="w-full bg-band">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHeading
              eyebrow="// why it matters"
              title="What a good site does for you"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.points.map((p) => (
                <GlowCard
                  key={p.title}
                  className="rounded-lg border border-edge bg-panel p-6"
                >
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Demo showcase */}
        <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="// see it live"
            title="A demo built for your kind of business"
            lead="Every page here is live. Click through and poke around, then picture it with your name on it."
          />
          <GlowCard className="overflow-hidden rounded-lg border border-edge bg-panel">
            <a href={industry.demo.href} className="group grid md:grid-cols-2">
              <div className="overflow-hidden border-b border-edge md:border-b-0 md:border-r">
                <Image
                  src={industry.demo.image}
                  alt={`${industry.demo.label} demo site`}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="text-xs font-medium uppercase tracking-wide text-accent">
                  Live demo
                </span>
                <h3 className="mt-2 text-xl font-semibold">{industry.demo.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {industry.demo.blurb}
                </p>
                <span className="mt-4 text-sm font-semibold text-accent">
                  View the demo →
                </span>
              </div>
            </a>
          </GlowCard>
        </section>

        {/* Pricing + risk reversal */}
        <section className="w-full bg-band">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionHeading
              eyebrow="// pricing"
              title="Straightforward pricing"
              lead={industry.pricingNote}
            />
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
              <GlowCard className="flex flex-col rounded-lg border border-accent/40 bg-panel p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Founding pricing
                </p>
                <p className="mt-3 text-2xl font-bold text-accent">
                  {industry.pricing}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  For my first few clients, in exchange for honest feedback and
                  the OK to feature the finished work.
                </p>
              </GlowCard>
              <ul className="flex flex-col gap-3 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">✓</span>
                  You keep everything at handoff, including the code, accounts,
                  and domain.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">✓</span>
                  50% to start, 50% at handoff. No surprise charges.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">✓</span>
                  Revision checkpoints throughout, so nothing is final until you
                  sign off.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">✓</span>
                  Fast, mobile-friendly, and built to show up on Google.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="// contact"
            title="Start the conversation"
            lead={`Tell me about your ${industry.noun} and I'll get back to you within one business day.`}
          />
          <div className="max-w-2xl">
            <ContactForm />
            <p className="mt-6 text-sm text-muted">
              Prefer email or a call? Reach me directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent transition-opacity hover:opacity-85"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              or{" "}
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="text-accent transition-opacity hover:opacity-85"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
              .
            </p>
            <p className="mt-4 text-xs text-muted">
              Your information is only used to respond to your inquiry, never
              shared or sold.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
