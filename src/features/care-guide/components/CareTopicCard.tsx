import React from "react";

function CareTopicCard({
  title = "Watering Plants",
  description = "Learn how to water your plants correctly for healthy growth.",
  icon = "💧",
  level = "Beginner",
  readTime = "5 min read",
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100 cursor-pointer">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-3xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
          {level}
        </span>
        <span>{readTime}</span>
      </div>
    </div>
  );
}

export default CareTopicCard;
