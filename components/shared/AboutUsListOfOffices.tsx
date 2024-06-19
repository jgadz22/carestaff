import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { aboutUsTableSecond } from "@/constant";

const AboutUsListOfOffices = () => {
  return (
    <div className="flex-center flex-col gap-5 md:gap-10 wrapper">
      <div className="w-full flex items-center pl-2 md:pl-5 bg-blue-stripe-img bg-content bg-center h-[50px] border border-[#53d1d1] text-[#53d1d1] p-bold-16 md:h5-bold">
        List of Offices
      </div>
      <div className="">
        <Table>
          <TableBody>
            {aboutUsTableSecond.map((tablerowtwo: any) => {
              return (
                <TableRow key={tablerowtwo.key}>
                  <TableCell className="bg-[#ede8e8] p-regular-12 md:p-regular-16">
                    {tablerowtwo.office}
                  </TableCell>
                  <TableCell className="p-regular-12 md:p-regular-16">
                    <div className="flex flex-col">
                      <p className="">{tablerowtwo.address}</p>
                      <p className="">{tablerowtwo.telNumber}</p>
                      <p className="">{tablerowtwo.email}</p>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AboutUsListOfOffices;
