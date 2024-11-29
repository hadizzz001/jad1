"use client"

import React, { useState } from "react";
import  Footer  from "../components/Footer";
import  Nav  from "../components/Nav";

const ExhibitionGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
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

  return (
    <>
    <Nav/>
    <div className=" py-10">
      {/* Gallery Section */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Exhibition Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((url, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(url)}
            >
              <img
                src={url}
                alt={`Exhibition Image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal on background click
        >
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            {/* Enlarged Image */}
            <img
              src={selectedImage}
              alt="Selected Exhibition"
              className="max-w-full max-h-screen object-contain transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ExhibitionGallery;
