// data/plants.ts

import { Plant } from "@/types/Plant";

export const STORE_IMAGES = {
  PLANT01: "/images/store/ST1.png",
  PLANT02: "/images/store/ST2.png",
  PLANT03: "/images/store/ST3.png",
  PLANT04: "/images/store/ST4.png",
  PLANT05: "/images/store/ST5.png",
  PLANT06: "/images/store/ST6.png",
  PLANT07: "/images/store/ST7.png",
  PLANT08: "/images/store/ST8.png",
} as const;

export type StoreImageKey = keyof typeof STORE_IMAGES;

export const plants: Plant[] = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT01,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 15500,
    discountPrice: 10500,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT02,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    description: "Loves humidity • Grows fast",
    image: STORE_IMAGES.PLANT03,
    alt: "Monstera Deliciosa Plant with large green leaves on white background",
    price: 50,
    discountPrice: 39,
    label: "Trending",
    category: "store", // 👈
    inStock: false,
  },

  {
    id: 4,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT04,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },

  {
    id: 5,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT05,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },

  {
    id: 6,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT06,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },

  {
    id: 7,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT07,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT08,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 9,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT01,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 10,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT02,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 11,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT03,
    alt: "Fiddle Leaf Fig Plant in pot with green leaves on white background",
    price: 40,
    discountPrice: 29,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 12,
    name: "Monstera Deliciosa",
    description: "Loves humidity • Grows fast",
    image: STORE_IMAGES.PLANT04,
    alt: "Monstera Deliciosa Plant with large green leaves on white background",
    price: 50,
    discountPrice: 39,
    label: "Trending",
    category: "store", // 👈
    inStock: true,
  },
  {
    id: 13,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT05,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 14,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT06,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },

  {
    id: 15,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT07,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 16,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT08,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 17,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT01,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
];
// export const plants = rawPlants.map((plant, index) => ({
//   id: index + 1,
//   ...plant,
// }));
