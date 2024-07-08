import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

const transportOptions: SMTPTransport.Options = {
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || "465"),
  secure: true,
  auth: {
    user: adminEmail,
    pass,
  },
};

export const transporter = nodemailer.createTransport(transportOptions);

export const mailOptions = {
  from: adminEmail,
  to: adminEmail,
};
