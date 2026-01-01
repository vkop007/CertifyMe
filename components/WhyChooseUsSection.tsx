"use client";
import Link from "next/link";
import {
  CreditCard,
  Headset,
  ShoppingCart,
  Zap,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  { 
    title: "Fast & Hassle-Free Purchases", 
    desc: "Experience lightning-fast voucher processing and instant digital delivery.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  { 
    title: "Safe & Reliable Payments", 
    desc: "Your transactions are secured with industry-leading encryption protocols.",
    icon: CreditCard,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  { 
    title: "24/7 Expert Assistance", 
    desc: "Our dedicated support team is available around the clock to assist you.",
    icon: Headset,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  { 
    title: "Exclusive Bulk Discounts", 
    desc: "Tailored pricing solutions for corporate teams and training institutions.",
    icon: ShoppingCart,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-10 lg:py-10 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                The Certify Advantage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Why Professionals <br /> 
              Trust <span className="text-primary italic">Certify.</span>
            </h2>
          </div>
          
          <div className="lg:max-w-md">
            <p className="text-lg text-gray-500 leading-relaxed">
              We bridge the gap between your career goals and official certifications 
              with authentic vouchers and unparalleled booking support.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className={`${item.color}`} size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Subtle Indicator */}
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-300 group-hover:text-primary transition-colors">
                  <CheckCircle2 size={12} />
                  VERIFIED SERVICE
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action (Optional) */}
        {/* <div className="mt-20 p-8 md:p-12 bg-gray-900 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-gray-950/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to level up your career?</h4>
                    <p className="text-gray-400">Get instant access to discounted vouchers from 50+ vendors.</p>
                </div>
<Link 
  href="/course" 
  className="px-8 py-4 bg-primary text-white font-black text-sm tracking-widest rounded-2xl hover:bg-primary-dark transition-all active:scale-95 whitespace-nowrap inline-flex items-center justify-center"
>
  EXPLORE VOUCHERS
</Link>
            </div>
        </div> */}

      </div>
    </section>
  );
}