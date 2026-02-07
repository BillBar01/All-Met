export interface PostFrontmatter {
  title: string;
  author: string;
  date: string;
  section: string;
  team?: string;
  excerpt: string;
  image?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}
