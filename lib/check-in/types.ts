/**
 * THE NERVOUS RESET — Check-In Shared Types
 *
 * Typed structures for the Check-In data flow.
 * These types are shared between the scoring layer, the UI,
 * and the submission layer (Phase 9 — Google Sheets).
 *
 * Privacy: this payload contains only the minimum required data.
 * Individual question answers are NOT included — only the
 * email, result category, and recommended Reset.
 */

import type { ResultCategory } from "./scoring";
import type { Dimension } from "@/data/check-in";

/**
 * The final submission payload — what Phase 9 will send to Google Sheets.
 *
 * Contains only the minimum necessary fields:
 *   - email: the contact address collected in the intro
 *   - resultCategory: "doing-well" | "reset-may-help" | "consider-support"
 *   - recommendedReset: the product slug, when applicable
 *   - dominantDimension: the scoring dimension, when applicable
 *   - timestamp: when the check-in was completed (ISO 8601)
 *
 * Individual question answers are intentionally excluded from this payload.
 * Detailed psychological responses are not stored per the privacy policy.
 */
export interface CheckInSubmission {
  email: string;
  resultCategory: ResultCategory;
  recommendedReset: string | null;
  dominantDimension: Dimension | null;
  timestamp: string;
}

/**
 * Build a CheckInSubmission from the orchestrator's state.
 *
 * This is a pure function — no side effects, no network calls.
 * Phase 9 will pass the result to an API route.
 */
export function buildSubmission(payload: {
  email: string;
  resultCategory: ResultCategory;
  recommendedReset?: string;
  dominantDimension?: Dimension;
}): CheckInSubmission {
  return {
    email: payload.email,
    resultCategory: payload.resultCategory,
    recommendedReset: payload.recommendedReset ?? null,
    dominantDimension: payload.dominantDimension ?? null,
    timestamp: new Date().toISOString(),
  };
}

/**
 * The lean wire payload sent to /api/subscribe.
 *
 * Contains ONLY the fields that go to Google Sheets:
 *   - email: contact address
 *   - resultCategory: one of the three allowed values
 *   - recommendedReset: the product slug or null
 *
 * No timestamp (generated server-side).
 * No dominantDimension (not needed in Sheets).
 * No answers, no scores, no fingerprints.
 */
export interface SubscribePayload {
  email: string;
  resultCategory: ResultCategory;
  recommendedReset: string | null;
}
