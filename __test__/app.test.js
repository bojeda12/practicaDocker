const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("Debe responder con Hola Docker!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hola Docker!");
  });
});