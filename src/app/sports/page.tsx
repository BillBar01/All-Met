import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getPostsByCategory, getPostsByCategoryAndTeam } from "@/lib/posts";
import { PRO_TEAMS, COLLEGE_TEAMS } from "@/lib/constants";
import BlogCard from "@/components/ui/BlogCard";
import CategoryFilter from "@/components/ui/CategoryFilter";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Sports",
  description: "DC sports coverage — pro, college, and high school. All teams, all takes.",
};

interface Props {
  searchParams: Promise<{ section?: string; team?: string }>;
}

export default async function SportsPage({ searchParams }: Props) {
  const { section, team } = await searchParams;
  const activeSection = section || "All";

  // Determine which posts to show
  let content: React.ReactNode;

  if (activeSection === "All" || !section) {
    // Show all sports posts (Pro Sports + College + High School — not Business)
    const allPosts = getAllPosts().filter(
      (p) => p.category !== "Business"
    );
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    );
  } else if (activeSection === "Pro Sports" && !team) {
    // Group by pro teams
    content = (
      <div className="space-y-12">
        {PRO_TEAMS.map((t) => {
          const teamPosts = getAllPosts().filter(
            (p) => p.team?.toLowerCase() === t.toLowerCase()
          );
          if (teamPosts.length === 0) return null;
          return (
            <div key={t}>
              <SectionHeading className="mb-6">{t}</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (activeSection === "College" && !team) {
    // Group by college teams
    content = (
      <div className="space-y-12">
        {COLLEGE_TEAMS.map((t) => {
          const teamPosts = getAllPosts().filter(
            (p) => p.team?.toLowerCase() === t.toLowerCase()
          );
          if (teamPosts.length === 0) return null;
          return (
            <div key={t}>
              <SectionHeading className="mb-6">{t}</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (activeSection === "High School") {
    const posts = getPostsByCategory("High School");
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    );
  } else {
    // Specific team selected
    const posts = getPostsByCategoryAndTeam(activeSection, team);
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    );
  }

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10">Sports</SectionHeading>

        <div className="mb-10">
          <Suspense fallback={null}>
            <CategoryFilter />
          </Suspense>
        </div>

        {content}

        {/* Empty state */}
        {activeSection !== "All" && (
          <div id="empty-check" className="hidden">
            <div className="text-center py-16">
              <p className="typewriter-accent text-silver text-xl">
                Nothing here yet. Check back soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
