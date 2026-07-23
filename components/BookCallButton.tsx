import { BOOKING_URL_15 } from "@/lib/site";

type BookCallButtonProps = {
  className?: string;
  label?: string;
  url?: string;
};

// Renders a "book a call" CTA. When its url is set (e.g. a Cal.com link) it
// opens the scheduler in a new tab; until then it falls back to the on-page
// contact form so the CTA never points at a dead link. Defaults to the 15-min
// link; pass `url` for a different event (e.g. the 30-min call).
export default function BookCallButton({
  className,
  label = "Book a free call",
  url = BOOKING_URL_15,
}: BookCallButtonProps) {
  const external = url.length > 0;
  const href = external ? url : "#contact";

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
