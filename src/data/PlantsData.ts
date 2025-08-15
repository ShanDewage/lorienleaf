// data/plants.ts

import P1 from "@/assets/store/P1.png";
import P2 from "@/assets/store/P2.png";

export const rawPlants = [
  {
    // id: 1,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: P1,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
  },
  {
    // id: 2,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: P2,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
  },
  {
    // id: 3,
    name: "Monstera Deliciosa",
    description: "Loves humidity • Grows fast",
    image: P2,
    alt: "Monstera Deliciosa Plant with large green leaves on white background",
    price: 50,
    discountPrice: 39,
    label: "Trending",
    category: "store", // 👈
  },
  {
    // id: 3,
    name: "Monstera Deliciosa",
    description: "Loves humidity • Grows fast",
    image: P2,
    alt: "Monstera Deliciosa Plant with large green leaves on white background",
    price: 50,
    discountPrice: 39,
    label: "Trending",
    category: "store", // 👈
  },
  {
    // id: 1,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: P1,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
  },
];
export const plants = rawPlants.map((plant, index) => ({
  id: index + 1,
  ...plant,
}));
