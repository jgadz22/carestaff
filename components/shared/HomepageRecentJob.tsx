import React from "react";

const HomepageRecentJob = () => {
  return (
    <>
      <div className="wrapper flex-center gap-5 py-5 px-2 bg-[#e0f3f3] flex-col relative overflow-hidden rounded-2xl">
        <div className="absolute rounded-full bg-[#b9d6ea] w-[310px] h-[310px] top-[-80px] left-[-70px]"></div>
        <div className="absolute rounded-full bg-[#b9d6ea] w-[310px] h-[310px] bottom-[-80px] right-[-70px]"></div>
        <div className="text-[#e27107] h3-bold z-10">Recent Jobs</div>
        <div className="z-10 h-[500px]">Cards</div>
        <div className="w-full text-[#0099ff] p-medium-18 flex z-10 justify-end mb-14 pr-16">
          View All
        </div>
      </div>
    </>
  );
};

export default HomepageRecentJob;
