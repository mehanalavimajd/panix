# node function 
node function is function that gets 3 arguments:

| argument name | argument type |
|---------------|---------------|
| tag name      | string        |
| prop (attributes) | object or nul |
| children      | string or array |


and it would return :
```js
{
    tag:tag,
    props:props,
    children:children
}
```
### Syntax
```js
node(tag , props , children)
```
#### isNode function
if you want to detect that is an object a panix node , you an use isNode function:
```js
console.log(isNode(node("h1",null,"hello"))) // true
console.log(isNode({a:"hello"})) // false
```
What's next
============

[mount function](mount.md)
