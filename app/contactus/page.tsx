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
      <section className="relative py-24 bg-linear-to-br from-[#ECFDF5] via-[#F0FDFA] to-[#FFFFFF]">
        <div className="container-custom mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
          {/* LEFT CONTENT */}
          <div className="pt-6">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Let’s Talk <span className="text-primary">Certifications</span>
            </h1>

            <p className="text-gray-600 mb-10 max-w-xl text-lg">
              Speak with our experts for official IT exam vouchers, enterprise
              training and certification guidance.
            </p>

            <div className="space-y-5 text-gray-700 mb-12 text-base">
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-primary" />
                info@globalitsuccess.com
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-primary" />
                +91 9484756964
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
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
    inline-flex items-center gap-3
    px-8 py-4 rounded-full
    bg-[#059669]
    hover:bg-[#047857]
    text-white font-semibold shadow-green-900/10
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
            bg-white/85 backdrop-blur-xl
            rounded-[32px]
            p-10
            border border-green-100
            shadow-[0_35px_80px_rgba(16,185,129,0.25)]
          "
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-8">
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
