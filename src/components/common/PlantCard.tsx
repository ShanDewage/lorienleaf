// components/PlantCard.tsx
import React from "react";
import Image from "next/image";

type PlantCardProps = {
  name: string;
  description: string;
  image: any;
  alt: string;
  price: number;
  discountPrice: number;
  label: "Sale" | "Hot" | "Trending";
};

function PlantCard({
  name,
  description,
  image,
  alt,
  price,
  discountPrice,
  label,
}: PlantCardProps) {
  const labelColors: Record<string, string> = {
    Sale: "bg-red-500",
    Hot: "bg-orange-500",
    Trending: "bg-blue-500",
  };

  return (
    <div className="relative  text-center max-w-xs w-full border border-gray-200 ">
      {/* Label */}
      {(label === "Sale" || label === "Hot") && (
        <div
          className={`absolute top-2 left-0 text-white text-xs font-semibold px-2 rounded-tr-md rounded-br-md origin-left ${labelColors[label]}`}
          style={{ transformOrigin: "left center" }}
        >
          {label.toUpperCase()}
        </div>
      )}

      {/* Image */}
      <Image
        src={image}
        alt={alt}
        className="mx-auto object-contain bg-accent w-full max-w-[300px] pt-8"
        width={300}
        height={300}
        loading="lazy"
      />

      {/* Description and Price */}
      <div className="py-6 px-6 text-gray-500 text-sm">
        {/* Name */}
        <p className="title-sm pb-2  tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-all">
          {name}
        </p>
        {/* <ul className="text-left list-disc list-inside text-gray-500 text-sm mb-2">
          {description.split("•").map((point, i) => (
            <li key={i}>{point.trim()}</li>
          ))}
        </ul> */}
        {/* <p className="mb-1">{description}</p> */}
        <span className="text-gray-400 line-through text-sm inline-block">
          {price !== discountPrice && price ? `${price.toFixed(2)} $` : ""}
        </span>
        <span className="font-semibold text-gray-900 text-sm inline-block ml-1">
          {discountPrice.toFixed(2)} $
        </span>
      </div>
    </div>
  );
}

export default PlantCard;
