export type Service = {
  title: string;
  description: string;
  pricing: string;
  pricingNote?: string;
  example?: {
    src: string;
    alt: string;
    caption: string;
    liveUrl?: string;
    width: number;
    height: number;
  };
};

export const services: Service[] = [
  {
    title: "Portfolios and small business websites",
    description:
      "A fast, clean site that tells people who you are and gets them to contact you. Built to load quickly and look right on a phone.",
    pricing: "Starting at $600",
  },
  {
    title: "Front end and UI builds",
    description:
      "Interfaces built from your designs or specs, in React and TypeScript, with attention to the details that make a UI feel finished.",
    pricing: "$1,600 to $4,800",
    example: {
      src: "/work/chalk.png",
      alt: "Chalk football intelligence platform landing page",
      caption: "Chalk — a football intelligence platform I built.",
      liveUrl: "https://chalk-sable.vercel.app",
      width: 1280,
      height: 900,
    },
  },
  {
    title: "AI feature integration",
    description:
      "Chat assistants, document search, content tools, and other AI features wired into your existing product or site, scoped to what actually helps your users.",
    pricing: "Custom quote",
    pricingNote: "Scoped individually. Every project is different.",
    example: {
      src: "/work/smith-agentic.png",
      alt: "Smith_Agentic multi-agent dashboard, crew configuration view",
      caption:
        "Smith_Agentic — a multi-agent AI system I built (shown in demo mode).",
      liveUrl: "https://addisontech.github.io/Smith_Agentic_UI/",
      width: 1280,
      height: 900,
    },
  },
  {
    title: "Branding and logo work",
    description:
      "A logo, wordmark, and color system that hold up across your site, invoices, and signage. Simple and consistent, not overworked.",
    pricing: "Custom quote",
  },
  {
    title: "SEO fundamentals",
    description:
      "The groundwork: page structure, metadata, performance, and local listings, so search engines can find you and rank you for the right terms.",
    pricing: "Custom quote",
  },
  {
    title: "Hosting and maintenance retainers",
    description:
      "I keep your site online, updated, and backed up, and handle small content changes so you never have to think about it.",
    pricing: "Custom quote",
  },
  {
    title: "Dashboards and data visualization",
    description:
      "Internal tools and dashboards that pull your data into one place and make it readable: sales, operations, equipment, whatever you track.",
    pricing: "Custom quote",
    example: {
      src: "/work/resume-coach.png",
      alt: "Resume Coach live analyzer with scoring and preview",
      caption: "Resume Coach — a live resume analyzer I built.",
      liveUrl: "https://addisontech.github.io/demos/resume-builder.html",
      width: 1280,
      height: 900,
    },
  },
];
