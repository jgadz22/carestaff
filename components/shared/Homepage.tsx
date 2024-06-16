import HomepageHowToApply from "@/components/shared/HomepageHowToApply";
import HomepageRecentJob from "@/components/shared/HomepageRecentJob";
import HomepageWhoWeAre from "@/components/shared/HomepageWhoWeAre";
import HompageCarousel from "@/components/shared/HompageCarousel";
import HomepageClientSideProvider from "./HomepageClientSideProvider";

const Homepage = ({ jobsData }: any) => {
  return (
    <>
      <HomepageClientSideProvider>
        <div className="flex-center flex-col w-full gap-5 md:gap-10">
          <section id="test1" className="flex-1 w-full">
            <HompageCarousel />
          </section>
          <div className="wrapper flex flex-col gap-5 md:gap-10">
            <section id="test2" className="flex-1">
              <HomepageWhoWeAre />
            </section>
            <section id="test3" className="flex-1 ">
              <HomepageRecentJob jobsData={jobsData} />
            </section>
            <section id="test4" className="flex-1">
              <HomepageHowToApply />
            </section>
            <section id="test5" className="flex-1">
              Safety Points
            </section>
            <section id="test6" className="flex-1">
              Video
            </section>
          </div>
        </div>
      </HomepageClientSideProvider>
    </>
  );
};
export default Homepage;
