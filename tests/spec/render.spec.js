import {render,node} from "../../src/index.js"

describe("Render Tests", () => {
    it("Render is ok",()=>{
        render(node("h1",{id:'hello'},"hello"),document.body)
        expect(document.getElementById("hello").textContent).toEqual("hello")
    })
});