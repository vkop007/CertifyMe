"use client";

import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../lib/index";
import Image from "next/image";

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom px-4 md:px-0">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-xs sm:text-sm font-semibold mb-4">
            Testimonials
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Trusted by <span className="gradient-text">Professionals Worldwide</span>
          </h2>

          <p className="text-text-light text-sm md:text-base">
            Real feedback from certified professionals who trusted our exam
            vouchers and training services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="
                relative bg-white rounded-3xl p-6 md:p-8
                border border-gray-100
                shadow-sm hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-1
                flex flex-col
              "
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-green-100 fill-current absolute top-6 left-6" />

              {/* User Image */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-5 mt-6">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review Content */}
              <p className="text-sm md:text-base text-text-light italic leading-relaxed mb-6">
                “{review.content}”
              </p>

              {/* Footer */}
              <div className="mt-auto">
                <h4 className="font-semibold text-text-dark">
                  {review.name}
                </h4>
                <p className="text-xs text-secondary font-medium mb-3">
                  {review.role}
                </p>

                {/* Rating */}
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
