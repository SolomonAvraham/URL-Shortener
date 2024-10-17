import request from "supertest";
import app from "../index";

describe("URL Shortener API Tests", () => {
  it("should create a new short URL", async () => {
    const res = await request(app)
      .post("/create")
      .send({ fullUrl: "https://example.com" })
      .expect(200);

    expect(res.body.shortUrl).toBeDefined();
    expect(res.body.shortUrl).not.toBeNull();
  });

  it("should redirect to the full URL", async () => {
    const resCreation = await request(app)
      .post("/create")
      .send({ fullUrl: "https://example.com" });

    const resRedirect = await request(app)
      .get(`/${resCreation.body.shortUrl}`)
      .expect(302); // Status code for redirection

    expect(resRedirect.headers.location).toBe("https://example.com");
  });
});
