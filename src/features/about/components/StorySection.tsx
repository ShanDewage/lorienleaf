import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";

function StorySection() {
  return (
    <section className="min-h-auto bg-300 section shadow-md rounded-xs border border-border-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Image / Visual Side */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-md">
            {/* <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Plant nursery"
              className="w-full h-full object-cover"
            /> */}

            <Image
              src="/images/ui/UI9.jpg"
              alt="Large green houseplant"
              width={720}
              height={720}
              // className="w-full min-h-[40vh] max-h-[80vh] object-contain "
              className="w-full h-full max-h-[60vh] object-cover"
              priority
            />
          </div>

          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -left-6 bg-200 px-6 py-4 rounded-2xl shadow-md border border-border-100">
            <p className="text-primary font-bold text-lg">Since 2020</p>
            <p className="text-sm text-text-secondary">Rooted in Nature</p>
          </div>
        </div>

        {/* Story Content */}
        <div>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Our Story
          </h2> */}
          <Title
            title=" Our Story"
            showUnderline={false}
            align="left"
            containerClassName="mb-[20px]"
          />

          <p className="text-text-muted mb-4 leading-relaxed">
            Our journey began with a small balcony, a few pots, and a deep love
            for plants. What started as a personal hobby soon grew into a
            passion for sharing the joy of greenery with others.
          </p>

          <p className="text-text-muted mb-4 leading-relaxed">
            As more people joined us, we realized that many wanted plants but
            felt unsure about care. That’s when we decided to build a place
            where plants and guidance grow together.
          </p>

          <p className="text-text-muted mb-6 leading-relaxed">
            Today, we help thousands of plant lovers create greener homes
            through carefully nurtured plants and easy-to-follow care knowledge.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-6 ">
            <div className="bg-200 rounded-xl p-5 shadow-sm border border-border-100">
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-sm text-text-secondary">Years Growing</p>
            </div>

            <div className="bg-200 rounded-xl p-5 shadow-sm border border-border-100">
              <p className="text-2xl font-bold text-primary">20k+</p>
              <p className="text-sm text-text-secondary">Plants Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
