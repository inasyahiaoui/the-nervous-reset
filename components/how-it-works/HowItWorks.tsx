import Reveal from "@/components/ui/Reveal";

/**
 * How It Works — editorial timeline.
 *
 * Clear, sophisticated, typographic.
 * Strong numbered rhythm with thin separators.
 */

const STEPS = [
  {
    number: "01",
    title: "Check in",
    body: "Take a moment to understand where you are right now.",
  },
  {
    number: "02",
    title: "Find your Reset",
    body: "Discover which Reset may fit your current season of life.",
  },
  {
    number: "03",
    title: "Start your experience",
    body: "Read, practice, reflect, and move at your own pace.",
  },
] as const;

export default function HowItWorks({
  horizontal = false,
}: {
  horizontal?: boolean;
}) {
  if (horizontal) {
    return (
      <div className="flex flex-col gap-8 py-8 sm:gap-10 sm:py-10 md:py-14 lg:py-0 lg:pl-8 lg:pr-4">
        <div>
          <Reveal>
            <span
              className="meta"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              How It Works
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display mt-3 text-[clamp(1.375rem,4vw,2.2rem)] font-medium leading-[1.1]" style={{ color: "var(--color-ivory)" }}>
              Three simple{" "}
              <span style={{ color: "var(--color-signal)" }}>steps.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={100 + i * 70}>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className="display text-[1.5rem] sm:text-[1.625rem]"
                    style={{ color: "rgba(245,240,232,0.15)" }}
                  >
                    {step.number}
                  </span>
                  {i < 2 && (
                    <div
                      className="h-8 w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(245,240,232,0.05), transparent)",
                      }}
                    />
                  )}
                </div>
                <div className="pt-0.5">
                  <h3 className="display text-[1rem] sm:text-[1.0625rem]" style={{ color: "rgba(245,240,232,0.8)" }}>
                    {step.title}
                  </h3>
                  <p
                    className="mt-1.5 max-w-[28ch] text-[0.8125rem] sm:text-[0.875rem]"
                    style={{
                      color: "rgba(245,240,232,0.38)",
                      lineHeight: "1.7",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden scroll-mt-nav"
      style={{ background: "var(--color-black)" }}
    >
      <div className="container-narrow relative z-10 flex flex-col items-center py-12 sm:py-16 md:py-24">
        <Reveal>
          <span
            className="meta"
            style={{ color: "rgba(245,240,232,0.25)" }}
          >
            How It Works
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mx-auto max-w-[18ch] mt-4 text-center text-[clamp(1.5rem,4.5vw,2.5rem)] font-medium leading-[1.08]" style={{ color: "var(--color-ivory)" }}>
            Three simple{" "}
            <span style={{ color: "var(--color-signal)" }}>steps.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div
            className="rule-animated mt-6 w-full max-w-xs"
            aria-hidden="true"
          />
        </Reveal>

        <div className="mt-8 flex w-full max-w-md flex-col gap-8 sm:gap-10 md:mt-12">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={140 + i * 80}>
              <div className="flex flex-col items-center text-center">
                <span
                  className="display text-[1.375rem] sm:text-[1.5rem] font-medium"
                  style={{ color: "rgba(245,240,232,0.15)" }}
                >
                  {step.number}
                </span>
                <h3 className="mt-2 display text-[1rem] sm:text-[1.125rem] font-medium" style={{ color: "var(--color-ivory)" }}>
                  {step.title}
                </h3>
                <div
                  className="mt-3 h-px w-6"
                  style={{
                    background: "rgba(232,212,77,0.1)",
                  }}
                  aria-hidden="true"
                />
                <p
                  className="mx-auto mt-3 max-w-[30ch] text-[0.875rem]"
                  style={{
                    color: "rgba(245,240,232,0.35)",
                    lineHeight: "1.7",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
