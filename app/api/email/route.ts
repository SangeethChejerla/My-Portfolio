import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  // **Security:** Never store email credentials directly in the code. Use environment variables instead.
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your actual service if different
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}