# Panix.js
![panix js](https://user-images.githubusercontent.com/74927578/130037083-3b841304-4108-4452-8ee5-dd35570d210c.gif)

![](https://img.shields.io/codefactor/grade/github/mehanalavimajd/panix?label=Code%20Quality) ![npm](https://img.shields.io/npm/dw/panix) ![GitHub file size in bytes](https://img.shields.io/github/size/mehanalavimajd/panix/dist/panix.es.min.js) ![](https://img.shields.io/depfu/mehanalavimajd/panix) ![](https://img.shields.io/github/last-commit/mehanalavimajd/panix)

Panix is a tiny weight Virtual Dom library . <br>
Today's Virtual Doms have easy syntax but they are heavy , **very heavy** . <br>
Panix goal is to be a fast and tiny Virtual Dom .

## Installation

you can use CDNs like unpkg :
```html
<!-- unpkg (minified version): -->
<script type="module" src="https://unpkg.com/panix@version/dist/panix.min.es.js"></script>
<!-- unpkg (normal version): -->
<script type="module" src="https://unpkg.com/panix@version/dist/panix.es.js"></script>
```

Or if you want to use npm :
```
npm i panix
```
but do not forget to add a importmap like this:
```html
<script type="importmap">
{
  "imports": {
    "panix": "./node_modules/panix/dist/panix.es.js"
  }
}
</script>
```
and simply
```js
import * as panix from "panix"
```

**Note** : if you are using CDNs, replace version with version that you want <br>
**Note** : always add `type="module"` to your script when you are importing
## Hello World

let's make a simple example in panix :

```js
let item = mount(node("h1", { id: "hello" }, ""), document.body);
update(node("h1", { id: "hello" }, "hello world"), item);
```

Now You have made your first panix project.

#### Thank you

Thanks to all of the people who starred panix :

[![Stargazers repo roster for @mehanalavimajd/panix](https://reporoster.com/stars/notext/mehanalavimajd/panix)](https://github.com/mehanalavimajd/panix/stargazers)


### License

See license in [LICENSE](LICENSE) file
