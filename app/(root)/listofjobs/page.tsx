import JobsList from "@/components/shared/JobsList";
import { SearchParamProps } from "@/types";
import React from "react";

const ListOfJobs = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";

  return (
    <div className="w-full flex flex-col mb-5">
      <div className="w-full flex-center bg-orange-stripe-img bg-contain bg-center h-[50px] md:h-[80px] text-white p-bold-20 md:h3-bold">
        List of Jobs
      </div>
      <div className="w-full">
        <JobsList page={page} searchText={searchText} />
      </div>
    </div>
  );
};

export default ListOfJobs;
