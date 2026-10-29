"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkshopBench {
  id: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
}

const workshopBenches: WorkshopBench[] = [
  {
    id: "soldering",
    title: "Micro-Soldering Benches",
    desc: "Dedicated ESD-safe workstations equipped with stereo microscopes, hot-air rework stations, and precision micro-soldering tools for motherboard, CPU, and charging IC repairs.",
    image: "/images/lab_microsoldering_bench.jpg",
    alt: "OnePlus motherboard precision micro-soldering IC inspection bench",
  },
  {
    id: "lamination",
    title: "Optical Lamination",
    desc: "HEPA-filtered clean repair chambers with heated vacuum screen separators and bubble-free optical adhesive (OCA) lamination presses for seamless display bonding.",
    image: "/images/lab_optical_lamination.jpg",
    alt: "OnePlus 120Hz Fluid AMOLED screen assembly and optical alignment",
  },
  {
    id: "qa-check",
    title: "Multi-Point QA Check",
    desc: "Rigorous post-service diagnostics covering battery cell resistance, SUPERVOOC charging wattage, camera autofocus calibration, and antenna signal strength.",
    image: "/images/lab_multipoint_qa.jpg",
    alt: "Complete OnePlus disassembled hardware layout and diagnostic test bench",
  },
];

export default function WorkshopFeed() {
  const [activeBenchIndex, setActiveBenchIndex] = useState<number>(0);
  const currentBench = workshopBenches[activeBenchIndex];

  return (
    <section className="px-3.5 sm:px-6 md:px-8 py-10 sm:py-14 w-full mx-auto scroll-mt-20" id="workshop-feed">
      <div className="flex flex-col gap-5 sm:gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#eb0028] font-mono">
            WORKSHOP INFRASTRUCTURE
          </span>
          <h2 className="text-xl sm:text-3xl md:text-[34px] font-black text-zinc-950 tracking-tight leading-tight">
            OnePlus Precision Service &amp; Diagnostic Lab
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl leading-relaxed font-normal">
            Dedicated ESD-safe repair benches servicing our LB Nagar and Tarnaka Secunderabad service centers. Specialized equipment operated under strict OEM repair protocols.
          </p>
        </div>

        {/* Single-Screen Unified Stage: Cards on Left + Large Workbench Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* Workbench Image Container: Shows on top on mobile, right column on desktop */}
          <div className="lg:col-span-7 lg:order-last relative min-h-[220px] sm:min-h-[360px] lg:min-h-[440px] rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBench.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentBench.image}
                  alt={currentBench.alt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="inline-block px-2.5 py-1 rounded bg-[#eb0028] text-white text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider mb-1.5 sm:mb-2 shadow-sm">
                    ACTIVE BENCH INSPECTION
                  </div>
                  <h4 className="text-base sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                    {currentBench.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 max-w-xl drop-shadow-sm mt-0.5">
                    {currentBench.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3 Capability Cards: Stacked below photo on mobile, left column on desktop */}
          <div className="lg:col-span-5 lg:order-first flex flex-col justify-between gap-2.5 sm:gap-3.5">
            {workshopBenches.map((bench, idx) => {
              const isActive = activeBenchIndex === idx;
              return (
                <button
                  key={bench.id}
                  type="button"
                  onClick={() => setActiveBenchIndex(idx)}
                  className={`p-4 sm:p-5.5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-center cursor-pointer outline-none bg-white border flex-1 ${
                    isActive
                      ? "border-zinc-950 shadow-md ring-1 ring-zinc-950 bg-zinc-50/60"
                      : "border-zinc-200/90 hover:border-zinc-400 hover:shadow-xs shadow-none"
                  }`}
                >
                  <h3
                    className={`text-sm sm:text-base font-black tracking-tight transition-colors duration-200 ${
                      isActive ? "text-[#eb0028]" : "text-zinc-950"
                    }`}
                  >
                    {bench.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[13px] text-zinc-600 leading-relaxed font-normal mt-1">
                    {bench.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
