"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "The Resets", href: "#resets" },
  { label: "Check-In", href: "#check-in" },
  { label: "How It Works", href: "#how-it-works" },
] as const;

/**
 * MobileMenu — full-screen overlay with hamburger morph.
 */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 flex h-8 w-8 items-center justify-center"
      >
        <span
          className="block h-px w-5 transition-all duration-300"
          style={{
            background: "var(--color-ivory)",
            transform: open
              ? "translateY(0) rotate(45deg)"
              : "translateY(-3px)",
            opacity: open ? 1 : 0.6,
          }}
        />
        <span
          className="absolute block h-px w-5 transition-all duration-300"
          style={{
            background: "var(--color-ivory)",
            transform: open
              ? "translateY(0) rotate(-45deg)"
              : "translateY(3px)",
            opacity: open ? 1 : 0.6,
          }}
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: "rgba(5,5,5,0.95)" }}
          onClick={() => setOpen(false)}
        >
          <div
            ref={panelRef}
            className="flex h-full flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[1.25rem] font-medium transition-colors duration-300"
                style={{
                  color: "rgba(245,240,232,0.6)",
                  letterSpacing: "0.06em",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#check-in"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              Take the Check-In
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
