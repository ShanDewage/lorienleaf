import React from "react";
import MissionSection from "./components/MissionSection";
import StorySection from "./components/StorySection";
import VisualSection from "./components/VisualSection";
import Title from "@/components/common/Title";

function AboutPage() {
  return (
    <>
      <div className="page  bg-bg-primary text-text-foreground ">
        <section className="text-center mb-0">
          <Title className=" mb-[12px]">About Lorien Leaf</Title>
          <p className="max-w-2xl mx-auto text-text-muted text-lg">
            Rooted in nature. Designed with purpose. Grown with love.
          </p>
        </section>

        {/* <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">
              Our Mission
            </h2>
            <p className="leading-relaxed text-lg">
              At <strong>Lorien Leaf</strong>, our mission is to bring nature
              closer to your everyday life. Whether it's a tiny succulent on
              your desk or a lush Monstera in your living room, we believe
              plants bring peace, purpose, and a little bit of magic.
            </p>
            <p className="text-text-muted">
              We promote sustainable growing, eco-conscious packaging, and
              natural beauty in all our plant collections.
            </p>
          </div>

          <div>
            <Image
              src="/images/ui/UI2.png"
              alt="Greenhouse"
              className="rounded-xl shadow-md border border-border-100"
              width={800}
              height={600}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-6">
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
                className="bg-card-bg border border-border-100 p-6 rounded-lg shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-bold mb-2 text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-20">
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
            Join the Lorien Leaf Journey
          </h2>
          <p className="max-w-xl mx-auto text-text-muted mb-6">
            Whether you're just discovering the joy of plants or you're already
            a green-thumbed gardener, we're here to support your journey.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
          >
            Get in Touch
          </a>
        </section> */}

        <MissionSection />
        <StorySection />
        <VisualSection />
      </div>
    </>
  );
}

export default AboutPage;
