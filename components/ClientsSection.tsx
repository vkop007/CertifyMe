"use client";

import Image from "next/image";
import { clients } from "../lib/index";

const LOGOS = [...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="py-10 bg-background">
      <div className="container-custom">

        {/* Heading – SAME AS REVIEWS */}
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Corporate Trust
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6">
            Trusted by Industry <span className="text-emerald-600 italic">Leaders.</span>
          </h2>

          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We are proud to partner with <span className="text-slate-900 font-bold">prestigious organizations</span> worldwide, 
            helping their teams stay ahead with official certification vouchers.
          </p>
        </div>

        {/* Clients Slider */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="flex w-max animate-scroll">
            {LOGOS.map((client, index) => (
              <div
                key={index}
                className="mx-6 w-56 h-28
                           bg-white rounded-xl
                           shadow-md border border-gray-100
                           flex items-center justify-center p-6
                           transition-all hover:shadow-lg"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={180}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Fade edges – SAME STYLE SYSTEM */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
