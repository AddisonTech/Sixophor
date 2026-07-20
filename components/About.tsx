import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="w-full bg-band">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="// about" title="About" />

      <div className="max-w-2xl space-y-5 leading-relaxed text-muted">
        <p>
          I&apos;m Addison. My day job is controls engineering: I work as a
          Controls Engineering Technician on industrial automation, the systems
          that run factory equipment. That work has a particular standard.
          Things either run or they don&apos;t, and when they don&apos;t,
          production stops. You learn to test before you ship and to document
          what you hand off.
        </p>
        <p>
          Outside the plant, I build software. I&apos;ve been working with
          modern web frameworks and AI tools for years: websites, dashboards,
          mobile apps, and multi-agent systems. Sixophor is where those two
          sides meet: someone who has debugged equipment on a factory floor at
          2 AM, building your website with the newest tools available.
        </p>
        <p>
          Sixophor is a family operation, kept small on purpose. I handle
          design and development, and my wife, Karrie Smith, is our marketing
          director. You talk directly to the people doing the work, from the
          first conversation to the final handoff.
        </p>
        </div>
      </div>
    </section>
  );
}
