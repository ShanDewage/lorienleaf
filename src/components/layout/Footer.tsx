import React from "react";

function Footer() {
  return (
    <>
      <footer className=" bg-bg-tertiary mx-auto px-6 sm:px-10 md:px-16 py-10 text-gray-800 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-sm leading-relaxed">
          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-xs uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-[3px] text-gray-700"></i>
                <span>
                  <strong>Address:</strong> London Oxford Street, 012 United
                  Kingdom.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-gray-700"></i>
                <span>Phone : (+032) 3456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-gray-700"></i>
                <span>Email: Botanicalstore@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 mt-3">
                <strong>Follow us:</strong>
                <a
                  href="#"
                  className="text-[#4CAF50] hover:text-[#3a8e1a] transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Pinterest"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Google Plus"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-xs uppercase mb-4">
              Information
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>New Products</li>
              <li>Top Sellers</li>
              <li>Our Blog</li>
              <li>About Our Shop</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-semibold text-xs uppercase mb-4">My Account</h3>
            <ul className="space-y-3 text-gray-500">
              <li>My account</li>
              <li>Discount</li>
              <li>Orders history</li>
              <li>Personal information</li>
            </ul>
          </div>

          {/* Popular Tag */}
          <div>
            <h3 className="font-semibold text-xs uppercase mb-4">
              Popular Tag
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="text-gray-600 border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Trend
              </button>
              <button
                type="button"
                className="text-gray-600 border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Decor
              </button>
              <button
                type="button"
                className="text-gray-600 border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Plant
              </button>
              <button
                type="button"
                className="text-gray-600 border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Table tree
              </button>
              <button
                type="button"
                className="text-white bg-[#4CAF50] rounded-full px-4 py-1 text-xs"
              >
                Bedroom tree
              </button>
              <button
                type="button"
                className="text-gray-600 border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Living room
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-10" />
        <p
          className="text-center text-gray-600 text-xs mt-6 select-none"
          aria-label="Copyright notice"
        >
          <i className="far fa-copyright"></i>Copyright 2025 by{" "}
          <a
            href="#"
            className="text-[#4CAF50] hover:text-[#3a8e1a] transition-colors"
          >
            Lorienleaf
          </a>{" "}
          - All right reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
