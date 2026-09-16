/**
 * THE NERVOUS RESET — Reset Product Data
 *
 * Source of truth for the five Reset products.
 * All copy derives from thenervous.md §24.
 *
 * availability:
 *   - available: product is live and purchasable (Payhip URL required)
 *   - coming-soon: product is not yet available for purchase
 *
 * Payhip URLs: add exact supplied URLs when products are finalized.
 * Do NOT invent placeholder URLs.
 */

export interface ResetProduct {
  slug: string;
  name: string;
  /** Section number in thenervous.md */
  specRef: string;
  /** Positioning direction — the one-line pitch */
  tagline: string;
  /** Core themes the product addresses */
  themes: string[];
  /** CSS variable for the product accent */
  accentVar: string;
  /** Profile name from §23 */
  profileName: string;
  /** Cinematic card image (public/images/resets/) */
  image: string;
  /** Product availability status */
  availability: "available" | "coming-soon";
  /** Payhip purchase URL — only for available products */
  payhipUrl?: string;
}

export const RESET_PRODUCTS: ResetProduct[] = [
  {
    slug: "anxiety",
    name: "Anxiety",
    specRef: "§24.1",
    tagline: "A guided reset for a mind that has been running too fast.",
    themes: ["Worry", "Overthinking", "Mental tension", "Feeling on edge", "Creating more calm"],
    accentVar: "var(--color-anxiety)",
    profileName: "The Overloaded Mind",
    image: "/images/resets/reset-anxiety.jpg",
    availability: "available",
    payhipUrl: "https://payhip.com/b/HfmVz",
  },
  {
    slug: "new-mom",
    name: "New Mom",
    specRef: "§24.2",
    tagline: "A gentle reset for the woman behind the new-mom identity.",
    themes: ["Adjustment to motherhood", "Emotional overload", "Identity change", "Rest", "Reconnection with self"],
    accentVar: "var(--color-new-mom)",
    profileName: "The New Beginning",
    image: "/images/resets/reset-new-mom.jpg",
    availability: "available",
    payhipUrl: "https://payhip.com/b/6t0s2",
  },
  {
    slug: "burnout",
    name: "Burnout",
    specRef: "§24.3",
    tagline: "For when you are tired of being tired.",
    themes: ["Exhaustion", "Overload", "Constant output", "Boundaries", "Recovery"],
    accentVar: "var(--color-burnout)",
    profileName: "The Exhausted Self",
    image: "/images/resets/reset-burnout.jpg",
    availability: "coming-soon",
  },
  {
    slug: "low-energy",
    name: "Low Energy",
    specRef: "§24.4",
    tagline: "A gentle reset for when your energy reserves feel low.",
    themes: ["Depletion", "Low motivation", "Daily energy", "Gentle routines", "Rebuilding momentum"],
    accentVar: "var(--color-low-energy)",
    profileName: "The Depleted Self",
    image: "/images/resets/reset-low-energy.jpg",
    availability: "coming-soon",
  },
  {
    slug: "heartbreak",
    name: "Heartbreak",
    specRef: "§24.5",
    tagline: "A guided reset for finding your way forward after heartbreak.",
    themes: ["Emotional loss", "Separation", "Grief after a relationship", "Rebuilding identity", "Moving forward"],
    accentVar: "var(--color-heartbreak)",
    profileName: "The Healing Heart",
    image: "/images/resets/reset-heartbreak.jpg",
    availability: "available",
    payhipUrl: "https://payhip.com/b/XYdon",
  },
] as const;
