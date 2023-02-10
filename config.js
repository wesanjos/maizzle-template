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

module.exports = {
	prettify: true,
	build: {
		browsersync: {
			directory: true,
			notify: false,
			open: false,
			port: 3000,
			ui: { port: 3001 },
			watch: ["src/**/*.*", "tailwind.config.js"],
		},
		templates: {
			source: (config) => {
				return ["src/projects"];
			},
			destination: {
				path: "public/projects",
				extension: "html",
			},
		},
		tailwind: {
			css: "src/css/tailwind.css",
			config: "tailwind.config.js",
		},
	},
	inlineCSS: true,
	removeUnusedCSS: true,
};
