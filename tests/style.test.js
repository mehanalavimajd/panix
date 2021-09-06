import { style } from "../dist/panix.es.js";
import { describe, it, expect } from "./index.js";
describe("style tests", () => {
  it("correct array", () => {
    expect(style({ a: "e", b: "t" })).toEqual(["a:e;", "b:t;"]);
  });
});
