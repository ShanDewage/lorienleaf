import React from "react";

const tips = [
  {
    title: "Don’t Overwater",
    description:
      "Most plants die from too much water. Always check soil moisture first.",
    icon: "💧",
  },
  {
    title: "Right Sunlight",
    description:
      "Place plants according to their light needs — low, medium, or bright.",
    icon: "☀️",
  },
  {
    title: "Good Drainage",
    description: "Ensure pots have drainage holes to prevent root rot.",
    icon: "🪴",
  },
  {
    title: "Clean the Leaves",
    description:
      "Wipe leaves regularly to help plants breathe and absorb light.",
    icon: "🍃",
  },
  {
    title: "Seasonal Care",
    description:
      "Reduce watering during winter and increase during growing seasons.",
    icon: "🍂",
  },
  {
    title: "Watch for Pests",
    description: "Inspect leaves often and treat pests early to avoid damage.",
    icon: "🐞",
  },
];

function QuickTips() {
  return (
    <section className="py-14 px-4 md:px-10 bg-green-50 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700">
            Quick Plant Care Tips
          </h2>
          <p className="text-gray-600 mt-3">
            Simple tips to keep your plants healthy every day
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-2xl mb-4">
                {tip.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {tip.title}
              </h3>

              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickTips;
