"use client";

import Reveal from "@/components/ui/Reveal";

/**
 * JourneyVisual — $5,000 premium 21-day journey progression.
 *
 * Horizontal timeline: DAY 01 → DAY 07 → DAY 14 → DAY 21
 * Orbital dots with pulse rings, glass panel labels, gold connecting lines.
 * This is the central visual motif — the 21-day concept made tangible.
 */
export default function JourneyVisual() {
  const steps = [
    { day: "01", label: "Start", desc: "Check in with yourself" },
    { day: "07", label: "Pause", desc: "Create space to breathe" },
    { day: "14", label: "Notice", desc: "Observe your patterns" },
    { day: "21", label: "Reset", desc: "Begin anew" },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 md:py-32"
      style={{ background: "var(--color-black)" }}
    >
      {/* Subtle atmospheric background — premium */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 300" fill="none" preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full">
          {/* Thin horizontal guideline */}
          <line x1="200" y1="150" x2="1000" y2="150"
            stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.04" />
          {/* Gold accent guideline */}
          <line x1="300" y1="150" x2="900" y2="150"
            stroke="var(--color-signal)" strokeWidth="0.2" opacity="0.015" />
          {/* Breathing center glow */}
          <circle cx="600" cy="150" r="150" fill="none"
            stroke="var(--color-ivory)" strokeWidth="0.2" opacity="0.015"
            className="signal-breathe-slow" style={{ animationDuration: "12s" }} />
          {/* Gold breathing ring */}
          <circle cx="600" cy="150" r="200" fill="none"
            stroke="var(--color-signal)" strokeWidth="0.15" opacity="0.008"
            className="signal-breathe-slow" style={{ animationDuration: "16s" }} />
          {/* Pulse dots on background */}
          <circle cx="300" cy="150" r="2" fill="var(--color-signal)" opacity="0.1"
            className="pulse-dot" style={{ animationDuration: "4s" }} />
          <circle cx="900" cy="150" r="1.5" fill="var(--color-signal)" opacity="0.08"
            className="pulse-dot" style={{ animationDuration: "5s", animationDelay: "2s" }} />
        </svg>
        {/* Additional ambient dots */}
        <div className="pulse-dot absolute top-[25%] left-[12%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(232,212,77,0.12)", animationDelay: "1s" }} />
        <div className="pulse-dot absolute bottom-[25%] right-[12%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(232,212,77,0.1)", animationDelay: "3s" }} />
        <div className="pulse-dot absolute top-[40%] right-[30%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.06)", animationDelay: "5s" }} />
      </div>

      <div className="container-content relative z-10">
        <Reveal>
          <div className="text-center mb-14 sm:mb-18">
            <span className="meta shimmer-gold" style={{ color: "rgba(245,240,232,0.22)", fontSize: "0.875rem" }}>
              The Journey
            </span>
            <h2 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)]">
              21 days to a{" "}
              <span className="pulse-text" style={{ color: "var(--color-signal)" }}>calmer</span> you.
            </h2>
          </div>
        </Reveal>

        {/* Horizontal timeline — premium glass treatment */}
        <Reveal delay={80}>
          <div className="relative mx-auto max-w-3xl">
            {/* Gold connecting line */}
            <div
              className="absolute top-[22px] left-[10%] right-[10%] h-px hidden sm:block"
              style={{
                background: "linear-gradient(to right, rgba(232,212,77,0.04), rgba(232,212,77,0.1), rgba(232,212,77,0.04))",
              }}
              aria-hidden="true"
            />

            {/* Steps */}
            <div className="flex items-start justify-between">
              {steps.map((step, i) => (
                <div key={step.day} className="flex flex-col items-center text-center flex-1">
                  {/* Day number — premium meta */}
                  <span
                    className="meta pulse-dot"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.2em",
                      color: i === steps.length - 1
                        ? "var(--color-signal)"
                        : "rgba(245,240,232,0.22)",
                      opacity: i === steps.length - 1 ? 0.7 : 1,
                      animationDelay: `${i * 0.8}s`,
                    }}
                  >
                    DAY {step.day}
                  </span>

                  {/* Orbital dot — with pulse ring system */}
                  <div className="relative mt-4 mb-4 flex items-center justify-center">
                    {/* Outer pulse ring */}
                    <div
                      className="absolute w-[28px] h-[28px] rounded-full pulse-ring"
                      style={{
                        border: `1px solid ${i === steps.length - 1 ? "rgba(232,212,77,0.2)" : "rgba(245,240,232,0.05)"}`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                    {/* Middle ring — gold accent on final step */}
                    {i === steps.length - 1 && (
                      <div
                        className="absolute w-[38px] h-[38px] rounded-full pulse-ring"
                        style={{
                          border: "1px solid rgba(232,212,77,0.08)",
                          animationDelay: "0.5s",
                        }}
                      />
                    )}
                    {/* Center dot */}
                    <div
                      className="w-[10px] h-[10px] rounded-full pulse-glow"
                      style={{
                        background: i === steps.length - 1
                          ? "var(--color-signal)"
                          : "rgba(245,240,232,0.2)",
                        boxShadow: i === steps.length - 1
                          ? "0 0 20px rgba(232,212,77,0.5), 0 0 40px rgba(232,212,77,0.15)"
                          : "none",
                        animationDelay: `${i * 0.7}s`,
                      }}
                    />
                  </div>

                  {/* Label — premium serif */}
                  <span
                    className="display text-[1.125rem] sm:text-[1.25rem]"
                    style={{ color: "rgba(245,240,232,0.75)" }}
                  >
                    {step.label}
                  </span>

                  {/* Description — hidden on mobile */}
                  <span
                    className="hidden sm:block mt-2 max-w-[14ch] text-[0.875rem]"
                    style={{
                      color: "rgba(245,240,232,0.3)",
                      lineHeight: "1.5",
                    }}
                  >
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom accent — the $1/day philosophy */}
        <Reveal delay={160}>
          <div className="mt-14 sm:mt-18 flex justify-center">
            <div
              className="glass-panel inline-flex px-6 py-3"
              style={{ borderRadius: "var(--radius-2xl)" }}
            >
              <p
                className="meta pulse-text text-center"
                style={{
                  color: "var(--color-signal)",
                  opacity: 0.4,
                  letterSpacing: "0.2em",
                  fontSize: "0.75rem",
                }}
              >
                One step at a time · One dollar a day
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
