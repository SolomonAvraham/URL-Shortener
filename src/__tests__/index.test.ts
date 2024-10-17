import express from "express";
import * as http from "http";
import { AddressInfo } from "net";
import app from "../index"; // Ensure this properly imports your Express app
import request from "supertest";
import mongoose from "mongoose";
import { uri } from "../database/index"; // Make sure URI is correctly exported

let server: http.Server;

async function connectDB() {
  try {
    await mongoose.connect(uri as string);
    console.log("Database connected");
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw error; // Rethrow to handle it in beforeAll
  }
}

async function disconnectDB() {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected");
  } catch (error) {
    console.error("Failed to disconnect database:", error);
    throw error; // Rethrow to ensure visibility of failure
  }
}

beforeAll(async () => {
  await connectDB();
  server = app.listen(0); // Listen on a random available port
  
});

afterAll(async () => {
  if (server && server.listening) {
    server.close();
  }
  await disconnectDB();
});

test("Basic API endpoint test", async () => {
  // Ensure the server is ready before making requests
  const address = server.address() as AddressInfo;
  const url = `http://[::1]:${address.port}`; // Constructing URL from dynamic address
  const response = await request(url).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toContain("Welcome to the URL shortener API");
});
