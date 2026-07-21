import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import { services } from "@/lib/services";
import {
  IconSite,
  IconUI,
  IconAI,
  IconBrand,
  IconSEO,
  IconHost,
  IconDash,
} from "./icons";

const icons = [IconSite, IconUI, IconAI, IconBrand, IconSEO, IconHost, IconDash];

export default function Services() {
  const [featured, ...rest] = services;
  const [FeaturedIcon, ...restIcons] = icons;

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="// services"
        title="Services"
        lead="Seven things I do well. If your project spans more than one, we scope it as a single job."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <GlowCard className="flex flex-col rounded-lg border border-accent/40 bg-panel p-6 sm:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <FeaturedIcon className="h-7 w-7 text-accent" />
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Most popular
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold">{featured.title}</h3>
          <p className="mt-2 flex-1 leading-relaxed text-muted">
            {featured.description}
          </p>
          <p className="mt-4 text-lg font-bold text-accent">
            {featured.pricing}
          </p>
        </GlowCard>

        {rest.map((service, i) => {
          const Icon = restIcons[i];
          return (
            <GlowCard
              key={service.title}
              className="flex flex-col rounded-lg border border-edge bg-panel p-6"
            >
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-accent">
                {service.pricing}
              </p>
              {service.pricingNote && (
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {service.pricingNote}
                </p>
              )}
            </GlowCard>
          );
        })}

        <GlowCard className="flex flex-col justify-center rounded-lg border border-accent/40 bg-accent/5 p-6 sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Founding client spots
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            The first 3 projects get special launch pricing, in exchange for a
            testimonial and permission to use the work as a case study.
          </p>
        </GlowCard>
      </div>
    </section>
  );
}
