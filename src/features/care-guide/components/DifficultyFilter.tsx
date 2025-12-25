import React from "react";

function DifficultyFilter() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <span className="text-sm font-semibold text-gray-700">Difficulty:</span>

      {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
        <button
          key={level}
          className="px-4 py-2 text-sm rounded-full border border-green-200 text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200"
        >
          {level}
        </button>
      ))}
    </div>
  );
}

export default DifficultyFilter;
