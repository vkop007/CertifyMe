"use client";

import {
  CreditCard,
  Headset,
  ShoppingCart,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    title: "Fast & Hassle-Free Purchases",
    icon: Zap,
  },
  {
    title: "Safe & Reliable Payments",
    icon: CreditCard,
  },
  {
    title: "24/7 Expert Assistance",
    icon: Headset,
  },
  {
    title: "Exclusive Discount on Bulk Purchase",
    icon: ShoppingCart,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Why Choose <span className="gradient-text">Certify</span>
          </h2>

          <p className="text-text-light text-lg leading-relaxed">
            We at Trainotrack Solutions strive to provide fast and convenient
            purchases. With authentic vouchers, instant delivery, booking
            assistance, and dedicated support, we ensure a smooth and reliable
            experience for every candidate and organization.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100
                           p-8 flex flex-col items-center text-center gap-4
                           hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <Icon className="text-green-600" size={28} />
                </div>

                <h3 className="font-semibold text-text-dark text-lg">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
