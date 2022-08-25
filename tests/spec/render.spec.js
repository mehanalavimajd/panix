import { render, node, createElement,update } from "../../src/index.js";

describe("Render Tests", () => {
  it("Render is ok", () => {
    render(createElement(node("h1", { id: "hello" }, "hello")), document.body);
    expect(document.getElementById("hello").textContent).toEqual("hello");
  });
});
// let timer = 0
// let el = createElement(node("p",{id:"time"},"hello world"))
// render(el, document.body);
// setInterval(() => {
//   timer++;
//   document.body.removeChild(el)
//   let newNode = node("p",null,`${timer}`)
//   el =update(newNode,el)
//   render(el,document.body)
// }, 1000);

