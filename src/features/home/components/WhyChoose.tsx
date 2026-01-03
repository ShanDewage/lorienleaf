// pages/why-choose-us.tsx
import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import { TablerIcon } from "@tabler/icons-react";
import {
  IconLeaf,
  IconTruckDelivery,
  IconShieldCheck,
  IconStar,
} from "@tabler/icons-react";
type Feature = {
  icon: TablerIcon;
  iconColorClass: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: IconLeaf,
    iconColorClass: "text-green-600",
    title: "Healthy, Handpicked Plants",
    description:
      "Each plant is selected by experts and delivered fresh to your door.",
  },
  {
    icon: IconTruckDelivery,
    iconColorClass: "text-blue-500",
    title: "Fast & Safe Delivery",
    description:
      "Eco-friendly packaging ensures your plant arrives in perfect condition.",
  },
  {
    icon: IconShieldCheck,
    iconColorClass: "text-yellow-500",
    title: "Guaranteed Satisfaction",
    description:
      "Enjoy hassle-free replacements or refunds with our happiness guarantee.",
  },
  {
    icon: IconStar,
    iconColorClass: "text-purple-600",
    title: "Top Rated Support",
    description:
      "Our plant experts are always available to help you with plant care.",
  },
];

const WhyChoose = () => {
  return (
    <>
      <section className=" bg-300 section mx-20 rounded-xs shadow-sm ">
        <div className=" grid gap-24 md:grid-cols-2 lg:grid-cols-2  mx-auto">
          <div className="   w-full min-h-[80vh] bg-top-left ">
            <Image
              alt="Large green banana leaf on the left side of the page"
              className="h-[80vh]  w-full object-cover bg-top-left  rounded-xs shadow-sm  select-none pointer-events-none transition-all duration-300 hover:-translate-y-1"
              src="/images/ui/UI12.jpg"
              width={720}
              height={720}
            />
          </div>
          <div className=" flex flex-col justify-center gap-0  py-0 mx-auto min-w-xl">
            <Title
              title="Why Plant Lovers Choose Us?"
              subtitle=" We’re more than just a plant store. Here’s what makes us different."
              align="left"
              showUnderline={false}
              containerClassName="mb-[20]"
            />
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex  items-center gap-6 px-6 py-4   hover:shadow-sm transition-all duration-300 hover:-translate-y-1"
                  // className="flex bg-200 items-center gap-6 px-6 py-4 border border-gray-200 rounded-xs shadow-xs hover:shadow-md transition"
                >
                  <div className="flex items-center justify-center max-w-12 w-full h-full  rounded-xs bg-200  shadow-sm ">
                    <Icon
                      size={30}
                      stroke={1.4}
                      className={`${feature.iconColorClass} transition-transform group-hover:scale-110`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-wide font-oswald text-text-muted ">
                      {feature.title}
                    </h3>
                    <p className=" text-text-secondary text-base tracking-wide ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
