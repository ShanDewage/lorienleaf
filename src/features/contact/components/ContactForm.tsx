import Title from "@/components/common/Title";
import React from "react";

function ContactForm() {
  return (
    <section className="bg-green-50 py-16 mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <Title>Get in Touch</Title>

        {/* <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
          Get in Touch
        </h2> */}
        <p className="text-green-800 mb-8 text-center">
          Have questions about our plants or orders? Send us a message!
        </p>

        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-green-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-green-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-green-700 font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-green-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
