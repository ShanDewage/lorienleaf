import React from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandX,
  IconBrandPinterest,
  IconBrandGoogle,
  IconCopyright,
} from "@tabler/icons-react";
import Image from "next/image";
function Footer() {
  return (
    <>
      <footer className="relative bg-bg-tertiary mx-auto px-6 sm:px-10 md:px-16 py-10 text-text-primary font-poppins">
        <Image
          alt="Large green plant with long leaves on the right side of the page"
          className="absolute bottom-0  right-0 h-[300px] w-auto object-contain select-none pointer-events-none"
          src="/images/ui/UI13.png"
          width={300}
          height={300}
        />
        <Image
          alt="Large green plant with long leaves on the right side of the page"
          className="absolute bottom-0  left-0 h-[180px] w-auto object-contain select-none pointer-events-none"
          src="/images/ui/UI14.png"
          width={300}
          height={300}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-sm leading-relaxed">
          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-xs uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-2">
                {/* <i className="fas fa-map-marker-alt mt-[3px] text-gray-700"></i> */}
                <IconMapPin stroke={1} size={20} />

                <span>High St, Moffat, Dumfriesshire.</span>
              </li>
              <li className="flex items-center gap-2">
                <IconPhone stroke={1} size={20} />

                <span> (+032) 302 9606</span>
              </li>
              <li className="flex items-center gap-2">
                <IconMail stroke={1} size={20} />
                <span> Lorienleaf@info.com</span>
              </li>
              <li className="flex items-center gap-2 mt-3">
                <strong>Follow us:</strong>
                <a
                  href="#"
                  className="text-[#4CAF50] hover:text-[#3a8e1a] transition-colors"
                  aria-label="Facebook"
                >
                  <IconBrandFacebook stroke={1} size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <IconBrandX stroke={1} size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Pinterest"
                >
                  <IconBrandPinterest stroke={1} size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Google Plus"
                >
                  <IconBrandGoogle stroke={1} size={20} />
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-xs uppercase mb-4">
              Information
            </h3>
            <ul className="space-y-3 text-text-secondary">
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
            <ul className="space-y-3 text-text-secondary">
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
            <div className="flex flex-wrap gap-2 text-text-secondary">
              <button
                type="button"
                className=" border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Trend
              </button>
              <button
                type="button"
                className=" border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Decor
              </button>
              <button
                type="button"
                className=" border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Plant
              </button>
              <button
                type="button"
                className=" border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
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
                className=" border border-gray-300 rounded-full px-4 py-1 text-xs hover:bg-gray-100"
              >
                Living room
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-10" />
        <p
          className="text-center text-text-secondary text-xs mt-6 gap-1 select-none flex items-center justify-center"
          aria-label="Copyright notice"
        >
          <span className="flex gap-1">
            Copyright
            <IconCopyright stroke={1} size={16} />
            2025 by{" "}
          </span>
          <a
            href="#"
            className="text-[#4CAF50] hover:text-[#3a8e1a] transition-colors"
          >
            Lorienleaf.
          </a>{" "}
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
