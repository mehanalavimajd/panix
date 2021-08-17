# Panix.js

![](https://img.shields.io/codefactor/grade/github/mehanalavimajd/panix?label=Code%20Quality) ![npm](https://img.shields.io/npm/dw/panix) ![GitHub file size in bytes](https://img.shields.io/github/size/mehanalavimajd/panix/dist/panix.min.js?label=minified%20sized) ![](https://img.shields.io/depfu/mehanalavimajd/panix) ![](https://img.shields.io/github/last-commit/mehanalavimajd/panix)

Panix is a tiny weight Virtual Dom library . <br>
Today's Virtual Doms have easy syntax but they are heavy , **very heavy** . <br>
Panix goal is to be a fast and tiny Virtual Dom .

## Installation

you can use CDNs like unpkg or jsdelivr

jsdelivr (minified version):

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/panix@version/dist/panix.min.js"></script>
```

jsdelivr (normal version):

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/panix@version/dist/panix.js"></script>
```

unpkg (minified version):

```html
<script type="module" src="https://unpkg.com/panix@version/dist/panix.min.js"></script>
```

unpkg (normal version):

```html
<script type="module" src="https://unpkg.com/panix@version/dist/panix.js"></script>
```
Or if you want to use npm use:
```
npm i panix
```
but do not forget to add a importmap like this:
```html
<script type="importmap">
{
  "imports": {
    "panix": "./node_modules/panix/dist/panix.js"
  }
}
</script>
```
and simply
```js
import * as panix from "panix"
```

**Note** : if you are using CDNs, replace version with version that you want
**Note** : always add `type="module` to your script when you are importing
## Hello World

let's make a simple example in panix :

```js
let item = mount(node("h1", { id: "hello" }, ""), document.body);
update(node("h1", { id: "hello" }, "hello world"), item);
```

Now You have made your first panix project

### License

See license in [LICENSE](LICENSE) file
