import { howToApply } from "@/constant";
import React from "react";
import HowToApplyCard from "./HowToApplyCard";

const HowToApplyCollection = () => {
  return (
    <>
      <div className="flex-center flex-col w-full">
        <ul className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-7 lg:flex-row lg:justify-center">
          {howToApply.map(async (howToApplyStep: any) => {
            return (
              <li
                key={howToApplyStep.key}
                className="flex justify-center md:justify-none"
              >
                <HowToApplyCard howToApplyStep={howToApplyStep} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HowToApplyCollection;
