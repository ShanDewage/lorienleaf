// pages/why-choose-us.tsx
import Head from "next/head";
import React from "react";

type Feature = {
  iconClass: string;
  iconColorClass: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    iconClass: "fa-leaf",
    iconColorClass: "text-green-600",
    title: "Healthy, Handpicked Plants",
    description:
      "Each plant is selected by experts and delivered fresh to your door.",
  },
  {
    iconClass: "fa-truck-fast",
    iconColorClass: "text-blue-500",
    title: "Fast & Safe Delivery",
    description:
      "Eco-friendly packaging ensures your plant arrives in perfect condition.",
  },
  {
    iconClass: "fa-shield-halved",
    iconColorClass: "text-yellow-500",
    title: "Guaranteed Satisfaction",
    description:
      "Enjoy hassle-free replacements or refunds with our happiness guarantee.",
  },
  {
    iconClass: "fa-star",
    iconColorClass: "text-purple-600",
    title: "Top Rated Support",
    description:
      "Our plant experts are always available to help you with plant care.",
  },
];

const WhyChoose = () => {
  return (
    <>
      <Head>
        <title>Why Choose Us | Green Haven</title>
        <meta
          name="description"
          content="Discover why thousands choose Green Haven for their plant needs."
        />
      </Head>

      <section className="theme-bg py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold h2 mb-4">Why Choose Us</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            We’re more than just a plant store. Here’s what makes us different.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <i
                className={`fa-solid ${feature.iconClass} text-3xl ${feature.iconColorClass}`}
              ></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-400">
                  {feature.title}
                </h3>
                <p className=" text-primary text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
