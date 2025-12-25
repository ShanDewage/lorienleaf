// types/Plant.ts
export type PlantLabel = "Sale" | "Hot" | "Trending";

export type Plant = {
  id: number;
  name: string;
  description: string;
  image: string;
  alt: string;
  price: number;
  discountPrice: number;
  label: PlantLabel;
  category: string;
  inStock: boolean;
};
