"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactUsSendEmail = async (contactUsSenderData: any) => {
  try {
    const resendEmail = await resend.emails.send({
      from:
        contactUsSenderData.name +
        " " +
        "<" +
        "carestaffwebsite@resend.dev" +
        ">",
      to: ["gadiazajoseph18@gmail.com"],
      subject: contactUsSenderData.subject,
      reply_to: contactUsSenderData.email,
      // text: contactUsSenderData.message,
      react: React.createElement(ContactFormEmail, {
        name: contactUsSenderData.name as string,
        email: contactUsSenderData.email as string,
        contactNumber: contactUsSenderData.contactNumber as string,
        message: contactUsSenderData.message,
        isCheck: contactUsSenderData.isCheck as boolean,
      }),
    });

    if (resendEmail) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
