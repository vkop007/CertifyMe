"use client";

import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS } from "../lib/index";
import { useState } from "react";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-5 lg:py-5 bg-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* --- LEFT SIDE: STICKY HEADER --- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                <HelpCircle size={14} />
                Support Center
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Got questions? <br />
                <span className="text-primary italic">We’ve got answers.</span>
              </h2>

              <p className="text-lg text-gray-500 leading-relaxed max-w-sm">
                Everything you need to know about vouchers, booking, and delivery. 
                Still stuck? Our experts are just a click away.
              </p>

<Link 
  href="/contactus" 
  className="inline-flex items-center gap-4 text-sm font-black text-gray-900 hover:text-primary transition-all group"
>
  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg shadow-gray-900/10 group-hover:shadow-primary/20">
    <MessageCircle size={20} />
  </div>
  <span className="tracking-widest uppercase">Contact Our Team</span>
</Link>
            </div>
          </div>

          {/* --- RIGHT SIDE: FAQ ACCORDION --- */}
          <div className="lg:col-span-8 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`
                    group transition-all duration-300 rounded-[2rem] border
                    ${isOpen 
                      ? "bg-white border-primary shadow-[0_20px_40px_rgba(0,0,0,0.05)]" 
                      : "bg-gray-50/50 border-gray-100 hover:border-gray-200"
                    }
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-6 lg:px-8 lg:py-8 text-left focus:outline-none"
                  >
                    <span className={`
                      text-lg lg:text-xl font-bold transition-colors duration-300
                      ${isOpen ? "text-primary" : "text-gray-900"}
                    `}>
                      {faq.question}
                    </span>

                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                      ${isOpen ? "bg-primary text-white rotate-45" : "bg-white text-gray-400 border border-gray-100 shadow-sm"}
                    `}>
                      <Plus size={20} />
                    </div>
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 text-gray-500 text-base lg:text-lg leading-relaxed border-t border-gray-50 mt-2 pt-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}