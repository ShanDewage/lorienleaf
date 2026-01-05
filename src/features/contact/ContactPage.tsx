import React from "react";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Title from "@/components/common/Title";
import Image from "next/image";

function ContactPage() {
  return (
    <>
      {/* bg-gradient-to-br from-green-50 via-white to-green-100 */}
      <div className="page">
        {/* <Title
          title="contact us"
          subtitle="Have questions or just want to chat about your favorite plants? Reach out through any of the ways below. We’d love to connect 🌿"
        /> */}

        <section
          className="rounded-xs bg-300
                        px-8 py-12 shadow-sm flex flex-col text-left justify-center "
        >
          <p className="text-sm uppercase tracking-widest text-primary">
            contact us
          </p>

          <Title
            title="We’d love to hear from you! 🌿"
            showUnderline={false}
            containerClassName="mb-[0] mt-4"
            titleClassName="text-text-primary"
            align="left"
          />

          <p className="mt-2 text-text-muted  tracking-wide text-sm md:text-base max-w-3xl">
            Have questions or just want to chat about your favorite plants?
            Reach out through any of the ways below. We’d love to connect 🌿
          </p>

          <div className="absolute   w-full top-0 left-[20%]">
            <Image
              src="/images/ui/UI17.png"
              alt="Large green houseplant"
              width={720}
              height={720}
              className="w-full min-h-[60vh] max-h-[90vh] object-contain "
              priority
            />
          </div>
        </section>

        {/* <div className="flex flex-col gap-24"> */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-24 bg-200  shadow-md rounded-xs border border-border-300 py-16 px-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
