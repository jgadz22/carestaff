import React from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
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

const StaffPage = () => {
  return (
    <>
      <div className="wrapper">
        <p className="h3-bold uppercase">Staff List</p>

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
              <TableRow>
                <TableCell>
                  <Image
                    src="/assets/icons/edit.svg"
                    width={25}
                    height={25}
                    alt="Edit icon"
                    className="cursor-pointer"
                  />
                </TableCell>
                <TableCell>jgadz22@gmail.com</TableCell>
                <TableCell>Juan</TableCell>
                <TableCell>Dela Cruz</TableCell>
                <TableCell>ADMIN</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default StaffPage;
