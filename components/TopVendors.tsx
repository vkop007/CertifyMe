"use client";

import Image from "next/image";

export default function TopVendors() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#f4fbf8] via-[#eef7f3] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-emerald-700 tracking-wide mb-3">
            TRUSTED PARTNERS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            Our <span className="text-emerald-600">Top Vendors</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Partnering with globally recognized certification authorities, we
            offer authentic IT exam vouchers at competitive prices to help you
            achieve your career goals with confidence.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "AWS", src: "/logos/aws.webp" },
            { name: "Checkpoint", src: "/logos/checkpoints.webp" },
            { name: "CompTIA", src: "/logos/comptia.webp" },
            { name: "DELLEMC", src: "/logos/dell.webp" },
            { name: "Cisco", src: "/logos/cisco.webp" },
            { name: "ECCouncil", src: "/logos/ec-council.webp" },
            { name: "Fortinet", src: "/logos/fortinet.webp" },
            { name: "ISACA", src: "/logos/isaca.webp" },
            { name: "ISTQB", src: "/logos/istqb.webp" },
            { name: "Juniper", src: "/logos/juniper.webp" },
            { name: "Kubernetes", src: "/logos/kubernetes.webp" },
            { name: "Microsoft", src: "/logos/microsoft.webp" },
            { name: "Pega", src: "/logos/new-pega.webp" },
            { name: "Oracle", src: "/logos/oracle.webp" },
            { name: "Salesforce", src: "/logos/salesforce.webp" },
            { name: "SAS", src: "/logos/sas.webp" },
            { name: "Splunk", src: "/logos/splunk-logo.webp" },
            { name: "VMware", src: "/logos/vmware.webp" },
          ].map((logo, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                p-5
                flex items-center justify-center
                shadow-md
                ring-1 ring-emerald-100
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

        {/* Decorative Blur */}
        <div
          className="
          relative
          mt-16
        "
        >
          <div
            className="
            absolute
            left-1/2
            -translate-x-1/2
            w-72 h-72
            bg-emerald-300/30
            rounded-full
            blur-3xl
            -z-10
          "
          />
        </div>
      </div>
    </section>
  );
}
