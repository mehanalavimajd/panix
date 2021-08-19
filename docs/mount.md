# Mount function 
Mount is the panix function for rendering. It takes 2 arguments:

Argument name | Argument type
--- | --- |
node | an object that tag , props and children has already declared in it 
container | html element that is th parent of new element

### Syntax
```js
mount(node , container)
```
### examples
a simple hello world example
```js
mount({tag:"p" , props:null , children:"hello world"},document.body)
```
It this example the object can be replaced with node function
```js
mount(node("p" , null , "hello world"),document.body)
```
You can mount elements in element
```js
mount(node("div" , null , [node("p" , null , "hello world") , node("p" , null , "bye world")]) document.body)
```
you can mix strings and nodes
```js
mount(node("div" , null , ["hello world","bye world"]),document.getElementById("id-in-here"))
```
mount also return the information of the element:
```js
let el =  mount(node("div" , {id:"hello"} , "hello world"),document.getElementById("id-in-here"))
el.id // hello
```
**NOTE**:* mount function would create and insert to DOM in every situation *

What's next
==========

[unmount function](unmount.md)
