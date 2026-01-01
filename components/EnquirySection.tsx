"use client";

import Image from "next/image";
import { VENDORS } from "../lib/index";
import ContactForm from "@/components/ContactForm";

export default function EnquirySection() {
  return (
    /* Updated to the 'Mixed' background: Green -> White mix */
    <section className="py-16 bg-linear-to-b from-green-100/70 via-white/40 to-green-100/70">
      <div className="container-custom">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Official Partnerships
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter mb-6">
            Our Top Global{" "}
            <span className="text-primary italic underline decoration-primary/20 underline-offset-8">
              Vendors
            </span>
          </h2>

          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Partnering with globally recognized certification providers to offer
            authentic IT exam vouchers. Select the path that best aligns with
            your <span className="text-gray-900 font-bold">career goals</span>.
          </p>
        </div>

        {/* ... rest of your grid and form ... */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Exam Vouchers Grid */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {VENDORS.map((vendor, index) => (
                <div
                  key={index}
                  /* cards stay white for that "pop" against the mix background */
                  className="bg-white border border-green-50 rounded-xl h-17
                 relative overflow-hidden
                 flex items-center justify-center
                 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={vendor.src}
                    alt={vendor.name}
                    fill
                    className="object-contain p-3 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-green-50 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-secondary to-primary"></div>

            <h3 className="text-2xl font-bold text-text-dark mb-8 text-center">
              We’re Here to Help
            </h3>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
