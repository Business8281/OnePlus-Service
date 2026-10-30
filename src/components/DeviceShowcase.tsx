"use client";

import React from "react";

interface DeviceCard {
  id: string;
  name: string;
  image: string;
  categoryTag: string;
  categoryName?: string;
}

const midDevices: DeviceCard[] = [
  {
    id: "foldables",
    name: "OnePlus Open",
    image: "/images/oneplus_open_foldable.jpg",
    categoryTag: "Screen & Display Replacement",
    categoryName: "Mobile",
  },
  {
    id: "nord",
    name: "Nord Series",
    image: "/images/oneplus_nord_card.jpg",
    categoryTag: "Battery Replacement",
    categoryName: "Mobile",
  },
];

const squareDevices: DeviceCard[] = [
  {
    id: "earbuds",
    name: "Earbuds",
    image: "/images/oneplus_buds_card.jpg",
    categoryTag: "Earbud Battery Replacement",
    categoryName: "Earbuds",
  },
  {
    id: "tablets",
    name: "Tablets",
    image: "/images/oneplus_pad_card.jpg",
    categoryTag: "Tablet Screen & Glass Replacement",
    categoryName: "Tablet",
  },
  {
    id: "watches",
    name: "Watches",
    image: "/images/oneplus_watch_card.jpg",
    categoryTag: "Watch AMOLED Display Replacement",
    categoryName: "Watches",
  },
];

interface DeviceShowcaseProps {
  onSelectDevice?: (issue: string, category?: string) => void;
}

export default function DeviceShowcase({ onSelectDevice }: DeviceShowcaseProps) {
  const handleVisit = (issue?: string, category?: string) => {
    if (issue && onSelectDevice) {
      onSelectDevice(issue, category);
    }
    const bookingSection = document.getElementById("express-booking");
    if (bookingSection) {
      const navHeight = 60;
      const elementPosition = bookingSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-3.5 sm:px-6 md:px-8 py-8 sm:py-14 w-full mx-auto scroll-mt-20" id="devices-we-service">
      {/* Clean Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-zinc-200">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#eb0028] block mb-1">
            ONEPLUS AUTHORIZED SERVICE
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight">
            Devices We Service
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-500 max-w-sm">
          Select your device family below to visit our LB Nagar or Tarnaka Secunderabad centers.
        </p>
      </div>

      {/* Bento Grid: 2 columns on mobile, 6 on tablet, 12 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-5">
        {/* ========================================================================= */}
        {/* CARD 1: FLAGSHIPS (Separate Standalone Vertical Rectangle Card)            */}
        {/* ========================================================================= */}
        <div
          onClick={() => handleVisit("Screen & Display Replacement", "Mobile")}
          className="col-span-2 sm:col-span-3 lg:col-span-3 lg:row-span-2 min-h-[220px] sm:min-h-[360px] lg:min-h-[490px] group relative rounded-2xl overflow-hidden bg-zinc-950 cursor-pointer border border-zinc-200/80 shadow-xs hover:shadow-2xl hover:border-[#eb0028] transition-all duration-300 flex flex-col justify-end p-4 sm:p-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/oneplus_flagship_portrait.jpg"
            alt="OnePlus Flagships"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:via-black/50 transition-all duration-300" />

          <div className="relative z-10">
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Flagships
            </h3>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TEXT: Introduction & Overview (Gracefully Fills Vertical Space)           */}
        {/* ========================================================================= */}
        <div
          onClick={() => handleVisit(undefined, "Mobile")}
          className="col-span-2 sm:col-span-3 lg:col-span-5 lg:row-span-2 min-h-0 sm:min-h-[360px] lg:min-h-[490px] flex flex-col justify-center p-2 sm:p-4 lg:px-2 lg:py-2 cursor-pointer space-y-4 sm:space-y-6"
        >
          <p className="text-sm sm:text-lg lg:text-[22px] xl:text-[24px] font-normal leading-[1.6] sm:leading-[1.62] text-zinc-800 tracking-[-0.01em]">
            Looking for a trusted OnePlus Service Center in Hyderabad? Welcome to{" "}
            <strong className="text-zinc-950 font-bold">
              <span className="text-[#eb0028]">ONE PLUS</span> SERVICE CENTER
            </strong>
            , your reliable destination for professional OnePlus mobile, tablet, earbuds, and watches repair services.
          </p>
          <p className="text-xs sm:text-base lg:text-[18px] xl:text-[20px] font-normal leading-[1.65] sm:leading-[1.7] text-zinc-600">
            Whether your device has a broken display, battery issues, charging problems, motherboard faults, or water damage, our skilled technicians diagnose and repair it efficiently. Most repairs are completed within <span className="text-[#eb0028] font-bold">2 hours</span> with same-day service available.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MID CARDS: OnePlus Open & Nord Series (Side by side on mobile)             */}
        {/* ========================================================================= */}
        {midDevices.map((device) => (
          <div
            key={device.id}
            onClick={() => handleVisit(device.categoryTag, device.categoryName)}
            className="col-span-1 sm:col-span-3 lg:col-span-4 min-h-[150px] sm:min-h-[220px] lg:min-h-[230px] group relative rounded-2xl overflow-hidden bg-zinc-950 cursor-pointer border border-zinc-200/80 shadow-xs hover:shadow-2xl hover:border-[#eb0028] transition-all duration-300 flex flex-col justify-end p-3.5 sm:p-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={device.image}
              alt={device.name}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:via-black/50 transition-all duration-300" />

            <div className="relative z-10">
              <h3 className="text-sm sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                {device.name}
              </h3>
            </div>
          </div>
        ))}

        {/* ========================================================================= */}
        {/* BOTTOM 3 SQUARES: Earbuds, Tablets, Watches                                */}
        {/* On mobile: 3 equal squares in a row (grid-cols-3)                          */}
        {/* On desktop: 3 equal squares (col-span-4 each)                              */}
        {/* ========================================================================= */}
        <div className="col-span-2 grid grid-cols-3 gap-2.5 sm:gap-4 lg:contents">
          {squareDevices.map((device) => (
            <div
              key={device.id}
              onClick={() => handleVisit(device.categoryTag, device.categoryName)}
              className="aspect-square lg:col-span-4 group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 cursor-pointer border border-zinc-200/80 shadow-xs hover:shadow-2xl hover:border-[#eb0028] transition-all duration-300 flex flex-col justify-end p-2.5 sm:p-5 lg:p-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={device.image}
                alt={device.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:via-black/50 transition-all duration-300" />

              <div className="relative z-10">
                <h3 className="text-xs sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                  {device.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
