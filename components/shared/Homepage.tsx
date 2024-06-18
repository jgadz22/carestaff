import HomepageHowToApply from "@/components/shared/HomepageHowToApply";
import HomepageRecentJob from "@/components/shared/HomepageRecentJob";
import HomepageWhoWeAre from "@/components/shared/HomepageWhoWeAre";
import HompageCarousel from "@/components/shared/HompageCarousel";
import HomepageClientSideProvider from "./HomepageClientSideProvider";
import HomepageSafetyPoints from "./HomepageSafetyPoints";
import HomepageVideo from "./HomepageVideo";

const Homepage = ({ jobsData }: any) => {
  return (
    <>
      <div className="flex-center flex-col w-full gap-5 md:gap-10">
        <section className="flex-1 w-full">
          <HompageCarousel />
        </section>
        <div className="wrapper flex flex-col gap-5 md:gap-10">
          <section id="whoweare" className="flex-1">
            <HomepageWhoWeAre />
          </section>
          <section id="recentjob" className="flex-1 ">
            <HomepageRecentJob jobsData={jobsData} />
          </section>
          <section id="howtoapply" className="flex-1">
            <HomepageHowToApply />
          </section>
          <section id="safetypoints" className="flex-1">
            <HomepageSafetyPoints />
          </section>
          <section id="videopromotion" className="flex-1">
            <HomepageVideo />
          </section>
        </div>
      </div>
    </>
  );
};
export default Homepage;
