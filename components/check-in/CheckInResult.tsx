"use client";

import { WaveSvg, Spark } from "@/components/ui/brand-visuals";
import Reveal from "@/components/ui/Reveal";
import type { ScoringResult } from "@/lib/check-in/scoring";
import {
  DIMENSION_DESCRIPTIONS,
  DOING_WELL_COPY,
} from "@/lib/check-in/scoring";

export default function CheckInResult({
  result,
  onRestart,
}: {
  result: ScoringResult;
  onRestart: () => void;
}) {
  const isDoingWell = result.category === "doing-well";
  const isResetMayHelp = result.category === "reset-may-help";

  return (
    <div className="flex flex-col items-center text-center">
      <Reveal>
        <WaveSvg
          variant="default"
          strokeColor={result.recommendedReset ? result.recommendedReset.accentVar : "rgba(245,240,232,0.08)"}
          className="mb-8 w-20 sm:w-24 opacity-15"
        />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="display mx-auto max-w-[22ch] text-[clamp(1.5rem,4vw,2.25rem)] font-medium leading-[1.12]" style={{ color: "var(--color-ivory)" }}>
          {isDoingWell
            ? DOING_WELL_COPY.heading
            : isResetMayHelp && result.dominantDimension
              ? DIMENSION_DESCRIPTIONS[result.dominantDimension].heading
              : "Your Check-In is complete."}
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="mx-auto mt-5 max-w-[42ch] text-[0.9375rem] sm:text-[1rem]" style={{ color: "rgba(245,240,232,0.5)", lineHeight: "1.8" }}>
          {isDoingWell
            ? DOING_WELL_COPY.body
            : isResetMayHelp && result.dominantDimension
              ? DIMENSION_DESCRIPTIONS[result.dominantDimension].explanation
              : "Your responses have been noted."}
        </p>
      </Reveal>

      {isDoingWell && (
        <Reveal delay={320}>
          <div className="mt-8 flex max-w-sm flex-col gap-3.5 text-left">
            {DOING_WELL_COPY.suggestions.map((suggestion, i) => (
              <div key={i} className="flex items-start gap-3 text-[0.8125rem] sm:text-[0.875rem]" style={{ color: "rgba(245,240,232,0.35)", lineHeight: "1.65" }}>
                <Spark size={5} color="rgba(245,240,232,0.2)" className="mt-1.5 flex-shrink-0" />
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {isResetMayHelp && result.recommendedReset && (
        <Reveal delay={320}>
          <div className="mt-8 w-full max-w-sm">
            <span className="meta" style={{ color: "rgba(245,240,232,0.15)" }}>
              Your suggested starting point
            </span>
            <div className="glass mt-3 flex flex-col gap-2.5 px-5 py-4 text-left">
              <div className="flex items-center justify-between">
                <h3 className="display text-[1.25rem] sm:text-[1.35rem] font-semibold" style={{ color: "var(--color-ivory)" }}>
                  {result.recommendedReset.name} Reset
                </h3>
                <WaveSvg variant="default" strokeColor={result.recommendedReset.accentVar} className="h-3 w-10 opacity-15" />
              </div>
              <p className="text-[0.8125rem] sm:text-[0.875rem]" style={{ color: "rgba(245,240,232,0.4)", lineHeight: "1.65" }}>
                {result.recommendedReset.tagline}
              </p>
              <p className="meta" style={{ color: "rgba(245,240,232,0.18)" }}>
                Profile: {result.recommendedReset.profileName}
              </p>
            </div>
            <a href="#resets" className="btn-primary mt-5 w-full !h-10">
              Explore the {result.recommendedReset.name} Reset
            </a>
          </div>
        </Reveal>
      )}

      <Reveal delay={440}>
        <p className="mt-8 max-w-sm text-[0.6875rem] sm:text-[0.75rem]" style={{ color: "rgba(245,240,232,0.1)", lineHeight: "1.7" }}>
          This result is a wellbeing guide, not a diagnosis. If you are
          in crisis or need immediate support, please reach out to a
          qualified professional or contact your local emergency services.
        </p>
      </Reveal>

      <Reveal delay={500}>
        <button type="button" onClick={onRestart} className="mt-5 text-[0.8125rem] font-medium transition-colors hover:text-ivory/35" style={{ color: "rgba(245,240,232,0.18)" }}>
          Take the Check-In Again
        </button>
      </Reveal>
    </div>
  );
}
