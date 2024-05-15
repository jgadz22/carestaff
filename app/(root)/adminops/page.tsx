import AdminHomepage from "@/components/shared/AdminHomepage";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminPage = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  console.log(userId);
  return (
    <>
      <div className="">
        <AdminHomepage />
      </div>
    </>
  );
};

export default AdminPage;
