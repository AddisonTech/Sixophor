// Custom icon set in the site's node-and-wire style: 24px grid,
// consistent stroke, small filled circles as "nodes".

type IconProps = {
  className?: string;
};

function base(className?: string) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

export function IconSite({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.4" cy="6.8" r="1" fill="currentColor" stroke="none" />
      <path d="M6.5 13h7" />
      <path d="M6.5 16h4.5" opacity="0.55" />
    </svg>
  );
}

export function IconUI({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M8.5 7.5 4 12l4.5 4.5" />
      <path d="M15.5 7.5 20 12l-4.5 4.5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconAI({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="5.5" cy="7" r="2.1" />
      <circle cx="5.5" cy="17" r="2.1" />
      <circle cx="18.5" cy="12" r="2.1" />
      <path d="M7.5 7.9l9 3.2" />
      <path d="M7.5 16.1l9-3.2" />
      <circle cx="12" cy="10.3" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBrand({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="9.5" cy="12" r="5.5" />
      <rect x="11.5" y="7.5" width="9" height="9" rx="1.5" />
      <circle cx="9.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSEO({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="10.5" cy="10.5" r="5.8" />
      <path d="M15 15l5.5 5.5" />
      <circle cx="10.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M10.5 5.8v2" opacity="0.55" />
      <path d="M10.5 13.2v2" opacity="0.55" />
    </svg>
  );
}

export function IconHost({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="4" y="4.5" width="16" height="6" rx="1.5" />
      <rect x="4" y="13.5" width="16" height="6" rx="1.5" />
      <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
      <path d="M14.5 7.5h3" />
      <path d="M14.5 16.5h3" />
    </svg>
  );
}

export function IconDash({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 19.5v-5" />
      <path d="M10 19.5v-9" />
      <path d="M15 19.5v-3.5" />
      <path d="M20 19.5V7" />
      <circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="4.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
