// import PlantCard from "@/components/common/PlantCard";
// import { plants } from "@/data/DataPlants";
import React from "react";
import Filters from "./components/Filters";
import PlantGrid from "./components/PlantGrid";

function StorePage() {
  return (
    <>
      {/* <div className="min-h-screen bg-bg-primary text-gray-900 px-6 py-12 mt-20 mx-auto ">
    
      </div> */}

      <div className="container mx-auto px-6 pt-24 mt-8 ">
        {/* <h1 className=" title-5xl  text-center mb-10 ">
          Our Plant Collection 🌱
        </h1> */}
        <div className="flex flex-col lg:flex-row gap-8">
          <Filters />
          <PlantGrid />
        </div>
      </div>
    </>
  );
}

export default StorePage;
