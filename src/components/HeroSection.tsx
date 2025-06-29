import React from "react";
import Image from "next/image";
import P1 from "@/assets/P1.jpg";

function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center h-[90vh] px-6 md:px-12 lg:px-24 text-left theme-bg overflow-hidden">
      {/* SVG shape and circles as background */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1440V600C1300 600 1200 550 1000 550C800 550 700 600 500 600C300 600 200 550 0 550V0Z"
          fill="#ffffff"
        />
        <circle cx="120" cy="120" r="20" fill="#e1e6eb" />
        <circle cx="1400" cy="500" r="20" fill="#e1e6eb" />
        <circle cx="1300" cy="100" r="10" fill="#e1e6eb" />
        <circle cx="100" cy="500" r="10" fill="#e1e6eb" />
      </svg>

      {/* Text content */}
      <div className="max-w-xl md:max-w-lg lg:max-w-xl z-10">
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-[#222222] mb-3">
          Houseplant
          <br />
          The Perfect Choice.
        </h1>
        <div className="border-b-2 border-[#222222] w-24 mb-5" />
        <p className="text-sm text-gray-600 mb-8 max-w-md">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry has been the industry's standard.
        </p>
        <button className="bg-[#5ea30a] hover:bg-[#4a7a08] text-white font-semibold px-6 py-3 rounded-full shadow-md flex items-center gap-2">
          Shop Now
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
        <div className="mt-12 flex items-center gap-6 text-sm font-semibold text-[#222222]">
          <button aria-label="Previous" className="hover:text-[#5ea30a]">
            <svg
              className="w-4 h-4 inline-block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <polyline points="19 12 5 12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <span>
            <span className="text-[#5ea30a]">01</span>/03
          </span>
          <button aria-label="Next" className="hover:text-[#5ea30a]">
            <svg
              className="w-4 h-4 inline-block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <polyline points="5 12 19 12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-12 md:mt-0 flex-shrink-0">
        <Image
          src={P1}
          alt="Large green houseplant leaves with visible veins and stems on a light background"
          width={600}
          height={400}
          className="w-full max-w-md object-contain"
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;
