import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

const HomepageVideo = () => {
  return (
    <div className="w-full flex items-center justify-center mt-5 mb-10">
      <YouTubeEmbed videoid="LCWN1OQVOHA" width={700} params="controls=1" />
    </div>
  );
};

export default HomepageVideo;
