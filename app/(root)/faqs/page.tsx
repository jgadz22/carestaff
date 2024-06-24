"use client";

import FaqFive from "@/components/shared/FaqFive";
import FaqFour from "@/components/shared/FaqFour";
import FaqOne from "@/components/shared/FaqOne";
import FaqThree from "@/components/shared/FaqThree";
import FaqTwo from "@/components/shared/FaqTwo";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { faqsLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Faqs = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex-center flex-col gap-5 md:gap-10 mb-5 md:mb-10">
      <div className="w-full flex-center bg-orange-stripe-img bg-contain bg-center h-[50px] md:h-[80px] text-white p-bold-20 md:h3-bold">
        Frequently Ask Question
      </div>
      <div className="wrapper flex gap-5 md:gap-10">
        <div className="hidden lg:w-1/3 lg:flex relative">
          <div className="w-full flex-center top-[50%]  h-[450px] flex-col bg-slate-100 py-5 px-10 rounded-2xl border border-slate-300 shadow-lg sticky">
            <p className="flex mb-2 md:mb-5 p-medium-24 md:h3-medium text-[#e27107]">
              Questions
            </p>
            <div className="w-full flex">
              <Table>
                <TableBody>
                  {faqsLinks.map((faq: any) => {
                    const isActive = pathname === faq.sectionLink;
                    return (
                      <TableRow key={faq.key}>
                        <TableCell
                          className={`${
                            isActive && "text-primary-500"
                          } flex p-medium-16 sm:p-medium-12 md:p-medium-14`}
                        >
                          <Link href={faq.sectionLink}>
                            <p>{faq.section}</p>
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-5 md:gap-10">
          <section
            id="useofwebsite"
            className="w-full flex scroll-mt-40 md:scroll-mt-60"
          >
            <FaqOne />
          </section>

          <section
            id="aboutjobapplication"
            className="w-full flex scroll-mt-40 md:scroll-mt-60"
          >
            <FaqTwo />
          </section>

          <section
            id="employeebenefits"
            className="w-full flex scroll-mt-40 md:scroll-mt-60"
          >
            <FaqThree />
          </section>

          <section
            id="temporaryemployment"
            className="w-full flex scroll-mt-40 md:scroll-mt-60"
          >
            <FaqFour />
          </section>

          <section
            id="leavingdorjobhunters"
            className="w-full flex scroll-mt-40 md:scroll-mt-60"
          >
            <FaqFive />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
