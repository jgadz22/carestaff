import { faqsTwo } from "@/constant";
import React from "react";

const FaqTwo = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">
        2. About job applications
      </div>

      {faqsTwo.map((faq2: any) => {
        return (
          <div className="w-full flex flex-col  gap-2 md:gap-5" key={faq2.key}>
            <div className="w-full flex rounded-md h-[70px] md:h-[50px] overflow-hidden">
              <div className="w-[50px] md:w-[150px] bg-[#F9AA00]"></div>
              <div className="w-full flex bg-faq-photo-img bg-contain  items-center">
                <p className="w-full flex px-2 md:px-5 p-medium-12 md:p-medium-14 lg:p-medium-16">
                  {faq2.question}
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <p className="w-full flex  p-regular-12 md:p-regular-14">
                {faq2.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqTwo;
