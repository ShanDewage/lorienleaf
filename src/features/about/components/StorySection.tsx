import React from "react";

function StorySection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-green-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Image / Visual Side */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Plant nursery"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-md">
            <p className="text-green-700 font-bold text-lg">Since 2020</p>
            <p className="text-sm text-gray-600">Rooted in Nature</p>
          </div>
        </div>

        {/* Story Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our journey began with a small balcony, a few pots, and a deep love
            for plants. What started as a personal hobby soon grew into a
            passion for sharing the joy of greenery with others.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            As more people joined us, we realized that many wanted plants but
            felt unsure about care. That’s when we decided to build a place
            where plants and guidance grow together.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Today, we help thousands of plant lovers create greener homes
            through carefully nurtured plants and easy-to-follow care knowledge.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-2xl font-bold text-green-600">5+</p>
              <p className="text-sm text-gray-600">Years Growing</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-2xl font-bold text-green-600">20k+</p>
              <p className="text-sm text-gray-600">Plants Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
