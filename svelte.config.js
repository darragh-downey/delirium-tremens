import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: '/critical-infrastructure'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s for book pages
				if (path.includes('/critical-infrastructure/book/')) {
					console.warn(`Warning: ${path} not found`);
					return;
				}
				throw new Error(message);
			},
			handleMissingId: 'ignore',
			entries: [
				'/critical-infrastructure/book/*',
				'/critical-infrastructure/book/authors'
			]
		}
	},

	extensions: ['.svelte', '.svx', '.md'],

	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) return;
		handler(warning);
	}
};

export default config;
