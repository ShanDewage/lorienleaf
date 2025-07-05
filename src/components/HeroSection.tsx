"use client";
import React from "react";
import Image from "next/image";
import P6 from "@/assets/P6.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/plants");
  };
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-start h-[100vh] px-6 md:px-12 lg:px-24 text-left theme-bg overflow-hidden shadow-md">
      <div className="max-w-xl md:max-w-lg lg:max-w-xl z-10">
        <h1 className="font-serif h1 text-shadow-md font-extrabold text-4xl sm:text-5xl md:text-4xl leading-tight  mb-3">
          Houseplant
          <br />
          The Perfect Choice.
        </h1>
        <div className="border-b-2 border-[#8fa98f] w-24 mb-5" />
        <p className="text-sm text-secondary mb-8 max-w-md">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry has been the industry's standard.
        </p>
        <button
          onClick={handleClick}
          className="bg-[#5ea30a]  hover:bg-[#4a7a08] text-white font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-xs"
        >
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="absolute bottom-0 right-0 w-[800px] sm:w-[400px] md:w-[600px] lg:w-[600px]">
        <Image
          src={P6}
          alt="Large green houseplant"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;
