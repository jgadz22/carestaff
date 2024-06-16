import React from "react";
import SafetyPointsCollection from "./SafetyPointsCollection";

const HomepageSafetyPoints = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-5">
        <div className="w-full h-[88px] flex flex-center relative">
          <div className="flex pl-[36px] bg-orange-stripe-img bg-contain w-[calc(100%-34px)] h-[88px] z-20 absolute right-0 rounded-xl"></div>
          <div className="flex bg-left-dog-img bg-contain bg-left h-[88px] w-[36px] absolute left-0 z-10"></div>
          <div className="flex text-white p-bold-16 md:h3-bold z-30 pl-[36px]">
            CARE STAFF SERVICES SAFETY POINTS
          </div>
        </div>

        <div className="w-full flex">
          <SafetyPointsCollection />
        </div>
      </div>
    </>
  );
};

export default HomepageSafetyPoints;
