import React from "react";

function page() {
  return (
    <>
      <div className="min-h-screen mt-24 px-4 py-16 theme-bg theme-text">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">
            Plant Blog
          </h1>
          <p className="text-lg text-gray-500">
            All about greenery, growth, and garden tips
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
                  className="text-primary hover:underline font-medium"
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

// Dummy blog data
const blogPosts = [
  {
    title: "10 Indoor Plants That Clean the Air",
    date: "August 8, 2025",
    excerpt:
      "Discover the best low-maintenance plants to purify your home's air.",
    image: "https://source.unsplash.com/600x400/?indoor,plants",
    link: "#",
  },
  {
    title: "How to Grow Herbs in Your Kitchen",
    date: "July 30, 2025",
    excerpt: "A beginner’s guide to starting your own kitchen herb garden.",
    image: "https://source.unsplash.com/600x400/?herbs,garden",
    link: "#",
  },
  {
    title: "Caring for Succulents 101",
    date: "July 15, 2025",
    excerpt:
      "Succulents are easy to care for—but here are a few things to know.",
    image: "https://source.unsplash.com/600x400/?succulent,plant",
    link: "#",
  },
];

export default page;
