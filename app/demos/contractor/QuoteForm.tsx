"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#f2a007] focus:outline-none";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded border border-[#f2a007] bg-white/5 p-6" role="status">
        <p className="font-bold text-white">Request received.</p>
        <p className="mt-2 text-sm text-white/70">
          This is a demo site, so nothing was actually sent. On a real site,
          this lands in the owner&apos;s inbox and phone within seconds.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-3"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input type="text" name="name" required placeholder="Name" aria-label="Name" className={inputClass} />
        <input type="tel" name="phone" required placeholder="Phone" aria-label="Phone" className={inputClass} />
      </div>
      <select name="job" required defaultValue="" aria-label="Job type" className={inputClass}>
        <option value="" disabled>
          What do you need done?
        </option>
        <option>Roofing</option>
        <option>Siding</option>
        <option>Deck or porch</option>
        <option>Gutters</option>
        <option>Something else</option>
      </select>
      <textarea
        name="details"
        rows={3}
        placeholder="Tell us about the job"
        aria-label="Job details"
        className={inputClass}
      />
      <button
        type="submit"
        className="mt-1 inline-flex min-h-12 items-center justify-center rounded bg-[#f2a007] px-8 font-bold uppercase tracking-wide text-[#101820] transition-opacity hover:opacity-90"
      >
        Get my free quote
      </button>
    </form>
  );
}
