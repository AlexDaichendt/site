import adapter from '@sveltejs/adapter-cloudflare';
import { sveltePreprocess } from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import cssNormalizer from 'postcss-normalize';
import { mdsvex } from 'mdsvex';
import mdsvexconfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexconfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({ postcss: { plugins: [autoprefixer, cssNormalizer()] } }),
		mdsvex(mdsvexconfig),
	],

	kit: {
		adapter: adapter(),
		alias: { $components: 'src/lib/components' },
	},
	prerender: {
		default: true,
	},
};

export default config;
