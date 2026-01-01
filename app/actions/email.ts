"use server";

import { resend } from "@/lib/resend";

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
  const ownerEmail = "";

  try {
    // 1. Send detailed email to Owner
    const ownerEmailResult = await resend.emails.send({
      from: "CertifyMe <onboarding@resend.dev>", // Replace with your verified domain
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

    if (ownerEmailResult.error) {
      console.error("Error sending owner email:", ownerEmailResult.error);
      return { success: false, error: ownerEmailResult.error.message };
    }

    // We only send email to owner now.
    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
