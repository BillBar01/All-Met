import Link from "next/link";
import { format } from "date-fns";
import type { Post } from "@/types/blog";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const categoryClass = `category-bar-${post.category.toLowerCase()}`;

  return (
    <Link href={`/written-shit/${post.slug}`} className="block">
      <article className="retro-card flex flex-col h-full">
        {/* Category Bar */}
        <div className={`h-2 ${categoryClass}`} />

        <div className="p-5 flex flex-col flex-1">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className="headline-stamp text-xs text-red tracking-wider">
              {post.category}
            </span>
            <span className="text-silver text-xs">
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
          </div>

          {/* Title */}
          <h3 className="headline-stamp text-navy text-lg mb-3 leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-ink/70 text-sm flex-1 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author */}
          <p className="typewriter-accent text-silver text-xs mt-4">
            By {post.author}
          </p>
        </div>
      </article>
    </Link>
  );
}
