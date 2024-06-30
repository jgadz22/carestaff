import Image from "next/image";
import React from "react";
import ContactUsEmail from "./ContactUsEmail";
import ContactUsForRecruiters from "./ContactUsForRecruiters";

const ContactUsSection = () => {
  return (
    <div className="w-full wrapper flex-center flex-col gap-5 md:gap-10 mb-5 md:mb-10">
      <div className="flex-center flex-col max-w-[300px] md:max-w-[600px] gap-5 md:gap-10">
        <Image
          src="/assets/images/contact-us-photo.png"
          width={600}
          height={480}
          alt="Profile Picture"
          className="flex rounded-2xl"
        />
        <div className="w-full">
          <p>
            For inquiries about how to use the site and employment for job
            seekers, inquiries about recruitment from companies considering
            hiring, requests for materials, etc., please fill out the form below
            and send it.
          </p>
        </div>

        <div className="w-full">
          <ContactUsEmail />
        </div>
      </div>

      <div className="w-full flex">
        <ContactUsForRecruiters />
      </div>
    </div>
  );
};

export default ContactUsSection;
