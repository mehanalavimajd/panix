import { update, createElement } from "../../src/index.js";

describe("Update works", () => {
  let old, el;
  beforeEach(() => {
    old = document.createElement("h1");
    old.id = "hello";
    old.textContent = "Hello";
  });
  it("Textcontent is ok", () => {
    let el = update(
      { tag: "h1", props: { id: "good" }, children: "Goodbye" },
      old
    );
    expect(el.textContent).toEqual("Goodbye");
  });
  it("Props is ok", () => {
    let el = update(
      { tag: "h1", props: { id: "good", class: "bad" }, children: "Goodbye" },
      old
    );
    expect(el.className).toEqual("bad");
  });
  it("Tagname is ok", () => {
    let el = update(
      { tag: "h2", props: { id: "good", class: "bad" }, children: "Goodbye" },
      old
    );
    expect(el.tagName).toEqual("H2");
  });
});
