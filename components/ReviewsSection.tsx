import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../lib/index";

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-background text-center">
      <div className="container-custom">
        <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-sm font-semibold mb-6">
          Testimonials
        </div>
        <h2 className="text-4xl font-bold text-text-dark mb-12">
          Our <span className="gradient-text">Products Reviews</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-green-100 fill-current absolute top-6 left-6" />

              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-xl font-bold text-primary mb-6 mt-4">
                {review.image}
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
      </div>
    </section>
  );
}
