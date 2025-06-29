import React from "react";
import Image from "next/image";

import P1 from "@/assets/P1.jpg";
import P2 from "@/assets/P2.png";
import P3 from "@/assets/P3.jpg";

const plantData = [
  {
    name: "Fiddle Leaf Fig",
    price: "$29.00",
    description: "Lush & iconic indoor tree",
    image: P1,
  },
  {
    name: "Snake Plant",
    price: "$21.00",
    description: "Low light & air purifying",
    image: P2,
  },
  {
    name: "Monstera",
    price: "$35.00",
    description: "Tropical & statement leaves",
    image: P3,
  },
  {
    name: "Monstera",
    price: "$35.00",
    description: "Tropical & statement leaves",
    image: P3,
  },
];

export default function FeaturedPlants() {
  return (
    <section className="py-16 px-6  theme-bg transition-colors duration-300">
      <h2 className="text-3xl font-serif text-center mb-10 text-black dark:text-white">
        Featured Plants
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {plantData.map((plant, i) => (
          <div
            key={i}
            className="group px-6 py-6 bg-white/10 dark:bg-white/5 rounded-xl flex flex-col items-center justify-center gap-4 relative 
              after:absolute after:inset-0 after:h-full after:bg-[#abd373] after:rounded-xl after:-z-10 z-10 
              shadow-lg after:transition-all after:duration-500 after:-translate-y-full after:hover:translate-y-0 
              overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <Image
                src={plant.image}
                alt={plant.name}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Name */}
            <p className="font-semibold text-gray-800 dark:text-gray-200 tracking-wide text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-all">
              {plant.name}
            </p>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-xs text-center px-2">
              {plant.description}
            </p>

            {/* Price + CTA */}
            <div className="flex justify-between items-center w-full mt-3">
              <p className="text-[#abd373] font-semibold group-hover:text-gray-800 dark:group-hover:text-white transition">
                {plant.price}
              </p>
              <button className="bg-[#abd373] text-white text-sm font-semibold py-2 px-4 rounded-full shadow-[10px_10px_100px_#ff9f0d] group-hover:bg-white/10 transition">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
