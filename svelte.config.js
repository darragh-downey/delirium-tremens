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
			base: process.env.GITHUB_ACTIONS ? '/critical-infra/book' : ''
		},
		prerender: {
			entries: [
				'/book',
				'/book/authors',
				'/book/01-introduction',
				'/book/02-gold-trader',
				'/book/03-siege-engines',
				'/book/04-fortress-architect',
				'/book/05-weak-points',
				'/book/06-inner-keep',
				'/book/07-moat-drawbridge',
				'/book/08-reconnaissance',
				'/book/09-simulated-sieges',
				'/book/10-reinforcing-walls',
				'/book/11-gatekeepers-watch',
				'/book/12-guarding-granary',
				'/book/13-watchtower-alert',
				'/book/14-armorers-duty',
				'/book/15-architects-blueprint',
				'/book/16-training-garrison',
				'/book/17-new-age',
				'/book/18-fortifying-future',
				'/book/references'
			],
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore all 404s during prerendering
				console.warn(`Warning: ${path} not found`);
				return;
			},
			handleMissingId: 'ignore'
		}
	},

	extensions: ['.svelte', '.svx', '.md'],

	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) return;
		handler(warning);
	}
};

export default config;
