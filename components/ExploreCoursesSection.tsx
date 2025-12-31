"use client";

import Link from "next/link";
import { Star, ArrowRight, ShoppingCart, LayoutList } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCartRequest } from "@/lib/redux/slices/cartSlice";

import { COURSES, CompTIA } from "../lib/index";
import { generateSlug } from "@/lib/utils";

export default function ExploreCoursesSection() {
  const dispatch = useDispatch();
  const router = useRouter(); // ✅ ADD THIS

  const handleAddToCart = (course: any) => {
    dispatch(
      addToCartRequest({
        id: course.id ?? course.name,
        name: course.name,
        price: course.ourPrice,
        image: course.image,
        quantity: 1,
      })
    );

    // ✅ REDIRECT TO CART
    router.push("/cart");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* ---- UI SAME AS BEFORE ---- */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CompTIA.slice(0, 6).map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
            >
              {/* Image */}
              <div className="h-48 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
                <img
                  src={course.image}
                  alt={course.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-accent-blue mb-4">
                {course.name.length > 25
                  ? course.name.slice(0, 25) + "..."
                  : course.name}
              </h3>

              {/* Price */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Actual</span>
                  <span className="line-through">Rs {course.actualPrice}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Our Price</span>
                  <span className="text-primary">Rs {course.ourPrice}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button
                  onClick={() => handleAddToCart(course)}
                  className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-lg hover:bg-accent-blue"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy Now
                </button>

                <Link
                  href={`/course/${generateSlug(course.category)}/${generateSlug(
                    course.name
                  )}`}
                  className="flex items-center justify-center gap-2 bg-white text-primary border border-primary py-2.5 px-4 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium"
                >
                  <LayoutList className="w-4 h-4" />
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/course">
            <button className="px-8 py-3 rounded-full bg-secondary/10 text-secondary font-semibold hover:bg-secondary hover:text-white">
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
