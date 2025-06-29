import React from "react";

function Newsletter() {
  return (
    <>
      <div className="bg-[#f3f4f2] relative overflow-x-hidden min-h-screen flex items-center justify-center px-6 py-24">
        <img
          alt="Large green banana leaf on the left side of the page"
          className="absolute top-0 left-0 h-[300px] w-auto object-contain select-none pointer-events-none"
          src="https://storage.googleapis.com/a1aa/image/8d565a02-1bee-4e8e-c107-ca1e2f8ea24e.jpg"
          width={150}
          height={300}
        />
        <img
          alt="Large green plant with long leaves on the right side of the page"
          className="absolute bottom-0 right-0 h-[300px] w-auto object-contain select-none pointer-events-none"
          src="https://storage.googleapis.com/a1aa/image/91363c04-fdc4-4768-4a23-84c176a01888.jpg"
          width={150}
          height={300}
        />
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-flex items-center font-serif">
            Subscribe Our Newsletter
            <span className="mx-6 flex items-center">
              <span className="block w-24 h-px bg-gray-300"></span>
              <svg
                className="mx-3 text-green-600"
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"></path>
              </svg>
              <span className="block w-24 h-px bg-gray-300"></span>
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Enter Your email address to join our mailing list and keep yourself
            update
          </p>
          <form
            className="flex max-w-md mx-auto"
            // onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your mail..."
              className="flex-grow rounded-l-full px-6 py-3 text-gray-400 placeholder-gray-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-r-full px-6 py-3 flex items-center gap-2 shadow-md"
            >
              Shop Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
