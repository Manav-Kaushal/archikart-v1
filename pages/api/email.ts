// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  status: string;
  message?: string;
  messageId?: string;
};

// eslint-disable-next-line require-jsdoc
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    console.log({ name, email, subject, message });

    if (!name || !email || !subject || !message) {
      return res
        .status(422)
        .json({ status: "Failed", message: "Invalid input" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      const emailToSend = await transporter.sendMail({
        from: email,
        to: process.env.RECEIVER_EMAIL,
        subject: `Contact form submission from ${name}`,
        html: `<p>You have a new contact form submission</p>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Subject: </strong> ${subject} </p>
      <p><strong>Message: </strong> ${message} </p>`,
      });

      res.status(200).json({
        status: "Ok",
        message: "Thank you for getting in touch!",
        messageId: emailToSend.messageId,
      });
    } catch (err: any) {
      console.error(err);
      res
        .status(err.responseCode)
        .json({ status: "Failed", message: err?.response });
    }
  } else {
    res
      .status(500)
      .json({ status: "Failed", message: `${req.method} not allowed!` });
  }
}
