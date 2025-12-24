// data/plants.ts

export const STORE_IMAGES = {
  PLANT01: "/images/store/ST1.png",
  PLANT02: "/images/store/ST2.png",
} as const;

export type StoreImageKey = keyof typeof STORE_IMAGES;

export const rawPlants = [
  {
    // id: 1,
    name: "Fiddle Leaf Fig",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT01,
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
    image: STORE_IMAGES.PLANT02,
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
    image: STORE_IMAGES.PLANT01,
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
    image: STORE_IMAGES.PLANT02,
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
    image: STORE_IMAGES.PLANT01,
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
