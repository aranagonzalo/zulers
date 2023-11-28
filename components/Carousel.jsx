"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Carousel() {
  const slides = [
    {
      url: "/images/impermeabilizacion/impermeabilizacion-balcon-concreto.jpg",
    },
    {
      url: "/images/impermeabilizacion/impermeabilizacion-cisterna.png",
    },
    {
      url: "/images/impermeabilizacion/impermeabilizacion-jardinera.jpg",
    },
    {
      url: "/images/impermeabilizacion/impermeabilizacion-muro-de-cimentacion.png",
    },
    {
      url: "/images/impermeabilizacion/impermeabilzacion-canales.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="pb-18 group relative m-auto h-[420px] w-full max-w-[1400px] px-4 pt-0 md:h-[540px] md:px-32 lg:h-[780px] lg:pb-32">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
