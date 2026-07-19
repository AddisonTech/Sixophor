import Link from "next/link";

export default function DemoBadge() {
  return (
    <Link
      href="/"
      className="fixed bottom-4 right-4 z-50 flex min-h-10 items-center gap-2 rounded-full bg-[#0b0d12] px-4 py-2 text-xs font-semibold text-[#f5f7fa] shadow-lg transition-transform hover:scale-105"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[#22d3ee]" aria-hidden="true" />
      Demo site by Sixophor Software
    </Link>
  );
}
