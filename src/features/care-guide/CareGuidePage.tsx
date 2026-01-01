"use client";
import React, { useState } from "react";
import { DataCareGuide } from "@/data/DataCareGuide";

import DifficultyFilter from "./components/DifficultyFilter";
import CareTopicCard from "./components/CareTopicCard";
import QuickTips from "./components/QuickTips";

export default function CareGuidePage() {
  const [difficulty, setDifficulty] = useState("all");

  const filteredTopics =
    difficulty === "all"
      ? DataCareGuide
      : DataCareGuide.filter((item) => item.level === difficulty);

  return (
    <main className="page">
      {/* ---------------- HERO ---------------- */}
      <section
        className="rounded-3xl bg-gradient-to-b
        from-green-50 to-white
        dark:from-zinc-900 dark:to-zinc-950
        px-8 py-12 shadow-sm"
      >
        <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-300">
          Care Guide
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-text-primary">
          Smart care insights for healthier plants 🌱
        </h1>

        <p className="mt-3 text-text-secondary max-w-2xl">
          A thoughtfully curated library of plant care essentials — covering
          watering, lighting, soil nutrition, climate needs, and advanced growth
          tips.
        </p>
      </section>

      {/* ---------------- FILTER ---------------- */}
      <section className="mt-10">
        <DifficultyFilter active={difficulty} onChange={setDifficulty} />
      </section>

      {/* ---------------- TOPIC GRID ---------------- */}
      <section className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredTopics.map((item) => (
          <CareTopicCard key={item.id} topic={item} />
        ))}
      </section>

      {/* ---------------- QUICK TIPS ---------------- */}
      <section className="mt-16">
        <QuickTips />
      </section>
    </main>
  );
}
