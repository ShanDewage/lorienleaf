import Title from "@/components/common/Title";
import { DataCareGuide } from "@/data/DataCareGuide";
import React from "react";

function CarePreview() {
  return (
    <section className="section bg-green-50">
      {/* <div className="max-w-7xl mx-auto"> */}
      <div className="text-center mb-16">
        <Title className="">Plant Care Guides</Title>
        <p className="text-gray-600 ">
          Simple tips to keep your plants happy and healthy
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DataCareGuide.map((guide, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xs shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100 cursor-pointer"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-3xl mb-5">
              {guide.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {guide.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">{guide.description}</p>

            <span className="text-sm font-semibold text-green-600 hover:underline">
              Learn More →
            </span>
          </div>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
}

export default CarePreview;
