"use client"

import StarIcon from "@/assets/others/star_icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const RotatingStarIcon = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Rotate 360 degrees for every 1000px of scroll
            const rotationDegrees = (scrollY / 1000) * 360;
            setRotation(rotationDegrees);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Image 
            src={StarIcon} 
            alt="Star Icon" 
            className="h-10 w-10 inline transition-transform duration-75 ease-out" 
            style={{ transform: `rotate(${rotation}deg)` }}
            aria-hidden="true" 
            loading="lazy"
        />
    );
};

export default RotatingStarIcon;