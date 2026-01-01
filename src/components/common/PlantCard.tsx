// components/PlantCard.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconShoppingBag,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
type PlantCardProps = {
  plant: Plant;
  hideLabel?: boolean; // hide the "Sale"/"Hot" label
  hidePrice?: boolean;
};

function PlantCard({ plant, hideLabel }: PlantCardProps) {
  const { name, description, image, alt, price, discountPrice, label } = plant;
  const labelColors: Record<string, string> = {
    Sale: "bg-red-500",
    Hot: "bg-orange-500",
    Trending: "bg-blue-500",
  };
  const [isFav, setIsFav] = useState(false);
  const hasDiscount = price > discountPrice;

  const discountRate = hasDiscount
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  const formattedPrice = new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(discountPrice);

  const formatted = discountPrice.toLocaleString("en-LK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [integerPart, decimalPart] = formatted.split(".");

  return (
    <Link href={`/store/${plant.id}`}>
      <div className="relative  text-left max-w-xs w-full shadow-sm  border border-green-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Label */}
        {!hideLabel && (label === "Sale" || label === "Hot") && (
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
          className="mx-auto object-contain bg-accent w-full max-w-[380px] max-h-[300px] pt-8"
          width={320}
          height={300}
          loading="lazy"
        />

        {/* Description and Price */}
        {/* <div className="py-6 px-6 text-gray-500 text-sm">
    
        <p className="title-sm pb-2  tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-all">
          {name}
        </p>
   
        <span className="text-gray-400 line-through text-sm inline-block">
          {price !== discountPrice && price ? `${price.toFixed(2)} $` : ""}
        </span>
        <span className="font-semibold text-gray-900 text-sm inline-block ml-1">
          {discountPrice.toFixed(2)} $
        </span>
      </div> */}
        <div className="p-4">
          {/* {category && <p className="text-xs text-green-600 mb-1">{category}</p>} */}

          <h3 className="text-base font-semibold text-text-secondary line-clamp-1">
            {name}
          </h3>

          <div className="flex items-center justify-between mt-3">
            {/* <span className="text-green-700 font-bold">${price}</span> */}
            <div className="flex flex-col gap-1">
              <div className=" flex items-start text-text-primary gap-0">
                {/* <span className="font-medium  text-xs  ">
                  LKR
                </span> */}
                <h4 className="font-bold  text-xl ">
                  {formattedPrice}
                  {/* {discountPrice.toFixed(2)} leading-none */}
                  {/* {integerPart} */}
                </h4>
                {/* <span className="font-medium  text-xs ">
                  {decimalPart}
                </span> */}
              </div>
              <div className="flex items-center gap-2 ">
                <span className="text-text-muted line-through text-sm inline-block">
                  {price !== discountPrice && price
                    ? `LKR${price.toFixed(2)}`
                    : ""}
                </span>
                {hasDiscount && (
                  // <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  //   -{discountRate}%
                  // </span>
                  <span className="   text-text-primary text-sm ">
                    (-{discountRate}% off)
                  </span>
                )}
              </div>
              {/* <span className="text-red-600 font-semibold text-sm">Only 1 left!</span> */}

              <button
                onClick={() => setIsFav(!isFav)}
                className="absolute top-2 right-2 z-10   hover:scale-110 transition"
                aria-label="Add to favourites"
              >
                {isFav ? (
                  <IconHeartFilled size={24} className="text-red-500" />
                ) : (
                  <IconHeart size={24} className="text-gray-500" />
                )}
              </button>
            </div>
            <button
              // disabled={!inStock}
              className=" px-2 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
            >
              <IconShoppingBag stroke={2} size={24} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlantCard;
