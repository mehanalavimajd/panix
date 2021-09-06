let fs = require("fs");
const uglify = require("uglify-js");

function minify(filein, fileout) {
  fs.writeFileSync(
    fileout,
    uglify.minify(fs.readFileSync(filein).toString()).code
  );
}
minify("./dist/panix.cjs.js", "./dist/panix.cjs.min.js");
minify("./dist/panix.es.js", "./dist/panix.es.min.js");
minify("./dist/panix.umd.js", "./dist/panix.umd.min.js");
