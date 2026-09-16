"use client";

import type { ResetProduct } from "@/data/resets";

interface Props {
  reset: ResetProduct;
  index: number;
  hero?: boolean;
}

/**
 * ResetCard — premium editorial product entry.
 *
 * Each card has a unique abstract visual identity:
 * Anxiety → flowing waveform gradually calming
 * New Mom → soft orbital breathing composition
 * Burnout → fading fragmented energy structure
 * Low Energy → low-frequency flowing field
 * Heartbreak → overlapping signals finding order
 */
export default function ResetCard({ reset, index, hero }: Props) {
  const isAvailable = reset.availability === "available";
  const num = String(index + 1).padStart(2, "0");

  if (hero) {
    return (
      <div className="reset-card-editorial group flex h-full w-full flex-col sm:flex-row">
        {/* Abstract visual */}
        <div className="relative h-[280px] sm:h-full sm:w-[50%] md:w-[45%] min-h-[220px] overflow-hidden">
          <CardVisual slug={reset.slug} accent={reset.accentVar} index={index} />
          <span
            className="absolute top-5 left-5 z-10 display text-[1.75rem] sm:text-[2rem]"
            style={{ color: "rgba(245,240,232,0.08)" }}
          >
            {num}
          </span>
          <div className="absolute top-5 right-5 z-10">
            {isAvailable ? (
              <span className="inline-block h-[5px] w-[5px] rounded-full"
                style={{ background: "var(--color-signal)", boxShadow: "0 0 10px rgba(232,212,77,0.5)" }}
                aria-label="Available now" />
            ) : (
              <span className="inline-block h-[5px] w-[5px] rounded-full"
                style={{ background: "rgba(245,240,232,0.08)" }}
                aria-label="Coming soon" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 sm:pl-7 md:pl-9">
          <div>
            <span className="meta block mb-3" style={{ color: "rgba(245,240,232,0.15)" }}>
              Reset {num}
            </span>
            <h3 className="display text-[clamp(1.5rem,3vw,2rem)]" style={{ letterSpacing: "-0.01em" }}>
              {reset.name}
            </h3>
            <p className="mt-3 max-w-[30ch] text-[0.875rem] sm:text-[0.9375rem]"
              style={{ color: "rgba(245,240,232,0.45)", lineHeight: "1.7" }}>
              {reset.tagline}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="h-px w-full"
              style={{ background: "linear-gradient(to right, rgba(245,240,232,0.06), transparent 80%)" }} />
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="meta" style={{ color: "rgba(245,240,232,0.22)" }}>
                  21 days · $21
                </span>
                <span className="meta" style={{ color: "var(--color-signal)", opacity: 0.4 }}>
                  ≈ $1 / day
                </span>
              </div>
              {isAvailable ? (
                <a href={reset.payhipUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] sm:text-[0.875rem] font-semibold transition-all duration-500 hover:gap-2.5"
                  style={{ color: "var(--color-signal)" }}>
                  Get it <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
              ) : (
                <span className="meta" style={{ color: "rgba(245,240,232,0.1)" }}>
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Hover glow — border illumination */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(232,212,77,0.02) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
      </div>
    );
  }

  // Grid card
  return (
    <div className="reset-card-editorial group flex h-full w-full flex-col">
      <div className="relative h-[220px] sm:h-[260px] min-h-[180px] overflow-hidden">
        <CardVisual slug={reset.slug} accent={reset.accentVar} index={index} />
        <span className="absolute top-3 left-3.5 z-10 display text-[1.125rem] sm:text-[1.25rem]"
          style={{ color: "rgba(245,240,232,0.08)" }}>
          {num}
        </span>
        <div className="absolute top-3 right-3.5 z-10">
          {isAvailable ? (
            <span className="inline-block h-[5px] w-[5px] rounded-full"
              style={{ background: "var(--color-signal)", boxShadow: "0 0 10px rgba(232,212,77,0.5)" }}
              aria-label="Available now" />
          ) : (
            <span className="inline-block h-[5px] w-[5px] rounded-full"
              style={{ background: "rgba(245,240,232,0.08)" }}
              aria-label="Coming soon" />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5">
        <div>
          <span className="meta block mb-1.5" style={{ color: "rgba(245,240,232,0.12)", fontSize: "0.625rem" }}>
            Reset {num}
          </span>
          <h3 className="display text-[clamp(1.125rem,2.2vw,1.375rem)]"
            style={{ letterSpacing: "-0.01em" }}>
            {reset.name}
          </h3>
          <p className="mt-1.5 max-w-[22ch] text-[0.75rem] sm:text-[0.8125rem]"
            style={{ color: "rgba(245,240,232,0.4)", lineHeight: "1.6" }}>
            {reset.tagline}
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <div className="h-px w-full"
            style={{ background: "linear-gradient(to right, rgba(245,240,232,0.04), transparent 80%)" }} />
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="meta" style={{ color: "rgba(245,240,232,0.18)", fontSize: "0.5625rem" }}>
                21 days · $21
              </span>
              <span className="meta" style={{ color: "var(--color-signal)", opacity: 0.4, fontSize: "0.5rem" }}>
                ≈ $1 / day
              </span>
            </div>
            {isAvailable ? (
              <a href={reset.payhipUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[0.6875rem] sm:text-[0.75rem] font-semibold transition-all duration-500 hover:gap-2"
                style={{ color: "var(--color-signal)" }}>
                Get it <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            ) : (
              <span className="meta" style={{ color: "rgba(245,240,232,0.1)", fontSize: "0.5625rem" }}>
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(232,212,77,0.02) 0%, transparent 50%)" }}
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * CardVisual — unique abstract visual per product.
 * Large, flowing, with depth and motion.
 */
function CardVisual({ slug, accent, index }: { slug: string; accent: string; index: number }) {
  const id = `card-${index}`;

  /* Each product gets a distinct visual composition */
  if (slug === "anxiety") {
    /* Flowing waveform gradually becoming calm */
    return (
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, var(--color-near-black), var(--color-surface))" }}>
        <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id={`${id}-wash`} cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.06" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill={`url(#${id}-wash)`} />
          {/* Calming waveform — more chaotic on left, smoother on right */}
          <path d="M0 150 C 30 120, 50 180, 80 140 S 120 110, 150 150 S 180 170, 200 150 S 230 135, 260 148 S 300 155, 340 150 S 370 145, 400 150"
            stroke={accent} strokeWidth="1.2" opacity="0.12" className="signal-drift" style={{ animationDuration: "16s" }} />
          <path d="M0 160 C 40 130, 60 190, 100 155 S 140 125, 170 158 S 210 175, 250 155 S 290 140, 330 152 S 370 148, 400 155"
            stroke="var(--color-ivory)" strokeWidth="0.6" opacity="0.05" className="signal-drift-slow" />
          <path d="M0 145 C 35 115, 55 175, 90 148 S 130 120, 165 152 S 205 168, 245 150 S 285 138, 325 148 S 365 142, 400 148"
            stroke={accent} strokeWidth="0.4" opacity="0.06" className="signal-drift" style={{ animationDuration: "20s" }} />
          {/* Breathing circle — regulation center */}
          <circle cx="300" cy="150" r="35" stroke={accent} strokeWidth="0.5" opacity="0.08"
            className="signal-breathe" style={{ animationDuration: "6s" }} />
          <circle cx="300" cy="150" r="55" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.04"
            className="signal-breathe" style={{ animationDuration: "7s", animationDelay: "1s" }} />
          {/* Glow point */}
          <circle cx="300" cy="150" r="2" fill={accent} opacity="0.3" className="signal-pulse"
            style={{ animationDuration: "4s" }} />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{ background: "linear-gradient(to top, var(--color-near-black), transparent)" }} />
      </div>
    );
  }

  if (slug === "new-mom") {
    /* Soft orbital breathing composition */
    return (
      <div className="absolute inset-0" style={{ background: "linear-gradient(140deg, var(--color-near-black), var(--color-surface))" }}>
        <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id={`${id}-wash`} cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.05" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill={`url(#${id}-wash)`} />
          {/* Orbital rings — nurturing circles */}
          <ellipse cx="200" cy="150" rx="80" ry="30" stroke={accent} strokeWidth="0.6" opacity="0.1"
            transform="rotate(-10 200 150)" className="signal-rotate" style={{ animationDuration: "30s" }} />
          <ellipse cx="200" cy="150" rx="60" ry="22" stroke="var(--color-ivory)" strokeWidth="0.5" opacity="0.06"
            transform="rotate(15 200 150)" className="signal-rotate-reverse" style={{ animationDuration: "25s" }} />
          <ellipse cx="200" cy="150" rx="100" ry="40" stroke={accent} strokeWidth="0.35" opacity="0.06"
            transform="rotate(-5 200 150)" className="signal-rotate" style={{ animationDuration: "40s" }} />
          {/* Breathing center */}
          <circle cx="200" cy="150" r="20" stroke={accent} strokeWidth="0.6" opacity="0.1"
            className="signal-breathe" style={{ animationDuration: "5s" }} />
          <circle cx="200" cy="150" r="40" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.05"
            className="signal-breathe" style={{ animationDuration: "7s", animationDelay: "1.5s" }} />
          <circle cx="200" cy="150" r="2" fill={accent} opacity="0.3" className="signal-pulse"
            style={{ animationDuration: "4s" }} />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{ background: "linear-gradient(to top, var(--color-near-black), transparent)" }} />
      </div>
    );
  }

  if (slug === "burnout") {
    /* Fading fragmented energy */
    return (
      <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, var(--color-near-black), var(--color-surface))" }}>
        <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id={`${id}-wash`} cx="40%" cy="50%" r="55%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.05" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill={`url(#${id}-wash)`} />
          {/* Fragmented lines — energy dissipating */}
          <line x1="60" y1="120" x2="160" y2="140" stroke={accent} strokeWidth="0.8" opacity="0.1"
            className="signal-drift" style={{ animationDuration: "14s" }} />
          <line x1="100" y1="160" x2="200" y2="155" stroke="var(--color-ivory)" strokeWidth="0.5" opacity="0.05"
            className="signal-drift" style={{ animationDuration: "18s", animationDelay: "2s" }} />
          <line x1="140" y1="180" x2="220" y2="170" stroke={accent} strokeWidth="0.4" opacity="0.06"
            className="signal-drift" style={{ animationDuration: "16s", animationDelay: "1s" }} />
          <line x1="180" y1="130" x2="280" y2="145" stroke="var(--color-ivory)" strokeWidth="0.35" opacity="0.04"
            className="signal-drift-slow" />
          {/* Dim breathing circle — fading energy */}
          <circle cx="180" cy="155" r="30" stroke={accent} strokeWidth="0.4" opacity="0.06"
            className="signal-breathe" style={{ animationDuration: "8s" }} />
          <circle cx="180" cy="155" r="1.5" fill={accent} opacity="0.2" className="signal-pulse"
            style={{ animationDuration: "5s" }} />
          {/* Scatter — fragmented particles */}
          <circle cx="120" cy="130" r="0.8" fill={accent} opacity="0.15" className="signal-pulse" style={{ animationDuration: "6s" }} />
          <circle cx="250" cy="170" r="0.8" fill="var(--color-ivory)" opacity="0.1" className="signal-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />
          <circle cx="160" cy="200" r="0.6" fill={accent} opacity="0.12" className="signal-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{ background: "linear-gradient(to top, var(--color-near-black), transparent)" }} />
      </div>
    );
  }

  if (slug === "low-energy") {
    /* Low-frequency flowing field */
    return (
      <div className="absolute inset-0" style={{ background: "linear-gradient(150deg, var(--color-near-black), var(--color-surface))" }}>
        <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id={`${id}-wash`} cx="55%" cy="55%" r="50%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.05" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill={`url(#${id}-wash)`} />
          {/* Slow, low-frequency waves — wide and gentle */}
          <path d="M0 180 C 80 160, 160 200, 240 175 S 360 155, 400 170"
            stroke={accent} strokeWidth="2" opacity="0.06" className="signal-drift-slow" />
          <path d="M0 190 C 90 175, 170 210, 250 188 S 350 168, 400 182"
            stroke="var(--color-ivory)" strokeWidth="1" opacity="0.03" className="signal-drift-slow" />
          <path d="M0 170 C 70 150, 150 190, 230 168 S 340 148, 400 162"
            stroke={accent} strokeWidth="0.6" opacity="0.05" className="signal-drift" style={{ animationDuration: "28s" }} />
          {/* Low breathing */}
          <circle cx="250" cy="175" r="45" stroke={accent} strokeWidth="0.4" opacity="0.06"
            className="signal-breathe-slow" style={{ animationDuration: "9s" }} />
          <circle cx="250" cy="175" r="2" fill={accent} opacity="0.25" className="signal-pulse"
            style={{ animationDuration: "5s" }} />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{ background: "linear-gradient(to top, var(--color-near-black), transparent)" }} />
      </div>
    );
  }

  /* Heartbreak — overlapping signals finding order */
  return (
    <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, var(--color-near-black), var(--color-surface))" }}>
      <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id={`${id}-wash`} cx="50%" cy="48%" r="55%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.05" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${id}-wash)`} />
        {/* Overlapping waveforms finding alignment */}
        <path d="M40 140 C 100 110, 160 170, 220 140 S 310 110, 380 140"
          stroke={accent} strokeWidth="0.8" opacity="0.1" className="signal-drift" style={{ animationDuration: "18s" }} />
        <path d="M40 155 C 110 125, 170 185, 230 155 S 320 125, 380 155"
          stroke="var(--color-ivory)" strokeWidth="0.5" opacity="0.05" className="signal-drift" style={{ animationDuration: "22s", animationDelay: "3s" }} />
        <path d="M40 165 C 105 135, 165 195, 225 165 S 315 135, 380 165"
          stroke={accent} strokeWidth="0.4" opacity="0.06" className="signal-drift-slow" />
        {/* Concentric — finding center */}
        <circle cx="210" cy="150" r="25" stroke={accent} strokeWidth="0.5" opacity="0.08"
          className="signal-breathe" style={{ animationDuration: "6s" }} />
        <circle cx="210" cy="150" r="50" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.04"
          className="signal-breathe" style={{ animationDuration: "8s", animationDelay: "1s" }} />
        <circle cx="210" cy="150" r="2" fill={accent} opacity="0.25" className="signal-pulse"
          style={{ animationDuration: "4.5s" }} />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 h-[45%]"
        style={{ background: "linear-gradient(to top, var(--color-near-black), transparent)" }} />
    </div>
  );
}
