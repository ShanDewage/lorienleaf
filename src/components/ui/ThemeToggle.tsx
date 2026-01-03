"use client";

import { useThemeContext } from "@/context/ThemeProvider";
import {
  IconLeaf2,
  IconLeaf,
  IconBrightnessDown,
  IconMoonStars,
} from "@tabler/icons-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";
  return (
    <>
      <label className="relative inline-flex cursor-pointer items-center">
        {/* Checkbox */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={toggleTheme}
        />

        {/* Switch background */}

        {/* rounded-full shadow-md peer-checked:bg-emerald-500 relative bg-orange-400  w-8 h-8  */}
        <div
          className="
         flex items-center justify-center
          duration-300
          
          peer-focus:outline-none
        "
        >
          {/* Knob */}
          {/* rounded-full bg-gray-50   absolute top-1 left-1  h-6 w-6 */}
          <span
            className="
          
           
            flex items-center justify-center
            duration-500
            peer-hover:scale-75
            peer-checked:translate-x-0
            peer-checked:rotate-0
            -rotate-180
          "
            style={{
              transform: isDark
                ? "translateX(0) rotate(0deg)"
                : "translateX(0) rotate(-180deg)",
            }}
          >
            {isDark ? (
              <IconBrightnessDown size={24} className="text-blue-500" />
            ) : (
              <IconMoonStars size={24} className="text-yellow-500" />
            )}
          </span>
        </div>
      </label>
    </>
  );
}
