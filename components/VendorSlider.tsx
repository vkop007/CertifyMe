"use client";

import Image from "next/image";
import { useRef } from "react";

interface Vendor {
  name: string;
  src: string;
}

interface VendorSliderProps {
  vendors: Vendor[];
  selectedVendor: string;
  onSelect: (vendorName: string) => void;
}

export default function VendorSlider({
  vendors,
  selectedVendor,
  onSelect,
}: VendorSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* Slider */}
      <div
        ref={scrollContainerRef}
        className="
          flex gap-6
          overflow-x-auto
          px-6 py-6
          scrollbar-hide
          snap-x
        "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {vendors.map((vendor) => {
          const isActive = selectedVendor === vendor.name;

          return (
            <button
              key={vendor.name}
              onClick={() => onSelect(vendor.name)}
              className={`
                flex-shrink-0 snap-start
                w-36 h-36 box-border
                rounded-2xl
                flex flex-col items-center justify-center gap-3
                transition-all duration-300
                ${
                  isActive
                    ? "bg-white border-2 border-[#059669] shadow-lg scale-105"
                    : "bg-white border border-gray-200 hover:border-[#059669]/60 hover:shadow-md"
                }
              `}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={vendor.src}
                  alt={vendor.name}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <span
                className={`text-sm font-semibold text-center truncate max-w-[120px] ${
                  isActive ? "text-[#059669]" : "text-gray-600"
                }`}
              >
                {vendor.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
