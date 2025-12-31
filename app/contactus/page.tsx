"use client";

import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  AWS,
  Microsoft,
  CompTIA,
  ECCouncil,
  ORACLE,
  Fortinet,
  ISACA,
  PEGA,
  SAS,
  SPLUNK,
  VMWARE,
  Juniper,
  KUBERNETES,
  Checkpoint,
  DELLEMC,
  SALESFORCE,
  ISTQB,
} from "@/lib/index";

/* ---------------- VENDOR → COURSE MAP ---------------- */
const VENDOR_COURSE_MAP: Record<string, any[]> = {
  AWS,
  Microsoft,
  CompTIA,
  "EC-Council": ECCouncil,
  Oracle: ORACLE,
  Fortinet,
  ISACA,
  PEGA,
  SAS,
  Splunk: SPLUNK,
  VMware: VMWARE,
  Juniper,
  Kubernetes: KUBERNETES,
  Checkpoint,
  DELLEMC,
  Salesforce: SALESFORCE,
  ISTQB,
};

export default function ContactUsPage() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [courses, setCourses] = useState<any[]>([]);

  const handleVendorChange = (vendor: string) => {
    setSelectedVendor(vendor);
    setCourses(VENDOR_COURSE_MAP[vendor] || []);
  };

  return (
    <>
      <Header />

      {/* 🌿 BACKGROUND */}
      <section className="relative py-24 bg-gradient-to-br from-[#ECFDF5] via-[#F0FDFA] to-[#FFFFFF]">
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
                +91 8121488625
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>
                  A-228, Neeladri Nagar, Phase-1 <br />
                  Electronic City, Bangalore – 560100
                </span>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <Link
              href="https://wa.me/918121488625?text=Hello%20I%20need%20course%20service"
              target="_blank"
              className="
                inline-flex items-center gap-3
                px-8 py-4 rounded-full
                bg-gradient-to-r from-green-500 to-emerald-600
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
          <div className="
            relative
            bg-white/85 backdrop-blur-xl
            rounded-[32px]
            p-10
            border border-green-100
            shadow-[0_35px_80px_rgba(16,185,129,0.25)]
          ">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-8">
              We usually respond within minutes
            </p>

            <form className="space-y-5">
              {[
                "Full Name",
                "Phone Number",
                "Email Address",
              ].map((label) => (
                <input
                  key={label}
                  placeholder={label}
                  className="
                    w-full px-6 py-3.5 rounded-full
                    border border-gray-200
                    focus:ring-2 focus:ring-green-300
                    focus:border-green-400
                    transition
                    outline-none
                  "
                />
              ))}

              {/* VENDOR */}
              <select
                value={selectedVendor}
                onChange={(e) => handleVendorChange(e.target.value)}
                className="
                  w-full px-6 py-3.5 rounded-full
                  border border-gray-200
                  focus:ring-2 focus:ring-green-300
                  focus:border-green-400
                  transition outline-none
                "
              >
                <option value="">Select Vendor</option>
                {Object.keys(VENDOR_COURSE_MAP).map((vendor) => (
                  <option key={vendor} value={vendor}>
                    {vendor}
                  </option>
                ))}
              </select>

              {/* COURSE */}
              <select
                disabled={!selectedVendor}
                className="
                  w-full px-6 py-3.5 rounded-full
                  border border-gray-200
                  bg-gray-50
                  focus:ring-2 focus:ring-green-300
                  transition outline-none
                "
              >
                <option>
                  {selectedVendor ? "Select Course" : "Select Vendor First"}
                </option>
                {courses.map((course, idx) => (
                  <option key={idx}>
                    {course.title || course.name || course.courseName}
                  </option>
                ))}
              </select>

              <textarea
                rows={3}
                placeholder="Message"
                className="
                  w-full px-6 py-4 rounded-2xl
                  border border-gray-200
                  focus:ring-2 focus:ring-green-300
                  transition outline-none resize-none
                "
              />

              <button
                type="submit"
                className="
                  w-full py-4 rounded-full
                  bg-gradient-to-r from-green-500 to-emerald-600
                  text-white font-bold text-lg
                  shadow-[0_20px_50px_rgba(16,185,129,0.45)]
                  hover:scale-[1.02]
                  transition-all
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
