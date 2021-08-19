# addEvent function
This function will make events for elements.
it get 3 argument:

1. The element
2. event name
3. callback function
## Syntax
```js
addEvent(el,event,func)
```
## example
```js
let element = mount(node("h1",null , "hello"),document.body)
addEvent(element,"click",()=>{
    console.log("clicked")
})
```
The event can have `on` before name of event:
```js
let element = mount(node("h1",null , "hello"),document.body)
addEvent(element,"onclick",()=>{
    console.log("clicked")
})
```
The event can be uppercase or anything else
```js
let element = mount(node("h1",null , "hello"),document.body)
addEvent(element,"cLiCK",()=>{
    console.log("clicked")
})
```
