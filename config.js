/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

const path = require("path");

module.exports = {
  build: {
    templates: {
      source: path.resolve(__dirname + "/src/projects"),
      destination: {
        path: "public",
      },
      assets: {
        source: path.resolve(
          __dirname + "/src/projects/**/img/*.{jpg,png,gif}"
        ),
        destination: "images",
      },
    },
  },
}
