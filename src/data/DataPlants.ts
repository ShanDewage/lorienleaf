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
    name: "Pepper Face Plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT01,
    alt: "Pepper Face Plant",
    price: 1750,
    discountPrice: 1500,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 2,
    name: "Tractor Seat Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT02,
    alt: "Tractor Seat Plant",
    price: 1850,
    discountPrice: 1650,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 3,
    name: "Green-leafed Orchid Plant",
    description: "Loves humidity • Grows fast",
    image: STORE_IMAGES.PLANT03,
    alt: "Green-leafed Orchid Plant",
    price: 2000,
    discountPrice: 1750,
    label: "Trending",
    category: "store", // 👈
    inStock: false,
  },

  {
    id: 4,
    name: "rubber plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT04,
    alt: "rubber plant",
    price: 1350,
    discountPrice: 1200,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },

  {
    id: 5,
    name: "zebra plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT05,
    alt: "zebra plant",
    price: 1685,
    discountPrice: 1520,
    label: "Hot",
    category: "featured", // 👈
    inStock: true,
  },

  {
    id: 6,
    name: "Pothos plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT06,
    alt: "Pothos plant",
    price: 1400,
    discountPrice: 1300,
    label: "Trending",
    category: "featured", // 👈
    inStock: true,
  },

  {
    id: 7,
    name: "Green Potted Plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT07,
    alt: "Green Potted Plant",
    price: 1520,
    discountPrice: 1300,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 8,
    name: "Plant Bush Leaves",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT08,
    alt: "Plant Bush Leaves",
    price: 2250,
    discountPrice: 2000,
    label: "Hot",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 9,
    name: "Tineke Rubber Plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT09,
    alt: "Tineke Rubber Plant",
    price: 9000,
    discountPrice: 7900,
    label: "Trending",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 10,
    name: "orbifolia prayer plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT10,
    alt: "orbifolia prayer plant",
    price: 10000,
    discountPrice: 8900,
    label: "Sale",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 11,
    name: "Chinese money plant",
    description: "Bright indirect light • Water weekly",
    image: STORE_IMAGES.PLANT11,
    alt: "Chinese money plant",
    price: 3200,
    discountPrice: 2900,
    label: "Hot",
    category: "featured", // 👈
    inStock: true,
  },
  {
    id: 12,
    name: "Swiss cheese plant",
    description: "Loves humidity • Grows fast",
    image: STORE_IMAGES.PLANT12,
    alt: "Swiss cheese plant",
    price: 12500,
    discountPrice: 11500,
    label: "Trending",
    category: "store", // 👈
    inStock: true,
  },
  {
    id: 13,
    name: "Peace Lily plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT13,
    alt: "Peace Lily plant",
    price: 1490,
    discountPrice: 1290,
    label: "Sale",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 14,
    name: "Hopewood plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT14,
    alt: "Hopewood small artificial plant",
    price: 2225,
    discountPrice: 1900,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },

  {
    id: 15,
    name: "White Butterfly Arrowhead Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT15,
    alt: "White Butterfly Arrowhead Plant",
    price: 6000,
    discountPrice: 5200,
    label: "Trending",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 16,
    name: "Monstera plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT16,
    alt: "Monstera plant",
    price: 2930,
    discountPrice: 2200,
    label: "Sale",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 17,
    name: "Aphelandra Snow White Zebra Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT17,
    alt: "Aphelandra Snow White Zebra Plant",
    price: 30000,
    discountPrice: 26750,
    label: "Hot",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 18,
    name: "arrowhead plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT18,
    alt: "arrowhead plant",
    price: 18000,
    discountPrice: 16750,
    label: "Trending",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 19,
    name: "prayer plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT19,
    alt: "prayer plant",
    price: 17000,
    discountPrice: 15490,
    label: "Sale",
    category: "daily", // 👈
    inStock: false,
  },
  {
    id: 20,
    name: "Alocasia 'Maharani' Plant",
    description: "Low light • Very low maintenance",
    image: STORE_IMAGES.PLANT20,
    alt: "Alocasia 'Maharani' Plant",
    price: 14299,
    discountPrice: 13490,
    label: "Sale",
    category: "daily", // 👈
    inStock: false,
  },
];
// export const plants = rawPlants.map((plant, index) => ({
//   id: index + 1,
//   ...plant,
// }));
