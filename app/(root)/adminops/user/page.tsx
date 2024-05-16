import React from "react";
import { Separator } from "@/components/ui/separator";

import { getAllUsers, getUserById } from "@/lib/actions/user.actions";
import { SearchParamProps } from "@/types";
import Search from "@/components/shared/Search";
import UserTable from "@/components/shared/UserTable";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const StaffPage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";

  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  const user = await getUserById(userId);

  const usersData = await getAllUsers({
    query: searchText,
    page,
    limit: 2,
  });

  return (
    <>
      <div className="wrapper">
        {user.position === "Staff" ? (
          <>
            <div className="w-full flex-center">
              <p>
                Your not allowed to go here. Please go back to{" "}
                <Link
                  href="/adminops"
                  className="p-bold-16 underline underline-offset-8"
                >
                  Homepage
                </Link>
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="h3-bold uppercase">Users List</p>

            <Separator className="h-2 my-5 bg-[#53D1D1]" />
            <div className="flex gap-3 relative w-full">
              <Search />
            </div>

            <div className="flex-center py-5">
              <UserTable usersData={usersData?.data} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StaffPage;
