import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import type { Post, PostFrontmatter } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as PostFrontmatter;

  return {
    slug,
    content,
    ...frontmatter,
  };
}

export async function getPostContentHtml(content: string): Promise<string> {
  const result = await remark().use(gfm).use(html).process(content);
  return result.toString();
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  if (category === "All") return posts;
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}
