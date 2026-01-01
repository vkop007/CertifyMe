"use client";

import Image from "next/image";
import { clients } from "../lib/index";

const LOGOS = [...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="py-10 bg-background">
      <div className="container-custom">

        {/* Heading – SAME AS REVIEWS */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-text-light text-lg">
            We feel privileged to have our association with some of the
            prestigious companies.
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
