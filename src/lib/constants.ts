export const SITE_NAME = "THE ALL MET";
export const SITE_TAGLINE = "DC Sports & Tech. No Bullshit.";
export const SITE_DESCRIPTION =
  "The All Met covers DC sports teams and tech culture with a bold, no-nonsense voice.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Written Shit", href: "/written-shit" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "What We Are", href: "/what-we-are" },
] as const;

export const CATEGORIES = [
  "All",
  "Football",
  "Baseball",
  "Basketball",
  "Hockey",
  "Soccer",
  "Technology",
] as const;

export type Category = (typeof CATEGORIES)[number];
