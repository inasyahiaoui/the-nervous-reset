"use client";

import Image from "next/image";

/**
 * Hero — $5,000 cinematic signature experience.
 *
 * LEFT: Luxury serif headline with Playfair Display, warm ivory, signal gold.
 *       21-day pricing philosophy integrated into the editorial voice.
 * RIGHT: 4K cinematic wellness landscape with Ken Burns slow-zoom,
 *       orbital ring overlay, glass panel stats, premium gradient treatment.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden noise"
      style={{ background: "var(--color-black)" }}
    >
      {/* Multi-layered atmospheric background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse at 68% 48%, rgba(232,212,77,0.02) 0%, transparent 45%),
            radial-gradient(ellipse at 30% 60%, rgba(145,185,194,0.012) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 20%, rgba(232,212,77,0.008) 0%, transparent 35%)
          `,
        }}
      />

      {/* Ambient floating pulse dots — premium depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="pulse-dot absolute top-[18%] left-[14%] w-[3px] h-[3px] rounded-full" style={{ background: "rgba(232,212,77,0.22)", animationDelay: "0s" }} />
        <div className="pulse-dot absolute top-[32%] right-[10%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.14)", animationDelay: "1.5s" }} />
        <div className="pulse-dot absolute bottom-[28%] left-[7%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(232,212,77,0.16)", animationDelay: "3s" }} />
        <div className="pulse-dot absolute top-[62%] right-[22%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.1)", animationDelay: "2s" }} />
        <div className="pulse-dot absolute top-[45%] left-[3%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(232,212,77,0.1)", animationDelay: "4.5s" }} />
      </div>

      <div className="container-content relative z-10 flex min-h-[92vh] flex-col items-center justify-center py-28 sm:min-h-[88vh] sm:py-32 md:min-h-screen md:flex-row md:items-center md:gap-4 lg:gap-10 md:py-36 lg:py-40">

        {/* ── LEFT: Typography — Premium Editorial ── */}
        <div className="flex flex-1 flex-col items-start gap-6 sm:gap-7 md:max-w-[50%] lg:max-w-[46%]">
          {/* Brand label — with subtle shimmer */}
          <span
            className="meta hero-fade-in shimmer-gold"
            style={{ color: "rgba(245,240,232,0.32)", animationDelay: "0.15s" }}
          >
            The Nervous Reset
          </span>

          {/* Headline — luxury serif, massive */}
          <h1
            className="display-hero hero-slide-up"
            style={{
              animationDelay: "0.35s",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
            }}
          >
            Real support
            <br />
            for a{" "}
            <span className="pulse-text" style={{ color: "var(--color-signal)" }}>calmer,</span>
            <br />
            <span className="pulse-text" style={{ color: "var(--color-signal)", animationDelay: "1.5s" }}>stronger</span>{" "}
            you.
          </h1>

          {/* Rule — premium gradient */}
          <div
            className="hero-fade-in"
            style={{
              height: "1px",
              width: "4rem",
              background: "linear-gradient(to right, rgba(232,212,77,0.18), rgba(245,240,232,0.04), transparent)",
              animationDelay: "0.55s",
            }}
          />

          {/* Paragraph — premium readability */}
          <p
            className="max-w-[34ch] text-[1.0625rem] sm:text-[1.125rem] hero-slide-up"
            style={{
              color: "rgba(245,240,232,0.55)",
              lineHeight: "1.85",
              animationDelay: "0.65s",
              letterSpacing: "0.005em",
            }}
          >
            Life can feel like too much. You can pause.
            One small step. Twenty-one days. One dollar a day.
            Toward a calmer, stronger you.
          </p>

          {/* CTA — premium gold pill with shimmer */}
          <div className="hero-slide-up" style={{ animationDelay: "0.85s" }}>
            <a
              href="#check-in"
              className="btn-primary pulse-gold !h-[3.5rem] sm:!h-[3.75rem] !text-[1rem] sm:text-[1.0625rem]"
            >
              Take the Reset Check-In
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* 21-Day Philosophy Row — premium meta */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 hero-fade-in"
            style={{ animationDelay: "1.1s" }}
          >
            <span className="meta flex items-center gap-2.5" style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.875rem" }}>
              21 days
              <span className="pulse-dot inline-block" style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(232,212,77,0.3)" }} />
              $21 total
              <span className="pulse-dot inline-block" style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(232,212,77,0.3)", animationDelay: "1s" }} />
              <span className="pulse-text" style={{ color: "var(--color-signal)", opacity: 0.6 }}>≈ $1 / day</span>
            </span>
          </div>
        </div>

        {/* ── RIGHT: 4K Cinematic Landscape with Orbital Overlay ── */}
        <div className="flex flex-1 items-center justify-center md:justify-end w-full mt-14 sm:mt-18 md:mt-0">
          <div
            className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] hero-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Main 4K cinematic image with Ken Burns */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                aspectRatio: "4 / 5",
                boxShadow: "var(--shadow-dramatic)",
              }}
            >
              <Image
                src="/images/hero-reset.jpg"
                alt="Cinematic wellness landscape — dark mountains reflected in calm water, bathed in warm golden light"
                fill
                priority
                quality={95}
                className="object-cover ken-burns"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Multi-layer cinematic overlays */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(5,5,5,0.12) 0%, rgba(5,5,5,0) 25%, rgba(5,5,5,0) 55%, rgba(5,5,5,0.7) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(5,5,5,0.4) 100%)",
                }}
              />
              {/* Warm gold atmospheric glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 60% 40%, rgba(232,212,77,0.03) 0%, transparent 50%)",
                }}
              />

              {/* Center pulsing glow — premium */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full pulse-glow"
                style={{
                  background: "radial-gradient(circle, rgba(232,212,77,0.08) 0%, rgba(232,212,77,0.02) 40%, transparent 70%)",
                }}
              />
            </div>

            {/* Orbital SVG overlay — premium system */}
            <svg
              viewBox="0 0 520 650"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
              aria-hidden="true"
            >
              {/* Outer orbital ring — slowly rotating */}
              <ellipse
                cx="260" cy="325" rx="255" ry="315"
                stroke="rgba(245,240,232,0.035)"
                strokeWidth="0.5"
                className="signal-rotate"
                style={{ transformOrigin: "260px 325px" }}
              />
              {/* Inner orbital ring — breathing */}
              <ellipse
                cx="260" cy="325" rx="210" ry="260"
                stroke="rgba(245,240,232,0.05)"
                strokeWidth="0.5"
                className="signal-breathe"
              />
              {/* Third ring — gold accent */}
              <ellipse
                cx="260" cy="325" rx="230" ry="285"
                stroke="rgba(232,212,77,0.025)"
                strokeWidth="0.3"
                className="signal-breathe-slow"
                style={{ animationDuration: "12s" }}
              />
              {/* Pulse ring — top dot */}
              <circle cx="260" cy="10" r="3" fill="var(--color-signal)" opacity="0.3"
                className="pulse-dot" style={{ animationDuration: "3s" }} />
              {/* Pulse ring — left dot */}
              <circle cx="5" cy="325" r="2" fill="var(--color-signal)" opacity="0.2"
                className="pulse-dot" style={{ animationDuration: "4s", animationDelay: "1.5s" }} />
              {/* Pulse ring — right dot */}
              <circle cx="515" cy="325" r="2" fill="var(--color-signal)" opacity="0.2"
                className="pulse-dot" style={{ animationDuration: "4s", animationDelay: "3s" }} />
              {/* Expanding pulse ring around top dot */}
              <circle cx="260" cy="10" r="6" fill="none" stroke="var(--color-signal)" strokeWidth="0.5" opacity="0.15"
                className="pulse-ring" style={{ animationDuration: "4s", transformOrigin: "260px 10px" }} />
              {/* Thin connecting lines from dots to stats */}
              <line x1="260" y1="10" x2="400" y2="10" stroke="rgba(245,240,232,0.03)" strokeWidth="0.5" />
              <line x1="5" y1="325" x2="60" y2="325" stroke="rgba(245,240,232,0.03)" strokeWidth="0.5" />
            </svg>

            {/* ── 21-Day Stats — Glass Panel Overlay ── */}
            {/* 21 DAYS — top right */}
            <div
              className="absolute -top-2 -right-4 sm:top-0 sm:-right-8 text-right"
              style={{ transform: "translateY(-50%)" }}
            >
              <div
                className="glass-panel px-3 py-2 sm:px-4 sm:py-2.5"
                style={{
                  background: "rgba(5,5,5,0.6)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(245,240,232,0.05)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div
                  className="display leading-none pulse-text"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    color: "var(--color-signal)",
                    opacity: 0.5,
                  }}
                >
                  21
                </div>
                <div
                  className="meta"
                  style={{
                    fontSize: "0.625rem",
                    letterSpacing: "0.25em",
                    color: "rgba(245,240,232,0.28)",
                  }}
                >
                  days
                </div>
              </div>
            </div>

            {/* $21 TOTAL — bottom left */}
            <div className="absolute bottom-20 left-3 sm:bottom-24 sm:left-5">
              <div
                className="glass-panel px-3 py-2 sm:px-3.5 sm:py-2"
                style={{
                  background: "rgba(5,5,5,0.55)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(245,240,232,0.04)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div
                  className="display leading-none pulse-text"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    color: "var(--color-signal)",
                    opacity: 0.35,
                    animationDelay: "1s",
                  }}
                >
                  $21
                </div>
                <div
                  className="meta"
                  style={{
                    fontSize: "0.5rem",
                    letterSpacing: "0.25em",
                    color: "rgba(245,240,232,0.2)",
                  }}
                >
                  total
                </div>
              </div>
            </div>

            {/* ≈ $1 A DAY — bottom right */}
            <div className="absolute bottom-6 right-3 sm:bottom-8 sm:right-5 text-right">
              <div
                className="glass-panel px-2.5 py-1.5 sm:px-3 sm:py-2"
                style={{
                  background: "rgba(5,5,5,0.55)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(232,212,77,0.06)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div
                  className="meta"
                  style={{
                    fontSize: "0.875rem",
                    letterSpacing: "0.08em",
                    color: "rgba(245,240,232,0.3)",
                  }}
                >
                  ≈ $1
                </div>
                <div
                  className="meta"
                  style={{
                    fontSize: "0.5rem",
                    letterSpacing: "0.25em",
                    color: "rgba(245,240,232,0.18)",
                  }}
                >
                  a day
                </div>
              </div>
            </div>

            {/* Journey progression — DAY 01 to DAY 21 */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 hero-fade-in"
              style={{ animationDelay: "1.4s" }}
            >
              {["01", "07", "14", "21"].map((day, i) => (
                <span key={day} className="flex items-center gap-3">
                  <span
                    className="meta pulse-dot"
                    style={{
                      fontSize: "0.5625rem",
                      letterSpacing: "0.15em",
                      color: i === 3
                        ? "var(--color-signal)"
                        : "rgba(245,240,232,0.15)",
                      animationDelay: `${i * 0.8}s`,
                    }}
                  >
                    DAY {day}
                  </span>
                  {i < 3 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "1px",
                        background: `linear-gradient(to right, rgba(232,212,77,${0.04 + i * 0.02}), rgba(245,240,232,${0.06 + i * 0.02}))`,
                      }}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition — premium fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-20"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, var(--color-black), transparent)" }}
      />
    </section>
  );
}
