"use client";
import React, { useState } from "react";
import { DataCareGuide } from "@/data/DataCareGuide";

import DifficultyFilter from "./components/DifficultyFilter";
import CareTopicCard from "./components/CareTopicCard";
import QuickTips from "./components/QuickTips";
import Title from "@/components/common/Title";
import Image from "next/image";

export default function CareGuidePage() {
  const [difficulty, setDifficulty] = useState("all");

  const filteredTopics =
    difficulty === "all"
      ? DataCareGuide
      : DataCareGuide.filter((item) => item.level === difficulty);

  return (
    <main className="page ">
      {/* ---------------- HERO ---------------- */}
      <section
        className="rounded-xs bg-300
        px-8 py-12 shadow-sm flex flex-col text-left justify-center "
      >
        <p className="text-sm uppercase tracking-widest text-primary">
          Care Guide
        </p>

        <Title
          title="Smart care insights for healthier plants "
          showUnderline={false}
          containerClassName="mb-[0] mt-4"
          titleClassName="text-text-primary"
          align="left"
        />

        {/* <h1 className="text-4xl md:text-5xl font-oswald font-bold mt-2 text-text-primary">
          Smart care insights for healthier plants 🌱
        </h1> */}

        <p className="mt-2 text-text-muted  tracking-wide text-sm md:text-base max-w-3xl">
          A thoughtfully curated library of plant care essentials — covering
          watering, lighting, soil nutrition, climate needs, and advanced growth
          tips.
        </p>

        <div className="absolute   w-full top-0 left-[16%]">
          <Image
            src="/images/ui/UI6.png"
            alt="Large green houseplant"
            width={720}
            height={720}
            className="w-full min-h-[40vh] max-h-[100vh] object-contain "
            priority
          />
        </div>
      </section>

      {/* ---------------- FILTER ---------------- */}
      <section className="mt-16">
        <DifficultyFilter active={difficulty} onChange={setDifficulty} />
      </section>

      {/* ---------------- TOPIC GRID ---------------- */}
      <section className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
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
