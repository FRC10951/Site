import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: "404.html",
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		prerender: {
			entries: ["*"],
		},
		paths: {
			base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
		},
	},
};

export default config;
