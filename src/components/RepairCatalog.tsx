"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface RepairService {
  id: string;
  title: string;
  icon: string;
  desc: string;
  chipMatch: string;
  category: "all" | "screen" | "battery" | "hardware" | "software";
  image: string;
  turnaround?: string;
}

interface RepairCatalogProps {
  onSelectService: (service: RepairService) => void;
}

export const servicesData: RepairService[] = [
  {
    id: "screen-display",
    title: "OnePlus Screen & Display Replacement",
    icon: "smartphone",
    desc: "A cracked screen, broken glass, display flickering, green line issues, black screen, or unresponsive touch can make your device difficult to use. We replace damaged AMOLED/LCD displays with high-quality parts, restoring crystal-clear visuals and smooth touch performance.",
    chipMatch: "Screen & Display Replacement",
    category: "screen",
    image: "/images/phone_screen_repair.jpg",
    turnaround: "~2 Hours",
  },
  {
    id: "battery-replacement",
    title: "OnePlus Battery Replacement",
    icon: "battery_charging_full",
    desc: "If your battery drains quickly, overheats, swells, or your phone shuts down unexpectedly, it's time for a replacement. We install genuine-quality batteries that provide reliable performance and longer battery life.",
    chipMatch: "Battery Replacement",
    category: "battery",
    image: "/images/phone_battery_repair.jpg",
    turnaround: "45 Mins",
  },
  {
    id: "charging-port",
    title: "OnePlus Charging Port Repair",
    icon: "bolt",
    desc: "Having trouble charging your device? Loose charging ports, slow charging, or intermittent charging are usually caused by worn or damaged USB-C connectors. We repair or replace faulty charging ports to restore fast and reliable charging.",
    chipMatch: "Charging Port Repair",
    category: "hardware",
    image: "/images/phone_charging_port_repair.jpg",
    turnaround: "1 Hour",
  },
  {
    id: "motherboard-repair",
    title: "OnePlus Motherboard Repair",
    icon: "memory",
    desc: "Motherboard issues can cause your phone to stop turning on, lose network connectivity, overheat, restart repeatedly, or fail to charge. Our technicians perform advanced chip-level diagnostics and repairs to restore your device whenever possible.",
    chipMatch: "Motherboard Repair",
    category: "hardware",
    image: "/images/phone_motherboard_repair.jpg",
    turnaround: "Same-Day",
  },
  {
    id: "camera-repair",
    title: "OnePlus Camera Repair & Replacement",
    icon: "photo_camera",
    desc: "If your front or rear camera is blurry, unable to focus, crashing, or completely non-functional, we diagnose and replace damaged camera modules and lens glass to restore high-definition photography.",
    chipMatch: "Camera Repair & Replacement",
    category: "hardware",
    image: "/images/phone_camera_repair.jpg",
    turnaround: "~2 Hours",
  },
  {
    id: "back-glass",
    title: "OnePlus Back Glass Replacement",
    icon: "devices",
    desc: "A cracked or shattered back panel affects the appearance and structural integrity of your phone. We replace damaged rear glass with precision-molded replacements, keeping your device looking pristine and protected.",
    chipMatch: "Back Glass Replacement",
    category: "hardware",
    image: "/images/phone_back_glass_repair.jpg",
    turnaround: "~2 Hours",
  },
  {
    id: "speaker-mic",
    title: "OnePlus Speaker & Microphone Repair",
    icon: "volume_up",
    desc: "Poor audio quality, low speaker volume, microphone issues, or no sound during calls can affect communication. We repair or replace faulty speakers, microphones, and audio components to restore clear sound.",
    chipMatch: "Speaker & Microphone Repair",
    category: "hardware",
    image: "/images/phone_speaker_mic_repair.jpg",
    turnaround: "1 Hour",
  },
  {
    id: "buttons",
    title: "OnePlus Power & Volume Button Repair",
    icon: "power_settings_new",
    desc: "Unresponsive, jammed, or loose power and volume buttons make controlling your device frustrating. We repair or replace faulty internal flex cables and button switches to ensure smooth and responsive operation.",
    chipMatch: "Power & Volume Button Repair",
    category: "hardware",
    image: "/images/phone_buttons_repair.jpg",
    turnaround: "1 Hour",
  },
  {
    id: "water-damage",
    title: "OnePlus Water Damage Repair",
    icon: "water_drop",
    desc: "Accidental water or liquid exposure can cause severe corrosion and electrical short circuits. We perform comprehensive ultrasonic cleaning and chip-level board revival to recover your device whenever possible.",
    chipMatch: "Water Damage Repair",
    category: "hardware",
    image: "/images/phone_water_damage_repair.jpg",
    turnaround: "24-48 Hours",
  },
  {
    id: "software-repair",
    title: "OnePlus Software Repair",
    icon: "system_update",
    desc: "Software glitches, boot loops, system freezing, app crashes, or failed updates can disrupt your phone's functionality. We offer professional firmware flashing, OxygenOS reinstallation, and troubleshooting services.",
    chipMatch: "Software Repair",
    category: "software",
    image: "/images/phone_software_repair.jpg",
    turnaround: "1-2 Hours",
  },
  {
    id: "network-wifi",
    title: "OnePlus Network, Wi-Fi & Bluetooth Repair",
    icon: "wifi",
    desc: "Weak signal reception, dropped calls, Wi-Fi disconnections, or Bluetooth pairing failures can limit connectivity. We diagnose and repair antenna flexes, network ICs, and wireless transceivers.",
    chipMatch: "Network, Wi-Fi & Bluetooth",
    category: "hardware",
    image: "/images/phone_network_wifi_repair.jpg",
    turnaround: "Same-Day",
  },
  {
    id: "fingerprint",
    title: "OnePlus Fingerprint Sensor Repair",
    icon: "fingerprint",
    desc: "If your in-display optical or side-mounted fingerprint sensor fails to register touches, recognizes slowly, or stops working, we calibrate or replace faulty sensor hardware.",
    chipMatch: "Fingerprint Sensor Repair",
    category: "hardware",
    image: "/images/phone_fingerprint_repair.jpg",
    turnaround: "~2 Hours",
  },
  {
    id: "data-recovery",
    title: "OnePlus Data Recovery",
    icon: "cloud_sync",
    desc: "Lost access to important photos, contacts, or documents due to a dead or damaged phone? Our technicians use specialized chip-off recovery techniques to retrieve your critical data safely.",
    chipMatch: "Data Recovery",
    category: "software",
    image: "/images/phone_data_recovery.jpg",
    turnaround: "24-72 Hours",
  },
  {
    id: "cleaning",
    title: "OnePlus General Service & Internal Cleaning",
    icon: "cleaning_services",
    desc: "Dust, lint, and moisture buildup inside speaker grills, ports, and heat sinks cause overheating and muffled sound. We perform deep ultrasonic cleaning and thermal paste renewal.",
    chipMatch: "General Service & Internal Cleaning",
    category: "hardware",
    image: "/images/phone_cleaning_repair.jpg",
    turnaround: "45 Mins",
  },
];

export default function RepairCatalog({ onSelectService }: RepairCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const handleCardClick = (service: RepairService) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setExpandedCardId((prev) => (prev === service.id ? null : service.id));
    } else {
      onSelectService(service);
    }
  };

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "screen", label: "Screen & Glass" },
    { id: "battery", label: "Battery & Power" },
    { id: "hardware", label: "Hardware & Chip-Level" },
    { id: "software", label: "Software & OS" },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === "all") return true;
    return service.category === activeFilter;
  });

  return (
    <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-20 w-full mx-auto scroll-mt-20" id="repair-catalog">
      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <span className="text-[12px] font-bold tracking-widest uppercase text-[#eb0028] font-mono">
            PRECISION SERVICE CATALOG
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-zinc-950 tracking-[-0.03em] leading-[1.15]">
            Comprehensive OnePlus Repair Services
          </h2>
          <p className="text-[14px] sm:text-[15px] text-zinc-600 max-w-2xl leading-relaxed font-normal">
            Direct walk-in repair catalog across our LB Nagar and Tarnaka Secunderabad service hubs. Genuine-quality parts, 2-hour turnaround, and 90-day replacement warranty.
          </p>
        </div>

        {/* Clean Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-zinc-200">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.id);
                  setExpandedCardId(null);
                }}
                className={`px-4 py-2 text-[13px] font-bold whitespace-nowrap transition-colors relative cursor-pointer outline-none ${
                  isActive
                    ? "text-[#eb0028]"
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeCatalogUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eb0028]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 3-Column Service Grid (6-column base so remaining 2 cards can be centered) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 items-start relative">
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const isLastRowTwoRemainder =
                filteredServices.length % 3 === 2 &&
                index === filteredServices.length - 2;
              const isLastRowOneRemainder =
                filteredServices.length % 3 === 1 &&
                index === filteredServices.length - 1;

              let placement = "col-span-1 sm:col-span-1 lg:col-span-2";
              if (isLastRowTwoRemainder) {
                placement = "col-span-1 sm:col-span-1 lg:col-span-2 lg:col-start-2";
              } else if (isLastRowOneRemainder) {
                placement = "col-span-1 sm:col-span-1 lg:col-span-2 lg:col-start-3";
              }

              const isExpanded = expandedCardId === service.id;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleCardClick(service)}
                  className={`group relative rounded-[4px] border overflow-hidden bg-white hover:border-[#eb0028] shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(235,0,40,0.22)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isExpanded
                      ? "border-[#eb0028] shadow-[0_10px_28px_-4px_rgba(235,0,40,0.18)]"
                      : "border-zinc-200"
                  } ${placement}`}
                >
                {/* BAND 1: Dedicated Hardware Photograph with Floating Badges */}
                <div className="relative h-36 sm:h-44 overflow-hidden bg-zinc-950">
                  {/* Real Workshop/Component Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Cinematic gradient vignette for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50" />

                  {/* Floating Red Icon */}
                  <div className="absolute top-3 left-3 w-7 h-7 sm:w-8 sm:h-8 rounded-[4px] bg-[#eb0028] flex items-center justify-center text-white shadow-md z-10">
                    <span className="material-symbols-outlined text-[17px] sm:text-[18px]">
                      {service.icon}
                    </span>
                  </div>

                  {/* Turnaround Time: Pure white text, no background, no icon */}
                  <div className="absolute top-3.5 right-3.5 text-white text-[11px] sm:text-[12px] font-mono font-bold tracking-wider uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] z-10">
                    {service.turnaround || "~2 Hours"}
                  </div>

                  {/* Sharp Modern Diagonal Slant dividing Photo & Obsidian Band */}
                  <div className="absolute -bottom-0.5 left-0 right-0 h-4 pointer-events-none overflow-hidden z-20">
                    <svg className="w-full h-full" viewBox="0 0 400 16" preserveAspectRatio="none">
                      <polygon points="0,16 400,16 400,2 0,16" fill="#09090b" />
                      <line x1="0" y1="16" x2="400" y2="2" stroke="#eb0028" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* BAND 2: Obsidian Mid-Band with Bold Title & Mobile Expand Indicator */}
                <div className="relative bg-zinc-950 px-4 sm:px-5 pt-3 pb-6 text-white flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`font-extrabold text-[15px] sm:text-[16px] tracking-tight leading-snug transition-colors ${
                        isExpanded ? "text-[#eb0028]" : "text-white group-hover:text-[#eb0028]"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <span
                      className={`lg:hidden material-symbols-outlined text-[19px] transition-transform duration-300 shrink-0 ${
                        isExpanded ? "rotate-180 text-[#eb0028]" : "text-zinc-400"
                      }`}
                    >
                      expand_more
                    </span>
                  </div>

                  {/* Sharp Diagonal Slant dividing Obsidian Mid-Band & White Base (Seamless without red line) */}
                  <div className="absolute -bottom-0.5 left-0 right-0 h-4 pointer-events-none overflow-hidden z-20">
                    <svg className="w-full h-full" viewBox="0 0 400 16" preserveAspectRatio="none">
                      <polygon points="0,16 400,16 400,2 0,16" fill="#ffffff" />
                    </svg>
                  </div>
                </div>

                {/* BAND 3: Clean Porcelain White Base with Hover-Revealed Description & Warranty CTA */}
                <div className="px-4 sm:px-5 py-3 bg-white flex flex-col justify-between gap-2.5 transition-all duration-300">
                  {/* Detailed Description: smoothly reveals ON hover (desktop) or when clicked/expanded (mobile) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isExpanded
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0 lg:group-hover:max-h-60 lg:group-hover:opacity-100"
                    }`}
                  >
                    <p className="text-[12px] sm:text-[12.5px] text-zinc-600 leading-relaxed font-normal pt-1 pb-1.5">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bottom Row: Warranty + Action */}
                  <div className="flex items-center justify-between pt-1 border-t border-zinc-100 text-[11.5px] sm:text-[12px]">
                    <span className="text-zinc-500 font-medium flex items-center gap-1.5 whitespace-nowrap">
                      <span className="material-symbols-outlined text-[15px] text-[#eb0028]">verified</span>
                      <span>90-Day Warranty*</span>
                    </span>

                    <div className="flex items-center">
                      {/* Desktop View Action: hover reveals description, clicking card or text books */}
                      <span className="hidden lg:flex text-[#eb0028] font-bold items-center gap-1 whitespace-nowrap group-hover:translate-x-1 transition-transform">
                        <span>Book Walk-in</span>
                        <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                      </span>

                      {/* Mobile View Action: Toggles between "View Details ▾" and dedicated "Book Walk-in →" button */}
                      <div className="lg:hidden">
                        {isExpanded ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectService(service);
                            }}
                            className="px-3 py-1.5 rounded-[4px] bg-[#eb0028] hover:bg-black text-white font-bold text-[11px] tracking-wide flex items-center gap-1 shadow-xs transition-colors cursor-pointer"
                          >
                            <span>Book Walk-in</span>
                            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                          </button>
                        ) : (
                          <span className="text-[#eb0028] font-bold flex items-center gap-0.5 text-[11.5px]">
                            <span>View Details</span>
                            <span className="material-symbols-outlined text-[16px]">expand_more</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
