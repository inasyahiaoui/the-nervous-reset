import Reveal from "@/components/ui/Reveal";

/**
 * How It Works — $5,000 editorial timeline, four steps.
 *
 * Check-In → Discover → Begin → Reset
 * Glass card steps, premium typography, gold connecting dots with pulse.
 */

const STEPS = [
  {
    number: "01",
    title: "Check-In",
    body: "Take a moment to understand where you are right now.",
  },
  {
    number: "02",
    title: "Discover",
    body: "See your results and find the Reset that fits you.",
  },
  {
    number: "03",
    title: "Begin",
    body: "Access your book, planner, and tools for the journey.",
  },
  {
    number: "04",
    title: "Reset",
    body: "Build new habits over 21 days and feel the change.",
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
              style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.875rem" }}
            >
              How It Works
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-[1.1]" style={{ color: "var(--color-ivory)" }}>
              Four simple{" "}
              <span className="pulse-text" style={{ color: "var(--color-signal)" }}>steps.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 sm:gap-7">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={100 + i * 70}>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className="display text-[1.625rem] sm:text-[1.75rem]"
                    style={{ color: "rgba(245,240,232,0.15)" }}
                  >
                    {step.number}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div
                      className="h-10 w-px pulse-glow"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(232,212,77,0.12), rgba(232,212,77,0.02))",
                      }}
                    />
                  )}
                </div>
                <div className="pt-0.5">
                  <h3 className="display text-[1.125rem] sm:text-[1.25rem]" style={{ color: "rgba(245,240,232,0.88)" }}>
                    {step.title}
                  </h3>
                  <p
                    className="mt-1.5 max-w-[28ch] text-[0.9375rem] sm:text-[1rem]"
                    style={{
                      color: "rgba(245,240,232,0.42)",
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
      <div className="container-narrow relative z-10 flex flex-col items-center py-14 sm:py-18 md:py-28">
        <Reveal>
          <span
            className="meta"
            style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.875rem" }}
          >
            How It Works
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mx-auto max-w-[18ch] mt-4 text-center text-[clamp(1.75rem,5vw,3rem)] font-medium leading-[1.08]" style={{ color: "var(--color-ivory)" }}>
            Four simple{" "}
            <span className="pulse-text" style={{ color: "var(--color-signal)" }}>steps.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div
            className="mt-6 w-full max-w-xs"
            aria-hidden="true"
          >
            <div className="gold-rule" />
          </div>
        </Reveal>

        <div className="mt-10 flex w-full max-w-md flex-col gap-10 sm:gap-12 md:mt-14">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={140 + i * 80}>
              <div className="flex flex-col items-center text-center">
                <span
                  className="display text-[1.5rem] sm:text-[1.75rem] font-medium"
                  style={{ color: "rgba(245,240,232,0.15)" }}
                >
                  {step.number}
                </span>
                <h3 className="mt-2 display text-[1.125rem] sm:text-[1.375rem] font-medium" style={{ color: "var(--color-ivory)" }}>
                  {step.title}
                </h3>
                <div
                  className="mt-3 h-px w-8"
                  style={{
                    background: "linear-gradient(to right, rgba(232,212,77,0.15), rgba(232,212,77,0.05))",
                  }}
                  aria-hidden="true"
                />
                <p
                  className="mx-auto mt-3 max-w-[30ch] text-[1rem] sm:text-[1.0625rem]"
                  style={{
                    color: "rgba(245,240,232,0.4)",
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
