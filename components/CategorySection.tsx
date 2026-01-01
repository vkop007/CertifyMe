"use client";

import Image from "next/image";
import { VENDORS } from "../lib/index";

const LOGOS = [...VENDORS, ...VENDORS];

export default function CategorySection() {
  return (
    <section className="py-14 md:py-20 bg-background overflow-hidden">
      <div className="mb-12 md:mb-20">
        {/* Infinite Scroll */}
        <div className="relative w-full overflow-hidden py-6 md:py-10">
          <div className="flex w-max animate-[scroll_35s_linear_infinite]">
            {LOGOS.map((vendor, index) => (
              <div
                key={index}
                className="
                  mx-3 md:mx-6
                  w-36 h-20
                  md:w-44 md:h-22
                  lg:w-48 lg:h-24
                  bg-white rounded-xl
                  shadow-sm border border-gray-100
                  relative overflow-hidden
                  flex items-center justify-center
                  hover:shadow-md hover:-translate-y-1 transition-all
                "
              >
                <Image
                  src={vendor.src}
                  alt={vendor.name}
                  fill
                  className="
                    object-contain
                    p-2 md:p-3 lg:p-4
                    transition
                  "
                />
              </div>
            ))}
          </div>

          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-linear-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Text Section */}
      <div className="container-custom text-center max-w-5xl px-4 md:px-0">
        <h2 className="text-2xl md:text-5xl font-bold text-text-dark mb-6 md:mb-8 leading-tight">
          Achieve New Heights in IT with discounted <br />
          Exam Vouchers and Training <br />
          <span className="gradient-text">Solutions</span>
        </h2>

        <p className="text-text-light text-base md:text-lg leading-relaxed">
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
