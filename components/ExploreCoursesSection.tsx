import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
// Placeholder for course images - in a real app these would be imported or from a CMS

import { COURSES } from "../lib/index";

export default function ExploreCoursesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-sm font-semibold mb-4">
              Explore Our Exam Vouchers
            </div>
            <h2 className="text-4xl font-bold text-text-dark">
              Explore Our <span className="gradient-text">Exam Vouchers</span>
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
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div
                className={`h-48 rounded-xl w-full mb-4 ${course.imageColor} relative overflow-hidden`}
              >
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-50">
                  Course Image
                </div>
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-semibold text-text-dark">
                  {course.category}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2 text-xs text-text-light">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(course.rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span>({course.reviews} Reviews)</span>
              </div>

              <h3 className="text-xl font-bold text-text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-xs text-text-light">
                      By{" "}
                      <span className="text-text-dark font-medium">
                        {course.author}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-primary font-bold text-lg">
                  ${course.price}
                </div>
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
