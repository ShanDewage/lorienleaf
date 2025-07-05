"use client";
import React, { useState } from "react";
import Image from "next/image";
import { plants } from "@/data/PlantsData";

export default function DailyDeals() {
  const dailyDeals = plants.filter((plant) => plant.category === "daily");

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dailyDeals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dailyDeals.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className="py-16 px-6  theme-bg transition-colors duration-300">
      <h2 className="text-3xl h2 font-serif text-center mb-10 text-black dark:text-white">
        Daily Deals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {currentItems.map((plant, i) => (
          <div
            key={plant.id}
            className="relative flex flex-col items-center bg-foreground rounded-xl shadow-2xs  inset-shadow-sm   rounded-none px-0 py-0"
          >
            {/* Labels */}
            {/* <div className="absolute top-2 left-2 flex space-x-1 z-10">
              {plant.isHot && (
                <div className="bg-[#f58220] text-white text-[10px] font-semibold rounded-b-xl px-2 py-0.5 leading-none">
                  HOT
                </div>
              )}
              {plant.isSale && (
                <div className="bg-[#4a9a2a] text-white text-[10px] font-semibold rounded-b-xl px-2 py-0.5 leading-none">
                  SALE
                </div>
              )}
            </div> */}

            {/* Image */}
            <div className="w-full max-h-[250px] flex justify-center overflow-hidden">
              <Image
                src={plant.image}
                alt={plant.name}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            {/* Name */}
            <div className="py-4 text-center text-gray-600 text-sm w-full">
              {plant.name}
              <div className="mt-1 font-semibold text-black">
                {plant.price !== plant.discountPrice && plant.price ? (
                  <>
                    <span className="line-through text-gray-400 text-xs">
                      {plant.price.toFixed(2)} $
                    </span>
                    <span className="ml-1">
                      {plant.discountPrice.toFixed(2)} $
                    </span>
                  </>
                ) : (
                  <span>{plant.discountPrice.toFixed(2)} $</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-3">
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
