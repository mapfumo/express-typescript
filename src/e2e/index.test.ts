import request from "supertest";
import { createApp } from "../createApp";
import { type Express } from "express-serve-static-core";

describe("GET /api/users", () => {
  let app: ReturnType<typeof createApp>;
  // same as
  // let app: Express;

  beforeAll(() => {
    app = createApp();
  });

  it("should return an array of users when getting /api/users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});
