import { createElement } from "../../dist/panix.es.js";

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
