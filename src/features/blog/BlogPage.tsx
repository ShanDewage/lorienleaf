"use client";

import React, { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import BlogGrid from "./components/BlogGrid";
import FeaturedPost from "./components/FeaturedPost";
import Title from "@/components/common/Title";
import Image from "next/image";

export default function BlogPage() {
  const [category, setCategory] = useState("all");

  return (
    <main className="page">
      {/* --------- HERO --------- */}
      <section
        className="rounded-xs bg-300
        px-8 py-12 shadow-sm flex flex-col text-left justify-center "
      >
        <p className="text-sm uppercase tracking-widest text-primary">
          Botanical Journal
        </p>

        <Title
          title=" Stories, tips & deep-dives for plant lovers 🍀"
          showUnderline={false}
          containerClassName="mb-[0] mt-4"
          titleClassName="text-text-primary"
          align="left"
        />

        <p className="mt-2 text-text-muted  tracking-wide text-sm md:text-base max-w-3xl">
          Explore thoughtful articles on plant care, styling, gardening,
          sustainability, and growing happier indoor ecosystems.
        </p>

        <div className="absolute   w-full top-0 left-[35%]">
          <Image
            src="/images/ui/UI8.png"
            alt="Large green houseplant"
            width={720}
            height={720}
            className="w-full min-h-[40vh] max-h-[80vh] object-contain "
            priority
          />
        </div>
        {/* <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-300">
          Botanical Journal
        </p> */}

        {/* <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-text-primary">
          Stories, tips & deep-dives for plant lovers 🌱
        </h1> */}

        {/* <p className="mt-3 max-w-2xl text-text-secondary">
          Explore thoughtful articles on plant care, styling, gardening,
          sustainability, and growing happier indoor ecosystems.
        </p> */}
      </section>

      {/* --------- FEATURED --------- */}
      <section className="mt-16">
        <FeaturedPost />
      </section>

      {/* --------- CATEGORY FILTER --------- */}
      <section className="mt-16">
        <CategoryFilter value={category} onChange={setCategory} />
      </section>

      {/* --------- BLOG GRID --------- */}
      <section className="mt-12">
        <BlogGrid category={category} />
      </section>
    </main>
  );
}
