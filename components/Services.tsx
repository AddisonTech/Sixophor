import SectionHeading from "./SectionHeading";
import { services } from "@/lib/services";

export default function Services() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        title="Services"
        lead="Seven things I do well. If your project spans more than one, we scope it as a single job."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col rounded-lg border border-accent/40 bg-panel p-6 transition-colors hover:border-accent/70 sm:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-lg font-semibold">{featured.title}</h3>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Most popular
            </span>
          </div>
          <p className="mt-2 flex-1 leading-relaxed text-muted">
            {featured.description}
          </p>
          <p className="mt-4 text-lg font-bold text-accent">
            {featured.pricing}
          </p>
        </div>

        {rest.map((service) => (
          <div
            key={service.title}
            className="flex flex-col rounded-lg border border-edge bg-panel p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-accent">
              {service.pricing}
            </p>
          </div>
        ))}

        <div className="flex flex-col justify-center rounded-lg border border-accent/40 bg-accent/5 p-6 sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Founding client pricing
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            25% off for the first 3 projects, in exchange for a testimonial and
            permission to use the work as a case study.
          </p>
        </div>
      </div>
    </section>
  );
}
