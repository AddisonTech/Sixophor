import SectionHeading from "./SectionHeading";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        title="Services"
        lead="Seven things I do well. If your project spans more than one, we scope it as a single job."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col rounded-lg border border-panel bg-panel p-6 transition-colors hover:border-accent/40"
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
      </div>

      <div className="mt-8 rounded-lg border border-accent/30 bg-panel p-6">
        <p className="text-sm leading-relaxed">
          <span className="font-semibold text-accent">
            Founding client pricing:
          </span>{" "}
          25% off for the first 3 projects, in exchange for a testimonial and
          permission to use the work as a case study.
        </p>
      </div>
    </section>
  );
}
