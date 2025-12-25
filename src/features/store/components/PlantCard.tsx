import React from "react";

type PlantCardProps = {
  name: string;
  price: number;
  image: string;
  category?: string;
  inStock?: boolean;
};

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  price,
  image,
  category,
  inStock = true,
}) => {
  return (
    <div className="group bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-52 bg-green-50 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {!inStock && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {category && <p className="text-xs text-green-600 mb-1">{category}</p>}

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <span className="text-green-700 font-bold">₹{price}</span>

          <button
            disabled={!inStock}
            className="text-sm px-4 py-1.5 rounded-full bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
