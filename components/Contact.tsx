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
        </div>
      </div>
    </section>
  );
}
