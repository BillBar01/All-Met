import type { Metadata } from "next";
import { getPostsBySection } from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Business",
  description: "DC business coverage — startups, AI, cybersecurity, and the people building the future.",
};

export default function BusinessPage() {
  const posts = getPostsBySection("Business");

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-4">Business</SectionHeading>
        <p className="text-center text-navy/70 max-w-2xl mx-auto mb-16">
          The DC business scene is more than government contractors in hoodies.
          We cover the builders, the breakers, and the companies that actually matter.
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="typewriter-accent text-silver text-xl">
              Business coverage incoming. Stay tuned.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
