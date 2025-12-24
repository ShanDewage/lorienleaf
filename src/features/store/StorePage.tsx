import PlantCard from "@/components/common/PlantCard";
import { plants } from "@/data/DataPlants";
import React from "react";

function StorePage() {
  return (
    <>
      {/* // bg-gradient-to-br from-green-50 via-white to-green-100 */}
      <div className="min-h-screen bg-bg-primary text-gray-900 px-6 py-12 mt-20 mx-auto ">
        {/* <h1 className="text-4xl font-serif font-bold text-center mb-10"> */}
        <h1 className=" title-5xl  text-center mb-10 ">
          Our Plant Collection 🌱
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {plants.map((plant, i) => (
            <PlantCard key={i} {...plant} />
          ))}
        </div>
      </div>
    </>
  );
}

export default StorePage;
