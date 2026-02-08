export const SITE_NAME = "ALL MET";
export const SITE_TAGLINE = "Washington's Own";
export const SITE_DESCRIPTION =
  "ALL MET covers DC sports and business with bold, honest reporting for the people who live it.";

export const NAV_LINKS = [
  { label: "Sports", href: "/sports" },
  { label: "Business", href: "/business" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "What We Are", href: "/what-we-are" },
] as const;

export const SECTIONS = [
  "All",
  "Pro Sports",
  "High School",
  "College",
  "Business",
] as const;

export type Section = (typeof SECTIONS)[number];

export const PRO_TEAMS = [
  "Commanders",
  "Nationals",
  "Wizards",
  "Capitals",
  "DC United",
  "Mystics",
  "Spirit",
] as const;

export type ProTeam = (typeof PRO_TEAMS)[number];

export const COLLEGE_TEAMS = [
  "Georgetown",
  "Maryland",
  "George Mason",
  "George Washington",
] as const;

export type CollegeTeam = (typeof COLLEGE_TEAMS)[number];

export const SPORTS_SECTION_FILTERS = [
  "All",
  "Pro Sports",
  "College",
  "High School",
] as const;

export const SPORTS_PRO_SUB_FILTERS = [
  "All Teams",
  ...PRO_TEAMS,
] as const;

export const SPORTS_COLLEGE_SUB_FILTERS = [
  "All Teams",
  ...COLLEGE_TEAMS,
] as const;
