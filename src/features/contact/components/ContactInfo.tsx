import Title from "@/components/common/Title";
import React from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClockHour5,
} from "@tabler/icons-react";

function ContactInfo() {
  return (
    <section className="min-h-auto  section bg-transparent   py-0 px-0 flex  items-center">
      <div className="w-full mx-auto ">
        <Title
          title="Contact Details"
          subtitle="You can reach us through any of the options below."
          align="left"
          showUnderline={false}
          containerClassName="mb-[32]"
        />

        <div className="flex flex-col gap-8 mx-auto">
          <div className="bg-300 flex gap-4 text-left backdrop-blur-md border border-border-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 text-text-muted ">
              <IconMail size={48} stroke={2} />
            </div>
            <div className=" text-text-muted  ">
              <h2 className="text-xl font-semibold font-oswald mb-2 ">Email</h2>
              <p className="text-text-secondary text-base">
                hello@lorienleaf.com
              </p>
            </div>
          </div>

          <div className="bg-300 flex gap-4 text-left backdrop-blur-md border border-border-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 text-text-muted ">
              <IconPhone size={48} stroke={2} />
            </div>

            <div className=" text-text-muted  ">
              <h2 className="text-xl font-semibold font-oswald mb-2">Phone</h2>
              <p className="text-text-secondary text-base">+94 77 123 4567</p>
            </div>
          </div>

          <div className="bg-300 flex gap-4 text-left backdrop-blur-md border border-border-100 shadow-md rounded-lg p-6 hover:shadow-lg transition col-span-2">
            <div className="flex items-center gap-2 text-text-muted ">
              <IconMapPin size={48} stroke={2} />
            </div>
            <div className=" text-text-muted  ">
              <h2 className="text-xl font-semibold font-oswald mb-2">
                Store Location
              </h2>
              <p className="text-text-secondary text-base">
                Lorien Leaf Plant Store,
                <br />
                123 Botanical Street, Colombo,
                <br />
                Sri Lanka.
              </p>
            </div>
          </div>

          <div className="bg-300 flex gap-4 text-left backdrop-blur-md border border-border-100 shadow-md rounded-lg p-6 hover:shadow-lg transition col-span-2">
            <div className="flex items-center gap-2 text-text-muted ">
              <IconClockHour5 size={48} stroke={2} />
            </div>
            <div className=" text-text-muted ">
              <h2 className="text-xl font-semibold font-oswald mb-2">
                Opening Hours
              </h2>
              <p className="text-text-secondary text-base">
                Monday – Saturday: 9:00 AM – 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4">Our Address</h3>
          <p className="text-green-800">123 Greenway Lane</p>
          <p className="text-green-800">Plantville, PV 45678</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-green-900 mb-4">Contact Us</h3>
          <p className="text-green-800">
            <span className="font-semibold">Phone:</span> (123) 456-7890
          </p>
          <p className="text-green-800">
            <span className="font-semibold">Email:</span> hello@greenleaf.com
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default ContactInfo;
