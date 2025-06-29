import React from "react";

function page() {
  return (
    <>
      <div className="min-h-screen px-4 py-10 theme-bg theme-text">
        <h1 className="text-4xl font-serif font-bold text-center mb-10 text-primary">
          Contact Us
        </h1>

        <p className="text-center text-muted mb-10 max-w-xl mx-auto">
          We'd love to hear from you! Whether you have a question about plants,
          need help with a product, or just want to say hello 🌿
        </p>

        <form
          className="max-w-xl mx-auto bg-surface border-soft border rounded-lg p-6 shadow-md space-y-6"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   alert("Message sent!");
          // }}
        >
          <div>
            <label htmlFor="name" className="block font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded border border-soft bg-transparent theme-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded border border-soft bg-transparent theme-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-bold mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded border border-soft bg-transparent theme-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-sm text-muted mt-10">
          © {new Date().getFullYear()} Lorien Leaf. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default page;
