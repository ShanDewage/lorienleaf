import { DataBlog } from "@/data/DataBlog";

export default function FeaturedPost() {
  const featured = DataBlog[0]; // choose first or mark by flag

  return (
    <article
      className="rounded-3xl overflow-hidden border shadow-sm
      bg-white dark:bg-zinc-900
      border-zinc-200 dark:border-zinc-800
      grid md:grid-cols-2"
    >
      <img
        src={featured.image}
        alt={featured.title}
        className="h-full w-full object-cover"
      />

      <div className="p-8 flex flex-col justify-center">
        <span
          className="text-xs px-3 py-1 rounded-full w-fit
          bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
        >
          Featured
        </span>

        <h2 className="text-2xl md:text-3xl font-bold mt-3 text-text-primary">
          {featured.title}
        </h2>

        <p className="text-sm text-text-muted mt-1">{featured.date}</p>

        <p className="mt-3 text-text-secondary">{featured.excerpt}</p>

        <a
          href={featured.link}
          className="mt-4 font-medium hover:underline text-green-700"
        >
          Read article →
        </a>
      </div>
    </article>
  );
}
