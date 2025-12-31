"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TRAININGS } from "../../lib/index";

const ENGLISH_EXAMS = ["TOEFL", "GRE", "IELTS", "PTE", "Duolingo"];

const VOUCHERS = [
  "AWS",
  "CISCO",
  "CompTIA",
  "Databricks",
  "GCP",
  "Microsoft",
  "Salesforce",
  "Snowflake",
  "Kubernetes",
  "ISACA",
  "Oracle",
  "ISTQB",
  "VMware",
];

export default function TrainingPage() {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 w-96 h-96 bg-[#34D399] rounded-full opacity-40 blur-3xl" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#0D9488] rounded-full opacity-30 blur-3xl" />
          <div className="absolute left-1/3 bottom-0 w-[400px] h-[400px] bg-[#10B981] rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="relative container-custom">
          <div className="bg-white rounded-[36px] shadow-2xl px-12 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-5 py-1.5 rounded-full bg-green-100 text-primary text-sm font-semibold">
                Professional Career Learning
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-text-dark">
                Find the Best <br />
                <span className="text-primary">IT Trainings</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
                Explore industry-recognized IT training programs designed to
                elevate your career with hands-on projects and expert guidance.
              </p>

              <Link
                href="/contactus"
                className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition"
              >
                Contact Us Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="h-72 rounded-3xl bg-linear-to-br from-[#0D9488] via-[#10B981] to-[#34D399] opacity-90 shadow-inner relative overflow-hidden flex items-center justify-center" style={{ width: '400px' }}>
                <Image
                  src="/hero2.webp"
                  alt="IT Training"
                  width={350}
                  height={180}
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAININGS ================= */}
      <section className="container-custom py-24 mt-16 mb-16">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-text-dark">
          Our <span className="text-primary">Training Programs</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 pt-10 pb-10">
          {TRAININGS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition border border-gray-100 group"
            >
              <div className="relative h-48 w-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VOUCHERS ================= */}
      {/* <section className="bg-green-50 py-24">
        <div className="container-custom">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-text-dark">
            Certification <span className="text-primary">Vouchers</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">
                English Exam Vouchers
              </h3>
              <ul className="space-y-3">
                {ENGLISH_EXAMS.map((exam) => (
                  <li
                    key={exam}
                    className="px-4 py-2 rounded-lg bg-green-100 text-sm font-medium"
                  >
                    {exam}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">
                IT Certification Vouchers
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {VOUCHERS.map((item) => (
                  <Link
                    key={item}
                    href={`/course/${item.toLowerCase()}`}
                    className="px-5 py-3 rounded-xl bg-green-100 hover:bg-primary hover:text-white transition text-center font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
