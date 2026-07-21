"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ExampleButtonProps = {
  src: string;
  alt: string;
  caption: string;
  liveUrl?: string;
  width: number;
  height: number;
};

export default function ExampleButton({
  src,
  alt,
  caption,
  liveUrl,
  width,
  height,
}: ExampleButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex items-center gap-1 self-start text-sm font-semibold text-accent transition-opacity hover:opacity-85"
      >
        See example →
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-edge bg-panel"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close example"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-md bg-ink/70 text-fg transition-colors hover:text-accent"
            >
              ✕
            </button>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-auto w-full"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-edge p-4">
              <p className="text-sm text-muted">{caption}</p>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-semibold text-accent transition-opacity hover:opacity-85"
                >
                  View live →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
