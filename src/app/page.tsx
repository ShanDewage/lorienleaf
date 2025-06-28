// src/app/page.tsx
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-offWhite text-darkGreen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] text-center px-6">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          Embrace the Beauty of Nature 🌿
        </h1>
        <div className="theme-bg theme-text p-4 rounded shadow">
          This background and text color will follow the theme.
        </div>

        <p className="text-lg max-w-xl text-gray-700 mb-8">
          Discover rare plants, care guides, and botanical wonders curated for
          nature lovers and green thumbs.
        </p>
        <button className="bg-plantGreen text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
          Explore Plants
        </button>
        <Image
          src="/hero-plant.png"
          alt="Lush green plant"
          width={500}
          height={500}
          className="absolute bottom-0 right-0 opacity-20 hidden md:block"
        />
      </section>

      {/* Featured Plants Section */}
      <section className="py-16 px-6 bg-[#f3f4ef]">
        <h2 className="text-3xl font-serif text-center mb-10">
          Featured Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Fiddle Leaf Fig", "Snake Plant", "Monstera"].map((name, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="h-40 bg-green-100 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Low maintenance • Bright indirect light
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-serif mb-6">About Botanica</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We’re passionate plant people bringing you curated greenery with
          guidance. Whether you’re a beginner or a botanical pro, Botanica helps
          you grow joyfully 🌱
        </p>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-6 bg-plantGreen text-white text-center">
        <h2 className="text-2xl font-serif mb-4">Stay in the Loop</h2>
        <p className="mb-6">
          Sign up for plant care tips, new arrivals, and more.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md text-black w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-darkGreen text-white px-5 py-2 rounded-md hover:bg-black transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
