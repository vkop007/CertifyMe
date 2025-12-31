"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
  addToCartRequest,
  decreaseQuantity,
  removeFromCart,
} from "@/lib/redux/slices/cartSlice";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [phone, setPhone] = useState("");
  const [hasGST, setHasGST] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = Math.round(totalAmount * 0.18);
  const grandTotal = totalAmount + gst;

  return (
    <>
      <Header />

      <section className="container-custom pt-28 pb-20">
        {/* ===== UNIQUE HEADING ===== */}
        <div className="mb-12 mt-5">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-green-100 text-primary text-sm font-medium">
            🔒 100% Secure Payment
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Secure Checkout
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Complete your purchase securely with trusted billing & payment
            protection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* ================= BILLING DETAILS ================= */}
          <div className="lg:col-span-2">
            <div className="bg-green-50 border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6 text-primary">
                Billing Details
              </h2>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full border rounded-lg px-4 py-3 bg-white focus:border-primary outline-none"
                />

                {/* PHONE */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 border rounded-lg px-3 py-3 bg-white">
                    <span>🇮🇳</span>
                    <span className="text-sm font-medium">+91</span>
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 border rounded-lg px-4 py-3 bg-white focus:border-primary outline-none"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email ID *"
                  className="w-full border rounded-lg px-4 py-3 bg-white focus:border-primary outline-none"
                />

                <textarea
                  placeholder="Billing Address *"
                  rows={4}
                  className="w-full border rounded-lg px-4 py-3 bg-white focus:border-primary outline-none"
                />

                <label className="flex items-center gap-2 text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={hasGST}
                    onChange={(e) => setHasGST(e.target.checked)}
                  />
                  I have GST Number
                </label>

                {hasGST && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      placeholder="Company Name"
                      className="border rounded-lg px-4 py-3 bg-white focus:border-primary outline-none"
                    />
                    <input
                      placeholder="GST Number"
                      className="border rounded-lg px-4 py-3 bg-white focus:border-primary outline-none"
                    />
                    <input
                      placeholder="Pincode"
                      className="border rounded-lg px-4 py-3 bg-white focus:border-primary outline-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">

            {/* YOUR ORDER */}
            <div className="bg-green-50 border rounded-2xl p-6 max-h-[320px] overflow-y-auto">
              <h3 className="text-lg font-bold mb-4">
                Your Order
              </h3>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center border-b pb-4 mb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md bg-white"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-primary font-bold">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                        className="px-2 py-1 border rounded bg-white"
                      >
                        –
                      </button>

                      <span className="font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(addToCartRequest(item))
                        }
                        className="px-2 py-1 border rounded bg-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-green-50 border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">
                Order Summary
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst}</span>
                </div>

                <div className="flex justify-between font-bold text-lg">
                  <span>Grand Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:opacity-90">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
