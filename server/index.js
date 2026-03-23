import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { connectToDatabase } from "./config/db.js";
import ContactMessage from "./models/ContactMessage.js";
import { sendContactNotification } from "./services/mailService.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "../dist");

connectToDatabase().catch((error) => {
  console.error("Initial MongoDB connection failed:", error);
});

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || true,
  })
);
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.post("/api/contact", async (request, response) => {
  const { firstName, lastName, email, phone, message } = request.body;

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
});

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get(/^(?!\/api).*/, (_request, response) => {
    response.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
