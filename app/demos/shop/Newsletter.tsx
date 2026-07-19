"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-sm text-[#3d5245]" role="status">
        This is a demo site, so no email was collected. On a real site,
        you&apos;d be on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        aria-label="Email address"
        className="min-h-12 flex-1 rounded-full border border-[#23372b]/20 bg-white px-5 text-[#23372b] placeholder:text-[#23372b]/40 focus:border-[#23372b] focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#23372b] px-7 font-semibold text-[#eef1ea] transition-opacity hover:opacity-90"
      >
        Keep me posted
      </button>
    </form>
  );
}
