"use client"
import React, { useState } from "react";



const Data = (posts) => {
    const [selectedImage, setSelectedImage] = useState(null);

 
    

  return (
    <div className=" py-10">
    {/* Gallery Section */}
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Exhibition Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
 






        {posts.posts.map((post) => {

          return ( 
            <div
              key={post.sys.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(post.fields.img.fields.file.url)}
            >
              <img
                src={post.fields.img.fields.file.url}
                alt="Jad zeitouni"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>



          );
        })}





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
           alt="Jad zeitouni"
            className="max-w-full max-h-screen object-contain transition-transform duration-300"
          />
        </div>
      </div>
    )}
  </div>
  )
}

export default Data