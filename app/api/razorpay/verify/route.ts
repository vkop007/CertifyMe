import crypto from "crypto";
import { NextResponse } from "next/server";
import { sendPaymentSuccessEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customer_email,
      customer_name,
      amount,
    } = await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // ✅ SEND EMAIL
    await sendPaymentSuccessEmail({
      to: customer_email,
      name: customer_name,
      amount,
      paymentId: razorpay_payment_id,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
