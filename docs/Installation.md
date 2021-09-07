# Installation via npm

if you want to use npm use:
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
# Installation via CDN
you can use CDNs like unpkg :
```html
<!-- unpkg (minified version): -->
<script type="module" src="https://unpkg.com/panix@version/dist/panix.min.es.js"></script>
<!-- unpkg (normal version): -->
<script type="module" src="https://unpkg.com/panix@version/dist/panix.es.js"></script>
```

**Note** : if you are using CDNs, replace version with version that you want <br>
**Note** : always add `type="module"` to your script when you are importing

What's next
===========

[node functiion](node.md)
