"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full py-15 bg-gradient-to-b from-[#f3faf7] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* PAGE TITLE */}
        <h2 className="text-4xl font-bold mb-12 text-center text-text-dark">
          About <span className="text-primary">Our Company</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE STACK */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-emerald-100">
              <Image
                src="/AboutUs/about1.webp"
                alt="About Global IT Success"
                width={520}
                height={360}
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-16 right-6 bg-white p-2 rounded-2xl shadow-lg ring-1 ring-emerald-200 hidden sm:block">
              <Image
                src="/AboutUs/about2.webp"
                alt="Team Working"
                width={320}
                height={220}
                className="object-cover rounded-xl"
              />
            </div>

            <div className="absolute -z-10 -bottom-24 -left-20 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl" />
          </div>

          {/* RIGHT CONTENT – REFINED UI */}
          <div className="max-w-xl lg:max-w-2xl ml-auto">
            <span className="inline-flex items-center px-4 py-1.5 mb-5 rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700 tracking-wide">
              WHO WE ARE
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-[#0B1C39] leading-tight mb-6">
              Empowering Careers with{" "}
              <span className="text-emerald-600">
                Trusted IT Certifications
              </span>
            </h2>

            {/* Soft content panel */}
            <div className="relative pl-6 border-l-4 border-emerald-500 space-y-5 text-gray-700 leading-relaxed text-[15px]">
              <p>
                Global IT Success, a trusted subsidiary of D Succeed Learners
                Pvt Ltd, is committed to nurturing IT professionals with
                top-notch training and authenticated discounted IT certification
                exam vouchers at unbeatable prices.
              </p>

              <p>
                With a proven record of delivering globally recognized IT
                certifications, we are trusted by learners worldwide. Whether
                you are a beginner or an experienced professional, we focus on
                delivering exceptional service and real career value.
              </p>

              <p>
                Our offerings include CompTIA, Oracle, AWS, VMware, Microsoft,
                ISTQB, Kubernetes, Salesforce, DELLEMC, SAS, EC-Council, Pega,
                Splunk, and Cisco.
              </p>

              <p>
                We are not just a voucher reseller — we enable affordable access
                to certifications that help you succeed in today’s competitive
                IT landscape.
              </p>

              <p className="font-semibold text-gray-900">
                Achieve your next career milestone with 100% satisfaction and
                dependable customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
