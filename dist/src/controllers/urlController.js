"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectUrl = exports.createShortUrl = void 0;
const urlModel_1 = __importDefault(require("../models/urlModel"));
const urlShortener_1 = require("../utils/urlShortener");
const createShortUrl = async (req, res) => {
    try {
        let { fullUrl } = req.body;
        if (!/^https?:\/\//i.test(fullUrl)) {
            fullUrl = `http://${fullUrl}`;
        }
        const shortUrl = (0, urlShortener_1.encode)(new Date().getTime()); // For example, using a timestamp
        const existingUrl = await urlModel_1.default.findOne({ fullUrl }).lean();
        if (existingUrl) {
            console.log("🚀 ~ Existing shortUrl found:", existingUrl.shortUrl);
            res.json({ shortUrl: existingUrl.shortUrl });
            return;
        }
        const newUrl = new urlModel_1.default({ fullUrl, shortUrl });
        await newUrl.save();
        console.log("🚀 ~ New URL created:", newUrl);
        res.json({ shortUrl: newUrl.shortUrl });
    }
    catch (err) {
        console.error("Error in createShortUrl:", err);
        res.status(500).send(err instanceof Error ? err.message : "Server Error");
    }
};
exports.createShortUrl = createShortUrl;
const redirectUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const url = await urlModel_1.default.findOne({ shortUrl });
        if (url) {
            res.redirect(url.fullUrl.includes("://") ? url.fullUrl : `http://${url.fullUrl}`);
        }
        else {
            res.status(404).send("URL not found");
        }
    }
    catch (err) {
        console.error("Error during redirection:", err);
        res.status(500).send(err instanceof Error ? err.message : "Server Error");
    }
};
exports.redirectUrl = redirectUrl;
