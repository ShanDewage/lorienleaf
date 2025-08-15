// src/app/page.tsx
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import P1 from "@/assets/P1.jpg";
import HeroSection from "@/components/HeroSection";
import FeaturedPlants from "@/components/FeaturedPlants";
import Newsletter from "@/components/Newsletter";
import DailyDeals from "@/components/DailyDeals";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-offWhite text-darkGreen">
      {/* Hero Section */}

      <HeroSection />
      {/* Featured Plants Section */}
      <FeaturedPlants />
      <WhyChoose/>
      <Newsletter />
      <DailyDeals />
    </main>
  );
}
