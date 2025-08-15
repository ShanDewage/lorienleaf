"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [language, setLanguage] = useState("ENG");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const availableLanguages = ["ENG", "SIN"];
  return (
    <header className="fixed top-0  w-full z-50 theme-bg theme-text shadow-md">
      {/* Decorative ellipse */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#7bc47f]  rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ clipPath: "ellipse(400px 400px at 0 0)" }}
      />

      <nav
        aria-label="Primary Navigation"
        className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between "
      >
        {/* Left: Menu and Lang/Currency */}
        <div className="flex items-center space-x-4 relative">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl md:hidden focus:outline-none z-50"
          >
            <i
              className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>

          {/* Mobile Menu Panel */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 z-40 transition-all">
              <ul className="flex flex-col items-center py-6 space-y-4 text-sm font-medium text-gray-700 dark:text-gray-200">
                <li>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plants"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    STORE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PAGES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}

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

        <div className="flex items-center space-x-4 relative gap-4">
          {/* Center Left Nav Links */}
          <ul className="hidden md:flex items-center space-x-8 font-nav  tracking-wide">
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
          <ul className="hidden md:flex items-center space-x-8 font-nav   tracking-wide">
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
        </div>
        {/* Right Icons */}
        <div className="flex items-center justify-end space-x-6  text-lg">
          {/* <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search plants..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abd373] dark:bg-gray-800 dark:text-white text-sm"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div> */}

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
