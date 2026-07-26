import type { Metadata } from "next";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BookCallButton from "@/components/BookCallButton";
import WebsiteGrader from "@/components/WebsiteGrader";

export const metadata: Metadata = {
  title: "Free Website Grader | Sixophor Software",
  description:
    "Grade your website in seconds. A free instant report card on speed, mobile, accessibility, and SEO, no email required. Built by Sixophor Software in Upstate SC.",
  alternates: { canonical: "/grader" },
  openGraph: {
    title: "Free Website Grader | Sixophor Software",
    description:
      "Grade your website in seconds. A free instant report card on speed, mobile, accessibility, and SEO.",
    url: "/grader",
  },
};

export default function GraderPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Sixophor Software home" className="py-2">
            <Wordmark />
          </Link>
          <BookCallButton className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-85" />
        </nav>
      </header>

      <main className="flex-1 overflow-x-clip">
        <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="// free tool"
            title="How does your website score?"
            lead="Enter your address and get an instant report card on speed, mobile experience, and SEO. It runs Google's own Lighthouse test, the same one the pros use."
          />
          <WebsiteGrader />
        </section>
      </main>

      <Footer />
    </>
  );
}
