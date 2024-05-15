import React from "react";
import { Separator } from "@/components/ui/separator";

import { getAllUsers } from "@/lib/actions/user.actions";
import { SearchParamProps } from "@/types";
import Search from "@/components/shared/Search";
import UserTable from "@/components/shared/UserTable";

const StaffPage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";

  const usersData = await getAllUsers({
    query: searchText,
    page,
    limit: 2,
  });

  return (
    <>
      <div className="wrapper">
        <p className="h3-bold uppercase">Users List</p>

        <Separator className="h-2 my-5 bg-[#53D1D1]" />
        <div className="flex gap-3 relative w-full">
          <Search />
        </div>

        <div className="flex-center py-5">
          <UserTable usersData={usersData?.data} />
        </div>
      </div>
    </>
  );
};

export default StaffPage;
