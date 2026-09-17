import Link from "next/link";

const NAV_ITEMS = [
  { label: "The Resets", href: "#resets" },
  { label: "Check-In", href: "#check-in" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
] as const;

/**
 * Footer — $5,000 minimal editorial closing frame.
 * Premium glass border top, refined typography.
 */
export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "var(--color-black)",
        borderTop: "1px solid rgba(245,240,232,0.04)",
      }}
    >
      {/* Subtle gold accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(232,212,77,0.12), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-content flex flex-col items-center gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-14 md:flex-row md:items-start md:justify-between md:py-16">
        {/* Wordmark + tagline — premium */}
        <div className="flex flex-col items-center gap-3.5 md:items-start">
          <Link
            href="/"
            aria-label="The Nervous Reset home"
            className="wordmark"
          >
            THE NERVOUS RESET
          </Link>
          <p
            className="max-w-[200px] text-center text-[0.75rem] md:text-left"
            style={{
              color: "rgba(245,240,232,0.16)",
              lineHeight: "1.6",
            }}
          >
            Digital resets for the seasons of life that feel like too
            much.
          </p>
        </div>

        {/* Nav links — premium hover */}
        <nav
          className="flex flex-col items-center gap-2.5 md:items-start"
          aria-label="Footer"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] transition-all duration-500 hover:text-ivory"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Legal + copyright — premium */}
        <div className="flex flex-col items-center gap-2.5 md:items-end">
          <div
            className="flex items-center gap-4 text-[0.75rem]"
            style={{ color: "rgba(245,240,232,0.1)" }}
          >
            <span
              role="link"
              aria-disabled="true"
              className="cursor-default transition-colors duration-400 hover:text-ivory/40"
            >
              Privacy
            </span>
            <span
              role="link"
              aria-disabled="true"
              className="cursor-default transition-colors duration-400 hover:text-ivory/40"
            >
              Terms
            </span>
          </div>
          <p
            className="text-[0.6875rem]"
            style={{ color: "rgba(245,240,232,0.06)" }}
          >
            &copy; {new Date().getFullYear()} The Nervous Reset
          </p>
        </div>
      </div>
    </footer>
  );
}
