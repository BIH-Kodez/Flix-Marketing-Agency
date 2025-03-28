import React from "react";

const HeroVideo = () => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      muted
      loop
      playsInline
      src="/assets/hero.mp4"
      type="video/mp4"
    />
  );
};

export default HeroVideo;
