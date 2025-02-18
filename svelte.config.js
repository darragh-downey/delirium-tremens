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
			base: process.env.NODE_ENV === 'production' ? '/book' : ''
		},
		prerender: {
			entries: [
				'*',
				'/',
				'/authors',
				'/01-introduction',
				'/02-gold-trader',
				'/03-siege-engines',
				'/04-fortress-architect',
				'/05-weak-points',
				'/06-inner-keep',
				'/07-moat-drawbridge',
				'/08-reconnaissance',
				'/09-simulated-sieges',
				'/10-reinforcing-walls',
				'/11-gatekeepers-watch',
				'/12-guarding-granary',
				'/13-watchtower-alert',
				'/14-armorers-duty',
				'/15-architects-blueprint',
				'/16-training-garrison',
				'/17-new-age',
				'/18-fortifying-future',
				'/references'
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
