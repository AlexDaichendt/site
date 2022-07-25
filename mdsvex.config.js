import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	layout: {
		blog: './src/layouts/blog.svelte'
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
