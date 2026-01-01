"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/plants");
  };
  return (
    <section className="section-hero ">
      <div className="max-w-xl md:max-w-lg lg:max-w-xl z-10">
        <h1 className="title-7xl  text-shadow-md  leading-tight  mb-3">
          <span className="text-4xl"> Your Home.</span>
          <br />A Little More Alive.
        </h1>
        <div className="border-b-2 border-[#8fa98f] w-24 mb-5" />
        <p className="text-base text-text-secondary mb-8 max-w-md">
          {
            "Curated indoor plants designed to brighten your space, improve air quality, and create a calm, natural atmosphere you’ll love living in."
          }
        </p>
        <button
          onClick={handleClick}
          className="bg-primary  hover:bg-link text-white font-semibold px-4 py-2 rounded-xs shadow-lg flex items-center gap-2 text-sm"
        >
          Explore Plants
        </button>
      </div>

      {/* Image */}
      {/* <div className="absolute bottom-0 right-0 w-[800px] sm:w-[400px] md:w-[600px] lg:w-[600px]"> */}
      <div className="absolute   w-full bottom-0 bg-left">
        {/* <Image
          src="/images/ui/UI6.png"
          alt="Large green houseplant"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        /> */}
        <Image
          src="/images/ui/UI11.png"
          alt="Large green houseplant"
          width={2000}
          height={600}
          className="w-full min-h-screen object-contain "
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
