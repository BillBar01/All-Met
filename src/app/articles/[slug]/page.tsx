import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { getPostSlugs, getPostBySlug, getPostContentHtml } from "@/lib/posts";
import NewsletterSignup from "@/components/ui/NewsletterSignup";

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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

function getCategoryBarClass(category: string, team?: string): string {
  if (team) {
    return `category-bar-${team.toLowerCase().replace(/\s+/g, "-")}`;
  }
  return `category-bar-${category.toLowerCase().replace(/\s+/g, "-")}`;
}

function getBackLink(category: string): { href: string; label: string } {
  if (category === "Business") {
    return { href: "/business", label: "Back to Business" };
  }
  return { href: "/sports", label: "Back to Sports" };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const contentHtml = await getPostContentHtml(post.content);
  const categoryClass = getCategoryBarClass(post.category, post.team);
  const label = post.team || post.category;
  const backLink = getBackLink(post.category);

  return (
    <article className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={backLink.href}
          className="headline-stamp text-red text-sm tracking-wider hover:text-navy transition-colors mb-8 inline-block"
        >
          &larr; {backLink.label}
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
                  {post.category}
                </span>
              </>
            )}
            <span className="text-silver">|</span>
            <span className="text-silver">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </span>
            <span className="text-silver">|</span>
            <span className="typewriter-accent text-navy/60">
              By {post.author}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose-allmet"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Newsletter CTA */}
        <div className="mt-16 pt-8 border-t-3 border-navy/10">
          <h3 className="headline-stamp text-navy text-xl mb-4">
            Get takes like this delivered daily
          </h3>
          <NewsletterSignup />
        </div>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t-3 border-red">
          <Link
            href={backLink.href}
            className="retro-button bg-navy text-white text-sm"
          >
            More Articles
          </Link>
        </div>
      </div>
    </article>
  );
}
