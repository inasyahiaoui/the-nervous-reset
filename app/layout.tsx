import type { Metadata } from "next";
import "./globals.css";

/**
 * Root Layout — The Nervous Reset
 *
 * Fonts loaded via Google Fonts <link> tags for build stability.
 * This avoids the next/font/google Turbopack resolution issue.
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
