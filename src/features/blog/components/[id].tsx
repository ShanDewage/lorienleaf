// features -> blog->components-> [id].tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { DataBlog } from "@/data/DataBlog";

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const post = DataBlog.find((p) => String(p.id) === String(id));

  if (!post) return <p className="p-6 text-center">Blog article not found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-24 px-6 py-10">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-green-700 hover:underline mb-6"
      >
        ← Back to Blog
      </button>

      {/* Category & Meta */}
      <div className="flex flex-wrap gap-3 mb-3">
        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
          {post.categoryLabel}
        </span>

        <span className="text-xs text-gray-500">{post.date}</span>

        <span className="text-xs text-gray-500">{post.readTime} read</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-serif font-bold mb-6 text-text-primary">
        {post.title}
      </h1>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* Article Body */}
      <article className="prose prose-lg max-w-none dark:prose-invert leading-relaxed">
        {/* {post.content?.map((para, i) => (
          <p key={i}>{para}</p>
        ))} */}
        {post.content}
      </article>

      {/* Footer / CTA */}
      <div className="mt-12 p-6 rounded-2xl bg-green-50 border border-green-200">
        <h3 className="font-semibold text-lg mb-2">🌿 Enjoyed this article?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Follow our blog for more plant care guides & tips.
        </p>

        <button
          onClick={() => router.push("/blog")}
          className="px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800"
        >
          Explore More Articles
        </button>
      </div>
    </div>
  );
}
