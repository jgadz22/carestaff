import { ArrowRight } from "lucide-react";
import React from "react";

const HomepageWhoWeAre = () => {
  return (
    <>
      <div className="flex-center gap-5 flex-col md:flex-row ">
        <div className="w-full md:w-[50%]">
          <div className="text-[#0099ff] p-regular-14">Who We Are?</div>
          <div className="text-[#e5811e] h3-bold">CARE STAFF SERVICE</div>
          <div className="my-5">
            <p className="p-regular-18">
              "Care Staff Service" is a job platform managed by{" "}
              <span className="text-[#0000ee] underline-offset-1">
                <a href="https://www.hirocareer.com/">
                  Hiro Career Staff Co., Ltd.
                </a>
              </span>
              , specializing in nursing care facilities. We offer a wide range
              of job opportunities, including exclusive listings, openings for
              unqualified and inexperienced individuals, and full-time
              positions. The job openings of Hiro Career, who knows the local
              municipality well, are the result of our employees actually
              "seeing the facility" and "hearing directly from the person in
              charge of the facility". Our services extends to the Philippines,
              named “
              <span className="text-[#0000ee] underline-offset-1">
                <a href="https://www.facebook.com/hiroglobal/">
                  Hiro Global Manpower Inc.
                </a>
              </span>
              ” which is located in Makati City, a quality land-based
              recruitment agency.
            </p>
          </div>
          <div className="">
            <a href="/aboutus">
              <p className="flex gap-5 text-[#0099ff]">
                Learn more about us
                <span className="text-[#e5811e]">
                  <ArrowRight />
                </span>
              </p>
            </a>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex-center">
          <div className="bg-who-we-are-img bg-cover w-[774px] h-[516px] rounded-3xl bg-center"></div>
        </div>
      </div>
    </>
  );
};

export default HomepageWhoWeAre;
