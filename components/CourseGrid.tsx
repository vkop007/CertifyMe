"use client";

import { useDispatch } from "react-redux";
import { addToCartRequest } from "@/lib/redux/slices/cartSlice";
import { ShoppingCart, LayoutList, Zap, ArrowRight, ShieldCheck } from "lucide-react";
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

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
           <LayoutList className="text-gray-300" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">No vouchers found</h2>
        <p className="text-gray-500">Try selecting a different category or vendor.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => {
        // Calculate discount percentage
        const discount = Math.round(((course.actualPrice - course.ourPrice) / course.actualPrice) * 100);

        return (
          <div
            key={index}
            className="group relative bg-white rounded-[2rem] border border-gray-100 p-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            {/* SAVINGS BADGE */}
            {discount > 0 && (
              <div className="absolute top-5 left-5 z-10 bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center gap-1 shadow-lg shadow-primary/20">
                <Zap size={10} fill="currentColor" /> SAVE {discount}%
              </div>
            )}

            {/* VOUCHER IMAGE AREA */}
            <div className="relative h-52 bg-gray-50/50 rounded-[1.75rem] overflow-hidden flex items-center justify-center p-8 transition-colors group-hover:bg-white">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src={course.image}
                alt={course.name}
                width={200}
                height={100}
                className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                 <ShieldCheck className="text-primary w-5 h-5" />
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="px-5 py-6 flex-1 flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {course.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-500 rounded uppercase tracking-wider">
                    Official Voucher
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Instant Delivery</span>
                </div>
              </div>

              {/* PRICING TABLE */}
              <div className="bg-gray-50/80 rounded-2xl p-4 mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-gray-400">Market Price</span>
                  <span className="text-sm line-through text-gray-400 decoration-red-400/50">
                    ₹{course.actualPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-gray-900">Our Exclusive Price</span>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-primary leading-none">
                      ₹{course.ourPrice.toLocaleString()}
                    </span>
                    <span className="text-[9px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">
                      Incl. 18% GST
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleBuyNow(course)}
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-primary transition-all duration-300 text-xs font-black tracking-widest shadow-md hover:shadow-primary/30 active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  BUY NOW
                </button>

                <Link
                  href={`/course/${generateSlug(vendorName)}/${generateSlug(course.name)}`}
                  className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 px-4 rounded-xl hover:border-primary hover:text-primary transition-all text-xs font-black tracking-widest active:scale-95"
                >
                  DETAILS
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}