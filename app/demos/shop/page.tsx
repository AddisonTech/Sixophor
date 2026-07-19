import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import DemoBadge from "@/components/DemoBadge";
import Newsletter from "./Newsletter";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juniper & Pine Goods | Demo site by Sixophor Software",
  description:
    "A demo retail shop website built by Sixophor Software. Juniper & Pine Goods is a fictional business.",
  robots: { index: false, follow: false },
};

const products = [
  { name: "Hand-poured soy candle", price: "$18", tone: "from-[#dde5d4] to-[#c8d4bd]" },
  { name: "Stoneware mug", price: "$26", tone: "from-[#e9dfd2] to-[#d8c8b4]" },
  { name: "Local wildflower honey", price: "$12", tone: "from-[#f0e4c8] to-[#e3cfa0]" },
  { name: "Linen tea towels, set of 2", price: "$22", tone: "from-[#dfe3e6] to-[#c9d1d6]" },
  { name: "Small-batch coffee, 12 oz", price: "$16", tone: "from-[#e2d5cb] to-[#cbb5a5]" },
  { name: "Cedar & sage soap bar", price: "$9", tone: "from-[#d9e2da] to-[#bccfc0]" },
];

export default function ShopDemo() {
  return (
    <div className={`${nunito.className} min-h-screen bg-[#eef1ea] text-[#23372b]`}>
      <header>
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <span className="text-2xl font-extrabold tracking-tight">
            Juniper <span className="text-[#b96a4b]">&amp;</span> Pine
          </span>
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="#shop" className="hidden hover:text-[#b96a4b] sm:block">
              Shop
            </a>
            <a href="#story" className="hidden hover:text-[#b96a4b] sm:block">
              Our story
            </a>
            <a
              href="#visit"
              className="rounded-full bg-[#23372b] px-5 py-2.5 text-[#eef1ea] transition-opacity hover:opacity-90"
            >
              Visit us
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pt-20">
        <div className="rounded-3xl bg-[#23372b] px-6 py-16 text-center text-[#eef1ea] sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#dcb99a]">
            A small goods shop
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Useful, beautiful things made by people we can name.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#eef1ea]/70">
            Candles, ceramics, pantry goods, and gifts from small makers.
            Stocked in small batches, gone when they&apos;re gone.
          </p>
          <a
            href="#shop"
            className="mt-9 inline-flex min-h-12 items-center rounded-full bg-[#dcb99a] px-8 font-bold text-[#23372b] transition-opacity hover:opacity-90"
          >
            See what&apos;s in
          </a>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl font-extrabold">New this month</h2>
          <span className="text-sm font-semibold text-[#b96a4b]">
            In store only
          </span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group">
              <div
                className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${p.tone} transition-transform group-hover:scale-[1.02]`}
              >
                <span
                  className="text-7xl font-extrabold text-[#23372b]/20"
                  aria-hidden="true"
                >
                  {p.name.charAt(0)}
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between px-1">
                <span className="text-sm font-bold">{p.name}</span>
                <span className="text-sm font-extrabold text-[#b96a4b]">
                  {p.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-8 sm:grid-cols-2 sm:p-12">
          <div>
            <h2 className="text-3xl font-extrabold">Our story</h2>
            <p className="mt-4 leading-relaxed text-[#23372b]/70">
              We opened Juniper &amp; Pine because we kept driving an hour to
              find gifts that didn&apos;t come from a warehouse. Everything on
              our shelves is picked by hand, most of it made within a few
              hours of the shop.
            </p>
            <p className="mt-4 leading-relaxed text-[#23372b]/70">
              Come in, smell the candles, pick up the mugs. That&apos;s what
              they&apos;re for.
            </p>
          </div>
          <div id="visit" className="rounded-2xl bg-[#eef1ea] p-8">
            <h3 className="text-xl font-extrabold">Visit us</h3>
            <p className="mt-3 leading-relaxed text-[#23372b]/70">
              18 Depot Street
              <br />
              Wednesday to Saturday, 10 am to 6 pm
              <br />
              Sunday, noon to 4 pm
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-extrabold">
            First dibs on new arrivals
          </h2>
          <p className="max-w-md text-[#23372b]/70">
            One email a month when new makers land. That&apos;s it.
          </p>
          <Newsletter />
        </div>
      </section>

      <footer className="border-t border-[#23372b]/10 py-10 text-center text-sm text-[#23372b]/50">
        Juniper &amp; Pine Goods is a fictional shop. This page is a demo
        build.
      </footer>

      <DemoBadge />
    </div>
  );
}
