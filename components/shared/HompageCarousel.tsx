"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { carouselSlide } from "@/constant";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HompageCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-[210px] md:h-[420px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-[210px] md:h-[420px] items-center">
          {carouselSlide.map((banner) => {
            return (
              <CarouselItem key={banner.key}>
                <div
                  className="w-full h-[210px] md:h-[420px] flex items-center bg-cover bg-center gap-5 md:gap-20 flex-col pt-5 md:pt-10 relative"
                  style={{ backgroundImage: `url(${banner.image})` }}
                >
                  <div className="flex w-full h-[210px] md:h-[420px] absolute top-0 left-0 bg-black/30 z-20"></div>
                  <p className="flex-center text-center text-white w-3/4 lg:w-1/2 z-30 p-semibold-14 md:h5-bold">
                    {banner.contentFirst}
                  </p>
                  <p className="flex-center text-center text-white w-3/4 lg:w-1/2 z-30 p-semibold-14 md:h5-bold">
                    {banner.contentSecond}
                  </p>
                  <Link href={banner.route} className="flex z-30">
                    <button className="flex-center rounded-full bg-[#e47e1e] py-2 pl-8 pr-16 text-white p-semibold-14 md:p-semibold-20 relative">
                      <p className="flex-center gap-3">
                        {banner.buttonContent}{" "}
                        <span className="absolute right-2">
                          <ArrowRight className="rounded-full p-2 bg-white text-[#e47e1e] h-8 w-8" />
                        </span>
                      </p>
                    </button>
                  </Link>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HompageCarousel;
