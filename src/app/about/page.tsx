import React from "react";

function page() {
  return (
    <>
      <div className="min-h-screen px-6 py-12 theme-bg theme-text font-body">
        {/* Header */}
        <section className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            About Lorien Leaf
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Rooted in nature. Designed with purpose. Grown with love.
          </p>
        </section>

        {/* Two-column section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
            <p className="leading-relaxed text-lg">
              At <strong>Lorien Leaf</strong>, our mission is to bring nature
              closer to your everyday life. Whether it's a tiny succulent on
              your desk or a lush Monstera in your living room, we believe
              plants bring peace, purpose, and a little bit of magic.
            </p>
            <p className="text-muted">
              We promote sustainable growing, eco-conscious packaging, and
              natural beauty in all our plant collections.
            </p>
          </div>

          <div>
            <img
              src="/images/greenhouse.jpg"
              alt="Greenhouse"
              className="rounded-xl shadow-md border border-soft"
            />
          </div>
        </section>

        {/* Values section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-6">
            What We Believe In
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "🌱 Sustainability",
                desc: "We source responsibly and use eco-friendly materials to protect the planet.",
              },
              {
                title: "🌼 Beauty in Simplicity",
                desc: "Nature is elegant. We showcase it with minimalist and intentional design.",
              },
              {
                title: "🪴 Growth & Care",
                desc: "We help people grow—plants, skills, and mindfulness alike.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-surface border border-soft p-6 rounded-lg shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Join the Lorien Leaf Journey
          </h2>
          <p className="max-w-xl mx-auto text-muted mb-6">
            Whether you're just discovering the joy of plants or you're already
            a green-thumbed gardener, we're here to support your journey.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </>
  );
}

export default page;
