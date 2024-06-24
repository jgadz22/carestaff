import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ recentJob, employerData }: any) => {
  return (
    <div className="flex max-w-[25rem] border border-slate-300 flex-col gap-2 p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl">
      <div className="flex w-full h-[70px] mb-2">
        {employerData && employerData.length > 0 ? (
          employerData.map((employer: any) => {
            return (
              <div className="flex w-full" key={employer._id}>
                <Image
                  src={
                    employer.imageUrl
                      ? employer.imageUrl
                      : "/assets/images/No_Image.png"
                  }
                  alt={recentJob.companyName}
                  width={250}
                  height={250}
                  className="w-full object-left object-contain"
                />
              </div>
            );
          })
        ) : (
          <div className="flex w-full">
            <Image
              src="/assets/images/No_Image.png"
              alt={recentJob.companyName}
              width={250}
              height={250}
              className="w-full object-left object-contain"
            />
          </div>
        )}
      </div>
      <div className="flex text-[#e27107] p-bold-16">{recentJob.jobType}</div>
      <div className="flex p-medium-16">{recentJob.companyName}</div>
      <div className="flex p-regular-14">{recentJob.industry}</div>
      <div className="flex p-regular-14">{recentJob.workLocation}</div>
      <div className="w-full text-[#0099ff] p-bold-16">
        <Link href={`/listofjobs/viewjob/${recentJob._id}`}>View</Link>
      </div>
    </div>
  );
};

export default Card;
