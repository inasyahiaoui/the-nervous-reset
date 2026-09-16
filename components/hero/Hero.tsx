"use client";

/**
 * Hero — the signature visual experience.
 *
 * LEFT: Enormous serif headline, warm ivory, signal yellow punctuation.
 * RIGHT: Large, layered organic signal field — translucent ribbons,
 * breathing concentric forms, flowing waveforms, luminous particles.
 *
 * The visual feels alive. It breathes.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden noise"
      style={{ background: "var(--color-black)" }}
    >
      {/* Atmospheric background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 68% 48%, rgba(232,212,77,0.012) 0%, transparent 45%), radial-gradient(ellipse at 30% 60%, rgba(145,185,194,0.008) 0%, transparent 40%)",
        }}
      />

      <div className="container-content relative z-10 flex min-h-[92vh] flex-col items-center justify-center py-28 sm:min-h-[88vh] sm:py-32 md:min-h-screen md:flex-row md:items-center md:gap-4 lg:gap-10 md:py-36 lg:py-40">

        {/* ── LEFT: Typography ── */}
        <div className="flex flex-1 flex-col items-start gap-5 sm:gap-6 md:max-w-[50%] lg:max-w-[46%]">
          {/* Brand label */}
          <span
            className="meta hero-fade-in"
            style={{ color: "rgba(245,240,232,0.28)", animationDelay: "0.15s" }}
          >
            The Nervous Reset
          </span>

          {/* Headline */}
          <h1
            className="display-hero hero-slide-up"
            style={{
              animationDelay: "0.35s",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
            }}
          >
            Real support
            <br />
            for a{" "}
            <span style={{ color: "var(--color-signal)" }}>calmer,</span>
            <br />
            <span style={{ color: "var(--color-signal)" }}>stronger</span>{" "}
            you.
          </h1>

          {/* Rule */}
          <div
            className="h-px w-16 hero-fade-in"
            style={{
              background: "linear-gradient(to right, rgba(245,240,232,0.12), transparent)",
              animationDelay: "0.55s",
            }}
          />

          {/* Paragraph */}
          <p
            className="max-w-[32ch] text-[0.9375rem] sm:text-[1rem] hero-slide-up"
            style={{
              color: "rgba(245,240,232,0.5)",
              lineHeight: "1.85",
              animationDelay: "0.65s",
            }}
          >
            Five focused Reset programs for the seasons of life
            that feel like too much. Guided, self-paced, and built
            to meet you exactly where you are.
          </p>

          {/* CTA */}
          <div className="hero-slide-up" style={{ animationDelay: "0.85s" }}>
            <a
              href="#check-in"
              className="btn-primary !h-[3rem] sm:!h-[3.25rem] text-[0.8125rem] sm:text-[0.875rem]"
            >
              Take the Reset Check-In
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Metadata */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-1.5 hero-fade-in"
            style={{ animationDelay: "1.1s" }}
          >
            {["21 days", "$21 total", "No subscription"].map((item, i) => (
              <span key={item} className="meta flex items-center gap-2" style={{ color: "rgba(245,240,232,0.22)" }}>
                {i > 0 && <span style={{ color: "rgba(245,240,232,0.06)" }}>·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Abstract Signal Field ── */}
        <div className="flex flex-1 items-center justify-center md:justify-end w-full mt-14 sm:mt-18 md:mt-0">
          <div
            className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[520px] aspect-square hero-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <SignalField />
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-20"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, var(--color-black), transparent)" }}
      />
    </section>
  );
}

/**
 * SignalField — the signature abstract visual.
 *
 * Layered translucent ribbons, concentric breathing rings,
 * flowing waveforms, orbital paths, luminous particles.
 * A living representation of nervous system regulation.
 */
function SignalField() {
  return (
    <svg viewBox="0 0 600 600" fill="none" className="w-full h-full" aria-hidden="true">
      <defs>
        {/* Gradient for ribbon shapes */}
        <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-ivory)" stopOpacity="0.04" />
          <stop offset="50%" stopColor="var(--color-signal)" stopOpacity="0.02" />
          <stop offset="100%" stopColor="var(--color-ivory)" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="ribbon2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-ivory)" stopOpacity="0.03" />
          <stop offset="100%" stopColor="var(--color-anxiety)" stopOpacity="0.015" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.06" />
          <stop offset="40%" stopColor="var(--color-signal)" stopOpacity="0.02" />
          <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="softGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-ivory)" stopOpacity="0.025" />
          <stop offset="100%" stopColor="var(--color-ivory)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Atmospheric soft glow behind everything ── */}
      <circle cx="300" cy="300" r="220" fill="url(#softGlow)" className="signal-breathe-slow" style={{ animationDuration: "12s" }} />

      {/* ── Layered translucent ribbons — the main visual mass ── */}
      <path
        d="M80 300 C 140 180, 220 400, 300 280 S 460 180, 520 300"
        fill="none" stroke="url(#ribbon1)" strokeWidth="40" strokeLinecap="round"
        opacity="0.6" className="signal-drift" style={{ animationDuration: "22s" }}
      />
      <path
        d="M60 340 C 130 220, 240 440, 320 320 S 480 200, 540 320"
        fill="none" stroke="url(#ribbon2)" strokeWidth="28" strokeLinecap="round"
        opacity="0.5" className="signal-drift-slow"
      />
      <path
        d="M100 260 C 160 160, 240 360, 310 260 S 440 160, 500 280"
        fill="none" stroke="var(--color-ivory)" strokeWidth="12" strokeLinecap="round"
        opacity="0.025" className="signal-drift" style={{ animationDuration: "26s" }}
      />

      {/* ── Concentric breathing rings ── */}
      <circle cx="300" cy="300" r="50" stroke="var(--color-ivory)" strokeWidth="0.8" opacity="0.08"
        className="signal-breathe" style={{ animationDuration: "5s" }} />
      <circle cx="300" cy="300" r="90" stroke="var(--color-ivory)" strokeWidth="0.6" opacity="0.06"
        className="signal-breathe" style={{ animationDuration: "6s", animationDelay: "0.8s" }} />
      <circle cx="300" cy="300" r="135" stroke="var(--color-ivory)" strokeWidth="0.5" opacity="0.045"
        className="signal-breathe" style={{ animationDuration: "7.5s", animationDelay: "1.6s" }} />
      <circle cx="300" cy="300" r="185" stroke="var(--color-ivory)" strokeWidth="0.4" opacity="0.03"
        className="signal-breathe" style={{ animationDuration: "9s", animationDelay: "2.4s" }} />
      <circle cx="300" cy="300" r="240" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.02"
        className="signal-breathe" style={{ animationDuration: "11s", animationDelay: "3.2s" }} />

      {/* ── Center glow — the signal origin ── */}
      <circle cx="300" cy="300" r="60" fill="url(#centerGlow)" className="signal-breathe" style={{ animationDuration: "5s" }} />

      {/* ── Flowing waveform paths ── */}
      <path
        d="M80 300 C 150 240, 200 360, 300 300 C 400 240, 450 360, 520 300"
        stroke="var(--color-ivory)" strokeWidth="0.6" opacity="0.06"
        className="signal-drift" style={{ animationDuration: "18s" }}
      />
      <path
        d="M60 280 C 140 210, 220 380, 300 280 C 380 180, 460 380, 540 280"
        stroke="var(--color-ivory)" strokeWidth="0.4" opacity="0.04"
        className="signal-drift-slow"
      />
      <path
        d="M100 320 C 170 260, 230 380, 300 320 C 370 260, 430 380, 500 320"
        stroke="var(--color-signal)" strokeWidth="0.35" opacity="0.04"
        className="signal-drift" style={{ animationDuration: "24s" }}
      />

      {/* ── Orbital paths ── */}
      <ellipse cx="300" cy="300" rx="200" ry="80" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.025"
        transform="rotate(-12 300 300)" className="signal-rotate" />
      <ellipse cx="300" cy="300" rx="170" ry="55" stroke="var(--color-ivory)" strokeWidth="0.25" opacity="0.02"
        transform="rotate(25 300 300)" className="signal-rotate-reverse" />
      <ellipse cx="300" cy="300" rx="240" ry="95" stroke="var(--color-ivory)" strokeWidth="0.2" opacity="0.015"
        transform="rotate(-35 300 300)" className="signal-rotate" style={{ animationDuration: "90s" }} />

      {/* ── Luminous particles — constellation ── */}
      {/* Center — yellow signal point */}
      <circle cx="300" cy="300" r="3" fill="var(--color-signal)" opacity="0.7"
        className="signal-pulse" style={{ "--pulse-min": "0.5", "--pulse-max": "0.9", animationDuration: "3.5s" } as React.CSSProperties} />
      <circle cx="300" cy="300" r="14" fill="var(--color-signal)" opacity="0.04"
        className="signal-pulse" style={{ "--pulse-min": "0.02", "--pulse-max": "0.06", animationDuration: "3.5s" } as React.CSSProperties} />
      <circle cx="300" cy="300" r="35" fill="var(--color-signal)" opacity="0.015"
        className="signal-pulse" style={{ "--pulse-min": "0.008", "--pulse-max": "0.02", animationDuration: "5s" } as React.CSSProperties} />

      {/* Cardinal points */}
      <circle cx="300" cy="180" r="2" fill="var(--color-ivory)" opacity="0.3"
        className="signal-pulse" style={{ "--pulse-min": "0.15", "--pulse-max": "0.4", animationDelay: "1s", animationDuration: "4.5s" } as React.CSSProperties} />
      <circle cx="420" cy="300" r="2" fill="var(--color-ivory)" opacity="0.3"
        className="signal-pulse" style={{ "--pulse-min": "0.15", "--pulse-max": "0.4", animationDelay: "2s", animationDuration: "5s" } as React.CSSProperties} />
      <circle cx="300" cy="420" r="2" fill="var(--color-ivory)" opacity="0.3"
        className="signal-pulse" style={{ "--pulse-min": "0.15", "--pulse-max": "0.4", animationDelay: "3s", animationDuration: "4s" } as React.CSSProperties} />
      <circle cx="180" cy="300" r="2" fill="var(--color-ivory)" opacity="0.3"
        className="signal-pulse" style={{ "--pulse-min": "0.15", "--pulse-max": "0.4", animationDelay: "4s", animationDuration: "5.5s" } as React.CSSProperties} />

      {/* Diagonal constellation */}
      <circle cx="215" cy="215" r="1.5" fill="var(--color-ivory)" opacity="0.2"
        className="signal-pulse" style={{ "--pulse-min": "0.1", "--pulse-max": "0.3", animationDelay: "1.5s" } as React.CSSProperties} />
      <circle cx="385" cy="215" r="1.5" fill="var(--color-ivory)" opacity="0.2"
        className="signal-pulse" style={{ "--pulse-min": "0.1", "--pulse-max": "0.3", animationDelay: "2.5s" } as React.CSSProperties} />
      <circle cx="385" cy="385" r="1.5" fill="var(--color-ivory)" opacity="0.2"
        className="signal-pulse" style={{ "--pulse-min": "0.1", "--pulse-max": "0.3", animationDelay: "3.5s" } as React.CSSProperties} />
      <circle cx="215" cy="385" r="1.5" fill="var(--color-ivory)" opacity="0.2"
        className="signal-pulse" style={{ "--pulse-min": "0.1", "--pulse-max": "0.3", animationDelay: "4.5s" } as React.CSSProperties} />

      {/* Outer scattered particles */}
      <circle cx="150" cy="200" r="1" fill="var(--color-ivory)" opacity="0.12"
        className="signal-pulse" style={{ "--pulse-min": "0.06", "--pulse-max": "0.18", animationDelay: "2s" } as React.CSSProperties} />
      <circle cx="450" cy="200" r="1" fill="var(--color-ivory)" opacity="0.12"
        className="signal-pulse" style={{ "--pulse-min": "0.06", "--pulse-max": "0.18", animationDelay: "3s" } as React.CSSProperties} />
      <circle cx="450" cy="400" r="1" fill="var(--color-ivory)" opacity="0.12"
        className="signal-pulse" style={{ "--pulse-min": "0.06", "--pulse-max": "0.18", animationDelay: "4s" } as React.CSSProperties} />
      <circle cx="150" cy="400" r="1" fill="var(--color-ivory)" opacity="0.12"
        className="signal-pulse" style={{ "--pulse-min": "0.06", "--pulse-max": "0.18", animationDelay: "5s" } as React.CSSProperties} />

      {/* Tiny accent particles near ribbons */}
      <circle cx="180" cy="250" r="0.8" fill="var(--color-signal)" opacity="0.2"
        className="signal-pulse" style={{ "--pulse-min": "0.1", "--pulse-max": "0.3", animationDelay: "1s", animationDuration: "6s" } as React.CSSProperties} />
      <circle cx="420" cy="350" r="0.8" fill="var(--color-signal)" opacity="0.2"
        className="signal-pulse" style={{ "--pulse-min": "0.1", "--pulse-max": "0.3", animationDelay: "3s", animationDuration: "5s" } as React.CSSProperties} />
    </svg>
  );
}
