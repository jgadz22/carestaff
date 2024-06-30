import ContactUsSection from "@/components/shared/ContactUsSection";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="w-full flex">
        <section className="w-full flex flex-col gap-5 md:gap-10">
          <div className="w-full flex-center bg-orange-stripe-img bg-contain bg-center h-[50px] md:h-[80px] text-white p-bold-20 md:h3-bold">
            Contact Us
          </div>
          <div className="w-full flex-center">
            <ContactUsSection />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
