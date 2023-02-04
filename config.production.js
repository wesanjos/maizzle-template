/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

const path = require("path");

module.exports = {
	build: {
		templates: {
			source: (config) => {
				return ["src/projects"];
			},
			destination: {
				path: "dist/projects",
				extension: "html",
			},
		},
	},
	baseURL: {
		url: "http://frontend.lionhosts.net.br/newsletters/wesanjos/maizzle/",
		tags: ["img"],
		inlineCss: true,
	},
	inlineCSS: true,
	removeUnusedCSS: true,
};
