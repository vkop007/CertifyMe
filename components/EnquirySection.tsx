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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Our Top <span className="gradient-text">Vendors</span>
          </h2>
          <p className="text-text-light leading-relaxed">
            Partnering with globally recognized trainers, we offer a range of IT
            exam vouchers at affordable prices. Choose the ones that best align
            with your career goals.
          </p>
        </div>

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