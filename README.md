# Panix.js
![panix js](https://user-images.githubusercontent.com/74927578/130037083-3b841304-4108-4452-8ee5-dd35570d210c.gif)

![](https://img.shields.io/codefactor/grade/github/mehanalavimajd/panix?label=Code%20Quality) ![npm](https://img.shields.io/npm/dw/panix) ![GitHub file size in bytes](https://img.shields.io/github/size/mehanalavimajd/panix/dist/panix.es.min.js) ![](https://img.shields.io/depfu/mehanalavimajd/panix) ![](https://img.shields.io/github/last-commit/mehanalavimajd/panix)

Panix is a tiny weight Virtual Dom library . <br>
Today's Virtual Doms have easy syntax but they are heavy , **very heavy** . <br>
Panix is one of the most lightweight (~1kb) virtual DOM implementations, and is a learning resource more than a tool you should actually use in production.

## Installation
Or if you want to use npm :
```
npm i panix
```
and simply
```js
import {node, createElement, update} from "panix"
```
**Note** : always add `type="module"` to your script when you are importing
## Hello World

let's make a simple example in panix :
```js
let el = createElement(node("h1", { id: "hello" },"Hello World"));
render(el, document.body); // render the element to the body
let newNode= node("h1", { id: "hello" },"Bye World");
let el = update(el, newNode); // update the element
render(el, document.body) // re-render
```
## Timer
```js

let timer = 0
let el = createElement(node("p",{id:"time"},"hello world"))
render(el, document.body);
setInterval(() => {
  timer++;
  document.body.removeChild(el)
  let newNode = node("p",{id:"time"},`${timer}`)
   el =update(newNode,el)
   render(el,document.body)
}, 1000);
```

#### Thank you

Thanks to all of the people who starred panix :

[![Stargazers repo roster for @mehanalavimajd/panix](https://reporoster.com/stars/notext/mehanalavimajd/panix)](https://github.com/mehanalavimajd/panix/stargazers)


### License

See license in [LICENSE](LICENSE) file
