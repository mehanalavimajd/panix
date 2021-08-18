# Unmount function
This function will do the opposite work of mount function
it get 1 argument :
1- an element that is already in DOM
## Syntax
```js
unmount(element)
```
## example
```js
let element = mount(node("h1",null , "hello"),document.body)
unmount(element)
```