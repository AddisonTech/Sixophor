import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import DemoBadge from "@/components/DemoBadge";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Brightwater Bistro | Demo site by Sixophor Software",
  description:
    "A demo restaurant website built by Sixophor Software. Brightwater Bistro is a fictional business.",
  robots: { index: false, follow: false },
};

const menu = [
  {
    category: "Starters",
    items: [
      { name: "Charred carrots, whipped feta, hot honey", price: "11" },
      { name: "Crispy potatoes, herb aioli", price: "9" },
      { name: "Soup of the day, grilled bread", price: "8" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Pan roasted chicken, spring vegetables, jus", price: "24" },
      { name: "Trout, brown butter, capers, greens", price: "27" },
      { name: "Mushroom ragu, polenta, pecorino", price: "21" },
    ],
  },
  {
    category: "Dessert",
    items: [
      { name: "Buttermilk panna cotta, macerated berries", price: "9" },
      { name: "Chocolate tart, olive oil, sea salt", price: "10" },
    ],
  },
];

const hours = [
  { days: "Tuesday to Thursday", time: "5 pm to 9 pm" },
  { days: "Friday and Saturday", time: "5 pm to 10 pm" },
  { days: "Sunday brunch", time: "10 am to 2 pm" },
  { days: "Monday", time: "Closed" },
];

export default function BistroDemo() {
  return (
    <div
      className={`${fraunces.variable} min-h-screen bg-[#faf6ef] font-serif text-[#2a2521] [font-family:var(--font-fraunces)]`}
    >
      <header className="border-b border-[#2a2521]/10">
        <nav className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5">
          <span className="text-2xl font-bold tracking-tight">
            Brightwater<span className="text-[#c4552d]"> Bistro</span>
          </span>
          <div className="hidden items-center gap-8 text-sm sm:flex">
            <a href="#menu" className="hover:text-[#c4552d]">
              Menu
            </a>
            <a href="#visit" className="hover:text-[#c4552d]">
              Hours
            </a>
            <a
              href="tel:5555550123"
              className="rounded-full bg-[#c4552d] px-5 py-2.5 font-semibold text-[#faf6ef] transition-opacity hover:opacity-90"
            >
              Reserve a table
            </a>
          </div>
          <a
            href="tel:5555550123"
            className="rounded-full bg-[#c4552d] px-5 py-2.5 text-sm font-semibold text-[#faf6ef] sm:hidden"
          >
            Reserve
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:py-28">
        <p className="text-sm uppercase tracking-[0.3em] text-[#c4552d]">
          Seasonal. Local. Unfussy.
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
          Dinner worth slowing down for.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#2a2521]/70">
          A short menu that changes with the season, a wine list we can
          actually explain, and a room that lets you hear your table.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:5555550123"
            className="inline-flex min-h-12 items-center rounded-full bg-[#c4552d] px-8 font-semibold text-[#faf6ef] transition-opacity hover:opacity-90"
          >
            Call (555) 555-0123
          </a>
          <a
            href="#menu"
            className="inline-flex min-h-12 items-center rounded-full border-2 border-[#2a2521] px-8 font-semibold transition-colors hover:bg-[#2a2521] hover:text-[#faf6ef]"
          >
            See the menu
          </a>
        </div>
      </section>

      <section id="menu" className="bg-[#2a2521] py-20 text-[#faf6ef] sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-4xl font-bold">This week&apos;s menu</h2>
          <p className="mt-3 text-center text-[#faf6ef]/60">
            Printed nightly. Subject to what the farm brought us.
          </p>
          <div className="mt-14 space-y-12">
            {menu.map((section) => (
              <div key={section.category}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e8a075]">
                  {section.category}
                </h3>
                <ul className="mt-5 space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="text-lg">{item.name}</span>
                      <span className="flex-1 border-b border-dotted border-[#faf6ef]/30" aria-hidden="true" />
                      <span className="text-lg text-[#e8a075]">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">Hours</h2>
            <ul className="mt-6 space-y-3">
              {hours.map((h) => (
                <li
                  key={h.days}
                  className="flex justify-between border-b border-[#2a2521]/10 pb-3"
                >
                  <span>{h.days}</span>
                  <span className="text-[#2a2521]/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold">Find us</h2>
            <p className="mt-6 leading-relaxed text-[#2a2521]/70">
              214 Main Street, on the square.
              <br />
              Street parking after 5, lot behind the building.
            </p>
            <p className="mt-4 leading-relaxed text-[#2a2521]/70">
              Walk-ins welcome at the bar. Parties of 6 or more, give us a
              call.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2a2521]/10 py-10 text-center text-sm text-[#2a2521]/50">
        Brightwater Bistro is a fictional restaurant. This page is a demo
        build.
      </footer>

      <DemoBadge />
    </div>
  );
}
