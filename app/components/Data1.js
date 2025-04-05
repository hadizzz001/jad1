"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Data1 = ({ posts }) => { 
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-full"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen h-screen flex justify-center items-center md:w-[1920px] md:h-[1080px]">
              <img
                src={post.fields.img.fields.file.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Data1;
