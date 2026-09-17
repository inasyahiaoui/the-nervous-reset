"use client";

import Image from "next/image";
import type { ResetProduct } from "@/data/resets";

interface Props {
  reset: ResetProduct;
  index: number;
  hero?: boolean;
}

/**
 * ResetCard — $5,000 premium product card with glass morphism.
 *
 * Each card features:
 * - 4K cinematic photography with Ken Burns zoom
 * - Glass morphism content overlay
 * - Gradient border on hover
 * - Premium shadow depth system
 * - Category label + product name
 * - 21-day / $21 pricing with gold shimmer
 * - Availability status with pulse animation
 * - Purchase CTA
 */
export default function ResetCard({ reset, index, hero }: Props) {
  const isAvailable = reset.availability === "available";
  const num = String(index + 1).padStart(2, "0");

  if (hero) {
    return (
      <div className="reset-card-editorial group gradient-border flex h-full w-full flex-col sm:flex-row pulse-card">
        {/* 4K Cinematic image with Ken Burns */}
        <div className="relative h-[280px] sm:h-full sm:w-[50%] md:w-[45%] min-h-[220px] overflow-hidden">
          <Image
            src={reset.image}
            alt=""
            fill
            quality={95}
            className="img-cinematic object-cover ken-burns"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Multi-layer cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0) 25%, rgba(5,5,5,0.15) 55%, rgba(7,7,7,1) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(5,5,5,0.35) 100%)",
            }}
          />
          {/* Subtle warm glow */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 60% 50%, rgba(232,212,77,0.02) 0%, transparent 50%)",
            }}
          />
          {/* Number watermark — premium */}
          <span
            className="absolute top-5 left-5 z-10 display text-[2rem] sm:text-[2.5rem]"
            style={{ color: "rgba(245,240,232,0.06)" }}
          >
            {num}
          </span>
          {/* Availability dot — premium pulse */}
          <div className="absolute top-5 right-5 z-10">
            {isAvailable ? (
              <span className="relative inline-flex items-center justify-center">
                <span
                  className="absolute inline-block h-[18px] w-[18px] rounded-full pulse-ring"
                  style={{ border: "1px solid rgba(232,212,77,0.2)" }}
                />
                <span
                  className="relative inline-block h-[7px] w-[7px] rounded-full pulse-glow"
                  style={{
                    background: "var(--color-signal)",
                    boxShadow: "0 0 16px rgba(232,212,77,0.6)",
                  }}
                  aria-label="Available now"
                />
              </span>
            ) : (
              <span
                className="inline-block h-[6px] w-[6px] rounded-full"
                style={{ background: "rgba(245,240,232,0.1)" }}
                aria-label="Coming soon"
              />
            )}
          </div>
          {/* Category overlay on image */}
          <div className="absolute bottom-5 left-5 z-10">
            <span
              className="glass-panel meta inline-block px-2.5 py-1"
              style={{
                fontSize: "0.625rem",
                letterSpacing: "0.2em",
                color: reset.accentVar,
                opacity: 0.7,
                borderRadius: "var(--radius-sm)",
                background: "rgba(5,5,5,0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(245,240,232,0.04)",
              }}
            >
              {reset.profileName}
            </span>
          </div>
        </div>

        {/* Content — premium glass panel */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 sm:pl-7 md:pl-9">
          <div>
            <span className="meta block mb-3" style={{ color: "rgba(245,240,232,0.2)", fontSize: "0.8125rem" }}>
              Reset {num}
            </span>
            <h3 className="display text-[clamp(1.625rem,3.25vw,2.25rem)]" style={{ letterSpacing: "-0.01em" }}>
              {reset.name}
            </h3>
            <p className="mt-3 max-w-[30ch] text-[1rem] sm:text-[1.0625rem]"
              style={{ color: "rgba(245,240,232,0.48)", lineHeight: "1.7" }}>
              {reset.tagline}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="h-px w-full"
              style={{ background: "linear-gradient(to right, rgba(232,212,77,0.08), rgba(245,240,232,0.03) 80%)" }} />
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="meta" style={{ color: "rgba(245,240,232,0.25)", fontSize: "0.8125rem" }}>
                  21 days · $21
                </span>
                <span className="meta pulse-text" style={{ color: "var(--color-signal)", opacity: 0.5, fontSize: "0.8125rem" }}>
                  ≈ $1 / day
                </span>
              </div>
              {isAvailable ? (
                <a href={reset.payhipUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] sm:text-[1rem] font-semibold transition-all duration-500 hover:gap-2.5"
                  style={{ color: "var(--color-signal)" }}>
                  Get it <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
              ) : (
                <span className="meta" style={{ color: "rgba(245,240,232,0.12)", fontSize: "0.8125rem" }}>
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Hover glow — premium radial illumination */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(232,212,77,0.025) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
      </div>
    );
  }

  // Grid card — premium glass treatment
  return (
    <div className="reset-card-editorial group gradient-border flex h-full w-full flex-col pulse-card">
      <div className="relative h-[220px] sm:h-[260px] min-h-[180px] overflow-hidden">
        <Image
          src={reset.image}
          alt=""
          fill
          quality={95}
          className="img-cinematic object-cover ken-burns"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Multi-layer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(5,5,5,0.08) 0%, rgba(5,5,5,0) 20%, rgba(5,5,5,0.15) 55%, rgba(7,7,7,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(5,5,5,0.3) 100%)",
          }}
        />
        {/* Number watermark */}
        <span className="absolute top-3 left-3.5 z-10 display text-[1.25rem] sm:text-[1.5rem]"
          style={{ color: "rgba(245,240,232,0.06)" }}>
          {num}
        </span>
        {/* Availability dot — premium pulse */}
        <div className="absolute top-3 right-3.5 z-10">
          {isAvailable ? (
            <span className="relative inline-flex items-center justify-center">
              <span
                className="absolute inline-block h-[14px] w-[14px] rounded-full pulse-ring"
                style={{ border: "1px solid rgba(232,212,77,0.15)" }}
              />
              <span className="relative inline-block h-[6px] w-[6px] rounded-full pulse-glow"
                style={{ background: "var(--color-signal)", boxShadow: "0 0 14px rgba(232,212,77,0.55)" }}
                aria-label="Available now" />
            </span>
          ) : (
            <span className="inline-block h-[6px] w-[6px] rounded-full"
              style={{ background: "rgba(245,240,232,0.1)" }}
              aria-label="Coming soon" />
          )}
        </div>
        {/* Category overlay */}
        <div className="absolute bottom-3 left-3.5 z-10">
          <span
            className="meta"
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.2em",
              color: reset.accentVar,
              opacity: 0.5,
            }}
          >
            {reset.profileName}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <span className="meta block mb-1.5" style={{ color: "rgba(245,240,232,0.15)", fontSize: "0.6875rem" }}>
            Reset {num}
          </span>
          <h3 className="display text-[clamp(1.25rem,2.5vw,1.5rem)]"
            style={{ letterSpacing: "-0.01em" }}>
            {reset.name}
          </h3>
          <p className="mt-1.5 max-w-[22ch] text-[0.8125rem] sm:text-[0.875rem] line-clamp-2"
            style={{ color: "rgba(245,240,232,0.42)", lineHeight: "1.6" }}>
            {reset.tagline}
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <div className="h-px w-full"
            style={{ background: "linear-gradient(to right, rgba(232,212,77,0.06), rgba(245,240,232,0.02) 80%)" }} />
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="meta" style={{ color: "rgba(245,240,232,0.2)", fontSize: "0.625rem" }}>
                21 days · $21
              </span>
              <span className="meta pulse-text" style={{ color: "var(--color-signal)", opacity: 0.4, fontSize: "0.5625rem" }}>
                ≈ $1 / day
              </span>
            </div>
            {isAvailable ? (
              <a href={reset.payhipUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[0.75rem] sm:text-[0.8125rem] font-semibold transition-all duration-500 hover:gap-2"
                style={{ color: "var(--color-signal)" }}>
                Get it <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            ) : (
              <span className="meta" style={{ color: "rgba(245,240,232,0.1)", fontSize: "0.625rem" }}>
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(232,212,77,0.025) 0%, transparent 50%)" }}
        aria-hidden="true"
      />
    </div>
  );
}
