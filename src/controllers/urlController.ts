import { Request, Response } from "express";
import Url from "../models/urlModel";
import { encode } from "../utils/urlShortener";

export const createShortUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let { fullUrl } = req.body;

    if (!/^https?:\/\//i.test(fullUrl)) {
      fullUrl = `http://${fullUrl}`;
    }

    const shortUrl = encode(new Date().getTime());  

    const existingUrl = await Url.findOne({ fullUrl }).lean();
    if (existingUrl) {
      console.log("🚀 ~ Existing shortUrl found:", existingUrl.shortUrl);
      res.json({ shortUrl: existingUrl.shortUrl });
      return;
    }

    const newUrl = new Url({ fullUrl, shortUrl });
    await newUrl.save();
    console.log("🚀 ~ New URL created:", newUrl);
    res.json({ shortUrl: newUrl.shortUrl });
  } catch (err) {
    console.error("Error in createShortUrl:", err);
    res.status(500).send(err instanceof Error ? err.message : "Server Error");
  }
};

export const redirectUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ shortUrl });

    if (url) {
      res.redirect(
        url.fullUrl.includes("://") ? url.fullUrl : `http://${url.fullUrl}`
      );
    } else {
      res.status(404).send("URL not found");
    }
  } catch (err) {
    console.error("Error during redirection:", err);
    res.status(500).send(err instanceof Error ? err.message : "Server Error");
  }
};
