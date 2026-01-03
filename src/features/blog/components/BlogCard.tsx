import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article
        className="rounded-xs overflow-hidden border shadow-sm
      bg-card-bg 
      border-border-300 
      hover:shadow-lg hover:-translate-y-1
      transition-all duration-300"
      >
        <Image
          src={post.image}
          alt={post.title}
          width={320}
          height={300}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <span
            className="text-xs px-3 py-1 rounded-full shadow-xs
          bg-200 text-primary border border-border-300"
          >
            {post.category}
          </span>

          <h3 className="text-lg font-semibold mt-3 text-text-primary tracking-wide font-oswald">
            {post.title}
          </h3>

          <p className="text-xs text-text-muted mt-1">{post.date}</p>

          <p className="mt-3 text-text-secondary line-clamp-3 text-base">
            {post.excerpt}
          </p>
          <a
            href={post.link}
            className="mt-4 inline-block font-medium text-sm text-primary hover:underline"
          >
            Learn More →
          </a>
        </div>
      </article>
    </Link>
  );
}
