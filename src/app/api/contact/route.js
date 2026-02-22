// ./src/app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // nastavíš v Vercelu
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tvuj@email.cz", // kam se mají posílat zprávy
      subject: "Nová zpráva z webu",
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}