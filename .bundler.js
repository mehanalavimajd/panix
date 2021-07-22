const fs = require("fs")
let mount = fs.readFileSync("./src/mount/mount.js").toString()
let unmount = fs.readFileSync("./src/unmount/unmount.js").toString()
let node = fs.readFileSync("./src/node/node.js").toString()
let update = fs.readFileSync("./src/update/update.js").toString()

if (!fs.existsSync("./dist/panix.js")) {
    fs.writeFileSync("./dist/panix.js","")
}
fs.writeFileSync("./dist/panix.js",mount+"\n"+unmount+"\n"+node+"\n"+update)