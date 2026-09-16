"use client";

import Reveal from "@/components/ui/Reveal";

/**
 * Final CTA — emotional conclusion with atmospheric depth.
 * Layered breathing forms, warm glow, quiet confidence.
 */
export default function FinalCta() {
  return (
    <section
      className="relative overflow-hidden noise"
      style={{ background: "var(--color-black)" }}
    >
      {/* Rich atmospheric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="cta-glow" cx="50%" cy="45%" r="40%">
              <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.025" />
              <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cta-soft" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-ivory)" stopOpacity="0.015" />
              <stop offset="100%" stopColor="var(--color-ivory)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Atmospheric glow */}
          <circle cx="600" cy="320" r="300" fill="url(#cta-soft)" className="signal-breathe-slow" style={{ animationDuration: "14s" }} />
          <circle cx="600" cy="300" r="200" fill="url(#cta-glow)" className="signal-breathe" style={{ animationDuration: "8s" }} />
          {/* Breathing rings */}
          <circle cx="600" cy="340" r="100" stroke="var(--color-ivory)" strokeWidth="0.4" opacity="0.025"
            className="signal-breathe" style={{ animationDuration: "7s" }} />
          <circle cx="600" cy="340" r="160" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.018"
            className="signal-breathe" style={{ animationDuration: "9s", animationDelay: "1.5s" }} />
          <circle cx="600" cy="340" r="230" stroke="var(--color-ivory)" strokeWidth="0.25" opacity="0.012"
            className="signal-breathe" style={{ animationDuration: "11s", animationDelay: "3s" }} />
          {/* Flowing ribbon */}
          <path d="M200 350 C 400 280, 600 420, 800 340 S 1000 260, 1200 340"
            stroke="var(--color-ivory)" strokeWidth="20" strokeLinecap="round" opacity="0.01"
            className="signal-drift" style={{ animationDuration: "28s" }} />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center px-5 py-28 sm:px-6 sm:py-36 md:py-44 lg:px-12 text-center">
        <div className="container-content flex flex-col items-center max-w-2xl">
          <Reveal>
            <span className="meta" style={{ color: "rgba(245,240,232,0.18)" }}>
              The Nervous Reset
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="display mt-6 sm:mt-7 max-w-[18ch] text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[1.05]"
            >
              Your reset is{" "}
              <span style={{ color: "var(--color-signal)" }}>waiting.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p
              className="mt-6 sm:mt-7 max-w-[32ch] text-[1rem] sm:text-[1.0625rem]"
              style={{ color: "rgba(245,240,232,0.48)", lineHeight: "1.85" }}
            >
              You don&apos;t have to figure it all out right now. Just
              take the next right step.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 sm:mt-7 flex flex-col gap-0.5">
              <p className="meta" style={{ color: "rgba(245,240,232,0.28)" }}>
                21 days · $21 total
              </p>
              <p className="meta" style={{ color: "var(--color-signal)", opacity: 0.5 }}>
                ≈ $1 / day
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 sm:mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3.5">
              <a href="#check-in" className="btn-primary w-full sm:w-auto">
                Take the Reset Check-In
              </a>
              <a href="#resets" className="btn-secondary w-full sm:w-auto">
                Explore the Resets
              </a>
            </div>
          </Reveal>

          {/* Closing mark */}
          <Reveal delay={340}>
            <div className="mt-20 sm:mt-28 flex flex-col items-center gap-3">
              <div
                className="relative flex h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] items-center justify-center rounded-full"
                style={{ border: "1px solid rgba(245,240,232,0.04)" }}
                aria-hidden="true"
              >
                <div className="flex flex-col items-center gap-0.5 text-center">
                  <span className="meta" style={{ color: "rgba(245,240,232,0.12)", fontSize: "0.4375rem" }}>
                    Five Paths
                  </span>
                  <div className="signal-dot" style={{ width: 3, height: 3 }} />
                  <span className="meta" style={{ color: "rgba(245,240,232,0.12)", fontSize: "0.4375rem" }}>
                    One Goal
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
