"use client";

import { useState } from "react";
import BookCallButton from "./BookCallButton";

type Scores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

type Result = {
  scores: Scores;
  screenshot?: string;
  metrics: { label: string; value: string }[];
  finalUrl: string;
};

type PsiResponse = {
  error?: { message?: string };
  lighthouseResult?: {
    categories?: Record<string, { score?: number | null }>;
    audits?: Record<string, { displayValue?: string; details?: { data?: string } }>;
    finalDisplayedUrl?: string;
  };
};

const PAGESPEED_KEY = process.env.NEXT_PUBLIC_PAGESPEED_KEY ?? "";

function scoreColor(s: number) {
  return s >= 90 ? "#0cce6b" : s >= 50 ? "#ffa400" : "#ff4e42";
}

function ScoreRing({ label, score }: { label: string; score: number }) {
  const R = 42;
  const C = 2 * Math.PI * R;
  const offset = C * (1 - score / 100);
  const col = scoreColor(score);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={R} fill="none" stroke="var(--color-edge)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke={col}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={offset}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
          style={{ color: col }}
        >
          {score}
        </span>
      </div>
      <span className="text-sm font-semibold text-muted">{label}</span>
    </div>
  );
}

type Status = "idle" | "loading" | "done" | "error";

export default function WebsiteGrader() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  async function run(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let target = url.trim();
    if (!target) return;
    if (!/^https?:\/\//i.test(target)) target = "https://" + target;
    try {
      new URL(target);
    } catch {
      setError("That does not look like a valid web address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");
    setResult(null);

    const api =
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?" +
      `url=${encodeURIComponent(target)}` +
      "&category=performance&category=accessibility&category=best-practices&category=seo&strategy=mobile" +
      (PAGESPEED_KEY ? `&key=${PAGESPEED_KEY}` : "");

    const ctrl = new AbortController();
    // The browser can wait as long as PageSpeed needs (no serverless cap).
    const timeout = setTimeout(() => ctrl.abort(), 110000);
    try {
      let data: PsiResponse | undefined;
      for (let attempt = 0; attempt < 2; attempt++) {
        const res = await fetch(api, { signal: ctrl.signal });
        data = (await res.json()) as PsiResponse;
        const m = data.error?.message ?? "";
        // PageSpeed intermittently returns a transient error; it fails fast, so retry once.
        if (
          attempt === 0 &&
          data.error &&
          /something went wrong|internal error|please try|unable to process/i.test(m)
        ) {
          continue;
        }
        break;
      }
      clearTimeout(timeout);

      if (!data || data.error) {
        const raw = data?.error?.message ?? "";
        setError(
          /quota/i.test(raw)
            ? "The grader is briefly over its limit. Please try again in a minute."
            : raw || "Could not analyze that site. Double-check the address and try again.",
        );
        setStatus("error");
        return;
      }

      const lr = data.lighthouseResult;
      if (!lr || !lr.categories) {
        setError("Could not analyze that site. Check the address and try again.");
        setStatus("error");
        return;
      }
      const cat = lr.categories;
      const scores: Scores = {
        performance: Math.round((cat.performance?.score ?? 0) * 100),
        accessibility: Math.round((cat.accessibility?.score ?? 0) * 100),
        bestPractices: Math.round((cat["best-practices"]?.score ?? 0) * 100),
        seo: Math.round((cat.seo?.score ?? 0) * 100),
      };
      const screenshot = lr.audits?.["final-screenshot"]?.details?.data;
      const metrics = (
        [
          ["Largest Contentful Paint", lr.audits?.["largest-contentful-paint"]?.displayValue],
          ["First Contentful Paint", lr.audits?.["first-contentful-paint"]?.displayValue],
          ["Total Blocking Time", lr.audits?.["total-blocking-time"]?.displayValue],
        ] as [string, string | undefined][]
      )
        .filter(([, v]) => Boolean(v))
        .map(([label, value]) => ({ label, value: value as string }));

      setResult({
        scores,
        screenshot,
        metrics,
        finalUrl: lr.finalDisplayedUrl ?? target,
      });
      setStatus("done");
    } catch {
      clearTimeout(timeout);
      setError(
        "That site took too long to analyze. Give it another try, or test a smaller site.",
      );
      setStatus("error");
    }
  }

  return (
    <div>
      <form onSubmit={run} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="grader-url" className="sr-only">
          Your website address
        </label>
        <input
          id="grader-url"
          type="text"
          inputMode="url"
          autoComplete="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="yourbusiness.com"
          className="w-full rounded-md border border-edge bg-panel px-4 py-3 text-base text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {status === "loading" ? "Analyzing..." : "Grade my site"}
        </button>
      </form>
      <p className="mt-3 text-xs text-muted">
        Free, and no email required. Checks mobile speed, accessibility, best
        practices, and SEO.
      </p>

      {status === "loading" && (
        <p className="mt-8 text-sm text-muted" role="status">
          Analyzing your site with Google Lighthouse. This usually takes 20 to
          30 seconds, hang tight.
        </p>
      )}

      {status === "error" && (
        <p className="mt-8 text-sm text-[#ff8a80]" role="alert">
          {error}
        </p>
      )}

      {status === "done" && result && (
        <div className="mt-10" role="status">
          <p className="text-sm text-muted">
            Report card for{" "}
            <span className="text-fg">{result.finalUrl}</span>
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <ScoreRing label="Performance" score={result.scores.performance} />
            <ScoreRing label="Accessibility" score={result.scores.accessibility} />
            <ScoreRing label="Best Practices" score={result.scores.bestPractices} />
            <ScoreRing label="SEO" score={result.scores.seo} />
          </div>
          <p className="mt-4 text-xs text-muted">
            Scored out of 100. Green (90+) is good, orange needs work, red is a
            problem.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_240px] md:items-start">
            {result.metrics.length > 0 && (
              <ul className="flex flex-col gap-3">
                {result.metrics.map((m) => (
                  <li
                    key={m.label}
                    className="flex items-center justify-between border-b border-edge pb-3 text-sm"
                  >
                    <span className="text-muted">{m.label}</span>
                    <span className="font-semibold text-fg">{m.value}</span>
                  </li>
                ))}
              </ul>
            )}
            {result.screenshot && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={result.screenshot}
                alt={`Screenshot of ${result.finalUrl}`}
                className="w-full max-w-[240px] justify-self-center rounded-lg border border-edge md:justify-self-end"
              />
            )}
          </div>

          <div className="mt-10 rounded-lg border border-accent/40 bg-panel p-6">
            <h3 className="text-lg font-semibold">
              Want these scores in the green?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Whatever the numbers say, all of it is fixable. I build fast,
              clean sites that score like they should, and get people to
              contact you. Let&apos;s talk about yours.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <BookCallButton
                label="Book a free call"
                className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
              />
              <a
                href="/"
                className="inline-flex min-h-11 items-center rounded-md border border-edge px-6 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              >
                See my work
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
