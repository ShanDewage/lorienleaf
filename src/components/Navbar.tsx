"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [language, setLanguage] = useState("ENG");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const availableLanguages = ["ENG", "SIN"];
  return (
    // <header className="relative  theme-bg theme-text">
    <header className="fixed top-0  w-full z-50 theme-bg theme-text shadow-md">
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
        <div className="flex items-center space-x-4 relative">
          <button
            aria-label="Open menu"
            className=" text-xl focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Language and Currency Selectors */}
          <div className="flex items-center space-x-2 text-xs font-normal  select-none">
            {/* Language Dropdown */}
            <div className="relative">
              <div
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <span>{language}</span>
                <i className="fas fa-chevron-down text-[8px]"></i>
              </div>

              {showLangDropdown && (
                <ul className="absolute top-full left-0 mt-1 w-20 bg-white border border-gray-200 rounded shadow-md  z-10">
                  {availableLanguages.map((lang) => (
                    <li
                      key={lang}
                      className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setLanguage(lang);
                        setShowLangDropdown(false);
                      }}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Center Left Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[13px] font-semibold  tracking-wide">
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
          className="font-playfair text-[20px] font-normal  flex flex-col items-center leading-none select-none"
        >
          <div className="flex items-center space-x-1 border border-[#8db14e] px-4 py-1">
            {/* <Image
              src={logo}
              alt="Green botanical leaf icon"
              width={60}
              height={60}
              draggable="false"
            /> */}

            <span
              style={{ fontFamily: '"Sacramento", cursive' }}
              className="text-green-700 font-bold text-lg "
            >
              {/* L💚rien L🍃af */}
              Lorien Leaf
            </span>
          </div>
          {/* <span className="text-[10px] text-[#8db14e] font-normal mt-[2px]">
            Plant Store
          </span> */}
        </Link>

        {/* Center Right Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[13px] font-semibold  tracking-wide">
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
        <div className="flex items-center space-x-6  text-lg">
          <button aria-label="Search" className="focus:outline-none">
            <i className="fas fa-search"></i>
          </button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
