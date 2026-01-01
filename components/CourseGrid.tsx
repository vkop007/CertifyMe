"use client";

import { useDispatch } from "react-redux";
import { addToCartRequest } from "@/lib/redux/slices/cartSlice";
import { ShoppingCart, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { generateSlug } from "@/lib/utils";

interface CourseGridProps {
  courses: any[];
  vendorName: string;
}

export default function CourseGrid({ courses, vendorName }: CourseGridProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBuyNow = (course: any) => {
    // ✅ 1. Add to cart
    dispatch(
      addToCartRequest({
        id: course.id ?? course.name,
        name: course.name,
        price: course.ourPrice,
        image: course.image,
        quantity: 1,
      })
    );

    // ✅ 2. Redirect to cart
    router.push("/cart");
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold mb-2">No courses available</h2>
        <p className="text-gray-500">Please select another vendor</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
        >
          {/* Image */}
          <div className="h-44 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
            <Image
              src={course.image}
              alt={course.name}
              width={250}
              height={130}
              className="object-contain hover:scale-105 transition-transform"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-accent-blue mb-4 line-clamp-2 group-hover:text-primary transition-colors">
            {course.name}
          </h3>

          <div className="border-t border-gray-200 my-4"></div>

          {/* Price */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Actual</span>
              <span className="line-through text-gray-400">
                ₹{course.actualPrice}
              </span>
            </div>

            <div className="flex justify-between items-center font-bold text-lg">
              <span>Our Price</span>
              <span className="text-primary">₹{course.ourPrice}</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-6">
            *Prices are inclusive of taxes
          </p>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            {/* 🔥 BUY NOW */}
            <button
              onClick={() => handleBuyNow(course)}
              className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-lg hover:bg-accent-blue transition-colors text-sm font-medium"
            >
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </button>

            {/* DETAILS */}
            <Link
              href={`/course/${generateSlug(vendorName)}/${generateSlug(
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
  );
}
