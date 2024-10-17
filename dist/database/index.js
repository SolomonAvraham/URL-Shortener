"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    }
    catch (err) {
        if (err instanceof Error) {
            console.error("Database connection failed:", err.message);
        }
        else {
            console.error("An unexpected error occurred during database connection");
        }
    }
};
exports.default = connectDB;
