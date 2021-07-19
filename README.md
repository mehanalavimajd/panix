# Panix.js 
Panix is a tiny weight Virtual Dom library .  <br>
Today's Virtual Doms have easy syntax but they are heavy , **very heavy** .<br>
Panix goal is to be a fast and tiny Virtual Dom .

# Installation :
you can install it via npm : <br>
`
npm install panix
`
and then  you can import everything .
**Note** : make sure to add a `type="module"` to the script tag in your html file
## Hello World
let's make a simple example in panix :
```js
import {node , mount , update} from "panix"
let item = mount(node("h1",{id:"hello"},""),document.body)
update(node("h1" , {id:"hello} , "hello world") , item)
```
Now You have made your first panix project 
### License
MIT
