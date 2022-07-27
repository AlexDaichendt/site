import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGFM from 'remark-gfm';

const config = defineConfig({
	layout: {
		blog: './src/layouts/blog.svelte',
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [remarkGFM],
	rehypePlugins: [],
});

export default config;
