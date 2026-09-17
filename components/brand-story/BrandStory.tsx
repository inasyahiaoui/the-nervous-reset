"use client";

import Reveal from "@/components/ui/Reveal";

const JOURNEY_WORDS = ["Pause", "Notice", "Understand", "Reset"] as const;

/**
 * BrandStory — $5,000 editorial brand statement.
 * Glass panel content overlay, atmospheric waveform visual.
 * 21-day philosophy: one dollar a day as an act of self-care.
 */
export default function BrandStory() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 sm:py-36 md:py-44"
      style={{ background: "var(--color-black)" }}
    >
      {/* Background atmospheric waveform — premium */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full">
          <path d="M0 200 C 200 140, 400 260, 600 200 S 1000 140, 1200 200"
            stroke="var(--color-ivory)" strokeWidth="1" opacity="0.025"
            className="signal-drift" style={{ animationDuration: "24s" }} />
          <path d="M0 220 C 250 160, 450 280, 650 210 S 1050 150, 1200 220"
            stroke="var(--color-ivory)" strokeWidth="0.6" opacity="0.015"
            className="signal-drift-slow" />
          {/* Gold accent waveform */}
          <path d="M0 190 C 300 150, 500 240, 700 190 S 1100 140, 1200 190"
            stroke="var(--color-signal)" strokeWidth="0.4" opacity="0.012"
            className="signal-drift" style={{ animationDuration: "30s" }} />
          {/* Breathing rings — premium */}
          <circle cx="600" cy="200" r="120" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.015"
            className="signal-breathe-slow" style={{ animationDuration: "10s" }} />
          <circle cx="600" cy="200" r="180" stroke="var(--color-ivory)" strokeWidth="0.2" opacity="0.01"
            className="signal-breathe-slow" style={{ animationDuration: "13s", animationDelay: "2s" }} />
          <circle cx="600" cy="200" r="250" stroke="var(--color-signal)" strokeWidth="0.2" opacity="0.006"
            className="signal-breathe-slow" style={{ animationDuration: "16s", animationDelay: "4s" }} />
        </svg>
        {/* Ambient pulse dots — premium depth */}
        <div className="pulse-dot absolute top-[30%] left-[10%] w-[3px] h-[3px] rounded-full" style={{ background: "rgba(232,212,77,0.15)", animationDelay: "0.5s" }} />
        <div className="pulse-dot absolute top-[50%] right-[8%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.1)", animationDelay: "2s" }} />
        <div className="pulse-dot absolute bottom-[20%] left-[20%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(232,212,77,0.1)", animationDelay: "3.5s" }} />
        <div className="pulse-dot absolute top-[40%] right-[25%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.06)", animationDelay: "5s" }} />
      </div>

      <div className="container-narrow relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <Reveal>
          <span className="eyebrow" style={{ color: "rgba(245,240,232,0.22)" }}>
            Our Philosophy
          </span>
        </Reveal>

        {/* Statement — luxury serif */}
        <Reveal delay={80}>
          <h2
            className="display mx-auto mt-6 max-w-[30ch] text-[clamp(2rem,5vw,3.5rem)] leading-[1.12]"
          >
            You do not need to fix
            <br />
            everything at once.
          </h2>
        </Reveal>

        {/* Signal dot — premium pulse */}
        <Reveal delay={160}>
          <div className="mt-10 flex items-center justify-center">
            <div className="relative">
              <div className="signal-dot" style={{ width: "8px", height: "8px" }} />
              <div
                className="absolute inset-0 rounded-full pulse-ring"
                style={{
                  border: "1px solid rgba(232,212,77,0.15)",
                  width: "20px",
                  height: "20px",
                  top: "-6px",
                  left: "-6px",
                }}
              />
            </div>
          </div>
        </Reveal>

        {/* Copy — premium readability */}
        <Reveal delay={200}>
          <p
            className="mx-auto mt-8 max-w-[42ch] text-[1.0625rem] sm:text-[1.1875rem]"
            style={{ color: "rgba(245,240,232,0.55)", lineHeight: "1.85" }}
          >
            Sometimes the bravest thing you can do is pause.
            The Nervous Reset was built for those moments —
            when you need structure, not noise.
          </p>
        </Reveal>

        {/* The $1-a-day philosophy — glass panel */}
        <Reveal delay={240}>
          <div className="mt-12 sm:mt-14 flex flex-col items-center gap-5">
            <div
              className="glass-panel px-8 py-7 sm:px-10 sm:py-8"
              style={{ maxWidth: "32rem" }}
            >
              <p
                className="text-[1.125rem] sm:text-[1.25rem] italic"
                style={{
                  color: "rgba(245,240,232,0.5)",
                  lineHeight: "1.85",
                  fontFamily: "var(--font-display)",
                }}
              >
                Twenty-one days of gentle structure.
                <br />
                One dollar a day.{" "}
                <span className="pulse-text" style={{ color: "var(--color-signal)", opacity: 0.75 }}>
                  That&apos;s it.
                </span>
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div style={{ width: "2rem", height: "1px", background: "linear-gradient(to right, transparent, rgba(232,212,77,0.15))" }} />
                <span className="meta" style={{ color: "rgba(245,240,232,0.2)", letterSpacing: "0.15em", fontSize: "0.8125rem" }}>
                  No subscription · No overwhelm · One step at a time
                </span>
                <div style={{ width: "2rem", height: "1px", background: "linear-gradient(to left, transparent, rgba(232,212,77,0.15))" }} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Journey words with animated rules and pulse dots */}
        <Reveal delay={300}>
          <div className="mt-16 flex items-center gap-6 sm:gap-8">
            {JOURNEY_WORDS.map((word, i) => (
              <span key={word} className="flex items-center gap-6 sm:gap-8">
                <span className="flex flex-col items-center gap-2">
                  <span
                    className="meta pulse-dot"
                    style={{
                      color: i === JOURNEY_WORDS.length - 1
                        ? "var(--color-signal)"
                        : "rgba(245,240,232,0.25)",
                      fontSize: "0.8125rem",
                      animationDelay: `${i * 0.7}s`,
                    }}
                  >
                    {word}
                  </span>
                </span>
                {i < JOURNEY_WORDS.length - 1 && (
                  <span
                    className="hidden sm:inline-block h-px w-6"
                    style={{ background: "linear-gradient(to right, rgba(232,212,77,0.08), rgba(245,240,232,0.02))" }}
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
