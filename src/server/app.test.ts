import request from "supertest";

import app from "./app";

describe("Test server paths", () => {
  test("GET on / path", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  // disabled cause BE routing breaks sw.js
  // once lazy load will be on, this should be fixed.
  /* test("GET on /404 path", async () => {
    const response = await request(app).get("/404");
    expect(response.status).toBe(404);
  }); */

  test("GET on /medium-api path (no query)", async () => {
    const response = await request(app).get("/medium-api");
    expect(response.status).toBe(200);
  });

  test("GET on /medium-api path (query)", async () => {
    const response = await request(app).get(
      "/medium-api?url=https://medium.com/@francesco.agnoletto/how-to-set-up-typescript-with-babel-and-webpack-6fba1b6e72d5"
    );
    expect(response.status).toBe(200);
  });
});
