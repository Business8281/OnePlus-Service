"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  category: "repairs" | "warranty" | "turnaround" | "locations";
  question: string;
  answer: string;
  highlight?: string;
}

const faqData: FAQItem[] = [
  {
    id: "parts-quality",
    category: "repairs",
    question: "Do you use genuine-quality parts for OnePlus screen and battery replacements?",
    answer: "Yes, absolutely. We use factory-calibrated OEM-grade components, including 120Hz Fluid AMOLED displays with full HDR10+ support, optical in-display fingerprint responsiveness, and high-density Li-ion battery cells that support Warp and SUPERVOOC fast charging.",
    highlight: "Factory-calibrated 120Hz Fluid AMOLED & SUPERVOOC compatible parts.",
  },
  {
    id: "warranty-coverage",
    category: "warranty",
    question: "What is covered under the 90-Day Replacement Warranty?",
    answer: "Every repaired or replaced component — including AMOLED screens, batteries, motherboard ICs, charging ports, and camera modules — is protected under our official 90-Day Parts Replacement Warranty. If any manufactured defect or touch/display malfunction occurs, we replace it with zero labor charges.",
    highlight: "Comprehensive 90-day parts replacement with zero labor fees.",
  },
  {
    id: "turnaround-time",
    category: "turnaround",
    question: "How long does a typical OnePlus repair take? Is same-day service available?",
    answer: "Most routine repairs — such as broken screen replacement, battery renewal, charging port repair, and speaker/mic servicing — are completed within 2 hours while you wait in our comfortable lounge. Complex chip-level motherboard diagnostics typically take 24 to 48 hours.",
    highlight: "2-hour express turnaround for common repairs; same-day counter return.",
  },
  {
    id: "green-line-issue",
    category: "repairs",
    question: "Can you fix the OnePlus Green Line display issue and dead motherboards?",
    answer: "Yes. The green vertical line issue is a known AMOLED panel fault across OnePlus 8, 9, 10, and 11 series. We provide direct display replacements to resolve it permanently. For dead phones, our specialists perform advanced microscopic BGA chip-level micro-soldering and ultrasonic cleaning.",
    highlight: "Specialized green line fixes and BGA micro-soldering board recovery.",
  },
  {
    id: "locations-hours",
    category: "locations",
    question: "Where are your service centers located in Hyderabad and what are your working hours?",
    answer: "We operate two prime walk-in service centers in Hyderabad: (1) LB Nagar Center: Main Commercial Hub, LB Nagar. (2) Tarnaka Secunderabad Center: Main Road, Tarnaka, Secunderabad. Both hubs are open 7 days a week, Monday through Sunday, from 9:30 AM to 8:30 PM.",
    highlight: "LB Nagar & Tarnaka Secunderabad • Open 7 days (9:30 AM – 8:30 PM).",
  },
  {
    id: "data-safety",
    category: "repairs",
    question: "Will my photos, chats, and private data remain safe during the repair?",
    answer: "Yes. Your privacy and data integrity are strictly protected. For hardware replacements like screens, batteries, cameras, and buttons, your storage is never accessed or wiped. While we always recommend a personal backup as a general precaution, data loss is never a routine part of hardware repair.",
    highlight: "Zero data access policy; personal files remain untouched during hardware swaps.",
  },
  {
    id: "booking-walkin",
    category: "turnaround",
    question: "Do I need to schedule an appointment before visiting your center?",
    answer: "Walk-ins are always welcomed warmly without prior notice. However, booking your visit online through our express scheduler is recommended because it reserves your required spare part in advance, ensuring our technicians begin your repair the moment you check in.",
    highlight: "Walk-ins welcome anytime; booking ahead guarantees priority part reservation.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "repairs", label: "Repairs & Parts" },
    { id: "warranty", label: "Warranty & Guarantee" },
    { id: "turnaround", label: "Turnaround & Timing" },
    { id: "locations", label: "Locations & Hours" },
  ];

  const filteredFaqs = faqData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 py-14 sm:py-20 w-full mx-auto scroll-mt-20" id="faq-section">
      <div className="flex flex-col gap-8 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 border-b border-zinc-200">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#eb0028] font-mono">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[26px] sm:text-[38px] md:text-[42px] font-black text-zinc-950 tracking-[-0.03em] leading-[1.15]">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <p className="text-[13.5px] sm:text-[15px] text-zinc-600 max-w-md leading-relaxed font-normal">
            Clear, transparent answers about our genuine-quality parts, 90-day warranty, 2-hour repair turnaround, and walk-in locations across Hyderabad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-zinc-200">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-bold whitespace-nowrap transition-colors relative cursor-pointer outline-none ${
                  isActive
                    ? "text-[#eb0028]"
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="activeFaqUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eb0028]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List with Click Toggle */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                data-faq-id={faq.id}
                onMouseEnter={() => setOpenId(faq.id)}
                className={`rounded-[4px] border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? "border-[#eb0028] shadow-[0_4px_20px_rgba(235,0,40,0.08)]"
                    : "border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  onFocus={() => setOpenId(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer outline-none select-none"
                >
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5">
                    <span className="text-[11.5px] font-mono font-bold text-zinc-400 mt-0.5 sm:mt-0">
                      0{index + 1}
                    </span>
                    <span
                      className={`text-[14px] sm:text-[16px] font-bold tracking-tight transition-colors leading-snug ${
                        isOpen ? "text-[#eb0028]" : "text-zinc-950 hover:text-[#eb0028]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-[4px] flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#eb0028] text-white rotate-180"
                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                      expand_more
                    </span>
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-zinc-100 flex flex-col gap-3">
                        <p className="text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed font-normal">
                          {faq.answer}
                        </p>

                        {faq.highlight && (
                          <div className="p-2.5 sm:p-3 rounded-[4px] bg-zinc-50 border border-zinc-200/80 flex items-center gap-2 text-[11.5px] sm:text-[12px] font-medium text-zinc-800">
                            <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-[#eb0028] shrink-0">
                              verified
                            </span>
                            <span>{faq.highlight}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Direct Assistance Box */}
        <div className="rounded-[4px] p-5 sm:p-8 bg-zinc-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 border border-zinc-800">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#eb0028] uppercase">
              HYDERABAD DIRECT HELPDESK
            </span>
            <h3 className="text-[17px] sm:text-[20px] font-extrabold text-white tracking-tight">
              Still have questions about your OnePlus device?
            </h3>
            <p className="text-[12.5px] sm:text-[13px] text-zinc-400 leading-relaxed font-normal">
              Speak directly with our senior hardware technicians at our LB Nagar or Tarnaka Secunderabad service hubs for immediate guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+917207207046"
              className="px-5 py-2.5 rounded-[4px] bg-[#eb0028] hover:bg-black text-white text-[12.5px] font-bold tracking-wide transition-colors duration-200 flex items-center justify-center gap-2 shadow-xs w-full sm:w-auto"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>Schedule a Call</span>
            </a>
            <a
              href="#express-booking"
              className="px-5 py-2.5 rounded-[4px] bg-white/10 hover:bg-white hover:text-zinc-950 text-white text-[12.5px] font-bold tracking-wide transition-all border border-white/20 text-center w-full sm:w-auto"
            >
              Book Walk-in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
