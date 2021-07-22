import { describe, expect, it } from "./index.js";
import { node , mount , unmount } from "../dist/panix.js";

describe("unmount test", () => {
  //test 1
  it("unmount all", () => {
    let a = mount(node("h1", { id: "main" }, "hello"), document.body);
    unmount(a);
    expect(document.getElementById("main").innerHTML).toBe("");
  });
});
