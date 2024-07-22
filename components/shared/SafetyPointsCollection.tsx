"use client";

import { safetyPoints } from "@/constant";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SafetyPointsCard from "./SafetyPointsCard";

const SafetyPointsCollection = () => {
  const animation1 = useAnimation();

  const { ref: ref, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.1,
          delay: 0.5,
        },
      });
    } else {
      animation1.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView1, animation1]);
  return (
    <>
      <div className="flex-center flex-col w-full">
        <ul
          ref={ref}
          className="grid w-full px-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-7 lg:flex-row lg:justify-center"
        >
          {safetyPoints.map((safetyPoint: any) => {
            return (
              <motion.li
                animate={animation1}
                key={safetyPoint.key}
                className="flex justify-center md:justify-none"
              >
                <SafetyPointsCard safetyPoint={safetyPoint} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SafetyPointsCollection;
