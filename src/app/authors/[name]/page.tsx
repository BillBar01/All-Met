import type { Metadata } from "next";
import { getAllAuthors, getPostsByAuthor } from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

function toKebabCase(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function fromKebabCase(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({ name: toKebabCase(author) }));
}

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const displayName = fromKebabCase(name);
  return {
    title: `${displayName} — ALL MET`,
    description: `Articles by ${displayName} on ALL MET.`,
  };
}

export default async function AuthorPage({ params }: Props) {
  const { name } = await params;
  const authors = getAllAuthors();
  const matchedAuthor = authors.find((a) => toKebabCase(a) === name);
  const displayName = matchedAuthor || fromKebabCase(name);
  const posts = getPostsByAuthor(displayName);

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-4">{displayName}</SectionHeading>
        <p className="text-center text-navy/70 max-w-2xl mx-auto mb-16">
          All articles by {displayName}.
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
              No articles found for this author.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
