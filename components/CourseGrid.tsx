"use client";

import { ShoppingCart, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Course {
  name: string;
  category: string;
  actualPrice: number;
  ourPrice: number;
  image: string;
  content: string;
}

interface CourseGridProps {
  courses: Course[];
  vendorName: string;
}

export default function CourseGrid({ courses, vendorName }: CourseGridProps) {
  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
        <p className="text-gray-500 text-lg">
          No courses available for{" "}
          <span className="font-bold text-gray-800">{vendorName}</span> yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 group/card flex flex-col"
        >
          {/* Image Section */}
          <div className="h-48 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4 overflow-hidden relative">
            <Image
              src={course.image}
              alt={course.name}
              width={200}
              height={200}
              className="object-contain w-full h-full group-hover/card:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
              {course.category}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 h-14 group-hover/card:text-primary transition-colors">
            {course.name}
          </h3>

          {/* Price Section */}
          <div className="space-y-2 mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Actual Price</span>
              <span className="text-gray-400 line-through decoration-red-400">
                ₹{course.actualPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-bold">Offer Price</span>
              <span className="text-2xl font-bold text-primary">
                ₹{course.ourPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40">
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 py-3 px-4 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-semibold">
              Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
