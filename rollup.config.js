export default {
  input: "./src/index.js",
  output: [
    {
      format: "es",
      file: "dist/panix.es.js",
    },
    {
      format: "es",
      file: "dist/panix.es.min.js",
    },
    {
      format: "umd",
      file: "dist/panix.umd.js",
      name: "panix",
    },
    {
      format: "umd",
      file: "dist/panix.umd.min.js",
      name: "panix",
    },
    {
      format: "cjs",
      file: "dist/panix.cjs.js",
      name: "panix",
    },
    {
      format: "cjs",
      file: "dist/panix.cjs.min.js",
      name: "panix",
    },
  ],
};
