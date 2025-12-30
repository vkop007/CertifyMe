import Link from "next/link";
import { Star, ArrowRight, ShoppingCart, LayoutList } from "lucide-react";
// Placeholder for course images - in a real app these would be imported or from a CMS

import { COURSES, CompTIA } from "../lib/index";

export default function ExploreCoursesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-sm font-semibold mb-4">
              Explore Our Course
            </div>
            <h2 className="text-4xl font-bold text-text-dark">
              Explore Our <span className="gradient-text">Courses</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary w-64"
              />
            </div>
            <button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CompTIA.slice(0, 6).map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
            >
              {/* Image Section */}
              <div className="h-48 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
                <img
                  src={course.image}
                  alt={course.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-accent-blue mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                {course.name.length > 25
                  ? course.name.slice(0, 25) + "..."
                  : course.name}
              </h3>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Price Section */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-dark font-medium">Actual</span>
                  <span className="text-gray-500 line-through">
                    Rs {course.actualPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg">
                  <span className="text-text-dark">Our Price</span>
                  <span className="text-primary">Rs {course.ourPrice}</span>
                </div>
              </div>

              {/* Note */}
              <p className="text-xs text-text-light mb-6">
                *The above-quoted prices are inclusive of taxes
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-lg hover:bg-accent-blue transition-colors text-sm font-medium">
                  <ShoppingCart className="w-4 h-4" />
                  Buy Now
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-primary border border-primary py-2.5 px-4 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium">
                  <LayoutList className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full bg-secondary/10 text-secondary font-semibold hover:bg-secondary hover:text-white transition-all">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
