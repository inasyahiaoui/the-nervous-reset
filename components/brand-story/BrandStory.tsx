"use client";

import Reveal from "@/components/ui/Reveal";

const JOURNEY_WORDS = ["Pause", "Notice", "Understand", "Reset"] as const;

/**
 * BrandStory — editorial brand statement with atmospheric visual.
 * Large flowing waveform behind the statement.
 */
export default function BrandStory() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32 md:py-40"
      style={{ background: "var(--color-black)" }}
    >
      {/* Background atmospheric waveform */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full">
          <path d="M0 200 C 200 140, 400 260, 600 200 S 1000 140, 1200 200"
            stroke="var(--color-ivory)" strokeWidth="1" opacity="0.025"
            className="signal-drift" style={{ animationDuration: "24s" }} />
          <path d="M0 220 C 250 160, 450 280, 650 210 S 1050 150, 1200 220"
            stroke="var(--color-ivory)" strokeWidth="0.6" opacity="0.015"
            className="signal-drift-slow" />
          <circle cx="600" cy="200" r="120" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.015"
            className="signal-breathe-slow" style={{ animationDuration: "10s" }} />
          <circle cx="600" cy="200" r="180" stroke="var(--color-ivory)" strokeWidth="0.2" opacity="0.01"
            className="signal-breathe-slow" style={{ animationDuration: "13s", animationDelay: "2s" }} />
        </svg>
      </div>

      <div className="container-narrow relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <Reveal>
          <span className="eyebrow" style={{ color: "rgba(245,240,232,0.2)" }}>
            Our Philosophy
          </span>
        </Reveal>

        {/* Statement */}
        <Reveal delay={80}>
          <h2
            className="display mx-auto mt-5 max-w-[30ch] text-[clamp(1.625rem,4.2vw,3rem)] leading-[1.12]"
          >
            You do not need to fix
            <br />
            everything at once.
          </h2>
        </Reveal>

        {/* Signal dot */}
        <Reveal delay={160}>
          <div className="mt-8 flex items-center justify-center">
            <div className="signal-dot" />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={200}>
          <p
            className="mx-auto mt-8 max-w-[40ch] text-[0.9375rem] sm:text-[1.0625rem]"
            style={{ color: "rgba(245,240,232,0.5)", lineHeight: "1.85" }}
          >
            Sometimes the bravest thing you can do is pause.
            The Nervous Reset was built for those moments —
            when you need structure, not noise.
          </p>
        </Reveal>

        {/* Journey words with animated rules */}
        <Reveal delay={280}>
          <div className="mt-14 flex items-center gap-5 sm:gap-7">
            {JOURNEY_WORDS.map((word, i) => (
              <span key={word} className="flex items-center gap-5 sm:gap-7">
                <span
                  className="meta text-[0.625rem] sm:text-[0.6875rem]"
                  style={{ color: "rgba(245,240,232,0.22)" }}
                >
                  {word}
                </span>
                {i < JOURNEY_WORDS.length - 1 && (
                  <span
                    className="hidden sm:inline-block h-px w-5"
                    style={{ background: "linear-gradient(to right, rgba(245,240,232,0.08), rgba(245,240,232,0.02))" }}
                  />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
