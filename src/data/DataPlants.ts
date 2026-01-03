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
  PLANT09: "/images/store/ST9.png",
  PLANT10: "/images/store/ST10.png",
  PLANT11: "/images/store/ST11.png",
  PLANT12: "/images/store/ST12.png",
  PLANT13: "/images/store/ST13.png",
  PLANT14: "/images/store/ST14.png",
  PLANT15: "/images/store/ST15.png",
  PLANT16: "/images/store/ST16.png",
  PLANT17: "/images/store/ST17.png",
  PLANT18: "/images/store/ST18.png",
  PLANT19: "/images/store/ST19.png",
  PLANT20: "/images/store/ST20.png",
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
    image: STORE_IMAGES.PLANT09,
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
    image: STORE_IMAGES.PLANT10,
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
    image: STORE_IMAGES.PLANT11,
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
    image: STORE_IMAGES.PLANT12,
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
    image: STORE_IMAGES.PLANT13,
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
    image: STORE_IMAGES.PLANT14,
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
    image: STORE_IMAGES.PLANT15,
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
    image: STORE_IMAGES.PLANT16,
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
    image: STORE_IMAGES.PLANT17,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
    {
    id: 18,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT18,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },  {
    id: 19,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT19,
    alt: "Snake Plant in pot with long green leaves on white background",
    price: 30,
    discountPrice: 22,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },  {
    id: 20,
    name: "Snake Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT20,
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
