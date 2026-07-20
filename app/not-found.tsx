import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found | Sixophor Software",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28 text-center sm:py-36">
        <p className="font-mono text-sm text-accent/80">
          {"// error: page_not_found"}
        </p>
        <h1 className="mt-4 text-7xl font-bold tracking-tight sm:text-8xl">
          4<span className="text-accent">0</span>4
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted">
          This page was built right. It just doesn&apos;t exist.
        </p>
        <p className="mt-1 text-sm text-muted/70">
          (We checked twice. It&apos;s not a 604 either.)
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85"
        >
          Back to the homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
