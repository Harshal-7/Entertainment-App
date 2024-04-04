import mongoose from "mongoose";

export const connectDB = async function () {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URL + "/Entertainment-App"
    );

    console.log(
      "Database connection established on " + connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Database connection error: " + error.message);
    process.exit(1);
  }
};
