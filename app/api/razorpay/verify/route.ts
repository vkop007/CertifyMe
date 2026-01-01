export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customer_email,
      customer_name,
      amount,
      products,
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, message: "Missing Razorpay params" },
        { status: 400 }
      );
    }

    // 1️⃣ Verify signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, message: "Invalid signature" },
        { status: 400 }
      );
    }

    // 2️⃣ Prepare product list HTML
    const productHTML = Array.isArray(products)
      ? products
          .map(
            (p: any) => `
              <tr>
                <td style="padding:8px;border:1px solid #e5e7eb;">${p.name}</td>
                <td style="padding:8px;border:1px solid #e5e7eb;text-align:center;">${p.quantity}</td>
                <td style="padding:8px;border:1px solid #e5e7eb;text-align:right;">₹${p.price}</td>
              </tr>
            `
          )
          .join("")
      : "";

    // 3️⃣ Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Certify" <${process.env.SMTP_USER}>`,
      to: customer_email,
      subject: "Payment Successful 🎉",
      html: `
  <div style="font-family:Arial,Helvetica,sans-serif; color:#111827; line-height:1.6;">
    <h2 style="color:#16a34a;">Payment Successful</h2>

    <p>Hello <b>${customer_name}</b>,</p>

    <p>
      Your payment of <b>₹${amount}</b> was successful.  
      We have received your order and it is now being processed.
    </p>

    <h3 style="margin-top:20px;">Purchased Products</h3>

    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%; margin-top:10px;">
      <thead>
        <tr style="background:#f3f4f6;">
          <th style="padding:8px;border:1px solid #e5e7eb;text-align:left;">Product</th>
          <th style="padding:8px;border:1px solid #e5e7eb;">Qty</th>
          <th style="padding:8px;border:1px solid #e5e7eb;text-align:right;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${productHTML}
      </tbody>
    </table>

    <div style="margin-top:18px; padding:14px; background:#f0fdf4; border-left:4px solid #16a34a;">
      <p style="margin:0; font-size:14px;">
        <b>Voucher Delivery Notice</b><br/>
        Within <b>24 hours</b>, your exam voucher will be delivered to your registered email address.
        <br/>
        Thank you for your patience.
      </p>
    </div>

    <p style="margin-top:14px;">
      <b>Payment ID:</b> ${razorpay_payment_id}
    </p>

    <br/>
    <p>
      Thank you for choosing <b>Certify</b>.<br/>
      <span style="color:#6b7280; font-size:13px;">
        If you have any questions, feel free to reply to this email.
      </span>
    </p>
  </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Verify API crashed:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
