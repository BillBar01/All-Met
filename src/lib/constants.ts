export const SITE_NAME = "THE ALL MET";
export const SITE_TAGLINE = "DC Sports & Tech. No Bullshit.";
export const SITE_DESCRIPTION =
  "The All Met covers DC sports teams and tech culture with a bold, no-nonsense voice.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pro Sports", href: "/pro-sports" },
  { label: "High School", href: "/high-school" },
  { label: "College", href: "/college" },
  { label: "Technology", href: "/technology" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "What We Are", href: "/what-we-are" },
] as const;

export const SECTIONS = [
  "All",
  "Pro Sports",
  "High School",
  "College",
  "Technology",
] as const;

export type Section = (typeof SECTIONS)[number];

export const PRO_TEAMS = [
  "Commanders",
  "Nationals",
  "Wizards",
  "Capitals",
  "DC United",
] as const;

export type ProTeam = (typeof PRO_TEAMS)[number];

export const COLLEGE_TEAMS = [
  "Georgetown",
  "Maryland",
  "Howard",
  "George Washington",
] as const;

export type CollegeTeam = (typeof COLLEGE_TEAMS)[number];

export const WRITTEN_SHIT_FILTERS = [
  "All",
  "Pro Sports",
  "High School",
  "College",
  "Technology",
] as const;

export const PRO_SPORTS_SUB_FILTERS = [
  "All Teams",
  ...PRO_TEAMS,
] as const;
