"use client";
import React, { useState } from "react";
import { plants } from "@/data/DataPlants";
import PlantCard from "@/components/common/PlantCard";
import Title from "@/components/common/Title";

export default function DailyDeals() {
  const dailyDeals = plants.filter((plant) => plant.category === "daily");

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dailyDeals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dailyDeals.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className="section">
      <Title
        title="Today’s Plant Deals"
        subtitle="Fresh deals that won’t last long — grab yours today."
        // titleClassName="mb-16 "
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6  mx-auto">
        {currentItems.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-12 space-x-3">
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          const isActive = currentPage === pageNum;

          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              aria-label={`Pagination page ${pageNum}`}
              className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-200 ${
                isActive ? "bg-[#f7f7f7]" : "bg-gray-300"
              }`}
            >
              {isActive && (
                <div className="w-3 h-3 rounded-full bg-[#4a9a2a]" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
