/**
 * THE NERVOUS RESET — Check-In Scoring Module
 *
 * Pure, deterministic scoring logic.
 * Same answers always produce the same result.
 *
 * Scoring approach (thenervous.md §20, §21):
 *   1. Sum weights per dimension across all answered questions
 *   2. Find the dominant dimension (highest total)
 *   3. Classify into one of three result states:
 *        - Doing Well: no dimension exceeds threshold
 *        - A Reset May Help: one dimension is clearly dominant
 *        - Consider Additional Support: not triggered by current
 *          questionnaire (spec §21C notes this for future self-harm
 *          screening questions — preserved, not invented)
 *
 * Tie-breaking: first dimension in canonical order wins.
 */

import {
  CHECK_IN_QUESTIONS,
  type Dimension,
} from "@/data/check-in";
import { RESET_PRODUCTS } from "@/data/resets";

/* ================================================================
   TYPES
   ================================================================ */

export type ResultCategory = "doing-well" | "reset-may-help" | "consider-support";

export interface ScoringResult {
  category: ResultCategory;
  /** The dimension with the highest score — undefined when "doing-well" */
  dominantDimension?: Dimension;
  /** The Reset product matching the dominant dimension — undefined when "doing-well" */
  recommendedReset?: (typeof RESET_PRODUCTS)[number];
  /** Full score breakdown per dimension */
  scores: Record<Dimension, number>;
}

/* ================================================================
   CONSTANTS
   ================================================================ */

/** Canonical dimension order — used for deterministic tie-breaking */
const DIMENSION_ORDER: Dimension[] = [
  "anxiety",
  "burnout",
  "lowEnergy",
  "newMom",
  "heartbreak",
];

/**
 * Threshold: if the highest single-dimension score is <= this value,
 * the result is "Doing Well".
 *
 * Rationale: with 8 questions and max weight 3, a score of ≤ 2
 * means the user selected low-intensity answers across the board —
 * no single area shows a meaningful signal.
 */
const DOING_WELL_THRESHOLD = 2;

/* ================================================================
   SCORING
   ================================================================ */

/**
 * Calculate dimension scores from the user's answers.
 *
 * For each answered question, look up the selected option's weights
 * and add them to the corresponding dimensions.
 */
function calculateDimensionScores(
  answers: Record<string, string>
): Record<Dimension, number> {
  const scores: Record<Dimension, number> = {
    anxiety: 0,
    burnout: 0,
    lowEnergy: 0,
    newMom: 0,
    heartbreak: 0,
  };

  for (const question of CHECK_IN_QUESTIONS) {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) continue;

    const option = question.options.find((o) => o.id === selectedOptionId);
    if (!option) continue;

    for (const [dim, weight] of Object.entries(option.weights) as [Dimension, number][]) {
      scores[dim] += weight;
    }
  }

  return scores;
}

/**
 * Find the dominant dimension.
 * Returns the first dimension in canonical order when there is a tie.
 */
function findDominantDimension(
  scores: Record<Dimension, number>
): { dimension: Dimension; score: number } | null {
  let bestDim: Dimension | null = null;
  let bestScore = 0;

  for (const dim of DIMENSION_ORDER) {
    if (scores[dim] > bestScore) {
      bestScore = scores[dim];
      bestDim = dim;
    }
  }

  return bestDim && bestScore > 0
    ? { dimension: bestDim, score: bestScore }
    : null;
}

/* ================================================================
   MAIN EXPORT
   ================================================================ */

/**
 * Calculate the complete Check-In result from the user's answers.
 *
 * This is the single entry point for Phase 5 scoring.
 * UI components call this function — they do not calculate scores.
 */
export function calculateCheckInResult(
  answers: Record<string, string>
): ScoringResult {
  const scores = calculateDimensionScores(answers);
  const dominant = findDominantDimension(scores);

  // ── Category classification ──
  if (!dominant || dominant.score <= DOING_WELL_THRESHOLD) {
    return {
      category: "doing-well",
      scores,
    };
  }

  // ── A Reset May Help ──
  const recommendedReset = RESET_PRODUCTS.find(
    (p) => p.slug === dimensionToSlug(dominant.dimension)
  );

  return {
    category: "reset-may-help",
    dominantDimension: dominant.dimension,
    recommendedReset,
    scores,
  };
}

/* ================================================================
   HELPERS
   ================================================================ */

/** Map a scoring dimension to its corresponding product slug */
function dimensionToSlug(dimension: Dimension): string {
  const map: Record<Dimension, string> = {
    anxiety: "anxiety",
    burnout: "burnout",
    lowEnergy: "low-energy",
    newMom: "new-mom",
    heartbreak: "heartbreak",
  };
  return map[dimension];
}

/* ================================================================
   RESULT COPY — presentation text for each category
   ================================================================ */

/** Human-readable dimension descriptions for result explanation */
export const DIMENSION_DESCRIPTIONS: Record<Dimension, {
  heading: string;
  explanation: string;
}> = {
  anxiety: {
    heading: "Mental tension and overthinking",
    explanation:
      "Your answers suggest that worry and overthinking may be taking up more space than you'd like. A Reset focused on calming the mind may be a useful place to begin.",
  },
  burnout: {
    heading: "Exhaustion and overload",
    explanation:
      "Your answers suggest that exhaustion and constant output may be wearing you down. A Reset focused on recovery and boundaries may help you find your footing again.",
  },
  lowEnergy: {
    heading: "Low energy and depletion",
    explanation:
      "Your answers suggest that your energy reserves may be running low. A Reset focused on gentle routines and rebuilding momentum may be a good starting point.",
  },
  newMom: {
    heading: "New-mom adjustment",
    explanation:
      "Your answers suggest that the transition to motherhood may be weighing on you. A Reset designed for this season may help you reconnect with yourself.",
  },
  heartbreak: {
    heading: "Emotional loss and recovery",
    explanation:
      "Your answers suggest that you may be moving through emotional loss or heartbreak. A Reset focused on healing and moving forward may be right for where you are.",
  },
};

/** Copy for the "Doing Well" result state — from §21A */
export const DOING_WELL_COPY = {
  heading: "You're doing okay.",
  body: "Nothing in your answers strongly suggests that you need a major reset right now. Keep protecting the habits and connections that help you feel grounded.",
  suggestions: [
    "Take a few minutes today to check in with yourself — even a short pause makes a difference.",
    "Notice what's working and protect those small moments.",
    "If things shift, the Resets are always here when you need them.",
  ],
};

/** Copy for the "Consider Additional Support" result state — from §21C */
export const CONSIDER_SUPPORT_COPY = {
  heading: "You may need more support than a self-guided reset can provide.",
  body: "Your answers suggest you may be going through something significant. Speaking with a qualified professional can provide the kind of support that goes beyond what a digital experience can offer.",
  cta: "Find a qualified professional",
};
