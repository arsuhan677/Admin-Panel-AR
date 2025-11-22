// import React from 'react';
import React, { useState, useEffect } from "react";

function Hero(props) {
   const images = [
    "https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg?semt=ais_hybrid&w=740&q=80",
    "https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=612x612&w=0&k=20&c=E5aUyAFo5_xjHcdk0nEZGVDipOkYEtyXQmJBskUbqo8=",
    "https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
    return (
         <section className="relative h-[400px] w-full overflow-hidden">
      {/* Sliding Container */}
      <div
        className="flex h-full w-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Explore Our Products
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-xl">
          Amazing deals, exclusive offers, and quality products just for you.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
    );
}

export default Hero;