import React from "react";

function page() {
  return (
    <>
      {/* bg-gradient-to-br from-green-50 via-white to-green-100 */}
      <div className="min-h-screen mt-24 px-4 py-16 theme-bg  theme-text">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">
            Get in Touch
          </h1>

          <p className="text-muted mb-12 max-w-2xl mx-auto text-base">
            Have questions or just want to chat about your favorite plants?
            Reach out through any of the ways below. We’d love to connect 🌿
          </p>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Email */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center space-x-4 mb-3">
                <i className="fas fa-envelope text-green-600 text-2xl"></i>
                <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              </div>
              <p className="text-gray-600 text-sm">hello@lorienleaf.com</p>
            </div>

            {/* Phone */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center space-x-4 mb-3">
                <i className="fas fa-phone-alt text-green-600 text-2xl"></i>
                <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              </div>
              <p className="text-gray-600 text-sm">+94 77 123 4567</p>
            </div>

            {/* Address */}
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

            {/* Hours */}
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

          {/* Footer */}
          <p className="text-center text-xs text-muted mt-16">
            © {new Date().getFullYear()} Lorien Leaf. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
