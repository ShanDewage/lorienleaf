import { BlogPosts } from "@/data/DataBlog";
import React from "react";

function BlogPage() {
  return (
    <>
      <div className="min-h-screen mt-24 px-4 py-16 bg-bg-primary text-text-foreground">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-6">
            Plant Blog
          </h1>
          <p className="text-lg text-gray-500">
            All about greenery, growth, and garden tips
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="text-text-primary hover:underline font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
