"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getAllUsers } from "@/lib/actions/user.actions";
import { IUser } from "@/lib/database/models/user.model";
import Dropdown from "@/components/shared/Dropdown";
import Tablerow from "@/components/shared/Tablerow";

const StaffPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers({
          query: "",
          position: "",
          page: 1,
          limit: 10,
        });
        setUsers(usersData?.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="wrapper">
        <p className="h3-bold uppercase">Users List</p>

        <Separator className="h-2 my-5 bg-[#53D1D1]" />

        <div className="flex-between gap-5 md:gap-10">
          <div className="flex gap-3 relative w-3/4">
            <Input
              type="text"
              placeholder="Search Staff..."
              className=" pl-9"
            />
            <Image
              src="/assets/icons/search.svg"
              width={25}
              height={25}
              alt="Search icon"
              className="absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground"
            />
          </div>
          <Button className="flex-center bg-[#103FEF] h-10 w-1/4 rounded-md">
            Search
          </Button>
        </div>

        <div className="flex-center py-5">
          <Table>
            <TableCaption>A list of your recent added staff.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length > 0 ? (
                users.map((user) => {
                  return <Tablerow user={user} />;
                })
              ) : (
                <TableRow>
                  <TableCell>No Records</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default StaffPage;
