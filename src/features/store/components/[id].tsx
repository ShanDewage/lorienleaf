// features -> store-> [id].tsx
"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { plants } from "@/data/DataPlants";
import Image from "next/image";
import { IconShoppingBag } from "@tabler/icons-react";

export default function PlantDetailPage() {
  const params = useParams();
  const router = useRouter();

  // find plant by ID from params
  const plant = plants.find((p) => p.id === Number(params.id));

  if (!plant) return <p className="p-6">Plant not found</p>;

  const { name, description, image, price, discountPrice, label } = plant;
  const hasDiscount = price > discountPrice;
  const discountRate = hasDiscount
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div className="max-w-4xl mx-auto min-h-screen mt-24 px-6 py-16">
      <button
        onClick={() => router.back()}
        className="mb-4 text-green-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4">{name}</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-contain"
        />

        <div className="flex-1">
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xl font-bold">
              ${discountPrice.toFixed(2)}
            </span>
            {hasDiscount && (
              <>
                <span className="line-through text-gray-400">
                  ${price.toFixed(2)}
                </span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                  -{discountRate}%
                </span>
              </>
            )}
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2">
            <IconShoppingBag stroke={2} size={20} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
