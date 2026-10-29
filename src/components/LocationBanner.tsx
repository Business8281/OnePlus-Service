"use client";

import React from "react";

export default function LocationBanner() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 w-full mx-auto flex flex-col gap-8 scroll-mt-20" id="service-nodes">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[24px] sm:text-[34px] font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Hyderabad Service Centers
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-zinc-500 dark:text-zinc-400">
            Conveniently located in LB Nagar and Tarnaka Secunderabad for fast same-day repairs.
          </p>
        </div>

        <a
          className="text-[13px] font-bold text-[#eb0028] hover:underline flex items-center gap-1.5"
          href="tel:+917207207046"
        >
          <span className="material-symbols-outlined text-[17px]">call</span>
          <span>Hotline: +91 72072 07046</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Hub 1: LB Nagar */}
        <div className="p-5 sm:p-8 rounded-[4px] bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-xl flex flex-col justify-between gap-6 hover:border-[#eb0028]/40 dark:hover:border-[#eb0028]/50 transition-all duration-300 shadow-sm hover:shadow-lg">
          <div className="flex flex-col gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[4px] bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60 flex items-center justify-center text-[#eb0028] shadow-xs">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">pin_drop</span>
            </div>
            <h3 className="font-extrabold text-[18px] sm:text-[20px] text-zinc-900 dark:text-zinc-100 tracking-tight">
              LB Nagar Service Center
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Main Commercial Complex, LB Nagar, Hyderabad
            </p>
            <div className="flex items-center gap-2 text-[12.5px] sm:text-[13px] text-zinc-500 dark:text-zinc-400 pt-1">
              <span className="material-symbols-outlined text-[16px] text-emerald-500">schedule</span>
              <span>10:00 AM – 7:30 PM (All 7 Days Open)</span>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=LB+Nagar+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-750 text-zinc-900 dark:text-zinc-100 text-[13px] font-bold py-3 px-5 rounded-[4px] flex items-center justify-center gap-2 border border-zinc-200/90 dark:border-zinc-700/80 shadow-xs transition-all hover:scale-[1.01]"
          >
            <span className="material-symbols-outlined text-[17px] text-[#eb0028]">open_in_new</span>
            <span>Get Directions to LB Nagar Hub</span>
          </a>
        </div>

        {/* Hub 2: Tarnaka Secunderabad */}
        <div className="p-5 sm:p-8 rounded-[4px] bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-xl flex flex-col justify-between gap-6 hover:border-[#eb0028]/40 dark:hover:border-[#eb0028]/50 transition-all duration-300 shadow-sm hover:shadow-lg">
          <div className="flex flex-col gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[4px] bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60 flex items-center justify-center text-[#eb0028] shadow-xs">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">pin_drop</span>
            </div>
            <h3 className="font-extrabold text-[18px] sm:text-[20px] text-zinc-900 dark:text-zinc-100 tracking-tight">
              Tarnaka Secunderabad Center
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Main Road, Near Tarnaka Metro &amp; Secunderabad Hub, Hyderabad
            </p>
            <div className="flex items-center gap-2 text-[12.5px] sm:text-[13px] text-zinc-500 dark:text-zinc-400 pt-1">
              <span className="material-symbols-outlined text-[16px] text-emerald-500">schedule</span>
              <span>10:00 AM – 7:30 PM (All 7 Days Open)</span>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Tarnaka+Secunderabad+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-750 text-zinc-900 dark:text-zinc-100 text-[13px] font-bold py-3 px-5 rounded-[4px] flex items-center justify-center gap-2 border border-zinc-200/90 dark:border-zinc-700/80 shadow-xs transition-all hover:scale-[1.01]"
          >
            <span className="material-symbols-outlined text-[17px] text-[#eb0028]">open_in_new</span>
            <span>Get Directions to Tarnaka Secunderabad Hub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
