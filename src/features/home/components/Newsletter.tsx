import React from "react";

import Image from "next/image";

function Newsletter() {
  return (
    <>
      <div className="bg-bg-secondary relative overflow-x-hidden min-h-80 flex flex-col items-center justify-center px-6 ">
        <Image
          alt="Large green banana leaf on the left side of the page"
          className="absolute top-0 left-0 h-[300px] w-auto object-contain select-none pointer-events-none"
          src="/images/ui/NL2.png"
          width={150}
          height={300}
        />
        <Image
          alt="Large green plant with long leaves on the right side of the page"
          className="absolute bottom-0 right-0 h-[300px] w-auto object-contain select-none pointer-events-none"
          src="/images/ui/NL1.png"
          width={150}
          height={300}
        />
        <div className=" mx-auto text-center flex flex-col items-center justify-center ">
          <h2 className=" title-5xl mb-4 relative inline-flex items-center ">
            Subscribe Our Newsletter
          </h2>
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
          <p className="text-gray-400 mb-8 text-sm sm:text-base">
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
              className="flex-grow rounded-l-full border outline border-color: var(--border)  px-6 py-3 text-gray-400 placeholder-gray-400 focus:outline-none"
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
