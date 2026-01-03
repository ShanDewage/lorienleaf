"use client";

import React, { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import BlogGrid from "./components/BlogGrid";
import FeaturedPost from "./components/FeaturedPost";

export default function BlogPage() {
  const [category, setCategory] = useState("all");

  return (
    <main className="min-h-screen page text-text-foreground">
      {/* --------- HERO --------- */}
      <section
        className="rounded-3xl px-8 py-14 shadow-sm
        bg-gradient-to-b from-green-50 to-white
        dark:from-zinc-900 dark:to-zinc-950"
      >
        <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-300">
          Botanical Journal
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-text-primary">
          Stories, tips & deep-dives for plant lovers 🌱
        </h1>

        <p className="mt-3 max-w-2xl text-text-secondary">
          Explore thoughtful articles on plant care, styling, gardening,
          sustainability, and growing happier indoor ecosystems.
        </p>
      </section>

      {/* --------- FEATURED --------- */}
      <section className="mt-12">
        <FeaturedPost />
      </section>

      {/* --------- CATEGORY FILTER --------- */}
      <section className="mt-10">
        <CategoryFilter value={category} onChange={setCategory} />
      </section>

      {/* --------- BLOG GRID --------- */}
      <section className="mt-10">
        <BlogGrid category={category} />
      </section>
    </main>
  );
}
