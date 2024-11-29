"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwipeCarousel = () => {
  // Updated Mobile and Desktop Images
  const desktopImages = [
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866793/y08v8w1e4joyveaz2ewy.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866793/pc7nsc43dl5ugzmqvdpa.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866790/n6tsnhyh6bpqgzxzlaed.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866786/rrdwjbgibaptbsiegacz.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866785/ghymo5j8t5bwjzpnzb7t.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866779/obo9u3jmgggbkpv2aofo.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866775/bpcflqz1gunl1uuhn9ke.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866772/q2bof4rsbueg1qkzji65.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866771/z2lz7fmgnkdga5bqobrj.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866767/q5hhxlw9bsxs7igocusc.webp",
  ];

  const mobileImages = [
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866636/l77czb7hr8alhpoy2iis.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866635/rh7gnviilqvkncqn5exy.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866632/vov2hmyuiisl6rr6yk7k.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866630/sslmakj5adfuimxsrbik.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866629/kiiedezitlw1mfn9hiox.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866628/bv5glr0e72jtjlfeacna.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866626/fvril3vsrt9psesfheca.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866624/pxvakrqcdgcndr6l9r8q.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866624/d7q1ahxsnt4jxfdpskqm.webp",
    "https://res.cloudinary.com/dubdpmdwp/image/upload/v1732866623/njr7natwyqwewlmlyuql.webp",
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
