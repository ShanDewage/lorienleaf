import { DataBlog } from "@/data/DataBlog";

export default function FeaturedPost() {
  const featured = DataBlog[0]; // choose first or mark by flag

  return (
    <article
      className="rounded-xs overflow-hidden border shadow-sm
      bg-card-bg
      border-border-100
      grid md:grid-cols-2"
    >
      <img
        src={featured.image}
        alt={featured.title}
        className="h-full w-full object-cover"
      />

      <div className="p-8 flex flex-col justify-center">
        <span
          className="text-xs px-3 py-1 rounded-full shadow-xs
          bg-200 text-primary border border-border-300 w-fit"
        >
          Featured
        </span>

        <h2 className="text-2xl md:text-4xl font-bold mt-3 font-oswald text-text-primary">
          {featured.title}
        </h2>

        <p className="text-xs text-text-muted mt-1">{featured.date}</p>

        <p className="mt-3 text-base text-text-secondary">{featured.excerpt}</p>

        <a
          href={featured.link}
          className="mt-4 font-medium hover:underline text-primary"
        >
          Read article →
        </a>
      </div>
    </article>
  );
}
