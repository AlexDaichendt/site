import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGFM from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineConfig({
	layout: {
		blog: './src/layouts/blog.svelte',
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [remarkGFM, remarkEmoji],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
});

export default config;
