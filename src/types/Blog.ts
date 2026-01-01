export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  categoryLabel: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  summary: string;
  excerpt: string;
  image: string;
  tags: string[];
  link: string;
  content: string[];
}
