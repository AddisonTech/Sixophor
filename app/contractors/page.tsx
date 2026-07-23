import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { industries } from "@/lib/industries";

const industry = industries.contractors;

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  alternates: { canonical: "/contractors" },
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: "/contractors",
  },
};

export default function Page() {
  return <IndustryPage industry={industry} />;
}
