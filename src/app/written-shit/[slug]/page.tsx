import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { getPostSlugs, getPostBySlug, getPostContentHtml } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function getCategoryBarClass(section: string, team?: string): string {
  if (team) {
    return `category-bar-${team.toLowerCase().replace(/\s+/g, "-")}`;
  }
  return `category-bar-${section.toLowerCase().replace(/\s+/g, "-")}`;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const contentHtml = await getPostContentHtml(post.content);
  const categoryClass = getCategoryBarClass(post.section, post.team);
  const label = post.team || post.section;

  return (
    <article className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/written-shit"
          className="headline-stamp text-red text-sm tracking-wider hover:text-navy transition-colors mb-8 inline-block"
        >
          &larr; Back to Written Shit
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className={`h-2 w-20 ${categoryClass} mb-6`} />
          <h1 className="headline-stamp text-navy text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="headline-stamp text-red tracking-wider">
              {label}
            </span>
            {post.team && (
              <>
                <span className="text-silver">|</span>
                <span className="headline-stamp text-navy/60 tracking-wider text-xs">
                  {post.section}
                </span>
              </>
            )}
            <span className="text-silver">|</span>
            <span className="text-silver">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </span>
            <span className="text-silver">|</span>
            <span className="typewriter-accent text-ink/60">
              By {post.author}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose-allmet"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-3 border-red">
          <Link
            href="/written-shit"
            className="retro-button bg-navy text-cream text-sm"
          >
            More Written Shit
          </Link>
        </div>
      </div>
    </article>
  );
}
