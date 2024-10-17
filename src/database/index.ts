import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export const uri =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_MONGO_URI
    : process.env.DEV_MONGO_URI;

const connection = async () => {
  await mongoose.connect(uri as string, {
 
  });
};

connection()
  .then(() => {
    console.log("Connection succeed");
  })
  .catch((err) => console.error("Connection failed", err.message));

export default connection;



// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri as string);
//     console.log("Database connected successfully");
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       console.error("Database connection failed:", err.message);
//     } else {
//       console.error("An unexpected error occurred during database connection");
//     }
//   }
// };

// export default connectDB;
