import ViewJobDetailsLeft from "@/components/shared/ViewJobDetailsLeft";
import ViewJobDetailsRight from "@/components/shared/ViewJobDetailsRight";
import React from "react";

const ViewJobDetails = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row">
      <div className="flex w-full md:w-1/2">
        <ViewJobDetailsLeft />
      </div>
      <div className="flex w-full md:w-1/2">
        <ViewJobDetailsRight />
      </div>
    </div>
  );
};

export default ViewJobDetails;
