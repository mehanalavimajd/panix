# Panix.js
![](https://img.shields.io/codefactor/grade/github/mehanalavimajd/panix?label=Code%20Quality) ![GitHub file size in bytes](https://img.shields.io/github/size/mehanalavimajd/panix/dist/panix.min.js?label=minified%20sized) ![](https://img.shields.io/depfu/mehanalavimajd/panix) ![](https://img.shields.io/github/last-commit/mehanalavimajd/panix)

Panix is a tiny weight Virtual Dom library . <br>
Today's Virtual Doms have easy syntax but they are heavy , **very heavy** . <br>
Panix goal is to be a fast and tiny Virtual Dom .

## Hello World

let's make a simple example in panix :

```js
import { node, mount, update } from "panix";
let item = mount(node("h1", { id: "hello" }, ""), document.body);
update(node("h1", { id: "hello" }, "hello world"), item);
```

Now You have made your first panix project

### License

See license in LICENSE file
