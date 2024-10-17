import { Request, Response } from "express";
import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";

 
export const triggerBackup = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dbUri = process.env.MONGO_URI;
  const backupPath = path.join(__dirname, "backup"); // Adjust the path as needed

  // Ensure the backup directory exists
  fs.mkdir(backupPath, { recursive: true }, (err) => {
    if (err) {
      console.error("Failed to create backup directory:", err);
      return res
        .status(500)
        .json({
          error: "Failed to create backup directory",
          message: err.message,
        });
    }

    // Constructing the mongodump command
    const command = `mongodump --uri="${dbUri}" --gzip --archive=${backupPath}/\$(date +%Y-%m-%d_%H-%M-%S).gz`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Backup error:", error);
        return res
          .status(500)
          .json({ error: "Failed to trigger backup", message: error.message });
      }
      if (stderr) {
        console.error("Backup stderr:", stderr);
        return res
          .status(500)
          .json({ error: "Backup process reported an error", message: stderr });
      }
      console.log("Backup successful:", stdout);
      res
        .status(200)
        .json({ message: "Backup triggered successfully", details: stdout });
    });
  });
};
