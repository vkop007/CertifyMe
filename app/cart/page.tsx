"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
  addToCartRequest,
  decreaseQuantity,
} from "@/lib/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CreditCard } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [phone, setPhone] = useState("");
  const [hasGST, setHasGST] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
  }>({});

  const handleRazorpayPayment = async () => {
    const isValidEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhone = (phone: string) => {
      return /^[6-9]\d{9}$/.test(phone); // Indian 10-digit mobile
    };

    if (cartItems.length === 0) return;

    const newErrors: typeof errors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

if (!email.trim()) {
  newErrors.email = "Email is required";
} else if (!isValidEmail(email)) {
  newErrors.email = "Enter a valid email address";
}

if (!phone.trim()) {
  newErrors.phone = "Mobile number is required";
} else if (!isValidPhone(phone)) {
  newErrors.phone = "Enter a valid 10-digit mobile number";
}

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      // 1️⃣ Create Razorpay Order
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: grandTotal, // ₹ total
        }),
      });

      const order = await res.json();

      // 2️⃣ Razorpay Options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "CERTIFY",
        description: "Course Purchase",
        order_id: order.id,

        handler: async function (response: any) {
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              customer_email: email,
              customer_name: fullName,
              amount: grandTotal,
            }),
          });

          const data = await verifyRes.json();

          if (data.success) {
            alert("Payment Verified & Successful!");
          } else {
            alert("Payment verification failed!");
          }
        },

        prefill: {
          name: fullName || "Customer",
          email: email || "customer@example.com",
          contact: phone || "9999999999",
        },

        notes: {
          customer_name: fullName,
          customer_email: email,
          customer_phone: phone,
        },

        theme: {
          color: "#22c55e",
        },
      };

      // 4️⃣ Open Razorpay
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = Math.round(totalAmount * 0.18);
  const grandTotal = totalAmount + gst;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Added mt-[10px] here to create exactly 10px space below the nav */}
      <section className="container-custom mt-[10px] pb-20">
        <div className="mb-8 pt-6">
          <Link
            href="/course"
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-4 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Courses
          </Link>
          <h1 className="text-3xl font-extrabold text-emerald-600">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: BILLING DETAILS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full font-bold text-sm">
                  1
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Billing Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">
                    Phone Number*
                  </label>

                  <div className="flex gap-2">
                    <span className="flex items-center px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600">
                      +91
                    </span>

                    <div className="flex-1">
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
                          if (value.length <= 10) {
                            setPhone(value);
                          }
                        }}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none"
                      />

                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 leading-tight">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">
                    Email Address*
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none"
                  />

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 leading-tight">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block tracking-wider">
                    Billing Address
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none"
                    placeholder="Flat No, Street Name, City..."
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={hasGST}
                    onChange={() => setHasGST(!hasGST)}
                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-primary transition-colors">
                    I have a GST Number
                  </span>
                </label>

                {hasGST && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 animate-in fade-in slide-in-from-top-2">
                    <input
                      placeholder="Company"
                      className="border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none"
                    />
                    <input
                      placeholder="GSTIN"
                      className="border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none"
                    />
                    <input
                      placeholder="Pincode"
                      className="border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY (Sticky with 2-item scroll) */}
          <div className="lg:col-span-5 lg:sticky lg:top-[80px]">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                  <span>Order Summary</span>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    {cartItems.length} items
                  </span>
                </h3>

                {/* SCROLLABLE CONTAINER: Fixed height for exactly 2 items */}
                <div className="space-y-3 overflow-y-auto h-[185px] pr-2 custom-scrollbar">
                  {cartItems.length === 0 ? (
                    <div className="h-[185px] flex flex-col items-center justify-center text-center px-6">
                      <ShieldCheck className="w-10 h-10 text-slate-300 mb-3" />
                      <p className="text-sm font-semibold text-slate-600">
                        Your cart is empty
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Redirecting you to courses...
                      </p>

                      <Link
                        href="/course"
                        className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
                      >
                        Browse Courses →
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3 overflow-y-auto h-[185px] pr-2 custom-scrollbar">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 items-center p-3 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                          <div className="relative h-14 w-14 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="rounded-lg object-cover bg-white"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-800 truncate">
                              {item.name}
                            </p>

                            <div className="flex items-center gap-3 mt-1">
                              <div className="flex items-center border rounded-lg bg-white overflow-hidden shadow-sm">
                                <button
                                  onClick={() =>
                                    dispatch(decreaseQuantity(item.id))
                                  }
                                  className="px-2 py-0.5 border-r hover:bg-slate-50 text-xs"
                                >
                                  –
                                </button>
                                <span className="px-2 text-[10px] font-bold">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    dispatch(addToCartRequest(item))
                                  }
                                  className="px-2 py-0.5 border-l hover:bg-slate-50 text-xs"
                                >
                                  +
                                </button>
                              </div>

                              <span className="text-sm font-bold text-primary">
                                ₹{item.price * item.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Dark Payment Section */}
              <div className="bg-gradient-to-b from-[#f3faf7] to-white overflow-hidden p-6 text-black">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-black text-sm">
                    <span>Subtotal</span>
                    <span className="text-black font-medium">
                      ₹{totalAmount}
                    </span>
                  </div>
                  <div className="flex justify-between text-black text-sm">
                    <span>Tax (GST 18%)</span>
                    <span className="text-black font-medium">₹{gst}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-black uppercase font-black tracking-[0.2em] mb-1">
                        Total Payable
                      </p>
                      <p className="text-3xl font-black text-black">
                        ₹{grandTotal}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleRazorpayPayment}
                  disabled={cartItems.length === 0}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all
    ${
      cartItems.length === 0
        ? "bg-slate-700 text-slate-400 cursor-not-allowed"
        : "bg-primary text-white hover:brightness-110 active:scale-[0.98] shadow-xl shadow-primary/20"
    }`}
                >
                  <CreditCard className="w-5 h-5" />
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}