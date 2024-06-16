import Link from "next/link";
import React from "react";
import Collection from "./Collection";

const HomepageRecentJob = ({ jobsData }: any) => {
  return (
    <>
      <div className="wrapper flex-center w-full gap-5 py-5 px-2 bg-[#e0f3f3] flex-col relative overflow-hidden rounded-2xl">
        <div className="absolute rounded-full bg-[#b9d6ea] w-[310px] h-[310px] top-[-80px] left-[-70px]"></div>
        <div className="absolute rounded-full bg-[#b9d6ea] w-[310px] h-[310px] bottom-[-80px] right-[-70px]"></div>
        <div className="text-[#e27107] h3-bold z-10">Recent Jobs</div>
        <div className="flex z-10 w-full">
          <Collection
            jobsData={jobsData?.data}
            emptyTitle="No Jobs have been created yet"
            emptyStateSubtext="Go create some now"
            limit={3}
          />
        </div>

        <div className="w-full text-[#0099ff] p-medium-18 flex z-10 justify-end mb-5 md:mb-14 pr-16">
          <Link href="/listofjobs">View All</Link>
        </div>
      </div>
    </>
  );
};

export default HomepageRecentJob;
