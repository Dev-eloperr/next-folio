"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ScrollToFooterLink() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerElement = document.getElementById("site-footer");
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFooterVisible(entry.isIntersecting);
        
        // Update URL hash based on visibility
        if (entry.isIntersecting) {
          if (window.location.hash !== "#site-footer") {
            window.history.replaceState(null, "", "#site-footer");
          }
        } else {
          if (window.location.hash === "#site-footer") {
            window.history.replaceState(null, "", window.location.pathname);
          }
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of footer is visible
        rootMargin: "-120px 0px 0px 0px" // Account for scroll-mt-[120px]
      }
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const footerElement = document.getElementById("site-footer");
    if (footerElement) {
      footerElement.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "relative group overflow-hidden",
        "text-sm px-6 py-2 rounded-[70px]",
        "bg-black text-white transition-all duration-500"
      )}
    >
      <span 
        className="absolute inset-0 bg-accent transform origin-bottom 
        scale-y-0 transition-transform duration-500 ease-out
        group-hover:scale-y-100 rounded-[70px]"
      />
      <span className="relative z-10">contact me</span>
    </button>
  );
}