"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS } from "../lib/index";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -960, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 960, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          // Reached the end, scroll back to start
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRight();
        }
      }
    }, 4000); // Auto slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background text-center">
      <div className="container-custom">
        <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-sm font-semibold mb-6">
          Testimonials
        </div>
        <h2 className="text-4xl font-bold text-text-dark mb-12">
          Our <span className="gradient-text">Products Reviews</span>
        </h2>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide flex gap-8 pb-4 rounded-3xl"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none', width: '964px', margin: '0 auto' }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow relative flex-shrink-0"
                style={{ width: '300px' }}
              >
              <Quote className="w-8 h-8 text-green-100 fill-current absolute top-6 left-6" />

              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 mt-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-text-light italic mb-6 leading-relaxed">
                {review.content}
              </p>

              <div className="mt-auto">
                <h4 className="font-bold text-text-dark">{review.name}</h4>
                <p className="text-xs text-secondary font-medium mb-3">
                  {review.role}
                </p>
                <div className="flex text-yellow-500 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
