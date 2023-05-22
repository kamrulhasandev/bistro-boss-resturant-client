// @ts-nocheck
import React from "react";
import img from '../../../assets/home/chef-service.jpg'
const Boss = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center h-96 bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-white text-center md:w-2/3 md:p-10 p-3 mx-5 ">
          <h1 className="text-3xl font-bold uppercase">Bistro Boss</h1>
          <small className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</small>
        </div>
      </div>
    </div>
  );
};

export default Boss;
