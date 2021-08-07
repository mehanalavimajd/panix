let glob = require("glob");
let fs = require("fs");
const uglify = require("uglify-js");

function bundle() {
  glob("./src/**/*.js", (err, files) => {
    if (err) {
      console.log(err);
    }
    fs.writeFileSync("./dist/panix.js", "");
    files.forEach((el) => {
      let context = fs.readFileSync(el).toString();
      fs.appendFileSync("./dist/panix.js", context);
    });
  });
}
function minify() {
  const code = fs.readFileSync("./dist/panix.js").toString();
  let result = uglify.minify(code);
  fs.writeFileSync("./dist/panix.min.js", result.code);
}
bundle();
minify();
