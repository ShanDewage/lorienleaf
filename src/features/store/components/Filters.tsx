import Title from "@/components/common/Title";
import React from "react";

function Filters() {
  return (
    <aside className="w-full lg:w-72  rounded-xs shadow-r-sm pr-6 border-r  border-border-300">
      {/* <h3 className="text-xl font-bold text-green-700 mb-6">Filter Plants</h3> */}

      <Title
        title="Filter Plants"
        showUnderline={false}
        titleClassName="text-xl font-bold mb-6"
        align="left"
        containerClassName="mb-[0]"
      />

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-semibold text-text-primary mb-3">Category</h4>
        <div className="space-y-2 text-sm text-text-secondary">
          {[
            "Indoor Plants",
            "Outdoor Plants",
            "Flowering Plants",
            "Succulents & Cacti",
            "Herbs",
            "Bonsai",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer "
            >
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Light Requirement */}
      <div className="mb-6">
        <h4 className="font-semibold text-text-primary mb-3">
          Light Requirement
        </h4>
        <div className="space-y-2 text-sm text-text-secondary">
          {["Low Light", "Medium Light", "Bright Light"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer "
            >
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Watering */}
      <div className="mb-6">
        <h4 className="font-semibold text-text-primary mb-3">Watering Needs</h4>
        <div className="space-y-2 text-sm text-text-secondary">
          {["Low", "Moderate", "Frequent"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer "
            >
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold text-text-primary mb-3">Price Range</h4>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="100000"
            className="w-full text-text-secondary "
          />
          <div className="flex justify-between text-sm text-text-secondary">
            <span>LKR 0</span>
            <span>LKR 100,000</span>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <h4 className="font-semibold text-text-primary mb-3">Plant Size</h4>
        <div className="space-y-2 text-sm ">
          {["Small", "Medium", "Large"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer text-text-secondary"
            >
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="font-semibold text-text-primary mb-3">Availability</h4>
        <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
          <input type="checkbox" className="text-text-secondary" />
          In Stock Only
        </label>
      </div>
    </aside>
  );
}

export default Filters;
