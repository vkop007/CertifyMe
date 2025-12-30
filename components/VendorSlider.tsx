"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary disabled:opacity-0"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-4 px-6 scrollbar-hide snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {vendors.map((vendor) => (
          <button
            key={vendor.name}
            onClick={() => onSelect(vendor.name)}
            className={`
              flex-none snap-start group/item relative
              flex flex-col items-center gap-2 
              p-3 rounded-xl w-24 transition-all duration-300
              ${
                selectedVendor === vendor.name
                  ? "bg-white shadow-md scale-105 ring-1 ring-primary ring-offset-1"
                  : "bg-white/50 hover:bg-white hover:shadow-sm hover:-translate-y-0.5"
              }
            `}
          >
            <div className="relative w-14 h-14 p-1.5 bg-white rounded-lg flex items-center justify-center border border-gray-100">
              <Image
                src={vendor.src}
                alt={vendor.name}
                width={56}
                height={56}
                className="object-contain w-full h-full"
              />
            </div>
            <span
              className={`text-xs font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-1 ${
                selectedVendor === vendor.name
                  ? "text-primary"
                  : "text-gray-600 group-hover/item:text-gray-900"
              }`}
            >
              {vendor.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
