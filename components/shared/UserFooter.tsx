import React from "react";

const UserFooter = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-[#53D1D1] h-[35px]"></div>

      <div className="w-full bg-[#ecfbfb]">
        <div className="wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          <div className="">
            <p className="flex text-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>Home
            </p>
          </div>
          <div className="">
            <p className="flex text-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>Jobs
            </p>
          </div>
          <div className="">
            <p className="flex text-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>About Us
            </p>
          </div>
          <div className="">
            <p className="flex text-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>FAQS
            </p>
          </div>
          <div className="">
            <p className="flex text-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              <span className="text-[#53d1d1] h5-bold">{">"}</span>Contact us
            </p>
          </div>
          <div className="">
            <p className="flex text-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              Site Terms of Use
            </p>
            <p className="flex text-center justify-center md:justify-start p-semibold-18 text-[#e27107]">
              Privacy Policy
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>

      <div className="w-full bg-[#53D1D1]">
        <div className="wrapper flex-center">
          <p className="text-white p-regular-16">
            Copyright © 2024 HirocareerStaff Corporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
