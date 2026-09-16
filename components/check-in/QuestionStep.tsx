"use client";

import type { CheckInQuestion } from "@/data/check-in";

/**
 * QuestionStep — single question with progress.
 * All logic UNCHANGED.
 * Updated colors to warm ivory palette.
 */
export default function QuestionStep({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onBack,
}: {
  question: CheckInQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: string | undefined;
  onAnswer: (questionId: string, optionId: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="flex flex-col">
      {/* Progress */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-2.5">
          <span className="meta" style={{ color: "rgba(245,240,232,0.2)" }}>
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
        <div className="h-[2px] w-full overflow-hidden rounded-full" style={{ background: "rgba(245,240,232,0.05)" }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(to right, var(--color-gold-deep), var(--color-gold))",
            }}
          />
        </div>
      </div>

      {/* Question */}
      <h3
        className="display text-[clamp(1.25rem,3.2vw,1.625rem)] leading-[1.18] mb-7"
        style={{ color: "var(--color-ivory)" }}
      >
        {question.question}
      </h3>

      {/* Options */}
      <div className="flex flex-col gap-2.5">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onAnswer(question.id, option.id)}
              className="flex items-center gap-3.5 rounded-lg border px-4.5 py-3.5 text-left transition-all duration-400"
              style={{
                borderColor: isSelected
                  ? "rgba(232,212,77,0.3)"
                  : "rgba(245,240,232,0.04)",
                background: isSelected
                  ? "rgba(232,212,77,0.04)"
                  : "rgba(245,240,232,0.008)",
                boxShadow: isSelected
                  ? "0 0 20px rgba(232,212,77,0.03)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.02)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.04)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.008)";
                }
              }}
            >
              <div
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                style={{
                  borderColor: isSelected
                    ? "rgba(232,212,77,0.55)"
                    : "rgba(245,240,232,0.1)",
                  background: isSelected
                    ? "rgba(232,212,77,0.12)"
                    : "transparent",
                }}
              >
                {isSelected && <span className="h-[6px] w-[6px] rounded-full bg-gold" />}
              </div>
              <span
                className="text-[0.875rem] sm:text-[0.9375rem]"
                style={{
                  color: isSelected ? "var(--color-ivory)" : "rgba(245,240,232,0.5)",
                  lineHeight: "1.55",
                }}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        {currentIndex > 0 ? (
          <button
            type="button"
            onClick={onBack}
            className="text-[0.8125rem] font-medium transition-colors hover:text-ivory/40"
            style={{ color: "rgba(245,240,232,0.25)" }}
          >
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={!selectedAnswer}
          className="btn-primary !h-10 !text-[0.8125rem] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {currentIndex < totalQuestions - 1 ? "Next" : "See Results"}
          <span className="btn-arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
