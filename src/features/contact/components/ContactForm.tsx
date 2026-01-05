"use client";

import Title from "@/components/common/Title";
import React from "react";

function ContactForm() {
  return (
    <section className="min-h-auto bg-300 section  shadow-md rounded-lg border border-border-100 py-12 px-8">
      <div className="max-w-3xl mx-auto px-6">
        <Title
          title="Get in Touch"
          subtitle="We’re happy to help with orders, plants, or any questions you have."
          // subtitle="Have questions about our plants or orders? Send us a message!"
          align="left"
          showUnderline={false}
          containerClassName="mb-[32]"
        />

        {/* <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
          Get in Touch
        </h2> */}
        {/* <p className="text-green-800 mb-8 text-center">
          Have questions about our plants or orders? Send us a message!
        </p> */}

        <form className="  space-y-6">
          <div>
            <label htmlFor="name" className="cpLabel">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="cpInput"
            />
          </div>

          <div>
            <label htmlFor="email" className="cpLabel">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="cpInput"
            />
          </div>

          <div>
            <label htmlFor="subject" className="cpLabel">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="cpInput"
            />
          </div>

          <div>
            <label htmlFor="message" className="cpLabel">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="cpInput"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary  hover:bg-link text-white font-medium px-4 py-2 rounded-xs shadow-lg flex items-center gap-2 text-sm"

            // className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
