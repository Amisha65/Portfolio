import nodemailer from "nodemailer";

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const createTransporter = () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
  } = process.env;
  const normalizedPassword = SMTP_PASS?.replace(/\s+/g, "");

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !normalizedPassword) {
    throw new Error("SMTP configuration is incomplete.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST.trim(),
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER.trim(),
      pass: normalizedPassword,
    },
  });
};

export const sendContactNotification = async (contactMessage) => {
  const { CONTACT_RECEIVER_EMAIL, SMTP_FROM_EMAIL, SMTP_USER } = process.env;

  if (!CONTACT_RECEIVER_EMAIL) {
    throw new Error("CONTACT_RECEIVER_EMAIL is missing from the environment variables.");
  }

  const transporter = createTransporter();
  const safeMessage = escapeHtml(contactMessage.message).replace(/\n/g, "<br />");

  await transporter.sendMail({
    from: SMTP_FROM_EMAIL || SMTP_USER,
    to: CONTACT_RECEIVER_EMAIL,
    replyTo: contactMessage.email,
    subject: `New portfolio contact from ${contactMessage.firstName} ${contactMessage.lastName}`,
    text: [
      `Name: ${contactMessage.firstName} ${contactMessage.lastName}`,
      `Email: ${contactMessage.email}`,
      `Phone: ${contactMessage.phone}`,
      "",
      "Message:",
      contactMessage.message,
    ].join("\n"),
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(contactMessage.firstName)} ${escapeHtml(contactMessage.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(contactMessage.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(contactMessage.phone)}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
  });
};
