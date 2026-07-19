import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import bistroShot from "@/public/work/bistro.png";
import contractorShot from "@/public/work/contractor.png";
import shopShot from "@/public/work/shop.png";

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
    <section id="work" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        title="Work"
        lead="Three demo builds, one for each kind of business I work with most. Click through and poke around; every page is live. Client case studies land here as projects wrap up."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <Link
            key={demo.label}
            href={demo.href}
            className="group flex flex-col overflow-hidden rounded-lg border border-edge bg-panel transition-colors hover:border-accent/40"
          >
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
        ))}
      </div>
    </section>
  );
}
