import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-band">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="// contact"
          title="Start a project"
          lead="Tell me what you're building and I'll get back to you within one business day."
        />

      <div className="max-w-2xl">
        <ul className="mb-8 flex flex-col gap-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">✓</span>
            You keep everything at handoff, including the code, accounts, and
            domain.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">✓</span>
            50% to start, 50% at handoff. No surprise charges.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">✓</span>
            Revision checkpoints throughout, so nothing&apos;s final until you
            sign off.
          </li>
        </ul>
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
          Your information is only used to respond to your inquiry, never shared
          or sold.
        </p>
        </div>
      </div>
    </section>
  );
}
