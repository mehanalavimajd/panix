import { node, mount, update } from "../dist/panix.es.js";
import { it, describe, expect } from "./index.js";
let el = mount(
  node("h1", { id: "hellou" }, "hello"),
  document.getElementById("main")
);
let el2 = mount(
  node("h1", { id: "hello2" }, "hello"),
  document.getElementById("main")
);
let el3 = mount(
  node("h1", { id: "hello3" }, "hello"),
  document.getElementById("main")
);
let el4 = mount(
  node("h1", { id: "hello4" }, "hello"),
  document.getElementById("main")
);

describe("update tests", () => {
  // test 1
  it("correct tag", () => {
    update(node("h3", { id: "hello" }, ""), el);
    expect(document.getElementById("hello").tagName).toBe("H3");
  });
  // test 2
  it("correct prop", () => {
    update(node("h6", { id: "hi" }, ""), el2);
    expect(document.getElementById("hi").id).toBe("hi");
  });
  // test 3
  it("correct string child", () => {
    update(node("h6", { id: "hi2" }, "hello world"), el3);
    expect(document.getElementById("hi2").textContent).toBe("hello world");
  });
  //
  it("correct string child", () => {
    update(node("h6", { id: "hi3" }, [node("h4", {}, "hello")]), el4);
    expect(document.getElementById("hi3").children[0].textContent).toBe(
      "hello"
    );
  });
});
