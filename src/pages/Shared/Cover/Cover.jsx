import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-64 md:h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{subTitle}</p>
          </div>
        </div>
      </div>
      <div style={{ height: "0px" }} />
    </Parallax>
  );
};

export default Cover;
