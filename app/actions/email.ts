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
  const ownerEmail = "officialgxdyt@gmail.com";

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

    // 2. Send "Thank You" email to User
    const userEmailResult = await resend.emails.send({
      from: "CertifyMe <onboarding@resend.dev>", // Replace with verified domain
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

    if (userEmailResult.error) {
      if (
        userEmailResult.error.name === "validation_error" &&
        userEmailResult.error.message.includes("only send testing emails")
      ) {
        console.warn(
          "⚠️ DEV MODE NOTICE: Email to user was blocked by Resend because you are in testing mode. This is expected until you verify a domain. The owner email should have still been sent."
        );
      } else {
        console.error("Error sending user email:", userEmailResult.error);
      }
      // We don't fail the whole request if user email fails, but it's good to note.
    }

    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
