import { getAllJobs } from "@/lib/actions/jobs.actions";
import React from "react";
import JobsListTable from "./JobsListTable";
import JobsListCollection from "./JobsListCollection";
import Pagination from "./Pagination";
import Search from "./Search";

const JobsList = async ({ page, searchText }: any) => {
  const jobsData = await getAllJobs({
    query: searchText,
    page,
    limit: 10,
  });

  const totalPages = jobsData?.totalPages ? jobsData?.totalPages : 0;

  const jobsDataRight = await getAllJobs({
    query: "",
    page: 1,
    limit: 3,
  });

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex bg-[#53d1d1] py-10">
        <div className="wrapper">
          <Search placeholder="Search Job Title..." />
        </div>
      </div>
      <section className="wrapper flex flex-col md:flex-row py-3 md:py-10">
        <div className="w-full lg:w-3/5 flex items-center flex-col px-3 md:px-5">
          <JobsListTable jobsData={jobsData?.data} />
          {totalPages > 1 && (
            <Pagination
              urlParamName="page"
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
        <div className="hidden lg:w-3/5 lg:flex relative">
          <div className="w-full flex-center flex-col py-5 px-10 rounded-2xl sticky">
            <JobsListCollection
              jobsData={jobsDataRight?.data}
              emptyTitle="No Jobs have been created yet"
              emptyStateSubtext="Go create some now"
              limit={3}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsList;
