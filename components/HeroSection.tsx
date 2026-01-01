"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <section
      className="
        relative mt-6 md:mt-10
        max-w-7xl mx-4 md:mx-6 lg:mx-auto
        rounded-3xl
        px-6 py-10
        md:p-14 lg:p-20
        lg:pt-8 lg:pb-10
        overflow-hidden
        bg-linear-to-br
        from-[#0F766E] via-[#10B981] to-[#6EE7B7]
      "
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-r
          from-white/10 via-transparent to-white/40
          pointer-events-none z-0"
      />

      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] bg-[#5EEAD4]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/file.svg')] opacity-[0.03] bg-repeat pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-[#FCD34D]" />
              <span className="text-sm font-semibold tracking-wide">
                {slide.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-medium text-white leading-tight mb-6 tracking-tight">
              <span className="block font-bold">
                {slide.titleLine1}
              </span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#5EEAD4] to-[#34D399] font-bold">
                {slide.titleLine2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-50/90 mb-8 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              {slide.description}
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contactus"
                className="
                  group bg-white text-[#065F46]
                  px-8 py-4 rounded-full
                  font-bold text-base sm:text-lg
                  hover:bg-emerald-50 transition-all
                  shadow-[0_4px_14px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]
                  hover:-translate-y-1
                  inline-flex items-center gap-2
                "
              >
                Contact Us
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
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -z-10" />

            <Image
              src={slide.image}
              alt="Hero Slide Image"
              width={400}
              height={300}
              className="
                relative z-10
                w-[260px] sm:w-[320px] lg:w-[400px]
                object-contain
                drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                transition-transform duration-700
                hover:scale-[1.02]
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
