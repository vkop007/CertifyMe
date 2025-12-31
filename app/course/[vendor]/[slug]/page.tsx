"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { getCourseBySlug } from "@/lib/utils";
import { ArrowLeft, ShoppingCart, CheckCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCartRequest } from "@/lib/redux/slices/cartSlice";
import { useRouter } from "next/navigation";

export default function CourseDetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const foundCourse = getCourseBySlug(params.slug as string);
      setCourse(foundCourse);
      setLoading(false);
    }
  }, [params.slug]);

  const handleBuyNow = () => {
    if (!course) return;
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

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container-custom mx-auto px-4 py-20 text-center">
          <div className="animate-pulse">Loading course details...</div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container-custom mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The course you are looking for does not exist or has been moved.
          </p>
          <Link
            href={`/course/${params.vendor}`}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {params.vendor?.toString().toUpperCase()} Courses
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero / Header Section */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="container-custom mx-auto px-4 py-10 md:py-16">
          <Link
            href={`/course/${params.vendor}`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {params.vendor?.toString().toUpperCase()} Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <span className="inline-block bg-green-50 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 border border-green-100">
                {course.category} Certification
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {course.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Official Voucher</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Instant Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>100% Valid</span>
                </div>
              </div>

              {/* Mobile Image (shown only on small screens) */}
              <div className="lg:hidden mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  About this Certification
                </h3>
                <div className="space-y-4">
                  {course.content
                    .split("\n")
                    .map((paragraph: string, idx: number) =>
                      paragraph.trim() ? (
                        <p key={idx} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ) : (
                        <br key={idx} />
                      )
                    )}
                </div>
              </div>

              {/* Exam Details Section */}
              {course.examDetails && (
                <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    Exam Details
                  </h3>
                  <div
                    className="
                      [&_table]:w-full [&_table]:border-collapse
                      [&_th]:text-left [&_th]:px-6 [&_th]:py-4 [&_th]:text-sm [&_th]:font-semibold [&_th]:text-gray-900 [&_th]:bg-gray-50/50 [&_th]:w-1/3
                      [&_td]:text-left [&_td]:px-6 [&_td]:py-4 [&_td]:text-sm [&_td]:text-gray-600
                      [&_tr]:border-b [&_tr]:border-gray-100
                      [&_tr:last-child]:border-0
                      [&_tbody_tr:hover]:bg-gray-50/30 transition-colors
                      border border-gray-100 rounded-xl overflow-hidden
                    "
                    dangerouslySetInnerHTML={{ __html: course.examDetails }}
                  />
                </div>
              )}
            </div>

            {/* Right Sidebar / Sticky Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                {/* Desktop Image */}
                <div className="hidden lg:block relative h-48 w-full mb-8 bg-gray-50 rounded-xl p-4">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Standard Price</p>
                    <p className="text-lg line-through text-gray-400">
                      ₹{course.actualPrice.toLocaleString()}
                    </p>
                  </div>

                  <div className="pt-2 pb-6 border-b border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Our Price</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-bold text-gray-900">
                        ₹{course.ourPrice.toLocaleString()}
                      </p>
                      <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded text-sm">
                        {Math.round(
                          ((course.actualPrice - course.ourPrice) /
                            course.actualPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleBuyNow}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 px-6 rounded-xl hover:bg-accent-blue transition-all transform hover:-translate-y-1 font-bold text-lg shadow-lg hover:shadow-xl shadow-primary/30"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Buy Now
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                      Secure payment via Stripe • Instant Digital Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
