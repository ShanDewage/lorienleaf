"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {/* <button
        onClick={toggleTheme}
        className="p-2 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button> */}
      <label
        className="cursor-pointer relative h-[1.5em] w-[3em] rounded-full bg-[hsl(0,0%,7%)] shadow"
        onClick={toggleTheme}
      >
        <span className="absolute inset-[0.05em] rounded-full border border-[hsl(0,0%,25%)]" />

        <div className="absolute left-[0.25em] top-1/2 flex h-[1em] w-[1em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow">
          <div className="h-[0.8em] w-[0.8em] rounded-full bg-[hsl(0,0%,7%)] shadow" />
        </div>

        <div className="absolute right-[0.25em] top-1/2 h-[0.15em] w-[0.8em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow" />

        <input
          type="checkbox"
          className="peer h-[1em] w-[1em] opacity-0"
          checked={theme === "dark"}
          readOnly
        />

        <span
          className={`absolute top-1/2 flex h-[1.2em] w-[1.2em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow duration-300
      ${theme === "dark" ? "left-[calc(100%-1.4em)]" : "left-[0.1em]"}`}
        >
          <span className="relative h-full w-full rounded-full">
            <span className="absolute inset-[0.05em] rounded-full border border-[hsl(0,0%,50%)]" />
          </span>
        </span>
      </label>
    </>
  );
}
