import React, { useState } from "react";
import slide1 from "../images/R.jpg";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Welcome to BPPR MAGAZINE",
      description: "A PUBLICATION OF SPNS RESEARCH DESK.",
    },
    {
      id: 2,
      image: slide1,
      title: "Business Process & Performance Review:",
      description: "A PUBLICATION OF SPNS RESEARCH DESK.",
    },
    {
      id: 3,
      image: slide1,
      title: "Business Process & Performance Review:",
      description: "A PUBLICATION OF SPNS RESEARCH DESK.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slide */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500 bg-cover bg-center"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Text Overlay - Always Visible */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          {slides[currentIndex].description}
        </p>
        <a
          href="/articles"
          className="bg-[#b3976b] hover:bg-[#b3976b] text-white py-2 px-4 rounded text-lg"
        >
          View articles
        </a>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-30"
        onClick={handlePrev}
      >
        &#x276E;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-30"
        onClick={handleNext}
      >
        &#x276F;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index
                ? "bg-[#b3976b]"
                : "bg-white bg-opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
