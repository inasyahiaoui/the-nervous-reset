"use client";

import { useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "The Resets", href: "#resets" },
  { label: "Check-In", href: "#check-in" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
] as const;

interface Props {
  isOpen: boolean;
  onLinkClick: () => void;
}

/**
 * MobileMenu — $5,000 full-screen glass overlay with smooth transitions.
 * Controlled by parent Navigation component.
 */
export default function MobileMenu({ isOpen, onLinkClick }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onLinkClick();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onLinkClick]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Full-screen overlay */}
      <div
        className="fixed inset-0 z-40"
        style={{
          background: "rgba(5,5,5,0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        onClick={onLinkClick}
      >
        <div
          ref={panelRef}
          className="flex h-full flex-col items-center justify-center gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onLinkClick}
              className="display text-[1.5rem] font-medium transition-all duration-500 hover:text-signal"
              style={{
                color: "rgba(245,240,232,0.6)",
                letterSpacing: "0.04em",
                animationDelay: `${i * 80}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#check-in"
            onClick={onLinkClick}
            className="btn-primary mt-6"
          >
            Take the Check-In
          </a>
        </div>
      </div>
    </div>
  );
}
