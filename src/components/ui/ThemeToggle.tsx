"use client";

import { useThemeContext } from "@/context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <label
        className="cursor-pointer relative h-[1.5em] w-[3em] rounded-full bg-[hsl(0,0%,7%)] shadow"
        onClick={toggleTheme}
      >
        {/* Border ring */}
        <span className="absolute inset-[0.05em] rounded-full border border-[hsl(0,0%,25%)]" />

        {/* Hidden checkbox for accessibility */}
        <input
          type="checkbox"
          className="peer absolute h-full w-full opacity-0"
          checked={theme === "dark"}
          readOnly
        />

        {/* Switch knob with tree icon */}
        <span
          className={`absolute top-1/2 flex h-[1.2em] w-[1.2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow duration-300
        ${theme === "dark" ? "left-[calc(100%-1.4em)]" : "left-[0.1em]"}`}
        >
          {theme === "dark" ? (
            // 🌲 Dark mode tree icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="h-[0.9em] w-[0.9em]"
            >
              <path d="M12 2C11 3 9 5 9 6h2L7 13h3l-2 4h10l-2-4h3l-4-7h2c0-1-2-3-3-4s-1-1-2 0zM11 21h2v-2h-2v2z" />
            </svg>
          ) : (
            // 🌳 Light mode tree icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="forestgreen"
              className="h-[0.9em] w-[0.9em]"
            >
              <path d="M12 2a5 5 0 00-4 8 4 4 0 00-3 4c0 2.21 1.79 4 4 4h1v2h2v-2h1a4 4 0 004-4 4 4 0 00-3-4 5 5 0 00-4-8z" />
            </svg>
          )}
        </span>
      </label>
    </>
  );
}
