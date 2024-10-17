"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe("URL Shortener API Tests", () => {
    it("should create a new short URL", async () => {
        const res = await (0, supertest_1.default)(index_1.default)
            .post("/create")
            .send({ fullUrl: "https://example.com" })
            .expect(200);
        expect(res.body.shortUrl).toBeDefined();
        expect(res.body.shortUrl).not.toBeNull();
    });
    it("should redirect to the full URL", async () => {
        const resCreation = await (0, supertest_1.default)(index_1.default)
            .post("/create")
            .send({ fullUrl: "https://example.com" });
        const resRedirect = await (0, supertest_1.default)(index_1.default)
            .get(`/${resCreation.body.shortUrl}`)
            .expect(302); // Status code for redirection
        expect(resRedirect.headers.location).toBe("https://example.com");
    });
});
