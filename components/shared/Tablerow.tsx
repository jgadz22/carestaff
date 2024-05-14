import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { useRouter } from "next/navigation";
import { updatesUser } from "@/lib/actions/user.actions";

const Tablerow = ({ user }: any) => {
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleOnChange = (value: any) => {
    setRole(value);
  };

  useEffect(() => {
    console.log(role);
  }, [role]);

  const onUpdate = async () => {
    try {
      const updatedEvent = await updatesUser({
        userId: user._id,
        user: { ...user, position: role },
        path: `/adminops/staff`,
      });

      if (updatedEvent) {
        router.push(`/adminops/staff`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TableRow key={user._id}>
        <TableCell>
          <button onClick={onUpdate}>
            <Image
              src="/assets/icons/edit.svg"
              width={25}
              height={25}
              alt="Edit icon"
              className="cursor-pointer"
            />
          </button>
        </TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.firstName}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>
          <Dropdown onChangeHandler={handleOnChange} value={user.position} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default Tablerow;
