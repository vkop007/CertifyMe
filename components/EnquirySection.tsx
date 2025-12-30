"use client";

import {
  User,
  Phone,
  Mail,
  Globe,
  BookOpen,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { VENDORS, AWS, Checkpoint, CompTIA, DELLEMC, ECCouncil, Fortinet, ISACA, ISTQB, KUBERNETES, Microsoft, ORACLE, PEGA, SALESFORCE, SAS, SPLUNK, VMWARE } from "../lib/index";

export default function EnquirySection() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const vendorToCertificates = {
    "AWS": AWS,
    "Check Point": Checkpoint,
    "CompTIA": CompTIA,
    "Dell": DELLEMC,
    "EC-Council": ECCouncil,
    "Fortinet": Fortinet,
    "ISACA": ISACA,
    "ISTQB": ISTQB,
    "Kubernetes": KUBERNETES,
    "Microsoft": Microsoft,
    "Oracle": ORACLE,
    "Pega": PEGA,
    "Salesforce": SALESFORCE,
    "SAS": SAS,
    "Splunk": SPLUNK,
    "VMware": VMWARE,
  };

  const availableCourses = selectedVendor ? vendorToCertificates[selectedVendor as keyof typeof vendorToCertificates] || [] : [];
  return (
    <section className="py-20 bg-green-50/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Our Top <span className="gradient-text">Vendors</span>
          </h2>
          <p className="text-text-light leading-relaxed">
            Partnering with globally recognized trainers, we offer a range of IT
            exam vouchers at affordable prices. Choose the ones that best align
            with your career goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Exam Vouchers Grid */}
          <div>
            <h3 className="text-2xl font-bold text-text-dark mb-8">
              Exam Vouchers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {VENDORS.map((vendor, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl p-4 h-20 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={vendor.src}
                    alt={vendor.name}
                    width={160}
                    height={80}
                    className="object-contain transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-secondary to-primary"></div>

            <h3 className="text-2xl font-bold text-text-dark mb-8 text-center">
              Enquiry
            </h3>

            <form className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="flex gap-3">
                <div className="flex items-center gap-1 px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 min-w-[90px]">
                  <span className="text-lg">🇮🇳</span>
                  <span className="text-gray-600 font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Id..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Country */}
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-600">
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>

              {/* Select Vendor */}
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  value={selectedVendor}
                  onChange={(e) => {
                    setSelectedVendor(e.target.value);
                    setSelectedCourse(""); // Reset course when vendor changes
                  }}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-400"
                >
                  <option value="">Select Vendor</option>
                  {VENDORS.map((v) => (
                    <option key={v.name} value={v.name}>{v.name}</option>
                  ))}
                </select>
              </div>

              {/* Select Course */}
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  disabled={!selectedVendor}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select Course</option>
                  {availableCourses.map((course, index) => (
                    <option key={index} value={course.name}>{course.name}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors shadow-lg shadow-green-900/10">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
