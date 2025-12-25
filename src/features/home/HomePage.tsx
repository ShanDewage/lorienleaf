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
    <main className="min-h-screen  ">
      <Hero />
      <div className=" pb-24 ">
        <FeaturedPlants />
        <Categories limit={12} />
        <DailyDeals />
        <CarePreview />
        <WhyChoose />
        <Newsletter />
      </div>
    </main>
  );
}

export default HomePage;
