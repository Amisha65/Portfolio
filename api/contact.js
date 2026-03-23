import { connectToDatabase } from "../server/config/db.js";
import ContactMessage from "../server/models/ContactMessage.js";
import { sendContactNotification } from "../server/services/mailService.js";

export default async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({
      message: "Method not allowed.",
    });
  }

  const { firstName, lastName, email, phone, message } = request.body || {};

  if (!firstName || !lastName || !email || !phone || !message) {
    return response.status(400).json({
      message: "All fields are required.",
    });
  }

  try {
    await connectToDatabase();

    const savedMessage = await ContactMessage.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    sendContactNotification(savedMessage).catch((error) => {
      console.error("Contact email notification failed:", error);
    });

    return response.status(201).json({
      message: "Message sent successfully.",
      id: savedMessage._id,
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return response.status(500).json({
      message:
        process.env.NODE_ENV === "production"
          ? "Unable to send message right now. Please try again later."
          : error.message || "Unable to send message right now. Please try again later.",
    });
  }
}
