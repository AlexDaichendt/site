import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives: (id) => {
				if (id.searchParams.has('default'))
					return new URLSearchParams({
						format: 'avif;webp',
						width: '360;720;1280;1920',
						metadata: '',
					});
				return new URLSearchParams();
			},
		}),
	],
};

export default config;
