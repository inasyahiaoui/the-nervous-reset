import type { Metadata } from "next";
import "./globals.css";

/**
 * Root Layout — The Nervous Reset
 *
 * Premium font system loaded via Google Fonts <link> tags.
 * DM Sans for body (clean, modern, highly readable).
 * Playfair Display for display headlines (luxury serif).
 * JetBrains Mono for monospace labels (crisp, premium).
 */
export const metadata: Metadata = {
  title: {
    default: "The Nervous Reset",
    template: "%s | The Nervous Reset",
  },
  description:
    "Digital resets for the seasons of life that feel like too much. Guided reset experiences for anxiety, burnout, heartbreak, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Premium font stack: DM Sans + Playfair Display + JetBrains Mono */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
