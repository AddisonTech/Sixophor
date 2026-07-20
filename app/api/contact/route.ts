import { NextResponse } from "next/server";
import { FORM_TO_EMAIL, SITE_NAME } from "@/lib/site";

const MAX_LENGTHS = { name: 200, email: 320, projectType: 100, message: 5000 };

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fields: Record<string, string> = {};
  for (const key of ["name", "email", "projectType", "message"] as const) {
    const value = body[key];
    if (typeof value !== "string" || value.trim().length === 0) {
      return NextResponse.json({ error: `missing_${key}` }, { status: 400 });
    }
    if (value.length > MAX_LENGTHS[key]) {
      return NextResponse.json({ error: `too_long_${key}` }, { status: 400 });
    }
    fields[key] = value.trim();
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${SITE_NAME} <onboarding@resend.dev>`,
      to: [FORM_TO_EMAIL],
      reply_to: fields.email,
      subject: `Project inquiry: ${fields.projectType}`,
      text: [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Project type: ${fields.projectType}`,
        "",
        fields.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
