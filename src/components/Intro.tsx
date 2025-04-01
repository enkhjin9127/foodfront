import React from "react";
import Image from "next/image";
import BackgroundImage from "@/img/BG.png";
const Intro = () => {
  return (
    <div>
      <Image
        src={BackgroundImage}
        alt="BG"
        className="w-full h-[570px] object-cover overflow-hidden"
      />
    </div>
  );
};

export default Intro;
