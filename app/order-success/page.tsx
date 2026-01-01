"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />

        <h1 className="text-2xl font-extrabold text-slate-800 mb-2">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-slate-600 text-sm mb-6">
          Your exam voucher will be sent to your registered email within
          <span className="font-semibold"> 24 hours</span>.
        </p>

        <Link
          href="/course"
          className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition"
        >
          Continue Browsing Courses
        </Link>
      </div>
    </div>
  );
}
