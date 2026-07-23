import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { industries } from "@/lib/industries";

const industry = industries.shops;

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  alternates: { canonical: "/shops" },
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: "/shops",
  },
};

export default function Page() {
  return <IndustryPage industry={industry} />;
}
