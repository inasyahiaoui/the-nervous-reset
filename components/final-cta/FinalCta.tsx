"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/**
 * Final CTA — $5,000 emotional conclusion with cinematic photography.
 * Glass panel content overlay, Ken Burns background, premium orbital rings,
 * multi-layered atmospheric treatment.
 */
export default function FinalCta() {
  return (
    <section
      className="relative overflow-hidden noise"
      style={{ background: "var(--color-black)" }}
    >
      {/* Rich atmospheric background with 4K photography + Ken Burns */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Background image with Ken Burns zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/final-reset.jpg"
            alt=""
            fill
            quality={90}
            className="object-cover ken-burns"
            sizes="100vw"
          />
          {/* Multi-layer cinematic treatment */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 35%, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.88) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0) 20%, rgba(5,5,5,0) 60%, rgba(5,5,5,0.95) 100%)",
            }}
          />
          {/* Warm gold atmospheric glow */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 45%, rgba(232,212,77,0.015) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* Ambient pulse dots — premium */}
        <div className="pulse-dot absolute top-[25%] left-[20%] w-[3px] h-[3px] rounded-full" style={{ background: "rgba(232,212,77,0.2)", animationDelay: "0s" }} />
        <div className="pulse-dot absolute top-[40%] right-[15%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.12)", animationDelay: "2s" }} />
        <div className="pulse-dot absolute bottom-[30%] right-[25%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(232,212,77,0.15)", animationDelay: "4s" }} />
        <div className="pulse-dot absolute top-[55%] left-[30%] w-[2px] h-[2px] rounded-full" style={{ background: "rgba(245,240,232,0.08)", animationDelay: "3s" }} />

        {/* Premium orbital rings overlay */}
        <svg viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="cta-glow" cx="50%" cy="42%" r="30%">
              <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.025" />
              <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Atmospheric glow */}
          <circle cx="600" cy="300" r="200" fill="url(#cta-glow)" className="signal-breathe" style={{ animationDuration: "8s" }} />
          {/* Breathing rings — premium system */}
          <circle cx="600" cy="300" r="120" stroke="var(--color-ivory)" strokeWidth="0.4" opacity="0.025"
            className="signal-breathe" style={{ animationDuration: "7s" }} />
          <circle cx="600" cy="300" r="180" stroke="var(--color-ivory)" strokeWidth="0.3" opacity="0.018"
            className="signal-breathe" style={{ animationDuration: "9s", animationDelay: "1.5s" }} />
          <circle cx="600" cy="300" r="260" stroke="var(--color-ivory)" strokeWidth="0.25" opacity="0.012"
            className="signal-breathe" style={{ animationDuration: "11s", animationDelay: "3s" }} />
          {/* Gold accent ring */}
          <circle cx="600" cy="300" r="220" stroke="var(--color-signal)" strokeWidth="0.2" opacity="0.008"
            className="signal-breathe-slow" style={{ animationDuration: "14s" }} />
          {/* Flowing ribbon */}
          <path d="M200 350 C 400 280, 600 420, 800 340 S 1000 260, 1200 340"
            stroke="var(--color-ivory)" strokeWidth="20" strokeLinecap="round" opacity="0.008"
            className="signal-drift" style={{ animationDuration: "28s" }} />
          {/* Pulse dots on rings */}
          <circle cx="600" cy="180" r="3" fill="var(--color-signal)" opacity="0.2"
            className="pulse-dot" style={{ animationDuration: "3.5s" }} />
          <circle cx="720" cy="300" r="2" fill="var(--color-signal)" opacity="0.15"
            className="pulse-dot" style={{ animationDuration: "4.5s", animationDelay: "1.2s" }} />
          <circle cx="480" cy="300" r="2" fill="var(--color-signal)" opacity="0.15"
            className="pulse-dot" style={{ animationDuration: "4.5s", animationDelay: "2.5s" }} />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center px-5 py-32 sm:px-6 sm:py-40 md:py-48 lg:px-12 text-center">
        {/* Glass panel content overlay — premium */}
        <div className="container-content flex flex-col items-center max-w-2xl">
          <Reveal>
            <div className="glass-panel inline-flex px-6 py-2.5 sm:px-8 sm:py-3" style={{ borderRadius: "var(--radius-2xl)" }}>
              <span className="meta" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.875rem" }}>
                The Nervous Reset
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="display mt-8 sm:mt-10 max-w-[20ch] text-[clamp(2.25rem,7vw,4.5rem)] leading-[1.05]"
            >
              Your reset is{" "}
              <span className="pulse-text" style={{ color: "var(--color-signal)" }}>waiting.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p
              className="mt-7 sm:mt-8 max-w-[34ch] text-[1.125rem] sm:text-[1.25rem]"
              style={{ color: "rgba(245,240,232,0.5)", lineHeight: "1.85" }}
            >
              You don&apos;t have to do it all. Just take the first step.
            </p>
          </Reveal>

          {/* 21-day / $1-a-day pricing — glass panel */}
          <Reveal delay={200}>
            <div className="mt-7 sm:mt-8">
              <div
                className="glass-panel inline-flex flex-col items-center gap-1.5 px-8 py-4 sm:px-10 sm:py-5"
                style={{ borderRadius: "var(--radius-xl)" }}
              >
                <p className="meta" style={{ color: "rgba(245,240,232,0.35)", fontSize: "0.9375rem" }}>
                  21 days · One day at a time
                </p>
                <p className="meta pulse-text" style={{ color: "var(--color-signal)", opacity: 0.6, fontSize: "0.9375rem" }}>
                  ≈ $1 / day · No subscription
                </p>
              </div>
            </div>
          </Reveal>

          {/* Journey progression visual — premium */}
          <Reveal delay={220}>
            <div className="mt-9 flex items-center gap-5" aria-hidden="true">
              {["DAY 01", "DAY 07", "DAY 14", "DAY 21"].map((day, i) => (
                <span key={day} className="flex items-center gap-5">
                  <span
                    className="meta pulse-dot"
                    style={{
                      fontSize: i === 3 ? "0.6875rem" : "0.5625rem",
                      letterSpacing: "0.15em",
                      color: i === 3
                        ? "var(--color-signal)"
                        : "rgba(245,240,232,0.15)",
                      opacity: i === 3 ? 0.7 : 1,
                      animationDelay: `${i * 0.6}s`,
                    }}
                  >
                    {day}
                  </span>
                  {i < 3 && (
                    <span
                      className="pulse-wave"
                      style={{
                        display: "inline-block",
                        width: "20px",
                        height: "1px",
                        background: `linear-gradient(to right, rgba(232,212,77,${0.04 + i * 0.02}), rgba(245,240,232,${0.06 + i * 0.02}))`,
                        animationDelay: `${i * 0.8}s`,
                      }}
                    />
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 sm:mt-11 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="#check-in" className="btn-primary pulse-gold w-full sm:w-auto">
                Take the Reset Check-In
              </a>
              <a href="#resets" className="btn-secondary w-full sm:w-auto">
                Explore the Resets
              </a>
            </div>
          </Reveal>

          {/* Closing mark — premium glass orb */}
          <Reveal delay={340}>
            <div className="mt-24 sm:mt-32 flex flex-col items-center gap-3">
              <div
                className="relative flex h-[72px] w-[72px] sm:h-[80px] sm:w-[80px] items-center justify-center rounded-full pulse-glow glass-panel"
                aria-hidden="true"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="meta" style={{ color: "rgba(245,240,232,0.2)", fontSize: "0.5rem" }}>
                    Five Paths
                  </span>
                  <div className="signal-dot" style={{ width: "4px", height: "4px" }} />
                  <span className="meta" style={{ color: "rgba(245,240,232,0.2)", fontSize: "0.5rem" }}>
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
