// components/ScrollToFooterButton.tsx
"use client";

import { useRef } from "react";

export default function ScrollToFooterButton() {
  const footerRef = useRef<HTMLButtonElement>(null);
  function handleClick() {
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  } // use Ref instead of document.getElementById
  return (
    <button ref={footerRef} onClick={handleClick} className="text-sm rounded px-3 py-1 border hover:bg-gray-50">
      Scroll to footer
    </button>
  );
}