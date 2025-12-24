import React from "react";
import Image from "next/image";

import { plants } from "@/data/DataPlants";

export default function FeaturedPlants({}) {
  const featuredPlants = plants.filter(
    (plant) => plant.category === "featured"
  );
  return (
    <section className="py-16 px-6  bg-bg-primary transition-colors duration-300">
      <h2 className="title-5xl  text-center mb-10 ">Featured Plants</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {featuredPlants.map((plant) => (
          <div
            key={plant.id}
            className="group px-6 py-6 bg-white/10 dark:bg-white/5 rounded-xl flex flex-col items-center justify-center gap-4 relative 
              after:absolute after:inset-0 after:h-full after:bg-[#abd373] after:rounded-xl after:-z-10 z-10 
              shadow-md  inset-shadow-sm after:transition-all after:duration-500 after:-translate-y-full after:hover:translate-y-0 
              overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="w-full bg-accent  overflow-hidden rounded-lg">
              <Image
                src={plant.image}
                alt={plant.name}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Name */}
            <span className="title-sm mt-2 tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-all">
              {plant.name}
            </span>

            {/* Description */}
            <div className=" px-2 text-text-secondary text-sm">
              {/* <p className="mb-1">{plant.description}</p> */}
              <span className="text-gray-400 line-through text-sm inline-block">
                {plant.price !== plant.discountPrice && plant.price
                  ? `${plant.price.toFixed(2)} LKR`
                  : ""}
              </span>
              <span className="font-semibold  text-text-primary  text-sm inline-block ml-1">
                {plant.discountPrice.toFixed(2)} LKR
              </span>
            </div>

            {/* Price + CTA */}
            {/* <div className="flex justify-between items-center w-full mt-3">
              <p className="text-[#abd373] font-semibold group-hover:text-gray-800 dark:group-hover:text-white transition">
                {plant.price}
              </p>
              <button className="bg-[#abd373] text-white text-sm font-semibold py-2 px-4 rounded-full shadow-[10px_10px_100px_#ff9f0d] group-hover:bg-white/10 transition">
                Order Now
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
