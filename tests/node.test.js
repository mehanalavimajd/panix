import { it, describe, expect } from "./index.js";
import { node, isNode } from "../dist/panix.js";
// test1:
describe("Node tests", () => {
  it("It should make correct tag", () => {
    expect(node("div")).toEqual({ tag: "div" });
  });
  // test2:
  it("It should make correct props", () => {
    expect(node("h1", { id: "main" })).toEqual({
      tag: "h1",
      props: { id: "main" },
    });
  });
  // test3:
  it("It should make correct tag", () => {
    expect(node("h1", { id: "main" }, "hello")).toEqual({
      tag: "h1",
      props: { id: "main" },
      children: "hello",
    });
  });
  it("is node ?", () => {
    expect(isNode(node("div", null, "hello"))).toBe(true);
  });
});
