import { describe, expect, it } from "./index.js";
import { mount } from "../src/mount/mount.js";
import { unmount } from "../src/unmount/unmount.js";
import { node } from "../src/node/node.js";

describe("unmount test", () => {
  //test 1
  it("unmount all", () => {
    let a = mount(node("h1", { id: "main" }, "hello"), document.body);
    unmount(a);
    expect(document.getElementById("main").innerHTML).toBe("");
  });
});
