import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGFM from 'remark-gfm';
import remarkEmoji from 'remark-emoji';

const config = defineConfig({
	layout: {
		blog: './src/layouts/blog.svelte',
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [remarkGFM, remarkEmoji],
	rehypePlugins: [],
});

export default config;
