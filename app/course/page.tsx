"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import VendorSlider from "@/components/VendorSlider";
import CourseGrid from "@/components/CourseGrid";
import {
  VENDORS,
  Checkpoint,
  DELLEMC,
  Fortinet,
  PEGA,
  ISACA,
  CompTIA,
  ORACLE,
  Juniper,
  KUBERNETES,
  AWS,
  VMWARE,
  Microsoft,
  SALESFORCE,
  ISTQB,
  SAS,
  SPLUNK,
  ECCouncil,
} from "@/lib/index";
import { useSearchParams, useRouter } from "next/navigation";

interface Course {
  name?: string;
  title?: string;
  category?: string;
  actualPrice?: number;
  ourPrice?: number;
  image?: string;
  content?: string;
  examDetails?: string;
  courseName?: string;
  exam?: string;
  vendor?: string;
}

// ---------------- COURSE MAP ----------------
const COURSE_MAP: Record<string, Course[]> = {
  AWS: AWS,
  Checkpoint: Checkpoint,
  Pega: PEGA,
  ISACA: ISACA,
  DELLEMC: DELLEMC,
  CompTIA: CompTIA,
  Fortinet: Fortinet,
  Oracle: ORACLE,
  Juniper: Juniper,
  Kubernetes: KUBERNETES,
  VMware: VMWARE,
  SAS: SAS,
  ECCouncil: ECCouncil,
  Microsoft: Microsoft,
  Salesforce: SALESFORCE,
  ISTQB: ISTQB,
  Splunk: SPLUNK,
};

export default function CoursePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawQuery = searchParams.get("q") || "";
  const searchQuery = rawQuery.toLowerCase();

  const [selectedVendor, setSelectedVendor] = useState(VENDORS[0].name);
  const [courses, setCourses] = useState<Course[]>([]);
  const [userSelectedVendor, setUserSelectedVendor] = useState(false);

  // 🔹 ALL COURSES
  const ALL_COURSES = useMemo(
    () => Object.values(COURSE_MAP).flat(),
    []
  );

  // 🔥 RESET vendor-click WHEN SEARCH QUERY CHANGES
  useEffect(() => {
    if (searchQuery) {
      setUserSelectedVendor(false);
    }
  }, [searchQuery]);

  // 🔹 STEP 1: HANDLE SEARCH FROM URL
  useEffect(() => {
    if (!searchQuery || userSelectedVendor) return;

    const matchedVendor = VENDORS.find(
      (v) => v.name.toLowerCase() === searchQuery
    );

    if (matchedVendor) {
      setSelectedVendor(matchedVendor.name);
      setCourses(COURSE_MAP[matchedVendor.name] || []);
      return;
    }

    // 🔹 TEXT SEARCH
    const filtered = ALL_COURSES.filter((course) => {
      const text = `
        ${course.title || ""}
        ${course.name || ""}
        ${course.courseName || ""}
        ${course.exam || ""}
        ${course.vendor || ""}
      `.toLowerCase();

      return text.includes(searchQuery);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    setCourses(filtered);
  }, [searchQuery, userSelectedVendor, ALL_COURSES]);

  // 🔹 STEP 2: VENDOR CLICK HANDLER (WITH ROUTE UPDATE)
  const handleVendorSelect = (vendor: string) => {
    setUserSelectedVendor(true);
    setSelectedVendor(vendor);
    setCourses(COURSE_MAP[vendor] || []);

    router.push(`/course?q=${encodeURIComponent(vendor)}`);
  };

  // 🔹 STEP 3: DEFAULT LOAD
  useEffect(() => {
    if (!searchQuery && !userSelectedVendor) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setCourses(COURSE_MAP[selectedVendor] || []);
    }
  }, [selectedVendor, searchQuery, userSelectedVendor]);

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Header />

      <div className="pt-5 pb-8">
        <div className="container-custom mx-auto px-4 md:px-8">
          {/* HEADER */}
          <div className="text-left max-w-3xl mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Certification{" "}
              <span className="text-primary">Courses</span>
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Select a vendor below to explore our comprehensive collection of
              certification courses and vouchers.
            </p>
          </div>

          {/* VENDOR SLIDER */}
          <VendorSlider
            vendors={VENDORS}
            selectedVendor={selectedVendor}
            onSelect={handleVendorSelect}
          />

          {/* COURSES */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              {userSelectedVendor
                ? `${selectedVendor} Courses`
                : searchQuery
                ? "Search Results"
                : `${selectedVendor} Courses`}
              <span className="ml-3 text-sm text-gray-500">
                ({courses.length} Available)
              </span>
            </h2>

            <CourseGrid
              courses={courses}
              vendorName={
                userSelectedVendor
                  ? selectedVendor
                  : searchQuery
                  ? "Search Results"
                  : selectedVendor
              }
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}