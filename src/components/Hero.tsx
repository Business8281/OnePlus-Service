"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Dedicated high-resolution OnePlus service center hero banners
const backgroundSlides = [
  { id: "slide-1", image: "/images/hero_slide_1.jpg", alt: "OnePlus Smartphones & Hardware Diagnostics" },
  { id: "slide-2", image: "/images/hero_slide_2.jpg", alt: "OnePlus Tablets & Foldables" },
  { id: "slide-3", image: "/images/hero_slide_3.jpg", alt: "OnePlus Watches & Audio Wearables" },
];

const SLIDE_INTERVAL = 4500; // 4.5 seconds automatic crossfade

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % backgroundSlides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full relative overflow-hidden bg-[#fbfbfd]">
      {/* Main Full-Bleed Slide Stage: Covers 100% of the screen width, 0 border radius */}
      <div className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex flex-col justify-center border-b border-zinc-200/80">
        
        {/* ========================================================================= */}
        {/* FULL-BLEED BACKGROUND SLIDES: PURE CSS CROSS-FADE (NO DOTS, NO ICONS)     */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {backgroundSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                imageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-right sm:object-center"
              />
            </div>
          ))}

          {/* Clean legibility scrim: subtle on desktop so the hardware stays crisp and vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent lg:from-white/40 lg:via-transparent lg:to-transparent pointer-events-none z-15" />
        </div>

        {/* ========================================================================= */}
        {/* HERO CONTENT: Left-aligned on Desktop over open space, Centered on Mobile */}
        {/* ========================================================================= */}
        <div className="relative z-20 px-4 sm:px-8 md:px-12 lg:px-16 py-14 sm:py-18 lg:py-20 w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1">
          <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 max-w-2xl lg:max-w-xl xl:max-w-2xl">
            {/* 3 Distinct Lines as requested */}
            <h1 className="flex flex-col items-center lg:items-start font-black tracking-[-0.03em] leading-[1.22] w-full">
              <span className="text-[24px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] text-[#eb0028] drop-shadow-xs">
                OnePlus Service Center
              </span>
              <span className="text-[15px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-bold text-zinc-600 my-0.5 sm:my-1 lowercase">
                in
              </span>
              <span className="text-[15px] sm:text-[26px] md:text-[34px] lg:text-[38px] xl:text-[46px] text-zinc-950 drop-shadow-xs">
                Hyderabad - LB Nagar &amp; Tarnaka Secunderabad
              </span>
            </h1>

            {/* Trust Specs Benchmark Row - hidden in mobile view */}
            <div className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1 text-[12px] sm:text-[13px] text-zinc-700 font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/90 border border-zinc-200/80 shadow-xs backdrop-blur-xs">
                <span className="material-symbols-outlined text-[17px] text-[#eb0028]">
                  timer
                </span>
                <span>Repairs Within 2 Hours</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/90 border border-zinc-200/80 shadow-xs backdrop-blur-xs">
                <span className="material-symbols-outlined text-[17px] text-[#eb0028]">
                  verified
                </span>
                <span>90-Day Spare Parts Warranty</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/90 border border-zinc-200/80 shadow-xs backdrop-blur-xs">
                <span className="material-symbols-outlined text-[17px] text-[#eb0028]">
                  inventory_2
                </span>
                <span>Genuine-Quality Parts</span>
              </span>
            </div>

            {/* Explore Repair Services Button */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#repair-catalog"
                className="w-full sm:w-auto inline-flex bg-[#eb0028] hover:bg-[#cf0023] text-white text-[13px] sm:text-[14px] font-bold py-3.5 px-8 rounded-[4px] items-center justify-center gap-2.5 shadow-md shadow-[#eb0028]/25 transition-all tracking-wide cursor-pointer"
              >
                <span>EXPLORE REPAIR SERVICES</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
