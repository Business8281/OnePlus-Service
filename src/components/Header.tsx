"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("");

  // Lock scroll-spy updates during programmatic smooth-scrolling to prevent jumping/jitter
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Services", href: "#repair-catalog", id: "repair-catalog" },
    { name: "Warranty", href: "#why-choose-us", id: "why-choose-us" },
    { name: "Diagnostic Lab", href: "#workshop-feed", id: "workshop-feed" },
    { name: "Locations", href: "#service-nodes", id: "service-nodes" },
    { name: "FAQ", href: "#faq-section", id: "faq-section" },
  ];

  // Helper to reliably scroll to any section accounting for fixed navbar height
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const navHeight = 62;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navHeight);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Re-enable scroll-spy immediately if user manually interacts with wheel or touch
  useEffect(() => {
    const cancelClickLock = () => {
      isClickScrollingRef.current = false;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };

    window.addEventListener("wheel", cancelClickLock, { passive: true });
    window.addEventListener("touchmove", cancelClickLock, { passive: true });
    return () => {
      window.removeEventListener("wheel", cancelClickLock);
      window.removeEventListener("touchmove", cancelClickLock);
    };
  }, []);

  // Dynamic Scroll-Spy: sorts sections by actual DOM vertical position
  useEffect(() => {
    const handleScroll = () => {
      // If user clicked a navigation item, do NOT let scroll-spy jump to intermediate sections
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY;

      // At top of page (Hero section), no section is active
      if (scrollY < 260) {
        setActiveNav("");
        return;
      }

      const sections = navLinks
        .map((link) => {
          const el = document.getElementById(link.id);
          return el ? { id: link.id, top: el.offsetTop } : null;
        })
        .filter((s): s is { id: string; top: number } => s !== null)
        .sort((a, b) => a.top - b.top);

      const scrollPos = scrollY + 120;
      let currentId = "";

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].top) {
          currentId = sections[i].id;
          break;
        }
      }

      setActiveNav(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    // Lock scroll-spy on the chosen target ID
    isClickScrollingRef.current = true;
    setActiveNav(id);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    // Keep lock active until smooth scroll completes (~1.2s)
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1200);

    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 bg-white/95 backdrop-blur-xl border-b border-zinc-200/80 transition-colors duration-300">
      <div className="w-full lg:w-[80%] mx-auto h-full px-3.5 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveNav("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 sm:gap-2.5 group outline-none"
        >
          <div className="w-7 h-7 rounded-[4px] bg-[#eb0028] flex items-center justify-center text-white font-extrabold text-[13px] leading-none shadow-sm group-hover:bg-[#cf0023] transition-colors">
            1+
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-extrabold text-[14px] sm:text-[15px] tracking-wider text-zinc-950">
              ONEPLUS
            </span>
            <span className="h-3 w-px bg-zinc-300 hidden sm:inline-block" />
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider hidden sm:inline-block">
              Service Center
            </span>
          </div>
        </a>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-[13px] lg:text-[13.5px] transition-colors duration-200 outline-none focus:outline-none focus:ring-0 relative py-1 cursor-pointer select-none ${
                  isActive
                    ? "text-[#eb0028] font-bold"
                    : "text-zinc-600 hover:text-zinc-950 font-semibold"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#eb0028]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Hotline (Desktop) */}
          <a
            href="tel:+917207207046"
            className="hidden lg:flex items-center gap-1.5 text-[12.5px] font-bold text-zinc-800 hover:text-[#eb0028] transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-[#eb0028]">call</span>
            <span>Call Support</span>
          </a>

          {/* Quick Call Button on Mobile */}
          <a
            href="tel:+917207207046"
            className="sm:hidden w-8 h-8 rounded-[4px] bg-[#eb0028] hover:bg-black text-white flex items-center justify-center transition-colors shadow-xs"
            aria-label="Call Service Center"
          >
            <span className="material-symbols-outlined text-[17px]">call</span>
          </a>

          {/* Schedule Visit CTA Button (Tablet & Desktop) */}
          <a
            href="#express-booking"
            onClick={(e) => handleNavClick(e, "express-booking")}
            className="hidden sm:inline-flex px-4 sm:px-5 py-2 rounded-[4px] bg-[#eb0028] hover:bg-black text-white text-[12px] font-bold tracking-wide transition-colors duration-200 shadow-sm whitespace-nowrap"
          >
            Schedule Visit
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-[4px] flex items-center justify-center text-zinc-900 border border-zinc-200 bg-white shadow-xs cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <span
                className={`absolute h-0.5 w-4 bg-zinc-900 transition-all duration-200 rounded-full ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-4 bg-zinc-900 transition-all duration-200 rounded-full ${
                  mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-4 bg-zinc-900 transition-all duration-200 rounded-full ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-b border-zinc-200 shadow-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeNav === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      isClickScrollingRef.current = true;
                      setActiveNav(link.id);

                      if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current);
                      }
                      scrollTimeoutRef.current = setTimeout(() => {
                        isClickScrollingRef.current = false;
                      }, 1200);

                      // Wait 60ms for dropdown close to register, then smooth scroll reliably
                      setTimeout(() => {
                        scrollToSection(link.id);
                      }, 60);
                    }}
                    className={`text-[15px] font-bold py-2.5 border-b border-zinc-100/80 flex items-center transition-colors cursor-pointer ${
                      isActive ? "text-[#eb0028]" : "text-zinc-800 hover:text-[#eb0028]"
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
              <a
                href="#express-booking"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  isClickScrollingRef.current = true;
                  setActiveNav("express-booking");

                  if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                  }
                  scrollTimeoutRef.current = setTimeout(() => {
                    isClickScrollingRef.current = false;
                  }, 1200);

                  setTimeout(() => {
                    scrollToSection("express-booking");
                  }, 60);
                }}
                className="mt-2 w-full py-2.5 rounded-[4px] bg-[#eb0028] hover:bg-black text-white text-[13px] font-bold text-center tracking-wide flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              >
                <span>Schedule Visit</span>
              </a>

              <div className="pt-2 flex flex-col gap-2 text-[12px] text-zinc-500">
                <a
                  href="tel:+917207207046"
                  className="flex items-center gap-2 text-[13.5px] font-bold text-[#eb0028] py-1"
                >
                  <span className="material-symbols-outlined text-[17px]">call</span>
                  <span>Hotline: +91 72072 07046</span>
                </a>
                <div className="flex flex-col text-[11px] text-zinc-600 bg-zinc-50 p-2.5 rounded-[4px] border border-zinc-200/80">
                  <span className="font-bold text-zinc-800">LB Nagar &amp; Tarnaka Secunderabad Centers</span>
                  <span>Open 7 Days • 9:30 AM – 8:30 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
