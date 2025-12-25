import React from "react";
import BlogCard from "./BlogCard";

function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      image: "/images/indoor-plants.jpg",
      title: "Top 10 Indoor Plants for Clean Air",
      snippet:
        "Discover which indoor plants will help purify your home and improve your wellbeing.",
      link: "#",
    },
    {
      id: 2,
      image: "/images/gardening-tips.jpg",
      title: "Essential Gardening Tips for Beginners",
      snippet:
        "Learn the basic gardening tips to keep your plants healthy and thriving.",
      link: "#",
    },
    {
      id: 3,
      image: "/images/plant-care.jpg",
      title: "Ultimate Plant Care Guide",
      snippet:
        "Everything you need to know to care for your plants like a pro.",
      link: "#",
    },
    {
      id: 4,
      image: "/images/outdoor-plants.jpg",
      title: "Best Outdoor Plants for Your Garden",
      snippet: "Beautify your garden with these top-rated outdoor plants.",
      link: "#",
    },
  ];

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            snippet={post.snippet}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;
