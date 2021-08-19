# Update function
Now it's time to face with virtual DOM . Update is the panix function for Editing the elements . It gets to arguments that:

1. new node 
2. old element that is variable that it's value is a mount function
## Syntax
```js
update(newnode,oldel)
```
## Example
```js
let el = mount(node("h1",{},"hello world"),document.body)
update(node('h1',{},"goodbye world"),el)
```
**note** : in here that new h1 that contains "goodbye world" parent is again `document.body`
## How it works ?
If you are interested that how to does update works , you can look at this flowchart :
![flowchart](https://github.com/blob/dev/docs/img/flowchart.png)
