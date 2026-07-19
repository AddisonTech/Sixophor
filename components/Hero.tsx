export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-start gap-6 py-24 sm:py-32 lg:py-40">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Custom software and web design for people who need it{" "}
          <span className="text-accent">built right.</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">
          Sixophor Software is a small design and development studio. Websites,
          front ends, dashboards, and AI features, built carefully and handed
          off clean.
        </p>
        <a
          href="#contact"
          className="mt-2 inline-flex min-h-12 items-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
