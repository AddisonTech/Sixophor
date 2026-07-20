import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import bistroShot from "@/public/work/bistro.png";
import contractorShot from "@/public/work/contractor.png";
import shopShot from "@/public/work/shop.png";
import portfolioShot from "@/public/work/portfolio.png";

const demos = [
  {
    label: "Brightwater Bistro",
    kind: "Restaurant",
    summary:
      "Menu, hours, and reservations up front, with a warm look that matches the room. Built so the owner can update the menu without a developer.",
    href: "/demos/bistro",
    image: bistroShot,
  },
  {
    label: "Ironwood Exteriors",
    kind: "Contractor / home services",
    summary:
      "A lead machine: services, trust signals, and a quote form the owner gets the same day. Every button pushes toward a call.",
    href: "/demos/contractor",
    image: contractorShot,
  },
  {
    label: "Juniper & Pine Goods",
    kind: "Small retail shop",
    summary:
      "Featured products, store hours, and an email list for new arrivals. Light and friendly, like walking into the shop.",
    href: "/demos/shop",
    image: shopShot,
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full bg-band">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="// work"
          title="Work"
          lead="Three demo builds, one for each kind of business I work with most. Click through and poke around; every page is live. Client case studies land here as projects wrap up."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <GlowCard
              key={demo.label}
              className="overflow-hidden rounded-lg border border-edge bg-panel"
            >
              <Link href={demo.href} className="group flex h-full flex-col">
                <div className="overflow-hidden border-b border-edge">
                  <Image
                    src={demo.image}
                    alt={`Screenshot of the ${demo.label} demo site`}
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted">
                    {demo.kind} · Demo build
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{demo.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {demo.summary}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-accent">
                    View live demo →
                  </span>
                </div>
              </Link>
            </GlowCard>
          ))}
        </div>

        <GlowCard className="mt-6 overflow-hidden rounded-lg border border-edge bg-panel">
          <a
            href="https://addisontech.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group grid md:grid-cols-2"
          >
            <div className="overflow-hidden border-b border-edge md:border-b-0 md:border-r">
              <Image
                src={portfolioShot}
                alt="Screenshot of Addison's live portfolio site"
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span className="text-xs font-medium uppercase tracking-wide text-accent">
                And one that&apos;s real · Live site
              </span>
              <h3 className="mt-2 text-xl font-semibold">My own portfolio</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The site I built for myself, live right now. Animated canvas
                work, fast load times, and the same design discipline this page
                is built with. Everything Sixophor sells, I use on my own name
                first.
              </p>
              <span className="mt-4 text-sm font-semibold text-accent">
                Visit addisontech.github.io →
              </span>
            </div>
          </a>
        </GlowCard>
      </div>
    </section>
  );
}
