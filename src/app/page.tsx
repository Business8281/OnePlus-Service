"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DeviceShowcase from "@/components/DeviceShowcase";
import TrustBenchmarks from "@/components/TrustBenchmarks";
import RepairCatalog, { RepairService } from "@/components/RepairCatalog";
import WorkshopFeed from "@/components/WorkshopFeed";
import ExpressBooking from "@/components/ExpressBooking";
import LocationBanner from "@/components/LocationBanner";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedIssue, setSelectedIssue] = useState<string>("Broken Glass / Display");

  const handleSelectService = (service: RepairService) => {
    if (service.chipMatch) {
      setSelectedIssue(service.chipMatch);
    }
    const bookingSection = document.getElementById("express-booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fbfbfd] text-zinc-950 font-sans">
      <Header />

      <main className="flex-1 flex flex-col relative w-full pt-14">
        {/* Full-bleed Edge-to-Edge Hero Section (100% width, 0 border-radius) */}
        <Hero />

        {/* Remaining Sections: Covering 80% space in desktop from left and right */}
        <div className="w-full lg:w-[80%] mx-auto flex flex-col">
          {/* OnePlus Devices We Service */}
          <DeviceShowcase onSelectDevice={(issue) => setSelectedIssue(issue)} />
          <TrustBenchmarks />
          <RepairCatalog onSelectService={handleSelectService} />
          <WorkshopFeed />
          <ExpressBooking
            selectedIssue={selectedIssue}
            onSelectIssue={setSelectedIssue}
          />
          <LocationBanner />
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
