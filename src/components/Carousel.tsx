"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => {
    // mirror if left
    const transform = direction === "left" ? "" : "rotate(180deg)";
    return (
      <svg
        className="w-10 h-10 text-gray-700 transform"
        style={{ transform }}
        fill="none"
        stroke="black"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
          <>
            {/* extra-long tail from the right, ending just before tip (x≈8) */}
            <path
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M28 12H3.2"
            />
            {/* arrowhead */}
            <path
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 17l-5-5 5-5"
            />
          </>
      </svg>
    );
  };
  

export default function Carousel({ data }: { data: 
    {
        body: string;
        imageSrc: StaticImageData;
        caption: string;
        subcaption: string;
        imageFilter?: string;
    }[]
}) { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (!data || data.length === 0) return null;

    const currentItem = data[currentIndex];

    return (
        <div className="relative w-full">
            {/* Mobile Layout (< md): Stacked and centered */}
            <div className="md:hidden">
                <div className="flex flex-col items-center space-y-4 px-12">
                    {/* Image */}
                    <div className="relative w-48 h-48 flex-shrink-0">
                        <Image 
                            src={currentItem.imageSrc} 
                            alt={currentItem.caption} 
                            className="w-full h-full object-cover rounded-lg"
                            fill
                        />
                        {currentItem.imageFilter && (
                            <div className={`absolute inset-0 rounded-lg ${currentItem.imageFilter}`}></div>
                        )}
                    </div>
                     
                    {/* Content */}
                    <div className="text-center space-y-2">
                        <p className="text-2xl font-secondary text-gray-600 leading-relaxed">{currentItem.body}</p>
                        <h3 className="text-lg font-semibold">{currentItem.caption}</h3>
                        <p className="text-sm text-gray-500">{currentItem.subcaption}</p>
                    </div>
                </div>
                
                {/* Navigation arrows for mobile */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2  bg-white/80 hover:bg-white shadow-md transition-colors"
                    aria-label="Previous item"
                >
                    <ArrowIcon direction="left" />
                </button>
                
                <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2  bg-white/80 hover:bg-white shadow-md transition-colors"
                    aria-label="Next item"
                >
                    <ArrowIcon direction="right" />
                </button>
            </div>

            {/* Desktop Layout (>= md): Side by side */}
            <div className="hidden md:flex md:gap-20 md:items-center">
                {/* Left side: Image */}
                <div className="relative w-1/3 flex-shrink-0 h-150">
                    <Image 
                        src={currentItem.imageSrc} 
                        alt={currentItem.caption} 
                        className="w-full h-full object-cover rounded-lg"
                        fill
                    />
                    {currentItem.imageFilter && (
                        <div className={`absolute inset-0 rounded-lg ${currentItem.imageFilter}`}></div>
                    )}
                </div>
                
                {/* Right side: Content and navigation */}
                <div className="w-2/3 space-y-6">
                    {/* Content */}
                    <div className="space-y-4 font-secondary">
                        <p className="text-2xl font-medium leading-relaxed">{currentItem.body}</p>
                        <h3 className="text-xl">{currentItem.caption}</h3>
                        <p className="text-lg">{currentItem.subcaption}</p>
                    </div>
                    
                    {/* Navigation arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={goToPrevious}
                            className="hover:cursor-pointer"
                            aria-label="Previous item"
                        >
                            <ArrowIcon direction="left" />
                        </button>
                        
                        <button
                            onClick={goToNext}
                            className="hover:cursor-pointer"
                            aria-label="Next item"
                        >
                            <ArrowIcon direction="right" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Dots indicator */}
            {/* <div className="flex justify-center mt-6 space-x-2">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex 
                                ? 'bg-accent' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to item ${index + 1}`}
                    />
                ))}
            </div> */}
        </div>
    );
}