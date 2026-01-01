"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Globe,
  BookOpen,
  MessageSquare,
  Briefcase,
  ChevronDown,
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
  TABLEAU,
  Databricks,
  GCP,
  SAP,
  Snowflake,
  SERVICENOW,
  GRE,
  TOEFL,
} from "@/lib/index";

const COUNTRIES = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "USA", code: "+1", flag: "🇺🇸" },
  { name: "UK", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
];

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

  const currentCountryData = COUNTRIES.find((c) => c.name === country) || COUNTRIES[0];

  const vendorToCertificates = {
    AWS, Checkpoint, CompTIA, DELLEMC, Juniper, ECCouncil, Fortinet, 
    ISACA, ISTQB, Kubernetes: KUBERNETES, Microsoft, Oracle: ORACLE, 
    Pega: PEGA, Salesforce: SALESFORCE, SAS, Splunk: SPLUNK, VMware: VMWARE,
    TABLEAU: TABLEAU, Databricks: Databricks, GCP: GCP, SAP: SAP, Snowflake: Snowflake,
    ServiceNow: SERVICENOW, GRE: GRE, TOEFL: TOEFL,
  };

  const availableCourses = selectedVendor
    ? vendorToCertificates[selectedVendor as keyof typeof vendorToCertificates] || []
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
          phone: `${currentCountryData.code} ${phone}`,
          email,
          country,
          vendor: selectedVendor,
          course: selectedCourse,
          message,
        };

        const result = await sendContactEmail(formData);

        if (result.success) {
          setSubmitStatus("success");
          setFullName(""); setPhone(""); setEmail(""); setCountry("India");
          setSelectedVendor(""); setSelectedCourse(""); setMessage("");
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

      {/* Phone Number with Country Code Dropdown */}
      <div className="flex gap-3">
        <div className="relative min-w-[110px]">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full h-full pl-3 pr-8 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-medium appearance-none outline-none focus:border-primary transition-all cursor-pointer"
          >
            {COUNTRIES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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

      {/* Select Vendor */}
      <div className="relative">
        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <select
          value={selectedVendor}
          onChange={(e) => {
            setSelectedVendor(e.target.value);
            setSelectedCourse("");
          }}
          className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-600"
        >
          <option value="">Select Vendor</option>
          {VENDORS.map((v) => (
            <option key={v.name} value={v.name}>{v.name}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>

      {/* Select Course */}
      <div className="relative">
        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          disabled={!selectedVendor}
          className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <option value="">Select Course</option>
          {availableCourses.map((course, index) => (
            <option key={index} value={course.name}>{course.name}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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
        <p className="text-green-600 text-center font-semibold mt-2">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500 text-center font-semibold mt-2">Failed to send. Please try again.</p>
      )}
    </form>
  );
}