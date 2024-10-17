import { Router } from "express";
import { createShortUrl, redirectUrl } from "../controllers/urlController";

const router = Router();

router.post("/create", createShortUrl);
router.get("/:shortUrl", redirectUrl);

export default router;
