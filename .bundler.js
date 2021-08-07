let glob = require("glob");
let fs = require("fs");

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
bundle();
