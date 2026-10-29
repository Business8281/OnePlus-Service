"use client";

import React, { useState } from "react";
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

interface ExpressBookingProps {
  selectedIssue: string;
  onSelectIssue: (issue: string) => void;
}

export default function ExpressBooking({
  selectedIssue,
  onSelectIssue,
}: ExpressBookingProps) {
  const [deviceModel, setDeviceModel] = useState("");
  const [hubLocation, setHubLocation] = useState("LB Nagar Center (Hyderabad)");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState<null | {
    model: string;
    hub: string;
    issue: string;
    phone: string;
    name: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const model = deviceModel.trim() || "OnePlus Device";
    const name = customerName.trim() || "Walk-In Customer";
    const issue = selectedIssue || "Screen & Display Replacement";
    const hub = hubLocation;

    const messageText =
      `Hello ONE PLUS SERVICE CENTER,\n\n` +
      `I would like to schedule a Walk-in Visit:\n\n` +
      `• Device Model: ${model}\n` +
      `• Service Requirement: ${issue}\n` +
      `• Service Center Hub: ${hub}\n` +
      `• Customer Name: ${name}\n` +
      `• Contact Mobile: +91 ${cleanPhone}\n\n` +
      `Please confirm technician bench availability.`;

    const whatsappUrl = `https://wa.me/917207207046?text=${encodeURIComponent(messageText)}`;

    setBookingSuccess({
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

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-[4px] bg-white dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800/80 text-[13px]">
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
                {/* Device Model Text Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="deviceModel" className="text-[11px] sm:text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                    1. Device Model
                  </label>
                  <input
                    type="text"
                    id="deviceModel"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder="Enter your device (e.g. OnePlus 12, Nord, Pad, Buds)"
                    className="w-full h-11 px-3.5 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] font-medium placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#eb0028] focus:border-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all"
                    required
                  />
                </div>

                {/* Service Requirement Selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="selectedIssue" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                    2. Service Requirement
                  </label>
                  <div className="relative">
                    <select
                      id="selectedIssue"
                      value={selectedIssue}
                      onChange={(e) => onSelectIssue(e.target.value)}
                      className="w-full h-11 pl-3.5 pr-10 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all cursor-pointer"
                      required
                    >
                      <optgroup label="Core Replacements">
                        <option value="Screen & Display Replacement">OnePlus Screen &amp; Display Replacement (120Hz Fluid AMOLED)</option>
                        <option value="Battery Replacement">OnePlus Battery Replacement &amp; Health Renewal</option>
                        <option value="Back Glass Replacement">Back Glass &amp; Housing Replacement</option>
                        <option value="Charging Port Repair">Warp / SUPERVOOC USB-C Charging Port Repair</option>
                      </optgroup>
                      <optgroup label="Motherboard &amp; Chip-Level">
                        <option value="Motherboard Repair">Advanced Motherboard &amp; BGA Chip-Level Repair</option>
                        <option value="Water Damage Repair">Liquid Ingress &amp; Ultrasonic Board Recovery</option>
                        <option value="Power & Volume Button Repair">Power Key &amp; Volume Rocker Flex Replacement</option>
                      </optgroup>
                      <optgroup label="Optics &amp; Audio">
                        <option value="Camera Repair & Replacement">Hasselblad &amp; Front Camera Module Replacement</option>
                        <option value="Speaker & Microphone Repair">Earpiece, Stereo Speaker &amp; Mic Repair</option>
                      </optgroup>
                      <optgroup label="System &amp; Diagnostics">
                        <option value="Software Repair">OxygenOS Bootloop, Freeze &amp; Firmware Flashing</option>
                        <option value="Network, Wi-Fi & Bluetooth">5G Antenna, Wi-Fi 7 &amp; Bluetooth IC Repair</option>
                        <option value="Fingerprint Sensor Repair">In-Display Optical Fingerprint Sensor Repair</option>
                        <option value="Data Recovery">Critical Logic Board Data Recovery</option>
                        <option value="General Service & Internal Cleaning">Deep Internal Dust &amp; Thermal Paste Cleaning</option>
                      </optgroup>
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-3 pointer-events-none text-zinc-400 text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Service Center Hub */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="hubLocation" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                    3. Hyderabad Service Center
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

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="customerName" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                      4. Your Name (Optional)
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full h-11 px-3.5 bg-white dark:bg-zinc-800/90 rounded-[4px] text-zinc-900 dark:text-zinc-100 text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-1 focus:ring-[#eb0028] border border-zinc-300 dark:border-zinc-700/80 transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="userPhone" className="text-[12px] font-mono uppercase font-bold text-zinc-700 dark:text-zinc-300">
                      5. Mobile Number *
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
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-[4px] bg-zinc-900 text-white border border-zinc-800 shadow-xl flex flex-col justify-between gap-6 relative overflow-hidden">
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
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider">Device Assigned</span>
                      <span className="text-[14px] font-bold text-zinc-100">{deviceModel.trim() || "Enter Device Model"}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider">Requested Service</span>
                      <span className="text-[14px] font-bold text-[#eb0028]">{selectedIssue || "Screen & Display Replacement"}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider">Location Center</span>
                      <span className="text-[13px] font-medium text-zinc-300">{hubLocation}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800 text-[12px]">
                    <div className="p-3 rounded-[4px] bg-zinc-800/60 border border-zinc-700/60 flex flex-col">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">Avg Turnaround</span>
                      <span className="font-bold text-white text-[13px]">120 Minutes</span>
                    </div>
                    <div className="p-3 rounded-[4px] bg-zinc-800/60 border border-zinc-700/60 flex flex-col">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">Warranty Guarantee</span>
                      <span className="font-bold text-white text-[13px]">90-Day Full</span>
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
