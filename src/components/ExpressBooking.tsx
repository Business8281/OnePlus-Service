"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const issueChipsList = [
  "Screen & Display Replacement",
  "Battery Replacement",
  "Charging Port Repair",
  "Motherboard Repair",
  "Camera Repair & Replacement",
  "Speaker & Microphone Repair",
  "Back Glass Replacement",
  "Power & Volume Button Repair",
  "Water Damage Repair",
  "Software Repair",
  "Network, Wi-Fi & Bluetooth",
  "Fingerprint Sensor Repair",
  "Data Recovery",
  "General Service & Internal Cleaning",
];

export interface ServiceOption {
  value: string;
  label: string;
  turnaround?: string;
}

export interface CategoryConfig {
  label: string;
  placeholder: string;
  defaultTurnaround: string;
  defaultWarranty: string;
  groups: {
    groupLabel: string;
    options: ServiceOption[];
  }[];
}

export const CATEGORY_SERVICES: Record<string, CategoryConfig> = {
  Mobile: {
    label: "Mobile",
    placeholder: "Enter your device (e.g. OnePlus 12, 11, Open, Nord 4, 10R)",
    defaultTurnaround: "120 Minutes",
    defaultWarranty: "90-Day Full",
    groups: [
      {
        groupLabel: "Core Replacements",
        options: [
          {
            value: "Screen & Display Replacement",
            label: "OnePlus Screen & Display Replacement (120Hz Fluid AMOLED)",
            turnaround: "120 Minutes",
          },
          {
            value: "Battery Replacement",
            label: "OnePlus Battery Replacement & Health Renewal",
            turnaround: "45 Minutes",
          },
          {
            value: "Back Glass Replacement",
            label: "Back Glass & Housing Replacement",
            turnaround: "60 Minutes",
          },
          {
            value: "Charging Port Repair",
            label: "Warp / SUPERVOOC USB-C Charging Port Repair",
            turnaround: "60 Minutes",
          },
        ],
      },
      {
        groupLabel: "Motherboard & Chip-Level",
        options: [
          {
            value: "Motherboard Repair",
            label: "Advanced Motherboard & BGA Chip-Level Repair",
            turnaround: "Same-Day",
          },
          {
            value: "Water Damage Repair",
            label: "Liquid Ingress & Ultrasonic Board Recovery",
            turnaround: "Same-Day",
          },
          {
            value: "Power & Volume Button Repair",
            label: "Power Key & Volume Rocker Flex Replacement",
            turnaround: "45 Minutes",
          },
        ],
      },
      {
        groupLabel: "Optics & Audio",
        options: [
          {
            value: "Camera Repair & Replacement",
            label: "Hasselblad & Front Camera Module Replacement",
            turnaround: "90 Minutes",
          },
          {
            value: "Speaker & Microphone Repair",
            label: "Earpiece, Stereo Speaker & Mic Repair",
            turnaround: "60 Minutes",
          },
        ],
      },
      {
        groupLabel: "System & Diagnostics",
        options: [
          {
            value: "Software Repair",
            label: "OxygenOS Bootloop, Freeze & Firmware Flashing",
            turnaround: "60 Minutes",
          },
          {
            value: "Network, Wi-Fi & Bluetooth",
            label: "5G Antenna, Wi-Fi 7 & Bluetooth IC Repair",
            turnaround: "Same-Day",
          },
          {
            value: "Fingerprint Sensor Repair",
            label: "In-Display Optical Fingerprint Sensor Repair",
            turnaround: "60 Minutes",
          },
          {
            value: "Data Recovery",
            label: "Critical Logic Board Data Recovery",
            turnaround: "24-48 Hours",
          },
          {
            value: "General Service & Internal Cleaning",
            label: "Deep Internal Dust & Thermal Paste Cleaning",
            turnaround: "45 Minutes",
          },
        ],
      },
    ],
  },
  Tablet: {
    label: "Tablet",
    placeholder: "Enter your tablet (e.g. OnePlus Pad 2, Pad Go, OnePlus Pad)",
    defaultTurnaround: "2 - 3 Hours",
    defaultWarranty: "90-Day Full",
    groups: [
      {
        groupLabel: "Display & Battery",
        options: [
          {
            value: "Tablet Screen & Glass Replacement",
            label: "OnePlus Pad Display & Touch Glass Replacement (144Hz)",
            turnaround: "2 Hours",
          },
          {
            value: "Tablet Battery Replacement",
            label: "OnePlus Pad Battery Replacement & Health Renewal",
            turnaround: "90 Minutes",
          },
          {
            value: "Tablet USB-C Charging Port Repair",
            label: "67W SUPERVOOC USB-C Charging Port Repair",
            turnaround: "60 Minutes",
          },
        ],
      },
      {
        groupLabel: "Audio, Logic & Hardware",
        options: [
          {
            value: "Tablet Motherboard Repair",
            label: "Logic Board & Power Management IC Repair",
            turnaround: "Same-Day",
          },
          {
            value: "Tablet Quad Speaker Repair",
            label: "Omni-Bearing Quad Speaker & Mic Repair",
            turnaround: "90 Minutes",
          },
          {
            value: "Tablet Stylus & Digitizer Repair",
            label: "OnePlus Stylo & Digitizer Sensor Calibration",
            turnaround: "60 Minutes",
          },
          {
            value: "Tablet Water Damage Recovery",
            label: "Liquid Ingress Ultrasonic Board Diagnostics",
            turnaround: "Same-Day",
          },
          {
            value: "Tablet Software & Bootloop Repair",
            label: "OxygenOS Pad Firmware Recovery & System Fix",
            turnaround: "60 Minutes",
          },
          {
            value: "Tablet General Inspection",
            label: "Internal Thermal Cleaning & Hardware Diagnostics",
            turnaround: "45 Minutes",
          },
        ],
      },
    ],
  },
  Earbuds: {
    label: "Earbuds",
    placeholder: "Enter your earbuds (e.g. OnePlus Buds Pro 3, Buds 3, Nord Buds 3)",
    defaultTurnaround: "45 Minutes",
    defaultWarranty: "90-Day Full",
    groups: [
      {
        groupLabel: "Battery & Case",
        options: [
          {
            value: "Earbud Battery Replacement",
            label: "Left / Right Earbud Battery Replacement",
            turnaround: "45 Minutes",
          },
          {
            value: "Charging Case Battery & Port Repair",
            label: "Charging Case Battery & USB-C Port Repair",
            turnaround: "45 Minutes",
          },
        ],
      },
      {
        groupLabel: "Audio & Diagnostics",
        options: [
          {
            value: "Low Volume & Sound Imbalance Fix",
            label: "Low Volume, Distortion & Sound Imbalance Fix",
            turnaround: "30 Minutes",
          },
          {
            value: "ANC & Microphone Repair",
            label: "Active Noise Cancellation (ANC) & Mic Repair",
            turnaround: "45 Minutes",
          },
          {
            value: "Bluetooth Pairing & Connection Fix",
            label: "Bluetooth 5.4 Pairing & Connection Drop Fix",
            turnaround: "30 Minutes",
          },
          {
            value: "Acoustic Mesh Cleaning & Sanitization",
            label: "Deep Acoustic Mesh Cleaning & Ultrasonic Sanitization",
            turnaround: "30 Minutes",
          },
          {
            value: "Firmware Flashing & Sync Reset",
            label: "Earbuds Firmware Flash & Hardware Reset",
            turnaround: "30 Minutes",
          },
          {
            value: "Single Earbud Replacement & Pairing",
            label: "Single Earbud Replacement & Case Pairing Sync",
            turnaround: "20 Minutes",
          },
        ],
      },
    ],
  },
  Watches: {
    label: "Watches",
    placeholder: "Enter your watch (e.g. OnePlus Watch 2, Watch 2R, OnePlus Watch)",
    defaultTurnaround: "60 Minutes",
    defaultWarranty: "90-Day Full",
    groups: [
      {
        groupLabel: "Display & Battery",
        options: [
          {
            value: "Watch AMOLED Display Replacement",
            label: "OnePlus Watch AMOLED Display & Glass Replacement",
            turnaround: "60 Minutes",
          },
          {
            value: "Watch Battery Replacement",
            label: "Smartwatch Battery Replacement & Rapid Drain Fix",
            turnaround: "45 Minutes",
          },
          {
            value: "Magnetic Charging Dock Repair",
            label: "Magnetic Fast-Charging Pin & Connector Repair",
            turnaround: "45 Minutes",
          },
        ],
      },
      {
        groupLabel: "Sensors & Chassis",
        options: [
          {
            value: "Health Sensor Array Repair",
            label: "Heart Rate, SpO2 & Sleep Sensor Repair",
            turnaround: "60 Minutes",
          },
          {
            value: "Crown & Side Button Repair",
            label: "Rotary Crown & Push Button Flex Repair",
            turnaround: "45 Minutes",
          },
          {
            value: "Water Resistance Seal Restoration",
            label: "5ATM / IP68 Water Resistance Seal Restoration",
            turnaround: "60 Minutes",
          },
          {
            value: "Wear OS System Crash & Sync Fix",
            label: "Wear OS System Crash, Bootloop & Phone Sync Fix",
            turnaround: "45 Minutes",
          },
          {
            value: "Chassis & Strap Connector Repair",
            label: "Stainless Steel Chassis & Lug Connector Repair",
            turnaround: "45 Minutes",
          },
        ],
      },
    ],
  },
};

interface ExpressBookingProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  selectedIssue: string;
  onSelectIssue: (issue: string) => void;
}

export default function ExpressBooking({
  selectedCategory = "Mobile",
  onSelectCategory,
  selectedIssue,
  onSelectIssue,
}: ExpressBookingProps) {
  const [deviceModel, setDeviceModel] = useState("");
  const [hubLocation, setHubLocation] = useState("LB Nagar Center (Hyderabad)");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState<null | {
    category: string;
    model: string;
    hub: string;
    issue: string;
    phone: string;
    name: string;
  }>(null);

  const currentCategory = selectedCategory || "Mobile";
  const categoryData =
    CATEGORY_SERVICES[currentCategory] || CATEGORY_SERVICES["Mobile"];

  // Ensure selected issue is valid for the current category
  useEffect(() => {
    const allOptions = categoryData.groups.flatMap((g) => g.options);
    const hasMatch = allOptions.some((opt) => opt.value === selectedIssue);
    if (!hasMatch && allOptions.length > 0) {
      onSelectIssue(allOptions[0].value);
    }
  }, [currentCategory, categoryData, selectedIssue, onSelectIssue]);

  const handleCategoryChange = (newCategory: string) => {
    onSelectCategory?.(newCategory);
    const newCatData = CATEGORY_SERVICES[newCategory];
    if (newCatData && newCatData.groups[0]?.options[0]) {
      onSelectIssue(newCatData.groups[0].options[0].value);
    }
  };

  // Find turnaround time of selected issue or fall back to category default
  let turnaroundTime = categoryData.defaultTurnaround;
  for (const group of categoryData.groups) {
    const match = group.options.find((opt) => opt.value === selectedIssue);
    if (match && match.turnaround) {
      turnaroundTime = match.turnaround;
      break;
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const cleanName = customerName.trim();
    if (!cleanName) {
      alert("Please enter your name.");
      return;
    }

    const category = currentCategory;
    const model = deviceModel.trim() || `OnePlus ${category}`;
    const name = cleanName;
    const issue = selectedIssue || categoryData.groups[0]?.options[0]?.value || "General Service";
    const hub = hubLocation;

    const messageText =
      `Hello ONE PLUS SERVICE CENTER,\n\n` +
      `I would like to schedule a Walk-in Visit:\n\n` +
      `• Category: ${category}\n` +
      `• Device Model: ${model}\n` +
      `• Service Requirement: ${issue}\n` +
      `• Service Center Hub: ${hub}\n` +
      `• Customer Name: ${name}\n` +
      `• Contact Mobile: +91 ${cleanPhone}\n\n` +
      `Please confirm technician bench availability.`;

    const whatsappUrl = `https://wa.me/917207207046?text=${encodeURIComponent(messageText)}`;

    setBookingSuccess({
      category,
      model,
      hub,
      issue,
      phone: cleanPhone,
      name,
    });

    // Directly route to WhatsApp with the entered details
    if (typeof window !== "undefined") {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = whatsappUrl;
      } else {
        const win = window.open(whatsappUrl, "_blank");
        if (!win || win.closed || typeof win.closed === "undefined") {
          window.location.href = whatsappUrl;
        }
      }
    }
  };

  const handleReset = () => {
    setBookingSuccess(null);
  };

  const whatsappMessage = bookingSuccess
    ? encodeURIComponent(
        `Hello ONE PLUS SERVICE CENTER,\n\n` +
          `I would like to schedule a Walk-in Visit:\n\n` +
          `• Category: ${bookingSuccess.category}\n` +
          `• Device Model: ${bookingSuccess.model}\n` +
          `• Service Requirement: ${bookingSuccess.issue}\n` +
          `• Service Center Hub: ${bookingSuccess.hub}\n` +
          `• Customer Name: ${bookingSuccess.name}\n` +
          `• Contact Mobile: +91 ${bookingSuccess.phone}\n\n` +
          `Please confirm technician bench availability.`
      )
    : "";

  return (
    <section className="px-3.5 sm:px-6 md:px-8 py-10 sm:py-20 w-full mx-auto scroll-mt-20" id="express-booking">
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-[2px] bg-[#eb0028]" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-widest uppercase text-[#eb0028] font-mono">
              EXPRESS SERVICE INTAKE
            </span>
          </div>

          <h2 className="text-2xl sm:text-[36px] font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Schedule Your Walk-In Service
          </h2>
          <p className="text-xs sm:text-[14px] text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Book priority bench time at our LB Nagar or Tarnaka Secunderabad service hubs. Immediate check-in with genuine-quality spare parts and 90-day replacement warranty.
          </p>
        </div>

        {/* Dynamic Success State vs MNC 2-Column Console */}
        <AnimatePresence mode="wait">
          {bookingSuccess ? (
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-5 sm:p-10 rounded-[4px] bg-zinc-50/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-white/[0.09] shadow-2xl backdrop-blur-xl flex flex-col gap-5 sm:gap-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800">
                <div>
                  <h3 className="text-[22px] sm:text-[26px] font-extrabold text-zinc-900 dark:text-white leading-tight">
                    Walk-In Service Booking Summary
                  </h3>
                  <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Your service intake details have been recorded.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[12px] font-mono text-[#eb0028] hover:text-[#cf0023] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  [Schedule Another Device]
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-5 rounded-[4px] bg-white dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800/80 text-[13px]">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-mono uppercase">Category</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{bookingSuccess.category}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-mono uppercase">Device Model</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{bookingSuccess.model}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-mono uppercase">Service Concern</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{bookingSuccess.issue}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-mono uppercase">Selected Hub</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{bookingSuccess.hub}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-[11px] font-mono uppercase">Contact Mobile</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">+91 {bookingSuccess.phone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/917207207046?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-fit inline-flex bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 sm:py-3 px-6 rounded-[4px] items-center justify-center gap-2 text-[13px] tracking-wide shadow-md transition-all cursor-pointer text-center"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>CONFIRM ON WHATSAPP</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-fit inline-flex bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold py-3.5 sm:py-3 px-6 rounded-[4px] text-[13px] border border-zinc-200/90 dark:border-zinc-700/80 transition-all cursor-pointer items-center justify-center text-center"
                >
                  DONE
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
              {/* Form Console (7 Cols) */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-7 p-4 sm:p-8 rounded-xl sm:rounded-[4px] bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-white/[0.08] backdrop-blur-xl shadow-lg flex flex-col gap-4 sm:gap-5"
              >
                {/* 1. Category Selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="categorySelect" className="text-[11px] sm:text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                    1. Category
                  </label>
                  <div className="relative">
                    <select
                      id="categorySelect"
                      value={currentCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full h-11 pl-3.5 pr-10 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all cursor-pointer"
                      required
                    >
                      <option value="Mobile">Mobile</option>
                      <option value="Tablet">Tablet</option>
                      <option value="Earbuds">Earbuds</option>
                      <option value="Watches">Watches</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-3 pointer-events-none text-zinc-400 text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* 2. Device Model Text Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="deviceModel" className="text-[11px] sm:text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                    2. Device Model
                  </label>
                  <input
                    type="text"
                    id="deviceModel"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder={categoryData.placeholder}
                    className="w-full h-11 px-3.5 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] font-medium placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#eb0028] focus:border-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all"
                    required
                  />
                </div>

                {/* 3. Service Requirement Selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="selectedIssue" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                    3. Service Requirement
                  </label>
                  <div className="relative">
                    <select
                      id="selectedIssue"
                      value={selectedIssue}
                      onChange={(e) => onSelectIssue(e.target.value)}
                      className="w-full h-11 pl-3.5 pr-10 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all cursor-pointer"
                      required
                    >
                      {categoryData.groups.map((group) => (
                        <optgroup key={group.groupLabel} label={group.groupLabel}>
                          {group.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-3 pointer-events-none text-zinc-400 text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* 4. Service Center Hub */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="hubLocation" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                    4. Hyderabad Service Center
                  </label>
                  <div className="relative">
                    <select
                      id="hubLocation"
                      value={hubLocation}
                      onChange={(e) => setHubLocation(e.target.value)}
                      className="w-full h-11 pl-3.5 pr-10 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all cursor-pointer"
                      required
                    >
                      <option value="LB Nagar Center (Hyderabad)">
                        LB Nagar Center — Main Commercial Hub, Hyderabad
                      </option>
                      <option value="Tarnaka Secunderabad Center">
                        Tarnaka Center — Secunderabad, Hyderabad
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-3 pointer-events-none text-zinc-400 text-[20px]">
                      location_on
                    </span>
                  </div>
                </div>

                {/* 5. Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="customerName" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                      5. Your Name *
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full h-11 px-3.5 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-1 focus:ring-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all placeholder:text-zinc-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="userPhone" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                      6. Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-zinc-500 font-mono text-[13px] font-bold select-none">
                        +91
                      </span>
                      <input
                        id="userPhone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) =>
                          setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        pattern="[0-9]{10}"
                        placeholder="98765 43210"
                        className="w-full h-11 pl-12 pr-3.5 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] font-medium focus:outline-none focus:ring-1 focus:ring-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all placeholder:text-zinc-400 font-mono"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full bg-[#eb0028] hover:bg-[#cf0023] text-white text-[13.5px] sm:text-[14px] py-4 px-6 rounded-[4px] font-bold flex items-center justify-center gap-2.5 shadow-md shadow-[#eb0028]/25 uppercase tracking-wide transition-all mt-1 cursor-pointer"
                >
                  <span>CONFIRM PRIORITY WALK-IN RESERVATION</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>

              {/* Live Service Pass Card (5 Cols) */}
              <div className="lg:col-span-5 lg:self-center p-6 sm:p-7 rounded-[4px] bg-zinc-900 text-white border border-zinc-800 shadow-xl flex flex-col justify-between gap-6 relative overflow-hidden">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-[3px] bg-[#eb0028] flex items-center justify-center font-extrabold text-[12px] leading-none text-white">
                        1+
                      </div>
                      <span className="text-[12px] font-bold tracking-wider uppercase font-mono">
                        WALK-IN SERVICE PASS
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#eb0028] uppercase tracking-wider">
                      {currentCategory}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider">Category</span>
                        <span className="text-[14px] font-bold text-zinc-100">{currentCategory}</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider">Device Assigned</span>
                      <span className="text-[14px] font-bold text-zinc-100">
                        {deviceModel.trim() || "Enter Device Model"}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider">Requested Service</span>
                      <span className="text-[14px] font-bold text-[#eb0028] leading-snug">
                        {selectedIssue || categoryData.groups[0]?.options[0]?.value || "Screen & Display Replacement"}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider">Location Center</span>
                      <span className="text-[13px] font-medium text-zinc-300">{hubLocation}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800 text-[12px]">
                    <div className="p-3 rounded-[4px] bg-zinc-800/60 border border-zinc-700/60 flex flex-col">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">Avg Turnaround</span>
                      <span className="font-bold text-white text-[13px]">{turnaroundTime}</span>
                    </div>
                    <div className="p-3 rounded-[4px] bg-zinc-800/60 border border-zinc-700/60 flex flex-col">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">Warranty Guarantee</span>
                      <span className="font-bold text-white text-[13px]">{categoryData.defaultWarranty}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex flex-col gap-1.5 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-[#eb0028] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Mon - Sun: 10:00 AM – 8:30 PM (Daily Walk-Ins)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-[#eb0028] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Direct Helpline: +91 72072 07046</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
