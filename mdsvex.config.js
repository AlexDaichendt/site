import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGFM from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkFootnotes from 'remark-footnotes';

const config = defineConfig({
	layout: {
		blog: './src/lib/layouts/blog.svelte',
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [remarkGFM, remarkEmoji, remarkFootnotes],
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behaviour: 'append' }]],
});

export default config;
