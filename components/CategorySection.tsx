"use client";

import Image from "next/image";
import { VENDORS } from "../lib/index";

const LOGOS = [...VENDORS, ...VENDORS];

export default function CategorySection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="mb-20">
        {/* Infinite Scroll */}
        <div className="relative w-full overflow-hidden py-10">
          <div className="flex w-max animate-[scroll_35s_linear_infinite]">
            {LOGOS.map((vendor, index) => (
              <div
                key={index}
                className="mx-6 w-48 h-24 bg-white rounded-xl shadow-sm border border-gray-100
                           flex items-center justify-center p-4
                           hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <Image
                  src={vendor.src}
                  alt={vendor.name}
                  width={160}
                  height={80}
                  className="object-contain transition"
                />
              </div>
            ))}
          </div>

          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Text Section */}
      <div className="container-custom text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
          Achieve New Heights in IT with discounted <br />
          Exam Vouchers and Training <br />
          <span className="gradient-text">Solutions</span>
        </h2>

        <p className="text-text-light text-lg leading-relaxed">
          Welcome to Global IT Success, a renowned provider of IT exam vouchers
          and world-class IT training. Whether you are a seasoned professional
          or just started on your maiden voyage in tech, we provide the tools
          and knowledge you need to chart your course toward your professional
          goals.
        </p>
      </div>
    </section>
  );
}
