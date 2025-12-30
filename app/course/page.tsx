"use client";

import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import VendorSlider from "@/components/VendorSlider";
import CourseGrid from "@/components/CourseGrid";
import {
  VENDORS,
  CompTIA,
  ORACLE,
  AWS,
  VMWARE,
  Microsoft,
  ISTQB,
} from "@/lib/index";

// Map vendor names to their respective course arrays
const COURSE_MAP: Record<string, any[]> = {
  AWS: AWS,
  CompTIA: CompTIA,
  Oracle: ORACLE,
  VMware: VMWARE,
  Microsoft: Microsoft,
  ISTQB: ISTQB,
  // Add fuzzy matching or other vendors if needed
};

// Helper to find courses case-insensitively or by mapped name
const getCoursesForVendor = (vendorName: string) => {
  // Direct match
  if (COURSE_MAP[vendorName]) return COURSE_MAP[vendorName];

  // Case insensitive match
  const lowerName = vendorName.toLowerCase();
  const key = Object.keys(COURSE_MAP).find(
    (k) => k.toLowerCase() === lowerName
  );
  if (key) return COURSE_MAP[key];

  // Specific overrides if names don't match exactly
  if (lowerName.includes("check point")) return []; // Add import if available
  if (lowerName.includes("cisco")) return []; // Add import if available

  return [];
};

export default function CoursePage() {
  const [selectedVendor, setSelectedVendor] = useState(VENDORS[0].name);

  const courses = getCoursesForVendor(selectedVendor);

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Header />

      <div className="pt-5 pb-8">
        <div className="container-custom mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="text-left max-w-3xl mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Browse Certification <span className="text-primary">Courses</span>
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              Select a vendor below to explore our comprehensive collection of
              accredited certification courses and exclusive exam vouchers.
            </p>
          </div>
          {/* Vendor Selection */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                Select Vendor
              </h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            <VendorSlider
              vendors={VENDORS}
              selectedVendor={selectedVendor}
              onSelect={setSelectedVendor}
            />
          </div>

          {/* Course Display */}
          <div className="animate-[fadeIn_0.5s_ease-out]">
            <div className="flex items-center justify-between mb-8 px-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedVendor} Courses
                <span className="ml-3 text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                  {courses.length} Available
                </span>
              </h2>
            </div>

            <CourseGrid courses={courses} vendorName={selectedVendor} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
