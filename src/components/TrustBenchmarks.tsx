"use client";

import React from "react";

export default function TrustBenchmarks() {
  const benchmarks = [
    {
      num: "01",
      icon: "engineering",
      title: "Experienced OnePlus Specialists",
      desc: "Hardware technicians trained across all generations — from OnePlus 12 and Foldable Open to Nord series, Pad, and laptops.",
      image: "/images/bench_specialists.jpg",
    },
    {
      num: "02",
      icon: "schedule",
      title: "Same-Day Repair Service",
      desc: "Immediate counter check-in and fast turnaround so you get your device fully tested and returned without unnecessary delays.",
      image: "/images/bench_sameday.jpg",
    },
    {
      num: "03",
      icon: "timer",
      title: "Repairs Completed in 2 Hours",
      desc: "Fast-track turnaround for screen replacements, battery renewals, speaker fixes, and charging port issues while you wait.",
      image: "/images/bench_2hours.jpg",
    },
    {
      num: "04",
      icon: "inventory_2",
      title: "Genuine-Quality Spare Parts",
      desc: "Factory-calibrated 120Hz Fluid AMOLED displays, high-density Li-ion battery cells, and OEM-grade components ensuring peak reliability.",
      image: "/images/bench_genuine_parts.jpg",
    },
    {
      num: "05",
      icon: "verified",
      title: "90-Day Replacement Warranty*",
      desc: "Complete peace of mind. Every replaced display, battery, IC chip, and camera module includes an official 90-day replacement warranty.",
      image: "/images/bench_warranty.jpg",
    },
    {
      num: "06",
      icon: "memory",
      title: "Advanced Motherboard Lab",
      desc: "Precision BGA chip-level micro-soldering, hot-air rework, power management IC repair, and dead logic board recovery under microscopes.",
      image: "/images/bench_motherboard.jpg",
    },
    {
      num: "07",
      icon: "support_agent",
      title: "Transparent Counter Inspection",
      desc: "Live inspection right at the walk-in desk. Honest fault diagnosis, clear component testing, and upfront guidance before any repair begins.",
      image: "/images/bench_inspection.jpg",
    },
    {
      num: "08",
      icon: "thumb_up",
      title: "Critical Failure Recovery",
      desc: "Proven track record in reviving water-damaged units, short-circuited motherboards, display green lines, and dead devices.",
      image: "/images/bench_recovery.jpg",
    },
  ];

  const handleVisit = () => {
    const bookingSection = document.getElementById("express-booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-3.5 sm:px-6 md:px-8 py-10 sm:py-20 w-full mx-auto scroll-mt-20" id="why-choose-us">
      <div className="flex flex-col gap-6 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-4 sm:pb-6 border-b border-zinc-200">
          <div className="flex flex-col gap-1.5 sm:gap-2.5">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-widest uppercase text-[#eb0028] font-mono">
              CERTIFIED BENCHMARKS
            </span>
            <h2 className="text-xl sm:text-[38px] md:text-[42px] font-black text-zinc-950 tracking-[-0.03em] leading-[1.15]">
              Why Choose ONE PLUS SERVICE CENTER?
            </h2>
          </div>

          <p className="text-xs sm:text-[15px] text-zinc-600 max-w-md leading-relaxed font-medium">
            Certified component standards, 2-hour express turnaround, and 90-day warranty coverage across our LB Nagar and Tarnaka Secunderabad service centers in Hyderabad.
          </p>
        </div>

        {/* 8-Card Grid: 3 in row 1, 3 in row 2, 2 centered in row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-7">
          {benchmarks.map((item, index) => {
            const hasFullCardBg = [
              "/images/bench_specialists.jpg",
              "/images/bench_sameday.jpg",
              "/images/bench_2hours.jpg",
              "/images/bench_genuine_parts.jpg",
              "/images/bench_warranty.jpg",
              "/images/bench_motherboard.jpg",
              "/images/bench_inspection.jpg",
              "/images/bench_recovery.jpg",
            ].includes(item.image);
            // 3 in row 1, 3 in row 2, 2 centered in row 3:
            // Index 6 (7th card) starts at col 2 on desktop (cols 2-3), index 7 is cols 4-5
            const isSeventhItem = index === 6;

            return (
              <div
                key={item.num}
                onClick={handleVisit}
                className={`group relative aspect-square rounded-2xl border border-zinc-200/90 overflow-hidden bg-white shadow-xs hover:shadow-xl hover:border-[#eb0028] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-end lg:col-span-2 ${
                  isSeventhItem ? "md:col-start-auto lg:col-start-2" : ""
                }`}
              >
                {hasFullCardBg ? (
                  <>
                    {/* Full-bleed 1:1 square custom artwork (photo top + curved wave + pure white bottom) */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out z-0"
                    />

                    {/* Number badge at top right */}
                    <div className="absolute top-3.5 right-3.5 text-white/90 text-[11px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-xs z-10">
                      #{item.num}
                    </div>

                    {/* Bottom Content Area: Natural bottom positioning sitting comfortably within the pure white zone */}
                    <div className="relative z-10 flex flex-col gap-2 px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
                      <div className="min-h-0">
                        <h3 className="font-extrabold text-[15px] sm:text-[16.5px] text-[#eb0028] tracking-tight leading-tight mb-1 line-clamp-1 group-hover:text-[#c40022] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11.5px] sm:text-[12.5px] text-zinc-600 leading-snug font-normal line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      {/* Minimal Red Accent Indicator & Arrow */}
                      <div className="pt-0.5 flex items-center justify-between shrink-0">
                        <div className="w-10 sm:w-12 h-[2.5px] bg-[#eb0028] rounded-full group-hover:w-14 sm:group-hover:w-16 transition-all duration-300" />
                        <svg
                          className="w-4 h-4 text-[#eb0028] group-hover:translate-x-1.5 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* TOP SECTION: Hardware Photograph */}
                    <div className="relative h-[48%] w-full overflow-hidden bg-white shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      />

                      {/* Subtle dark gradient vignette for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                      {/* Number badge at top right */}
                      <div className="absolute top-3 right-3 text-white/90 text-[11px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-xs z-10">
                        #{item.num}
                      </div>
                    </div>

                    {/* BOTTOM SECTION: Pure White Card Foundation overlapping top image with seamless wave */}
                    <div className="relative -mt-5 z-20 flex-1 flex flex-col justify-between bg-white px-4 sm:px-6 pb-4 sm:pb-6 pt-0 min-h-0">
                      {/* Smooth Concave Wave Transition */}
                      <div className="relative -top-4 left-0 right-0 h-5 sm:h-6 pointer-events-none w-full shrink-0">
                        <svg
                          className="w-full h-full block text-white fill-current"
                          viewBox="0 0 500 30"
                          preserveAspectRatio="none"
                        >
                          <path d="M 0 30 L 500 30 L 500 8 C 380 24, 280 30, 160 14 C 80 4, 30 8, 0 18 Z" />
                        </svg>
                      </div>

                      {/* Title & Description */}
                      <div className="min-h-0 -mt-2">
                        <h3 className="font-extrabold text-[16px] sm:text-[19px] text-[#eb0028] tracking-tight leading-snug mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-[#c40022] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[12px] sm:text-[13.5px] text-zinc-600 leading-snug sm:leading-relaxed font-normal line-clamp-3 sm:line-clamp-4">
                          {item.desc}
                        </p>
                      </div>

                      {/* Minimal Red Accent Indicator & Arrow */}
                      <div className="pt-2 sm:pt-3 flex items-center justify-between shrink-0">
                        <div className="w-10 sm:w-12 h-[3px] bg-[#eb0028] rounded-full group-hover:w-14 sm:group-hover:w-16 transition-all duration-300" />
                        <svg
                          className="w-5 h-5 text-[#eb0028] group-hover:translate-x-1.5 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
