import { Router } from "express";
import { triggerBackup } from "../controllers/backupController";

const router = Router();

router.get("/trigger-backup", triggerBackup);

export default router;
