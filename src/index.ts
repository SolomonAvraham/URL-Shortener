import express from "express";
import bodyParser from "body-parser";
import urlRoutes from "./routes/urlRoutes";
import backupRoutes from "./routes/backupRoutes";
import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import mongoDB from "./database/index";

const app = express();
const PORT: number = parseInt(process.env.PORT || "8080", 10);

app.use(bodyParser.json());
app.use(urlRoutes);
app.use("/api", backupRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the URL shortener API");
});

async function startServer() {
  try {
    await mongoDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

startServer();

export default app;
