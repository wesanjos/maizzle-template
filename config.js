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
		browsersync: {
			watch: ["src/projects/**"],
		},
		templates: {
			source: "src/projects",
			destination: {
				path: "build_local",
				extension: "html",
			},
			assets: {
				source: "src/img",
				destination: "img",
			},
		},
	},
	inlineCSS: true,
};
