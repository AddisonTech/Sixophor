"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Maps short outreach slugs to their real destinations. Add entries here as
// new campaigns need links.
const DESTINATIONS: Record<string, string> = {
  restaurants: "/restaurants",
  contractors: "/contractors",
  shops: "/shops",
  bistro: "/demos/bistro",
  contractor: "/demos/contractor",
  shop: "/demos/shop",
  home: "/",
};

export default function GoRedirect({
  slug,
  to,
}: {
  slug: string;
  to?: string;
}) {
  useEffect(() => {
    const destination = DESTINATIONS[slug] ?? "/";
    try {
      // Fires a Vercel Analytics custom event so link clicks are countable,
      // with an optional per-recipient tag from ?to=. Never blocks the redirect.
      track("outreach_click", { slug, to: to ?? "unknown" });
    } catch {
      // analytics is optional
    }
    const id = window.setTimeout(() => {
      window.location.replace(destination);
    }, 200);
    return () => window.clearTimeout(id);
  }, [slug, to]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 text-center">
      <p className="font-mono text-sm text-muted">
        Taking you to Sixophor<span className="text-accent">…</span>
      </p>
    </main>
  );
}
