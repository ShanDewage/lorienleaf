"use client";
import React, { useState, useMemo } from "react";
import PlantCard from "@/components/common/PlantCard";
import { plants } from "@/data/DataPlants";
import Title from "@/components/common/Title";
import {
  IconChevronDown,
  IconSortAscending,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
const PlantGrid: React.FC = () => {
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = plants.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

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
        {/* <select className="w-full  sm:w-52 border border-border-100 rounded-xs px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select> */}

        <div className="relative w-full sm:w-52">
          {/* Left icon */}
          {/* <IconSortAscending
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          /> */}

          {/* Select */}
          <select
            className="
          w-full appearance-none
          rounded-xs border border-border-100
          bg-card-bg px-3 py-2 text-sm
          text-text-primary
          transition-all duration-200 ease-in-out
          hover:border-border-300 
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
        "
          >
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>

          {/* Right dropdown arrow */}
          <IconChevronDown
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
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

        {plants.slice(startIndex, endIndex).map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      <div className="mt-20 flex items-center justify-between border-t border-border-100  px-0 py-3 ">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">
          <div>
            <p className="text-sm text-text-secondary">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {" "}
                {Math.min(endIndex, totalItems)}
              </span>{" "}
              of <span className="font-medium">{totalItems} </span> results
            </p>
          </div>
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-xs border-1 border-border-100"
            >
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-text-secondary inset-ring inset-ring-gray-300 hover:bg-bg-secondary focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <IconChevronLeft aria-hidden="true" className="size-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === page
                        ? "z-10 bg-primary text-white"
                        : "text-text-secondary hover:bg-bg-secondary"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-text-secondary inset-ring inset-ring-gray-300 hover:bg-bg-secondary focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <IconChevronRight aria-hidden="true" className="size-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantGrid;
