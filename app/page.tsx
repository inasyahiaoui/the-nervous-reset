import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import BrandStory from "@/components/brand-story/BrandStory";
import Resets from "@/components/resets/Resets";
import CheckIn from "@/components/check-in/CheckIn";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import FinalCta from "@/components/final-cta/FinalCta";
import Footer from "@/components/footer/Footer";

/**
 * Home — The Nervous Reset
 *
 * Editorial single-page composition.
 * One continuous experience with atmospheric transitions.
 */
export default function Home() {
  return (
    <main className="flex flex-col" style={{ background: "var(--color-black)" }}>
      <Navigation />

      <Hero />

      {/* Atmospheric transition — flowing gradient */}
      <div className="relative h-16 sm:h-20 md:h-24" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--color-black), transparent 30%, transparent 70%, var(--color-black))",
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rule-animated" style={{ maxWidth: "10rem" }} />
        </div>
      </div>

      <BrandStory />

      <div className="relative h-16 sm:h-20 md:h-24" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--color-black), transparent 30%, transparent 70%, var(--color-black))",
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rule-animated" style={{ maxWidth: "10rem" }} />
        </div>
      </div>

      <Resets />

      <div className="relative h-16 sm:h-20 md:h-24" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--color-black), transparent 30%, transparent 70%, var(--color-black))",
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rule-animated" style={{ maxWidth: "10rem" }} />
        </div>
      </div>

      {/* Check-In + How It Works */}
      <section
        className="relative overflow-hidden scroll-mt-nav"
        style={{ background: "var(--color-black)" }}
      >
        <div className="container-content relative z-10 flex flex-col gap-10 py-16 sm:py-24 md:flex-row md:gap-8 md:py-32 lg:gap-16">
          <div className="w-full md:w-[55%]">
            <CheckIn composed />
          </div>
          <div className="w-full md:w-[45%]">
            <HowItWorks horizontal />
          </div>
        </div>
      </section>

      <div className="relative h-16 sm:h-20 md:h-24" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--color-black), transparent 30%, transparent 70%, var(--color-black))",
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rule-animated" style={{ maxWidth: "10rem" }} />
        </div>
      </div>

      <FinalCta />
      <Footer />
    </main>
  );
}
