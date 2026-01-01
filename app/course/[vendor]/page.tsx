"use client";

import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CourseGrid from "@/components/CourseGrid";
import {
  AWS,
  CompTIA,
  Microsoft,
  SALESFORCE,
  ORACLE,
  ISACA,
  Fortinet,
  VMWARE,
  SAS,
  SPLUNK,
  ECCouncil,
  Checkpoint,
  DELLEMC,
  Juniper,
  KUBERNETES,
  PEGA,
  ISTQB,
  SERVICENOW,
} from "@/lib/index";

/* 🔁 Vendor → Courses map */
const COURSE_MAP: Record<string, any[]> = {
  aws: AWS,
  comptia: CompTIA,
  microsoft: Microsoft,
  salesforce: SALESFORCE,
  oracle: ORACLE,
  isaca: ISACA,
  fortinet: Fortinet,
  vmware: VMWARE,
  sas: SAS,
  splunk: SPLUNK,
  eccouncil: ECCouncil,
  checkpoint: Checkpoint,
  dellemc: DELLEMC,
  juniper: Juniper,
  kubernetes: KUBERNETES,
  pega: PEGA,
  istqb: ISTQB,
  SERVICENOW: SERVICENOW,
};

export default function VendorCoursePage() {
  const params = useParams();
  const vendor = params.vendor as string;

  const courses = COURSE_MAP[vendor?.toLowerCase()] || [];

  const vendorTitle =
    vendor.charAt(0).toUpperCase() + vendor.slice(1);

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Header />

      <section className="pt-10 pb-16">
        <div className="container-custom px-4 md:px-8">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {vendorTitle}{" "}
              <span className="text-primary">Courses</span>
            </h1>
            <p className="text-gray-600 mt-2">
              Explore all available {vendorTitle} certification vouchers
            </p>
          </div>

          <CourseGrid
            courses={courses}
            vendorName={vendorTitle}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
