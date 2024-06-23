import { faqsFive } from "@/constant";
import React from "react";

const FaqFive = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">
        5. People who are leaving or looking for a job
      </div>

      {faqsFive.map((faq5: any) => {
        return (
          <div className="w-full flex flex-col gap-2 md:gap-5" key={faq5.key}>
            <div className="w-full flex rounded-md h-[70px] md:h-[50px] overflow-hidden">
              <div className="w-[50px] md:w-[150px] bg-[#92C017]"></div>
              <div className="w-full flex bg-faq-photo-img bg-contain  items-center">
                <p className="w-full flex px-2 md:px-5 p-medium-12 md:p-medium-14 lg:p-medium-16">
                  {faq5.question}
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <p className="w-full flex  p-regular-12 md:p-regular-14">
                {faq5.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqFive;
