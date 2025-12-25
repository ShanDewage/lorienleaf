import React from "react";

function MissionSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            Our mission is to bring nature closer to every home by making plant
            care simple, enjoyable, and accessible for everyone.
          </p>

          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            We believe plants have the power to improve well-being, purify air,
            and create calm spaces. Through responsibly grown plants and
            easy-to-follow care guides, we help people grow with confidence.
          </p>

          {/* Values */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">🌱</span>
              <p className="text-gray-700">
                Promote sustainable and eco-friendly gardening
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">🤍</span>
              <p className="text-gray-700">
                Inspire a love for plants and nature
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">📚</span>
              <p className="text-gray-700">
                Educate and empower plant parents at every level
              </p>
            </div>
          </div>
        </div>

        {/* Visual / Highlight Card */}
        <div className="bg-green-50 rounded-3xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Growing a Greener Future
          </h3>

          <p className="text-gray-600 mb-6">
            From eco-friendly packaging to responsible sourcing, every decision
            we make is rooted in care for the planet.
          </p>

          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="bg-white rounded-xl p-5 shadow">
              <p className="text-3xl font-bold text-green-600">10k+</p>
              <p className="text-sm text-gray-600 mt-1">Happy Plant Parents</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow">
              <p className="text-3xl font-bold text-green-600">50+</p>
              <p className="text-sm text-gray-600 mt-1">Plant Varieties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
