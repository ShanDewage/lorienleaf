"use client";
import React from "react";
import Title from "@/components/common/Title";
import { DataBlog } from "@/data/DataBlog";
import BlogCard from "@/features/blog/components/BlogCard";
import { useRouter } from "next/navigation";

function BlogPreview({ limit }) {
  const router = useRouter();

  const displayedBlogPosts = limit ? DataBlog.slice(0, limit) : DataBlog;
  const handleClick = () => {
    router.push("/blog");
  };
  return (
    <section className="section ">
      {/* <div className="max-w-7xl mx-auto"> */}
      <div className="text-center mb-16">
        <Title
          title="our latest blog"
          subtitle="Explore thoughtful articles on plant care, styling, gardening, sustainability, and growing happier indoor ecosystems."
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayedBlogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="flex justify-center w-full mt-20">
        <button
          onClick={handleClick}
          className="bg-primary  hover:bg-link text-white font-medium px-4 py-2 rounded-xs shadow-lg flex items-center gap-2 text-sm"
        >
          Read More →
        </button>
      </div>
      {/* </div> */}
    </section>
  );
}

export default BlogPreview;
