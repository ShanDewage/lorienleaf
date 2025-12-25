import React from "react";
import { plants } from "@/data/DataPlants";
import PlantCard from "@/components/common/PlantCard";
import Title from "@/components/common/Title";

type FeaturedPlantsProps = {
  limit?: number;
};

export default function FeaturedPlants({ limit = 8 }: FeaturedPlantsProps) {
  const featuredPlants = plants
    .filter((plant) => plant.category === "featured")
    .slice(0, limit);
  return (
    <section className="section">
      <Title className="mb-16 ">Featured Plants</Title>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8  mx-auto">
        {featuredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} hideLabel={true} />
        ))}
      </div>
    </section>
  );
}
