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
    let a = mount(
      node("h1", { id: "name3" }, [node("p", {}, "hello")]),
      document.body
    );
    expect(a.children[0].tagName).toBe("P");
  });
  // test 4
  it("null as props", () => {
    let a = mount(node("h1", null, ["hello"]), document.body);
    expect(a.attributes).toEqual({});
  });
  // test 5
  it("two strings", () => {
    let a = mount(node("h1", null, ["hello", "world"]), document.body);
    expect(a.textContent).toBe("helloworld");
  });
  // test 6
  it("1 node and 1 string", () => {
    let a = mount(
      node("h1", null, ["hello", node("h1", null, "hello")]),
      document.body
    );
    expect(a.textContent).toBe("hellohello");
  });
});
