import Link from "next/link";
import Wordmark from "./Wordmark";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  SERVICE_AREA,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Wordmark size="xl" />
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <Link
            href="/grader"
            className="inline-flex min-h-6 items-center font-semibold text-accent transition-opacity hover:opacity-85"
          >
            Free Website Grader →
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex min-h-6 items-center gap-2 transition-colors hover:text-accent"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex min-h-6 items-center gap-2 transition-colors hover:text-accent"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {CONTACT_PHONE_DISPLAY}
          </a>
          <p>Based in {SERVICE_AREA}. Working with clients everywhere.</p>
          <p>
            &copy; {new Date().getFullYear()} Sixophor Software. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
