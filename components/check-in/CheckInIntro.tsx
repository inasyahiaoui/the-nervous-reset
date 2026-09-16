"use client";

import { useState } from "react";
import { WaveSvg } from "@/components/ui/brand-visuals";
import Reveal from "@/components/ui/Reveal";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const JOURNEY_WORDS = ["Pause", "Notice", "Understand", "Reset"] as const;

/**
 * Check-In Intro — email capture + brand moment.
 * All validation logic UNCHANGED.
 */
export default function CheckInIntro({
  onSubmit,
}: {
  onSubmit: (email: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    onSubmit(trimmed);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <Reveal>
        <WaveSvg
          variant="double"
          strokeColor="rgba(245,240,232,0.06)"
          className="mb-6 w-20 sm:w-24"
        />
      </Reveal>

      <Reveal delay={60}>
        <h2
          className="display text-[clamp(1.375rem,3.5vw,2rem)] font-medium leading-[1.12]"
          style={{ color: "var(--color-ivory)" }}
        >
          Take the Reset Check-In
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p
          className="mx-auto mt-4 max-w-[36ch] text-[0.875rem] sm:text-[0.9375rem]"
          style={{ color: "rgba(245,240,232,0.45)", lineHeight: "1.7" }}
        >
          A few honest questions to help you find the right Reset.
          It takes about two minutes.
        </p>
      </Reveal>

      <Reveal delay={180}>
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-sm">
          <label className="sr-only" htmlFor="check-in-email">
            Email address
          </label>
          <div className="flex flex-col gap-3">
            <input
              id="check-in-email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="your@email.com"
              required
              className="h-[3rem] w-full rounded-full border px-5 text-[0.875rem] outline-none transition-all duration-400 focus:border-[rgba(245,240,232,0.12)] focus:bg-[rgba(245,240,232,0.04)]"
              style={{
                background: "rgba(245,240,232,0.02)",
                borderColor: "rgba(245,240,232,0.05)",
                color: "var(--color-ivory)",
              }}
            />
            {error && (
              <p className="text-[0.75rem]" style={{ color: "var(--color-error)" }}>
                {error}
              </p>
            )}
            <button type="submit" className="btn-primary !h-12 w-full">
              Begin
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-6 flex items-center gap-4 sm:gap-5">
          {JOURNEY_WORDS.map((word, i) => (
            <span key={word} className="flex items-center gap-4 sm:gap-5">
              <span
                className="meta"
                style={{ color: "rgba(245,240,232,0.15)", fontSize: "0.5625rem" }}
              >
                {word}
              </span>
              {i < JOURNEY_WORDS.length - 1 && (
                <span
                  className="h-px w-3"
                  style={{ background: "rgba(245,240,232,0.06)" }}
                />
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
