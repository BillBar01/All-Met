import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByTeam, getPostsBySection } from "@/lib/posts";
import { COLLEGE_TEAMS } from "@/lib/constants";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "College Sports",
  description: "DC-area college sports coverage — Georgetown, Maryland, Howard, George Washington, and more.",
};

export default function CollegePage() {
  const allCollegePosts = getPostsBySection("College");

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-4">College Sports</SectionHeading>
        <p className="text-center text-ink/70 max-w-2xl mx-auto mb-16">
          Georgetown, Maryland, Howard, GW, and every other program in the DMV.
          If they&apos;re competing, we&apos;re covering it.
        </p>

        {/* Team sections */}
        {COLLEGE_TEAMS.map((team) => {
          const posts = getPostsByTeam(team).slice(0, 3);
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
                  href={`/written-shit?section=College&team=${encodeURIComponent(team)}`}
                  className="headline-stamp text-red text-xs tracking-wider hover:text-navy transition-colors"
                >
                  View All {team} &rarr;
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

        {/* Catch-all for college posts without a specific team */}
        {allCollegePosts.filter((p) => !p.team).length > 0 && (
          <section className="mb-20">
            <SectionHeading className="mb-8">More College Coverage</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCollegePosts
                .filter((p) => !p.team)
                .map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
