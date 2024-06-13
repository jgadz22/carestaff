"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import UserFooter from "./UserFooter";

const PageFooter = () => {
  const pathname = usePathname();
  const [isAdminPath, setIsAdminPath] = useState(false);

  useEffect(() => {
    setIsAdminPath(pathname.includes("adminops"));
    console.log("pathname: ", isAdminPath);
  }, [pathname]);
  return <>{isAdminPath ? <Footer /> : <UserFooter />}</>;
};

export default PageFooter;
