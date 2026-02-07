import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getPostsBySectionAndTeam } from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";
import CategoryFilter from "@/components/ui/CategoryFilter";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Written Shit",
  description: "All the stories, takes, and analysis from The All Met.",
};

interface Props {
  searchParams: Promise<{ section?: string; team?: string }>;
}

export default async function WrittenShitPage({ searchParams }: Props) {
  const { section, team } = await searchParams;
  const activeSection = section || "All";
  const posts =
    activeSection === "All"
      ? getAllPosts()
      : getPostsBySectionAndTeam(activeSection, team);

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10">Written Shit</SectionHeading>

        <div className="mb-10">
          <Suspense fallback={null}>
            <CategoryFilter />
          </Suspense>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="typewriter-accent text-silver text-xl">
              Nothing here yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
