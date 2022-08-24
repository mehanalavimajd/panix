import { node } from "../../dist/panix.es.js";
describe("Node function works", () => {
  let mynode;
  beforeEach(() => {
    mynode = node("h1", { id: "hello" }, "Hello world");
  });
  it("Tag is correct", () => {
    expect(mynode.tag).toBe("h1");
  });
  it("Props is correct", () => {
    expect(mynode.props).toEqual(
      jasmine.objectContaining({
        id: "hello",
      })
    );
  });
  it("Children is correct", () => {
    expect(mynode.children).toEqual("Hello world");
  });
});
