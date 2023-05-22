// @ts-nocheck
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white   my-14">
      <div className="bg-black py-10 px-5 bg-opacity-40">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className="md:flex   gap-10 items-center justify-center md:pb-16 md:px-28">
        <div>
            <img src={feature} alt="" />
        </div>
        <div>
            <p>May 23, 2023</p>
            <p className="uppercase">where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white ">Order now</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
