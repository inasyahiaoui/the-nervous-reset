import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { label: "The Resets", href: "#resets" },
  { label: "Check-In", href: "#check-in" },
  { label: "How It Works", href: "#how-it-works" },
] as const;

/**
 * Navigation — floating premium glass interface.
 * Entrance animation, refined glass, elegant hover states.
 */
export default function Navigation() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 hero-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <nav
        className="glass-nav mx-auto flex h-[2.75rem] max-w-[64rem] items-center justify-between rounded-full px-4 sm:h-[3rem] sm:px-6 md:h-[3.25rem] md:px-8"
        aria-label="Primary"
      >
        {/* Wordmark */}
        <Link href="/" aria-label="The Nervous Reset home" className="wordmark">
          THE NERVOUS RESET
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[0.8125rem] font-medium"
              style={{ letterSpacing: "0.03em" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <a
            href="#check-in"
            className="btn-primary !h-8 !min-h-0 !text-[0.8125rem] !px-5"
          >
            Take the Check-In
          </a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
