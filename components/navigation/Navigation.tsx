"use client";

import { useState, useCallback } from "react";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { label: "The Resets", href: "#resets" },
  { label: "Check-In", href: "#check-in" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
] as const;

/**
 * Navigation — $5,000 floating glass bar.
 *
 * Minimal, editorial. Premium glassmorphism with subtle gradient border.
 * Four desktop links, mobile hamburger with smooth morph.
 * Active state via IntersectionObserver (optional enhancement).
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-6"
        role="navigation"
        aria-label="Main"
      >
        <div
          className="glass-nav mt-4 flex w-full max-w-[60rem] items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-700"
          style={{
            height: "3rem",
          }}
        >
          {/* Wordmark */}
          <a
            href="#hero"
            className="wordmark"
            aria-label="The Nervous Reset home"
          >
            THE NERVOUS RESET
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#check-in"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[0.8125rem] font-semibold transition-all duration-500 hover:scale-[1.03]"
            style={{
              background: "var(--color-signal)",
              color: "var(--color-gold-ink)",
              boxShadow: "0 2px 16px rgba(232,212,77,0.15)",
            }}
          >
            Begin
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block h-[1.5px] w-5 rounded-full transition-all duration-300"
              style={{
                background: "var(--color-ivory)",
                transform: isOpen
                  ? "translateY(3.25px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-[1.5px] w-5 rounded-full transition-all duration-300"
              style={{
                background: "var(--color-ivory)",
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="block h-[1.5px] w-5 rounded-full transition-all duration-300"
              style={{
                background: "var(--color-ivory)",
                transform: isOpen
                  ? "translateY(-3.25px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} onLinkClick={handleLinkClick} />
    </>
  );
}
