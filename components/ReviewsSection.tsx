"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { REVIEWS } from "../lib/index";
import Image from "next/image";

export default function ReviewsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Star size={12} className="text-yellow-400 fill-current" />
            4.9/5 User Rating
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tighter mb-8">
            Trusted by <span className="text-primary italic">Professionals</span> Worldwide.
          </h2>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
            Join 10,000+ candidates who unlocked their career potential 
            with our official certification vouchers.
          </p>
        </div>

        {/* --- REVIEWS GRID --- */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02),0_4px_25px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 right-8 text-gray-100 group-hover:text-primary/20 group-hover:rotate-12 transition-all duration-500">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-0.5 text-amber-400 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "fill-current" : "text-gray-200"}
                  />
                ))}
              </div>

              {/* Review Content */}
              <blockquote className="flex-1 relative z-10">
                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed italic mb-10">
                  “{review.content}”
                </p>
              </blockquote>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-8 border-t border-gray-50 mt-auto">
                <div className="relative w-14 h-14 shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="rounded-2xl object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-0.5 border-2 border-white">
                    <CheckCircle2 size={10} />
                  </div>
                </div>
                
                <div className="overflow-hidden">
                  <h4 className="font-bold text-gray-900 text-base truncate">
                    {review.name}
                  </h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider truncate">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- OPTIONAL SOCIAL PROOF BAR --- */}

      </div>
    </section>
  );
}