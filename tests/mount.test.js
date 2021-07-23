import { mount, node } from "../dist/panix.js";
import { it, describe, expect } from "./index.js";

describe("mount tests", () => {
  // test 1
  it("correct tag", () => {
    mount(node("h1", { id: "name" }, "hello world"), document.body);
    expect(document.getElementById("name").tagName).toBe("H1");
  });
  // test 2
  it("correct props", () => {
    mount(node("h1", { id: "name2" }, "hello world"), document.body);
    expect(document.getElementById("name2").id).toBe("name2");
  });
  // test 3
  it("correct Children", () => {
    mount(node("h1", { id: "name3" }, [node("p", {}, "hello")]), document.body);
    expect(document.getElementById("name3").children[0].tagName).toBe("P");
  });
});
