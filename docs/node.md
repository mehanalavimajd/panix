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

What's next
============

[mount function](mount.md)
