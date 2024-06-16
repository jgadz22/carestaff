import Image from "next/image";
import React from "react";

const SafetyPointsCard = ({ safetyPoint }: any) => {
  return (
    <div className="flex items-center border border-slate-300 flex-col gap-5 w-[290px] p-5 shadow-lg shadow-slate-700 bg-white rounded-2xl">
      <div className="flex-center w-[80px] h-[80px]">
        <Image
          src={safetyPoint.imgUrl}
          width={500}
          height={500}
          alt={safetyPoint.title}
        />
      </div>
      <div className="flex text-[#e27107] p-semibold-14 text-center">
        {safetyPoint.title}
      </div>
      <div className="flex text-[#888888] p-regular-12">
        {safetyPoint.content}
      </div>
    </div>
  );
};

export default SafetyPointsCard;
