"use client";

import Link from "next/link";
import { ShoppingCart, LayoutList } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCartRequest } from "@/lib/redux/slices/cartSlice";

import { AWS } from "../lib/index";
import { Microsoft } from "../lib/index";
import { SALESFORCE } from "../lib/index";
import { CompTIA } from "../lib/index";
import { Databricks } from "../lib/index";
import { Snowflake } from "../lib/index";

import { generateSlug } from "@/lib/utils";

export default function ExploreCoursesSection() {
  const dispatch = useDispatch();
  const router = useRouter();

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
    router.push("/cart");
  };

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container-custom px-4 md:px-0">
        {/* HEADER */}
        <div className="flex flex-col items-center lg:text-center mb-10 md:mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-secondary text-xs sm:text-sm font-semibold mb-3">
            Explore Our Courses
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark">
            Explore Our <span className="gradient-text">Courses</span>
          </h2>
        </div>

        {/* COURSES GRID (CENTERED ON LARGE) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
            {AWS.slice(0, 1).map((course, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-5 md:p-6
                  border border-gray-100
                  hover:shadow-xl transition-all
                  flex flex-col group
                "
              >
                {/* IMAGE */}
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-3 md:p-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="max-h-full max-w-full object-contain
                               group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-bold text-accent-blue mb-4 text-center">
                  {course.name.length > 28
                    ? course.name.slice(0, 28) + "..."
                    : course.name}
                </h3>

                {/* PRICE */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-text-light">
                    <span>Actual</span>
                    <span className="line-through">₹ {course.actualPrice}</span>
                  </div>

                  <div className="flex justify-between font-bold">
                    <span>Our Price</span>
                    <span className="text-primary">₹ {course.ourPrice}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="
                      flex items-center justify-center gap-2
                      bg-primary text-white
                      py-2.5 rounded-lg
                      text-sm md:text-base
                      hover:bg-accent-blue transition-colors
                    "
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>

                  <Link
                    href={`/course/${generateSlug(
                      course.category
                    )}/${generateSlug(course.name)}`}
                    className="
                      flex items-center justify-center gap-2
                      bg-white text-primary
                      border border-primary
                      py-2.5 px-4 rounded-lg
                      hover:bg-green-50 transition-colors
                      text-sm md:text-base font-medium
                    "
                  >
                    <LayoutList className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
            {Microsoft.slice(0, 1).map((course, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-5 md:p-6
                  border border-gray-100
                  hover:shadow-xl transition-all
                  flex flex-col group
                "
              >
                {/* IMAGE */}
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-3 md:p-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="max-h-full max-w-full object-contain
                               group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-bold text-accent-blue mb-4 text-center">
                  {course.name.length > 28
                    ? course.name.slice(0, 28) + "..."
                    : course.name}
                </h3>

                {/* PRICE */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-text-light">
                    <span>Actual</span>
                    <span className="line-through">₹ {course.actualPrice}</span>
                  </div>

                  <div className="flex justify-between font-bold">
                    <span>Our Price</span>
                    <span className="text-primary">₹ {course.ourPrice}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="
                      flex items-center justify-center gap-2
                      bg-primary text-white
                      py-2.5 rounded-lg
                      text-sm md:text-base
                      hover:bg-accent-blue transition-colors
                    "
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>

                  <Link
                    href={`/course/${generateSlug(
                      course.category
                    )}/${generateSlug(course.name)}`}
                    className="
                      flex items-center justify-center gap-2
                      bg-white text-primary
                      border border-primary
                      py-2.5 px-4 rounded-lg
                      hover:bg-green-50 transition-colors
                      text-sm md:text-base font-medium
                    "
                  >
                    <LayoutList className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
            {SALESFORCE.slice(0, 1).map((course, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-5 md:p-6
                  border border-gray-100
                  hover:shadow-xl transition-all
                  flex flex-col group
                "
              >
                {/* IMAGE */}
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-3 md:p-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="max-h-full max-w-full object-contain
                               group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-bold text-accent-blue mb-4 text-center">
                  {course.name.length > 28
                    ? course.name.slice(0, 28) + "..."
                    : course.name}
                </h3>

                {/* PRICE */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-text-light">
                    <span>Actual</span>
                    <span className="line-through">₹ {course.actualPrice}</span>
                  </div>

                  <div className="flex justify-between font-bold">
                    <span>Our Price</span>
                    <span className="text-primary">₹ {course.ourPrice}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="
                      flex items-center justify-center gap-2
                      bg-primary text-white
                      py-2.5 rounded-lg
                      text-sm md:text-base
                      hover:bg-accent-blue transition-colors
                    "
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>

                  <Link
                    href={`/course/${generateSlug(
                      course.category
                    )}/${generateSlug(course.name)}`}
                    className="
                      flex items-center justify-center gap-2
                      bg-white text-primary
                      border border-primary
                      py-2.5 px-4 rounded-lg
                      hover:bg-green-50 transition-colors
                      text-sm md:text-base font-medium
                    "
                  >
                    <LayoutList className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
            {CompTIA.slice(0, 1).map((course, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-5 md:p-6
                  border border-gray-100
                  hover:shadow-xl transition-all
                  flex flex-col group
                "
              >
                {/* IMAGE */}
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-3 md:p-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="max-h-full max-w-full object-contain
                               group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-bold text-accent-blue mb-4 text-center">
                  {course.name.length > 28
                    ? course.name.slice(0, 28) + "..."
                    : course.name}
                </h3>

                {/* PRICE */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-text-light">
                    <span>Actual</span>
                    <span className="line-through">₹ {course.actualPrice}</span>
                  </div>

                  <div className="flex justify-between font-bold">
                    <span>Our Price</span>
                    <span className="text-primary">₹ {course.ourPrice}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="
                      flex items-center justify-center gap-2
                      bg-primary text-white
                      py-2.5 rounded-lg
                      text-sm md:text-base
                      hover:bg-accent-blue transition-colors
                    "
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>

                  <Link
                    href={`/course/${generateSlug(
                      course.category
                    )}/${generateSlug(course.name)}`}
                    className="
                      flex items-center justify-center gap-2
                      bg-white text-primary
                      border border-primary
                      py-2.5 px-4 rounded-lg
                      hover:bg-green-50 transition-colors
                      text-sm md:text-base font-medium
                    "
                  >
                    <LayoutList className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
            {Databricks.slice(0, 1).map((course, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-5 md:p-6
                  border border-gray-100
                  hover:shadow-xl transition-all
                  flex flex-col group
                "
              >
                {/* IMAGE */}
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-3 md:p-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="max-h-full max-w-full object-contain
                               group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-bold text-accent-blue mb-4 text-center">
                  {course.name.length > 28
                    ? course.name.slice(0, 28) + "..."
                    : course.name}
                </h3>

                {/* PRICE */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-text-light">
                    <span>Actual</span>
                    <span className="line-through">₹ {course.actualPrice}</span>
                  </div>

                  <div className="flex justify-between font-bold">
                    <span>Our Price</span>
                    <span className="text-primary">₹ {course.ourPrice}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="
                      flex items-center justify-center gap-2
                      bg-primary text-white
                      py-2.5 rounded-lg
                      text-sm md:text-base
                      hover:bg-accent-blue transition-colors
                    "
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>

                  <Link
                    href={`/course/${generateSlug(
                      course.category
                    )}/${generateSlug(course.name)}`}
                    className="
                      flex items-center justify-center gap-2
                      bg-white text-primary
                      border border-primary
                      py-2.5 px-4 rounded-lg
                      hover:bg-green-50 transition-colors
                      text-sm md:text-base font-medium
                    "
                  >
                    <LayoutList className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
            {Snowflake.slice(0, 1).map((course, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-5 md:p-6
                  border border-gray-100
                  hover:shadow-xl transition-all
                  flex flex-col group
                "
              >
                {/* IMAGE */}
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-3 md:p-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="max-h-full max-w-full object-contain
                               group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-bold text-accent-blue mb-4 text-center">
                  {course.name.length > 28
                    ? course.name.slice(0, 28) + "..."
                    : course.name}
                </h3>

                {/* PRICE */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-text-light">
                    <span>Actual</span>
                    <span className="line-through">₹ {course.actualPrice}</span>
                  </div>

                  <div className="flex justify-between font-bold">
                    <span>Our Price</span>
                    <span className="text-primary">₹ {course.ourPrice}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="
                      flex items-center justify-center gap-2
                      bg-primary text-white
                      py-2.5 rounded-lg
                      text-sm md:text-base
                      hover:bg-accent-blue transition-colors
                    "
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>

                  <Link
                    href={`/course/${generateSlug(
                      course.category
                    )}/${generateSlug(course.name)}`}
                    className="
                      flex items-center justify-center gap-2
                      bg-white text-primary
                      border border-primary
                      py-2.5 px-4 rounded-lg
                      hover:bg-green-50 transition-colors
                      text-sm md:text-base font-medium
                    "
                  >
                    <LayoutList className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-10 md:mt-12">
          <Link href="/course">
            <button
              className="
                px-8 py-3 rounded-full
                bg-secondary/10 text-secondary
                font-semibold
                hover:bg-secondary hover:text-white
                transition-colors
              "
            >
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
