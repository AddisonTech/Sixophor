"use client";

import { useState } from "react";
import { services } from "@/lib/services";

// Update this when the real studio inbox exists.
export const CONTACT_EMAIL = "hello@sixophor.com";

const inputClass =
  "w-full rounded-md border border-panel bg-panel px-4 py-3 text-base text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Project inquiry: ${projectType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Project type</span>
        <select name="projectType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a project type
          </option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you looking to build?"
          className={inputClass}
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85 sm:self-start"
      >
        Send Message
      </button>

      {sent && (
        <p className="text-sm text-muted" role="status">
          This opened a draft in your email app. If nothing opened, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
