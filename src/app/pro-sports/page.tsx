import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByTeam } from "@/lib/posts";
import { PRO_TEAMS } from "@/lib/constants";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Pro Sports Takes",
  description: "DC professional sports coverage — Commanders, Nationals, Wizards, Capitals, and DC United.",
};

export default function ProSportsPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-4">Pro Sports Takes</SectionHeading>
        <p className="text-center text-ink/70 max-w-2xl mx-auto mb-16">
          Every DC pro team. Every take. No sugarcoating.
          If they played well, we&apos;ll say so. If they didn&apos;t, we&apos;ll say that louder.
        </p>

        {PRO_TEAMS.map((team) => {
          const posts = getPostsByTeam(team).slice(0, 4);
          if (posts.length === 0) return null;

          return (
            <section key={team} className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-8 bg-red" />
                  <h2 className="headline-stamp text-navy text-2xl">{team}</h2>
                  <div className="h-1 w-8 bg-red" />
                </div>
                <Link
                  href={`/written-shit?section=Pro+Sports&team=${encodeURIComponent(team)}`}
                  className="headline-stamp text-red text-xs tracking-wider hover:text-navy transition-colors"
                >
                  View All {team} Takes &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
