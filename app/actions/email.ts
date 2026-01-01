"use server";

import { transporter } from "@/lib/nodemailer";

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  vendor?: string;
  course?: string;
  message?: string;
  country?: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  const { fullName, phone, email, vendor, course, message, country } = formData;

  // Use environment variable for owner email, fallback to hardcoded if needed
  const ownerEmail = process.env.OWNER_EMAIL;
  const senderEmail = process.env.SMTP_USER;

  try {
    // 1. Send detailed email to Owner
    await transporter.sendMail({
      from: `"CertifyMe" <${senderEmail}>`,
      to: ownerEmail,
      subject: `New Contact Enquiry from ${fullName}`,
      html: `
        <h2>New Enquiry Details</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${country ? `<p><strong>Country:</strong> ${country}</p>` : ""}
        <p><strong>Vendor:</strong> ${vendor || "N/A"}</p>
        <p><strong>Course:</strong> ${course || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided."}</p>
      `,
    });

    // 2. Send "Thank You" email to User
    await transporter.sendMail({
      from: `"CertifyMe" <${senderEmail}>`,
      to: email,
      subject: "Thank you for contacting CertifyMe",
      html: `
        <h2>Hello ${fullName},</h2>
        <p>Thank you for reaching out to us. We have received your enquiry regarding <strong>${vendor || "our services"}</strong>.</p>
        <p>Our team will get back to you shortly.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>The CertifyMe Team</strong></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
