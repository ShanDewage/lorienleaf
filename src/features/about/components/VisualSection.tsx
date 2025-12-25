import React from "react";

function VisualSection() {
  return (
    <section className="bg-green-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Nurturing Nature, One Plant at a Time
          </h2>
          <p className="text-green-800 mb-6">
            At GreenLeaf, we believe every home deserves a touch of greenery.
            Our passion is delivering healthy, vibrant plants right to your
            doorstep.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Explore Our Collection
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <img
            src="/images/ui/UI1.jpg"
            alt="Beautiful plants in pots"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default VisualSection;
