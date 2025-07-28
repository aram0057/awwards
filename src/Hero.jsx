import { useState } from "react";
import Button from "./Button";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const getVideoSrc = () => "/videos/hero-1.mp4"; // Replace with your actual video path

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={getVideoSrc()}
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        className="absolute left-0 top-0 h-full w-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full w-full items-end justify-end p-6 sm:p-10">
        <h1 className="special-font hero-heading text-blue-75 text-4xl sm:text-6xl">
          Abbi
        </h1>
      </div>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">Abb<b>k</b>i</h1>
          <p className ="mb-5 max-w-64 font-robert-regular text-blue-100" >
            Creative developer based in Melbourne

          </p>
          <Button id="watch-trailer" title="WD"></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
