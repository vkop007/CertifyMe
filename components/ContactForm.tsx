"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Globe,
  BookOpen,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { sendContactEmail } from "@/app/actions/email";
import {
  VENDORS,
  AWS,
  Checkpoint,
  CompTIA,
  DELLEMC,
  ECCouncil,
  Fortinet,
  ISACA,
  ISTQB,
  KUBERNETES,
  Microsoft,
  Juniper,
  ORACLE,
  PEGA,
  SALESFORCE,
  SAS,
  SPLUNK,
  VMWARE,
} from "@/lib/index";

export default function ContactForm() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const vendorToCertificates = {
    AWS: AWS,
    Checkpoint: Checkpoint,
    CompTIA: CompTIA,
    DELLEMC: DELLEMC,
    Juniper: Juniper,
    ECCouncil: ECCouncil,
    Fortinet: Fortinet,
    ISACA: ISACA,
    ISTQB: ISTQB,
    Kubernetes: KUBERNETES,
    Microsoft: Microsoft,
    Oracle: ORACLE,
    Pega: PEGA,
    Salesforce: SALESFORCE,
    SAS: SAS,
    Splunk: SPLUNK,
    VMware: VMWARE,
  };

  const availableCourses = selectedVendor
    ? vendorToCertificates[
        selectedVendor as keyof typeof vendorToCertificates
      ] || []
    : [];

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = {
          fullName,
          phone,
          email,
          country,
          vendor: selectedVendor,
          course: selectedCourse,
          message,
        };

        const result = await sendContactEmail(formData);

        if (result.success) {
          setSubmitStatus("success");
          // Reset form
          setFullName("");
          setPhone("");
          setEmail("");
          setCountry("India");
          setSelectedVendor("");
          setSelectedCourse("");
          setMessage("");
        } else {
          setSubmitStatus("error");
        }
        setIsSubmitting(false);
      }}
    >
      {/* Full Name */}
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Full Name..."
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email Id..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Country */}
      <div className="relative">
        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-600"
        >
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
            <option key={v.name} value={v.name}>
              {v.name}
            </option>
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
            <option key={index} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="relative">
        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
        <textarea
          placeholder="Message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        ></textarea>
      </div>

      <button
        disabled={isSubmitting}
        className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors shadow-lg shadow-green-900/10 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitStatus === "success" && (
        <p className="text-green-600 text-center font-semibold mt-2">
          Message sent successfully!
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500 text-center font-semibold mt-2">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
