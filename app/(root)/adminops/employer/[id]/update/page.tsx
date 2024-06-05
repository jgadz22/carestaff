import EmployerForm from "@/components/shared/EmployerForm";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const UpdateEmployer = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  return (
    <>
      <section>
        <div className="wrapper">
          <p className="h3-bold uppercase">Edit Employer Info</p>

          <Separator className="h-2 my-5 bg-[#53D1D1]" />
        </div>
      </section>
      <div className="flex-center gap-3 relative w-full px-5">
        <EmployerForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEmployer;
