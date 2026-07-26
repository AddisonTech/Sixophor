import { NextResponse } from "next/server";

// PageSpeed analysis can take 20-40s; allow a longer function duration.
export const maxDuration = 60;

const CATEGORIES =
  "category=performance&category=accessibility&category=best-practices&category=seo";

type PsiResponse = {
  error?: { message?: string };
  lighthouseResult?: {
    categories?: Record<string, { score?: number | null }>;
    audits?: Record<string, { displayValue?: string; details?: { data?: string } }>;
    finalDisplayedUrl?: string;
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let target = (searchParams.get("url") ?? "").trim();
  if (!target) {
    return NextResponse.json({ error: "Enter a website address." }, { status: 400 });
  }
  if (!/^https?:\/\//i.test(target)) target = "https://" + target;
  try {
    new URL(target);
  } catch {
    return NextResponse.json(
      { error: "That does not look like a valid web address." },
      { status: 400 },
    );
  }

  const key = process.env.PAGESPEED_API_KEY;
  const api =
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?" +
    `url=${encodeURIComponent(target)}&${CATEGORIES}&strategy=mobile` +
    (key ? `&key=${key}` : "");

  let data: PsiResponse | undefined;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(api);
      data = (await res.json()) as PsiResponse;
    } catch {
      return NextResponse.json(
        { error: "Could not reach the analyzer. Try again in a moment." },
        { status: 502 },
      );
    }
    const m = data.error?.message ?? "";
    // PageSpeed intermittently returns a transient "something went wrong";
    // it fails fast, so retrying once is safe and usually succeeds.
    if (
      attempt === 0 &&
      data.error &&
      /something went wrong|internal error|please try|unable to process/i.test(m)
    ) {
      continue;
    }
    break;
  }

  if (!data || data.error) {
    const raw = data?.error?.message ?? "";
    const msg = /quota/i.test(raw)
      ? "The grader is briefly over its limit. Please try again in a minute."
      : raw || "Could not analyze that site.";
    return NextResponse.json({ error: msg }, { status: 502 });
  }

  const lr = data.lighthouseResult;
  if (!lr || !lr.categories) {
    return NextResponse.json(
      { error: "Could not analyze that site. Check the address and try again." },
      { status: 502 },
    );
  }

  const cat = lr.categories;
  const scores = {
    performance: Math.round((cat.performance?.score ?? 0) * 100),
    accessibility: Math.round((cat.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((cat["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((cat.seo?.score ?? 0) * 100),
  };
  const screenshot = lr.audits?.["final-screenshot"]?.details?.data ?? null;
  const metrics = (
    [
      ["Largest Contentful Paint", lr.audits?.["largest-contentful-paint"]?.displayValue],
      ["First Contentful Paint", lr.audits?.["first-contentful-paint"]?.displayValue],
      ["Total Blocking Time", lr.audits?.["total-blocking-time"]?.displayValue],
    ] as [string, string | undefined][]
  )
    .filter(([, v]) => Boolean(v))
    .map(([label, value]) => ({ label, value: value as string }));

  return NextResponse.json({
    scores,
    screenshot,
    metrics,
    finalUrl: lr.finalDisplayedUrl ?? target,
  });
}
