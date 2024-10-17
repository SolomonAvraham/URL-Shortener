"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const urlController_1 = require("../controllers/urlController");
const router = (0, express_1.Router)();
router.post("/create", urlController_1.createShortUrl);
router.get("/:shortUrl", urlController_1.redirectUrl);
exports.default = router;
