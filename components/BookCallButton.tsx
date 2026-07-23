import { BOOKING_URL } from "@/lib/site";

type BookCallButtonProps = {
  className?: string;
  label?: string;
};

// Renders the "book a call" CTA. When BOOKING_URL is set (e.g. a Cal.com link)
// it opens the scheduler in a new tab; until then it falls back to the on-page
// contact form so the CTA never points at a dead link.
export default function BookCallButton({
  className,
  label = "Book a free call",
}: BookCallButtonProps) {
  const external = BOOKING_URL.length > 0;
  const href = external ? BOOKING_URL : "#contact";

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}
