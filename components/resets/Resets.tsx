"use client";

import Reveal from "@/components/ui/Reveal";
import ResetCard from "./ResetCard";
import { RESET_PRODUCTS } from "@/data/resets";

/**
 * Five Resets — $5,000 curated editorial grid.
 *
 * NOT a carousel. NOT identical cards.
 * A magazine-style product index where each entry
 * is immediately visible and feels collectible.
 *
 * Hero product (first) is full-width.
 * Remaining four in a 2-column grid.
 * Premium glass panels, gradient borders, 4K imagery.
 */
export default function Resets() {
  const hero = RESET_PRODUCTS[0];
  const rest = RESET_PRODUCTS.slice(1);

  return (
    <section
      id="resets"
      className="relative overflow-hidden py-24 sm:py-28 md:py-36 lg:py-44"
      style={{ background: "var(--color-black)" }}
    >
      {/* Background ambient dots — premium */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="pulse-dot absolute top-[15%] right-[10%] w-[3px] h-[3px] rounded-full" style={{ background: "rgba(232,212,77,0.15)", animationDelay: "0s" }} />
        <div className="pulse-dot absolute bottom-[20%] left-[5%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.1)", animationDelay: "2.5s" }} />
        <div className="pulse-dot absolute top-[60%] right-[25%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(232,212,77,0.08)", animationDelay: "4s" }} />
      </div>

      <div className="container-content relative z-10">
        {/* Header — premium editorial */}
        <Reveal>
          <div className="mb-14 sm:mb-18 md:mb-22 flex flex-col items-start gap-5 sm:gap-6">
            <span
              className="meta shimmer-gold"
              style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.875rem" }}
            >
              Five Resets
            </span>
            <h2 className="display max-w-[18ch] text-[clamp(2rem,5.5vw,3.75rem)]" style={{ color: "var(--color-ivory)" }}>
              Choose what you{" "}
              <span className="hidden sm:inline">need most.</span>
              <span className="sm:hidden">need.</span>
            </h2>
            <p
              className="max-w-[36ch] text-[1rem] sm:text-[1.125rem]"
              style={{
                color: "rgba(245,240,232,0.4)",
                lineHeight: "1.75",
              }}
            >
              Each Reset is a focused 21-day journey built around one
              specific struggle. One dollar a day. Find yours.
            </p>
          </div>
        </Reveal>

        {/* ── Grid Layout — premium card system ── */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Hero product — full width */}
          <Reveal delay={40}>
            <div className="w-full">
              <ResetCard reset={hero} index={0} hero />
            </div>
          </Reveal>

          {/* Remaining products — 2-column grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {rest.map((reset, i) => (
              <Reveal key={reset.slug} delay={80 + i * 60}>
                <ResetCard reset={reset} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Prominent 21-day value reminder — glass panel */}
        <Reveal delay={280}>
          <div className="mt-12 sm:mt-14 flex flex-col items-center gap-4">
            <div
              className="glass-panel inline-flex flex-col items-center gap-3 px-8 py-5 sm:px-10 sm:py-6"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="flex items-center gap-5">
                <span className="meta pulse-dot" style={{ color: "rgba(245,240,232,0.22)", fontSize: "0.875rem", animationDelay: "0s" }}>
                  21 days
                </span>
                <span className="pulse-wave" style={{ width: "24px", height: "1px", background: "rgba(232,212,77,0.1)", display: "inline-block" }} aria-hidden="true" />
                <span className="meta pulse-dot" style={{ color: "rgba(245,240,232,0.22)", fontSize: "0.875rem", animationDelay: "1s" }}>
                  $21 total
                </span>
                <span className="pulse-wave" style={{ width: "24px", height: "1px", background: "rgba(232,212,77,0.1)", display: "inline-block", animationDelay: "0.5s" }} aria-hidden="true" />
                <span className="meta pulse-text" style={{ color: "var(--color-signal)", opacity: 0.45, fontSize: "0.875rem" }}>
                  ≈ $1 / day
                </span>
              </div>
              <p className="meta" style={{ color: "rgba(245,240,232,0.12)", fontSize: "0.6875rem", letterSpacing: "0.15em" }}>
                No subscription · Cancel anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
