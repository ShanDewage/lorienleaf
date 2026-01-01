import React from "react";
// import PlantCard from "./PlantCard";
import PlantCard from "@/components/common/PlantCard";
import { plants } from "@/data/DataPlants";
import Title from "@/components/common/Title";

const PlantGrid: React.FC = () => {
  return (
    <section className="flex-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        {/* <h2 className="text-2xl font-bold text-green-700">All Plants</h2> */}
        <Title
          title="All Plants"
          titleClassName="text-4xl mb-[0]"
          showUnderline={false}
          containerClassName="mb-[0]"
           align="left"
        />
        <select className="w-full sm:w-52 border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            price={plant.price}
            image={plant.image}
            category={plant.category}
            // inStock={plant.inStock}
          />
        ))} */}

        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default PlantGrid;
