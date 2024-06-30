import React from "react";

const ContactUsForRecruitersCard = ({ forRecruiter }: any) => {
  return (
    <div className="flex items-center border border-slate-300 flex-col gap-2 w-[290px] p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl">
      <div className="flex-center w-[80px] h-[80px] mb-2 bg-step-border-img bg-contain">
        <div className="flex-center text-[#e27107] h5-bold">
          {forRecruiter.htanumber}
        </div>
      </div>
      <div className="flex text-center text-[#e27107] p-bold-16">
        {forRecruiter.content}
      </div>
    </div>
  );
};

export default ContactUsForRecruitersCard;
