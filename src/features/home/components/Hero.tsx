"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconPlant } from "@tabler/icons-react";

function Hero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/store");
  };
  return (
    <section className="section-hero ">
      <div className="max-w-xl md:max-w-lg lg:max-w-xl z-10">
        <h1 className="title-7xl  text-shadow-md  leading-tight  mb-3">
          <span className="text-4xl"> Your Home,</span>
          <br />A Little More Alive.
        </h1>
        <div className="border-b-2 border-border-200 w-24 mb-5" />
        <p className="text-sm text-text-muted mb-8 max-w-lg">
          {
            "Curated indoor plants designed to brighten your space, improve air quality, and create a calm, natural atmosphere you’ll love living in."
          }
        </p>
        <button
          onClick={handleClick}
          className="bg-primary  hover:bg-link text-white font-medium px-4 py-2 rounded-xs shadow-lg flex items-center gap-2 text-sm"
        >
          Explore <IconPlant size={20} stroke={1.8} />
        </button>
      </div>

      {/* Image */}
      {/* <div className="absolute bottom-0 right-0 w-[800px] sm:w-[400px] md:w-[600px] lg:w-[600px]"> */}
      <div className="absolute   w-full bottom-0 left-100">
        <Image
          src="/images/ui/UI11.png"
          alt="Large green houseplant"
          width={720}
          height={720}
          className="w-full min-h-[80vh] max-h-[100vh] object-contain "
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
