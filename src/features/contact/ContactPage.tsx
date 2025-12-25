import React from "react";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

function ContactPage() {
  return (
    <>
      {/* bg-gradient-to-br from-green-50 via-white to-green-100 */}
      <div className="page   bg-bg-primary  text-text-foreground">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
