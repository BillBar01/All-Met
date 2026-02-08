"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  SPORTS_SECTION_FILTERS,
  SPORTS_PRO_SUB_FILTERS,
  SPORTS_COLLEGE_SUB_FILTERS,
} from "@/lib/constants";

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSection = searchParams.get("section") || "All";
  const activeTeam = searchParams.get("team") || "All Teams";

  const handleSection = (section: string) => {
    if (section === "All") {
      router.push("/sports");
    } else {
      router.push(`/sports?section=${encodeURIComponent(section)}`);
    }
  };

  const handleTeam = (team: string, section: string) => {
    if (team === "All Teams") {
      router.push(`/sports?section=${encodeURIComponent(section)}`);
    } else {
      router.push(
        `/sports?section=${encodeURIComponent(section)}&team=${encodeURIComponent(team)}`
      );
    }
  };

  const showProSubs = activeSection === "Pro Sports";
  const showCollegeSubs = activeSection === "College";

  return (
    <div className="space-y-4">
      {/* Section filters */}
      <div className="flex flex-wrap gap-3">
        {SPORTS_SECTION_FILTERS.map((section) => (
          <button
            key={section}
            onClick={() => handleSection(section)}
            className={`headline-stamp text-xs tracking-wider px-4 py-2 border-2 transition-all ${
              activeSection === section
                ? "bg-red text-white border-red shadow-[3px_3px_0_var(--navy)]"
                : "text-silver border-silver hover:text-navy hover:border-navy"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Pro Sports team sub-filters */}
      {showProSubs && (
        <div className="flex flex-wrap gap-2 pl-2 border-l-4 border-red">
          {SPORTS_PRO_SUB_FILTERS.map((team) => (
            <button
              key={team}
              onClick={() => handleTeam(team, "Pro Sports")}
              className={`headline-stamp text-xs tracking-wider px-3 py-1.5 border-2 transition-all ${
                activeTeam === team
                  ? "bg-red text-white border-red shadow-[2px_2px_0_var(--navy)]"
                  : "text-silver border-silver hover:text-navy hover:border-navy"
              }`}
            >
              {team}
            </button>
          ))}
        </div>
      )}

      {/* College team sub-filters */}
      {showCollegeSubs && (
        <div className="flex flex-wrap gap-2 pl-2 border-l-4 border-red">
          {SPORTS_COLLEGE_SUB_FILTERS.map((team) => (
            <button
              key={team}
              onClick={() => handleTeam(team, "College")}
              className={`headline-stamp text-xs tracking-wider px-3 py-1.5 border-2 transition-all ${
                activeTeam === team
                  ? "bg-red text-white border-red shadow-[2px_2px_0_var(--navy)]"
                  : "text-silver border-silver hover:text-navy hover:border-navy"
              }`}
            >
              {team}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
