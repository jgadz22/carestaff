"use client";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { employmentTypeSelection } from "@/constant";

const JobListEmploymentTypeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSelectCategory = (employment: string) => {
    let newUrl = "";

    if (employment && employment !== "All") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "employment",
        value: employment,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["employment"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={(value: string) => onSelectCategory(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Employment Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">
          All
        </SelectItem>

        {employmentTypeSelection.map((employment) => (
          <SelectItem
            value={employment.employmentType}
            key={employment.key}
            className="select-item p-regular-14"
          >
            {employment.employmentType}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default JobListEmploymentTypeFilter;
