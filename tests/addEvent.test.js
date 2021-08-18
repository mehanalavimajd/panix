import { mount, node, addEvent } from "../dist/panix.js";
import { describe, it, expect } from "./index.js";

describe("addEvent tests", () => {
  it("correct click", () => {
    let a = mount(node("h1", { id: "hello" }, "hello"), document.body);
    addEvent(a, "click", () => {
      a.id = "hi";
    });
    a.click();
    expect(a.id).toBe("hi");
  });
  it("Uppercase click", () => {
    let b = mount(node("h1", { id: "hello1" }, "hello"), document.body);
    addEvent(b, "cLiCk", () => {
      b.id = "hi";
    });
    b.click();
    expect(b.id).toBe("hi");
  });
  it("on prefix click", () => {
    let c = mount(node("h1", { id: "hello2" }, "hello"), document.body);
    addEvent(c, "onclick", () => {
      c.id = "hi";
    });
    c.click();
    expect(c.id).toBe("hi");
  });
});
