import type { CSSProperties } from "react";

/**
 * THE NERVOUS RESET — Brand Visual Components
 *
 * Reusable SVG/CSS motifs drawn from the logo:
 * the organic wave, four-point sparkle, glowing dot, and two-circle mark.
 *
 * All components are pure, zero-dependency, and suitable for animation.
 */

/* ================================================================
   WAVE SVG
   ================================================================ */

/**
 * The signature organic wave — the primary recurring visual language.
 * Inspired by the official logo. Thin, fluid, elegant.
 *
 * variant:
 *  - "default"  — classic single wave
 *  - "double"   — two layered waves for depth
 *  - "breath"   — wider, calmer wave for background atmosphere
 */
export function WaveSvg({
  className = "",
  variant = "default",
  strokeColor = "currentColor",
  style,
}: {
  className?: string;
  variant?: "default" | "double" | "breath";
  strokeColor?: string;
  style?: CSSProperties;
}) {
  if (variant === "double") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 400 60"
        fill="none"
        preserveAspectRatio="none"
        style={style}
      >
        <path
          d="M0 30 C 60 10, 120 50, 200 30 S 340 10, 400 30"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M0 38 C 70 18, 130 58, 210 38 S 350 18, 400 38"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    );
  }

  if (variant === "breath") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 600 80"
        fill="none"
        preserveAspectRatio="none"
        style={style}
      >
        <path
          d="M0 40 C 100 15, 200 65, 300 40 S 500 15, 600 40"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 400 40"
      fill="none"
      preserveAspectRatio="none"
      style={style}
    >
      <path
        d="M0 20 C 60 5, 120 35, 200 20 S 340 5, 400 20"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================================================================
   SPARK — Four-Point Star
   ================================================================ */

/**
 * The four-point sparkle — the signature accent motif.
 * Use sparingly: section transitions, moments of emphasis, result reveals.
 * Scarcity creates premium feeling.
 */
export function Spark({
  size = 14,
  className = "",
  style,
  color = "currentColor",
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M12 1c.9 6.2 4.9 10.2 11 11-6.1.8-10.1 4.8-11 11-.9-6.2-4.9-10.2-11-11 6.1-.8 10.1-4.8 11-11z"
        fill={color}
      />
    </svg>
  );
}

/* ================================================================
   SPARK DOT — Glowing Circular Accent
   ================================================================ */

/**
 * Small glowing circular dot — active markers, constellation points,
 * decorative accents. Echoes the dots in the logo.
 */
export function SparkDot({
  size = 8,
  className = "",
  style,
  glow = true,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
  glow?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: "var(--color-white)",
        opacity: 0.7,
        boxShadow: glow
          ? `0 0 ${size * 1.5}px ${size * 0.3}px rgba(255, 255, 255, 0.25)`
          : undefined,
        ...style,
      }}
    />
  );
}

/* ================================================================
   DOTS — Two-Circle Logo Mark
   ================================================================ */

/**
 * The two-circle motif from the logo — one above, one below.
 * Can be used as decorative markers, progress elements, visual anchors.
 */
export function Dots({
  className = "",
  size = 6,
  gap = 16,
  color = "currentColor",
  style,
}: {
  className?: string;
  size?: number;
  gap?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={`inline-flex flex-col items-center ${className}`}
      style={{ gap, ...style }}
    >
      <span
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: color,
          opacity: 0.6,
        }}
      />
      <span
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: color,
          opacity: 0.6,
        }}
      />
    </div>
  );
}

/* ================================================================
   WAVE DIVIDER — Organic Section Transition
   ================================================================ */

/**
 * Organic wave shape used as a transition between sections.
 * Replaces hard edges with flowing, breathing movement.
 */
export function WaveDivider({
  className = "",
  fill = "var(--color-black)",
  flip = false,
  style,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      fill="none"
      style={{
        display: "block",
        width: "100%",
        transform: flip ? "scaleY(-1)" : undefined,
        ...style,
      }}
    >
      <path
        d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  );
}
