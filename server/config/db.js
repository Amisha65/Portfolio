import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from the environment variables.");
  }

  await mongoose.connect(MONGODB_URI.trim(), {
    serverSelectionTimeoutMS: 10000,
  });
  isConnected = true;
};
