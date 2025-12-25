import React from "react";

function BlogCard({ image, title, snippet, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-900 mb-2">{title}</h3>
        <p className="text-green-800 mb-4">{snippet}</p>
        <a
          href={link}
          className="text-green-700 font-semibold hover:text-green-900 transition-colors"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
