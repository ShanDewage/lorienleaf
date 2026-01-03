import React from "react";

import Image from "next/image";
import Title from "@/components/common/Title";

function Newsletter() {
  return (
    <>
      <div className="bg-200 relative overflow-x-hidden min-h-80 flex flex-col items-center justify-center px-6 ">
        {/* <Image
          alt="Large green banana leaf on the left side of the page"
          className="absolute  bg-bottom bottom-0 left-0 min-h-80 w-auto object-contain select-none pointer-events-none"
          src="/images/ui/UI12.jpg"
          width={2000}
          height={800}
        /> */}
        <Image
          alt="Large green banana leaf on the left side of the page"
          className="absolute top-0 left-0 h-[320px] w-auto object-contain select-none pointer-events-none"
          src="/images/ui/NL2.png"
          width={300}
          height={300}
        />
        <Image
          alt="Large green plant with long leaves on the right side of the page"
          className="absolute bottom-0 right-0 h-[460px] w-auto object-contain select-none pointer-events-none"
          src="/images/ui/NL1.png"
          width={300}
          height={300}
        />
        <div className="z-10 mx-auto text-center flex flex-col items-center justify-center ">
          <Title
            title=" Join Our Plant Community"
            subtitle=" Get plant care tips, exclusive deals, and new arrivals first."
            containerClassName="mb-[24px]"
          />
          {/* <h2 className=" title-5xl mb-4 relative inline-flex items-center ">
            Join Our Plant Community
          </h2> */}
          {/* <span className="mx-6 flex items-center">
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
            Get plant care tips, exclusive deals, and new arrivals first.
          </p> */}
          <form
            className="flex max-w-md min-w-xs mx-auto gap-0"
            // onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your mail..."
              className="flex-grow rounded-l-sm border  border-text-secondary  px-4  py-2  text-text-primary placeholder-gray-400 shadow-sm focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-r-sm px-6 py-2 flex items-center  shadow-sm"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
