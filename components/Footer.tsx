import Wordmark from "./Wordmark";
import { CONTACT_EMAIL } from "./ContactForm";

export default function Footer() {
  return (
    <footer className="border-t border-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Wordmark />
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
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
          <p>
            &copy; {new Date().getFullYear()} Sixophor Software. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
