"use client";

import Image from "next/image";
import React from "react";
import P1 from "@/assets/P1.jpg";
import P2 from "@/assets/P2.png";
import P3 from "@/assets/P3.jpg";
const plants = [
  {
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: P1,
  },
  {
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: P2,
  },
  {
    name: "Monstera Deliciosa",
    description: "Loves humidity • Grows fast",
    image: P3,
  },
];
function page() {
  return (
    <div className="min-h-screen theme-bg theme-text px-6 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-10">
        Our Plant Collection 🌱
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plants.map((plant, i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg overflow-hidden theme-card transition hover:scale-105"
          >
            <Image
              src={plant.image}
              alt={plant.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{plant.name}</h2>
              <p className="text-sm opacity-80">{plant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
