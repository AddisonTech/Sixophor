import type { StaticImageData } from "next/image";
import bistroShot from "@/public/work/bistro.png";
import contractorShot from "@/public/work/contractor.png";
import shopShot from "@/public/work/shop.png";

export type Industry = {
  slug: string;
  label: string;
  noun: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  points: { title: string; body: string }[];
  demo: {
    href: string;
    image: StaticImageData;
    label: string;
    blurb: string;
  };
  pricing: string;
  pricingNote: string;
};

export const industries: Record<string, Industry> = {
  restaurants: {
    slug: "restaurants",
    label: "Restaurants",
    noun: "restaurant",
    eyebrow: "// for restaurants and cafes",
    metaTitle: "Restaurant websites in Upstate SC | Sixophor Software",
    metaDescription:
      "Custom websites for restaurants and cafes in Upstate South Carolina. Menu, hours, and reservations up front, fast on a phone, and easy to update yourself.",
    headline: "Websites for restaurants and cafes,",
    headlineAccent: "built right.",
    subhead:
      "Your menu, hours, and reservations up front. Fast on a phone, easy to find on Google, and simple enough that you can update it yourself.",
    points: [
      {
        title: "People decide on their phone",
        body: "Diners check your menu and hours before they pick a place. If that is hard to find, they go somewhere else.",
      },
      {
        title: "A Facebook page isn't a website",
        body: "Social pages bury your menu and hide your hours. A real site puts them front and center and shows up on Google.",
      },
      {
        title: "Update it yourself",
        body: "Change the menu or hours without calling a developer or waiting a week for it to happen.",
      },
      {
        title: "Get found locally",
        body: "Show up when someone nearby searches for dinner, coffee, or the kind of food you serve.",
      },
    ],
    demo: {
      href: "/demos/bistro",
      image: bistroShot,
      label: "Brightwater Bistro",
      blurb:
        "A demo restaurant site with the menu, hours, and reservations up front, and a warm look that matches the room. Click through, every page is live.",
    },
    pricing: "Starting at $600",
    pricingNote:
      "Most restaurant sites land between $600 and $2,000 depending on scope. You get a real timeline and a fixed price before you commit.",
  },

  contractors: {
    slug: "contractors",
    label: "Contractors",
    noun: "business",
    eyebrow: "// for contractors and home services",
    metaTitle: "Contractor & home services websites in Upstate SC | Sixophor Software",
    metaDescription:
      "Lead-focused websites for contractors and home services in Upstate South Carolina. Services, trust signals, and a quote form that reaches you the same day.",
    headline: "Websites for contractors and home services,",
    headlineAccent: "built right.",
    subhead:
      "A site that turns visitors into quote requests. Services, trust signals, and a form that reaches you the same day, all built to bring in work.",
    points: [
      {
        title: "Homeowners hire who looks legit",
        body: "People pick the business that looks established and responds fast. A weak or missing site loses the job before you ever quote it.",
      },
      {
        title: "Every page points to a quote",
        body: "Services, service area, and a clear call or quote form on every page, so an interested visitor actually reaches out.",
      },
      {
        title: "Show your work and reviews",
        body: "Photos of finished jobs and real reviews build trust before the phone ever rings.",
      },
      {
        title: "Get found nearby",
        body: "Rank when someone searches for your trade in the towns you actually serve.",
      },
    ],
    demo: {
      href: "/demos/contractor",
      image: contractorShot,
      label: "Ironwood Exteriors",
      blurb:
        "A demo contractor site built as a lead machine: services, trust signals, and a quote form the owner gets the same day. Every button pushes toward a call.",
    },
    pricing: "Starting at $600",
    pricingNote:
      "Lead-focused builds usually run $1,200 to $4,000 depending on features like quote forms and job galleries. You get a real timeline and a fixed price before you commit.",
  },

  shops: {
    slug: "shops",
    label: "Shops",
    noun: "shop",
    eyebrow: "// for shops and boutiques",
    metaTitle: "Shop & boutique websites in Upstate SC | Sixophor Software",
    metaDescription:
      "Friendly, fast websites for local shops and boutiques in Upstate South Carolina. Featured products, hours, and an easy way to keep customers coming back.",
    headline: "Websites for local shops and boutiques,",
    headlineAccent: "built right.",
    subhead:
      "Featured products, hours, and a way to keep customers coming back. Light, friendly, and easy to run day to day.",
    points: [
      {
        title: "Customers look you up first",
        body: "People check you out online before they visit. Give them a reason to walk in the door.",
      },
      {
        title: "Keep regulars coming back",
        body: "Feature new arrivals and build an email list so your best customers hear from you first.",
      },
      {
        title: "Look as good online as in person",
        body: "A clean, friendly site that matches the feel of your shop instead of working against it.",
      },
      {
        title: "Show up on Maps",
        body: "Get found when someone nearby is looking to shop local.",
      },
    ],
    demo: {
      href: "/demos/shop",
      image: shopShot,
      label: "Juniper & Pine Goods",
      blurb:
        "A demo shop site with featured products, store hours, and an email list for new arrivals. Light and friendly, like walking into the shop.",
    },
    pricing: "Starting at $600",
    pricingNote:
      "Most shop sites land between $600 and $2,500 depending on scope. You get a real timeline and a fixed price before you commit.",
  },
};
