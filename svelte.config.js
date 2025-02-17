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
				// Ignore 404s
				if (message.includes('Not found')) return;
				throw new Error(message);
			},
			handleMissingId: 'ignore'
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
