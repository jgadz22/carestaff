import Image from "next/image";
import React from "react";

const HomepageHowToApply = () => {
  return (
    <>
      <div className="flex flex-col w-full my-10 gap-5 md:gap-10">
        <div className="flex relative w-full h-[88px] ">
          <Image
            src="/assets/images/right_dog.avif"
            height={28}
            width={38}
            alt="dog"
            className="flex absolute z-10 right-0 top-0"
          />
          <div className="w-[calc(100%-37px)] h-[88px] flex-center bg-[#5dc9c5] text-white rounded-lg z-50">
            <p className="h3-bold">How to apply?</p>
          </div>
        </div>
        <div className="flex-center h-[200px]">Cards</div>
      </div>
    </>
  );
};

export default HomepageHowToApply;
