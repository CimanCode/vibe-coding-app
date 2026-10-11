import { describe, expect, test } from "bun:test";
import { createApp } from "./app";

describe("GET /health", () => {
  test("returns an ok status", async () => {
    const response = await createApp().handle(new Request("http://localhost/health"));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "ok" });
  });
});
