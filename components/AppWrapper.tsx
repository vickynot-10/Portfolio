"use client";
import React, { useState } from "react";
import { LuDownload } from "react-icons/lu";
export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="app-container" onMouseMove={handleMouseMove}>
      <div
        className="flashlight-overlay"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29,78,216,0.15) 120px, transparent 80%)`,
        }}
      />
       <a
        href="/Vignesh-Resume.pdf"
        download="Vignesh-Resume.pdf"
        className="fixed bottom-8  right-10 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-teal-400/10 text-slate-200 text-xl  border-0 border-teal-400/20 hover:bg-teal-400/30 hover:border-teal-400/50 transition-all duration-300 backdrop-blur-md shadow-lg shadow-teal-900/20"
        title="Download Resume"
      >
        <LuDownload />
      </a>
      <div className="app-wrapper">{children}</div>
    </div>
  );
}
