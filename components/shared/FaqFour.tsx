import { faqsFour } from "@/constant";
import React from "react";

const FaqFour = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">
        4. Those who have started temporary employment
      </div>

      {faqsFour.map((faq4: any) => {
        return (
          <div className="w-full flex flex-col  gap-2 md:gap-5" key={faq4.key}>
            <div className="w-full flex rounded-md h-[70px] md:h-[50px] overflow-hidden">
              <div className="w-[50px] md:w-[150px] bg-[#49CAE6]"></div>
              <div className="w-full flex bg-faq-photo-img bg-contain  items-center">
                <p className="w-full flex px-2 md:px-5 p-medium-12 md:p-medium-14 lg:p-medium-16">
                  {faq4.question}
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <p className="w-full flex  p-regular-12 md:p-regular-14">
                {faq4.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqFour;
