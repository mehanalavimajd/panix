import { describe, expect, it } from "./index.js";
import { mount, node, styleHtml } from "../dist/panix.js";
let a = mount(node("h1", { id: "hello2" }, "hello"), document.body);
styleHtml({ color: "red" }, a);
describe("styleHtml tests", () => {
  it("correct attr", () => {
    expect(document.getElementById("hello2").style.color).toBe("red");
  });
});
