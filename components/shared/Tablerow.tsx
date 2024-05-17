import React, { useEffect, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { useRouter } from "next/navigation";
import { updatesUser } from "@/lib/actions/user.actions";
import { useToast } from "@/components/ui/use-toast";

const Tablerow = ({ user }: { user: any }) => {
  const [role, setRole] = useState(user.position);
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  const { toast } = useToast();

  const handleOnChange = (value: any) => {
    setRole(value);
  };

  useEffect(() => {
    setIsDisabled(role === user.position);
  }, [role, user.position]);

  const onUpdate = async () => {
    try {
      const updatedEvent = await updatesUser({
        userId: user._id,
        user: { ...user, position: role },
        path: `/adminops/user`,
      });

      if (updatedEvent) {
        toast({
          variant: "success",
          title: "Successfully",
          description: "Updating the Role of User.",
        });
        router.push(`/adminops/user`);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error Saving Changes",
        description: "Contact the Developer.",
      });
      console.error("Update error:", error);
    }
  };

  return (
    <TableRow key={user._id}>
      <TableCell className="text-center">
        <button
          onClick={onUpdate}
          disabled={isDisabled}
          className={
            isDisabled
              ? "p-1"
              : "p-1 hover:border-2 hover:border-green-400 rounded-md"
          }
        >
          <Image
            src="/assets/icons/edit.svg"
            width={25}
            height={25}
            alt="Edit icon"
            className={isDisabled ? "" : "cursor-pointer"}
          />
        </button>
      </TableCell>
      <TableCell className="text-center">{user.email}</TableCell>
      <TableCell className="text-center">{user.firstName}</TableCell>
      <TableCell className="text-center">{user.lastName}</TableCell>
      <TableCell className="text-center">
        <Dropdown onChangeHandler={handleOnChange} value={role} />
      </TableCell>
    </TableRow>
  );
};

export default Tablerow;
