"use client";

import Image from "next/image";

export default function AboutWho() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#f3faf7] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT – REFINED UI (NO HEAVY CARD) */}
          <div className="max-w-xl lg:max-w-2xl">

            <span className="inline-flex items-center px-4 py-1.5 mb-5 rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700 tracking-wide">
              ABOUT US
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-[#0B1C39] leading-tight mb-6">
              About{" "}
              <span className="text-emerald-600">
                Global IT Success
              </span>
            </h2>

            {/* Soft content panel */}
            <div className="relative pl-6 border-l-4 border-emerald-500 space-y-5 text-gray-700 leading-relaxed text-[15px]">
              <p>
                As an authorized IT exam voucher reseller and an ISACA and
                VMware training provider, we don’t stop at service delivery
                but continue to be your long-term certification partner.
              </p>

              <p>
                Our vouchers come with a generous validity of 6 to 12 months,
                and Oracle vouchers from 4 to 6 months, enabling you to prepare
                and schedule your IT Certification Exam conveniently through
                authorized exam centers.
              </p>

              <p>
                Your certification journey matters to us. We prioritize your
                goals by redefining convenience with a secure, user-friendly
                platform and unwavering customer support.
              </p>

              <p>
                With years of experience in IT exam voucher delivery, we ensure
                a secure shopping experience that is smooth, reliable, and
                hassle-free.
              </p>

              <p className="font-semibold text-gray-900">
                We are dedicated to fueling your professional growth and
                helping you achieve career success with affordability and
                trust.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE STACK */}
          <div className="relative flex justify-center lg:justify-end">
            {/* MAIN IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-emerald-100">
              <Image
                src="/AboutUs/about3.webp"
                alt="Professional working"
                width={440}
                height={540}
                className="object-cover"
                priority
              />
            </div>

            {/* FLOATING IMAGE */}
            <div className="absolute -bottom-16 left-6 bg-white p-2 rounded-2xl shadow-lg ring-1 ring-emerald-200 hidden sm:block">
              <Image
                src="/AboutUs/about4.webp"
                alt="Online learning"
                width={320}
                height={220}
                className="object-cover rounded-xl"
              />
            </div>

            {/* SOFT GREEN GLOW */}
            <div className="absolute -z-10 -bottom-24 -right-20 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
