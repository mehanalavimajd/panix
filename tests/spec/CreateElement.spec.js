import { createElement } from "../../src/index.js";

describe("createElement works with single child", () => {
  let original, made;
  beforeEach(() => {
    original = document.createElement("h1");
    original.textContent = "Hello world";
    original.id = "hello";
    made = createElement({
      tag: "h1",
      props: { id: "hello" },
      children: "Hello world",
    });
  });
  it("TextContent is same", () => {
    expect(original.textContent).toEqual(made.textContent);
  });
  it("Tagname is same", () => {
    expect(original.tagName).toEqual(made.tagName);
  });
  it("props is same", () => {
    expect(original.attributes).toEqual(made.attributes);
  });
});

describe("createElement works with multiple children", () => {
  let old, el;
  beforeEach(() => {
    old = document.createElement("div");
    old.innerHTML = "<h1>hello</h1>";
    old.id = "hello";
    el = createElement({
      tag: "div",
      props: { id: "hello" },
      children: [{ tag: "h1", props: null, children: "hello" }],
    });
  });
  it("TextContent is same", () => {
    expect(old.innerHTML).toEqual(el.innerHTML);
  });
  it("Tagname is same", () => {
    expect(old.tagName).toEqual(el.tagName);
  });
  it("props is same", () => {
    expect(old.attributes).toEqual(el.attributes);
  });
});
