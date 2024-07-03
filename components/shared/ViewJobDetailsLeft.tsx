import Image from "next/image";
import React from "react";

const ViewJobDetailsLeft = ({ jobDetails, employer }: any) => {
  console.log(employer.imageUrl);

  return (
    <div className="flex flex-col w-full gap-5 md:gap-10">
      <div className="">
        <p>Job Details:</p>
      </div>
      {employer.map((employerDetail: any) => (
        <div className="w-full" key={employerDetail._id}>
          <Image
            src={
              employerDetail.imageUrl
                ? employerDetail.imageUrl
                : "/assets/images/No_Image.png"
            }
            alt={employerDetail.companyName}
            width={250}
            height={250}
            className="max-w-full object-left object-contain"
          />
        </div>
      ))}

      <div className="">
        <p>Job Title: {jobDetails?.jobType}</p>
      </div>
      <div className="">
        <p>Employer Name: {jobDetails?.companyName}</p>
      </div>
      <div className="">
        <p>Location: {jobDetails?.workLocation}</p>
      </div>
      <div className="">
        <p>Company Number: {jobDetails?.companyNumber}</p>
      </div>
      <div className="">
        <p>Shifts: </p>
      </div>
      <div className="">
        <p>Job Description:</p>
      </div>
      <div className="">
        <p>Qualifications:</p>
      </div>
      <div className="">
        <p>Salary Details:</p>
      </div>
      <div className="">
        <p>Employment Type:</p>
      </div>
      <div className="">
        <p>Wage Details:</p>
      </div>
      <div className="">
        <p>Holiday Details:</p>
      </div>
      <div className="">
        <p>Person in Charge:</p>
      </div>
      <div className="">
        <p>Points:</p>
      </div>
    </div>
  );
};

export default ViewJobDetailsLeft;
