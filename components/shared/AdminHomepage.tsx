"use client";

import { adminHeaderLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import BoxButton from "./BoxButton";

const AdminHomepage = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className="flex-center w-full flex-col items-start gap-5 md:flex-row py-10">
        {adminHeaderLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.route}
              className={`${
                isActive && "text-primary-500"
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              <BoxButton
                label={link.label}
                route={link.route}
                image={link.image}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AdminHomepage;
