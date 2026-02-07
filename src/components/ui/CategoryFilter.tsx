"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { WRITTEN_SHIT_FILTERS, PRO_SPORTS_SUB_FILTERS } from "@/lib/constants";

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSection = searchParams.get("section") || "All";
  const activeTeam = searchParams.get("team") || "All Teams";

  const handleSection = (section: string) => {
    if (section === "All") {
      router.push("/written-shit");
    } else {
      router.push(`/written-shit?section=${encodeURIComponent(section)}`);
    }
  };

  const handleTeam = (team: string) => {
    if (team === "All Teams") {
      router.push(`/written-shit?section=Pro+Sports`);
    } else {
      router.push(
        `/written-shit?section=Pro+Sports&team=${encodeURIComponent(team)}`
      );
    }
  };

  return (
    <div className="space-y-4">
      {/* Section filters */}
      <div className="flex flex-wrap gap-3">
        {WRITTEN_SHIT_FILTERS.map((section) => (
          <button
            key={section}
            onClick={() => handleSection(section)}
            className={`headline-stamp text-xs tracking-wider px-4 py-2 border-2 border-ink transition-all ${
              activeSection === section
                ? "bg-navy text-cream shadow-[3px_3px_0_var(--ink)]"
                : "bg-cream text-ink hover:bg-navy hover:text-cream"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Team sub-filters (only when Pro Sports is active) */}
      {activeSection === "Pro Sports" && (
        <div className="flex flex-wrap gap-2 pl-2 border-l-4 border-gold">
          {PRO_SPORTS_SUB_FILTERS.map((team) => (
            <button
              key={team}
              onClick={() => handleTeam(team)}
              className={`headline-stamp text-xs tracking-wider px-3 py-1.5 border-2 border-ink transition-all ${
                activeTeam === team
                  ? "bg-red text-cream shadow-[2px_2px_0_var(--ink)]"
                  : "bg-cream text-ink hover:bg-red hover:text-cream"
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
