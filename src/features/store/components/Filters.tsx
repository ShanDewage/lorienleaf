import React from "react";

function Filters() {
  return (
    <aside className="w-full lg:w-72  rounded-xs shadow-md p-6 border border-green-100">
      <h3 className="text-xl font-bold text-green-700 mb-6">Filter Plants</h3>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Category</h4>
        <div className="space-y-2 text-sm text-gray-600">
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
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="accent-green-600" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Light Requirement */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Light Requirement</h4>
        <div className="space-y-2 text-sm text-gray-600">
          {["Low Light", "Medium Light", "Bright Light"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="accent-green-600" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Watering */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Watering Needs</h4>
        <div className="space-y-2 text-sm text-gray-600">
          {["Low", "Moderate", "Frequent"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="accent-green-600" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="5000"
            className="w-full accent-green-600"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>$0</span>
            <span>$5000</span>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Plant Size</h4>
        <div className="space-y-2 text-sm text-gray-600">
          {["Small", "Medium", "Large"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="accent-green-600" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Availability</h4>
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input type="checkbox" className="accent-green-600" />
          In Stock Only
        </label>
      </div>
    </aside>
  );
}

export default Filters;
