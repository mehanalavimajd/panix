const fs = require("fs");

fs.writeFileSync("./dist/panix.js", "");
fs.readdir("./src/", (err, f) => {
  if (err) console.log(err);
  for (const i in f) {
    let a = fs.readFileSync(`./src/${f[i]}/${f[i]}.js`).toString();
    fs.appendFileSync("./dist/panix.js", a + "\n");
  }
});
