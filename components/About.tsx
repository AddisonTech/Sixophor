import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="w-full bg-band">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="// about" title="About" />

      <div className="max-w-2xl space-y-5 leading-relaxed text-muted">
        <p>
          I&apos;m Addison. I build software: websites, dashboards, AI-driven
          tools, and multi-agent systems, using modern frameworks and the same
          AI tools reshaping how things get built. That&apos;s the core of what
          Sixophor does.
        </p>
        <p>
          What makes it different is where that skill is tested. My day job is
          controls engineering, industrial automation for factory equipment,
          where the standard is absolute. Things either run or they don&apos;t,
          and when they don&apos;t, production stops. You learn to test before
          you ship and to document what you hand off, habits that carry straight
          into how I build software.
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
