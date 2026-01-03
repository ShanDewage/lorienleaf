import Title from "@/components/common/Title";
import { DataCareGuide } from "@/data/DataCareGuide";
import React from "react";

function CarePreview() {
  return (
    <section className="section ">
      {/* <div className="max-w-7xl mx-auto"> */}
      <div className="text-center mb-16">
        <Title
          title="Plant Care Made Simple"
          subtitle="Simple tips to keep your plants happy and healthy."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DataCareGuide.map((guide, index) => (
          <div
            key={index}
            className="bg-300 flex gap-4 p-6 rounded-xs shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border-100 cursor-pointer"
          >
            <div className="flex items-center justify-center max-w-16 w-full  rounded-md bg-200 text-3xl shadow-sm ">
              {guide.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-wide font-oswald text-text-muted mb-2">
                {guide.title}
              </h3>

              <p className="text-base tracking-wide text-text-secondary mb-4">
                {guide.description}
              </p>

              <span className="text-sm font-semibold text-primary hover:underline">
                Learn More →
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
}

export default CarePreview;
