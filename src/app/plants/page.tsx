"use client";

import Image from "next/image";
import React from "react";

import PlantCard from "@/components/PlantCard";
import { plants } from "@/data/PlantsData";
function page() {
  return (
    <div className="min-h-screen theme-bg text-gray-900 px-6 py-12 mt-20 mx-auto ">
      {/* <h1 className="text-4xl font-serif font-bold text-center mb-10"> */}
      <h1 className="text-3xl h2 font-serif text-center mb-10 text-black dark:text-white">
        Our Plant Collection 🌱
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {plants.map((plant, i) => (
          <PlantCard key={i} {...plant} />
        ))}
      </div>
    </div>
  );
}

export default page;
