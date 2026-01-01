import Title from "@/components/common/Title";
import { CategoriesPlant } from "@/data/DataCategory";
import React from "react";

interface CategoriesProps {
  limit?: number;
}

const Categories: React.FC<CategoriesProps> = ({ limit }) => {
  const displayedCategories = limit
    ? CategoriesPlant.slice(0, limit)
    : CategoriesPlant;
  return (
    <section className="section   min-h-full ">
      {/* <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Trending on Lorienleaf
      </h2> */}
      <Title title="Shop by Category"
      subtitle="  Find the perfect plant for your space, light, and lifestyle."
      />


      {/* <div className="flex gap-6 overscroll-none hover:overflow-x-auto flex-nowrap pb-4 scrollbar-hide"> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">
        {displayedCategories.map((category, index) => (
          <div
            key={index}
            // className="min-w-[220px] flex-shrink-0 flex flex-col items-center justify-center p-6 bg-card-bg rounded-xs shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-green-100"
            className="flex flex-col items-center justify-center p-6 bg-card-bg rounded-xs shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-green-100"
          >
            <span className="text-4xl mb-3">{category.icon}</span>
            <p className="text-sm font-semibold text-text-primary text-center">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
