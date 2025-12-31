"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    badge: "Trusted by IT Professionals, Backed by Businesses",
    titleLine1: "Authorized Discounted",
    titleLine2: "IT Voucher Reseller",
    description:
      "A global pioneer that provides recognized IT certifications exam vouchers at the best deal. Unleash your IT genius with industry-led trainers and Save Huge on your Booking.",
    image: "/exam_voucher.webp",
  },
  {
    badge: "Globally Recognized Exam Voucher Provider",
    titleLine1: "Save Big on",
    titleLine2: "English Exam Vouchers",
    description:
      "Get instant delivery of authentic IT exam vouchers with expert guidance and secure payments. Trusted by individuals and enterprises worldwide.",
    image: "/english_voucher.webp",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative max-w-7xl m-auto rounded-3xl p-20 pt-12 pb-5 lg:pt-8 lg:pb-10 overflow-hidden bg-linear-to-br from-[#0F766E] via-[#10B981] to-[#6EE7B7]
">
      
      {/* LEFT DARK → RIGHT LIGHT GREEN SHADOW */}
<div
  className="absolute inset-0 bg-linear-to-r
    from-white/10
    via-transparent
    to-white/40
    pointer-events-none z-0"
/>



      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5EEAD4]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/file.svg')] opacity-[0.03] bg-repeat pointer-events-none mix-blend-color-dodge" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700">
          
          {/* LEFT */}
          <div className="max-w-2xl animate-[fadeIn_0.6s_ease-out]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-lg mb-8">
              <Sparkles className="w-4 h-4 text-[#FCD34D]" />
              <span className="text-sm font-semibold tracking-wide">
                {slide.badge}
              </span>
            </div>

            <h1 className="text-4xl lg:text-4xl font-medium text-white leading-[1.1] mb-8 tracking-tight">
              <span className="block whitespace-nowrap font-bold">
                {slide.titleLine1}
              </span>
              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-[#5EEAD4] to-[#34D399] font-bold">
                {slide.titleLine2}
              </span>
            </h1>

            <p className="text-lg text-emerald-50/90 mb-10 leading-relaxed font-light max-w-lg">
              {slide.description}
            </p>

            <button className="group bg-white text-[#065F46] px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-1 flex items-center gap-2">
              Get Started
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end animate-[fadeIn_0.8s_ease-out]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -z-10" />

            <div className="relative rounded-2xl">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-sm rotate-1 scale-105" />
              <Image
                src={slide.image}
                alt="Hero Slide Image"
                width={400}
                height={300}
                className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
