"use client";

import {
  CreditCard,
  Headset,
  ShoppingCart,
  Zap,
} from "lucide-react";

const FEATURES = [
  { title: "Fast & Hassle-Free Purchases", icon: Zap },
  { title: "Safe & Reliable Payments", icon: CreditCard },
  { title: "24/7 Expert Assistance", icon: Headset },
  { title: "Exclusive Discount on Bulk Purchase", icon: ShoppingCart },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-background">
      <div className="container-custom px-4 md:px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4 md:mb-6 leading-tight">
            Why Choose <span className="gradient-text">Certify</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-text-light leading-relaxed">
            We at Trainotrack Solutions strive to provide fast and convenient
            purchases. With authentic vouchers, instant delivery, booking
            assistance, and dedicated support, we ensure a smooth and reliable
            experience for every candidate and organization.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  bg-white rounded-xl border border-gray-100
                  p-6 md:p-7 lg:p-8
                  flex flex-col items-center text-center gap-4
                  shadow-sm
                  hover:shadow-md hover:-translate-y-1
                  transition-all
                "
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <Icon className="text-green-600" size={24} />
                </div>

                <h3 className="font-semibold text-text-dark text-sm md:text-base lg:text-lg">
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
