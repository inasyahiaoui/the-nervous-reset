"use client";

import Reveal from "@/components/ui/Reveal";
import ResetCard from "./ResetCard";
import { RESET_PRODUCTS } from "@/data/resets";

/**
 * Five Resets — curated editorial grid.
 *
 * NOT a carousel. NOT identical cards.
 * A magazine-style product index where each entry
 * is immediately visible and feels collectible.
 *
 * Hero product (first) is full-width.
 * Remaining four in a 2-column grid.
 */
export default function Resets() {
  const hero = RESET_PRODUCTS[0];
  const rest = RESET_PRODUCTS.slice(1);

  return (
    <section
      id="resets"
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 lg:py-40"
      style={{ background: "var(--color-black)" }}
    >
      <div className="container-content relative z-10">
        {/* Header */}
        <Reveal>
          <div className="mb-12 sm:mb-16 md:mb-20 flex flex-col items-start gap-4 sm:gap-5">
            <span
              className="meta"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              Five Resets
            </span>
            <h2 className="display max-w-[18ch] text-[clamp(1.75rem,5vw,3.25rem)]" style={{ color: "var(--color-ivory)" }}>
              Choose what you{" "}
              <span className="hidden sm:inline">need most.</span>
              <span className="sm:hidden">need.</span>
            </h2>
            <p
              className="max-w-[36ch] text-[0.875rem] sm:text-[1rem]"
              style={{
                color: "rgba(245,240,232,0.35)",
                lineHeight: "1.75",
              }}
            >
              Each Reset is a focused 21-day journey built around one
              specific struggle. Find yours.
            </p>
          </div>
        </Reveal>

        {/* ── Grid Layout ── */}
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

        <Reveal delay={280}>
          <p
            className="mt-10 sm:mt-12 meta"
            style={{ color: "rgba(245,240,232,0.12)" }}
          >
            21 days · $21 total · No subscription
          </p>
        </Reveal>
      </div>
    </section>
  );
}
