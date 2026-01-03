import { DataBlog } from "@/data/DataBlog";
import BlogCard from "./BlogCard";

export default function BlogGrid({ category }: { category: string }) {
  const filtered =
    category === "all"
      ? DataBlog
      : DataBlog.filter((post) => post.category === category);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
