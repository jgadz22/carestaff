import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const JobListPage = () => {
  return (
    <div className="wrapper">
      <p className="h3-bold uppercase">Job List</p>

      <Separator className="h-2 my-5 bg-[#53D1D1]" />
      <div className="flex gap-3 relative w-full">
        <Search placeholder="Search Job..." />
        <Button>
          <Link href="/adminops/joblist/importfile">Import files</Link>
        </Button>
        <Button>Create new Job</Button>
      </div>
    </div>
  );
};

export default JobListPage;
