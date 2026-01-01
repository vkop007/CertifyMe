import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendPaymentSuccessEmail({
  to,
  name,
  amount,
  paymentId,
}: {
  to: string;
  name: string;
  amount: number;
  paymentId: string;
}) {
  await transporter.sendMail({
    from: `"CERTIFY" <${process.env.MAIL_USER}>`,
    to,
    subject: "Payment Successful 🎉",
    html: `
      <h2>Hello ${name},</h2>
      <p>Your payment was <b>successful</b>.</p>
      <p><b>Amount:</b> ₹${amount}</p>
      <p><b>Payment ID:</b> ${paymentId}</p>
      <br/>
      <p>Thank you for choosing <b>CERTIFY</b>.</p>
    `,
  });
}
