import Link from "next/link";


export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article
        className="rounded-2xl overflow-hidden border shadow-sm
      bg-white dark:bg-zinc-900
      border-zinc-200 dark:border-zinc-800
      hover:shadow-lg hover:-translate-y-1
      transition-all duration-300"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <span
            className="text-xs px-3 py-1 rounded-full
          bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300"
          >
            {post.category}
          </span>

          <h3 className="text-xl font-semibold mt-3 text-text-primary">
            {post.title}
          </h3>

          <p className="text-sm text-text-muted mt-1">{post.date}</p>

          <p className="mt-3 text-text-secondary">{post.excerpt}</p>
          {/* <a
            href={post.link}
            className="mt-4 inline-block font-medium text-green-700 hover:underline"
          >
            Read more →
          </a> */}
        </div>
      </article>
    </Link>
  );
}
