import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/faq";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SERVICE_AREA,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: `+1${CONTACT_PHONE}`,
    description:
      "Small software design studio building websites, front ends, dashboards, and AI features for small businesses and independent professionals.",
    areaServed: SERVICE_AREA,
    founder: {
      "@type": "Person",
      name: "Addison Smith",
    },
    priceRange: "$600+",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Work />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
