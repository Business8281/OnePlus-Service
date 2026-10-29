"use client";

import React from "react";

export default function Metrics() {
  const metrics = [
    {
      value: "45",
      unit: "min",
      title: "Average SLA Turnaround",
      subtitle: "While-you-wait cleanroom lounge",
    },
    {
      value: "180",
      unit: "days",
      title: "Pan-India Warranty",
      subtitle: "Digital certificate logged on service network",
    },
    {
      value: "4.9",
      unit: "★",
      title: "Verified Satisfaction",
      subtitle: "Over 14,000+ completed repairs in Hyderabad",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 py-6 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-zinc-200/80 dark:border-zinc-800/80 py-6">
        {metrics.map((item) => (
          <div key={item.title} className="flex flex-col gap-1 sm:px-4 first:sm:pl-0 last:sm:pr-0">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[34px] sm:text-[38px] font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
                {item.value}
              </span>
              <span className="text-[15px] font-bold text-[#eb0028] uppercase tracking-wider">
                {item.unit}
              </span>
            </div>
            <h3 className="text-[14px] font-bold text-zinc-900 dark:text-zinc-100">
              {item.title}
            </h3>
            <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
