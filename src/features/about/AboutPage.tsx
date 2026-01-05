import React from "react";
import MissionSection from "./components/MissionSection";
import StorySection from "./components/StorySection";
import VisualSection from "./components/VisualSection";
import Title from "@/components/common/Title";
import Image from "next/image";

function AboutPage() {
  return (
    <>
      <div className="page">
        {/* <Title
          title="About LorienLeaf"
          subtitle="  Rooted in nature. Designed with purpose. Grown with love."
        /> */}
        <section
          className="rounded-xs bg-300
                px-8 py-12 shadow-sm flex flex-col text-left justify-center "
        >
          <p className="text-sm uppercase tracking-widest text-primary">
            About LorienLeaf
          </p>

          <Title
            title="Rooted. Loved. Green. 🌵"
            showUnderline={false}
            containerClassName="mb-[0] mt-4"
            titleClassName="text-text-primary"
            align="left"
          />

          <p className="mt-2 text-text-muted  tracking-wide text-sm md:text-base max-w-3xl">
            {/* Rooted in nature. Designed with purpose. Grown with love. */}
            At LorienLeaf, we’re passionate about bringing lush, healthy plants
            into your home. From care tips to beautiful greenery, we’re here to
            inspire plant lovers everywhere.
          </p>

          <div className="absolute   w-full top-0 left-[16%]">
            <Image
              src="/images/ui/UI16.png"
              alt="Large green houseplant"
              width={720}
              height={720}
              className="w-full min-h-[80vh] max-h-[100vh] object-contain "
              priority
            />
          </div>
        </section>

        <div className="flex flex-col gap-24 mt-16">
          <MissionSection />
          <StorySection />
          <VisualSection />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
