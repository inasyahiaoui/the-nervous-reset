"use client";

import { useState, useCallback } from "react";
import {
  CHECK_IN_QUESTIONS,
  TOTAL_QUESTIONS,
} from "@/data/check-in";
import { calculateCheckInResult, type ScoringResult } from "@/lib/check-in/scoring";
import { buildSubmission, type CheckInSubmission, type SubscribePayload } from "@/lib/check-in/types";
import CheckInIntro from "./CheckInIntro";
import QuestionStep from "./QuestionStep";
import CheckInResult from "./CheckInResult";

/**
 * Reset Check-In — interactive centerpiece.
 * All logic UNCHANGED.
 */
export default function CheckIn({ composed = false }: { composed?: boolean } = {}) {
  const [phase, setPhase] = useState<"intro" | "questions" | "result">("intro");
  const [email, setEmail] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [submission, setSubmission] = useState<CheckInSubmission | null>(null);

  const handleEmailSubmit = useCallback((submittedEmail: string) => {
    setEmail(submittedEmail);
    setPhase("questions");
  }, []);

  const handleAnswer = useCallback((questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }, []);

  const submitToSheets = useCallback((payload: SubscribePayload) => {
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      const scoringResult = calculateCheckInResult(answers);
      setResult(scoringResult);
      const sub = buildSubmission({
        email,
        resultCategory: scoringResult.category,
        recommendedReset: scoringResult.recommendedReset?.slug,
        dominantDimension: scoringResult.dominantDimension,
      });
      setSubmission(sub);
      submitToSheets({
        email,
        resultCategory: scoringResult.category,
        recommendedReset: scoringResult.recommendedReset?.slug ?? null,
      });
      setPhase("result");
    }
  }, [currentIndex, answers, email, submitToSheets]);

  const handleBack = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleRestart = useCallback(() => {
    setPhase("intro");
    setEmail("");
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    setSubmission(null);
  }, []);

  const inner = (
    <div className="glass px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 relative overflow-hidden">
      {/* Animated wave inside panel — extremely subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute bottom-0 left-0 w-full wave-drift"
          viewBox="0 0 800 120"
          fill="none"
          preserveAspectRatio="none"
          style={{ height: "40%", opacity: 0.02 }}
        >
          <path d="M0 60 C 120 20, 240 100, 400 60 S 680 20, 800 60" stroke="var(--color-ivory)" strokeWidth="1" />
          <path d="M0 75 C 150 35, 300 115, 480 75 S 700 35, 800 75" stroke="var(--color-signal)" strokeWidth="0.5" opacity="0.35" />
        </svg>
      </div>

      <div className="relative z-10">
        {phase === "intro" && <CheckInIntro onSubmit={handleEmailSubmit} />}
        {phase === "questions" && (
          <QuestionStep
            question={CHECK_IN_QUESTIONS[currentIndex]}
            currentIndex={currentIndex}
            totalQuestions={TOTAL_QUESTIONS}
            selectedAnswer={answers[CHECK_IN_QUESTIONS[currentIndex].id]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {phase === "result" && result && (
          <CheckInResult result={result} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );

  if (composed) {
    return <div id="check-in" className="scroll-mt-nav">{inner}</div>;
  }

  return (
    <section
      id="check-in"
      className="relative overflow-hidden scroll-mt-nav"
      style={{ background: "var(--color-black)" }}
    >
      <div className="relative z-10 mx-auto max-w-2xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">
        {inner}
      </div>
    </section>
  );
}
