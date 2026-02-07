import type { Metadata } from "next";
import { getPostsBySection } from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "High School Sports",
  description: "The All-Met — DC area high school sports coverage, rankings, and All-Met selections.",
};

export default function HighSchoolPage() {
  const posts = getPostsBySection("High School");

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="bg-navy diagonal-stripes p-8 md:p-12 border-3 border-ink shadow-[6px_6px_0_var(--ink)] mb-16 text-center">
          <h1 className="headline-stamp text-gold text-3xl md:text-5xl mb-3">
            The All-Met
          </h1>
          <p className="typewriter-accent text-cream text-lg md:text-xl">
            DC High School Sports
          </p>
        </div>

        {/* All-Met Selections Featured */}
        {posts.some((p) => p.title.toLowerCase().includes("all-met")) && (
          <section className="mb-16">
            <SectionHeading className="mb-8">All-Met Selections</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts
                .filter((p) => p.title.toLowerCase().includes("all-met"))
                .map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
            </div>
          </section>
        )}

        {/* Latest High School Articles */}
        <section>
          <SectionHeading className="mb-8">Latest High School Coverage</SectionHeading>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="typewriter-accent text-silver text-xl">
                Coverage coming soon. The season never stops.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
