import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";

function VisualSection() {
  return (
    <section className="min-h-auto bg-200 section shadow-md rounded-xs mb-2 border border-border-300">
      <div className="max-w-7xl mx-auto px-6 py-0  lg:flex lg:items-center lg:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <Title
            title="Nurturing Nature, One Plant at a Time"
            showUnderline={false}
            align="left"
            containerClassName="mb-[20px]"
          />
          {/* <h2 className="text-4xl font-bold text-green-900 mb-4">
            Nurturing Nature, One Plant at a Time
          </h2> */}
          <p className="text-text-muted mb-6">
            At GreenLeaf, we believe every home deserves a touch of greenery.
            Our passion is delivering healthy, vibrant plants right to your
            doorstep.
          </p>
          <button
            className="bg-primary  hover:bg-link text-white font-medium px-4 py-2 rounded-xs shadow-lg flex items-center gap-2 text-sm"
            //  className="bg-primary hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Explore Our Collection
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <Image
            src="/images/ui/UI15.jpg"
            alt="Beautiful plants in pots"
            className="w-full rounded-3xl shadow-md object-cover"
            width={720}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}

export default VisualSection;
