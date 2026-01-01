"use client";

import Link from "next/link";
import { ShoppingCart, LayoutList, ArrowRight, Zap } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCartRequest } from "@/lib/redux/slices/cartSlice";

import { AWS, Microsoft, SALESFORCE, CompTIA, Databricks, Snowflake } from "../lib/index";
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

  const featuredVendors = [AWS, Microsoft, SALESFORCE, CompTIA, Databricks, Snowflake];

  return (
    <section className="py-5 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap size={12} fill="currentColor" />
            Most Popular Certifications
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            Explore Our <span className="text-primary italic">Featured</span> Vouchers
          </h2>
        </div>

        {/* --- COURSES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredVendors.map((vendorCourses, vIndex) => {
            const course = vendorCourses[0]; // Take first featured course
            const discount = Math.round(((course.actualPrice - course.ourPrice) / course.actualPrice) * 100);

            return (
              <div
                key={vIndex}
                className="group relative bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* SAVINGS BADGE */}
                <div className="absolute top-4 right-4 z-10 bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-primary/20">
                  SAVE {discount}%
                </div>

                {/* IMAGE CONTAINER */}
                <div className="relative h-48 bg-gray-50/50 rounded-[2rem] overflow-hidden flex items-center justify-center p-10 mb-6 group-hover:bg-white transition-colors">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* CONTENT */}
                <div className="px-2 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest px-2 py-0.5 bg-primary/5 rounded border border-primary/10">
                      Official Voucher
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-primary transition-colors min-h-[3.5rem] line-clamp-2">
                    {course.name}
                  </h3>

                  {/* PRICE BLOCK */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Market Price</span>
                      <span className="text-sm line-through text-gray-400 font-medium">₹{course.actualPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-gray-900 uppercase">Our Price</span>
                      <span className="text-2xl font-black text-primary">₹{course.ourPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button
                      onClick={() => handleAddToCart(course)}
                      className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-primary transition-all duration-300 text-xs font-black tracking-widest active:scale-95 shadow-md hover:shadow-primary/20"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      BUY NOW
                    </button>

                    <Link
                      href={`/course/${generateSlug(course.category || "vouchers")}/${generateSlug(course.name)}`}
                      className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 px-4 rounded-xl hover:border-primary hover:text-primary transition-all text-xs font-black tracking-widest active:scale-95"
                    >
                      DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- VIEW ALL CTA --- */}
        <div className="text-center mt-16">
          <Link 
            href="/course"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gray-50 border border-gray-100 text-gray-900 font-black text-xs tracking-[0.3em] rounded-2xl hover:bg-white hover:border-primary hover:text-primary transition-all group"
          >
            VIEW ALL COLLECTIONS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}