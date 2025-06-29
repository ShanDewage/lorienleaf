/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        border: "var(--border)",
        muted: "var(--muted-text)",
        card: "var(--card-bg)",
        link: "var(--link)",
      },
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  darkMode: "class", // Enable class-based dark mode
  plugins: [],
};
