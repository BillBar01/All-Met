"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "All";

  const handleFilter = (category: string) => {
    if (category === "All") {
      router.push("/written-shit");
    } else {
      router.push(`/written-shit?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
          className={`headline-stamp text-xs tracking-wider px-4 py-2 border-2 border-ink transition-all ${
            active === category
              ? "bg-navy text-cream shadow-[3px_3px_0_var(--ink)]"
              : "bg-cream text-ink hover:bg-navy hover:text-cream"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
