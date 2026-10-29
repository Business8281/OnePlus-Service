"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-zinc-50 dark:bg-black border-t border-zinc-200/80 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 text-[13px] transition-colors duration-300">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* MNC 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#eb0028] text-white font-extrabold text-[12px] flex items-center justify-center">
                1+
              </div>
              <span className="font-bold text-[14px] text-zinc-900 dark:text-white uppercase tracking-tight">
                ONE PLUS SERVICE CENTER
              </span>
            </div>
            <p className="text-[12px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              Professional OnePlus mobile, tablet, and laptop repair services across Hyderabad - LB Nagar &amp; Tarnaka Secunderabad.
            </p>
            <div className="flex flex-col gap-1 text-[12px] pt-1">
              <a href="tel:+917207207046" className="text-zinc-900 dark:text-white font-semibold hover:text-[#eb0028]">
                Hotline: +91 72072 07046
              </a>
              <a href="https://wa.me/917207207046" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                Direct WhatsApp Help Desk (+91 72072 07046)
              </a>
            </div>
          </div>

          {/* Column 2: Diagnostic Services */}
          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-[13px] text-zinc-900 dark:text-zinc-100">
              OnePlus Services
            </span>
            <ul className="flex flex-col gap-1.5 text-[12px]">
              <li>Screen &amp; Display Replacement</li>
              <li>Battery Life Replacement</li>
              <li>Charging Port Repair</li>
              <li>Motherboard &amp; Chip-Level Repair</li>
              <li>Camera Sensor Replacement</li>
              <li>Water Damage Restoration</li>
            </ul>
          </div>

          {/* Column 3: Service Nodes */}
          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-[13px] text-zinc-900 dark:text-zinc-100">
              Hyderabad Centers
            </span>
            <div className="flex flex-col gap-3 text-[12px]">
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200 block">LB Nagar Service Center</span>
                <span className="text-zinc-500">Main Commercial Hub, LB Nagar, Hyderabad</span>
              </div>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200 block">Tarnaka Secunderabad Center</span>
                <span className="text-zinc-500">Main Road, Tarnaka, Secunderabad, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Column 4: Operational Hours */}
          <div className="flex flex-col gap-2.5">
            <span className="font-semibold text-[13px] text-zinc-900 dark:text-zinc-100">
              Hours of Operation
            </span>
            <div className="flex flex-col gap-1 text-[12px]">
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">Monday – Sunday (All 7 Days)</span>
              <span className="text-zinc-500">10:00 AM – 7:30 PM</span>
              <span className="text-zinc-500 mt-2">Most repairs completed within 2 hours with 90-day parts warranty*.</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Trademark Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <span>
              © 2026 ONE PLUS SERVICE CENTER. All rights reserved.
            </span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
            <span>
              Developed by{" "}
              <a
                href="https://xrmarketing.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#eb0028] dark:hover:text-[#eb0028] underline underline-offset-2 transition-colors"
              >
                XRmarketing
              </a>
            </span>
          </div>
          <p className="text-[11px] max-w-md text-center sm:text-right">
            Professional third-party repair center specializing in OnePlus devices. OnePlus is a registered trademark of OnePlus Technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
