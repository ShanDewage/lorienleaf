"use client";

import React, { useState } from "react";

function CategoryFilter() {
  const categories = [
    "All",
    "Indoor Plants",
    "Outdoor Plants",
    "Gardening Tips",
    "Plant Care",
    "DIY",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-green-50 py-6 px-4 rounded-lg shadow-md flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full font-medium transition-colors
            ${
              activeCategory === category
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
