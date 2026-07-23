import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { industries } from "@/lib/industries";

const industry = industries.restaurants;

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  alternates: { canonical: "/restaurants" },
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: "/restaurants",
  },
};

export default function Page() {
  return <IndustryPage industry={industry} />;
}
