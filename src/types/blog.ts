export interface PostFrontmatter {
  title: string;
  author: string;
  date: string;
  category: string;
  team?: string;
  excerpt: string;
  image?: string;
  isPremium?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}
