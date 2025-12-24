import React from "react";
import Hero from "./components/Hero";
import FeaturedPlants from "./components/FeaturedPlants";
import WhyChoose from "./components/WhyChoose";
import Newsletter from "./components/Newsletter";
import DailyDeals from "./components/DailyDeals";
import Categories from "./components/Categories";
import CarePreview from "./components/CarePreview";

function HomePage() {
  return (
    <main className="min-h-screen bg-offWhite text-darkGreen">
      <Hero />
      <FeaturedPlants />
      <Categories />
      <DailyDeals />
      <CarePreview />
      <WhyChoose />
      <Newsletter />
    </main>
  );
}

export default HomePage;
