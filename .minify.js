const minify = require("uglify-js");
const fs = require("fs");
const code = fs.readFileSync("./dist/panix.js").toString();
let result = minify.minify(code);
fs.writeFileSync("./dist/panix.min.js", result.code);
