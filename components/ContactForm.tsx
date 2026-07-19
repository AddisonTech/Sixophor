"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const inputClass =
  "w-full rounded-md border border-edge bg-panel px-4 py-3 text-base text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fallbackHref, setFallbackHref] = useState(`mailto:${CONTACT_EMAIL}`);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    const subject = encodeURIComponent(
      `Project inquiry: ${payload.projectType}`,
    );
    const mailBody = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nProject type: ${payload.projectType}\n\n${payload.message}`,
    );
    setFallbackHref(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${mailBody}`);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
      } else if (res.status === 503) {
        setStatus("fallback");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-accent/40 bg-panel p-8" role="status">
        <h3 className="text-lg font-semibold">Message sent.</h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out. I&apos;ll get back to you within one
          business day.
        </p>
      </div>
    );
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

      {/* Honeypot for bots; hidden from real visitors and screen readers */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-ink transition-opacity hover:opacity-85 disabled:opacity-60 sm:self-start"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "fallback" && (
        <p className="text-sm text-muted" role="status">
          The form isn&apos;t connected to an inbox yet. Your message is ready
          to go:{" "}
          <a href={fallbackHref} className="text-accent underline">
            send it by email instead
          </a>
          .
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-muted" role="alert">
          Something went wrong sending your message. Please{" "}
          <a href={fallbackHref} className="text-accent underline">
            email me directly
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
