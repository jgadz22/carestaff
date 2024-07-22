import { faqsTwo } from "@/constant";
import React from "react";
import FaqOneQuestion from "./FaqOneQuestion";
import FaqOneAnswer from "./FaqOneAnswer";

const FaqTwo = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="flex text-[#e27107] h3-medium">
        2. About job applications
      </div>

      {faqsTwo.map((faq2: any) => {
        return (
          <div className="w-full flex flex-col  gap-2 md:gap-5" key={faq2.key}>
            <FaqOneQuestion question={faq2.question} bg="F9AA00" />
            <FaqOneAnswer answer={faq2.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default FaqTwo;
