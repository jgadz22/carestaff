import React from "react";

const HowToApplyCard = ({ howToApplyStep }: any) => {
  return (
    <div className="flex-center border border-slate-300 flex-col gap-2 w-[290px] p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl">
      <div className="flex-center w-[80px] h-[80px] mb-2 bg-step-border-img bg-contain">
        <div className="flex-center text-[#e27107] h5-bold">
          {howToApplyStep.htanumber}
        </div>
      </div>
      <div className="flex text-[#e27107] p-bold-16">
        {howToApplyStep.content}
      </div>
    </div>
  );
};

export default HowToApplyCard;
