"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <Header />

      {/* 🌿 BACKGROUND */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-linear-to-br from-[#ECFDF5] via-[#F0FDFA] to-[#FFFFFF]">
        <div className="container-custom mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 relative z-10">

          {/* LEFT CONTENT */}
          <div className="pt-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Let’s Talk{" "}
              <span className="text-primary">Certifications</span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg">
              Speak with our experts for official IT exam vouchers, enterprise
              training and certification guidance.
            </p>

            <div className="space-y-4 text-gray-700 mb-10 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              <div className="flex gap-3 items-center justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                info@globalitsuccess.com
              </div>

              <div className="flex gap-3 items-center justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                +91 9484756964
              </div>

              <div className="flex gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>
                  A-111, Neeladri Nagar, Phase-1 <br />
                  Ele City, Pune – 560100
                </span>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <Link
              href="https://wa.me/919484756964?text=Hello%20I%20need%20course%20service"
              target="_blank"
              className="
                inline-flex items-center justify-center gap-3
                w-full sm:w-auto
                px-7 py-4 rounded-full
                bg-[#059669]
                hover:bg-[#047857]
                text-white font-semibold
                shadow-[0_20px_45px_rgba(16,185,129,0.45)]
                hover:scale-[1.03]
                transition-all
              "
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Consultation
            </Link>
          </div>

          {/* 🧊 PREMIUM FORM */}
          <div
            className="
              relative
              bg-white/90 backdrop-blur-xl
              rounded-3xl
              p-6 sm:p-8 lg:p-10
              border border-green-100
              shadow-[0_35px_80px_rgba(16,185,129,0.25)]
              w-full
            "
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 text-center lg:text-left">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base text-center lg:text-left">
              We usually respond within minutes
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
