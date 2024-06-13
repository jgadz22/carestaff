"use client";

import HomepageHowToApply from "@/components/shared/HomepageHowToApply";
import HomepageRecentJob from "@/components/shared/HomepageRecentJob";
import HomepageWhoWeAre from "@/components/shared/HomepageWhoWeAre";
import HompageCarousel from "@/components/shared/HompageCarousel";
import UserFooter from "@/components/shared/UserFooter";
import UserHeader from "@/components/shared/UserHeader";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const smoothScroll = (targetId: any) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1)
          ? link.getAttribute("href")?.substring(1)
          : "";
        smoothScroll(targetId);
      });
    });
  }, []);
  return (
    <>
      {/* <div className="flex-center flex-row">
          <ul>
            <li>
              <Link href="#test1">
                <p>Section 1</p>
              </Link>
            </li>
            <li>
              <Link href="#test2">
                <p>Section 2</p>
              </Link>
            </li>
            <li>
              <Link href="#test3">
                <p>Section 3</p>
              </Link>
            </li>
          </ul>
        </div> */}
      <div className="flex-center flex-col w-full gap-5 md:gap-10">
        <section id="test1" className="flex-1 w-full">
          <HompageCarousel />
        </section>
        <div className="wrapper flex flex-col gap-5 md:gap-10">
          <section id="test2" className="flex-1">
            <HomepageWhoWeAre />
          </section>
          <section id="test3" className="flex-1 ">
            <HomepageRecentJob />
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
    </>
  );
}
