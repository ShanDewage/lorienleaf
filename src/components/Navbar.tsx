"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="relative bg-[#f6f8fa]">
      {/* Decorative ellipse */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ clipPath: "ellipse(400px 400px at 0 0)" }}
      />

      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        {/* Left: Menu and Lang/Currency */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Open menu"
            className="text-black text-xl focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex items-center space-x-2 text-xs font-normal text-black select-none">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>ENG</span>
              <i className="fas fa-chevron-down text-[8px]"></i>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>USD</span>
              <i className="fas fa-chevron-down text-[8px]"></i>
            </div>
          </div>
        </div>

        {/* Center Left Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[13px] font-semibold text-black tracking-wide">
          <li>
            <Link href="/" className="hover:underline">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/plants" className="hover:underline">
              STORE
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Botanical Plant Store Logo"
          className="font-playfair text-[20px] font-normal text-black flex flex-col items-center leading-none select-none"
        >
          <div className="flex items-center space-x-1 border border-[#8db14e] px-4 py-1">
            <img
              src="https://storage.googleapis.com/a1aa/image/5f0c6e1d-bfe4-412a-08aa-e6acf9a65c21.jpg"
              alt="Green botanical leaf icon"
              className="w-5 h-5"
              width={20}
              height={20}
              draggable="false"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/3113e498-f9cd-481f-b3cf-481de138d3c5.jpg"
              alt="Green sprout icon"
              className="w-5 h-5"
              width={20}
              height={20}
              draggable="false"
            />
            <span>BOTANICAL</span>
          </div>
          <span className="text-[10px] text-[#8db14e] font-normal mt-[2px]">
            Plant Store
          </span>
        </Link>

        {/* Center Right Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[13px] font-semibold text-black tracking-wide">
          <li>
            <Link href="/blog" className="hover:underline">
              BLOG
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:underline">
              PAGES
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 text-black text-lg">
          <button aria-label="Search" className="focus:outline-none">
            <i className="fas fa-search"></i>
          </button>
          <button
            aria-label="Favorites"
            className="relative focus:outline-none"
          >
            <i className="far fa-heart"></i>
            <span className="absolute -top-1 -right-2 bg-[#8db14e] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center select-none">
              1
            </span>
          </button>
          <button aria-label="Cart" className="relative focus:outline-none">
            <i className="fas fa-shopping-cart"></i>
            <span className="absolute -top-1 -right-2 bg-[#8db14e] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center select-none">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
