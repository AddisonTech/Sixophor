import Hero604 from "./Hero604";

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="flex items-center justify-between gap-8 py-24 sm:py-32 lg:py-36">
        <div className="flex flex-col items-start gap-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Custom software and web design for small businesses and independent
            professionals who need it <span className="text-accent">built right.</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted sm:text-xl">
            Sixophor Software is a small design and development studio.
            Websites, front ends, dashboards, and AI features, built carefully
            and handed off clean.
          </p>
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85"
              >
                Start a Project
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-md border border-edge px-8 text-base font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Ask a question
              </a>
            </div>
            <p className="text-sm text-muted">
              Free scoping call, no obligation, reply within one business day.
            </p>
          </div>
        </div>
        {/* Canvas hidden below lg. At xl+ it shifts right by (half the viewport
            minus a fixed offset) so it keeps a small, constant gap to the
            viewport edge at any desktop width instead of drifting inward. */}
        <div className="hidden shrink-0 lg:block lg:translate-x-0 xl:translate-x-[calc(50vw-582px)]">
          <Hero604 />
        </div>
      </div>
    </section>
  );
}
