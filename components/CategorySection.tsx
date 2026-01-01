"use client";

import Image from "next/image";
import { VENDORS } from "../lib/index";
import Link from "next/link";

const LOGOS = [...VENDORS, ...VENDORS, ...VENDORS]; // Extra items for smoother infinite scroll

export default function CategorySection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* --- BRAND SCROLL SECTION --- */}
        <div className="mb-20 md:mb-24">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-10">
            Official Partnered Vendors
          </p>
          
<div className="mb-8 md:mb-12">
        {/* Infinite Scroll */}
        <div className="relative w-full overflow-hidden py-3 md:py-4">
          <div className="flex w-max animate-[scroll_35s_linear_infinite]">
            {LOGOS.map((vendor, index) => (
              <div
                key={index}
                className="
                  mx-1 md:mx-1.5
                  w-52 h-30
                  md:w-56 md:h-32
                  lg:w-60 lg:h-34
                  bg-white
                  rounded-2xl
                  border border-gray-100
                  shadow-sm
                  relative overflow-hidden
                  flex items-center justify-center
                "
              >
                <Image
                  src={vendor.src}
                  alt={vendor.name}
                  fill
                  className="object-contain p-4 md:p-5"
                />
              </div>
            ))}
          </div>

          {/* Gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-20 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-20 bg-linear-to-l from-background to-transparent" />
        </div>
      </div>
        </div>

        {/* --- TEXT & CONTENT SECTION --- */}
        <div className="container-custom max-w-4xl text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
            Global Certification Partner
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.05] tracking-tighter">
            Achieve New Heights in IT with <br className="hidden md:block" />
            <span className="text-primary italic">Discounted</span> Vouchers.
          </h2>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Welcome to <span className="text-gray-900 font-bold">Certify</span>. We are a trusted global provider 
            helping professionals unlock their potential through official exam vouchers 
            and world-class training at unmatched prices.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <button className="px-8 py-4 bg-gray-900 text-white font-black text-xs tracking-[0.2em] rounded-2xl hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
              EXPLORE VENDORS
            </button> */}
<Link 
  href="/training" 
  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 font-black text-xs tracking-[0.2em] rounded-2xl hover:border-primary hover:text-primary transition-all active:scale-95"
>
  VIEW TRAININGS
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}