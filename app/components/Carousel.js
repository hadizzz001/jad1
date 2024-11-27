"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwipeCarousel = () => {
  // Mobile and Desktop Images
  const desktopImages = [
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732544377/a7ms6gpvf8pazp2w4xnx.jpg",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732544377/pf7y5xumkzy0ygrfaivl.jpg",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732544377/oi5yp7ltsqf3hoiu4akz.jpg",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732544377/ccfuqy7vvgvpmeae9xqh.jpg",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732544377/xzg206qbmemikvfvv8xw.jpg",
  ];

  const mobileImages = [
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732642249/xxnkymtjg3k6g4ssbuvw.jpg",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732642248/d64wmkjccgmeuaavhcrw.jpg",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732642246/fenjecnzfsq0dat2dxyk.jpg",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732642244/m2wjgb8sbyh2ele0id0c.jpg",
  ];

  // Determine screen size for responsive images
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .carousel-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Mobile: Portrait 1080x1920 */
        @media (max-width: 768px) {
          .carousel-container {
            width: 100%; 
            margin: auto;
            overflow: hidden;
          }
        }

        /* Desktop: Landscape 1920x1080 */
        @media (min-width: 769px) {
          .carousel-container {
            width: 100%;
            height: 1080px;
            max-width: 1920px;
            margin: auto;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default SwipeCarousel;
