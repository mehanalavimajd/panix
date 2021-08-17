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
    "panix": "./node_modules/panix/dist/panix.js" 
  }
}
</script>
```
and simply
```js
import * as panix from "panix"
```
# Installation via CDN

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

**Note** : if you are using CDNs, replace version with version that you want <br>
**Note** : always add `type="module"` to your script when you are importing