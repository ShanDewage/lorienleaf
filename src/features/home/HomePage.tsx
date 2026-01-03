import React from "react";
import Hero from "./components/Hero";
import FeaturedPlants from "./components/FeaturedPlants";
import WhyChoose from "./components/WhyChoose";
import Newsletter from "./components/Newsletter";
import DailyDeals from "./components/DailyDeals";
import Categories from "./components/Categories";
import CarePreview from "./components/CarePreview";
import BlogPreview from "./components/BlogPreview";

function HomePage() {
  return (
    <main className="min-h-screen  ">
      <Hero />
      <div className=" mt-24 ">
        <WhyChoose />
        <FeaturedPlants />
        {/* <Categories limit={12} /> */}
        <CarePreview />
        <DailyDeals />
        <Newsletter />
        <BlogPreview limit={3} />
      </div>
    </main>
  );
}

export default HomePage;
