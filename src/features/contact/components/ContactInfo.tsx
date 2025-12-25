import Title from "@/components/common/Title";
import React from "react";

function ContactInfo() {
  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Title>Get in Touch</Title>

        <p className="text-text-muted mb-12 max-w-2xl mx-auto text-base">
          Have questions or just want to chat about your favorite plants? Reach
          out through any of the ways below. We’d love to connect 🌿
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex items-center space-x-4 mb-3">
              <i className="fas fa-envelope text-green-600 text-2xl"></i>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
            </div>
            <p className="text-gray-600 text-sm">hello@lorienleaf.com</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex items-center space-x-4 mb-3">
              <i className="fas fa-phone-alt text-green-600 text-2xl"></i>
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
            </div>
            <p className="text-gray-600 text-sm">+94 77 123 4567</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition col-span-2">
            <div className="flex items-center space-x-4 mb-3">
              <i className="fas fa-map-marker-alt text-green-600 text-2xl"></i>
              <h2 className="text-xl font-semibold text-gray-800">
                Store Location
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Lorien Leaf Plant Store
              <br />
              123 Botanical Street,
              <br />
              Colombo, Sri Lanka
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition col-span-2">
            <div className="flex items-center space-x-4 mb-3">
              <i className="fas fa-clock text-green-600 text-2xl"></i>
              <h2 className="text-xl font-semibold text-gray-800">
                Opening Hours
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Monday – Saturday: 9:00 AM – 6:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4">Our Address</h3>
          <p className="text-green-800">123 Greenway Lane</p>
          <p className="text-green-800">Plantville, PV 45678</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-green-900 mb-4">Contact Us</h3>
          <p className="text-green-800">
            <span className="font-semibold">Phone:</span> (123) 456-7890
          </p>
          <p className="text-green-800">
            <span className="font-semibold">Email:</span> hello@greenleaf.com
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default ContactInfo;
