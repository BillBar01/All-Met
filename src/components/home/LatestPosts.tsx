import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10">Latest Takes</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/sports"
            className="retro-button bg-navy text-white text-sm"
          >
            Read All
          </Link>
        </div>
      </div>
    </section>
  );
}
