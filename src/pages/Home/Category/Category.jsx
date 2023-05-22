// @ts-nocheck
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="mb-20">
      <section>
        <SectionTitle
        subHeading={"From 11.00am to 11.00pm"}
        heading={"ORDER ONLINE"}
        > 
        </SectionTitle>
      </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className="md:text-3xl uppercase text-center text-white -mt-10">salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="md:text-3xl uppercase text-center text-white -mt-10">pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="md:text-3xl uppercase text-center text-white -mt-10">soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="md:text-3xl uppercase text-center text-white -mt-10">desert</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className="md:text-3xl uppercase text-center text-white  -mt-10">salad</h3>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Category;
